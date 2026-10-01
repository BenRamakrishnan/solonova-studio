const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

// Data stays text even when project names contain quotes or markup characters.
export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => entities[character]);
}
