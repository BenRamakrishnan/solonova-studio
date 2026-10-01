import { estimateScope, scopeBrief, budgetBand, whatsappUrl } from '../utils/scope.js';
import { scrollToSection } from '../utils/scroll.js';

export function renderScopeCalculator() {
  const container = document.getElementById('calculator-root');
  if (!container) return;

  container.innerHTML = `
    <section id="calculator" class="section" style="background: #FAFAFB; border-block: 1px solid #E4E4E7;">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">TRANSPARENT PRICING // ZERO AGENCY MARKUPS</span>
          </div>
          <h2 style="color: #09090B;">Configure Your Build & <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Instant INR Estimate</span></h2>
          <p>Transparent estimation tailored for Indian startups and businesses. Select your architecture and capabilities below to calculate real-time delivery turnaround and investment in ₹ (INR).</p>
        </div>

        <!-- Calculator Double-Bezel Card -->
        <div class="double-bezel" style="max-width: var(--container-narrow); margin-inline: auto;">
          <div class="double-bezel-inner" style="padding: clamp(1.75rem, 4vw, 3.5rem);">
            <div class="grid-2" style="gap: var(--space-8); align-items: start;">
              <!-- Left: Options Column -->
              <div>
                <!-- 1. Project Base Type -->
                <div class="input-group">
                  <label class="input-label" for="calc-type">1. Select Project Architecture</label>
                  <select id="calc-type" class="select-field" style="font-size: clamp(0.92rem, 1.5vw, 1.05rem); padding: 0.95rem 1.15rem; width: 100%; max-width: 100%; text-overflow: ellipsis;">
                    <option value="14999" data-days="2" data-name="High-Converting 48h Launchpad">High-Converting 48h Launchpad (₹14,999 · 48h Sprint)</option>
                    <option value="28500" data-days="5" data-name="Bespoke Multi-Page Brand Experience" selected>Bespoke Multi-Page Brand Experience (₹28,500 · 5 Days)</option>
                    <option value="54000" data-days="7" data-name="SaaS MVP / Interactive Web App">SaaS MVP / Interactive Web App (₹54,000 · 7 Days)</option>
                    <option value="38000" data-days="6" data-name="Luxury D2C E-Commerce Digital Boutique">Luxury D2C Digital Boutique (₹38,000 · 6 Days)</option>
                  </select>
                </div>

                <!-- 2. Section/Page Count Slider -->
                <div class="input-group" style="margin-top: var(--space-6);">
                  <div class="flex justify-between items-center" style="margin-bottom: var(--space-3);">
                    <label class="input-label" for="calc-pages" style="margin-bottom: 0;">2. Scope / Sections Count</label>
                    <span id="page-count-val" style="font-family: var(--font-mono); font-weight: 800; color: #09090B; font-size: 1.05rem;">5 Sections</span>
                  </div>
                  <input type="range" id="calc-pages" class="custom-range" min="1" max="10" value="5" step="1" aria-label="Scope or sections count" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" />
                  <div class="flex justify-between" style="font-size: 0.85rem; color: #64646D; margin-top: 6px; font-family: var(--font-mono);">
                    <span>1 Section (Focused)</span>
                    <span>10 Sections (Expansive)</span>
                  </div>
                </div>

                <!-- 3. Add-on Features -->
                <div class="input-group" style="margin-top: var(--space-6);">
                  <label class="input-label">3. Specialized Capabilities</label>
                  <div class="flex flex-col gap-4" style="margin-top: var(--space-3);">
                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4500" data-feature="Kinetic Motion & Spring Physics" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Kinetic Motion & Awwwards Physics (+ ₹4,500)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="3500" data-feature="Custom Interactive Calculator / Lead Tool" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Custom Interactive Calculator / Scoring Tool (+ ₹3,500)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="5000" data-feature="UPI & Razorpay Checkout Rails" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Razorpay & UPI 1-Click Payment Gateway (+ ₹5,000)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4000" data-feature="Priority delivery" data-priority="true" style="accent-color: var(--accent-amber); width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="color: #09090B; font-weight: 700; line-height: 1.45; overflow-wrap: break-word;"><span style="color: var(--accent-amber);">✦</span> Priority Delivery · Up to 2 Days Faster (+ ₹4,000)<span id="priority-note" hidden style="display: block; font-size: 0.85rem; font-weight: 400; color: #52525B;">This scope already has the fastest delivery estimate.</span></span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Right: Output Column — High-Contrast Pitch Black Panel with Gold Glow -->
              <div style="background: #09090B; color: #FFFFFF; padding: clamp(1.25rem, 3.5vw, var(--space-8)); border-radius: var(--radius-xl); border: 1px solid #27272A; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="status-pill" style="margin-bottom: var(--space-5); background: #18181B; border-color: #27272A; color: #FFFFFF;">
                    <span class="status-dot" style="background-color: var(--status-live);"></span>
                    <span style="letter-spacing: 0.06em;">ESTIMATED SPRINT FEE</span>
                  </div>

                  <div style="margin-bottom: clamp(1.25rem, 3vw, 1.85rem);">
                    <div class="calc-price-display" style="display: flex; align-items: baseline; gap: 0.65rem; font-weight: 800; line-height: 1.15; padding-block: 4px; overflow: visible;">
                      <span class="calc-currency-symbol" style="font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif); font-size: clamp(1.5rem, 3.2vw, 2.3rem); font-weight: 600; color: #E4E4E7; opacity: 0.85; line-height: 1; user-select: none;">₹</span>
                      <span id="calc-total-price" class="price-counter-anim" style="font-family: var(--font-display); font-size: clamp(1.95rem, 4.8vw, 3.8rem); font-weight: 800; line-height: 1.15; color: #FFFFFF; letter-spacing: 0.03em; display: inline-block;">28,500</span>
                    </div>
                    <div style="font-size: 0.92rem; color: #A1A1AA; margin-top: 14px; margin-bottom: 4px; line-height: 1.6; overflow-wrap: break-word;">
                      Flat sprint fee. 50% deposit via UPI/Bank, 50% upon verified launch.
                    </div>
                  </div>

                  <!-- Timeline estimate -->
                  <div style="padding: clamp(0.85rem, 2vw, var(--space-5)); background: #18181B; border-radius: var(--radius-md); margin-bottom: var(--space-5); border: 1px solid #27272A;">
                    <div class="flex justify-between items-center" style="margin-bottom: 8px; gap: 8px;">
                      <span style="font-size: 0.92rem; color: #A1A1AA;">Estimated Delivery:</span>
                      <strong id="calc-total-days" style="color: #FFFFFF; font-family: var(--font-mono); font-size: clamp(0.95rem, 1.5vw, 1.05rem);">5 Business Days</strong>
                    </div>
                    <div class="flex justify-between items-center" style="gap: 8px;">
                      <span style="font-size: 0.92rem; color: #A1A1AA;">Performance Target:</span>
                      <strong style="color: #34D399; font-family: var(--font-mono); font-size: clamp(0.95rem, 1.5vw, 1.05rem);">95+ Lighthouse</strong>
                    </div>
                  </div>

                  <p id="scope-announcement" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
                  <p style="font-size: 0.85rem; color: #A1A1AA; margin-bottom: var(--space-5);">Estimate includes 3 sections. Extra sections: ₹1,500 each. Scope, integrations, and kickoff date are confirmed before booking.</p>
                  <!-- Inclusions list -->
                  <ul style="font-size: 0.92rem; color: #D4D4D8; display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6);">
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">100% full source code & GitHub repo ownership</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">Direct 1-on-1 access to founder on WhatsApp</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">UPI, GPay, PhonePe, Razorpay & NEFT ready</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">14 days post-launch warranty and revisions</span>
                    </li>
                  </ul>
                </div>

                <!-- Lock-in Buttons -->
                <div class="flex flex-col gap-3">
                  <button id="calc-lock-in-btn" class="btn btn-secondary btn-lg" style="width: 100%; background: #FFFFFF; color: #09090B; border-color: #FFFFFF; justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                    <span>Review Scope & Start a Project</span>
                    <span class="btn-icon-circle" style="background: rgba(0, 0, 0, 0.08); flex-shrink: 0;">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2.6">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                      </svg>
                    </span>
                  </button>

                  <a id="calc-whatsapp-btn" href="https://wa.me/918861699354" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="width: 100%; border-color: #065F46; background: #064E3B; color: #34D399; justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.2" style="flex-shrink: 0;">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Chat on WhatsApp with This Scope</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const typeSelect = document.getElementById('calc-type');
  const pagesRange = document.getElementById('calc-pages');
  const addons = Array.from(container.querySelectorAll('.calc-addon'));
  const priorityOption = addons.find(cb => cb.dataset.priority);
  const priceFormat = new Intl.NumberFormat('en-IN');
  let previousBrief = '';

  function calculate() {
    const option = typeSelect.selectedOptions[0];
    const input = {
      basePrice: Number(option.value), baseDays: Number(option.dataset.days),
      sections: Number(pagesRange.value), type: option.dataset.name,
      addons: addons.filter(cb => cb.checked).map(cb => ({ name: cb.dataset.feature, price: Number(cb.value), priority: Boolean(cb.dataset.priority) }))
    };
    const spec = estimateScope(input);
    priorityOption.disabled = spec.standardDays <= 2;
    document.getElementById('priority-note').hidden = !priorityOption.disabled;
    priorityOption.closest('label').classList.toggle('option-disabled', priorityOption.disabled);
    if (priorityOption.disabled) priorityOption.checked = false;
    document.getElementById('page-count-val').textContent = `${spec.sections} ${spec.sections === 1 ? 'Section' : 'Sections'}`;
    pagesRange.setAttribute('aria-valuetext', `${spec.sections} sections`);
    pagesRange.setAttribute('aria-valuenow', spec.sections);
    document.getElementById('calc-total-price').textContent = priceFormat.format(spec.total);
    document.getElementById('calc-total-days').textContent = `${spec.days} Business Days`;
    document.getElementById('scope-announcement').textContent = `Estimated fee ₹${priceFormat.format(spec.total)}. Delivery ${spec.days} business days. ${spec.priority ? 'Priority delivery selected.' : ''}`;
    document.getElementById('calc-whatsapp-btn').href = whatsappUrl(`Hi Solonova Studio, I'd like to discuss this estimate.\n\n${scopeBrief(spec)}`);
    return spec;
  }
  typeSelect.addEventListener('change', calculate);
  pagesRange.addEventListener('input', calculate);
  addons.forEach(cb => cb.addEventListener('change', calculate));
  calculate();

  document.getElementById('calc-lock-in-btn').addEventListener('click', () => {
    const spec = calculate();
    const field = document.getElementById('contact-message');
    const brief = scopeBrief(spec);
    if (field) {
      const manualBrief = previousBrief && field.value.startsWith(previousBrief)
        ? field.value.slice(previousBrief.length).trim() : field.value.trim();
      field.value = brief + (manualBrief ? `\n\n${manualBrief}` : '');
      previousBrief = brief;
      field.dispatchEvent(new Event('input', { bubbles: true }));
    }
    document.getElementById('contact-budget').value = budgetBand(spec.total);
    document.getElementById('contact-timeline').value = spec.days <= 2 ? '48h' : spec.days <= 7 ? '1week' : '2weeks';
    scrollToSection('inquiry-form', 'contact-name');
  });
}
