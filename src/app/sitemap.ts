import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/data";

const BASE = "https://manuelaugusto.pt";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/eletrodomesticos",
    "/material-eletrico",
    "/noticias",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = await getPosts();
  const postRoutes = posts.map((post) => ({
    url: `${BASE}/noticias/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...postRoutes];
}
