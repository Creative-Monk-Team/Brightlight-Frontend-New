"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  blog_heading: string;
  blog_content: string;
  image: string;
  tag_1: string;
  date: string;
  custom_url: string;
  alt_tag: string;
}

function makeSlug(heading: string) {
  return heading.trim().toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
}

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"}/api/blogs`)
      .then((r) => r.json())
      .then((data: Blog[]) => setBlogs(data.slice(0, 3)))
      .catch(() => {});
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section className="w-full py-[80px] bg-[#f5f7fa]">
      <div className="max-w-[1440px] mx-auto max-[1470px]:w-[95%]">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-gold text-[13px] font-semibold uppercase tracking-widest mb-2">
              Latest Updates
            </p>
            <h2 className="text-primary text-[42px] max-[700px]:text-[30px] font-bold leading-tight">
              Recent Blogs
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] no-underline border-b-2 border-gold pb-0.5 hover:text-gold transition-colors duration-200"
          >
            View All Blogs →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[620px]:grid-cols-1 gap-6">
          {blogs.map((blog, i) => {
            const slug = blog.custom_url || makeSlug(blog.blog_heading);
            const excerpt = blog.blog_content.replace(/<[^>]+>/g, "").slice(0, 110);
            const dateStr = blog.date
              ? new Date(blog.date).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })
              : "";
            return (
              <Link key={blog._id} href={`/blogs/${slug}`} className="no-underline group">
                <article
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(19,47,70,0.08)] hover:shadow-[0_10px_36px_rgba(19,47,70,0.14)] transition-all duration-300 h-full flex flex-col"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-gold/10">
                    {blog.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={blog.image}
                        alt={blog.alt_tag || blog.blog_heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary/20 text-[40px]">📰</div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    {blog.tag_1 && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded-full mb-3 w-fit">
                        {blog.tag_1}
                      </span>
                    )}
                    <h3 className="text-primary text-[17px] font-bold leading-snug mb-2 group-hover:text-gold transition-colors duration-200 line-clamp-2">
                      {blog.blog_heading}
                    </h3>
                    <p className="text-gray-text text-[13px] leading-relaxed flex-1 line-clamp-3 mb-4">
                      {excerpt}…
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-primary/8 mt-auto">
                      <span className="text-[11px] text-primary/40">{dateStr}</span>
                      <span className="text-[12px] text-gold font-semibold">Read more →</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
