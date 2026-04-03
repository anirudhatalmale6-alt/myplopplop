/**
 * MyPlopPlop - Internationalization (i18n)
 * Supports: French (fr), English (en), Haitian Kreyo (kr), Spanish (es)
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'myplopplop_lang';
  var DEFAULT_LANG = 'kr';

  var translations = {

    // ── Top Bar ──
    'topbar.change_location': {
      fr: 'Changer de lieu',
      en: 'Change location',
      kr: 'Chanje lokasyon',
      es: 'Cambiar ubicación'
    },

    // ── Bottom Nav ──
    'nav.home': {
      fr: 'Accueil',
      en: 'Home',
      kr: 'Akèy',
      es: 'Inicio'
    },
    'nav.search': {
      fr: 'Recherche',
      en: 'Search',
      kr: 'Chèche',
      es: 'Buscar'
    },
    'nav.cart': {
      fr: 'Panier',
      en: 'Cart',
      kr: 'Panye',
      es: 'Carrito'
    },
    'nav.orders': {
      fr: 'Commandes',
      en: 'Orders',
      kr: 'Kòmand',
      es: 'Pedidos'
    },
    'nav.account': {
      fr: 'Compte',
      en: 'Account',
      kr: 'Kont',
      es: 'Cuenta'
    },

    // ── Footer ──
    'footer.about': {
      fr: 'À Propos',
      en: 'About Us',
      kr: 'Sou Nou',
      es: 'Sobre Nosotros'
    },
    'footer.help': {
      fr: "Centre d'Aide",
      en: 'Help Center',
      kr: 'Sant Èd',
      es: 'Centro de Ayuda'
    },
    'footer.become_merchant': {
      fr: 'Devenir Marchand',
      en: 'Become a Merchant',
      kr: 'Vin yon Machann',
      es: 'Ser Comerciante'
    },
    'footer.become_rider': {
      fr: 'Devenir Livreur',
      en: 'Become a Rider',
      kr: 'Vin yon Livè',
      es: 'Ser Repartidor'
    },
    'footer.terms': {
      fr: 'Conditions',
      en: 'Terms',
      kr: 'Tèm',
      es: 'Términos'
    },
    'footer.privacy': {
      fr: 'Confidentialité',
      en: 'Privacy',
      kr: 'Konfidansyalite',
      es: 'Privacidad'
    },
    'footer.delivery_tagline': {
      fr: 'Livraison dans tout Haïti',
      en: 'Delivery across Haiti',
      kr: 'Livrezon nan tout Ayiti',
      es: 'Entregas en todo Haití'
    },
    'footer.copyright': {
      fr: '© 2026 MyPlopPlop. Tous droits réservés.',
      en: '© 2026 MyPlopPlop. All rights reserved.',
      kr: '© 2026 MyPlopPlop. Tout dwa rezève.',
      es: '© 2026 MyPlopPlop. Todos los derechos reservados.'
    },

    // ── Login / Signup ──
    'auth.welcome': {
      fr: 'Bienvenue ! Connectez-vous pour continuer.',
      en: 'Welcome back! Sign in to continue.',
      kr: 'Byenveni! Konekte pou kontinye.',
      es: 'Bienvenido! Inicie sesión para continuar.'
    },
    'auth.login': {
      fr: 'Connexion',
      en: 'Login',
      kr: 'Konekte',
      es: 'Iniciar Sesión'
    },
    'auth.signup': {
      fr: "S'inscrire",
      en: 'Sign Up',
      kr: 'Kreye Kont',
      es: 'Registrarse'
    },
    'auth.phone': {
      fr: 'Numéro de Téléphone',
      en: 'Phone Number',
      kr: 'Nimewo Telefòn',
      es: 'Número de Teléfono'
    },
    'auth.pin': {
      fr: 'PIN / Mot de passe',
      en: 'PIN / Password',
      kr: 'PIN / Modpas',
      es: 'PIN / Contraseña'
    },
    'auth.forgot': {
      fr: 'PIN oublié ?',
      en: 'Forgot PIN?',
      kr: 'Bliye PIN?',
      es: '¿Olvidó su PIN?'
    },
    'auth.login_btn': {
      fr: 'Connexion',
      en: 'Login',
      kr: 'Konekte',
      es: 'Iniciar Sesión'
    },
    'auth.create_account': {
      fr: 'Créer un Compte',
      en: 'Create Account',
      kr: 'Kreye Kont',
      es: 'Crear Cuenta'
    },
    'auth.fullname': {
      fr: 'Nom Complet',
      en: 'Full Name',
      kr: 'Non Konplè',
      es: 'Nombre Completo'
    },
    'auth.create_pin': {
      fr: 'Créer PIN',
      en: 'Create PIN',
      kr: 'Kreye PIN',
      es: 'Crear PIN'
    },
    'auth.confirm_pin': {
      fr: 'Confirmer PIN',
      en: 'Confirm PIN',
      kr: 'Konfime PIN',
      es: 'Confirmar PIN'
    },
    'auth.iam': {
      fr: 'Je suis :',
      en: 'I am a:',
      kr: 'Mwen se:',
      es: 'Soy:'
    },
    'auth.customer': {
      fr: 'Client',
      en: 'Customer',
      kr: 'Kliyan',
      es: 'Cliente'
    },
    'auth.merchant': {
      fr: 'Marchand',
      en: 'Merchant',
      kr: 'Machann',
      es: 'Comerciante'
    },
    'auth.rider': {
      fr: 'Livreur',
      en: 'Rider',
      kr: 'Chofè',
      es: 'Repartidor'
    },
    'auth.google': {
      fr: 'Continuer avec Google',
      en: 'Continue with Google',
      kr: 'Kontinye ak Google',
      es: 'Continuar con Google'
    },
    'auth.facebook': {
      fr: 'Continuer avec Facebook',
      en: 'Continue with Facebook',
      kr: 'Kontinye ak Facebook',
      es: 'Continuar con Facebook'
    },
    'auth.agree_terms': {
      fr: "J'accepte les Conditions d'Utilisation et la Politique de Confidentialité",
      en: 'I agree to the Terms of Service and Privacy Policy',
      kr: 'Mwen dakò ak Kondisyon Sèvis yo ak Règ Konfidansyalite',
      es: 'Acepto los Términos de Servicio y la Política de Privacidad'
    },

    // ── Rides ──
    'rides.request': {
      fr: 'Demander un Trajet',
      en: 'Request a Ride',
      kr: 'Mande yon Transpò',
      es: 'Solicitar un Viaje'
    },
    'rides.where_going': {
      fr: 'Où allez-vous ?',
      en: 'Where are you going?',
      kr: 'Ki kote ou prale?',
      es: '¿A dónde va?'
    },
    'rides.pickup': {
      fr: 'Lieu de départ',
      en: 'Current location',
      kr: 'Kote ou ye a',
      es: 'Ubicación actual'
    },
    'rides.dropoff': {
      fr: 'Destination',
      en: 'Where to?',
      kr: 'Ki kote?',
      es: '¿A dónde?'
    },
    'rides.pickup_dest': {
      fr: 'Départ & Destination',
      en: 'Pickup & Destination',
      kr: 'Kote Depa & Destinasyon',
      es: 'Recogida & Destino'
    },
    'rides.confirm': {
      fr: 'Confirmer',
      en: 'Confirm',
      kr: 'Konfime',
      es: 'Confirmar'
    },
    'rides.fare_estimate': {
      fr: 'Estimation du Tarif',
      en: 'Fare Estimate',
      kr: 'Estimasyon Pri',
      es: 'Estimación de Tarifa'
    },
    'rides.distance': {
      fr: 'Distance',
      en: 'Distance',
      kr: 'Distans',
      es: 'Distancia'
    },
    'rides.base_fare': {
      fr: 'Tarif de base',
      en: 'Base fare',
      kr: 'Pri debaz',
      es: 'Tarifa base'
    },
    'rides.total': {
      fr: 'Total',
      en: 'Total',
      kr: 'Total',
      es: 'Total'
    },
    'rides.track': {
      fr: 'Suivre votre Trajet',
      en: 'Track Your Ride',
      kr: 'Swiv Transpò Ou',
      es: 'Rastrear su Viaje'
    },

    // ── Orders ──
    'orders.title': {
      fr: 'Mes Commandes',
      en: 'My Orders',
      kr: 'Kòmand Mwen yo',
      es: 'Mis Pedidos'
    },
    'orders.subtitle': {
      fr: 'Suivez vos livraisons actives et consultez les commandes passées',
      en: 'Track active deliveries and view past orders',
      kr: 'Swiv livrezon aktif yo epi gade ansyen kòmand yo',
      es: 'Rastree entregas activas y vea pedidos anteriores'
    },
    'orders.active': {
      fr: 'Actives',
      en: 'Active',
      kr: 'Aktif',
      es: 'Activos'
    },
    'orders.completed': {
      fr: 'Terminées',
      en: 'Completed',
      kr: 'Fini',
      es: 'Completados'
    },
    'orders.all': {
      fr: 'Toutes',
      en: 'All',
      kr: 'Tout',
      es: 'Todos'
    },

    // ── Tracking ──
    'tracking.eta': {
      fr: 'Arrivée Estimée',
      en: 'Estimated Arrival',
      kr: 'Lè Ou Dwe Rive',
      es: 'Llegada Estimada'
    },
    'tracking.progress': {
      fr: 'Progrès de la Commande',
      en: 'Order Progress',
      kr: 'Pwogresyon Kòmand',
      es: 'Progreso del Pedido'
    },
    'tracking.report': {
      fr: 'Signaler un Problème',
      en: 'Report Issue',
      kr: 'Rapòte Pwoblèm',
      es: 'Reportar Problema'
    },

    // ── Wallet ──
    'wallet.balance': {
      fr: 'Solde San Cash',
      en: 'San Cash Balance',
      kr: 'Balans San Cash',
      es: 'Saldo San Cash'
    },
    'wallet.topup': {
      fr: 'Recharger',
      en: 'Top Up',
      kr: 'Rechaje',
      es: 'Recargar'
    },
    'wallet.send': {
      fr: 'Envoyer',
      en: 'Send',
      kr: 'Voye',
      es: 'Enviar'
    },
    'wallet.withdraw': {
      fr: 'Retirer',
      en: 'Withdraw',
      kr: 'Retire',
      es: 'Retirar'
    },
    'wallet.recent': {
      fr: 'Transactions Récentes',
      en: 'Recent Transactions',
      kr: 'Dènye Tranzaksyon yo',
      es: 'Transacciones Recientes'
    },

    // ── Driver / Rider ──
    'rider.dashboard': {
      fr: 'Tableau de Bord',
      en: 'Dashboard',
      kr: 'Tablo Kontwòl',
      es: 'Panel de Control'
    },
    'rider.earnings': {
      fr: 'Gains',
      en: 'Earnings',
      kr: 'Revni',
      es: 'Ganancias'
    },
    'rider.go_online': {
      fr: 'Se Mettre en Ligne',
      en: 'Go Online',
      kr: 'Mete An Liy',
      es: 'Ponerse en Línea'
    },
    'rider.go_offline': {
      fr: 'Se Mettre Hors Ligne',
      en: 'Go Offline',
      kr: 'Mete Deyò Liy',
      es: 'Ponerse Fuera de Línea'
    },
    'rider.available_rides': {
      fr: 'Trajets Disponibles',
      en: 'Available Rides',
      kr: 'Transpò Disponib',
      es: 'Viajes Disponibles'
    },
    'rider.recent_deliveries': {
      fr: 'Livraisons Récentes',
      en: 'Recent Deliveries',
      kr: 'Dènye Livrezon yo',
      es: 'Entregas Recientes'
    },

    // ── Common Buttons ──
    'btn.order_now': {
      fr: 'Commander',
      en: 'Order Now',
      kr: 'Kòmande Kounye a',
      es: 'Pedir Ahora'
    },
    'btn.search': {
      fr: 'Recherche',
      en: 'Search',
      kr: 'Chèche',
      es: 'Buscar'
    },
    'btn.see_all': {
      fr: 'Voir tout',
      en: 'See all',
      kr: 'Wè tout',
      es: 'Ver todo'
    },
    'btn.view': {
      fr: 'Voir',
      en: 'View',
      kr: 'Wè',
      es: 'Ver'
    },
    'btn.add_to_cart': {
      fr: 'Ajouter au Panier',
      en: 'Add to Cart',
      kr: 'Mete nan Panye',
      es: 'Agregar al Carrito'
    },
    'btn.checkout': {
      fr: 'Payer',
      en: 'Checkout',
      kr: 'Peye',
      es: 'Pagar'
    },
    'btn.back': {
      fr: 'Retour',
      en: 'Back',
      kr: 'Retounen',
      es: 'Volver'
    },
    'btn.send_support': {
      fr: 'Envoyer du Soutien',
      en: 'Send Support',
      kr: 'Voye Sipò',
      es: 'Enviar Apoyo'
    },

    // ── Homepage: Tags ──
    'tag.restaurants': {
      fr: '🍽️ Restaurants',
      en: '🍽️ Restaurants',
      kr: '🍽️ Restoran',
      es: '🍽️ Restaurantes'
    },
    'tag.supermarkets': {
      fr: '🛒 Supermarchés',
      en: '🛒 Supermarkets',
      kr: '🛒 Sipèmache',
      es: '🛒 Supermercados'
    },
    'tag.hardware': {
      fr: '🔧 Quincailleries',
      en: '🔧 Hardware Stores',
      kr: '🔧 Kenkayri',
      es: '🔧 Ferreterías'
    },
    'tag.pharmacies': {
      fr: '💊 Pharmacies',
      en: '💊 Pharmacies',
      kr: '💊 Famasi',
      es: '💊 Farmacias'
    },
    'tag.wholesale': {
      fr: '📦 Grossistes',
      en: '📦 Wholesale',
      kr: '📦 Angwo',
      es: '📦 Mayoristas'
    },
    'tag.retail': {
      fr: '🏬 Détaillants',
      en: '🏬 Retail',
      kr: '🏬 Detay',
      es: '🏬 Minoristas'
    },

    // ── Homepage: Hero ──
    'hero.title': {
      fr: "Le Premier Marché d'Haïti",
      en: "Haiti's First Marketplace",
      kr: 'Premye Makètplés Ayiti',
      es: 'El Primer Mercado de Haití'
    },
    'hero.description': {
      fr: 'Commandez dans les restaurants, supermarchés, quincailleries, pharmacies, grossistes et détaillants. Soutenez votre famille et vos amis en Haïti depuis n\'importe où.',
      en: 'Order from restaurants, supermarkets, hardware stores, pharmacies, wholesalers and retailers. Support family and friends in Haiti from anywhere.',
      kr: 'Kòmande nan restoran, sipèmache, kenkayri, famasi, angwo ak detay. Sipòte fanmi ak zanmi nan Ayiti kèlkeswa kote ou ye.',
      es: 'Pida en restaurantes, supermercados, ferreterías, farmacias, mayoristas y minoristas. Apoye a su familia y amigos en Haití desde cualquier lugar.'
    },
    'hero.search_placeholder': {
      fr: 'Rechercher magasins, produits ou catégories...',
      en: 'Search stores, products, or categories...',
      kr: 'Chèche magazen, pwodwi, oswa kategori...',
      es: 'Buscar tiendas, productos o categorías...'
    },

    // ── Homepage: Categories ──
    'categories.title': {
      fr: 'Catégories',
      en: 'Categories',
      kr: 'Kategori',
      es: 'Categorías'
    },

    // ── Homepage: Promo Banner ──
    'promo.title': {
      fr: 'Livraison Gratuite sur la Première Commande !',
      en: 'Free Delivery on First Order!',
      kr: 'Livrezon Gratis sou Premye Kòmand!',
      es: '¡Entrega Gratis en el Primer Pedido!'
    },

    // ── Homepage: Featured Merchants ──
    'merchants.title': {
      fr: 'Marchands en Vedette',
      en: 'Featured Merchants',
      kr: 'Machann Vedèt',
      es: 'Comerciantes Destacados'
    },

    // ── Homepage: How It Works ──
    'how.title': {
      fr: 'Comment ça Marche',
      en: 'How It Works',
      kr: 'Kijan li Mache',
      es: 'Cómo Funciona'
    },
    'how.step1': {
      fr: 'Parcourir & Choisir',
      en: 'Browse & Choose',
      kr: 'Gade & Chwazi',
      es: 'Explorar & Elegir'
    },
    'how.step2': {
      fr: 'Passer Commande',
      en: 'Place Order',
      kr: 'Pase Kòmand',
      es: 'Hacer Pedido'
    },
    'how.step3': {
      fr: 'Livraison Rapide',
      en: 'Fast Delivery',
      kr: 'Livrezon Rapid',
      es: 'Entrega Rápida'
    },

    // ── Homepage: Diaspora ──
    'diaspora.title': {
      fr: 'Soutenez votre Famille en Haïti',
      en: 'Support Family in Haiti',
      kr: 'Sipòte Fanmi nan Ayiti',
      es: 'Apoye a su Familia en Haití'
    },
    'diaspora.cta': {
      fr: 'Envoyer du Soutien',
      en: 'Send Support Now',
      kr: 'Voye Sipò Kounye a',
      es: 'Enviar Apoyo Ahora'
    },

    // ── Homepage: CTA / Join Network ──
    'cta.title': {
      fr: 'Rejoignez le Réseau MyPlopPlop',
      en: 'Join the MyPlopPlop Network',
      kr: 'Rejwenn Rezo MyPlopPlop la',
      es: 'Únase a la Red MyPlopPlop'
    },
    'cta.merchant': {
      fr: 'Devenir Marchand',
      en: 'Become a Merchant',
      kr: 'Vin yon Machann',
      es: 'Ser Comerciante'
    },
    'cta.rider': {
      fr: 'Devenir Livreur',
      en: 'Become a Rider',
      kr: 'Vin yon Livè',
      es: 'Ser Repartidor'
    }
  };

  /* ───────────────────────────────────────────────
   * Core translation engine
   * ─────────────────────────────────────────────── */

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function t(key, lang) {
    lang = lang || getLang();
    var entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry[DEFAULT_LANG] || key;
  }

  function applyTranslations(lang) {
    lang = lang || getLang();

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      els[i].textContent = t(key, lang);
    }

    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
      placeholders[j].setAttribute('placeholder', t(pKey, lang));
    }

    var links = document.querySelectorAll('[data-lang]');
    for (var k = 0; k < links.length; k++) {
      var linkLang = links[k].getAttribute('data-lang');
      if (linkLang === lang) {
        links[k].classList.add('active');
      } else {
        links[k].classList.remove('active');
      }
    }

    document.documentElement.setAttribute('lang', lang);
  }

  function switchLang(lang) {
    if (!lang || !translations['nav.home'][lang]) {
      lang = DEFAULT_LANG;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyTranslations(lang);
  }

  /* ───────────────────────────────────────────────
   * Initialization
   * ─────────────────────────────────────────────── */

  function init() {
    var links = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        switchLang(this.getAttribute('data-lang'));
      });
    }
    applyTranslations();
  }

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
