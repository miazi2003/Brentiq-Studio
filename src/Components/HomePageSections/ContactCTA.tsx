"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2, Loader2, ChevronDown, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICE_OPTIONS = [
  "Website Development",
  "Shopify Store",
  "Branding & Identity",
  "Content & Video",
  "Performance Marketing",
  "Full Digital Package",
];

const BUDGET_OPTIONS = [
  "Less than $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K - $50K",
  "More than $50K",
];

interface ContactCTAProps {
  defaultService?: string;
}

export default function ContactCTA({ defaultService }: ContactCTAProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initialService =
    defaultService && SERVICE_OPTIONS.includes(defaultService)
      ? defaultService
      : SERVICE_OPTIONS[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    budget: BUDGET_OPTIONS[1],
    details: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const card = cardRef.current;
    const leftCol = leftColRef.current;
    const form = formRef.current;

    if (!section || !card) return;

    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
        }
      );

      if (leftCol && form) {
        tl.fromTo(
          [leftCol.children],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        );

        tl.fromTo(
          form,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 bg-white overflow-hidden isolate relative"
    >
      <span id="get-started" className="absolute -top-24 opacity-0 pointer-events-none" />
      {/* Centered Premium Dark CTA Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-[1360px] mx-auto rounded-[28px] sm:rounded-[38px] bg-[#070709] border border-white/10 p-7 sm:p-12 lg:p-16 xl:p-20 text-white overflow-hidden shadow-2xl isolate"
        style={{
          background:
            "radial-gradient(ellipse at 95% 10%, rgba(255, 85, 32, 0.08) 0%, transparent 55%), radial-gradient(ellipse at 5% 90%, rgba(255, 85, 32, 0.05) 0%, transparent 50%), #070709",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Main Headline, Copy & Value Points          */}
          {/* ======================================================== */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 sm:space-y-10"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520] shadow-[0_0_10px_#FF5520]" />
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5520] font-heading uppercase">
                  Let’s Work Together
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white leading-[1.14] tracking-tight">
                Have a project in mind? <br />
                <span className="text-white/90">Let’s build something meaningful.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="font-body text-sm sm:text-base text-white/65 leading-relaxed max-w-md">
                Tell us a little about your project, and our team will get back to you with the next steps.
              </p>

              {/* Key Value Points */}
              <div className="space-y-3.5 pt-2 font-body">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/80">
                    Response within 24–48 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/80">
                    Clear project scope & actionable roadmap
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/80">
                    A dedicated team built around your project
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Footer Detail */}
            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-body">
              <span>BRENTIQ STUDIO / 2026</span>
              <span className="text-[#FF5520] font-medium">INQUIRIES OPEN</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Project Inquiry Form                       */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 w-full">
            {isSubmitted ? (
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[420px]">
                <div className="w-14 h-14 rounded-full bg-[#FF5520]/15 border border-[#FF5520]/30 flex items-center justify-center text-[#FF5520] mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Message Received
                </h3>
                <p className="font-body text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
                  Thank you for reaching out! Our team has received your project details and will be in touch within 24–48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#FF5520] hover:underline uppercase tracking-wider font-heading"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                    >
                      Full Name <span className="text-[#FF5520]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                    >
                      Work Email <span className="text-[#FF5520]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body"
                    />
                  </div>
                </div>

                {/* Company + Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-company"
                      className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                    >
                      Company / Brand
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body"
                    />
                  </div>

                  {/* What do you need? Custom Dropdown */}
                  <div className="space-y-2">
                    <label
                      id="service-label"
                      className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                    >
                      What do you need?
                    </label>
                    <div ref={dropdownRef} className="relative">
                      {/* Hidden form input */}
                      <input
                        type="hidden"
                        name="service"
                        value={formData.service}
                      />

                      {/* Dropdown Trigger Button */}
                      <button
                        type="button"
                        id="contact-service"
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                        aria-labelledby="service-label contact-service"
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#111217] border transition-all duration-300 text-left font-body text-base sm:text-lg cursor-pointer select-none ${
                          isDropdownOpen
                            ? "border-[#FF5520] ring-1 ring-[#FF5520]/40 shadow-[0_0_20px_rgba(255,85,32,0.15)] text-white"
                            : "border-white/10 hover:border-white/25 text-white/95 hover:bg-white/[0.03]"
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span className="w-2 h-2 rounded-full bg-[#FF5520] shadow-[0_0_8px_#FF5520] shrink-0" />
                          <span className="truncate font-medium">{formData.service}</span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-out ${
                            isDropdownOpen ? "rotate-180 text-[#FF5520]" : "text-white/50"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu Popover */}
                      <div
                        role="listbox"
                        aria-labelledby="service-label"
                        className={`absolute top-[calc(100%+8px)] left-0 w-full z-50 rounded-xl sm:rounded-2xl bg-[#0e0f14]/98 backdrop-blur-2xl border border-white/15 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_24px_rgba(255,85,32,0.12)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top ${
                          isDropdownOpen
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                        }`}
                      >
                        <div
                          data-lenis-prevent="true"
                          className="space-y-1 max-h-64 sm:max-h-72 overflow-y-auto no-scrollbar overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                          {SERVICE_OPTIONS.map((opt) => {
                            const isSelected = formData.service === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    service: opt,
                                  }));
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer text-left ${
                                  isSelected
                                    ? "bg-[#FF5520]/15 text-[#FF5520] border border-[#FF5520]/35 font-semibold"
                                    : "text-white/80 hover:text-white hover:bg-white/[0.08] border border-transparent"
                                }`}
                              >
                                <span className="flex items-center gap-2.5">
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                      isSelected
                                        ? "bg-[#FF5520] shadow-[0_0_6px_#FF5520]"
                                        : "bg-white/20"
                                    }`}
                                  />
                                  {opt}
                                </span>
                                {isSelected && (
                                  <Check className="w-4 h-4 text-[#FF5520] shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget Selection Buttons */}
                <div className="space-y-2.5">
                  <label className="font-heading text-sm sm:text-base font-semibold text-white/90 block">
                    Project Budget
                  </label>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, budget: opt }))
                          }
                          className={`px-4 sm:px-5.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium transition-all duration-200 border cursor-pointer ${
                            isSelected
                              ? "bg-[#FF5520] text-white border-[#FF5520] shadow-[0_0_14px_rgba(255,85,32,0.35)] scale-[1.02]"
                              : "bg-[#111217] text-white/80 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-details"
                    className="font-heading text-sm sm:text-base font-semibold text-white/90 block"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your project goals and requirements..."
                    className="w-full px-4.5 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#FF5520] focus:ring-1 focus:ring-[#FF5520]/50 transition-all font-body resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto font-button inline-flex items-center justify-center gap-3 px-8 sm:px-11 py-4 sm:py-4.5 rounded-full bg-[#FF5520] hover:bg-[#ff693a] text-white font-semibold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(255,85,32,0.35)] hover:shadow-[0_6px_28px_rgba(255,85,32,0.5)] hover:translate-y-[-2px] active:translate-y-0 active:scale-98 disabled:opacity-50 cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
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

