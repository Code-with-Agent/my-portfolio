import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sap-fiori-portfolio.dev"),
  title: {
    default: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description:
    "Senior SAPUI5 & SAP Fiori Developer specializing in enterprise application development, Clean Core S/4HANA migrations, SAP BTP, SAP CAP, ABAP RAP, and high-performance OData v4 architectures.",
  alternates: {
    canonical: "https://sap-fiori-portfolio.dev",
  },
  authors: [{ name: portfolioData.personal.name, url: "https://sap-fiori-portfolio.dev" }],
  creator: portfolioData.personal.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sap-fiori-portfolio.dev",
    title: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer`,
    description:
      "Senior SAPUI5 & SAP Fiori Developer building scalable enterprise experiences across SAP S/4HANA, BTP, CAP, RAP, and modern OData v4 architectures.",
    siteName: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer`,
    description:
      "Senior SAPUI5 & SAP Fiori Developer building scalable enterprise experiences across SAP S/4HANA, BTP, CAP, RAP, and modern OData v4 architectures.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sap-fiori-portfolio.dev/#person",
        name: portfolioData.personal.name,
        jobTitle: "SAPUI5 & SAP Fiori Developer",
        description:
          "Senior SAPUI5 & SAP Fiori Developer specializing in enterprise application development, Clean Core S/4HANA migrations, SAP BTP, SAP CAP, ABAP RAP, and high-performance OData v4 architectures.",
        url: "https://sap-fiori-portfolio.dev",
        image: "https://sap-fiori-portfolio.dev/og-image.png",
        sameAs: [
          portfolioData.personal.socials.linkedin,
          portfolioData.personal.socials.github,
        ],
        knowsAbout: [
          "SAPUI5",
          "SAP Fiori",
          "SAP Fiori Elements",
          "OData v2 / v4",
          "SAP Cloud Application Programming Model (CAP)",
          "RESTful Application Programming Model (RAP)",
          "SAP Business Technology Platform (BTP)",
          "Modern ABAP",
          "Core Data Services (CDS)",
          "SAP S/4HANA Migration & Clean Core",
        ],
        worksFor: {
          "@type": "Organization",
          name: portfolioData.personal.currentCompany,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: portfolioData.education[0]?.institution,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sap-fiori-portfolio.dev/#website",
        url: "https://sap-fiori-portfolio.dev",
        name: `${portfolioData.personal.name} | SAPUI5 & SAP Fiori Developer`,
        description:
          "Senior SAPUI5 & SAP Fiori Developer portfolio showcasing enterprise SAP applications, SAP BTP architecture, SAPUI5/Fiori Elements UX, and ABAP RAP integrations.",
        publisher: {
          "@id": "https://sap-fiori-portfolio.dev/#person",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col bg-[#070a0f] text-slate-200 antialiased selection:bg-[#0a6ed1] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
