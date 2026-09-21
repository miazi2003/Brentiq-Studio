"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="w-full min-h-[calc(100dvh-86px)] flex flex-col justify-center bg-white text-gray-950 pt-8 sm:pt-12 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden relative isolate border-b border-gray-100">
      {/* Subtle Ambient Background Glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#FF5520]/[0.05] rounded-full blur-[120px] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[420px] h-[300px] bg-orange-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center gap-8 sm:gap-12 lg:gap-14">
        {/* Top Eyebrow */}
        <div>
          <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-gray-500 font-heading block">
            Globally build a strong digital presence that people love
          </span>
        </div>

        {/* Main Headline & Signature Orange Arrow */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          {/* Display Heading */}
          <div className="flex items-start sm:items-end justify-between gap-6 sm:gap-10 w-full lg:w-auto">
            <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[110px] xl:text-[130px] font-bold tracking-tight text-gray-950 leading-[0.93] select-none">
              We are <br />
              <span className="text-gray-950">Brentiq.</span>
            </h1>

            {/* Signature Orange Arrow Icon */}
            <a
              href="#talent-form"
              aria-label="Jump to Application Form"
              className="shrink-0 text-[#FF5520] hover:text-[#ff4410] transition-all duration-300 hover:scale-110 active:scale-95 group mb-2 sm:mb-4 cursor-pointer"
            >
              <ArrowUpRight className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </a>
          </div>

          {/* Right Column: Supporting Description & Action Buttons */}
          <div className="lg:max-w-lg flex flex-col gap-6 lg:pb-2">
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
              We partner with ambitious founders and global enterprises to craft category-defining digital products. We are always scouting extraordinary designers, engineers, and creative minds.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              {/* Schedule a Call Button */}
              <Link
                href="/#contact"
                className="font-button inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 sm:py-4.5 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold tracking-wide transition-all duration-300 shadow-xl shadow-[#FF5520]/25 hover:shadow-2xl hover:shadow-[#FF5520]/40 hover:scale-105 active:scale-95 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Submit Portfolio / CV Button */}
              <a
                href="#talent-form"
                className="font-button inline-flex items-center gap-2 px-6 sm:px-7 py-4 sm:py-4.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-gray-700" />
                <span>Submit Portfolio / CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
