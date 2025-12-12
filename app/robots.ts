import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/", "/_next/", "/admin/"],
    },
    sitemap: "https://hogmog.vercel.app/sitemap.xml",
  };
}
