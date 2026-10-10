import test from 'node:test';
import assert from 'node:assert/strict';
import { initBackground3D } from '../src/components/Background3D.js';

test('wireframe follows pointer, pauses outside the hero, and respects motion preferences', () => {
  const previous = Object.fromEntries(['window', 'document', 'requestAnimationFrame', 'cancelAnimationFrame'].map(key => [key, globalThis[key]]));
  const windowMock = new EventTarget();
  const documentMock = new EventTarget();
  const reduced = new EventTarget();
  reduced.matches = false;
  const frames = new Map();
  let serial = 0, strokes = 0, vertices = [];
  const context = {
    clearRect() { vertices = []; }, setTransform() {}, beginPath() {},
    moveTo(x, y) { vertices.push([x, y]); }, lineTo() {}, stroke() { strokes++; }
  };
  const canvas = { getContext: () => context };
  const hero = {};
  let observerCallback, observedTarget, observerDisconnected = false;
  class VisibilityObserver {
    constructor(callback) { observerCallback = callback; }
    observe(target) { observedTarget = target; }
    disconnect() { observerDisconnected = true; }
  }
  const button = new EventTarget();
  button.setAttribute = () => {};
  Object.assign(windowMock, { innerWidth: 1200, innerHeight: 800, devicePixelRatio: 3,
    IntersectionObserver: VisibilityObserver,
    matchMedia: query => query.includes('reduced-motion') ? reduced : { matches: false }
  });
  Object.assign(documentMock, { hidden: false, documentElement: new EventTarget(),
    getElementById: id => ({ 'bg-canvas-3d': canvas, 'motion-toggle': button, 'hero-root': hero })[id]
  });
  documentMock.documentElement.dataset = {};
  globalThis.window = windowMock;
  globalThis.document = documentMock;
  globalThis.requestAnimationFrame = callback => { frames.set(++serial, callback); return serial; };
  globalThis.cancelAnimationFrame = id => frames.delete(id);
  let cleanup;
  try {
    cleanup = initBackground3D();
    assert.equal(canvas.width, 1800, 'pixel ratio is capped at 1.5');
    assert.equal(observedTarget, hero, 'visibility is measured against the hero');
    assert.equal(frames.size, 1);
    const baseline = vertices.map(point => [...point]);
    const pointer = new Event('pointermove');
    Object.assign(pointer, { clientX: 600, clientY: 450 });
    windowMock.dispatchEvent(pointer);
    const [id, callback] = frames.entries().next().value;
    frames.delete(id);
    callback(performance.now() + 40);
    const nearby = baseline.map((point, index) => ({ point, index }))
      .filter(({ point }) => Math.hypot(point[0] - 600, point[1] - 450) < 50);
    assert.ok(nearby.length > 0);
    assert.ok(nearby.some(({ point, index }) => vertices[index][1] < point[1] - 15), 'mesh visibly deforms under the cursor');
    const beforeRipple = vertices.map(point => [...point]);
    const click = new Event('pointerdown');
    Object.assign(click, { clientX: 600, clientY: 450 });
    windowMock.dispatchEvent(click);
    const [rippleId, rippleFrame] = frames.entries().next().value;
    frames.delete(rippleId);
    rippleFrame(performance.now() + 90);
    assert.ok(nearby.some(({ index }) => Math.abs(vertices[index][1] - beforeRipple[index][1]) > 8), 'click produces a visible localized ripple');
    observerCallback([{ target: hero, isIntersecting: false }]);
    assert.equal(frames.size, 0, 'offscreen hero stops continuous rendering');
    assert.equal(button.textContent, 'Pause motion', 'visibility does not change the visitor motion preference');
    const offscreenStrokes = strokes;
    windowMock.dispatchEvent(pointer);
    windowMock.dispatchEvent(click);
    reduced.dispatchEvent(new Event('change'));
    assert.equal(strokes, offscreenStrokes, 'offscreen pointer events and preference sync do not draw hidden content');
    observerCallback([{ target: hero, isIntersecting: true }]);
    assert.equal(frames.size, 1, 'returning to the hero resumes motion');
    button.dispatchEvent(new Event('click'));
    assert.equal(frames.size, 0, 'visitor can pause decorative motion');
    assert.equal(button.textContent, 'Resume motion');
    observerCallback([{ target: hero, isIntersecting: false }]);
    observerCallback([{ target: hero, isIntersecting: true }]);
    assert.equal(frames.size, 0, 'returning to the hero preserves visitor pause');
    button.dispatchEvent(new Event('click'));
    assert.equal(frames.size, 1);
    documentMock.hidden = true;
    documentMock.dispatchEvent(new Event('visibilitychange'));
    assert.equal(frames.size, 0, 'hidden tabs do not animate');
    observerCallback([{ target: hero, isIntersecting: false }]);
    observerCallback([{ target: hero, isIntersecting: true }]);
    assert.equal(frames.size, 0, 'observer callbacks do not resume a hidden tab');
    documentMock.hidden = false;
    documentMock.dispatchEvent(new Event('visibilitychange'));
    assert.equal(frames.size, 1);
    reduced.matches = true;
    reduced.dispatchEvent(new Event('change'));
    assert.equal(frames.size, 0, 'reduced motion stops continuous rendering');
    observerCallback([{ target: hero, isIntersecting: false }]);
    observerCallback([{ target: hero, isIntersecting: true }]);
    assert.equal(frames.size, 0, 'returning to the hero preserves reduced motion');
    const still = strokes;
    windowMock.dispatchEvent(pointer);
    assert.equal(strokes, still, 'pointer movement does not animate a reduced-motion background');
    reduced.matches = false;
    reduced.dispatchEvent(new Event('change'));
    assert.equal(frames.size, 1);
    cleanup();
    cleanup = null;
    assert.equal(frames.size, 0);
    assert.equal(observerDisconnected, true, 'cleanup disconnects the visibility observer');
    const disposedStrokes = strokes;
    observerCallback([{ target: hero, isIntersecting: false }]);
    observerCallback([{ target: hero, isIntersecting: true }]);
    assert.equal(strokes, disposedStrokes, 'queued observer callbacks are ignored after cleanup');
    reduced.dispatchEvent(new Event('change'));
    assert.equal(frames.size, 0, 'cleanup removes motion listeners');
  } finally {
    cleanup?.();
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }
});

test('wireframe remains available without a hero or IntersectionObserver', () => {
  const previous = Object.fromEntries(['window', 'document', 'requestAnimationFrame', 'cancelAnimationFrame'].map(key => [key, globalThis[key]]));
  const frames = new Set();
  let serial = 0;
  const reduced = Object.assign(new EventTarget(), { matches: false });
  const context = { clearRect() {}, setTransform() {}, beginPath() {}, moveTo() {}, lineTo() {}, stroke() {} };
  const canvas = { getContext: () => context };
  let cleanup;
  try {
    for (const missing of ['observer', 'hero']) {
      frames.clear();
      const hero = {};
      globalThis.window = Object.assign(new EventTarget(), {
        innerWidth: 400, innerHeight: 800, matchMedia: () => reduced,
        ...(missing === 'hero' ? { IntersectionObserver: class {
          constructor() { assert.fail('a missing hero must not create an observer'); }
        } } : {})
      });
      globalThis.document = Object.assign(new EventTarget(), {
        hidden: false, documentElement: Object.assign(new EventTarget(), { dataset: {} }),
        getElementById: id => ({ 'bg-canvas-3d': canvas, 'hero-root': missing === 'hero' ? null : hero })[id]
      });
      globalThis.requestAnimationFrame = () => { frames.add(++serial); return serial; };
      globalThis.cancelAnimationFrame = id => frames.delete(id);
      cleanup = initBackground3D();
      assert.equal(frames.size, 1, `missing ${missing} retains the original animation fallback`);
      cleanup();
      cleanup = null;
      assert.equal(frames.size, 0);
    }
  } finally {
    cleanup?.();
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }
});

test('motion controls remain usable when a canvas context is unavailable', () => {
  const previous = { window: globalThis.window, document: globalThis.document, cancelAnimationFrame: globalThis.cancelAnimationFrame };
  const reduced = new EventTarget();
  reduced.matches = false;
  const button = new EventTarget();
  button.setAttribute = () => {};
  const documentMock = new EventTarget();
  Object.assign(documentMock, {
    hidden: false,
    documentElement: Object.assign(new EventTarget(), { dataset: {} }),
    getElementById: id => id === 'bg-canvas-3d' ? { getContext: () => null } : button
  });
  globalThis.document = documentMock;
  globalThis.window = Object.assign(new EventTarget(), { matchMedia: () => reduced });
  globalThis.cancelAnimationFrame = () => {};
  let cleanup;
  try {
    cleanup = initBackground3D();
    button.dispatchEvent(new Event('click'));
    assert.equal(button.textContent, 'Resume motion');
    assert.equal(documentMock.documentElement.dataset.motionPaused, 'true');
    cleanup();
    cleanup = null;
    assert.equal(documentMock.documentElement.dataset.motionPaused, undefined);
  } finally {
    cleanup?.();
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }
});
