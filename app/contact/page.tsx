import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "تماس با ما | ElectroCar",
  description:
    "راه‌های ارتباط با تیم ElectroCar برای ارسال پیشنهاد، همکاری و ارتباط با ما.",
};

const contactItems = [
  {
    icon: "✉",
    title: "ایمیل",
    value: "info@electrocar.ir",
    description: "برای ارسال پیشنهاد و درخواست همکاری",
  },
  {
    icon: "◎",
    title: "شبکه‌های اجتماعی",
    value: "@electrocar",
    description: "دنبال کردن آخرین مطالب و اخبار",
  },
  {
    icon: "⌂",
    title: "موقعیت",
    value: "ایران",
    description: "فعالیت محتوایی در حوزه خودروهای برقی",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.13),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm text-[#39f77b]">
              ارتباط با ElectroCar
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              با ما در
              <span className="text-[#39f77b]"> ارتباط باشید</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              پیشنهاد، انتقاد، درخواست همکاری یا ایده‌ای برای بهتر شدن
              ElectroCar دارید؟ پیام خود را برای ما ارسال کنید.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact info */}
            <div>
              <p className="text-sm font-semibold text-[#39f77b]">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                راه‌های ارتباطی
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                برای ارتباط با تیم ElectroCar می‌توانید از اطلاعات زیر
                استفاده کنید.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#0b0f16] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#39f77b]/10 text-xl text-[#39f77b]">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-bold">{item.title}</h3>

                        <p className="mt-1 text-sm text-[#39f77b]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-[#0b0f16] p-6 sm:p-8">
              <div className="mb-7">
                <p className="text-sm font-semibold text-[#39f77b]">
                  Send Message
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  پیام خود را ارسال کنید
                </h2>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      نام و نام خانوادگی
                    </label>

                    <input
                      type="text"
                      placeholder="نام شما"
                      className="w-full rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      ایمیل
                    </label>

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    موضوع
                  </label>

                  <input
                    type="text"
                    placeholder="موضوع پیام"
                    className="w-full rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    پیام
                  </label>

                  <textarea
                    rows={6}
                    placeholder="پیام خود را بنویسید..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#39f77b] px-6 py-3.5 font-bold text-black transition hover:bg-[#69ff9a]"
                >
                  ارسال پیام
                </button>

                <p className="text-center text-xs text-gray-600">
                  فرم فعلاً نمایشی است و در مرحله بعد می‌توانیم آن را
                  به ایمیل یا API متصل کنیم.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/10 bg-[#080b10]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-[#39f77b]">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                سوالات متداول
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {[
                {
                  q: "ElectroCar درباره چه موضوعاتی محتوا منتشر می‌کند؟",
                  a: "اخبار، مقالات آموزشی، خودروهای برقی، فناوری‌های مرتبط و راهنمای شارژ.",
                },
                {
                  q: "آیا مشخصات خودروها رسمی هستند؟",
                  a: "اطلاعات نسخه فعلی پروژه نمونه هستند و برای انتشار نهایی باید با منابع رسمی سازندگان بررسی شوند.",
                },
                {
                  q: "آیا امکان همکاری با ElectroCar وجود دارد؟",
                  a: "بله. برای همکاری، پیشنهاد محتوا یا سایر درخواست‌ها می‌توانید از فرم تماس استفاده کنید.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-white/10 bg-[#0b0f16] p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    <div className="flex items-center justify-between gap-5">
                      <span>{item.q}</span>

                      <span className="text-[#39f77b] transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-7 text-gray-500">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}