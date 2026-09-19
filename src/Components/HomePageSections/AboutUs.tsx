"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ABOUT_TEXT =
  "We are A Creative Agency Helping Brands Grow Through Strategy, Design, And Innovation. The Focus Of Our Work Is To Create Inspiring Digital Experiences.";

const STATS_DATA = [
  {
    id: "card-awards",
    number: "23+",
    label: "Design Awards",
    layout: "num-top-label-bottom",
  },
  {
    id: "card-delivery",
    number: "200+",
    label: "Project Delivery",
    layout: "label-top-num-bottom",
  },
  {
    id: "card-clients",
    number: "20k",
    label: "Satisfied Clients",
    layout: "num-top-label-bottom",
  },
];

export default function AboutUs() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textWordsRef = useRef<HTMLSpanElement[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gradientOverlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;
    const words = textWordsRef.current.filter(Boolean);
    const cards = cardRefs.current.filter(Boolean);
    const overlays = gradientOverlayRefs.current.filter(Boolean);

    if (!wrapper || !section || !container || words.length === 0 || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Responsive animation scroll distance calculation
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const animDistance = isMobile ? 1200 : isTablet ? 1600 : 2200;

      // Set initial offscreen state for cards with 3D acceleration (White background + Black text)
      cards.forEach((card, idx) => {
        gsap.set(card, {
          x: isMobile ? "80vw" : "100vw",
          color: "#111111",
          borderColor: "rgba(229, 231, 235, 0.9)",
          force3D: true,
        });
        if (overlays[idx]) {
          gsap.set(overlays[idx], { opacity: 0 });
        }
      });

      // Master Pinned Scroll Timeline mapped strictly to user's scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${animDistance}`,
          scrub: 1.0,
          invalidateOnRefresh: true,
        },
      });

      // 1. Text progressive lighting: light gray -> deep black (#111111)
      tl.to(
        words,
        {
          color: "#111111",
          stagger: 0.04,
          ease: "none",
          duration: 1.0,
        },
        0.05
      );

      // 2. Card 1: Enters in White -> Settle & Morph to Dark/Orange Gradient
      tl.fromTo(
        cards[0],
        { x: isMobile ? "80vw" : "100vw", color: "#111111", borderColor: "rgba(229, 231, 235, 0.9)" },
        { x: "0%", ease: "power2.out", duration: 0.8, force3D: true },
        0.35
      );
      if (overlays[0]) {
        tl.to(
          overlays[0],
          { opacity: 1, ease: "power1.inOut", duration: 0.4 },
          0.9
        );
      }
      tl.to(
        cards[0],
        {
          color: "#ffffff",
          borderColor: "rgba(255, 85, 32, 0.35)",
          ease: "power1.inOut",
          duration: 0.4,
        },
        0.9
      );

      // 3. Card 2: Enters in White -> Settle & Morph to Dark/Orange Gradient
      tl.fromTo(
        cards[1],
        { x: isMobile ? "80vw" : "100vw", color: "#111111", borderColor: "rgba(229, 231, 235, 0.9)" },
        { x: "0%", ease: "power2.out", duration: 0.8, force3D: true },
        0.95
      );
      if (overlays[1]) {
        tl.to(
          overlays[1],
          { opacity: 1, ease: "power1.inOut", duration: 0.4 },
          1.5
        );
      }
      tl.to(
        cards[1],
        {
          color: "#ffffff",
          borderColor: "rgba(255, 85, 32, 0.35)",
          ease: "power1.inOut",
          duration: 0.4,
        },
        1.5
      );

      // 4. Card 3: Enters in White -> Settle & Morph to Dark/Orange Gradient
      tl.fromTo(
        cards[2],
        { x: isMobile ? "80vw" : "100vw", color: "#111111", borderColor: "rgba(229, 231, 235, 0.9)" },
        { x: "0%", ease: "power2.out", duration: 0.8, force3D: true },
        1.55
      );
      if (overlays[2]) {
        tl.to(
          overlays[2],
          { opacity: 1, ease: "power1.inOut", duration: 0.4 },
          2.1
        );
      }
      tl.to(
        cards[2],
        {
          color: "#ffffff",
          borderColor: "rgba(255, 85, 32, 0.35)",
          ease: "power1.inOut",
          duration: 0.4,
        },
        2.1
      );

      // 5. Holding state: Full completion of animation (About Us stays completely still)
      tl.to({}, { duration: 0.5 });
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

  const words = ABOUT_TEXT.split(" ");

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-white min-h-[calc(100vh+1600px)] md:min-h-[calc(100vh+2000px)] lg:min-h-[calc(100vh+2600px)]"
    >
      <section
        ref={sectionRef}
        id="about"
        className="sticky top-0 z-10 w-full h-screen px-3 sm:px-5 lg:px-6 pt-24 sm:pt-28 pb-4 sm:pb-6 flex items-center justify-center overflow-hidden bg-white"
      >
        {/* Outer Rounded Section Card */}
        <div
          ref={containerRef}
          className="relative w-full h-full rounded-[24px] sm:rounded-[36px] bg-[#fafafa] border border-gray-200/70 p-6 sm:p-10 lg:p-14 flex flex-col justify-between overflow-hidden shadow-sm isolate will-change-transform"
        >
          {/* TOP ROW: About Us badge & Progressive Animated Copy */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12">
            {/* Left: About Us with Glowing Red/Orange Dot */}
            <div className="inline-flex items-center gap-2.5 pt-1 shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520] shadow-[0_0_8px_#FF5520]" />
              </span>
              <span className="text-sm sm:text-base font-semibold text-gray-900 font-body tracking-tight">
                About Us
              </span>
            </div>

            {/* Right: Progressive Word Color Shift */}
            <div className="max-w-3xl xl:max-w-4xl">
              <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-[1.24] tracking-tight">
                {words.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) textWordsRef.current[i] = el;
                    }}
                    className="inline-block mr-[0.28em] text-[#cbd5e1] will-change-[color]"
                  >
                    {word}
                  </span>
                ))}
              </p>

              {/* About Us Button */}
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/about"
                  className="font-button inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#FF5520]/25 group"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Centered 3/4 Width Statistic Cards */}
          <div className="w-full flex justify-center pt-8 overflow-hidden">
            <div className="w-full max-w-[92%] lg:max-w-[78%] xl:max-w-[74%] grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
              {STATS_DATA.map((stat, index) => {
                const isLabelTop = stat.layout === "label-top-num-bottom";

                return (
                  <div
                    key={stat.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="relative h-[220px] sm:h-[260px] lg:h-[300px] w-full rounded-[22px] sm:rounded-[28px] border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm will-change-transform overflow-hidden isolate"
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {/* Glowing Accent Gradient Overlay for Settle State */}
                    <div
                      ref={(el) => {
                        gradientOverlayRefs.current[index] = el;
                      }}
                      className="absolute inset-0 pointer-events-none -z-10 rounded-[22px] sm:rounded-[28px] opacity-0 will-change-opacity"
                      style={{
                        background:
                          "linear-gradient(135deg, #111111 0%, #1c0e08 45%, #FF5520 100%)",
                      }}
                    />

                    {isLabelTop ? (
                      <>
                        <div className="w-full flex justify-start z-10">
                          <span className="text-xs sm:text-sm font-medium font-body opacity-85 tracking-tight">
                            {stat.label}
                          </span>
                        </div>
                        <div className="w-full flex justify-end z-10">
                          <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                            {stat.number}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-full flex justify-start z-10">
                          <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                            {stat.number}
                          </span>
                        </div>
                        <div className="w-full flex justify-end z-10">
                          <span className="text-xs sm:text-sm font-medium font-body opacity-85 text-right tracking-tight">
                            {stat.label}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
