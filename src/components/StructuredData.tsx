import { SITE_URL, BUSINESS, DOCTOR, SERVICES } from "@/lib/seo";

// Real patient reviews shown on the page (keep in sync with Reviews.tsx so the
// schema matches visible content — required by Google's review-snippet policy).
const REVIEWS = [
  { name: "Priya Sharma", rating: 5, text: "Dr. Deven is an exceptional physiotherapist! I had severe lower back pain for months and after just 6 sessions I'm completely pain-free." },
  { name: "Rahul Verma", rating: 5, text: "Excellent clinic! Went for knee pain after a sports injury. The dry needling treatment was very effective. Back to playing cricket in 3 weeks!" },
  { name: "Sunita Agarwal", rating: 5, text: "Best physiotherapy experience in Gurugram. Dr. Deven came to our office for a corporate wellness session and the posture correction exercises were a game changer." },
  { name: "Amit Khanna", rating: 5, text: "After my knee surgery, Dr. Deven guided me through the entire rehabilitation process. I regained full mobility faster than expected!" },
  { name: "Deepika Singh", rating: 5, text: "I had cervical spondylosis and was in constant pain. Dr. Deven's manual therapy and targeted exercises gave me relief within a week." },
  { name: "Vikram Malhotra", rating: 5, text: "Wonderful experience! Dr. Deven treated my frozen shoulder with great expertise. 5 stars without any doubt!" },
];

// JSON-LD structured data for rich results & local SEO (Gurgaon / Gurugram).
// Renders Google-recommended schema: LocalBusiness (Physiotherapy),
// Physician, the service catalogue, breadcrumb, website and FAQ.

const businessId = `${SITE_URL}/#clinic`;

const localBusiness = {
  "@type": ["MedicalBusiness", "Physiotherapy", "LocalBusiness"],
  "@id": businessId,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/logo.png`,
  description: `Expert physiotherapy & rehabilitation clinic in ${BUSINESS.city} (${BUSINESS.cityAlt}), ${BUSINESS.state}. ${BUSINESS.tagline}. Led by ${DOCTOR.name}, ${DOCTOR.credentials}.`,
  slogan: BUSINESS.tagline,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  foundingDate: BUSINESS.foundingYear,
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Card",
  medicalSpecialty: "Physiotherapy",
  areaServed: [
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  hasMap: BUSINESS.mapUrl,
  openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [BUSINESS.whatsapp],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(REVIEWS.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: r.text,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Physiotherapy & Rehabilitation Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: s,
        procedureType: "https://schema.org/TherapeuticProcedure",
      },
      areaServed: { "@type": "City", name: "Gurugram" },
    })),
  },
  founder: { "@id": `${SITE_URL}/#doctor` },
  employee: { "@id": `${SITE_URL}/#doctor` },
};

const physician = {
  "@type": ["Physician", "Person"],
  "@id": `${SITE_URL}/#doctor`,
  name: DOCTOR.name,
  honorificPrefix: DOCTOR.honorific,
  jobTitle: DOCTOR.jobTitle,
  description: `${DOCTOR.name} (${DOCTOR.credentials}) — physiotherapist in ${BUSINESS.city} (${BUSINESS.cityAlt}) specialising in ${DOCTOR.specialties.slice(0, 3).join(", ")}.`,
  image: `${SITE_URL}/images/doctor.jpg`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  medicalSpecialty: "Physiotherapy",
  knowsAbout: DOCTOR.specialties,
  worksFor: { "@id": businessId },
  workLocation: {
    "@type": "Place",
    name: BUSINESS.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.countryCode,
    },
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS.name,
  description: `Physiotherapy clinic in ${BUSINESS.city} (${BUSINESS.cityAlt}) — ${BUSINESS.tagline}.`,
  publisher: { "@id": businessId },
  inLanguage: "en-IN",
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
    { "@type": "ListItem", position: 3, name: "Doctor", item: `${SITE_URL}/#doctor` },
    { "@type": "ListItem", position: 4, name: "Contact", item: `${SITE_URL}/#contact` },
  ],
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Your Physio Friend physiotherapy clinic located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Your Physio Friend is a physiotherapy clinic in ${BUSINESS.city} (${BUSINESS.cityAlt}), ${BUSINESS.state}, India. We also offer home visits and corporate sessions across Gurgaon and Delhi NCR on request.`,
      },
    },
    {
      "@type": "Question",
      name: "Who is the physiotherapist at Your Physio Friend in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${DOCTOR.name} (${DOCTOR.credentials}) is a consultant physiotherapist in Gurugram specialising in orthopaedic, sports injury and posture-correction care, with experience at Park Hospital and Medharbor Hospital, Gurugram.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the consultation fee for physiotherapy in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The consultation fee is ₹1,000. Home visits and corporate wellness sessions are available on request across Gurgaon / Gurugram.",
      },
    },
    {
      "@type": "Question",
      name: "What are the clinic timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The clinic is open Monday to Saturday, 9:00 AM to 7:00 PM. Sunday appointments are available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer home-visit physiotherapy in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide home-visit physiotherapy and corporate wellness sessions across Gurugram (Gurgaon) and Delhi NCR on request.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, physician, website, breadcrumb, faq],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON in the DOM; controlled, no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
