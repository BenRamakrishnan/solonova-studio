# SOLONOVA design tokens

Current values from src/styles/tokens.css, verified 2026-10-01. Preserve the original editorial identity and section structure when refining the website.

## Color

| Purpose | Value |
| --- | --- |
| Canvas / elevated surface | #FFFFFF |
| Secondary surface | #FAFAFB |
| Badge surface | #F4F4F6 |
| Ink / dark section | #09090B |
| Body text | #52525B |
| Muted light-surface text | #64646D |
| Decorative gold | #C5A059 |
| Gold text / focus | #856324 |
| Amber text | #A65F08 |
| Green text | #047857 |
| Muted dark-surface text | #A1A1AA |

Keep decorative gold for ornaments and lines. Use the darker text token for small gold text on white. Dark sections need their own light text colors.

## Type, shape, and motion

- Display: Playfair Display, including the existing italic heading treatment.
- Body and controls: Plus Jakarta Sans.
- Short technical labels: Space Grotesk.
- Original fonts are self-hosted with font-display: swap.
- Outer/inner card radii: 34px / 28px; small-screen inner radius 14px.
- Fluid card padding: 20–32px. Maximum container 1280px; narrow container 1100px.
- Minimum action height: 44px. Focus appears immediately with a visible dark-gold outline.
- Timing: 150ms feedback, 220ms panels, 280ms reveals; reveals move 8px and do not hide useful content while loading.
- Hover lifts only for interactive cards with a fine pointer. Reduced-motion preferences and the visitor pause control stop decorative animation.

Full decisions and contrast ratios are in .tastemaker/style-lock.md.
