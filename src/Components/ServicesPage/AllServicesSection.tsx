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
      className="w-full bg-white text-gray-950 pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20 pb-8 border-b border-gray-200/80">
          <div>
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

        {/* Services Editorial Showcase Grid */}
        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20">
          {filteredServices.map((service: ServiceItemData, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.slug}
                className="rounded-[28px] sm:rounded-[36px] bg-[#fafafa] border border-gray-200/90 p-6 sm:p-10 lg:p-14 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Left (or Right on Even) Column: Text & Capabilities */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 ${
                      isEven ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div>
                      {/* Eyebrow / Service Number */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-heading text-sm font-bold text-[#FF5520]">
                          /{service.number}
                        </span>
                        <span className="h-px w-6 bg-[#FF5520]/40" />
                        <span className="font-heading text-xs font-bold uppercase tracking-widest text-gray-500">
                          {service.categoryLabel}
                        </span>
                      </div>

                      {/* Main Service Title */}
                      <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-tight mb-2">
                        {service.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="font-heading text-sm sm:text-base font-semibold text-[#FF5520] mb-4">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Capabilities 2-column checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.capabilities.map((cap, capIdx) => (
                        <div
                          key={capIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-800 font-body"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FF5520] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills & CTA Link Button */}
                    <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-body text-xs font-medium px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Dedicated Service Page Button */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-button inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF5520]/25 group shrink-0"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right (or Left on Even) Column: Large Visual Mockup */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900 border border-gray-200 shadow-inner group ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Project Highlights / Metrics overlay pill */}
                    {service.projects && service.projects[0]?.metric && (
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2.5">
                        <span className="font-heading text-base sm:text-lg font-bold text-[#FF5520]">
                          {service.projects[0].metric.value}
                        </span>
                        <span className="font-body text-xs text-white/80">
                          {service.projects[0].metric.label}
                        </span>
                      </div>
                    )}
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
