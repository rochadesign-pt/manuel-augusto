import type { MetadataRoute } from "next";

import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Manuel Augusto",
    description:
      "Venda, aconselhamento e assistência técnica de eletrodomésticos e material elétrico em Ílhavo.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1626",
    lang: "pt-PT",
    categories: ["shopping", "business"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
