const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f18" />
      <stop offset="50%" stop-color="#070a0f" />
      <stop offset="100%" stop-color="#05080d" />
    </linearGradient>

    <!-- Radial Blue Glow -->
    <radialGradient id="glow" cx="60%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#0a6ed1" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#0a6ed1" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#070a0f" stop-opacity="0" />
    </radialGradient>

    <!-- Brand Accent Gradient -->
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="60%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#3884ff" />
    </linearGradient>

    <!-- Badge Gradient -->
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a6ed1" />
      <stop offset="100%" stop-color="#004fb0" />
    </linearGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 132, 255, 0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#glow)" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />

  <!-- Outer Border Frame -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />
  
  <!-- Subtle Top Accent Glow Line -->
  <line x1="80" y1="24" x2="600" y2="24" stroke="#3884ff" stroke-width="3" stroke-linecap="round" />

  <!-- TOP BAR -->
  <!-- Monogram Logo Badge -->
  <rect x="70" y="65" width="56" height="56" rx="14" fill="url(#badgeGrad)" stroke="rgba(56, 132, 255, 0.5)" stroke-width="1.5" />
  <text x="98" y="101" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="1">AS</text>
  
  <!-- Live Pulse Dot -->
  <circle cx="120" cy="115" r="5" fill="#10b981" stroke="#070a0f" stroke-width="2" />

  <!-- Candidate Identification -->
  <text x="145" y="90" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="20" fill="#ffffff">Alexandre Sterling</text>
  <text x="145" y="112" font-family="monospace, monospace" font-size="13" fill="#3884ff" letter-spacing="1">ENTERPRISE SAP SOLUTIONS ARCHITECT</text>

  <!-- Top Right Status Badge -->
  <rect x="930" y="72" width="200" height="40" rx="20" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
  <circle cx="952" cy="92" r="4" fill="#10b981" />
  <text x="966" y="96" font-family="monospace, monospace" font-weight="600" font-size="12" fill="#34d399" letter-spacing="0.5">CLEAN CORE READY</text>

  <!-- CENTER CONTENT -->
  <!-- Eyebrow Tag -->
  <rect x="70" y="175" width="290" height="32" rx="16" fill="rgba(10, 110, 209, 0.15)" stroke="rgba(56, 132, 255, 0.35)" stroke-width="1" />
  <circle cx="90" cy="191" r="3.5" fill="#0a6ed1" />
  <text x="104" y="196" font-family="monospace, monospace" font-weight="700" font-size="12" fill="#3884ff" letter-spacing="1">SAPUI5 • SAP FIORI • CAP • RAP</text>

  <!-- Main Headline -->
  <text x="70" y="275" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="60" fill="url(#brandGrad)" letter-spacing="-1">
    SAPUI5 &amp; SAP Fiori
  </text>
  <text x="70" y="340" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="60" fill="#3884ff" letter-spacing="-1">
    Developer
  </text>

  <!-- Concise Positioning Statement -->
  <text x="70" y="395" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="22" fill="#cbd5e1">
    Building modern, scalable enterprise experiences across the SAP ecosystem.
  </text>
  <text x="70" y="425" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#94a3b8">
    Decoupled S/4HANA Clean Core architectures, high-performance OData v4, and cloud-native BTP extensions.
  </text>

  <!-- BOTTOM BAR / TECH PILLS -->
  <line x1="70" y1="475" x2="1130" y2="475" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

  <!-- Pill 1: SAPUI5 -->
  <rect x="70" y="505" width="115" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="127" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">SAPUI5</text>

  <!-- Pill 2: Fiori Elements -->
  <rect x="198" y="505" width="155" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="275" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">Fiori Elements</text>

  <!-- Pill 3: ABAP RAP -->
  <rect x="365" y="505" width="125" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="427" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">ABAP RAP</text>

  <!-- Pill 4: SAP CAP -->
  <rect x="502" y="505" width="120" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="562" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">SAP CAP</text>

  <!-- Pill 5: OData v4 -->
  <rect x="634" y="505" width="120" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="694" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">OData v4</text>

  <!-- Pill 6: SAP BTP -->
  <rect x="766" y="505" width="120" height="38" rx="10" fill="#0f1728" stroke="rgba(56, 132, 255, 0.3)" stroke-width="1" />
  <text x="826" y="529" font-family="monospace, monospace" font-weight="600" font-size="14" fill="#e2e8f0" text-anchor="middle">SAP BTP</text>

  <!-- URL Branding Right -->
  <text x="1130" y="530" font-family="monospace, monospace" font-weight="700" font-size="16" fill="#3884ff" text-anchor="end">
    sap-fiori-portfolio.dev
  </text>
  <text x="1130" y="550" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b" text-anchor="end">
    Verified Enterprise Showcase
  </text>
</svg>
`;

  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, "og-image.png");
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log("Successfully generated:", outputPath, "File size:", fs.statSync(outputPath).size);
}

generateOgImage().catch(console.error);
