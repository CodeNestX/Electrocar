/**
 * English version of the articles.
 *
 * - Lives in its own file so the Persian data (data/articles.ts) is untouched.
 * - `id` and `slug` MUST match the Persian article, so both languages share the same URL.
 *   (Dates below are the Gregorian equivalents of the Persian dates.)
 */

export type ArticleEn = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readingTime: string;
  author: string;
};

// Category filter labels shown on the English articles page (first = "All")
export const articleCategoriesEn = [
  "All",
  "EV Basics",
  "Battery",
  "Charging",
  "Technology",
  "Comparison",
  "Buying Guide",
  "Future of Cars",
];

export const articlesEn: ArticleEn[] = [
  {
    id: 1,
    title: "How Does an Electric Car Work? A Complete Beginner's Guide",
    slug: "how-does-electric-car-work",
    excerpt:
      "Unlike gasoline cars, electric cars don't use an internal combustion engine and draw the energy they need from a battery.",
    content:
      "Electric cars are one of the most important technologies in modern transportation. In a fully electric car, the energy needed for movement comes from a battery pack. This energy is delivered to the electric motor by the power management system, and the motor converts the electrical energy into motion.",
    category: "EV Basics",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85",
    date: "September 18, 2026",
    readingTime: "8 min",
    author: "ElectroCar Education Team",
  },

  {
    id: 2,
    title:
      "What Is an Electric Car Battery and How Does It Affect the Car's Performance?",
    slug: "electric-car-battery-guide",
    excerpt:
      "The battery can be considered one of the most important components of electric cars. Battery capacity, weight, and technology directly affect the driving experience.",
    content:
      "The battery is the heart of an electric car. A battery pack is made up of many cells that together store the energy the motor needs. Battery capacity is usually expressed in kilowatt-hours, and the higher the capacity, the more energy can be stored.",
    category: "Battery",
    image:
      "https://images.unsplash.com/photo-1617886322168-72e6e7a87f9b?auto=format&fit=crop&w=1200&q=85",
    date: "September 16, 2026",
    readingTime: "7 min",
    author: "ElectroCar Technology Team",
  },

  {
    id: 3,
    title: "What's the Difference Between AC and DC Charging?",
    slug: "ac-vs-dc-charging",
    excerpt:
      "AC and DC chargers are the two main ways of charging electric cars, and they differ in structure, speed, and use.",
    content:
      "Two main types of current, alternating and direct, are typically used to charge electric cars. In AC charging, the conversion is usually done by the car's onboard charger, whereas in many DC chargers the conversion takes place outside the car.",
    category: "Charging",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=85",
    date: "September 14, 2026",
    readingTime: "6 min",
    author: "ElectroCar Education Team",
  },

  {
    id: 4,
    title: "Electric or Hybrid? What's the Difference Between These Two Technologies?",
    slug: "electric-vs-hybrid-cars",
    excerpt:
      "Electric and hybrid cars both use modern technologies, but their powertrain structures are not exactly the same.",
    content:
      "A fully electric car uses an electric motor for propulsion, and its energy comes from the battery. Hybrid cars usually combine an internal combustion engine with an electric motor, and depending on the type of system, the way they get their energy differs.",
    category: "Comparison",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=85",
    date: "September 12, 2026",
    readingTime: "9 min",
    author: "ElectroCar Editorial Team",
  },

  {
    id: 5,
    title: "How Long Does an Electric Car Battery Last?",
    slug: "electric-car-battery-life",
    excerpt:
      "Various factors such as temperature, charging habits, and everyday use can affect the battery's long-term performance.",
    content:
      "Battery lifespan depends on several factors. The battery management system tries to keep charging conditions and cell temperature within a suitable range. How the car is used and environmental conditions can also influence how quickly the battery's capacity declines.",
    category: "Battery",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85",
    date: "September 10, 2026",
    readingTime: "5 min",
    author: "ElectroCar Technology Team",
  },

  {
    id: 6,
    title: "Are Electric Cars Suitable for Everyday Use?",
    slug: "are-electric-cars-good-for-daily-use",
    excerpt:
      "A look at the factors you should consider before choosing an electric car for city and daily use.",
    content:
      "Whether an electric car is suitable for everyday use depends on several factors, such as daily distance, access to a charger, battery capacity, and conditions of use. For many city drivers, electric cars can be a good option for daily commuting.",
    category: "Buying Guide",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85",
    date: "September 8, 2026",
    readingTime: "6 min",
    author: "ElectroCar Editorial Team",
  },

  {
    id: 7,
    title: "How Does Regenerative Braking Work in Electric Cars?",
    slug: "regenerative-braking-explained",
    excerpt:
      "Regenerative braking is one of the key technologies in electric cars and can recover part of the car's motion energy.",
    content:
      "When slowing down, the electric motor can, under certain conditions, act like a generator and convert part of the car's kinetic energy into electrical energy. This energy can then be sent back to the battery pack.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85",
    date: "September 6, 2026",
    readingTime: "5 min",
    author: "ElectroCar Technology Team",
  },

  {
    id: 8,
    title: "The Future of Electric Cars and Smart Transportation",
    slug: "future-of-electric-mobility",
    excerpt:
      "Electric cars can be an important part of the future smart transportation ecosystem.",
    content:
      "The future of transportation isn't limited to electric motors. Vehicle-to-infrastructure communication, driver-assistance systems, smart software, and energy management can play an important role in the next generation of transportation.",
    category: "Future of Cars",
    image:
      "https://images.unsplash.com/photo-1617886322168-72e6e7a87f9b?auto=format&fit=crop&w=1200&q=85",
    date: "September 4, 2026",
    readingTime: "7 min",
    author: "ElectroCar Editorial Team",
  },
];
