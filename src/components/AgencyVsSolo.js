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

        <!-- Comparison Matrix: Responsive Desktop Table & Mobile Stacked Bars -->
        <div class="double-bezel">
          <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3.5vw, 2.5rem);">
            
            <!-- Desktop / Laptop Matrix View (Visible >= 768px) -->
            <div class="comparison-desktop-matrix">
              <table style="width: 100%; border-collapse: collapse; table-layout: fixed; text-align: left;" aria-label="Traditional Agency vs Solonova Studio Comparison Matrix">
                <thead>
                  <tr style="border-bottom: 2px solid #E4E4E7;">
                    <th scope="col" style="padding: var(--space-4) var(--space-3); font-family: var(--font-mono); font-size: 0.85rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; width: 24%;">Dimension</th>
                    <th scope="col" style="padding: var(--space-4) var(--space-4); font-family: var(--font-display); font-size: 1.35rem; color: #DC2626; width: 38%;">Traditional Agency</th>
                    <th scope="col" style="padding: var(--space-4) var(--space-4); font-family: var(--font-display); font-size: 1.35rem; color: #09090B; width: 38%; background: rgba(197, 160, 89, 0.04); border-left: 2px solid var(--accent-gold);">Solonova Studio</th>
                  </tr>
                </thead>
                <tbody>
                  ${comparisonData.map((row, idx) => `
                    <tr style="border-bottom: 1px solid #F4F4F6; background: ${idx % 2 === 0 ? 'transparent' : '#FAFAFB'};">
                      <th scope="row" style="padding: var(--space-5) var(--space-3); font-weight: 700; color: #09090B; font-size: 1rem; text-align: left; vertical-align: top; overflow-wrap: break-word;">
                        ${row.factor}
                      </th>
                      <td style="padding: var(--space-5) var(--space-4); color: #52525B; font-size: 0.98rem; line-height: 1.6; vertical-align: top; overflow-wrap: break-word;">
                        <span style="color: #DC2626; margin-right: 6px; font-weight: bold; font-size: 1.1rem;">✕</span>
                        ${row.traditional}
                      </td>
                      <td style="padding: var(--space-5) var(--space-4); color: #09090B; font-size: 1rem; line-height: 1.6; font-weight: 600; background: rgba(197, 160, 89, 0.03); border-left: 2px solid var(--accent-gold); vertical-align: top; overflow-wrap: break-word;">
                        <span style="color: var(--status-live); margin-right: 6px; font-weight: bold; font-size: 1.1rem;">✔</span>
                        ${row.solonova}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Mobile & Small Tablet View: Stacked Comparison Div Bars (Visible < 768px) -->
            <div class="comparison-mobile-stack">
              ${comparisonData.map(row => `
                <div class="comparison-mobile-card" style="background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.15rem; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                  <div style="font-family: var(--font-mono); font-size: 0.84rem; font-weight: 800; color: #09090B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 8px;">
                    <span class="status-dot-gold" style="width: 7px; height: 7px; flex-shrink: 0;"></span>
                    <span>${row.factor}</span>
                  </div>
                  
                  <!-- Traditional Agency Bar -->
                  <div style="background: #FAFAFB; border: 1px solid #F4F4F6; border-left: 3px solid #DC2626; border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.65rem;">
                    <div style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: #DC2626; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                      <span>✕</span> Traditional Web Agency
                    </div>
                    <p style="font-size: 0.92rem; color: #52525B; line-height: 1.55; margin: 0; overflow-wrap: break-word;">
                      ${row.traditional}
                    </p>
                  </div>

                  <!-- Solonova Studio Bar -->
                  <div style="background: rgba(197, 160, 89, 0.05); border: 1px solid rgba(197, 160, 89, 0.25); border-left: 3px solid var(--accent-gold); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
                    <div style="font-family: var(--font-display); font-size: 1.02rem; font-weight: 700; color: #09090B; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                      <span style="color: var(--status-live);">✔</span> Solonova Studio
                    </div>
                    <p style="font-size: 0.94rem; color: #09090B; font-weight: 600; line-height: 1.55; margin: 0; overflow-wrap: break-word;">
                      ${row.solonova}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>

          </div>
        </div>

        <!-- Founder Guarantee Box — Pitch Black Statement Card with Gold Accent -->
        <div class="double-bezel" style="margin-top: var(--space-10); background: #09090B; border: 1px solid rgba(197, 160, 89, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
          <div class="double-bezel-inner guarantee-card-inner" style="padding: clamp(1.5rem, 3.5vw, 2.5rem); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-5); background: #09090B; border-color: #27272A;">
            <div style="max-width: 760px;">
              <h4 style="color: #FFFFFF; margin-bottom: var(--space-2); font-size: clamp(1.2rem, 2.5vw, 1.45rem); font-weight: 700;">
                <span style="color: var(--accent-gold);">✦</span> The Solonova 100% Sprint Delivery Guarantee
              </h4>
              <p style="font-size: clamp(0.95rem, 1.5vw, 1.05rem); margin-bottom: 0; color: #A1A1AA; line-height: 1.65;">If your staging review link is not shipped within the agreed sprint window, or fails to meet the agreed spec, you receive a full refund. Zero financial risk.</p>
            </div>
            <a href="#contact" class="btn btn-secondary btn-lg guarantee-cta-btn" style="background: #FFFFFF; color: #09090B; border-color: #FFFFFF;">
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
