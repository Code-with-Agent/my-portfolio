"use client";

import React from "react";
import { 
  Plane, 
  Barcode, 
  Wifi, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Boxes, 
  Layers, 
  CheckCircle2, 
  Workflow, 
  ArrowRight,
  TrendingDown
} from "lucide-react";

interface ProjectVisualIdentifierProps {
  projectId: string;
  className?: string;
}

export function ProjectVisualIdentifier({ projectId, className = "" }: ProjectVisualIdentifierProps) {
  switch (projectId) {
    case "global-logistics-portal":
      return (
        <div className={`relative h-48 w-full bg-[#080d17] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none group/visual ${className}`}>
          {/* Subtle background radar grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1c3a63_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
          
          {/* Top Status Header */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 text-[#3884ff]">
              <Plane className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">RAMP OPS // HUB-14 FRA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                BTP SYNC
              </span>
              <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-[10px] text-slate-300">
                GATE C14
              </span>
            </div>
          </div>

          {/* Center: Laser Barcode Scan Beam & Flight Card */}
          <div className="relative z-10 py-1 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white font-semibold">FLT LH-8420 • B777F CARGO</span>
              <span className="text-slate-400 text-[10px]">MANIFEST 42/48 LOADED</span>
            </div>

            {/* Simulated Active Scanner Box */}
            <div className="relative h-14 rounded-lg bg-[#0c1424] border border-[#3884ff]/30 p-2 overflow-hidden flex items-center justify-between">
              {/* Animated laser beam */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-r from-transparent via-[#3884ff] to-cyan-400 opacity-90 shadow-[0_0_12px_#3884ff] animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              
              <div className="flex items-center gap-2">
                <Barcode className="w-8 h-8 text-[#3884ff] opacity-80" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Scanned Pallet</div>
                  <div className="text-xs font-bold text-white tracking-widest">PLT-89240-HAZ9</div>
                </div>
              </div>

              <div className="text-right">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  BALANCED
                </span>
                <div className="text-[10px] text-slate-400 mt-0.5">3,420 KG • DGR CL-9</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Touch ergonomics indicators */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span className="flex items-center gap-1 text-slate-400">
              <Wifi className="w-3 h-3 text-[#3884ff]" />
              IndexedDB Offline Ready
            </span>
            <span className="text-slate-500">ZEBRA DATAWEDGE INTENT</span>
          </div>
        </div>
      );

    case "procurement-analytics-platform":
      return (
        <div className={`relative h-48 w-full bg-[#090e18] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none group/visual ${className}`}>
          {/* Top Bar: Fiori ALP Header */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 text-[#3884ff]">
              <BarChart3 className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">FIORI ALP // SPEND COCKPIT</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
              <TrendingDown className="w-3 h-3" />
              <span>-4.2% VARIANCE</span>
            </div>
          </div>

          {/* Visual Filter Mini Bar Representation */}
          <div className="relative z-10 space-y-2 py-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300">Total Run-Rate:</span>
              <span className="text-white font-bold text-sm">€850,420,000</span>
            </div>

            {/* Visual Mini Chart Bars */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#0f172a] p-1.5 rounded border border-white/[0.06]">
                <div className="text-[9px] text-slate-400">DIRECT</div>
                <div className="text-[11px] font-semibold text-[#3884ff]">€510M</div>
                <div className="w-full h-1 bg-white/[0.1] rounded-full mt-1 overflow-hidden">
                  <div className="w-[72%] h-full bg-[#3884ff] rounded-full" />
                </div>
              </div>
              <div className="bg-[#0f172a] p-1.5 rounded border border-white/[0.06]">
                <div className="text-[9px] text-slate-400">INDIRECT</div>
                <div className="text-[11px] font-semibold text-emerald-400">€230M</div>
                <div className="w-full h-1 bg-white/[0.1] rounded-full mt-1 overflow-hidden">
                  <div className="w-[45%] h-full bg-emerald-400 rounded-full" />
                </div>
              </div>
              <div className="bg-[#0f172a] p-1.5 rounded border border-white/[0.06]">
                <div className="text-[9px] text-slate-400">CAPEX</div>
                <div className="text-[11px] font-semibold text-amber-400">€110M</div>
                <div className="w-full h-1 bg-white/[0.1] rounded-full mt-1 overflow-hidden">
                  <div className="w-[28%] h-full bg-amber-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Synchronized row preview */}
            <div className="flex items-center justify-between px-2 py-1 rounded bg-[#0c1424] border border-white/[0.04] text-[10px]">
              <span className="text-slate-300 truncate">PO-9041 • High Precision Bearings</span>
              <span className="text-emerald-400 shrink-0 font-medium">AUTO-APPROVED</span>
            </div>
          </div>

          {/* Bottom Bar: Architecture */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/[0.04]">
            <span>CDS ANALYTICAL VIEWS</span>
            <span className="text-slate-400">SAP CAP ON BTP</span>
          </div>
        </div>
      );

    case "warehouse-scanner-app":
      return (
        <div className={`relative h-48 w-full bg-[#060a12] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none group/visual ${className}`}>
          {/* Top Bar: Sub-Zero Cold Store Telemetry */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Boxes className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">EWM PICKER // COLD-STORE D</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 text-[10px] border border-cyan-800/40">
              -20.4°C AMBIENT
            </span>
          </div>

          {/* Center: High-contrast massive touch buttons */}
          <div className="relative z-10 space-y-2 py-1">
            <div className="flex items-center justify-between text-[11px] text-slate-300">
              <span>TARGET BIN:</span>
              <span className="text-amber-400 font-bold text-sm tracking-wider">ZONE-D // 18-04-B</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-[#0e1726] border border-cyan-500/30 text-center flex flex-col justify-center">
                <span className="text-[10px] text-slate-400">BATCH REQUIRED</span>
                <span className="text-xs font-bold text-white tracking-wider">BT-99402-EXP</span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center flex flex-col justify-center">
                <span className="text-[10px] text-emerald-400 font-medium flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> AUDIO CONFIRMED
                </span>
                <span className="text-xs font-bold text-white">24 / 24 CASES</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Touch Target Spec */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/[0.04]">
            <span className="text-slate-400 flex items-center gap-1">
              <Radio className="w-3 h-3 text-cyan-400" />
              Haptic Audio API (800Hz)
            </span>
            <span>64PX GLOVE TARGETS</span>
          </div>
        </div>
      );

    case "employee-self-service-portal":
      return (
        <div className={`relative h-48 w-full bg-[#080d18] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none group/visual ${className}`}>
          {/* Top Bar: SAP Build Workzone */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 text-[#3884ff]">
              <Workflow className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">SAP WORKZONE // HR CORE</span>
            </div>
            <span className="text-[10px] text-slate-400">45,000+ USERS</span>
          </div>

          {/* Center: Dynamic Employee Tiles & Org Hierarchy */}
          <div className="relative z-10 grid grid-cols-3 gap-2 py-1">
            {/* Tile 1: Vacation */}
            <div className="p-2 rounded-lg bg-[#0e1628] border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">LEAVE BALANCE</span>
              <div className="text-base font-bold text-white">24.5<span className="text-[10px] text-slate-400 font-normal">d</span></div>
              <span className="text-[9px] text-emerald-400">Accrued 2026</span>
            </div>

            {/* Tile 2: Org Visualizer snippet */}
            <div className="p-2 rounded-lg bg-[#0e1628] border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">ORG TREE</span>
              <div className="flex items-center justify-center gap-1 py-1">
                <span className="w-3 h-3 rounded bg-[#3884ff]/40 border border-[#3884ff] flex items-center justify-center text-[7px] text-white">VP</span>
                <ArrowRight className="w-2.5 h-2.5 text-slate-500" />
                <span className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-400 flex items-center justify-center text-[7px] text-white">TL</span>
              </div>
              <span className="text-[9px] text-slate-400">Accessible SVG</span>
            </div>

            {/* Tile 3: SSO & Mobility */}
            <div className="p-2 rounded-lg bg-[#0e1628] border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">SECURITY</span>
              <div className="text-[11px] font-bold text-emerald-400">WCAG 2.1</div>
              <span className="text-[9px] text-slate-400">Azure AD SSO</span>
            </div>
          </div>

          {/* Bottom Bar: Integration details */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/[0.04]">
            <span>SUCCESSFACTORS &bull; SAP HCM</span>
            <span className="text-[#3884ff]">BTP APPROUTER</span>
          </div>
        </div>
      );

    case "clean-core-rap-procurement":
      return (
        <div className={`relative h-48 w-full bg-[#070b14] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none group/visual ${className}`}>
          {/* Top Bar: Clean Core Architecture Header */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">ABAP CLOUD // RAP BDEF</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-semibold border border-amber-500/20">
              CLEAN CORE TIER-1
            </span>
          </div>

          {/* Center: 3-Layer Architectural Stack */}
          <div className="relative z-10 space-y-1.5 py-1">
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-[#0f172a] border border-white/[0.06] text-[10px]">
              <span className="text-slate-400">UI CONSUMPTION</span>
              <span className="text-white font-medium">Fiori Elements Object Page (v4)</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-[#131d33] border border-[#3884ff]/30 text-[10px]">
              <span className="text-[#3884ff] font-semibold">RAP MODEL</span>
              <span className="text-slate-200">Behavior Def + Draft Orchestration</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded bg-[#0f172a] border border-white/[0.06] text-[10px]">
              <span className="text-slate-400">DATA TIER</span>
              <span className="text-emerald-400 font-medium">CDS Entity + Standard Released APIs</span>
            </div>
          </div>

          {/* Bottom Bar: Clean Core Guarantee */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/[0.04]">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              0 Custom Core Modifications
            </span>
            <span className="text-slate-400">S/4HANA 2022</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative h-48 w-full bg-[#090e18] rounded-xl overflow-hidden border border-white/[0.08] p-4 flex flex-col justify-between font-mono select-none ${className}`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-[#3884ff] font-semibold">ENTERPRISE APPLICATION</span>
            <span>SAP ECOSYSTEM</span>
          </div>
          <div className="flex items-center justify-center">
            <Layers className="w-10 h-10 text-[#3884ff] opacity-40" />
          </div>
          <div className="text-[10px] text-slate-500 text-center">PRODUCTION ARCHITECTURE</div>
        </div>
      );
  }
}
