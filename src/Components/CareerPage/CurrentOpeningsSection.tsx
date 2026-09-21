"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  craftKey: string;
  department: string;
  overview: string;
  requirements: string[];
}

const OPENINGS: JobOpening[] = [
  {
    id: "senior-frontend",
    title: "Senior Frontend Engineer",
    type: "Full time",
    location: "Remote",
    craftKey: "Frontend Engineering",
    department: "Engineering",
    overview:
      "We are looking for an exceptional frontend engineer obsessed with 60fps micro-interactions, clean TypeScript, Next.js App Router, GSAP motion, and Core Web Vitals optimization.",
    requirements: [
      "4+ years building production React / Next.js web applications",
      "Mastery of GSAP, ScrollTrigger, Tailwind CSS, and CSS animations",
      "Deep understanding of web performance, SSR/SSG, and responsive architecture",
    ],
  },
  {
    id: "uiux-designer",
    title: "Senior UI/UX & Design Systems Designer",
    type: "Full time",
    location: "Remote",
    craftKey: "UI/UX Design",
    department: "Design",
    overview:
      "Design category-defining digital experiences, bespoke design languages, high-conversion user flows, and scalable Figma component libraries for international brands.",
    requirements: [
      "3+ years of agency or product design experience with a standout portfolio",
      "Expertise in Figma, typography hierarchy, micro-interactions, and design tokens",
      "Strong conceptual thinking and ability to articulate design rationale",
    ],
  },
  {
    id: "shopify-developer",
    title: "Shopify Plus & E-Commerce Developer",
    type: "Contract / Freelance",
    location: "Remote",
    craftKey: "E-Commerce & Shopify",
    department: "Engineering",
    overview:
      "Engineer bespoke, high-conversion Shopify Plus themes, custom Liquid sections, headless storefronts, and private app integrations for modern D2C brands.",
    requirements: [
      "Extensive experience with Shopify Plus, Liquid, ThemeKit / CLI, and Storefront API",
      "Proven track record of high-performance, mobile-optimized checkout and product pages",
    ],
  },
  {
    id: "motion-artist",
    title: "Motion Graphics & 3D Visual Artist",
    type: "Freelance",
    location: "Remote",
    craftKey: "Motion & 3D",
    department: "Creative",
    overview:
      "Create captivating motion brand assets, 3D WebGL visuals, showreels, and UI animations that bring digital platforms to life.",
    requirements: [
      "Strong portfolio in After Effects, Cinema 4D / Blender, and UI motion design",
      "Understanding of WebGL / Three.js or Lottie integration is a huge plus",
    ],
  },
  {
    id: "open-application",
    title: "Open Speculative Application",
    type: "Flexible",
    location: "Remote",
    craftKey: "Other",
    department: "Talent Collective",
    overview:
      "Don't see your specific discipline listed? We scout for raw talent and taste across all creative disciplines on a continuous, rolling basis.",
    requirements: [
      "A portfolio, GitHub, or case study archive that showcases your craft",
      "High autonomy, clear communication, and dedication to excellence",
    ],
  },
];

export default function CurrentOpeningsSection() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = () => {
    // Scroll smoothly to talent form
    const formEl = document.getElementById("talent-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="openings" className="w-full bg-white text-gray-950 py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 pb-4">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 font-heading">
              Careers
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-950 leading-tight">
              Current openings
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
            If you think you might be a good fit for our team, we&apos;d love to hear from you! If you don&apos;t find a suitable position, you can still send us an email to{" "}
            <a
              href="mailto:careers@brentiq.com"
              className="text-gray-950 font-semibold underline underline-offset-4 decoration-[#FF5520] hover:text-[#FF5520] transition-colors"
            >
              careers@brentiq.com
            </a>{" "}
            with your experience or portfolio and why you&apos;d like to collaborate.
          </p>
        </div>

        {/* Job Listings List */}
        <div className="flex flex-col border-b border-gray-200/90">
          {OPENINGS.map((job) => {
            const isExpanded = expandedJob === job.id;

            return (
              <div
                key={job.id}
                className="border-t border-gray-200/90 transition-all duration-300 group"
              >
                {/* Row Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleJob(job.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-7 sm:py-9 px-2 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-gray-50/80 rounded-2xl"
                >
                  {/* Job Title */}
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-950 group-hover:text-[#FF5520] transition-colors tracking-tight">
                    {job.title}
                  </h3>

                  {/* Right Meta & Action Arrow */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 shrink-0">
                    <span className="font-body text-xs sm:text-sm font-medium text-gray-500">
                      {job.location} — {job.type}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#FF5520] text-gray-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Job Details Accordion */}
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="rounded-2xl bg-gray-50 border border-gray-200/80 p-6 sm:p-8 flex flex-col gap-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FF5520] font-heading block mb-2">
                          Role Overview
                        </span>
                        <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
                          {job.overview}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-900 font-heading block mb-3">
                          Key Qualities We Value
                        </span>
                        <div className="space-y-2">
                          {job.requirements.map((req, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 font-body">
                              <CheckCircle2 className="w-4 h-4 text-[#FF5520] shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                        <span className="text-xs font-medium text-gray-500 font-body">
                          Department: <strong className="text-gray-900">{job.department}</strong>
                        </span>

                        <button
                          type="button"
                          onClick={() => handleApplyClick()}
                          className="font-button inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-[#FF5520]/25"
                        >
                          <span>Apply for this Role</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
