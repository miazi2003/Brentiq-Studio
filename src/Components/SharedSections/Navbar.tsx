"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 z-50 ${
        isHomePage
          ? isScrolled
            ? "fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "absolute top-0 left-0 bg-transparent border-b border-transparent"
          : "relative bg-white border-b border-gray-100"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="w-full px-6 sm:px-10 lg:px-16 h-20 sm:h-[86px] flex items-center justify-between"
      >
        {/* Left: Official Brand Logo */}
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
                  isHomePage
                    ? isActive
                      ? "text-[#FF5520] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FF5520] after:rounded-full"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-[#FF5520] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FF5520] after:rounded-full"
                    : "text-gray-700 hover:text-gray-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#get-started"
            className={`font-button inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 ${
              isHomePage
                ? "bg-white hover:bg-gray-100 text-[#111111]"
                : "bg-[#111111] hover:bg-black text-white"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="#get-started"
            className={`font-button inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold ${
              isHomePage ? "bg-white text-black" : "bg-[#111111] text-white"
            }`}
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`p-2 rounded-lg border focus:outline-none transition-colors ${
              isHomePage
                ? "text-white border-white/20 bg-black/30 hover:bg-black/50"
                : "text-gray-800 hover:text-black border-gray-200"
            }`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 sm:px-10 pt-2 pb-6 shadow-2xl transition-all duration-200 ${
            isHomePage
              ? "bg-black/95 backdrop-blur-xl border-white/10 text-white"
              : "bg-white border-gray-100 text-gray-900"
          }`}
        >
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
                    isHomePage
                      ? isActive
                        ? "bg-[#FF5520]/20 text-[#FF5520] font-semibold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                      : isActive
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