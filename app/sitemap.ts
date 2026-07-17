import type { MetadataRoute } from "next";

const BASE_URL = "https://manzarkash.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
    { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/ecommerce", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/marketing-ads", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/product-visuals", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/seo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/production-video-ads", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/social-media", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/whatsapp-automation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/branding", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
