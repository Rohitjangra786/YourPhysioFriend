const services = [
  {
    emoji: "🦴",
    title: "Physiotherapy",
    category: "Core Treatment",
    description:
      "Improves flexibility, strength, and reduces pain. Slows disease progression and reduces symptoms through targeted, evidence-based exercises tailored to your needs.",
    color: "bg-[#f0fdfa] border-[#0d9488]/20",
    badge: "bg-[#0d9488] text-white",
  },
  {
    emoji: "🔄",
    title: "Chiropractic Adjustments",
    category: "Spinal Care",
    description:
      "Restores spinal health, reduces nerve pressure, and improves overall posture and wellness through precise, safe spinal adjustments.",
    color: "bg-[#eff6ff] border-blue-100",
    badge: "bg-[#1b3a6b] text-white",
  },
  {
    emoji: "🤲",
    title: "Osteopathy",
    category: "Holistic Care",
    description:
      "Focuses on the body as a whole, using hands-on techniques to enhance circulation and balance the body's structure for complete well-being.",
    color: "bg-[#fefce8] border-yellow-100",
    badge: "bg-yellow-600 text-white",
  },
  {
    emoji: "🪡",
    title: "Acupuncture",
    category: "Oriental Healing",
    description:
      "Stimulates the body's natural healing mechanisms through precise needle placement, promoting deep recovery and restoring energy balance.",
    color: "bg-[#fdf4ff] border-purple-100",
    badge: "bg-purple-600 text-white",
  },
  {
    emoji: "🫙",
    title: "Cupping Therapy",
    category: "Oriental Healing",
    description:
      "Enhances blood flow, reduces inflammation, and promotes faster healing by creating gentle suction to mobilize tissues and fluids.",
    color: "bg-[#fff7ed] border-orange-100",
    badge: "bg-orange-600 text-white",
  },
  {
    emoji: "💉",
    title: "Dry Needling",
    category: "Advanced Therapy",
    description:
      "Targets muscle knots and tightness with precision needle insertion, providing quick relief from pain and stiffness — highly effective for chronic tension.",
    color: "bg-[#f0fdf4] border-green-100",
    badge: "bg-green-700 text-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0d9488] text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1b3a6b] mt-3 mb-4">
            Our Treatment Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comprehensive physiotherapy and holistic healing solutions for lasting recovery and
            optimal performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`${svc.color} border rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 group`}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{svc.emoji}</span>
                <span
                  className={`${svc.badge} text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full`}
                >
                  {svc.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-[#1b3a6b] text-xl group-hover:text-[#0d9488] transition-colors">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>

              {/* CTA link */}
              <a
                href="#contact"
                className="mt-auto text-[#0d9488] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                Book Session →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">
            Not sure which treatment is right for you?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
