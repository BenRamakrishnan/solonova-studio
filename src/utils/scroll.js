export function scrollToSection(id, focusId) {
  if (focusId) document.getElementById(focusId)?.focus({ preventScroll: true });
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
}
