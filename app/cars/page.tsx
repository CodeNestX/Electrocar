import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import SectionTitle from "@/components/SectionTitle";
import { cars } from "@/data/cars";

const brands = [
  "همه برندها",
  "Tesla",
  "BYD",
  "Hyundai",
  "Kia",
  "XPeng",
];

const types = [
  "همه",
  "سدان",
  "کراس‌اوور",
];

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#08151f] to-[#050b11] py-20">

          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#39f77b]/5 blur-[120px]" />

          <div className="site-container relative">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3 text-sm text-[#39f77b]">
                <span className="h-2 w-2 rounded-full bg-[#39f77b]" />
                Electric Cars
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.5] text-white md:text-5xl">
                دنیای
                <span className="text-[#39f77b]">
                  {" "}خودروهای برقی
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 md:text-base">
                مشخصات، فناوری‌ها و اطلاعات خودروهای الکتریکی
                محبوب را در ElectroCar بررسی کنید.
              </p>

            </div>

          </div>

        </section>

        {/* Cars */}
        <section className="section-space">

          <div className="site-container">

            <SectionTitle
              title="خودروهای برقی"
              description="مدل‌های منتخب خودروهای الکتریکی"
            />

            {/* Filters */}
            <div className="mb-10 grid gap-5 lg:grid-cols-2">

              {/* Brands */}
              <div className="ev-card rounded-2xl p-5">

                <span className="mb-4 block text-xs font-bold text-gray-500">
                  برند
                </span>

                <div className="flex gap-2 overflow-x-auto pb-1">

                  {brands.map((brand, index) => (
                    <button
                      key={brand}
                      className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                        index === 0
                          ? "border-[#39f77b] bg-[#39f77b] text-[#06100a]"
                          : "border-white/10 text-gray-500 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}

                </div>

              </div>

              {/* Types */}
              <div className="ev-card rounded-2xl p-5">

                <span className="mb-4 block text-xs font-bold text-gray-500">
                  نوع خودرو
                </span>

                <div className="flex gap-2">

                  {types.map((type, index) => (
                    <button
                      key={type}
                      className={`rounded-xl border px-5 py-2.5 text-xs font-semibold transition ${
                        index === 0
                          ? "border-[#39f77b] bg-[#39f77b] text-[#06100a]"
                          : "border-white/10 text-gray-500 hover:border-[#39f77b]/40 hover:text-[#39f77b]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}

                </div>

              </div>

            </div>

            {/* Result count */}
            <div className="mb-6 flex items-center justify-between">

              <p className="text-xs text-gray-600">
                نمایش{" "}
                <span className="text-gray-300">
                  {cars.length}
                </span>{" "}
                خودرو
              </p>

              <button className="text-xs text-gray-500 transition hover:text-[#39f77b]">
                مرتب‌سازی
              </button>

            </div>

            {/* Cars */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
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