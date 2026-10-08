"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlesPageFa from "@/components/articles/ArticlesPageFa";
import ArticlesPageEn from "@/components/articles/ArticlesPageEn";
import { useLanguage } from "@/context/LanguageContext";

// Header and Footer are shared; only the page body switches by language.
export default function ArticlesView() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#050b11] text-white">
      <Header />

      <main className="pt-[90px] sm:pt-[100px]">
        {language === "fa" ? <ArticlesPageFa /> : <ArticlesPageEn />}
      </main>

      <Footer />
    </div>
  );
}

