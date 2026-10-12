"use client";

import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";
import ArticleCardEn from "@/components/articles/ArticleCardEn";
import { articles } from "@/data/articles";
import { articlesEn } from "@/data/articlesEn";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    title: "آخرین مقالات",
    description:
      "تازه‌ترین مقالات آموزشی و تخصصی درباره دنیای خودروهای برقی",
    link: "مشاهده همه مقالات",
  },
  en: {
    title: "Latest Articles",
    description:
      "The latest educational and specialist articles about the world of electric cars",
    link: "View all articles",
  },
};

// Newest articles come first in the data files.
export default function ArticlesSection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section className="section-space">

      <div className="site-container">

        <SectionTitle
          title={t.title}
          description={t.description}
          linkText={t.link}
          linkHref="/articles"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {language === "fa"
            ? articles.slice(0, 4).map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))
            : articlesEn.slice(0, 4).map((item) => (
                <ArticleCardEn key={item.id} article={item} />
              ))}

        </div>

      </div>

    </section>
  );
}
