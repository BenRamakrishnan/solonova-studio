import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\benra\\.gemini\\antigravity-ide\\brain\\7daec0c2-6203-499d-b00a-3d31d7ce036b';

const TARGETS = [
  { name: 'desktop_1920x1080.png', width: 1920, height: 1080 },
  { name: 'tablet_768x1024.png', width: 768, height: 1024 },
  { name: 'mobile_375x812.png', width: 375, height: 812 },
  { name: 'small_mobile_320x568.png', width: 320, height: 568 }
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    pipe: true,
    args: ['--headless=new', '--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 600));

  for (const t of TARGETS) {
    await page.setViewport({ width: t.width, height: t.height });
    await new Promise(r => setTimeout(r, 300));
    const outPath = path.join(ARTIFACT_DIR, t.name);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`✓ Captured screenshot: ${t.name} (${t.width}x${t.height})`);
  }

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
