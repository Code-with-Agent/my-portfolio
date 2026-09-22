"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  CheckCircle2, 
  Sparkles,
  Zap,
  Code2,
  Layers,
  Database,
  Terminal,
  ShieldCheck,
} from "lucide-react";

interface HeroSkill {
  id: string;
  name: string;
  category: string;
  highlight: string;
  badge: string;
  icon: React.ElementType;
  accentColor: string;
  iconBg: string;
  badgeBg: string;
  borderHover: string;
  glowColor: string;
}

const SKILLS_COL1: HeroSkill[] = [
  {
    id: "sapui5",
    name: "SAPUI5",
    category: "Core UI",
    highlight: "XML Views • MVC • Controls",
    badge: "Custom Apps",
    icon: Code2,
    accentColor: "text-[#3884ff]",
    iconBg: "bg-[#0a6ed1]/20 text-[#3884ff]",
    badgeBg: "bg-[#0a6ed1]/10 text-[#3884ff] border-[#3884ff]/25",
    borderHover: "hover:border-[#3884ff]/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(56,132,255,0.22)]",
  },
  {
    id: "fiori-elements",
    name: "Fiori Elements",
    category: "Floorplans",
    highlight: "List Report • Object Page",
    badge: "v4 Metadata",
    icon: Layers,
    accentColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    borderHover: "hover:border-emerald-400/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(16,185,129,0.22)]",
  },
  {
    id: "abap-rap",
    name: "ABAP RAP",
    category: "Backend",
    highlight: "CDS Views • Behavior Defs",
    badge: "Clean Core",
    icon: Terminal,
    accentColor: "text-amber-400",
    iconBg: "bg-amber-500/20 text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/25",
    borderHover: "hover:border-amber-400/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(245,158,11,0.22)]",
  },
];

const SKILLS_COL2: HeroSkill[] = [
  {
    id: "sap-fiori",
    name: "SAP Fiori",
    category: "Design System",
    highlight: "Horizon UX • WCAG 2.1 AA",
    badge: "Role-Based",
    icon: Sparkles,
    accentColor: "text-cyan-400",
    iconBg: "bg-cyan-500/20 text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    borderHover: "hover:border-cyan-400/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(6,182,212,0.22)]",
  },
  {
    id: "odata",
    name: "OData v4",
    category: "Integration",
    highlight: "$batch • Deep Inserts",
    badge: "REST Protocol",
    icon: Database,
    accentColor: "text-sky-400",
    iconBg: "bg-sky-500/20 text-sky-400",
    badgeBg: "bg-sky-500/10 text-sky-300 border-sky-500/25",
    borderHover: "hover:border-sky-400/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(14,165,233,0.22)]",
  },
  {
    id: "sap-cap",
    name: "SAP CAP & BTP",
    category: "Cloud Native",
    highlight: "Kyma • Cloud Foundry",
    badge: "Microservices",
    icon: Zap,
    accentColor: "text-purple-400",
    iconBg: "bg-purple-500/20 text-purple-400",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/25",
    borderHover: "hover:border-purple-400/60",
    glowColor: "group-hover:shadow-[0_0_24px_rgba(168,85,247,0.22)]",
  },
];

export function HeroVisualization() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Staggered floating variants for each small card
  const floatVariants = [
    shouldReduceMotion
      ? {}
      : {
          y: [0, -6, 0],
          transition: { duration: 4.6, repeat: Infinity, ease: "easeInOut" as const },
        },
    shouldReduceMotion
      ? {}
      : {
          y: [0, 6, 0],
          transition: { duration: 5.2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 },
        },
    shouldReduceMotion
      ? {}
      : {
          y: [0, -5, 0],
          transition: { duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 },
        },
    shouldReduceMotion
      ? {}
      : {
          y: [0, 7, 0],
          transition: { duration: 5.0, repeat: Infinity, ease: "easeInOut" as const, delay: 0.4 },
        },
    shouldReduceMotion
      ? {}
      : {
          y: [0, -6, 0],
          transition: { duration: 4.4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 },
        },
    shouldReduceMotion
      ? {}
      : {
          y: [0, 5, 0],
          transition: { duration: 5.4, repeat: Infinity, ease: "easeInOut" as const, delay: 1.1 },
        },
  ];

  const renderSkillCard = (skill: HeroSkill, variantIndex: number) => {
    const Icon = skill.icon;
    const isHovered = hoveredSkill === skill.id;

    return (
      <motion.div
        key={skill.id}
        animate={floatVariants[variantIndex]}
        className={`group relative p-2.5 sm:p-3.5 rounded-xl bg-gradient-to-b from-[#0e1726]/92 via-[#0b1220]/92 to-[#070c16]/96 backdrop-blur-md border ${
          isHovered ? "border-[#3884ff]/70" : "border-white/[0.08]"
        } ${skill.borderHover} ${skill.glowColor} shadow-lg shadow-black/60 hover:scale-[1.03] transition-all duration-300 select-none cursor-default`}
        onMouseEnter={() => setHoveredSkill(skill.id)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {/* Top row: Icon + Category Badge */}
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
          <div
            className={`p-1.5 rounded-lg ${skill.iconBg} transition-transform group-hover:scale-110 shrink-0`}
          >
            <Icon className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.06] shrink-0">
            {skill.category}
          </span>
        </div>

        {/* Skill Name */}
        <div className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-white transition-colors truncate">
          {skill.name}
        </div>

        {/* Micro highlight */}
        <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
          {skill.highlight}
        </div>

        {/* Bottom indicator strip */}
        <div className="mt-2 pt-1.5 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono">
          <span className="flex items-center gap-1 text-slate-300">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                skill.id === "sapui5"
                  ? "bg-[#3884ff]"
                  : skill.id === "fiori-elements"
                  ? "bg-emerald-400"
                  : skill.id === "abap-rap"
                  ? "bg-amber-400"
                  : skill.id === "sap-fiori"
                  ? "bg-cyan-400"
                  : skill.id === "odata"
                  ? "bg-sky-400"
                  : "bg-purple-400"
              }`}
            />
            <span className="text-slate-400 truncate">{skill.badge}</span>
          </span>
          <span className="text-emerald-400 font-medium flex items-center gap-0.5">
            <CheckCircle2 className="w-2.5 h-2.5" />
            <span>Active</span>
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[480px] lg:max-w-none mx-auto min-h-[440px] sm:min-h-[480px] flex flex-col justify-center select-none py-2"
    >
      {/* Background blueprint grid specific to the visual */}
      <div className="absolute inset-0 sap-grid-fine opacity-50 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />

      {/* Ambient radial glow behind the cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-[#0a6ed1]/15 via-[#3884ff]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Top Header Pill */}
      <div className="relative z-10 flex items-center justify-center mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527]/90 border border-white/[0.1] backdrop-blur-md shadow-md text-[10px] sm:text-[11px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] animate-ping" />
          <span className="text-white font-semibold">Technical Expertise</span>
          <span className="text-slate-500">&bull;</span>
          <span className="text-[#3884ff]">Clean Core Architecture</span>
        </div>
      </div>

      {/* Staggered 2-Column Grid of Small Hovering Cards */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3.5">
        {/* Column 1 */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {SKILLS_COL1.map((skill, idx) => renderSkillCard(skill, idx))}
        </div>

        {/* Column 2 (staggered with subtle vertical shift on sm+) */}
        <div className="space-y-2.5 sm:space-y-3.5 sm:translate-y-4">
          {SKILLS_COL2.map((skill, idx) => renderSkillCard(skill, idx + 3))}
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 mt-3 sm:mt-5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1 text-slate-300">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>S/4HANA &bull; SAP BTP</span>
        </span>
        <span className="flex items-center gap-1 text-[#3884ff]">
          <Terminal className="w-3 h-3" />
          <span>UI5 Tooling &bull; BAS</span>
        </span>
      </div>
    </div>
  );
}
