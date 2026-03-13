import type { MetadataRoute } from "next";
import { seoRegistry } from "@/data/seo-metadata";

const BASE_URL = "https://www.brightlightimmigration.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const seoPages: MetadataRoute.Sitemap = Object.keys(seoRegistry).map(
    (slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const additionalPages: MetadataRoute.Sitemap = [
    "more-services",
    "blogs",
    "news",
    "immigration-tools",
    "previous-draw-history",
    "privacy-policy",
    "terms-and-conditions",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...seoPages, ...additionalPages];
}
