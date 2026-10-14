// import { articles } from '@/data/articles';
import { getArticlesBySlug } from '@/api/services';
import ArticleView from '@/components/articles/ArticleView';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // The slug is the same in Persian and English, so one check covers both.
  const article =await getArticlesBySlug(slug)
  if (!article) {
    notFound();
  }

  return <ArticleView id={article.data.data.id}  slug={slug} article={article} />;
}
