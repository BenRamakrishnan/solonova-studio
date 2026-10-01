# SOLONOVA technical review

Reviewed 1 October 2026. This pass covers the application modules, CSS, project data, build configuration, maintenance scripts, dependency lockfile, and GitHub Pages workflow. The original visual identity and page structure are retained.

## Issues corrected

- Canonical, social, structured-data, and discovery URLs referenced a different domain from the active GitHub Pages deployment. One build configuration now generates these consistently and preserves the `/solonova-studio/` subpath.
- The social image named `.png` contained JPEG data. Metadata now uses the existing correctly named JPEG, and build verification checks its signature.
- Dialog and calculator handoffs now focus the destination field. Dialog closing restores the prior scroll state and trigger focus. Portfolio rendering escapes template data and uses a scoped event instead of a global opener.
- Mobile navigation now has predictable opening focus, Escape dismissal, and cleanup when crossing the desktop breakpoint.
- A missing Canvas2D context now leaves useful content and the motion control available. Component failures are logged and critical sections expose a contact fallback.
- Contact details and URL encoding are centralized. Inquiry editing invalidates an outdated prepared draft; manual notes and scope selections survive handoff. Draft preparation continues to use safe text nodes.
- Unused pricing/testimonial data and obsolete drawer styles were removed. The unused Three.js dependency was removed during the visual refinement.
- Maintenance browser scripts use a shared portable browser helper and project-subpath server, close resources, and report verification failures through exit status. The old arithmetic-only viewport approximation was replaced with real browser evidence.
- Deployment uses a strict lockfile install, Node.js 24, reviewed action commit pins, and the same lint/test/build/asset gate as local development. A deployed revision marker makes the live version independently identifiable.

## Verification

The clean `npm ci` and complete `npm run check` passed. The gate includes:

- ESLint across application JavaScript, configuration, and maintenance scripts.
- 14 behavioral tests covering scope arithmetic and handoff, motion lifecycle and Canvas fallback, safe HTML text, component failure reporting, focus/scroll, metadata, and the preview server.
- A production build: approximately 96 KB JavaScript, 23 KB gzipped.
- 28 production asset references, responsive image signatures, metadata/discovery consistency, and CSS parsing.

`npm audit --audit-level=low` reported **0 vulnerabilities** in the installed dependency tree.

Browser checks used a production build served under `/solonova-studio/`. They covered mobile navigation, dialog Tab/Shift+Tab and focus handoffs, portfolio arrow-key filtering, the SaaS priority estimate (₹61,000 / 6 days), scope and manual-note retention, draft escaping and invalidation, and decorative motion pause/resume. The checked paths produced no browser console warnings or errors. Widths 320, 375, 412, 768, 1024, 1440, and 1920px had no document overflow or component fallback errors. Details are in `verification/technical-browser.json`.

Fresh Lighthouse 13.5.0 checks of this build returned **100/100 in all four categories on desktop**. Simulated mobile returned **95 performance / 100 accessibility / 100 best practices / 100 SEO**, with 2.72s largest contentful paint, 19.5ms total blocking time, and 0.00049 layout shift. Run details are in `verification/technical-quality-summary.json`. Earlier visual-pass measurements are retained in `improvement-report.md`; simulated lab scores vary with the test environment and are not real-user guarantees.

The optional Puppeteer maintenance suites were reviewed and linted; they were not executed as part of this pass. Native browser checks supplied the interaction evidence.

## Hosting

Live URL: https://benramakrishnan.github.io/solonova-studio/

The repository Pages setting was still using the `gh-pages` branch while the application workflow deployed an Actions artifact. It has been changed to **GitHub Actions**, with `main` as the application source branch. Each successful workflow publishes the validated production artifact. The live HTML's `build-revision` can be compared with the commit on `main` to confirm that the public site has updated.

The inquiry form prepares a WhatsApp draft; sending is the visitor's action. This review does not verify external message delivery, every possible browser/device combination, or future dependency disclosures.
