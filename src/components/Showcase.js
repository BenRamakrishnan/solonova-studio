import { projects } from '../data/projects.js';
import { previewImage, previewSources } from '../utils/images.js';
import { escapeHtml } from '../utils/html.js';

export function renderShowcase(activeCategory = 'all', focusCategory = false) {
  const container = document.getElementById('showcase-root');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'All Studies' },
    { id: 'saas', label: 'SaaS & Tech' },
    { id: 'ecom', label: 'E-Commerce' },
    { id: 'web', label: 'Web Apps' },
    { id: 'landing', label: 'Landing Pages' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  container.innerHTML = `
    <section id="work" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">CONCEPT PORTFOLIO</span>
          </div>
          <h2 style="color: #09090B;">Selected Works & <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Design Studies</span></h2>
          <p>Self-initiated concepts for SaaS, commerce, and service brands. Explore the visual direction and proposed experience behind each study.</p>

          <!-- Filter Pills -->
          <div class="filter-tabs" style="margin-top: var(--space-6);" role="tablist" aria-label="Filter Showcase by Category">
            ${categories.map(c => `
              <button 
                class="filter-btn ${c.id === activeCategory ? 'active' : ''}" 
                data-category="${c.id}" id="filter-${c.id}" aria-controls="projects-grid"
                role="tab"
                aria-selected="${c.id === activeCategory ? 'true' : 'false'}"
              >
                ${c.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Unobstructed previews with concise study details -->
        <div class="grid-3" id="projects-grid" role="tabpanel" aria-labelledby="filter-${activeCategory}" tabindex="0">
          ${filteredProjects.map(p => `
            <article class="double-bezel project-card" data-project-id="${escapeHtml(p.id)}">
              <div class="double-bezel-inner project-card-inner">
                <div class="project-card-image-box">
                  <img src="${escapeHtml(previewImage(p.image))}" srcset="${escapeHtml(previewSources(p.image))}" sizes="(max-width: 640px) 92vw, (max-width: 1080px) 46vw, 400px" width="640" height="357" decoding="async" alt="${escapeHtml(p.title)} interface preview" class="project-card-image" loading="lazy" />
                </div>

                <div class="project-card-body">
                  <div>
                    <p class="project-card-meta"><span>${escapeHtml(p.tag)}</span><span>Concept study</span></p>
                    <h3 class="project-card-title">${escapeHtml(p.displayTitle || p.title)}</h3>
                    <p class="project-card-summary">${escapeHtml(p.summary)}</p>
                  </div>

                  <div class="project-card-action">
                    <button class="btn btn-secondary open-case-study-btn" aria-label="Explore Study: ${escapeHtml(p.title)}" data-project-id="${escapeHtml(p.id)}">
                      <span>Explore Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Attach Category Filter Listeners with keyboard navigation
  const filterBtns = Array.from(container.querySelectorAll('.filter-btn'));
  filterBtns.forEach((btn, idx) => {
    btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      renderShowcase(category, true);
    });
    btn.addEventListener('keydown', (e) => {
      let targetIdx = null;
      if (e.key === 'ArrowRight') {
        targetIdx = (idx + 1) % filterBtns.length;
      } else if (e.key === 'ArrowLeft') {
        targetIdx = (idx - 1 + filterBtns.length) % filterBtns.length;
      }
      if (e.key === 'Home') targetIdx = 0;
      if (e.key === 'End') targetIdx = filterBtns.length - 1;
      if (targetIdx !== null) {
        e.preventDefault();
        filterBtns[targetIdx].focus();
        const category = filterBtns[targetIdx].getAttribute('data-category');
        renderShowcase(category, true);
      }
    });
  });

  // Attach Modal Inspection Listeners
  const inspectBtns = container.querySelectorAll('.open-case-study-btn');
  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project-id');
      document.dispatchEvent(new CustomEvent('open-project-modal', { detail: { projectId: id, trigger: btn } }));
    });
  });

  const cards = container.querySelectorAll('article.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      document.dispatchEvent(new CustomEvent('open-project-modal', { detail: { projectId: id, trigger: card.querySelector('button') } }));
    });
    card.style.cursor = 'pointer';
  });
  if (focusCategory) {
    container.querySelector(`[data-category="${activeCategory}"]`)?.focus({ preventScroll: true });
  }
}
