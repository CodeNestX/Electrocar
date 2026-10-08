"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const categories = [
  "همه",
  "آموزش خودرو برقی",
  "باتری",
  "شارژ",
  "فناوری",
  "مقایسه",
  "راهنمای خرید",
  "آینده خودرو",
];

// نسخه فارسی لیست مقالات.
// نسخه انگلیسی: ArticlesPageEn.tsx (کاملاً جدا)
export default function ArticlesPageFa() {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredArticles =
    activeCategory === "همه"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <main dir="rtl" className="mx-auto min-h-[70vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block text-sm font-semibold text-green-400">
          دانشنامه ElectroCar
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          مقالات خودروهای برقی
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
          راهنماها، آموزش‌ها و مطالب تخصصی درباره فناوری خودروهای الکتریکی
        </p>
      </div>

      {/* فیلتر دسته‌بندی‌ها */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                isActive
                  ? "border-green-400 bg-green-400 text-[#050b11] font-bold shadow-lg shadow-cyan-400/20"
                  : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-green-400/60 hover:text-green-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-lg font-bold">
          {activeCategory === "همه" ? "همه مقالات" : activeCategory}
        </h2>
        <span className="text-sm text-gray-400">
          {filteredArticles.length} مقاله
        </span>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
          <p className="text-gray-300">
            مقاله‌ای در این دسته‌بندی وجود ندارد.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("همه")}
            className="mt-5 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-[#050b11] transition hover:bg-cyan-300"
          >
            نمایش همه مقالات
          </button>
        </div>
      )}
    </main>
  );
}
