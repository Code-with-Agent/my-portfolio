"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck,
  SendHorizontal
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { 
  SectionEyebrow, 
  Heading2, 
  SmallText, 
  RevealOnScroll
} from "@/components/ui";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.08] relative scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle top ambient continuity gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#3884ff]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16 max-w-3xl">
          <SectionEyebrow number="08" title="GET IN TOUCH" />
          <Heading2>
            Direct Professional Contact
          </Heading2>
          <SmallText className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out directly for enterprise consulting, S/4HANA frontend modernization, or senior SAPUI5 engineering opportunities.
          </SmallText>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {/* Card 1: Primary Email with Copy to Clipboard */}
          <RevealOnScroll className="p-6 sm:p-8 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20">
            {/* Top ambient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#0f1728] border border-[#3884ff]/30 text-[#3884ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Primary Inbox
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#3884ff] transition-colors">
                  Business Email
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  For formal inquiries, technical specifications, and role discussions.
                </p>
              </div>

              {/* Email Display & Copy Action */}
              <div className="p-3.5 rounded-xl bg-[#070b12] border border-white/[0.06] flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate select-all">
                  {personal.contactEmail}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f1728] hover:bg-[#3884ff] text-slate-300 hover:text-white border border-white/[0.08] hover:border-transparent transition-all duration-200 text-xs font-mono shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Subtle Confirmation Banner */}
              {copied && (
                <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-in fade-in duration-200">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </p>
              )}
            </div>

            {/* Launch Mail Client Action */}
            <div className="pt-4 mt-6 border-t border-white/[0.06]">
              <a
                href={`mailto:${personal.contactEmail}?subject=Enterprise%20SAP%20Inquiry%20-%20Project%20/%20Role`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f1728] hover:bg-[#152238] border border-white/[0.08] text-xs font-semibold text-white hover:text-[#3884ff] transition-colors"
              >
                <SendHorizontal className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </RevealOnScroll>

          {/* Card 2: LinkedIn Professional Network */}
          <RevealOnScroll className="p-6 sm:p-8 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#0f1728] border border-[#3884ff]/30 text-[#3884ff]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                  Professional Network
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#3884ff] transition-colors">
                  LinkedIn Connection
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect for professional recommendations, mutual endorsements, and direct messages.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b12] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="truncate">{personal.socials.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                <span className="text-emerald-400 text-[10px]">Verified</span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06]">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a6ed1] hover:bg-[#0070f2] text-white text-xs font-semibold shadow-md shadow-[#0a6ed1]/20 transition-all group/btn"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </RevealOnScroll>

          {/* Card 3: GitHub Repositories */}
          <RevealOnScroll className="p-6 sm:p-8 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#0f1728] border border-white/[0.1] text-slate-300">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                  Code &amp; Architecture
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#3884ff] transition-colors">
                  GitHub Organization
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Open-source SAPUI5 custom controls, CDS templates, and modern build tooling configs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b12] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="truncate">{personal.socials.github.replace(/^https?:\/\/(www\.)?/, '')}</span>
                <span className="text-slate-400 text-[10px]">Public Repos</span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06]">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f1728] hover:bg-[#152238] border border-white/[0.08] text-xs font-semibold text-white hover:text-[#3884ff] transition-colors group/btn"
              >
                <span>View GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </RevealOnScroll>

          {/* Card 4: Location & Professional Availability */}
          <RevealOnScroll className="p-6 sm:p-8 rounded-2xl bg-[#0a0f18] border border-white/[0.08] hover:border-[#3884ff]/40 hover:bg-[#0d1422] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3884ff]/0 group-hover:via-[#3884ff]/60 to-transparent transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#0f1728] border border-emerald-500/30 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#3884ff] transition-colors">
                  Location &amp; Work Model
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Enterprise deployment readiness across Central Europe and global remote environments.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#070b12] border border-white/[0.04]">
                  <span className="text-slate-400">Geographic Base:</span>
                  <span className="text-white font-medium">{personal.location}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#070b12] border border-white/[0.04]">
                  <span className="text-slate-400">Work Mode:</span>
                  <span className="text-emerald-400 font-medium">Hybrid / On-site EU / Remote</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#3884ff]" />
                <span>Response SLA: &lt; 24 business hours</span>
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified</span>
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
