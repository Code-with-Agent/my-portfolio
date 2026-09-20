"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  Database, 
  Server,
  Briefcase,
  Clock,
  Code2,
  CheckCircle2
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { 
  HeroDisplay, 
  Eyebrow, 
  BodyText, 
  Button, 
  FadeUp, 
  Background 
} from "@/components/ui";
import { HeroVisualization } from "./hero-visualization";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background ambient depth */}
      <Background showGrid={true} showGlow={true} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Recruiter-Friendly CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 1. Eyebrow */}
            <FadeUp delay={0.05}>
              <Eyebrow>
                <span className="flex h-2 w-2 rounded-full bg-[#0a6ed1] animate-pulse" />
                <span>SAPUI5 &bull; SAP Fiori &bull; CAP &bull; RAP</span>
              </Eyebrow>
            </FadeUp>

            {/* 2. Main Headline & Candidate Name */}
            <FadeUp delay={0.1} className="space-y-3">
              <HeroDisplay>
                SAPUI5 &amp; SAP Fiori <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3884ff]">
                  Developer
                </span>
              </HeroDisplay>

              {/* Developer identity badge for instant recognition */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {personal.name}
                </span>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <span className="text-xs sm:text-sm font-mono text-[#3884ff] font-medium">
                  {personal.currentRole}
                </span>
              </div>
            </FadeUp>

            {/* 3. Supporting Positioning Text */}
            <FadeUp delay={0.15}>
              <BodyText className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Building modern, scalable enterprise experiences across the SAP ecosystem.
              </BodyText>
            </FadeUp>

            {/* 4. Recruiter 5-Second Scan Snapshot */}
            <FadeUp delay={0.18}>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#090e18]/90 border border-white/[0.08] backdrop-blur-md grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-[#3884ff]" /> Role
                  </div>
                  <div className="text-white font-semibold truncate text-[11px]">Solutions Architect</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> Experience
                  </div>
                  <div className="text-white font-semibold text-[11px]">7+ Years Enterprise</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-purple-400" /> Focus
                  </div>
                  <div className="text-white font-semibold text-[11px]">UI5, CAP &amp; RAP</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" /> Status
                  </div>
                  <div className="text-emerald-400 font-semibold text-[11px] truncate">Available Now</div>
                </div>
              </div>
            </FadeUp>

            {/* Micro Highlights Badges */}
            <FadeUp delay={0.2} className="flex flex-wrap gap-2 pt-0.5 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0f1624] border border-white/[0.08] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3884ff]" /> Clean Core Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0f1624] border border-white/[0.08] text-slate-300">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> S/4HANA &amp; OData v4
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0f1624] border border-white/[0.08] text-slate-300">
                <Server className="w-3.5 h-3.5 text-amber-400" /> SAP BTP &amp; CAP
              </span>
            </FadeUp>

            {/* 5. Action Buttons for Recruiters */}
            <FadeUp delay={0.25} className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary CTA */}
              <a href="#experience" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  <span>Explore My Experience</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              {/* Secondary CTA: Direct PDF Download */}
              <a
                href={personal.resumeDownloadUrl || "/resume.pdf"}
                download={personal.resumePdfFileName || `${personal.name.replace(/\s+/g, '_')}_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <FileDown className="w-4 h-4 text-[#3884ff]" />
                  <span>Download Resume</span>
                </Button>
              </a>

              {/* Third CTA */}
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-4">
                  <LinkedinIcon className="w-4 h-4 text-[#3884ff]" />
                  <span className="ml-2">LinkedIn</span>
                </Button>
              </a>
            </FadeUp>

            {/* Quick Metrics Bar */}
            <FadeUp delay={0.3} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>

          {/* Right Column: Abstract Interactive SAP Enterprise Visual */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <HeroVisualization />
          </div>
        </div>

        {/* Minimal Animated Scroll Indicator */}
        <FadeUp delay={0.35} className="pt-12 sm:pt-16 flex flex-col items-center justify-center space-y-1.5">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] rounded-lg p-1"
            aria-label="Scroll to explore profile"
          >
            <span className="tracking-widest uppercase">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/[0.15] group-hover:border-[#3884ff]/60 flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#3884ff] animate-bounce" />
            </div>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
