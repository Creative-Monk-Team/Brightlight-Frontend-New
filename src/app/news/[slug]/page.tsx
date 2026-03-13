import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  metaTitle: string;
  metaDescription: string;
  date: string;
}

const API_BASE =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

async function getNewsItem(slug: string): Promise<NewsItem | null> {
  try {
    const res = await fetch(`${API_BASE}/api/news/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  if (!item) return { title: "News Not Found" };
  return {
    title: item.metaTitle || item.news_heading,
    description:
      item.metaDescription ||
      item.news_content?.replace(/<[^>]+>/g, "").slice(0, 160),
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  if (!item) notFound();

  const dateStr = item.date
    ? new Date(item.date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const tags = [item.tag_1, item.tag_2, item.tag_3].filter(Boolean);

  return (
    <div className="max-w-[900px] mx-auto px-4 py-[60px] pt-[230px] max-[1000px]:pt-[180px]">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-primary/60 hover:text-primary text-[14px] no-underline mb-8 transition-colors duration-200"
      >
        ← Back to News
      </Link>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
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

      <h1 className="text-primary text-[42px] max-[700px]:text-[28px] font-bold leading-tight mb-4">
        {item.news_heading}
      </h1>

      {dateStr && (
        <p className="text-[14px] text-primary/50 mb-8">{dateStr}</p>
      )}

      {item.image && (
        <div className="rounded-2xl overflow-hidden mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.alt_tag_featured || item.news_heading}
            className="w-full object-cover"
          />
        </div>
      )}

      <div
        className="[&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[22px] [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[16px] [&_p]:leading-relaxed [&_p]:text-[#4a4a4a] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_li]:text-[16px] [&_li]:text-[#4a4a4a] [&_a]:text-gold [&_a]:no-underline [&_a:hover]:text-primary [&_strong]:text-primary [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-primary/70 [&_blockquote]:my-6 [&_img]:rounded-xl [&_img]:my-6 [&_img]:w-full"
        dangerouslySetInnerHTML={{ __html: item.news_content }}
      />
    </div>
  );
}
