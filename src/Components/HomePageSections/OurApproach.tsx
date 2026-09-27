"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATEMENT_TEXT =
  "We create digital experiences with clarity — blending strategy, design and technology to build brands that people remember.";

const SUPPORTING_TEXT =
  "We combine strategy, design, technology and creativity to create digital experiences that feel intentional, distinctive and built for real businesses.";

export default function OurApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const statementWordsRef = useRef<HTMLSpanElement[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const words = STATEMENT_TEXT.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const wordElements = statementWordsRef.current.filter(Boolean);
    const visual = visualRef.current;
    const leftCol = leftColRef.current;

    if (!section || wordElements.length === 0) return;

    // Accessibility: Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      wordElements.forEach((el) => {
        gsap.set(el, { color: "#09090b" });
      });
      if (visual) gsap.set(visual, { opacity: 1, scale: 1, y: 0 });
      if (leftCol) gsap.set(leftCol, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Initial State: all words light gray
      gsap.set(wordElements, { color: "#cbd5e1" });

      // 2. Scroll-driven Progressive Text Activation: Gray -> Black
      // Moves naturally through the statement following user scroll position
      gsap.to(wordElements, {
        color: "#09090b",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 15%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // 3. Subtle Editorial Visual Reveal
      if (visual) {
        gsap.fromTo(
          visual,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visual,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 4. Subtle Left Column Reveal
      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftCol,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="w-full px-3 sm:px-5 lg:px-6 py-6 sm:py-10 bg-white"
    >
      {/* Outer Editorial Container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-[24px] sm:rounded-[36px] bg-[#fbfbfb] border border-gray-200/80 p-6 sm:p-10 lg:p-16 xl:p-20 overflow-hidden shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-24">
          
          {/* ======================================================== */}
          {/* TOP: Eyebrow + Main Statement                            */}
          {/* ======================================================== */}
          <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl">
            {/* Top Small Label / Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="font-heading text-xs sm:text-sm font-semibold tracking-widest text-[#FF5520] uppercase">
                [02]
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-600 font-body uppercase">
                Our Approach
              </span>
            </div>

            {/* Main Statement with Scroll-driven Text Activation */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-semibold leading-[1.18] tracking-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    if (el) statementWordsRef.current[i] = el;
                  }}
                  className="inline-block mr-[0.28em] text-[#cbd5e1]"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* ======================================================== */}
          {/* BOTTOM: Two-Column Editorial Composition                 */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Supporting copy + Subtle CTA + Meta detail */}
            <div
              ref={leftColRef}
              className="lg:col-span-5 flex flex-col justify-between h-full pt-2"
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                <p className="font-body text-base sm:text-lg text-zinc-600 leading-relaxed font-normal max-w-md">
                  {SUPPORTING_TEXT}
                </p>

                {/* Subtle "SEE MORE →" CTA */}
                <div>
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-wider uppercase font-button text-zinc-900 border-b border-zinc-900/30 pb-1.5 hover:border-zinc-900 transition-colors"
                  >
                    <span>SEE MORE</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>

              {/* Subtle Meta Studio Detail */}
              <div className="pt-10 sm:pt-16 border-t border-zinc-200/80 mt-10 sm:mt-16 flex items-center justify-between text-xs text-zinc-600 font-body">
                <span>BRNTQ / 2026</span>
                <span>EDITORIAL ARCHIVE</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Large Premium Editorial Visual */}
            <div
              ref={visualRef}
              className="lg:col-span-7 w-full flex flex-col"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop"
                  alt="Brentiq Studio Creative Direction & Spatial Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />

                {/* Subtle gradient vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Editorial Overlay Tag */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                  Spatial & Digital Systems
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

