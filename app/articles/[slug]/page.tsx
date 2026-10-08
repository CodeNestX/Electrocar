import { articles } from '@/data/articles';
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
  const exists = articles.some((item) => item.slug === slug);

  if (!exists) {
    notFound();
  }

  return <ArticleView slug={slug} />;
}
