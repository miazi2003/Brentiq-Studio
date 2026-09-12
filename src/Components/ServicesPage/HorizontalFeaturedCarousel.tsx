"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, ServiceItemData } from "@/data/servicesData";

export default function HorizontalFeaturedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Position & animation tracking refs for 60fps buttery-smooth movement
  const xPosRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Duplicate items 3 times for completely seamless infinite looping
  const items = [...SERVICES_DATA, ...SERVICES_DATA, ...SERVICES_DATA];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one complete set of services
    const updateDimensions = () => {
      const children = track.children;
      if (children.length >= SERVICES_DATA.length) {
        let widthSum = 0;
        for (let i = 0; i < SERVICES_DATA.length; i++) {
          const el = children[i] as HTMLElement;
          widthSum += el.offsetWidth + 28; // card width + gap
        }
        singleSetWidthRef.current = widthSum;
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Continuous auto-scroll animation loop (0.65px per frame = smooth cinematic speed)
    const speed = 0.65;

    const animate = () => {
      if (!isHovered && !isDragging) {
        xPosRef.current -= speed;

        const setWidth = singleSetWidthRef.current || 2400;
        if (Math.abs(xPosRef.current) >= setWidth) {
          xPosRef.current += setWidth;
        }

        if (track) {
          track.style.transform = `translate3d(${xPosRef.current}px, 0, 0)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = xPosRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartXRef.current;
    let newX = dragStartPosRef.current + delta;

    const setWidth = singleSetWidthRef.current || 2400;
    if (newX > 0) newX -= setWidth;
    if (Math.abs(newX) >= setWidth) newX += setWidth;

    xPosRef.current = newX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${xPosRef.current}px, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Handlers for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.touches[0].clientX;
    dragStartPosRef.current = xPosRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStartXRef.current;
    let newX = dragStartPosRef.current + delta;

    const setWidth = singleSetWidthRef.current || 2400;
    if (newX > 0) newX -= setWidth;
    if (Math.abs(newX) >= setWidth) newX += setWidth;

    xPosRef.current = newX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${xPosRef.current}px, 0, 0)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white py-6 sm:py-12 overflow-hidden relative select-none">
      {/* Viewport Edge Gradients for Soft Cropping into Light Background */}
      <div
        className="absolute top-0 left-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Overflow-Clipped Carousel Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`w-full overflow-visible ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* SINGLE HORIZONTAL FLOWING TRACK */}
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-5 sm:gap-7 will-change-transform py-6"
          style={{ width: "max-content" }}
        >
          {items.map((service: ServiceItemData, index: number) => {
            const { width, height, offset } = service.aspectStyle;

            return (
              <div
                key={`${service.slug}-${index}`}
                className={`relative shrink-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-zinc-950 border border-gray-200/80 group transition-all duration-300 shadow-xl ${width} ${height} ${offset}`}
              >
                {/* Background Image Visual */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 340px, 560px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none -z-20"
                />

                {/* Subtle base vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 -z-10" />

                {/* Default Card Content (Service Name + Number) */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 pointer-events-none">
                  {/* Top: Category Tag & Number */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider text-white/90 font-heading">
                      {service.categoryLabel}
                    </span>
                    <span className="font-heading text-sm sm:text-base font-bold text-white/60">
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom: Service Name & Subtitle */}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-1 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/70 font-medium line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* HOVER OVERLAY: ONLY Centered, Full-Round, Blurry Transparent "View Details" Button */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 pointer-events-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-button inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/45 hover:bg-[#FF5520] text-white text-sm font-semibold tracking-wide backdrop-blur-md border border-white/25 hover:border-[#FF5520] transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 shrink-0"
                    onClick={(e) => {
                      if (isDragging) e.preventDefault();
                    }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
