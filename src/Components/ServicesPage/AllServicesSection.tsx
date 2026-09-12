"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  SERVICES_DATA,
  CATEGORIES_LIST,
  ServiceItemData,
} from "@/data/servicesData";

export default function AllServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="all-services"
      className="w-full bg-white text-gray-950 pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-10 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20 pb-8 border-b border-gray-200/80">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5520] font-heading">
                All Capabilities
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-tight">
              Full Spectrum Services
            </h2>
          </div>

          {/* Horizontally Scrollable Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 no-scrollbar max-w-full">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-button text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#111111] text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-950 border border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Service Blocks List */}
        <div className="flex flex-col divide-y divide-gray-200/80">
          {filteredServices.map((service: ServiceItemData) => {
            return (
              <div
                key={service.slug}
                className="py-14 sm:py-20 group transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Number, Title, Description, Capabilities & Link */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
                    <div>
                      {/* Service Number & Category Pill */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-heading text-lg sm:text-xl font-bold text-[#FF5520]">
                          /{service.number}
                        </span>
                        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 font-heading">
                          {service.categoryLabel}
                        </span>
                        {service.isFlagship && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5520] text-[11px] font-bold uppercase tracking-wider font-heading">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520] animate-pulse" />
                            Primary Focus
                          </span>
                        )}
                      </div>

                      {/* Large Service Title */}
                      <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight leading-tight group-hover:text-[#FF5520] transition-colors">
                        {service.title}
                      </h3>

                      {/* Subtitle / Headline */}
                      <p className="font-body text-base sm:text-lg text-gray-800 font-medium mt-3 mb-2">
                        {service.headline}
                      </p>

                      {/* Short Description */}
                      <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Capabilities Tags List */}
                    <div>
                      <h4 className="font-heading text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                        Capabilities & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-body font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF5520] shrink-0" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-button inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white hover:bg-[#FF5520] text-sm font-semibold transition-all duration-200 shadow-sm group/btn"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>

                      <Link
                        href="/#contact"
                        className="font-button inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium transition-colors"
                      >
                        <span>Start Project</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Large Visual / Project Mockup with Subtle Hover Zoom */}
                  <div className="lg:col-span-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="block relative w-full h-[280px] sm:h-[380px] md:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-200/80 shadow-md group/img"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                      {/* Tech stack badge list over image */}
                      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 z-10">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white font-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
