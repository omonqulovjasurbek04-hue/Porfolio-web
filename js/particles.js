/* ============================================================
   particles.js — Lightweight canvas particle system
   (self-contained so it works without the heavy particles.js lib)
   ============================================================ */

(function () {
  'use strict';

  let canvas, ctx, particles = [], raf, running = false;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function getAccent() {
    const theme = (document.documentElement.getAttribute('data-theme')) || 'light';
    return theme === 'dark' ? '#38bdf8' : '#2563eb';
  }

  function setup() {
    if (!canvas) return;
    const host = canvas.parentElement;
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || Math.max(window.innerHeight, 700);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }

  function spawn() {
    const count = Math.min(90, Math.floor(window.innerWidth / 16));
    particles = [];
    const accent = getAccent();
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 2.2) + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.55 + 0.15,
        hue: accent === '#38bdf8' ? (Math.random() > 0.4 ? '#38bdf8' : '#a855f7') : '#7c3aed',
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw(t) {
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      const alpha = p.alpha * (0.55 + 0.45 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.hue;
      ctx.globalAlpha = alpha * 0.9;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.hue;
      ctx.fill();

      // connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = dx * dx + dy * dy;
        if (dist < 120 * 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.globalAlpha = (1 - dist / (120 * 120)) * 0.16;
          ctx.strokeStyle = p.hue;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    raf = requestAnimationFrame(draw);
  }

  function shouldRun() {
    const dark = (document.documentElement.getAttribute('data-theme')) === 'dark';
    const desktop = window.innerWidth >= 768;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return dark && desktop && !reduced;
  }

  function start() {
    if (running) return;
    if (!shouldRun()) return;
    const host = document.getElementById('particles-host');
    if (!host) return;
    canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;';
    host.appendChild(canvas);
    ctx = canvas.getContext('2d');
    setup();
    spawn();
    running = true;
    raf = requestAnimationFrame(draw);
  }

  function stop() {
    if (!running) return;
    cancelAnimationFrame(raf);
    if (canvas && canvas.parentElement) canvas.parentElement.removeChild(canvas);
    canvas = null;
    running = false;
  }

  function sync() {
    if (shouldRun()) {
      start();
    } else {
      stop();
    }
  }

  window.addEventListener('resize', () => {
    if (!running) return;
    setup();
    spawn();
  });

  // Re-tint / start-stop on theme change (chain so other modules also react)
  const prevThemeChange = window.__themeDidChange;
  window.__themeDidChange = function (theme) {
    if (prevThemeChange) prevThemeChange(theme);
    if (running) spawn();
    if (theme === 'dark' || theme === 'light') sync();
  };

  window.__particles = { start, stop, sync };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.__particles.sync());
  } else {
    window.__particles.sync();
  }
})();
