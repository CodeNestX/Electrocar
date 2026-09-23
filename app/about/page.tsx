import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "درباره ما | ElectroCar",
  description:
    "ElectroCar یک مجله تخصصی درباره خودروهای برقی، فناوری، شارژ و آینده حمل‌ونقل الکتریکی است.",
};

const values = [
  {
    icon: "⚡",
    title: "تمرکز بر خودروهای برقی",
    text: "ElectroCar با تمرکز بر دنیای خودروهای الکتریکی، اطلاعات فنی و محتوای مرتبط با این حوزه را در اختیار کاربران قرار می‌دهد.",
  },
  {
    icon: "◉",
    title: "محتوای قابل فهم",
    text: "هدف ما این است که موضوعات فنی پیچیده را با زبانی ساده‌تر و قابل فهم برای علاقه‌مندان خودرو توضیح دهیم.",
  },
  {
    icon: "↗",
    title: "نگاه به آینده",
    text: "فناوری خودروهای برقی با سرعت زیادی در حال تغییر است و ElectroCar تلاش می‌کند تحولات این حوزه را دنبال کند.",
  },
  {
    icon: "▣",
    title: "بررسی و مقایسه",
    text: "مشخصات خودروها، فناوری‌ها و روش‌های مختلف شارژ را می‌توان در بخش‌های مختلف سایت بررسی و مقایسه کرد.",
  },
];

const stats = [
  {
    value: "01",
    title: "اخبار",
    text: "تحولات دنیای خودروهای برقی",
  },
  {
    value: "02",
    title: "مقالات",
    text: "مطالب آموزشی و تخصصی",
  },
  {
    value: "03",
    title: "خودروها",
    text: "معرفی مدل‌های مختلف",
  },
  {
    value: "04",
    title: "فناوری",
    text: "بررسی تکنولوژی‌های EV",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.14),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm text-[#39f77b]">
                درباره ElectroCar
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                آینده حمل‌ونقل
                <span className="text-[#39f77b]"> الکتریکی </span>
                را بشناسید
              </h1>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
                ElectroCar یک پلتفرم محتوایی با تمرکز بر خودروهای برقی،
                فناوری‌های مرتبط، روش‌های شارژ و تحولات صنعت خودرو است.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#39f77b]">
                درباره ما
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                ElectroCar برای علاقه‌مندان به دنیای خودرو
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                صنعت خودرو در سال‌های اخیر تغییرات زیادی را تجربه کرده
                است. خودروهای برقی، سیستم‌های هوشمند، فناوری‌های جدید
                باتری و زیرساخت‌های شارژ، بخش مهمی از این تغییر هستند.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                ElectroCar با هدف ارائه محتوای آموزشی، معرفی خودروها،
                بررسی فناوری‌ها و انتشار اخبار مرتبط با این حوزه طراحی
                شده است.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cars"
                  className="rounded-xl bg-[#39f77b] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#69ff9a]"
                >
                  مشاهده خودروها
                </Link>

                <Link
                  href="/articles"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-[#39f77b]/30"
                >
                  مطالعه مقالات
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,247,123,0.13),transparent_50%)]" />

              <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#39f77b]/20 bg-[#39f77b]/5">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#39f77b]/30 bg-[#39f77b]/10 text-5xl text-[#39f77b]">
                  ⚡
                </div>
              </div>

              <div className="absolute left-8 top-8 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="mt-1 font-bold">Electric Mobility</p>
              </div>

              <div className="absolute bottom-8 right-8 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <p className="text-xs text-gray-500">Future</p>
                <p className="mt-1 font-bold text-[#39f77b]">
                  Electric
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-white/10 bg-[#080b10]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold text-[#39f77b]">
                چرا ElectroCar؟
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                محتوایی برای شناخت بهتر خودروهای برقی
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#39f77b]/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#39f77b]/10 text-2xl text-[#39f77b]">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[#39f77b]">
              بخش‌های سایت
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              ElectroCar چه چیزهایی ارائه می‌دهد؟
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-3xl border border-white/10 bg-[#0b0f16] p-7"
              >
                <span className="text-4xl font-black text-[#39f77b]/20">
                  {item.value}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#39f77b]/20 bg-[#0b0f16] p-8 text-center sm:p-12">
            <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39f77b]/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold text-[#39f77b]">
                ElectroCar
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                دنیای خودروهای برقی را کشف کنید
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                خودروها، فناوری‌ها، مقالات و راهنمای شارژ را در بخش‌های
                مختلف سایت بررسی کنید.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/cars"
                  className="rounded-xl bg-[#39f77b] px-6 py-3 font-bold text-black transition hover:bg-[#69ff9a]"
                >
                  خودروهای برقی
                </Link>

                <Link
                  href="/technology"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#39f77b]/30"
                >
                  فناوری‌ها
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}