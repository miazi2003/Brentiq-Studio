"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const SERVICES_LIST = [
  { label: "UI UX Design", href: "#services" },
  { label: "Development", href: "#services" },
  { label: "Website Design", href: "#services" },
  { label: "Motion Design", href: "#services" },
];

export default function Banner() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dropdownCardRef = useRef<HTMLDivElement>(null);
  const serviceItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      // 1. Top row reveals
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          0
        );
      }

      if (topTextRef.current) {
        tl.fromTo(
          topTextRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.1
        );
      }

      // 2. Tagline & Giant "Brentiq" Heading reveals
      if (taglineRef.current) {
        tl.fromTo(
          taglineRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.2
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power4.out" },
          0.3
        );
      }

      // 3. Dropdown Menu Unfolding Animation from under the Get Started button
      if (dropdownCardRef.current) {
        tl.fromTo(
          dropdownCardRef.current,
          {
            opacity: 0,
            y: -25,
            scaleY: 0.25,
            transformOrigin: "top center",
          },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0.4
        );

        // Stagger inner service rows as the dropdown opens
        const items = serviceItemsRef.current.filter(Boolean);
        if (items.length > 0) {
          tl.fromTo(
            items,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.55
          );
        }
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full px-3 sm:px-5 lg:px-6 pb-4 sm:pb-6">
      {/* Main Full-Screen Video Hero Card */}
      <div className="relative w-full h-[calc(100dvh-92px)] min-h-[660px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white isolate bg-black">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Color Overlay for contrast and optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 -z-10 pointer-events-none" />

        {/* TOP ROW: Available Status Indicator & Right Service Info (Plus Jakarta Sans) */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10 font-body">
          {/* Top Left: Available indicator */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/25 backdrop-blur-md border border-white/15 shadow-sm will-change-transform"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/95">
              Available For This Projects
            </span>
          </div>

          {/* Top Right: Tagline / Services description */}
          <div ref={topTextRef} className="text-left sm:text-right max-w-[360px] will-change-transform">
            <p className="text-xs sm:text-sm font-normal text-white/85 leading-relaxed tracking-wide">
              We Provide UI/UX Design And <br className="hidden sm:inline" />
              Development Services As Well As <br className="hidden sm:inline" />
              Branding Services
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Giant Brentiq Branding & Interactive Action Box */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-10 z-10">
          {/* Bottom Left: Tagline (Plus Jakarta Sans) & Giant Brand Typography (Stack Sans Notch) */}
          <div className="max-w-2xl">
            <p
              ref={taglineRef}
              className="font-body text-sm sm:text-base lg:text-lg font-normal text-white/90 mb-2 sm:mb-3 will-change-transform"
            >
              <span className="text-[#FF5520] font-bold">Brentiq Studio</span> Helps You Turn Your Work Into{" "}
              <br className="hidden sm:inline" />
              Something People Remember.
            </p>
            <h1
              ref={headingRef}
              className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[128px] font-black tracking-tighter text-white leading-none select-none will-change-transform"
            >
              Brentiq
            </h1>
          </div>

          {/* Bottom Right: Get Started Button (Solid Orange Pill) & Services Pill Menu */}
          <div className="w-full sm:w-[280px] md:w-[310px] flex flex-col gap-3 shrink-0">
            {/* Vibrant Orange Primary Action Button */}
            <Link
              href="#get-started"
              className="font-button w-full py-3.5 px-6 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-center font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#FF5520]/25 hover:shadow-xl hover:shadow-[#FF5520]/40 active:scale-[0.98]"
            >
              Get Started
            </Link>

            {/* Service Navigation List Card with Dropdown Unfolding Motion */}
            <div
              ref={dropdownCardRef}
              className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-2xl flex flex-col divide-y divide-gray-100 text-gray-900 border border-white/80 font-body origin-top will-change-transform"
            >
              {SERVICES_LIST.map((service, idx) => (
                <Link
                  key={service.label}
                  ref={(el) => {
                    serviceItemsRef.current[idx] = el;
                  }}
                  href={service.href}
                  className="group flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#FF5520] transition-colors rounded-xl hover:bg-gray-50/90 will-change-transform"
                >
                  <span className="tracking-tight">{service.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#FF5520] group-hover:translate-x-1.5 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
