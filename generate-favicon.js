const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function generateFavicons() {
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. High-resolution SVG Favicon
  const svg = `
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a6ed1" />
      <stop offset="100%" stop-color="#004fb0" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#070a0f" />
  <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#favGrad)" stroke="rgba(56, 132, 255, 0.4)" stroke-width="1.5" />
  <text x="32" y="40" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">AS</text>
  <circle cx="50" cy="50" r="4.5" fill="#10b981" stroke="#070a0f" stroke-width="2" />
</svg>
`;

  fs.writeFileSync(path.join(publicDir, "icon.svg"), svg);

  // 2. 32x32 PNG for standard browsers
  const png32 = await sharp(Buffer.from(svg))
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), png32);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), png32);

  // 3. 180x180 PNG for Apple Touch Icon
  const png180 = await sharp(Buffer.from(svg))
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png180);

  // Also write to app directory icon.png if desired
  const appDir = path.join(__dirname, "src", "app");
  fs.writeFileSync(path.join(appDir, "icon.png"), png32);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), png180);

  console.log("Generated favicons (icon.svg, favicon.ico, favicon-32x32.png, apple-touch-icon.png, app/icon.png)");
}

generateFavicons().catch(console.error);
