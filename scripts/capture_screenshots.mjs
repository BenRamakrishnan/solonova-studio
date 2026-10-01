import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { withBrowser } from './helpers/browser.js';

const output = path.resolve(process.env.SCREENSHOT_DIR || 'docs/verification');
const targetUrl = process.env.PREVIEW_URL || 'http://127.0.0.1:4173/';
const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
  { name: 'small-mobile', width: 320, height: 568 }
];

await mkdir(output, { recursive: true });
await withBrowser(async browser => {
  const page = await browser.newPage();
  for (const viewport of viewports) {
    const { name, ...dimensions } = viewport;
    await page.setViewport(dimensions);
    await page.goto(targetUrl, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(output, name + '.png'), fullPage: false });
    console.log(`Saved ${name} screenshot.`);
  }
});
