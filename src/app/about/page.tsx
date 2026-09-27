import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Brentiq Studio",
  description:
    "Learn more about Brentiq Studio — a creative digital agency delivering high-impact strategy, UI/UX design, and cutting-edge web development.",
};

const VALUES = [
  {
    number: "01.",
    title: "Strategic Precision",
    description:
      "Every pixel and line of code is anchored in commercial strategy and user psychology to drive measurable growth.",
  },
  {
    number: "02.",
    title: "Uncompromising Design",
    description:
      "We design distinctive, memorable digital identities and interfaces that elevate brands above digital noise.",
  },
  {
    number: "03.",
    title: "Modern Engineering",
    description:
      "Built with high-performance frameworks and clean architecture for lightning-fast speeds and effortless scalability.",
  },
  {
    number: "04.",
    title: "Craft Over Conformity",
    description:
      "We reject generic templates. Every animation, layout, and micro-interaction is intentionally engineered to stand out.",
  },
  {
    number: "05.",
    title: "Obsession with Details",
    description:
      "From 60fps motion fluidity to sub-pixel typography alignment, we take immense pride in the finishing touches.",
  },
  {
    number: "06.",
    title: "Collaborative Spirit",
    description:
      "We partner closely with ambitious founders and engineering teams as an embedded digital force, transparent at every stage.",
  },
];

const STATS = [
  { number: "23+", label: "Design Awards Won" },
  { number: "200+", label: "Projects Delivered" },
  { number: "20k+", label: "Satisfied Users & Clients" },
  { number: "99%", label: "Client Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen" suppressHydrationWarning>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-6 max-w-4xl">
            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-950 leading-[1.1]">
              We Build Digital Products That People{" "}
              <span className="text-[#FF5520]">Remember</span> &amp; Love.
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-600 font-normal leading-relaxed">
              Brentiq Studio is an elite team of designers, engineers, and digital
              strategists. We combine artistic innovation with commercial logic to
              help bold companies scale and dominate their markets.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="font-button inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-200 shadow-lg shadow-[#FF5520]/25 hover:shadow-xl hover:shadow-[#FF5520]/40 group"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/works"
                className="font-button inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-semibold transition-all duration-200"
              >
                <span>View Selected Works</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS BANNER                                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.number}
              </span>
              <span className="font-body text-sm sm:text-base text-gray-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR STORY & MISSION                                                   */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 font-heading block mb-3">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
              Crafting clarity out of complexity.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 font-body text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              Founded with the conviction that digital experiences should be both
              visually breathtaking and commercially transformative, Brentiq Studio
              operates at the intersection of design craft, brand storytelling,
              and full-stack software development.
            </p>
            <p>
              We reject one-size-fits-all templates and generic trends. Instead,
              we dig deep into your product identity, audience behaviors, and
              market goals to engineer bespoke digital platforms that convert
              curious visitors into loyal advocates.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR CORE PRINCIPLES                                                   */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 bg-white text-gray-950 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 font-heading">
              What Drives Us
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-950 leading-tight">
              Our Core Principles
            </h2>
          </div>

          {/* Minimalist Editorial 3-Column Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-12 sm:gap-y-14">
            {VALUES.map((item, idx) => (
              <div
                key={idx}
                className="border-t border-gray-200/90 pt-6 sm:pt-7 flex flex-col gap-2.5 group"
              >
                {/* Number Label */}
                <span className="font-heading text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-[#FF5520] transition-colors">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL TO ACTION                                                        */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gray-950 rounded-[32px] p-10 sm:p-16 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
              <span className="font-heading text-xs sm:text-sm uppercase tracking-widest text-[#FF5520] font-bold">
                Ready to work together?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Let&apos;s build something extraordinary.
              </h2>
              <p className="font-body text-base sm:text-lg text-gray-400 max-w-xl">
                Whether you are launching a new brand or scaling an existing product,
                we are here to turn your vision into an industry-leading reality.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="font-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-200 shadow-xl shadow-[#FF5520]/25 group"
                >
                  <span>Get in Touch with Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
