import type { MetadataRoute } from "next";
import citiesData from "@/data/cities.json";

const SITE_URL = "https://quickhomeofferusa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Situation pages
  const situations = [
    "foreclosure",
    "divorce",
    "inherited-property",
    "probate",
    "relocation",
    "behind-on-payments",
    "vacant-property",
  ];
  const situationPages: MetadataRoute.Sitemap = situations.map((slug) => ({
    url: `${SITE_URL}/situations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Programmatic location pages
  const locationPages: MetadataRoute.Sitemap = citiesData.map((city) => ({
    url: `${SITE_URL}/sell-my-house-fast/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // State hub pages
  const states = ["florida", "virginia", "maryland", "new-york", "north-carolina", "georgia"];
  const statePages: MetadataRoute.Sitemap = states.map((slug) => ({
    url: `${SITE_URL}/sell-my-house-fast/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Resource & guide pages
  const guides = [
    "how-to-sell-your-house-fast",
    "selling-house-as-is",
    "cash-buyer-vs-realtor",
    "foreclosure-prevention",
    "inherited-property-guide",
  ];
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/resources/guides`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...guides.map((slug) => ({
      url: `${SITE_URL}/resources/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // "We buy houses" alt keyword pages
  const weBuyPages: MetadataRoute.Sitemap = citiesData.map((city) => ({
    url: `${SITE_URL}/we-buy-houses/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...situationPages,
    ...statePages,
    ...locationPages,
    ...resourcePages,
    ...weBuyPages,
  ];
}
