import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Physiotherapy",
  "Chiropractic Adjustments",
  "Osteopathy",
  "Acupuncture",
  "Cupping Therapy",
  "Dry Needling",
  "Sports Rehabilitation",
  "Posture Correction",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2548] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-lg bg-white" style={{ width: 160, height: 68 }}>
              <Image
                src="/images/logo.jpg"
                alt="Your Physio Friend"
                fill
                sizes="160px"
                style={{ objectFit: "contain", objectPosition: "center", transform: "scale(1.08)" }}
              />
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              From Pain to Power — Let&apos;s Get You Moving. Expert physiotherapy by Dr. Deven
              Sharma.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/919306893393"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="tel:9306893393"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0d9488] flex items-center justify-center transition-colors"
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:drdevenpt@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0d9488] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#5eead4] mb-5 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#5eead4] mb-5 uppercase text-xs tracking-widest">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#5eead4] mb-5 uppercase text-xs tracking-widest">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/60">
              <a href="tel:9306893393" className="hover:text-white transition-colors flex gap-2">
                <Phone size={15} className="text-[#0d9488] mt-0.5 shrink-0" />
                +91 9306893393
              </a>
              <a
                href="mailto:drdevenpt@gmail.com"
                className="hover:text-white transition-colors flex gap-2"
              >
                <Mail size={15} className="text-[#0d9488] mt-0.5 shrink-0" />
                drdevenpt@gmail.com
              </a>
              <div className="flex gap-2">
                <span className="text-[#0d9488] mt-0.5 shrink-0">📍</span>
                <span>Gurugram, Haryana, India</span>
              </div>
              <a
                href="#contact"
                className="mt-2 inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-center font-semibold px-5 py-2.5 rounded-full transition-colors text-xs uppercase tracking-wider"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Your Physio Friend · Dr. Deven Sharma (PT). All rights reserved.</p>
          <p>BPT · MPT (Ortho) · Est. 2022</p>
        </div>
      </div>
    </footer>
  );
}
