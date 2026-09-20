"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  TrendingUp, 
  CheckCircle2, 
  Workflow, 
  ShoppingCart, 
  BarChart3, 
  Sparkles,
  Zap
} from "lucide-react";

export function HeroVisualization() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Subtle float variants
  const floatVariant1 = shouldReduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const floatVariant2 = shouldReduceMotion
    ? {}
    : {
        y: [0, 8, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 0.5,
        },
      };

  const floatVariant3 = shouldReduceMotion
    ? {}
    : {
        y: [0, -7, 0],
        transition: {
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        },
      };

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[540px] lg:max-w-none mx-auto min-h-[460px] sm:min-h-[500px] flex items-center justify-center select-none"
    >
      {/* Background blueprint grid specific to the visual */}
      <div className="absolute inset-0 sap-grid-fine opacity-60 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />

      {/* SVG Background Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-white/[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a6ed1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3884ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a6ed1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Dynamic connection lines between nodes */}
        <line
          x1="50%"
          y1="50%"
          x2="18%"
          y2="20%"
          stroke="url(#lineGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="50%"
          y1="50%"
          x2="82%"
          y2="18%"
          stroke="url(#lineGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="50%"
          y1="50%"
          x2="15%"
          y2="82%"
          stroke="url(#lineGrad2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="50%"
          y1="50%"
          x2="85%"
          y2="82%"
          stroke="url(#lineGrad2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Tech Anchor Pills Floating Along Perimeters */}
      <div className="absolute top-2 left-6 z-20">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1624]/90 backdrop-blur-sm border border-[#3884ff]/30 text-[10px] font-mono text-[#3884ff] shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a6ed1] animate-ping" />
          SAPUI5
        </span>
      </div>

      <div className="absolute top-4 right-8 z-20">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1624]/90 backdrop-blur-sm border border-emerald-500/30 text-[10px] font-mono text-emerald-400 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          OData v4
        </span>
      </div>

      <div className="absolute bottom-8 left-4 z-20">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1624]/90 backdrop-blur-sm border border-purple-500/30 text-[10px] font-mono text-purple-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          SAP CAP
        </span>
      </div>

      <div className="absolute bottom-10 right-6 z-20">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1624]/90 backdrop-blur-sm border border-amber-500/30 text-[10px] font-mono text-amber-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          ABAP RAP
        </span>
      </div>

      {/* Central Card: Fiori Launchpad Shell */}
      <motion.div
        animate={floatVariant1}
        className={`relative z-10 w-[92%] sm:w-[380px] rounded-2xl bg-gradient-to-b from-[#0f1624] to-[#0a0e17] border ${
          hoveredCard === "main" ? "border-[#3884ff]" : "border-white/[0.12]"
        } p-4 sm:p-5 shadow-2xl shadow-black/90 transition-all duration-300`}
        onMouseEnter={() => setHoveredCard("main")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Fiori Shell Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0a6ed1]" />
            <span className="font-semibold text-white">Fiori Launchpad</span>
            <span className="text-slate-500 text-[10px]">Spaces &bull; Workzone</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active
          </span>
        </div>

        {/* Inner Grid of Modular Enterprise Tiles */}
        <div className="space-y-2.5">
          {/* Tile 1: Analytics KPI Card */}
          <div className="p-3 rounded-xl bg-[#141e30] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-[#0a6ed1]/20 text-[#3884ff]">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-white">Spend Analytics</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                +18.4%
              </span>
            </div>
            <div className="flex items-baseline justify-between text-xs text-slate-400">
              <span className="text-base font-bold font-mono text-white tracking-tight">€4.85M</span>
              <span className="text-[10px] font-mono text-slate-500">ALP &bull; CDS Cube</span>
            </div>
          </div>

          {/* Tile 2: Sales & Fulfillment Card */}
          <div className="p-3 rounded-xl bg-[#141e30] border border-white/[0.06] hover:border-[#3884ff]/40 transition-colors">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-white">Sales Orders Today</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">1,420 Lines</span>
            </div>
            {/* Progress line */}
            <div className="w-full bg-[#0a0e17] rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0a6ed1] to-emerald-400 h-1.5 rounded-full w-[84%]" />
            </div>
          </div>

          {/* Tile 3: Workflow Approval Item */}
          <div className="p-2.5 rounded-xl bg-[#0a0e17] border border-white/[0.06] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <div className="text-[11px] text-slate-300 truncate">
                <span className="font-semibold text-white">PR #90412</span> &bull; Tier 2 Approval
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              Pending
            </span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-[#3884ff]">
            <Sparkles className="w-3 h-3" />
            <span>Fiori Horizon Standard</span>
          </span>
          <span className="text-slate-500">S/4HANA 2022</span>
        </div>
      </motion.div>

      {/* Floating Satellite Card 1: Top Right (Sales Order Detail) */}
      <motion.div
        animate={floatVariant2}
        className="hidden sm:block absolute -top-4 right-0 z-20 w-[190px] rounded-xl bg-[#0c111a]/95 backdrop-blur-md border border-white/[0.1] p-3 shadow-xl hover:border-[#3884ff]/40 transition-colors"
      >
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
          <span className="text-[#3884ff]">Outbound SO</span>
          <span className="text-emerald-400 font-semibold">99.8% SLA</span>
        </div>
        <div className="text-xs font-bold text-white tracking-tight">SO-88492-EU</div>
        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center justify-between">
          <span>Logistics Hub A</span>
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        </div>
      </motion.div>

      {/* Floating Satellite Card 2: Bottom Left (CAP / BTP Microservice) */}
      <motion.div
        animate={floatVariant3}
        className="hidden sm:block absolute -bottom-6 left-0 z-20 w-[195px] rounded-xl bg-[#0c111a]/95 backdrop-blur-md border border-white/[0.1] p-3 shadow-xl hover:border-[#3884ff]/40 transition-colors"
      >
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
          <span className="text-purple-400">SAP BTP Kyma</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="text-xs font-bold text-white tracking-tight">OrderEventConsumer</div>
        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center justify-between">
          <span>Latency: 28ms</span>
          <Zap className="w-3 h-3 text-amber-400" />
        </div>
      </motion.div>
    </div>
  );
}
