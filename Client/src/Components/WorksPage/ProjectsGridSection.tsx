"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import {
  PROJECTS_DATA,
  PROJECT_CATEGORIES,
  ProjectItemData,
} from "@/data/projectsData";

const ITEMS_PER_PAGE = 6;

export default function ProjectsGridSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const tabsRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Check scroll boundaries for tabs
  const updateScrollButtons = () => {
    if (!tabsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const tabs = tabsRef.current;
    if (tabs) {
      tabs.addEventListener("scroll", updateScrollButtons, { passive: true });
      window.addEventListener("resize", updateScrollButtons, { passive: true });
    }
    return () => {
      if (tabs) tabs.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    if (!tabsRef.current) return;
    const scrollAmount = 280;
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Drag to scroll handlers for desktop mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - tabsRef.current.offsetLeft;
    scrollLeftRef.current = tabsRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !tabsRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    tabsRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  // Wheel horizontal scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (!tabsRef.current || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    tabsRef.current.scrollLeft += e.deltaY;
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => {
      if (activeCategory === "web-development") {
        return (
          p.category === "web-development" ||
          p.category === "custom-development" ||
          p.category === "shopify" ||
          p.category === "wordpress" ||
          p.category === "wix" ||
          p.category === "squarespace"
        );
      }
      return p.category === activeCategory;
    });
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <section
      ref={sectionRef}
      id="all-works"
      className="w-full bg-white text-gray-950 pt-10 sm:pt-16 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Interactive Scrollable Filter Bar */}
        <div className="flex flex-col gap-6 mb-12 sm:mb-16 pb-8 border-b border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
                Browse by Platform &amp; Craft
              </h2>
            </div>

            <p className="font-body text-xs sm:text-sm text-gray-500 font-medium">
              Showing {filteredProjects.length > 0 ? startIndex + 1 : 0}–{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </p>
          </div>

          {/* Horizontally Scrollable Category Filter Pills with Controls */}
          <div className="relative w-full flex items-center group/tabs">
            {/* Left Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              aria-label="Scroll left"
              className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-[#FF5520] hover:border-[#FF5520] transition-all absolute -left-4 z-20 shrink-0 ${
                canScrollLeft ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Tabs Track */}
            <div
              ref={tabsRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onWheel={handleWheel}
              className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-2 px-1 no-scrollbar select-none cursor-grab active:cursor-grabbing w-full scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    aria-pressed={isActive}
                    className={`font-button text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-[#111111] text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-950 border border-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              type="button"
              onClick={() => scrollTabs("right")}
              aria-label="Scroll right"
              className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-[#FF5520] hover:border-[#FF5520] transition-all absolute -right-4 z-20 shrink-0 ${
                canScrollRight ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {paginatedProjects.map((project: ProjectItemData) => {
                return (
                  <div
                    key={project.id}
                    className={`group relative flex flex-col justify-between rounded-[24px] sm:rounded-[32px] bg-[#fafafa] border border-gray-200/90 p-5 sm:p-7 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 isolate ${
                      project.featured ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center" : ""
                    }`}
                  >
                    {/* Visual Image Container */}
                    <div
                      className={`relative w-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-zinc-950 border border-gray-200/80 shadow-inner group/img ${
                        project.featured
                          ? "h-[320px] sm:h-[420px] lg:h-[480px] lg:col-span-7"
                          : "h-[280px] sm:h-[360px] md:h-[380px]"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={project.featured ? "(max-width: 1200px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 -z-10"
                      />

                      {/* Subtle Vignette Layer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white font-heading">
                          {project.platform}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 font-body">
                          {project.year}
                        </span>
                      </div>

                      {/* Bottom Metrics Pills (if available) */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 z-10">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-xs text-white"
                            >
                              <span className="text-[#FF5520] font-bold">{metric.value}</span>
                              <span className="text-white/70">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Text Details & Action Bar */}
                    <div
                      className={`flex flex-col justify-between pt-6 sm:pt-7 ${
                        project.featured ? "lg:col-span-5 lg:pt-0 lg:py-4" : ""
                      }`}
                    >
                      <div>
                        {/* Tags Row */}
                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium font-body text-gray-500 bg-gray-100/90 rounded-full px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-gray-950 leading-tight mb-2 group-hover:text-[#FF5520] transition-colors duration-300">
                          {project.title}
                        </h3>

                        {/* Subtitle / Client */}
                        <p className="text-xs sm:text-sm font-semibold text-[#FF5520] font-heading uppercase tracking-wider mb-3">
                          {project.client} — {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Bar: Link to Project or Inquiry */}
                      <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 font-body">
                          Platform: <span className="text-gray-900 font-medium">{project.platform}</span>
                        </span>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#FF5520] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF5520]/25 group/btn"
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200/80 font-body">
                <p className="text-xs sm:text-sm text-gray-500">
                  Page <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
                  <span className="font-semibold text-gray-900">{totalPages}</span>
                </p>

                <div className="flex items-center gap-2">
                  {/* Previous Page Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                      currentPage === 1
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-950 active:scale-95 cursor-pointer"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {/* Page Number Pills */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isCurrent = pageNum === currentPage;
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => handlePageChange(pageNum)}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all flex items-center justify-center cursor-pointer ${
                            isCurrent
                              ? "bg-[#111111] text-white shadow-md scale-105"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-950"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Page Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                      currentPage === totalPages
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-950 active:scale-95 cursor-pointer"
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="w-full rounded-[32px] bg-gray-50 border border-gray-200 p-12 sm:p-20 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5520]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-gray-900">
              No projects found in this category
            </h3>
            <p className="font-body text-gray-600 max-w-md text-sm sm:text-base">
              We frequently update our portfolio with new case studies and platform builds. Check back soon or select another category.
            </p>
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              className="mt-2 font-button px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-[#FF5520] transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
