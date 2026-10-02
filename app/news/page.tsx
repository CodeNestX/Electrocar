"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

const categories = [
  "همه",
  "اخبار جهان",
  "بررسی خودرو",
  "فناوری",
  "زیرساخت شارژ",
  "آینده خودرو",
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredNews =
    activeCategory === "همه"
      ? news
      : news.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050b11] text-white">
      <Header />

      <main dir="rtl" className="mx-auto min-h-[70vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-semibold text-green-400">
            تازه‌های دنیای خودرو
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            اخبار خودروهای برقی
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            جدیدترین خبرها، بررسی‌ها و تحولات صنعت خودروهای الکتریکی
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
            {activeCategory === "همه" ? "همه اخبار" : activeCategory}
          </h2>
          <span className="text-sm text-gray-400">
            {filteredNews.length} خبر
          </span>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <p className="text-gray-300">
              خبری در این دسته‌بندی وجود ندارد.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("همه")}
              className="mt-5 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-[#050b11] transition hover:bg-cyan-300"
            >
              نمایش همه اخبار
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}