"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { AchievementCategory } from "@/lib/types";
import { 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Award, 
  Trophy, 
  Milestone, 
  Users, 
  Share2, 
  Sparkles,
  TrendingUp,
  FileBadge2
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText 
} from "@/components/ui";

type ViewTab = "all" | "certifications" | "achievements";

export function Certifications() {
  const { certifications, achievements = [] } = portfolioData;
  const [activeTab, setActiveTab] = useState<ViewTab>("all");
  const [achievementFilter, setAchievementFilter] = useState<string>("All");

  const achievementCategories: string[] = [
    "All",
    "Award",
    "Recognition",
    "Major Milestone",
    "Leadership Contribution",
    "Knowledge Sharing",
  ];

  const filteredAchievements = achievementFilter === "All"
    ? achievements
    : achievements.filter((ach) => ach.category === achievementFilter);

  // Helper for achievement category icon & styling
  const getAchievementMeta = (category: AchievementCategory) => {
    switch (category) {
      case "Award":
        return {
          icon: Trophy,
          badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          iconColor: "text-amber-400",
          accentColor: "#f59e0b",
        };
      case "Recognition":
        return {
          icon: Award,
          badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          iconColor: "text-emerald-400",
          accentColor: "#10b981",
        };
      case "Major Milestone":
        return {
          icon: Milestone,
          badgeColor: "bg-[#0a6ed1]/20 text-[#3884ff] border-[#3884ff]/30",
          iconColor: "text-[#3884ff]",
          accentColor: "#3884ff",
        };
      case "Leadership Contribution":
        return {
          icon: Users,
          badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
          iconColor: "text-purple-400",
          accentColor: "#a855f7",
        };
      case "Knowledge Sharing":
        return {
          icon: Share2,
          badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          iconColor: "text-cyan-400",
          accentColor: "#06b6d4",
        };
      default:
        return {
          icon: Sparkles,
          badgeColor: "bg-slate-500/15 text-slate-300 border-slate-500/30",
          iconColor: "text-slate-400",
          accentColor: "#64748b",
        };
    }
  };

  return (
    <section id="certifications" className="py-24 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#3884ff]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-3xl">
            <SectionEyebrow number="07" title="CREDENTIALS & RECOGNITION" />
            <Heading2>
              Certifications &amp; Professional Achievements
            </Heading2>
            <SmallText className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Official SAP certifications, enterprise delivery awards, and leadership milestones demonstrating hands-on technical mastery and Clean Core excellence.
            </SmallText>
          </div>

          {/* Primary View Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#0a0f18] border border-white/[0.08] shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveTab("all")}
              aria-pressed={activeTab === "all"}
              className={`relative px-4 py-2 text-xs font-medium rounded-xl transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] cursor-pointer ${
                activeTab === "all" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "all" && (
                <motion.div
                  layoutId="activeCertTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0a6ed1] to-[#3884ff] shadow-md shadow-[#0a6ed1]/30 border border-[#3884ff]/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>All ({certifications.length + achievements.length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              aria-pressed={activeTab === "certifications"}
              className={`relative px-4 py-2 text-xs font-medium rounded-xl transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] cursor-pointer ${
                activeTab === "certifications" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "certifications" && (
                <motion.div
                  layoutId="activeCertTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0a6ed1] to-[#3884ff] shadow-md shadow-[#0a6ed1]/30 border border-[#3884ff]/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <FileBadge2 className="w-3.5 h-3.5" />
                <span>SAP Certifications ({certifications.length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("achievements")}
              aria-pressed={activeTab === "achievements"}
              className={`relative px-4 py-2 text-xs font-medium rounded-xl transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] cursor-pointer ${
                activeTab === "achievements" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "achievements" && (
                <motion.div
                  layoutId="activeCertTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0a6ed1] to-[#3884ff] shadow-md shadow-[#0a6ed1]/30 border border-[#3884ff]/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>Achievements ({achievements.length})</span>
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            SECTION 1: OFFICIAL SAP CERTIFICATIONS
           ========================================================= */}
        {(activeTab === "all" || activeTab === "certifications") && (
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-white uppercase tracking-wider">
                <FileBadge2 className="w-4 h-4 text-[#3884ff]" />
                <span>Official SAP Certifications</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Verified Credly Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.article
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg shadow-black/20"
                >
                  {/* Subtle top ambient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

                  <div className="space-y-4">
                    {/* Top Row: Category, Active Status & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#0a6ed1]/20 text-[#3884ff] border border-[#3884ff]/30">
                          {cert.badgeText}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {cert.status || "Active"}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {cert.issueDate || cert.issueYear}
                      </span>
                    </div>

                    {/* Certification Name */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#3884ff] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Issuer & Monospace Credential ID */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono bg-[#070b12] p-2.5 rounded-xl border border-white/[0.05]">
                      <div className="text-slate-300">
                        <span className="text-slate-500">Issuer:</span>{" "}
                        <span className="text-white font-semibold">{cert.issuer}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="px-2 py-0.5 rounded bg-white/[0.06] text-[#3884ff] font-bold border border-white/[0.08]">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills pills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b2c] text-slate-300 border border-white/[0.05]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Verification Link */}
                  {cert.verifyUrl && (
                    <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3884ff] hover:text-white transition-colors group/link"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover/link:scale-110 transition-transform" />
                        <span>Verify Credential on Credly</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70 group-hover/link:opacity-100" />
                      </a>
                      <span className="text-[10px] font-mono text-slate-500">
                        SAP Global Certification
                      </span>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================
            SECTION 2: ACHIEVEMENTS & RECOGNITION
           ========================================================= */}
        {(activeTab === "all" || activeTab === "achievements") && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-white uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Major Achievements, Honors &amp; Leadership</span>
              </div>

              {/* Sub-filter for achievements */}
              <div className="flex flex-wrap gap-1.5">
                {achievementCategories.map((cat) => {
                  const isSelected = achievementFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setAchievementFilter(cat)}
                      aria-pressed={isSelected}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                        isSelected
                          ? "bg-[#0a6ed1] text-white font-semibold"
                          : "bg-[#0a0f18] text-slate-400 hover:text-white border border-white/[0.06]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredAchievements.map((ach) => {
                  const meta = getAchievementMeta(ach.category);
                  const Icon = meta.icon;

                  return (
                    <motion.article
                      key={ach.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg shadow-black/20"
                    >
                      <div className="space-y-4">
                        {/* Top Category Badge & Year */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${meta.badgeColor}`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${meta.iconColor}`} />
                            <span>{ach.badgeText}</span>
                          </span>

                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            {ach.year}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-white group-hover:text-[#3884ff] transition-colors leading-snug">
                            {ach.title}
                          </h3>
                          <div className="text-xs font-mono text-slate-400">
                            {ach.organization}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {ach.description}
                        </p>

                        {/* Impact Highlight Box */}
                        {ach.impact && (
                          <div className="p-3 rounded-xl bg-[#070b12] border border-emerald-500/20 space-y-1">
                            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1 font-semibold">
                              <TrendingUp className="w-3 h-3" />
                              <span>Measurable Impact</span>
                            </div>
                            <div className="text-xs text-slate-200 font-medium leading-snug">
                              {ach.impact}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer Highlight Pills */}
                      {ach.highlightPills && ach.highlightPills.length > 0 && (
                        <div className="pt-4 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                          {ach.highlightPills.map((pill, pIdx) => (
                            <span
                              key={pIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b2c] text-slate-300 border border-white/[0.05]"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
