"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Briefcase, 
  Layers, 
  Factory, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import { 
  SectionEyebrow, 
  MetadataText, 
  RevealOnScroll 
} from "@/components/ui";

export function About() {
  const { personal } = portfolioData;
  const { infoCards } = personal;

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#3884ff]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow + Large Heading */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <RevealOnScroll className="space-y-4">
              {/* Small eyebrow requested: "ABOUT ME" */}
              <SectionEyebrow number="01" title={personal.aboutEyebrow || "ABOUT ME"} />

              {/* Large heading focused on enterprise SAP development */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Architecting <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3884ff]">
                  Mission-Critical
                </span> <br />
                Enterprise Software
              </h2>

              <p className="text-sm font-mono text-[#3884ff] flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a6ed1] animate-ping" />
                <span>SAP S/4HANA &bull; SAP BTP &bull; Clean Core</span>
              </p>

              <div className="p-4 rounded-xl bg-[#0c111a] border border-white/[0.06] space-y-2 text-xs text-slate-400">
                <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Engineering Mandate</span>
                </div>
                <p className="leading-relaxed">
                  Decoupled extensibility, standard-compliant APIs, sub-second OData transaction response times, and WCAG AA accessibility across every enterprise screen.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Professional Summary + Four Compact Info Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Professional Summary */}
            <RevealOnScroll className="p-6 sm:p-8 rounded-2xl bg-[#0c111a] border border-white/[0.08] relative overflow-hidden space-y-4 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a6ed1]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Enterprise UX Engineering with Enterprise Reliability
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{personal.shortBio}</p>
                {personal.fullBio.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="text-slate-300/90 text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </RevealOnScroll>

            {/* Four Compact Information Cards */}
            <div className="space-y-3">
              <MetadataText as="div" className="uppercase tracking-wider text-xs">
                Key Career Vectors
              </MetadataText>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Experience Card */}
                <RevealOnScroll className="p-4 sm:p-5 rounded-xl bg-[#0f1624] border border-white/[0.08] hover:border-[#3884ff]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#141e30] border border-white/[0.06] text-[#3884ff] group-hover:bg-[#0a6ed1] group-hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                        {infoCards.experience.label}
                      </span>
                      <span className="text-base font-bold text-white tracking-tight">
                        {infoCards.experience.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {infoCards.experience.subtext}
                  </p>
                </RevealOnScroll>

                {/* 2. Specialization Card */}
                <RevealOnScroll className="p-4 sm:p-5 rounded-xl bg-[#0f1624] border border-white/[0.08] hover:border-[#3884ff]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#141e30] border border-white/[0.06] text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                        {infoCards.specialization.label}
                      </span>
                      <span className="text-base font-bold text-white tracking-tight">
                        {infoCards.specialization.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {infoCards.specialization.subtext}
                  </p>
                </RevealOnScroll>

                {/* 3. Industry Card */}
                <RevealOnScroll className="p-4 sm:p-5 rounded-xl bg-[#0f1624] border border-white/[0.08] hover:border-[#3884ff]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#141e30] border border-white/[0.06] text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Factory className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                        {infoCards.industry.label}
                      </span>
                      <span className="text-base font-bold text-white tracking-tight">
                        {infoCards.industry.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {infoCards.industry.subtext}
                  </p>
                </RevealOnScroll>

                {/* 4. Location Card */}
                <RevealOnScroll className="p-4 sm:p-5 rounded-xl bg-[#0f1624] border border-white/[0.08] hover:border-[#3884ff]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#141e30] border border-white/[0.06] text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                        {infoCards.location.label}
                      </span>
                      <span className="text-base font-bold text-white tracking-tight">
                        {infoCards.location.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {infoCards.location.subtext}
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
