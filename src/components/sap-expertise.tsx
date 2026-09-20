"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SapExpertiseItem, QualitativeSkillLevel } from "@/lib/types";
import { 
  Code2, 
  LayoutDashboard, 
  Layers, 
  Network, 
  Server, 
  Cpu, 
  Terminal, 
  Database, 
  Radio, 
  AppWindow, 
  Cloud, 
  ArrowDown, 
  Workflow, 
  Grid3X3, 
  Sparkles
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  RevealOnScroll 
} from "@/components/ui";

export function SapExpertise() {
  const { sapExpertise } = portfolioData;
  const [viewMode, setViewMode] = useState<"cards" | "ecosystem">("ecosystem");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Radio: <Radio className="w-5 h-5" />,
    AppWindow: <AppWindow className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
  };

  const levelStyles: Record<QualitativeSkillLevel, { badge: string; dot: string }> = {
    "Core Expertise": {
      badge: "bg-[#0a6ed1]/15 text-[#3884ff] border-[#3884ff]/30",
      dot: "bg-[#0a6ed1]",
    },
    "Professional Experience": {
      badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      dot: "bg-emerald-400",
    },
    "Working Knowledge": {
      badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      dot: "bg-purple-400",
    },
  };

  const levels = ["All", "Core Expertise", "Professional Experience", "Working Knowledge"];

  const filteredCards = selectedLevel === "All"
    ? sapExpertise
    : sapExpertise.filter((item) => item.qualitativeLevel === selectedLevel);

  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#0a6ed1]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <SectionEyebrow number="02" title="SAP ECOSYSTEM" />
            <Heading2>
              Built Around the SAP Ecosystem
            </Heading2>
            <SmallText className="max-w-2xl text-slate-400">
              End-to-end architectural mastery across user experience, integration services, core data modeling, and cloud extension runtimes.
            </SmallText>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0c111a] rounded-xl border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => setViewMode("ecosystem")}
              className={`flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg transition-all duration-150 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                viewMode === "ecosystem"
                  ? "bg-[#0a6ed1] text-white shadow-sm shadow-[#0a6ed1]/40"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Ecosystem Architecture Map</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg transition-all duration-150 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                viewMode === "cards"
                  ? "bg-[#0a6ed1] text-white shadow-sm shadow-[#0a6ed1]/40"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>All Technology Cards ({sapExpertise.length})</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Visual Technology Ecosystem Map (Visual Relationships) */}
        {viewMode === "ecosystem" && (
          <div className="space-y-12">
            {/* Pathway 1: S/4HANA & Core ERP Full-Stack Pathway */}
            <RevealOnScroll className="p-6 sm:p-8 rounded-3xl bg-[#0c111a] border border-white/[0.08] relative overflow-hidden space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono text-[#3884ff] uppercase tracking-wider block">
                    Architectural Pathway 01
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    On-Premise &amp; S/4HANA Enterprise Stack
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  SAPUI5 &rarr; OData &rarr; ABAP / CDS &rarr; SAP Gateway &rarr; Fiori Launchpad
                </span>
              </div>

              {/* Connected Pathway Steps */}
              <div className="space-y-6 relative">
                {/* Step 1: Presentation & UI Layer */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#0a6ed1]" />
                    <span>Layer 1: Enterprise Presentation &amp; Custom UI</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sapExpertise
                      .filter((item) => ["sapui5", "sap-fiori", "fiori-elements"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                  </div>
                </div>

                {/* Flow Connector Line */}
                <div className="flex items-center justify-center py-1 text-slate-600">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#070a0f] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5 text-[#3884ff] animate-bounce" />
                    <span>OData Protocol Request &amp; Consumption</span>
                  </div>
                </div>

                {/* Step 2: Integration & Protocol Layer */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Layer 2: Service Enablement &amp; Data Transport</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sapExpertise
                      .filter((item) => ["odata", "sap-gateway"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                  </div>
                </div>

                {/* Flow Connector Line */}
                <div className="flex items-center justify-center py-1 text-slate-600">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#070a0f] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                    <span>CDS Data Modeling &amp; RAP Business Logic Execution</span>
                  </div>
                </div>

                {/* Step 3: Backend & Data Tier */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>Layer 3: Core ERP Backend &amp; HANA Data Modeling</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sapExpertise
                      .filter((item) => ["abap", "cds", "sap-rap"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                  </div>
                </div>

                {/* Flow Connector Line */}
                <div className="flex items-center justify-center py-1 text-slate-600">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#070a0f] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
                    <span>Unified Enterprise Portal Hosting</span>
                  </div>
                </div>

                {/* Step 4: Enterprise Launchpad Shell */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Layer 4: Universal Launchpad Shell &amp; Workzone</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {sapExpertise
                      .filter((item) => ["fiori-launchpad"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Pathway 2: Cloud Native & SAP BTP Clean Core Pathway */}
            <RevealOnScroll className="p-6 sm:p-8 rounded-3xl bg-[#0c111a] border border-white/[0.08] relative overflow-hidden space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                    Architectural Pathway 02
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Cloud-Native &amp; Side-by-Side Extensions
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  CAP &rarr; BTP &rarr; Cloud Applications
                </span>
              </div>

              <div className="space-y-6">
                {/* Step 1: CAP */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>Step 1: Cloud Application Programming (CAP)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sapExpertise
                      .filter((item) => ["sap-cap"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                    <div className="p-5 rounded-2xl bg-[#0f1624] border border-white/[0.06] flex flex-col justify-center space-y-2 text-xs text-slate-400">
                      <div className="text-white font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>Node.js / TypeScript CDS Services</span>
                      </div>
                      <p>
                        Building decoupled microservices consuming S/4HANA APIs with automated JWT authentication and Event Mesh integration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow Connector Line */}
                <div className="flex items-center justify-center py-1 text-slate-600">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#070a0f] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    <ArrowDown className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
                    <span>BTP Cloud Foundry / Kyma Deployment &amp; Tunneling</span>
                  </div>
                </div>

                {/* Step 2: SAP BTP */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#0a6ed1]" />
                    <span>Step 2: SAP Business Technology Platform (BTP)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sapExpertise
                      .filter((item) => ["sap-btp"].includes(item.id))
                      .map((item) => (
                        <ExpertiseCardItem key={item.id} item={item} iconMap={iconMap} levelStyles={levelStyles} />
                      ))}
                    <div className="p-5 rounded-2xl bg-[#0f1624] border border-white/[0.06] flex flex-col justify-center space-y-2 text-xs text-slate-400">
                      <div className="text-white font-semibold flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-[#3884ff]" />
                        <span>Enterprise Clean Core Foundation</span>
                      </div>
                      <p>
                        Decoupling custom extensions from the core ERP system via Cloud Connector, Destination Service, and Identity Authentication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        )}

        {/* VIEW 2: Complete Technology Cards Grid */}
        {viewMode === "cards" && (
          <div className="space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Proficiency Tier:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  aria-pressed={selectedLevel === lvl}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                    selectedLevel === lvl
                      ? "bg-[#0a6ed1] text-white shadow-sm shadow-[#0a6ed1]/40"
                      : "bg-[#0c111a] text-slate-400 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((item) => (
                <RevealOnScroll key={item.id}>
                  <ExpertiseCardItem item={item} iconMap={iconMap} levelStyles={levelStyles} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* Sub-component: Reusable Technology Card */
function ExpertiseCardItem({
  item,
  iconMap,
  levelStyles,
}: {
  item: SapExpertiseItem;
  iconMap: Record<string, React.ReactNode>;
  levelStyles: Record<QualitativeSkillLevel, { badge: string; dot: string }>;
}) {
  const currentStyle = levelStyles[item.qualitativeLevel] || levelStyles["Core Expertise"];

  return (
    <div className="p-5 rounded-2xl bg-[#0f1624] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#141e30] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-md">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

      <div className="space-y-3.5">
        {/* Header: Icon, Name & Qualitative Level */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#141e30] border border-white/[0.08] text-[#3884ff] group-hover:text-white group-hover:bg-[#0a6ed1] transition-colors shadow-sm shrink-0">
              {iconMap[item.icon] || <Code2 className="w-5 h-5" />}
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#3884ff] transition-colors">
                {item.title}
              </h4>
              <span className="text-[11px] font-mono text-slate-400">
                {item.category}
              </span>
            </div>
          </div>

          {/* Qualitative Level Badge (No fake percentage bars!) */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border shrink-0 ${currentStyle.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentStyle.dot}`} />
            <span>{item.qualitativeLevel}</span>
          </span>
        </div>

        {/* Concise Explanation */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {item.conciseExplanation}
        </p>

        {/* Related Concepts */}
        <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
            Related Concepts
          </span>
          <div className="flex flex-wrap gap-1.5">
            {item.relatedConcepts.map((concept) => (
              <span
                key={concept}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0e17] text-slate-300 border border-white/[0.05]"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
