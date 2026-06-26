import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://market-strategy-presentation.vercel.app/sitemap.xml",

    host:
      "https://market-strategy-presentation.vercel.app",
  };
}