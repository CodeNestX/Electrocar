"use client";

import { useState } from "react";

type ChargingType = {
  id: string;
  title: string;
  subtitle: string;
  power: string;
  time: string;
  description: string;
  suitable: string;
  icon: string;
};

const chargingTypes: ChargingType[] = [
  {
    id: "slow",
    title: "شارژ خانگی",
    subtitle: "AC معمولی",
    power: "۲ تا ۳.۷ کیلووات",
    time: "۸ تا ۲۰ ساعت",
    description:
      "ساده‌ترین روش شارژ خودروهای برقی استفاده از برق شهری و تجهیزات شارژ خانگی است. این روش برای افرادی که خودرو را شب‌ها در پارکینگ قرار می‌دهند گزینه مناسبی محسوب می‌شود.",
    suitable: "مناسب برای استفاده روزمره",
    icon: "⌂",
  },
  {
    id: "wallbox",
    title: "وال‌باکس",
    subtitle: "AC سریع‌تر",
    power: "۷ تا ۲۲ کیلووات",
    time: "۳ تا ۸ ساعت",
    description:
      "وال‌باکس یک شارژر اختصاصی است که روی دیوار نصب می‌شود و نسبت به اتصال مستقیم به پریز، توان شارژ بیشتری در اختیار خودرو قرار می‌دهد.",
    suitable: "مناسب برای خانه و محل کار",
    icon: "▣",
  },
  {
    id: "fast",
    title: "شارژ سریع",
    subtitle: "DC Fast Charging",
    power: "۵۰ تا ۱۵۰ کیلووات",
    time: "۳۰ تا ۹۰ دقیقه",
    description:
      "شارژرهای سریع DC انرژی را با توان بالا مستقیماً به سیستم باتری خودرو منتقل می‌کنند و بیشتر برای سفرهای بین‌شهری و ایستگاه‌های عمومی کاربرد دارند.",
    suitable: "مناسب برای سفرهای طولانی",
    icon: "⚡",
  },
  {
    id: "ultra",
    title: "شارژ فوق سریع",
    subtitle: "High Power DC",
    power: "۱۵۰+ کیلووات",
    time: "۱۵ تا ۴۵ دقیقه",
    description:
      "ایستگاه‌های فوق سریع می‌توانند در مدت کوتاهی مقدار زیادی انرژی به باتری خودرو منتقل کنند؛ البته سرعت واقعی شارژ به خودرو، باتری و شرایط شارژ بستگی دارد.",
    suitable: "مناسب برای مسیرهای طولانی",
    icon: "↯",
  },
];

const chargingFactors = [
  {
    title: "ظرفیت باتری",
    text: "باتری بزرگ‌تر معمولاً برای پر شدن کامل به انرژی و زمان بیشتری نیاز دارد.",
    icon: "▤",
  },
  {
    title: "توان شارژر",
    text: "هرچه توان شارژر بیشتر باشد، امکان انتقال انرژی در زمان کوتاه‌تری فراهم می‌شود.",
    icon: "⚡",
  },
  {
    title: "توان ورودی خودرو",
    text: "خودرو محدودیت مشخصی برای دریافت توان دارد و همیشه نمی‌تواند تمام توان شارژر را دریافت کند.",
    icon: "◉",
  },
  {
    title: "دمای باتری",
    text: "دمای باتری می‌تواند روی سرعت شارژ و عملکرد سیستم مدیریت باتری تأثیر بگذارد.",
    icon: "◌",
  },
];

export default function ChargingGuide() {
  const [activeType, setActiveType] = useState("slow");

  const activeCharging =
    chargingTypes.find((item) => item.id === activeType) ??
    chargingTypes[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Intro */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold text-[#39f77b]">
          Charging Guide
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          کدام روش شارژ برای شما مناسب است؟
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          سرعت شارژ خودرو به عوامل مختلفی مثل نوع شارژر، ظرفیت باتری و
          توان قابل دریافت خودرو بستگی دارد. در ادامه انواع روش‌های
          شارژ را بررسی می‌کنیم.
        </p>
      </div>

      {/* Charging selector */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {chargingTypes.map((item) => {
          const isActive = activeType === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveType(item.id)}
              className={`group rounded-3xl border p-6 text-right transition duration-300 ${
                isActive
                  ? "border-[#39f77b]/50 bg-[#39f77b]/10 shadow-[0_0_40px_rgba(57,247,123,0.08)]"
                  : "border-white/10 bg-[#0b0f16] hover:border-[#39f77b]/30 hover:bg-[#0e141d]"
              }`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition ${
                  isActive
                    ? "bg-[#39f77b] text-black"
                    : "bg-white/5 text-[#39f77b]"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="mt-1 text-sm text-gray-500">
                {item.subtitle}
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">توان</span>
                  <span className="font-semibold text-white">
                    {item.power}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">زمان تقریبی</span>
                  <span className="font-semibold text-white">
                    {item.time}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active charging details */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
        <div className="grid lg:grid-cols-2">
          {/* Visual */}
          <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-[#101820] to-[#05070b] p-8">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#39f77b]/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full bg-[#39f77b]/10 px-3 py-1 text-xs font-medium text-[#39f77b]">
                  روش انتخاب‌شده
                </span>

                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#39f77b]/20 bg-[#39f77b]/10 text-4xl text-[#39f77b]">
                  {activeCharging.icon}
                </div>

                <h3 className="mt-7 text-3xl font-bold">
                  {activeCharging.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {activeCharging.subtitle}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  {activeCharging.power}
                </span>

                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  {activeCharging.time}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold text-[#39f77b]">
              درباره این روش
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              چگونه کار می‌کند؟
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {activeCharging.description}
            </p>

            <div className="mt-8 rounded-2xl border border-[#39f77b]/10 bg-[#39f77b]/5 p-5">
              <p className="text-sm text-gray-500">کاربرد پیشنهادی</p>

              <p className="mt-2 font-semibold text-[#39f77b]">
                {activeCharging.suitable}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs text-gray-500">توان شارژ</p>

                <p className="mt-2 text-lg font-bold">
                  {activeCharging.power}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs text-gray-500">زمان تقریبی</p>

                <p className="mt-2 text-lg font-bold">
                  {activeCharging.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AC vs DC */}
      <div className="mt-20">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            AC vs DC
          </p>

          <h2 className="text-3xl font-bold">
            تفاوت شارژ AC و DC چیست؟
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-gray-500">
            یکی از مهم‌ترین مفاهیمی که هنگام خرید یا استفاده از خودرو
            برقی باید بدانید، تفاوت شارژ متناوب و مستقیم است.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* AC */}
          <div className="rounded-3xl border border-white/10 bg-[#0b0f16] p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-400">
                AC
              </div>

              <div>
                <h3 className="text-xl font-bold">شارژ AC</h3>
                <p className="text-sm text-gray-500">
                  مناسب برای شارژ روزمره
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              در شارژ AC، برق متناوب وارد خودرو می‌شود و شارژر داخلی
              خودرو آن را برای استفاده در باتری تبدیل می‌کند. این روش
              بیشتر در خانه، محل کار و برخی ایستگاه‌های عمومی دیده می‌شود.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "مناسب برای استفاده روزمره",
                "مناسب برای شارژ شبانه",
                "هزینه تجهیزات معمولاً پایین‌تر",
                "سرعت کمتر نسبت به شارژ DC",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <span className="text-[#39f77b]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* DC */}
          <div className="rounded-3xl border border-[#39f77b]/20 bg-[#39f77b]/5 p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#39f77b]/10 text-xl font-bold text-[#39f77b]">
                DC
              </div>

              <div>
                <h3 className="text-xl font-bold">شارژ DC</h3>
                <p className="text-sm text-gray-500">
                  مناسب برای شارژ سریع
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              در شارژ سریع DC، انرژی با توان بالاتر مستقیماً برای شارژ
              باتری در اختیار خودرو قرار می‌گیرد. این روش بیشتر در
              ایستگاه‌های شارژ سریع و مسیرهای بین‌شهری استفاده می‌شود.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "سرعت شارژ بسیار بیشتر",
                "مناسب برای سفرهای طولانی",
                "مناسب برای ایستگاه‌های عمومی",
                "هزینه تجهیزات بالاتر",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <span className="text-[#39f77b]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charging factors */}
      <div className="mt-20">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold text-[#39f77b]">
            Charging Factors
          </p>

          <h2 className="text-3xl font-bold">
            چه عواملی روی سرعت شارژ تأثیر دارند؟
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chargingFactors.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#39f77b]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#39f77b]/10 text-xl text-[#39f77b]">
                {item.icon}
              </div>

              <h3 className="mt-5 font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#39f77b]/20 bg-[#0b0f16] p-8 sm:p-10">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#39f77b]/10 blur-3xl" />

        <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-right">
          <div>
            <p className="text-sm font-semibold text-[#39f77b]">
              انتخاب خودرو
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              هنوز نمی‌دانید کدام خودرو مناسب شماست؟
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-500">
              مشخصات خودروهای برقی مختلف را ببینید و آن‌ها را در کنار
              یکدیگر مقایسه کنید.
            </p>
          </div>

          <a
            href="/compare"
            className="shrink-0 rounded-xl bg-[#39f77b] px-6 py-3 font-bold text-black transition hover:bg-[#69ff9a]"
          >
            مقایسه خودروها
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-gray-400">
        <span className="font-semibold text-yellow-400">
          توجه:
        </span>{" "}
        اعداد مربوط به توان و زمان شارژ در این بخش برای نمونه طراحی
        رابط کاربری هستند. در نسخه نهایی سایت باید اطلاعات مربوط به
        هر خودرو و شارژر با مشخصات رسمی سازنده و تجهیزات مورد استفاده
        تطبیق داده شود.
      </div>
    </section>
  );
}