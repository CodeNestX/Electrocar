"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cars } from "@/data/cars";

export default function CompareCars() {
  const [selectedCars, setSelectedCars] = useState<string[]>([
    cars[0]?.slug ?? "",
    cars[2]?.slug ?? "",
  ]);

  const getCar = (slug: string) => {
    return cars.find((car) => car.slug === slug);
  };

  const addCar = () => {
    if (selectedCars.length >= 3) return;

    const availableCar = cars.find(
      (car) => !selectedCars.includes(car.slug)
    );

    if (availableCar) {
      setSelectedCars([...selectedCars, availableCar.slug]);
    }
  };

  const removeCar = (slug: string) => {
    if (selectedCars.length <= 2) return;

    setSelectedCars(selectedCars.filter((item) => item !== slug));
  };

  const changeCar = (index: number, slug: string) => {
    const newSelection = [...selectedCars];
    newSelection[index] = slug;
    setSelectedCars(newSelection);
  };

  const comparisonRows = [
    {
      label: "برند",
      key: "brand",
    },
    {
      label: "نوع خودرو",
      key: "type",
    },
    {
      label: "مدل",
      key: "year",
    },
    {
      label: "برد حرکتی",
      key: "range",
    },
    {
      label: "قدرت موتور",
      key: "power",
    },
    {
      label: "شتاب ۰ تا ۱۰۰",
      key: "acceleration",
    },
    {
      label: "ظرفیت باتری",
      key: "battery",
    },
    {
      label: "شارژ سریع",
      key: "charging",
    },
    {
      label: "حداکثر سرعت",
      key: "topSpeed",
    },
    {
      label: "قیمت",
      key: "price",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Selection header */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            انتخاب خودرو
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            خودروهای مورد نظر خود را انتخاب کنید
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            حداقل ۲ و حداکثر ۳ خودرو را برای مقایسه انتخاب کنید.
          </p>
        </div>

        {selectedCars.length < 3 && (
          <button
            onClick={addCar}
            className="rounded-xl border border-[#39f77b]/30 bg-[#39f77b]/10 px-5 py-3 text-sm font-semibold text-[#39f77b] transition hover:bg-[#39f77b]/20"
          >
            + افزودن خودرو
          </button>
        )}
      </div>

      {/* Selected cars */}
      <div
        className={`grid gap-5 ${
          selectedCars.length === 2
            ? "lg:grid-cols-2"
            : "lg:grid-cols-3"
        }`}
      >
        {selectedCars.map((slug, index) => {
          const car = getCar(slug);

          if (!car) return null;

          return (
            <div
              key={`${slug}-${index}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16] shadow-2xl shadow-black/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-transparent to-transparent" />

                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                  خودرو {index + 1}
                </div>
              </div>

              <div className="p-5">
                {/* Select */}
                <label className="mb-2 block text-xs text-gray-500">
                  انتخاب خودرو
                </label>

                <select
                  value={slug}
                  onChange={(e) => changeCar(index, e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#121722] px-4 py-3 text-sm text-white outline-none transition focus:border-[#39f77b]/50"
                >
                  {cars.map((item) => (
                    <option
                      key={item.slug}
                      value={item.slug}
                      disabled={
                        selectedCars.includes(item.slug) &&
                        item.slug !== slug
                      }
                    >
                      {item.name}
                    </option>
                  ))}
                </select>

                <div className="mt-5">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">{car.name}</h3>

                    <span className="rounded-lg bg-[#39f77b]/10 px-2 py-1 text-xs text-[#39f77b]">
                      {car.brand}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={`/cars/${car.slug}`}
                    className="text-sm font-medium text-[#39f77b] transition hover:text-white"
                  >
                    مشاهده جزئیات ←
                  </Link>

                  {selectedCars.length > 2 && (
                    <button
                      onClick={() => removeCar(slug)}
                      className="text-sm text-red-400 transition hover:text-red-300"
                    >
                      حذف
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison */}
      <div className="mt-14">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            جدول مقایسه
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            مقایسه مشخصات فنی
          </h2>
        </div>

        {/* Desktop / horizontal table */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-right">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="w-44 px-5 py-5 text-sm font-semibold text-gray-400">
                    مشخصات
                  </th>

                  {selectedCars.map((slug) => {
                    const car = getCar(slug);

                    if (!car) return null;

                    return (
                      <th
                        key={slug}
                        className="min-w-[220px] px-5 py-5 text-center"
                      >
                        <div className="text-base font-bold text-white">
                          {car.name}
                        </div>

                        <div className="mt-1 text-xs font-normal text-[#39f77b]">
                          {car.brand}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.key}
                    className={`border-b border-white/5 ${
                      index % 2 === 0 ? "bg-white/[0.015]" : ""
                    }`}
                  >
                    <td className="px-5 py-5 text-sm font-medium text-gray-400">
                      {row.label}
                    </td>

                    {selectedCars.map((slug) => {
                      const car = getCar(slug);

                      if (!car) return null;

                      const value = car[
                        row.key as keyof typeof car
                      ] as string;

                      return (
                        <td
                          key={`${slug}-${row.key}`}
                          className="px-5 py-5 text-center text-sm font-semibold text-white"
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Feature comparison */}
      <div className="mt-14">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            ویژگی‌ها
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            امکانات و ویژگی‌های خودرو
          </h2>
        </div>

        <div
          className={`grid gap-5 ${
            selectedCars.length === 2
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {selectedCars.map((slug) => {
            const car = getCar(slug);

            if (!car) return null;

            return (
              <div
                key={slug}
                className="rounded-3xl border border-white/10 bg-[#0b0f16] p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-bold">{car.name}</h3>

                  <span className="text-xs text-[#39f77b]">
                    {car.year}
                  </span>
                </div>

                <ul className="space-y-3">
                  {car.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-400"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#39f77b]/10 text-[#39f77b]">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notice */}
      <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-gray-400">
        <span className="font-semibold text-yellow-400">
          توجه:
        </span>{" "}
        اطلاعات خودروها در نسخه فعلی برای طراحی و نمایش رابط کاربری به‌صورت
        نمونه قرار داده شده‌اند. برای نسخه نهایی پروژه، مشخصات فنی و قیمت‌ها
        باید با اطلاعات رسمی و بازار هدف تطبیق داده شوند.
      </div>
    </section>
  );
}