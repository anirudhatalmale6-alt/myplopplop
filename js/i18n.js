/**
 * MyPlopPlop - Internationalization (i18n)
 * Supports: French (fr), English (en), Haitian Kreyo (kr), Spanish (es)
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'myplopplop_lang';
  var DEFAULT_LANG = 'kr';

  var translations = {

    // ── Store Page Tabs ──
    'store.products': {
      fr: 'Produits',
      en: 'Products',
      kr: 'Pwodwi',
      es: 'Productos'
    },
    'store.about': {
      fr: 'À Propos',
      en: 'About',
      kr: 'Enfòmasyon',
      es: 'Acerca de'
    },
    'store.reviews': {
      fr: 'Avis',
      en: 'Reviews',
      kr: 'Kòmantè',
      es: 'Reseñas'
    },

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
    'rides.drive_with_us': {
      fr: 'Conduisez avec Nous',
      en: 'Drive with Us',
      kr: 'Kondwi avèk Nou',
      es: 'Conduzca con Nosotros'
    },
    'rides.request_pataj': {
      fr: 'Demander un Trajet Pataj',
      en: 'Request a Pataj Ride',
      kr: 'Mande yon Transpò Pataj',
      es: 'Solicitar un Viaje Pataj'
    },
    'rides.savings_callout': {
      fr: 'Économisez jusqu\'à 60% avec PlopPlop Pataj',
      en: 'Save up to 60% with PlopPlop Pataj vs riding alone',
      kr: 'Ekonomize sou transpò',
      es: 'Ahorre hasta 60% con PlopPlop Pataj vs viajar solo'
    },
    'rides.start_driving': {
      fr: 'Commencez à Conduire →',
      en: 'Start Driving →',
      kr: 'Kòmanse Kondwi →',
      es: 'Empiece a Conducir →'
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
    'btn.signup_free': {
      fr: 'Inscrivez-vous Gratuitement',
      en: 'Sign Up For Free',
      kr: 'Enskri Gratis',
      es: 'Regístrese Gratis'
    },
    'btn.order_now': {
      fr: 'Commander',
      en: 'Order Now',
      kr: 'Kòmande Kounye a',
      es: 'Pedir Ahora'
    },
    'btn.support_family': {
      fr: 'Soutenir Ma Famille',
      en: 'Support Family',
      kr: 'Sipòte Fanmiw',
      es: 'Apoyar Familia'
    },
    'btn.ride_taxi': {
      fr: 'Taxi/Moto En Securite',
      en: 'Request Taxi/Moto Safely',
      kr: 'Mande Taxi/Moto An Sekirite',
      es: 'Pedir Taxi/Moto Seguro'
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
      kr: 'Premye Makètples Ayiti',
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
      fr: '🎉 15% de réduction sur votre première livraison !',
      en: '🎉 15% off your first delivery!',
      kr: '🎉 15% rabè sou premye livrezon ou!',
      es: '🎉 ¡15% de descuento en tu primera entrega!'
    },
    'promo.desc': {
      fr: 'Utilisez le code : <strong>FIRST15</strong> au paiement.',
      en: 'Use code: <strong>FIRST15</strong> at checkout.',
      kr: 'Itilize kòd: <strong>FIRST15</strong> lè ou peye.',
      es: 'Usa el código: <strong>FIRST15</strong> al pagar.'
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
    'how.step1_desc': {
      fr: 'Parcourez restaurants, supermarchés, pharmacies et plus encore près de chez vous.',
      en: 'Browse restaurants, supermarkets, pharmacies and more near you.',
      kr: 'Gade restoran, sipèmache, famasi ak plis ankò tou pre ou.',
      es: 'Explore restaurantes, supermercados, farmacias y más cerca de usted.'
    },
    'how.step2_desc': {
      fr: 'Payez avec le portefeuille San Cash, carte de crédit ou carte de débit. Rapide et sécurisé.',
      en: 'Pay with San Cash wallet, credit card, or debit card. Quick and secure.',
      kr: 'Peye ak bous San Cash, kat kredi, oswa kat debi. Rapid epi an sekirite.',
      es: 'Pague con billetera San Cash, tarjeta de crédito o tarjeta de débito. Rápido y seguro.'
    },
    'how.step3_desc': {
      fr: 'Suivez votre livraison en temps réel. Votre livreur vous l\'apporte directement à votre porte.',
      en: 'Track your delivery in real time. Your rider brings it right to your door.',
      kr: 'Swiv livrezon ou an tan reyèl. Livè ou a pote l dirèkteman nan pòt ou.',
      es: 'Rastree su entrega en tiempo real. Su repartidor la lleva directo a su puerta.'
    },

    // ── Homepage: Referral Program ──
    'ref.title': {
      fr: 'Gagnez du Cash 💰 avec les Parrainages !',
      en: 'Earn Cash 💰 with Referrals!',
      kr: 'Touche Lajan 💰 ak Rekòmandasyon!',
      es: '¡Gana Dinero 💰 con Referencias!'
    },
    'ref.desc': {
      fr: 'Devenez ambassadeur ! Gagnez <strong>10% sur chaque package</strong> et <strong>10% sur les frais de plateforme</strong> des personnes que vous parrainez !',
      en: 'Become an ambassador! Earn <strong>10% on every package</strong> and <strong>10% on platform fees</strong> from people you refer!',
      kr: 'Vin yon anbasadè! Touche <strong>10% sou chak pakè</strong> ak <strong>10% sou frè platfòm</strong> moun ou rekòmande yo!',
      es: '¡Conviertete en embajador! Gana <strong>10% en cada paquete</strong> y <strong>10% en tarifas de plataforma</strong> de personas que refieras!'
    },
    'ref.card1_title': {
      fr: 'Packages 48HoursReady',
      en: '48HoursReady Packages',
      kr: 'Pakè 48HoursReady',
      es: 'Paquetes 48HoursReady'
    },
    'ref.card1_desc': {
      fr: 'Gagnez 10% sur chaque package acheté par une personne que vous avez parrainée !',
      en: 'Earn 10% on every package purchased by someone you referred!',
      kr: 'Touche 10% sou chak pakè yon moun ou te rekòmande achte!',
      es: '¡Gana 10% en cada paquete comprado por alguien que referiste!'
    },
    'ref.card2_title': {
      fr: 'Frais de Plateforme',
      en: 'Platform Fees',
      kr: 'Frè Platfòm',
      es: 'Tarifas de Plataforma'
    },
    'ref.card2_desc': {
      fr: 'Gagnez 10% sur tous les frais de plateforme de vos filleuls pendant 3 mois !',
      en: 'Earn 10% on all platform fees from your referrals for 3 months!',
      kr: 'Touche 10% sou tout frè platfòm moun ou rekòmande yo pandan 3 mwa!',
      es: '¡Gana 10% en todas las tarifas de plataforma de tus referidos por 3 meses!'
    },
    'ref.learn_more': {
      fr: 'En Savoir Plus',
      en: 'Learn More',
      kr: 'Aprann Plis',
      es: 'Más Información'
    },
    'ref.hero_title': {
      fr: 'Gagnez du Cash 💰',
      en: 'Earn Cash 💰',
      kr: 'Touche Lajan 💰',
      es: 'Gana Dinero 💰'
    },
    'ref.hero_sub': {
      fr: 'Invitez des amis et gagnez 10% sur chaque transaction !',
      en: 'Invite friends and earn 10% on every transaction!',
      kr: 'Envite zanmi epi touche 10% sou chak tranzaksyon!',
      es: '¡Invita amigos y gana 10% en cada transaccion!'
    },
    'ref.hero_btn': {
      fr: 'Partager',
      en: 'Share Now',
      kr: 'Pataje Kounye a',
      es: 'Compartir'
    },

    // ── Homepage: Sol (ROSCA) ──
    'sol.badge': {
      fr: 'Nouvelle Fonctionnalite',
      en: 'New Feature',
      kr: 'Nouvo Fonksyon',
      es: 'Nueva Funcion'
    },
    'sol.title': {
      fr: 'Sòl - Pool d\'Argent Numerique',
      en: 'Sòl - Digital Money Pool',
      kr: 'Sòl - Pil Lajan Nimerik',
      es: 'Sòl - Pool de Dinero Digital'
    },
    'sol.desc': {
      fr: 'Le Sòl haitien traditionnel (ROSCA) est maintenant numerique sur MyPlopPlop ! Epargnez ensemble avec vos amis, votre famille ou votre communaute. Tout le monde contribue, tout le monde gagne.',
      en: 'The traditional Haitian Sòl (ROSCA) is now digital on MyPlopPlop! Save together with friends, family, or your community. Everyone contributes, everyone wins.',
      kr: 'Sòl tradisyonèl ayisyen an (ROSCA) kounye a dijital sou MyPlopPlop! Mete lajan ansanm ak zanmi, fanmi, oswa kominote ou. Tout moun kontribye, tout moun genyen.',
      es: 'El Sòl haitiano tradicional (ROSCA) ahora es digital en MyPlopPlop! Ahorra junto con amigos, familia o tu comunidad. Todos contribuyen, todos ganan.'
    },
    'sol.s1_title': {
      fr: 'Creer un Groupe',
      en: 'Create a Group',
      kr: 'Kreye yon Gwoup',
      es: 'Crear un Grupo'
    },
    'sol.s1_desc': {
      fr: 'Lancez un Sòl avec 5-20 membres. Definissez le montant et la frequence (hebdomadaire ou mensuel).',
      en: 'Start a Sòl with 5-20 members. Set the contribution amount and frequency (weekly or monthly).',
      kr: 'Komanse yon Sòl ak 5-20 manm. Fikse montan an ak frekans lan (chak semèn oswa chak mwa).',
      es: 'Inicia un Sòl con 5-20 miembros. Define el monto y la frecuencia (semanal o mensual).'
    },
    'sol.s2_title': {
      fr: 'Tout le Monde Contribue',
      en: 'Everyone Contributes',
      kr: 'Tout Moun Kontribye',
      es: 'Todos Contribuyen'
    },
    'sol.s2_desc': {
      fr: 'Chaque membre paie sa part a temps. Suivi transparent pour que tout le monde voie le solde du pool.',
      en: 'Each member pays their share on time. Transparent tracking so everyone can see the pool balance.',
      kr: 'Chak manm peye pa yo a tan. Swivi transparan pou tout moun ka wè balans pil la.',
      es: 'Cada miembro paga su parte a tiempo. Seguimiento transparente para que todos vean el saldo del pool.'
    },
    'sol.s3_title': {
      fr: 'Prenez Votre Tour',
      en: 'Take Your Turn',
      kr: 'Pran Tou Ou',
      es: 'Toma Tu Turno'
    },
    'sol.s3_desc': {
      fr: 'Chaque tour, un membre recoit le pot complet. Depensez-le sur MyPlopPlop ou retirez !',
      en: 'Each round, one member receives the full pot. Spend it on MyPlopPlop or cash out!',
      kr: 'Chak tou, yon manm resevwa tout lajan an. Depanse li sou MyPlopPlop oswa retire li!',
      es: 'Cada ronda, un miembro recibe el total. Gastalo en MyPlopPlop o retiralo!'
    },
    'sol.f1': {
      fr: 'Securise & Transparent',
      en: 'Secure & Transparent',
      kr: 'Sekirize & Transparan',
      es: 'Seguro & Transparente'
    },
    'sol.f2': {
      fr: 'Suivre Chaque Paiement',
      en: 'Track Every Payment',
      kr: 'Swiv Chak Peman',
      es: 'Rastrear Cada Pago'
    },
    'sol.f3': {
      fr: 'Diaspora Bienvenue',
      en: 'Diaspora Welcome',
      kr: 'Dyaspora Byenveni',
      es: 'Diaspora Bienvenida'
    },
    'sol.cta': {
      fr: 'Rejoindre un Sòl Aujourd\'hui',
      en: 'Join a Sòl Today',
      kr: 'Rejwenn yon Sòl Jodi a',
      es: 'Unete a un Sòl Hoy'
    },
    'sol.cta_title': {
      fr: 'Sòl — Epargne Collective Digitale',
      en: 'Sòl — Digital Community Savings',
      kr: 'Sòl — Lajan Kolektif Dijital',
      es: 'Sòl — Ahorro Colectivo Digital'
    },
    'sol.cta_sub': {
      fr: 'Epargnez ensemble. Rejoignez un Sòl aujourd\'hui.',
      en: 'Save together. Join a Sòl today.',
      kr: 'Ekonomize ansanm. Antre nan yon Sòl jodi a.',
      es: 'Ahorra junto. Unete a un Sòl hoy.'
    },

    // ── Merchant CTA ──
    'merchant.cta_title': {
      fr: 'Vous avez un commerce ? Vendez sur MyPlopPlop !',
      en: 'Got a business? Sell on MyPlopPlop!',
      kr: 'Ou gen yon biznis? Vann sou MyPlopPlop!',
      es: 'Tienes un negocio? Vende en MyPlopPlop!'
    },
    'merchant.cta_sub': {
      fr: 'Inscrivez votre boutique gratuitement. Vendez en quelques minutes.',
      en: 'List your store free. Start selling in minutes.',
      kr: 'Mete boutik ou gratis. Kòmanse vann nan kèk minit.',
      es: 'Lista tu tienda gratis. Empieza a vender en minutos.'
    },
    'msouwout.cta_title': {
      fr: 'MsouWout — Taxi & Livraison',
      en: 'MsouWout — Taxi & Delivery',
      kr: 'MsouWout — Taxi & Livrezon',
      es: 'MsouWout — Taxi & Entregas'
    },
    'msouwout.cta_sub': {
      fr: 'Taxi, moto et livraison en toute securite.',
      en: 'Taxi, moto and delivery in safety.',
      kr: 'Mande kous ou oswa livrezon an sekirite.',
      es: 'Taxi, moto y entregas con seguridad.'
    },

    // ── Store Designer ──
    'hero.start_btn': {
      fr: 'Commencez a Creer Votre Boutique',
      en: 'Start Building Your Store',
      kr: 'Komanse Bati Boutik Ou',
      es: 'Empieza a Crear Tu Tienda'
    },

    // ── Help Page ──
    'help.title': {
      fr: 'Comment pouvons-nous vous aider ?',
      en: 'How can we help?',
      kr: 'Kijan nou ka ede ou?',
      es: 'Como podemos ayudarte?'
    },
    'help.sub': {
      fr: 'Cherchez dans notre centre d\'aide ou parcourez les sujets ci-dessous',
      en: 'Search our help center or browse common topics below',
      kr: 'Chèche nan sant èd nou oswa gade sijè yo anba a',
      es: 'Busca en nuestro centro de ayuda o navega los temas abajo'
    },
    'help.search': {
      fr: 'Chercher de l\'aide...',
      en: 'Search for help...',
      kr: 'Chèche èd...',
      es: 'Buscar ayuda...'
    },
    'help.cat1': { fr: 'Commandes & Livraison', en: 'Orders & Delivery', kr: 'Komand & Livrezon', es: 'Pedidos & Entrega' },
    'help.cat1d': { fr: 'Suivre, annuler, problemes', en: 'Track, cancel, issues', kr: 'Swiv, anile, pwoblem', es: 'Rastrear, cancelar, problemas' },
    'help.cat2': { fr: 'Paiements & Portefeuille', en: 'Payments & Wallet', kr: 'Peman & Bous', es: 'Pagos & Billetera' },
    'help.cat2d': { fr: 'Payer, remboursements, San Cash', en: 'Pay, refunds, San Cash', kr: 'Peye, ranbousman, San Cash', es: 'Pagar, reembolsos, San Cash' },
    'help.cat3': { fr: 'Compte & Profil', en: 'Account & Profile', kr: 'Kont & Pwofil', es: 'Cuenta & Perfil' },
    'help.cat3d': { fr: 'Connexion, parametres, PIN', en: 'Login, settings, PIN', kr: 'Konekte, paramèt, PIN', es: 'Iniciar sesion, ajustes, PIN' },
    'help.cat4': { fr: 'Marchands & Livreurs', en: 'Merchant & Rider', kr: 'Machann & Livè', es: 'Comerciante & Repartidor' },
    'help.cat4d': { fr: 'Rejoindre, revenus, support', en: 'Join, earnings, support', kr: 'Rejwenn, revni, sipò', es: 'Unirse, ganancias, soporte' },
    'help.faq': { fr: 'Questions Frequentes', en: 'Frequently Asked Questions', kr: 'Kesyon Moun Poze Souvan', es: 'Preguntas Frecuentes' },
    'help.q1': { fr: 'Comment passer une commande ?', en: 'How do I place an order?', kr: 'Kijan mwen ka pase yon komand?', es: 'Como hago un pedido?' },
    'help.q2': { fr: 'Quels modes de paiement sont acceptes ?', en: 'What payment methods are accepted?', kr: 'Ki metod peman yo aksepte?', es: 'Que metodos de pago se aceptan?' },
    'help.q3': { fr: 'Comment fonctionne le portefeuille San Cash ?', en: 'How does San Cash wallet work?', kr: 'Kijan bous San Cash la mache?', es: 'Como funciona la billetera San Cash?' },
    'help.q4': { fr: 'Puis-je commander pour quelqu\'un d\'autre en Haiti ?', en: 'Can I order for someone else in Haiti?', kr: 'Eske mwen ka komande pou yon lot moun nan Ayiti?', es: 'Puedo pedir para alguien mas en Haiti?' },
    'help.q5': { fr: 'Comment devenir marchand ?', en: 'How do I become a merchant?', kr: 'Kijan mwen ka vin yon machann?', es: 'Como me convierto en comerciante?' },
    'help.q6': { fr: 'Comment devenir livreur ?', en: 'How do I become a delivery rider?', kr: 'Kijan mwen ka vin yon livè?', es: 'Como me convierto en repartidor?' },
    'help.q7': { fr: 'Quel est le frais de livraison ?', en: 'What is the delivery fee?', kr: 'Konbyen frè livrezon an ye?', es: 'Cual es la tarifa de entrega?' },
    'help.q8': { fr: 'Comment suivre ma commande ?', en: 'How do I track my order?', kr: 'Kijan mwen ka swiv komand mwen an?', es: 'Como rastreo mi pedido?' },
    'help.q9': { fr: 'Comment obtenir un remboursement ?', en: 'How do I get a refund?', kr: 'Kijan mwen ka jwenn yon ranbousman?', es: 'Como obtengo un reembolso?' },
    'help.q10': { fr: 'Comment fonctionne le programme de parrainage ?', en: 'How does the referral program work?', kr: 'Kijan pwogram rekomandasyon an mache?', es: 'Como funciona el programa de referencias?' },
    'help.q11': { fr: 'Comment contacter le support ?', en: 'How do I contact support?', kr: 'Kijan mwen ka kontakte sipò?', es: 'Como contacto al soporte?' },

    // ── Homepage: Diaspora ──
    'diaspora.title': {
      fr: 'Soutenez votre Famille en Haïti <span>Depuis N\'importe Où</span>',
      en: 'Support Your Family in Haiti <span>From Anywhere</span>',
      kr: 'Sipòte Fanmi Ou nan Ayiti <span>Kèlkeswa Kote Ou Ye</span>',
      es: 'Apoye a su Familia en Haití <span>Desde Cualquier Lugar</span>'
    },
    'diaspora.cta': {
      fr: 'Envoyer du Soutien',
      en: 'Send Support Now',
      kr: 'Voye Sipò Kounye a',
      es: 'Enviar Apoyo Ahora'
    },
    'diaspora.desc': {
      fr: 'Vous vivez à l\'étranger ? Achetez des courses, des médicaments et des produits essentiels pour votre famille et vos amis en Haïti. Ils reçoivent la livraison, vous gérez le paiement depuis n\'importe où dans le monde.',
      en: 'Living abroad? Buy groceries, medicine, and essentials for your family and friends in Haiti. They receive the delivery, you handle the payment from anywhere in the world.',
      kr: 'Ou ap viv aletranje? Achte pwovizyon, medikaman, ak bagay esansyèl pou fanmi ak zanmi ou nan Ayiti. Yo resevwa livrezon an, ou jere peman an kèlkeswa kote ou ye nan mond lan.',
      es: '¿Vive en el extranjero? Compre alimentos, medicinas y productos esenciales para su familia y amigos en Haití. Ellos reciben la entrega, usted maneja el pago desde cualquier parte del mundo.'
    },
    'diaspora.trust1': {
      fr: 'Marchands vérifiés',
      en: 'Verified merchants',
      kr: 'Machann verifye',
      es: 'Comerciantes verificados'
    },
    'diaspora.trust2': {
      fr: 'Paiement sécurisé',
      en: 'Secure checkout',
      kr: 'Peman an sekirite',
      es: 'Pago seguro'
    },
    'diaspora.trust3': {
      fr: 'Suivi en temps réel',
      en: 'Real-time tracking',
      kr: 'Swivi an tan reyèl',
      es: 'Seguimiento en tiempo real'
    },
    'diaspora.trust4': {
      fr: 'Support client',
      en: 'Customer support',
      kr: 'Sipò kliyan',
      es: 'Soporte al cliente'
    },
    'diaspora.title_span': {
      fr: 'Depuis N\'importe Où',
      en: 'From Anywhere',
      kr: 'Kèlkeswa Kote Ou Ye',
      es: 'Desde Cualquier Lugar'
    },
    'diaspora.get_started': {
      fr: 'Commencer →',
      en: 'Get Started →',
      kr: 'Kòmanse →',
      es: 'Comenzar →'
    },
    'diaspora.how_title': {
      fr: 'Comment Ça Marche',
      en: 'How It Works',
      kr: 'Kijan Li Mache',
      es: 'Cómo Funciona'
    },
    'diaspora.step1_title': {
      fr: 'Ajouter un Destinataire',
      en: 'Add Recipient',
      kr: 'Ajoute Destinatè',
      es: 'Agregar Destinatario'
    },
    'diaspora.step1_desc': {
      fr: 'Enregistrez le nom, l\'adresse et le numéro de téléphone de votre proche en Haïti.',
      en: 'Save your family member or friend\'s name, address, and phone number in Haiti.',
      kr: 'Anrejistre non, adrès, ak nimewo telefòn fanmi oswa zanmi ou nan Ayiti.',
      es: 'Guarde el nombre, dirección y número de teléfono de su familiar o amigo en Haití.'
    },
    'diaspora.step2_title': {
      fr: 'Choisir un Magasin',
      en: 'Choose a Store',
      kr: 'Chwazi yon Magazen',
      es: 'Elegir una Tienda'
    },
    'diaspora.step2_desc': {
      fr: 'Parcourez les supermarchés, pharmacies et autres magasins vérifiés près de votre destinataire.',
      en: 'Browse verified supermarkets, pharmacies, and other stores near your recipient.',
      kr: 'Gade sipèmache, famasi, ak lòt magazen verifye tou pre destinatè ou a.',
      es: 'Explore supermercados, farmacias y otras tiendas verificadas cerca de su destinatario.'
    },
    'diaspora.step3_title': {
      fr: 'Payer par Carte',
      en: 'Pay by Card',
      kr: 'Peye ak Kat',
      es: 'Pagar con Tarjeta'
    },
    'diaspora.step3_desc': {
      fr: 'Payez en toute sécurité avec votre carte de crédit, débit, ou portefeuille San Cash depuis l\'étranger.',
      en: 'Pay securely with your credit card, debit card, or San Cash wallet from abroad.',
      kr: 'Peye an sekirite ak kat kredi, kat debi, oswa bous San Cash ou depi aletranje.',
      es: 'Pague de forma segura con su tarjeta de crédito, débito, o billetera San Cash desde el extranjero.'
    },
    'diaspora.step4_title': {
      fr: 'Ils Reçoivent la Livraison',
      en: 'They Receive Delivery',
      kr: 'Yo Resevwa Livrezon',
      es: 'Ellos Reciben la Entrega'
    },
    'diaspora.step4_desc': {
      fr: 'Votre destinataire reçoit les articles livrés à sa porte. Suivez en temps réel.',
      en: 'Your recipient gets the items delivered right to their door. Track it in real time.',
      kr: 'Destinatè ou a resevwa atik yo livre dirèkteman nan pòt li. Swiv li an tan reyèl.',
      es: 'Su destinatario recibe los artículos entregados en su puerta. Rastreo en tiempo real.'
    },
    'diaspora.why_title': {
      fr: 'Pourquoi les Familles Font Confiance à MyPlopPlop',
      en: 'Why Families Trust MyPlopPlop',
      kr: 'Poukisa Fanmi yo Fè Konfyans ak MyPlopPlop',
      es: 'Por Qué las Familias Confían en MyPlopPlop'
    },
    'diaspora.trust1_desc': {
      fr: 'Chaque magasin est vérifié. Vous savez exactement où va votre argent.',
      en: 'Every store is vetted and verified. You know exactly where your money goes.',
      kr: 'Chak magazen verifye. Ou konnen egzakteman kote lajan ou ale.',
      es: 'Cada tienda está verificada. Usted sabe exactamente dónde va su dinero.'
    },
    'diaspora.trust2_desc': {
      fr: 'Chiffrement bancaire pour protéger vos données de paiement. Payez en confiance.',
      en: 'Bank-level encryption protects your payment details. Pay with confidence.',
      kr: 'Kriptaj nivo bank pwoteje detay peman ou. Peye ak konfyans.',
      es: 'Cifrado bancario protege sus datos de pago. Pague con confianza.'
    },
    'diaspora.trust3_desc': {
      fr: 'Suivez chaque livraison du magasin à la porte. Sachez exactement quand elle arrive.',
      en: 'Follow every delivery from store to door. Know exactly when it arrives.',
      kr: 'Swiv chak livrezon depi magazen rive nan pòt. Konnen egzakteman kilè li rive.',
      es: 'Siga cada entrega desde la tienda hasta la puerta. Sepa exactamente cuándo llega.'
    },
    'diaspora.trust4_desc': {
      fr: 'Notre équipe parle anglais, français et créole. Nous sommes là pour vous aider.',
      en: 'Our team speaks English, French, and Kreyol. We are here to help anytime.',
      kr: 'Ekip nou an pale angle, fransè, ak kreyòl. Nou la pou ede ou nenpòt lè.',
      es: 'Nuestro equipo habla inglés, francés y criollo. Estamos aquí para ayudar en cualquier momento.'
    },
    'diaspora.categories_title': {
      fr: 'Catégories Essentielles',
      en: 'Essential Categories',
      kr: 'Kategori Esansyèl',
      es: 'Categorías Esenciales'
    },
    'diaspora.categories_desc': {
      fr: 'Les catégories les plus populaires pour soutenir votre famille',
      en: 'The most popular categories for supporting family back home',
      kr: 'Kategori ki pi popilè pou sipòte fanmi lakay',
      es: 'Las categorías más populares para apoyar a la familia'
    },
    'diaspora.cat_super': {
      fr: 'Supermarchés',
      en: 'Supermarkets',
      kr: 'Sipèmache',
      es: 'Supermercados'
    },
    'diaspora.cat_super_desc': {
      fr: 'Riz, haricots, huile, et tous les essentiels dont votre famille a besoin',
      en: 'Rice, beans, oil, and all the essentials your family needs',
      kr: 'Diri, pwa, lwil, ak tout bagay esansyèl fanmi ou bezwen',
      es: 'Arroz, frijoles, aceite y todos los esenciales que su familia necesita'
    },
    'diaspora.cat_pharma': {
      fr: 'Pharmacies',
      en: 'Pharmacies',
      kr: 'Famasi',
      es: 'Farmacias'
    },
    'diaspora.cat_pharma_desc': {
      fr: 'Médicaments, vitamines, premiers soins et produits de santé',
      en: 'Medicine, vitamins, first aid, and health products',
      kr: 'Medikaman, vitamin, premye swen, ak pwodwi sante',
      es: 'Medicinas, vitaminas, primeros auxilios y productos de salud'
    },
    'diaspora.community_title': {
      fr: 'Ce Que Dit Notre Communauté',
      en: 'What Our Community Says',
      kr: 'Sa Kominote Nou an Di',
      es: 'Lo Que Dice Nuestra Comunidad'
    },
    'diaspora.testimonial1': {
      fr: '"Je vis à Miami et ma mère est à Port-au-Prince. Avec MyPlopPlop, je peux lui envoyer des courses chaque semaine. Elle reçoit de la nourriture fraîche livrée à sa porte et je peux voir quand ça arrive. Ça a tout changé pour nous."',
      en: '"I live in Miami and my mother is in Port-au-Prince. With MyPlopPlop, I can send her groceries every week. She gets fresh food delivered to her door and I can see when it arrives. This has changed everything for us."',
      kr: '"Mwen ap viv nan Miami epi manman mwen nan Pòtoprens. Ak MyPlopPlop, mwen ka voye pwovizyon ba li chak semèn. Li resevwa manje fre livre nan pòt li epi mwen ka wè kilè li rive. Sa chanje tout bagay pou nou."',
      es: '"Vivo en Miami y mi madre está en Puerto Príncipe. Con MyPlopPlop, puedo enviarle alimentos cada semana. Recibe comida fresca en su puerta y puedo ver cuándo llega. Esto lo ha cambiado todo para nosotros."'
    },
    'diaspora.testimonial2': {
      fr: '"Mes parents vieillissent et je m\'inquiète qu\'ils aient assez de médicaments. Maintenant je peux commander chez Pharma Plus et savoir qu\'ils ont ce qu\'il faut. Le suivi me donne la tranquillité d\'esprit."',
      en: '"My parents are getting older and I worry about them having enough medicine. Now I can order from Pharma Plus and know they have what they need. The tracking feature gives me peace of mind."',
      kr: '"Paran mwen yo ap vin pi aje epi mwen enkyete pou yo gen ase medikaman. Kounye a mwen ka kòmande nan Pharma Plus epi konnen yo gen sa yo bezwen. Fonksyon swivi a ba mwen lapè nan tèt mwen."',
      es: '"Mis padres están envejeciendo y me preocupa que tengan suficiente medicina. Ahora puedo pedir en Pharma Plus y saber que tienen lo que necesitan. El seguimiento me da tranquilidad."'
    },
    'diaspora.testimonial3': {
      fr: '"Avant MyPlopPlop, j\'envoyais de l\'argent en espérant qu\'il soit dépensé pour l\'essentiel. Maintenant je choisis exactement ce que ma famille reçoit. Les magasins sont vérifiés, les prix sont justes, et la livraison est rapide."',
      en: '"Before MyPlopPlop, I used to send money and hope it was spent on essentials. Now I pick exactly what my family gets. The stores are verified, prices are fair, and delivery is fast. Highly recommend!"',
      kr: '"Anvan MyPlopPlop, mwen te konn voye lajan epi espere li depanse pou bagay esansyèl. Kounye a mwen chwazi egzakteman sa fanmi mwen resevwa. Magazen yo verifye, pri yo jis, epi livrezon an rapid. Mwen rekòmande li!"',
      es: '"Antes de MyPlopPlop, enviaba dinero esperando que se gastara en lo esencial. Ahora elijo exactamente lo que recibe mi familia. Las tiendas están verificadas, los precios son justos y la entrega es rápida."'
    },
    'diaspora.ready_title': {
      fr: 'Prêt à Soutenir Votre Famille ?',
      en: 'Ready to Support Your Family?',
      kr: 'Prè pou Sipòte Fanmi Ou?',
      es: '¿Listo para Apoyar a su Familia?'
    },
    'diaspora.ready_desc': {
      fr: 'Ajoutez votre premier destinataire et commencez à envoyer des essentiels aujourd\'hui. Ça ne prend qu\'une minute.',
      en: 'Add your first recipient and start sending essentials today. It only takes a minute.',
      kr: 'Ajoute premye destinatè ou epi kòmanse voye bagay esansyèl jodi a. Li pran sèlman yon minit.',
      es: 'Agregue su primer destinatario y comience a enviar esenciales hoy. Solo toma un minuto.'
    },
    'diaspora.add_recipient': {
      fr: 'Ajouter un Destinataire →',
      en: 'Add a Recipient →',
      kr: 'Ajoute yon Destinatè →',
      es: 'Agregar un Destinatario →'
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
    },
    'cta.subtitle': {
      fr: 'Développez votre entreprise ou gagnez en tant que livreur',
      en: 'Grow your business or earn as a delivery rider',
      kr: 'Grandi biznis ou oswa touche lajan kòm livè',
      es: 'Haga crecer su negocio o gane como repartidor'
    },
    'cta.merchant_desc': {
      fr: 'Inscrivez votre magasin et atteignez des milliers de clients',
      en: 'List your store and reach thousands of customers',
      kr: 'Enskri magazen ou epi rive jwenn dè milye kliyan',
      es: 'Registre su tienda y llegue a miles de clientes'
    },
    'cta.rider_desc': {
      fr: 'Livrez des commandes et gagnez selon votre propre emploi du temps',
      en: 'Deliver orders and earn on your own schedule',
      kr: 'Livre kòmand epi touche lajan sou pwòp orè ou',
      es: 'Entregue pedidos y gane con su propio horario'
    },

    // ── PWA Install Banner ──
    'install_text': {
      fr: 'Installer MyPlopPlop<small>Ajouter à votre écran d\'accueil</small>',
      en: 'Install MyPlopPlop<small>Add to your home screen for quick access</small>',
      kr: 'Enstale MyPlopPlop<small>Mete sou ekran lakay ou</small>',
      es: 'Instalar MyPlopPlop<small>Añadir a tu pantalla de inicio</small>'
    },
    'install_btn': {
      fr: 'Installer',
      en: 'Install',
      kr: 'Enstale',
      es: 'Instalar'
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

  // Bulk text map: English text -> translations for all languages
  // This auto-translates page content without needing data-i18n attributes
  var bulkTextMap = {
    // Rides page
    'Choose Your Ride': { fr: 'Choisissez votre Trajet', kr: 'Chwazi Transpò Ou', es: 'Elija su Viaje' },
    'From budget-friendly to premium comfort': { fr: 'Du plus économique au plus confortable', kr: 'Soti nan pi bon mache rive nan pi konfòtab', es: 'Desde económico hasta premium' },
    'Share rides, save money. Haiti\'s first ride-sharing pataj.': { fr: 'Partagez les trajets, économisez. Le premier partage de covoiturage d\'Haïti.', kr: 'Pataje transpò, ekonomize lajan. Premye pataj transpò Ayiti.', es: 'Comparta viajes, ahorre dinero. El primer sistema de viajes compartidos de Haití.' },
    'Share rides, save money. Haiti\'s first ride-sharing pool.': { fr: 'Partagez les trajets, économisez. Le premier partage de covoiturage d\'Haïti.', kr: 'Pataje transpò, ekonomize lajan. Premye pataj transpò Ayiti.', es: 'Comparta viajes, ahorre dinero. El primer sistema de viajes compartidos de Haití.' },
    'Request a Ride': { fr: 'Demander un Trajet', kr: 'Mande yon Transpò', es: 'Solicitar un Viaje' },
    'Request a Pataj Ride': { fr: 'Demander un Trajet Pataj', kr: 'Mande yon Transpò Pataj', es: 'Solicitar un Viaje Pataj' },
    'Drive with Us': { fr: 'Conduisez avec Nous', kr: 'Kondwi avèk Nou', es: 'Conduzca con Nosotros' },
    'PlopPlop Pataj': { fr: 'PlopPlop Pataj', kr: 'PlopPlop Pataj', es: 'PlopPlop Pataj' },
    'PlopPlop Moto': { fr: 'PlopPlop Moto', kr: 'PlopPlop Moto', es: 'PlopPlop Moto' },
    'PlopPlop Car': { fr: 'PlopPlop Machin', kr: 'PlopPlop Machin', es: 'PlopPlop Auto' },
    'PlopPlop SUV': { fr: 'PlopPlop SUV', kr: 'PlopPlop SUV', es: 'PlopPlop SUV' },
    'PlopPlop Blende': { fr: 'PlopPlop Blindé', kr: 'PlopPlop Blende', es: 'PlopPlop Blindado' },
    'Premium SUV ride. Extra space, power, and comfort for longer trips or groups.': { fr: 'Trajet SUV premium. Espace, puissance et confort pour les longs trajets.', kr: 'Transpò SUV premyòm. Plis espas, fòs, ak konfò pou vwayaj long oswa gwoup.', es: 'Viaje SUV premium. Espacio extra, potencia y comodidad.' },
    'Armored bulletproof SUV. Maximum security with trained driver for VIP protection.': { fr: 'SUV blindé. Sécurité maximale avec chauffeur formé pour protection VIP.', kr: 'SUV blende ak bal pwoteksyon. Sekirite maksimòm ak chofè fòme pou pwoteksyon VIP.', es: 'SUV blindado. Seguridad máxima con conductor entrenado para protección VIP.' },
    'Share with others going your way. Cheapest option \u2014 split the fare and save big.': { fr: 'Partagez avec d\'autres allant dans votre direction. L\'option la moins chère.', kr: 'Pataje ak lòt moun ki prale menm kote. Opsyon pi bon mache a \u2014 separe pri a epi ekonomize anpil.', es: 'Comparta con otros que van en su dirección. La opción más barata.' },
    'Private motorcycle ride. Fast through traffic \u2014 get there in half the time.': { fr: 'Trajet privé en moto. Rapide dans le trafic.', kr: 'Transpò moto prive. Rapid nan trafik la \u2014 rive nan mwatye tan an.', es: 'Viaje privado en moto. Rápido en el tráfico.' },
    'Private car ride. Comfortable, air-conditioned, and secure door-to-door.': { fr: 'Trajet privé en voiture. Confortable et climatisé.', kr: 'Transpò machin prive. Konfòtab, klim, epi sekirize pòt-a-pòt.', es: 'Viaje privado en auto. Cómodo y con aire acondicionado.' },
    'How PlopPlop Pataj Works': { fr: 'Comment fonctionne PlopPlop Pataj', kr: 'Kijan PlopPlop Pataj Mache', es: 'Cómo funciona PlopPlop Pataj' },
    'Four simple steps to a cheaper ride': { fr: 'Quatre étapes simples pour un trajet moins cher', kr: 'Kat etap senp pou yon transpò pi bon mache', es: 'Cuatro pasos simples para un viaje más barato' },
    'Enter Destination': { fr: 'Entrez la Destination', kr: 'Antre Destinasyon', es: 'Ingrese Destino' },
    'Tell us where you\'re going': { fr: 'Dites-nous où vous allez', kr: 'Di nou ki kote ou prale', es: 'Díganos a dónde va' },
    'Match with Riders': { fr: 'Trouvez des Passagers', kr: 'Jwenn Pasaje', es: 'Encuentre Pasajeros' },
    'We find others heading your way': { fr: 'Nous trouvons d\'autres allant dans votre direction', kr: 'Nou jwenn lòt moun ki prale menm kote', es: 'Encontramos a otros que van en su dirección' },
    'Share the Ride': { fr: 'Partagez le Trajet', kr: 'Pataje Transpò a', es: 'Comparta el Viaje' },
    'Split the cost, save money': { fr: 'Partagez le coût, économisez', kr: 'Separe pri a, ekonomize lajan', es: 'Divida el costo, ahorre dinero' },
    'Arrive Safely': { fr: 'Arrivez en Sécurité', kr: 'Rive an Sekirite', es: 'Llegue con Seguridad' },
    'Tracked ride with verified drivers': { fr: 'Trajet suivi avec des chauffeurs vérifiés', kr: 'Transpò swivi ak chofè verifye', es: 'Viaje rastreado con conductores verificados' },
    'Save up to 60% per ride': { fr: 'Économisez jusqu\'à 60% par trajet', kr: 'Ekonomize jiska 60% pa transpò', es: 'Ahorre hasta 60% por viaje' },
    'Reduce traffic congestion': { fr: 'Réduisez les embouteillages', kr: 'Diminye anbouteyaj', es: 'Reduzca la congestión' },
    'Lower your carbon footprint': { fr: 'Réduisez votre empreinte carbone', kr: 'Diminye anprent kabòn ou', es: 'Reduzca su huella de carbono' },
    'Verified drivers only': { fr: 'Chauffeurs vérifiés uniquement', kr: 'Chofè verifye sèlman', es: 'Solo conductores verificados' },
    'Real-time GPS tracking': { fr: 'Suivi GPS en temps réel', kr: 'Swiv GPS an tan reyèl', es: 'Rastreo GPS en tiempo real' },
    'In-app payments': { fr: 'Paiements dans l\'appli', kr: 'Peman nan aplikasyon an', es: 'Pagos en la app' },
    'Estimate Your Fare': { fr: 'Estimez votre Tarif', kr: 'Estime Pri Transpò Ou', es: 'Estime su Tarifa' },
    'See how much you\'ll save with PlopPlop': { fr: 'Voyez combien vous économiserez avec PlopPlop', kr: 'Gade konbyen ou pral ekonomize ak PlopPlop', es: 'Vea cuánto ahorrará con PlopPlop' },
    'Pickup Zone': { fr: 'Zone de Départ', kr: 'Zòn Depa', es: 'Zona de Recogida' },
    'Dropoff Zone': { fr: 'Zone d\'Arrivée', kr: 'Zòn Rive', es: 'Zona de Destino' },
    'Get Fare Estimate': { fr: 'Obtenir l\'Estimation', kr: 'Jwenn Estimasyon Pri', es: 'Obtener Estimación' },
    'Earn More with Every Seat': { fr: 'Gagnez Plus à Chaque Siège', kr: 'Touche Plis ak Chak Plas', es: 'Gane Más con Cada Asiento' },
    'Start Driving': { fr: 'Commencez à Conduire', kr: 'Kòmanse Kondwi', es: 'Empiece a Conducir' },
    'More earnings': { fr: 'Plus de gains', kr: 'Plis revni', es: 'Más ganancias' },
    'Active drivers': { fr: 'Chauffeurs actifs', kr: 'Chofè aktif', es: 'Conductores activos' },
    'Flexible hours': { fr: 'Horaires flexibles', kr: 'Lè fleksib', es: 'Horarios flexibles' },

    // Shop / Store pages
    'All Stores': { fr: 'Tous les Magasins', kr: 'Tout Magazen yo', es: 'Todas las Tiendas' },
    'Add to Cart': { fr: 'Ajouter au Panier', kr: 'Mete nan Panye', es: 'Agregar al Carrito' },
    'View Store': { fr: 'Voir le Magasin', kr: 'Gade Magazen', es: 'Ver Tienda' },
    'Popular Stores': { fr: 'Magasins Populaires', kr: 'Magazen Popilè', es: 'Tiendas Populares' },
    'All Categories': { fr: 'Toutes les Catégories', kr: 'Tout Kategori yo', es: 'Todas las Categorías' },
    'Search stores, products, or categories...': { fr: 'Rechercher magasins, produits...', kr: 'Chèche magazen, pwodwi, oswa kategori...', es: 'Buscar tiendas, productos...' },

    // Cart / Checkout
    'Your Cart': { fr: 'Votre Panier', kr: 'Panye Ou', es: 'Su Carrito' },
    'Shopping Cart': { fr: 'Panier d\'Achats', kr: 'Panye Acha', es: 'Carrito de Compras' },
    'Checkout': { fr: 'Payer', kr: 'Peye', es: 'Pagar' },
    'Proceed to Checkout': { fr: 'Passer au Paiement', kr: 'Ale nan Peman', es: 'Proceder al Pago' },
    'Subtotal': { fr: 'Sous-total', kr: 'Sou-total', es: 'Subtotal' },
    'Delivery Fee': { fr: 'Frais de Livraison', kr: 'Frè Livrezon', es: 'Tarifa de Entrega' },
    'Service Fee (5%)': { fr: 'Frais de Service (5%)', kr: 'Frè Sèvis (5%)', es: 'Tarifa de Servicio (5%)' },
    'Promo Discount': { fr: 'Réduction Promo', kr: 'Rabè Promo', es: 'Descuento Promo' },
    'Total': { fr: 'Total', kr: 'Total', es: 'Total' },
    'Place Order': { fr: 'Passer la Commande', kr: 'Pase Kòmand', es: 'Realizar Pedido' },
    'Order Summary': { fr: 'Résumé de la Commande', kr: 'Rezime Kòmand', es: 'Resumen del Pedido' },
    'Clear Cart': { fr: 'Vider le Panier', kr: 'Klè Panye a', es: 'Vaciar Carrito' },
    'Promo Code': { fr: 'Code Promo', kr: 'Kòd Promo', es: 'Código Promo' },
    'Apply': { fr: 'Appliquer', kr: 'Aplike', es: 'Aplicar' },
    'Applied': { fr: 'Appliqué', kr: 'Aplike', es: 'Aplicado' },
    'Your Cart is Empty': { fr: 'Votre Panier est Vide', kr: 'Panye Ou Vid', es: 'Su Carrito está Vacío' },
    'Start Shopping': { fr: 'Commencer les Achats', kr: 'Kòmanse Achte', es: 'Empezar a Comprar' },

    // Store page
    'Products': { fr: 'Produits', kr: 'Pwodwi', es: 'Productos' },
    'About': { fr: 'À Propos', kr: 'Enfòmasyon', es: 'Acerca de' },
    'Reviews': { fr: 'Avis', kr: 'Kòmantè', es: 'Reseñas' },
    'Back to Stores': { fr: 'Retour aux Magasins', kr: 'Retounen nan Magazen yo', es: 'Volver a Tiendas' },
    'Back to Designer': { fr: 'Retour au Designer', kr: 'Retounen nan Dizaynè a', es: 'Volver al Diseñador' },
    'View Cart': { fr: 'Voir le Panier', kr: 'Wè Panye a', es: 'Ver Carrito' },
    '+ Add': { fr: '+ Ajouter', kr: '+ Ajoute', es: '+ Agregar' },
    'Open Now': { fr: 'Ouvert', kr: 'Ouvè Kounye a', es: 'Abierto' },
    'Closed': { fr: 'Fermé', kr: 'Fème', es: 'Cerrado' },
    'Verified': { fr: 'Vérifié', kr: 'Verifye', es: 'Verificado' },
    'Verified Merchant': { fr: 'Marchand Vérifié', kr: 'Machann Verifye', es: 'Comerciante Verificado' },
    'Free delivery': { fr: 'Livraison gratuite', kr: 'Livrezon gratis', es: 'Entrega gratis' },
    'delivery': { fr: 'livraison', kr: 'livrezon', es: 'entrega' },
    'Details': { fr: 'Détails', kr: 'Detay', es: 'Detalles' },
    'Address': { fr: 'Adresse', kr: 'Adrès', es: 'Dirección' },
    'Delivery': { fr: 'Livraison', kr: 'Livrezon', es: 'Entrega' },
    'ETA': { fr: 'Temps estimé', kr: 'Tan Estime', es: 'Tiempo estimado' },
    'Status': { fr: 'Statut', kr: 'Estati', es: 'Estado' },
    'Hours': { fr: 'Horaires', kr: 'Lè Travay', es: 'Horarios' },
    'Payment Methods': { fr: 'Modes de Paiement', kr: 'Metòd Peman', es: 'Métodos de Pago' },
    'Quantity': { fr: 'Quantité', kr: 'Kantite', es: 'Cantidad' },
    'Add-ons & Extras': { fr: 'Extras & Suppléments', kr: 'Sipleman & Ekstras', es: 'Extras y Complementos' },
    'Add-on options coming soon': { fr: 'Options supplémentaires bientôt', kr: 'Opsyon sipleman ap vini byento', es: 'Opciones adicionales próximamente' },
    'reviews': { fr: 'avis', kr: 'kòmantè', es: 'reseñas' },
    'minutes': { fr: 'minutes', kr: 'minit', es: 'minutos' },
    'Contact': { fr: 'Contact', kr: 'Kontakte', es: 'Contacto' },

    // Days of week
    'Monday': { fr: 'Lundi', kr: 'Lendi', es: 'Lunes' },
    'Tuesday': { fr: 'Mardi', kr: 'Madi', es: 'Martes' },
    'Wednesday': { fr: 'Mercredi', kr: 'Mèkredi', es: 'Miércoles' },
    'Thursday': { fr: 'Jeudi', kr: 'Jedi', es: 'Jueves' },
    'Friday': { fr: 'Vendredi', kr: 'Vandredi', es: 'Viernes' },
    'Saturday': { fr: 'Samedi', kr: 'Samdi', es: 'Sábado' },
    'Sunday': { fr: 'Dimanche', kr: 'Dimanch', es: 'Domingo' },
    '(Today)': { fr: '(Aujourd\'hui)', kr: '(Jodi a)', es: '(Hoy)' },

    // Store categories
    'Restaurant': { fr: 'Restaurant', kr: 'Restoran', es: 'Restaurante' },
    'Supermarket': { fr: 'Supermarché', kr: 'Sipèmache', es: 'Supermercado' },
    'Pharmacy': { fr: 'Pharmacie', kr: 'Famasi', es: 'Farmacia' },
    'Hardware Store': { fr: 'Quincaillerie', kr: 'Kenkayri', es: 'Ferretería' },
    'Wholesale': { fr: 'Grossiste', kr: 'Angwo', es: 'Mayorista' },
    'Retail': { fr: 'Détaillant', kr: 'Detay', es: 'Minorista' },
    'Store': { fr: 'Magasin', kr: 'Magazen', es: 'Tienda' },

    // Product categories (from mock data)
    'Medicine': { fr: 'Médicaments', kr: 'Medikaman', es: 'Medicinas' },
    'Health': { fr: 'Santé', kr: 'Sante', es: 'Salud' },
    'Supplements': { fr: 'Suppléments', kr: 'Sipleman', es: 'Suplementos' },
    'Main Dishes': { fr: 'Plats Principaux', kr: 'Pla Prensipal', es: 'Platos Principales' },
    'Soups': { fr: 'Soupes', kr: 'Soup', es: 'Sopas' },
    'Drinks': { fr: 'Boissons', kr: 'Bwason', es: 'Bebidas' },
    'Desserts': { fr: 'Desserts', kr: 'Desè', es: 'Postres' },
    'Seafood': { fr: 'Fruits de Mer', kr: 'Fwi Lanmè', es: 'Mariscos' },
    'Starters': { fr: 'Entrées', kr: 'Antre', es: 'Entradas' },
    'Staples': { fr: 'Produits de Base', kr: 'Pwodwi Baz', es: 'Productos Básicos' },
    'Produce': { fr: 'Fruits et Légumes', kr: 'Fwi ak Legim', es: 'Frutas y Verduras' },
    'Beverages': { fr: 'Boissons', kr: 'Bwason', es: 'Bebidas' },
    'Construction': { fr: 'Construction', kr: 'Konstriksyon', es: 'Construcción' },
    'Paint': { fr: 'Peinture', kr: 'Penti', es: 'Pintura' },
    'Tools': { fr: 'Outils', kr: 'Zouti', es: 'Herramientas' },
    'Pharmacies': { fr: 'Pharmacies', kr: 'Famasi', es: 'Farmacias' },
    'Restaurants': { fr: 'Restaurants', kr: 'Restoran', es: 'Restaurantes' },
    'Supermarkets': { fr: 'Supermarchés', kr: 'Sipèmache', es: 'Supermercados' },
    'Hardware Stores': { fr: 'Quincailleries', kr: 'Kenkayri', es: 'Ferreterías' },
    'Clothing': { fr: 'Vêtements', kr: 'Rad', es: 'Ropa' },
    'Electronics': { fr: 'Électronique', kr: 'Elektwonik', es: 'Electrónica' },
    'Beauty': { fr: 'Beauté', kr: 'Bote', es: 'Belleza' },
    'Other': { fr: 'Autre', kr: 'Lòt', es: 'Otro' },
    'Transactions': { fr: 'Transactions', kr: 'Tranzaksyon', es: 'Transacciones' },
    'Transaction History': { fr: 'Historique des Transactions', kr: 'Istwa Tranzaksyon', es: 'Historial de Transacciones' },
    'Pending': { fr: 'En attente', kr: 'An atant', es: 'Pendiente' },
    'Completed': { fr: 'Terminé', kr: 'Fini', es: 'Completado' },
    'Cancelled': { fr: 'Annulé', kr: 'Anile', es: 'Cancelado' },
    'Order placed': { fr: 'Commande passée', kr: 'Kòmand pase', es: 'Pedido realizado' },
    'Preparing': { fr: 'En préparation', kr: 'Ap prepare', es: 'Preparando' },
    'On the way': { fr: 'En route', kr: 'Sou wout', es: 'En camino' },
    'Delivered': { fr: 'Livré', kr: 'Livre', es: 'Entregado' },
    'Payment Method': { fr: 'Mode de Paiement', kr: 'Metòd Peman', es: 'Método de Pago' },
    'Order Total': { fr: 'Total Commande', kr: 'Total Kòmand', es: 'Total del Pedido' },
    'items': { fr: 'articles', kr: 'atik', es: 'artículos' },

    // Diaspora
    'Support Family in Haiti': { fr: 'Soutenez votre Famille en Haïti', kr: 'Sipòte Fanmi nan Ayiti', es: 'Apoye a su Familia en Haití' },
    'Send Support Now': { fr: 'Envoyer du Soutien', kr: 'Voye Sipò Kounye a', es: 'Enviar Apoyo Ahora' },
    'My Recipients': { fr: 'Mes Bénéficiaires', kr: 'Benefisyè Mwen yo', es: 'Mis Beneficiarios' },
    'Add Recipient': { fr: 'Ajouter un Bénéficiaire', kr: 'Ajoute Benefisyè', es: 'Agregar Beneficiario' },

    // Help
    'Help Center': { fr: "Centre d'Aide", kr: 'Sant Èd', es: 'Centro de Ayuda' },
    'How can we help you?': { fr: 'Comment pouvons-nous vous aider ?', kr: 'Kijan nou ka ede ou?', es: '¿Cómo podemos ayudarle?' },
    'Contact Us': { fr: 'Contactez-nous', kr: 'Kontakte Nou', es: 'Contáctenos' },

    // Driver page
    'Become a Driver Partner': { fr: 'Devenez Partenaire Chauffeur', kr: 'Vin yon Patnè Chofè', es: 'Sea un Socio Conductor' },
    'Sign Up to Drive': { fr: "S'inscrire pour Conduire", kr: 'Enskri pou Kondwi', es: 'Regístrese para Conducir' },
    'Apply as Moto Partner': { fr: 'Postuler comme Moto', kr: 'Aplike kòm Patnè Moto', es: 'Aplicar como Moto' },
    'Apply as Car Partner': { fr: 'Postuler comme Voiture', kr: 'Aplike kòm Patnè Machin', es: 'Aplicar como Auto' },
    'Continue as Moto Partner': { fr: 'Continuer comme Moto', kr: 'Kontinye kòm Patnè Moto', es: 'Continuar como Moto' },
    'Continue as Car Partner': { fr: 'Continuer comme Voiture', kr: 'Kontinye kòm Patnè Machin', es: 'Continuar como Auto' },
    'Simple Onboarding': { fr: 'Inscription Simple', kr: 'Enskripsyon Senp', es: 'Registro Simple' },

    // Rider dashboard
    'Dashboard': { fr: 'Tableau de Bord', kr: 'Tablo Kontwòl', es: 'Panel de Control' },
    'Go Online': { fr: 'Se Mettre en Ligne', kr: 'Mete An Liy', es: 'Ponerse en Línea' },
    'Go Offline': { fr: 'Se Mettre Hors Ligne', kr: 'Mete Deyò Liy', es: 'Ponerse Fuera de Línea' },
    'Available Rides': { fr: 'Trajets Disponibles', kr: 'Transpò Disponib', es: 'Viajes Disponibles' },
    'Recent Deliveries': { fr: 'Livraisons Récentes', kr: 'Dènye Livrezon yo', es: 'Entregas Recientes' },
    'Today\'s Earnings': { fr: "Gains d'Aujourd'hui", kr: 'Revni Jodi a', es: 'Ganancias de Hoy' },
    'Total Rides': { fr: 'Total Trajets', kr: 'Total Transpò', es: 'Total Viajes' },
    'Earnings': { fr: 'Gains', kr: 'Revni', es: 'Ganancias' },
    'Rating': { fr: 'Note', kr: 'Nòt', es: 'Calificación' },

    // Common
    'See all': { fr: 'Voir tout', kr: 'Wè tout', es: 'Ver todo' },
    'View all': { fr: 'Voir tout', kr: 'Wè tout', es: 'Ver todo' },
    'Loading...': { fr: 'Chargement...', kr: 'Ap chaje...', es: 'Cargando...' },
    'Change location': { fr: 'Changer de lieu', kr: 'Chanje lokasyon', es: 'Cambiar ubicación' },
    'No results found': { fr: 'Aucun résultat trouvé', kr: 'Pa gen rezilta', es: 'No se encontraron resultados' },
    '15% off your first delivery!': { fr: '15% de réduction sur votre première livraison !', kr: '15% rabè sou premye livrezon ou!', es: '¡15% de descuento en tu primera entrega!' },

    // Footer
    'Haiti\'s First Marketplace. From restaurants to hardware stores, we connect you with the best merchants across Haiti.': {
      fr: "Le Premier Marché d'Haïti. Des restaurants aux quincailleries, nous vous connectons avec les meilleurs marchands d'Haïti.",
      kr: 'Premye Makètples Ayiti. Soti nan restoran rive nan kenkayri, nou konekte ou ak pi bon machann nan tout Ayiti.',
      es: 'El Primer Mercado de Haití. De restaurantes a ferreterías, lo conectamos con los mejores comerciantes de Haití.'
    },
    'Shop': { fr: 'Boutique', kr: 'Boutik', es: 'Tienda' },
    'Account': { fr: 'Compte', kr: 'Kont', es: 'Cuenta' },
    'Partners': { fr: 'Partenaires', kr: 'Patnè', es: 'Socios' },
    'Merchants': { fr: 'Marchands', kr: 'Machann', es: 'Comerciantes' },
    'Riders': { fr: 'Livreurs', kr: 'Chofè', es: 'Repartidores' },
    'About Us': { fr: 'À Propos', kr: 'Sou Nou', es: 'Sobre Nosotros' },
    'My Orders': { fr: 'Mes Commandes', kr: 'Kòmand Mwen yo', es: 'Mis Pedidos' },
    'San Cash': { fr: 'San Cash', kr: 'San Cash', es: 'San Cash' },
    'Recipients': { fr: 'Bénéficiaires', kr: 'Benefisyè', es: 'Beneficiarios' },

    // Rides page - "Why Pool" descriptions
    'Pool fares split between riders \u2014 pay a fraction of solo cost': {
      fr: 'Les tarifs sont partagés entre les passagers \u2014 payez une fraction du coût solo',
      kr: 'Pri pataje ant pasaje yo \u2014 peye yon ti pati nan pri pou kont ou',
      es: 'Las tarifas se dividen entre los pasajeros \u2014 pague una fracción del costo individual'
    },
    'Fewer cars on the road means faster commutes for everyone': {
      fr: 'Moins de voitures sur la route signifie des trajets plus rapides pour tous',
      kr: 'Mwens machin sou wout la vle di vwayaj pi rapid pou tout moun',
      es: 'Menos autos en la carretera significa viajes más rápidos para todos'
    },
    'Share rides, reduce emissions, help Haiti breathe easier': {
      fr: 'Partagez les trajets, réduisez les émissions, aidez Haïti à mieux respirer',
      kr: 'Pataje transpò, diminye polisyon, ede Ayiti respire pi byen',
      es: 'Comparta viajes, reduzca emisiones, ayude a Haití a respirar mejor'
    },
    'Background-checked, rated, and reviewed by other riders': {
      fr: 'Vérifiés, notés et évalués par d\'autres passagers',
      kr: 'Verifye, note, epi evalye pa lòt pasaje yo',
      es: 'Verificados, calificados y evaluados por otros pasajeros'
    },
    'Share your trip with family \u2014 they see you moving live': {
      fr: 'Partagez votre trajet avec votre famille \u2014 ils vous suivent en direct',
      kr: 'Pataje vwayaj ou ak fanmi ou \u2014 yo wè ou ap deplase an dirèk',
      es: 'Comparta su viaje con su familia \u2014 lo ven moverse en vivo'
    },
    'Pay with San Cash, credit card, or debit \u2014 no cash needed': {
      fr: 'Payez avec San Cash, carte de crédit ou débit \u2014 pas besoin d\'espèces',
      kr: 'Peye ak San Cash, kat kredi, oswa kat debi \u2014 pa bezwen lajan kach',
      es: 'Pague con San Cash, tarjeta de crédito o débito \u2014 sin efectivo'
    }
  };

  function applyTranslations(lang) {
    lang = lang || getLang();

    // 1. Apply data-i18n attributes
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      els[i].textContent = t(key, lang);
    }

    // 1b. Apply data-i18n-html attributes (innerHTML, for elements with bold/strong tags)
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var h = 0; h < htmlEls.length; h++) {
      var hKey = htmlEls[h].getAttribute('data-i18n-html');
      htmlEls[h].innerHTML = t(hKey, lang);
    }

    // 2. Apply data-i18n-placeholder attributes
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
      placeholders[j].setAttribute('placeholder', t(pKey, lang));
    }

    // 3. Update active language link
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

    // 4. Bulk text replacement for elements without data-i18n
    if (lang !== 'en') {
      applyBulkTranslations(lang);
    }
  }

  function applyBulkTranslations(lang) {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var node;
    while (node = walker.nextNode()) {
      var text = node.nodeValue.trim();
      if (!text || text.length < 3) continue;
      // Skip script/style/textarea content
      var parent = node.parentNode;
      if (!parent) continue;
      var tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT') continue;
      // Skip already translated elements
      if (parent.hasAttribute && parent.hasAttribute('data-i18n')) continue;

      var entry = bulkTextMap[text];
      if (entry && entry[lang]) {
        node.nodeValue = node.nodeValue.replace(text, entry[lang]);
      } else {
        // Try stripping leading emoji (emoji + space pattern)
        var stripped = text.replace(/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{2702}-\u{27B0}]+\s*/u, '');
        if (stripped !== text && stripped.length > 2) {
          entry = bulkTextMap[stripped];
          if (entry && entry[lang]) {
            node.nodeValue = node.nodeValue.replace(stripped, entry[lang]);
          }
        }
      }
    }
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
