import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceScopeAndRelated from "@/Components/ServicesPage/ServiceScopeAndRelated";
import ContactCTA from "@/Components/HomePageSections/ContactCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Brentiq Studio",
    };
  }

  return {
    title: `${service.title} | Brentiq Studio`,
    description: service.description,
  };
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default async function IndividualServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Split title for outline typography styling
  const words = service.title.toUpperCase().split(" ");
  const firstWord = words[0] || service.title;
  const secondWord = words.slice(1).join(" ") || "";

  return (
    <div className="w-full bg-white text-gray-950 min-h-screen" suppressHydrationWarning>
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION (MATCHING THE REFERENCE IMAGE)                  */}
      {/* ========================================================================= */}
      <section className="w-full px-3 sm:px-5 lg:px-6 pt-2 sm:pt-4 pb-8 sm:pb-12 bg-white">
        <div className="relative w-full h-[85vh] min-h-[620px] max-h-[880px] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#FF5520] via-[#ff4a11] to-[#ea3c06] text-white flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-2xl isolate select-none">
          
          {/* Subtle radial glow overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* TOP ROW: Giant Brand Headline & Top-Right Grid Badge */}
          <div className="w-full flex items-start justify-between relative z-10">
            <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px] font-black tracking-tight text-white leading-none uppercase drop-shadow-sm">
              BRENTIQ
            </h1>

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shrink-0 mt-1">
              <div className="grid grid-cols-2 gap-1">
                <span className="w-1.5 h-1.5 rounded-xs bg-white" />
                <span className="w-1.5 h-1.5 rounded-xs bg-white" />
                <span className="w-1.5 h-1.5 rounded-xs bg-white" />
                <span className="w-1.5 h-1.5 rounded-xs bg-white" />
              </div>
            </div>
          </div>

          {/* FULL WIDTH: Service Visual Mockup across the entire section */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter contrast-[1.1] saturate-[1.15]"
            />
            {/* Rich multi-layer gradient overlays for brand orange ambiance & high-contrast typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#FF5520]/40 to-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF5520]/60 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* MIDDLE-LEFT: Service Headline Statement */}
          <div className="w-full relative z-20 my-auto py-4">
            <div className="max-w-[280px] sm:max-w-[340px] md:max-w-[380px] flex items-start gap-3">
              <span className="w-7 sm:w-10 h-[1.5px] bg-white/90 mt-2.5 shrink-0" />
              <p className="font-body text-xs sm:text-sm md:text-base text-white font-normal leading-relaxed tracking-wide drop-shadow-sm">
                {service.headline}
              </p>
            </div>
          </div>

          {/* BOTTOM ROW: Social Stack & Layered Outline Service Title */}
          <div className="w-full flex items-end justify-between relative z-20 gap-4">
            {/* Left Vertical Social Icons */}
            <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0 pb-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-white hover:text-[#FF5520] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-white hover:text-[#FF5520] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-white hover:text-[#FF5520] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Giant Bottom Headline: First Word Solid + Second Word Outlined Stroke */}
            <div className="flex-1 flex justify-end overflow-hidden">
              <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[140px] font-black tracking-tight leading-none uppercase text-right">
                <span className="text-white">{firstWord}</span>{" "}
                {secondWord && (
                  <span
                    className="transition-opacity duration-300"
                    style={{
                      WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.95)",
                      color: "transparent",
                    }}
                  >
                    {secondWord}
                  </span>
                )}
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2 & 3. MODERNIZED & ANIMATED SCOPE, CAPABILITIES & SERVICE PROJECTS        */}
      {/* ========================================================================= */}
      <ServiceScopeAndRelated service={service} />

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE CTA CONTACT FORM COMPONENT (MATCHING HOME PAGE)           */}
      {/* ========================================================================= */}
      <div className="w-full bg-white pb-12">
        <ContactCTA
          defaultService={
            service.slug === "web-development"
              ? "Website Development"
              : service.slug === "shopify-cms"
              ? "Shopify Store"
              : service.slug === "branding"
              ? "Branding & Identity"
              : service.slug === "motion-video"
              ? "Content & Video"
              : service.slug === "marketing-seo"
              ? "Performance Marketing"
              : "Website Development"
          }
        />
      </div>
    </div>
  );
}
