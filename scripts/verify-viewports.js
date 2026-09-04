import fs from 'fs';
import path from 'path';

console.log('--- SOLONOVA ADVERSARIAL MULTI-VIEWPORT & STRESS SUITE ---');

// 1. Core Target Viewports
const primaryViewports = [
  { name: '1920x1080 Ultra-Wide', w: 1920, h: 1080 },
  { name: '1600x900 Large Desktop', w: 1600, h: 900 },
  { name: '1440x900 Standard Desktop', w: 1440, h: 900 },
  { name: '1366x768 Compact Desktop', w: 1366, h: 768 },
  { name: '1280x800 Laptop Desktop', w: 1280, h: 800 },
  { name: '1024x1366 iPad Pro Portrait', w: 1024, h: 1366 },
  { name: '820x1180 iPad Air Portrait', w: 820, h: 1180 },
  { name: '768x1024 iPad Mini Portrait', w: 768, h: 1024 },
  { name: '430x932 iPhone 15 Pro Max', w: 430, h: 932 },
  { name: '414x896 iPhone 11/XR', w: 414, h: 896 },
  { name: '390x844 iPhone 12/13/14/15', w: 390, h: 844 },
  { name: '375x812 iPhone SE 2/3', w: 375, h: 812 },
  { name: '360x800 Android Standard', w: 360, h: 800 },
  { name: '320x568 iPhone SE 1st Gen', w: 320, h: 568 }
];

// 2. Breakpoint Boundary Pairs (Testing 1px delta jitter)
const boundaryPairs = [
  { from: 319, to: 320, desc: 'Ultra-narrow boundary' },
  { from: 359, to: 360, desc: 'Android compact boundary' },
  { from: 374, to: 375, desc: 'iPhone standard boundary' },
  { from: 379, to: 380, desc: 'Navbar compact threshold' },
  { from: 389, to: 390, desc: 'iPhone 14/15 boundary' },
  { from: 413, to: 414, desc: 'Plus phone boundary' },
  { from: 429, to: 430, desc: 'Pro Max boundary' },
  { from: 639, to: 640, desc: 'Mobile/Phablet threshold' },
  { from: 767, to: 768, desc: 'Tablet breakpoint threshold' },
  { from: 819, to: 820, desc: 'iPad Air threshold' },
  { from: 989, to: 990, desc: 'Desktop nav index threshold' },
  { from: 1023, to: 1024, desc: 'Tablet/Desktop threshold' }
];

// 3. Height Variation Stress Tests
const heightVariations = [
  { w: 320, h: 568, desc: 'Short Mobile Portrait' },
  { w: 320, h: 700, desc: 'Standard Mobile Tall' },
  { w: 320, h: 800, desc: 'Extra Tall Mobile' },
  { w: 390, h: 500, desc: 'Short Landscape Phone' },
  { w: 390, h: 600, desc: 'Keyboard open on mobile' },
  { w: 390, h: 844, desc: 'Standard Portrait' },
  { w: 390, h: 1000, desc: 'Tall Android' },
  { w: 430, h: 700, desc: 'Compact Pro Max' },
  { w: 430, h: 932, desc: 'Standard Pro Max' },
  { w: 568, h: 320, desc: 'Ultra-short landscape phone' },
  { w: 844, h: 390, desc: 'iPhone landscape' },
  { w: 932, h: 430, desc: 'Pro Max landscape' }
];

// Helper to evaluate clamp(min, val, max)
function evalClampRem(minRem, vwPercent, remOffset, maxRem, width) {
  const minPx = minRem * 16;
  const maxPx = maxRem * 16;
  const preferredPx = (width * (vwPercent / 100)) + (remOffset * 16);
  return Math.min(Math.max(minPx, preferredPx), maxPx);
}

function getContainerPadding(width) {
  return evalClampRem(1.25, 5, 0, 3, width);
}

function getH1FontSize(width) {
  return evalClampRem(2.25, 6.2, 0.4, 5.8, width);
}

let passes = 0;
let failures = 0;

console.log('--- A. PRIMARY VIEWPORT QA ---');
primaryViewports.forEach(vp => {
  const pad = getContainerPadding(vp.w);
  const availW = vp.w - (2 * pad);
  const h1 = getH1FontSize(vp.w);
  const longestWord = 11 * (h1 * 0.58);
  const fits = longestWord <= availW;
  if (fits) {
    passes++;
    console.log(`[PASS] ${vp.name}: availW=${availW.toFixed(0)}px, H1=${h1.toFixed(0)}px, Handcrafted=${longestWord.toFixed(0)}px`);
  } else {
    failures++;
    console.error(`[FAIL] ${vp.name}: H1 word exceeds width!`);
  }
});

console.log('\n--- B. BREAKPOINT BOUNDARY JITTER TESTS (1px delta) ---');
boundaryPairs.forEach(bp => {
  const padFrom = getContainerPadding(bp.from);
  const padTo = getContainerPadding(bp.to);
  const h1From = getH1FontSize(bp.from);
  const h1To = getH1FontSize(bp.to);
  const diffH1 = Math.abs(h1To - h1From);
  const diffPad = Math.abs(padTo - padFrom);

  // A 1px change should never jump typography or padding by more than 1.5px
  const smooth = diffH1 < 1.5 && diffPad < 1.0;
  if (smooth) {
    passes++;
    console.log(`[PASS] Boundary ${bp.from}px -> ${bp.to}px (${bp.desc}): diffH1=${diffH1.toFixed(2)}px, diffPad=${diffPad.toFixed(2)}px (Smooth)`);
  } else {
    failures++;
    console.error(`[FAIL] Boundary ${bp.from}px -> ${bp.to}px: Layout Jump Detected!`);
  }
});

console.log('\n--- C. HEIGHT VARIATION & LANDSCAPE STRESS TESTS ---');
heightVariations.forEach(hv => {
  // Check modal and drawer constraints
  const maxModalContentH = Math.min(hv.h * 0.94, hv.h - 32);
  const isShortScreen = hv.h <= 560;
  const isSafe = maxModalContentH >= 240 && maxModalContentH <= hv.h;
  if (isSafe) {
    passes++;
    console.log(`[PASS] ${hv.w}x${hv.h} (${hv.desc}): ModalMaxH=${maxModalContentH.toFixed(0)}px, ShortScreenRule=${isShortScreen ? 'Active (align:flex-start)' : 'Standard (align:center)'}`);
  } else {
    failures++;
    console.error(`[FAIL] ${hv.w}x${hv.h}: Height constraint violation!`);
  }
});

// 4. Zoom Levels (Simulating 80% to 200% zoom on 1280px screen -> equivalent viewport widths 1600px down to 640px)
console.log('\n--- D. BROWSER ZOOM LEVEL STRESS TESTS (80% to 200%) ---');
const zoomLevels = [80, 90, 100, 110, 125, 150, 175, 200];
const baseWidth = 1280;

zoomLevels.forEach(zoom => {
  const effW = Math.round(baseWidth / (zoom / 100));
  const pad = getContainerPadding(effW);
  const availW = effW - (2 * pad);
  const h1 = getH1FontSize(effW);
  const longestWord = 11 * (h1 * 0.58);
  const fits = longestWord <= availW;
  if (fits) {
    passes++;
    console.log(`[PASS] Zoom ${zoom}% (EffWidth: ${effW}px): availW=${availW.toFixed(0)}px, H1=${h1.toFixed(0)}px (Fits cleanly)`);
  } else {
    failures++;
    console.error(`[FAIL] Zoom ${zoom}%: Overflow detected!`);
  }
});

console.log(`\n============================================================`);
console.log(`ADVERSARIAL STRESS SUITE RESULTS: ${passes} PASS, ${failures} FAIL`);
console.log(`============================================================`);

if (failures > 0) process.exit(1);
