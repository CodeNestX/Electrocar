"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompareCars from "@/components/CompareCars";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    badge: "مقایسه هوشمند خودروهای برقی",
    titleA: "خودروها را",
    highlight: "کنار هم",
    titleB: "مقایسه کنید",
    desc: "دو یا سه خودروی برقی را انتخاب کنید و مشخصات فنی، عملکرد، باتری، برد حرکتی و سایر ویژگی‌های آن‌ها را در کنار هم ببینید.",
  },
  en: {
    badge: "Smart electric car comparison",
    titleA: "Compare cars",
    highlight: "side by side",
    titleB: "",
    desc: "Pick two or three electric cars and see their specs, performance, battery, range, and other features side by side.",
  },
};

export default function ComparePage() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.12),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-5 inline-flex items-center rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm font-medium text-[#39f77b]">
                {t.badge}
              </span>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                {t.titleA}{" "}
                <span className="text-[#39f77b]">{t.highlight}</span>{" "}
                {t.titleB}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                {t.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Compare */}
        <CompareCars />
      </main>

      <Footer />
    </>
  );
}
