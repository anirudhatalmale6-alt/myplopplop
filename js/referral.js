/* Remember the LajanMaker agent who sent this person here.
 *
 * An agent hands out a link like myplopplop.com/?ref=KB-JEA1234, or writes the
 * code on a flyer. The person taps it, looks around for a while, and only
 * signs up three pages later - by which time the ?ref= is long gone from the
 * address bar. Every registration form on the site used to lose it exactly
 * that way, so no agent was ever credited with anybody.
 *
 * So: grab it the moment any page loads, keep it, and hand it to whichever
 * form the person eventually fills in. The server decides whether it is a real
 * code and only ever writes one agent per person, so keeping a stale code here
 * is harmless - the first agent to sign somebody up is the one who keeps them.
 */
(function (w) {
  var KEY = 'pp_agent_code';
  var SEEN = 'pp_agent_seen';           // when we first saw it, for support questions

  function clean(v) {
    if (!v) return '';
    return String(v).trim().toUpperCase().replace(/\s+/g, '').slice(0, 32);
  }

  function capture() {
    try {
      var q = new URLSearchParams(w.location.search);
      // Agents' links have been written every one of these ways over time.
      var code = clean(q.get('ref') || q.get('agent') || q.get('koutye') || q.get('kb'));
      if (!code) return;
      // Only overwrite an existing code with a different real one, so a person
      // who re-opens an old link does not silently change who referred them
      // before they have signed up.
      if (!w.localStorage.getItem(KEY)) {
        w.localStorage.setItem(KEY, code);
        w.localStorage.setItem(SEEN, new Date().toISOString());
      }
    } catch (e) { /* private browsing, or storage full - not worth breaking a page over */ }
  }

  function code() {
    try { return w.localStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }

  function clear() {
    try { w.localStorage.removeItem(KEY); w.localStorage.removeItem(SEEN); } catch (e) {}
  }

  capture();
  w.Referral = { code: code, clear: clear, capture: capture };
})(window);
