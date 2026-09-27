"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  linkedin: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Brentiq rebuilt our entire digital brand and website from the ground up to match the clinical precision of our work. They didn't just give us a louder visual identity; they delivered an intuitive product system and an editorial presence our patients and partners immediately trust.",
    name: "Qadir Hussain",
    role: "CEO & Founder",
    company: "Aura Clinical Systems",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: "testimonial-2",
    quote:
      "Our previous website failed to reflect our standard of high-end storytelling and modern technology, limiting our ability to attract tier-one clients. After Brentiq redesigned the site, it feels like we're finally presenting ourselves at the true level we operate.",
    name: "Halie Graham",
    role: "Executive Producer",
    company: "Metapic Media",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: "testimonial-3",
    quote:
      "What impressed us most was how seamlessly they merged complex GSAP animations with lightning-fast load times. The digital experience gives us tremendous credibility, and brand clients get convinced simply by interacting with our live platform.",
    name: "Jonathan Vance",
    role: "Associate Founder & Head of Product",
    company: "Forma Spatial Labs",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: "testimonial-4",
    quote:
      "We needed users to understand the sophistication of our AI workflow just by looking at our homepage. Brentiq delivered an identity system, motion language, and high-converting architecture that exceeded our expectations on every front.",
    name: "Lihong Zhao",
    role: "Chief Marketing Officer",
    company: "Kairo Mobility",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: "testimonial-5",
    quote:
      "From the initial typography exploratory to the final component tokens, Brentiq's creative direction was thoughtful and disciplined. They didn't chase short-lived design trends—they built an enduring visual universe for our luxury portfolio.",
    name: "Elena Rostova",
    role: "Creative Brand Director",
    company: "Vesper Atelier",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: "testimonial-6",
    quote:
      "In capital markets, discretion and institutional polish are everything. Brentiq designed a bespoke web presence that feels authoritative yet remarkably fluid. Communication was transparent throughout the entire project lifecycle.",
    name: "Marcus Sterling",
    role: "Managing Partner",
    company: "Aero Capital Group",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Mouse drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Check scroll position to update progress & navigation buttons
  const isUpdatingRef = useRef(false);
  const updateScrollState = useCallback(() => {
    if (isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    window.requestAnimationFrame(() => {
      isUpdatingRef.current = false;
      const el = sliderRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = "100%";
        }
        setCanScrollLeft((prev) => (prev ? false : prev));
        setCanScrollRight((prev) => (prev ? false : prev));
        return;
      }

      const currentProgress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.max(15, currentProgress)}%`;
      }

      const newCanLeft = scrollLeft > 10;
      const newCanRight = scrollLeft < maxScroll - 10;
      setCanScrollLeft((prev) => (prev !== newCanLeft ? newCanLeft : prev));
      setCanScrollRight((prev) => (prev !== newCanRight ? newCanRight : prev));
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Reveal animation
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

    updateScrollState();
    window.addEventListener("resize", updateScrollState, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Scroll by step
  const scrollByAmount = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const cardWidth = el.querySelector<HTMLElement>(".testimonial-card")?.offsetWidth || 480;
    const scrollAmount = cardWidth + 24; // card width + gap

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const el = sliderRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    el.scrollLeft = scrollLeftStart.current - walk;
    updateScrollState();
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    const el = sliderRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full px-3 sm:px-5 lg:px-6 py-4 sm:py-6 bg-white"
    >
      {/* Outer Soft Light Neutral Card */}
      <div
        ref={containerRef}
        className="relative w-full rounded-[24px] sm:rounded-[36px] bg-[#ebeeed] border border-zinc-200/80 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-hidden shadow-sm"
      >
        {/* Top Header: Badge, Heading & Supporting Description */}
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 mb-6 sm:mb-8 border-b border-zinc-300/70">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                What Our Clients Say.
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed">
              Real feedback from founders, executives, and creative leaders who partnered with Brentiq Studio to scale their brands and digital presence.
            </p>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={sliderRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="w-full flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none px-6 sm:px-10 lg:px-14 py-2 cursor-grab select-none will-change-scroll scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="testimonial-card flex-shrink-0 w-[300px] sm:w-[440px] lg:w-[480px] xl:w-[500px] rounded-[24px] sm:rounded-[30px] bg-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.04] min-h-[340px] sm:min-h-[380px] transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Testimonial Quote */}
              <p className="font-body text-sm sm:text-base lg:text-[16.5px] text-zinc-800 leading-[1.65] font-normal tracking-[-0.01em]">
                {t.quote}
              </p>

              {/* Bottom Row: Client Info + LinkedIn Link */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-100 gap-4">
                {/* Client Avatar + Details */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-zinc-200">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="font-heading text-sm sm:text-base font-semibold text-zinc-900 truncate">
                      {t.name}
                    </h4>
                    <p className="font-body text-xs text-zinc-500 truncate mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Circular LinkedIn Button */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${t.name}'s LinkedIn profile`}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 shadow-sm shrink-0 active:scale-95"
                >
                  <LinkedInIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Controls: Progress Bar + Arrow Navigation Buttons */}
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 flex items-center justify-between gap-6">
          {/* Progress Bar */}
          <div className="relative h-[2.5px] w-40 sm:w-64 md:w-80 lg:w-96 bg-zinc-300/80 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-zinc-900 rounded-full transition-all duration-200 ease-out"
              style={{
                width: "15%",
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-900 shadow-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>

            <button
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-900 shadow-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
