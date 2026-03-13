import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration News | Brightlight Immigration",
  description:
    "Latest immigration news and policy updates from Bright Light Immigration.",
};

function makeSlug(heading: string) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

interface NewsItem {
  _id: string;
  news_heading: string;
  news_content: string;
  image: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  custom_url: string;
  alt_tag_featured: string;
  date: string;
}

async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"}/api/news`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[60px] pt-[230px] max-[1000px]:pt-[180px] px-4">
      <h1 className="text-primary text-[50px] max-[800px]:text-[35px] font-bold mb-4">
        Immigration News
      </h1>
      <p className="text-gray-light text-[18px] mb-12">
        Stay up to date with the latest Canadian immigration policy changes and
        updates.
      </p>

      {news.length === 0 ? (
        <div className="text-center py-20 text-gray-light text-[18px]">
          No news published yet. Check back soon!
        </div>
      ) : (
        <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1 gap-8">
          {news.map((item) => {
            const slug = item.custom_url || makeSlug(item.news_heading);
            const tags = [item.tag_1, item.tag_2, item.tag_3].filter(Boolean);
            const excerpt = item.news_content
              ? item.news_content.replace(/<[^>]+>/g, "").slice(0, 140) + "..."
              : "";
            const dateStr = item.date
              ? new Date(item.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "";

            return (
              <Link
                key={item._id}
                href={`/news/${slug}`}
                className="no-underline group"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(19,47,70,0.08)] hover:shadow-[0_8px_32px_rgba(19,47,70,0.14)] transition-shadow duration-300 h-full flex flex-col">
                  {item.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.alt_tag_featured || item.news_heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-primary text-[20px] font-bold leading-snug mb-3 group-hover:text-gold transition-colors duration-200 line-clamp-2">
                      {item.news_heading}
                    </h2>
                    {excerpt && (
                      <p className="text-gray-light text-[14px] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {excerpt}
                      </p>
                    )}
                    {dateStr && (
                      <p className="text-[12px] text-primary/50 mt-auto pt-4 border-t border-primary/10">
                        {dateStr}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
