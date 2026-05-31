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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-2"
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-14">

          {/* Logo + site name */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">

            {/* Mobile: small icon + text */}
            <div className="md:hidden flex items-center gap-2">
              <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                scrolled ? "bg-white/10" : "bg-white/95 shadow-md"
              }`} style={{ width: 42, height: 42, padding: scrolled ? 2 : 3, flexShrink: 0 }}>
                <Image src="/images/logo.png" alt="Your Physio Friend" fill sizes="42px"
                  style={{ objectFit: "contain", objectPosition: "center" }} priority />
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`font-extrabold text-sm tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1b3a6b]" : "text-white"
                }`} style={{ fontFamily: "var(--font-space)" }}>Your Physio Friend</span>
                <span className={`text-[10px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-[#0d9488]" : "text-[#5eead4]"
                }`}>by Dr. Deven Sharma</span>
              </div>
            </div>

            {/* Desktop: same icon + text style as mobile */}
            <div className="hidden md:flex items-center gap-3">
              <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                scrolled ? "bg-white/10" : "bg-white/95 shadow-md"
              }`} style={{ width: 48, height: 48, padding: scrolled ? 2 : 3, flexShrink: 0 }}>
                <Image src="/images/logo.png" alt="Your Physio Friend" fill sizes="48px"
                  style={{ objectFit: "contain", objectPosition: "center" }} priority />
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1b3a6b]" : "text-white"
                }`} style={{ fontFamily: "var(--font-space)" }}>Your Physio Friend</span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? "text-[#0d9488]" : "text-[#5eead4]"
                }`}>by Dr. Deven Sharma</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className={`font-medium text-sm transition-colors ${
                scrolled ? "text-[#1b3a6b] hover:text-[#0d9488]" : "text-white/90 hover:text-white"
              }`}>
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="tel:9306893393" className={`hidden sm:flex items-center gap-1 text-sm font-semibold transition-colors ${
              scrolled ? "text-[#0d9488]" : "text-white/80 hover:text-white"
            }`}>
              <Phone size={14} /> 9306893393
            </a>
            <a href="#contact" className="hidden md:inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm">
              Book Appointment
            </a>
            {/* Mobile hamburger — adapts to bg */}
            <button
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl active:scale-95 transition-all ${
                scrolled
                  ? "bg-[#f0fdfa] text-[#1b3a6b]"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/20"
              }`}
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
      <aside className={`fixed top-0 right-0 z-[70] h-full w-72 flex flex-col transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`} style={{ background: "linear-gradient(160deg, #0f2548 0%, #1b3a6b 100%)" }}>

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="relative rounded-xl overflow-hidden bg-white/95 shadow-md" style={{ width: 42, height: 42, padding: 3 }}>
              <Image src="/images/logo.png" alt="Your Physio Friend" fill sizes="42px"
                style={{ objectFit: "contain", objectPosition: "center" }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-extrabold text-sm" style={{ fontFamily: "var(--font-space)" }}>Your Physio Friend</span>
              <span className="text-[#5eead4] text-[10px] font-medium">by Dr. Deven Sharma</span>
            </div>
          </div>
          <button onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 text-white active:scale-95 transition-transform">
            <X size={18} />
          </button>
        </div>

        {/* Doctor info strip */}
        <div className="px-5 py-4 border-b border-white/10">
          <p className="text-[#5eead4] text-xs font-semibold uppercase tracking-widest mb-0.5">Your Physio Friend</p>
          <p className="text-white font-bold text-sm">Dr. Deven Sharma (PT)</p>
          <p className="text-white/50 text-xs">BPT · MPT (Ortho) · Est. 2022</p>
          <p className="text-white/40 text-[11px] mt-1 italic">From Pain to Power — Let's Get You Moving</p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
          {navLinks.map(({ label, href, Icon }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 font-medium text-sm hover:bg-white/10 hover:text-white transition-colors">
              <Icon size={17} className="text-[#5eead4] shrink-0" />
              {label}
            </a>
          ))}
        </nav>

        {/* Quick contact strip */}
        <div className="px-4 pt-3 pb-2 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <span className="flex-1 h-px bg-white/10" />
            <span>Quick Contact</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <a href="tel:9306893393" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 rounded-xl transition-colors">
              📞 Call
            </a>
            <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#86efac] text-xs font-medium py-2.5 rounded-xl transition-colors">
              💬 WhatsApp
            </a>
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold py-3 rounded-xl text-sm transition-colors">
            Book Appointment →
          </a>
        </div>

        {/* Footer tagline */}
        <p className="text-center text-white/20 text-[10px] py-3">yourphysiofriend.com</p>
      </aside>
    </>
  );
}
