"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCardEn from "@/components/articles/ArticleCardEn";
import { useLanguage } from "@/context/LanguageContext";
import {getArticlesByLanguage} from "@/api/categoryService"

export default function ArticlesPageEn() {
  const { language, dir } = useLanguage();
  const [categories, setCategories] = useState<string[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const catResponse = await getArticlesByLanguage(language);
        const catData = catResponse.data.data || catResponse.data;
        const fetchedCatNames = Array.isArray(catData) 
          ? catData.map((c: any) => c.name || c) 
          : [];

        setCategories(fetchedCatNames);

        if (fetchedCatNames.length > 0) {
          setActiveCategory(fetchedCatNames[0]);
        }

        const artResponse = await axios.get("http://localhost:46329/articles");
        setArticles(artResponse.data);

      } catch (error: any) {
        console.error("Error communicating with server:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredArticles = Array.isArray(articles)
    ? (activeCategory ? articles.filter((article) => article.category === activeCategory) : articles)
    : [];

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
          {activeCategory || "Articles"}
        </h2>
        <span className="text-sm text-gray-400">
          {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
        </span>
      </div>

      {loading ? (
        <div className="py-20 text-center text-gray-400">Loading information from server...</div>
      ) : filteredArticles.length > 0 ? (
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
        </div>
      )}
    </main>
  );
}