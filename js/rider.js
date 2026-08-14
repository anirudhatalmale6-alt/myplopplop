/* ==========================================================================
   MyPlopPlop — Driver portal shared layer
   Every driver screen loads its numbers from the server. Nothing is invented.
   ========================================================================== */
(function (global) {
  'use strict';

  var API_BASE = 'https://myplopplop-api.onrender.com';
  var LANGS = ['kr', 'fr', 'en', 'es'];

  function lang() {
    var l = localStorage.getItem('pp_lang') || 'kr';
    return LANGS.indexOf(l) === -1 ? 'kr' : l;
  }
  function pick(o) { return o ? (o[lang()] || o.en) : ''; }

  var T = {
    home:      { kr:'Akèy', fr:'Accueil', en:'Home', es:'Inicio' },
    deliveries:{ kr:'Kous', fr:'Courses', en:'Deliveries', es:'Viajes' },
    earnings:  { kr:'Kòb', fr:'Revenus', en:'Earnings', es:'Ganancias' },
    wallet:    { kr:'Bous', fr:'Portefeuille', en:'Wallet', es:'Billetera' },
    profile:   { kr:'Pwofil', fr:'Profil', en:'Profil', es:'Perfil' },
    loading:   { kr:'Ap chaje...', fr:'Chargement...', en:'Loading...', es:'Cargando...' },
    waking:    { kr:'Sèvè a ap reveye, tann yon ti moman...', fr:'Le serveur démarre...', en:'Server is waking up...', es:'El servidor está iniciando...' },
    online:    { kr:'An liy', fr:'En ligne', en:'Online', es:'En línea' },
    offline:   { kr:'Deconekte', fr:'Hors ligne', en:'Offline', es:'Desconectado' },
    saved:     { kr:'Anrejistre !', fr:'Enregistré !', en:'Saved!', es:'¡Guardado!' },
    failed:    { kr:'Pa t mache', fr:'Échec', en:"Didn't work", es:'Falló' },
    retry:     { kr:'Eseye ankò', fr:'Réessayer', en:'Try again', es:'Reintentar' },
    noProfile: { kr:'Ou poko yon chofè apwouve.', fr:"Vous n'êtes pas encore chauffeur approuvé.", en:'You are not an approved driver yet.', es:'Aún no eres conductor aprobado.' },
    apply:     { kr:'Vin yon chofè', fr:'Devenir chauffeur', en:'Become a driver', es:'Ser conductor' }
  };
  function t(k) { return pick(T[k]) || k; }

  function token() { return localStorage.getItem('pp_token'); }
  function user() {
    try { return JSON.parse(localStorage.getItem('pp_user') || 'null'); } catch (e) { return null; }
  }
  function logout() {
    localStorage.removeItem('pp_token');
    localStorage.removeItem('pp_user');
    location.href = '../login.html';
  }

  function req(method, path, body) {
    var opts = { method: method, headers: {} };
    var tk = token();
    if (tk) opts.headers['Authorization'] = 'Bearer ' + tk;
    if (body) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
    var ctrl = new AbortController();
    opts.signal = ctrl.signal;
    var timer = setTimeout(function () { ctrl.abort(); }, 90000);   // Render cold start
    return fetch(API_BASE + path, opts).then(function (r) {
      clearTimeout(timer);
      return r.json().then(function (d) {
        if (r.status === 401) { logout(); throw new Error('unauthorized'); }
        return d;
      });
    }).catch(function (e) {
      clearTimeout(timer);
      throw (e.name === 'AbortError' ? new Error('timeout') : e);
    });
  }

  function toast(msg, type) {
    var el = document.getElementById('rdToast');
    if (!el) { el = document.createElement('div'); el.id = 'rdToast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.className = 'rd-toast show ' + (type || '');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.className = 'rd-toast ' + (type || ''); }, 3500);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function money(n) { return (Math.round(Number(n) || 0)).toLocaleString('fr-FR') + ' HTG'; }
  function shortMoney(n) {
    n = Number(n) || 0;
    return n >= 1000 ? (Math.round(n / 100) / 10) + 'k' : String(Math.round(n));
  }
  function when(d) {
    if (!d) return '';
    var dt = new Date(d);
    if (isNaN(dt)) return '';
    var mins = Math.round((new Date() - dt) / 60000);
    if (mins < 1) return 'kounye a';
    if (mins < 60) return mins + ' min';
    if (mins < 1440) return Math.round(mins / 60) + ' h';
    return dt.toLocaleDateString('fr-HT', { day: 'numeric', month: 'short' });
  }

  var NAV = [
    { id: 'dashboard', href: 'dashboard.html', label: 'home',       icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'history',   href: 'history.html',   label: 'deliveries', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    { id: 'earnings',  href: 'earnings.html',  label: 'earnings',   icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
    { id: 'wallet',    href: 'wallet.html',    label: 'wallet',     icon: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>' },
    { id: 'profile',   href: 'profile.html',   label: 'profile',    icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' }
  ];
  function svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
  }
  function chrome(active) {
    var nav = document.getElementById('rdNav');
    if (nav) {
      nav.innerHTML = NAV.map(function (n) {
        return '<a href="' + n.href + '" class="rider-nav-item' + (n.id === active ? ' active' : '') + '">' +
               svg(n.icon) + '<span>' + t(n.label) + '</span></a>';
      }).join('');
    }
    var bar = document.getElementById('rdLangs');
    if (bar) {
      bar.innerHTML = LANGS.map(function (l) {
        var f = { kr:'🇭🇹', fr:'🇫🇷', en:'🇬🇧', es:'🇪🇸' }[l];
        return '<button class="rd-lang' + (lang() === l ? ' active' : '') + '" data-l="' + l + '">' + f + '</button>';
      }).join('');
      bar.querySelectorAll('[data-l]').forEach(function (b) {
        b.addEventListener('click', function () { localStorage.setItem('pp_lang', b.dataset.l); location.reload(); });
      });
    }
  }

  /* the API returns grade as {tier,badge,color}, not a string */
  function gradeName(stats) {
    var g = stats && stats.grade;
    if (!g) return '';
    return typeof g === 'string' ? g : (g.tier || g.name || '');
  }

  var _stats = null;
  function header(stats) {
    var el = document.getElementById('rdDriver');
    if (!el) return;
    var u = user() || {};
    var initials = (u.name || '?').trim().split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
    var on = stats && stats.isOnline;
    el.innerHTML =
      '<div class="rd-avatar">' + esc(initials) + '</div>' +
      '<div class="rd-driver-meta"><h2>' + esc(u.name || '') + '</h2>' +
      '<div class="rd-driver-sub"><span class="rd-dot ' + (on ? 'on' : '') + '"></span>' +
      (on ? t('online') : t('offline')) +
      (stats && stats.rating ? ' · ⭐ ' + Number(stats.rating).toFixed(1) : '') +
      (gradeName(stats) ? ' · ' + esc(gradeName(stats)) : '') + '</div></div>';
  }

  /* boot: guard the token, fetch the driver profile, hand the page real data */
  function boot(active, onReady) {
    if (!token()) { location.href = '../login.html?redirect=rider/' + active + '.html'; return; }
    chrome(active);
    var body = document.getElementById('rdBody');
    if (body) body.innerHTML = '<div class="rd-empty"><div class="rd-spin"></div><p>' + t('loading') + '</p></div>';
    var slow = setTimeout(function () {
      if (body) body.innerHTML = '<div class="rd-empty"><div class="rd-spin"></div><p>' + t('waking') + '</p></div>';
    }, 3500);

    req('GET', '/api/drivers/stats').then(function (d) {
      clearTimeout(slow);
      _stats = (d && d.success && d.stats) ? d.stats : null;
      header(_stats);
      if (!_stats) {
        if (body) body.innerHTML = '<div class="rd-empty"><div class="ico">🛵</div><p>' + t('noProfile') + '</p>' +
          '<a class="rd-btn rd-btn-red" href="../driver-onboarding.html">' + t('apply') + '</a></div>';
        return;
      }
      onReady(_stats);
    }).catch(function (e) {
      clearTimeout(slow);
      if (body) body.innerHTML = '<div class="rd-empty"><div class="ico">⚠️</div><p>' +
        esc(e && e.message === 'timeout' ? t('waking') : String((e && e.message) || e)) + '</p>' +
        '<button class="rd-btn rd-btn-ghost" onclick="location.reload()">' + t('retry') + '</button></div>';
    });
  }

  global.RD = {
    API_BASE: API_BASE, req: req, token: token, user: user, logout: logout,
    boot: boot, stats: function () { return _stats; }, header: header,
    toast: toast, esc: esc, money: money, shortMoney: shortMoney, when: when, gradeName: gradeName,
    t: t, pick: pick, lang: lang, svg: svg
  };
})(window);
