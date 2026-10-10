# SOLONOVA design review — 6 October 2026

**Design language: 9.0/10. Overall website design and usability: 8.7/10.**

The white, ink, and champagne palette; contrasting serif and sans-serif typography; rounded surfaces; and flowing mesh form a coherent studio identity. The hero is particularly effective. The full experience loses some polish through decorative repetition, long labels, limited inspection of the portfolio imagery, and a confirmed navigation fit problem at intermediate desktop widths.

These are subjective design judgments, not Lighthouse scores or a compliance certification. The overall score is the rounded mean of the category judgments below. This is a stricter reassessment than the earlier optimistic 9.4 overall estimate, informed by the intermediate-width navigation issue and closer inspection of the complete page.

## Ratings

| Parameter | Rating | Assessment |
| --- | --- | --- |
| Brand identity and design language | 9.0/10 | Recognizable editorial studio identity. The luxury and technical cues mostly work together. The footer wordmark treatment differs from the header. |
| Typography | 9.0/10 | Playfair Display and its italic face give the headings character; Plus Jakarta Sans keeps body copy readable. Long project titles and small uppercase labels add density. |
| Color and contrast | 9.2/10 | White, ink, and gold are disciplined; green gives WhatsApp a familiar accent. Examined declared text/background pairs have strong contrast. |
| Hero and first impression | 9.2/10 | Clear visual center, memorable headline, restrained mesh, and distinguishable actions. Some branding and status information is repeated above and below the headline. |
| Layout, spacing, and rhythm | 8.6/10 | Generous spacing and shared card edges. Repeated large heading/paragraph/card patterns make the long page feel more uniform than curated. |
| Visual hierarchy and simplicity | 8.5/10 | Major headings and the black estimate panel work well. Numerous pills, labels, borders, underlines, and secondary facts compete for attention. |
| Cards, buttons, icons, and surface polish | 8.7/10 | Consistent rounded forms and soft depth. Some static badges resemble controls, and the repeated nested card treatment becomes visually heavy. |
| Portfolio imagery and presentation | 8.3/10 | The concepts demonstrate visual range and are honestly labeled. Image overlays, long titles, and metadata reduce room for inspecting the actual designs. The dialog repeats the preview as a darkened banner. |
| Motion and interaction design | 8.8/10 | The mesh suits the identity, reveals are restrained, and pause/resume works. The mesh remains visible behind several reading sections, where a quieter surface would improve focus. |
| Navigation and action clarity | 8.0/10 | Clear section labels and direct paths to work and pricing. The desktop header fails to fit just above the mobile breakpoint, pushing the booking action outside the viewport. |
| Mobile adaptation | 8.5/10 | Hero, cards, dialogs, and forms reflow without document overflow at the checked phone widths. Long copy and labels consume substantial vertical space; menu targets become compact. |
| Copy and communication | 8.0/10 | The offer and WhatsApp draft process are understandable. Terms such as “Awwwards Physics,” “Select Project Architecture,” and “high-velocity vibe coding” are less useful to a prospective buyer than concrete outcomes. |
| Accessibility and interaction polish | 9.0/10 | Visible focus, labeled inputs, specific errors, keyboard dialog behavior, and clear handoffs. Small refinements remain; this limited review does not certify accessibility. |

## Scope and coverage

Reviewed the public single-page website at https://benramakrishnan.github.io/solonova-studio/, serving revision `f9f335bdfdb436578186fb113348bd9968d2824a`. Inspected the header, hero and benchmarks, portfolio and a representative project dialog, process, comparison, calculator, contact form, and footer. Examined wide/intermediate desktop layouts and phone widths of 375px and 320px. Phone checks focused on the hero, menu, portfolio, dialog, calculator, and form.

The implementation uses vanilla JavaScript modules, Vite, CSS tokens, component styles, and targeted responsive refinements. Project conventions inspected: `.tastemaker/style-lock.md`, `docs/design-tokens.md`, and `docs/architecture.md`. No application source or deployed content was changed by this review.

| Domain | Evidence inspected | Result |
| --- | --- | --- |
| Accessibility | Navigation/dialog source, live keyboard dismissal and focus restoration, form validation, calculator handoff, focus appearance, mobile target sizes | 2 low-priority findings; broader assistive-technology testing not performed |
| Layout | All desktop sections, key phone flows, live navigation bounds near the breakpoint | 1 high-priority navigation fit finding |
| Writing | Visible page copy, action labels, required-field messages, scope and draft wording | 1 medium-priority clarity finding |
| Typography | Font definitions, scale/tokens, live headings, long titles, labels, and forms | Strong foundation; mobile select font requires a native-iOS check |
| Colors | Tokens and declared contrast calculations, light/dark surfaces and visible focus | No confirmed contrast finding in inspected pairs |
| UI and motion | Cards, borders, nested radii, dialog presentation, animated mesh, pause/resume, reduced-motion source | No additional confirmed functional finding; visual refinement opportunities below |

## Confirmed findings

| Severity | Domain | Location | Before | Suggested refinement | Why |
| --- | --- | --- | --- | --- | --- |
| HIGH | Layout | `src/styles/main.css:197`, `src/styles/main.css:433`; `src/components/Navbar.js:63` | The full desktop grid stays active above 1160px even when its content is wider than the available space. At a browser-reported width of about 1162px, the booking button extends from x=1133 to x=1271 while the content viewport ends at x=1146. Its label is off-screen. | Collapse or simplify the header at the width where its content actually stops fitting; keep the booking action inside the navigation shell. | Hides a primary control. Document-level overflow checks alone miss it because horizontal overflow is clipped. |
| MEDIUM | Writing | `src/components/ScopeCalculator.js:29`, `src/components/ScopeCalculator.js:57`; `src/components/Footer.js:24` | “Select Project Architecture,” “Kinetic Motion & Awwwards Physics,” and “high-velocity vibe coding” describe the process in technical or promotional terms. | Use concrete buyer-facing labels such as “Website type” and “Custom animations and interactions”; describe the delivered outcome in the footer. | The customer should understand what they are selecting and paying for without knowing design-industry terminology. |
| LOW | Accessibility | `src/styles/main.css:575`, `src/styles/main.css:621`; `src/styles/refinements.css:73` | Later mobile rules override the 44px refinement, producing a 36×36px menu control at 375px and 32×32px at 320px. | Preserve a 44×44px hit area with the same compact visible icon. | Improves touch comfort. This is not being reported as a minimum-target-size compliance failure. |
| LOW | Accessibility | `src/components/ContactSection.js:90`, `src/components/ContactSection.js:96`, `src/components/ContactSection.js:124` | Name, email, and brief are required, but the visible labels do not explain which fields are required before submission. | Add a short required-field convention or visible required markers. | Gives visitors the requirements before they encounter validation. The existing inline error messages are clear. |

## Design refinements with the greatest value

These are editorial judgments rather than additional functional defects:

1. **Let the work occupy more of the portfolio.** Keep the concept disclosure, but reduce overlapping labels and repeated Category/Focus/Direction chips. Offer a clear large preview that is not covered by title text. Evidence: `src/components/Showcase.js:61`, `src/components/Showcase.js:69`, `src/components/Showcase.js:83`, and `src/components/ProjectModal.js:30`.
2. **Reduce repeated decoration selectively.** Keep the signature serif, gold, mesh, and rounded cards. Use fewer badge layers, nested surfaces, and underlines within already complex sections. Evidence: hero brand/status/benchmark layers and the repeated project-card metadata. This preserves the identity while giving the important elements more emphasis.
3. **Make the page quieter as the visitor starts reading details.** The fixed mesh is attractive in the hero but adds texture behind portfolio introductions, comparisons, and contact. Reduce its prominence in these reading areas. Evidence: `src/components/Background3D.js` and the live reading sections.
4. **Shorten titles and form labels.** Several project titles run across three or more lines. Long native-select labels are clipped in the closed control, particularly on phones. Keep the concise project name or service type visible and move descriptive detail into supporting text. Evidence: `src/data/projects.js`, `src/components/Showcase.js:76`, and `src/components/ScopeCalculator.js:30`.

These changes would make a 9–9.5 assessment more credible without changing the website's identity. A future score would still require visual review after the changes.

## Verification and limits

Passed in this review:

- Read the live `build-revision` and confirmed the reviewed deployed version.
- Inspected desktop section navigation, all major page sections, and a representative concept dialog.
- Opened and dismissed the dialog with the keyboard; confirmed trigger focus restoration and the calculator handoff focusing its select.
- Opened the phone menu; verified first-link focus and closing after a section link.
- Used the calculator-to-contact handoff and confirmed the generated brief and contact-name focus.
- Prepared an incomplete local draft; observed “Enter your name.” and “Enter your email.” beside their fields. No external message was sent.
- Confirmed no document overflow at 320px and 375px. Separately measured the clipped intermediate-desktop navigation control.
- Inspected the mesh and its input behavior; confirmed pause/resume state and paused beacon animation. No frame-rate profiling was performed.
- Read captured browser warning/error logs: no entries in the inspected session.
- Examined declared contrast pairs: body on white 7.73:1; muted text on its badge surface 5.33:1; gold text on white 5.52:1; footer muted text on dark 7.76:1; green WhatsApp text on its light surface 5.24:1. These do not constitute an exhaustive contrast audit.

Not verified in this review: physical phones, native iOS focus zoom, screen-reader announcements, 200% browser zoom, RTL/localized layouts, forced loading/network-error states, every project dialog, and runtime reduced-motion preference changes. The calculator select computes to 14.72px on a phone-width viewport; native-iOS focus behavior should be checked before treating it as a confirmed issue. Reduced-motion behavior was inspected in source.

Lighthouse was not rerun. The 1 October technical pass recorded desktop 100/100 in all four categories and simulated-mobile 95 performance/100 in the other categories. Those historical local lab results are separate from this design rating.

## Verdict

**Block a claim of complete responsive polish until the navigation fit issue is corrected.** The core design direction is approved within the coverage above. Keep the identity; prioritize the header fit, clearer portfolio previews, and simpler buyer-facing language.
