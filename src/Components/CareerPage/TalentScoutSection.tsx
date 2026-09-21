"use client";

import React from "react";
import { Code2, Palette, ShoppingBag, Video } from "lucide-react";

const DISCIPLINES = [
  {
    icon: Code2,
    role: "Creative Frontend & Web Engineers",
    stack: ["Next.js", "React 19", "TypeScript", "GSAP", "Tailwind CSS"],
    focus: "Crafting silky 60fps micro-animations, headless architectures, and responsive web systems.",
  },
  {
    icon: Palette,
    role: "Product & UI/UX Designers",
    stack: ["Figma", "Design Systems", "Typography", "Prototyping"],
    focus: "Designing high-conversion digital interfaces, design languages, and memorable brand experiences.",
  },
  {
    icon: ShoppingBag,
    role: "E-Commerce & Platform Specialists",
    stack: ["Shopify Plus", "Liquid", "WordPress", "Wix Studio", "Squarespace"],
    focus: "Engineering high-revenue e-commerce stores, custom themes, and bespoke platform integrations.",
  },
  {
    icon: Video,
    role: "Motion Graphics & Visual Artists",
    stack: ["After Effects", "3D / WebGL", "Premiere", "Brand Motion"],
    focus: "Producing captivating motion brand identities, cinematic video edits, and interactive 3D assets.",
  },
];

export default function TalentScoutSection() {
  return (
    <section className="w-full bg-white text-gray-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Disciplines We Actively Scout For */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5520] font-heading">
                Disciplines
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
              Areas We Review On A Rolling Basis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {DISCIPLINES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[24px] sm:rounded-[28px] bg-[#fafafa] border border-gray-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-gray-400 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5520]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-heading">
                        General Scouting
                      </span>
                    </div>

                    <h4 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 mb-2">
                      {item.role}
                    </h4>
                    <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                      {item.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-2">
                    {item.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium font-body bg-white border border-gray-200 text-gray-800 px-2.5 py-1 rounded-full shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

