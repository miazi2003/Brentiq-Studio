"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Selected Works", href: "/#works" },
  { label: "Selected Works", href: "/works" },
  { label: "How We Work", href: "/#process" },
  { label: "FAQs", href: "/#questions" },
  { label: "Careers", href: "/career" },
  { label: "Start a Project", href: "/#contact" },
];

const SERVICE_LINKS = [
  { label: "Custom Web Development", href: "/services" },
  { label: "UI/UX Design & Systems", href: "/services" },
  { label: "Shopify & E-commerce", href: "/services" },
  { label: "Brand Strategy & Identity", href: "/services" },
  { label: "Motion & Video Editing", href: "/services" },
  { label: "Performance Marketing", href: "/services" },
];

const TECH_LINKS = [
  { label: "Next.js & React", href: "#services" },
  { label: "Shopify Plus", href: "#services" },
  { label: "Webflow Development", href: "#services" },
  { label: "Framer Websites", href: "#services" },
  { label: "WordPress Solutions", href: "#services" },
  { label: "Tailwind CSS", href: "#services" },
];

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function DribbbleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.129 10.606c-.309-.033-2.748-.28-5.334.382-.249-.553-.513-1.111-.795-1.666 3.018-1.472 4.498-3.329 4.636-3.509 1.05 1.397 1.493 3.037 1.493 4.793zm-3.08-6.163c-.159.204-1.644 2.015-4.57 3.421-1.495-2.721-3.084-4.992-3.238-5.215 1.258-.426 2.607-.649 4.009-.649 1.393 0 2.709.229 3.799.654zm-9.351-1.785c.162.235 1.74 2.502 3.231 5.21-3.978 1.157-7.832 1.164-8.238 1.164.673-2.673 2.531-4.887 5.007-6.374zm-7.698 8.672c.421 0 3.738-.016 7.498-1.026.27.534.523 1.07.761 1.603-4.148 1.341-7.905 4.386-8.156 4.596-.134-.739-.203-1.498-.203-2.273 0-1.018.17-1.996.1-2.9zm1.665 4.394c.264-.22 3.659-3.003 7.643-4.277 1.065 2.766 1.545 5.505 1.637 6.069-2.749 1.41-5.918 1.07-8.28-.792zm10.748 1.543c-.104-.619-.576-3.266-1.604-5.942 2.399-.652 4.593-.44 4.883-.41-.453 2.659-2.035 4.898-3.279 6.352z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: "X / Twitter", href: "https://twitter.com", icon: XIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "Dribbble", href: "https://dribbble.com", icon: DribbbleIcon },
  { name: "GitHub", href: "https://github.com", icon: GithubIcon },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full px-3 sm:px-5 lg:px-6 pb-6 pt-2 bg-white">
      {/* Main Footer Card with Background Hero Video */}
      <div className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden bg-black/50 backdrop-blur-sm text-white p-8 sm:p-12 lg:p-16 xl:p-20 border border-white/15 shadow-2xl isolate">
        
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/i1hmtat5/image/upload/v1790013036/ChatGPT_Image_Sep_21_2026_11_50_09_PM_xnl69a.png"
          alt="Brentiq Studio Footer Background Visual"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="absolute inset-0 w-full h-full object-cover object-center -z-20 pointer-events-none opacity-80 sm:opacity-90"
        />

        {/* Video Color Overlay for crisp text contrast while keeping video vivid */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 -z-10 pointer-events-none" />

        {/* TOP SECTION: Left Brand & About + Right Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Logo, About Brentiq & Contact Info           */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
            {/* Brentiq Logo */}
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Brentiq Studio"
                width={260}
                height={75}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* About Brentiq Text */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-lg font-normal">
              Brentiq Studio is a premier digital design and development agency.
              We build high-performance websites, bespoke brand identities, and
              scalable digital products that turn visions into memorable,
              industry-defining experiences.
            </p>

            {/* Available Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/15 w-fit backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_12px_#10b981]" />
              </span>
              <span className="text-sm sm:text-base font-medium text-white font-body">
                Available for new projects worldwide
              </span>
            </div>

            {/* Direct Email Action */}
            <div className="pt-2">
              <span className="font-heading text-sm uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                Get in Touch
              </span>
              <a
                href="mailto:hello@brentiq.com"
                className="group inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-[#FF5520] transition-colors font-body tracking-tight"
              >
                <Mail className="w-6 h-6 text-[#FF5520]" />
                <span>hello@brentiq.com</span>
                <ArrowUpRight className="w-5 h-5 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF5520]" />
              </a>
            </div>

            {/* Social Media Icon Buttons */}
            <div className="flex items-center gap-3.5 pt-2">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/[0.08] hover:bg-[#FF5520] border border-white/15 hover:border-[#FF5520] text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-[0_0_20px_rgba(255,85,32,0.45)] group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:scale-110 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMNS: Navigation Links                          */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 font-body">
            
            {/* Column 1: Main Navigation */}
            <div className="space-y-5">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Navigation
              </h3>
              <ul className="space-y-3.5 text-base sm:text-lg font-medium text-white/75">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#FF5520] transition-colors inline-flex items-center gap-2 group py-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-[#FF5520] group-hover:shadow-[0_0_8px_#FF5520] transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div className="space-y-5">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Services
              </h3>
              <ul className="space-y-3.5 text-base sm:text-lg font-medium text-white/75">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#FF5520] transition-colors inline-flex items-center gap-2 group py-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-[#FF5520] group-hover:shadow-[0_0_8px_#FF5520] transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Technologies & CMS */}
            <div className="col-span-2 sm:col-span-1 space-y-5">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Platforms
              </h3>
              <ul className="space-y-3.5 text-base sm:text-lg font-medium text-white/75">
                {TECH_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#FF5520] transition-colors inline-flex items-center gap-2 group py-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-[#FF5520] group-hover:shadow-[0_0_8px_#FF5520] transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: Copyright, Legal & Scroll to Top */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 font-body text-sm sm:text-base text-white/60">
          <p>© {new Date().getFullYear()} Brentiq Studio LLC. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base text-white/70">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-[#FF5520] transition-colors cursor-pointer font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}