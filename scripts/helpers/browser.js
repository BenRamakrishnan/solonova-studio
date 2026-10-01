import { existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

export function chromePath() {
  const candidates = process.env.CHROME_PATH ? [process.env.CHROME_PATH] : {
    win32: ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'],
    darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
    linux: ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
  }[process.platform] || [];
  const executable = candidates.find(candidate => existsSync(candidate));
  if (!executable) throw new Error('Chrome was not found. Set CHROME_PATH to your installed browser executable.');
  return executable;
}

export function launchBrowser() {
  return puppeteer.launch({ executablePath: chromePath(), headless: true });
}

export async function withBrowser(run) {
  const browser = await launchBrowser();
  try { return await run(browser); } finally { await browser.close(); }
}
