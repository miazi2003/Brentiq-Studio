"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  highlights?: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "services",
    number: "01",
    question: "What services does Brentiq Studio provide?",
    answer:
      "We provide full-spectrum digital design and creative engineering across four core pillars: Branding & Visual Identity (strategy, logos, guidelines, packaging), Web & Digital Development (custom Next.js, Shopify, Framer, web apps, UI/UX), Creative & Content (graphic design, motion graphics, video editing, 3D visuals), and Marketing & Growth (SEO, Meta/Google ads, email marketing, CRO).",
    highlights: [
      "Brand Identity & Strategy",
      "Custom Web Development",
      "UI/UX Design Systems",
      "Motion & Video Production",
      "E-Commerce & Shopify",
      "Performance Marketing & SEO",
    ],
  },
  {
    id: "why-brentiq",
    number: "02",
    question: "Why choose Brentiq Studio over a typical creative agency?",
    answer:
      "Unlike traditional agencies that pass static mockups to third-party developers, our designers and creative technologists work in lockstep. There is zero disconnect between design and code. Every interaction, transition, and micro-animation is engineered with 60fps performance, bespoke aesthetics, and production-level stability in mind.",
  },
  {
    id: "who-suited",
    number: "03",
    question: "Who is Brentiq Studio best suited for?",
    answer:
      "We are best suited for founders, brand leaders, and product teams who refuse to settle for generic templates and prioritize design distinction, high performance, and meticulous execution. Whether you need a category-defining website or a full brand overhaul, we build digital products that leave a lasting impression.",
  },
  {
    id: "startups-enterprises",
    number: "04",
    question: "Can Brentiq help startups as well as established companies?",
    answer:
      "Yes. We partner with ambitious early-stage startups to launch their brand and digital MVP from zero to one, as well as established market leaders seeking a high-caliber digital redesign, performance overhaul, and improved conversion rates.",
  },
  {
    id: "timeline-process",
    number: "05",
    question: "How does the project timeline and collaboration process work?",
    answer:
      "Our standard sprints range between 4 to 8 weeks depending on scope, custom 3D/motion requirements, and tech integrations. We follow our proven 6-step framework—Discovery, Strategy, Design, Build, Refine, and Launch—with transparent communication and weekly sprint checkpoints.",
  },
  {
    id: "tech-stack",
    number: "06",
    question: "What CMS platforms and technology frameworks do you work with?",
    answer:
      "We deliver bespoke design and development across all leading CMS platforms including Shopify, WordPress, Webflow, and Framer. For custom web applications and ultra-high performance sites, we engineer with Next.js, React, TypeScript, Tailwind CSS, and GSAP motion design.",
    highlights: [
      "Shopify",
      "WordPress",
      "Webflow",
      "Framer",
      "Next.js & React",
      "GSAP Animations",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full px-3 sm:px-5 lg:px-6 py-4 sm:py-6 bg-white relative"
    >
      <span id="questions" className="absolute -top-24 opacity-0 pointer-events-none" />
      {/* Outer Card Container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-[24px] sm:rounded-[36px] bg-[#fbfbfb] border border-gray-200/80 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-sm"
      >
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Eyebrow + Big Section Heading               */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 lg:sticky lg:top-28">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520] shadow-[0_0_8px_#FF5520]" />
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5520] font-heading uppercase">
                  FAQ
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12]">
                Frequently <br className="hidden sm:inline" />
                Asked Questions
              </h2>

              <p className="font-body text-sm sm:text-base text-zinc-500 max-w-sm leading-relaxed mt-2">
                Everything you need to know about our services, working model, timelines, and technical capabilities.
              </p>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Accordion Questions List                   */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-200/90 w-full">
              {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className="py-6 sm:py-8 transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 sm:gap-6 text-left cursor-pointer group"
                    >
                      {/* Number + Question */}
                      <div className="flex items-start gap-4 sm:gap-8 flex-1 min-w-0 pr-2">
                        <span className="font-heading text-xs sm:text-sm font-semibold text-zinc-400 mt-1 shrink-0">
                          {item.number}
                        </span>

                        <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-semibold text-zinc-900 group-hover:text-[#FF5520] transition-colors leading-snug">
                          {item.question}
                        </h3>
                      </div>

                      {/* Circular Toggle Icon */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                          isOpen
                            ? "bg-zinc-900 text-white rotate-45"
                            : "bg-[#e9ecef] text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white"
                        }`}
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                      </div>
                    </button>

                    {/* Collapsible Answer & Optional Highlights */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden pl-7 sm:pl-14">
                        <p className="font-body text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
                          {item.answer}
                        </p>

                        {/* Optional Highlights/Tags */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4">
                            {item.highlights.map((tag, tIndex) => (
                              <span
                                key={tIndex}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200/90 text-xs font-medium text-zinc-800 shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

