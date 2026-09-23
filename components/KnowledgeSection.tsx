const items = [
  {
    title: "باتری",
    text: "از ظرفیت باتری و طول عمر آن تا فناوری‌های جدید ذخیره انرژی را بهتر بشناسید.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="7" width="17" height="10" rx="2" />
        <path d="M20 10h2v4h-2" />
        <path d="M8 10v4M12 10v4" />
      </svg>
    ),
  },
  {
    title: "شارژ",
    text: "AC یا DC؟ شارژ سریع چیست و برای شارژ خودروهای برقی چه روش‌هایی وجود دارد؟",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: "فناوری",
    text: "از سیستم مدیریت باتری تا رانندگی هوشمند و امکانات نرم‌افزاری خودرو.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

export default function KnowledgeSection() {
  return (
    <section className="pb-24">
      <div className="site-container">

        <div className="overflow-hidden rounded-3xl border border-[#39f77b]/10 bg-gradient-to-l from-[#0b1c27] to-[#08121b]">

          <div className="grid md:grid-cols-3">

            {items.map((item, index) => (
              <div
                key={item.title}
                className={`relative p-7 ${
                  index !== items.length - 1
                    ? "border-b border-white/5 md:border-b-0 md:border-l"
                    : ""
                }`}
              >
                <div className="mb-5 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#39f77b]/10 text-[#39f77b]">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-extrabold">
                    {item.title}
                  </h3>

                </div>

                <p className="text-sm leading-7 text-gray-500">
                  {item.text}
                </p>

                <a
                  href="/articles"
                  className="mt-5 inline-block text-xs font-bold text-[#39f77b]"
                >
                  بیشتر بدانید ←
                </a>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}