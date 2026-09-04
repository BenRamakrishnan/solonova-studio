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

function initApp() {
  console.log('⚡ Solonova Vibe Core Initializing...');

  // Safe component runner preventing cascade failures
  const safeMount = (name, fn) => {
    try {
      fn();
    } catch (err) {
      console.error(`Error mounting component [${name}]:`, err);
    }
  };

  // Initialize Living 3D WebGL Background Engine
  safeMount('Background3D', initBackground3D);

  // Mount all UI components into semantic slots
  safeMount('Navbar', renderNavbar);
  safeMount('Hero', renderHero);
  safeMount('Metrics', renderMetrics);
  safeMount('Showcase', renderShowcase);
  safeMount('VibeProcess', renderVibeProcess);
  safeMount('AgencyVsSolo', renderAgencyVsSolo);
  safeMount('ScopeCalculator', renderScopeCalculator);
  safeMount('ContactSection', renderContactSection);
  safeMount('Footer', renderFooter);

  // Mount Project Deep-Dive Modal
  safeMount('ProjectModal', renderProjectModal);

  // Initialize Scroll Reveal without hiding modal/drawer content
  safeMount('ScrollReveal', setupScrollReveal);

  console.log('✔ Solonova Studio ready!');
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
