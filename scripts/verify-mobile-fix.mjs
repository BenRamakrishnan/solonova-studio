import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const distDir = path.resolve('dist');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/solonova-studio/')) {
    reqPath = reqPath.replace('/solonova-studio/', '/');
  }
  let filePath = path.join(distDir, reqPath === '/' ? 'index.html' : reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.png': 'image/png'
    };
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4174, async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    for (const vp of [{ w: 320, h: 568 }, { w: 375, h: 812 }, { w: 390, h: 844 }]) {
      await page.setViewport({ width: vp.w, height: vp.h });
      await page.goto('http://localhost:4174/solonova-studio/', { waitUntil: 'networkidle0' });

      // 1. Verify Navbar Alignment on Mobile
      const navMetrics = await page.evaluate(() => {
        const brand = document.querySelector('.nav-brand-group');
        const actions = document.querySelector('.nav-actions-group');
        const navbar = document.querySelector('.atelier-navbar-inner');
        const brandRect = brand.getBoundingClientRect();
        const actionsRect = actions.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();

        return {
          brandLeft: brandRect.left,
          actionsRight: actionsRect.right,
          navbarLeft: navbarRect.left,
          navbarRight: navbarRect.right,
          gapBetween: actionsRect.left - brandRect.right,
          isBrandLeftAligned: brandRect.left <= navbarRect.left + 20,
          isActionsRightAligned: actionsRect.right >= navbarRect.right - 20,
          isNoOverlap: actionsRect.left >= brandRect.right
        };
      });

      console.log(`\n--- NAVBAR CHECK @ ${vp.w}px ---`);
      console.log(`  Brand Left: ${navMetrics.brandLeft.toFixed(1)}px (Nav Left: ${navMetrics.navbarLeft.toFixed(1)}px)`);
      console.log(`  Actions Right: ${navMetrics.actionsRight.toFixed(1)}px (Nav Right: ${navMetrics.navbarRight.toFixed(1)}px)`);
      console.log(`  Gap between brand & actions: ${navMetrics.gapBetween.toFixed(1)}px`);
      console.log(`  Brand anchored left: ${navMetrics.isBrandLeftAligned}`);
      console.log(`  Actions anchored right: ${navMetrics.isActionsRightAligned}`);
      console.log(`  No overlap between items: ${navMetrics.isNoOverlap}`);

      // 2. Verify Calculator Price & Rupee Layout
      const calcMetrics = await page.evaluate(() => {
        const calcRoot = document.getElementById('calculator-root');
        calcRoot?.scrollIntoView();

        const symbol = document.querySelector('.calc-currency-symbol');
        const price = document.getElementById('calc-total-price');
        const symbolRect = symbol.getBoundingClientRect();
        const priceRect = price.getBoundingClientRect();

        return {
          symbolRight: symbolRect.right,
          priceLeft: priceRect.left,
          gap: priceRect.left - symbolRect.right,
          symbolText: symbol.textContent,
          priceText: price.textContent,
          isNoOverlap: priceRect.left >= symbolRect.right
        };
      });

      console.log(`\n--- CALCULATOR PRICE CHECK @ ${vp.w}px ---`);
      console.log(`  Symbol: "${calcMetrics.symbolText}" ends at ${calcMetrics.symbolRight.toFixed(1)}px`);
      console.log(`  Price: "${calcMetrics.priceText}" starts at ${calcMetrics.priceLeft.toFixed(1)}px`);
      console.log(`  Gap between currency and digits: ${calcMetrics.gap.toFixed(1)}px (NO OVERLAP: ${calcMetrics.isNoOverlap})`);

      // Change inputs to generate ₹31,500
      await page.evaluate(() => {
        const range = document.getElementById('calc-pages');
        if (range) {
          range.value = '7'; // 28500 + 4*1500? wait, 28500 + (7-3)*1500 = 34500
          range.dispatchEvent(new Event('input'));
        }
      });

      const updatedPrice = await page.evaluate(() => {
        const symbol = document.querySelector('.calc-currency-symbol');
        const price = document.getElementById('calc-total-price');
        const symbolRect = symbol.getBoundingClientRect();
        const priceRect = price.getBoundingClientRect();
        return {
          priceText: price.textContent,
          gap: priceRect.left - symbolRect.right,
          isNoOverlap: priceRect.left >= symbolRect.right
        };
      });
      console.log(`  Updated Price: "${updatedPrice.priceText}", Gap: ${updatedPrice.gap.toFixed(1)}px (NO OVERLAP: ${updatedPrice.isNoOverlap})`);
    }

    // 3. Verify WhatsApp destination links have +91 8861699354
    const waLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="wa.me"]'));
      return links.map(a => ({
        text: a.textContent.trim(),
        href: a.href,
        hasPhone: a.href.includes('918861699354')
      }));
    });

    console.log(`\n--- WHATSAPP LINKS CHECK (+91 8861699354) ---`);
    for (const l of waLinks) {
      console.log(`  [${l.hasPhone ? 'OK' : 'FAIL'}] ${l.text.replace(/\s+/g, ' ')} -> ${l.href.slice(0, 50)}...`);
    }

    console.log('\nALL MOBILE AND CALCULATOR VERIFICATIONS COMPLETE!');
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
