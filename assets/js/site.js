/* IxI-Enki Showcase — i18n (EN/DE) + Scroll-Reveal + Counter
   i18n: Elemente tragen data-i18n="key"; Übersetzungen unten.
   Default EN (Plan §1: Portfolio EN-first), Toggle persistiert in localStorage. */
(function () {
  'use strict';

  /* ── Übersetzungen ── */
  var I18N = {
    /* Nav */
    'nav.home':      { en: 'Home',            de: 'Start' },
    'nav.flagship':  { en: 'LeoWiki MCP',     de: 'LeoWiki MCP' },
    'nav.projects':  { en: 'Projects',        de: 'Projekte' },
    'nav.skills':    { en: 'Skills',          de: 'Skills' },
    'nav.cv':        { en: 'CV',              de: 'Steckbrief' },

    /* Hero / Landing */
    'hero.kicker':   { en: 'Software Architecture · AI Engineering', de: 'Software‑Architektur · AI Engineering' },
    'hero.lead':     { en: 'Retrieval pipelines, MCP servers and secure AI integrations — architected, benchmarked and deployed on real hardware. HTL Leonding graduate, focused on software architecture and AI infrastructure.', de: 'Retrieval‑Pipelines, MCP‑Server und sichere AI‑Integrationen — entworfen, gebenchmarkt und auf echter Hardware deployt. HTL‑Leonding‑Absolvent mit Fokus auf Software‑Architektur und AI‑Infrastruktur.' },
    'hero.cta1':     { en: 'Flagship case study', de: 'Flagship-Case-Study' },
    'hero.cta2':     { en: 'Download CV',      de: 'Lebenslauf (PDF)' },
    'hero.photo':    { en: 'Portrait photo — placeholder', de: 'Portraitfoto — Platzhalter' },
    'facts.name':    { en: 'Name',            de: 'Name' },
    'facts.age':     { en: 'Age',             de: 'Alter' },
    'facts.edu':     { en: 'Education',       de: 'Ausbildung' },
    'facts.eduv':    { en: 'HTL Leonding — Informatics', de: 'HTL Leonding — Informatik' },
    'facts.loc':     { en: 'Location',        de: 'Wohnort' },
    'facts.locv':    { en: 'Seitenstetten, Lower Austria', de: 'Seitenstetten, Niederösterreich' },
    'facts.status':  { en: 'Status',          de: 'Status' },
    'facts.statusv': { en: 'open to work',    de: 'offen für Angebote' },

    /* Stats */
    'stats.title':   { en: 'Diploma thesis, measured', de: 'Diplomarbeit, gemessen' },
    'stats.s1':      { en: 'better retrieval (MRR) than keyword search', de: 'besseres Retrieval (MRR) als die Stichwortsuche' },
    'stats.s2':      { en: 'indexed content chunks from the school wiki', de: 'indizierte Content‑Chunks aus dem Schul‑Wiki' },
    'stats.s3':      { en: 'fully MCP-compatible clients (of 5 tested)', de: 'voll MCP-kompatible Clients (von 5 getesteten)' },
    'stats.s4':      { en: 'mean search latency on a Raspberry Pi 5', de: 'mittlere Suchlatenz auf einem Raspberry Pi 5' },

    /* Sections */
    'sec.flagship':  { en: 'Flagship', de: 'Flagship' },
    'sec.flagship.more': { en: 'Full case study →', de: 'Ganze Case-Study →' },
    'sec.projects':  { en: 'Selected projects', de: 'Ausgewählte Projekte' },
    'sec.projects.more': { en: 'All projects →', de: 'Alle Projekte →' },
    'sec.skills':    { en: 'Skills', de: 'Skills' },
    'sec.contact':   { en: 'Contact', de: 'Kontakt' },

    /* Flagship teaser */
    'flag.kicker':   { en: 'Diploma thesis · HTL Leonding', de: 'Diplomarbeit · HTL Leonding' },
    'flag.title':    { en: 'MCP server with semantic search for LeoWiki', de: 'MCP‑Server mit semantischer Suche für LeoWiki' },
    'flag.lead':     { en: 'Natural-language search over the school wiki for AI assistants — German‑optimized embeddings, OAuth 2.1 + RBAC, deployed 24/7 on a Raspberry Pi 5.', de: 'Natürlichsprachige Suche über das Schul‑Wiki für KI‑Assistenten — Deutsch‑optimierte Embeddings, OAuth 2.1 + RBAC, 24/7 auf einem Raspberry Pi 5.' },
    'flag.role':     { en: 'Built together with Imre Obermüller — diploma thesis at HTL Leonding.', de: 'Gemeinsam mit Imre Obermüller entwickelt — Diplomarbeit an der HTL Leonding.' },

    /* Contact */
    'contact.lead':  { en: 'Open for software architecture & AI engineering roles —<br>within commuting range of Linz, Steyr or Amstetten, or fully remote.', de: 'Offen für Rollen in Software‑Architektur & AI Engineering —<br>im Pendelbereich Linz / Steyr / Amstetten oder komplett remote.' },

    /* Footer */
    'footer.tag':     { en: 'Software architecture & AI engineering — retrieval, MCP, local LLMs.', de: 'Software-Architektur & AI Engineering — Retrieval, MCP, lokale LLMs.' },
    'footer.explore': { en: 'Explore',  de: 'Entdecken' },
    'footer.connect': { en: 'Connect',  de: 'Kontakt' },
    'footer.loc':     { en: 'Seitenstetten · Lower Austria', de: 'Seitenstetten · Niederösterreich' }
  };

  /* ── Sprache anwenden ── */
  function applyLang(lang, isToggle) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = I18N[el.getAttribute('data-i18n')];
      if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
    });
    document.querySelectorAll('[data-i18n-page]').forEach(function (el) {
      /* Seiten-lokale Übersetzungen: data-en / data-de Attribute */
      var v = el.getAttribute('data-' + lang);
      if (v !== null) el.innerHTML = v;
    });
    document.querySelectorAll('.lang-switch').forEach(function (s) {
      s.setAttribute('data-lang', lang);
    });
    runHeroLoop(lang);
    try { localStorage.setItem('ixi-lang', lang); } catch (e) {}
    /* i18n just rewrote the fact values — re-run the decode so the new
       language scrambles in too (only on an explicit toggle, not initial load) */
    if (isToggle && !prefersReduced()) {
      document.querySelectorAll('.decode').forEach(function (el) {
        if (inViewport(el)) scrambleReveal(el);
      });
    }
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    var lang = 'en';
    try { lang = localStorage.getItem('ixi-lang') || 'en'; } catch (e) {}
    applyLang(lang);

    document.querySelectorAll('.lang-switch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        var cur = sw.getAttribute('data-lang') || 'en';
        applyLang(cur === 'en' ? 'de' : 'en', true);
      });
    });

    /* Scroll-Reveal — bidirectional (re-animates on exit) */
    var motionReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (motionReduce) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('in');
          else e.target.classList.remove('in');
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    }

    /* Section dividers — bidirectional draw-open on enter/exit */
    if (!motionReduce) {
      var dio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('is-visible');
          else e.target.classList.remove('is-visible');
        });
      }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('.sec-divider').forEach(function (el) { dio.observe(el); });
    } else {
      document.querySelectorAll('.sec-divider').forEach(function (el) { el.classList.add('is-visible'); });
    }

    initBgParallax(motionReduce);

    /* Animierte Zahlen (data-count="17" data-suffix="×") */
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target, target = parseFloat(el.getAttribute('data-count')), suffix = el.getAttribute('data-suffix') || '';
        var dec = (el.getAttribute('data-count').split('.')[1] || '').length;
        var t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1200, 1), eased = 1 - Math.pow(1 - p, 3);
          el.childNodes[0].nodeValue = (target * eased).toFixed(dec).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.childNodes[0].nodeValue = target.toLocaleString();
        }
        requestAnimationFrame(step);
        void suffix; /* suffix steckt in eigenem <span class="unit"> */
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-count]').forEach(function (el) { cio.observe(el); });

    initSkillTips();
    initDecode(motionReduce);
  });

  /* ── Scramble-decode reveal (fact values + project tech stacks) ──
     Recoloured port of the "DECRYPTING PAYLOAD" terminal effect:
     each glyph shuffles through noise, then locks into place with a
     brief accent flash. Targets .decode (opt-in) and every .stack row. */
  var DECODE_NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%<>?/|';
  function decodeRand() { return DECODE_NOISE[(Math.random() * DECODE_NOISE.length) | 0]; }

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ── Hero headline GradientTypeLoop (endless type / hold / erase) ──
     Fixed prefix + looping gradient word + blinking caret. Re-runs on every
     applyLang() call; cancels any in-flight timer so EN/DE never leaves stale text. */
  var HERO_LOOP = {
    prefix: {
      en: 'I design and build ',
      de: 'Ich entwerfe und baue '
    },
    words: {
      en: ['AI infrastructure that runs', 'retrieval pipelines', 'MCP servers', 'semantic search', 'local-LLM systems'],
      de: ['AI-Infrastruktur, die läuft', 'Retrieval-Pipelines', 'MCP-Server', 'semantische Suche', 'lokale-LLM-Systeme']
    }
  };
  var HERO_TITLE_SEL = '.hero-title-gradient';
  var HERO_TYPE_SPEED = 90;
  var HERO_HOLD = 1400;

  function runHeroLoop(lang) {
    var el = document.querySelector(HERO_TITLE_SEL);
    if (!el) return;

    var prefixEl = el.querySelector('.hero-prefix');
    var loopEl = el.querySelector('.hero-loop');
    var caretEl = el.querySelector('.tw-caret');
    if (!prefixEl || !loopEl) return;

    if (el._heroLoopTimer) {
      clearTimeout(el._heroLoopTimer);
      el._heroLoopTimer = null;
    }

    var prefix = HERO_LOOP.prefix[lang] || HERO_LOOP.prefix.en;
    var words = HERO_LOOP.words[lang] || HERO_LOOP.words.en;
    prefixEl.textContent = prefix;

    if (prefersReduced()) {
      var first = words[0] || '';
      loopEl.textContent = first;
      if (caretEl) caretEl.style.display = 'none';
      el.setAttribute('aria-label', prefix + first);
      return;
    }

    if (caretEl) caretEl.style.display = '';

    var wi = 0;
    var txt = '';
    var del = false;

    function tick() {
      var word = words[wi % words.length] || '';
      if (!del && txt === word) {
        el.setAttribute('aria-label', prefix + word);
        el._heroLoopTimer = setTimeout(function () {
          del = true;
          tick();
        }, HERO_HOLD);
        return;
      }
      if (del && txt === '') {
        del = false;
        wi = (wi + 1) % words.length;
        tick();
        return;
      }
      txt = del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1);
      loopEl.textContent = txt;
      el.setAttribute('aria-label', prefix + txt);
      el._heroLoopTimer = setTimeout(tick, del ? HERO_TYPE_SPEED / 2 : HERO_TYPE_SPEED);
    }

    loopEl.textContent = '';
    tick();
  }
  function inViewport(el) {
    var r = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return r.bottom > 0 && r.top < vh;
  }

  function scrambleReveal(el) {
    if (el.classList.contains('is-decoding')) return; /* guard re-entry */
    var target = el.textContent;
    if (!target) return;
    el.setAttribute('aria-label', target);
    el.classList.add('is-decoding');

    var CHAR_DELAY = 20, FRAMES = 6, FRAME_MS = 28;
    var pieces = target.split('');
    el.textContent = '';
    var spans = pieces.map(function (ch) {
      var s = document.createElement('span');
      s.className = 'dc';
      s.setAttribute('aria-hidden', 'true');
      if (ch === ' ' || ch === ' ') { s.textContent = ch; s.classList.add('locked'); }
      else { s.textContent = decodeRand(); }
      el.appendChild(s);
      return { s: s, ch: ch };
    });

    spans.forEach(function (o, i) {
      if (o.s.classList.contains('locked')) return;
      var frames = 0;
      setTimeout(function () {
        var iv = setInterval(function () {
          if (frames >= FRAMES) {
            clearInterval(iv);
            o.s.textContent = o.ch;
            o.s.classList.add('locked');
          } else { o.s.textContent = decodeRand(); frames++; }
        }, FRAME_MS);
      }, i * CHAR_DELAY);
    });

    var total = pieces.length * CHAR_DELAY + FRAMES * FRAME_MS + 80;
    setTimeout(function () { el.classList.remove('is-decoding'); }, total);
  }

  function initDecode(motionReduce) {
    if (motionReduce) return; /* leave the real text untouched */
    var els = document.querySelectorAll('.decode, .stack');
    if (!els.length) return;
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        dio.unobserve(e.target);
        scrambleReveal(e.target);
      });
    }, { threshold: 0.5, rootMargin: '0px 0px -4% 0px' });
    els.forEach(function (el) { dio.observe(el); });
  }

  /* ── Background parallax (grid, gradient blobs, legacy blobs) ── */
  function syncGridParallaxSlack() {
    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    var slack = Math.ceil(maxScroll * 0.14) + 72;
    document.documentElement.style.setProperty('--bg-grid-parallax-slack', slack + 'px');
  }

  function initBgParallax(reducedMotion) {
    syncGridParallaxSlack();
    window.addEventListener('resize', syncGridParallaxSlack, { passive: true });
    if (reducedMotion) return;
    var layers = [
      { sel: '.bg-parallax--grid', rate: 0.14 },
      { sel: '.bg-parallax--grad', rate: 0.09 },
      { sel: '.bg-parallax--blob1', rate: 0.06 },
      { sel: '.bg-parallax--blob2', rate: 0.08 },
      { sel: '.bg-parallax--blob3', rate: 0.05 }
    ];
    var nodes = layers.map(function (l) {
      return { el: document.querySelector(l.sel), rate: l.rate };
    }).filter(function (n) { return n.el; });
    if (!nodes.length) return;
    var ticking = false;
    function update() {
      var y = window.scrollY || 0;
      nodes.forEach(function (n) {
        n.el.style.transform = 'translate3d(0,' + (y * n.rate) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  /* ── Skill-chip tooltips: floating card, viewport-safe, animated ── */
  var TIP_SEMANTIC = {
    'RAG Pipelines': 'pipeline',
    'Embeddings': 'embedding',
    'VL-Enrichment': 'vision',
    'Model Selection': 'benchmark',
    'Content-Aware Chunking': 'chunk',
    'HNSW': 'graph',
    'Dense & Hybrid Retrieval': 'hybrid',
    'BM25 Baselines': 'keyword',
    'Namespace Filtering': 'filter',
    'MRR · nDCG · MAP · P@k': 'metrics',
    'LLM-as-Judge': 'judge',
    'Wilcoxon + Bootstrap CIs': 'stats',
    'Ground-Truth Curation': 'ground-truth',
    'MCP Tool Proxies': 'proxy',
    'Agent Workflows': 'workflow',
    'GPU Inference': 'gpu',
    'API Fallback': 'fallback',
    'Vector DBs': 'embedding',
    'JSON-RPC 2.0': 'api',
    'OAuth 2.1': 'security',
    'JWT': 'security',
    'RBAC': 'security',
    'Error Masking · Audit Log': 'security',
    'Playwright E2E': 'test',
    'MSTest': 'test',
    'HTTP Mocking': 'test',
    'Formal test protocols': 'test',
    'Healthchecks · Watchdogs': 'deploy',
    'WebGL Deployment': 'deploy',
    'Linux / ARM64': 'deploy',
    'Spec-driven development': 'doc',
    'Gap analyses & debt tracking': 'doc',
    'Trade-off documentation': 'doc',
    'Benchmark-driven decisions': 'benchmark'
  };

  var TIP_ICON_BASE = (function () {
    var link = document.querySelector('link[href*="site.css"]');
    if (link) return link.getAttribute('href').replace(/css\/site\.css.*$/, 'img/icons/semantic/');
    return 'assets/img/icons/semantic/';
  })();
  var TIP_EXIT_MS = 200;
  var TIP_PAD = 12;
  var activeTip = null;
  var hideTimer = null;

  function tipChipLabel(chip) {
    var clone = chip.cloneNode(true);
    var pop = clone.querySelector('.tip-pop');
    if (pop) pop.remove();
    clone.querySelectorAll('img').forEach(function (img) { img.remove(); });
    return clone.textContent.replace(/\s+/g, ' ').trim();
  }

  function tipIconSrc(chip, pop) {
    if (pop.dataset.tipIcon) return TIP_ICON_BASE + pop.dataset.tipIcon + '.svg';
    var label = tipChipLabel(chip);
    if (TIP_SEMANTIC[label]) return TIP_ICON_BASE + TIP_SEMANTIC[label] + '.svg';
    var img = chip.querySelector(':scope > img');
    if (img && img.getAttribute('src')) return img.getAttribute('src');
    return TIP_ICON_BASE + 'default.svg';
  }

  function ensureTipIcon(chip, pop) {
    var head = pop.querySelector('.tp-head');
    if (!head || head.querySelector('.tp-icon')) return;
    var icon = document.createElement('span');
    icon.className = 'tp-icon';
    icon.setAttribute('aria-hidden', 'true');
    var img = document.createElement('img');
    img.src = tipIconSrc(chip, pop);
    img.alt = '';
    icon.appendChild(img);
    head.insertBefore(icon, head.firstChild);
    var body = pop.querySelector('[data-i18n-page]');
    if (body && !body.classList.contains('tp-body')) body.classList.add('tp-body');
    pop.querySelectorAll(':scope > span:not(.tp-head)').forEach(function (span) {
      if (!span.classList.contains('tp-head')) span.classList.add('tp-body');
    });
  }

  function getTipPop(chip) {
    return chip._tipPop || chip.querySelector('.tip-pop');
  }

  /* position:fixed is relative to transformed ancestors; portal to body */
  function portalTipPop(chip, pop) {
    if (pop.parentNode !== document.body) document.body.appendChild(pop);
    chip._tipPop = pop;
    pop._tipChip = chip;
  }

  function positionTip(chip, pop, keepVisible) {
    var wasVisible = keepVisible || pop.classList.contains('is-visible');
    var chipRect = chip.getBoundingClientRect();
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    pop.style.left = '0';
    pop.style.top = '0';
    if (!wasVisible) {
      pop.classList.remove('is-visible', 'is-hiding');
      pop.style.visibility = 'hidden';
      pop.style.opacity = '0';
      pop.style.pointerEvents = 'none';
    }
    pop.style.display = 'flex';

    var popW = pop.offsetWidth;
    var popH = pop.offsetHeight;
    var gap = 10;
    var centerX = chipRect.left + chipRect.width / 2;
    var aboveTop = chipRect.top - popH - gap;
    var belowTop = chipRect.bottom + gap;
    var placement = aboveTop >= TIP_PAD ? 'above' : (belowTop + popH <= vh - TIP_PAD ? 'below' : 'above');
    var top = placement === 'above'
      ? Math.max(TIP_PAD, chipRect.top - popH - gap)
      : Math.min(vh - TIP_PAD - popH, chipRect.bottom + gap);
    if (placement === 'above' && top < TIP_PAD) {
      placement = 'below';
      top = Math.min(vh - TIP_PAD - popH, chipRect.bottom + gap);
    }
    var left = centerX - popW / 2;
    left = Math.max(TIP_PAD, Math.min(left, vw - TIP_PAD - popW));
    var arrowX = centerX - left;
    arrowX = Math.max(14, Math.min(arrowX, popW - 14));

    pop.dataset.placement = placement;
    pop.style.transformOrigin = placement === 'below' ? 'top center' : 'bottom center';
    pop.style.setProperty('--tip-arrow-x', arrowX + 'px');
    pop.style.left = Math.round(left) + 'px';
    pop.style.top = Math.round(top) + 'px';
    if (!wasVisible) {
      pop.style.visibility = '';
      pop.style.opacity = '';
      pop.style.pointerEvents = '';
    }
  }

  function showTip(chip) {
    var pop = getTipPop(chip);
    if (!pop) return;
    portalTipPop(chip, pop);
    if (activeTip && activeTip.chip !== chip) hideTip(activeTip.chip, true);
    clearTimeout(hideTimer);
    ensureTipIcon(chip, pop);
    pop.classList.remove('is-hiding');
    positionTip(chip, pop);
    requestAnimationFrame(function () {
      pop.classList.add('is-visible');
    });
    chip.classList.add('is-open');
    chip.setAttribute('aria-describedby', pop.id || '');
    activeTip = { chip: chip, pop: pop };
  }

  function hideTip(chip, immediate) {
    var pop = getTipPop(chip);
    if (!pop) return;
    clearTimeout(hideTimer);
    pop.classList.remove('is-visible');
    if (immediate) {
      pop.classList.remove('is-hiding');
      chip.classList.remove('is-open');
      if (activeTip && activeTip.chip === chip) activeTip = null;
      return;
    }
    pop.classList.add('is-hiding');
    hideTimer = setTimeout(function () {
      pop.classList.remove('is-hiding');
      chip.classList.remove('is-open');
      if (activeTip && activeTip.chip === chip) activeTip = null;
    }, TIP_EXIT_MS);
  }

  function initSkillTips() {
    var chips = document.querySelectorAll('.skill-chip.tip');
    if (!chips.length) return;
    var touch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    chips.forEach(function (chip, i) {
      var pop = chip.querySelector('.tip-pop');
      if (!pop) return;
      if (!pop.id) pop.id = 'skill-tip-' + (i + 1);
      portalTipPop(chip, pop);
      ensureTipIcon(chip, pop);

      if (touch) {
        chip.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (chip.classList.contains('is-open')) hideTip(chip, false);
          else showTip(chip);
        });
      } else {
        chip.addEventListener('mouseenter', function () { showTip(chip); });
        chip.addEventListener('mouseleave', function () { hideTip(chip, false); });
        chip.addEventListener('focusin', function () { showTip(chip); });
        chip.addEventListener('focusout', function (e) {
          if (!chip.contains(e.relatedTarget)) hideTip(chip, false);
        });
      }
    });

    document.addEventListener('click', function (e) {
      if (!touch || !activeTip) return;
      if (!activeTip.chip.contains(e.target)) hideTip(activeTip.chip, false);
    });

    window.addEventListener('scroll', function () {
      if (activeTip) positionTip(activeTip.chip, activeTip.pop, true);
    }, { passive: true, capture: true });
    window.addEventListener('resize', function () {
      if (activeTip) positionTip(activeTip.chip, activeTip.pop, true);
    });
  }
})();
