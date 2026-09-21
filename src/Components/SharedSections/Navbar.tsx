"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#process", label: "Process" },
  { href: "/#questions", label: "Questions" },
  { href: "/career", label: "Career" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (!isHomePage) {
        setIsOverHero(false);
        return;
      }

      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const headerThreshold = heroHeight - 86;

      setIsOverHero(scrollY < headerThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHomePage]);

  const isDarkForeground = !isHomePage || !isOverHero;

  return (
    <header
      className={`w-full transition-all duration-300 z-50 ${
        isHomePage
          ? `fixed top-0 left-0 ${
              isOverHero
                ? isScrolled
                  ? "bg-white/[0.06] backdrop-blur-md border-b border-white/[0.08] text-white shadow-xs"
                  : "bg-transparent border-b border-transparent text-white"
                : "bg-white/75 backdrop-blur-md border-b border-gray-200/50 text-gray-900 shadow-xs"
            }`
          : "sticky top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 text-gray-900 shadow-xs"
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
            className={`h-10 sm:h-12 md:h-[50px] w-auto object-contain transition-all duration-300 ${
              isDarkForeground ? "brightness-100" : "brightness-0 invert"
            }`}
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
                className={`transition-colors duration-300 py-1.5 relative ${
                  isDarkForeground
                    ? isActive
                      ? "text-[#FF5520] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FF5520] after:rounded-full"
                      : "text-gray-800 hover:text-black"
                    : isActive
                    ? "text-[#FF5520] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#FF5520] after:rounded-full"
                    : "text-white/85 hover:text-white"
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
            className={`font-button inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
              isDarkForeground
                ? "bg-[#111111] hover:bg-black text-white"
                : "bg-white hover:bg-gray-100 text-[#111111]"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`p-2.5 rounded-xl border focus:outline-none transition-all duration-300 active:scale-95 cursor-pointer ${
              isDarkForeground
                ? "text-gray-800 hover:text-black border-gray-200 bg-black/[0.04]"
                : "text-white border-white/20 bg-white/10 hover:bg-white/20"
            }`}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Menu
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                }`}
              />
              <X
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown with silky smooth CSS transitions */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
          isMenuOpen
            ? "max-h-[600px] opacity-100 shadow-2xl py-4"
            : "max-h-0 opacity-0 pointer-events-none py-0 border-transparent"
        } ${
          isDarkForeground
            ? "bg-white/95 backdrop-blur-xl border-gray-100 text-gray-900"
            : "bg-black/90 backdrop-blur-2xl border-white/10 text-white"
        }`}
      >
        <div className="px-6 sm:px-10 flex flex-col space-y-1 font-body">
          {NAV_LINKS.map((link, idx) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) && link.href !== "/";

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen ? `${idx * 25}ms` : "0ms",
                }}
                className={`py-2 px-3.5 rounded-xl text-base font-medium transition-all duration-300 transform ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                } ${
                  isDarkForeground
                    ? isActive
                      ? "bg-orange-50 text-[#FF5520] font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-950 active:bg-gray-100"
                    : isActive
                    ? "bg-[#FF5520]/20 text-[#FF5520] font-semibold"
                    : "text-white/80 hover:bg-white/10 hover:text-white active:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Get Started CTA Button */}
          <div
            style={{
              transitionDelay: isMenuOpen ? `${NAV_LINKS.length * 25}ms` : "0ms",
            }}
            className={`pt-3 pb-1 transition-all duration-300 transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full font-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5520] hover:bg-[#e04515] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:shadow-[#FF5520]/25 transition-all duration-300 active:scale-98 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}