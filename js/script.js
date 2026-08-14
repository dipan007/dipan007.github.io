/* =========================================================================
   DIPAN NANDI — PORTFOLIO BEHAVIOR
   -------------------------------------------------------------------------
   This file reads SITE_DATA (from data.js) and:
   1) renders every repeating section (stats, skills, projects, education...)
   2) wires up navigation, ticker, scroll reveals, and small interactions
   You shouldn't need to edit this file to update content — see data.js.
   ========================================================================= */

(() => {
  const d = SITE_DATA;

  /* ----------------------------- ICON LIBRARY --------------------------- */
  /* Minimal line icons, all inherit currentColor so they follow theme. */
  const ICONS = {
    folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l1.5 2H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z"/>',
    dashboard: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="4" rx="1.2"/><rect x="13.5" y="10.5" width="7" height="10" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/>',
    tools: '<path d="M14 7l3 3-7.5 7.5a2.1 2.1 0 0 1-3-3L14 7Z"/><path d="M13 6l1.5-1.5a3 3 0 0 1 4.24 0L20 5.76a3 3 0 0 1 0 4.24L18.5 11.5"/>',
    team: '<circle cx="8.5" cy="8" r="3"/><circle cx="16" cy="9" r="2.4"/><path d="M3 19c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5"/><path d="M14.5 14.3c2.1.2 3.9 1.7 4.5 4.7"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
    powerbi: '<path d="M6 11h2.6v9H6z"/><path d="M11 7h2.6v13H11z"/><path d="M16 4h2.6v16H16z"/>',
    excel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 15h18M9 4v16M15 4v16"/>',
    r: '<circle cx="12" cy="12" r="9"/><path d="M9 8v8M9 8h3.2a2.3 2.3 0 0 1 0 4.6H9M12 12.6l2.8 3.4"/>',
    sql: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/>',
    spss: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a3 3 0 0 0 3 2h1a2.4 2.4 0 0 0 0-4.8h-1a2.4 2.4 0 0 1 0-4.8h.8a3 3 0 0 1 2.8 2"/>',
    python: '<path d="M12 3.5c-3 0-3.6 1-3.6 2.2v1.9h3.7v.6H6.9C5.4 8.2 4.5 9.6 4.5 12s.9 3.8 2.4 3.8h1.4v-2c0-1.9 1.2-3 3.6-3h3.4c1.6 0 2.7-1 2.7-2.7V6c0-1.6-1.4-2.5-3.4-2.5H12Z"/><path d="M12 20.5c3 0 3.6-1 3.6-2.2v-1.9h-3.7v-.6h5.2c1.5 0 2.4-1.4 2.4-3.8s-.9-3.8-2.4-3.8h-1.4v2c0 1.9-1.2 3-3.6 3H8.7c-1.6 0-2.7 1-2.7 2.7V18c0 1.6 1.4 2.5 3.4 2.5H12Z"/>',
    dax: '<path d="M4 19V5l6 8 6-8v14"/><path d="M18 5h2v14h-2"/>',
    query: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/><path d="M7.5 10.5h6M10.5 7.5v6"/>',
    clean: '<path d="M6 3l3 3-9 9v3h3l9-9"/><path d="M13 6l5 5"/><path d="M16 3l5 5-2.5 2.5-5-5Z"/>',
    analyze: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 16V11M11 16V8M15 16v-5M19 16V6"/>',
    visualize: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5A8.5 8.5 0 0 1 20.5 12H12Z"/>',
    report: '<rect x="5" y="3.5" width="14" height="17" rx="1.6"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4.5"/>',
    decide: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.5l2.3 2.3L15.8 9.6"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
    phone: '<path d="M6.5 3.5c1 0 1.9.7 2.2 1.7l.7 2.2c.2.8 0 1.6-.6 2.1l-1.3 1.2a12.3 12.3 0 0 0 5.4 5.4l1.2-1.3c.5-.6 1.3-.8 2.1-.6l2.2.7a2.3 2.3 0 0 1 1.7 2.2v1.7c0 1.4-1.2 2.4-2.5 2.2C10 20 4 14 3.7 6.5c0-1.3 1.1-2.5 2.4-2.5Z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>',
    linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5v6M8 7.8v.1M12 16.5v-3.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.6"/>',
    github: '<path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1.1-2.9-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-1.9-.2-4-1-4-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8 8 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.2-2 4-3.9 4.2.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z"/>',
    arrow: '<path d="M6 18L18 6"/><path d="M9 6h9v9"/>',
    up: '<path d="M12 19V6"/><path d="M6 12l6-6 6 6"/>',
  };
  const svg = (name, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[name] || ''}</svg>`;

  /* ----------------------------- HERO / NAV / PROFILE -------------------- */
  function fillText(id, value){ const el = document.getElementById(id); if (el) el.textContent = value; }
  function fillAttr(id, attr, value){ const el = document.getElementById(id); if (el) el.setAttribute(attr, value); }

  fillText('brandName', d.profile.name);
  fillText('brandInitials', d.profile.initials);
  fillText('heroName', d.profile.name);
  fillText('heroBio', d.profile.bio);
  fillText('heroStatus', d.profile.availability);
  fillAttr('heroPhoto', 'src', d.profile.photo);
  fillAttr('heroPhoto', 'alt', d.profile.name + ' — profile photo');
  fillAttr('cvLink', 'href', d.profile.resume);
  fillAttr('linkedinLink', 'href', d.profile.linkedin);
  fillAttr('githubLink', 'href', d.profile.github);
  fillAttr('footerLinkedin', 'href', d.profile.linkedin);
  fillAttr('footerGithub', 'href', d.profile.github);

  const tagsWrap = document.getElementById('heroTags');
  if (tagsWrap) tagsWrap.innerHTML = d.profile.roleTags.map(t => `<span class="role-chip">${t}</span>`).join('');

  const miniStatsWrap = document.getElementById('heroMiniStats');
  if (miniStatsWrap) {
    const s = d.quickStats;
    miniStatsWrap.innerHTML = `
      <div class="mini-stat"><div class="num mono">${s[0].value}${s[0].suffix}</div><div class="lbl">Projects Delivered</div></div>
      <div class="mini-stat"><div class="num mono">${s[1].value}${s[1].suffix}</div><div class="lbl">Dashboards Built</div></div>
      <div class="mini-stat"><div class="num mono">${s[2].value}${s[2].suffix}</div><div class="lbl">Tools & Tech</div></div>`;
  }

  const profWrap = document.getElementById('proficiencyList');
  if (profWrap) {
    profWrap.innerHTML = d.proficiency.map(p => `
      <div class="kpi-row">
        <div class="kpi-top"><span>${p.label}</span><b class="mono">${p.value}%</b></div>
        <div class="kpi-track"><div class="kpi-fill" data-fill="${p.value}"></div></div>
      </div>`).join('');
  }

  /* Contact cards + footer facts */
  const contactWrap = document.getElementById('contactCards');
  if (contactWrap) {
    contactWrap.innerHTML = `
      <a class="contact-card" href="mailto:${d.profile.email}">${svg('email')}<div><div class="k">Email</div><div class="v">${d.profile.email}</div></div></a>
      <a class="contact-card" href="tel:${d.profile.phone.replace(/\s+/g,'')}">${svg('phone')}<div><div class="k">Phone</div><div class="v">${d.profile.phone}</div></div></a>
      <div class="contact-card">${svg('pin')}<div><div class="k">Location</div><div class="v">${d.profile.location}</div></div></div>
      <a class="contact-card" href="${d.profile.linkedin}" target="_blank" rel="noopener">${svg('linkedin')}<div><div class="k">LinkedIn</div><div class="v">/in/dipannandi</div></div></a>`;
  }

  /* ----------------------------- TICKER ---------------------------------- */
  const tickerTrack = document.getElementById('tickerTrack');
  if (tickerTrack) {
    const items = d.ticker.map(t => `<span class="ticker-item">${t}</span>`).join('');
    // duplicate content so the CSS keyframe (-50%) loops seamlessly
    tickerTrack.innerHTML = items + items;
  }

  /* ----------------------------- QUICK STATS ------------------------------ */
  const statsWrap = document.getElementById('statsGrid');
  if (statsWrap) {
    statsWrap.innerHTML = d.quickStats.map(s => `
      <div class="stat-card">
        <div class="stat-icon">${svg(s.icon)}</div>
        <div class="stat-num" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>`).join('');
  }

  /* ----------------------------- SKILLS ------------------------------------ */
  const skillsWrap = document.getElementById('skillsGrid');
  if (skillsWrap) {
    skillsWrap.innerHTML = d.skills.map(s => `
      <div class="skill-card">
        <div class="skill-icon">${svg(s.icon)}</div>
        <div class="skill-name">${s.name}</div>
      </div>`).join('');
  }

  /* ----------------------------- PROJECTS ---------------------------------- */
  const projectsWrap = document.getElementById('projectsGrid');
  if (projectsWrap) {
    projectsWrap.innerHTML = d.projects.map(p => `
      <article class="project-card reveal">
        <div class="project-thumb"><img src="${p.image}" alt="${p.title} dashboard screenshot" loading="lazy"></div>
        <div class="project-body">
          <span class="project-tag">${p.tag}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-stat mono">${p.stat}</div>
          <a class="project-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel} ${svg('arrow')}</a>
        </div>
      </article>`).join('');
  }

  /* ----------------------------- WHAT I DO ---------------------------------- */
  const flowWrap = document.getElementById('flowGrid');
  if (flowWrap) {
    flowWrap.innerHTML = d.whatIDo.map(f => `
      <div class="flow-item reveal">
        <div class="flow-num">${svg(f.icon)}</div>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </div>`).join('');
  }

  /* ----------------------------- ABOUT -------------------------------------- */
  fillText('aboutP1', d.about.paragraph1);
  fillText('aboutP2', d.about.paragraph2);
  const factWrap = document.getElementById('factList');
  if (factWrap) {
    factWrap.innerHTML = d.about.facts.map(f => `<div class="fact"><div class="k">${f.label}</div><div class="v">${f.value}</div></div>`).join('');
  }

  /* ----------------------------- EDUCATION ------------------------------------ */
  const eduWrap = document.getElementById('educationTimeline');
  if (eduWrap) {
    eduWrap.innerHTML = d.education.map(e => `
      <div class="timeline-item reveal">
        <div class="date mono">${e.date}</div>
        <h3>${e.degree}</h3>
        <div class="place">${e.place}</div>
        <div class="detail">${e.detail}</div>
      </div>`).join('');
  }

  /* ----------------------------- LEADERSHIP ------------------------------------ */
  const leadWrap = document.getElementById('leadershipGrid');
  if (leadWrap) {
    leadWrap.innerHTML = d.leadership.map(l => `
      <div class="lead-card reveal">
        <div class="date mono">${l.date}</div>
        <h3>${l.role}</h3>
        <div class="org">${l.org}</div>
        <ul>${l.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        <div class="badge-row">${l.badges.map(b => `<span class="badge">${b}</span>`).join('')}</div>
      </div>`).join('');
  }

  /* ----------------------------- CERTIFICATIONS + PUBLICATION ------------------- */
  const certWrap = document.getElementById('certList');
  if (certWrap) {
    certWrap.innerHTML = d.certifications.map(c => `<div class="cert-item">${svg('check')}<span>${c}</span></div>`).join('');
  }
  const pub = d.publication;
  fillText('pubTitle', pub.title);
  fillText('pubMeta', `${pub.authors} · ${pub.venue}`);
  fillAttr('pubLink', 'href', pub.link);

  /* ----------------------------- DAILY TOOLS -------------------------------------- */
  const toolsWrap = document.getElementById('toolsStrip');
  if (toolsWrap) {
    const byIcon = Object.fromEntries(d.skills.map(s => [s.icon, s.name]));
    toolsWrap.innerHTML = d.dailyTools.map(key => `
      <div class="tool-chip">
        <div class="ico">${svg(key)}</div>
        <span>${byIcon[key] || key}</span>
      </div>`).join('');
  }

  /* ----------------------------- FOOTER YEAR --------------------------------------- */
  fillText('footerYear', new Date().getFullYear());

  /* =========================================================================
     INTERACTIONS
     ========================================================================= */

  /* -- Mobile nav toggle -- */
  const navToggle = document.getElementById('navToggle');
  const navTabs = document.getElementById('navTabs');
  if (navToggle && navTabs) {
    navToggle.addEventListener('click', () => {
      const open = navTabs.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navTabs.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navTabs.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* -- Scroll-spy: highlight the nav tab for the section in view -- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-tabs a');
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* -- Reveal-on-scroll -- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); ro.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => ro.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* -- Animate proficiency bars once visible -- */
  const kpiPanel = document.querySelector('.kpi-float');
  if (kpiPanel && 'IntersectionObserver' in window) {
    const kpiObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          kpiPanel.querySelectorAll('.kpi-fill').forEach(f => { f.style.width = f.dataset.fill + '%'; });
          kpiObs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    kpiObs.observe(kpiPanel);
  }

  /* -- Count-up animation for quick stats -- */
  const statNums = document.querySelectorAll('.stat-num');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (statNums.length && 'IntersectionObserver' in window) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reducedMotion) { el.textContent = target + suffix; countObs.unobserve(el); return; }
        const duration = 1100;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick); else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
        countObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNums.forEach(el => countObs.observe(el));
  }

  /* -- Back to top button -- */
  const toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', () => {
      toTop.classList.toggle('is-visible', window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

})();
