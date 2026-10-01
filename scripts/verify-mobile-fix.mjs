import { launchBrowser } from './helpers/browser.js';
import { createPreviewServer } from './helpers/preview-server.js';
import assert from 'node:assert/strict';

const port = Number(process.env.PREVIEW_PORT || 4176);
const server = createPreviewServer();

server.listen(port, '127.0.0.1', async () => {
  let browser;
  try {
    browser = await launchBrowser();

    const page = await browser.newPage();

    for (const vp of [{ w: 320, h: 568 }, { w: 375, h: 812 }, { w: 390, h: 844 }]) {
      await page.setViewport({ width: vp.w, height: vp.h });
      await page.goto(`http://127.0.0.1:${port}/solonova-studio/`, { waitUntil: 'networkidle0' });

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
      assert.ok(navMetrics.isNoOverlap && navMetrics.isBrandLeftAligned && navMetrics.isActionsRightAligned, 'mobile navigation fits');

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
      assert.ok(calcMetrics.isNoOverlap, 'currency does not overlap the estimate');

      // Seven sections add four section fees to the base, producing ₹34,500.
      await page.evaluate(() => {
        const range = document.getElementById('calc-pages');
        if (range) {
          range.value = '7';
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
      assert.equal(updatedPrice.priceText, '34,500');
      assert.ok(updatedPrice.isNoOverlap, 'updated currency does not overlap the estimate');
    }

    // 3. Verify WhatsApp destination links have 918861699354 in href but NO raw digits in visible text
    const waLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="wa.me"]'));
      return links.map(a => ({
        text: a.textContent.trim(),
        href: a.href,
        hasPhoneInHref: a.href.includes('918861699354'),
        noPhoneInText: !a.textContent.includes('8861699354')
      }));
    });

    console.log(`\n--- WHATSAPP LINKS & PRIVACY CHECK ---`);
    for (const l of waLinks) {
      assert.ok(l.hasPhoneInHref && l.noPhoneInText, 'WhatsApp destination and display label are correct');
      console.log(`  [${l.hasPhoneInHref && l.noPhoneInText ? 'OK' : 'FAIL'}] Label: "${l.text.replace(/\s+/g, ' ')}" | Href: ${l.href.slice(0, 50)}...`);
    }

    // 4. Verify scroll-margin-top on #calculator
    const scrollMargin = await page.evaluate(() => {
      const el = document.getElementById('calculator');
      return window.getComputedStyle(el).scrollMarginTop;
    });
    console.log(`\n--- SCROLL-MARGIN-TOP CHECK ---`);
    console.log(`  #calculator scrollMarginTop: ${scrollMargin}`);
    assert.ok(parseFloat(scrollMargin) >= 80, 'calculator accounts for the sticky navigation');

    console.log('\nALL MOBILE, PRIVACY, AND CALCULATOR VERIFICATIONS COMPLETE!');
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
