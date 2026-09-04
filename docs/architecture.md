# Solonova Architecture & Technical Specification

## Overview
Solonova is an ultra-fast, high-aesthetic web application showcasing a solo vibe-coding studio. It combines a dynamic portfolio, an interactive scope & quote calculator, and a live client presentation deck (Pitch Mode).

## File & Directory Layout

```
SOLONOVA_AI/
├── .agents/skills/            # Agent Skills & Engineering Rules
├── docs/                      # Durable Architectural & Pitch Memory
├── public/                    # Static Assets (favicon, preview graphics)
├── src/
│   ├── assets/                # Icons & Graphic SVG definitions
│   ├── data/                  # Decoupled mock & real project registries
│   │   ├── projects.js        # Portfolio showcase data & case studies
│   │   ├── services.js        # Agency offerings & sprint timelines
│   │   ├── comparison.js      # Solonova vs. Traditional Agency breakdown
│   │   └── testimonials.js    # Client reviews & founder guarantee
│   ├── styles/                # Modular CSS Design System
│   │   ├── reset.css          # Box-sizing, normalize, default zeroing
│   │   ├── tokens.css         # CSS Variables (colors, spacing, shadows, springs)
│   │   ├── typography.css     # Google Fonts Syne & Plus Jakarta Sans rules
│   │   ├── components.css     # Buttons, cards, badges, inputs, sliders
│   │   ├── animations.css     # Luminous glows, tickers, keyframes
│   │   └── main.css           # Grid layouts, container sizes, section flow
│   ├── components/            # UI Component Modules
│   │   ├── Navbar.js          # Header, navigation, status indicator, Pitch toggle
│   │   ├── Hero.js            # Headline, kinetic badge, quick CTA actions
│   │   ├── MetricsBar.js      # Proof points (10x speed, 99+ Lighthouse, 48h turnaround)
│   │   ├── Showcase.js        # Filterable project portfolio with live modal preview
│   │   ├── VibeProcess.js     # 4-stage rapid vibe-coding methodology
│   │   ├── AgencyVsSolo.js    # Comparison card matrix
│   │   ├── ScopeCalculator.js # Interactive quote & scope estimator
│   │   ├── PitchDrawer.js     # Live sales pitch deck drawer for calls
│   │   ├── ProjectModal.js    # Case study deep dive modal
│   │   ├── ContactSection.js  # Direct inquiry form & quick booking channels
│   │   └── Footer.js          # Timezone ticker, brand credits, social links
│   └── main.js                # App bootstrap, state store, event dispatch
├── index.html                 # Semantic HTML entry with SEO & OpenGraph
├── package.json               # Vite dependencies
└── vite.config.js             # Dev server & build configuration
```

## State & Event Flow

- **Store**: A centralized lightweight observable state in `src/main.js`:
  - `activeFilter`: Current category filter for portfolio projects ('all', 'saas', 'ecom', 'web', 'landing').
  - `selectedProject`: Active project opened in `ProjectModal`.
  - `isPitchModeOpen`: Boolean toggling the Founder Live Pitch Drawer.
  - `calculatorState`: Reactive object tracking chosen project type, pages, features, and target timeframe.
- **Event Delegation**: Components bind click and change listeners to predictable dataset attributes (`data-action`, `data-target`), ensuring zero memory leaks and high runtime performance.
