import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2548 0%, #1b3a6b 45%, #0d9488 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-60px] w-64 h-64 md:w-[420px] md:h-[420px] rounded-full opacity-10 bg-[#14b8a6]" />
      <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 md:w-[300px] md:h-[300px] rounded-full opacity-10 bg-[#14b8a6]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-32 md:pt-40 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-[#14b8a6]/20 text-[#5eead4] text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-[#14b8a6]/30">
            Clinic Since 2022
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "var(--font-space)" }}>
            From <span className="text-[#5eead4]">Pain</span> to <span className="text-[#5eead4]">Power</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">
              Let&apos;s Get You Moving
            </span>
          </h1>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
            Expert physiotherapy by <strong className="text-white">Dr. Deven Sharma (PT)</strong>, BPT, MPT (Ortho). Personalized care for orthopaedic, sports & posture conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg text-sm">
              Book Appointment <ArrowRight size={16} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-all text-sm">
              Our Services
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { value: "1000+", label: "Patients" },
              { value: "5+", label: "Yrs Experience" },
              { value: "25+", label: "Treatments" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5eead4]" style={{ fontFamily: "var(--font-space)" }}>{stat.value}</div>
                <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — contact card (desktop only) */}
        <div className="hidden lg:flex justify-end">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-sm w-full text-white shadow-2xl">
            <p className="text-[#5eead4] text-xs font-semibold uppercase tracking-widest mb-3">Quick Contact</p>
            <p className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-space)" }}>Dr. Deven Sharma</p>
            <p className="text-white/70 text-sm mb-5">BPT, MPT (Ortho) · Physiotherapist</p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:9306893393" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors font-medium">📞 &nbsp;+91 9306893393</a>
              <a href="mailto:drdevenpt@gmail.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors font-medium">✉️ &nbsp;drdevenpt@gmail.com</a>
              <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-xl px-4 py-3 transition-colors font-medium text-[#86efac]">💬 &nbsp;Chat on WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Mobile quick-contact pills */}
        <div className="flex lg:hidden flex-wrap gap-2">
          <a href="tel:9306893393" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-full">📞 Call Now</a>
          <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#86efac] text-xs font-medium px-4 py-2.5 rounded-full">💬 WhatsApp</a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white animate-bounce transition-colors">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
