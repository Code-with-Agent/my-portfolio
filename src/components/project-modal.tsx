"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/lib/types";
import { ProjectVisualIdentifier } from "./project-visual-identifier";
import { 
  X, 
  Briefcase, 
  AlertTriangle, 
  Lightbulb, 
  UserCheck, 
  Cpu, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0f18] border border-white/[0.12] rounded-2xl shadow-2xl shadow-black p-5 sm:p-8 space-y-7 z-10 text-slate-200"
          >
            {/* Top Bar / Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#0a6ed1]/25 text-[#3884ff] border border-[#3884ff]/30">
                    {project.projectType}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                    {project.businessDomain}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    Enterprise Case Study
                  </span>
                </div>

                <h2 id="case-study-title" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight pt-1">
                  {project.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 font-mono">
                  <span className="text-[#3884ff] font-semibold">{project.role}</span>
                  <span>&bull;</span>
                  <span>{project.clientContext || project.businessDomain}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={onClose}
                  className="group p-2 sm:p-2.5 rounded-xl bg-[#0f1726] text-slate-400 hover:text-white hover:bg-[#16233b] border border-white/[0.08] hover:border-[#3884ff]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff]"
                  aria-label="Close case study (Escape)"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Visual Project Blueprint */}
            <div>
              <ProjectVisualIdentifier projectId={project.id} />
            </div>

            {/* 01 — Context */}
            <div className="p-5 rounded-xl bg-[#0d1422] border border-white/[0.07] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3884ff] tracking-wider uppercase">
                <Briefcase className="w-4 h-4 text-[#3884ff]" />
                <span>01 — Context</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.context}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {project.description}
              </p>
            </div>

            {/* 02 — Business Challenge & 03 — Solution (Side-by-side on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 02 — Business Challenge */}
              <div className="p-5 rounded-xl bg-[#140f12] border border-rose-500/25 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400 tracking-wider uppercase">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>02 — Business Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.businessChallenge}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-rose-300/70 border-t border-rose-500/15">
                  Constraint: Zero downtime &amp; mission-critical continuity
                </div>
              </div>

              {/* 03 — Solution */}
              <div className="p-5 rounded-xl bg-[#0b151b] border border-emerald-500/25 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase">
                    <Lightbulb className="w-4 h-4 text-emerald-400" />
                    <span>03 — Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-emerald-300/70 border-t border-emerald-500/15">
                  Design standard: SAP Fiori Horizon &amp; Clean Core
                </div>
              </div>
            </div>

            {/* Architecture Details from Solution */}
            {project.architectureDetails && project.architectureDetails.length > 0 && (
              <div className="p-4 rounded-xl bg-[#080d16] border border-white/[0.06] space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#3884ff]" />
                  <span>Architecture Specifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#0d1524] p-2.5 rounded-lg border border-white/[0.04]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 04 — My Contribution */}
            <div className="p-5 rounded-xl bg-[#0d1422] border border-[#3884ff]/30 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3884ff] tracking-wider uppercase">
                <UserCheck className="w-4 h-4 text-[#3884ff]" />
                <span>04 — My Contribution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {project.keyContribution}
              </p>
            </div>

            {/* 05 — Technology */}
            <div className="p-5 rounded-xl bg-[#0d1422] border border-white/[0.07] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase">
                <Cpu className="w-4 h-4 text-[#3884ff]" />
                <span>05 — Technology</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.sapTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#141d2f] text-slate-200 border border-white/[0.08] hover:border-[#3884ff]/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 06 — Outcome */}
            <div className="p-5 rounded-xl bg-[#0b161e] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>06 — Outcome</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.outcome.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#081017] p-2.5 rounded-lg border border-emerald-500/15"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 07 — Key Learnings */}
            <div className="p-5 rounded-xl bg-[#0d1422] border border-white/[0.07] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>07 — Key Learnings</span>
              </div>
              <div className="space-y-2">
                {project.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 bg-[#080d16] p-3 rounded-lg border border-white/[0.04]"
                  >
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono text-[10px] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Footer Action */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                SAP Clean Core Certified Delivery
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#0f1726] hover:bg-[#16233b] text-white border border-white/[0.08] transition-colors flex items-center gap-1"
              >
                <span>Close Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
