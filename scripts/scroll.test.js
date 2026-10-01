import test from 'node:test';
import assert from 'node:assert/strict';
import { scrollToSection } from '../src/utils/scroll.js';

test('section handoffs respect reduced motion and move focus to the destination', () => {
  const previous = { document: globalThis.document, window: globalThis.window };
  const events = [];
  globalThis.document = { getElementById: id => id === 'section' ? { scrollIntoView: options => events.push(options) }
    : id === 'field' ? { focus: options => events.push(options) } : null };
  globalThis.window = { matchMedia: () => ({ matches: true }) };
  try {
    scrollToSection('section', 'field');
    assert.deepEqual(events, [{ preventScroll: true }, { behavior: 'instant' }]);
    scrollToSection('missing', 'missing');
    assert.equal(events.length, 2);
    globalThis.window.matchMedia = () => ({ matches: false });
    scrollToSection('section');
    assert.deepEqual(events.at(-1), { behavior: 'smooth' });
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }
});
