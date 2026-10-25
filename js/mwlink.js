/* 24 Oct 2026 - ONE DRIVER: a delivery profile linked to the driver's MsouWout
   record. The approver sees what MsouWout holds (name, licence, vehicle) and
   opens each document, fetched live from MsouWout through our server - the
   decision is taken with the photo and the licence in front of him.
   Needs js/api.js (API.request). */
(function (global) {
  var DOC = { selfie: 'Selfie', id: 'Kat idantite', license: 'Lisans', oavct: 'OAVCT', vehicle: 'Machin', insurance: 'Asirans' };
  function e(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function block(d) {
    var m = d && d.msouwout;
    if (!m || !m.driverId) return '';
    var docs = (m.documents || []);
    return '<div style="margin:8px 0;padding:10px;border:2px solid #00209F;border-radius:10px;background:#eef3ff;font-size:13px;line-height:1.5">' +
      '<b>🔗 Chofè MsouWout #' + e(String(m.driverId).slice(0, 8)) + '</b> — idantite a soti nan MsouWout (pa gen 2yèm enskripsyon)<br>' +
      'Non sou MsouWout: <b>' + e(m.fullName) + '</b> ' + (m.nameMatches ? '<span style="color:#0f7a3d">✅ menm non</span>'
        : '<span style="color:#b91c1c;font-weight:800">⚠️ non an diferan — verifye</span>') + '<br>' +
      'Lisans: ' + e(m.licenseNumber || '—') + (m.vehicle ? ' · ' + e(m.vehicle) : '') + '<br>' +
      (docs.length ? 'Dokiman: ' + docs.map(function (t) {
          return '<button type="button" data-mwdoc="' + e(d._id) + '" data-mwt="' + e(t) + '" style="margin:3px 4px 0 0;padding:5px 9px;border:1px solid #00209F;border-radius:8px;background:#fff;color:#00209F;font-weight:700;cursor:pointer">' + e(DOC[t] || t) + '</button>';
        }).join('')
        : '<span style="color:#b91c1c;font-weight:700">⚠️ MsouWout pa gen okenn dokiman pou chofè sa a</span>') +
      '</div>';
  }
  function show(src, title) {
    var o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px';
    o.innerHTML = '<div style="color:#fff;font-weight:700;margin-bottom:8px">' + e(title) + ' — peze pou fèmen</div>' +
      (src ? '<img src="' + e(src) + '" style="max-width:100%;max-height:85vh;border-radius:8px;background:#fff">' : '<div style="color:#fff">Pa disponib</div>');
    o.onclick = function () { o.remove(); };
    document.body.appendChild(o);
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-mwdoc]');
    if (!b) return;
    var t = b.getAttribute('data-mwt');
    b.disabled = true; var lbl = b.textContent; b.textContent = '…';
    API.request('GET', '/api/admin/drivers/' + encodeURIComponent(b.getAttribute('data-mwdoc')) + '/msouwout-doc/' + encodeURIComponent(t))
      .then(function (r) { show(r && r.success ? r.dataUrl : '', DOC[t] || t); })
      .catch(function () { show('', DOC[t] || t); })
      .then(function () { b.disabled = false; b.textContent = lbl; });
  });
  global.MWLINK = { block: block };
})(window);
