
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#03070b]">
      <div className="site-container py-14">

        {/* Main Footer */}
        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-right">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 lg:justify-start"
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

            <p className="mt-5 text-center text-sm leading-7 text-gray-500 lg:text-right">
              مرجع اخبار، مقالات، بررسی و فناوری خودروهای برقی.
              با ElectroCar دنیای حرکت الکتریکی را بهتر بشناسید.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              دسترسی سریع
            </h3>

            <div className="flex flex-col items-center gap-3 text-sm text-gray-500 lg:items-start">
              <Link
                href="/"
                className="transition hover:text-[#39f77b]"
              >
                صفحه اصلی
              </Link>

              <Link
                href="/news"
                className="transition hover:text-[#39f77b]"
              >
                آخرین اخبار
              </Link>

              <Link
                href="/cars"
                className="transition hover:text-[#39f77b]"
              >
                خودروهای برقی
              </Link>

              <Link
                href="/articles"
                className="transition hover:text-[#39f77b]"
              >
                مقالات
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              دسته‌بندی‌ها
            </h3>

            <div className="flex flex-col items-center gap-3 text-sm text-gray-500 lg:items-start">
              <Link
                href="/news"
                className="transition hover:text-[#39f77b]"
              >
                اخبار جهان
              </Link>

              <Link
                href="/charging"
                className="transition hover:text-[#39f77b]"
              >
                باتری و شارژ
              </Link>

              <Link
                href="/technology"
                className="transition hover:text-[#39f77b]"
              >
                فناوری
              </Link>

              <Link
                href="/cars"
                className="transition hover:text-[#39f77b]"
              >
                بررسی خودرو
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <Link
              href="/about"
              className="mb-5 block font-bold text-white transition hover:text-[#39f77b]"
            >
              درباره ElectroCar
            </Link>

            <p className="text-center text-sm leading-7 text-gray-500 lg:text-right">
              ElectroCar یک پلتفرم محتوایی با تمرکز بر خودروهای
              الکتریکی، فناوری‌های نوین و آینده صنعت حمل‌ونقل است.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} ElectroCar — تمامی حقوق محفوظ است.
        </div>

      </div>
    </footer>
  );
}

