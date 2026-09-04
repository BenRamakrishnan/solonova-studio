import fs from 'fs';
import path from 'path';

console.log('--- SOLONOVA MASTER AUDIT VERIFICATION SUITE ---');

let passes = 0;
let failures = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passes++;
  } else {
    console.error(`[FAIL] ${message}`);
    failures++;
  }
}

// 1. Check index.html semantic landmarks and skip link
const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf-8');
assert(indexHtml.includes('<a href="#main-content" class="skip-link">'), 'Skip link to main content exists');
assert(indexHtml.includes('<main id="main-content"'), 'Main landmark has matching id="main-content"');
assert(indexHtml.includes('lang="en"'), 'HTML has valid language tag');
assert(indexHtml.includes('<meta name="viewport"'), 'Viewport meta tag is properly configured');
assert(indexHtml.includes('<meta name="description"'), 'SEO meta description is present');
assert(indexHtml.includes('<title>'), 'Document title is present');

// 2. Check tokens.css z-index scale and focus ring
const tokensCss = fs.readFileSync(path.resolve('src/styles/tokens.css'), 'utf-8');
assert(tokensCss.includes('--focus-ring:'), 'Unified --focus-ring token is declared');
assert(tokensCss.includes('--z-canvas:'), 'Z-index scale token --z-canvas is defined');
assert(tokensCss.includes('--z-sticky-nav:'), 'Z-index scale token --z-sticky-nav is defined');
assert(tokensCss.includes('--z-drawer-backdrop:'), 'Z-index scale token --z-drawer-backdrop is defined');
assert(tokensCss.includes('--z-modal-backdrop:'), 'Z-index scale token --z-modal-backdrop is defined');
assert(tokensCss.includes('--z-skip-link:'), 'Z-index scale token --z-skip-link is defined');
assert(!tokensCss.includes('999999'), 'No arbitrary 999999 z-index found in tokens');

// 3. Check reset.css focus-visible
const resetCss = fs.readFileSync(path.resolve('src/styles/reset.css'), 'utf-8');
assert(resetCss.includes(':focus-visible'), 'Universal :focus-visible ring is active in reset.css');
assert(!resetCss.includes('outline: none;') || resetCss.includes(':focus-visible'), 'Focus states are not suppressed without focus-visible replacement');

// 4. Check typography.css clamps
const typoCss = fs.readFileSync(path.resolve('src/styles/typography.css'), 'utf-8');
assert(typoCss.includes('clamp(2.25rem'), 'h1 uses mobile-safe clamp starting at 2.25rem');
assert(typoCss.includes('text-wrap: balance'), 'Headings utilize text-wrap: balance');
assert(typoCss.includes('text-wrap: pretty'), 'Paragraphs utilize text-wrap: pretty');

// 5. Check animations.css reduced-motion and spin keyframes
const animCss = fs.readFileSync(path.resolve('src/styles/animations.css'), 'utf-8');
assert(animCss.includes('@media (prefers-reduced-motion: reduce)'), 'prefers-reduced-motion media query is implemented in animations.css');
assert(animCss.includes('@keyframes spin'), 'Spin keyframe animation is declared');

// 6. Check main.css responsive rules
const mainCss = fs.readFileSync(path.resolve('src/styles/main.css'), 'utf-8');
assert(mainCss.includes('.hero-cta-group'), 'Hero CTA group mobile stacking rules are defined');
assert(mainCss.includes('.reveal-on-scroll'), 'Safe class-based scroll reveal is implemented');
assert(mainCss.includes('@media (prefers-reduced-motion: reduce)'), 'Scroll reveal supports reduced motion');

// 7. Check Background3D.js graceful degradation and mobile performance
const bg3dJs = fs.readFileSync(path.resolve('src/components/Background3D.js'), 'utf-8');
assert(bg3dJs.includes('webglcontextlost'), 'WebGL context lost recovery handler implemented');
assert(bg3dJs.includes('prefers-reduced-motion'), 'Three.js background respects prefers-reduced-motion');
assert(bg3dJs.includes('segX = isMobile ? 45 : 75'), 'Mobile geometry segment optimization is present');
assert(bg3dJs.includes('canvas.style.display = \'none\''), 'Graceful CSS fallback if WebGL is unavailable');

// 8. Check Pitch Deck complete removal
const navJs = fs.readFileSync(path.resolve('src/components/Navbar.js'), 'utf-8');
assert(!navJs.includes('pitch-mode-btn'), 'Pitch mode button removed from Navbar');
assert(!navJs.includes('mobile-pitch-btn'), 'Mobile pitch button removed from Navbar');
const contactSrc = fs.readFileSync(path.resolve('src/components/ContactSection.js'), 'utf-8');
assert(!contactSrc.includes('open-pitch-deck-contact-btn'), 'Pitch deck trigger removed from Contact section');
assert(!indexHtml.includes('pitch-drawer-root'), 'pitch-drawer-root div removed from index.html');

// 9. Check ProjectModal.js accessibility & focus trap
const modalJs = fs.readFileSync(path.resolve('src/components/ProjectModal.js'), 'utf-8');
assert(modalJs.includes('role="dialog"'), 'Project modal has dialog role');
assert(modalJs.includes('aria-modal="true"'), 'Project modal has aria-modal=true');
assert(modalJs.includes('e.key === \'Tab\''), 'Keyboard focus trap implemented for Project modal');

// 10. Check Hero.js benchmark tab accessibility
const heroJs = fs.readFileSync(path.resolve('src/components/Hero.js'), 'utf-8');
assert(heroJs.includes('role="tablist"'), 'Hero benchmark switcher has role=tablist');
assert(heroJs.includes('role="tab"'), 'Hero benchmark buttons have role=tab');
assert(heroJs.includes('role="tabpanel"'), 'Hero benchmark content panels have role=tabpanel');
assert(heroJs.includes('ArrowRight') && heroJs.includes('ArrowLeft'), 'Hero tabs support Arrow key navigation');

// 11. Check AgencyVsSolo.js comparison table responsiveness
const tableJs = fs.readFileSync(path.resolve('src/components/AgencyVsSolo.js'), 'utf-8');
assert(tableJs.includes('table-scroll-wrapper'), 'Table has dedicated scroll wrapper');
assert(tableJs.includes('table-scroll-hint'), 'Table provides mobile swipe cue');
assert(tableJs.includes('scope="col"'), 'Table has accessible column headers');
assert(tableJs.includes('scope="row"'), 'Table has accessible row headers');

// 12. Check ScopeCalculator.js mobile padding
const calcJs = fs.readFileSync(path.resolve('src/components/ScopeCalculator.js'), 'utf-8');
assert(calcJs.includes('clamp(1.25rem'), 'Scope calculator output uses responsive clamp padding');

// 13. Check ContactSection.js form accessibility & validation
const contactJs = fs.readFileSync(path.resolve('src/components/ContactSection.js'), 'utf-8');
assert(contactJs.includes('autocomplete="name"'), 'Name input has autocomplete="name"');
assert(contactJs.includes('autocomplete="email"'), 'Email input has autocomplete="email"');
assert(contactJs.includes('role="status"'), 'Form feedback has role="status"');
assert(contactJs.includes('aria-live="polite"'), 'Form feedback has aria-live="polite"');
assert(contactJs.includes('Invalid email address'), 'Email regex validation and failure state present');

// 14. Check Showcase.js semantics (no nested interactive controls)
const showcaseJs = fs.readFileSync(path.resolve('src/components/Showcase.js'), 'utf-8');
assert(!showcaseJs.includes('<article role="button"'), 'No nested interactive controls on showcase cards');
assert(showcaseJs.includes('open-case-study-btn'), 'Buttons trigger case study modal');
assert(showcaseJs.includes('role="tablist"'), 'Category filters have role=tablist');

// 15. Check Footer.js copy
const footerJs = fs.readFileSync(path.resolve('src/components/Footer.js'), 'utf-8');
assert(!footerJs.includes('ACTIVE AGENT SKILLS'), 'Internal developer agent jargon removed from footer');
assert(footerJs.includes('ATELIER DISCIPLINES & STANDARDS'), 'Client-facing atelier disciplines featured');
assert(!footerJs.includes('href="#"'), 'No dead href="#" links in footer');

console.log(`\nVerification Suite Completed: ${passes} PASS, ${failures} FAIL`);
if (failures > 0) {
  process.exit(1);
} else {
  console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY!');
}
