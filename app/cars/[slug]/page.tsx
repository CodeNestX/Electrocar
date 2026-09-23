import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import { notFound } from "next/navigation";

interface CarDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CarDetailPage({
  params,
}: CarDetailPageProps) {

  const { slug } = await params;

  const car = cars.find(
    (item) => item.slug === slug
  );

  if (!car) {
    notFound();
  }

  const relatedCars = cars
    .filter((item) => item.id !== car.id)
    .filter((item) => item.type === car.type)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>

        {/* Breadcrumb */}
        <section className="pt-10">

          <div className="site-container">

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">

              <a
                href="/"
                className="transition hover:text-[#39f77b]"
              >
                خانه
              </a>

              <span>/</span>

              <a
                href="/cars"
                className="transition hover:text-[#39f77b]"
              >
                خودروهای برقی
              </a>

              <span>/</span>

              <span className="text-gray-400">
                {car.name}
              </span>

            </div>

          </div>

        </section>

        {/* Main Car */}
        <section className="section-space pt-10">

          <div className="site-container">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#09131c]">

                <img
                  src={car.image}
                  alt={car.name}
                  className="h-[350px] w-full object-cover md:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050b11]/70 via-transparent to-transparent" />

                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  {car.brand}
                </div>

              </div>

              {/* Info */}
              <div>

                <div className="mb-5 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#39f77b]/10 px-4 py-2 text-xs font-bold text-[#39f77b]">
                    {car.type}
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-500">
                    مدل {car.year}
                  </span>

                </div>

                <h1 className="text-4xl font-extrabold leading-[1.5] text-white md:text-5xl">
                  {car.name}
                </h1>

                <p className="mt-6 text-sm leading-8 text-gray-500">
                  {car.description}
                </p>

                {/* Price */}
                <div className="mt-7">

                  <span className="text-xs text-gray-600">
                    قیمت پایه
                  </span>

                  <div className="mt-1 text-xl font-extrabold text-[#39f77b]">
                    {car.price}
                  </div>

                </div>

                {/* Quick Specs */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">

                    <span className="block text-[10px] text-gray-600">
                      برد
                    </span>

                    <strong className="mt-2 block text-sm text-white">
                      {car.range}
                    </strong>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">

                    <span className="block text-[10px] text-gray-600">
                      قدرت
                    </span>

                    <strong className="mt-2 block text-sm text-white">
                      {car.power}
                    </strong>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">

                    <span className="block text-[10px] text-gray-600">
                      شتاب
                    </span>

                    <strong className="mt-2 block text-sm text-white">
                      {car.acceleration}
                    </strong>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">

                    <span className="block text-[10px] text-gray-600">
                      باتری
                    </span>

                    <strong className="mt-2 block text-sm text-white">
                      {car.battery}
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Full Specifications */}
        <section className="pb-20">

          <div className="site-container">

            <div className="grid gap-6 lg:grid-cols-3">

              {/* Specs */}
              <div className="ev-card rounded-2xl p-6 lg:col-span-2">

                <h2 className="text-xl font-extrabold text-white">
                  مشخصات فنی
                </h2>

                <div className="mt-6 divide-y divide-white/5">

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      برد حرکتی
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.range}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      قدرت موتور
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.power}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      شتاب صفر تا صد
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.acceleration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      ظرفیت باتری
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.battery}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      حداکثر توان شارژ
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.charging}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-xs text-gray-500">
                      حداکثر سرعت
                    </span>

                    <span className="text-sm font-bold text-white">
                      {car.topSpeed}
                    </span>
                  </div>

                </div>

              </div>

              {/* Features */}
              <div className="ev-card rounded-2xl p-6">

                <h2 className="text-xl font-extrabold text-white">
                  امکانات
                </h2>

                <ul className="mt-6 space-y-4">

                  {car.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-xs leading-6 text-gray-400"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#39f77b]" />
                      {feature}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* Colors */}
        <section className="border-y border-white/5 bg-[#071019] py-16">

          <div className="site-container">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div>

                <span className="text-xs text-[#39f77b]">
                  COLOR OPTIONS
                </span>

                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  رنگ‌های قابل انتخاب
                </h2>

              </div>

              <div className="flex flex-wrap gap-3">

                {car.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs text-gray-400"
                  >
                    {color}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* Description */}
        <section className="section-space">

          <div className="site-container">

            <div className="mx-auto max-w-4xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#39f77b]" />

                <span className="text-xs font-bold text-[#39f77b]">
                  معرفی خودرو
                </span>

              </div>

              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                درباره {car.name}
              </h2>

              <p className="mt-6 text-sm leading-9 text-gray-400">
                {car.description}
              </p>

              <p className="mt-5 text-sm leading-9 text-gray-400">
                خودروهای الکتریکی جدید علاوه بر سیستم قوای محرکه
                متفاوت، به مجموعه‌ای از فناوری‌های نرم‌افزاری،
                سیستم‌های مدیریت انرژی و امکانات هوشمند مجهز هستند.
                هنگام بررسی یک خودرو باید عواملی مانند برد،
                ظرفیت باتری، سرعت شارژ و نوع استفاده روزمره را
                در کنار یکدیگر در نظر گرفت.
              </p>

            </div>

          </div>

        </section>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="section-space border-t border-white/5">

            <div className="site-container">

              <div className="mb-8">

                <span className="text-xs font-bold text-[#39f77b]">
                  RELATED CARS
                </span>

                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  خودروهای مشابه
                </h2>

              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {relatedCars.map((relatedCar) => (
                  <CarCard
                    key={relatedCar.id}
                    car={relatedCar}
                  />
                ))}

              </div>

            </div>

          </section>
        )}

      </main>

      <Footer />

    </div>
  );
}