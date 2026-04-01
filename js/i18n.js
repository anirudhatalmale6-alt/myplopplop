/**
 * MyPlopPlop - Internationalization (i18n)
 * Supports: English (en), Haitian Kreyo (kr), French (fr)
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'myplopplop_lang';
  var DEFAULT_LANG = 'en';

  var translations = {

    // ── Top Bar ──
    'topbar.change_location': {
      en: 'Change location',
      kr: 'Chanje lokasyon',
      fr: 'Changer de lieu'
    },

    // ── Bottom Nav ──
    'nav.home': {
      en: 'Home',
      kr: 'Akèy',
      fr: 'Accueil'
    },
    'nav.search': {
      en: 'Search',
      kr: 'Chèche',
      fr: 'Recherche'
    },
    'nav.cart': {
      en: 'Cart',
      kr: 'Panye',
      fr: 'Panier'
    },
    'nav.orders': {
      en: 'Orders',
      kr: 'Kòmand',
      fr: 'Commandes'
    },
    'nav.account': {
      en: 'Account',
      kr: 'Kont',
      fr: 'Compte'
    },

    // ── Footer ──
    'footer.about': {
      en: 'About Us',
      kr: 'Sou Nou',
      fr: 'À Propos'
    },
    'footer.help': {
      en: 'Help Center',
      kr: 'Sant Èd',
      fr: "Centre d'Aide"
    },
    'footer.become_merchant': {
      en: 'Become a Merchant',
      kr: 'Vin yon Machann',
      fr: 'Devenir Marchand'
    },
    'footer.become_rider': {
      en: 'Become a Rider',
      kr: 'Vin yon Livè',
      fr: 'Devenir Livreur'
    },
    'footer.terms': {
      en: 'Terms',
      kr: 'Tèm',
      fr: 'Conditions'
    },
    'footer.privacy': {
      en: 'Privacy',
      kr: 'Konfidansyalite',
      fr: 'Confidentialité'
    },
    'footer.delivery_tagline': {
      en: 'Delivery across Haiti',
      kr: 'Livrezon nan tout Ayiti',
      fr: 'Livraison dans tout Haïti'
    },
    'footer.copyright': {
      en: '© 2026 MyPlopPlop. All rights reserved.',
      kr: '© 2026 MyPlopPlop. Tout dwa rezève.',
      fr: '© 2026 MyPlopPlop. Tous droits réservés.'
    },

    // ── Common Buttons ──
    'btn.order_now': {
      en: 'Order Now',
      kr: 'Kòmande Kounye a',
      fr: 'Commander'
    },
    'btn.search': {
      en: 'Search',
      kr: 'Chèche',
      fr: 'Recherche'
    },
    'btn.see_all': {
      en: 'See all',
      kr: 'Wè tout',
      fr: 'Voir tout'
    },
    'btn.view': {
      en: 'View',
      kr: 'Wè',
      fr: 'Voir'
    },
    'btn.add_to_cart': {
      en: 'Add to Cart',
      kr: 'Mete nan Panye',
      fr: 'Ajouter au Panier'
    },
    'btn.checkout': {
      en: 'Checkout',
      kr: 'Peye',
      fr: 'Payer'
    },
    'btn.back': {
      en: 'Back',
      kr: 'Retounen',
      fr: 'Retour'
    },

    // ── Homepage: Hero ──
    'hero.title': {
      en: "Haiti's First Marketplace",
      kr: 'Premye Makèt Ayiti',
      fr: "Le Premier Marché d'Haïti"
    },
    'hero.description': {
      en: 'Order from restaurants, supermarkets, hardware stores, pharmacies, wholesalers and retailers. Support family and friends in Haiti from anywhere.',
      kr: 'Kòmande nan restoran, sipèmache, kenkayri, famasi, angwo ak detay. Sipòte fanmi ak zanmi nan Ayiti kèlkeswa kote ou ye.',
      fr: 'Commandez dans les restaurants, supermarchés, quincailleries, pharmacies, grossistes et détaillants. Soutenez votre famille et vos amis en Haïti depuis n\'importe où.'
    },
    'hero.search_placeholder': {
      en: 'Search stores, products, or categories...',
      kr: 'Chèche magazen, pwodwi, oswa kategori...',
      fr: 'Rechercher magasins, produits ou catégories...'
    },

    // ── Homepage: Categories ──
    'categories.title': {
      en: 'Categories',
      kr: 'Kategori',
      fr: 'Catégories'
    },

    // ── Homepage: Promo Banner ──
    'promo.title': {
      en: 'Free Delivery on First Order!',
      kr: 'Livrezon Gratis sou Premye Kòmand!',
      fr: 'Livraison Gratuite sur la Première Commande !'
    },

    // ── Homepage: Featured Merchants ──
    'merchants.title': {
      en: 'Featured Merchants',
      kr: 'Machann Vedèt',
      fr: 'Marchands en Vedette'
    },

    // ── Homepage: How It Works ──
    'how.title': {
      en: 'How It Works',
      kr: 'Kijan li Mache',
      fr: 'Comment ça Marche'
    },
    'how.step1': {
      en: 'Browse & Choose',
      kr: 'Gade & Chwazi',
      fr: 'Parcourir & Choisir'
    },
    'how.step2': {
      en: 'Place Order',
      kr: 'Pase Kòmand',
      fr: 'Passer Commande'
    },
    'how.step3': {
      en: 'Fast Delivery',
      kr: 'Livrezon Rapid',
      fr: 'Livraison Rapide'
    },

    // ── Homepage: Diaspora ──
    'diaspora.title': {
      en: 'Support Family in Haiti',
      kr: 'Sipòte Fanmi nan Ayiti',
      fr: 'Soutenez votre Famille en Haïti'
    },
    'diaspora.cta': {
      en: 'Send Support Now',
      kr: 'Voye Sipò Kounye a',
      fr: 'Envoyer du Soutien'
    },

    // ── Homepage: CTA / Join Network ──
    'cta.title': {
      en: 'Join the MyPlopPlop Network',
      kr: 'Rejwenn Rezo MyPlopPlop la',
      fr: 'Rejoignez le Réseau MyPlopPlop'
    },
    'cta.merchant': {
      en: 'Become a Merchant',
      kr: 'Vin yon Machann',
      fr: 'Devenir Marchand'
    },
    'cta.rider': {
      en: 'Become a Rider',
      kr: 'Vin yon Livè',
      fr: 'Devenir Livreur'
    }
  };

  /* ───────────────────────────────────────────────
   * Core translation engine
   * ─────────────────────────────────────────────── */

  /**
   * Get the currently active language.
   * @returns {string} Language code ('en', 'kr', or 'fr')
   */
  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  /**
   * Look up a translation string by key and language.
   * Falls back to English, then returns the key itself.
   * @param {string} key  - Translation key (e.g. 'hero.title')
   * @param {string} lang - Language code
   * @returns {string}
   */
  function t(key, lang) {
    lang = lang || getLang();
    var entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry[DEFAULT_LANG] || key;
  }

  /**
   * Apply all translations to the current page.
   * Looks for elements with [data-i18n] and [data-i18n-placeholder].
   * @param {string} [lang] - Language code; defaults to stored value.
   */
  function applyTranslations(lang) {
    lang = lang || getLang();

    // Translate text content
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      els[i].textContent = t(key, lang);
    }

    // Translate placeholders
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
      placeholders[j].setAttribute('placeholder', t(pKey, lang));
    }

    // Update language switcher active state
    var links = document.querySelectorAll('[data-lang]');
    for (var k = 0; k < links.length; k++) {
      var linkLang = links[k].getAttribute('data-lang');
      if (linkLang === lang) {
        links[k].classList.add('active');
      } else {
        links[k].classList.remove('active');
      }
    }

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
  }

  /**
   * Switch the active language, persist it, and re-render all strings.
   * @param {string} lang - Language code ('en', 'kr', or 'fr')
   */
  function switchLang(lang) {
    if (!lang || !translations['nav.home'][lang]) {
      lang = DEFAULT_LANG;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Storage unavailable — continue with in-memory switch
    }
    applyTranslations(lang);
  }

  /* ───────────────────────────────────────────────
   * Initialization
   * ─────────────────────────────────────────────── */

  /**
   * Bind click handlers to language switcher links ([data-lang])
   * and apply translations on page load.
   */
  function init() {
    // Bind language switcher links
    var links = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        switchLang(this.getAttribute('data-lang'));
      });
    }

    // Apply stored language on load
    applyTranslations();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ───────────────────────────────────────────────
   * Public API
   * ─────────────────────────────────────────────── */
  window.switchLang = switchLang;
  window.MyPlopPlopI18n = {
    t: t,
    getLang: getLang,
    switchLang: switchLang,
    applyTranslations: applyTranslations
  };

})();
