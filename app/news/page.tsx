import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SectionTitle from "@/components/SectionTitle";
import { news } from "@/data/news";

const categories = [
  "همه",
  "اخبار جهان",
  "بررسی خودرو",
  "فناوری",
  "زیرساخت شارژ",
  "آینده خودرو",
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>

        {/* Page Header */}
        <section className="border-b border-white/5 bg-gradient-to-b from-[#08151f] to-[#050b11] py-20">

          <div className="site-container">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3 text-sm text-[#39f77b]">
                <span className="h-2 w-2 rounded-full bg-[#39f77b]" />
                ElectroCar News
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.5] text-white md:text-5xl">
                آخرین اخبار
                <span className="text-[#39f77b]"> خودروهای برقی</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 md:text-base">
                جدیدترین اخبار، رویدادها، فناوری‌ها و تحولات دنیای
                خودروهای الکتریکی را در ElectroCar دنبال کنید.
              </p>

            </div>

          </div>

        </section>

        {/* News */}
        <section className="section-space">

          <div className="site-container">

            <SectionTitle
              title="همه اخبار"
              description="آخرین مطالب منتشرشده در ElectroCar"
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

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {news.map((item) => (
                <NewsCard
                  key={item.id}
                  news={item}
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