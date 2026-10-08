"use client";

import { useState } from "react";
import ArticleCardEn from "@/components/articles/ArticleCardEn";
import { articlesEn, articleCategoriesEn } from "@/data/articlesEn";

// English version of the articles list.
// Persian version: ArticlesPageFa.tsx (completely separate).
export default function ArticlesPageEn() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articlesEn
      : articlesEn.filter((article) => article.category === activeCategory);

  return (
    <main dir="ltr" className="mx-auto min-h-[70vh] max-w-7xl px-4 py-12 text-left sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block text-sm font-semibold text-green-400">
          ElectroCar Knowledge Base
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Electric Car Articles
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
          Guides, tutorials, and expert content about electric vehicle technology
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {articleCategoriesEn.map((category) => {
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
          {activeCategory === "All" ? "All articles" : activeCategory}
        </h2>
        <span className="text-sm text-gray-400">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
        </span>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCardEn key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
          <p className="text-gray-300">
            There are no articles in this category.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="mt-5 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-[#050b11] transition hover:bg-cyan-300"
          >
            Show all articles
          </button>
        </div>
      )}
    </main>
  );
}
