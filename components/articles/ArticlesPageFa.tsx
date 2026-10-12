"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "@/components/ArticleCard";
import { useLanguage } from "@/context/LanguageContext";
import { getArticlesByLanguage, getArticlesByCategoryTranslationId } from "@/api/categoryService";

export default function ArticlesPageFa() {
  const { language, dir } = useLanguage();
  const [categories, setCategories] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ۱. گرفتن دسته‌بندی‌ها بر اساس زبان
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getArticlesByLanguage(language);
        const catData = res.data.data || res.data;
        const fetchedCategories = Array.isArray(catData) ? catData : [];

        setCategories(fetchedCategories);

        if (fetchedCategories.length > 0) {
          setActiveCategory(fetchedCategories[0]);
        }
      } catch (error: any) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error.message);
      }
    };

    fetchCategories();
  }, [language]);

  // ۲. گرفتن مقالات بر اساس دسته‌بندی انتخاب‌شده
  useEffect(() => {
    const fetchArticlesByCategory = async () => {
      if (!activeCategory) return;

      try {
        setLoading(true);
        // ارسال شناسه یا category_id به بک‌اند
        const categoryId = activeCategory.category_id || activeCategory.id;
        const res = await getArticlesByCategoryTranslationId(categoryId);
        const artData = res.data.data || res.data;
        
        setArticles(Array.isArray(artData) ? artData : []);
      } catch (error: any) {
        console.error("خطا در دریافت مقالات دسته‌بندی:", error.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticlesByCategory();
  }, [activeCategory]);

  return (
    <main dir={dir} className="mx-auto min-h-[70vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block text-sm font-semibold text-green-400">
          دانشنامه ElectroCar
        </span>
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          {language === "fa" ? "مقالات خودروهای برقی" : "Electric Car Articles"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
          {language === "fa" 
            ? "راهنماها، آموزش‌ها و مطالب تخصصی درباره فناوری خودروهای الکتریکی" 
            : "Guides, tutorials, and expert content about electric vehicle technology"}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const catId = category.category_id || category.id;
          const activeId = activeCategory?.category_id || activeCategory?.id;
          const isActive = activeId === catId;

          return (
            <button
              key={catId}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                isActive
                  ? "border-green-400 bg-green-400 text-[#050b11] font-bold shadow-lg shadow-cyan-400/20"
                  : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-green-400/60 hover:text-green-300"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-lg font-bold">
          {activeCategory?.name || (language === "fa" ? "مقالات" : "Articles")}
        </h2>
        <span className="text-sm text-gray-400">
          {articles.length} {language === "fa" ? "مقاله" : "articles"}
        </span>
      </div>

      {loading ? (
        <div className="py-20 text-center text-gray-400">
          {language === "fa" ? "در حال بارگذاری اطلاعات از سرور..." : "Loading information from server..."}
        </div>
      ) : articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
          <p className="text-gray-300">
            {language === "fa" ? "مقاله‌ای در این دسته‌بندی وجود ندارد." : "There are no articles in this category."}
          </p>
        </div>
      )}
    </main>
  );
}