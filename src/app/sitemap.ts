import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://completecoach.fit";
  const lastModified = new Date();

  return ["", "/features", "/pricing", "/roadmap", "/founder-program"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
    }),
  );
}
