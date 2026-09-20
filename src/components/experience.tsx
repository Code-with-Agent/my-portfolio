"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Trophy, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  Button, 
  RevealOnScroll 
} from "@/components/ui";

export function Experience() {
  const { experience } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  // For recruiter scan convenience, show first 2 by default on mobile, or full history when toggled
  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <SectionEyebrow number="04" title="CAREER TIMELINE" />
          <Heading2>
            Professional Experience
          </Heading2>
          <SmallText className="max-w-2xl text-slate-400">
            A chronological timeline of enterprise software engineering, S/4HANA migrations, and modern Fiori solutions delivered across multinational corporations.
          </SmallText>
        </div>

        {/* Vertical Career Timeline */}
        <div className="relative border-l-2 border-white/[0.1] ml-3 sm:ml-6 md:ml-8 space-y-12 sm:space-y-16 pl-6 sm:pl-10 md:pl-12">
          {displayedExperience.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[33px] sm:-left-[49px] md:-left-[57px] top-1.5 flex items-center justify-center">
                {item.isCurrent ? (
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#0a6ed1] border-4 border-[#070a0f] shadow-lg shadow-[#0a6ed1]/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0f1624] border-4 border-[#070a0f] group-hover:border-[#3884ff] group-hover:bg-[#0a6ed1] transition-colors shadow-md">
                    <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
                  </div>
                )}
              </div>

              {/* Experience Case-Study Card */}
              <RevealOnScroll className="rounded-3xl bg-[#0c111a] border border-white/[0.08] hover:border-[#3884ff]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0a6ed1]/10 transition-all duration-300 overflow-hidden shadow-xl group/card">
                
                {/* 1. Header: Company, Role, Dates, Location, Domain */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0f1624] via-[#0c111a] to-[#0c111a] border-b border-white/[0.06] space-y-3">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/card:text-[#3884ff] transition-colors">
                          {item.role}
                        </h3>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Position
                          </span>
                        )}
                      </div>

                      {/* Company & Domain */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-[#3884ff]" />
                          {item.company}
                        </span>
                        <span className="text-slate-600 hidden sm:inline">&bull;</span>
                        <span className="text-[#3884ff] font-mono text-xs">
                          {item.businessDomain}
                        </span>
                      </div>

                      {/* Location & Workmode */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                        <span>&bull;</span>
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 text-[11px] font-mono">
                          {item.workMode}
                        </span>
                      </div>
                    </div>

                    {/* Dates Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f1624] border border-white/[0.08] text-xs font-mono text-slate-200 shrink-0 self-start shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-[#3884ff]" />
                      <span>{item.startDate} &mdash; {item.endDate}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body with strict requested sections */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Section: Role Overview */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Role Overview
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Section: Key Contributions */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Key Contributions
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-300">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] mt-2 shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section: Technology */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Technology
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#141e30] text-slate-200 border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Section: Impact */}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="p-4 rounded-2xl bg-[#0f1624] border border-emerald-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                        <Trophy className="w-4 h-4 text-emerald-400" />
                        <span>Impact</span>
                      </div>
                      <ul className="space-y-2">
                        {item.keyAchievements.map((achieve, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achieve}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>

        {/* Mobile & Recruiter Expand Interaction */}
        {experience.length > 2 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              variant="secondary"
              size="md"
              className="mx-auto"
            >
              <span>{showAll ? "Collapse Career History" : `View Full Experience (${experience.length} Positions)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
