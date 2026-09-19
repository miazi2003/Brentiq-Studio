import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesHero from "@/Components/ServicesPage/ServicesHero";
import HorizontalFeaturedCarousel from "@/Components/ServicesPage/HorizontalFeaturedCarousel";
import AllServicesSection from "@/Components/ServicesPage/AllServicesSection";

export const metadata: Metadata = {
  title: "Services — Digital Craft & Engineering | Brentiq Studio",
  description:
    "Explore our full spectrum of digital services: Branding, UI/UX Design, Custom Web Development, Shopify & CMS, Motion Design, and Performance SEO.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen" suppressHydrationWarning>
      {/* SECTION 1 — SERVICES HERO */}
      <ServicesHero />

      {/* SECTION 2 — HORIZONTAL FEATURED SERVICES CAROUSEL (ONE CONTINUOUS ASYMMETRIC ROW) */}
      <HorizontalFeaturedCarousel />

      {/* SECTION 3 — ALL SERVICES EDITORIAL BLOCKS & CATEGORY FILTER */}
      <AllServicesSection />

      {/* SECTION 4 — CLOSING AGENCY CTA */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28 max-w-7xl mx-auto text-center border-t border-gray-100 pt-16">
        <div className="bg-[#070709] rounded-[32px] sm:rounded-[44px] p-10 sm:p-16 lg:p-20 text-white relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="font-heading text-xs sm:text-sm uppercase tracking-widest text-[#FF5520] font-bold">
              Let&apos;s Build Together
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Have a visionary project in mind?
            </h2>
            <p className="font-body text-base sm:text-lg text-white/70 max-w-xl">
              Partner with Brentiq Studio to craft an industry-defining digital product tailored for long-term growth and commercial success.
            </p>
            <div className="pt-3">
              <Link
                href="/#contact"
                className="font-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF5520] hover:bg-[#ff4410] text-white text-base font-semibold transition-all duration-200 shadow-xl shadow-[#FF5520]/30 hover:scale-105 group"
              >
                <span>Start Your Project Brief</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
