"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { FileDown, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { Heading2, BodyText, Button, SectionEyebrow, RevealOnScroll } from "@/components/ui";

export function ResumeCta() {
  const { personal } = portfolioData;

  return (
    <section id="resume-cta" className="py-24 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="relative rounded-3xl bg-gradient-to-b from-[#0c1322] via-[#090e18] to-[#070a0f] border border-white/[0.12] p-8 sm:p-14 md:p-18 text-center space-y-9 overflow-hidden shadow-2xl shadow-black/80">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#0a6ed1]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 sap-grid-fine opacity-30 pointer-events-none" />
          
          {/* Top Subtle Ambient Blue Line */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#3884ff]/80 to-transparent" />

          {/* Section Eyebrow */}
          <div className="flex justify-center">
            <SectionEyebrow number="OPPORTUNITIES" title="ENTERPRISE COLLABORATION" />
          </div>

          {/* Main Headline & Supporting Positioning */}
          <div className="max-w-3xl mx-auto space-y-4">
            <Heading2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build better enterprise experiences.
            </Heading2>
            <BodyText className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-slate-300 leading-relaxed font-normal">
              As an experienced SAPUI5 and SAP Fiori developer, I partner with forward-looking enterprise teams to modernize mission-critical ERP workflows, engineer cloud-native BTP extensions, and enforce Clean Core architectural standards. Open to senior technical roles, high-impact consulting engagements, and architecture advisory contracts.
            </BodyText>
          </div>

          {/* Recruiter Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300 pt-1">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Clean Core Tier-1 Compliant</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack S/4HANA &amp; BTP</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Immediate Enterprise Availability</span>
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            {/* 1. Download Resume: Downloads /resume.pdf dynamically from configured portfolio data */}
            <a
              href={personal.resumeDownloadUrl || "/Moin_Khan_Resume_2026.docx"}
              download={personal.resumePdfFileName || "Moin_Khan_Resume_2026.docx"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="primary"
                size="lg"
                className="group shadow-xl shadow-[#0a6ed1]/25 border border-[#3884ff]/50"
              >
                <FileDown className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </Button>
            </a>

            {/* 2. Connect on LinkedIn */}
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="secondary" size="lg" className="group">
                <LinkedinIcon className="w-4 h-4 text-[#3884ff]" />
                <span>Connect on LinkedIn</span>
              </Button>
            </a>

            {/* 3. Contact Me */}
            <a href="#contact" className="inline-block">
              <Button variant="secondary" size="lg" className="group">
                <Mail className="w-4 h-4 text-[#3884ff]" />
                <span>Contact Me</span>
              </Button>
            </a>
          </div>

          {/* Secondary Web Resume Link */}
          <div className="pt-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#3884ff] transition-colors"
            >
              <span>Prefer to review online? View printable web resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
