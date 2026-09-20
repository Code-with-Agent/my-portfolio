"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ProjectFilterType, ProjectItem } from "@/lib/types";
import { ProjectModal } from "./project-modal";
import { ProjectVisualIdentifier } from "./project-visual-identifier";
import { 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight,
  Briefcase,
  Wrench,
  ShieldCheck
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  Button 
} from "@/components/ui";

const FILTER_OPTIONS: ProjectFilterType[] = [
  "All",
  "SAPUI5",
  "SAP Fiori",
  "CAP",
  "RAP",
  "ABAP",
  "Enterprise Applications",
];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterType>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Filter projects according to selected tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.filterTags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#3884ff]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-3xl">
            <SectionEyebrow number="05" title="FEATURED ENTERPRISE PROJECTS" />
            <Heading2>
              Enterprise Case Studies &amp; Architectures
            </Heading2>
            <SmallText className="text-slate-400 text-sm sm:text-base leading-relaxed">
              High-velocity, mission-critical solutions engineered across the SAP S/4HANA, BTP, and Fiori Horizon landscape.
              Each case study details real business challenges, clean architectural solutions, and verified outcomes.
            </SmallText>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0c121e] px-3.5 py-2 rounded-xl border border-white/[0.08]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Clean Core &bull; Zero Modifications</span>
          </div>
        </div>

        {/* Animated Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0a0e17] border border-white/[0.08] max-w-fit">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.filterTags.includes(filter)).length;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors duration-200 select-none flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilterPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0a6ed1] to-[#3884ff] shadow-md shadow-[#0a6ed1]/30 border border-[#3884ff]/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                  <span
                    className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white font-semibold"
                        : "bg-white/[0.06] text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Framer Motion Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20"
              >
                {/* Top Subtle Ambient Blue Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

                <div className="space-y-6">
                  {/* Visual Project Identifier Blueprint */}
                  <div className="relative">
                    <ProjectVisualIdentifier projectId={project.id} />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                      {project.clientContext || "Enterprise"}
                    </div>
                  </div>

                  {/* Header: Project Type, Domain & Role */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#0a6ed1]/20 text-[#3884ff] border border-[#3884ff]/30">
                        {project.projectType}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        {project.businessDomain}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#3884ff] transition-colors leading-tight">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#3884ff] font-medium">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{project.role}</span>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Business Challenge vs Solution Preview Box */}
                  <div className="p-4 rounded-xl bg-[#070b12] border border-white/[0.06] space-y-3">
                    {/* Challenge */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        Business Challenge
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {project.businessChallenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Engineered Solution
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Key Contribution */}
                    <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#3884ff] font-semibold flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-[#3884ff]" />
                        Key Contribution
                      </span>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                        {project.keyContribution}
                      </p>
                    </div>
                  </div>

                  {/* Quantified Impact / Outcome Preview */}
                  <div className="p-3.5 rounded-xl bg-[#09101a] border border-emerald-500/20 space-y-1.5">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Verified Outcome &amp; Impact</span>
                    </div>
                    <ul className="space-y-1">
                      {project.outcome.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Action Button */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.sapTechnologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#121a2a] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.sapTechnologies.length > 5 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400">
                        +{project.sapTechnologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* "View Case Study" Action */}
                  <Button
                    onClick={() => setActiveProject(project)}
                    variant="primary"
                    className="w-full justify-center group/btn shadow-lg shadow-[#0a6ed1]/15"
                  >
                    <span>View Case Study (01–07 Breakdown)</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expanded 7-Section Case Study Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
