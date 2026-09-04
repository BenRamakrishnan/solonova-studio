export function renderMetrics() {
  const container = document.getElementById('metrics-root');
  if (!container) return;

  const stats = [
    { value: '10x', label: 'Faster Than Agencies', sub: 'Days, not months of bureaucracy', color: 'var(--accent-amber)' },
    { value: '100', label: 'Lighthouse Performance', sub: 'Zero CLS, sub-second LCP speed', color: 'var(--status-live)' },
    { value: '48h', label: 'Rapid Prototype Window', sub: 'Working software in 2 days', color: 'var(--accent-gold)' },
    { value: '100%', label: 'Full Source Ownership', sub: 'Clean git repository, no lock-in', color: '#09090B' }
  ];

  const marqueeItems = [
    'Flagship Digital Storefronts',
    'AI SaaS Platforms',
    'Bespoke Portfolio Ateliers',
    'High-Conversion Landing Pages',
    'FinTech Terminals',
    '100/100 Lighthouse Performance',
    'Sub-Second LCP Speed'
  ];

  container.innerHTML = `
    <div style="border-block: 1px solid #E4E4E7; background: #FAFAFB; padding-block: var(--space-12);">
      <div class="container" style="margin-bottom: var(--space-10);">
        <div class="grid-4 text-center">
          ${stats.map(s => `
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: var(--space-8) var(--space-6);">
                <div style="font-family: var(--font-display); font-size: clamp(2.8rem, 4.5vw, 4.2rem); font-weight: 800; color: ${s.color}; line-height: 1; margin-bottom: var(--space-3);">
                  ${s.value}
                </div>
                <div style="font-weight: 700; color: #09090B; font-size: 1.18rem; margin-bottom: var(--space-2); letter-spacing: -0.01em;">
                  ${s.label}
                </div>
                <div style="font-size: 0.95rem; color: #52525B; font-family: var(--font-body); line-height: 1.5;">
                  ${s.sub}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Kinetic Marquee Ticker -->
      <div class="marquee-container" aria-hidden="true" style="opacity: 0.9; padding-block: var(--space-3); border-top: 1px solid #E4E4E7;">
        <div class="marquee-content">
          ${marqueeItems.concat(marqueeItems).map(item => `
            <span style="font-family: var(--font-mono); font-size: 1.02rem; font-weight: 600; color: #52525B; display: inline-flex; align-items: center; gap: 1rem; letter-spacing: 0.08em; text-transform: uppercase;">
              ${item}
              <span style="color: var(--accent-gold); font-size: 1.15rem;">✦</span>
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
