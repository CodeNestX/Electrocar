"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CommentSection from "@/components/CommentSection";
import { formatToShamsi } from "@/api/converDate";
import type { Article } from "@/types/article";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:46329";

/* ───── Backend shapes ─────
 * GET /articles/slug/:slug              -> { data: Article[] }   (the article is data[0])
 * GET /articles/:slug/blocks/slug       -> { data: Block[] }     (ordered by sort_order)
 *   block.type is one of: heading | paragraph | image | link (video link)
 * GET /articles/category_translation/:id -> { data: Article[] }  (published, with category name)
 */
type Block = {
  id: number;
  type: string;
  text_content: string | null;
  media_id: number | null;
  sort_order: number;
  media_url: string | null;
  media_type: string | null;
  alt_text: string | null;
  caption: string | null;
};

// Media urls are stored as paths ("/public/..."), so they need the API address in front
const assetUrl = (url?: string | null) =>
  !url ? "" : /^https?:\/\//.test(url) ? url : `${API_URL}${url.startsWith("/") ? "" : "/"}${url}`;

async function getJson(path: string) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) throw new Error(String(res.status));

  return res.json();
}

/* ───── Video links ─────
 * A "link" block holds the address of a video (the address comes from the media table,
 * and falls back to text_content). It can be a direct file, YouTube, or Aparat.
 */
function getVideoSource(url: string): { kind: "file" | "iframe" | "link"; src: string } {
  const clean = url.trim();

  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(clean)) {
    return { kind: "file", src: assetUrl(clean) };
  }

  const youtube = clean.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i
  );

  if (youtube) {
    return { kind: "iframe", src: `https://www.youtube.com/embed/${youtube[1]}` };
  }

  const aparat = clean.match(/aparat\.com\/v\/([\w-]+)/i);

  if (aparat) {
    return {
      kind: "iframe",
      src: `https://www.aparat.com/video/video/embed/videohash/${aparat[1]}/vt/frame`,
    };
  }

  return { kind: "link", src: assetUrl(clean) };
}

/* ───── One content block ─────
 * Block types in the database: heading | paragraph | image | link (video link)
 */
function BlockView({ block }: { block: Block }) {
  const type = block.type.toLowerCase();

  if (type === "heading") {
    const text = block.text_content?.trim();

    return text ? (
      <h2 className="pt-4 text-2xl font-extrabold text-white sm:text-3xl">{text}</h2>
    ) : null;
  }

  if (type === "paragraph") {
    const text = block.text_content?.trim();

    if (!text) return null;

    // paragraphs separated by a blank line; single line breaks are kept
    return (
      <>
        {text.split(/\n{2,}/).map((paragraph, i) => (
          <p key={i} className="whitespace-pre-line leading-loose">
            {paragraph}
          </p>
        ))}
      </>
    );
  }

  if (type === "image") {
    if (!block.media_url) return null;

    return (
      <figure className="space-y-2">
        <img
          src={assetUrl(block.media_url)}
          alt={block.alt_text ?? block.caption ?? ""}
          className="w-full rounded-2xl border border-slate-800 object-cover"
          loading="lazy"
        />
        {block.caption && (
          <figcaption className="text-center text-xs text-slate-500">{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  if (type === "link") {
    const url = (block.media_url || block.text_content || "").trim();

    if (!url) return null;

    const video = getVideoSource(url);

    return (
      <figure className="space-y-2">
        {video.kind === "file" && (
          <video
            src={video.src}
            controls
            preload="metadata"
            className="w-full rounded-2xl border border-slate-800"
          />
        )}

        {video.kind === "iframe" && (
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800">
            <iframe
              src={video.src}
              title={block.caption ?? "video"}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}

        {video.kind === "link" && (
          <a
            href={video.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-400 transition hover:bg-emerald-500/20"
          >
            ▶ مشاهده ویدیو
          </a>
        )}

        {block.caption && (
          <figcaption className="text-center text-xs text-slate-500">{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  return null;
}

function Message({ children }: { children: React.ReactNode }) {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-4 pt-[90px] text-center text-slate-400"
    >
      {children}
    </main>
  );
}

// نسخه فارسی صفحه تک‌مقاله.
// نسخه انگلیسی: ArticleDetailEn.tsx (کاملاً جدا)
// If `article` is passed it is used as is; otherwise the article is loaded by `slug`.
export default function ArticleDetailFa({
  article: articleProp,
  slug: slugProp,
}: {
  article?: Article;
  slug?: string;
}) {
  const slug = articleProp?.slug ?? slugProp ?? "";

  const [article, setArticle] = useState<Article | null>(articleProp ?? null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [related, setRelated] = useState<Article[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "notfound" | "error">(
    articleProp ? "ready" : "loading"
  );

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;

    (async () => {
      try {
        const [articleJson, blocksJson] = await Promise.all([
          getJson(`/articles/slug/${encodeURIComponent(slug)}`),
          getJson(`/articles/${encodeURIComponent(slug)}/blocks/slug`).catch(() => ({ data: [] })),
        ]);

        if (cancelled) return;

        const found: Article | undefined = articleJson.data?.[0];

        // draft articles are not shown to visitors
        if (!found || found.status !== "published") {
          setState("notfound");
          return;
        }

        setArticle(found);
        setBlocks(Array.isArray(blocksJson.data) ? blocksJson.data : []);
        setState("ready");

        // Related: other published articles of the same category (this call also gives the category name)
        getJson(`/articles/category_translation/${found.category_translation_id}`)
          .then((json) => {
            if (cancelled) return;

            const list: Article[] = Array.isArray(json.data) ? json.data : [];

            setArticle((current) =>
              current ? { ...current, category: list[0]?.category ?? current.category } : current
            );
            setRelated(list.filter((item) => item.id !== found.id).slice(0, 2));
          })
          .catch(() => {});
      } catch {
        if (!cancelled) setState("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (state === "loading") return <Message>در حال بارگذاری...</Message>;
  if (state === "error") return <Message>ارتباط با سرور برقرار نشد. دوباره تلاش کنید.</Message>;
  if (state === "notfound" || !article) return <Message>مقاله‌ای که دنبالش بودید پیدا نشد.</Message>;

  const rawDate = article.published_at ?? article.created_at;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 px-4 py-12 pt-[90px] text-right text-slate-100 sm:px-6 sm:pt-[100px] lg:px-8"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* هدر و عنوان مقاله */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {article.category && (
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-400">
                {article.category}
              </span>
            )}

            {rawDate && (
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-400">
                📅 {formatToShamsi(String(rawDate).split("T")[0])}
              </span>
            )}

            {article.reading_time_minutes > 0 && (
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-400">
                ⏱️ زمان مطالعه: {article.reading_time_minutes} دقیقه
              </span>
            )}
          </div>

          <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="rounded-l-2xl border-r-4 border-emerald-500 bg-slate-900/40 py-2.5 pr-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              {article.excerpt}
            </p>
          )}
        </header>

        {/* تصویر اصلی مقاله */}
        {article.cover_url && (
          <figure className="overflow-hidden rounded-3xl border border-slate-800/80 shadow-2xl">
            <img
              src={assetUrl(article.cover_url)}
              alt={article.alt_text ?? article.title}
              className="h-64 w-full object-cover sm:h-[400px]"
            />
          </figure>
        )}

        {/* متن مقاله (بلوک‌ها) */}
        {blocks.length > 0 && (
          <article className="space-y-6 rounded-3xl border border-slate-800/50 bg-slate-900/30 p-6 text-base leading-loose text-slate-300 sm:p-8 sm:text-lg">
            {blocks.map((block) => (
              <BlockView key={block.id} block={block} />
            ))}
          </article>
        )}

        {/* مقالات مرتبط */}
        {related.length > 0 && (
          <section className="space-y-4 border-t border-slate-800 pt-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="h-6 w-2 rounded-full bg-emerald-500"></span>
              مقالات مرتبط
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.slug}`}
                  className="block space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-emerald-500/50"
                >
                  <h4 className="line-clamp-1 text-base font-bold text-slate-200">{rel.title}</h4>
                  {rel.excerpt && (
                    <p className="line-clamp-2 text-xs text-slate-400">{rel.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* بخش دیدگاه‌ها */}
        <CommentSection articleSlug={slug} />
      </div>
    </main>
  );
}