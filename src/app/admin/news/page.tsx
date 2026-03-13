"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

interface NewsItem {
  _id: string;
  news_heading: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  custom_url: string;
  date: string;
}

export default function AdminNewsPage() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState("");

  const getToken = () => localStorage.getItem("bl_admin_token");

  useEffect(() => {
    const token = getToken();
    if (!token) { router.replace("/admin"); return; }

    fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => {
        if (!r.ok) throw new Error("Unauthorized");
        return fetch(`${API}/api/news`);
      })
      .then((r) => r.json())
      .then((data) => {
        setNews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        router.replace("/admin");
      });
  }, [router]);

  const handleDelete = async (id: string, heading: string) => {
    if (
      !window.confirm(
        `Are you sure you want to delete "${heading}"? This cannot be undone.`
      )
    )
      return;

    const token = getToken();
    if (!token) return;

    setDeleting(id);
    setError("");

    try {
      const res = await fetch(`${API}/api/news/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed");
      }
      setNews((prev) => prev.filter((n) => n._id !== id));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(null);
    }
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
      <AdminHeader title="Manage News" subtitle="Create, edit and delete news articles" />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="text-[24px] font-bold text-primary">
            All News{" "}
            <span className="text-[16px] font-normal text-primary/40">
              ({news.length})
            </span>
          </h2>
          <Link
            href="/admin/news/new"
            className="bg-gold text-white px-5 py-2.5 rounded-lg text-[14px] font-semibold no-underline hover:bg-gold/90 transition-colors duration-200"
          >
            + New Article
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-[14px] text-red-600 mb-4">
            {error}
          </div>
        )}

        {news.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <p className="text-primary/40 text-[16px] mb-4">
              No news articles yet. Create your first one!
            </p>
            <Link
              href="/admin/news/new"
              className="bg-primary text-white px-6 py-3 rounded-lg text-[14px] font-semibold no-underline hover:bg-primary/90 transition-colors duration-200 inline-block"
            >
              Create Article
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(19,47,70,0.08)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-primary/10 bg-[#f8fafc]">
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-primary/60 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-primary/60 uppercase tracking-wider max-[700px]:hidden">
                      Tags
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-primary/60 uppercase tracking-wider max-[900px]:hidden">
                      Date
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-primary/60 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item, i) => {
                    const tags = [item.tag_1, item.tag_2, item.tag_3].filter(
                      Boolean
                    );
                    const dateStr = item.date
                      ? new Date(item.date).toLocaleDateString("en-CA", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "—";

                    return (
                      <tr
                        key={item._id}
                        className={`border-b border-primary/5 hover:bg-primary/[0.02] transition-colors duration-150 ${
                          i % 2 === 0 ? "" : "bg-[#f8fafc]/50"
                        }`}
                      >
                        <td className="px-5 py-4">
                          <p className="text-[14px] font-semibold text-primary leading-snug line-clamp-2 max-w-[380px]">
                            {item.news_heading}
                          </p>
                          {item.custom_url && (
                            <p className="text-[11px] text-primary/40 mt-0.5">
                              /{item.custom_url}
                            </p>
                          )}
                        </td>
                        <td className="px-5 py-4 max-[700px]:hidden">
                          <div className="flex flex-wrap gap-1.5">
                            {tags.length > 0 ? (
                              tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-[12px] text-primary/30">
                                No tags
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-[13px] text-primary/50 whitespace-nowrap max-[900px]:hidden">
                          {dateStr}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/news/${item.custom_url || item._id}`}
                              target="_blank"
                              className="text-[12px] text-primary/50 hover:text-primary no-underline transition-colors duration-150 px-2 py-1 rounded hover:bg-primary/5"
                            >
                              View
                            </Link>
                            <Link
                              href={`/admin/news/${item._id}/edit`}
                              className="text-[13px] font-medium text-primary bg-primary/5 hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg no-underline transition-colors duration-200"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() =>
                                handleDelete(item._id, item.news_heading)
                              }
                              disabled={deleting === item._id}
                              className="text-[13px] font-medium text-red-500 bg-red-50 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                            >
                              {deleting === item._id ? "…" : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
