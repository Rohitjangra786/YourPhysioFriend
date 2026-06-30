import {
  Heartbeat,
  Bone,
  HandHeart,
  Needle,
  Drop,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    icon: Heartbeat,
    title: "Physiotherapy",
    category: "Core Treatment",
    description:
      "Improves flexibility, strength, and reduces pain through targeted, evidence-based exercises tailored to your unique recovery needs.",
    gradient: "linear-gradient(145deg, #0d9488, #14b8a6)",
    glow: "rgba(13,148,136,0.35)",
    badge: "bg-teal-100 text-teal-800",
  },
  {
    icon: Bone,
    title: "Chiropractic",
    category: "Spinal Care",
    description:
      "Restores spinal health, reduces nerve pressure, and improves overall posture and wellness through precise spinal adjustments.",
    gradient: "linear-gradient(145deg, #4f46e5, #7c3aed)",
    glow: "rgba(79,70,229,0.35)",
    badge: "bg-indigo-100 text-indigo-800",
  },
  {
    icon: HandHeart,
    title: "Osteopathy",
    category: "Holistic Care",
    description:
      "Focuses on the body as a whole, using hands-on techniques to enhance circulation and balance the body's structure.",
    gradient: "linear-gradient(145deg, #059669, #10b981)",
    glow: "rgba(5,150,105,0.35)",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: Needle,
    title: "Acupuncture",
    category: "Oriental Healing",
    description:
      "Stimulates the body's natural healing mechanisms through precise needle placement, promoting deep recovery and energy balance.",
    gradient: "linear-gradient(145deg, #dc2626, #f97316)",
    glow: "rgba(220,38,38,0.35)",
    badge: "bg-red-100 text-red-800",
  },
  {
    icon: Drop,
    title: "Cupping Therapy",
    category: "Oriental Healing",
    description:
      "Enhances blood flow, reduces inflammation, and promotes faster healing by creating gentle suction to mobilize tissues.",
    gradient: "linear-gradient(145deg, #d97706, #f59e0b)",
    glow: "rgba(217,119,6,0.35)",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    icon: Lightning,
    title: "Dry Needling",
    category: "Advanced Therapy",
    description:
      "Targets muscle knots and tightness with precision, providing quick relief from chronic pain and stiffness.",
    gradient: "linear-gradient(145deg, #7c3aed, #a855f7)",
    glow: "rgba(124,58,237,0.35)",
    badge: "bg-purple-100 text-purple-800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <span className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-3" style={{ fontFamily: "var(--font-space)" }}>
            Physiotherapy &amp; Rehabilitation Services in Gurgaon
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Comprehensive physiotherapy and holistic healing in Gurugram (Gurgaon) — from sports injury rehab to posture correction, for lasting recovery.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-7 flex flex-col gap-2.5 md:gap-5 hover:-translate-y-1 transition-all duration-300 group"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
              >
                {/* Icon + title row (compact on mobile) */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                  <div
                    className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 md:mb-3"
                    style={{
                      background: svc.gradient,
                      boxShadow: `0 6px 18px ${svc.glow}, inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.12)`,
                    }}
                  >
                    <Icon size={20} weight="duotone" color="white" />
                  </div>
                  <div className="flex flex-col md:block">
                    <h3 className="font-bold text-[#1b3a6b] text-sm md:text-xl group-hover:text-[#0d9488] transition-colors leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                      {svc.title}
                    </h3>
                    <span className={`${svc.badge} text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-0.5 md:hidden`}>
                      {svc.category}
                    </span>
                  </div>
                  <span className={`${svc.badge} text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full hidden md:block ml-auto self-start`}>
                    {svc.category}
                  </span>
                </div>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{svc.description}</p>

                <a href="#contact" className="mt-auto text-[#0d9488] text-xs md:text-sm font-semibold flex items-center gap-1 transition-all">
                  Book →
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:mt-14">
          <p className="text-gray-500 text-sm mb-3">Not sure which treatment is right for you?</p>
          <a href="#contact" className="inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md text-sm">
            Book a Consultation — ₹1,000
          </a>
        </div>
      </div>
    </section>
  );
}
