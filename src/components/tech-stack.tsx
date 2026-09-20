"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Laptop, 
  Database, 
  Wrench, 
  Layers
} from "lucide-react";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  MetadataText, 
  RevealOnScroll 
} from "@/components/ui";

export function TechStack() {
  const { techStack } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabIcons: Record<string, React.ReactNode> = {
    frontend: <Laptop className="w-4 h-4" />,
    sap: <Database className="w-4 h-4" />,
    "cloud-tools": <Wrench className="w-4 h-4" />,
  };

  const displayedStacks = activeTab === "all" 
    ? techStack 
    : techStack.filter(s => s.id === activeTab);

  return (
    <section id="tech-stack" className="py-20 md:py-24 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#3884ff]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <SectionEyebrow number="03" title="TECHNOLOGY ECOSYSTEM" />
            <Heading2>
              Enterprise Technology Stack
            </Heading2>
            <SmallText className="max-w-2xl text-slate-400">
              A comprehensive view of the languages, frameworks, runtime environments, and developer tooling utilized in production.
            </SmallText>
          </div>

          {/* Tab Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0c111a] rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setActiveTab("all")}
              aria-pressed={activeTab === "all"}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-150 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                activeTab === "all"
                  ? "bg-[#0a6ed1] text-white shadow-sm shadow-[#0a6ed1]/40"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              All Domains
            </button>
            {techStack.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                aria-pressed={activeTab === category.id}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-150 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] ${
                  activeTab === category.id
                    ? "bg-[#0a6ed1] text-white shadow-sm shadow-[#0a6ed1]/40"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {tabIcons[category.id]}
                <span>{category.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stack Categories Grid */}
        <div className="space-y-10">
          {displayedStacks.map((category) => (
            <RevealOnScroll
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c111a] border border-white/[0.08] relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#141e30] text-[#3884ff] border border-white/[0.08]">
                    {tabIcons[category.id] || <Layers className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.label}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <MetadataText as="div">
                  {category.items.length} Technologies
                </MetadataText>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0f1624] border border-white/[0.06] hover:border-[#3884ff]/40 hover:bg-[#141e30] transition-all duration-200 group cursor-default"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-semibold text-white group-hover:text-[#3884ff] transition-colors">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.focus}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
