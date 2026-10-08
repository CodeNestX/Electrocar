"use client";

import Header from "@/components/Header";
import ArticleDetailFa from "@/components/articles/ArticleDetailFa";
import ArticleDetailEn from "@/components/articles/ArticleDetailEn";
import { useLanguage } from "@/context/LanguageContext";

// Header is shared; only the article body switches by language.
export default function ArticleView({ slug }: { slug: string }) {
  const { language } = useLanguage();

  return (
    <>
      <Header />

      {language === "fa" ? (
        <ArticleDetailFa slug={slug} />
      ) : (
        <ArticleDetailEn slug={slug} />
      )}
    </>
  );
}
