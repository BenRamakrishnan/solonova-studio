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
        <div class="double-bezel" style="max-width: 1140px; margin-inline: auto;">
          <div class="double-bezel-inner" style="padding: clamp(1.75rem, 4vw, 3.5rem);">
            <div class="grid-2" style="gap: var(--space-8); align-items: start;">
              <!-- Left: Options Column -->
              <div>
                <!-- 1. Project Base Type -->
                <div class="input-group">
                  <label class="input-label" for="calc-type">1. Select Project Architecture</label>
                  <select id="calc-type" class="select-field" style="font-size: 1.05rem; padding: 1.1rem 1.35rem;">
                    <option value="14999" data-days="2" data-name="High-Converting 48h Launchpad">High-Converting 48h Launchpad (₹14,999 · 48h Sprint)</option>
                    <option value="28500" data-days="5" data-name="Bespoke Multi-Page Brand Experience" selected>Bespoke Multi-Page Brand Experience (₹28,500 · 5 Days)</option>
                    <option value="54000" data-days="7" data-name="SaaS MVP / Interactive Web App">SaaS MVP / Interactive Web App (₹54,000 · 7 Days)</option>
                    <option value="38000" data-days="6" data-name="Luxury D2C E-Commerce Digital Boutique">Luxury D2C Digital Boutique (₹38,000 · 6 Days)</option>
                  </select>
                </div>

                <!-- 2. Section/Page Count Slider -->
                <div class="input-group" style="margin-top: var(--space-6);">
                  <div class="flex justify-between items-center" style="margin-bottom: var(--space-3);">
                    <label class="input-label" style="margin-bottom: 0;">2. Scope / Sections Count</label>
                    <span id="page-count-val" style="font-family: var(--font-mono); font-weight: 800; color: #09090B; font-size: 1.05rem;">5 Sections</span>
                  </div>
                  <input type="range" id="calc-pages" class="custom-range" min="1" max="10" value="5" step="1" aria-label="Scope or sections count" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" />
                  <div class="flex justify-between" style="font-size: 0.85rem; color: #71717A; margin-top: 6px; font-family: var(--font-mono);">
                    <span>1 Section (Focused)</span>
                    <span>10 Sections (Expansive)</span>
                  </div>
                </div>

                <!-- 3. Add-on Features -->
                <div class="input-group" style="margin-top: var(--space-8);">
                  <label class="input-label">3. Specialized Capabilities</label>
                  <div class="flex flex-col gap-4" style="margin-top: var(--space-3);">
                    <label class="flex items-center gap-3" style="cursor: pointer; font-size: 1rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4500" data-feature="Kinetic Motion & Spring Physics" style="accent-color: #09090B; width: 20px; height: 20px;" />
                      <span>Kinetic Motion & Awwwards Physics (+ ₹4,500)</span>
                    </label>

                    <label class="flex items-center gap-3" style="cursor: pointer; font-size: 1rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="3500" data-feature="Custom Interactive Calculator / Lead Tool" style="accent-color: #09090B; width: 20px; height: 20px;" />
                      <span>Custom Interactive Calculator / Scoring Tool (+ ₹3,500)</span>
                    </label>

                    <label class="flex items-center gap-3" style="cursor: pointer; font-size: 1rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="5000" data-feature="UPI & Razorpay Checkout Rails" style="accent-color: #09090B; width: 20px; height: 20px;" />
                      <span>Razorpay & UPI 1-Click Payment Gateway (+ ₹5,000)</span>
                    </label>

                    <label class="flex items-center gap-3" style="cursor: pointer; font-size: 1rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4000" data-feature="Ultra-Rush 48h Sprint Priority" style="accent-color: var(--accent-amber); width: 20px; height: 20px;" />
                      <span style="color: #09090B; font-weight: 700;"><span style="color: var(--accent-amber);">✦</span> Ultra-Rush 48-Hour Priority Guarantee (+ ₹4,000)</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Right: Output Column — High-Contrast Pitch Black Panel with Gold Glow -->
              <div style="background: #09090B; color: #FFFFFF; padding: clamp(1.25rem, 4vw, var(--space-8)); border-radius: var(--radius-xl); border: 1px solid #27272A; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="status-pill" style="margin-bottom: var(--space-5); background: #18181B; border-color: #27272A; color: #FFFFFF;">
                    <span class="status-dot" style="background-color: var(--status-live);"></span>
                    <span style="letter-spacing: 0.06em;">ESTIMATED SPRINT FEE</span>
                  </div>

                  <div style="margin-bottom: var(--space-6);">
                    <div style="font-family: var(--font-display); font-size: clamp(3rem, 5vw, 4.2rem); font-weight: 800; line-height: 1; background: linear-gradient(135deg, #FFFFFF 50%, var(--accent-gold) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                      <span id="calc-total-price" class="price-counter-anim">₹28,500</span>
                    </div>
                    <div style="font-size: 0.95rem; color: #A1A1AA; margin-top: 8px;">
                      Flat sprint fee. 50% deposit via UPI/Bank, 50% upon verified launch.
                    </div>
                  </div>

                  <!-- Timeline estimate -->
                  <div style="padding: var(--space-5); background: #18181B; border-radius: var(--radius-md); margin-bottom: var(--space-6); border: 1px solid #27272A;">
                    <div class="flex justify-between items-center" style="margin-bottom: 8px;">
                      <span style="font-size: 0.95rem; color: #A1A1AA;">Estimated Delivery:</span>
                      <strong id="calc-total-days" style="color: #FFFFFF; font-family: var(--font-mono); font-size: 1.05rem;">5 Business Days</strong>
                    </div>
                    <div class="flex justify-between items-center">
                      <span style="font-size: 0.95rem; color: #A1A1AA;">Performance Guarantee:</span>
                      <strong style="color: #34D399; font-family: var(--font-mono); font-size: 1.05rem;">100/100 Lighthouse</strong>
                    </div>
                  </div>

                  <!-- Inclusions list -->
                  <ul style="font-size: 0.95rem; color: #D4D4D8; display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-8);">
                    <li class="flex items-center gap-3">
                      <span style="color: #34D399; font-weight: bold;">✔</span> 100% full source code & GitHub repo ownership
                    </li>
                    <li class="flex items-center gap-3">
                      <span style="color: #34D399; font-weight: bold;">✔</span> Direct 1-on-1 access to founder on WhatsApp
                    </li>
                    <li class="flex items-center gap-3">
                      <span style="color: #34D399; font-weight: bold;">✔</span> UPI, GPay, PhonePe, Razorpay & NEFT ready
                    </li>
                    <li class="flex items-center gap-3">
                      <span style="color: #34D399; font-weight: bold;">✔</span> 14 days post-launch warranty and revisions
                    </li>
                  </ul>
                </div>

                <!-- Lock-in Buttons -->
                <div class="flex flex-col gap-3">
                  <button id="calc-lock-in-btn" class="btn btn-secondary btn-lg" style="width: 100%; background: #FFFFFF; color: #09090B; border-color: #FFFFFF;">
                    <span>Lock In Scope & Book Sprint</span>
                    <span class="btn-icon-circle" style="background: rgba(0, 0, 0, 0.08);">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2.6">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                      </svg>
                    </span>
                  </button>

                  <a id="calc-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="width: 100%; border-color: #065F46; background: #064E3B; color: #34D399;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.2">
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

  // Calculator Logic
  const typeSelect = document.getElementById('calc-type');
  const pagesRange = document.getElementById('calc-pages');
  const pageCountVal = document.getElementById('page-count-val');
  const addons = document.querySelectorAll('.calc-addon');
  const totalPriceEl = document.getElementById('calc-total-price');
  const totalDaysEl = document.getElementById('calc-total-days');
  const lockInBtn = document.getElementById('calc-lock-in-btn');
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');

  function calculate() {
    let basePrice = parseInt(typeSelect.value, 10) || 14999;
    const selectedOption = typeSelect.options[typeSelect.selectedIndex];
    let baseDays = parseInt(selectedOption.getAttribute('data-days'), 10) || 3;

    const pages = parseInt(pagesRange.value, 10);
    pageCountVal.textContent = `${pages} Sections`;
    pagesRange.setAttribute('aria-valuenow', pages);

    const extraPages = Math.max(0, pages - 3);
    const pageCost = extraPages * 1500;

    let addonCost = 0;
    let isRush = false;
    addons.forEach(cb => {
      if (cb.checked) {
        addonCost += parseInt(cb.value, 10);
        if (cb.getAttribute('data-feature').includes('Rush')) {
          isRush = true;
        }
      }
    });

    let total = basePrice + pageCost + addonCost;
    let days = baseDays + Math.floor(extraPages / 2);
    if (isRush) {
      days = Math.max(2, days - 2);
    }

    if (totalPriceEl) {
      totalPriceEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
    totalDaysEl.textContent = `${days} Business Days`;

    const spec = {
      type: selectedOption.getAttribute('data-name'),
      pages,
      total,
      days
    };

    if (whatsappBtn) {
      const waText = encodeURIComponent(`Hi Solonova Studio, I configured this project scope:\n- Architecture: ${spec.type}\n- Scope: ${spec.pages} Sections\n- Estimated Budget: ₹${spec.total.toLocaleString('en-IN')}\n- Target Timeline: ${spec.days} Days\n\nLet's schedule a pitch call to review wireframes.`);
      whatsappBtn.href = `https://wa.me/?text=${waText}`;
    }

    return spec;
  }

  typeSelect.addEventListener('change', calculate);
  pagesRange.addEventListener('input', calculate);
  addons.forEach(cb => cb.addEventListener('change', calculate));

  calculate();

  if (lockInBtn) {
    lockInBtn.addEventListener('click', () => {
      const spec = calculate();
      const messageField = document.getElementById('contact-message');
      if (messageField) {
        messageField.value = `Hi Solonova Studio, I configured this project scope:\n- Architecture: ${spec.type}\n- Scope: ${spec.pages} Sections\n- Estimated Budget: ₹${spec.total.toLocaleString('en-IN')}\n- Target Timeline: ${spec.days} Days\n\nLet's schedule a pitch call to review wireframes and lock in the sprint slot.`;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
