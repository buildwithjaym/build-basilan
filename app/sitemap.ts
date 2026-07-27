import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://build-basilan.online";

const lastModified = new Date("2026-07-27T00:00:00+08:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,

      images: [
        `${siteUrl}/build-basilan-og.png`,
        `${siteUrl}/build-basilan-logo.png`,
        `${siteUrl}/jaymar.jpg`,
      ],
    },

    

    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,

      images: [
        `${siteUrl}/build-basilan-og.png`,
      ],
    },
  ];
}