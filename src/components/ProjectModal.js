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
      <header class="study-header">
        <div class="study-heading">
          <p class="study-disclosure">Self-initiated concept</p>
          <h2 id="modal-title">${escapeHtml(project.displayTitle || project.title)}</h2>
          <p class="study-context">${escapeHtml(project.context)}</p>
        </div>
        <button id="close-modal-btn" class="btn btn-secondary btn-sm study-close" aria-label="Close concept study">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>
      </header>

      <figure class="study-preview">
        <img src="${escapeHtml(previewImage(project.image, 960))}" srcset="${escapeHtml(previewSources(project.image))}" sizes="(max-width: 860px) 92vw, 860px" width="960" height="536" decoding="async" alt="${escapeHtml(project.title)} concept interface preview" class="study-preview-image" />
        <figcaption>
          <a class="study-preview-link" href="${escapeHtml(project.image)}" target="_blank" rel="noopener" aria-label="View full-size preview of ${escapeHtml(project.displayTitle || project.title)} (opens in a new tab)">
            <span>View full-size preview <span class="study-new-tab">(new tab)</span></span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </figcaption>
      </figure>

      <!-- Content Details -->
      <div class="study-details">
        <div>
          <h3 class="study-section-title">Concept brief</h3>
          <p class="study-description">${escapeHtml(project.fullDescription)}</p>
        </div>

        <dl class="study-facts">
          ${project.highlights.map(m => `
            <div>
              <dt>${escapeHtml(m.label)}</dt>
              <dd>${escapeHtml(m.value)}</dd>
            </div>
          `).join('')}
        </dl>

        <div>
          <h3 class="study-section-title">Design goals</h3>
          <ul class="study-goals">
            ${project.designGoals.map(f => `
              <li>${escapeHtml(f)}</li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h3 class="study-section-title">Suggested build stack</h3>
          <p class="study-stack">${project.proposedStack.map(escapeHtml).join(' · ')}</p>
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
