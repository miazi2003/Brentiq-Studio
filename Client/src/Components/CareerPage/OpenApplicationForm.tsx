"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function OpenApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="talent-form"
      className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 bg-white overflow-hidden isolate relative"
    >
      {/* Centered Premium Dark Card */}
      <div
        className="relative w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[38px] bg-[#070709] border border-white/10 p-7 sm:p-12 lg:p-16 xl:p-20 text-white overflow-hidden shadow-2xl isolate"
        style={{
          background:
            "radial-gradient(ellipse at 95% 10%, rgba(255, 85, 32, 0.08) 0%, transparent 55%), radial-gradient(ellipse at 5% 90%, rgba(255, 85, 32, 0.05) 0%, transparent 50%), #070709",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Headline & Narrative                        */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FF5520] font-heading block">
                Get In Touch
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-[1.14] tracking-tight">
                Connect with our <br />
                <span className="text-white/90">talent collective.</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-white/65 leading-relaxed max-w-md">
                Have questions regarding open positions, freelance collaboration, or want to introduce yourself? Send us a quick note below.
              </p>
            </div>

            {/* Studio Footer Detail */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-body">
              <span>BRENTIQ STUDIO</span>
              <span className="text-[#FF5520] font-medium">CAREERS &amp; SCOUTING</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Simple Form (Name, Email, Subject)         */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 w-full">
            {isSubmitted ? (
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[360px]">
                <div className="w-14 h-14 rounded-full bg-[#FF5520]/15 border border-[#FF5520]/30 flex items-center justify-center text-[#FF5520] mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="font-body text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
                  Thank you for reaching out to Brentiq Studio! Our team will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: "", email: "", subject: "" });
                    setIsSubmitted(false);
                  }}
                  className="mt-4 text-xs font-semibold text-[#FF5520] hover:underline uppercase tracking-wider font-heading cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="talent-name"
                    className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                  >
                    Name <span className="text-[#FF5520]">*</span>
                  </label>
                  <input
                    id="talent-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="talent-email"
                    className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                  >
                    Email <span className="text-[#FF5520]">*</span>
                  </label>
                  <input
                    id="talent-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="talent-subject"
                    className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                  >
                    Subject <span className="text-[#FF5520]">*</span>
                  </label>
                  <textarea
                    id="talent-subject"
                    name="subject"
                    required
                    rows={4}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tell us what you're inquiring about..."
                    className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto font-button inline-flex items-center justify-center gap-3 px-8 sm:px-11 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff693a] text-white font-semibold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(255,85,32,0.35)] hover:shadow-[0_6px_28px_rgba(255,85,32,0.5)] hover:translate-y-[-2px] active:translate-y-0 active:scale-98 disabled:opacity-50 cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
