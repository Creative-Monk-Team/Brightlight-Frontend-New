"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import ContentEditor from "@/components/admin/ContentEditor";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

interface Blog {
  _id: string;
  blog_heading: string;
  blog_content: string;
  image: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  custom_url: string;
  alt_tag: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
}

export default function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [blogId, setBlogId] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [altTag, setAltTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("bl_admin_token");
      if (!token) { router.replace("/admin"); return; }

      const { id } = await params;
      setBlogId(id);

      try {
        // Verify token
        const meRes = await fetch(`${API}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!meRes.ok) { router.replace("/admin"); return; }

        // Load blog — try by ID first, then by slug
        let blog: Blog | null = null;
        const byId = await fetch(`${API}/api/blogs/${id}`);
        if (byId.ok) {
          blog = await byId.json();
        }

        if (!blog) { setNotFound(true); setLoading(false); return; }

        setHeading(blog.blog_heading || "");
        setContent(blog.blog_content || "");
        setTag1(blog.tag_1 || "");
        setTag2(blog.tag_2 || "");
        setTag3(blog.tag_3 || "");
        setCustomUrl(blog.custom_url || "");
        setAltTag(blog.alt_tag || "");
        setMetaTitle(blog.metaTitle || "");
        setMetaDesc(blog.metaDescription || "");
        setExistingImage(blog.image || "");
        setLoading(false);
      } catch {
        router.replace("/admin");
      }
    };
    init();
  }, [router, params]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!heading.trim()) { setError("Blog heading is required."); return; }
    if (!content.trim()) { setError("Content is required."); return; }

    const token = localStorage.getItem("bl_admin_token");
    if (!token) { router.replace("/admin"); return; }

    setSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("blog_heading", heading.trim());
      fd.append("blog_content", content);
      fd.append("tag_1", tag1.trim());
      fd.append("tag_2", tag2.trim());
      fd.append("tag_3", tag3.trim());
      fd.append("custom_url", customUrl.trim());
      fd.append("alt_tag", altTag.trim());
      fd.append("metaTitle", metaTitle.trim());
      fd.append("metaDescription", metaDesc.trim());
      if (imageFile) fd.append("image", imageFile);

      const res = await fetch(`${API}/api/blogs/${blogId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }

      router.replace("/admin/blogs");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update blog");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8]">
        <p className="text-primary/50 text-[16px]">Loading…</p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#f0f4f8]">
        <AdminHeader title="Edit Blog" />
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <p className="text-[18px] text-primary/50 mb-4">Blog not found.</p>
          <Link
            href="/admin/blogs"
            className="text-gold hover:text-primary no-underline transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const displayImage = imagePreview || existingImage;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <AdminHeader title="Edit Blog Post" subtitle="Update blog content and details" />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/admin/blogs"
            className="text-[13px] text-primary/50 hover:text-primary no-underline transition-colors duration-200"
          >
            ← Back to Blogs
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}

          {/* Main fields */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)] space-y-5">
            <h3 className="text-[16px] font-bold text-primary border-b border-primary/10 pb-3">
              Post Details
            </h3>

            <div>
              <label className="block text-[13px] font-semibold text-primary mb-1.5">
                Blog Heading <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all"
              />
            </div>

            <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-4">
              {[
                { label: "Tag 1", val: tag1, set: setTag1 },
                { label: "Tag 2", val: tag2, set: setTag2 },
                { label: "Tag 3", val: tag3, set: setTag3 },
              ].map(({ label, val, set }) => (
                <div key={label}>
                  <label className="block text-[13px] font-semibold text-primary mb-1.5">
                    {label}
                  </label>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => set(e.target.value)}
                    className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-primary mb-1.5">
                  Custom URL Slug
                </label>
                <input
                  type="text"
                  value={customUrl}
                  onChange={(e) =>
                    setCustomUrl(
                      e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, "-")
                        .replace(/-+/g, "-")
                    )
                  }
                  className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary font-mono focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-primary mb-1.5">
                  Image Alt Text
                </label>
                <input
                  type="text"
                  value={altTag}
                  onChange={(e) => setAltTag(e.target.value)}
                  className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)] space-y-5">
            <h3 className="text-[16px] font-bold text-primary border-b border-primary/10 pb-3">
              SEO
            </h3>
            <div>
              <label className="block text-[13px] font-semibold text-primary mb-1.5">
                Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
              />
              <p className="text-[11px] text-primary/40 mt-1">
                {metaTitle.length} / 60 characters recommended
              </p>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-primary mb-1.5">
                Meta Description
              </label>
              <textarea
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                rows={3}
                className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none"
              />
              <p className="text-[11px] text-primary/40 mt-1">
                {metaDesc.length} / 160 characters recommended
              </p>
            </div>
          </div>

          {/* Featured image */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <h3 className="text-[16px] font-bold text-primary border-b border-primary/10 pb-3 mb-5">
              Featured Image
            </h3>
            <div className="flex items-start gap-6 flex-wrap">
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-primary/5 hover:bg-primary/10 border border-dashed border-primary/30 text-primary px-6 py-3 rounded-lg text-[14px] font-medium transition-colors duration-200 cursor-pointer"
                >
                  {existingImage ? "Replace Image" : "Choose Image"}
                </button>
                {imageFile && (
                  <p className="text-[12px] text-primary/50 mt-2">
                    New: {imageFile.name}
                  </p>
                )}
              </div>
              {displayImage && (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={displayImage}
                    alt="Preview"
                    className="w-[200px] h-[120px] object-cover rounded-lg border border-primary/10"
                  />
                  {imageFile && (
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview("");
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-[12px] flex items-center justify-center hover:bg-red-600 transition-colors duration-150 cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content editor */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <h3 className="text-[16px] font-bold text-primary border-b border-primary/10 pb-3 mb-5">
              Content <span className="text-red-400">*</span>
            </h3>
            <ContentEditor value={content} onChange={setContent} label="" />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-4 pb-4">
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-white px-8 py-3 rounded-lg text-[15px] font-semibold hover:bg-primary/90 disabled:opacity-60 transition-colors duration-200 cursor-pointer"
            >
              {submitting ? "Saving…" : "Save Changes"}
            </button>
            <Link
              href="/admin/blogs"
              className="text-[14px] text-primary/50 hover:text-primary no-underline transition-colors duration-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
