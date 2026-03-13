"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export default function AdminDashboard() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [blogCount, setBlogCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("bl_admin_token");
    const user = localStorage.getItem("bl_admin_user");
    if (!token) {
      router.replace("/admin");
      return;
    }
    setUsername(user || "Admin");

    Promise.all([
      fetch(`${API}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch(`${API}/api/blogs`),
      fetch(`${API}/api/news`),
    ])
      .then(async ([me, blogs, news]) => {
        if (!me.ok) {
          router.replace("/admin");
          return;
        }
        const blogsData = await blogs.json().catch(() => []);
        const newsData = await news.json().catch(() => []);
        setBlogCount(Array.isArray(blogsData) ? blogsData.length : 0);
        setNewsCount(Array.isArray(newsData) ? newsData.length : 0);
        setLoading(false);
      })
      .catch(() => {
        router.replace("/admin");
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("bl_admin_token");
    localStorage.removeItem("bl_admin_user");
    router.replace("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8]">
        <p className="text-primary/50 text-[16px]">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <header className="bg-primary text-white px-8 py-4 flex items-center justify-between shadow-lg">
        <div>
          <h1 className="text-[20px] font-bold">Brightlight Admin</h1>
          <p className="text-[13px] text-white/60">Welcome, {username}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-[13px] text-white/70 hover:text-white no-underline transition-colors duration-200"
          >
            View Site
          </Link>
          <button
            onClick={handleLogout}
            className="text-[13px] bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-8 py-10">
        <h2 className="text-[28px] font-bold text-primary mb-8">Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <p className="text-[14px] text-primary/50 mb-1">Total Blogs</p>
            <p className="text-[48px] font-bold text-primary leading-none mt-2">
              {blogCount}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <p className="text-[14px] text-primary/50 mb-1">Total News</p>
            <p className="text-[48px] font-bold text-primary leading-none mt-2">
              {newsCount}
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <h3 className="text-[20px] font-bold text-primary mb-2">Blogs</h3>
            <p className="text-[14px] text-primary/50 mb-5">
              Create and manage immigration blog posts.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/admin/blogs"
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-[14px] font-medium no-underline hover:bg-primary/90 transition-colors duration-200"
              >
                Manage Blogs
              </Link>
              <Link
                href="/admin/blogs/new"
                className="bg-gold text-white px-5 py-2.5 rounded-lg text-[14px] font-medium no-underline hover:bg-gold/90 transition-colors duration-200"
              >
                + New Blog
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <h3 className="text-[20px] font-bold text-primary mb-2">News</h3>
            <p className="text-[14px] text-primary/50 mb-5">
              Publish and manage immigration news articles.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/admin/news"
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-[14px] font-medium no-underline hover:bg-primary/90 transition-colors duration-200"
              >
                Manage News
              </Link>
              <Link
                href="/admin/news/new"
                className="bg-gold text-white px-5 py-2.5 rounded-lg text-[14px] font-medium no-underline hover:bg-gold/90 transition-colors duration-200"
              >
                + New Article
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
