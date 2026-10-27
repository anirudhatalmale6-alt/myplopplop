/* "‹ Retounen sou MsouWout" — the way back for someone who came from MsouWout.
 *
 * Jeffery, 27 Oct: the MsouWout home screen has three buttons, and ACHTE /
 * LIVREZON open MyPlopPlop. "The ACHTE button should continue opening
 * MyPlopPlop, with an easy way to return to MsouWout."
 *
 * MsouWout links here with ?from=msouwout. That is remembered for the tab
 * (sessionStorage), so the bar stays on every page she visits afterwards -
 * shop, cart, checkout, order status - not just the first one. Someone who
 * opened MyPlopPlop directly never sees it.
 *
 * A normal block at the very top of <body>, not position:fixed: it scrolls away
 * with the page instead of sitting over the sticky headers and the bottom nav. */
(function () {
  'use strict';
  if (window.__ppMswReturn) return;
  window.__ppMswReturn = true;

  var KEY = 'pp_from_msouwout';
  try {
    if (/[?&]from=msouwout(&|$)/.test(location.search)) sessionStorage.setItem(KEY, '1');
    if (sessionStorage.getItem(KEY) !== '1') return;
  } catch (e) { return; }

  var TXT = { kr: 'Retounen sou MsouWout', fr: 'Retour à MsouWout', en: 'Back to MsouWout', es: 'Volver a MsouWout' };
  var lang = 'kr';
  try { lang = localStorage.getItem('myplopplop_lang') || 'kr'; } catch (e) {}

  function add() {
    if (document.getElementById('ppMswReturn')) return;
    var a = document.createElement('a');
    a.id = 'ppMswReturn';
    a.href = 'https://msouwout.com/';
    a.setAttribute('style',
      'display:flex;align-items:center;gap:8px;padding:9px 16px;background:#0A0E1A;color:#fff;' +
      'font:700 14px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-decoration:none;' +
      'border-bottom:3px solid #D21034;position:relative;z-index:1000');
    a.innerHTML = '<span style="font-size:20px;line-height:1">‹</span>' +
      '<span>🚕 ' + (TXT[lang] || TXT.kr) + '</span>';
    document.body.insertBefore(a, document.body.firstChild);
  }
  if (document.body) add();
  else document.addEventListener('DOMContentLoaded', add);
})();
