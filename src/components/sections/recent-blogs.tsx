"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      .then((data: Blog[]) => setBlogs(data.slice(0, 4)))
      .catch(() => {});
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section
      className="w-full py-[20px]"
      style={{
        backgroundImage: "url('/images/aboutLeaf.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1440px] mx-auto max-[1470px]:w-[95%]">
        {/* Top section: Bright Blogs badge + heading */}
        <div className="flex items-start gap-8 mb-10 max-[790px]:flex-col max-[790px]:gap-4">
          <Image
            src="/images/brightblogs.webp"
            alt="Bright Blogs"
            width={200}
            height={200}
            className="w-[200px] max-[790px]:w-[120px] shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-primary text-[50px] max-[790px]:text-[32px] max-[580px]:text-[26px]">
              Our Thoughtful Narratives
            </h2>
            <p className="mt-[10px] text-primary leading-[1.5] tracking-[1px] font-semibold max-[580px]:text-[14px]">
              Your key to staying informed about the latest immigration insights, tips, and trends in Canada.
            </p>
          </div>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[580px]:grid-cols-1 gap-4">
          {blogs.map((blog) => {
            const slug = blog.custom_url || makeSlug(blog.blog_heading);
            const excerpt = blog.blog_content.replace(/<[^>]+>/g, "").slice(0, 100);
            const dateStr = blog.date
              ? new Date(blog.date).toLocaleDateString("en-CA", { year: "numeric", month: "numeric", day: "numeric" })
              : "";
            return (
              <div
                key={blog._id}
                className="w-[300px] max-[1100px]:w-full p-[10px] rounded-[10px] transition-all duration-300 hover:-translate-y-[10px]"
                style={{
                  background: "linear-gradient(to bottom, transparent, #ececec)",
                }}
              >
                {blog.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blog.image}
                    alt={blog.alt_tag || blog.blog_heading}
                    className="w-full rounded-[10px] aspect-[16/10] object-cover"
                  />
                ) : (
                  <div className="w-full rounded-[10px] aspect-[16/10] bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center text-primary/20 text-[40px]">
                    B
                  </div>
                )}
                <h2 className="text-[20px] max-[580px]:text-[16px] text-[#3f3c3d] mt-3 line-clamp-2">
                  {blog.blog_heading}
                </h2>
                <h6 className="font-bold text-[rgb(155,155,155)] text-[14px] mt-1">
                  {dateStr}
                </h6>
                <p className="text-[18px] max-[580px]:text-[14px] text-[#95908f] mt-2 line-clamp-3">
                  {excerpt}...
                </p>
                <Link
                  href={`/blogs/${slug}`}
                  className="inline-block mt-4 bg-transparent text-primary border border-primary px-[30px] py-[10px] rounded-[40px] text-[16px] font-semibold no-underline transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>

        {/* Know More button */}
        <div className="text-center mt-[100px] max-[580px]:mt-[50px] mb-[40px]">
          <Link
            href="/blogs"
            className="inline-block w-[150px] text-center rounded-[40px] border-[3px] border-primary text-primary text-[16px] font-semibold py-3 no-underline transition-all duration-300 hover:bg-primary hover:text-white animate-[pulse_2s_infinite]"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
