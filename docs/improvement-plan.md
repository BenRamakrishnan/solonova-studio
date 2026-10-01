# SOLONOVA improvement plan

User brief: preserve the existing website and its design language; make modest refinements, a cleaner presentation, and an obviously interactive background. Aim for 9–9.5/10 design quality and 95+ desktop and simulated-mobile Lighthouse scores. Plan first, implement, then verify.

## Baseline

Prior production audit: desktop Performance 92 / Accessibility 96 / Best Practices 100 / SEO 92. Simulated mobile Performance 53, repeat 62; LCP 5.0–5.5 seconds. JavaScript 609 KB (153 KB gzip). Two initial portfolio images approximately 1 MB combined. Google Fonts adds a blocking external stylesheet. Valid contact submission fails on undefined variables. Narrow modal and intermediate-width navigation overflow.

## Design contract

Keep the SOLONOVA mark, white/black/gold palette, Playfair Display and Plus Jakarta Sans typography, heading wording, section order, project imagery, layered cards, and pricing model. Refine rather than rebuild. No invented results, testimonials, or performance claims. Decorative gold stays; text receives a darker, contrast-safe shade.

## Implementation sequence and acceptance

1. **Foundation and polish:** contrast-safe text and focus tokens, restrained shadows/motion, 44px touch controls, early navigation collapse. Check widths 320, 375, 412, 768, 1024, 1440.
2. **Interactive wireframe:** a lightweight projected canvas renderer retaining the flowing mesh/cross motif, direct pointer displacement, click ripples, limited pixel ratio/frame rate, hidden-tab pause, live reduced-motion support, graceful fallback. Verify actual pointer response and reduced-motion behavior.
3. **Loading:** self-host the existing Latin font faces and preload the critical display font; responsive compressed portfolio previews; remove the heavy Three.js runtime from the entry bundle. Compare production asset sizes and loading metrics.
4. **Real interactions:** explicit WhatsApp draft handoff with safe text output and no false received confirmation; coherent priority delivery estimates; all chosen features included in scope; keyboard filter focus retained; modal reflow and proper background isolation. Test representative and edge cases without sending messages.
5. **Discovery:** clear website-design title/description, absolute social metadata using the existing configured site URL, robots file and minimal structured data. Verify links and Lighthouse SEO.
6. **Verification:** production build, focused functional tests, console check, keyboard review, cross-viewport screenshots and overflow checks; sequential Lighthouse desktop/mobile runs without competing browser activity. Iterate on measured failures, preserving real animation rather than hiding it for benchmarks.

## Reporting

Record achieved scores, metric timings, remaining limits, and subjective design ratings in a final verification report. Lighthouse is a lab measurement and varies; a subjective 9.5 is not an automated pass criterion. Do not represent simulated measurements as real-user Core Web Vitals or guarantee scores across devices.
