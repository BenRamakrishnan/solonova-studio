import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Simple static server simulating GitHub Pages subpath: /solonova-studio/
const distDir = path.resolve('dist');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/solonova-studio/')) {
    reqPath = reqPath.replace('/solonova-studio/', '/');
  } else if (reqPath === '/solonova-studio') {
    res.writeHead(301, { Location: '/solonova-studio/' });
    res.end();
    return;
  }
  
  let filePath = path.join(distDir, reqPath === '/' ? 'index.html' : reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found: ' + req.url);
  }
});

server.listen(4173, async () => {
  console.log('Simulating GitHub Pages subpath server at http://localhost:4173/solonova-studio/');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Listen for any 404 responses
    const failedRequests = [];
    page.on('response', resp => {
      if (resp.status() >= 400) {
        failedRequests.push(`${resp.status()} ${resp.url()}`);
      }
    });

    await page.goto('http://localhost:4173/solonova-studio/', { waitUntil: 'networkidle0' });

    // Scroll to showcase section to ensure lazy-loaded images are triggered
    await page.evaluate(() => {
      const showcase = document.getElementById('showcase-root');
      if (showcase) showcase.scrollIntoView();
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Evaluate all images in the document
    const imageReport = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        visible: img.offsetWidth > 0 && img.offsetHeight > 0
      }));
    });

    console.log('\n--- IMAGE STATUS REPORT (SHOWCASE CARDS) ---');
    let allOk = true;
    for (const report of imageReport) {
      const isLoaded = report.complete && report.naturalWidth > 0;
      console.log(`[${isLoaded ? 'OK' : 'FAILED'}] ${report.alt || 'No Alt'}`);
      console.log(`  Source: ${report.src}`);
      console.log(`  Dimensions: ${report.naturalWidth}x${report.naturalHeight}`);
      if (!isLoaded) allOk = false;
    }

    // Now test opening a modal
    console.log('\n--- TESTING MODAL IMAGE LOAD ---');
    await page.click('.open-case-study-btn');
    await new Promise(resolve => setTimeout(resolve, 800));

    const modalImageReport = await page.evaluate(() => {
      const modal = document.getElementById('modal-root');
      if (!modal) return null;
      const img = modal.querySelector('img');
      if (!img) return null;
      return {
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      };
    });

    if (modalImageReport) {
      const isModalImgLoaded = modalImageReport.complete && modalImageReport.naturalWidth > 0;
      console.log(`[${isModalImgLoaded ? 'OK' : 'FAILED'}] Modal Image: ${modalImageReport.alt}`);
      console.log(`  Source: ${modalImageReport.src}`);
      console.log(`  Dimensions: ${modalImageReport.naturalWidth}x${modalImageReport.naturalHeight}`);
      if (!isModalImgLoaded) allOk = false;
    } else {
      console.error('[FAIL] Modal or modal image not found');
      allOk = false;
    }

    if (failedRequests.length > 0) {
      console.log('\n--- FAILED NETWORK REQUESTS (4xx/5xx) ---');
      failedRequests.forEach(req => console.log('  ' + req));
    } else {
      console.log('\nZero 404/500 network errors detected!');
    }

    if (allOk && failedRequests.length === 0) {
      console.log('\nSUCCESS: All images loaded perfectly on GitHub Pages subpath simulation!');
    } else {
      console.error('\nFAILURE: Some images failed to load!');
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Test error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
