/* ============================================================
   three-scene.js — Three.js hero scene
   ONE signature object: a rotating globe (dots + wireframe +
   orbit rings) with a neon particle field.
   - Lazy: render loop only runs while the hero is on screen.
   - Mobile / reduced-motion: single static frame, no loop.
   ============================================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (err) {
    // No WebGL available — the hero simply shows the CSS glow blobs.
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0.3, 7);

  function isDark() {
    return (document.documentElement.getAttribute('data-theme')) === 'dark';
  }
  function primaryColor() { return isDark() ? 0x38bdf8 : 0x2563eb; }
  function accentColor() { return isDark() ? 0xa855f7 : 0x7c3aed; }
  function glowIntensity() { return isDark() ? 1.0 : 0.5; }

  /* ---------- Lights ---------- */
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);
  const keyLight = new THREE.PointLight(primaryColor(), glowIntensity() * 1.4, 20);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);
  const fillLight = new THREE.PointLight(accentColor(), glowIntensity() * 0.9, 20);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  /* ---------- Signature: rotating globe ---------- */
  const globe = new THREE.Group();

  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(1.55, 32, 32),
    new THREE.MeshBasicMaterial({ color: primaryColor(), wireframe: true, transparent: true, opacity: 0.24 })
  );
  globe.add(wire);

  // Dot surface (lat/long points)
  const dotsGeo = new THREE.BufferGeometry();
  const positions = [];
  const dotColor = new THREE.Color(primaryColor());
  for (let i = 0; i < 900; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.58;
    positions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  }
  dotsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const dots = new THREE.Points(dotsGeo, new THREE.PointsMaterial({
    color: dotColor, size: 0.035, transparent: true, opacity: 0.85,
  }));
  globe.add(dots);

  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.72, 0.012, 8, 64),
    new THREE.MeshBasicMaterial({ color: accentColor(), transparent: true, opacity: 0.7 })
  );
  ring1.rotation.x = Math.PI / 2;
  globe.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.006, 8, 80),
    new THREE.MeshBasicMaterial({ color: primaryColor(), transparent: true, opacity: 0.32 })
  );
  ring2.rotation.x = Math.PI / 2.6;
  globe.add(ring2);

  scene.add(globe);

  // Place the signature globe on the right side of the hero
  const GLOBE_BASE_Y = 0.2;
  globe.position.set(2.7, GLOBE_BASE_Y, -0.8);
  globe.scale.set(1.12, 1.12, 1.12);

  /* ---------- Neon particle field ---------- */
  const particleCount = 650;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(particleCount * 3);
  const pCol = new Float32Array(particleCount * 3);
  const c1 = new THREE.Color(primaryColor());
  const c2 = new THREE.Color(accentColor());
  for (let i = 0; i < particleCount; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 18;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    const col = i % 2 ? c1 : c2;
    pCol[i * 3] = col.r;
    pCol[i * 3 + 1] = col.g;
    pCol[i * 3 + 2] = col.b;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7 });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  /* ---------- Render ---------- */
  let animating = false;
  let rafId = null;

  function renderStatic() {
    renderer.render(scene, camera);
  }

  function loop() {
    if (!animating) return;
    const t = performance.now() / 1000;
    const dt = 0.016;

    globe.rotation.y += dt * 0.3;
    globe.position.y = GLOBE_BASE_Y + Math.sin(t * 0.9) * 0.18;
    dots.rotation.y -= dt * 0.05;
    ring1.rotation.z += dt * 0.1;
    ring2.rotation.z -= dt * 0.08;
    particles.rotation.y += dt * 0.02;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(loop);
  }

  function start() { if (!animating) { animating = true; loop(); } }
  function pause() { animating = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; }

  if (reduced || isMobile) {
    renderStatic(); // one static frame, never animate
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start();
        else pause();
      });
    }, { threshold: 0.05 });
    io.observe(canvas);
  }

  /* ---------- Resize ---------- */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderStatic();
  });

  /* ---------- Re-tint on theme change (chain so other modules also react) ---------- */
  const prevThemeChange = window.__themeDidChange;
  window.__themeDidChange = function (theme) {
    if (prevThemeChange) prevThemeChange(theme);
    keyLight.color.setHex(primaryColor());
    keyLight.intensity = glowIntensity() * 1.4;
    fillLight.color.setHex(accentColor());
    wire.material.color.setHex(primaryColor());
    dots.material.color.setHex(primaryColor());
    ring1.material.color.setHex(accentColor());
    ring2.material.color.setHex(primaryColor());
    if (reduced || isMobile) renderStatic();
  };
})();