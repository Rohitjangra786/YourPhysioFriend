"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Appointment Request*\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919306893393?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-24" style={{ background: "linear-gradient(135deg, #0f2548 0%, #1b3a6b 60%, #0d9488 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="text-[#5eead4] text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3" style={{ fontFamily: "var(--font-space)" }}>
            Book Your Appointment
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm">
            Ready to start your recovery journey? Reach out to Dr. Deven Sharma today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#5eead4] font-semibold text-lg mb-2">Contact Details</h3>

            {[
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+91 9306893393",
                href: "tel:9306893393",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "drdevenpt@gmail.com",
                href: "mailto:drdevenpt@gmail.com",
              },
              {
                icon: <MessageCircle size={20} />,
                label: "WhatsApp",
                value: "Chat with Dr. Deven",
                href: "https://wa.me/919306893393",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-6 py-4 text-white transition-colors group"
              >
                <span className="text-[#5eead4] group-hover:scale-110 transition-transform">
                  {c.icon}
                </span>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Info box */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-white mt-2">
              <h4 className="font-semibold text-[#5eead4] mb-3">🕐 Clinic Hours</h4>
              <div className="flex flex-col gap-1.5 text-sm text-white/70">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-white font-medium">9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-white font-medium">By Appointment</span></div>
              </div>
              <p className="text-xs text-white/50 mt-4">
                🏥 Home visits &amp; corporate sessions available on request.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#1b3a6b] mb-2">Request Sent!</h3>
                <p className="text-gray-500">
                  Your appointment request has been sent to WhatsApp. Dr. Deven will get back to
                  you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#0d9488] font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#1b3a6b] mb-6">
                  Book an Appointment
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]/40 focus:border-[#0d9488] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]/40 focus:border-[#0d9488] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]/40 focus:border-[#0d9488] transition-colors text-gray-700"
                    >
                      <option value="">Select a service…</option>
                      <option>Physiotherapy</option>
                      <option>Chiropractic Adjustments</option>
                      <option>Osteopathy</option>
                      <option>Acupuncture</option>
                      <option>Cupping Therapy</option>
                      <option>Dry Needling</option>
                      <option>Sports Injury Rehabilitation</option>
                      <option>Posture Correction</option>
                      <option>Post-Surgery Rehabilitation</option>
                      <option>Corporate Wellness</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Message / Concern
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your concern or preferred time…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]/40 focus:border-[#0d9488] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md mt-1"
                  >
                    <Send size={16} />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-center text-gray-400">
                    Submitting will open WhatsApp with your details prefilled.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
