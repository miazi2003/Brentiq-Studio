"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItemData } from "@/data/servicesData";
import ServiceProjectsCarousel from "./ServiceProjectsCarousel";

interface Props {
  service: ServiceItemData;
}

export default function ServiceScopeAndRelated({ service }: Props) {
  const scopeSectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const capabilityCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const techPillsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scopeSection = scopeSectionRef.current;
    if (!scopeSection) return;

    const ctx = gsap.context(() => {
      // SCOPE SECTION ANIMATION TIMELINE
      const scopeTl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeSection,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Left Column elements reveal
      if (leftColRef.current) {
        scopeTl.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          0
        );
      }

      // Right Main Container box ease-in
      if (rightContainerRef.current) {
        scopeTl.fromTo(
          rightContainerRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          0.1
        );
      }

      // Capability cards staggered pop-up
      const validCards = capabilityCardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        scopeTl.fromTo(
          validCards,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.3
        );
      }

      // Tech Stack pills quick stagger
      const validPills = techPillsRef.current.filter(Boolean);
      if (validPills.length > 0) {
        scopeTl.fromTo(
          validPills,
          { opacity: 0, scale: 0.8, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "back.out(1.7)",
          },
          0.6
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [service]);

  return (
    <>
      {/* ========================================================================= */}
      {/* 2. MODERN BREADCRUMBS & OVERVIEW INTRODUCTION WITH SCROLL ENTRANCE MOTION  */}
      {/* ========================================================================= */}
      <section
        ref={scopeSectionRef}
        className="w-full px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-gray-500 hover:text-gray-950 transition-colors font-body group"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FF5520] group-hover:text-white transition-colors flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to All Services</span>
          </Link>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60">
            <span className="font-heading text-xs font-bold text-[#FF5520]">
              /{service.number}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#FF5520]" />
            <span className="text-xs uppercase tracking-widest font-bold text-gray-800 font-heading">
              {service.categoryLabel}
            </span>
          </div>
        </div>

        {/* Modern Bento Overview & Interactive Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-14">
          {/* Left Column: Headline, Narrative & Primary Magnetic CTA */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200/80 text-xs font-bold uppercase tracking-wider text-gray-700 font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] animate-pulse" />
              Comprehensive Scope
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight leading-[1.12]">
              Engineered for <br className="hidden sm:inline" />
              <span className="text-[#FF5520]">impact</span> & longevity.
            </h2>

            <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>

            {/* Value Highlights Pill Row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 font-body">
                ✓ 100% Bespoke Architecture
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 font-body">
                ✓ 60fps Smooth Motion
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 font-body">
                ✓ Scalable Performance
              </span>
            </div>

            <div className="pt-4">
              <Link
                href="/#contact"
                className="font-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-300 shadow-xl shadow-[#FF5520]/30 hover:shadow-2xl hover:shadow-[#FF5520]/45 hover:-translate-y-0.5 group"
              >
                <span>Start a Project in {service.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column: Modern Animated Capability Cards & Tech Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div
              ref={rightContainerRef}
              className="bg-gradient-to-b from-[#fafafa] to-white border border-gray-200/90 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/70">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 tracking-tight">
                  Key Capabilities & Deliverables
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5520] font-heading">
                  {service.capabilities.length} Pillars
                </span>
              </div>

              {/* Interactive Capability Cards Grid with Stagger Entrance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      capabilityCardsRef.current[idx] = el;
                    }}
                    className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-[#FF5520]/40 shadow-xs hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5 group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange-50 group-hover:bg-[#FF5520] text-[#FF5520] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold text-gray-400 font-heading block mb-0.5">
                        0{idx + 1}
                      </span>
                      <span className="font-body text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#FF5520] transition-colors duration-300">
                        {cap}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies & Frameworks Showcase */}
              <div className="mt-10 pt-8 border-t border-gray-200/70">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Technologies & Frameworks
                  </span>
                  <span className="text-xs text-gray-400 font-body">Production Stack</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      ref={(el) => {
                        techPillsRef.current[idx] = el;
                      }}
                      className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white text-xs font-semibold text-gray-800 font-body shadow-xs transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MODERN HORIZONTAL CAROUSEL SHOWCASING WORKS FOR THIS SPECIFIC SERVICE  */}
      {/* ========================================================================= */}
      <ServiceProjectsCarousel service={service} />
    </>
  );
}
