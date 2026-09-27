"use client";

import React from "react";
import Image from "next/image";

// Curated high-quality Unsplash portrait avatars for the visual diagrams
const AVATARS = {
  person1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  person2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  person3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  person4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  person5: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
  person6: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
  person7: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
  person8: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
  person9: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=120&auto=format&fit=crop&q=80",
};

export default function WhyJoinBrentiqSection() {
  return (
    <section
      id="why-join"
      className="w-full bg-[#fbfbfd] text-gray-950 py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="flex flex-col items-start gap-3.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-[#FF5520]/20 text-[#FF5520] text-xs font-semibold uppercase tracking-wider font-heading">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]" />
            <span>Opportunities</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-950 leading-[1.08]">
            Why join Brentiq
          </h2>

          <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
            Gain the autonomy, global recognition, and collaborative ecosystem to do the most impactful work of your career.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2x2 CARD GRID MATCHING REFERENCE DESIGN                  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* -------------------------------------------------------- */}
          {/* CARD 1: Global Exposure                                  */}
          {/* -------------------------------------------------------- */}
          <div className="group rounded-[28px] sm:rounded-[32px] bg-white border border-gray-200/80 p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            {/* Top Visual Graphic Container */}
            <div className="w-full h-[230px] sm:h-[260px] rounded-[22px] bg-[#f8f9fa] border border-gray-100 flex items-center justify-center relative overflow-hidden select-none">
              
              {/* Radial spoke lines SVG - expands outward from globe on hover */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none origin-[200px_130px] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" viewBox="0 0 400 260">
                <defs>
                  <radialGradient id="spokeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF5520" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="130" r="95" fill="url(#spokeGlow)" />
                
                {/* 8 Radial Spokes connecting from center to outer points */}
                <line x1="200" y1="130" x2="200" y2="42" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="282" y2="68" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="325" y2="130" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="282" y2="192" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="200" y2="218" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="118" y2="192" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="75" y2="130" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="130" x2="118" y2="68" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Center Standalone 3D Globe Graphic - No white container or borders */}
              <div className="relative z-30 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-[0_10px_22px_rgba(2,132,199,0.35)] select-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Spherical Ocean Gradient */}
                    <radialGradient id="globeOcean" cx="35%" cy="30%" r="65%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="55%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#075985" />
                    </radialGradient>
                    {/* Spherical Specular Gloss */}
                    <radialGradient id="globeGloss" cx="30%" cy="25%" r="55%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    {/* Atmosphere Rim Shadow */}
                    <radialGradient id="globeAtmosphere" cx="50%" cy="50%" r="50%">
                      <stop offset="82%" stopColor="#000000" stopOpacity="0" />
                      <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.45" />
                    </radialGradient>
                    {/* Globe Inner Clip */}
                    <clipPath id="globeCircleClip">
                      <circle cx="50" cy="50" r="46" />
                    </clipPath>
                  </defs>

                  {/* Ocean Base Sphere */}
                  <circle cx="50" cy="50" r="46" fill="url(#globeOcean)" />

                  {/* Continents Layer */}
                  <g clipPath="url(#globeCircleClip)" className="transition-transform duration-700 ease-out group-hover:rotate-12 origin-center">
                    {/* North America */}
                    <path
                      d="M20 28 C 24 22, 34 20, 38 25 C 42 30, 35 38, 28 36 C 22 35, 18 32, 20 28 Z"
                      fill="#22c55e"
                    />
                    {/* South America */}
                    <path
                      d="M26 44 C 34 42, 40 48, 36 60 C 33 68, 28 72, 26 76 C 24 74, 22 62, 24 52 Z"
                      fill="#22c55e"
                    />
                    {/* Europe */}
                    <path
                      d="M48 24 C 54 22, 60 25, 58 32 C 55 36, 48 35, 46 30 Z"
                      fill="#22c55e"
                    />
                    {/* Africa */}
                    <path
                      d="M45 36 C 54 34, 62 38, 60 48 C 58 58, 54 68, 48 72 C 44 65, 42 52, 43 44 Z"
                      fill="#22c55e"
                    />
                    {/* Asia */}
                    <path
                      d="M62 26 C 72 24, 82 30, 80 42 C 78 48, 70 52, 64 45 C 60 40, 58 32, 62 26 Z"
                      fill="#22c55e"
                    />
                    {/* Australia */}
                    <path
                      d="M72 62 C 78 60, 82 65, 79 70 C 75 73, 70 70, 72 62 Z"
                      fill="#22c55e"
                    />
                  </g>

                  {/* Spherical Atmosphere Shadow & Gloss */}
                  <circle cx="50" cy="50" r="46" fill="url(#globeAtmosphere)" />
                  <circle cx="50" cy="50" r="46" fill="url(#globeGloss)" />
                </svg>
              </div>

              {/* 8 Avatars: Emerge directly from center globe on hover */}
              {/* Node 1: Top (0 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[88px] group-hover:translate-x-0 group-hover:delay-[30ms]">
                  <Image src={AVATARS.person1} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 2: Top-Right (45 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[62px] group-hover:translate-x-[82px] group-hover:delay-[60ms]">
                  <Image src={AVATARS.person2} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 3: Right (90 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-[125px] group-hover:delay-[90ms]">
                  <Image src={AVATARS.person3} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 4: Bottom-Right (135 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-[62px] group-hover:translate-x-[82px] group-hover:delay-[120ms]">
                  <Image src={AVATARS.person4} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 5: Bottom (180 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-[88px] group-hover:translate-x-0 group-hover:delay-[150ms]">
                  <Image src={AVATARS.person5} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 6: Bottom-Left (225 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-[62px] group-hover:-translate-x-[82px] group-hover:delay-[180ms]">
                  <Image src={AVATARS.person6} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 7: Left (270 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-translate-x-[125px] group-hover:delay-[210ms]">
                  <Image src={AVATARS.person7} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Node 8: Top-Left (315 deg) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[62px] group-hover:-translate-x-[82px] group-hover:delay-[240ms]">
                  <Image src={AVATARS.person8} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="pt-6 sm:pt-7 flex flex-col gap-2.5">
              <h3 className="font-heading text-2xl font-bold text-gray-950 tracking-tight">
                Global Exposure
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                Gain visibility on an international stage and earn what you are worth. Your skills deserve global recognition, and Brentiq is just the platform to make that happen.
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* CARD 2: Career Growth Opportunities                      */}
          {/* -------------------------------------------------------- */}
          <div className="group rounded-[28px] sm:rounded-[32px] bg-white border border-gray-200/80 p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            {/* Top Visual Graphic Container */}
            <div className="w-full h-[230px] sm:h-[260px] rounded-[22px] bg-[#f8f9fa] border border-gray-100 flex items-end justify-center px-6 pb-6 relative overflow-hidden select-none">
              
              {/* Connected Line Chart SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 240">
                <polyline
                  points="55,135 110,95 180,145 250,60 325,85"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className="line-draw-anim transition-colors duration-500 group-hover:stroke-[#FF5520]/50"
                />
              </svg>

              {/* 5 Column Growth Bars with staggered bottom-up growth on hover */}
              <div className="w-full flex items-end justify-between gap-3 sm:gap-4 z-10 max-w-[340px]">
                {/* Bar 1: Amber / Yellow */}
                <div className="flex-1 flex flex-col items-center gap-2 origin-bottom">
                  <div className="avatar-grow-1 w-8 h-8 rounded-full ring-2 ring-[#38bdf8] shadow-md overflow-hidden bg-gray-200 -mb-2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <Image src={AVATARS.person6} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="bar-grow-1 w-full h-16 rounded-[18px] bg-gradient-to-t from-[#f59e0b] via-[#fbbf24] to-[#fcd34d] shadow-md shadow-amber-500/20 origin-bottom" />
                </div>

                {/* Bar 2: Orange */}
                <div className="flex-1 flex flex-col items-center gap-2 origin-bottom">
                  <div className="avatar-grow-2 w-8 h-8 rounded-full ring-2 ring-[#ea580c] shadow-md overflow-hidden bg-gray-200 -mb-2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <Image src={AVATARS.person1} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="bar-grow-2 w-full h-28 rounded-[18px] bg-gradient-to-t from-[#ea580c] via-[#f97316] to-[#fdba74] shadow-md shadow-orange-500/25 origin-bottom" />
                </div>

                {/* Bar 3: Pink / Coral */}
                <div className="flex-1 flex flex-col items-center gap-2 origin-bottom">
                  <div className="avatar-grow-3 w-8 h-8 rounded-full ring-2 ring-[#f43f5e] shadow-md overflow-hidden bg-gray-200 -mb-2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <Image src={AVATARS.person2} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="bar-grow-3 w-full h-20 rounded-[18px] bg-gradient-to-t from-[#e11d48] via-[#f43f5e] to-[#fca5a5] shadow-md shadow-rose-500/25 origin-bottom" />
                </div>

                {/* Bar 4: Peak Red-Orange Brentiq */}
                <div className="flex-1 flex flex-col items-center gap-2 origin-bottom">
                  <div className="avatar-grow-4 w-8 h-8 rounded-full ring-2 ring-[#FF5520] shadow-md overflow-hidden bg-gray-200 -mb-2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <Image src={AVATARS.person4} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="bar-grow-4 w-full h-40 rounded-[18px] bg-gradient-to-t from-[#d93800] via-[#FF5520] to-[#ff8555] shadow-lg shadow-[#FF5520]/30 origin-bottom" />
                </div>

                {/* Bar 5: Purple / Indigo */}
                <div className="flex-1 flex flex-col items-center gap-2 origin-bottom">
                  <div className="avatar-grow-5 w-8 h-8 rounded-full ring-2 ring-[#6366f1] shadow-md overflow-hidden bg-gray-200 -mb-2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <Image src={AVATARS.person3} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="bar-grow-5 w-full h-32 rounded-[18px] bg-gradient-to-t from-[#4f46e5] via-[#6366f1] to-[#a5b4fc] shadow-md shadow-indigo-500/25 origin-bottom" />
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="pt-6 sm:pt-7 flex flex-col gap-2.5">
              <h3 className="font-heading text-2xl font-bold text-gray-950 tracking-tight">
                Career Growth Opportunities
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                Elevate your career with meaningful collaborations. Brentiq provides a platform for continuous learning, skill enhancement, and career advancement.
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* CARD 3: Exciting Projects                                */}
          {/* -------------------------------------------------------- */}
          <div className="group rounded-[28px] sm:rounded-[32px] bg-white border border-gray-200/80 p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            {/* Top Visual Graphic Container */}
            <div className="w-full h-[230px] sm:h-[260px] rounded-[22px] bg-[#f8f9fa] border border-gray-100 flex items-center justify-center relative overflow-hidden select-none">
              
              {/* Native Atomic SVG with Orbiting Colored Particles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 260">
                <defs>
                  {/* Particle Gradients */}
                  <linearGradient id="greenOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a3e635" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="blueOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="purpleOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                  <linearGradient id="orangeOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>

                  {/* Drop Shadow for Particle Spheres */}
                  <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* =================================================== */}
                {/* ROUTE 1: Tilted -30 deg (Green + Blue Particles)    */}
                {/* =================================================== */}
                <g transform="rotate(-30 200 130)">
                  {/* Elliptical Route Line */}
                  <ellipse
                    cx="200"
                    cy="130"
                    rx="135"
                    ry="55"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1.3"
                    className="transition-colors duration-500 group-hover:stroke-emerald-400/70"
                  />

                  {/* Green Particle Sphere (Right Node, travels 360deg along ellipse on hover) */}
                  <g transform="translate(200 130)">
                    <g className="particle-anim-green" style={{ transform: "translate(135px, 0px)" }}>
                      <circle
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#greenOrb)"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        filter="url(#orbGlow)"
                      />
                    </g>
                  </g>

                  {/* Cyan-Blue Particle Sphere (Left Node, travels 360deg along ellipse on hover) */}
                  <g transform="translate(200 130)">
                    <g className="particle-anim-blue" style={{ transform: "translate(-135px, 0px)" }}>
                      <circle
                        cx="0"
                        cy="0"
                        r="10"
                        fill="url(#blueOrb)"
                        stroke="#ffffff"
                        strokeWidth="2"
                        filter="url(#orbGlow)"
                      />
                    </g>
                  </g>
                </g>

                {/* =================================================== */}
                {/* ROUTE 2: Tilted +30 deg (Purple Particle)           */}
                {/* =================================================== */}
                <g transform="rotate(30 200 130)">
                  {/* Elliptical Route Line */}
                  <ellipse
                    cx="200"
                    cy="130"
                    rx="135"
                    ry="55"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1.3"
                    className="transition-colors duration-500 group-hover:stroke-[#FF5520]/70"
                  />

                  {/* Purple Particle Sphere (Left Node, travels 360deg along ellipse on hover) */}
                  <g transform="translate(200 130)">
                    <g className="particle-anim-purple" style={{ transform: "translate(-135px, 0px)" }}>
                      <circle
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#purpleOrb)"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        filter="url(#orbGlow)"
                      />
                    </g>
                  </g>
                </g>

                {/* =================================================== */}
                {/* ROUTE 3: Vertical 90 deg (Amber-Orange Particle)    */}
                {/* =================================================== */}
                <g transform="rotate(90 200 130)">
                  {/* Elliptical Route Line */}
                  <ellipse
                    cx="200"
                    cy="130"
                    rx="135"
                    ry="55"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1.3"
                    className="transition-colors duration-500 group-hover:stroke-indigo-400/70"
                  />

                  {/* Amber-Orange Particle Sphere (Right Node, travels 360deg along vertical ellipse on hover) */}
                  <g transform="translate(200 130)">
                    <g className="particle-anim-orange" style={{ transform: "translate(135px, 0px)" }}>
                      <circle
                        cx="0"
                        cy="0"
                        r="13"
                        fill="url(#orangeOrb)"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        filter="url(#orbGlow)"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              {/* Center Core Nucleus 'B' with interactive orange halo */}
              <div className="relative z-30 w-14 h-14 rounded-full bg-black text-white shadow-xl flex items-center justify-center font-heading text-xl font-black transition-all duration-500 group-hover:scale-115 group-hover:shadow-[0_0_35px_rgba(255,85,32,0.4)] group-hover:border group-hover:border-[#FF5520]/50">
                <span>B</span>
              </div>

              {/* Static Category Badges positioned cleanly above the orbits */}
              {/* Fintech Tag */}
              <div className="absolute top-[28px] right-[16%] z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-md border border-gray-200/80 text-[11px] font-semibold text-gray-800 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>FINTECH</span>
              </div>

              {/* AI Computing Tag */}
              <div className="absolute bottom-[68px] left-[10%] z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-md border border-gray-200/80 text-[11px] font-semibold text-gray-800 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]" />
                <span>AI COMPUTING</span>
              </div>

              {/* Blockchain Tag */}
              <div className="absolute bottom-[24px] right-[20%] z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-md border border-gray-200/80 text-[11px] font-semibold text-gray-800 font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>BLOCKCHAIN</span>
              </div>
            </div>

            {/* Content Text */}
            <div className="pt-6 sm:pt-7 flex flex-col gap-2.5">
              <h3 className="font-heading text-2xl font-bold text-gray-950 tracking-tight">
                Exciting Projects
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                Explore and collaborate on diverse tech projects. From modern web applications to innovative digital solutions, Brentiq connects you with projects that match your expertise.
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* CARD 4: End-to-End Coordination                          */}
          {/* -------------------------------------------------------- */}
          <div className="group rounded-[28px] sm:rounded-[32px] bg-white border border-gray-200/80 p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            {/* Top Visual Graphic Container */}
            <div className="w-full h-[230px] sm:h-[260px] rounded-[22px] bg-[#f8f9fa] border border-gray-100 flex flex-col items-center justify-between py-6 px-6 relative overflow-hidden select-none">
              
              {/* Top Studio Node */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black text-white shadow-md text-xs font-semibold font-heading">
                <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
                <span>Brentiq Flow</span>
              </div>

              {/* Connecting Tree Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 240">
                {/* Down line from top */}
                <line x1="190" y1="50" x2="190" y2="90" stroke="#cbd5e1" strokeWidth="1.5" />
                {/* Horizontal Bar */}
                <line x1="70" y1="90" x2="310" y2="90" stroke="#cbd5e1" strokeWidth="1.5" />
                {/* Drop lines to team members */}
                <line x1="70" y1="90" x2="70" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="130" y1="90" x2="130" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="190" y1="90" x2="190" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="250" y1="90" x2="250" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="310" y1="90" x2="310" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
                {/* Line to Clients */}
                <line x1="190" y1="160" x2="190" y2="195" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Middle Row: Team Avatars with "You" highlighted */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 z-10 w-full">
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200">
                  <Image src={AVATARS.person8} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200">
                  <Image src={AVATARS.person7} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                
                {/* Highlighted "You" Node */}
                <div className="flex flex-col items-center gap-1 scale-110">
                  <span className="text-[10px] font-bold text-[#FF5520] font-heading uppercase tracking-wider bg-orange-100/90 px-1.5 py-0.5 rounded-md">
                    You
                  </span>
                  <div className="w-9 h-9 rounded-full ring-2 ring-[#FF5520] shadow-lg overflow-hidden bg-gray-200">
                    <Image src={AVATARS.person3} alt="You" width={36} height={36} className="object-cover w-full h-full" />
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200">
                  <Image src={AVATARS.person4} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="w-8 h-8 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200">
                  <Image src={AVATARS.person1} alt="Team" width={32} height={32} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Bottom Row: Clients Node */}
              <div className="flex items-center gap-2 z-10">
                <div className="px-3 py-1 rounded-lg bg-black text-white text-[11px] font-semibold font-heading shadow-md">
                  Clients
                </div>
                <div className="w-7 h-7 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-gray-200">
                  <Image src={AVATARS.person9} alt="Client" width={28} height={28} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="pt-6 sm:pt-7 flex flex-col gap-2.5">
              <h3 className="font-heading text-2xl font-bold text-gray-950 tracking-tight">
                End-to-End Coordination
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                Experience a streamlined process from project initiation to completion. Brentiq ensures seamless collaboration, allowing you to focus on what you do best.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
