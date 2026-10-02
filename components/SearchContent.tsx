"use client";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { articles } from "@/data/articles";
import { cars } from "@/data/cars";
import { localizeCar } from "@/data/carsI18n";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    badge: "جستجو در ElectroCar",
    title: "نتایج جستجو",
    resultsFor: "نتایج مربوط به:",
    openQuote: "«",
    closeQuote: "»",
    emptyTitle: "عبارت موردنظر را جستجو کنید",
    emptyText:
      "می‌توانید نام خودرو، برند، مقاله یا موضوع موردنظر خود را جستجو کنید.",
    noneTitle: "نتیجه‌ای پیدا نشد",
    noneText: "عبارت دیگری را امتحان کنید.",
    backHome: "بازگشت به خانه",
    cars: "خودروها",
    articles: "مقالات",
    range: "برد حرکتی",
  },
  en: {
    badge: "Search ElectroCar",
    title: "Search results",
    resultsFor: "Results for:",
    openQuote: "“",
    closeQuote: "”",
    emptyTitle: "Search for something",
    emptyText:
      "You can search for a car name, brand, article, or topic.",
    noneTitle: "No results found",
    noneText: "Try a different phrase.",
    backHome: "Back to home",
    cars: "Cars",
    articles: "Articles",
    range: "Driving range",
  },
};

export default function SearchContent({ query }: { query: string }) {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const t = ui[language];

  const normalizedQuery = query.toLowerCase();

  const resultLabel = (count: number) =>
    isFa ? `${count} نتیجه` : `${count} ${count === 1 ? "result" : "results"}`;

  const articleResults = articles.filter((article) =>
    [
      article.title,
      article.excerpt,
      article.category,
      article.author,
      article.content,
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery)
  );

  // Cars are matched against both Persian and English text,
  // so a query in either language finds the car in either mode.
  const carResults = cars
    .filter((car) => {
      const fa = localizeCar(car, "fa");
      const en = localizeCar(car, "en");

      return [
        fa.name,
        fa.brand,
        fa.type,
        fa.description,
        ...fa.features,
        en.type,
        en.description,
        ...en.features,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    })
    .map((car) => localizeCar(car, language));

  const totalResults = articleResults.length + carResults.length;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm text-[#39f77b]">
              {t.badge}
            </span>

            <h1 className="text-3xl font-black sm:text-4xl">
              {t.title}
            </h1>

            {query && (
              <p className="mt-4 text-white/50">
                {t.resultsFor}
                <span className="ms-2 font-bold text-[#39f77b]">
                  {t.openQuote}<bdi>{query}</bdi>{t.closeQuote}
                </span>
              </p>
            )}
          </div>

          {!query ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#39f77b]/10 text-[#39f77b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold">
                {t.emptyTitle}
              </h2>

              <p className="mt-3 text-sm text-white/50">
                {t.emptyText}
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <h2 className="text-2xl font-bold">
                {t.noneTitle}
              </h2>

              <p className="mt-3 text-white/50">
                {t.noneText}
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-full bg-[#39f77b] px-6 py-3 font-bold text-black transition hover:scale-105"
              >
                {t.backHome}
              </Link>
            </div>
          ) : (
            <div className="space-y-14">

              {/* Cars */}
              {carResults.length > 0 && (
                <section>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-black">
                      {t.cars}
                    </h2>

                    <span className="text-sm text-white/40">
                      {resultLabel(carResults.length)}
                    </span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {carResults.map((car) => (
                      <Link
                        key={car.id}
                        href={`/cars/${car.slug}`}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#39f77b]/40"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-black">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                          <div className="absolute bottom-4 start-4">
                            <span className="rounded-full bg-[#39f77b] px-3 py-1 text-xs font-bold text-black">
                              {car.brand}
                            </span>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-xl font-bold transition group-hover:text-[#39f77b]">
                            {car.name}
                          </h3>

                          <p className="mt-2 text-sm text-white/50">
                            {car.description}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-sm text-white/40">
                              {t.range}
                            </span>

                            <span className="font-bold text-[#39f77b]">
                              {car.range}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Articles (content stays Persian, so each card is always RTL) */}
              {articleResults.length > 0 && (
                <section>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-black">
                      {t.articles}
                    </h2>

                    <span className="text-sm text-white/40">
                      {resultLabel(articleResults.length)}
                    </span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {articleResults.map((article) => (
                      <Link
                        key={article.id}
                        href={`/articles/${article.slug}`}
                        dir="rtl"
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#39f77b]/40"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        <div className="p-5">
                          <div className="mb-3 flex items-center gap-3 text-xs text-white/40">
                            <span className="text-[#39f77b]">
                              {article.category}
                            </span>

                            <span>•</span>

                            <span>
                              {article.readingTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold leading-8 transition group-hover:text-[#39f77b]">
                            {article.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/50">
                            {article.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
