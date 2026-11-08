/* ═══ THE BUYER'S SERVICE FEE, FROM THE SERVER (15 Oct 2026) ════════════════
   The cart, the checkout and the server each worked out "5%" on their own.
   The day the fee changes on the server, a page still saying 5% would show
   the buyer one total and the server would expect another - and the payment
   would be refused after the money had gone. So the pages ask the server
   (GET /api/orders/fees) and use what it says.

   Until the answer arrives the last known value is used (5% the first time),
   and the label is repainted when it lands. The amount actually CHARGED is the
   server's own order total either way - checkout.html confirmOrder().     */
(function () {
  var KEY = 'mpp_fee_pct';
  var pct = 5;
  try { var c = JSON.parse(localStorage.getItem(KEY) || 'null'); if (c && isFinite(c.p)) pct = Number(c.p); } catch (e) {}
  var LBL = { en: 'Service Fee', fr: 'Frais de service', kr: 'Frè Sèvis', es: 'Tarifa de servicio', pt: 'Taxa de serviço' };
  function lang() { try { return localStorage.getItem('myplopplop_lang') || 'fr'; } catch (e) { return 'fr'; } }
  function label() { return (LBL[lang()] || LBL.en) + ' (' + pct + '%)'; }
  function paint() {
    var els = document.querySelectorAll('[data-fee-label]');
    for (var i = 0; i < els.length; i++) els[i].textContent = label();
  }
  var listeners = [];
  window.MPPFees = {
    pct: function () { return pct; },
    fee: function (subtotal) { return Math.round((Number(subtotal) || 0) * pct / 100); },
    label: label,
    paint: paint,
    onChange: function (fn) { listeners.push(fn); }
  };
  fetch('https://myplopplop-api.onrender.com/api/orders/fees', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      var p = Number(j && j.serviceFeePct);
      if (!isFinite(p) || p < 0 || p > 20) return;
      var changed = p !== pct;
      pct = p;
      try { localStorage.setItem(KEY, JSON.stringify({ p: p, at: Date.now() })); } catch (e) {}
      paint();
      if (changed) listeners.forEach(function (fn) { try { fn(pct); } catch (e) {} });
    })
    .catch(function () {});
  /* The language switch rewrites page text; put the fee label back after it. */
  document.addEventListener('DOMContentLoaded', function () {
    paint();
    var sw = window.switchLang;
    if (typeof sw === 'function') {
      window.switchLang = function () { var r = sw.apply(this, arguments); setTimeout(paint, 0); return r; };
    }
  });
})();
