import { ArrowRight, ChevronDown, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0a1f45 0%, #1b3a6b 50%, #0d9488 100%)" }}
    >
      {/* Background orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 md:w-[500px] md:h-[500px] rounded-full opacity-[0.12] bg-[#14b8a6] blur-3xl" />
      <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 md:w-[350px] md:h-[350px] rounded-full opacity-[0.10] bg-[#14b8a6] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] bg-white blur-3xl pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-14 md:py-32 md:pt-40 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#14b8a6]/20 border border-[#14b8a6]/30 text-[#5eead4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
            Clinic Since 2022
          </div>

          <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            From <span className="text-[#5eead4]">Pain</span><br />
            to <span className="text-[#5eead4]">Power</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/80 mt-1">
              Let&apos;s Get You Moving
            </span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
            Expert physiotherapy by <strong className="text-white font-semibold">Dr. Deven Sharma (PT)</strong>, BPT, MPT&nbsp;(Ortho). Personalized care for orthopaedic, sports &amp; posture conditions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] active:scale-95 text-white font-bold px-7 py-3.5 rounded-2xl transition-all shadow-lg shadow-[#0d9488]/30 text-sm">
              Book Appointment <ArrowRight size={16} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-white/60 hover:bg-white/10 active:scale-95 font-semibold px-7 py-3.5 rounded-2xl transition-all text-sm">
              Our Services
            </a>
          </div>

          {/* Mobile quick-contact */}
          <div className="flex lg:hidden gap-2 mb-7">
            <a href="tel:9306893393" className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-semibold py-2.5 rounded-xl backdrop-blur-sm">
              <Phone size={13} /> Call Now
            </a>
            <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/20 border border-[#25D366]/30 text-[#86efac] text-xs font-semibold py-2.5 rounded-xl">
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {[
              { value: "1000+", label: "Patients Treated", emoji: "🏆" },
              { value: "5+",    label: "Yrs Experience",   emoji: "⭐" },
              { value: "25+",   label: "Treatments",       emoji: "💪" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/[0.06] border border-white/10 rounded-2xl px-2 py-3 text-center">
                <div className="text-base mb-0.5">{stat.emoji}</div>
                <div className="text-lg sm:text-2xl font-extrabold text-[#5eead4]" style={{ fontFamily: "var(--font-space)" }}>{stat.value}</div>
                <div className="text-white/50 text-[10px] sm:text-xs leading-tight mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — desktop contact card */}
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
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 animate-bounce transition-colors">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
