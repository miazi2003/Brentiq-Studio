"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorksHero() {
  return (
    <section className="w-full bg-white text-gray-950 pt-14 sm:pt-20 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-10 overflow-hidden relative isolate">
      {/* Subtle Background Ambient Glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#FF5520]/[0.06] rounded-full blur-[120px] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"
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
            Our Work
          </span>
        </div>

        {/* Editorial Headline & Supporting Paragraph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Main Large Editorial Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight text-gray-950 leading-[0.98] select-none">
              Selected <br />
              <span className="text-gray-300 font-light">— </span>
              <span className="font-serif italic font-normal text-gray-950 font-serif-emphasis">
                Projects
              </span>{" "}
              &amp; <br />
              <span className="text-[#FF5520]">Craft</span>
            </h1>
          </div>

          {/* Right Column: Supporting Description & Fast CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-6 pb-2">
            <p className="font-body text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Explore a curated selection of digital experiences, bespoke platforms, and high-impact brand identities we&apos;ve engineered for ambitious companies worldwide.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/#contact"
                className="font-button inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-[#FF5520]/25 hover:shadow-xl hover:shadow-[#FF5520]/40 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#all-works"
                className="font-button inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold transition-colors"
              >
                <span>Filter Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
