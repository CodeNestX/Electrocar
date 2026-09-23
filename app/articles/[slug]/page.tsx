import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

import { articles } from "@/data/articles";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">

        {/* ================= HERO / ARTICLE HEADER ================= */}
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/40">
              <Link
                href="/"
                className="transition hover:text-[#39f77b]"
              >
                خانه
              </Link>

              <span>/</span>

              <Link
                href="/articles"
                className="transition hover:text-[#39f77b]"
              >
                مقالات
              </Link>

              <span>/</span>

              <span className="text-white/60">
                {article.title}
              </span>
            </div>

            <div className="mx-auto max-w-4xl text-center">

              {/* Category */}
              <div className="mb-5">
                <span className="inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm font-medium text-[#39f77b]">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-black leading-[1.5] sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/40">
                <span>
                  نویسنده:{" "}
                  <span className="text-white/70">
                    {article.author}
                  </span>
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

                <span>
                  {article.date}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

                <span>
                  {article.readingTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN ARTICLE AREA ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">

            {/* ================= SIDEBAR ================= */}
            <aside className="order-2 lg:order-1">
              <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-5">

                <div className="mb-5 flex items-center gap-3">
                  <div className="h-8 w-1 rounded-full bg-[#39f77b]" />

                  <h2 className="text-lg font-black">
                    فهرست مطالب
                  </h2>
                </div>

                <nav className="space-y-1">

                  {/* مقدمه */}
                  <a
                    href="#introduction"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-[#39f77b]/10 hover:text-[#39f77b]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs text-white/40 transition group-hover:bg-[#39f77b]/20 group-hover:text-[#39f77b]">
                      ۱
                    </span>

                    <span>
                      مقدمه
                    </span>
                  </a>

                  {/* محتوای اصلی */}
                  <a
                    href="#main-content"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-[#39f77b]/10 hover:text-[#39f77b]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs text-white/40 transition group-hover:bg-[#39f77b]/20 group-hover:text-[#39f77b]">
                      ۲
                    </span>

                    <span>
                      محتوای اصلی
                    </span>
                  </a>

                  {/* نکته مهم */}
                  <a
                    href="#important-point"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-[#39f77b]/10 hover:text-[#39f77b]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs text-white/40 transition group-hover:bg-[#39f77b]/20 group-hover:text-[#39f77b]">
                      ۳
                    </span>

                    <span>
                      نکته مهم
                    </span>
                  </a>

                  {/* نتیجه گیری */}
                  <a
                    href="#conclusion"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-[#39f77b]/10 hover:text-[#39f77b]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs text-white/40 transition group-hover:bg-[#39f77b]/20 group-hover:text-[#39f77b]">
                      ۴
                    </span>

                    <span>
                      نتیجه‌گیری
                    </span>
                  </a>

                </nav>

                {/* Back */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <Link
                    href="/articles"
                    className="flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:border-[#39f77b]/30 hover:bg-[#39f77b]/5 hover:text-[#39f77b]"
                  >
                    مشاهده همه مقالات
                  </Link>
                </div>

              </div>
            </aside>

            {/* ================= ARTICLE ================= */}
            <article className="order-1 min-w-0 lg:order-2">

              {/* Article Image */}
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* ================= INTRODUCTION ================= */}
              <section
                id="introduction"
                className="scroll-mt-28"
              >
                <h2 className="mb-5 text-2xl font-black sm:text-3xl">
                  مقدمه
                </h2>

                <div className="space-y-5 text-base leading-9 text-white/70">
                  <p>
                    خودروهای برقی در سال‌های اخیر به یکی از مهم‌ترین
                    بخش‌های صنعت حمل‌ونقل تبدیل شده‌اند. پیشرفت فناوری
                    باتری، افزایش زیرساخت‌های شارژ و توسعه موتورهای
                    الکتریکی باعث شده است این خودروها بیشتر از گذشته
                    مورد توجه قرار بگیرند.
                  </p>

                  <p>
                    در این مقاله قصد داریم موضوع
                    <span className="mx-1 text-[#39f77b]">
                      {article.title}
                    </span>
                    را بررسی کنیم و با مفاهیم مهم مرتبط با آن آشنا شویم.
                  </p>
                </div>
              </section>

              {/* ================= MAIN CONTENT ================= */}
              <section
                id="main-content"
                className="mt-12 scroll-mt-28"
              >
                <h2 className="mb-5 text-2xl font-black sm:text-3xl">
                  محتوای اصلی
                </h2>

                <div className="space-y-5 text-base leading-9 text-white/70">
                  {article.content
                    .split("\n")
                    .filter((paragraph) => paragraph.trim() !== "")
                    .map((paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ))}
                </div>

                {/* Additional content */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 text-[#39f77b]">
                      ⚡
                    </div>

                    <h3 className="mb-2 font-bold">
                      فناوری خودروهای برقی
                    </h3>

                    <p className="text-sm leading-7 text-white/50">
                      خودروهای برقی از مجموعه‌ای از فناوری‌های مختلف
                      برای تبدیل انرژی الکتریکی به حرکت استفاده می‌کنند.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 text-[#39f77b]">
                      🔋
                    </div>

                    <h3 className="mb-2 font-bold">
                      اهمیت باتری
                    </h3>

                    <p className="text-sm leading-7 text-white/50">
                      باتری یکی از مهم‌ترین اجزای خودروهای برقی است و
                      ظرفیت آن روی برد حرکتی خودرو تأثیر مستقیم دارد.
                    </p>
                  </div>

                </div>
              </section>

              {/* ================= IMPORTANT POINT ================= */}
              <section
                id="important-point"
                className="mt-12 scroll-mt-28"
              >
                <div className="rounded-3xl border border-[#39f77b]/20 bg-[#39f77b]/5 p-6 sm:p-8">

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#39f77b]/15 text-xl">
                      💡
                    </div>

                    <h2 className="text-xl font-black text-[#39f77b]">
                      نکته مهم
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-white/65 sm:text-base">
                    هنگام بررسی خودروهای برقی باید مجموعه‌ای از عوامل
                    مانند ظرفیت باتری، برد حرکتی، نوع شارژ، توان موتور،
                    شرایط استفاده و زیرساخت شارژ را در کنار یکدیگر
                    در نظر گرفت.
                  </p>

                </div>
              </section>

              {/* ================= CONCLUSION ================= */}
              <section
                id="conclusion"
                className="mt-12 scroll-mt-28"
              >
                <h2 className="mb-5 text-2xl font-black sm:text-3xl">
                  نتیجه‌گیری
                </h2>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <p className="text-base leading-9 text-white/70">
                    در مجموع، شناخت صحیح فناوری خودروهای برقی می‌تواند
                    به کاربران کمک کند تا هنگام بررسی مدل‌های مختلف،
                    مشخصات فنی و امکانات خودروها را بهتر درک کنند.
                  </p>

                  <p className="mt-4 text-base leading-9 text-white/70">
                    با رشد فناوری باتری، توسعه شبکه‌های شارژ و افزایش
                    تنوع خودروهای الکتریکی، انتظار می‌رود این حوزه
                    همچنان تغییرات زیادی را تجربه کند.
                  </p>
                </div>
              </section>

              {/* ================= ARTICLE FOOTER ================= */}
              <div className="mt-12 border-t border-white/10 pt-8">

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <p className="text-sm text-white/40">
                      نویسنده
                    </p>

                    <p className="mt-1 font-bold">
                      {article.author}
                    </p>
                  </div>

                  <Link
                    href="/articles"
                    className="rounded-full bg-[#39f77b] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
                  >
                    بازگشت به مقالات
                  </Link>

                </div>

              </div>
            </article>
          </div>
        </section>

        {/* ================= RELATED ARTICLES ================= */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-white/5 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

              <div className="mb-8">
                <span className="text-sm font-bold text-[#39f77b]">
                  بیشتر بخوانید
                </span>

                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  مقالات مرتبط
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                  />
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}