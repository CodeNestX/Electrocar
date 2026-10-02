"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const isFa = language === "fa";

  return (
    <footer className="border-t border-white/5 bg-[#091521]">
      <div className="site-container py-14">

        {/* Main Footer */}
        <div
          className={`grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4 ${
            isFa ? "lg:text-right" : "lg:text-left"
          }`}
        >

          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className={`flex items-center justify-center gap-3 ${
                isFa ? "lg:justify-start" : "lg:justify-start"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="h-10 w-10"
                  fill="none"
                >
                  <path
                    d="M42 7H18L8 25h19L17 57l35-37H33L42 7Z"
                    fill="url(#footerLogo)"
                  />

                  <defs>
                    <linearGradient
                      id="footerLogo"
                      x1="10"
                      y1="10"
                      x2="52"
                      y2="52"
                    >
                      <stop stopColor="#00c8ff" />
                      <stop offset="1" stopColor="#39f77b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <span className="text-xl font-extrabold">
                Electro<span className="text-[#39f77b]">Car</span>
              </span>
            </Link>

            {/* Brand Description */}
            <p
              className={`mt-5 text-center text-sm leading-7 text-gray-500 ${
                isFa ? "lg:text-right" : "lg:text-left"
              }`}
            >
              {isFa ? (
                <>
                  مرجع اخبار، مقالات، بررسی و فناوری خودروهای برقی.
                  <br />
                  با ElectroCar دنیای حرکت الکتریکی را بهتر بشناسید.
                </>
              ) : (
                <>
                  Your source for electric vehicle news, articles,
                  reviews, and technology.
                  <br />
                  Discover the world of electric mobility with ElectroCar.
                </>
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              {isFa ? "دسترسی سریع" : "Quick Links"}
            </h3>

            <div
              className={`flex flex-col gap-3 text-sm text-gray-500 ${
                isFa ? "items-center lg:items-start" : "items-center lg:items-start"
              }`}
            >
              <Link
                href="/"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "صفحه اصلی" : "Home"}
              </Link>

              <Link
                href="/news"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "آخرین اخبار" : "Latest News"}
              </Link>

              <Link
                href="/articles"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "مقالات" : "Articles"}
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              {isFa ? "دسته‌بندی‌ها" : "Categories"}
            </h3>

            <div
              className={`flex flex-col gap-3 text-sm text-gray-500 ${
                isFa ? "items-center lg:items-start" : "items-center lg:items-start"
              }`}
            >
              <Link
                href="/news"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "اخبار جهان" : "World News"}
              </Link>

              <Link
                href="/charging"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "باتری و شارژ" : "Battery & Charging"}
              </Link>

              <Link
                href="/technology"
                className="transition hover:text-[#39f77b]"
              >
                {isFa ? "فناوری" : "Technology"}
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <Link
              href="/about"
              className="mb-5 block font-bold text-white transition hover:text-[#39f77b]"
            >
              {isFa ? "درباره ElectroCar" : "About ElectroCar"}
            </Link>

            <p
              className={`text-center text-sm leading-7 text-gray-500 ${
                isFa ? "lg:text-right" : "lg:text-left"
              }`}
            >
              {isFa ? (
                <>
                  ElectroCar یک پلتفرم محتوایی با تمرکز بر خودروهای
                  الکتریکی، فناوری‌های نوین و آینده صنعت حمل‌ونقل است.
                </>
              ) : (
                <>
                  ElectroCar is a content platform focused on electric
                  vehicles, emerging technologies, and the future of
                  transportation.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          {isFa
            ? `© ${new Date().getFullYear()} ElectroCar — تمامی حقوق محفوظ است.`
            : `© ${new Date().getFullYear()} ElectroCar — All rights reserved.`}
        </div>

      </div>
    </footer>
  );
}

