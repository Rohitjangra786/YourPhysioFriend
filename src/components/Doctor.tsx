import Image from "next/image";
import { Award, Briefcase, GraduationCap, Star } from "lucide-react";

const specializations = [
  "Posture Correction & Ergonomic Care",
  "Corporate Wellness & Workplace Injury Prevention",
  "Sports Injury Rehabilitation",
  "Orthopaedic Physiotherapy",
  "Post-Surgery Rehabilitation",
  "Neck & Back Pain Management",
  "Manual Therapy & Dry Needling",
  "Strength & Mobility Training",
];

const certifications = [
  "Certified Manual Therapist (CMT)",
  "Certified Dry Needling Practitioner",
  "Sports Rehabilitation Certification",
  "Advanced Electrotherapy Training",
  "Kinesio Taping Certification",
];

const education = [
  "Bachelor of Physiotherapy (BPT)",
  "Master's in Orthopaedic Physiotherapy — MPT (Ortho)",
  "Advanced Training in Manual Therapy & Rehabilitation",
];

const experience = [
  "Ex Park Hospital, Gurugram",
  "2+ years at Medharbor Hospital, Gurugram — ICU & IPD In-Charge",
  "Specialized in orthopaedic, postural & sports injury recovery",
  "Corporate wellness outreach for major organizations",
];

export default function Doctor() {
  return (
    <section id="doctor" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0d9488] text-sm font-semibold uppercase tracking-widest">
            Meet the Doctor
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1b3a6b] mt-3">
            Dr. Deven Sharma (PT)
          </h2>
          <p className="text-gray-500 mt-2">
            Consultant Physiotherapist &amp; Rehabilitation Specialist
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo + Quick Info */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            {/* Doctor photo */}
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0d9488]/20">
              <Image
                src="/images/doctor.jpg"
                alt="Dr. Deven Sharma — Physiotherapist"
                fill
                sizes="288px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

            {/* Credentials badge */}
            <div className="w-72 bg-[#1b3a6b] text-white rounded-2xl p-5 shadow-lg">
              <p className="font-bold text-lg">Dr. Deven Sharma</p>
              <p className="text-[#5eead4] text-sm font-medium mb-3">BPT · MPT (Ortho)</p>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                <span>📞 +91 9306893393</span>
                <span>✉️ drdevenpt@gmail.com</span>
              </div>
              <a
                href="https://wa.me/919306893393"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold rounded-xl py-2.5 transition-colors"
              >
                💬 WhatsApp Consult
              </a>
            </div>

            {/* Quote */}
            <blockquote className="w-72 bg-[#f0fdfa] border-l-4 border-[#0d9488] rounded-r-2xl p-5 text-sm text-gray-600 italic leading-relaxed">
              &ldquo;I&apos;m passionate about helping people regain their best posture, prevent
              workplace injuries, and live pain-free through individualized
              physiotherapy.&rdquo;
              <footer className="mt-2 font-semibold text-[#1b3a6b] not-italic">
                — Dr. Deven Sharma
              </footer>
            </blockquote>
          </div>

          {/* Details */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Education */}
            <InfoCard
              icon={<GraduationCap size={20} className="text-[#0d9488]" />}
              title="Education"
              items={education}
            />

            {/* Experience */}
            <InfoCard
              icon={<Briefcase size={20} className="text-[#0d9488]" />}
              title="Experience"
              items={experience}
            />

            {/* Specializations */}
            <div className="bg-[#f0fdfa] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star size={20} className="text-[#0d9488]" />
                <h3 className="font-bold text-[#1b3a6b] text-lg">Specializations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {specializations.map((s) => (
                  <span
                    key={s}
                    className="bg-white border border-[#0d9488]/30 text-[#1b3a6b] text-sm px-3 py-1.5 rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <InfoCard
              icon={<Award size={20} className="text-[#0d9488]" />}
              title="Certifications"
              items={certifications}
            />

            {/* Achievements */}
            <div className="bg-[#1b3a6b] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 text-[#5eead4]">
                🏆 Awards &amp; Achievements
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80 list-disc list-inside">
                <li>Successfully treated 1000+ patients with personalized recovery plans</li>
                <li>Recognized for excellence in patient care and corporate wellness programs</li>
                <li>
                  Hosted workshops on posture correction & workplace ergonomics for major
                  corporations
                </li>
                <li>Led community physiotherapy outreach initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-bold text-[#1b3a6b] text-lg">{title}</h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="text-[#0d9488] font-bold mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
