"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import ContentEditor from "@/components/admin/ContentEditor";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export default function NewNewsPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [altTag, setAltTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("bl_admin_token");
    if (!token) { router.replace("/admin"); return; }
    fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => {
      if (!r.ok) router.replace("/admin");
    });
  }, [router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!heading.trim()) { setError("News heading is required."); return; }
    if (!content.trim()) { setError("Content is required."); return; }

    const token = localStorage.getItem("bl_admin_token");
    if (!token) { router.replace("/admin"); return; }

    setSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("news_heading", heading.trim());
      fd.append("news_content", content);
      fd.append("tag_1", tag1.trim());
      fd.append("tag_2", tag2.trim());
      fd.append("tag_3", tag3.trim());
      fd.append("custom_url", customUrl.trim());
      fd.append("alt_tag_featured", altTag.trim());
      fd.append("metaTitle", metaTitle.trim());
      fd.append("metaDescription", metaDesc.trim());
      if (imageFile) fd.append("image", imageFile);

      const res = await fetch(`${API}/api/news`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }

      router.replace("/admin/news");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to create article");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <AdminHeader title="New News Article" subtitle="Publish a new immigration news update" />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/admin/news"
            className="text-[13px] text-primary/50 hover:text-primary no-underline transition-colors duration-200"
          >
            ← Back to News
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
              Article Details
            </h3>

            <div>
              <label className="block text-[13px] font-semibold text-primary mb-1.5">
                News Heading <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all"
                placeholder="e.g. Canada Increases Immigration Targets for 2025"
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
                    placeholder="e.g. Policy Update"
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
                  placeholder="e.g. canada-immigration-targets-2025"
                />
                <p className="text-[11px] text-primary/40 mt-1">
                  Leave blank to auto-generate from heading
                </p>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-primary mb-1.5">
                  Featured Image Alt Text
                </label>
                <input
                  type="text"
                  value={altTag}
                  onChange={(e) => setAltTag(e.target.value)}
                  className="w-full border border-primary/20 rounded-lg px-4 py-2.5 text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                  placeholder="Describe the featured image"
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
                placeholder="Defaults to news heading if left blank"
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
                placeholder="Brief description for search engines (150–160 characters)"
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
                  Choose Image
                </button>
                {imageFile && (
                  <p className="text-[12px] text-primary/50 mt-2">
                    {imageFile.name}
                  </p>
                )}
              </div>
              {imagePreview && (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[200px] h-[120px] object-cover rounded-lg border border-primary/10"
                  />
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
              {submitting ? "Publishing…" : "Publish Article"}
            </button>
            <Link
              href="/admin/news"
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
