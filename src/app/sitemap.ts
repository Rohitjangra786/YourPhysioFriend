import type { MetadataRoute } from "next";
import { SITE_URL, SECTIONS } from "@/lib/seo";

// Single-page site: the homepage is the primary URL, with section anchors
// listed so search engines understand the page structure. Anchor entries
// strip the trailing "/" so the homepage URL stays canonical (no "/#...").
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SECTIONS.map((section) => ({
    url: `${SITE_URL}${section.path === "/" ? "" : section.path}`,
    lastModified,
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }));
}
