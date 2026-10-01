import './styles/main.css';

import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { initBackground3D } from './components/Background3D.js';
import { renderMetrics } from './components/MetricsBar.js';
import { renderShowcase } from './components/Showcase.js';
import { renderVibeProcess } from './components/VibeProcess.js';
import { renderAgencyVsSolo } from './components/AgencyVsSolo.js';
import { renderScopeCalculator } from './components/ScopeCalculator.js';
import { renderProjectModal } from './components/ProjectModal.js';
import { renderContactSection } from './components/ContactSection.js';
import { renderFooter } from './components/Footer.js';
import { mountComponent } from './utils/mount.js';

function initApp() {
  const components = [
    ['navigation', renderNavbar, 'navbar-root'],
    ['hero', renderHero, 'hero-root'],
    ['service targets', renderMetrics, 'metrics-root'],
    ['concept dialog', renderProjectModal, 'modal-root'],
    ['portfolio', renderShowcase, 'showcase-root'],
    ['process', renderVibeProcess, 'process-root'],
    ['comparison', renderAgencyVsSolo, 'comparison-root'],
    ['scope estimator', renderScopeCalculator, 'calculator-root'],
    ['inquiry form', renderContactSection, 'contact-root'],
    ['footer', renderFooter, 'footer-root']
  ];
  for (const [name, render, rootId] of components) mountComponent(name, render, rootId);
  mountComponent('scroll reveals', setupScrollReveal, 'app', { optional: true });
  // Paint useful content before starting the optional decorative wireframe.
  requestAnimationFrame(() => mountComponent('wireframe', initBackground3D, 'app', { optional: true }));
}

function setupScrollReveal() {
  // Respect user preference for reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target ONLY below-the-fold section cards; NEVER target hero, modals, drawers, or floating nav!
  document.querySelectorAll('main section:not(#hero-root) .double-bezel').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

// Boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
