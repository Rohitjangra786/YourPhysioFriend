"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <div className="relative overflow-hidden" style={{ width: 160, height: 68 }}>
            <Image
              src="/images/logo.jpg"
              alt="Your Physio Friend Logo"
              fill
              sizes="160px"
              style={{ objectFit: "contain", objectPosition: "center", transform: "scale(1.08)" }}
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1b3a6b] font-medium text-sm hover:text-[#0d9488] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9306893393"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] hover:text-[#0f766e] transition-colors"
          >
            <Phone size={15} />
            9306893393
          </a>
          <a
            href="#contact"
            className="hidden md:inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            Book Appointment
          </a>
          <button
            className="md:hidden p-2 text-[#1b3a6b]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1b3a6b] font-medium text-base hover:text-[#0d9488] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0d9488] text-white text-center font-semibold px-5 py-3 rounded-full transition-colors"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
