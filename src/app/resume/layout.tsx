import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Curriculum Vitae | ${portfolioData.personal.name} - SAPUI5 & SAP Fiori Developer`,
  description: `Official Curriculum Vitae of ${portfolioData.personal.name} - Senior SAPUI5 & SAP Fiori Developer specializing in enterprise SAP applications, Clean Core architectures, and SAP BTP solutions.`,
  alternates: {
    canonical: "https://sap-fiori-portfolio.dev/resume",
  },
  openGraph: {
    title: `Curriculum Vitae | ${portfolioData.personal.name}`,
    description: `Official CV of ${portfolioData.personal.name}, Senior SAPUI5 & SAP Fiori Developer.`,
    url: "https://sap-fiori-portfolio.dev/resume",
    images: ["/og-image.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
