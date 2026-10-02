"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Language = "fa" | "en";

type Technology = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  details: string[];
};

const technologies: Record<Language, Technology[]> = {
  fa: [
    {
      id: "battery",
      title: "باتری",
      subtitle: "قلب انرژی خودرو",
      icon: "▣",
      description:
        "باتری یکی از مهم‌ترین بخش‌های خودروهای برقی است. انرژی الکتریکی مورد نیاز موتور و بسیاری از سیستم‌های خودرو در باتری ذخیره می‌شود.",
      details: [
        "بسیاری از خودروهای مدرن از باتری‌های لیتیوم-یونی استفاده می‌کنند.",
        "ظرفیت باتری معمولاً با kWh بیان می‌شود.",
        "سیستم مدیریت باتری وضعیت سلول‌ها و دمای آن‌ها را کنترل می‌کند.",
        "دما، نحوه شارژ و الگوی استفاده می‌توانند روی عملکرد باتری تأثیر بگذارند.",
      ],
    },
    {
      id: "motor",
      title: "موتور الکتریکی",
      subtitle: "تبدیل انرژی به حرکت",
      icon: "⚡",
      description:
        "موتور الکتریکی انرژی ذخیره‌شده در باتری را به نیروی مکانیکی تبدیل می‌کند. یکی از ویژگی‌های مهم موتورهای الکتریکی، ارائه گشتاور بالا از دورهای پایین است.",
      details: [
        "موتورهای مختلفی مانند PMSM و القایی در خودروهای برقی استفاده می‌شوند.",
        "خودرو می‌تواند یک یا چند موتور الکتریکی داشته باشد.",
        "موتورهای دوگانه امکان ایجاد سیستم چهارچرخ محرک را فراهم می‌کنند.",
        "کنترل الکترونیکی موتور نقش مهمی در بازده و عملکرد خودرو دارد.",
      ],
    },
    {
      id: "bms",
      title: "سیستم BMS",
      subtitle: "مدیریت هوشمند باتری",
      icon: "◉",
      description:
        "Battery Management System یا BMS وظیفه نظارت و مدیریت باتری را بر عهده دارد و به حفظ عملکرد، ایمنی و شرایط مناسب سلول‌های باتری کمک می‌کند.",
      details: [
        "نظارت بر ولتاژ سلول‌ها",
        "کنترل دمای باتری",
        "مدیریت وضعیت شارژ باتری",
        "کمک به محافظت از باتری در شرایط غیرعادی",
      ],
    },
    {
      id: "regen",
      title: "ترمز احیاکننده",
      subtitle: "بازگرداندن انرژی",
      icon: "↻",
      description:
        "در سیستم ترمز احیاکننده، هنگام کاهش سرعت بخشی از انرژی جنبشی خودرو می‌تواند به انرژی الکتریکی تبدیل شده و دوباره به باتری منتقل شود.",
      details: [
        "در زمان کاهش سرعت، موتور می‌تواند مانند یک ژنراتور عمل کند.",
        "انرژی حاصل می‌تواند به باتری بازگردد.",
        "این سیستم می‌تواند نیاز به استفاده از ترمز اصطکاکی را کاهش دهد.",
        "میزان بازیابی انرژی به شرایط رانندگی و طراحی خودرو بستگی دارد.",
      ],
    },
    {
      id: "adas",
      title: "ADAS",
      subtitle: "سیستم‌های کمک‌راننده",
      icon: "◎",
      description:
        "سیستم‌های پیشرفته کمک‌راننده مجموعه‌ای از دوربین‌ها، رادارها و نرم‌افزارها هستند که برای کمک به راننده در شرایط مختلف طراحی شده‌اند.",
      details: [
        "هشدار خروج از خط",
        "کروز کنترل تطبیقی",
        "ترمز اضطراری خودکار",
        "تشخیص خودروها و موانع اطراف",
      ],
    },
    {
      id: "software",
      title: "نرم‌افزار خودرو",
      subtitle: "خودرویی که به‌روزرسانی می‌شود",
      icon: "</>",
      description:
        "نرم‌افزار در خودروهای مدرن نقش بسیار مهمی دارد. بسیاری از قابلیت‌های خودرو توسط نرم‌افزار کنترل می‌شوند و برخی سازندگان امکان به‌روزرسانی از راه دور را فراهم کرده‌اند.",
      details: [
        "کنترل سیستم‌های خودرو",
        "مدیریت انرژی",
        "بهبود عملکرد سیستم‌ها",
        "به‌روزرسانی نرم‌افزاری از راه دور در برخی مدل‌ها",
      ],
    },
  ],
  en: [
    {
      id: "battery",
      title: "Battery",
      subtitle: "The heart of the car's energy",
      icon: "▣",
      description:
        "The battery is one of the most important parts of an electric car. The electrical energy needed by the motor and many of the car's systems is stored in the battery.",
      details: [
        "Many modern cars use lithium-ion batteries.",
        "Battery capacity is usually expressed in kWh.",
        "The battery management system monitors the condition and temperature of the cells.",
        "Temperature, charging habits, and usage patterns can affect battery performance.",
      ],
    },
    {
      id: "motor",
      title: "Electric motor",
      subtitle: "Turning energy into motion",
      icon: "⚡",
      description:
        "The electric motor converts the energy stored in the battery into mechanical force. One key characteristic of electric motors is delivering high torque from low speeds.",
      details: [
        "Different motor types, such as PMSM and induction motors, are used in electric cars.",
        "A car can have one or several electric motors.",
        "Dual motors make it possible to create an all-wheel-drive system.",
        "Electronic motor control plays an important role in the car's efficiency and performance.",
      ],
    },
    {
      id: "bms",
      title: "BMS",
      subtitle: "Smart battery management",
      icon: "◉",
      description:
        "The Battery Management System (BMS) monitors and manages the battery, helping maintain the performance, safety, and proper condition of the battery cells.",
      details: [
        "Monitoring cell voltage",
        "Controlling battery temperature",
        "Managing the battery's state of charge",
        "Helping protect the battery in abnormal conditions",
      ],
    },
    {
      id: "regen",
      title: "Regenerative braking",
      subtitle: "Recovering energy",
      icon: "↻",
      description:
        "In a regenerative braking system, part of the car's kinetic energy can be converted into electrical energy during deceleration and sent back to the battery.",
      details: [
        "When slowing down, the motor can act like a generator.",
        "The recovered energy can return to the battery.",
        "This system can reduce the need for friction braking.",
        "The amount of energy recovered depends on driving conditions and the car's design.",
      ],
    },
    {
      id: "adas",
      title: "ADAS",
      subtitle: "Driver assistance systems",
      icon: "◎",
      description:
        "Advanced driver assistance systems are a set of cameras, radars, and software designed to help the driver in various situations.",
      details: [
        "Lane departure warning",
        "Adaptive cruise control",
        "Automatic emergency braking",
        "Detection of nearby vehicles and obstacles",
      ],
    },
    {
      id: "software",
      title: "Car software",
      subtitle: "A car that gets updated",
      icon: "</>",
      description:
        "Software plays a very important role in modern cars. Many of a car's features are controlled by software, and some manufacturers offer over-the-air updates.",
      details: [
        "Controlling the car's systems",
        "Energy management",
        "Improving system performance",
        "Over-the-air software updates in some models",
      ],
    },
  ],
};

const architecture: Record<
  Language,
  { number: string; title: string; text: string }[]
> = {
  fa: [
    { number: "01", title: "باتری", text: "انرژی الکتریکی را ذخیره می‌کند." },
    {
      number: "02",
      title: "اینورتر",
      text: "توان الکتریکی را برای موتور مدیریت و تبدیل می‌کند.",
    },
    {
      number: "03",
      title: "موتور",
      text: "انرژی الکتریکی را به حرکت تبدیل می‌کند.",
    },
    {
      number: "04",
      title: "چرخ‌ها",
      text: "نیروی تولیدشده را به حرکت خودرو تبدیل می‌کنند.",
    },
  ],
  en: [
    { number: "01", title: "Battery", text: "Stores electrical energy." },
    {
      number: "02",
      title: "Inverter",
      text: "Manages and converts electrical power for the motor.",
    },
    {
      number: "03",
      title: "Motor",
      text: "Converts electrical energy into motion.",
    },
    {
      number: "04",
      title: "Wheels",
      text: "Turn the generated force into the car's movement.",
    },
  ],
};

const ui = {
  fa: {
    introTitle: "تکنولوژی‌های اصلی خودروهای برقی",
    introText:
      "خودروهای برقی فقط یک موتور و باتری نیستند. مجموعه‌ای از سیستم‌های الکترونیکی، نرم‌افزاری و مکانیکی در کنار یکدیگر عملکرد خودرو را شکل می‌دهند.",
    keyTech: "فناوری کلیدی خودروهای برقی",
    aboutTech: "درباره این فناوری",
    keyPoints: "نکات مهم",
    archTitle: "یک خودروی برقی چگونه حرکت می‌کند؟",
    archText:
      "به‌صورت ساده، انرژی از باتری دریافت و توسط مجموعه‌ای از سیستم‌های الکتریکی و مکانیکی به حرکت تبدیل می‌شود.",
    batteryTitle: "چرا باتری این‌قدر مهم است؟",
    batteryText:
      "باتری بخش بزرگی از هزینه و وزن یک خودروی برقی را تشکیل می‌دهد و ظرفیت آن مستقیماً روی مقدار انرژی قابل ذخیره تأثیر دارد.",
    capacityUnit: "واحد ظرفیت",
    management: "مدیریت",
    importantNote: "نکته مهم",
    moreTitle: "ظرفیت بیشتر همیشه به معنی عملکرد بهتر نیست",
    moreText:
      "برد خودرو تنها به ظرفیت باتری وابسته نیست. وزن خودرو، آیرودینامیک، بازده موتور، شرایط آب‌وهوا، سرعت رانندگی و سبک رانندگی نیز می‌توانند روی مصرف انرژی تأثیر داشته باشند.",
    moreConclusion:
      "بنابراین هنگام بررسی خودروهای برقی، بهتر است مجموعه‌ای از مشخصات فنی را در کنار یکدیگر بررسی کنید.",
    adasTitle: "فناوری‌هایی که به راننده کمک می‌کنند",
    adasText:
      "سیستم‌های کمک‌راننده با استفاده از حسگرها و نرم‌افزارهای مختلف، اطلاعات محیط اطراف خودرو را تحلیل کرده و در برخی شرایط به راننده هشدار یا کمک ارائه می‌کنند.",
    adasList: [
      "کروز کنترل تطبیقی",
      "هشدار خروج از خط",
      "ترمز اضطراری",
      "تشخیص نقاط کور",
      "تشخیص علائم رانندگی",
      "پارک خودکار",
    ],
    adasNote:
      "سیستم‌های کمک‌راننده جایگزین توجه و کنترل راننده نیستند و قابلیت‌های واقعی آن‌ها به مدل خودرو و تجهیزات نصب‌شده بستگی دارد.",
    note: "توجه:",
    disclaimer:
      "مطالب این صفحه برای نمونه محتوایی و طراحی رابط کاربری تهیه شده‌اند. جزئیات فنی نهایی باید پیش از انتشار با منابع رسمی سازندگان و منابع تخصصی معتبر بررسی شوند.",
  },
  en: {
    introTitle: "Key technologies in electric cars",
    introText:
      "Electric cars are more than just a motor and a battery. A set of electronic, software, and mechanical systems work together to shape the car's performance.",
    keyTech: "A key electric-car technology",
    aboutTech: "About this technology",
    keyPoints: "Key points",
    archTitle: "How does an electric car move?",
    archText:
      "In simple terms, energy is drawn from the battery and turned into motion by a set of electrical and mechanical systems.",
    batteryTitle: "Why is the battery so important?",
    batteryText:
      "The battery makes up a large share of an electric car's cost and weight, and its capacity directly affects how much energy can be stored.",
    capacityUnit: "Capacity unit",
    management: "Management",
    importantNote: "Important note",
    moreTitle: "More capacity doesn't always mean better performance",
    moreText:
      "A car's range doesn't depend on battery capacity alone. Vehicle weight, aerodynamics, motor efficiency, weather conditions, driving speed, and driving style can also affect energy consumption.",
    moreConclusion:
      "So when evaluating electric cars, it's best to look at a range of technical specs together.",
    adasTitle: "Technologies that help the driver",
    adasText:
      "Driver assistance systems use various sensors and software to analyze the car's surroundings and, in some situations, warn or assist the driver.",
    adasList: [
      "Adaptive cruise control",
      "Lane departure warning",
      "Emergency braking",
      "Blind-spot detection",
      "Traffic sign recognition",
      "Automatic parking",
    ],
    adasNote:
      "Driver assistance systems do not replace the driver's attention and control, and their actual capabilities depend on the car model and installed equipment.",
    note: "Note:",
    disclaimer:
      "The content on this page was prepared as a content and UI design sample. The final technical details should be verified against official manufacturer sources and reliable specialist sources before publication.",
  },
};

export default function EVTechnology() {
  const [activeTechnology, setActiveTechnology] = useState("battery");
  const { language } = useLanguage();
  const isFa = language === "fa";

  const t = ui[language];
  const techList = technologies[language];
  const arch = architecture[language];

  const active =
    techList.find((item) => item.id === activeTechnology) ?? techList[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Intro */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold text-[#39f77b]">
          EV Technology
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          {t.introTitle}
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          {t.introText}
        </p>
      </div>

      {/* Technology selector */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techList.map((technology) => {
          const isActive = activeTechnology === technology.id;

          return (
            <button
              key={technology.id}
              onClick={() => setActiveTechnology(technology.id)}
              className={`group rounded-3xl border p-6 text-start transition duration-300 ${
                isActive
                  ? "border-[#39f77b]/50 bg-[#39f77b]/10 shadow-[0_0_40px_rgba(57,247,123,0.07)]"
                  : "border-white/10 bg-[#0b0f16] hover:border-[#39f77b]/30"
              }`}
            >
              <div
                dir="ltr"
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl transition ${
                  isActive
                    ? "bg-[#39f77b] text-black"
                    : "bg-white/5 text-[#39f77b]"
                }`}
              >
                {technology.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {technology.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {technology.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active technology */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* Visual */}
          <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-[#101820] to-[#05070b] p-8">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#39f77b]/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="rounded-full bg-[#39f77b]/10 px-3 py-1 text-xs text-[#39f77b]">
                  Technology
                </span>

                <div
                  dir="ltr"
                  className="mt-12 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#39f77b]/20 bg-[#39f77b]/10 text-5xl text-[#39f77b]"
                >
                  {active.icon}
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {active.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {active.subtitle}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#39f77b]" />

                <span className="text-sm text-gray-500">
                  {t.keyTech}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold text-[#39f77b]">
              {t.aboutTech}
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              {active.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {active.description}
            </p>

            <div className="mt-8">
              <h4 className="mb-4 font-bold">{t.keyPoints}</h4>

              <div className="space-y-3">
                {active.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="mt-1 text-[#39f77b]">✓</span>

                    <p className="text-sm leading-7 text-gray-400">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How EV works */}
      <div className="mt-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold text-[#39f77b]">
            EV Architecture
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.archTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
            {t.archText}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (starts at the reading-start side) */}
          <div
            className={`absolute start-8 top-8 hidden h-px w-[calc(100%-4rem)] from-[#39f77b]/40 via-[#39f77b]/10 to-transparent lg:block ${
              isFa ? "bg-gradient-to-l" : "bg-gradient-to-r"
            }`}
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {arch.map((item) => (
              <div
                key={item.number}
                className="relative rounded-3xl border border-white/10 bg-[#0b0f16] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#39f77b]/20">
                    {item.number}
                  </span>

                  <span className="h-3 w-3 rounded-full bg-[#39f77b] shadow-[0_0_15px_rgba(57,247,123,0.5)]" />
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Battery */}
      <div className="mt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#0b0f16] p-8">
            <p className="text-sm font-semibold text-[#39f77b]">
              Battery Pack
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {t.batteryTitle}
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              {t.batteryText}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="text-xs text-gray-500">
                  {t.capacityUnit}
                </span>

                <p className="mt-2 text-xl font-bold text-[#39f77b]">
                  kWh
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="text-xs text-gray-500">
                  {t.management}
                </span>

                <p className="mt-2 text-xl font-bold text-[#39f77b]">
                  BMS
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#39f77b]/20 bg-[#39f77b]/5 p-8">
            <p className="text-sm font-semibold text-[#39f77b]">
              {t.importantNote}
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {t.moreTitle}
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              {t.moreText}
            </p>

            <div className="mt-7 rounded-2xl border border-[#39f77b]/10 bg-black/20 p-5">
              <p className="text-sm leading-7 text-gray-400">
                {t.moreConclusion}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADAS */}
      <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[400px] bg-gradient-to-br from-[#0d1713] via-[#0b0f16] to-[#05070b] p-8 lg:p-10">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39f77b]/20" />

              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39f77b]/20" />

              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39f77b]/10" />
            </div>

            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#39f77b]/30 bg-[#39f77b]/10 text-4xl text-[#39f77b]">
                ◎
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                ADAS
              </h3>

              <p className="mt-2 text-gray-500">
                Advanced Driver Assistance Systems
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold text-[#39f77b]">
              Driver Assistance
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {t.adasTitle}
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              {t.adasText}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.adasList.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-gray-400"
                >
                  <span className="me-2 text-[#39f77b]">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <p className="text-xs leading-6 text-gray-500">
                {t.adasNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-gray-400">
        <span className="font-semibold text-yellow-400">
          {t.note}
        </span>{" "}
        {t.disclaimer}
      </div>
    </section>
  );
}
