"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowUp, FileText } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a0f] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Tier: Name, Title & Social Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                {personal.name}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-xs font-mono font-medium text-[#3884ff]">
                SAPUI5 &amp; SAP Fiori Developer
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Clean Core compliant enterprise applications &amp; S/4HANA solutions.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0f1624] text-slate-400 hover:text-white hover:bg-[#152238] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0f1624] text-slate-400 hover:text-white hover:bg-[#152238] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors"
              title="GitHub Repositories"
              aria-label="GitHub Repositories"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.contactEmail}`}
              className="p-2 rounded-lg bg-[#0f1624] text-slate-400 hover:text-white hover:bg-[#152238] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors"
              title="Send Direct Email"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="p-2 rounded-lg bg-[#0f1624] text-slate-400 hover:text-white hover:bg-[#152238] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors"
              title="View Printable Resume"
              aria-label="View Printable Resume"
            >
              <FileText className="w-4 h-4" />
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0f1624] text-slate-400 hover:text-white hover:bg-[#152238] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Dynamic Copyright & Built with Next.js Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">
              Built with <span className="text-white font-semibold">Next.js</span> &bull; Tailwind CSS &bull; Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
