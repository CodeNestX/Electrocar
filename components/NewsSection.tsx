import SectionTitle from "./SectionTitle";
import NewsCard from "./NewsCard";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section className="section-space">

      <div className="site-container">

        <SectionTitle
          title="آخرین اخبار"
          description="تازه‌ترین اخبار، رویدادها و تحولات دنیای خودروهای برقی"
          linkText="مشاهده همه اخبار"
          linkHref="/news"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {news.slice(0, 4).map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}