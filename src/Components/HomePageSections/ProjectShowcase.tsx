"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARD_GAP = 50;
const STACK_HEADER_DESKTOP = 20;
const STACK_HEADER_MOBILE = 12;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface CaseStudy {
  category: string;
  title: string;
  description: string;
  tags: string[];
  projectImage: string;
  backgroundColor: string;
  slug: string;
}

const BRENTIQ_CASE_STUDIES: CaseStudy[] = [
  {
    category: "Custom Web Application",
    title: "Relax Studio",
    description:
      "A high-performance digital flagship featuring spatial audio curation, custom 60fps WebGL transitions, and headless e-commerce architecture engineered for international scale.",
    tags: ["Next.js 16", "WebGL Motion", "Headless CMS"],
    projectImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    backgroundColor: "#ffffff",
    slug: "relax-studio",
  },
  {
    category: "Shopify Plus & Brand Identity",
    title: "Aura Acoustics",
    description:
      "Complete brand identity system, editorial art direction, and Shopify Plus store designed to reflect the acoustic purity and handcrafted precision of audiophile gear.",
    tags: ["Shopify Plus", "Brand Strategy", "E-Commerce"],
    projectImage:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop",
    backgroundColor: "#ffffff",
    slug: "aura-acoustics",
  },
  {
    category: "Design System & Cloud Platform",
    title: "Horizon Enterprise",
    description:
      "End-to-end design system, high-throughput interactive data visualization interface, and performant web architecture for high-frequency cloud resource orchestration.",
    tags: ["Design System", "Cloud Intelligence", "Dashboard"],
    projectImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    backgroundColor: "#ffffff",
    slug: "horizon-enterprise",
  },
  {
    category: "3D Motion & Next.js Experience",
    title: "Vortex Motion",
    description:
      "Dynamic interactive agency portfolio powered by real-time Three.js shaders, buttery-smooth GSAP choreography, and sub-second page transitions.",
    tags: ["Three.js", "GSAP Motion", "Creative Dev"],
    projectImage:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1600&auto=format&fit=crop",
    backgroundColor: "#ffffff",
    slug: "vortex-motion",
  },
  {
    category: "Healthcare & AI Telehealth",
    title: "Lumina Health",
    description:
      "Secure patient portal and AI triage dashboard designed for seamless clinical onboarding, real-time video consults, and strict HIPAA compliance.",
    tags: ["Healthcare AI", "HIPAA Architecture", "Telehealth"],
    projectImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    backgroundColor: "#ffffff",
    slug: "lumina-health",
  },
];

export default function ProjectShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [studies] = useState<CaseStudy[]>(BRENTIQ_CASE_STUDIES);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const stack = stackRef.current;
    if (!root || !stack) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".iw-card", stack);
      if (cards.length < 2) return;

      const isMobile = window.innerWidth <= 900;
      const stackHeader = isMobile ? STACK_HEADER_MOBILE : STACK_HEADER_DESKTOP;
      const cardGap = isMobile ? 30 : CARD_GAP;
      const cardHeight = cards[0]?.offsetHeight || (isMobile ? 500 : 450);

      // Initial positions for all cards
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: index === 0 ? 0 : index * (cardHeight + cardGap),
          zIndex: index + 1,
          force3D: true,
        });
      });

      const scrollDistance = (cards.length - 1) * (isMobile ? 440 : 580);

      const timeline = gsap.timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
        scrollTrigger: {
          trigger: root,
          start: isMobile ? "top 6%" : "top 4%",
          end: `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {
        const step = activeIndex - 1;
        const isLastCard = activeIndex === cards.length - 1;

        if (isLastCard) {
          cards.forEach((card, idx) => {
            timeline.to(card, { y: idx * stackHeader }, step);
          });
          continue;
        }

        cards.slice(activeIndex).forEach((card, offset) => {
          const activeY = activeIndex * stackHeader;
          const targetY =
            offset === 0
              ? activeY
              : activeY + cardHeight + cardGap + (offset - 1) * (cardHeight + cardGap);

          timeline.to(
            card,
            {
              y: targetY,
            },
            step
          );
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => {
      context.revert();
    };
  }, [studies]);

  return (
    <section
      id="projects"
      className="iw-section w-full pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-t border-gray-200/80 text-gray-950 relative overflow-hidden"
      ref={rootRef}
      aria-labelledby="industry-wins-heading"
    >
      <div className="iw-intro max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-gray-200/80">
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FF5520] font-heading block mb-2">
              Brentiq Impact
            </span>
            <h2
              id="industry-wins-heading"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-tight"
            >
              Digital Products Built to Win<br />
              <em className="italic font-serif font-normal text-[#FF5520]">
                Across Every Industry
              </em>
            </h2>
          </div>

          <Link
            href="/works"
            className="font-button inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md group shrink-0 w-fit"
          >
            <span>See All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div
        className="iw-stack max-w-7xl mx-auto relative h-[520px] sm:h-[540px] lg:h-[490px]"
        ref={stackRef}
      >
        {studies.map((study, index) => {
          return (
            <article
              className="iw-card absolute inset-0 w-full h-[480px] sm:h-[500px] lg:h-[450px] rounded-[24px] sm:rounded-[32px] bg-white border border-gray-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-5 sm:p-8 lg:p-10 overflow-hidden will-change-transform grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
              style={{ backgroundColor: study.backgroundColor }}
              key={`${study.category}-${study.title}-${index}`}
            >
              {/* Left Column: Category, Heading, Description, Tags & Live Link */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-1 space-y-4 sm:space-y-5">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#FF5520]">
                      0{index + 1}
                    </span>
                    <span className="h-px w-5 sm:w-6 bg-[#FF5520]/40" />
                    <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 tracking-tight leading-[1.1]">
                    {study.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-body text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-200/80 text-gray-700 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Live Link Button */}
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <Link
                    href="/works"
                    className="font-button inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-xs sm:text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md group w-fit"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Project Visual */}
              <div className="lg:col-span-7 relative h-[190px] sm:h-[240px] lg:h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-gray-200 shadow-2xs group">
                <Image
                  src={study.projectImage}
                  alt={`${study.title} project`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
