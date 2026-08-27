/* ============================================================
   animations.js — GSAP reveals, counters, skill bars,
   project tilt, filter, timeline scroll triggers
   ============================================================ */

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function registerScrollTrigger() {
    if (window.gsap && window.ScrollTrigger && !window.gsap.__stRegistered) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.__stRegistered = true;
    }
  }

  function revealOnScroll() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    registerScrollTrigger();

    if (reduced || !window.gsap) return;

    els.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-reveal-delay')) || 0;
      window.gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      );
    });
  }

  function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((el) => io.observe(el));
  }

  function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill[data-progress]');
    if (!fills.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    fills.forEach((el) => io.observe(el));
  }

  function animateRings() {
    const rings = document.querySelectorAll('[data-ring]');
    if (!rings.length) return;

    const C = 2 * Math.PI * 50;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fg = entry.target.querySelector('.ring-fg');
          const pct = parseFloat(entry.target.getAttribute('data-ring'));
          if (fg) fg.style.strokeDashoffset = C * (1 - pct / 100);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    rings.forEach((el) => io.observe(el));
  }

  function tiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    if (reduced) return;

    cards.forEach((card) => {
      let rafId = null;

      card.addEventListener('mousemove', (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform =
            'perspective(900px) rotateY(' + x * 9 + 'deg) rotateX(' + -y * 9 + 'deg) translateY(-6px)';
          rafId = null;
        });
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
      });
    });
  }

  function glowOnMove() {
    const glowEls = document.querySelectorAll('[data-glow]');
    glowEls.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--gx', x + 'px');
        el.style.setProperty('--gy', y + 'px');
      });
    });
  }

  function filterProjects() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card[data-category]');
    if (!btns.length) return;

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach((card) => {
          const cat = card.getAttribute('data-category');
          const show = filter === 'all' || cat === filter;
          if (show) {
            card.style.display = '';
            card.style.opacity = 0;
            card.style.transform = 'translateY(24px) scale(0.96)';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0) scale(1)';
              });
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  function timelineTrigger() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    items.forEach((item, i) => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(36px)';
      item.style.transition = 'opacity 0.7s ease ' + (i % 2) * 0.12 + 's, transform 0.7s ease ' + (i % 2) * 0.12 + 's';
      io.observe(item);
    });
  }

  let heroPlayed = false;
  function heroEntrance() {
    const hero = document.querySelector('.hero');
    if (!hero || reduced || heroPlayed) return;
    heroPlayed = true;

    registerScrollTrigger();

    if (window.gsap) {
      const tl = window.gsap.timeline({ delay: 0.15 });
      tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.hero-title', { y: 46, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
        .from('.typed-wrap', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.55')
        .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.hero-stat', { y: 26, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.4')
        .from('.scroll-indicator', { opacity: 0, duration: 0.8 }, '-=0.2');
    } else {
      hero.classList.add('no-gsap-fallback');
    }
  }

  // Project cards are rendered dynamically (js/main.js) — bind interactions after render
  function rebindProjectInteractions() {
    tiltCards();
    filterProjects();
    glowOnMove();
    revealOnScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    animateCounters();
    animateSkillBars();
    animateRings();
    tiltCards();
    glowOnMove();
    filterProjects();
    timelineTrigger();
    heroEntrance();
  });

  window.addEventListener('portfolio:projects-rendered', rebindProjectInteractions);
})();
