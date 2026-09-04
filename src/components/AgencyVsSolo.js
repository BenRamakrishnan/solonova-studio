import { comparisonData } from '../data/comparison.js';

export function renderAgencyVsSolo() {
  const container = document.getElementById('comparison-root');
  if (!container) return;

  container.innerHTML = `
    <section id="comparison" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">WHY SOLONOVA PREVAILS</span>
          </div>
          <h2 style="color: #09090B;">Traditional Agency vs. <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 6px;">Solo Digital Atelier</span></h2>
          <p>Why fund agency office leases, account coordinators, and bloated weekly meetings when you can collaborate directly with a high-velocity master craftsman?</p>
        </div>

        <!-- Comparison Table / Card Matrix -->
        <div class="double-bezel">
          <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 3rem);">
            <div class="table-scroll-hint" aria-hidden="true">
              <span>Swipe horizontally to compare</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="table-scroll-wrapper">
              <table style="width: 100%; border-collapse: collapse; min-width: 660px; text-align: left;" aria-label="Traditional Agency vs Solonova Studio Comparison Matrix">
              <thead>
                <tr style="border-bottom: 2px solid #E4E4E7;">
                  <th scope="col" style="padding: var(--space-5); font-family: var(--font-mono); font-size: 0.92rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em;">Dimension</th>
                  <th scope="col" style="padding: var(--space-5); font-family: var(--font-display); font-size: 1.45rem; color: #DC2626; width: 38%;">Traditional Web Agency</th>
                  <th scope="col" style="padding: var(--space-5); font-family: var(--font-display); font-size: 1.45rem; color: #09090B; width: 42%;">Solonova Studio</th>
                </tr>
              </thead>
              <tbody>
                ${comparisonData.map((row, idx) => `
                  <tr style="border-bottom: 1px solid #F4F4F6; background: ${idx % 2 === 0 ? 'transparent' : '#FAFAFB'};">
                    <th scope="row" style="padding: var(--space-6) var(--space-5); font-weight: 700; color: #09090B; font-size: 1.12rem; text-align: left;">
                      ${row.factor}
                    </th>
                    <td style="padding: var(--space-6) var(--space-5); color: #52525B; font-size: 1.02rem; line-height: 1.6;">
                      <span style="color: #DC2626; margin-right: 8px; font-weight: bold; font-size: 1.1rem;">✕</span>
                      ${row.traditional}
                    </td>
                    <td style="padding: var(--space-6) var(--space-5); color: #09090B; font-size: 1.05rem; line-height: 1.6; font-weight: 600; background: rgba(197, 160, 89, 0.03); border-left: 2.5px solid var(--accent-gold);">
                      <span style="color: var(--status-live); margin-right: 8px; font-weight: bold; font-size: 1.1rem;">✔</span>
                      ${row.solonova}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Founder Guarantee Box — Pitch Black Statement Card with Gold Accent -->
        <div class="double-bezel" style="margin-top: var(--space-10); background: #09090B; border: 1px solid rgba(197, 160, 89, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
          <div class="double-bezel-inner" style="padding: clamp(1.75rem, 3.5vw, 2.5rem); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-6); background: #09090B; border-color: #27272A;">
            <div style="max-width: 760px;">
              <h4 style="color: #FFFFFF; margin-bottom: var(--space-2); font-size: 1.45rem; font-weight: 700;">
                <span style="color: var(--accent-gold);">✦</span> The Solonova 100% Sprint Delivery Guarantee
              </h4>
              <p style="font-size: 1.05rem; margin-bottom: 0; color: #A1A1AA; line-height: 1.65;">If your staging review link is not shipped within the agreed sprint window, or fails to meet the agreed spec, you receive a full refund. Zero financial risk.</p>
            </div>
            <a href="#contact" class="btn btn-secondary btn-lg" style="background: #FFFFFF; color: #09090B; border-color: #FFFFFF;">
              <span>Claim Sprint Slot</span>
              <span class="btn-icon-circle" style="background: rgba(0, 0, 0, 0.1);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2.6">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
