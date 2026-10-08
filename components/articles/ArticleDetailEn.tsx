import { articlesEn } from '@/data/articlesEn';
import CommentSectionEn from '@/components/articles/CommentSectionEn';
import Image from 'next/image';
import Link from 'next/link';

// English version of the single-article page content.
// Persian version: ArticleDetailFa.tsx (completely separate).
export default function ArticleDetailEn({ slug ,id }: { slug: string , id:number }) {
  const article = articlesEn.find((item) => item.slug === slug);

  if (!article) return null;

  // Related articles
  const relatedArticles = articlesEn
    .filter((item) => item.id !== article.id)
    .slice(0, 2);

  return (
    <main dir="ltr" className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-left pt-[90px] sm:pt-[100px]">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Article header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
              {article.category}
            </span>
            <span className="text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              📅 {article.date}
            </span>
            <span className="text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              ⏱️ Reading time: {article.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed border-l-4 border-emerald-500 pl-4 bg-slate-900/40 py-2.5 rounded-r-2xl">
            {article.excerpt}
          </p>

          <p className="text-xs text-slate-500">By {article.author}</p>
        </header>

        {/* Main image */}
        <div className="relative w-full h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article body */}
        <article className="prose prose-invert max-w-none text-slate-300 leading-loose text-base sm:text-lg space-y-6 bg-slate-900/30 border border-slate-800/50 p-6 sm:p-8 rounded-3xl">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="pt-8 border-t border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
              Related articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.slug}`}
                  className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl hover:border-emerald-500/50 transition-all space-y-2 block"
                >
                  <h4 className="text-base font-bold text-slate-200 line-clamp-1">{rel.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Comments */}
        <CommentSectionEn articleSlug={slug} />

      </div>
    </main>
  );
}
