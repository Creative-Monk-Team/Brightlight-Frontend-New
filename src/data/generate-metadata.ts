import type { Metadata } from "next";
import { seoRegistry } from "@/data/seo-metadata";

const SITE_URL = "https://www.brightlightimmigration.ca";

/**
 * Generates page-level metadata with self-referencing canonical URL
 * and per-page OG/Twitter tags to avoid inheriting root layout defaults.
 */
export function generatePageMetadata(slug: string): Metadata {
  const seo = seoRegistry[slug];
  if (!seo) return {};

  const canonicalUrl = `${SITE_URL}/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      type: "website",
      siteName: "Brightlight Immigration",
      locale: "en_CA",
      images: [{ url: "/images/ogImage.png", width: 1200, height: 630, alt: "Brightlight Immigration" }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/ogImage.png"],
    },
  };
}
