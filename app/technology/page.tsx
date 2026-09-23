import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EVTechnology from "@/components/EVTechnology";

export default function TechnologyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.14),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-5 inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm font-medium text-[#39f77b]">
                فناوری خودروهای برقی
              </span>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                پشت پرده
                <span className="text-[#39f77b]"> خودروهای آینده </span>
                چیست؟
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                از باتری و موتور الکتریکی گرفته تا سیستم ترمز احیاکننده،
                مدیریت باتری و فناوری‌های کمک‌راننده؛ تکنولوژی‌های اصلی
                خودروهای برقی را بشناسید.
              </p>
            </div>
          </div>
        </section>

        <EVTechnology />
      </main>

      <Footer />
    </>
  );
}