"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles exactly as required
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItemData, ServiceProjectItem } from "@/data/servicesData";

interface Props {
  service: ServiceItemData;
}

export default function ServiceProjectsCarousel({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const projects = service.projects;
  const totalCount = projects?.length || 0;

  const [realActiveIndex, setRealActiveIndex] = useState(0);

  // For a truly endless, smooth loop with coverflow, Swiper needs at least 8-12 slides.
  // We duplicate the project list so it loops infinitely in both directions without any jump.
  const displayProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    if (projects.length >= 8) return projects;
    if (projects.length >= 4) return [...projects, ...projects, ...projects];
    return [...projects, ...projects, ...projects, ...projects];
  }, [projects]);

  // GSAP Entrance ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          0
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [service]);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 bg-[#FAFAFA] border-t border-b border-gray-200/80 overflow-hidden relative"
    >
      {/* Background ambient radial glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,85,32,0.08)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER & DYNAMIC NAVIGATION CONTROLS                           */}
        {/* ========================================================================= */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-[#FF5520] font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] animate-pulse" />
              Selected Portfolio Showcase
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight leading-[1.15]">
              Featured <span className="text-[#FF5520]">{service.title}</span> Works
            </h2>

            <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
              Explore real-world client deliverables engineered with pixel precision, blazing performance, and interactive motion.
            </p>
          </div>

          {/* Right Navigation & Status Controls */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Real Active Project Counter */}
            <div className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-heading font-bold text-gray-800 shadow-2xs">
              <span className="text-[#FF5520]">0{realActiveIndex + 1}</span>
              <span className="text-gray-300">/</span>
              <span>0{totalCount}</span>
            </div>

            {/* Custom Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous project"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#FF5520] text-gray-800 hover:text-white border border-gray-200 shadow-xs hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next project"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#FF5520] text-gray-800 hover:text-white border border-gray-200 shadow-xs hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULL WIDTH SMOOTH ENDLESS 3D COVERFLOW SWIPER                          */}
      {/* ========================================================================= */}
      <div className="w-full relative py-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            if (totalCount > 0) {
              setRealActiveIndex(swiper.realIndex % totalCount);
            }
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".coverflow-pagination",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="coverflow-showcase-swiper !w-full !py-8 sm:!py-12"
        >
          {displayProjects.map((proj: ServiceProjectItem, idx: number) => (
            <SwiperSlide
              key={`${proj.id}-${idx}`}
              className="!w-[300px] sm:!w-[380px] md:!w-[440px] lg:!w-[480px] select-none"
            >
              {({ isActive }) => (
                <div
                  className={`rounded-[28px] sm:rounded-[32px] bg-white border overflow-hidden flex flex-col justify-between transition-all duration-500 ${
                    isActive
                      ? "border-[#FF5520]/60 shadow-2xl shadow-orange-500/15 scale-100 ring-4 ring-orange-500/10"
                      : "border-gray-200/90 shadow-md scale-95 hover:border-gray-300"
                  }`}
                >
                  {/* Top Image Mockup with Gradient & Badges */}
                  <div className="relative w-full h-[220px] sm:h-[260px] md:h-[290px] overflow-hidden bg-gray-950 group">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 480px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white font-heading">
                        {proj.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-gray-950 font-heading">
                        {proj.year}
                      </span>
                    </div>

                    {/* Floating Metric Highlight Badge */}
                    {proj.metric && (
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF5520] shrink-0" />
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-heading font-black text-xs sm:text-sm text-white">
                              {proj.metric.value}
                            </span>
                            <span className="font-body text-[11px] text-white/80 font-medium">
                              {proj.metric.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Floating External Icon Button */}
                    <div className="absolute bottom-4 right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 group-hover:bg-[#FF5520] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Content Metadata */}
                  <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 space-y-4 bg-white">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest font-heading">
                        <span>&#47;&#47; {proj.id}</span>
                        <span>•</span>
                        <span className="text-gray-700 font-semibold">{proj.client}</span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-gray-950 hover:text-[#FF5520] transition-colors duration-300 tracking-tight">
                        {proj.title}
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2 items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2.5 py-1 rounded-lg bg-gray-100 text-[11px] font-semibold text-gray-700 font-body"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={proj.liveUrl || "#contact"}
                        target={proj.liveUrl ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5520] hover:text-[#e04515] transition-colors font-heading group"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Pagination Dots */}
        <div className="coverflow-pagination flex items-center justify-center gap-2 mt-2" />
      </div>

      {/* Embedded styles for Swiper Coverflow & Pagination Bullets */}
      <style jsx global>{`
        .coverflow-showcase-swiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 40px;
          perspective: 1200px;
        }
        .coverflow-showcase-swiper .swiper-slide {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .coverflow-showcase-swiper .swiper-slide-shadow-left,
        .coverflow-showcase-swiper .swiper-slide-shadow-right {
          border-radius: 32px;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.18),
            rgba(0, 0, 0, 0)
          );
        }
        .coverflow-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .coverflow-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #ff5520;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
