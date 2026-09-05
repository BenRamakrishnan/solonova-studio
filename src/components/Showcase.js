import { projects } from '../data/projects.js';

export function renderShowcase(activeCategory = 'all') {
  const container = document.getElementById('showcase-root');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'All Curated Works' },
    { id: 'saas', label: 'AI SaaS & Tech' },
    { id: 'ecom', label: 'Luxury E-Commerce' },
    { id: 'web', label: 'Custom Web Apps' },
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
            <span style="color: #09090B;">CURATED PORTFOLIO</span>
          </div>
          <h2 style="color: #09090B;">Selected Works & <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Case Studies</span></h2>
          <p>Every digital product is handcrafted with intentional hierarchy, tailored typography, and sub-second performance. Select a project to inspect the engineering brief.</p>

          <!-- Filter Pills -->
          <div class="filter-tabs" style="margin-top: var(--space-6);" role="tablist" aria-label="Filter Showcase by Category">
            ${categories.map(c => `
              <button 
                class="filter-btn ${c.id === activeCategory ? 'active' : ''}" 
                data-category="${c.id}"
                role="tab"
                aria-selected="${c.id === activeCategory ? 'true' : 'false'}"
              >
                ${c.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Project Cards Bento Grid with Double-Bezel -->
        <div class="grid-3" id="projects-grid">
          ${filteredProjects.map(p => `
            <article class="double-bezel project-card" data-project-id="${p.id}">
              <div class="double-bezel-inner" style="display: flex; flex-direction: column; overflow: hidden;">
                <!-- Real Bespoke Showcase Image Header -->
                <div class="project-card-image-box">
                  <img src="${p.image}" alt="${p.title} interface preview" class="project-card-image" loading="lazy" onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='./showcase/'+this.src.split('/').pop();}" />
                  <div class="project-card-image-overlay">
                    <div class="flex items-center justify-between">
                      <span class="status-pill" style="font-size: 0.78rem; background: rgba(255, 255, 255, 0.92); border-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px);">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background-color: ${p.accentColor || '#09090B'}; display: inline-block;"></span>
                        ${p.tag}
                      </span>
                      <span class="status-pill" style="font-size: 0.78rem; color: #09090B; border-color: rgba(255, 255, 255, 0.8); background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(8px);">
                        ⏱ ${p.deliveryTime}
                      </span>
                    </div>

                    <!-- Client Badge with Subtle Hue Indicator -->
                    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: var(--radius-md); padding: var(--space-2) var(--space-4); border: 1px solid rgba(255, 255, 255, 0.8); box-shadow: var(--shadow-subtle);">
                      <div style="font-family: var(--font-mono); font-size: 0.74rem; color: #71717A; letter-spacing: 0.08em; font-weight: 700;">CLIENT SPEC</div>
                      <div style="font-family: var(--font-body); font-weight: 700; font-size: 0.92rem; color: #09090B;">${p.client}</div>
                    </div>
                  </div>
                </div>

                <!-- Card Body -->
                <div style="padding: var(--card-padding); display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                  <div>
                    <h3 style="font-size: 1.45rem; font-weight: 700; margin-bottom: var(--space-3); line-height: 1.25; color: #09090B;">${p.title}</h3>
                    <p style="font-size: 1.02rem; margin-bottom: var(--space-6); line-height: 1.65; color: #52525B;">${p.summary}</p>

                    <!-- Metrics Badges with Subdued Chromatic Accents -->
                    <div class="flex flex-wrap gap-2" style="margin-bottom: var(--space-8); min-width: 0; max-width: 100%;">
                      ${p.metrics.map(m => `
                        <span class="project-metric-badge" style="font-family: var(--font-mono); font-size: clamp(0.74rem, 1.2vw, 0.82rem); background: #F4F4F6; border: 1px solid #E4E4E7; padding: 0.3rem clamp(0.45rem, 1.2vw, 0.75rem); border-radius: var(--radius-sm); color: #09090B; max-width: 100%; overflow-wrap: break-word;">
                          <span style="color: #71717A;">${m.label}:</span> <strong style="color: ${p.accentColor || '#09090B'};">${m.value}</strong>
                        </span>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Action Link -->
                  <div style="border-top: 1px solid #E4E4E7; padding-top: var(--space-5);">
                    <button class="btn btn-secondary open-case-study-btn" data-project-id="${p.id}" style="width: 100%; justify-content: center; font-size: 0.98rem; padding: 0.85rem 1.5rem;">
                      <span>Inspect Case Study</span>
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
      renderShowcase(category);
    });
    btn.addEventListener('keydown', (e) => {
      let targetIdx = null;
      if (e.key === 'ArrowRight') {
        targetIdx = (idx + 1) % filterBtns.length;
      } else if (e.key === 'ArrowLeft') {
        targetIdx = (idx - 1 + filterBtns.length) % filterBtns.length;
      }
      if (targetIdx !== null) {
        e.preventDefault();
        filterBtns[targetIdx].focus();
        const category = filterBtns[targetIdx].getAttribute('data-category');
        renderShowcase(category);
      }
    });
  });

  // Attach Modal Inspection Listeners
  const inspectBtns = container.querySelectorAll('.open-case-study-btn');
  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project-id');
      const project = projects.find(p => p.id === id);
      if (project && window.openSolonovaProjectModal) {
        window.openSolonovaProjectModal(project);
      }
    });
  });

  const cards = container.querySelectorAll('article.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === id);
      if (project && window.openSolonovaProjectModal) {
        window.openSolonovaProjectModal(project);
      }
    });
    card.style.cursor = 'pointer';
  });
}
