"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const menuItems = [
  { fa: "خانه", en: "Home", href: "/", icon: "⌂" },
  { fa: "اخبار", en: "News", href: "/news", icon: "◈" },
  { fa: "مقالات", en: "Articles", href: "/articles", icon: "✦" },
  { fa: "تکنولوژی", en: "Technology", href: "/technology", icon: "⚙" },
  { fa: "درباره ما", en: "About Us", href: "/about", icon: "ⓘ" },
  { fa: "تماس با ما", en: "Contact", href: "/contact", icon: "✉" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { language, setLanguage } = useLanguage();
  const isFa = language === "fa";

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearch = () => {
    const value = query.trim();

    if (!value) return;

    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  };

  const handleLanguageChange = (lang: "fa" | "en") => {
    setLanguage(lang);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b11]/90 backdrop-blur-xl">
        <div className="site-container">
          <div className="flex h-[68px] items-center justify-between gap-3 sm:h-[76px] sm:gap-6">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => {
                setOpen(false);
                setSearchOpen(false);
              }}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3"
            >
              <div className="relative flex h-9 w-9 items-center justify-center sm:h-11 sm:w-11">
                <div
                  className="absolute inset-0 rotate-6 rounded-xl opacity-20 blur-md"
                  style={{ background: "var(--green)" }}
                />

                <svg
                  viewBox="0 0 64 64"
                  className="relative h-9 w-9 sm:h-11 sm:w-11"
                  fill="none"
                >
                  <path
                    d="M42 7H18L8 25h19L17 57l35-37H33L42 7Z"
                    fill="url(#logoGradient)"
                  />

                  <defs>
                    <linearGradient
                      id="logoGradient"
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

              <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
                <span className="text-white">Electro</span>
                <span className="text-[#39f77b]">Car</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative whitespace-nowrap text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {isFa ? item.fa : item.en}

                  <span className="absolute -bottom-2 start-0 h-[2px] w-0 bg-[#39f77b] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">

              {/* Language Switcher */}
              <div className="me-8 hidden items-center rounded-full border border-white/10 bg-white/[0.02] p-1 sm:block">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("fa")}
                  aria-label="زبان فارسی"
                  aria-pressed={language === "fa"}
                  className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition-all duration-200 ${language === "fa"
                      ? "bg-[#39f77b]/10 text-[#39f77b]"
                      : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                    }`}
                >
                  FA
                </button>

                <span className="px-0.5 text-white/15">|</span>

                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  aria-label="English language"
                  aria-pressed={language === "en"}
                  className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition-all duration-200 ${language === "en"
                      ? "bg-[#39f77b]/10 text-[#39f77b]"
                      : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                    }`}
                >
                  EN
                </button>
              </div>

              {/* Desktop Search Button */}
              <div className="hidden sm:block">
                <button
                  onClick={() => setSearchOpen((value) => !value)}
                  aria-label={isFa ? "جستجو" : "Search"}
                  aria-expanded={searchOpen}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${searchOpen
                      ? "border-[#39f77b]/40 bg-[#39f77b]/10 text-[#39f77b]"
                      : "border-white/10 text-gray-300 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                    }`}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen((value) => !value)}
                aria-label={
                  open
                    ? isFa ? "بستن منو" : "Close menu"
                    : isFa ? "باز کردن منو" : "Open menu"
                }
                aria-expanded={open}
                className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${open
                    ? "border-[#39f77b]/40 bg-[#39f77b]/10 text-[#39f77b]"
                    : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-[#39f77b]/30 hover:text-[#39f77b]"
                  }`}
              >
                {open ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Search Panel */}
        <div
          className={`absolute left-0 right-0 top-full hidden overflow-hidden border-b border-[#39f77b]/10 bg-[#071019]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:block ${searchOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
            }`}
        >
          <div className="site-container py-6">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
              }}
              className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-lg"
            >
              <svg
                className="ms-2 h-5 w-5 shrink-0 text-[#39f77b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                autoFocus={searchOpen}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  isFa
                    ? "دنبال چه چیزی می‌گردید؟"
                    : "What are you looking for?"
                }
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                disabled={!query.trim()}
                className="shrink-0 rounded-xl bg-[#39f77b] px-5 py-3 text-sm font-bold text-[#031008] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isFa ? "جستجو" : "Search"}
              </button>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label={isFa ? "بستن جستجو" : "Close search"}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-white/30">
              {isFa
                ? "عبارت موردنظرتان را وارد کنید و کلید جستجو را بزنید."
                : "Type what you're looking for and press Search."}
            </p>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Panel (slides in from the start side: right in RTL, left in LTR) */}
      <aside
        className={`fixed start-0 top-[68px] z-40 h-[calc(100vh-68px)] w-[88%] max-w-sm border-e border-white/10 bg-[#071019] shadow-2xl transition-transform duration-300 sm:top-[76px] sm:h-[calc(100vh-76px)] lg:hidden ${open
            ? "translate-x-0"
            : "ltr:-translate-x-full rtl:translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 py-6">

          {/* Menu Header */}
          <div className="mb-6 rounded-2xl border border-[#39f77b]/10 bg-[#39f77b]/[0.04] p-4 text-center">
            <p className="text-xs font-medium text-[#39f77b]">
              ELECTRIC MOBILITY
            </p>

            <h2 className="mt-1 text-lg font-bold text-white">
              {isFa ? "منوی ElectroCar" : "ElectroCar Menu"}
            </h2>
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch();
              setOpen(false);
            }}
            className="mb-5"
          >
            <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-1">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={isFa ? "جستجو در سایت..." : "Search the site..."}
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#39f77b] text-[#031008]"
                aria-label={isFa ? "جستجو" : "Search"}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
            </div>
          </form>

          {/* Mobile Language Switcher */}
          <div className="mb-5 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-1">
            <button
              type="button"
              onClick={() => handleLanguageChange("fa")}
              aria-pressed={language === "fa"}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${language === "fa"
                  ? "bg-[#39f77b]/10 text-[#39f77b]"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              فارسی
            </button>

            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              aria-pressed={language === "en"}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${language === "en"
                  ? "bg-[#39f77b]/10 text-[#39f77b]"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              English
            </button>
          </div>

          {/* Links */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 transition-all duration-300 hover:border-[#39f77b]/15 hover:bg-[#39f77b]/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sm text-[#39f77b] transition group-hover:bg-[#39f77b]/10">
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium text-gray-300 transition group-hover:text-white">
                    {isFa ? item.fa : item.en}
                  </span>
                </div>

                <span className="text-white/20 transition group-hover:text-[#39f77b] ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                  {isFa ? "←" : "→"}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="mt-auto pt-6 text-center">
            <div className="mb-3 h-px bg-white/5" />

            <p className="text-xs text-white/30">
              {isFa ? "دنیای خودروهای برقی" : "The world of electric cars"}
            </p>

            <p className="mt-1 text-xs font-semibold text-[#39f77b]">
              ElectroCar
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
