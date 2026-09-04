import * as THREE from 'three';

/**
 * SOLONOVA STUDIO — Ultra-Fast 60-120 FPS Interactive 3D Liquid Silk Wave
 * Theme: Editorial Monochromatic Luxury with Dark Architectural Lines & Crosses
 * 
 * Features:
 * - Crisp, clearly visible dark architectural wireframe contour lines (0.30 opacity pitch black)
 * - Tactile dark cross (+) grid markers that sit at line intersections and ride the wave
 * - Interactive pointer wake wave & ripple physics with smooth spring damping
 * - 75×50 optimized geometry and throttled normal calculations for 120 FPS performance
 */

export function initBackground3D() {
  const canvas = document.getElementById('bg-canvas-3d');
  if (!canvas) {
    return;
  }

  // Graceful degradation: Check WebGL support before instantiating Three.js
  try {
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.info('✦ WebGL unavailable. Preserving pure luxury CSS aesthetic without 3D canvas.');
      canvas.style.display = 'none';
      return () => {};
    }
  } catch (e) {
    canvas.style.display = 'none';
    return () => {};
  }

  let cleanupFn = () => {};

  try {
    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    scene.fog = new THREE.FogExp2(0xFFFFFF, 0.016);

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 18, 38);
    camera.lookAt(0, -2, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: window.devicePixelRatio <= 1.5,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

  // --- Lighting System (Warm Champagne Editorial Sheen) ---
  const ambientLight = new THREE.AmbientLight(0xF5F5F7, 2.0);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFFF7EC, 2.5); // Warm champagne rim
  keyLight.position.set(25, 40, 20);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xD8D8E0, 1.6);
  rimLight.position.set(-30, -10, -20);
  scene.add(rimLight);

  const cursorLight = new THREE.PointLight(0xFFE8CC, 4.0, 85, 1.5); // Soft amber cursor highlight
  cursorLight.position.set(0, 10, 15);
  scene.add(cursorLight);

  // --- 3D Fluid Wave Mesh Geometry (Optimized 75×50 desktop, 45×32 mobile) ---
  const isMobile = window.innerWidth < 768;
  const meshWidth = 92;
  const meshHeight = 68;
  const segX = isMobile ? 45 : 75;
  const segY = isMobile ? 32 : 50;

  const geometry = new THREE.PlaneGeometry(meshWidth, meshHeight, segX, segY);
  geometry.rotateX(-Math.PI / 2.25);
  geometry.translate(0, -5, 0);

  const posAttr = geometry.attributes.position;
  const count = posAttr.count;
  const originalPositions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    originalPositions[i] = posAttr.array[i];
  }

  // Pure White Liquid Silk Material with Satin Sheen
  const material = new THREE.MeshStandardMaterial({
    color: 0xF7F7F8,
    metalness: 0.12,
    roughness: 0.38,
    wireframe: false,
    side: THREE.DoubleSide
  });

  const waveMesh = new THREE.Mesh(geometry, material);
  scene.add(waveMesh);

  // --- Bold, Dark Architectural Contour Lines (High Visibility) ---
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x09090B, // Pitch black lines
    wireframe: true,
    transparent: true,
    opacity: 0.28   // Significantly darker & clearly visible
  });
  const wireMesh = new THREE.Mesh(geometry, wireMaterial);
  wireMesh.position.y += 0.04;
  scene.add(wireMesh);

  // --- Procedural Dark Cross (+) Grid Markers ---
  function createCrossTexture() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    ctx.strokeStyle = '#09090B'; // Crisp deep black
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';

    // Vertical stroke of cross
    ctx.beginPath();
    ctx.moveTo(32, 10);
    ctx.lineTo(32, 54);
    ctx.stroke();

    // Horizontal stroke of cross
    ctx.beginPath();
    ctx.moveTo(10, 32);
    ctx.lineTo(54, 32);
    ctx.stroke();

    return new THREE.CanvasTexture(pCanvas);
  }

  // Sample grid vertices to place crosses at mesh line intersections
  const stepX = 3;
  const stepY = 3;
  const crossIndices = [];
  const crossInitialPos = [];

  for (let iy = 1; iy < segY; iy += stepY) {
    for (let ix = 1; ix < segX; ix += stepX) {
      const vIdx = iy * (segX + 1) + ix;
      crossIndices.push(vIdx);
      crossInitialPos.push(
        originalPositions[vIdx * 3],
        originalPositions[vIdx * 3 + 1] + 0.08,
        originalPositions[vIdx * 3 + 2]
      );
    }
  }

  const crossCount = crossIndices.length;
  const crossGeo = new THREE.BufferGeometry();
  crossGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(crossInitialPos), 3)
  );

  const crossTexture = createCrossTexture();
  const crossMat = new THREE.PointsMaterial({
    size: 1.5,
    map: crossTexture,
    transparent: true,
    opacity: 0.65, // Bold, high-contrast dark crosses
    depthWrite: false
  });
  const crossPoints = new THREE.Points(crossGeo, crossMat);
  scene.add(crossPoints);

  // --- Floating Monochrome Ink Particles ---
  const particleCount = 110;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);
  const particleSpeeds = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    particlePos[i * 3] = (Math.random() - 0.5) * 80;
    particlePos[i * 3 + 1] = Math.random() * 26 - 4;
    particlePos[i * 3 + 2] = (Math.random() - 0.5) * 55;
    particleSpeeds[i] = Math.random() * 0.012 + 0.004;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

  const pCanvas = document.createElement('canvas');
  pCanvas.width = 32;
  pCanvas.height = 32;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
  pGrad.addColorStop(0, 'rgba(197, 160, 89, 0.8)'); // Delicate gold ink micro-dots
  pGrad.addColorStop(0.5, 'rgba(9, 9, 11, 0.25)');
  pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 32, 32);
  const particleTexture = new THREE.CanvasTexture(pCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.85,
    map: particleTexture,
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // --- Interactive Pointer Tracking with Spring Damping ---
  const pointer = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    worldX: 0,
    worldZ: 0,
    prevWorldX: 0,
    prevWorldZ: 0,
    speed: 0
  };

  const ripples = [];
  const MAX_RIPPLES = 3;

  function addRipple(x, z) {
    if (ripples.length >= MAX_RIPPLES) ripples.shift();
    ripples.push({
      x,
      z,
      radius: 0,
      maxRadius: 32,
      intensity: 2.8,
      decay: 0.94
    });
  }

  function onPointerMove(e) {
    pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  function onPointerDown(e) {
    const wx = ((e.clientX / window.innerWidth) * 2 - 1) * 32;
    const wz = -((e.clientY / window.innerHeight) * 2 - 1) * 18;
    addRipple(wx, wz);
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerdown', onPointerDown, { passive: true });

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      pointer.targetX = (t.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(t.clientY / window.innerHeight) * 2 + 1;
    }
  }
  window.addEventListener('touchmove', onTouchMove, { passive: true });

  // --- Animation Loop ---
  let clock = new THREE.Clock();
  let animId = null;
  let frameCount = 0;

  function animate() {
    animId = requestAnimationFrame(animate);
    frameCount++;

    const elapsedTime = clock.getElapsedTime();

    // Smooth pointer lerp
    pointer.x += (pointer.targetX - pointer.x) * 0.06;
    pointer.y += (pointer.targetY - pointer.y) * 0.06;

    pointer.prevWorldX = pointer.worldX;
    pointer.prevWorldZ = pointer.worldZ;
    pointer.worldX = pointer.x * 34;
    pointer.worldZ = -pointer.y * 20;

    const dx = pointer.worldX - pointer.prevWorldX;
    const dz = pointer.worldZ - pointer.prevWorldZ;
    pointer.speed = Math.min(Math.sqrt(dx * dx + dz * dz), 3.5);

    // Reposition cursor spotlight
    cursorLight.position.x = pointer.worldX;
    cursorLight.position.z = pointer.worldZ + 10;
    cursorLight.position.y = 7 + pointer.y * 3.5;

    // Parallax
    camera.position.x = pointer.x * 3.5;
    camera.position.y = 18 + pointer.y * 2.5;
    camera.lookAt(0, -2, 0);

    // Update ripples
    for (let r = ripples.length - 1; r >= 0; r--) {
      const rip = ripples[r];
      rip.radius += 0.8;
      rip.intensity *= rip.decay;
      if (rip.intensity < 0.05 || rip.radius > rip.maxRadius) {
        ripples.splice(r, 1);
      }
    }

    // Dynamic Wave Vertex Heightfield
    const pos = geometry.attributes.position;
    const pArr = pos.array;
    const hasRipples = ripples.length > 0;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      const w1 = Math.sin(ox * 0.11 + elapsedTime * 1.0) * Math.cos(oz * 0.13 + elapsedTime * 0.85) * 2.0;
      const w2 = Math.sin(ox * 0.20 - elapsedTime * 1.3 + oz * 0.16) * 1.2;

      let waveHeight = w1 + w2;

      // Cursor Wake Interaction
      const distToCursorSq = (ox - pointer.worldX) ** 2 + (oz - pointer.worldZ) ** 2;
      if (distToCursorSq < 280) {
        const dist = Math.sqrt(distToCursorSq);
        const factor = Math.max(0, 1 - dist / 16.5);
        waveHeight += Math.sin(dist * 0.5 - elapsedTime * 3.8) * factor * (2.4 + pointer.speed * 1.0);
      }

      // Shockwave ripples
      if (hasRipples) {
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const distToRip = Math.hypot(ox - rip.x, oz - rip.z);
          const ripDelta = Math.abs(distToRip - rip.radius);
          if (ripDelta < 5.5) {
            const ripFactor = (1 - ripDelta / 5.5) * rip.intensity;
            waveHeight += Math.sin(ripDelta * 1.2) * ripFactor * 1.4;
          }
        }
      }

      pArr[i3 + 1] = oy + waveHeight;
    }

    pos.needsUpdate = true;

    // Sync dark cross markers with wave height
    const cPos = crossGeo.attributes.position.array;
    for (let j = 0; j < crossCount; j++) {
      const vIdx = crossIndices[j];
      cPos[j * 3 + 1] = pArr[vIdx * 3 + 1] + 0.08;
    }
    crossGeo.attributes.position.needsUpdate = true;

    // Normal recomputation throttled for 120 FPS
    if (frameCount % 2 === 0) {
      geometry.computeVertexNormals();
    }

    // Floating Stardust Movement
    const pPos = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      pPos[idx + 1] += particleSpeeds[i];
      if (pPos[idx + 1] > 26) {
        pPos[idx + 1] = -4;
        pPos[idx] = (Math.random() - 0.5) * 80;
        pPos[idx + 2] = (Math.random() - 0.5) * 55;
      }
    }
    particleGeo.attributes.position.needsUpdate = true;
    particles.rotation.y = elapsedTime * 0.015;

    renderer.render(scene, camera);
  }

  // If user prefers reduced motion, render one static frame and avoid continuous loop
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    renderer.render(scene, camera);
  } else {
    animate();
  }

  function onWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    if (prefersReduced) {
      renderer.render(scene, camera);
    }
  }
  window.addEventListener('resize', onWindowResize);

  const onContextLost = (e) => {
    e.preventDefault();
    if (animId) cancelAnimationFrame(animId);
    console.warn('WebGL context lost. Pausing 3D animation loop.');
  };
  canvas.addEventListener('webglcontextlost', onContextLost, false);

  const onContextRestored = () => {
    console.info('✦ WebGL context restored. Resuming 3D background.');
    if (prefersReduced) {
      renderer.render(scene, camera);
    } else {
      animate();
    }
  };
  canvas.addEventListener('webglcontextrestored', onContextRestored, false);

  cleanupFn = function cleanup() {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('resize', onWindowResize);
    canvas.removeEventListener('webglcontextlost', onContextLost);
    canvas.removeEventListener('webglcontextrestored', onContextRestored);
    geometry.dispose();
    material.dispose();
    wireMaterial.dispose();
    crossGeo.dispose();
    crossMat.dispose();
    crossTexture.dispose();
    particleGeo.dispose();
    particleMat.dispose();
    particleTexture.dispose();
    renderer.dispose();
  };

  return cleanupFn;
} catch (err) {
  console.warn('WebGL render pipeline failed gracefully:', err);
  if (canvas) canvas.style.display = 'none';
  return () => {};
}
}
