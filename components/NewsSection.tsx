"use client";

import SectionTitle from "./SectionTitle";
import NewsCard from "./NewsCard";
import { news } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    title: "آخرین اخبار",
    description:
      "تازه‌ترین اخبار، رویدادها و تحولات دنیای خودروهای برقی",
    link: "مشاهده همه اخبار",
  },
  en: {
    title: "Latest News",
    description:
      "The latest news, events, and developments from the world of electric cars",
    link: "View all news",
  },
};

export default function NewsSection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section className="section-space">

      <div className="site-container">

        <SectionTitle
          title={t.title}
          description={t.description}
          linkText={t.link}
          linkHref="/news"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {news.slice(0, 4).map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
