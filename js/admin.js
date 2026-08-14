/* ==========================================================================
   MyPlopPlop — Admin console shared layer
   Guards the admin role and gives every screen the same chrome + helpers.
   ========================================================================== */
(function (global) {
  'use strict';

  var NAV = [
    { id: 'dashboard',     href: 'dashboard.html',     label: 'Tablo',        icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>' },
    { id: 'orders',        href: 'orders.html',        label: 'Kòmand',       icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
    { id: 'merchants',     href: 'merchants.html',     label: 'Machann',      icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
    { id: 'riders',        href: 'riders.html',        label: 'Chofè',        icon: '<circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' },
    { id: 'international', href: 'international.html', label: 'Entènasyonal', icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
    { id: 'settings',      href: 'settings.html',      label: 'Paramèt',      icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09"/>' }
  ];

  function svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function money(n) { return (Math.round(Number(n) || 0)).toLocaleString('fr-FR') + ' HTG'; }
  function when(d) {
    if (!d) return '';
    var dt = new Date(d);
    if (isNaN(dt)) return '';
    var mins = Math.round((new Date() - dt) / 60000);
    if (mins < 60) return mins + ' min';
    if (mins < 1440) return Math.round(mins / 60) + ' h';
    return dt.toLocaleDateString('fr-HT', { day: 'numeric', month: 'short' });
  }
  function toast(msg, type) {
    var el = document.getElementById('mpToast');
    if (!el) { el = document.createElement('div'); el.id = 'mpToast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.className = 'mp-toast show ' + (type || '');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.className = 'mp-toast ' + (type || ''); }, 3500);
  }

  function chrome(active) {
    var side = document.getElementById('mpSidebar');
    var bottom = document.getElementById('mpBottomNav');
    if (side) {
      side.innerHTML =
        '<div class="mp-side-store"><div class="mp-avatar" style="width:40px;height:40px;font-size:18px;">🛡️</div>' +
        '<div class="mp-store-meta"><h2>Admin</h2><div class="mp-store-sub" id="adminWho"></div></div></div>' +
        NAV.map(function (n) {
          return '<a href="' + n.href + '" class="mp-side-item' + (n.id === active ? ' active' : '') + '">' +
                 svg(n.icon) + '<span>' + n.label + '</span></a>';
        }).join('') +
        '<a href="#" class="mp-side-item mp-side-logout" id="mpLogout">' +
        svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>') +
        '<span>Dekonekte</span></a>';
      var lo = document.getElementById('mpLogout');
      if (lo) lo.addEventListener('click', function (e) {
        e.preventDefault();
        API.logout ? API.logout() : (localStorage.removeItem('pp_token'), location.href = '../login.html');
      });
    }
    if (bottom) {
      bottom.innerHTML = NAV.map(function (n) {
        return '<a href="' + n.href + '" class="mp-nav-item' + (n.id === active ? ' active' : '') + '">' +
               svg(n.icon) + '<span>' + n.label + '</span></a>';
      }).join('');
    }
  }

  /* Guard the admin role, then hand control to the page. */
  function boot(active, onReady) {
    if (!API.isLoggedIn()) {
      location.href = '../login.html?redirect=admin/' + active + '.html';
      return;
    }
    var u = API.getUser();
    if (!u || u.role !== 'admin') {
      document.getElementById('mpBody').innerHTML =
        '<div class="mp-empty"><div class="mp-empty-icon">🔒</div>' +
        '<p>Paj sa a se pou administratè MyPlopPlop sèlman.</p>' +
        '<a class="mp-btn mp-btn-red" href="../index.html">Retounen</a></div>';
      chrome(active);
      return;
    }
    chrome(active);
    var who = document.getElementById('adminWho');
    if (who) who.textContent = u.name || '';
    var body = document.getElementById('mpBody');
    if (body) body.innerHTML = '<div class="mp-empty"><div class="mp-spin"></div><p>Ap chaje...</p></div>';
    onReady(u);
  }

  function fail(msg) {
    document.getElementById('mpBody').innerHTML =
      '<div class="mp-empty"><div class="mp-empty-icon">⚠️</div><p>' + esc(msg || 'Erè') + '</p>' +
      '<button class="mp-btn mp-btn-ghost" onclick="location.reload()">↻</button></div>';
  }

  global.ADM = { boot: boot, chrome: chrome, esc: esc, money: money, when: when, toast: toast, svg: svg, fail: fail };
})(window);
