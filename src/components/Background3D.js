/** Flowing perspective wireframe, retaining the original mesh and cross motif. */
export function initBackground3D() {
  const canvas = document.getElementById('bg-canvas-3d');
  const ctx = canvas?.getContext('2d', { alpha: true });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = window.matchMedia('(pointer: coarse)');
  let width = 0, height = 0, columns = 0, rows = 0;
  let points = [], frame = 0, lastTime = 0, elapsed = 0, disposed = false;
  const cursor = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };
  const ripples = [];
  const motionToggle = document.getElementById('motion-toggle');
  const hero = document.getElementById('hero-root');
  let userPaused = false, heroVisible = true;
  function resize() {
    if (!ctx) return;
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    columns = width < 768 ? 26 : 44;
    rows = width < 768 ? 22 : 30;
    points = Array.from({ length: (columns + 1) * (rows + 1) }, () => ({ x: 0, y: 0, visible: false }));
    if (heroVisible) draw();
  }
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    const focal = height / (2 * Math.tan(26 * Math.PI / 180));
    const radius = Math.max(140, Math.min(width, height) * 0.27);
    for (let row = 0; row <= rows; row++) {
      for (let column = 0; column <= columns; column++) {
        const x = (column / columns - 0.5) * 108;
        const z = (row / rows - 0.5) * 72;
        const wave = Math.sin(x * 0.11 + elapsed * 0.42) * Math.cos(z * 0.12 + elapsed * 0.28) * 1.65
          + Math.sin(x * 0.17 + z * 0.13 - elapsed * 0.35) * 0.7;
        const y = -5 + wave;
        const depth = -(y - 18) * 0.466 - (z - 38) * 0.885;
        const point = points[row * (columns + 1) + column];
        point.visible = depth > 5;
        if (!point.visible) continue;
        let sx = width / 2 + x * focal / depth;
        let sy = height / 2 - ((y - 18) * 0.885 - (z - 38) * 0.466) * focal / depth;
        if (cursor.active && !reduced.matches) {
          const dx = sx - cursor.x, dy = sy - cursor.y;
          const influence = Math.exp(-(dx * dx + dy * dy) / (radius * radius * 0.55));
          // Screen coordinates place the deformation exactly beneath the pointer.
          sx += dx * influence * 0.16;
          sy += dy * influence * 0.16 - influence * 28;
        }
        if (!reduced.matches) {
          for (const ripple of ripples) {
            const age = elapsed - ripple.time;
            const distance = Math.hypot(sx - ripple.x, sy - ripple.y);
            const ring = (distance - age * 220) / 35;
            sy += Math.exp(-ring * ring) * Math.sin(ring * 2) * 22 * Math.max(0, 1 - age / 2);
          }
        }
        point.x = sx;
        point.y = sy;
      }
    }
    ctx.lineWidth = 0.65;
    ctx.strokeStyle = 'rgba(9, 9, 11, 0.13)';
    ctx.beginPath();
    function line(a, b) {
      if (!a.visible || !b.visible) return;
      if ((a.y < -100 && b.y < -100) || (a.y > height + 100 && b.y > height + 100)) return;
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    }
    for (let row = 0; row <= rows; row++) {
      for (let column = 0; column <= columns; column++) {
        const index = row * (columns + 1) + column;
        const point = points[index];
        if (column < columns) line(point, points[index + 1]);
        if (row < rows) line(point, points[index + columns + 1]);
        if (row < rows && column < columns) line(point, points[index + columns + 2]);
      }
    }
    ctx.stroke();
    ctx.strokeStyle = 'rgba(9, 9, 11, 0.23)';
    ctx.lineWidth = 0.85;
    ctx.beginPath();
    for (let row = 2; row < rows; row += 3) {
      for (let column = 2; column < columns; column += 3) {
        const p = points[row * (columns + 1) + column];
        if (!p.visible || p.y < 0 || p.y > height) continue;
        ctx.moveTo(p.x - 2, p.y); ctx.lineTo(p.x + 2, p.y);
        ctx.moveTo(p.x, p.y - 2); ctx.lineTo(p.x, p.y + 2);
      }
    }
    ctx.stroke();
  }
  function animate(time) {
    frame = 0;
    if (disposed || !heroVisible || document.hidden || reduced.matches || userPaused) return;
    const interval = coarse.matches ? 1000 / 24 : 1000 / 40;
    if (time - lastTime >= interval) {
      const delta = Math.min((time - lastTime) / 1000, 0.06);
      lastTime = time;
      elapsed += delta;
      const follow = 1 - Math.exp(-delta * 14);
      cursor.x += (cursor.targetX - cursor.x) * follow;
      cursor.y += (cursor.targetY - cursor.y) * follow;
      while (ripples.length && elapsed - ripples[0].time > 2) ripples.shift();
      draw();
    }
    frame = requestAnimationFrame(animate);
  }
  function syncMotion() {
    if (disposed) return;
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = performance.now();
    if (motionToggle) {
      motionToggle.disabled = reduced.matches;
      motionToggle.textContent = reduced.matches ? 'Reduced motion on' : userPaused ? 'Resume motion' : 'Pause motion';
      motionToggle.setAttribute('aria-pressed', String(userPaused));
    }
    if (ctx && heroVisible && !document.hidden && !reduced.matches && !userPaused) frame = requestAnimationFrame(animate);
    else if (heroVisible) draw();
  }
  function pointerMove(event) {
    if (!heroVisible || reduced.matches || userPaused) return;
    if (!cursor.active) { cursor.x = event.clientX; cursor.y = event.clientY; }
    cursor.active = true;
    cursor.targetX = event.clientX;
    cursor.targetY = event.clientY;
  }
  function pointerDown(event) {
    pointerMove(event);
    if (!heroVisible || reduced.matches || userPaused) return;
    if (ripples.length >= 3) ripples.shift();
    ripples.push({ x: event.clientX, y: event.clientY, time: elapsed });
  }
  function pointerLeave() { cursor.active = false; }
  function toggleMotion() {
    userPaused = !userPaused;
    document.documentElement.dataset.motionPaused = String(userPaused);
    cursor.active = false;
    ripples.length = 0;
    syncMotion();
  }
  // The mesh is only exposed in the hero; avoid rendering beneath opaque sections.
  const visibilityObserver = ctx && hero && typeof window.IntersectionObserver === 'function'
    ? new window.IntersectionObserver(entries => {
      if (disposed) return;
      const entry = entries.find(item => item.target === hero);
      if (!entry || heroVisible === entry.isIntersecting) return;
      heroVisible = entry.isIntersecting;
      if (!heroVisible) {
        cursor.active = false;
        ripples.length = 0;
      }
      syncMotion();
    })
    : null;
  visibilityObserver?.observe(hero);
  resize();
  syncMotion();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', pointerMove, { passive: true });
  window.addEventListener('pointerdown', pointerDown, { passive: true });
  document.documentElement.addEventListener('pointerleave', pointerLeave);
  document.addEventListener('visibilitychange', syncMotion);
  reduced.addEventListener('change', syncMotion);
  motionToggle?.addEventListener('click', toggleMotion);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    visibilityObserver?.disconnect();
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', pointerMove);
    window.removeEventListener('pointerdown', pointerDown);
    document.documentElement.removeEventListener('pointerleave', pointerLeave);
    document.removeEventListener('visibilitychange', syncMotion);
    reduced.removeEventListener('change', syncMotion);
    motionToggle?.removeEventListener('click', toggleMotion);
    delete document.documentElement.dataset.motionPaused;
    ctx?.clearRect(0, 0, width, height);
  };
}
