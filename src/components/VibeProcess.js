export function renderVibeProcess() {
  const container = document.getElementById('process-root');
  if (!container) return;

  const steps = [
    {
      num: '01',
      title: 'Discovery & Creative Spec',
      timeline: 'Day 1',
      description: 'A focused 30-minute kickoff to define your exact brand identity, conversion metrics, and architecture requirements — with zero corporate bloat.',
      deliverable: 'Product Blueprint & Style Moodboard'
    },
    {
      num: '02',
      title: 'Agentic Vibe Coding',
      timeline: 'Day 2 - 3',
      description: 'Leveraging modular front-end architecture and agentic AI tools, we build production-ready components, responsive layouts, and state at 10x velocity.',
      deliverable: 'Live Interactive Staging URL'
    },
    {
      num: '03',
      title: 'Impeccable Polish & TDD',
      timeline: 'Day 4',
      description: 'Auditing every breakpoint against strict design standards: tailored typography, fluid spring transitions, zero CLS shifts, and 100/100 Lighthouse speed.',
      deliverable: '100/100 Lighthouse & Cross-Device Audit'
    },
    {
      num: '04',
      title: 'Global Edge Launch',
      timeline: 'Day 5',
      description: 'Zero-downtime deployment to global Edge CDNs (Vercel / Cloudflare). You receive 100% source code ownership and clean Git version history.',
      deliverable: 'Production Domain Live + Clean Git Repo'
    }
  ];

  container.innerHTML = `
    <section id="process" class="section" style="background: #FAFAFB; border-block: 1px solid #E4E4E7;">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">THE DELIVERY METHODOLOGY</span>
          </div>
          <h2 style="color: #09090B;">From Thought to Shipped in <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 6px;">Days, Not Months</span></h2>
          <p>Traditional agencies treat web design like construction in concrete. Solonova treats it like music: high-frequency improvisation anchored by disciplined engineering.</p>
        </div>

        <!-- Steps Grid -->
        <div class="grid-4">
          ${steps.map(s => `
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3vw, 2.25rem); display: flex; flex-direction: column; justify-content: space-between; position: relative;">
                <div style="font-family: var(--font-display); font-size: clamp(2.4rem, 4vw, 3.4rem); font-weight: 800; color: rgba(197, 160, 89, 0.15); position: absolute; top: clamp(0.75rem, 2vw, 1.25rem); right: clamp(0.75rem, 2vw, 1.25rem); line-height: 1; user-select: none; pointer-events: none;">
                  ${s.num}
                </div>

                <div>
                  <span class="status-pill" style="margin-bottom: var(--space-4); font-size: 0.8rem; background: #F4F4F6; color: #09090B; border-color: #D4D4D8;">
                    ${s.timeline}
                  </span>
                  <h3 style="font-size: clamp(1.2rem, 1.8vw, 1.45rem); font-weight: 700; margin-bottom: var(--space-3); line-height: 1.25; color: #09090B; overflow-wrap: break-word;">${s.title}</h3>
                  <p style="font-size: clamp(0.92rem, 1.2vw, 1.02rem); line-height: 1.6; margin-bottom: var(--space-5); color: #52525B; overflow-wrap: break-word;">${s.description}</p>
                </div>

                <div style="border-top: 1px solid #E4E4E7; padding-top: var(--space-4); font-size: clamp(0.84rem, 1.1vw, 0.92rem); font-family: var(--font-mono); color: #09090B; overflow-wrap: break-word;">
                  <strong style="color: var(--accent-amber);">Deliverable:</strong> ${s.deliverable}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
