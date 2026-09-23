import { Car } from "@/types/car";

export const cars: Car[] = [
  {
    id: 1,
    name: "Tesla Model 3",
    slug: "tesla-model-3",
    brand: "Tesla",
    type: "سدان",
    year: "2026",
    image:
      "/images/Tesla Model 3.jpg",

    range: "629 km",
    power: "366 اسب بخار",
    acceleration: "3.1 ثانیه",
    battery: "79 kWh",
    charging: "250 kW",
    topSpeed: "201 km/h",

    price: "از 42,000 دلار",

    description:
      "Tesla Model 3 یکی از شناخته‌شده‌ترین خودروهای الکتریکی جهان است که ترکیبی از طراحی مینیمال، عملکرد مناسب و فناوری‌های نرم‌افزاری را ارائه می‌دهد.",

    features: [
      "سیستم کمک‌راننده پیشرفته",
      "نمایشگر مرکزی بزرگ",
      "به‌روزرسانی نرم‌افزاری از راه دور",
      "سیستم شارژ سریع",
      "سیستم مدیریت هوشمند باتری",
    ],

    colors: [
      "مشکی",
      "سفید",
      "خاکستری",
      "آبی",
      "قرمز",
    ],
  },

  {
    id: 2,
    name: "Tesla Model Y",
    slug: "tesla-model-y",
    brand: "Tesla",
    type: "کراس‌اوور",
    year: "2026",
    image:
      "/images/Tesla Model Y.jpg",

    range: "600 km",
    power: "456 اسب بخار",
    acceleration: "3.7 ثانیه",
    battery: "81 kWh",
    charging: "250 kW",
    topSpeed: "217 km/h",

    price: "از 46,000 دلار",

    description:
      "Tesla Model Y یک کراس‌اوور الکتریکی با فضای کابین مناسب، برد قابل توجه و مجموعه‌ای از امکانات نرم‌افزاری و ایمنی است.",

    features: [
      "فضای کابین جادار",
      "سیستم کمک‌راننده",
      "شارژ سریع",
      "نمایشگر مرکزی",
      "سیستم مدیریت انرژی هوشمند",
    ],

    colors: [
      "مشکی",
      "سفید",
      "آبی",
      "قرمز",
      "خاکستری",
    ],
  },

  {
    id: 3,
    name: "BYD Seal",
    slug: "byd-seal",
    brand: "BYD",
    type: "سدان",
    year: "2026",
    image:
      "/images/BYD Seal.jpg",

    range: "570 km",
    power: "530 اسب بخار",
    acceleration: "3.8 ثانیه",
    battery: "82.5 kWh",
    charging: "150 kW",
    topSpeed: "180 km/h",

    price: "از 45,000 دلار",

    description:
      "BYD Seal یک سدان الکتریکی مدرن است که طراحی اسپرت، فناوری باتری و عملکرد مناسب را در یک پکیج ارائه می‌کند.",

    features: [
      "باتری Blade",
      "سیستم شارژ سریع",
      "نمایشگر چرخان",
      "سیستم‌های کمک‌راننده",
      "طراحی آیرودینامیک",
    ],

    colors: [
      "مشکی",
      "سفید",
      "آبی",
      "خاکستری",
    ],
  },

  {
    id: 4,
    name: "Hyundai IONIQ 5",
    slug: "hyundai-ioniq-5",
    brand: "Hyundai",
    type: "کراس‌اوور",
    year: "2026",
    image:
      "/images/HyundaiIONIQ5.jpg",

    range: "570 km",
    power: "320 اسب بخار",
    acceleration: "5.2 ثانیه",
    battery: "84 kWh",
    charging: "240 kW",
    topSpeed: "185 km/h",

    price: "از 41,000 دلار",

    description:
      "IONIQ 5 با طراحی متفاوت و معماری اختصاصی خودروهای الکتریکی، فضای داخلی مدرن و قابلیت شارژ سریع را ارائه می‌دهد.",

    features: [
      "معماری 800 ولتی",
      "شارژ فوق سریع",
      "فضای داخلی انعطاف‌پذیر",
      "سیستم‌های کمک‌راننده",
      "قابلیت V2L",
    ],

    colors: [
      "سفید",
      "مشکی",
      "خاکستری",
      "سبز",
    ],
  },

  {
    id: 5,
    name: "Kia EV6",
    slug: "kia-ev6",
    brand: "Kia",
    type: "کراس‌اوور",
    year: "2026",
    image:
      "/images/Kia EV6.jpg",

    range: "528 km",
    power: "325 اسب بخار",
    acceleration: "5.2 ثانیه",
    battery: "84 kWh",
    charging: "240 kW",
    topSpeed: "185 km/h",

    price: "از 43,000 دلار",

    description:
      "Kia EV6 یک کراس‌اوور الکتریکی با طراحی اسپرت، معماری شارژ سریع و کابین مدرن است.",

    features: [
      "پلتفرم 800 ولتی",
      "شارژ سریع",
      "نمایشگرهای دیجیتال",
      "سیستم‌های کمک‌راننده",
      "طراحی آیرودینامیک",
    ],

    colors: [
      "مشکی",
      "سفید",
      "آبی",
      "قرمز",
    ],
  },

  {
    id: 6,
    name: "XPeng G6",
    slug: "xpeng-g6",
    brand: "XPeng",
    type: "کراس‌اوور",
    year: "2026",
    image:
      "/images/XPeng G6.jpg",

    range: "570 km",
    power: "476 اسب بخار",
    acceleration: "4.1 ثانیه",
    battery: "87.5 kWh",
    charging: "280 kW",
    topSpeed: "202 km/h",

    price: "از 39,000 دلار",

    description:
      "XPeng G6 یک کراس‌اوور الکتریکی با تمرکز ویژه بر فناوری، سیستم‌های هوشمند و شارژ سریع است.",

    features: [
      "سیستم رانندگی هوشمند",
      "شارژ سریع",
      "نمایشگر مرکزی",
      "سیستم مدیریت حرارتی باتری",
      "سیستم‌های کمک‌راننده",
    ],

    colors: [
      "مشکی",
      "سفید",
      "خاکستری",
      "آبی",
    ],
  },
];