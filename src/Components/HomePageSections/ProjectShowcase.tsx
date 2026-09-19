"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    title: "Relax Studio",
    tags: ["Website", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://relax-studio.example.com",
    githubUrl: "https://github.com/brentiq/relax-studio",
  },
  {
    id: "02",
    title: "Aura Acoustics",
    tags: ["Videography", "Branding"],
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://aura-acoustics.example.com",
    githubUrl: "https://github.com/brentiq/aura-acoustics",
  },
  {
    id: "03",
    title: "Horizon Enterprise",
    tags: ["ERP", "Website"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://horizon-studio.example.com",
    githubUrl: "https://github.com/brentiq/horizon-studio",
  },
  {
    id: "04",
    title: "Vortex Motion",
    tags: ["UI/UX", "Videography"],
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://vortex-motion.example.com",
    githubUrl: "https://github.com/brentiq/vortex-motion",
  },
];

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const contents = contentRefs.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial states
      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, {
            y: "0%",
            scale: 1,
            opacity: 1,
            zIndex: 10,
            force3D: true,
          });
          if (contents[0]) gsap.set(contents[0], { opacity: 1, y: 0 });
        } else {
          gsap.set(card, {
            y: "140%",
            scale: 0.94,
            opacity: 0,
            zIndex: 10 + index,
            force3D: true,
          });
          if (contents[index]) gsap.set(contents[index], { opacity: 0, y: 24 });
        }
      });

      // Pinned ScrollTrigger timeline for continuous card-by-card vertical flow
      const scrollDistance = (cards.length - 1) * 1200;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 0,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Build sequential transitions for each card flow
      for (let i = 1; i < cards.length; i++) {
        const prevCard = cards[i - 1];
        const currentCard = cards[i];
        const currentContent = contents[i];

        const stepLabel = `flow-step-${i}`;

        // 1. Previous card smoothly glides upward and exits
        tl.to(
          prevCard,
          {
            y: "-140%",
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            force3D: true,
          },
          stepLabel
        );

        // 2. Current card flows from below with generous gap into the exact center
        tl.fromTo(
          currentCard,
          {
            y: "140%",
            scale: 0.94,
            opacity: 0.2,
            force3D: true,
          },
          {
            y: "0%",
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
            force3D: true,
          },
          stepLabel
        );

        // 3. Smooth reveal for project title, tags, and action buttons as card settles
        if (currentContent) {
          tl.to(
            currentContent,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            `${stepLabel}+=0.5`
          );
        }

        // Gentle viewing pause
        if (i < cards.length - 1) {
          tl.to({}, { duration: 0.3 });
        }
      }

      // Small trailing cushion before unpinning cleanly
      tl.to({}, { duration: 0.25 });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="works"
        className="relative w-full h-screen bg-white text-black px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-4 sm:pb-6 flex flex-col justify-between overflow-hidden isolate"
      >
        {/* Top Header: "Projects" + "Our Works" badge with glowing orange dot */}
        <div className="projects-header w-full max-w-[1440px] mx-auto flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100 shrink-0">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-none">
            Projects
          </h2>

          <div className="inline-flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520] shadow-[0_0_8px_#FF5520]" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-900 font-body">
              Our Works
            </span>
          </div>
        </div>

        {/* Center Stage: Wide Pinned Project Cards Container */}
        <div
          ref={cardsContainerRef}
          className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-auto"
        >
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute w-[86vw] max-w-[1440px] h-[58vh] sm:h-[66vh] max-h-[720px] min-h-[440px] rounded-[26px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-gray-200/80 bg-[#e8e9eb] will-change-transform flex flex-col justify-end p-6 sm:p-10 lg:p-12 isolate"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1440px) 90vw, 1440px"
                priority={index === 0}
                className="object-cover object-center -z-20"
              />

              {/* Subtle Vignette Layer for Typography Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent -z-10 pointer-events-none" />

              {/* Bottom-Left: Tags + Project Title + Minimal Icon Buttons */}
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="z-10 flex flex-col items-start gap-3 sm:gap-4 max-w-2xl will-change-transform"
              >
                {/* Category / Service Tags (Website, UI/UX, ERP, Videography) */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[11px] sm:text-xs font-semibold text-white/95 bg-black/45 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 uppercase tracking-wider shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Large Project Heading */}
                <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
                  {project.title}
                </h3>

                {/* Action Buttons: Live & GitHub (Icons ONLY) */}
                <div className="flex items-center gap-3 pt-1">
                  {/* Live Website Button */}
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live website"
                    className="group/btn inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shrink-0"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>

                  {/* GitHub Repository Button */}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                    className="group/btn inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shrink-0"
                  >
                    <GithubIcon className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Static See More Button Section */}
      <div className="w-full bg-white pt-6 pb-12 sm:py-16 flex items-center justify-center">
        <Link
          href="#contact"
          className="font-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-black text-white text-sm sm:text-base font-semibold tracking-tight transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          <span>See More Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}
