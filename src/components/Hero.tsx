import { ArrowRight, ChevronDown, Phone, MessageCircle, ShieldCheck, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #060e20 0%, #0d1f3c 35%, #112d55 65%, #0d4a44 100%)" }}
    >
      {/* Animated orbs */}
      <div className="animate-float-slow animate-pulse-glow absolute top-[-100px] right-[-80px] w-[340px] h-[340px] md:w-[560px] md:h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)", opacity: 0.15 }} />
      <div className="animate-float-medium animate-pulse-glow absolute bottom-[-80px] left-[-60px] w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, #0d9488 0%, transparent 70%)", opacity: 0.12, animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-1/4 w-[180px] h-[180px] rounded-full hidden md:block"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", opacity: 0.06 }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10"
        style={{ background: "conic-gradient(from 180deg at 100% 0%, #14b8a6, transparent 40%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-14 md:py-32 md:pt-40 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT: Text */}
        <div>
          {/* Live badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/8 border border-white/15 backdrop-blur-sm text-[#5eead4] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse shadow-[0_0_6px_#5eead4]" />
            Clinic Since 2022 · Gurugram
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-2 font-extrabold leading-[1.05] tracking-tight mb-5" style={{ fontFamily: "var(--font-space)" }}>
            <span className="block text-white text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl">From</span>
            <span className="block text-gradient-teal text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl">Pain to</span>
            <span className="block text-white text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl">Power</span>
            <span className="block text-white/60 text-lg sm:text-2xl md:text-3xl font-semibold mt-2">Let&apos;s Get You Moving</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-3 text-white/60 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
            Expert physiotherapy by{" "}
            <strong className="text-white font-semibold">Dr. Deven Sharma (PT)</strong>,
            BPT, MPT&nbsp;(Ortho). Personalized care for orthopaedic, sports &amp; posture conditions.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#contact"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] active:scale-95 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm tracking-wide">
              Book Appointment <ArrowRight size={16} />
            </a>
            <a href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:border-white/50 hover:bg-white/8 hover:text-white active:scale-95 font-semibold px-8 py-4 rounded-2xl transition-all text-sm">
              Explore Services
            </a>
          </div>

          {/* Mobile quick-contact */}
          <div className="animate-fade-up-4 flex lg:hidden gap-2 mb-8">
            <a href="tel:9306893393"
              className="flex-1 flex items-center justify-center gap-2 bg-white/8 border border-white/12 text-white text-xs font-semibold py-3 rounded-xl">
              <Phone size={13} /> Call Now
            </a>
            <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#86efac] text-xs font-semibold py-3 rounded-xl">
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-4 grid grid-cols-3 gap-3">
            {[
              { value: "1000+", label: "Patients Treated", Icon: Users },
              { value: "5+",    label: "Yrs Experience",   Icon: Award },
              { value: "25+",   label: "Treatments",       Icon: ShieldCheck },
            ].map(({ value, label, Icon }) => (
              <div key={label}
                className="bg-white/5 border border-white/10 rounded-2xl px-2 py-3.5 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-1 text-[#5eead4] opacity-70"><Icon size={16} /></div>
                <div className="text-xl sm:text-2xl font-black text-gradient-teal" style={{ fontFamily: "var(--font-space)" }}>{value}</div>
                <div className="text-white/40 text-[10px] sm:text-xs leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-5 flex items-center gap-2 text-white/25 text-[11px]">
            <ShieldCheck size={13} className="text-[#5eead4] opacity-50 shrink-0" />
            <span>BPT · MPT (Ortho) · Manual Therapy · Dry Needling · Kinesio Taping</span>
          </div>
        </div>

        {/* RIGHT: desktop glass card */}
        <div className="hidden lg:flex justify-end">
          <div className="relative bg-white/7 backdrop-blur-md border border-white/15 rounded-3xl p-8 max-w-sm w-full text-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #14b8a6, transparent)", transform: "translate(30%, -30%)" }} />
            <p className="text-[#5eead4] text-xs font-bold uppercase tracking-widest mb-3">Quick Contact</p>
            <p className="text-2xl font-extrabold mb-0.5" style={{ fontFamily: "var(--font-space)" }}>Dr. Deven Sharma</p>
            <p className="text-white/50 text-sm mb-6">BPT, MPT (Ortho) · Physiotherapist</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:9306893393" className="flex items-center gap-3 bg-white/8 hover:bg-white/15 border border-white/10 rounded-2xl px-4 py-3 transition-colors font-medium">📞 &nbsp;+91 9306893393</a>
              <a href="mailto:drdevenpt@gmail.com" className="flex items-center gap-3 bg-white/8 hover:bg-white/15 border border-white/10 rounded-2xl px-4 py-3 transition-colors font-medium">✉️ &nbsp;drdevenpt@gmail.com</a>
              <a href="https://wa.me/919306893393" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-2xl px-4 py-3 transition-colors font-medium text-[#86efac]">💬 &nbsp;Chat on WhatsApp</a>
            </div>
            <a href="#contact" className="mt-4 btn-glow flex items-center justify-center gap-2 w-full bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold py-3.5 rounded-2xl text-sm transition-all">
              Book Appointment <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <a href="#about" className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/50 animate-bounce transition-colors">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
