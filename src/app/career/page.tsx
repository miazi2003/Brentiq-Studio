import type { Metadata } from "next";
import CareerHero from "@/Components/CareerPage/CareerHero";
import AboutUs from "@/Components/HomePageSections/AboutUs";
import StudioCultureSection from "@/Components/CareerPage/StudioCultureSection";
import CurrentOpeningsSection from "@/Components/CareerPage/CurrentOpeningsSection";
import OpenApplicationForm from "@/Components/CareerPage/OpenApplicationForm";

export const metadata: Metadata = {
  title: "Careers & Talent Collective — Join Brentiq Studio",
  description:
    "Explore careers and talent opportunities at Brentiq Studio. We are always scouting world-class designers, frontend engineers, and creative technologists who obsess over detail and 60fps digital craft.",
};

export default function CareerPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-screen" suppressHydrationWarning>
      {/* 1. EDITORIAL HERO */}
      <CareerHero />

      {/* 2. ABOUT US (HOMEPAGE PINNED SCENE) */}
      <AboutUs />

      {/* 3. STUDIO CULTURE & VALUES */}
      <StudioCultureSection />

      {/* 4. OPEN SPECULATIVE APPLICATION FORM (HERO CTA CONTAINER) */}
      {/* 4. CURRENT OPENINGS LISTINGS */}
      <CurrentOpeningsSection />

      {/* 5. OPEN SPECULATIVE APPLICATION FORM (HERO CTA CONTAINER) */}
      <OpenApplicationForm />
    </div>
  );
}
