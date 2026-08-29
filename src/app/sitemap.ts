import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/eletrodomesticos",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/material-eletrico",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/apoio-tecnico",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/sobre", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contactos", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/noticias", priority: 0.6, changeFrequency: "weekly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const posts = await getPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/noticias/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...postRoutes];
}
