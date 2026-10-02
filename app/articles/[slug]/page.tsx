import { articles } from '@/data/articles';
import CommentSection from '@/components/CommentSection';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // پیدا کردن مقاله بر اساس id یا slug
  const article = articles.find(
    (item: any) => item.id === slug || item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const articleData = article as any;

  // گرفتن مقالات مرتبط
  const relatedArticles = articles
    .filter((item: any) => item.id !== article.id && item.slug !== slug)
    .slice(0, 2);

  return (
    <>
      {/* هدر اصلی سایت */}
      <Header />

      <main dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 dir-rtl text-right">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* هدر و عنوان مقاله */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {articleData.category && (
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                  {articleData.category}
                </span>
              )}
              {articleData.date && (
                <span className="text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                  📅 {articleData.date}
                </span>
              )}
              {articleData.readTime && (
                <span className="text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                  ⏱️ زمان مطالعه: {articleData.readTime}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>

            {articleData.excerpt && (
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed border-r-4 border-emerald-500 pr-4 bg-slate-900/40 py-2.5 rounded-l-2xl">
                {articleData.excerpt}
              </p>
            )}
          </header>

          {/* تصویر اصلی مقاله */}
          {articleData.image && (
            <div className="relative w-full h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl">
              <Image
                src={articleData.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* متن مقاله */}
          <article className="prose prose-invert max-w-none text-slate-300 leading-loose text-base sm:text-lg space-y-6 bg-slate-900/30 border border-slate-800/50 p-6 sm:p-8 rounded-3xl">
            {typeof article.content === 'string' ? (
              article.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              article.content
            )}
          </article>

          {/* مقالات مرتبط */}
          {relatedArticles.length > 0 && (
            <section className="pt-8 border-t border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                مقالات مرتبط
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel: any) => (
                  <Link
                    key={rel.id}
                    href={`/articles/${rel.slug || rel.id}`}
                    className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl hover:border-emerald-500/50 transition-all space-y-2 block"
                  >
                    <h4 className="text-base font-bold text-slate-200 line-clamp-1">{rel.title}</h4>
                    {rel.excerpt && (
                      <p className="text-xs text-slate-400 line-clamp-2">{rel.excerpt}</p>
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
    </>
  );
}
