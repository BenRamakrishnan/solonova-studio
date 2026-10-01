# SOLONOVA improvement and verification report

This records the earlier visual refinement pass. The subsequent code review and hosting update are recorded in `technical-report.md`.

Verified 1 October 2026 against the local production build at http://127.0.0.1:4173/.

The original identity and page structure are preserved. The refinement delivers a cleaner presentation, an interactive perspective mesh, functional inquiry handoffs, and 95+ scores across all four main Lighthouse categories in the final desktop and simulated-mobile checks.

## Measured results

| Category / metric | Previous desktop | Final desktop | Previous simulated mobile | Final simulated mobile, two runs |
| --- | --- | --- | --- | --- |
| Performance | 92 / 100 | **100 / 100** | 53–62 / 100 | **97–99 / 100** |
| Accessibility | 96 / 100 | **100 / 100** | 96 / 100 | **100 / 100** |
| Best practices | 100 / 100 | **100 / 100** | 100 / 100 | **100 / 100** |
| SEO | 92 / 100 | **100 / 100** | 92 / 100 | **100 / 100** |
| First contentful paint | 1.0 s | **0.3 s** | 4.4–4.7 s | **1.1 s** |
| Largest contentful paint | 1.4 s | **0.4 s** | 5.0–5.5 s | **2.0 s** |
| Total blocking time | 110 ms | **0 ms** | 290–510 ms | **0–20 ms** |
| Cumulative layout shift | 0.026 | **0.001** | 0 | **0–0.0005** |

LCP is a duration, rather than a score out of 100. The final mobile LCP is approximately 60–64% faster than the earlier measurements.

Final measurement times: desktop 07:54:59 UTC; mobile 07:56:04 UTC; mobile confirmation 07:57:44 UTC. Lighthouse 13.5.0, Chrome 154, production preview, separate sequential runs with the UI test tab closed. Mobile used Lighthouse's simulated network throttling and 4× CPU slowdown at 412×823; desktop used the desktop preset. Decorative animation remained enabled. No audit skips, test-only animation hiding, or score overrides were used. All final runs completed without Lighthouse warnings.

The two mobile runs are reported together. Their speed index varied from 1.2 to 4.0 seconds while LCP stayed at 2.0 seconds; lab scores should not be treated as identical on every run.

Lighthouse's experimental agentic checks passed where applicable: accessible browsing, layout stability, and llms.txt. WebMCP and the optional resource catalog were not applicable. This is not a claim that the website implements agent booking tools.

## Design assessment

These are editorial judgments of the implemented website, not automated measurements or a guarantee that every viewer will agree.

| Area | Assessment / 10 | Evidence |
| --- | --- | --- |
| Overall visual design | **9.5** | The existing editorial hero, gold details, logo, and nested cards remain cohesive; spacing and surfaces are more restrained. |
| Typography and hierarchy | **9.5** | Original fonts retained and served locally; shorter mobile actions, clearer headings, and readable concept briefs. |
| Color and readability | **9.5** | Decorative gold preserved; darker gold, muted text, green, and amber improve contrast. Final automated contrast checks pass. |
| Animation and interaction | **9.5** | Pointer-local mesh deformation and click ripples; restrained UI transitions, pause control, hidden-tab suspension, and live reduced-motion support. |
| Desktop presentation | **9.5** | Navigation fits, gallery imagery stays full width inside its cards, dialogs and calculator actions work correctly. |
| Responsive presentation | **9.2** | No overflow at seven tested widths; readable 320px hero and dialog, 44px action targets. Long project titles still make some cards taller. |
| Functional user experience | **9.5** | Scope estimates carry features, price, days, budget, and manual notes into a reviewable draft; keyboard focus is retained. |
| Clarity and trust | **9.0** | All six projects honestly identified as concepts. Real client proof and conversion evidence require completed client work. |

**Overall assessment: approximately 9.4 / 10; visual craft approximately 9.5 / 10.** The requested 9–9.5 design range and 95+ measured quality range have been reached. Further commercial credibility would come from genuine client outcomes rather than additional visual decoration.

## What changed

### Presentation

Kept the white/black/gold palette, SOLONOVA mark, Playfair Display / Plus Jakarta Sans / Space Grotesk fonts, headline, section order, project imagery, layered cards, and INR pricing model.

Refined text contrast, focus visibility, card padding, mobile actions, navigation collapse, dialog layout, and touch targets. The process numbers now use smaller, readable gold text. Hover motion is limited to interactive cards on fine pointers; reveals move only 8px and do not hide useful content while it loads.

### Interactive background and loading

Replaced the heavy Three.js background runtime with a lightweight Canvas2D renderer projecting a triangular mesh in perspective. The flowing mesh and cross-marker motif remain. Deformation follows the pointer's screen position, and clicks create expanding ripples.

Pixel ratio is capped at 1.5; rendering is capped at 40fps for fine pointers and 24fps for coarse pointers. Animation pauses in hidden tabs, responds to live reduced-motion preferences, and offers a visitor pause button. Decorative CSS animation pauses with that button too.

Self-hosted the existing variable fonts with their licenses, removed the blocking external font stylesheet, and generated responsive 320/640/960 WebP portfolio previews. The original JPEG files are retained.

| Production JavaScript | Before | After |
| --- | --- | --- |
| Uncompressed | 609.10 KB | **95.41 KB** |
| Gzip | 153.20 KB | **22.93 KB** |

Approximately **84% less JavaScript**, or **85% less after gzip**. No replacement animation library was added.

### Functional behavior and truthful content

- Fixed the inquiry form's undefined timeline/budget variables. It now prepares an explicit WhatsApp draft using safe text nodes, with inline validation and fields retained.
- The visitor reviews and sends the draft in WhatsApp. The form does not claim that a message has been received.
- Changing form values hides an obsolete prepared draft.
- Calculator handoff includes every selected feature, aligns budget and timeline, and preserves manual notes.
- Priority delivery consistently reduces eligible estimates by up to two days; it no longer claims every scope can ship in 48 hours or charges for an ineffective upgrade.
- Portfolio tabs support arrow keys, Home, and End, retaining focus after filtering.
- The concept dialog uses native background isolation, focus-edge looping, Escape dismissal, and return focus. Its header fits at 320px.
- Following the owner's confirmation, all six projects are labeled concepts/demo studies. Removed fictitious client locations and unverified conversion/user/delivery results; the modal now describes design goals and suggested stacks.
- Added a clearer page title/description, absolute social metadata, minimal factual structured data, robots.txt, sitemap.xml, and llms.txt. The configured canonical domain remains https://solonova.ai/.
- Missing optional resources return actual 404 responses rather than the page's HTML.
- Updated project architecture, token, and pitch documentation to match the implementation.

## Verification performed

- **Build:** npm run build passed.
- **Tests:** npm test passed all six tests covering scope arithmetic, priority edge cases, budget boundaries, feature/character preservation, pointer/ripple deformation, pause/resume, hidden tabs, live reduced-motion changes, and cleanup.
- **Browser:** tested empty-field and invalid-email validation, successful draft preparation with special characters, stale-draft hiding, scope handoff, budget/timeline alignment, and note preservation. No external message was sent.
- **Keyboard:** checked portfolio filtering, modal forward/reverse Tab looping, Escape, focus return, and mobile navigation dismissal.
- **Layout:** checked 320, 375, 412, 768, 1024, 1440, and 1920px; no document or selected component overflow. Narrow modal content width equals its scroll width.
- **Console:** no warning or error entries during the functional review.
- **Resources:** homepage and discovery files return 200; absent optional catalog returns 404.
- **Source:** git diff --check passed.

## Evidence

- [Desktop Lighthouse report](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/desktop-final.report.html>)
- [Mobile Lighthouse report, performance 97](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/mobile-final.report.html>)
- [Mobile confirmation, performance 99](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/mobile-confirmation.report.html>)
- [Viewport verification](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/viewports.json>)
- [Implementation plan](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/improvement-plan.md>)
- [Desktop screenshot](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/desktop-final.png>)
- [412px mobile screenshot](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/mobile-412-final.png>)
- [320px mobile screenshot](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/mobile-320-final.png>)
- [Concept portfolio screenshot](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/portfolio-final.png>)
- [Process screenshot](<C:/Users/benra/OneDrive/Desktop/Code Projects/SOLONOVA_AI/docs/verification/process-final.png>)

Full generated Lighthouse reports and screenshots are saved locally and ignored by Git to keep the source repository small. The summary report, plan, tests, and design decisions remain source artifacts.

## Practical limits

These results apply to a local production build in Chromium. Actual phones, Safari/Firefox, deployed hosting, real-user Core Web Vitals, and external contact delivery have not been measured here. A Lighthouse accessibility score is an automated check, not a complete accessibility certification; a SEO score does not measure search ranking.

Mobile Lighthouse still estimates about 41 KiB of possible image savings and roughly 160ms from render-blocking CSS. Responsive previews retain high-density image quality, and the existing design's small stylesheet remains external. Both mobile runs already exceed 95 without removing the requested motion.

No deployment was performed. Check the existing canonical URL and social-image paths against the chosen live host when publishing. Portfolio concepts are not presented as verified client outcomes.
