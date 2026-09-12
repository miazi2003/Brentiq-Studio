"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#process", label: "Process" },
  { href: "/#questions", label: "Questions" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white z-40">
      <nav
        aria-label="Main Navigation"
        className="w-full px-4 sm:px-6 lg:px-8 h-20 sm:h-[86px] flex items-center justify-between"
      >
        {/* Left: Your Official Brand Logo */}
        <Link href="/" className="shrink-0 flex items-center py-2">
          <Image
            src="/logo.png"
            alt="Brentiq Studio"
            width={220}
            height={64}
            priority
            className="h-10 sm:h-12 md:h-[50px] w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links (Plus Jakarta Sans) */}
        <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium font-body">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) && link.href !== "/";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors py-1.5 relative ${
                  isActive
                    ? "text-[#FF5520] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FF5520] after:rounded-full"
                    : "text-gray-700 hover:text-gray-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button (Solid Black Pill Button) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#get-started"
            className="font-button inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#111111] hover:bg-black text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="#get-started"
            className="font-button inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-gray-800 hover:text-black rounded-lg border border-gray-200 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3 font-body">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#FF5520] font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}