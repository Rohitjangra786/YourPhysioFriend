import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Physio Friend | Dr. Deven Sharma (PT)",
  description:
    "From Pain to Power—Let's Get You Moving. Expert physiotherapy and rehabilitation by Dr. Deven Sharma, BPT, MPT (Ortho). Specializing in orthopaedic, sports & posture care.",
  keywords:
    "physiotherapy, physiotherapist, Dr Deven Sharma, Gurugram, sports injury, orthopaedic, posture correction, rehabilitation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-poppins)] antialiased">
        {children}
      </body>
    </html>
  );
}
