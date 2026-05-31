import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2548 0%, #1b3a6b 45%, #0d9488 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-10 bg-[#14b8a6]" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-10 bg-[#14b8a6]" />
      <div className="absolute top-[30%] right-[10%] w-[160px] h-[160px] rounded-full opacity-[0.07] bg-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-[#14b8a6]/20 text-[#5eead4] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-[#14b8a6]/30">
            Clinic Since 2022
          </span>

          <h1
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            From{" "}
            <span className="text-[#5eead4]">Pain</span>
            {" "}to{" "}
            <span className="text-[#5eead4]">Power</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/90">
              Let&apos;s Get You Moving
            </span>
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            Expert physiotherapy and rehabilitation led by{" "}
            <strong className="text-white">Dr. Deven Sharma (PT)</strong>, BPT, MPT (Ortho).
            Personalized care for orthopaedic, sports & posture conditions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Our Services
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "1000+", label: "Patients Treated" },
              { value: "3+", label: "Years Experience" },
              { value: "6+", label: "Specializations" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#5eead4]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side card */}
        <div className="hidden lg:flex justify-end">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-sm w-full text-white shadow-2xl">
            <p className="text-[#5eead4] text-sm font-semibold uppercase tracking-widest mb-3">Quick Contact</p>
            <p className="text-2xl font-bold mb-1">Dr. Deven Sharma</p>
            <p className="text-white/70 text-sm mb-6">BPT, MPT (Ortho) · Physiotherapist</p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:9306893393"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors font-medium"
              >
                📞 &nbsp;+91 9306893393
              </a>
              <a
                href="mailto:drdevenpt@gmail.com"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors font-medium"
              >
                ✉️ &nbsp;drdevenpt@gmail.com
              </a>
              <a
                href="https://wa.me/919306893393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-xl px-4 py-3 transition-colors font-medium text-[#86efac]"
              >
                💬 &nbsp;Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
