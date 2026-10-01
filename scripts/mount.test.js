import test from 'node:test';
import assert from 'node:assert/strict';
import { mountComponent } from '../src/utils/mount.js';

test('failed sections show a contact fallback while optional decoration leaves content intact', () => {
  const previousDocument = globalThis.document;
  const previousError = console.error;
  const errors = [];
  const root = { children: [], replaceChildren(...children) { this.children = children; } };
  globalThis.document = {
    getElementById: () => root,
    createElement: tag => ({ tag, children: [], append(...children) { this.children.push(...children); }, setAttribute(name, value) { this[name] = value; } })
  };
  console.error = (...args) => errors.push(args);
  try {
    assert.equal(mountComponent('portfolio', () => { throw new Error('Test failure'); }, 'root'), false);
    assert.equal(root.children[0].role, 'alert');
    assert.equal(root.children[0].children[1].href, 'mailto:ben@solonova.ai');
    const notice = root.children[0];
    assert.equal(mountComponent('decoration', () => { throw new Error('Test failure'); }, 'root', { optional: true }), false);
    assert.equal(root.children[0], notice);
    assert.equal(mountComponent('next section', () => {}, 'root'), true);
    assert.equal(errors.length, 2);
  } finally {
    if (previousDocument === undefined) delete globalThis.document; else globalThis.document = previousDocument;
    console.error = previousError;
  }
});
