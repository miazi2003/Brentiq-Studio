"use client";

import React from "react";

const VALUES = [
  {
    number: "01.",
    title: "Craft Over Conformity",
    description:
      "We do not build generic templates. Every animation, layout, and micro-interaction is intentionally engineered to elevate brands above digital noise.",
  },
  {
    number: "02.",
    title: "Remote-First Autonomy",
    description:
      "Work from anywhere across the globe. We value ownership, clear asynchronous communication, and deliverables over arbitrary clock-watching.",
  },
  {
    number: "03.",
    title: "Cutting-Edge Tooling",
    description:
      "We build with modern ecosystems: Next.js 16, React 19, TypeScript, GSAP motion, WebGL, Tailwind CSS v4, and Headless architectures.",
  },
  {
    number: "04.",
    title: "Learning & Equipment Budget",
    description:
      "Annual budget for design conferences, developer courses, premium tooling licenses, and top-tier workstation equipment.",
  },
  {
    number: "05.",
    title: "Obsession with Details",
    description:
      "From 60fps scroll synchronization to sub-pixel typography alignment, we take immense pride in the finishing touches that others overlook.",
  },
  {
    number: "06.",
    title: "Direct Client Impact",
    description:
      "Work directly with ambitious founders, tech innovators, and global enterprise leaders with zero layers of corporate bureaucracy.",
  },
];

export default function StudioCultureSection() {
  return (
    <section id="why-brentiq" className="w-full bg-white text-gray-950 py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 font-heading">
            Benefit
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-950 leading-tight">
            Values we live by
          </h2>
        </div>

        {/* Minimalist Editorial 3-Column Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-12 sm:gap-y-14">
          {VALUES.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-gray-200/90 pt-6 sm:pt-7 flex flex-col gap-2.5 group"
            >
              {/* Number Label */}
              <span className="font-heading text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-[#FF5520] transition-colors">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
