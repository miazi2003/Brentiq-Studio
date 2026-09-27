import type { Metadata } from "next";
import CareerHero from "@/Components/CareerPage/CareerHero";
import WhyJoinBrentiqSection from "@/Components/CareerPage/WhyJoinBrentiqSection";
import CurrentOpeningsSection from "@/Components/CareerPage/CurrentOpeningsSection";
import StudioCultureSection from "@/Components/CareerPage/StudioCultureSection";
import OpenApplicationForm from "@/Components/CareerPage/OpenApplicationForm";

export const metadata: Metadata = {
  title: "Careers & Talent Collective — Join Brentiq Studio",
  description:
    "Explore careers and talent opportunities at Brentiq Studio. We are always scouting world-class designers, frontend engineers, and creative technologists who obsess over detail and 60fps digital craft.",
};

export default function CareerPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen" suppressHydrationWarning>
      {/* 1. EDITORIAL HERO (DARK & ORANGE GRADIENT) */}
      <CareerHero />

      {/* 2. WHY JOIN BRENTIQ SECTION */}
      <WhyJoinBrentiqSection />

      {/* 3. CURRENT OPENINGS LISTINGS */}
      <CurrentOpeningsSection />

      {/* 4. STUDIO CULTURE & VALUES */}
      <StudioCultureSection />

      {/* 5. OPEN SPECULATIVE APPLICATION FORM */}
      <OpenApplicationForm />
    </div>
  );
}
