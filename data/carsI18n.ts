import { Car } from "@/types/car";

export type Language = "fa" | "en";

/**
 * data/cars.ts stays the single source of truth (Persian).
 * This file only adds the English layer on top of it, so the
 * Car type and every existing consumer keep working unchanged.
 */

const typeEn: Record<string, string> = {
  "سدان": "Sedan",
  "کراس‌اوور": "Crossover",
};

const colorEn: Record<string, string> = {
  "مشکی": "Black",
  "سفید": "White",
  "خاکستری": "Gray",
  "آبی": "Blue",
  "قرمز": "Red",
  "سبز": "Green",
};

const textEn: Record<string, { description: string; features: string[] }> = {
  "tesla-model-3": {
    description:
      "The Tesla Model 3 is one of the best-known electric cars in the world, combining minimalist design, strong performance, and software-driven technology.",
    features: [
      "Advanced driver-assistance system",
      "Large central display",
      "Over-the-air software updates",
      "Fast charging system",
      "Smart battery management system",
    ],
  },
  "tesla-model-y": {
    description:
      "The Tesla Model Y is an electric crossover with a spacious cabin, notable range, and a set of software and safety features.",
    features: [
      "Spacious cabin",
      "Driver-assistance system",
      "Fast charging",
      "Central display",
      "Smart energy management system",
    ],
  },
  "byd-seal": {
    description:
      "The BYD Seal is a modern electric sedan that brings together sporty design, battery technology, and strong performance in one package.",
    features: [
      "Blade battery",
      "Fast charging system",
      "Rotating display",
      "Driver-assistance systems",
      "Aerodynamic design",
    ],
  },
  "hyundai-ioniq-5": {
    description:
      "With its distinctive design and a dedicated electric-vehicle architecture, the IONIQ 5 offers a modern interior and fast-charging capability.",
    features: [
      "800V architecture",
      "Ultra-fast charging",
      "Flexible interior",
      "Driver-assistance systems",
      "V2L capability",
    ],
  },
  "kia-ev6": {
    description:
      "The Kia EV6 is an electric crossover with sporty design, a fast-charging architecture, and a modern cabin.",
    features: [
      "800V platform",
      "Fast charging",
      "Digital displays",
      "Driver-assistance systems",
      "Aerodynamic design",
    ],
  },
  "xpeng-g6": {
    description:
      "The XPeng G6 is an electric crossover with a special focus on technology, smart systems, and fast charging.",
    features: [
      "Smart driving system",
      "Fast charging",
      "Central display",
      "Battery thermal management system",
      "Driver-assistance systems",
    ],
  },
};

export function localizeCar(car: Car, language: Language): Car {
  if (language === "fa") return car;

  const text = textEn[car.slug];

  return {
    ...car,
    type: (typeEn[car.type] ?? car.type) as Car["type"],
    power: car.power.replace("اسب بخار", "hp"),
    acceleration: car.acceleration.replace("ثانیه", "s"),
    price: car.price.replace(
      /^از\s*([\d,]+)\s*دلار$/,
      (_match, amount: string) => `From $${amount}`
    ),
    description: text?.description ?? car.description,
    features: text?.features ?? car.features,
    colors: car.colors.map((color) => colorEn[color] ?? color),
  };
}
