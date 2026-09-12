import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, Compass, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Brentiq Studio",
  description:
    "Learn more about Brentiq Studio — a creative digital agency delivering high-impact strategy, UI/UX design, and cutting-edge web development.",
};

const VALUES = [
  {
    icon: Target,
    title: "Strategic Precision",
    description:
      "Every pixel and line of code is anchored in commercial strategy and user psychology to drive measurable growth.",
  },
  {
    icon: Sparkles,
    title: "Uncompromising Design",
    description:
      "We design distinctive, memorable digital identities and interfaces that elevate brands above the noise.",
  },
  {
    icon: Zap,
    title: "Modern Engineering",
    description:
      "Built with high-performance frameworks and clean architecture for lightning-fast speeds and effortless scalability.",
  },
  {
    icon: Compass,
    title: "Collaborative Spirit",
    description:
      "We partner closely with founders and teams as an embedded digital force, transparent at every stage.",
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
    <div className="w-full bg-white text-gray-900 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/60">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5520]" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#FF5520] font-body tracking-tight uppercase">
              About Brentiq Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-950 leading-[1.1]">
            We Build Digital Products That People{" "}
            <span className="text-[#FF5520]">Remember</span> & Love.
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
              href="/#contact"
              className="font-button inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-200 shadow-lg shadow-[#FF5520]/25 hover:shadow-xl hover:shadow-[#FF5520]/40 group"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/#works"
              className="font-button inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-semibold transition-all duration-200"
            >
              <span>View Selected Works</span>
            </Link>
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
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-heading text-sm uppercase tracking-wider text-[#FF5520] font-semibold block mb-3">
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
      {/* 4. CORE VALUES CARDS                                                     */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <span className="font-heading text-sm uppercase tracking-wider text-[#FF5520] font-semibold block mb-3">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5520] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL TO ACTION                                                        */}
      {/* ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto text-center">
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
                href="/#contact"
                className="font-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-200 shadow-xl shadow-[#FF5520]/25 group"
              >
                <span>Get in Touch with Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
