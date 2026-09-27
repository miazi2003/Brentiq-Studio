"use client";

import React, { useEffect, useRef } from "react";
import {
  Sparkles,
  Code2,
  Gauge,
  TrendingUp,
  Sliders,
  Palette,
  Volume2,
  LayoutGrid,
  Activity,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const STEPS_DATA: StepItem[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "You fill out a short brief and from your answers we learn what your product does, who buys it, and why anyone should care.",
  },
  {
    id: "strategy",
    number: "02",
    title: "Storyboarding & Strategy",
    description:
      "Before we start designing anything, you see exactly what the creative direction will say and how every frame will look. Once you give your notes we lock the whole thing in.",
  },
  {
    id: "design",
    number: "03",
    title: "Design System & UI",
    description:
      "We shape the bespoke visual identity and premium user experience around your brand with pixel-perfect precision and modern motion design.",
  },
  {
    id: "build",
    number: "04",
    title: "Production Build",
    description:
      "We bring the approved direction to life with clean Next.js technology, high-speed performance, and silky smooth 60fps animations.",
  },
  {
    id: "refine",
    number: "05",
    title: "Refinement & Polish",
    description:
      "We obsess over every detail, micro-interaction, and responsiveness check across all devices before anything is ready for production.",
  },
  {
    id: "launch",
    number: "06",
    title: "Launch & Scaling",
    description:
      "We execute a flawless deployment, monitor real-time metrics, and partner with you for continuous conversion optimization.",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const stepRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const progressLine = progressLineRef.current;
    const lineContainer = lineContainerRef.current;
    const stepRows = stepRowRefs.current.filter(Boolean);
    const markers = markerRefs.current.filter(Boolean);

    if (!container || !progressLine || !lineContainer || stepRows.length === 0) return;

    const ctx = gsap.context(() => {
      // 1. Continuous Timeline Progress Fill that scrubs as you scroll through the entire section
      gsap.fromTo(
        progressLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: lineContainer,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );

      // 2. Animate each step row smoothly as it scrolls into view
      stepRows.forEach((row, index) => {
        const marker = markers[index];
        const leftContent = row?.querySelector(".step-left-content");
        const rightContent = row?.querySelector(".step-right-visual");

        // Reveal animation for content
        gsap.fromTo(
          [leftContent, rightContent],
          { opacity: 0.35, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Marker activation
        if (marker) {
          ScrollTrigger.create({
            trigger: row,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => {
              gsap.to(marker, {
                backgroundColor: "#ffffff",
                boxShadow: "0 0 16px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 85, 32, 0.4)",
                scale: 1.15,
                duration: 0.3,
              });
            },
            onLeave: () => {
              gsap.to(marker, {
                backgroundColor: "#ffffff",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
                scale: 1,
                duration: 0.3,
              });
            },
            onEnterBack: () => {
              gsap.to(marker, {
                backgroundColor: "#ffffff",
                boxShadow: "0 0 16px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 85, 32, 0.4)",
                scale: 1.15,
                duration: 0.3,
              });
            },
            onLeaveBack: () => {
              gsap.to(marker, {
                backgroundColor: "#71717a",
                boxShadow: "none",
                scale: 1,
                duration: 0.3,
              });
            },
          });
        }
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="w-full px-3 sm:px-5 lg:px-6 py-4 sm:py-6 bg-white"
    >
      {/* Outer Rounded Section Card matching other sections */}
      <div
        className="relative w-full rounded-[24px] sm:rounded-[36px] bg-[#050507] border border-white/10 p-6 sm:p-10 lg:p-16 text-white overflow-hidden shadow-2xl isolate"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(255, 85, 32, 0.07) 0%, transparent 50%), radial-gradient(ellipse at 20% 60%, rgba(59, 130, 246, 0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 85%, rgba(255, 85, 32, 0.06) 0%, transparent 60%), #050507",
        }}
      >
        {/* Container */}
        <div className="w-full mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-16 sm:pb-24 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              How We Work.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-white/50 max-w-sm">
            A battle-tested 6-step framework turning complex visions into industry-defining digital products.
          </p>
        </div>

        {/* Steps List with Continuous Vertical Timeline */}
        <div ref={lineContainerRef} className="relative mt-12 sm:mt-16">
          {/* Vertical Progress Line running through all steps */}
          <div className="absolute left-[5px] sm:left-[6px] top-6 bottom-6 w-[2px] bg-white/15 rounded-full pointer-events-none">
            <div
              ref={progressLineRef}
              className="w-full h-full bg-gradient-to-b from-white via-[#FF5520] to-white rounded-full will-change-transform"
            />
          </div>

          {/* Step Rows */}
          <div className="flex flex-col space-y-24 sm:space-y-36 lg:space-y-48">
            {STEPS_DATA.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRowRefs.current[index] = el;
                }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pl-10 sm:pl-14"
              >
                {/* Marker on the timeline (Square node matching reference) */}
                <div
                  ref={(el) => {
                    markerRefs.current[index] = el;
                  }}
                  className="absolute left-[-2px] sm:left-[-1px] top-2 sm:top-3 w-4 h-4 rounded-[3px] bg-zinc-600 border border-black transition-all duration-300 z-20"
                />

                {/* Left Column: Title + Step Number + Description */}
                <div className="step-left-content lg:col-span-5 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-baseline gap-3">
                    <span>{step.title}</span>
                    <span className="font-heading text-xs sm:text-sm font-normal text-white/40 tracking-wider">
                      {step.number}
                    </span>
                  </h3>

                  <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed max-w-md mt-6 sm:mt-8 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Right Column: High-End Custom Visual Artwork */}
                <div className="step-right-visual lg:col-span-7 w-full flex justify-center lg:justify-end">
                  <div className="w-full max-w-xl">
                    {/* Visual 01: Questionnaire / Chat UI (Matches Reference) */}
                    {index === 0 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Ambient Glow */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#3b82f6]/20 blur-3xl pointer-events-none rounded-full" />
                        <div className="absolute -top-10 right-10 w-32 h-32 bg-[#FF5520]/10 blur-3xl pointer-events-none rounded-full" />

                        <div className="flex flex-col gap-4 relative z-10 font-body text-xs sm:text-sm">
                          {/* Bot Message 1 */}
                          <div className="flex items-center justify-end gap-2.5">
                            <div className="px-4 py-2.5 rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-600/30 to-indigo-600/40 border border-blue-500/30 text-white font-medium shadow-lg">
                              What does your product do?
                            </div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-md">
                              B
                            </div>
                          </div>

                          {/* User Reply 1 */}
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 text-[10px] shrink-0">
                              <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
                            </div>
                            <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-white/[0.08] border border-white/10 text-white/90">
                              SaaS project management tool for startups
                            </div>
                          </div>

                          {/* Bot Message 2 */}
                          <div className="flex items-center justify-end gap-2.5 mt-2">
                            <div className="px-4 py-2.5 rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-600/30 to-indigo-600/40 border border-blue-500/30 text-white font-medium shadow-lg">
                              Who is your ideal customer?
                            </div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-md">
                              B
                            </div>
                          </div>

                          {/* User Reply 2 */}
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 text-[10px] shrink-0">
                              <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
                            </div>
                            <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-white/[0.08] border border-white/10 text-white/90">
                              Founders & operation teams at early-stage startups
                            </div>
                          </div>

                          {/* Typing Indicator */}
                          <div className="flex items-center justify-end gap-2.5 mt-1">
                            <div className="px-4 py-2 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.2s]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.4s]" />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-md">
                              B
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 02: Storyboarding / Strategy Cards (Matches Reference) */}
                    {index === 1 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Ambient Blue Glow */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#3b82f6]/25 blur-3xl pointer-events-none rounded-full" />

                        <div className="relative z-10 flex flex-col gap-3.5">
                          {/* Top Row Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* Color Palette Card */}
                            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                              <div className="flex items-center gap-1.5 mb-2.5">
                                <Palette className="w-3.5 h-3.5 text-blue-400" />
                                <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase font-heading">
                                  Color Palette
                                </span>
                              </div>
                              <div className="grid grid-cols-4 gap-1.5">
                                <div className="h-6 rounded-md bg-[#070709] border border-white/20" />
                                <div className="h-6 rounded-md bg-[#FF5520]" />
                                <div className="h-6 rounded-md bg-[#3B82F6]" />
                                <div className="h-6 rounded-md bg-[#FFFFFF]" />
                              </div>
                            </div>

                            {/* Tone & Voice Card */}
                            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                              <div className="flex items-center gap-1.5 mb-2.5">
                                <Sliders className="w-3.5 h-3.5 text-[#FF5520]" />
                                <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase font-heading">
                                  Tone & Voice
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                <span className="px-2 py-0.5 rounded-md bg-white/10 text-white text-[10px] font-medium border border-white/15">
                                  Bold
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-[#FF5520]/20 text-[#FF5520] text-[10px] font-medium border border-[#FF5520]/30">
                                  Cinematic
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-[10px]">
                                  Direct
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-[10px]">
                                  Aspirational
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Row Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* Motion Style */}
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                              <span className="text-[9px] font-bold text-white/40 uppercase block mb-1">
                                Motion Style
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-white">60 FPS</span>
                                <span className="text-[10px] text-emerald-400 font-mono">Bezier</span>
                              </div>
                            </div>

                            {/* Scene Direction */}
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[9px] font-bold text-white/40 uppercase">
                                  Scene Cadence
                                </span>
                                <Volume2 className="w-3 h-3 text-purple-400" />
                              </div>
                              <div className="flex items-end gap-1 h-4">
                                <span className="w-1 h-2 bg-blue-400 rounded-full" />
                                <span className="w-1 h-4 bg-purple-400 rounded-full" />
                                <span className="w-1 h-3 bg-[#FF5520] rounded-full" />
                                <span className="w-1 h-2 bg-blue-400 rounded-full" />
                              </div>
                            </div>

                            {/* Visual Reference */}
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[9px] font-bold text-white/40 uppercase">
                                  Visual Refs
                                </span>
                                <LayoutGrid className="w-3 h-3 text-[#FF5520]" />
                              </div>
                              <span className="text-xs font-bold text-white/90">Locked In</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 03: Design System & UI Specs */}
                    {index === 2 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        <div className="absolute -bottom-8 right-10 w-44 h-44 bg-purple-500/15 blur-3xl pointer-events-none rounded-full" />

                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#FF5520]" />
                              <span className="font-heading text-xs sm:text-sm font-bold text-white">
                                Design System Tokens
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                              Figma Auto-Layout
                            </span>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-white/40 uppercase block mb-0.5">
                                Typography
                              </span>
                              <span className="font-heading text-lg font-bold text-white">
                                Stack Sans Notch
                              </span>
                            </div>
                            <span className="font-body text-xs text-white/50">Plus Jakarta Sans</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                              <span className="text-[10px] text-white/40 block">Component Tokens</span>
                              <span className="font-heading text-xl font-bold text-white">64 Atoms</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                              <span className="text-[10px] text-white/40 block">Responsive Grid</span>
                              <span className="font-heading text-xl font-bold text-[#FF5520]">Fluid 12-Col</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 04: Production Tech Build */}
                    {index === 3 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        <div className="absolute -bottom-8 left-10 w-44 h-44 bg-[#FF5520]/15 blur-3xl pointer-events-none rounded-full" />

                        <div className="relative z-10 flex flex-col gap-3.5">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                              <Code2 className="w-4 h-4 text-[#FF5520]" />
                              <span className="font-mono text-xs text-white/90">engine.config.ts</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-red-500/80" />
                              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-1">
                            <p className="text-white/40">&#47;&#47; Next.js 16 + GSAP Turbo Engine</p>
                            <p className="text-purple-400">
                              <span className="text-blue-400">const</span> pipeline = &#123;
                            </p>
                            <p className="pl-4 text-emerald-300">
                              rendering: <span className="text-orange-400">&quot;Turbopack 0.2s&quot;</span>,
                            </p>
                            <p className="pl-4 text-emerald-300">
                              animation: <span className="text-orange-400">&quot;GSAP Smooth&quot;</span>,
                            </p>
                            <p className="pl-4 text-emerald-300">
                              status: <span className="text-cyan-300">&quot;Production Ready&quot;</span>,
                            </p>
                            <p className="text-purple-400">&#125;;</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 05: Refinement & Performance */}
                    {index === 4 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        <div className="absolute -bottom-8 right-12 w-44 h-44 bg-emerald-500/15 blur-3xl pointer-events-none rounded-full" />

                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                              <Gauge className="w-4 h-4 text-[#FF5520]" />
                              <span className="font-heading text-xs sm:text-sm font-bold text-white">
                                Performance Audit
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                              Lighthouse 100
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
                              <span className="font-heading text-2xl font-black text-emerald-400 block">
                                100
                              </span>
                              <span className="text-[10px] text-white/50">Performance</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
                              <span className="font-heading text-2xl font-black text-[#FF5520] block">
                                60 FPS
                              </span>
                              <span className="text-[10px] text-white/50">Smoothness</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
                              <span className="font-heading text-2xl font-black text-white block">
                                0.1s
                              </span>
                              <span className="text-[10px] text-white/50">FCP Speed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 06: Launch & Scaling */}
                    {index === 5 && (
                      <div className="relative rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#111220]/95 via-[#0e0f1c]/90 to-[#0a0b14]/95 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
                        <div className="absolute -bottom-8 left-12 w-44 h-44 bg-emerald-500/15 blur-3xl pointer-events-none rounded-full" />

                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-[#FF5520]" />
                              <span className="font-heading text-xs sm:text-sm font-bold text-white">
                                Growth & Analytics
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <Activity className="w-3 h-3" /> Live & Scaling
                            </span>
                          </div>

                          <div className="p-4 rounded-2xl bg-gradient-to-r from-white/[0.06] to-transparent border border-white/10 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                                Conversion Lift
                              </span>
                              <span className="font-heading text-3xl font-bold text-white">+340%</span>
                            </div>
                            <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#FF5520] to-emerald-400 w-[85%] rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}


