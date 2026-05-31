"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Home, Info, Stethoscope, User, Star, MapPin, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home",     Icon: Home },
  { label: "About",    href: "#about",    Icon: Info },
  { label: "Services", href: "#services", Icon: Stethoscope },
  { label: "Doctor",   href: "#doctor",   Icon: User },
  { label: "Reviews",  href: "#reviews",  Icon: Star },
  { label: "Location", href: "#location", Icon: MapPin },
  { label: "Contact",  href: "#contact",  Icon: MessageSquare },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1" : "bg-white/95 backdrop-blur-sm py-1.5"
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-14">

          {/* Logo — compact on mobile */}
          <a href="#home" className="flex items-center shrink-0">
            <div className="relative" style={{ width: "clamp(110px, 32vw, 170px)", height: "clamp(44px, 13vw, 70px)" }}>
              <Image
                src="/images/logo.png"
                alt="Your Physio Friend"
                fill
                sizes="170px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="text-[#1b3a6b] font-medium text-sm hover:text-[#0d9488] transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="tel:9306893393" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#0d9488]">
              <Phone size={14} /> 9306893393
            </a>
            <a href="#contact" className="hidden md:inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm">
              Book Appointment
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#f0fdfa] text-[#1b3a6b] active:scale-95 transition-transform"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <aside className={`fixed top-0 right-0 z-[70] h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="relative" style={{ width: 120, height: 50 }}>
            <Image src="/images/logo.png" alt="Your Physio Friend" fill sizes="120px" style={{ objectFit: "contain", objectPosition: "left center" }} />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 active:scale-95 transition-transform"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1b3a6b] font-medium text-sm hover:bg-[#f0fdfa] hover:text-[#0d9488] transition-colors"
            >
              <Icon size={18} className="text-[#0d9488] shrink-0" />
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-2">
          <a href="tel:9306893393" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 border border-[#0d9488] text-[#0d9488] font-semibold py-3 rounded-full text-sm">
            📞 +91 9306893393
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#0d9488] text-white font-semibold py-3 rounded-full text-sm">
            Book Appointment →
          </a>
        </div>
      </aside>
    </>
  );
}
