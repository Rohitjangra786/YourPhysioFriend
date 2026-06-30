import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_URL, BUSINESS, DOCTOR, KEYWORDS } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = `Physiotherapist in Gurgaon (Gurugram) | ${BUSINESS.name} — ${DOCTOR.name}`;
const description = `Looking for the best physiotherapist in Gurgaon (Gurugram)? ${BUSINESS.name} offers expert physiotherapy, sports injury rehab, posture correction, dry needling & back/neck pain treatment by ${DOCTOR.name}, ${DOCTOR.credentials}. ${BUSINESS.tagline}. Book your appointment in Gurugram today.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${BUSINESS.name} — Physiotherapy in Gurgaon`,
  },
  description,
  keywords: [...KEYWORDS],
  applicationName: BUSINESS.name,
  authors: [{ name: DOCTOR.name }],
  creator: DOCTOR.name,
  publisher: BUSINESS.name,
  category: "Health",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title,
    description,
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Physiotherapy clinic in Gurgaon (Gurugram)`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    // Geo-targeting meta for local SEO (Gurgaon / Gurugram, Haryana)
    "geo.region": "IN-HR",
    "geo.placename": `${BUSINESS.city}, ${BUSINESS.state}`,
    "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    ICBM: `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm)] antialiased">
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
