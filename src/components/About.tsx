import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Personalized physiotherapy recovery plans",
  "Post-surgical rehabilitation support",
  "Corporate wellness & posture programs",
  "Visiting services for companies & homes",
  "Advanced manual therapy & dry needling",
  "Evidence-based orthopaedic care",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#0d9488] text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1b3a6b] mt-3 mb-6 leading-tight"
            >
              Welcome to{" "}
              <span className="text-[#0d9488]">Your Physio Friend</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At <strong className="text-[#1b3a6b]">Your Physio Friend</strong>, we believe in
              compassionate care and personalized physiotherapy solutions. Led by{" "}
              <strong className="text-[#1b3a6b]">Dr. Deven Sharma</strong>, a well-known
              physiotherapist, we specialize in helping you move freely and recover from
              injuries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We offer comprehensive post-surgical rehabilitation to support your recovery every
              step of the way. Additionally, we provide corporate wellness programs — visiting
              companies to offer posture correction exercises and physiotherapy sessions to
              enhance employee well-being.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-[#0d9488] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-block bg-[#1b3a6b] hover:bg-[#0f2548] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Book a Consultation
            </a>
          </div>

          {/* Right — Stats cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: "🏥",
                value: "Since 2022",
                label: "Clinic Established",
                bg: "bg-[#1b3a6b]",
                text: "text-white",
              },
              {
                icon: "👥",
                value: "1000+",
                label: "Patients Treated",
                bg: "bg-[#0d9488]",
                text: "text-white",
              },
              {
                icon: "🏆",
                value: "2+ yrs",
                label: "Hospital Experience (ICU/IPD)",
                bg: "bg-white",
                text: "text-[#1b3a6b]",
                border: "border border-gray-200",
              },
              {
                icon: "🏢",
                value: "Corporate",
                label: "Wellness Programs",
                bg: "bg-white",
                text: "text-[#1b3a6b]",
                border: "border border-gray-200",
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`${card.bg} ${card.border ?? ""} rounded-2xl p-6 shadow-sm flex flex-col gap-2`}
              >
                <span className="text-3xl">{card.icon}</span>
                <span className={`text-2xl font-bold ${card.text}`}>{card.value}</span>
                <span
                  className={`text-sm ${card.text === "text-white" ? "text-white/70" : "text-gray-500"}`}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
