/* ============================================================
   main.js — Shared layout, cursor, scroll bar, loader,
   typed effect, FAB, page transitions, EmailJS form
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Shared navbar & footer (injected so file:// works) ---------- */

  const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'experience.html', label: 'Experience' },
    { href: 'contact.html', label: 'Contact' },
  ];

  function navbarHTML(active) {
    const links = NAV_LINKS
      .map(
        (l) =>
          '<li><a href="' + l.href + '" class="' + (l.label === active ? 'active' : '') + '">' + l.label + '</a></li>'
      )
      .join('');

    return (
      '<header class="navbar" id="navbar">' +
      '<a href="index.html" class="nav-logo">' +
      '<span class="logo-mark">&lt;/&gt;</span>' +
      '<span>Jasurbek<span class="grad-text">.dev</span></span>' +
      '</a>' +
      '<nav><ul class="nav-links">' + links + '</ul></nav>' +
      '<div class="nav-actions">' +
      '<button class="icon-btn hide-sm" id="music-toggle" title="Ambient music" aria-label="Toggle ambient music">' +
      '<i data-lucide="music"></i></button>' +
      '<button class="icon-btn hide-sm" id="lang-toggle" title="Language" aria-label="Switch language">UZ</button>' +
      '<button class="icon-btn" id="theme-toggle" title="Theme" aria-label="Toggle dark / light mode">' +
      '<i data-lucide="moon"></i></button>' +
      '<button class="icon-btn mobile-menu-btn" id="menu-btn" aria-label="Open menu"><i data-lucide="menu"></i></button>' +
      '</div>' +
      '</header>' +
      '<div class="mobile-menu" id="mobile-menu">' +
      NAV_LINKS.map(
        (l) =>
          '<a href="' + l.href + '" class="' + (l.label === active ? 'active' : '') + '">' + l.label + '</a>'
      ).join('') +
      '</div>'
    );
  }

  function footerHTML() {
    return (
      '<footer class="footer">' +
      '<div class="container mx-auto max-w-7xl px-6">' +
      '<div class="footer-grid">' +
      '<div>' +
      '<a href="index.html" class="nav-logo mb-4">' +
      '<span class="logo-mark">&lt;/&gt;</span><span>Jasurbek<span class="grad-text">.dev</span></span>' +
      '</a>' +
      '<p class="section-sub" style="max-width:340px">Full Stack Developer with 10+ years of experience crafting premium, high-performance digital products for the modern web.</p>' +
      '<div class="flex gap-3 mt-6">' +
      '<a class="social-btn" href="#" aria-label="GitHub"><span data-brand="github"></span></a>' +
      '<a class="social-btn" href="#" aria-label="LinkedIn"><span data-brand="linkedin"></span></a>' +
      '<a class="social-btn" href="#" aria-label="Telegram"><i data-lucide="send"></i></a>' +
      '<a class="social-btn" href="#" aria-label="X"><span data-brand="x"></span></a>' +
      '</div>' +
      '</div>' +
      '<div>' +
      '<h4 class="footer-title">Quick Links</h4>' +
      '<ul class="footer-links">' +
      '<li><a href="index.html"><i data-lucide="chevron-right"></i> Home</a></li>' +
      '<li><a href="about.html"><i data-lucide="chevron-right"></i> About</a></li>' +
      '<li><a href="projects.html"><i data-lucide="chevron-right"></i> Projects</a></li>' +
      '<li><a href="experience.html"><i data-lucide="chevron-right"></i> Experience</a></li>' +
      '<li><a href="contact.html"><i data-lucide="chevron-right"></i> Contact</a></li>' +
      '</ul>' +
      '</div>' +
      '<div>' +
      '<h4 class="footer-title">Contact</h4>' +
      '<ul class="footer-links">' +
      '<li><a href="mailto:hello@jasurbek.dev"><i data-lucide="mail"></i> hello@jasurbek.dev</a></li>' +
      '<li><a href="tel:+998901234567"><i data-lucide="phone"></i> +998 90 123 45 67</a></li>' +
      '<li><a href="#"><i data-lucide="map-pin"></i> Tashkent, Uzbekistan</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
      '<span>© 2026 Jasurbek Omonqulov. All rights reserved.</span>' +
      '<span>Built with <i data-lucide="heart" style="color:var(--primary)"></i> HTML, CSS &amp; JavaScript</span>' +
      '</div>' +
      '</div>' +
      '</footer>'
    );
  }

  function fabHTML() {
    return (
      '<div class="fab" id="fab" aria-label="Quick actions">' +
      '<i data-lucide="plus" class="fab-icon" id="fab-icon"></i>' +
      '<div class="fab-menu" id="fab-menu">' +
      '<a class="fab-item" href="#top" aria-label="Back to top" title="Back to top"><i data-lucide="arrow-up"></i></a>' +
      '<a class="fab-item" href="contact.html" aria-label="Contact" title="Contact"><i data-lucide="mail"></i></a>' +
      '<a class="fab-item" href="#" aria-label="GitHub" title="GitHub"><span data-brand="github"></span></a>' +
      '<a class="fab-item" href="#" aria-label="Download CV" title="Download CV"><i data-lucide="file-down"></i></a>' +
      '</div>' +
      '</div>'
    );
  }

  function mountLayout(active) {
    const navHost = document.getElementById('nav-host');
    const footHost = document.getElementById('footer-host');
    if (navHost) navHost.innerHTML = navbarHTML(active);
    if (footHost) footHost.innerHTML = footerHTML();
    document.body.insertAdjacentHTML('beforeend', fabHTML());
    initThemeToggle();
    initMobileMenu();
    initFab();
    if (window.lucide) window.lucide.createIcons();
  }

  /* ---------- Brand icons (inline SVG, no icon font needed) ---------- */
  const BRAND_PATHS = {
    github:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    linkedin:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
    telegram:
      'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    x:
      'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
    instagram:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    youtube:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  };

  function brandSVG(name, size) {
    const d = BRAND_PATHS[name];
    if (!d) return '';
    const s = size || 20;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + d + '"/></svg>'
    );
  }

  function initBrandIcons(scope) {
    const root = scope || document;
    root.querySelectorAll('[data-brand]').forEach((el) => {
      el.innerHTML = brandSVG(el.getAttribute('data-brand'));
    });
  }

  /* ---------- Projects (data-driven, with file:// fallback) ---------- */
  const PROJECTS = [
    {
      title: 'Neural Assistant Platform', category: 'ai', icon: 'bot',
      desc: 'Production AI assistant with RAG pipeline, streaming chat and real-time analytics for 50k+ users.',
      tags: ['Python', 'LangChain', 'React', 'FastAPI'],
    },
    {
      title: 'Crypto Trading Bot', category: 'bots', icon: 'send',
      desc: 'Automated crypto trading & portfolio bot with real-time alerts, executed 40k+ trades.',
      tags: ['Node.js', 'MongoDB', 'Telegram API', 'Docker'],
    },
    {
      title: 'E-Commerce Platform', category: 'web', icon: 'shopping-cart',
      desc: 'Headless commerce platform with 99.9% uptime, processing $12M+ in annual revenue.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    },
    {
      title: 'FinTrack — Personal Finance', category: 'mobile', icon: 'smartphone',
      desc: 'Cross-platform finance tracker with offline-first sync and bank-grade security, 200k+ downloads.',
      tags: ['React Native', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Cloud Console Desktop', category: 'desktop', icon: 'cloud',
      desc: 'Native-feel desktop client for cloud infrastructure management with real-time monitoring.',
      tags: ['Electron', 'React', 'AWS', 'WebSocket'],
    },
    {
      title: 'SmartCRM Suite', category: 'web', icon: 'sliders-horizontal',
      desc: 'All-in-one CRM for 300+ companies with automation workflows, reporting and team collaboration.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Vision Analytics Engine', category: 'ai', icon: 'brain',
      desc: 'Computer-vision engine for retail — real-time shelf monitoring and demand forecasting.',
      tags: ['Python', 'TensorFlow', 'Docker', 'Kafka'],
    },
    {
      title: 'Restaurant Booking Bot', category: 'bots', icon: 'utensils',
      desc: 'Full booking ecosystem — reservations, menus, payments and loyalty via Telegram.',
      tags: ['Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'LogiMove — Delivery', category: 'mobile', icon: 'truck',
      desc: 'Real-time delivery tracking app with geofencing, optimized routes and live driver chat.',
      tags: ['React Native', 'Socket.io', 'Maps API'],
    },
  ];

  const CAT_LABELS = {
    ai: 'AI / ML', bots: 'Telegram Bot', web: 'Web Application',
    mobile: 'Mobile Application', desktop: 'Desktop Application',
  };

  function projectCardHTML(p) {
    const github = p.github || '#';
    const demo = p.demo || '#';
    return (
      '<article class="project-card" data-category="' + p.category + '" data-tilt>' +
      '<div class="project-media"><i data-lucide="' + p.icon + '" class="preview"></i>' +
      '<span class="corner tl"></span><span class="corner br"></span></div>' +
      '<div class="project-body">' +
      '<div class="project-cat">' + CAT_LABELS[p.category] + '</div>' +
      '<h3 class="project-title">' + p.title + '</h3>' +
      '<p class="project-desc">' + (p.description || p.desc) + '</p>' +
      '<div class="project-tags">' + p.tags.map((t) => '<span>' + t + '</span>').join('') + '</div>' +
      '<div class="project-links">' +
      '<a href="' + demo + '" target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i data-lucide="eye"></i> Live Demo</a>' +
      '<a href="' + github + '" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><span data-brand="github"></span> GitHub</a>' +
      '</div>' +
      '</div>' +
      '</article>'
    );
  }

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const featured = document.getElementById('featured-grid');

    const draw = (projects) => {
      if (grid) grid.innerHTML = projects.map(projectCardHTML).join('');
      if (featured) featured.innerHTML = projects.slice(0, 3).map(projectCardHTML).join('');
      if (window.lucide) window.lucide.createIcons();
      initBrandIcons();
      window.dispatchEvent(new Event('portfolio:projects-rendered'));
    };

    if (!grid && !featured) return;

    // Data-driven source of truth: data/projects.json.
    // Falls back to the embedded array so file:// (no fetch) still works.
    fetch('data/projects.json')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => draw(Array.isArray(data) && data.length ? data : PROJECTS))
      .catch(() => draw(PROJECTS));
  }

  /* ---------- Theme toggle wiring (theme.js owns logic) ---------- */
  function initThemeToggle() {
    if (window.__applyTheme) {
      window.__applyTheme(window.__getTheme());
    }
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  /* ---------- FAB ---------- */
  function initFab() {
    const fab = document.getElementById('fab');
    const menu = document.getElementById('fab-menu');
    const icon = document.getElementById('fab-icon');
    if (!fab) return;
    fab.addEventListener('click', () => {
      menu.classList.toggle('open');
      icon.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!fab.contains(e.target)) {
        menu.classList.remove('open');
        icon.classList.remove('open');
      }
    });
  }

  /* ---------- Loading screen ---------- */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    let progress = 0;
    const fill = loader.querySelector('.loader-bar-fill');
    const pctEl = loader.querySelector('.loader-percent');

    const interval = setInterval(() => {
      progress += Math.random() * 18 + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (fill) fill.style.width = '100%';
        if (pctEl) pctEl.textContent = '100%';
        setTimeout(() => {
          loader.classList.add('hidden');
          document.body.style.overflow = '';
          window.dispatchEvent(new Event('portfolio:ready'));
        }, 350);
      } else {
        if (fill) fill.style.width = progress + '%';
        if (pctEl) pctEl.textContent = Math.round(progress) + '%';
      }
    }, 90);

    document.body.style.overflow = 'hidden';
  }

  /* ---------- Custom cursor ---------- */
  function initCursor() {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(dot);

    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });

    (function loop() {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .btn, input, textarea, .project-card')) {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }
    });
  }

  /* ---------- Scroll progress + navbar state + reveal ---------- */
  function initScrollEffects() {
    const bar = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');

    const update = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? scrollTop / docH : 0;
      if (bar) bar.style.transform = 'scaleX(' + pct + ')';
      if (navbar) navbar.classList.toggle('scrolled', scrollTop > 30);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- Typed.js ---------- */
  function initTyped() {
    const el = document.querySelector('.typed');
    if (!el || typeof Typed === 'undefined') return;
    new Typed('.typed', {
      strings: [
        'Full Stack Developer',
        'Senior Software Engineer',
        'Node.js & React Specialist',
        'Cloud & DevOps Architect',
        '10+ Years of Experience',
      ],
      typeSpeed: 55,
      backSpeed: 32,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });
  }

  /* ---------- Music toggle ---------- */
  function initMusic() {
    const btn = document.getElementById('music-toggle');
    if (!btn) return;

    // Simple generated ambient loop (Web Audio) — no external file needed
    let ctx = null, playing = false, nodes = [];

    const start = () => {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      const master = ctx.createGain();
      master.gain.value = 0.05;
      master.connect(ctx.destination);

      const noteFreqs = [220.0, 277.18, 329.63, 369.99, 440.0];
      const playNote = (freq, when, dur) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, when);
        g.gain.linearRampToValueAtTime(1, when + dur * 0.15);
        g.gain.exponentialRampToValueAtTime(0.001, when + dur);
        osc.connect(g);
        g.connect(master);
        osc.start(when);
        osc.stop(when + dur + 0.05);
        nodes.push(osc);
      };

      let t = ctx.currentTime + 0.1;
      const scheduler = () => {
        if (!playing) return;
        noteFreqs.forEach((f, i) => playNote(f, t + i * 0.28, 2.4));
        t += 1.4;
        setTimeout(scheduler, 1.4 * 1000);
      };
      scheduler();
      playing = true;
    };

    btn.addEventListener('click', () => {
      if (!playing) {
        start();
        btn.style.color = 'var(--primary)';
      } else {
        playing = false;
        if (ctx) { ctx.close(); ctx = null; }
        nodes = [];
        btn.style.color = '';
      }
    });
  }

  /* ---------- Language switcher (demo) ---------- */
  function initLang() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    let uz = true;
    btn.addEventListener('click', () => {
      uz = !uz;
      btn.textContent = uz ? 'UZ' : 'EN';
    });
  }

  /* ---------- Page transition links ---------- */
  function initPageTransitions() {
    const overlay = document.getElementById('page-transition');
    if (!overlay) return;
    document.querySelectorAll('a[href$=".html"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        const samePage = href === window.location.pathname.split('/').pop() || href === '#';
        if (samePage) return;
        e.preventDefault();
        if (window.gsap) {
          window.gsap.to(overlay, { yPercent: 0, duration: 0.45, ease: 'power4.inOut', onComplete: () => {
            window.location.href = href;
          }});
        } else {
          window.location.href = href;
        }
      });
    });
  }

  /* ---------- Contact form (EmailJS) ---------- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Honeypot spam trap: bots fill hidden fields, humans never see them
      const hp = form.querySelector('.hp-field');
      if (hp && hp.value) {
        const status = document.getElementById('form-status');
        if (status) {
          status.textContent = 'Message sent successfully! I will reply soon.';
          status.style.color = '#22c55e';
        }
        form.reset();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Sending...';

      const payload = {
        from_name: form.querySelector('#name').value,
        reply_to: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value,
      };

      const finish = (ok, msg) => {
        btn.disabled = false;
        btn.innerHTML = original;
        const status = document.getElementById('form-status');
        if (status) {
          status.textContent = msg;
          status.style.color = ok ? '#22c55e' : '#ef4444';
        }
      };

      if (typeof emailjs !== 'undefined') {
        emailjs
          .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', payload, 'YOUR_PUBLIC_KEY')
          .then(() => {
            finish(true, 'Message sent successfully! I will reply soon.');
            form.reset();
          })
          .catch(() => finish(false, 'Failed to send. Please try again or email me directly.'));
      } else {
        // Fallback: simulate so the demo still behaves nicely offline
        setTimeout(() => {
          finish(true, 'Demo mode: form submitted! Configure EmailJS keys in js/main.js.');
          form.reset();
        }, 1100);
      }
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    const active = (document.title.match(/(Home|About|Projects|Experience|Contact)/) || [''])[0];
    mountLayout(active);
    renderProjects();
    initCursor();
    initLoader();
    initScrollEffects();
    initTyped();
    initMusic();
    initLang();
    initPageTransitions();
    initContactForm();
    initBrandIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
