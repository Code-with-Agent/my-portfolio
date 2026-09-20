"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

/* 1. GlassCard */
export function GlassCard({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#0f1624]/75 backdrop-blur-md border border-white/[0.08] shadow-xl shadow-black/40 p-6 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* 2. FeatureCard */
interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-[#0c111a] border border-white/[0.08] hover:border-[#3884ff]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0a6ed1]/10 hover:bg-[#0f1624] p-6 transition-all duration-300 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/50 to-transparent transition-all duration-300" />
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          {icon && (
            <div className="p-2.5 rounded-xl bg-[#141e30] border border-white/[0.06] text-[#3884ff] group-hover:bg-[#0a6ed1] group-hover:text-white transition-colors shadow-sm">
              {icon}
            </div>
          )}
          {badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#141e30] text-[#3884ff] border border-[#3884ff]/30">
              {badge}
            </span>
          )}
        </div>
        <div className="text-base font-semibold text-white group-hover:text-[#3884ff] transition-colors flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

/* 3. ProjectCard */
interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  domain: string;
  type: string;
  summary: string;
  metrics: string[];
  technologies: string[];
  onExplore?: () => void;
}

export function ProjectCard({
  title,
  subtitle,
  domain,
  type,
  summary,
  metrics,
  technologies,
  onExplore,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-[#0c111a] border border-white/[0.08] hover:border-[#3884ff]/50 hover:bg-[#0f1624] p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#0a6ed1]/20 text-[#3884ff] border border-[#3884ff]/30">
            {type}
          </span>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
            {domain}
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white group-hover:text-[#3884ff] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400 font-mono">{subtitle}</p>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {summary}
        </p>

        {metrics && metrics.length > 0 && (
          <div className="p-3 rounded-xl bg-[#0a0e17] border border-white/[0.06] space-y-1">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Verified ROI</span>
            </div>
            <p className="text-xs text-slate-300 flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{metrics[0]}</span>
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#141e30] text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {onExplore && (
          <button
            onClick={onExplore}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141e30] hover:bg-[#0a6ed1] text-white text-xs font-semibold border border-white/[0.08] hover:border-[#3884ff]/50 transition-all duration-200"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/* 4. ExperienceCard */
interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  role: string;
  company: string;
  location: string;
  period: string;
  workMode: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export function ExperienceCard({
  role,
  company,
  location,
  period,
  workMode,
  isCurrent,
  summary,
  responsibilities,
  achievements,
  technologies,
  className,
  ...props
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#0c111a] border border-white/[0.08] hover:border-[#3884ff]/40 p-6 sm:p-8 transition-all duration-300 space-y-6 shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-bold text-white tracking-tight">{role}</h3>
            {isCurrent && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Current Role
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
            <span className="font-semibold text-[#3884ff]">{company}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-400">{location}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 text-[11px] font-mono">
              {workMode}
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0f1624] border border-white/[0.08] text-xs font-mono text-slate-300 shrink-0 self-start">
          {period}
        </div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] pt-4">
        {summary}
      </p>

      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] mt-2 shrink-0" />
            <span className="leading-relaxed">{resp}</span>
          </li>
        ))}
      </ul>

      {achievements && achievements.length > 0 && (
        <div className="p-4 rounded-xl bg-[#0f1624] border border-[#3884ff]/25 space-y-2">
          <div className="text-xs font-semibold text-emerald-400 font-mono uppercase tracking-wider">
            Quantified Enterprise Results
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#141e30] text-slate-300 border border-white/[0.08]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

/* 5. SkillCard */
interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  name: string;
  category: string;
  level: string;
  description: string;
  tags?: string[];
}

export function SkillCard({
  icon,
  name,
  category,
  level,
  description,
  tags,
  className,
  ...props
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-[#0c111a] border border-white/[0.08] hover:border-[#3884ff]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0a6ed1]/10 hover:bg-[#0f1624] p-6 transition-all duration-300 flex flex-col justify-between relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2.5 rounded-xl bg-[#141e30] border border-white/[0.08] text-[#3884ff] group-hover:bg-[#0a6ed1] group-hover:text-white transition-colors shadow-sm">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-white tracking-tight">{name}</h3>
              <span className="text-[11px] font-mono text-slate-400">{category}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#141e30] border border-[#3884ff]/30 text-[#3884ff] shrink-0">
            {level}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">{description}</p>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141e30]/80 text-slate-300 border border-white/[0.05] hover:border-[#3884ff]/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* 6. StatCard */
interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
  trend?: string;
}

export function StatCard({
  value,
  label,
  description,
  trend,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#0c111a] border border-white/[0.08] p-5 hover:border-[#3884ff]/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0a6ed1]/10 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
          {value}
        </span>
        {trend && (
          <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </span>
        )}
      </div>
      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
        {label}
      </div>
      {description && (
        <p className="text-[11px] text-slate-500 mt-1 leading-snug">{description}</p>
      )}
    </div>
  );
}
