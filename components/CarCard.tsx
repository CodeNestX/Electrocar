import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className="ev-card group overflow-hidden rounded-2xl">

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-[#0a141d]">

        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050b11] via-transparent to-transparent" />

        {/* Brand */}
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
          {car.brand}
        </div>

        {/* Type */}
        <div className="absolute bottom-4 right-4 rounded-full bg-[#39f77b] px-3 py-1.5 text-[10px] font-bold text-[#06100a]">
          {car.type}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h2 className="text-lg font-extrabold text-white transition group-hover:text-[#39f77b]">
              {car.name}
            </h2>

            <p className="mt-1 text-xs text-gray-600">
              مدل {car.year}
            </p>
          </div>

          <span className="whitespace-nowrap text-xs font-bold text-[#39f77b]">
            {car.range}
          </span>

        </div>

        {/* Specs */}
        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/5 py-4">

          <div className="text-center">
            <span className="block text-[10px] text-gray-600">
              قدرت
            </span>

            <span className="mt-1 block text-[11px] font-bold text-gray-300">
              {car.power}
            </span>
          </div>

          <div className="border-x border-white/5 text-center">
            <span className="block text-[10px] text-gray-600">
              شتاب
            </span>

            <span className="mt-1 block text-[11px] font-bold text-gray-300">
              {car.acceleration}
            </span>
          </div>

          <div className="text-center">
            <span className="block text-[10px] text-gray-600">
              باتری
            </span>

            <span className="mt-1 block text-[11px] font-bold text-gray-300">
              {car.battery}
            </span>
          </div>

        </div>

        <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-500">
          {car.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">

          <span className="text-xs font-bold text-gray-300">
            {car.price}
          </span>

          <a
            href={`/cars/${car.slug}`}
            className="rounded-xl bg-[#39f77b] px-4 py-2.5 text-[11px] font-extrabold text-[#06100a] transition hover:bg-[#66ff9a]"
          >
            مشاهده خودرو
          </a>

        </div>

      </div>

    </article>
  );
}