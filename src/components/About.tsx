import { CheckCircle2 } from "lucide-react";
import { Hospital, Users, Trophy, Buildings } from "@phosphor-icons/react/dist/ssr";

const highlights = [
  "Personalized physiotherapy recovery plans",
  "Post-surgical rehabilitation support",
  "Corporate wellness & posture programs",
  "Visiting services for companies & homes",
  "Advanced manual therapy & dry needling",
  "Evidence-based orthopaedic care",
];

const stats = [
  {
    Icon: Hospital,
    value: "Since 2022",
    label: "Clinic Established",
    gradient: "linear-gradient(145deg, #1b3a6b, #2d5a9e)",
    glow: "rgba(27,58,107,0.3)",
  },
  {
    Icon: Users,
    value: "1000+",
    label: "Patients Treated",
    gradient: "linear-gradient(145deg, #0d9488, #14b8a6)",
    glow: "rgba(13,148,136,0.3)",
  },
  {
    Icon: Trophy,
    value: "5+ Yrs",
    label: "Experience",
    gradient: "linear-gradient(145deg, #f59e0b, #fbbf24)",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    Icon: Buildings,
    value: "Corporate",
    label: "Wellness Programs",
    gradient: "linear-gradient(145deg, #7c3aed, #a855f7)",
    glow: "rgba(124,58,237,0.25)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16 bg-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats grid — top on mobile */}
        <div className="grid grid-cols-2 gap-3 mb-10 lg:hidden">
          {stats.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{
                background: card.gradient,
                boxShadow: `0 8px 20px ${card.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                <card.Icon size={16} weight="duotone" color="white" />
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>{card.value}</span>
              <span className="text-white/70 text-xs leading-tight">{card.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-4 leading-tight" style={{ fontFamily: "var(--font-space)" }}>
              Your Trusted Physiotherapy Clinic in{" "}
              <span className="text-[#0d9488]">Gurgaon (Gurugram)</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              At <strong className="text-[#1b3a6b]">Your Physio Friend</strong> in <strong className="text-[#1b3a6b]">Gurugram (Gurgaon), Haryana</strong>, we believe in compassionate care and personalized physiotherapy. Led by{" "}
              <strong className="text-[#1b3a6b]">Dr. Deven Sharma (BPT, MPT Ortho)</strong>, we help patients across Gurgaon and Delhi NCR move freely and recover from injuries — with comprehensive post-surgical rehab and corporate wellness programs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-[#0d9488] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-[#1b3a6b] hover:bg-[#0f2548] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              Book a Consultation
            </a>
          </div>

          {/* Right — Stats (desktop only) */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {stats.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl p-6 flex flex-col gap-3"
                style={{
                  background: card.gradient,
                  boxShadow: `0 10px 30px ${card.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <card.Icon size={20} weight="duotone" color="white" />
                </div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>{card.value}</span>
                <span className="text-white/70 text-sm">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

