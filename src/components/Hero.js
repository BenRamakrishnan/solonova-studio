export function renderHero() {
  const container = document.getElementById('hero-root');
  if (!container) return;

  container.innerHTML = `
    <div class="section hero-section" style="padding-top: clamp(2.5rem, 5vh + 1.5rem, 6rem); padding-bottom: clamp(2.5rem, 5vh + 1.5rem, 5.5rem);">
      <div class="container flex flex-col items-center text-center">
        <!-- Hero Typographic Readability Sanctuary -->
        <div class="hero-readability-sanctuary flex flex-col items-center text-center">
          <!-- Architectural Masthead: SOLONOVA STUDIO with Gold Rule Accents -->
          <div class="flex items-center justify-center gap-3" style="margin-bottom: var(--space-4); max-width: 100%;">
            <span style="height: 1px; width: clamp(16px, 4vw, 45px); background: var(--accent-gold); opacity: 0.75; flex-shrink: 0;" aria-hidden="true"></span>
            <span style="font-family: var(--font-mono); font-size: clamp(0.76rem, 2vw, 0.98rem); font-weight: 800; letter-spacing: clamp(0.12em, 0.5vw, 0.32em); text-transform: uppercase; color: #09090B;">
              SOLONOVA STUDIO
            </span>
            <span style="height: 1px; width: clamp(16px, 4vw, 45px); background: var(--accent-gold); opacity: 0.75; flex-shrink: 0;" aria-hidden="true"></span>
          </div>

          <!-- Eyebrow Status Pill with Luminous Live Beacon -->
          <div class="status-pill hero-status-pill" style="margin-bottom: var(--space-6); padding: 0.5rem 1.25rem; border-color: var(--accent-gold-border); background: #FFFFFF; max-width: 100%;">
            <span class="radar-ping">
              <span class="radar-ping-core" style="background-color: var(--status-live);"></span>
            </span>
            <span class="hero-status-pill-text" style="font-family: var(--font-mono); font-size: clamp(0.74rem, 1.4vw, 0.85rem); font-weight: 700; color: #09090B; letter-spacing: 0.08em; overflow-wrap: break-word;">
              SOLO VIBE ATELIER // INDIA & GLOBAL // <span style="color: var(--accent-amber);">10X SHIP VELOCITY</span>
            </span>
          </div>

          <!-- Grand Hero Headline -->
          <h1 style="max-width: var(--container-narrow); margin-bottom: var(--space-6); line-height: 1.05; color: #09090B;">
            Websites Handcrafted at <br />
            <span class="text-italic" style="font-style: italic; color: #09090B; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 8px;">Lightning Velocity.</span>
          </h1>

          <!-- Expanded Lead Subheading -->
          <p class="lead-text text-center" style="margin-bottom: var(--space-8); max-width: 860px; color: #52525B;">
            We bypass traditional agency bureaucracy, inflated retainers, and recycled templates. Solonova Studio pairs bespoke editorial design with AI-assisted vibe coding to ship high-converting web applications in <strong style="color: #09090B; border-bottom: 1.5px solid var(--accent-gold);">48 hours to 7 business days</strong>.
          </p>

          <!-- Hero Action CTAs -->
          <div class="flex flex-wrap items-center justify-center gap-4 hero-cta-group" style="margin-bottom: var(--space-10);">
            <a href="#work" class="btn btn-primary btn-lg hero-cta-btn" style="box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(197, 160, 89, 0.3);">
              <span>Explore Curated Works</span>
              <span class="btn-icon-circle" style="background: var(--accent-gold);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>

            <a href="#calculator" class="btn btn-secondary btn-lg hero-cta-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="16" y1="14" x2="16" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              <span>Scope & Pricing (₹ INR)</span>
            </a>

            <!-- WhatsApp Chat Direct Button -->
            <a href="https://wa.me/918861699354?text=Hi%20Solonova%20Studio,%20I'd%20like%20to%20discuss%20booking%20a%20website%20sprint" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg hero-cta-btn" style="border-color: #BBF7D0; background: #F0FDF4; color: #047857;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Interactive Benchmark & Live Telemetry Card -->
        <div class="double-bezel" style="width: 100%; max-width: var(--container-narrow); margin-inline: auto; text-align: left;">
          <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 2.5rem);">
            <!-- Switcher Header -->
            <div class="flex flex-wrap items-center justify-between gap-4" style="border-bottom: 1px solid #E4E4E7; padding-bottom: var(--space-5); margin-bottom: var(--space-5); min-width: 0; max-width: 100%;">
              <div class="flex items-center gap-3">
                <span class="status-dot-gold"></span>
                <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 800; color: #09090B; letter-spacing: 0.12em; text-transform: uppercase;">
                  SOLONOVA STUDIO BENCHMARKS
                </span>
              </div>

              <!-- Interactive Tabs -->
              <div class="flex flex-wrap gap-2" id="hero-interactive-tabs" role="tablist" aria-label="Solonova Studio Benchmarks">
                <button id="tab-perf" class="preview-tab-btn active" data-tab="perf" role="tab" aria-selected="true" aria-controls="tab-content-perf" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: #09090B; color: #FFFFFF; font-weight: 700; border: none;">Performance</button>
                <button id="tab-speed" class="preview-tab-btn" data-tab="speed" role="tab" aria-selected="false" aria-controls="tab-content-speed" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: transparent; color: #52525B; font-weight: 600; border: none;">Ship Speed</button>
                <button id="tab-pricing" class="preview-tab-btn" data-tab="pricing" role="tab" aria-selected="false" aria-controls="tab-content-pricing" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: transparent; color: #52525B; font-weight: 600; border: none;">Pricing & UPI</button>
              </div>
            </div>

            <!-- Tab 1: Performance -->
            <div id="tab-content-perf" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-perf">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Lighthouse Score</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">100 / 100</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Zero layout shift, instant 4G/5G mobile edge load</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Average LCP</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">0.38 Seconds</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Sub-second edge CDN rendering globally</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Code Discipline</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">100% Modular</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">Pure clean JS & CSS. Zero WP plugin bloat</div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Ship Speed -->
            <div id="tab-content-speed" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-speed" style="display: none;">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Rapid Launchpad</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">48 Hours</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">From concept kickoff to production live link</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Full Brand Atelier</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">5 to 7 Days</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Multi-page custom experience with case studies</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Sprint Guarantee</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">100% Refundable</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">Deposit back if deadline missed. Zero risk.</div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Pricing & UPI -->
            <div id="tab-content-pricing" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-pricing" style="display: none;">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Entry Sprint</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">₹14,999</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Complete 48h landing page with WhatsApp capture</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Payment Terms</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">50 / 50 Split</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">50% kickoff deposit, 50% post-launch approval</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Payment Rails</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">UPI & Razorpay</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">GPay, PhonePe, Paytm, NEFT & Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interactive tab switcher with full WAI-ARIA keyboard navigation
  const tabBtns = Array.from(container.querySelectorAll('.preview-tab-btn'));
  
  function activateTab(btn, focus = true) {
    tabBtns.forEach(b => {
      b.style.background = 'transparent';
      b.style.color = '#52525B';
      b.style.fontWeight = '600';
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    btn.classList.add('active');
    btn.style.background = '#09090B';
    btn.style.color = '#FFFFFF';
    btn.style.fontWeight = '700';
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    if (focus) btn.focus();

    const targetTab = btn.getAttribute('data-tab');
    container.querySelectorAll('.hero-tab-content').forEach(c => {
      c.style.display = 'none';
    });

    const activeContent = document.getElementById(`tab-content-${targetTab}`);
    if (activeContent) {
      activeContent.style.display = 'block';
    }
  }

  // Initialize tabindexes
  tabBtns.forEach((btn, idx) => {
    btn.setAttribute('tabindex', idx === 0 ? '0' : '-1');
    btn.addEventListener('click', () => activateTab(btn, false));
    btn.addEventListener('keydown', (e) => {
      let targetIdx = null;
      if (e.key === 'ArrowRight') {
        targetIdx = (idx + 1) % tabBtns.length;
      } else if (e.key === 'ArrowLeft') {
        targetIdx = (idx - 1 + tabBtns.length) % tabBtns.length;
      } else if (e.key === 'Home') {
        targetIdx = 0;
      } else if (e.key === 'End') {
        targetIdx = tabBtns.length - 1;
      }

      if (targetIdx !== null) {
        e.preventDefault();
        activateTab(tabBtns[targetIdx], true);
      }
    });
  });
}
