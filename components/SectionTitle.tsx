interface SectionTitleProps {
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export default function SectionTitle({
  title,
  description,
  linkText = "مشاهده همه",
  linkHref = "#",
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-7 w-1 rounded-full bg-[#39f77b]" />

          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            {title}
          </h2>
        </div>

        {description && (
          <p className="max-w-2xl text-sm leading-7 text-gray-500">
            {description}
          </p>
        )}
      </div>

      <a
        href={linkHref}
        className="w-fit text-sm font-semibold text-[#39f77b] transition hover:text-white"
      >
        {linkText} ←
      </a>
    </div>
  );
}