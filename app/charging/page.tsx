import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChargingGuide from "@/components/ChargingGuide";

export default function ChargingPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.14),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-5 inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm font-medium text-[#39f77b]">
                راهنمای شارژ خودروهای برقی
              </span>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                انرژی خودرویت را
                <span className="text-[#39f77b]"> هوشمندانه </span>
                مدیریت کن
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                با انواع روش‌های شارژ، تفاوت شارژ AC و DC، زمان شارژ و
                تجهیزات مورد نیاز خودروهای برقی آشنا شوید.
              </p>
            </div>
          </div>
        </section>

        <ChargingGuide />
      </main>

      <Footer />
    </>
  );
}