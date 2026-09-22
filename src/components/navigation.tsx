"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { 
  FileDown, 
  Menu, 
  X, 
  Layers, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Mail, 
  Award
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about", icon: Layers },
  { label: "Expertise", href: "#expertise", id: "expertise", icon: Code2 },
  { label: "Experience", href: "#experience", id: "experience", icon: Briefcase },
  { label: "Projects", href: "#projects", id: "projects", icon: Layers },
  { label: "Education", href: "#education", id: "education", icon: GraduationCap },
  { label: "Certifications", href: "#certifications", id: "certifications", icon: Award },
  { label: "Contact", href: "#contact", id: "contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine active section based on scroll position
  const determineActiveSection = useCallback(() => {
    // If user clicked a tab recently, keep the active tab locked until scroll settles
    if (isManualScrollRef.current) return;
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. Bottom of page threshold: always highlight the last section ("contact")
    if (scrollY + viewportHeight >= documentHeight - 80) {
      setActiveSection("contact");
      return;
    }

    // 2. Top of page threshold: Hero section (no section active)
    if (scrollY < 120) {
      setActiveSection("");
      return;
    }

    // 3. Section detection point below sticky navbar (~72px header height + padding)
    const detectionPoint = scrollY + 140;

    let candidate = "";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;

      if (elementTop <= detectionPoint) {
        candidate = link.id;
      }
    }

    if (candidate) {
      setActiveSection(candidate);
    }
  }, [pathname]);

  // Main scroll and resize listener with requestAnimationFrame throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run once on mount to establish initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Cancel manual scroll lock if user uses wheel or touch during animation
    const unlockManualScroll = () => {
      if (isManualScrollRef.current) {
        isManualScrollRef.current = false;
        if (manualScrollTimeoutRef.current) {
          clearTimeout(manualScrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener("wheel", unlockManualScroll, { passive: true });
    window.addEventListener("touchmove", unlockManualScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", unlockManualScroll);
      window.removeEventListener("touchmove", unlockManualScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [determineActiveSection]);

  // Keyboard escape listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Handle clicking navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");

    // If on a subpage (e.g. /resume), navigate to home page with hash
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      // 1. Immediately activate the clicked tab
      setActiveSection(targetId);

      // 2. Lock scroll-spy from intermediate tab jumping during smooth scroll
      isManualScrollRef.current = true;
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      manualScrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
        determineActiveSection();
      }, 850);

      // 3. Smoothly scroll to target section accounting for sticky navbar height
      const headerOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const targetScrollY = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: "smooth",
      });

      // 4. Update browser URL hash cleanly without causing page jumps
      if (window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070a0f]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/50 py-2.5"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] rounded-xl p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a6ed1] to-[#004fb0] text-white font-mono font-bold text-sm tracking-wider shadow-md shadow-[#0a6ed1]/30 border border-[#3884ff]/40 group-hover:border-[#3884ff] group-hover:scale-105 transition-all duration-200">
              {portfolioData.personal.monogram}
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-[#3884ff] transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wide uppercase flex items-center gap-1">
                <span>SAP Fiori Specialist</span>
                <span className="text-emerald-400">&bull; Clean Core</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Pill Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0f1624]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                    isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicatorPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0a6ed1] to-[#3884ff] shadow-sm shadow-[#0a6ed1]/40 border border-[#3884ff]/40"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-[#0f1624] hover:bg-[#152238] border border-white/[0.08] hover:border-[#3884ff]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff]"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#3884ff]" />
            </a>

            <a
              href={portfolioData.personal.resumeDownloadUrl || "/Moin_Khan_Resume_2026.docx"}
              download={portfolioData.personal.resumePdfFileName || "Moin_Khan_Resume_2026.docx"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0a6ed1] to-[#0070f2] hover:from-[#0070f2] hover:to-[#3884ff] text-white shadow-md shadow-[#0a6ed1]/25 hover:shadow-[#0a6ed1]/40 border border-[#3884ff]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={portfolioData.personal.resumeDownloadUrl || "/Moin_Khan_Resume_2026.docx"}
              download={portfolioData.personal.resumePdfFileName || "Moin_Khan_Resume_2026.docx"}
              className="p-2.5 rounded-xl bg-[#0a6ed1] text-white text-xs font-medium flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff]"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden xs:inline">CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0f1624] border border-white/[0.1] text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Animated Sheet / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden border-b border-white/[0.1] bg-[#070a0f]/98 backdrop-blur-2xl px-4 pt-3 pb-6 mt-2.5 space-y-4 shadow-2xl shadow-black"
          >
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between p-3 rounded-xl min-h-[48px] transition-colors border ${
                      isActive
                        ? "bg-[#0a6ed1]/25 border-[#3884ff]/40 text-white font-semibold"
                        : "bg-[#0f1624]/60 hover:bg-[#152238] border-white/[0.05] text-slate-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#3884ff]" : "text-slate-400"}`} />
                      <span className="text-sm">{link.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-medium py-3 px-3 rounded-xl bg-[#0f1624] text-slate-200 border border-white/[0.08] hover:border-[#3884ff]/40 transition-colors min-h-[48px]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#3884ff]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.personal.resumeDownloadUrl || "/Moin_Khan_Resume_2026.docx"}
                download={portfolioData.personal.resumePdfFileName || "Moin_Khan_Resume_2026.docx"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold py-3 px-3 rounded-xl bg-[#0a6ed1] text-white shadow-md shadow-[#0a6ed1]/30 min-h-[48px]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
