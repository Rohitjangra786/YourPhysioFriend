import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Your Physio Friend | Dr. Deven Sharma (PT)",
  description:
    "From Pain to Power—Let's Get You Moving. Expert physiotherapy and rehabilitation by Dr. Deven Sharma, BPT, MPT (Ortho). Specializing in orthopaedic, sports & posture care.",
  keywords:
    "physiotherapy, physiotherapist, Dr Deven Sharma, Gurugram, sports injury, orthopaedic, posture correction, rehabilitation",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm)] antialiased">
        {children}
      </body>
    </html>
  );
}
