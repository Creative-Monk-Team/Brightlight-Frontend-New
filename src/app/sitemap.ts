import type { MetadataRoute } from "next";
import { seoRegistry } from "@/data/seo-metadata";

const BASE_URL = "https://www.brightlightimmigration.ca";

// Pages that should NOT appear in sitemap (redirects, drafts, utility pages, 404s)
const SITEMAP_EXCLUDE = new Set([
  "homepage",        // Returns 404 — actual homepage is /
  "search",          // Utility page, not indexable content
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/booking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const seoPages: MetadataRoute.Sitemap = Object.keys(seoRegistry)
    .filter((slug) => !SITEMAP_EXCLUDE.has(slug))
    .map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const additionalPages: MetadataRoute.Sitemap = [
    "more-services",
    "blogs",
    "news",
    "immigration-tools",
    "previous-draw-history",
  ]
    .filter((slug) => !seoRegistry[slug] && !SITEMAP_EXCLUDE.has(slug))
    .map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticPages, ...seoPages, ...additionalPages];
}
