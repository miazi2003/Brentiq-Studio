import type { Metadata } from "next";
import ContactCTA from "@/Components/HomePageSections/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us — Brentiq Studio",
  description:
    "Have a project in mind? Start a conversation with Brentiq Studio to build high-performance digital products and unforgettable experiences.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-gray-900 min-h-[calc(100vh-86px)] flex flex-col justify-center py-6 sm:py-10" suppressHydrationWarning>
      <ContactCTA />
    </div>
  );
}
