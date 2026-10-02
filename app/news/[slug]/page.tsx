import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/data/news";
import { notFound } from "next/navigation";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {

  const { slug } = await params;

  const item = news.find(
    (newsItem) => newsItem.slug === slug
  );

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main dir="rtl">

        {/* Header */}
        <section className="pt-14 md:pt-20">

          <div className="site-container">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-xs text-gray-500">
              <a href="/" className="hover:text-[#39f77b]">
                خانه
              </a>

              <span>/</span>

              <a href="/news" className="hover:text-[#39f77b]">
                اخبار
              </a>

              <span>/</span>

              <span className="text-gray-400">
                {item.category}
              </span>
            </div>

            {/* Category */}
            <div className="mb-5">
              <span className="rounded-full bg-[#39f77b]/10 px-4 py-2 text-xs font-bold text-[#39f77b]">
                {item.category}
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.7] text-white md:text-5xl">
              {item.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
              {item.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-gray-500">

              <span>
                نویسنده:{" "}
                <span className="text-gray-300">
                  {item.author}
                </span>
              </span>

              <span>•</span>

              <span>{item.date}</span>

              <span>•</span>

              <span>{item.readingTime} مطالعه</span>

            </div>

          </div>

        </section>

        {/* Main image */}
        <section className="mt-10">

          <div className="site-container">

            <div className="relative overflow-hidden rounded-3xl border border-white/5">

              <img
                src={item.image}
                alt={item.title}
                className="max-h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/30 to-transparent" />

            </div>

          </div>

        </section>

        {/* Article */}
        <section className="section-space">

          <div className="site-container">

            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

              {/* Content */}
              <article className="max-w-3xl">

                <p className="border-r-2 border-[#39f77b] pr-5 text-lg leading-10 text-gray-300">
                  {item.content}
                </p>

                <h2 className="mt-12 text-2xl font-extrabold text-white">
                  چرا خودروهای برقی اهمیت دارند؟
                </h2>

                <p className="mt-5 text-sm leading-9 text-gray-400">
                  توسعه خودروهای الکتریکی می‌تواند تغییرات زیادی در
                  صنعت حمل‌ونقل ایجاد کند. کاهش وابستگی به سوخت‌های
                  فسیلی، توسعه فناوری باتری و حرکت به سمت سیستم‌های
                  حمل‌ونقل هوشمند از مهم‌ترین موضوعات این حوزه هستند.
                </p>

                <h2 className="mt-12 text-2xl font-extrabold text-white">
                  آینده صنعت خودرو
                </h2>

                <p className="mt-5 text-sm leading-9 text-gray-400">
                  خودروسازان بزرگ جهان در حال سرمایه‌گذاری روی
                  پلتفرم‌های الکتریکی، باتری‌های نسل جدید و سیستم‌های
                  نرم‌افزاری هستند. این تغییرات نشان می‌دهد که خودرو
                  در آینده بیش از گذشته به یک محصول نرم‌افزاری و
                  هوشمند تبدیل خواهد شد.
                </p>

              </article>

              {/* Sidebar */}
              <aside>

                <div className="ev-card sticky top-28 rounded-2xl p-6">

                  <h3 className="font-bold text-white">
                    مطالب مرتبط
                  </h3>

                  <div className="mt-5 flex flex-col gap-4">

                    {news
                      .filter((related) => related.id !== item.id)
                      .slice(0, 4)
                      .map((related) => (
                        <a
                          key={related.id}
                          href={`/news/${related.slug}`}
                          className="group flex gap-3"
                        >

                          <img
                            src={related.image}
                            alt={related.title}
                            className="h-20 w-20 shrink-0 rounded-xl object-cover"
                          />

                          <div>
                            <h4 className="line-clamp-2 text-xs font-bold leading-6 text-gray-300 transition group-hover:text-[#39f77b]">
                              {related.title}
                            </h4>

                            <span className="mt-1 block text-[10px] text-gray-600">
                              {related.readingTime} مطالعه
                            </span>
                          </div>

                        </a>
                      ))}

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}