"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cars } from "@/data/cars";
import { localizeCar } from "@/data/carsI18n";
import { useLanguage } from "@/context/LanguageContext";

const ui = {
  fa: {
    selectLabel: "انتخاب خودرو",
    selectTitle: "خودروهای مورد نظر خود را انتخاب کنید",
    selectHint: "حداقل ۲ و حداکثر ۳ خودرو را برای مقایسه انتخاب کنید.",
    addCar: "+ افزودن خودرو",
    carN: "خودرو",
    details: "مشاهده جزئیات ←",
    remove: "حذف",
    tableLabel: "جدول مقایسه",
    tableTitle: "مقایسه مشخصات فنی",
    specHeader: "مشخصات",
    featuresLabel: "ویژگی‌ها",
    featuresTitle: "امکانات و ویژگی‌های خودرو",
    note: "توجه:",
    disclaimer:
      "اطلاعات خودروها در نسخه فعلی برای طراحی و نمایش رابط کاربری به‌صورت نمونه قرار داده شده‌اند. برای نسخه نهایی پروژه، مشخصات فنی و قیمت‌ها باید با اطلاعات رسمی و بازار هدف تطبیق داده شوند.",
    rows: {
      brand: "برند",
      type: "نوع خودرو",
      year: "مدل",
      range: "برد حرکتی",
      power: "قدرت موتور",
      acceleration: "شتاب ۰ تا ۱۰۰",
      battery: "ظرفیت باتری",
      charging: "شارژ سریع",
      topSpeed: "حداکثر سرعت",
      price: "قیمت",
    },
  },
  en: {
    selectLabel: "Select cars",
    selectTitle: "Choose the cars you want to compare",
    selectHint: "Select at least 2 and at most 3 cars to compare.",
    addCar: "+ Add car",
    carN: "Car",
    details: "View details →",
    remove: "Remove",
    tableLabel: "Comparison table",
    tableTitle: "Technical specs comparison",
    specHeader: "Specification",
    featuresLabel: "Features",
    featuresTitle: "Car features and options",
    note: "Note:",
    disclaimer:
      "The car information in the current version is sample data for UI design and display. For the final version of the project, the specs and prices must be matched with official information and the target market.",
    rows: {
      brand: "Brand",
      type: "Car type",
      year: "Model year",
      range: "Driving range",
      power: "Motor power",
      acceleration: "0–100 km/h",
      battery: "Battery capacity",
      charging: "Fast charging",
      topSpeed: "Top speed",
      price: "Price",
    },
  },
};

export default function CompareCars() {
  const { language } = useLanguage();
  const t = ui[language];

  const [selectedCars, setSelectedCars] = useState<string[]>([
    cars[0]?.slug ?? "",
    cars[2]?.slug ?? "",
  ]);

  const localizedCars = cars.map((car) => localizeCar(car, language));

  const getCar = (slug: string) => {
    return localizedCars.find((car) => car.slug === slug);
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
    { label: t.rows.brand, key: "brand" },
    { label: t.rows.type, key: "type" },
    { label: t.rows.year, key: "year" },
    { label: t.rows.range, key: "range" },
    { label: t.rows.power, key: "power" },
    { label: t.rows.acceleration, key: "acceleration" },
    { label: t.rows.battery, key: "battery" },
    { label: t.rows.charging, key: "charging" },
    { label: t.rows.topSpeed, key: "topSpeed" },
    { label: t.rows.price, key: "price" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Selection header */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            {t.selectLabel}
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            {t.selectTitle}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {t.selectHint}
          </p>
        </div>

        {selectedCars.length < 3 && (
          <button
            onClick={addCar}
            className="rounded-xl border border-[#39f77b]/30 bg-[#39f77b]/10 px-5 py-3 text-sm font-semibold text-[#39f77b] transition hover:bg-[#39f77b]/20"
          >
            {t.addCar}
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

                <div className="absolute start-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                  {t.carN} {index + 1}
                </div>
              </div>

              <div className="p-5">
                {/* Select */}
                <label className="mb-2 block text-xs text-gray-500">
                  {t.selectLabel}
                </label>

                <select
                  value={slug}
                  onChange={(e) => changeCar(index, e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#121722] px-4 py-3 text-sm text-white outline-none transition focus:border-[#39f77b]/50"
                >
                  {localizedCars.map((item) => (
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
                    {t.details}
                  </Link>

                  {selectedCars.length > 2 && (
                    <button
                      onClick={() => removeCar(slug)}
                      className="text-sm text-red-400 transition hover:text-red-300"
                    >
                      {t.remove}
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
            {t.tableLabel}
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            {t.tableTitle}
          </h2>
        </div>

        {/* Desktop / horizontal table */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-start">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="w-44 px-5 py-5 text-start text-sm font-semibold text-gray-400">
                    {t.specHeader}
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
            {t.featuresLabel}
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            {t.featuresTitle}
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
          {t.note}
        </span>{" "}
        {t.disclaimer}
      </div>
    </section>
  );
}
