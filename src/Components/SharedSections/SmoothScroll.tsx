"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ultra-smooth, effortless floating scroll configuration
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/"))) {
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
        if (hash) {
          if (hash === "#home") {
            e.preventDefault();
            lenis.scrollTo(0, { duration: 1.2 });
            window.history.pushState(null, "", "/");
            return;
          }
          const el = document.querySelector(hash) || (hash === "#questions" ? document.querySelector("#faq") : null);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -30, duration: 1.2 });
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      document.removeEventListener("click", handleHashClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle route change scroll reset & ScrollTrigger refresh
  useEffect(() => {
    if (!lenisRef.current) return;

    if (!window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      if (window.location.hash) {
        try {
          const target = document.querySelector(window.location.hash);
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target as HTMLElement, { offset: -30, duration: 1.2 });
          }
        } catch {
          // ignore selector errors
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
