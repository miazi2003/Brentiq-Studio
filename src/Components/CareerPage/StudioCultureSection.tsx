"use client";

import React from "react";
import { Cpu, Eye, Compass, ShieldCheck, Flame, Globe2 } from "lucide-react";

const VALUES = [
  {
    icon: Flame,
    title: "Craft Over Conformity",
    description:
      "We do not build generic templates. Every animation, layout, and micro-interaction is intentionally engineered to elevate brands above digital noise.",
  },
  {
    icon: Globe2,
    title: "Remote-First Autonomy",
    description:
      "Work from anywhere across the globe. We value ownership, clear asynchronous communication, and deliverables over arbitrary clock-watching.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tooling",
    description:
      "We build with modern ecosystems: Next.js 16, React 19, TypeScript, GSAP motion, WebGL, Tailwind CSS v4, and Headless architectures.",
  },
  {
    icon: Eye,
    title: "Obsession with Details",
    description:
      "From 60fps scroll synchronization to sub-pixel typography alignment, we take immense pride in the finishing touches that others overlook.",
  },
  {
    icon: Compass,
    title: "Cross-Disciplinary Learning",
    description:
      "Engineers learn design systems; designers understand frontend constraints. We foster deep cross-pollination between strategy, UI/UX, and code.",
  },
  {
    icon: ShieldCheck,
    title: "Direct Client Impact",
    description:
      "You will work directly with ambitious founders, tech innovators, and global enterprise leaders with zero layers of red tape.",
  },
];

export default function StudioCultureSection() {
  return (
    <section id="why-brentiq" className="w-full bg-[#fafafa] text-gray-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5520] font-heading">
                Life at Brentiq Studio
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
              Why Extraordinary Creators Join Us
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-gray-600 max-w-md">
            We are a nimble, high-velocity creative team. No corporate bureaucracy — just brilliant minds collaborating on world-class digital products.
          </p>
        </div>

        {/* Studio Culture Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-[24px] sm:rounded-[28px] bg-white border border-gray-200/90 p-7 sm:p-8 hover:border-[#FF5520]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5520] mb-6 group-hover:scale-110 group-hover:bg-[#FF5520] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 mb-3 group-hover:text-[#FF5520] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

