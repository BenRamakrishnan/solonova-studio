import { studioContact } from './contact.js';

export function mountComponent(name, render, rootId, { optional = false } = {}) {
  try {
    render();
    return true;
  } catch (error) {
    console.error(`Unable to initialize ${name}:`, error);
    const root = document.getElementById(rootId);
    if (root && !optional) {
      const notice = document.createElement('p');
      notice.className = 'component-error';
      notice.setAttribute('role', 'alert');
      notice.append(`This section could not load. Please refresh, or contact the studio at `);
      const link = document.createElement('a');
      link.href = `mailto:${studioContact.email}`;
      link.textContent = studioContact.email;
      notice.append(link, '.');
      root.replaceChildren(notice);
    }
    return false;
  }
}
