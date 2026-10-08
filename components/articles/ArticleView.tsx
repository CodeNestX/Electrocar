"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import ArticleDetailFa from "@/components/articles/ArticleDetailFa";
import ArticleDetailEn from "@/components/articles/ArticleDetailEn";
import { useLanguage } from "@/context/LanguageContext";

// Header is shared; only the article body switches by language.
export default function ArticleView({ slug, id }: { slug: string; id: number }) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!id) return;

    // ۱. دریافت آرایه قبلی از localStorage (در صورت وجود)
    const savedIds = localStorage.getItem("visited_articles");
    const visitedList: number[] = savedIds ? JSON.parse(savedIds) : [];

    // ۲. بررسی تکراری نبودن آیدی مقاله
    if (!visitedList.includes(id)) {
      visitedList.push(id);
      // ۳. ذخیره مجدد آرایه بروز شده در localStorage
      localStorage.setItem("visited_articles", JSON.stringify(visitedList));
    }
  }, [id]);

  return (
    <>
      <Header />

      {language === "fa" ? (
        <ArticleDetailFa id={id} slug={slug} />
      ) : (
        <ArticleDetailEn id={id} slug={slug} />
      )}
    </>
  );
}