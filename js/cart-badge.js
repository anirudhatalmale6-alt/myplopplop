/* Real cart count on the header and bottom-nav badges.
 *
 * The badges were a literal "2" left over from the design mock-up on twelve
 * pages, and nothing ever changed them. A brand-new phone therefore showed two
 * items sitting in an empty basket. This reads the cart the rest of the site
 * actually writes to, and hides the badge when there is nothing in it.
 */
(function () {
  var KEY = 'myplopplop_cart';

  function count() {
    try {
      var cart = JSON.parse(localStorage.getItem(KEY)) || [];
      if (!Array.isArray(cart)) return 0;
      return cart.reduce(function (n, item) {
        var q = parseInt(item && item.qty, 10);
        return n + (q > 0 ? q : 1);
      }, 0);
    } catch (e) {
      return 0;                       /* corrupt cart reads as empty, not as a crash */
    }
  }

  function paint() {
    var n = count();
    /* scoped to the cart link so a .nav-badge used as a label elsewhere is untouched */
    var els = document.querySelectorAll(
      'a[href="cart.html"] .header-badge, a[href="cart.html"] .nav-badge');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = n > 99 ? '99+' : String(n);
      els[i].style.display = n ? '' : 'none';
    }
  }

  window.mppPaintCartBadge = paint;
  window.addEventListener('storage', function (e) {
    if (!e.key || e.key === KEY) paint();
  });
  window.addEventListener('pageshow', paint);   /* back button restores from cache */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paint);
  } else {
    paint();
  }
})();
