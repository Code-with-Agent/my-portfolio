"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  FileCheck2, 
  CheckCircle2
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  RevealOnScroll 
} from "@/components/ui";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#0a6ed1]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16 max-w-3xl">
          <SectionEyebrow number="06" title="ACADEMIC FOUNDATION" />
          <Heading2>
            Education &amp; Academic Timeline
          </Heading2>
          <SmallText className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal foundations in enterprise computer science, relational database theory, distributed systems, and modern cloud architectures.
          </SmallText>
        </div>

        {/* TIMELINE CONTAINER:
            Horizontal on md+ screens, Vertical on mobile */}
        <div className="relative">
          {/* =========================================================
              DESKTOP HORIZONTAL TIMELINE TRACK (Visible on md and up)
             ========================================================= */}
          <div className="hidden md:block mb-8">
            <div className="relative flex items-center justify-between max-w-4xl mx-auto px-12">
              {/* Connecting Horizontal Line */}
              <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#0a6ed1] via-[#3884ff] to-cyan-400 opacity-60" />

              {education.map((edu, idx) => (
                <div key={edu.id} className="relative z-10 flex flex-col items-center">
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0f18] border-2 border-[#3884ff] shadow-lg shadow-[#0a6ed1]/30">
                    <GraduationCap className="w-5 h-5 text-[#3884ff]" />
                    {idx === education.length - 1 && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    )}
                  </div>

                  {/* Graduation Year Pill */}
                  <div className="mt-2 px-3 py-1 rounded-full bg-[#0d1424] border border-[#3884ff]/30 text-xs font-mono font-bold text-[#3884ff]">
                    Graduation: {edu.graduationYear || edu.endYear}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RESPONSIVE EDUCATION CARDS GRID
              (Grid on desktop, vertical timeline line on mobile)
             ========================================================= */}
          <div className="relative md:grid md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
            {/* MOBILE ONLY: Vertical rail line */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0a6ed1] via-[#3884ff] to-transparent" />

            {education.map((edu) => (
              <div key={edu.id} className="relative pl-10 md:pl-0">
                {/* MOBILE ONLY: Vertical Timeline Circle */}
                <div className="md:hidden absolute left-[7px] top-6 w-5 h-5 rounded-full bg-[#0a0f18] border-2 border-[#3884ff] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3884ff]" />
                </div>

                <RevealOnScroll
                  className="p-6 sm:p-8 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl shadow-black/20"
                >
                  {/* Subtle top ambient gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/50 to-transparent transition-all duration-300" />

                  <div className="space-y-6">
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a6ed1]/15 border border-[#3884ff]/30 text-xs font-mono font-semibold text-[#3884ff]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.startYear} &mdash; {edu.endYear} (Graduated {edu.graduationYear || edu.endYear})</span>
                      </div>

                      {edu.honors && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                          <Award className="w-3.5 h-3.5" />
                          <span>{edu.honors}</span>
                        </span>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#3884ff] transition-colors leading-snug">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-[#3884ff]">
                        <span>{edu.institution}</span>
                        <span className="text-slate-500 font-normal">&bull;</span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Academic Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Relevant Information Highlights */}
                    {edu.relevantInfo && edu.relevantInfo.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-[#070b12] border border-white/[0.06] space-y-2">
                        <div className="text-[10px] font-mono text-[#3884ff] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                          <FileCheck2 className="w-3.5 h-3.5" />
                          <span>Key Academic Highlights &amp; Thesis</span>
                        </div>
                        <ul className="space-y-1.5">
                          {edu.relevantInfo.map((info, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{info}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Coursework Pills */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-5 mt-6 border-t border-white/[0.06] space-y-2.5">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#3884ff]" />
                        <span>Core Specialization Modules</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#121927] text-slate-300 border border-white/[0.06]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
