"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CornerDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: [string, string];
  link: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "We design logos, identity systems, and brand guidelines that don't chase trends—they're built to last. Every element is crafted to reflect your brand's true essence across all platforms.",
    tags: ["Visual Identity", "Logo Systems", "Brand Guidelines"],
    images: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=900&auto=format&fit=crop",
    ],
    link: "#contact",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "We craft intuitive, high-converting digital products, web apps, and design systems. Combining deep user research with clean, responsive aesthetics that captivate your audience.",
    tags: ["Product Design", "Design Systems", "Web & Mobile UX"],
    images: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=900&auto=format&fit=crop",
    ],
    link: "#contact",
  },
  {
    id: "creative",
    title: "Creative Direction",
    description:
      "From bespoke digital campaigns to editorial art direction, we curate compelling visual stories that elevate brand authority and make your presence unforgettable.",
    tags: ["Art Direction", "3D Visuals", "Content Strategy"],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=900&auto=format&fit=crop",
    ],
    link: "#contact",
  },
  {
    id: "development",
    title: "Development",
    description:
      "High-performance frontend architecture, custom interactive animations, and robust full-stack engineering engineered with clean code, lightning speeds, and scalability.",
    tags: ["Next.js & React", "WebGL & GSAP", "Full-Stack Platforms"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    ],
    link: "#contact",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!section || !leftCol || !rightCol) return;

    const ctx = gsap.context(() => {
      gsap.set(leftCol, {
        x: 40,
        opacity: 0,
        scale: 0.98,
      });

      gsap.set(rightCol, {
        x: -40,
        opacity: 0,
        scale: 0.98,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 35%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to([leftCol, rightCol], {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.08,
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cursorRef.current || window.innerWidth < 1024) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      onMouseMove={handleMouseMove}
      className="relative z-20 w-full bg-white px-3 sm:px-5 lg:px-6 py-4 sm:py-6"
    >
      {/* Outer Card with the Signature Black & Orange Gradient */}
      <div
        className="relative w-full rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-16 text-white overflow-hidden shadow-2xl isolate"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1f120c 45%, #FF5520 100%)",
        }}
      >
        {/* Subtle Dark Vignette Overlay for Depth & Contrast */}
        <div className="absolute inset-0 bg-black/40 -z-10 pointer-events-none" />

        {/* Subtle Desktop Mouse Follower Glow */}
        <div
          ref={cursorRef}
          className="pointer-events-none absolute top-0 left-0 -ml-3 -mt-3 w-6 h-6 rounded-full bg-[#FF5520] blur-[6px] opacity-0 lg:opacity-75 transition-opacity duration-300 z-30"
        />

        <div className="w-full mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 sm:pb-14 border-b border-white/10 gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520] shadow-[0_0_10px_#FF5520]" />
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF5520] font-heading uppercase">
                  Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Our Services.
              </h2>
            </div>

            <div className="flex flex-col sm:items-end gap-5 max-w-md">
              <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed sm:text-right">
                We provide full-spectrum digital design, development, and branding services engineered to create unforgettable experiences and accelerate business growth.
              </p>
              <Link
                href="/services"
                className="font-button inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#FF5520] text-[#111111] hover:text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#FF5520]/25 group shrink-0"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Vertical Rolling Text List on Hover */}
            {/* ======================================================== */}
            <div
              ref={leftColRef}
              className="lg:col-span-6 flex flex-col divide-y divide-white/15 will-change-transform"
            >
              {SERVICES_DATA.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="group py-7 sm:py-9 flex items-center gap-4 sm:gap-6 cursor-pointer select-none transition-all duration-300 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold tracking-tight leading-none"
                  >
                    {/* Arrow Indicator */}
                    <span
                      className={`transition-all duration-300 shrink-0 ${
                        isActive
                          ? "text-[#FF5520] translate-x-1 scale-110"
                          : "text-white/30 group-hover:text-white/80 group-hover:translate-x-1"
                      }`}
                    >
                      <CornerDownRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </span>

                    {/* Bulletproof Vertical Rolling Text Wrapper */}
                    <div className="relative overflow-hidden h-[1.3em] flex items-center">
                      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 md:mt-[55px] mt-[35px]">
                        {/* Primary Text Line (Visible at rest) */}
                        <span
                          className={`h-[1.3em] flex items-center whitespace-nowrap transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-white/40 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </span>

                        {/* Cloned Text Line (Rolls in from bottom on hover) */}
                        <span className="h-[1.3em] flex items-center whitespace-nowrap text-white">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Two Side-by-Side Images & Details */}
            {/* ======================================================== */}
            <div
              ref={rightColRef}
              className="lg:col-span-6 flex flex-col will-change-transform"
            >
              {/* Two Images Side by Side */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 w-full">
                {activeService.images.map((imgSrc, imgIndex) => (
                  <div
                    key={`${activeService.id}-img-${imgIndex}`}
                    className="relative aspect-[4/4.8] w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-zinc-900 border border-white/15 shadow-2xl transition-all duration-500 ease-out"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${activeService.title} Showcase ${imgIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Service Description */}
              <p className="font-body text-white/85 text-sm sm:text-base leading-relaxed tracking-wide mt-7 mb-6 max-w-xl transition-opacity duration-500">
                {activeService.description}
              </p>

              {/* Tags & Action Arrow Link */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {activeService.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs sm:text-sm font-medium text-white/90 bg-black/40 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 transition-colors hover:border-[#FF5520]"
                  >
                    {tag}
                  </span>
                ))}

                {/* Action Arrow Button */}
                <Link
                  href={activeService.link}
                  aria-label={`Explore ${activeService.title}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/25 bg-black/40 hover:bg-[#FF5520] hover:border-[#FF5520] text-white transition-all duration-300 shadow-sm active:scale-95 shrink-0"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
