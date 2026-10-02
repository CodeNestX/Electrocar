"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import { localizeCar } from "@/data/carsI18n";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    home: "خانه",
    cars: "خودروهای برقی",
    model: "مدل",
    basePrice: "قیمت پایه",
    range: "برد",
    power: "قدرت",
    acceleration: "شتاب",
    battery: "باتری",
    specsTitle: "مشخصات فنی",
    specRange: "برد حرکتی",
    specPower: "قدرت موتور",
    specAcceleration: "شتاب صفر تا صد",
    specBattery: "ظرفیت باتری",
    specCharging: "حداکثر توان شارژ",
    specTopSpeed: "حداکثر سرعت",
    featuresTitle: "امکانات",
    colorsTitle: "رنگ‌های قابل انتخاب",
    overview: "معرفی خودرو",
    aboutPrefix: "درباره",
    extra:
      "خودروهای الکتریکی جدید علاوه بر سیستم قوای محرکه متفاوت، به مجموعه‌ای از فناوری‌های نرم‌افزاری، سیستم‌های مدیریت انرژی و امکانات هوشمند مجهز هستند. هنگام بررسی یک خودرو باید عواملی مانند برد، ظرفیت باتری، سرعت شارژ و نوع استفاده روزمره را در کنار یکدیگر در نظر گرفت.",
    related: "خودروهای مشابه",
  },
  en: {
    home: "Home",
    cars: "Electric Cars",
    model: "model",
    basePrice: "Base price",
    range: "Range",
    power: "Power",
    acceleration: "Acceleration",
    battery: "Battery",
    specsTitle: "Technical Specifications",
    specRange: "Driving range",
    specPower: "Motor power",
    specAcceleration: "0–100 km/h acceleration",
    specBattery: "Battery capacity",
    specCharging: "Max charging power",
    specTopSpeed: "Top speed",
    featuresTitle: "Features",
    colorsTitle: "Available colors",
    overview: "Car overview",
    aboutPrefix: "About",
    extra:
      "Beyond their different powertrains, modern electric cars are equipped with a range of software technologies, energy management systems, and smart features. When evaluating a car, factors such as range, battery capacity, charging speed, and everyday usage should be considered together.",
    related: "Similar cars",
  },
};

export default function CarDetail({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const t = ui[language];

  const rawCar = cars.find((item) => item.slug === slug);

  if (!rawCar) return null;

  const car = localizeCar(rawCar, language);

  // Related cars are matched on the original (Persian) type value
  const relatedCars = cars
    .filter((item) => item.id !== rawCar.id)
    .filter((item) => item.type === rawCar.type)
    .slice(0, 3);

  const specs = [
    { label: t.specRange, value: car.range },
    { label: t.specPower, value: car.power },
    { label: t.specAcceleration, value: car.acceleration },
    { label: t.specBattery, value: car.battery },
    { label: t.specCharging, value: car.charging },
    { label: t.specTopSpeed, value: car.topSpeed },
  ];

  const quickSpecs = [
    { label: t.range, value: car.range },
    { label: t.power, value: car.power },
    { label: t.acceleration, value: car.acceleration },
    { label: t.battery, value: car.battery },
  ];

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
                {t.home}
              </a>

              <span>/</span>

              <a
                href="/cars"
                className="transition hover:text-[#39f77b]"
              >
                {t.cars}
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

                <div className="absolute start-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
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
                    {isFa
                      ? `${t.model} ${car.year}`
                      : `${car.year} ${t.model}`}
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
                    {t.basePrice}
                  </span>

                  <div className="mt-1 text-xl font-extrabold text-[#39f77b]">
                    {car.price}
                  </div>

                </div>

                {/* Quick Specs */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {quickSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center"
                    >

                      <span className="block text-[10px] text-gray-600">
                        {spec.label}
                      </span>

                      <strong className="mt-2 block text-sm text-white">
                        {spec.value}
                      </strong>

                    </div>
                  ))}

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
                  {t.specsTitle}
                </h2>

                <div className="mt-6 divide-y divide-white/5">

                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-xs text-gray-500">
                        {spec.label}
                      </span>

                      <span className="text-sm font-bold text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* Features */}
              <div className="ev-card rounded-2xl p-6">

                <h2 className="text-xl font-extrabold text-white">
                  {t.featuresTitle}
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
                  {t.colorsTitle}
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
                  {t.overview}
                </span>

              </div>

              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                {t.aboutPrefix} {car.name}
              </h2>

              <p className="mt-6 text-sm leading-9 text-gray-400">
                {car.description}
              </p>

              <p className="mt-5 text-sm leading-9 text-gray-400">
                {t.extra}
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
                  {t.related}
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
