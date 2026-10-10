export function renderMetrics() {
  const container = document.getElementById('metrics-root');
  if (!container) return;

  const stats = [
    { value: '1:1', label: 'Founder Collaboration', sub: 'Direct design and development access', color: 'var(--accent-amber)' },
    { value: '95+', label: 'Performance Target', sub: 'Desktop and mobile checked before launch', color: '#047857' },
    { value: '48h', label: 'Rapid Prototype Window', sub: 'Working software in 2 days', color: 'var(--accent-gold-text)' },
    { value: '100%', label: 'Full Source Ownership', sub: 'Clean git repository, no lock-in', color: '#09090B' }
  ];

  const marqueeItems = [
    'Flagship Digital Storefronts',
    'AI SaaS Platforms',
    'Bespoke Portfolio Ateliers',
    'High-Conversion Landing Pages',
    'FinTech Terminals',
    'Performance-Tested Delivery',
    'Responsive From the Start'
  ];

  container.innerHTML = `
    <div style="border-block: 1px solid #E4E4E7; background: #FAFAFB; padding-block: var(--space-12);">
      <div class="container" style="margin-bottom: var(--space-10);">
        <div class="studio-metrics-grid">
          ${stats.map(s => `
            <div class="studio-metric">
                <div style="font-family: var(--font-display); font-size: clamp(2.2rem, 3.8vw, 3.8rem); font-weight: 800; color: ${s.color}; line-height: 1.05; margin-bottom: var(--space-3);">
                  ${s.value}
                </div>
                <div style="font-weight: 700; color: #09090B; font-size: clamp(1.02rem, 1.6vw, 1.18rem); margin-bottom: var(--space-2); letter-spacing: -0.01em; overflow-wrap: break-word;">
                  ${s.label}
                </div>
                <div style="font-size: clamp(0.85rem, 1.2vw, 0.95rem); color: #52525B; font-family: var(--font-body); line-height: 1.5; overflow-wrap: break-word;">
                  ${s.sub}
                </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Kinetic Marquee Ticker -->
      <div class="marquee-container" aria-hidden="true" style="opacity: 0.9; padding-block: var(--space-3); border-top: 1px solid #E4E4E7;">
        <div class="marquee-content">
          ${marqueeItems.concat(marqueeItems).map(item => `
            <span style="font-family: var(--font-mono); font-size: clamp(0.88rem, 1.4vw, 1.02rem); font-weight: 600; color: #52525B; display: inline-flex; align-items: center; gap: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
              ${item}
              <span style="color: var(--accent-gold); font-size: 1.15rem;">✦</span>
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
