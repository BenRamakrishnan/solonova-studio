# SOLONOVA architecture

Current implementation, verified 2026-10-01.

The website is a single landing page using vanilla JavaScript modules and Vite. It mounts navigation, hero, service targets, concept portfolio, process, comparison, INR estimator, contact, and footer into semantic slots in index.html. There is no live pitch drawer, central observable store, or inquiry backend.

## Structure

- src/main.js: guarded component mounting and IntersectionObserver reveals. Useful content mounts before the decorative canvas starts.
- src/components/Background3D.js: Canvas2D rendering of a perspective triangular wave mesh, pointer deformation and click ripples. Caps pixel ratio and frame rate; pauses in hidden tabs, honors live reduced-motion preferences, and exposes a visitor pause control. The initializer returns cleanup.
- Showcase.js and ProjectModal.js: category tabs with keyboard navigation and focus retention; native dialog with background isolation, Escape dismissal, focus looping, and focus restoration.
- ScopeCalculator.js: INR scope selection and handoff. src/utils/scope.js owns pure fee/day calculations, budget bands, and brief formatting. src/utils/contact.js owns shared contact details and encoded WhatsApp links.
- ContactSection.js: local validation and safe draft preparation using text nodes. The visitor reviews and sends the draft in WhatsApp. Fields and manual notes are retained.
- src/data/projects.js: six owner-confirmed concept/demo studies, with design goals and suggested stacks instead of client outcome metrics.
- src/styles/: tokens, original component/layout styles, local font faces, motion rules, and targeted refinements. .tastemaker/style-lock.md records the preservation contract.
- public/fonts/: self-hosted Latin variable fonts and licenses. public/showcase/: original JPEGs plus responsive 320/640/960 WebP previews; regenerate with scripts/optimize-previews.py.
- config/site.js and content/seo/: one deployment URL drives canonical/social metadata, structured data, and generated robots.txt, sitemap.xml, and llms.txt. The default matches the live GitHub Pages project URL.
- src/utils/html.js, mount.js, and scroll.js: safe template text, visible failures for critical sections, and accessible focus handoffs.
- scripts/*.test.js: 14 tests covering pricing/handoff, motion lifecycle and fallback, safe text, mounting, focus/scroll, deployment metadata, and the project-subpath preview server.

## Deployment and validation

npm run check runs lint, the behavioral tests, the production build, and generated asset/metadata/CSS validation. Node.js 24 is used locally and in CI. npm run preview -- --host 127.0.0.1 --port 4173 previews production output. Vite keeps the existing relative base and uses appType: 'mpa'; the site navigates through anchors and missing resources return genuine 404 responses.

The GitHub Pages Actions workflow runs the complete gate before uploading and deploying dist on pushes to main. SITE_URL comes from the Pages configuration; build-revision metadata records GITHUB_SHA for live-version verification.

Local production checks do not verify message delivery or real-user performance. Visual measurements are recorded in docs/improvement-report.md; the subsequent technical review is in docs/technical-report.md. Browser evidence is in docs/verification/.
