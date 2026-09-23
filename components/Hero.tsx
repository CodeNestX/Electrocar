"use client";

import { useState } from "react";

const slides = [
  {
    title: "آینده حرکت،",
    highlight: "از همین‌جا شروع می‌شود",
    description:
      "تازه‌ترین اخبار، بررسی‌ها و فناوری‌های دنیای خودروهای برقی",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "نسل جدید،",
    highlight: "هوشمندتر از همیشه",
    description:
      "با جدیدترین فناوری‌های خودروهای الکتریکی و سیستم‌های هوشمند آشنا شوید",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "انرژی پاک،",
    highlight: "حرکت به سوی آینده",
    description:
      "دنیای خودروهای برقی را با ElectroCar بهتر بشناسید",
    image:
      "https://images.unsplash.com/photo-1617886322168-72e6e7a87f9b?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const slide = slides[active];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="hero-image relative min-h-[620px]"
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#050b11]/30 via-[#050b11]/60 to-[#050b11]" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-[#39f77b]" />
              به دنیای خودروهای برقی خوش آمدید!
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.5] text-white sm:text-5xl md:text-6xl">
              {slide.title}
              <br />
              <span className="text-[#39f77b]">
                {slide.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/news"
                className="rounded-full bg-[#39f77b] px-7 py-3.5 text-sm font-bold text-[#06100a] shadow-[0_0_35px_rgba(57,247,123,0.2)] transition hover:scale-[1.03] hover:bg-[#5cff93]"
              >
                مشاهده آخرین اخبار ←
              </a>

              <a
                href="/cars"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#39f77b]/50 hover:text-[#39f77b]"
              >
                بررسی خودروها
              </a>
            </div>

            {/* Slider controls */}
            <div className="mt-10 flex items-center gap-4">

              <button
                onClick={previousSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#39f77b] hover:text-[#39f77b]"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    aria-label={`اسلاید ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      active === index
                        ? "w-7 bg-[#39f77b]"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#39f77b] hover:text-[#39f77b]"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-5 left-0 right-0 z-10">
          <div className="site-container">
            <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
              <span>خودروهای برقی</span>
              <span className="text-[#39f77b]">•</span>
              <span>هوشمند</span>
              <span className="text-[#39f77b]">•</span>
              <span>سبز</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}