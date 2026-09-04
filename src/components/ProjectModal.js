export function renderProjectModal() {
  const container = document.getElementById('modal-root');
  if (!container) return;

  container.innerHTML = `
    <div id="project-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
      <div class="modal-content" id="modal-inner">
        <!-- Injected dynamically on open -->
      </div>
    </div>
  `;

  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('modal-inner');
  let previousActiveElement = null;

  function openModal(project) {
    if (!modal || !inner) return;

    inner.innerHTML = `
      <!-- Header Banner with Full Visual Preview -->
      <div style="position: relative; background: #09090B; border-bottom: 1px solid #E4E4E7; overflow: hidden;">
        <div style="height: clamp(140px, 25vh, 260px); width: 100%; position: relative; overflow: hidden;">
          <img src="${project.image}" alt="${project.title} live interface preview" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: brightness(0.9);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(9, 9, 11, 0.4) 0%, rgba(9, 9, 11, 0.75) 100%);"></div>
        </div>

        <div style="position: absolute; inset: 0; padding: clamp(1rem, 3vw, 2.25rem); display: flex; flex-direction: column; justify-content: space-between; z-index: 2;">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="status-pill" style="background: rgba(255, 255, 255, 0.95); border-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
                <span style="width: 7px; height: 7px; border-radius: 50%; background-color: ${project.accentColor || '#09090B'}; display: inline-block;"></span>
                ${project.tag}
              </span>
              <span class="status-pill" style="color: #09090B; border-color: rgba(255, 255, 255, 0.9); background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);">
                ⏱ ${project.deliveryTime} Sprint
              </span>
            </div>
            <button id="close-modal-btn" class="btn btn-secondary btn-sm" aria-label="Close Case Study" style="border-radius: 50%; width: 40px; height: 40px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 1.1rem; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
              ✕
            </button>
          </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #E4E4E7; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; font-weight: 700;">
                ${project.client}
              </div>
              <h2 id="modal-title" style="font-size: clamp(1.8rem, 3.2vw, 2.4rem); line-height: 1.15; color: #FFFFFF; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.5);">
                ${project.title}
              </h2>
            </div>
        </div>
      </div>

      <!-- Content Details -->
      <div style="padding: clamp(1.25rem, 3.5vw, 2.5rem); display: flex; flex-direction: column; gap: clamp(1.25rem, 3vw, 2rem); background: #FFFFFF;">
        <!-- Summary & Challenge -->
        <div>
          <h4 style="font-size: 0.92rem; color: #09090B; margin-bottom: var(--space-3); text-transform: uppercase; font-family: var(--font-mono); letter-spacing: 0.12em; font-weight: 800;">
            ✦ ENGINEERING BRIEF
          </h4>
          <p style="font-size: 1.08rem; line-height: 1.8; color: #52525B;">
            ${project.fullDescription}
          </p>
        </div>

        <!-- Metrics Grid -->
        <div class="grid-3" style="gap: var(--space-5);">
          ${project.metrics.map(m => `
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: var(--space-5); text-align: center; background: #FAFAFB;">
                <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #09090B; line-height: 1; margin-bottom: 6px;">
                  ${m.value}
                </div>
                <div style="font-size: 0.85rem; font-family: var(--font-mono); color: #71717A; font-weight: 600;">
                  ${m.label}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Key Features List -->
        <div>
          <h4 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-4); font-weight: 800;">
            ✦ TECHNICAL CAPABILITIES
          </h4>
          <div class="grid-2" style="gap: var(--space-4);">
            ${project.features.map(f => `
              <div class="flex items-center gap-3" style="font-size: 1.02rem; color: #09090B;">
                <span style="color: #059669; font-weight: bold; font-size: 1.1rem;">✔</span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tech Stack Badges -->
        <div>
          <h4 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-3); font-weight: 800;">
            ✦ ARCHITECTURE & TECH STACK
          </h4>
          <div class="flex flex-wrap gap-2">
            ${project.techStack.map(t => `
              <span class="status-pill" style="font-size: 0.88rem; background: #F4F4F6; border-color: #D4D4D8; color: #09090B;">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Modal Bottom Actions -->
        <div class="flex flex-wrap items-center justify-between gap-4" style="border-top: 1px solid #E4E4E7; padding-top: var(--space-6); margin-top: var(--space-2);">
          <div style="font-size: 0.95rem; color: #52525B;">
            Want an equivalent build for your brand?
          </div>
          <div class="flex flex-wrap items-center gap-3" style="width: 100%; max-width: 440px;">
            <button id="modal-scope-btn" class="btn btn-secondary" style="flex: 1 1 180px; justify-content: center; padding: 0.75rem 1.25rem;">
              <span>Calculate Scope</span>
            </button>
            <a href="#contact" id="modal-pitch-btn" class="btn btn-primary" style="flex: 1 1 200px; justify-content: center; padding: 0.75rem 1.25rem;">
              <span>Book Sprint Kickoff</span>
              <span class="btn-icon-circle" style="flex-shrink: 0;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    `;

    previousActiveElement = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook buttons
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      setTimeout(() => closeBtn.focus(), 50);
    }

    const scopeBtn = document.getElementById('modal-scope-btn');
    if (scopeBtn) {
      scopeBtn.addEventListener('click', () => {
        closeModal();
        const calc = document.getElementById('calculator');
        if (calc) calc.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const pitchBtn = document.getElementById('modal-pitch-btn');
    if (pitchBtn) {
      pitchBtn.addEventListener('click', () => {
        closeModal();
      });
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousActiveElement && previousActiveElement.focus) {
      previousActiveElement.focus();
    }
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('open-project-modal', (e) => {
    if (e.detail) {
      openModal(e.detail);
    }
  });

  window.openSolonovaProjectModal = openModal;

  window.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === 'Tab') {
        const modalContent = modal.querySelector('.modal-content');
        if (!modalContent) return;
        const focusableEls = Array.from(modalContent.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (focusableEls.length === 0) return;
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl || !modalContent.contains(document.activeElement)) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl || !modalContent.contains(document.activeElement)) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }
  });
}
