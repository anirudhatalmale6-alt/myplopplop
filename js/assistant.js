/* MyPlopPlop site assistant — the chat bubble.
 *
 * Self-contained on purpose: one <script src> at the bottom of any page adds the
 * bubble, the panel and its styles. No dependency on api.js or i18n.js, so it
 * cannot be broken by script ordering the way the customer pages were.
 *
 * It never answers from the browser. Every reply comes from /api/assistant/chat,
 * where the wording is grounded and a human handoff can be triggered. */
(function () {
  'use strict';

  if (window.__ppAssistantLoaded) return;
  window.__ppAssistantLoaded = true;

  var API_BASE = 'https://myplopplop-api.onrender.com';
  var WHATSAPP = '50946859702';
  var LANG_KEY = 'myplopplop_lang';
  var CHAT_KEY = 'pp_assistant_chat';
  var MAX_KEPT = 20;

  /* The site stores Creole as 'kr'; the API speaks ISO 'ht'. */
  var API_LANG = { kr: 'ht', fr: 'fr', en: 'en', es: 'es' };

  var T = {
    kr: {
      title: 'Asistan MyPlopPlop',
      sub: 'Reponn nan kèk segonn',
      open: 'Louvri chat la',
      close: 'Fèmen',
      hello: 'Bonjou! 👋 Mwen se asistan MyPlopPlop. Kijan m ka ede w jodi a?',
      ph: 'Ekri kesyon ou...',
      send: 'Voye',
      typing: 'Ap ekri...',
      wa: 'Pale ak yon moun sou WhatsApp',
      err: 'Koneksyon an pa mache kounye a. Eseye ankò oswa ekri nou sou WhatsApp.',
      busy: 'Twòp mesaj kounye a. Tanpri ekri nou sou WhatsApp.',
      chips: ['Kijan pou m vann?', 'Konbyen livrezon an koute?', 'Mwen vle vin chofè', 'Voye pou fanmi m an Ayiti'],
      clear: 'Efase konvèsasyon an'
    },
    fr: {
      title: 'Assistant MyPlopPlop',
      sub: 'Réponse en quelques secondes',
      open: 'Ouvrir le chat',
      close: 'Fermer',
      hello: 'Bonjour ! 👋 Je suis l’assistant MyPlopPlop. Comment puis-je vous aider ?',
      ph: 'Écrivez votre question...',
      send: 'Envoyer',
      typing: 'Écrit...',
      wa: 'Parler à quelqu’un sur WhatsApp',
      err: 'La connexion ne passe pas. Réessayez ou écrivez-nous sur WhatsApp.',
      busy: 'Trop de messages en ce moment. Écrivez-nous sur WhatsApp.',
      chips: ['Comment vendre ?', 'Combien coûte la livraison ?', 'Devenir chauffeur', 'Envoyer à ma famille en Haïti'],
      clear: 'Effacer la conversation'
    },
    en: {
      title: 'MyPlopPlop Assistant',
      sub: 'Answers in seconds',
      open: 'Open chat',
      close: 'Close',
      hello: 'Hi! 👋 I’m the MyPlopPlop assistant. How can I help you today?',
      ph: 'Type your question...',
      send: 'Send',
      typing: 'Typing...',
      wa: 'Talk to a person on WhatsApp',
      err: 'The connection is not going through. Try again or message us on WhatsApp.',
      busy: 'Too many messages right now. Please message us on WhatsApp.',
      chips: ['How do I sell?', 'What is the delivery fee?', 'Become a driver', 'Send to my family in Haiti'],
      clear: 'Clear conversation'
    },
    es: {
      title: 'Asistente MyPlopPlop',
      sub: 'Respuesta en segundos',
      open: 'Abrir el chat',
      close: 'Cerrar',
      hello: '¡Hola! 👋 Soy el asistente de MyPlopPlop. ¿En qué te puedo ayudar?',
      ph: 'Escribe tu pregunta...',
      send: 'Enviar',
      typing: 'Escribiendo...',
      wa: 'Hablar con una persona por WhatsApp',
      err: 'La conexión no funciona ahora. Inténtalo de nuevo o escríbenos por WhatsApp.',
      busy: 'Demasiados mensajes ahora mismo. Escríbenos por WhatsApp.',
      chips: ['¿Cómo puedo vender?', '¿Cuánto cuesta el envío?', 'Quiero ser conductor', 'Enviar a mi familia en Haití'],
      clear: 'Borrar la conversación'
    }
  };

  function lang() {
    var l;
    try { l = localStorage.getItem(LANG_KEY); } catch (e) { l = null; }
    return T[l] ? l : 'kr';
  }
  function t() { return T[lang()]; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── history ───────────────────────────────────────────────────────────── */
  var history = [];
  try {
    var saved = JSON.parse(localStorage.getItem(CHAT_KEY) || '[]');
    if (Array.isArray(saved)) history = saved.slice(-MAX_KEPT);
  } catch (e) { history = []; }

  function remember(role, content) {
    history.push({ role: role, content: content });
    if (history.length > MAX_KEPT) history = history.slice(-MAX_KEPT);
    try { localStorage.setItem(CHAT_KEY, JSON.stringify(history)); } catch (e) {}
  }

  /* ── styles ────────────────────────────────────────────────────────────── */
  var CSS = [
    '.ppa-bubble{position:fixed;right:16px;z-index:9998;width:58px;height:58px;border:none;',
    'border-radius:50%;background:linear-gradient(135deg,#D21034,#00209F);color:#fff;cursor:pointer;',
    'box-shadow:0 6px 20px rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;',
    'transition:transform .18s ease}',
    '.ppa-bubble:hover{transform:scale(1.06)}',
    '.ppa-bubble svg{width:28px;height:28px;fill:#fff}',
    '.ppa-bubble .ppa-dot{position:absolute;top:2px;right:2px;width:13px;height:13px;border-radius:50%;',
    'background:#10B981;border:2px solid #fff}',
    '.ppa-panel{position:fixed;right:16px;z-index:9999;width:360px;max-width:calc(100vw - 32px);',
    'height:min(560px,calc(100vh - 120px));background:#fff;border-radius:18px;overflow:hidden;',
    'display:none;flex-direction:column;box-shadow:0 18px 50px rgba(0,0,0,.3);',
    'font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.ppa-panel.ppa-on{display:flex}',
    '.ppa-head{background:linear-gradient(135deg,#D21034,#00209F);color:#fff;padding:14px 16px;',
    'display:flex;align-items:center;gap:10px;flex-shrink:0}',
    '.ppa-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.2);',
    'display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}',
    '.ppa-head h4{margin:0;font-size:15px;font-weight:700;line-height:1.2}',
    '.ppa-head p{margin:2px 0 0;font-size:11.5px;opacity:.85;line-height:1.2}',
    '.ppa-x{margin-left:auto;background:rgba(255,255,255,.18);border:none;color:#fff;width:30px;',
    'height:30px;border-radius:50%;font-size:17px;cursor:pointer;line-height:1;flex-shrink:0}',
    '.ppa-body{flex:1;overflow-y:auto;padding:14px;background:#F5F6FA;-webkit-overflow-scrolling:touch}',
    '.ppa-msg{max-width:84%;padding:9px 13px;border-radius:15px;margin-bottom:9px;font-size:13.5px;',
    'line-height:1.45;white-space:pre-wrap;word-wrap:break-word}',
    '.ppa-bot{background:#fff;color:#1A1A2E;border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.08)}',
    '.ppa-me{background:#00209F;color:#fff;margin-left:auto;border-bottom-right-radius:5px}',
    '.ppa-wa{display:flex;align-items:center;gap:8px;background:#25D366;color:#fff;text-decoration:none;',
    'padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;margin:0 0 9px;max-width:84%}',
    '.ppa-wa svg{width:17px;height:17px;fill:#fff;flex-shrink:0}',
    '.ppa-chips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:9px}',
    '.ppa-chip{background:#fff;border:1px solid #D1D5DB;color:#374151;border-radius:16px;padding:7px 12px;',
    'font-size:12.5px;cursor:pointer;font-family:inherit}',
    '.ppa-chip:hover{border-color:#D21034;color:#D21034}',
    '.ppa-dots{display:inline-flex;gap:4px;align-items:center}',
    '.ppa-dots i{width:6px;height:6px;border-radius:50%;background:#9CA3AF;display:block;',
    'animation:ppaBlink 1.3s infinite}',
    '.ppa-dots i:nth-child(2){animation-delay:.18s}.ppa-dots i:nth-child(3){animation-delay:.36s}',
    '@keyframes ppaBlink{0%,60%,100%{opacity:.3}30%{opacity:1}}',
    '.ppa-foot{border-top:1px solid #E5E7EB;padding:9px 10px;display:flex;gap:8px;align-items:flex-end;',
    'background:#fff;flex-shrink:0}',
    '.ppa-foot textarea{flex:1;border:1px solid #D1D5DB;border-radius:20px;padding:9px 13px;font-size:14px;',
    'font-family:inherit;resize:none;max-height:86px;line-height:1.35;outline:none}',
    '.ppa-foot textarea:focus{border-color:#00209F}',
    '.ppa-send{background:#D21034;border:none;color:#fff;width:38px;height:38px;border-radius:50%;',
    'cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center}',
    '.ppa-send:disabled{opacity:.45;cursor:default}',
    '.ppa-send svg{width:18px;height:18px;fill:#fff}',
    '.ppa-note{text-align:center;font-size:10.5px;color:#9CA3AF;padding:0 10px 7px;background:#fff}',
    '.ppa-note button{background:none;border:none;color:#9CA3AF;font-size:10.5px;cursor:pointer;',
    'text-decoration:underline;font-family:inherit;padding:0}',
    '@media(max-width:520px){',
    '.ppa-panel{right:8px;left:8px;width:auto;max-width:none;height:min(72vh,540px)}',
    '.ppa-bubble{right:14px;width:54px;height:54px}}'
  ].join('');

  /* Pages with a bottom nav bar would hide the bubble behind it. */
  function bubbleOffset() {
    var nav = document.querySelector('.bottom-nav, .mp-bottom-nav, .rider-bottom-nav');
    if (!nav) return 20;
    var visible = nav.offsetParent !== null && window.getComputedStyle(nav).display !== 'none';
    return visible ? 82 : 20;
  }

  /* ── build ─────────────────────────────────────────────────────────────── */
  var panel, body, input, sendBtn, bubble, busy = false;

  function build() {
    var s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);

    var L = t();

    bubble = document.createElement('button');
    bubble.className = 'ppa-bubble';
    bubble.type = 'button';
    bubble.setAttribute('aria-label', L.open);
    bubble.innerHTML = '<span class="ppa-dot"></span><svg viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm0 4h7v2H7v-2z"/></svg>';

    panel = document.createElement('div');
    panel.className = 'ppa-panel';
    panel.setAttribute('role', 'dialog');
    panel.innerHTML =
      '<div class="ppa-head"><div class="ppa-avatar">🇭🇹</div><div><h4>' + esc(L.title) + '</h4>' +
      '<p>' + esc(L.sub) + '</p></div>' +
      '<button class="ppa-x" type="button" aria-label="' + esc(L.close) + '">&times;</button></div>' +
      '<div class="ppa-body"></div>' +
      '<div class="ppa-foot">' +
      '<textarea rows="1" placeholder="' + esc(L.ph) + '"></textarea>' +
      '<button class="ppa-send" type="button" aria-label="' + esc(L.send) + '">' +
      '<svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg></button></div>' +
      '<div class="ppa-note"><button type="button" class="ppa-clear">' + esc(L.clear) + '</button></div>';

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    body = panel.querySelector('.ppa-body');
    input = panel.querySelector('textarea');
    sendBtn = panel.querySelector('.ppa-send');

    position();
    window.addEventListener('resize', position);

    bubble.addEventListener('click', open);
    panel.querySelector('.ppa-x').addEventListener('click', close);
    panel.querySelector('.ppa-clear').addEventListener('click', clearChat);
    sendBtn.addEventListener('click', send);

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });
    input.addEventListener('input', function () {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 86) + 'px';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('ppa-on')) close();
    });
  }

  function position() {
    var off = bubbleOffset();
    bubble.style.bottom = off + 'px';
    panel.style.bottom = (off + 66) + 'px';
  }

  /* ── rendering ─────────────────────────────────────────────────────────── */
  function addMsg(who, text) {
    var d = document.createElement('div');
    d.className = 'ppa-msg ' + (who === 'me' ? 'ppa-me' : 'ppa-bot');
    d.textContent = text;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  }

  function addWhatsapp(context) {
    var L = t();
    var a = document.createElement('a');
    a.className = 'ppa-wa';
    a.target = '_blank';
    a.rel = 'noopener';
    a.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(context || '');
    a.innerHTML = '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5 0 1.6-.6 1.9-1.3s.3-1.2.2-1.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>' +
      '<span>' + esc(L.wa) + '</span>';
    body.appendChild(a);
    body.scrollTop = body.scrollHeight;
  }

  function addChips() {
    var L = t();
    var wrap = document.createElement('div');
    wrap.className = 'ppa-chips';
    L.chips.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ppa-chip';
      b.textContent = c;
      b.addEventListener('click', function () {
        wrap.remove();
        input.value = c;
        send();
      });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  }

  function typing() {
    var d = document.createElement('div');
    d.className = 'ppa-msg ppa-bot';
    d.innerHTML = '<span class="ppa-dots"><i></i><i></i><i></i></span>';
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  }

  /* ── conversation ──────────────────────────────────────────────────────── */
  function paintHistory() {
    body.innerHTML = '';
    if (!history.length) {
      addMsg('bot', t().hello);
      addChips();
      return;
    }
    history.forEach(function (m) { addMsg(m.role === 'user' ? 'me' : 'bot', m.content); });
  }

  function open() {
    if (!body.childNodes.length) paintHistory();
    panel.classList.add('ppa-on');
    setTimeout(function () { if (window.innerWidth > 520) input.focus(); }, 60);
  }

  function close() { panel.classList.remove('ppa-on'); }

  function clearChat() {
    history = [];
    try { localStorage.removeItem(CHAT_KEY); } catch (e) {}
    paintHistory();
  }

  async function send() {
    if (busy) return;
    var text = (input.value || '').trim();
    if (!text) return;
    if (text.length > 1000) text = text.slice(0, 1000);

    input.value = '';
    input.style.height = 'auto';
    var chips = body.querySelector('.ppa-chips');
    if (chips) chips.remove();

    addMsg('me', text);
    remember('user', text);

    busy = true;
    sendBtn.disabled = true;
    var wait = typing();

    var L = t();
    try {
      var res = await fetch(API_BASE + '/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang: API_LANG[lang()] || 'ht', messages: history })
      });
      var data = await res.json();
      wait.remove();

      if (data && data.throttled) {
        addMsg('bot', L.busy);
        addWhatsapp(text);
      } else if (data && data.success && data.reply) {
        addMsg('bot', data.reply);
        remember('assistant', data.reply);
        if (data.handoff) addWhatsapp(text);
      } else {
        addMsg('bot', L.err);
        addWhatsapp(text);
      }
    } catch (err) {
      wait.remove();
      addMsg('bot', L.err);
      addWhatsapp(text);
    }

    busy = false;
    sendBtn.disabled = false;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
