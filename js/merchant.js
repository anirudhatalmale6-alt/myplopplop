/* ==========================================================================
   MyPlopPlop — Merchant Portal shared layer
   Auth guard, live store loading, image compression, chrome, toasts.
   Every merchant page loads this instead of hardcoding demo data.
   ========================================================================== */
(function (global) {
  'use strict';

  var API_BASE = 'https://myplopplop-api.onrender.com';

  /* ---------- language ---------- */
  var LANGS = ['kr', 'fr', 'en', 'es'];
  function lang() {
    var l = localStorage.getItem('pp_lang') || 'kr';
    return LANGS.indexOf(l) === -1 ? 'kr' : l;
  }
  var T = {
    dashboard:  { kr: 'Tablo', fr: 'Tableau de bord', en: 'Dashboard', es: 'Panel' },
    orders:     { kr: 'Kòmand', fr: 'Commandes', en: 'Orders', es: 'Pedidos' },
    products:   { kr: 'Pwodwi', fr: 'Produits', en: 'Products', es: 'Productos' },
    inventory:  { kr: 'Estòk', fr: 'Inventaire', en: 'Inventory', es: 'Inventario' },
    wallet:     { kr: 'Bous', fr: 'Portefeuille', en: 'Wallet', es: 'Billetera' },
    settings:   { kr: 'Paramèt', fr: 'Paramètres', en: 'Settings', es: 'Ajustes' },
    viewStore:  { kr: 'Wè boutik mwen', fr: 'Voir ma boutique', en: 'View my store', es: 'Ver mi tienda' },
    logout:     { kr: 'Dekonekte', fr: 'Déconnexion', en: 'Log out', es: 'Salir' },
    loading:    { kr: 'Ap chaje...', fr: 'Chargement...', en: 'Loading...', es: 'Cargando...' },
    waking:     { kr: 'Sèvè a ap reveye, tann yon ti moman...', fr: 'Le serveur démarre, un instant...', en: 'Server is waking up, one moment...', es: 'El servidor está iniciando...' },
    noStore:    { kr: 'Ou poko gen yon boutik. Kreye youn!', fr: "Vous n'avez pas encore de boutique.", en: "You don't have a store yet.", es: 'Aún no tienes tienda.' },
    createStore:{ kr: 'Kreye boutik mwen', fr: 'Créer ma boutique', en: 'Create my store', es: 'Crear mi tienda' },
    saved:      { kr: 'Anrejistre !', fr: 'Enregistré !', en: 'Saved!', es: '¡Guardado!' },
    saveFail:   { kr: 'Pa t ka anrejistre', fr: "Échec de l'enregistrement", en: 'Could not save', es: 'No se pudo guardar' },
    verified:   { kr: 'Verifye', fr: 'Vérifié', en: 'Verified', es: 'Verificado' },
    open:       { kr: 'Ouvè', fr: 'Ouvert', en: 'Open', es: 'Abierto' },
    closed:     { kr: 'Fèmen', fr: 'Fermé', en: 'Closed', es: 'Cerrado' }
  };
  function t(key) {
    var e = T[key];
    return e ? (e[lang()] || e.en) : key;
  }

  /* ---------- tokens ---------- */
  function token() { return localStorage.getItem('pp_token'); }
  function user() {
    try { return JSON.parse(localStorage.getItem('pp_user') || 'null'); } catch (e) { return null; }
  }
  function logout() {
    localStorage.removeItem('pp_token');
    localStorage.removeItem('pp_user');
    location.href = '../login.html';
  }

  /* ---------- http ---------- */
  function req(method, path, body) {
    var opts = { method: method, headers: {} };
    var tk = token();
    if (tk) opts.headers['Authorization'] = 'Bearer ' + tk;
    if (body) {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(body);
    }
    // Render free tier cold-starts; 90s beats a confusing "connection error"
    var ctrl = new AbortController();
    opts.signal = ctrl.signal;
    var timer = setTimeout(function () { ctrl.abort(); }, 90000);
    return fetch(API_BASE + path, opts)
      .then(function (r) {
        clearTimeout(timer);
        return r.json().then(function (d) {
          if (r.status === 401) { logout(); throw new Error('unauthorized'); }
          if (r.status === 413) throw new Error('too_large');
          return d;
        });
      })
      .catch(function (e) {
        clearTimeout(timer);
        if (e.message === 'too_large') throw e;
        if (e.name === 'AbortError') throw new Error('timeout');
        throw e;
      });
  }

  /* ---------- toast ---------- */
  function toast(msg, type) {
    var el = document.getElementById('mpToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'mpToast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'mp-toast show ' + (type || 'info');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.className = 'mp-toast ' + (type || 'info'); }, 3600);
  }

  /* ---------- image compression ----------
     A logo shot on a phone is 2–6 MB. Downscale on the canvas and step the
     JPEG quality down until the data URL fits comfortably inside the request.
     Transparent PNGs keep their alpha (a JPEG would paint the padding black). */
  function compressImage(file, maxPx, maxBytes) {
    maxPx = maxPx || 600;
    maxBytes = maxBytes || 220000; // data-URL characters
    return new Promise(function (resolve, reject) {
      if (!file) return reject(new Error('no file'));
      if (!/^image\//.test(file.type)) return reject(new Error('not an image'));
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error('read failed')); };
      reader.onload = function (ev) {
        var img = new Image();
        img.onerror = function () { reject(new Error('decode failed')); };
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight;
          var scale = Math.min(1, maxPx / Math.max(w, h));
          var cw = Math.max(1, Math.round(w * scale));
          var ch = Math.max(1, Math.round(h * scale));
          var canvas = document.createElement('canvas');
          canvas.width = cw; canvas.height = ch;
          var ctx = canvas.getContext('2d');
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, cw, ch);

          var isPng = /png/i.test(file.type);
          var out;
          if (isPng) {
            out = canvas.toDataURL('image/png');
            if (out.length <= maxBytes) return resolve(out);
            // too heavy as PNG — flatten onto white and go JPEG
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, cw, ch);
          }
          var q = 0.9;
          out = canvas.toDataURL('image/jpeg', q);
          while (out.length > maxBytes && q > 0.35) {
            q -= 0.1;
            out = canvas.toDataURL('image/jpeg', q);
          }
          if (out.length > maxBytes) {
            // still heavy: halve the pixels once and retry at mid quality
            var c2 = document.createElement('canvas');
            c2.width = Math.max(1, Math.round(cw / 2));
            c2.height = Math.max(1, Math.round(ch / 2));
            c2.getContext('2d').drawImage(canvas, 0, 0, c2.width, c2.height);
            out = c2.toDataURL('image/jpeg', 0.7);
          }
          resolve(out);
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---------- store ---------- */
  var _store = null, _products = null, _orders = null;

  function loadStore(force) {
    if (_store && !force) return Promise.resolve({ store: _store, products: _products, recentOrders: _orders });
    return req('GET', '/api/stores/merchant/my-store').then(function (d) {
      if (d && d.success && d.data && d.data.store) {
        _store = d.data.store;
        _products = d.data.products || [];
        _orders = d.data.recentOrders || [];
        return d.data;
      }
      throw new Error('no_store');
    });
  }
  function store() { return _store; }
  function saveStore(patch) {
    if (!_store) return Promise.reject(new Error('no_store'));
    return req('PUT', '/api/stores/' + _store._id, patch).then(function (d) {
      if (d && d.success && d.data) { _store = d.data; return _store; }
      throw new Error((d && d.message) || 'save failed');
    });
  }

  /* ---------- chrome ---------- */
  var NAV = [
    { id: 'dashboard', href: 'dashboard.html', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>' },
    { id: 'orders', href: 'orders.html', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
    { id: 'products', href: 'products.html', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
    { id: 'inventory', href: 'inventory.html', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>' },
    { id: 'wallet', href: 'wallet.html', icon: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>' },
    { id: 'settings', href: 'settings.html', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09"/>' }
  ];

  function svg(path) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
  }

  function renderChrome(active) {
    var side = document.getElementById('mpSidebar');
    var bottom = document.getElementById('mpBottomNav');
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '" class="mp-side-item' + (n.id === active ? ' active' : '') + '">' + svg(n.icon) + '<span>' + t(n.id) + '</span></a>';
    }).join('');
    if (side) {
      side.innerHTML =
        '<div class="mp-side-store" id="mpSideStore"></div>' + links +
        '<a href="#" class="mp-side-item mp-side-logout" id="mpLogout">' +
        svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>') +
        '<span>' + t('logout') + '</span></a>';
      var lo = document.getElementById('mpLogout');
      if (lo) lo.addEventListener('click', function (e) { e.preventDefault(); logout(); });
    }
    if (bottom) {
      bottom.innerHTML = NAV.map(function (n) {
        return '<a href="' + n.href + '" class="mp-nav-item' + (n.id === active ? ' active' : '') + '">' + svg(n.icon) + '<span>' + t(n.id) + '</span></a>';
      }).join('');
    }
  }

  function storeAvatar(s, size) {
    size = size || 44;
    var emoji = { restaurant: '🍽️', supermarket: '🛒', pharmacy: '💊', hardware: '🔨', wholesale: '📦', retail: '🛍️', bakery: '🥖', other: '🏪' }[s.category] || '🏪';
    if (s.logo) {
      return '<div class="mp-avatar" style="width:' + size + 'px;height:' + size + 'px;padding:0;overflow:hidden;">' +
             '<img src="' + s.logo + '" alt="" style="width:100%;height:100%;object-fit:cover;"></div>';
    }
    return '<div class="mp-avatar" style="width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.45) + 'px;">' + emoji + '</div>';
  }

  function renderStoreHeader() {
    var s = _store;
    if (!s) return;
    var badge = s.isVerified ? '<span class="mp-badge verified">✓ ' + t('verified') + '</span>' : '';
    var open = s.status === 'active';
    var html = storeAvatar(s, 44) +
      '<div class="mp-store-meta"><h2>' + esc(s.name) + '</h2>' +
      '<div class="mp-store-sub"><span class="mp-dot ' + (open ? 'on' : 'off') + '"></span>' +
      (open ? t('open') : t('closed')) + badge + '</div></div>';
    ['mpStoreHeader', 'mpSideStore'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = html;
    });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function money(n) {
    return (Math.round(Number(n) || 0)).toLocaleString('fr-FR') + ' HTG';
  }
  function when(d) {
    if (!d) return '';
    var dt = new Date(d), now = new Date();
    var mins = Math.round((now - dt) / 60000);
    if (mins < 1) return 'now';
    if (mins < 60) return mins + ' min';
    if (mins < 1440) return Math.round(mins / 60) + ' h';
    return dt.toLocaleDateString();
  }

  /* ---------- page boot ----------
     Guard the token, load the real store, paint the chrome. Pages pass a
     callback that receives the live data — no page renders demo content. */
  function boot(active, onReady) {
    if (!token()) {
      location.href = '../login.html?redirect=merchant/' + active + '.html';
      return;
    }
    renderChrome(active);
    var body = document.getElementById('mpBody');
    var slow = setTimeout(function () {
      if (body) body.innerHTML = '<div class="mp-empty"><div class="mp-spin"></div><p>' + t('waking') + '</p></div>';
    }, 3500);
    if (body) body.innerHTML = '<div class="mp-empty"><div class="mp-spin"></div><p>' + t('loading') + '</p></div>';

    loadStore().then(function (data) {
      clearTimeout(slow);
      renderStoreHeader();
      onReady(data);
    }).catch(function (err) {
      clearTimeout(slow);
      if (!body) return;
      if (err && err.message === 'no_store') {
        body.innerHTML = '<div class="mp-empty"><div class="mp-empty-icon">🏪</div><p>' + t('noStore') + '</p>' +
          '<a class="mp-btn mp-btn-red" href="../store-designer.html">' + t('createStore') + '</a></div>';
      } else {
        body.innerHTML = '<div class="mp-empty"><div class="mp-empty-icon">⚠️</div><p>' + esc(err && err.message === 'timeout' ? t('waking') : String(err && err.message || err)) + '</p>' +
          '<button class="mp-btn mp-btn-red" onclick="location.reload()">↻</button></div>';
      }
    });
  }

  global.MP = {
    API_BASE: API_BASE, req: req, token: token, user: user, logout: logout,
    boot: boot, loadStore: loadStore, store: store, saveStore: saveStore,
    renderStoreHeader: renderStoreHeader, storeAvatar: storeAvatar,
    compressImage: compressImage, toast: toast,
    esc: esc, money: money, when: when, t: t, lang: lang, svg: svg
  };
})(window);
