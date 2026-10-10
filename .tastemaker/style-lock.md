# SOLONOVA style lock

Established 2026-10-01 from the existing site and the user's explicit instruction to preserve its design language. No global profile exists or was created.

## Identity and structure

Retain the existing SOLONOVA mark, centered editorial hero, flowing triangular mesh with cross markers, portfolio gallery, process, comparison, INR calculator, contact, and dark footer. This is a refinement pass; structural rotation, new palettes, new logos, and registry substitutions would contradict the user brief. The vanilla-JavaScript/Vite stack remains.

## Palette and contrast contract

- White #FFFFFF, light surface #FAFAFB, badge surface #F4F4F6, ink #09090B.
- Original decorative gold #C5A059 is retained for ornaments, borders, and marks.
- Gold text #856324: 5.52:1 on white, 5.29:1 on light surface. Do not use decorative gold for small text on white.
- Body #52525B: 7.73:1 on white. Muted text #64646D replaces the borderline #71717A on badges.
- Green text #047857: 5.48:1 on white, 5.24:1 on #F0FDF4.
- Amber text #A65F08: 4.93:1 on white, 4.72:1 on light surface.
- Dark sections use white and #A1A1AA (7.76:1 on #09090B), never the light-surface muted token.
- Small metric values use ink. Focus uses dark gold and is immediate. Hairlines and mesh lines are decorative. Redundant step numbers use readable dark gold and remain hidden from the accessibility tree because timeline labels already convey the sequence.

## Typography, shape, and density

Playfair Display headings (roman and italic), Plus Jakarta Sans body, Space Grotesk short labels. Self-host the original Latin variable fonts with their licenses. Keep the fluid type scale, pill actions, nested 34px/28px cards, white surfaces, soft depth, generous section rhythm, and mobile card reflow. Card body padding is 20–32px. Project images retain their visual content with responsive WebP variants.

## Motion and behavior

150ms feedback, 220ms panels, 280ms/8px reveals, strong ease-out. Hover movement is limited to fine pointers and interactive cards. Retain the wireframe's perspective but use a lightweight canvas renderer; deformation follows screen coordinates and clicks produce expanding ripples. Render at up to 40fps desktop/24fps touch, cap pixel ratio at 1.5, pause hidden tabs, and react to live reduced-motion changes. A visitor can pause decorative motion. Long beacon/marquee effects are ambient marketing signals with reduced-motion and pause support.

Use native dialog isolation plus explicit focus-edge handling. Filters retain focus after updates. The calculator handoff preserves chosen features and manual text. The inquiry form prepares a draft and identifies the visitor-controlled send step; it never claims receipt or simulates a network submission.

## October 10 refinement

Keep the two main hero actions and a quieter WhatsApp text link. Remove repeated status badges from the hero and nested cards from service targets. Give reading sections opaque white surfaces; keep the mesh visible in the hero and pause its renderer when that section is offscreen. Observer callbacks must respect visitor pause, hidden tabs, and reduced motion.

Portfolio imagery leads: no darkening, crop, metadata overlay, or hover zoom. Short display titles and compact concept disclosures sit below the previews. Dialog titles sit above a complete preview, with a full-size original-image link. Keep the six concepts and their existing identity.

Navigation must fit above its 1160px mobile breakpoint; release the secondary founder badge below 1381px. Menu targets remain 44px square even at 320px. Green navigation text switches to white on a dark hover surface. Calculator and form actions stay on one line at 320px; required fields are visibly marked and selectors use at least 16px text.

This pass uses the existing native dialog, CSS transitions, and Canvas2D renderer. Adding a registry or animation library would increase weight without improving the required behavior. The preserved centered hero, italic serif emphasis, original mark, and existing decorative glyphs are deliberate exceptions to generic skill defaults, required by the user's preservation brief.

## Review record

Static motion scan: no high findings. Existing decorative star/check/clock glyphs are retained for identity continuity; they are low-confidence scanner warnings rather than newly introduced emoji artwork. No animation library was added for simple transitions. No new illustrations or registry components were sourced. The owner confirmed all six projects are concepts. Label them as studies, with proposed stacks and design goals; do not present invented client locations, delivery outcomes, conversion rates, or user counts.

Project decision log and build log were created. The refinement is pending visual review by the user. No personal preference was promoted outside this project.
