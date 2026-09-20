"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, TrendingUp, TrendingDown } from "lucide-react";

/* 1. StatusBadge (Semantic Enterprise Colors) */
export type StatusType = "success" | "warning" | "info" | "neutral" | "danger";

interface StatusBadgeProps {
  status?: StatusType;
  label: string;
  className?: string;
  pulse?: boolean;
}

export function StatusBadge({ status = "info", label, className, pulse }: StatusBadgeProps) {
  const styles: Record<StatusType, string> = {
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    info: "bg-[#0a6ed1]/20 text-[#3884ff] border-[#3884ff]/30",
    neutral: "bg-white/[0.06] text-slate-300 border-white/[0.08]",
    danger: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  };

  const dotColors: Record<StatusType, string> = {
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    info: "bg-[#3884ff]",
    neutral: "bg-slate-400",
    danger: "bg-rose-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border shadow-xs",
        styles[status],
        className
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full shrink-0",
          dotColors[status],
          pulse && "animate-pulse"
        )}
      />
      <span>{label}</span>
    </span>
  );
}

/* 2. FioriTile (Modular KPI / Launchpad Tile) */
interface FioriTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
  footerText?: string;
}

export function FioriTile({
  title,
  subtitle,
  value,
  trend,
  isPositive = true,
  icon,
  footerText,
  className,
  ...props
}: FioriTileProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#0f1624] border border-white/[0.08] p-4 sm:p-5 hover:border-[#3884ff]/40 transition-all duration-200 flex flex-col justify-between space-y-3",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-0.5">
          <span className="text-xs font-semibold text-white tracking-tight line-clamp-1">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] font-mono text-slate-400 block">
              {subtitle}
            </span>
          )}
        </div>
        {icon && (
          <div className="p-1.5 rounded-lg bg-[#141e30] text-[#3884ff] border border-white/[0.06] shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
          {value}
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-[11px] font-mono font-medium">
            {isPositive ? (
              <span className="text-emerald-400 flex items-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" />
                {trend}
              </span>
            ) : (
              <span className="text-rose-400 flex items-center gap-0.5">
                <TrendingDown className="w-3.5 h-3.5" />
                {trend}
              </span>
            )}
          </div>
        )}
      </div>

      {footerText && (
        <div className="pt-2 border-t border-white/[0.06] text-[10px] text-slate-500 font-mono">
          {footerText}
        </div>
      )}
    </div>
  );
}

/* 3. CleanCoreBadge */
export function CleanCoreBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1624] border border-white/[0.08] text-xs font-mono text-slate-300 shadow-sm",
        className
      )}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-[#3884ff]" />
      <span>Clean Core Standard</span>
    </div>
  );
}

/* 4. SectionEyebrow */
interface SectionEyebrowProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionEyebrow({ number, title, className }: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1624] border border-[#3884ff]/30 text-xs font-mono text-[#3884ff] shadow-sm tracking-wider uppercase",
        className
      )}
    >
      <span>{number} &bull; {title}</span>
    </div>
  );
}
