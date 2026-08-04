import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.build-basilan.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
      url: `${siteUrl}/selection-process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${siteUrl}/build-basilan-og.png`,
      ],
    },

    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}