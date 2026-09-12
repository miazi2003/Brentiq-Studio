"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItemData } from "@/data/servicesData";
import ServiceProjectsCarousel from "./ServiceProjectsCarousel";

interface Props {
  service: ServiceItemData;
  otherServices: ServiceItemData[];
}

export default function ServiceScopeAndRelated({ service, otherServices }: Props) {
  const scopeSectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const capabilityCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const techPillsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const relatedSectionRef = useRef<HTMLElement>(null);
  const relatedHeaderRef = useRef<HTMLDivElement>(null);
  const relatedCardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scopeSection = scopeSectionRef.current;
    const relatedSection = relatedSectionRef.current;

    if (!scopeSection) return;

    const ctx = gsap.context(() => {
      // 1. SCOPE SECTION ANIMATION TIMELINE
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

      // 2. RELATED SERVICES SECTION ANIMATION TIMELINE
      if (relatedSection) {
        const relatedTl = gsap.timeline({
          scrollTrigger: {
            trigger: relatedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        if (relatedHeaderRef.current) {
          relatedTl.fromTo(
            relatedHeaderRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0
          );
        }

        const validRelatedCards = relatedCardsRef.current.filter(Boolean);
        if (validRelatedCards.length > 0) {
          relatedTl.fromTo(
            validRelatedCards,
            { opacity: 0, y: 45, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            },
            0.15
          );
        }
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

      {/* ========================================================================= */}
      {/* 4. MODERNIZED & ANIMATED RELATED SERVICES SECTION                         */}
      {/* ========================================================================= */}
      <section
        ref={relatedSectionRef}
        className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-24 max-w-7xl mx-auto border-t border-gray-100"
      >
        <div
          ref={relatedHeaderRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-[#FF5520] font-heading mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]" />
              Explore Ecosystem
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight">
              Related Services
            </h3>
          </div>

          <Link
            href="/services"
            className="font-button inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#FF5520] transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Visual Cards with Hover Image Previews and Glassmorphic Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {otherServices.map((item: ServiceItemData, idx: number) => (
            <Link
              key={item.slug}
              ref={(el) => {
                relatedCardsRef.current[idx] = el;
              }}
              href={`/services/${item.slug}`}
              className="group relative rounded-[28px] overflow-hidden bg-white border border-gray-200/90 hover:border-[#FF5520]/40 shadow-sm hover:shadow-2xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top Image Preview with Zoom on Hover */}
              <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-gray-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Number & Category Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-bold text-white font-heading">
                    /{item.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-900 font-heading">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-gray-950 group-hover:text-[#FF5520] transition-colors duration-300 tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {item.headline}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#FF5520] transition-colors">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FF5520] text-gray-700 group-hover:text-white transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

