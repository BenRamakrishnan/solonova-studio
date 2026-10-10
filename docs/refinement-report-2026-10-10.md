# SOLONOVA refinement — 10 October 2026

The October 6 design review has been applied as a focused refinement. The original mark, white/ink/gold palette, Playfair Display / Plus Jakarta Sans / Space Grotesk fonts, centered hero, section order, pricing, and six concept projects remain the foundation.

## Changes

- **Navigation:** fixed the intermediate desktop width overflow, shortened the WhatsApp label, and released the secondary founder badge sooner. The booking link stays inside the header. Mobile menu controls stay 44 × 44px at 320px and 375px. The WhatsApp hover label now becomes white on black (19.90:1), replacing green on black (3.63:1).
- **Hero and page density:** removed the repeated founder/location pill, kept two main actions, and made direct WhatsApp contact a quieter text link. Tightened the lead copy. Service targets now form a simple grid rather than four nested cards.
- **Portfolio:** removed image overlays and repeated metadata chips. Short display titles and plain concept disclosures give the images more room. Dialog titles sit above an undarkened, uncropped preview, with a real full-size original-image link. Image dimensions match their responsive sources; obsolete overlay and crop styles were removed.
- **Motion:** opaque reading surfaces keep the mesh in the hero. An IntersectionObserver stops continuous rendering outside the hero, resumes it when appropriate, and respects visitor pause, reduced motion, and hidden tabs. Cleanup disconnects the observer; unsupported observers, missing hero elements, and unavailable canvas contexts have tested fallbacks.
- **Pricing and contact:** replaced design jargon with clear website/feature labels, added a changing base-price explanation, kept selector text at 16px, marked required fields, and shortened three actions so they fit on one line at 320px. Existing fee arithmetic and draft handoffs are preserved.
- **Process and footer:** made the service copy more concrete, removed unsupported active-queue wording, and matched the footer wordmark to the header's serif typography.
- **Dependencies:** updated the transitive development dependency `source-map-js` from 1.2.1 to 1.2.2 after a fresh npm audit identified GHSA-68fv-2mgg-jv7q. The resulting audit reported zero vulnerabilities. No runtime dependencies were added.

## Verification

`npm run check` passed: ESLint, all **15 behavioral tests**, Vite production build, and production validation of **28 asset references**, image signatures, metadata, discovery files, and CSS syntax. `git diff --check` passed. Independent source review found and resolved the image-proportion and hover-contrast issues.

Browser checks used the production preview. Navigation bounds and document overflow were checked at requested widths 320, 375, 768, 1024, 1160, 1161, 1280, 1380, 1381, 1440, and 1920px. The browser rounded the two odd widths to 1162 and 1382px. Every visible header control fit inside its shell; there was no document overflow.

Verified mobile opening focus and Escape dismissal; category arrow-key filtering; dialog focus looping, Escape dismissal and trigger restoration; full preview presentation; benchmark panel focus; and visitor motion pause/resume. The SaaS priority estimate remains **₹61,000 / six business days**. The scope handoff retains manual notes, errors focus the first invalid field, draft text is escaped safely, and editing a field invalidates the old draft. No WhatsApp message was sent. No browser console warnings or errors were captured in these checks.

Evidence: [browser summary](verification/refinement-browser.json), [Lighthouse summary](verification/refinement-quality-summary.json). Local screenshots and full Lighthouse reports are retained in `docs/verification/` and ignored by Git.

## Measured quality

Lighthouse **13.5.0**, simulated throttling, production output served locally under `/solonova-studio/`. Final build: `index-BF_2XTGA.js` and `index-DiLm89IA.css`. Initial and final measurements are both retained; the final pair follows the small-screen action-label changes.

| Metric | Desktop | Simulated mobile |
| --- | ---: | ---: |
| Performance | 100 | 95 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| Agentic browsing | 100 | 100 |
| Largest Contentful Paint | 0.61s | 2.79s |
| Total Blocking Time | 0ms | 18ms |
| Cumulative Layout Shift | 0.00038 | 0 |

The final JavaScript is about 89.55KB (22.06KB gzip), and CSS is 35.47KB (8.11KB gzip). This local preview sends uncompressed assets. These are lab results, not real-user performance guarantees. Mobile performance reaches the 95 target; **99 mobile and the under-2.5s LCP target were not achieved in this run**. Lighthouse's perfect accessibility score does not replace screen-reader and real-device testing.

## Design judgment and preservation

The confirmed navigation, required-field, copy, and touch-target findings are resolved. The portfolio now presents the actual images clearly and reading sections have less visual competition. This improves the original design without changing its visual language. A 9.5 design score remains a subjective judgment; it is not inferred from Lighthouse or asserted as a verified result.

Tastemaker's static scans found no high-severity findings. The retained star/check glyphs are existing brand details. The long radar effect is decorative marketing motion with pause/reduced-motion support. Footer reduced-motion handling lives in shared CSS; the portfolio hover rule explicitly sets `transform: none`, so its two scanner warnings do not describe added motion. The original centered hero, italic serif emphasis, and mark intentionally follow the user's preservation request over generic design defaults. Existing native dialog, CSS, and canvas behavior were kept instead of adding an animation library.

The six-axis craft self-review remains Show-don't-tell 4/5, Philosophy 4/5, Hierarchy 4/5, Specificity 4/5, Restraint 4/5, Variety 3/5. The familiar page structure is deliberately preserved, so this is not a claim of a completely new art direction.

Project style lock, build log, and decision log were updated. The new density choices are recorded as pending visual preference review, not fabricated user approval. No personal taste profile was created or promoted.

## Publishing

The authorized destination is `main` in `BenRamakrishnan/solonova-studio`. Its GitHub Pages workflow runs the same automated gate before deploying. The public HTML's `build-revision` identifies the deployed commit; deployment status and the public revision are checked after pushing.

Live URL: https://benramakrishnan.github.io/solonova-studio/
