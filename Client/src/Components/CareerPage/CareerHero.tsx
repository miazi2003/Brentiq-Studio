"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="w-full min-h-[calc(100dvh-86px)] flex flex-col justify-center bg-[#070709] text-white pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative isolate border-b border-white/10">
      {/* 1. Atmospheric Dark & Orange Gradient Meshes */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 85% 20%, rgba(255, 85, 32, 0.22) 0%, transparent 60%), radial-gradient(ellipse at 10% 85%, rgba(255, 85, 32, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(255, 85, 32, 0.05) 0%, transparent 70%), #070709",
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Blurred Glow Orbs */}
      <div
        className="absolute top-0 right-1/4 w-[550px] h-[380px] bg-[#FF5520]/15 rounded-full blur-[140px] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[450px] h-[320px] bg-[#FF5520]/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center gap-8 sm:gap-12 lg:gap-14 relative z-10">

        {/* Main Headline & Signature Orange Arrow */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          {/* Display Heading */}
          <div className="flex items-start sm:items-end justify-between gap-6 sm:gap-10 w-full lg:w-auto">
            <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[110px] xl:text-[130px] font-bold tracking-tight text-white leading-[0.93] select-none">
              We are <br />
              <span className="text-white">Brentiq.</span>
            </h1>

            {/* Signature Orange Arrow Icon */}
            <a
              href="#talent-form"
              aria-label="Jump to Application Form"
              className="shrink-0 text-[#FF5520] hover:text-[#ff693a] transition-all duration-300 hover:scale-110 active:scale-95 group mb-2 sm:mb-4 cursor-pointer drop-shadow-[0_0_20px_rgba(255,85,32,0.4)]"
            >
              <ArrowUpRight className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </a>
          </div>

          {/* Right Column: Supporting Description & Action Buttons */}
          <div className="lg:max-w-lg flex flex-col gap-6 lg:pb-2">
            <p className="font-body text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed">
              We partner with ambitious founders and global enterprises to craft category-defining digital products. We are always scouting extraordinary designers, engineers, and creative minds.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              {/* Schedule a Call Button */}
              <Link
                href="/contact"
                className="font-button inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 sm:py-4.5 rounded-full bg-[#FF5520] hover:bg-[#ff693a] text-white text-base font-semibold tracking-wide transition-all duration-300 shadow-xl shadow-[#FF5520]/30 hover:shadow-2xl hover:shadow-[#FF5520]/50 hover:scale-105 active:scale-95 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Submit Portfolio / CV Button */}
              <a
                href="#talent-form"
                className="font-button inline-flex items-center gap-2 px-6 sm:px-7 py-4 sm:py-4.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 hover:border-white/30 text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm shadow-md"
              >
                <FileText className="w-4 h-4 text-white/80" />
                <span>Submit Portfolio / CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

