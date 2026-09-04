export function renderFooter() {
  const container = document.getElementById('footer-root');
  if (!container) return;

  container.innerHTML = `
    <footer style="border-top: 1px solid #27272A; background: #09090B; color: #FFFFFF; padding-block: clamp(4.5rem, 8vw, 7rem); position: relative; z-index: 10;">
      <div class="container">
        <div class="footer-columns-grid" style="margin-bottom: var(--space-10);">
          <!-- Left: Brand Info -->
          <div>
            <div class="brand-logo" style="margin-bottom: var(--space-4);">
              <svg class="brand-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 44px;">
                <rect width="40" height="40" rx="10" fill="#18181B" stroke="#3F3F46"/>
                <path d="M26 13C26 13 23 10.5 20 10.5C15 10.5 12.5 13.5 12.5 17C12.5 22 20 20.8 20 24.5C20 27 17.5 28.5 15 28.5C11 28.5 8.5 25.5 8.5 25.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="28" cy="27" r="3.5" fill="#C5A059"/>
              </svg>
              <div class="brand-title-text">
                <span class="brand-title-main" style="font-size: 1.45rem; color: #FFFFFF;">SOLONOVA</span>
                <span class="brand-studio-badge" style="font-size: 0.72rem; background: #27272A; color: #FAFAFA; border: 1px solid #3F3F46;">STUDIO</span>
              </div>
            </div>

            <p style="font-size: 1.02rem; color: #A1A1AA; line-height: 1.7; margin-bottom: var(--space-5); overflow-wrap: break-word;">
              The solo digital atelier redefining web craft through high-velocity vibe coding. Bespoke web apps, MVPs, and flagship brand experiences engineered for ambitious Indian and global founders.
            </p>

            <div class="status-pill" style="font-size: clamp(0.74rem, 1.4vw, 0.84rem); padding: 0.45rem 1rem; background: #18181B; border-color: #27272A; color: #FFFFFF; overflow-wrap: break-word;">
              <span class="radar-ping">
                <span class="radar-ping-core"></span>
              </span>
              <span>BENGALURU · MUMBAI · NCR // ACTIVE QUEUE</span>
            </div>
          </div>

          <!-- Middle: Navigation Links -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: #FFFFFF; text-transform: uppercase; margin-bottom: var(--space-4); font-weight: 800; letter-spacing: 0.12em;">
              <span style="color: var(--accent-gold);">✦</span> NAVIGATION
            </div>
            <ul style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.02rem; color: #D4D4D8;">
              <li><a href="#work" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Curated Work</a></li>
              <li><a href="#process" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Methodology</a></li>
              <li><a href="#comparison" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Agency vs. Solonova</a></li>
              <li><a href="#calculator" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Pricing & Scope (₹ INR)</a></li>
              <li><a href="#contact" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Start a Project</a></li>
            </ul>
          </div>

          <!-- Right: Atelier Craft & Architectural Standards -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: #FFFFFF; text-transform: uppercase; margin-bottom: var(--space-4); font-weight: 800; letter-spacing: 0.12em;">
              <span style="color: var(--accent-gold);">✦</span> ATELIER DISCIPLINES
            </div>
            <ul style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 0.94rem; color: #A1A1AA; font-family: var(--font-mono);">
              <li>✦ Editorial Luxury Direction</li>
              <li>✦ Fluid Bento Grids & Micro-Interactions</li>
              <li>✦ 100/100 Core Web Vitals & Sub-Second LCP</li>
              <li>✦ WCAG 2.1 AA Visual Architecture</li>
              <li>✦ Direct WhatsApp & UPI Sprint Enablement</li>
              <li>✦ Zero WordPress/Template Bloat</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="flex flex-wrap justify-between items-center gap-4" style="border-top: 1px solid #27272A; padding-top: var(--space-6); font-size: 0.88rem; color: #71717A; font-family: var(--font-mono);">
          <div style="overflow-wrap: break-word;">
            © ${new Date().getFullYear()} Solonova Studio. All Rights Reserved. UPI, Razorpay & IMPS Enabled.
          </div>
          <div class="flex flex-wrap gap-4">
            <a href="#comparison" class="nav-link" style="color: #71717A;">Sprint Guarantee</a>
            <span>•</span>
            <a href="#calculator" class="nav-link" style="color: #71717A;">Scope & Pricing</a>
            <span>•</span>
            <a href="#contact" class="nav-link" style="color: #71717A;">Book Sprint</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
