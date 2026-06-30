import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Single-page site: the homepage is the primary URL. Section anchors are not
// separate documents, so we only list the canonical home URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
