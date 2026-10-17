"use client";

import { useCallback, useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:46329";

// A comment as the backend returns it (GET /articles/:articleId/comments)
interface Comment {
  id: number;
  content: string;
  created_at: string;
  user_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
}

interface CommentSectionProps {
  articleSlug: string;
}

const AUTO_MS = 6000;

const authorOf = (c: Comment) =>
  c.user_name?.trim() ||
  [c.first_name, c.last_name].filter(Boolean).join(" ").trim() ||
  "کاربر";

const dateOf = (value: string) => {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("fa-IR", { year: "numeric", month: "long", day: "numeric" });
};

// Persian comments section (testimonial carousel). English version: components/articles/CommentSectionEn.tsx
export default function CommentSection({ articleSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [articleId, setArticleId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<
    { type: "ok" | "error" | "login"; text: string } | null
  >(null);

  const total = comments.length;
  const current = comments[Math.min(index, Math.max(total - 1, 0))];

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  // Load: slug -> article id (GET /articles/slug/:slug), then its approved comments
  useEffect(() => {
    if (!articleSlug) return;

    let cancelled = false;

    (async () => {
      setLoading(true);

      try {
        const articleRes = await fetch(`${API_URL}/articles/slug/${encodeURIComponent(articleSlug)}`);
        const articleJson = await articleRes.json();
        const id: number | undefined = articleJson?.data?.[0]?.id;

        if (cancelled) return;

        if (!articleRes.ok || !id) {
          setComments([]);
          return;
        }

        setArticleId(id);

        const commentsRes = await fetch(`${API_URL}/articles/${id}/comments`);
        const commentsJson = await commentsRes.json();

        if (cancelled) return;

        setComments(commentsRes.ok && Array.isArray(commentsJson.data) ? commentsJson.data : []);
        setIndex(0);
      } catch {
        if (!cancelled) setComments([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [articleSlug]);

  // Auto-rotate
  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, total, index]);

  // POST /comments  (needs a signed-in user: the cookie is sent with credentials)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    const text = content.trim();

    if (!text) return;

    if (!articleId) {
      return setFeedback({ type: "error", text: "مقاله پیدا نشد. صفحه را دوباره باز کنید." });
    }

    setFeedback(null);
    setSending(true);

    try {
      const res = await fetch(`${API_URL}/comments`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article_id: articleId, content: text }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        // The comment is saved as "pending" and shows up after an admin approves it
        setContent("");
        setFeedback({
          type: "ok",
          text: json?.message || "دیدگاه شما ثبت شد و پس از تایید نمایش داده می‌شود.",
        });
      } else if (res.status === 401 || res.status === 403) {
        setFeedback({ type: "login", text: "برای ثبت دیدگاه ابتدا وارد حساب کاربری خود شوید." });
      } else if (res.status >= 500) {
        setFeedback({ type: "error", text: "مشکلی در سرور رخ داد. بعداً دوباره تلاش کنید." });
      } else {
        setFeedback({ type: "error", text: json?.message || "ثبت دیدگاه ناموفق بود." });
      }
    } catch {
      setFeedback({ type: "error", text: "ارتباط با سرور برقرار نشد. اینترنت را بررسی کنید." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section dir="rtl" className="mt-16 border-t border-slate-800 pt-10 text-right">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-3 rounded-full bg-emerald-500" />
        <h3 className="text-2xl font-bold text-white">
          دیدگاه‌ها{" "}
          <span className="text-lg font-normal text-emerald-400">({total})</span>
        </h3>
      </div>

      {/* Empty / loading state */}
      {(loading || total === 0) && (
        <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center text-sm text-slate-400">
          {loading ? "در حال بارگذاری دیدگاه‌ها..." : "هنوز دیدگاهی ثبت نشده است. اولین نفر باشید!"}
        </div>
      )}

      {/* Testimonial carousel */}
      {!loading && total > 0 && (
      <div
        className="relative mb-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-7 shadow-2xl sm:p-10">
          {/* Big quote mark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="absolute end-6 top-6 h-14 w-14 text-emerald-400/15 sm:h-20 sm:w-20"
            fill="currentColor"
          >
            <path d="M9.6 5C6.5 6.3 4 9 4 13v6h6v-6H7c0-2 1.1-3.6 2.9-4.5L9.6 5Zm10 0c-3.1 1.3-5.6 4-5.6 8v6h6v-6h-3c0-2 1.1-3.6 2.9-4.5L19.6 5Z" />
          </svg>

          <div key={current.id} className="comment-slide relative min-h-[150px]">
            <p className="max-w-3xl text-base leading-9 text-slate-200 sm:text-lg">
              {current.content}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-lg font-bold text-emerald-300">
                {authorOf(current).charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{authorOf(current)}</div>
                <div className="text-xs text-slate-500">{dateOf(current.created_at)}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2" role="tablist" aria-label="دیدگاه‌ها">
              {comments.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`دیدگاه ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-emerald-400" : "w-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Comment form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-sm sm:p-8"
      >
        <h4 className="text-lg font-semibold text-slate-100">ثبت دیدگاه جدید</h4>

        {feedback && (
          <div
            role={feedback.type === "ok" ? "status" : "alert"}
            className={`rounded-2xl border p-4 text-sm ${
              feedback.type === "ok"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}
          >
            {feedback.text}
            {feedback.type === "login" && (
              <>
                {" "}
                <a href="/login" className="font-bold underline">
                  ورود / ثبت‌نام
                </a>
              </>
            )}
          </div>
        )}

        <div>
          <label className="mb-2 block text-xs font-medium text-slate-400">متن دیدگاه</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder="دیدگاه خود را در مورد این مقاله بنویسید..."
            className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="rounded-2xl bg-emerald-500 px-8 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "در حال ارسال..." : "ارسال دیدگاه"}
        </button>
      </form>

      <style>{`
        .comment-slide { animation: commentIn .5s ease both; }
        @keyframes commentIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .comment-slide { animation: none; } }
      `}</style>
    </section>
  );
}