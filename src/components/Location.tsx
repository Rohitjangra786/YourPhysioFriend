import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-10 md:py-16 bg-[#f0fdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <span className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-2" style={{ fontFamily: "var(--font-space)" }}>
            Visit Our Clinic
          </h2>
          <p className="text-gray-500 text-sm">Conveniently located in Gurugram, Haryana</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="sm:col-span-2 lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#0d9488]" />
            </div>
            <div>
              <p className="font-semibold text-[#1b3a6b] text-sm mb-1">Clinic Address</p>
              <p className="text-gray-500 text-sm leading-relaxed">Your Physio Friend<br />Gurugram, Haryana, India</p>
              <a href="https://share.google/M4qNPpCJKM7jRp8NK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0d9488] text-xs font-semibold mt-2 hover:underline">
                <Navigation size={12} /> Get Directions on Google Maps
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
              <Phone size={20} className="text-[#0d9488]" />
            </div>
            <div>
              <p className="font-semibold text-[#1b3a6b] text-sm mb-1">Phone</p>
              <a href="tel:9306893393" className="text-gray-600 text-sm hover:text-[#0d9488] transition-colors">+91 9306893393</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0fdfa] flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[#0d9488]" />
            </div>
            <div>
              <p className="font-semibold text-[#1b3a6b] text-sm mb-1">Email</p>
              <a href="mailto:drdevenpt@gmail.com" className="text-gray-600 text-sm hover:text-[#0d9488] transition-colors break-all">drdevenpt@gmail.com</a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 bg-[#1b3a6b] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-[#5eead4]" />
              <p className="font-semibold text-sm">Clinic Hours</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {[
                { day: "Mon – Sat", time: "9:00 AM – 7:00 PM", open: true },
                { day: "Sunday", time: "By Appointment", open: false },
              ].map((h) => (
                <div key={h.day} className="flex justify-between sm:flex-col sm:gap-1 items-center sm:items-start bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/70 text-xs">{h.day}</span>
                  <span className={`font-semibold text-sm ${h.open ? "text-[#5eead4]" : "text-white/50"}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
