"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const contactItems = {
  fa: [
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
  ],
  en: [
    {
      icon: "✉",
      title: "Email",
      value: "info@electrocar.ir",
      description: "For sending suggestions and collaboration requests",
    },
    {
      icon: "◎",
      title: "Social media",
      value: "@electrocar",
      description: "Follow the latest content and news",
    },
    {
      icon: "⌂",
      title: "Location",
      value: "Iran",
      description: "Content activity in the field of electric cars",
    },
  ],
};

const faq = {
  fa: [
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
  ],
  en: [
    {
      q: "What topics does ElectroCar publish content about?",
      a: "News, educational articles, electric cars, related technologies, and charging guides.",
    },
    {
      q: "Are the car specs official?",
      a: "The information in the current version of the project is sample data and must be verified against official manufacturer sources before final publication.",
    },
    {
      q: "Is it possible to collaborate with ElectroCar?",
      a: "Yes. For collaboration, content suggestions, or other requests, you can use the contact form.",
    },
  ],
};

const ui = {
  fa: {
    badge: "ارتباط با ElectroCar",
    titleA: "با ما در",
    highlight: "ارتباط باشید",
    desc: "پیشنهاد، انتقاد، درخواست همکاری یا ایده‌ای برای بهتر شدن ElectroCar دارید؟ پیام خود را برای ما ارسال کنید.",
    contactTitle: "راه‌های ارتباطی",
    contactDesc:
      "برای ارتباط با تیم ElectroCar می‌توانید از اطلاعات زیر استفاده کنید.",
    formTitle: "پیام خود را ارسال کنید",
    name: "نام و نام خانوادگی",
    namePh: "نام شما",
    email: "ایمیل",
    subject: "موضوع",
    subjectPh: "موضوع پیام",
    message: "پیام",
    messagePh: "پیام خود را بنویسید...",
    send: "ارسال پیام",
    formNote:
      "فرم فعلاً نمایشی است و در مرحله بعد می‌توانیم آن را به ایمیل یا API متصل کنیم.",
    faqTitle: "سوالات متداول",
  },
  en: {
    badge: "Contact ElectroCar",
    titleA: "Get in",
    highlight: "touch with us",
    desc: "Have a suggestion, a criticism, a collaboration request, or an idea for making ElectroCar better? Send us your message.",
    contactTitle: "Ways to reach us",
    contactDesc:
      "You can use the information below to get in touch with the ElectroCar team.",
    formTitle: "Send us your message",
    name: "Full name",
    namePh: "Your name",
    email: "Email",
    subject: "Subject",
    subjectPh: "Message subject",
    message: "Message",
    messagePh: "Write your message...",
    send: "Send message",
    formNote:
      "The form is currently a demo; in the next step we can connect it to email or an API.",
    faqTitle: "Frequently asked questions",
  },
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50";

export default function ContactContent() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070b] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,247,123,0.13),transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-[#39f77b]/20 bg-[#39f77b]/10 px-4 py-2 text-sm text-[#39f77b]">
              {t.badge}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              {t.titleA}{" "}
              <span className="text-[#39f77b]">{t.highlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              {t.desc}
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
                {t.contactTitle}
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                {t.contactDesc}
              </p>

              <div className="mt-8 space-y-4">
                {contactItems[language].map((item) => (
                  <div
                    key={item.icon}
                    className="rounded-2xl border border-white/10 bg-[#0b0f16] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#39f77b]/10 text-xl text-[#39f77b]">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-bold">{item.title}</h3>

                        {/* bdi keeps "@handle" and emails from being reordered inside RTL text */}
                        <p className="mt-1 text-sm text-[#39f77b]">
                          <bdi>{item.value}</bdi>
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
                  {t.formTitle}
                </h2>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      {t.name}
                    </label>

                    <input
                      type="text"
                      placeholder={t.namePh}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      {t.email}
                    </label>

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    {t.subject}
                  </label>

                  <input
                    type="text"
                    placeholder={t.subjectPh}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    {t.message}
                  </label>

                  <textarea
                    rows={6}
                    placeholder={t.messagePh}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080b10] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-gray-700 focus:border-[#39f77b]/50"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#39f77b] px-6 py-3.5 font-bold text-black transition hover:bg-[#69ff9a]"
                >
                  {t.send}
                </button>

                <p className="text-center text-xs text-gray-600">
                  {t.formNote}
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
                {t.faqTitle}
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {faq[language].map((item) => (
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
