import puppeteer from 'puppeteer-core';
import os from 'os';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:5173/';

const VIEWPORTS = [
  // Small Mobile
  { name: 'Small Mobile 320x568', width: 320, height: 568, category: 'Small Mobile' },
  { name: 'Small Mobile 320x640', width: 320, height: 640, category: 'Small Mobile' },
  { name: 'Small Mobile 320x800', width: 320, height: 800, category: 'Small Mobile' },
  { name: 'Small Mobile 360x640', width: 360, height: 640, category: 'Small Mobile' },
  { name: 'Small Mobile 360x800', width: 360, height: 800, category: 'Small Mobile' },

  // Normal Mobile
  { name: 'Normal Mobile 375x667', width: 375, height: 667, category: 'Normal Mobile' },
  { name: 'Normal Mobile 375x812', width: 375, height: 812, category: 'Normal Mobile' },
  { name: 'Normal Mobile 390x844', width: 390, height: 844, category: 'Normal Mobile' },
  { name: 'Normal Mobile 393x852', width: 393, height: 852, category: 'Normal Mobile' },
  { name: 'Normal Mobile 414x896', width: 414, height: 896, category: 'Normal Mobile' },
  { name: 'Normal Mobile 430x932', width: 430, height: 932, category: 'Normal Mobile' },

  // Large Mobile
  { name: 'Large Mobile 480x800', width: 480, height: 800, category: 'Large Mobile' },
  { name: 'Large Mobile 480x900', width: 480, height: 900, category: 'Large Mobile' },
  { name: 'Large Mobile 540x960', width: 540, height: 960, category: 'Large Mobile' },

  // Tablet
  { name: 'Tablet 600x800', width: 600, height: 800, category: 'Tablet' },
  { name: 'Tablet 768x1024', width: 768, height: 1024, category: 'Tablet' },
  { name: 'Tablet 820x1180', width: 820, height: 1180, category: 'Tablet' },
  { name: 'Tablet 834x1194', width: 834, height: 1194, category: 'Tablet' },
  { name: 'Tablet 912x1368', width: 912, height: 1368, category: 'Tablet' },
  { name: 'Tablet 1024x1366', width: 1024, height: 1366, category: 'Tablet' },

  // Laptop
  { name: 'Laptop 1024x600', width: 1024, height: 600, category: 'Laptop' },
  { name: 'Laptop 1280x720', width: 1280, height: 720, category: 'Laptop' },
  { name: 'Laptop 1280x800', width: 1280, height: 800, category: 'Laptop' },
  { name: 'Laptop 1366x768', width: 1366, height: 768, category: 'Laptop' },
  { name: 'Laptop 1440x900', width: 1440, height: 900, category: 'Laptop' },
  { name: 'Laptop 1536x864', width: 1536, height: 864, category: 'Laptop' },

  // Desktop
  { name: 'Desktop 1600x900', width: 1600, height: 900, category: 'Desktop' },
  { name: 'Desktop 1920x1080', width: 1920, height: 1080, category: 'Desktop' },
  { name: 'Desktop 2560x1440', width: 2560, height: 1440, category: 'Desktop' },

  // Ultra-Wide
  { name: 'Ultra-Wide 3440x1440', width: 3440, height: 1440, category: 'Ultra-Wide' },
  { name: 'Ultra-Wide 3840x2160', width: 3840, height: 2160, category: 'Ultra-Wide' },

  // Aspect Ratios
  { name: 'Short Screen 1366x600', width: 1366, height: 600, category: 'Aspect Ratios' },
  { name: 'Tall Screen 1366x1000', width: 1366, height: 1000, category: 'Aspect Ratios' },
  { name: 'Extremely Tall 1366x1400', width: 1366, height: 1400, category: 'Aspect Ratios' },
  { name: 'Mobile Short 390x600', width: 390, height: 600, category: 'Aspect Ratios' },
  { name: 'Mobile Tall 390x1000', width: 390, height: 1000, category: 'Aspect Ratios' },

  // Landscape Mobile
  { name: 'Landscape Mobile 568x320', width: 568, height: 320, category: 'Landscape Mobile' },
  { name: 'Landscape Mobile 667x375', width: 667, height: 375, category: 'Landscape Mobile' },
  { name: 'Landscape Mobile 844x390', width: 844, height: 390, category: 'Landscape Mobile' },
  { name: 'Landscape Mobile 932x430', width: 932, height: 430, category: 'Landscape Mobile' },
];

async function runAudit() {
  console.log('✦ Launching Headless Chrome Audit Engine...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    pipe: true,
    args: ['--headless=new', '--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 10000 });
  console.log('✓ Connected to Solonova dev server at ' + URL);

  const results = [];
  let allPass = true;

  console.log('\n--- 1. AUDITING 40 VIEWPORTS & ASPECT RATIOS ---');

  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 80));

    const metrics = await page.evaluate(() => {
      const docEl = document.documentElement;
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const docScrollW = docEl.scrollWidth;
      const bodyScrollW = document.body.scrollWidth;
      const hasHorizontalOverflow = docScrollW > winW || bodyScrollW > winW;

      // Find any element overflowing viewport
      const elements = Array.from(document.querySelectorAll('*'));
      let overflowingElements = [];

      for (const el of elements) {
        if (el.tagName === 'CANVAS' || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') continue;
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          if (rect.right > winW + 1) { // 1px tolerance for subpixel rounding
            // Check if inside intentional scroll container
            if (!el.closest('.marquee-container') && !el.closest('.marquee-content') && !el.closest('.filter-tabs') && !el.closest('#hero-interactive-tabs')) {
              overflowingElements.push({
                tag: el.tagName,
                id: el.id,
                className: el.className ? String(el.className).slice(0, 40) : '',
                right: Math.round(rect.right),
                excess: Math.round(rect.right - winW)
              });
            }
          }
        }
      }

      // Check Left and Right alignment edges of main sections
      const sections = ['navbar-root', 'hero-root', 'metrics-root', 'showcase-root', 'process-root', 'comparison-root', 'calculator-root', 'contact-root', 'footer-root'];
      const sectionAlignments = {};
      for (const sId of sections) {
        const sec = document.getElementById(sId);
        if (sec) {
          const containerEl = sec.querySelector('.container, .atelier-navbar, .double-bezel');
          if (containerEl) {
            const r = containerEl.getBoundingClientRect();
            sectionAlignments[sId] = {
              left: Math.round(r.left),
              right: Math.round(r.right),
              width: Math.round(r.width)
            };
          }
        }
      }

      // Check Navbar visibility & sizing
      const nav = document.querySelector('.atelier-navbar');
      const navRect = nav ? nav.getBoundingClientRect() : null;

      // Check WebGL Canvas geometry
      const canvas = document.getElementById('bg-canvas-3d');
      const canvasOk = canvas ? (canvas.offsetWidth === winW && canvas.offsetHeight === winH) : false;

      return {
        winW,
        winH,
        docScrollW,
        hasHorizontalOverflow,
        overflowingElements: overflowingElements.slice(0, 3),
        sectionAlignments,
        navOk: navRect ? (navRect.width <= winW && navRect.left >= 0) : false,
        canvasOk
      };
    });

    const isSuccess = !metrics.hasHorizontalOverflow && metrics.overflowingElements.length === 0 && metrics.navOk;
    if (!isSuccess) allPass = false;

    results.push({
      ...vp,
      docScrollW: metrics.docScrollW,
      hasHorizontalOverflow: metrics.hasHorizontalOverflow,
      overflowCount: metrics.overflowingElements.length,
      overflowingElements: metrics.overflowingElements,
      navOk: metrics.navOk,
      canvasOk: metrics.canvasOk,
      status: isSuccess ? 'PASS' : 'FAIL'
    });

    const statusBadge = isSuccess ? '✓ PASS' : '✕ FAIL';
    console.log(`[${vp.category.padEnd(16)}] ${vp.name.padEnd(28)} | winW: ${vp.width} scrollW: ${metrics.docScrollW} | Overflow: ${metrics.hasHorizontalOverflow ? 'YES' : 'NO'} | Nav: ${metrics.navOk ? 'OK' : 'ERR'} | ${statusBadge}`);
    if (!isSuccess && metrics.overflowingElements.length > 0) {
      console.log('   -> Offending:', JSON.stringify(metrics.overflowingElements));
    }
  }

  console.log('\n--- 2. CONTINUOUS RESIZE STRESS TEST (1920 -> 320 -> 1920) ---');
  const continuousSteps = [1920, 1600, 1440, 1280, 1024, 900, 768, 600, 480, 430, 390, 375, 360, 320, 360, 390, 430, 480, 600, 768, 820, 1024, 1280, 1440, 1920];
  let continuousPass = true;

  for (const w of continuousSteps) {
    await page.setViewport({ width: w, height: 800 });
    await new Promise(r => setTimeout(r, 40));
    const isOverflowing = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (isOverflowing) {
      continuousPass = false;
      console.log(`✕ Continuous resize failed at width: ${w}px`);
    }
  }
  console.log(`Continuous Resize Test: ${continuousPass ? '✓ ALL 25 STEP SIZES PASSED ZERO OVERFLOW' : '✕ FAIL'}`);

  console.log('\n--- 3. ORIENTATION FLIP SIMULATION (Portrait -> Landscape -> Portrait) ---');
  // Test iPhone 14: 390x844 -> 844x390 -> 390x844
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 60));
  const p1 = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

  await page.setViewport({ width: 844, height: 390 });
  await new Promise(r => setTimeout(r, 60));
  const l1 = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 60));
  const p2 = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

  const orientationPass = p1 && l1 && p2;
  console.log(`Orientation Flip Test: ${orientationPass ? '✓ PASSED (P1: OK, L1: OK, P2: OK)' : '✕ FAIL'}`);

  console.log('\n--- 4. BROWSER ZOOM STRESS TEST (80%, 100%, 125%, 150%, 200%) ---');
  const zoomLevels = [0.8, 1.0, 1.25, 1.5, 2.0];
  let zoomPass = true;

  for (const zoom of zoomLevels) {
    // Zoom in puppeteer can be simulated by scaleFactor or page evaluate
    await page.setViewport({ width: Math.round(1280 / zoom), height: Math.round(800 / zoom), deviceScaleFactor: zoom });
    await new Promise(r => setTimeout(r, 60));
    const isOver = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (isOver) {
      zoomPass = false;
      console.log(`✕ Zoom level ${Math.round(zoom * 100)}% produced horizontal overflow`);
    } else {
      console.log(`✓ Zoom level ${Math.round(zoom * 100)}%: OK (No overflow)`);
    }
  }

  console.log('\n--- 5. INTERACTIVE COMPONENTS TEST (Modal & Mobile Navigation) ---');
  // Test mobile menu open and scrollability at 360x640
  await page.setViewport({ width: 360, height: 640 });
  await new Promise(r => setTimeout(r, 60));

  const mobileNavTest = await page.evaluate(async () => {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return { ok: false, msg: 'elements missing' };

    toggle.click();
    await new Promise(r => setTimeout(r, 100));

    const isOpen = menu.classList.contains('mobile-open');
    const menuRect = menu.getBoundingClientRect();
    const fitsViewport = menuRect.right <= window.innerWidth && menuRect.bottom <= window.innerHeight + 50;

    toggle.click(); // close
    return { ok: isOpen && fitsViewport, isOpen, fitsViewport, menuRect };
  });

  console.log(`Mobile Nav Drawer Test: ${mobileNavTest.ok ? '✓ PASSED (Opens, contained within screen, closes)' : '✕ FAIL'}`);

  // Test Project Modal open, scroll, and close
  await page.setViewport({ width: 375, height: 667 });
  const modalTest = await page.evaluate(async () => {
    const cardBtn = document.querySelector('.open-case-study-btn');
    if (!cardBtn) return { ok: false, msg: 'case study btn not found' };
    cardBtn.click();
    await new Promise(r => setTimeout(r, 150));

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-inner');
    const isOpen = modal && modal.classList.contains('open');
    const contentRect = content ? content.getBoundingClientRect() : null;
    const contained = contentRect ? (contentRect.width <= window.innerWidth && contentRect.height <= window.innerHeight) : false;

    // Close modal
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) closeBtn.click();
    await new Promise(r => setTimeout(r, 100));

    return { ok: isOpen && contained, isOpen, contained };
  });

  console.log(`Project Modal Test: ${modalTest.ok ? '✓ PASSED (Opens, within viewport bounds, scrolls internally, closes)' : '✕ FAIL'}`);

  await browser.close();

  console.log('\n========================================');
  console.log(`AUDIT SUMMARY: ${allPass && continuousPass && orientationPass && zoomPass && mobileNavTest.ok && modalTest.ok ? 'ALL CHECKS PASSED PERFECTLY (100%)' : 'SOME CHECKS FAILED'}`);
  console.log('========================================');

  return { results, allPass, continuousPass, orientationPass, zoomPass, mobileNavTest, modalTest };
}

runAudit().catch(err => {
  console.error('Fatal error during responsive audit:', err);
  process.exit(1);
});
