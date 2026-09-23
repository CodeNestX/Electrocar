import SectionTitle from "./SectionTitle";

const cars = [
  {
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "BEV",
    range: "513 km",
    power: "283 hp",
    acceleration: "5.8 s",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "BYD Seal",
    brand: "BYD",
    type: "BEV",
    range: "570 km",
    power: "530 hp",
    acceleration: "3.8 s",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "XPENG G6",
    brand: "XPENG",
    type: "BEV",
    range: "570 km",
    power: "476 hp",
    acceleration: "4.1 s",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function CarsSection() {
  return (
    <section className="pb-20">
      <div className="site-container">

        <SectionTitle
          title="خودروهای برقی محبوب"
          description="نگاهی سریع به مشخصات برخی از خودروهای الکتریکی محبوب"
          linkText="مشاهده همه خودروها"
          linkHref="/cars"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.name}
              className="ev-card group overflow-hidden rounded-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08131e] via-transparent to-transparent" />

                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300 backdrop-blur-md">
                  {car.brand}
                </div>
              </div>

              <div className="p-5">

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-white">
                    {car.name}
                  </h3>

                  <span className="text-xs text-[#39f77b]">
                    {car.type}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">

                  <div className="rounded-xl bg-white/[0.03] p-3 text-center">
                    <div className="text-[10px] text-gray-500">
                      برد
                    </div>
                    <div className="mt-1 text-sm font-bold text-[#39f77b]">
                      {car.range}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-3 text-center">
                    <div className="text-[10px] text-gray-500">
                      قدرت
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">
                      {car.power}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-3 text-center">
                    <div className="text-[10px] text-gray-500">
                      شتاب
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">
                      {car.acceleration}
                    </div>
                  </div>

                </div>

                <a
                  href="/cars"
                  className="mt-5 flex items-center justify-center rounded-xl border border-[#39f77b]/20 py-3 text-xs font-bold text-[#39f77b] transition hover:bg-[#39f77b] hover:text-[#06100a]"
                >
                  مشاهده جزئیات +
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}