import { News } from "@/types/news";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="ev-card group overflow-hidden rounded-2xl">

      <div className="relative h-56 overflow-hidden">

        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07121c] via-transparent to-transparent" />

        <span className="absolute bottom-4 right-4 rounded-full bg-[#39f77b] px-3 py-1.5 text-[11px] font-bold text-[#06100a]">
          {news.category}
        </span>
      </div>

      <div className="p-5">

        <div className="mb-3 flex items-center gap-2 text-[11px] text-gray-500">
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.readingTime}</span>
        </div>

        <h2 className="line-clamp-2 text-base font-bold leading-7 text-white transition group-hover:text-[#39f77b]">
          {news.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-xs leading-6 text-gray-500">
          {news.excerpt}
        </p>

        <a
          href={`/news/${news.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#39f77b]"
        >
          ادامه مطلب
          <span>←</span>
        </a>

      </div>

    </article>
  );
}