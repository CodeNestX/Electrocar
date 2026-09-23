import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SectionTitle from "@/components/SectionTitle";
import { articles } from "@/data/articles";

const categories = [
  "همه",
  "آموزش خودرو برقی",
  "باتری",
  "شارژ",
  "فناوری",
  "مقایسه",
  "راهنمای خرید",
  "آینده خودرو",
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>

        {/* Page Hero */}
        <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#08151f] to-[#050b11] py-20">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#39f77b]/5 blur-[100px]" />

          <div className="site-container relative">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3 text-sm text-[#39f77b]">
                <span className="h-2 w-2 rounded-full bg-[#39f77b]" />
                ElectroCar Magazine
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.5] text-white md:text-5xl">
                مقالات و آموزش
                <span className="text-[#39f77b]">
                  {" "}خودروهای برقی
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 md:text-base">
                راهنماهای آموزشی، بررسی فناوری‌ها و مطالب تخصصی برای
                شناخت بهتر دنیای خودروهای الکتریکی.
              </p>

            </div>

          </div>

        </section>

        {/* Articles */}
        <section className="section-space">

          <div className="site-container">

            <SectionTitle
              title="مقالات ElectroCar"
              description="مطالب آموزشی و تخصصی درباره خودروهای الکتریکی"
            />

            {/* Categories */}
            <div className="mb-10 flex gap-2 overflow-x-auto pb-2">

              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition ${
                    index === 0
                      ? "border-[#39f77b] bg-[#39f77b] text-[#06100a]"
                      : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>

            {/* Articles grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
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