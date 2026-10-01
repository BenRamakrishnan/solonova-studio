import { launchBrowser } from './helpers/browser.js';
import { createPreviewServer } from './helpers/preview-server.js';

const port = Number(process.env.PREVIEW_PORT || 4175);
const server = createPreviewServer();

server.listen(port, '127.0.0.1', async () => {
  console.log(`Simulating GitHub Pages at http://127.0.0.1:${port}/solonova-studio/`);
  
  let browser;
  try {
    browser = await launchBrowser();

    const page = await browser.newPage();
    
    // Listen for any 404 responses
    const failedRequests = [];
    page.on('response', resp => {
      if (resp.status() >= 400) {
        failedRequests.push(`${resp.status()} ${resp.url()}`);
      }
    });

    await page.goto(`http://127.0.0.1:${port}/solonova-studio/`, { waitUntil: 'networkidle0' });

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
