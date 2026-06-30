// Centralized SEO + business (NAP) data for Your Physio Friend.
// Update values here and they propagate to metadata, structured data,
// sitemap, robots and the PWA manifest.

export const SITE_URL = "https://yourphysiofriend.com";

export const BUSINESS = {
  name: "Your Physio Friend",
  legalName: "Your Physio Friend — Dr. Deven Sharma (PT)",
  tagline: "From Pain to Power — Let's Get You Moving",
  // Core local-SEO target keywords for Gurgaon / Gurugram
  city: "Gurugram",
  cityAlt: "Gurgaon",
  state: "Haryana",
  country: "India",
  countryCode: "IN",
  postalCode: "122001",
  // Coordinates of Gurugram (update to exact clinic location when available)
  geo: { lat: 28.4595, lng: 77.0266 },
  phone: "+919306893393",
  phoneDisplay: "+91 9306893393",
  email: "drdevenpt@gmail.com",
  whatsapp: "https://wa.me/919306893393",
  mapUrl: "https://share.google/M4qNPpCJKM7jRp8NK",
  priceRange: "₹₹",
  foundingYear: "2022",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
  ],
} as const;

export const DOCTOR = {
  name: "Dr. Deven Sharma",
  honorific: "Dr.",
  jobTitle: "Consultant Physiotherapist & Rehabilitation Specialist",
  credentials: "BPT, MPT (Ortho)",
  specialties: [
    "Orthopaedic Physiotherapy",
    "Sports Injury Rehabilitation",
    "Posture Correction & Ergonomic Care",
    "Post-Surgery Rehabilitation",
    "Neck & Back Pain Management",
    "Manual Therapy & Dry Needling",
  ],
} as const;

export const SERVICES = [
  "Physiotherapy",
  "Chiropractic Adjustments",
  "Osteopathy",
  "Acupuncture",
  "Cupping Therapy",
  "Dry Needling",
  "Sports Injury Rehabilitation",
  "Posture Correction",
  "Post-Surgery Rehabilitation",
  "Corporate Wellness Programs",
] as const;

// On-page sections (single-page site). Listed in the sitemap as anchor URLs
// so search engines can surface jump-to-section results for the homepage.
export const SECTIONS = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  { path: "/#about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/#services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/#doctor", changeFrequency: "yearly", priority: 0.8 },
  { path: "/#reviews", changeFrequency: "weekly", priority: 0.7 },
  { path: "/#location", changeFrequency: "yearly", priority: 0.8 },
  { path: "/#contact", changeFrequency: "monthly", priority: 0.9 },
] as const;

// Location-rich keyword set targeting both spellings of the city.
export const KEYWORDS = [
  "physiotherapy in Gurgaon",
  "physiotherapy in Gurugram",
  "physiotherapist in Gurgaon",
  "physiotherapist in Gurugram",
  "best physiotherapist in Gurgaon",
  "best physiotherapist in Gurugram",
  "physio clinic Gurgaon",
  "physio clinic Gurugram",
  "sports injury physiotherapy Gurgaon",
  "sports physiotherapist Gurugram",
  "back pain treatment Gurgaon",
  "neck pain physiotherapy Gurugram",
  "posture correction Gurgaon",
  "dry needling Gurgaon",
  "chiropractor in Gurgaon",
  "chiropractic Gurugram",
  "orthopaedic physiotherapy Gurugram",
  "post surgery rehabilitation Gurgaon",
  "home visit physiotherapist Gurgaon",
  "Dr Deven Sharma physiotherapist",
  "physiotherapy near me Gurgaon",
  "rehabilitation centre Gurugram",
  "acupuncture Gurgaon",
  "cupping therapy Gurugram",
] as const;
