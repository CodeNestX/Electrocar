"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import SectionTitle from "@/components/SectionTitle";
import { cars } from "@/data/cars";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    heroTitleA: "دنیای",
    heroHighlight: "خودروهای برقی",
    heroDesc:
      "مشخصات، فناوری‌ها و اطلاعات خودروهای الکتریکی محبوب را در ElectroCar بررسی کنید.",
    sectionTitle: "خودروهای برقی",
    sectionDesc: "مدل‌های منتخب خودروهای الکتریکی",
    brand: "برند",
    carType: "نوع خودرو",
    brands: ["همه برندها", "Tesla", "BYD", "Hyundai", "Kia", "XPeng"],
    types: ["همه", "سدان", "کراس‌اوور"],
    sort: "مرتب‌سازی",
  },
  en: {
    heroTitleA: "The world of",
    heroHighlight: "electric cars",
    heroDesc:
      "Explore the specs, technologies, and details of popular electric cars on ElectroCar.",
    sectionTitle: "Electric Cars",
    sectionDesc: "Selected electric car models",
    brand: "Brand",
    carType: "Car type",
    brands: ["All brands", "Tesla", "BYD", "Hyundai", "Kia", "XPeng"],
    types: ["All", "Sedan", "Crossover"],
    sort: "Sort",
  },
};

export default function CarsPage() {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const t = ui[language];

  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#08151f] to-[#050b11] py-20">

          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#39f77b]/5 blur-[120px]" />

          <div className="site-container relative">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3 text-sm text-[#39f77b]">
                <span className="h-2 w-2 rounded-full bg-[#39f77b]" />
                Electric Cars
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.5] text-white md:text-5xl">
                {t.heroTitleA}
                <span className="text-[#39f77b]">
                  {" "}{t.heroHighlight}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 md:text-base">
                {t.heroDesc}
              </p>

            </div>

          </div>

        </section>

        {/* Cars */}
        <section className="section-space">

          <div className="site-container">

            <SectionTitle
              title={t.sectionTitle}
              description={t.sectionDesc}
            />

            {/* Filters */}
            <div className="mb-10 grid gap-5 lg:grid-cols-2">

              {/* Brands */}
              <div className="ev-card rounded-2xl p-5">

                <span className="mb-4 block text-xs font-bold text-gray-500">
                  {t.brand}
                </span>

                <div className="flex gap-2 overflow-x-auto pb-1">

                  {t.brands.map((brand, index) => (
                    <button
                      key={brand}
                      className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                        index === 0
                          ? "border-[#39f77b] bg-[#39f77b] text-[#06100a]"
                          : "border-white/10 text-gray-500 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}

                </div>

              </div>

              {/* Types */}
              <div className="ev-card rounded-2xl p-5">

                <span className="mb-4 block text-xs font-bold text-gray-500">
                  {t.carType}
                </span>

                <div className="flex gap-2">

                  {t.types.map((type, index) => (
                    <button
                      key={type}
                      className={`rounded-xl border px-5 py-2.5 text-xs font-semibold transition ${
                        index === 0
                          ? "border-[#39f77b] bg-[#39f77b] text-[#06100a]"
                          : "border-white/10 text-gray-500 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}

                </div>

              </div>

            </div>

            {/* Result count */}
            <div className="mb-6 flex items-center justify-between">

              <p className="text-xs text-gray-600">
                {isFa ? "نمایش" : "Showing"}{" "}
                <span className="text-gray-300">
                  {cars.length}
                </span>{" "}
                {isFa ? "خودرو" : cars.length === 1 ? "car" : "cars"}
              </p>

              <button className="text-xs text-gray-500 transition hover:text-[#39f77b]">
                {t.sort}
              </button>

            </div>

            {/* Cars */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                />
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}
