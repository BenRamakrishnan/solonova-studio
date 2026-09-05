import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const brandDir = path.resolve('public/brand');
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Save pure standalone SVG files
const svgDarkSquircle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <!-- Outer squircle background with subtle luxury gradient & border -->
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141416"/>
      <stop offset="100%" stop-color="#09090B"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3F3F46" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#27272A" stop-opacity="0.4"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#C5A059" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Base Icon Squircle -->
  <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="6"/>

  <!-- Fluid Architectural 'S' Glyphic Mark -->
  <path d="M324 162C324 162 290 134 254 134C190 134 154 170 154 212C154 276 254 262 254 312C254 348 218 362 190 362C140 362 104 326 104 326" 
        stroke="#FFFFFF" 
        stroke-width="36" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>

  <!-- Solonova Signature Gold Atelier Dot -->
  <circle cx="352" cy="340" r="42" fill="#C5A059" filter="url(#goldGlow)"/>
</svg>`;

const svgTransparent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <defs>
    <filter id="goldGlowTrans" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#C5A059" flood-opacity="0.4"/>
    </filter>
  </defs>
  <!-- Fluid Architectural 'S' Glyphic Mark -->
  <path d="M324 162C324 162 290 134 254 134C190 134 154 170 154 212C154 276 254 262 254 312C254 348 218 362 190 362C140 362 104 326 104 326" 
        stroke="#09090B" 
        stroke-width="36" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>

  <!-- Solonova Signature Gold Atelier Dot -->
  <circle cx="352" cy="340" r="42" fill="#C5A059" filter="url(#goldGlowTrans)"/>
</svg>`;

// Save SVGs
fs.writeFileSync(path.join(brandDir, 'solonova-brand-icon.svg'), svgDarkSquircle);
fs.writeFileSync(path.join(brandDir, 'solonova-icon-transparent.svg'), svgTransparent);

// Also copy to root for instant access
fs.writeFileSync(path.resolve('solonova-brand-icon.svg'), svgDarkSquircle);

// Update public/favicon.svg to match
fs.writeFileSync(path.resolve('public/favicon.svg'), svgDarkSquircle);

console.log('SVG files generated successfully.');

// Now render pixel-perfect PNGs using Chrome headless
async function renderPNGs() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();

  // Helper to render an HTML snippet to PNG at given dimensions
  async function renderHtmlToPng(html, outPath, size, transparentBg = false) {
    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
    width: ${size}px; 
    height: ${size}px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background: ${transparentBg ? 'transparent' : '#000000'}; 
    overflow: hidden; 
  }
  svg { width: 100%; height: 100%; display: block; }
</style>
</head>
<body>
${html}
</body>
</html>`);

    await page.screenshot({
      path: outPath,
      omitBackground: transparentBg,
      type: 'png'
    });
    console.log(`Rendered PNG: ${outPath} (${size}x${size})`);
  }

  // 1. Dark Squircle 1024x1024
  await renderHtmlToPng(svgDarkSquircle, path.join(brandDir, 'solonova-brand-icon-1024.png'), 1024, true);
  await renderHtmlToPng(svgDarkSquircle, path.resolve('solonova-brand-icon-1024.png'), 1024, true);

  // 2. Dark Squircle 512x512
  await renderHtmlToPng(svgDarkSquircle, path.join(brandDir, 'solonova-brand-icon-512.png'), 512, true);
  await renderHtmlToPng(svgDarkSquircle, path.resolve('solonova-brand-icon-512.png'), 512, true);

  // 3. Dark Squircle 256x256
  await renderHtmlToPng(svgDarkSquircle, path.join(brandDir, 'solonova-brand-icon-256.png'), 256, true);

  // 4. Transparent Mark (White S + Gold dot on transparent)
  const svgWhiteOnTransparent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#C5A059" flood-opacity="0.4"/>
      </filter>
    </defs>
    <path d="M324 162C324 162 290 134 254 134C190 134 154 170 154 212C154 276 254 262 254 312C254 348 218 362 190 362C140 362 104 326 104 326" 
          stroke="#FFFFFF" 
          stroke-width="38" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    <circle cx="352" cy="340" r="42" fill="#C5A059" filter="url(#glow)"/>
  </svg>`;
  await renderHtmlToPng(svgWhiteOnTransparent, path.join(brandDir, 'solonova-mark-white-transparent-1024.png'), 1024, true);
  await renderHtmlToPng(svgWhiteOnTransparent, path.resolve('solonova-mark-white-transparent-1024.png'), 1024, true);

  await browser.close();
  console.log('\nAll brand asset exports completed successfully!');
}

renderPNGs().catch(console.error);
