/**
 * SOLONOVA STUDIO — Bespoke Architectural Atelier Navigation Bar
 * Theme: Editorial Monochromatic Luxury (White & Deep Black)
 */
export function renderNavbar() {
  const container = document.getElementById('navbar-root');
  if (!container) return;

  container.innerHTML = `
    <nav class="atelier-navbar" aria-label="Main Navigation">
      <div class="atelier-navbar-inner">
        <!-- 1. Left: Architectural Brand & Live Studio Status -->
        <div class="nav-brand-group">
          <a href="#app" class="brand-logo" aria-label="Solonova Studio Home">
            <div class="brand-logo-mark">
              <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#09090B"/>
                <path d="M23 11.5C23 11.5 20.5 9.5 18 9.5C13.5 9.5 11 12 11 15C11 19.5 18 18.5 18 22C18 24.5 15.5 25.5 13.5 25.5C10 25.5 7.5 23 7.5 23" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="25" cy="24" r="3" fill="#C5A059"/>
              </svg>
            </div>
            <span class="brand-name">SOLONOVA<span class="brand-dot" style="color: var(--accent-gold);">.</span></span>
          </a>

          <!-- Live Atelier Telemetry Pill -->
          <div class="atelier-telemetry-badge" title="Real-time studio capacity">
            <span class="telemetry-beacon"></span>
            <span class="telemetry-label">ATELIER</span>
            <span class="telemetry-divider">/</span>
            <span class="telemetry-slots">2 SLOTS OPEN</span>
          </div>
        </div>

        <!-- 2. Center: Segmented Editorial Index Track -->
        <div class="nav-index-track" id="nav-menu">
          <a href="#work" class="nav-track-item">
            <span class="track-idx">01</span>
            <span class="track-label">Works</span>
          </a>
          <a href="#process" class="nav-track-item">
            <span class="track-idx">02</span>
            <span class="track-label">Method</span>
          </a>
          <a href="#comparison" class="nav-track-item">
            <span class="track-idx">03</span>
            <span class="track-label">Vs Agency</span>
          </a>
          <a href="#calculator" class="nav-track-item">
            <span class="track-idx">04</span>
            <span class="track-label">Pricing</span>
          </a>
          <a href="https://wa.me/918861699354?text=Hi%20Solonova%20Studio,%20I'd%20like%20to%20discuss%20booking%20a%20website%20sprint" target="_blank" rel="noopener noreferrer" class="nav-track-item" style="color: #059669; font-weight: 700;">
            <span class="track-idx" style="color: #059669;">✦</span>
            <span class="track-label">WhatsApp (+91 8861699354)</span>
          </a>
        </div>

        <!-- 3. Right: Tactile Actions (Sprint Booking & Mobile Toggle) -->
        <div class="nav-actions-group">
          <!-- Book Sprint Pitch Black Button -->
          <a href="#calculator" class="nav-book-btn">
            <span>Book Sprint</span>
            <span class="nav-book-arrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </span>
          </a>

          <!-- Mobile Nav Toggle -->
          <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `;

  // Mobile menu interaction
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  function closeMobileNav() {
    if (navMenu && navMenu.classList.contains('mobile-open')) {
      navMenu.classList.remove('mobile-open');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        const spans = toggleBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  }

  function openMobileNav() {
    if (navMenu) {
      navMenu.classList.add('mobile-open');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'true');
        const spans = toggleBtn.querySelectorAll('span');
        spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      }
    }
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navMenu.classList.contains('mobile-open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    navMenu.querySelectorAll('.nav-track-item').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Dismiss on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Dismiss on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileNav();
      }
    });
  }
}
