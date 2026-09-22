"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  FileText
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function ResumePage() {
  const { personal, experience, education, certifications, featuredProjects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-200 py-6 sm:py-12 print:bg-white print:text-black print:p-0">
      {/* Top Action Bar (Hidden on Print) */}
      <div className="no-print max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c111a] border border-white/[0.08] shadow-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Interactive Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0f1624] text-xs font-medium text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#3884ff]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.resumeDownloadUrl || "/Moin_Khan_Resume_2026.docx"}
              download={personal.resumePdfFileName || "Moin_Khan_Resume_2026.docx"}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0f1624] text-xs font-semibold text-white hover:text-[#3884ff] border border-white/[0.08] hover:border-[#3884ff]/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#3884ff]" />
              <span>Download Resume (.docx)</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a6ed1] hover:bg-[#0070f2] text-white text-xs font-semibold shadow-md shadow-[#0a6ed1]/30 transition-all duration-200 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resume Document Paper Container */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-10 rounded-2xl bg-[#0c111a] border border-white/[0.08] shadow-2xl print:shadow-none print:border-0 print:bg-white print:text-black print:p-0">
        {/* Header: Name, Title, Contact Meta */}
        <header className="border-b border-white/[0.1] print:border-slate-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
                {personal.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[#3884ff] print:text-[#004fb0] mt-1">
                {personal.title}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-0.5">
                Specialized in SAPUI5, SAP Fiori (Horizon), BTP Cloud Foundry, and Clean Core S/4HANA Architecture
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-xs space-y-1 sm:text-right font-mono text-slate-300 print:text-slate-700">
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3884ff] print:text-slate-600" />
                <span>{personal.location}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#3884ff] print:text-slate-600" />
                <span>{personal.contactEmail}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#3884ff] print:text-slate-600" />
                <span>linkedin.com/in/sap-fiori-expert</span>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            {personal.shortBio}
          </p>
        </section>

        {/* Core SAP Competencies */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
            Core SAP &amp; Technical Competencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#0f1624] print:bg-slate-50 border border-white/[0.06] print:border-slate-200">
              <div className="font-bold text-white print:text-black">Frontend</div>
              <div className="text-slate-400 print:text-slate-600 text-[11px]">SAPUI5, TypeScript, XML Views, Fiori Horizon, Web Components</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1624] print:bg-slate-50 border border-white/[0.06] print:border-slate-200">
              <div className="font-bold text-white print:text-black">Fiori Elements</div>
              <div className="text-slate-400 print:text-slate-600 text-[11px]">List Report, Object Page, ALP, OVP, Flexible Column Layout</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1624] print:bg-slate-50 border border-white/[0.06] print:border-slate-200">
              <div className="font-bold text-white print:text-black">Integration &amp; OData</div>
              <div className="text-slate-400 print:text-slate-600 text-[11px]">OData v2 / v4, $batch, Gateway /IWFND/, Event Mesh, Destinations</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1624] print:bg-slate-50 border border-white/[0.06] print:border-slate-200">
              <div className="font-bold text-white print:text-black">Backend &amp; Cloud</div>
              <div className="text-slate-400 print:text-slate-600 text-[11px]">SAP BTP, CAP (Node.js), RAP, ABAP 7.5+, CDS Views, Workzone</div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
            Professional Experience
          </h2>

          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="print-break-inside-avoid space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-sm text-white print:text-black">
                      {exp.role}
                    </span>
                    <span className="text-slate-400 print:text-slate-600 text-xs">
                      {" "}&bull; <span className="font-semibold text-[#3884ff] print:text-slate-800">{exp.company}</span> ({exp.location})
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                    {exp.startDate} &mdash; {exp.endDate}
                  </div>
                </div>

                <p className="text-xs text-slate-300 print:text-slate-700 italic">
                  {exp.summary}
                </p>

                <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                  {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3884ff] print:bg-slate-800 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                  {exp.keyAchievements.slice(0, 2).map((achieve, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 font-medium text-emerald-400 print:text-slate-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 print:bg-slate-800 mt-1.5 shrink-0" />
                      <span><strong>Key Impact:</strong> {achieve}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] print:bg-slate-100 text-slate-300 print:text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Enterprise Projects Case Studies */}
        <section className="mb-6 space-y-3 print-break-inside-avoid">
          <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
            Highlighted Enterprise Case Studies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {featuredProjects.slice(0, 2).map((proj) => (
              <div
                key={proj.id}
                className="p-3 rounded-lg bg-[#0f1624] print:bg-slate-50 border border-white/[0.06] print:border-slate-200 space-y-1.5"
              >
                <div className="font-bold text-white print:text-black">
                  {proj.name}
                </div>
                <div className="text-[11px] text-slate-400 print:text-slate-600">
                  {proj.projectType} &bull; {proj.businessDomain}
                </div>
                <p className="text-slate-300 print:text-slate-700 leading-snug">
                  {proj.summary}
                </p>
                <div className="text-emerald-400 print:text-slate-900 font-medium text-[11px]">
                  <strong>Result:</strong> {proj.outcome[0] || proj.resultsAndImpact?.[0]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Education Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.1] print:border-slate-300 print-break-inside-avoid">
          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
              Certifications &amp; Accreditations
            </h2>
            <div className="space-y-2 text-xs">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id}>
                  <div className="font-bold text-white print:text-black">
                    {cert.title}
                  </div>
                  <div className="text-[11px] text-slate-400 print:text-slate-600">
                    {cert.issuer} &bull; {cert.issueYear} {cert.credentialId ? `(ID: ${cert.credentialId})` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#3884ff] print:text-[#004fb0] uppercase">
              Education
            </h2>
            <div className="space-y-1 text-xs">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-white print:text-black">
                    {edu.degree}
                  </div>
                  <div className="text-slate-300 print:text-slate-700">
                    {edu.institution}, {edu.location}
                  </div>
                  <div className="text-[11px] text-slate-400 print:text-slate-600">
                    {edu.startYear} &mdash; {edu.endYear} {edu.honors ? `&bull; ${edu.honors}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
