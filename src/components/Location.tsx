import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-14 md:py-24 bg-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-2" style={{ fontFamily: "var(--font-space)" }}>
            Visit Our Clinic
          </h2>
          <p className="text-gray-500 text-sm">Conveniently located in Gurugram, Haryana</p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Google Map — top on mobile */}
          <div className="lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-56 sm:h-72 lg:h-auto lg:min-h-[420px]">
            <iframe
              title="Your Physio Friend Location"
              src="https://maps.google.com/maps?q=Your+Physio+Friend+Gurugram&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Panel — below map on mobile */}
          <div className="lg:col-span-2 lg:order-1 grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-5 content-start">
            {/* Address */}
            <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#0d9488]" />
              </div>
              <div>
                <p className="font-semibold text-[#1b3a6b] text-sm mb-0.5">Clinic Address</p>
                <p className="text-gray-500 text-xs leading-relaxed">Your Physio Friend<br />Gurugram, Haryana, India</p>
                <a href="https://share.google/M4qNPpCJKM7jRp8NK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0d9488] text-xs font-semibold mt-1.5 hover:underline">
                  <Navigation size={11} /> Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#0d9488]" />
              </div>
              <div>
                <p className="font-semibold text-[#1b3a6b] text-sm mb-0.5">Phone</p>
                <a href="tel:9306893393" className="text-gray-600 text-xs hover:text-[#0d9488] transition-colors">+91 9306893393</a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#0d9488]" />
              </div>
              <div>
                <p className="font-semibold text-[#1b3a6b] text-sm mb-0.5">Email</p>
                <a href="mailto:drdevenpt@gmail.com" className="text-gray-600 text-xs hover:text-[#0d9488] transition-colors break-all">drdevenpt@gmail.com</a>
              </div>
            </div>

            {/* Hours */}
            <div className="col-span-2 bg-[#1b3a6b] rounded-2xl p-4 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-[#5eead4]" />
                <p className="font-semibold text-sm">Clinic Hours</p>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM", open: true },
                  { day: "Saturday", time: "9:00 AM – 5:00 PM", open: true },
                  { day: "Sunday", time: "By Appointment", open: false },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-white/70">{h.day}</span>
                    <span className={`font-medium px-2 py-0.5 rounded-full ${h.open ? "bg-[#0d9488]/30 text-[#5eead4]" : "bg-white/10 text-white/50"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
