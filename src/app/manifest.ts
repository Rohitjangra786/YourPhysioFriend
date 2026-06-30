import type { MetadataRoute } from "next";
import { BUSINESS, DOCTOR } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS.name} — Physiotherapy in Gurgaon (Gurugram)`,
    short_name: BUSINESS.name,
    description: `Expert physiotherapy & rehabilitation in ${BUSINESS.city} (${BUSINESS.cityAlt}) by ${DOCTOR.name}, ${DOCTOR.credentials}. ${BUSINESS.tagline}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    lang: "en-IN",
    categories: ["health", "medical", "fitness"],
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
