"use client";

import React from "react";
import { ArrowDown, FileText } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="w-full bg-white text-gray-950 pt-14 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden relative isolate">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#FF5520]/[0.06] rounded-full blur-[120px] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[420px] h-[300px] bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/60 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520]" />
          </span>
          <span className="text-xs font-semibold text-[#FF5520] uppercase tracking-widest font-heading">
            Careers &amp; Talent Collective
          </span>
        </div>

        {/* Editorial Headline & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-bold tracking-tight text-gray-950 leading-[0.98] select-none">
              Craft the <br />
              <span className="text-gray-300 font-light">— </span>
              <span className="font-serif italic font-normal text-gray-950 font-serif-emphasis">
                Future
              </span>{" "}
              of Digital <br />
              <span className="text-[#FF5520]">Experiences.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end gap-6 pb-2">
            <p className="font-body text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              We partner with visionary founders and global enterprises. We are always on the lookout for world-class engineers, designers, and creative thinkers who obsess over detail and 60fps craft.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#talent-form"
                className="font-button inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-[#FF5520]/25 hover:shadow-xl hover:shadow-[#FF5520]/40 group"
              >
                <span>Submit Portfolio / CV</span>
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#why-brentiq"
                className="font-button inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold transition-colors"
              >
                <span>Studio Culture</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

