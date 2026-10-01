import { previewImage, previewSources } from '../utils/images.js';
import { scrollToSection } from '../utils/scroll.js';
import { projects } from '../data/projects.js';
import { escapeHtml } from '../utils/html.js';

export function renderProjectModal() {
  const container = document.getElementById('modal-root');
  if (!container) return;

  container.innerHTML = `
    <dialog id="project-modal" class="modal-backdrop" aria-labelledby="modal-title">
      <div class="modal-content" id="modal-inner">
        <!-- Injected dynamically on open -->
      </div>
    </dialog>
  `;

  const modal = document.getElementById('project-modal');
  const inner = document.getElementById('modal-inner');
  let previousActiveElement = null;
  let previousOverflow = '';

  function openModal(project, trigger) {
    if (!modal || !inner || modal.open) return;

    inner.innerHTML = `
      <!-- Header Banner with Full Visual Preview -->
      <div class="case-study-header">
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <img src="${escapeHtml(previewImage(project.image, 960))}" srcset="${escapeHtml(previewSources(project.image))}" sizes="(max-width: 860px) 92vw, 860px" width="1236" height="768" decoding="async" alt="${escapeHtml(project.title)} concept interface preview" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: brightness(0.9);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(9, 9, 11, 0.4) 0%, rgba(9, 9, 11, 0.75) 100%);"></div>
        </div>

        <div class="case-study-heading">
          <div class="case-study-toolbar">
            <div class="case-study-meta">
              <span class="status-pill" style="background: rgba(255, 255, 255, 0.95); border-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
                <span style="width: 7px; height: 7px; border-radius: 50%; background-color: ${project.accentColor || '#09090B'}; display: inline-block;"></span>
                ${escapeHtml(project.tag)}
              </span>
              <span class="status-pill" style="color: #09090B; border-color: rgba(255, 255, 255, 0.9); background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);">
                Concept study
              </span>
            </div>
            <button id="close-modal-btn" class="btn btn-secondary btn-sm" aria-label="Close concept study" style="border-radius: 50%; width: 44px; height: 44px; flex-shrink: 0; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 1.1rem; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
              ✕
            </button>
          </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #E4E4E7; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; font-weight: 700;">
                ${escapeHtml(project.context)}
              </div>
              <h2 id="modal-title" style="font-size: clamp(1.8rem, 3.2vw, 2.4rem); line-height: 1.15; color: #FFFFFF; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.5);">
                ${escapeHtml(project.title)}
              </h2>
            </div>
        </div>
      </div>

      <!-- Content Details -->
      <div style="padding: clamp(1.25rem, 3.5vw, 2.5rem); display: flex; flex-direction: column; gap: clamp(1.25rem, 3vw, 2rem); background: #FFFFFF;">
        <!-- Summary & Challenge -->
        <div>
          <h3 style="font-size: 0.92rem; color: #09090B; margin-bottom: var(--space-3); text-transform: uppercase; font-family: var(--font-mono); letter-spacing: 0.12em; font-weight: 800;">
            ✦ CONCEPT BRIEF
          </h3>
          <p style="font-size: 1.08rem; line-height: 1.8; color: #52525B;">
            ${escapeHtml(project.fullDescription)}
          </p>
        </div>

        <!-- Concept highlights -->
        <div class="grid-3" style="gap: var(--space-5);">
          ${project.highlights.map(m => `
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: var(--space-5); text-align: center; background: #FAFAFB;">
                <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #09090B; line-height: 1; margin-bottom: 6px;">
                  ${escapeHtml(m.value)}
                </div>
                <div style="font-size: 0.85rem; font-family: var(--font-mono); color: #64646D; font-weight: 600;">
                  ${escapeHtml(m.label)}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Key Features List -->
        <div>
          <h3 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-4); font-weight: 800;">
            ✦ DESIGN GOALS
          </h3>
          <div class="grid-2" style="gap: var(--space-4);">
            ${project.designGoals.map(f => `
              <div class="flex items-center gap-3" style="font-size: 1.02rem; color: #09090B;">
                <span style="color: #059669; font-weight: bold; font-size: 1.1rem;">✔</span>
                <span>${escapeHtml(f)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tech Stack Badges -->
        <div>
          <h3 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-3); font-weight: 800;">
            ✦ SUGGESTED BUILD STACK
          </h3>
          <div class="flex flex-wrap gap-2">
            ${project.proposedStack.map(t => `
              <span class="status-pill" style="font-size: 0.88rem; background: #F4F4F6; border-color: #D4D4D8; color: #09090B;">
                ${escapeHtml(t)}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Modal Bottom Actions -->
        <div class="flex flex-wrap items-center justify-between gap-4" style="border-top: 1px solid #E4E4E7; padding-top: var(--space-6); margin-top: var(--space-2);">
          <div style="font-size: 0.95rem; color: #52525B;">
            Explore this direction for your brand?
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

    previousActiveElement = trigger || document.activeElement;
    previousOverflow = document.body.style.overflow;
    if (!modal.open) modal.showModal();
    modal.classList.add('open');
    inner.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    // Hook buttons
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.focus({ preventScroll: true });
    }

    const scopeBtn = document.getElementById('modal-scope-btn');
    if (scopeBtn) {
      scopeBtn.addEventListener('click', () => {
        closeModal();
        scrollToSection('calculator', 'calc-type');
      });
    }

    const pitchBtn = document.getElementById('modal-pitch-btn');
    if (pitchBtn) {
      pitchBtn.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal();
        const messageField = document.getElementById('contact-message');
        if (messageField) {
          const inspiration = `I'd like to discuss a build inspired by "${project.title}".`;
          messageField.value = messageField.value ? `${messageField.value}\n\n${inspiration}` : inspiration;
          messageField.dispatchEvent(new Event('input', { bubbles: true }));
        }
        scrollToSection('inquiry-form', 'contact-name');
      });
    }
  }

  function closeModal() {
    if (!modal.open) return;
    modal.close();
    restoreDialogState();
  }

  function restoreDialogState() {
    if (modal.open) return;
    modal.classList.remove('open');
    document.body.style.overflow = previousOverflow;
    if (previousActiveElement?.isConnected) {
      previousActiveElement.focus({ preventScroll: true });
    }
    previousActiveElement = null;
  }
  modal.addEventListener('close', restoreDialogState);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('open-project-modal', (e) => {
    const project = projects.find(item => item.id === e.detail?.projectId);
    if (project) openModal(project, e.detail.trigger);
  });

  // Native dialog handles keyboard trapping and background inertness.
  modal.addEventListener('cancel', event => {
    event.preventDefault();
    closeModal();
  });
  modal.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = Array.from(inner.querySelectorAll('button, a[href]'));
    const first = controls[0], last = controls.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
}
