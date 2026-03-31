/* ===== MyPlopPlop Mock Data ===== */

const CATEGORIES = [
    { id: 'restaurants', name: 'Restaurants', nameKr: 'Restoran', icon: '🍽️', color: '#D21034', count: 24 },
    { id: 'supermarkets', name: 'Supermarkets', nameKr: 'Sipèmache', icon: '🛒', color: '#10B981', count: 12 },
    { id: 'hardware', name: 'Hardware Stores', nameKr: 'Kenkayri', icon: '🔧', color: '#F59E0B', count: 8 },
    { id: 'pharmacies', name: 'Pharmacies', nameKr: 'Famasi', icon: '💊', color: '#3B82F6', count: 15 },
    { id: 'wholesale', name: 'Wholesale', nameKr: 'An gwo', icon: '📦', color: '#8B5CF6', count: 6 },
    { id: 'retail', name: 'Retail', nameKr: 'Detay', icon: '🏬', color: '#EC4899', count: 18 }
];

const STORES = [
    {
        id: 'resto-1', name: 'Lakay Kreyòl', category: 'restaurants',
        image: '', rating: 4.8, reviews: 142, deliveryFee: 150, eta: '25-35',
        open: true, verified: true, featured: true,
        description: 'Authentic Haitian cuisine. Griot, diri kole, soup joumou and more.',
        address: 'Rue Capois, Port-au-Prince',
        products: [
            { id: 'p1', name: 'Griot ak Bannann', price: 350, image: '', description: 'Tender fried pork with plantains and pikliz', category: 'Main Dishes' },
            { id: 'p2', name: 'Diri Kole ak Pwa', price: 250, image: '', description: 'Rice and beans cooked together, Haitian style', category: 'Main Dishes' },
            { id: 'p3', name: 'Soup Joumou', price: 300, image: '', description: 'Traditional pumpkin soup with beef and vegetables', category: 'Soups' },
            { id: 'p4', name: 'Tassot Kabrit', price: 400, image: '', description: 'Fried goat meat with spices', category: 'Main Dishes' },
            { id: 'p5', name: 'Akasan', price: 100, image: '', description: 'Sweet corn drink with cinnamon and star anise', category: 'Drinks' },
            { id: 'p6', name: 'Pain Patate', price: 150, image: '', description: 'Sweet potato pudding dessert', category: 'Desserts' }
        ]
    },
    {
        id: 'resto-2', name: 'Ti Malice Kitchen', category: 'restaurants',
        image: '', rating: 4.6, reviews: 89, deliveryFee: 200, eta: '30-45',
        open: true, verified: true, featured: true,
        description: 'Caribbean fusion with a Haitian twist. Fresh seafood and creative dishes.',
        address: 'Pétion-Ville, Haiti',
        products: [
            { id: 'p7', name: 'Pwason Gwo Sèl', price: 500, image: '', description: 'Grilled fish with salt and lime, served with plantains', category: 'Seafood' },
            { id: 'p8', name: 'Lambi Creole', price: 600, image: '', description: 'Conch in creole sauce with peppers', category: 'Seafood' },
            { id: 'p9', name: 'Poulet Creole', price: 350, image: '', description: 'Chicken in spicy creole sauce with rice', category: 'Main Dishes' },
            { id: 'p10', name: 'Salade Haïtienne', price: 200, image: '', description: 'Fresh local vegetables with vinaigrette', category: 'Starters' }
        ]
    },
    {
        id: 'super-1', name: 'Caribbean Supermarket', category: 'supermarkets',
        image: '', rating: 4.5, reviews: 210, deliveryFee: 100, eta: '20-30',
        open: true, verified: true, featured: true,
        description: 'Your one-stop shop for groceries, household items, and more.',
        address: 'Delmas 33, Port-au-Prince',
        products: [
            { id: 'p11', name: 'Diri (Rice 25lb)', price: 800, image: '', description: 'Premium long grain rice, 25lb bag', category: 'Staples' },
            { id: 'p12', name: 'Pwa Nwa (Black Beans 5lb)', price: 350, image: '', description: 'Dried black beans, 5lb bag', category: 'Staples' },
            { id: 'p13', name: 'Lwil (Cooking Oil 1gal)', price: 450, image: '', description: 'Vegetable cooking oil, 1 gallon', category: 'Staples' },
            { id: 'p14', name: 'Banann Peze (Plantains 6pc)', price: 120, image: '', description: 'Fresh green plantains, 6 pieces', category: 'Produce' },
            { id: 'p15', name: 'Dlo (Water Case)', price: 200, image: '', description: 'Case of 24 purified water bottles', category: 'Beverages' },
            { id: 'p16', name: 'Café Haïtien (Rebo)', price: 180, image: '', description: 'Premium Haitian coffee, ground', category: 'Beverages' }
        ]
    },
    {
        id: 'pharma-1', name: 'Pharma Plus Haiti', category: 'pharmacies',
        image: '', rating: 4.7, reviews: 67, deliveryFee: 75, eta: '15-25',
        open: true, verified: true, featured: false,
        description: 'Trusted pharmacy delivering medicines and health products to your door.',
        address: 'Rue des Miracles, Port-au-Prince',
        products: [
            { id: 'p17', name: 'Paracetamol 500mg', price: 80, image: '', description: 'Pain and fever relief, 20 tablets', category: 'Medicine' },
            { id: 'p18', name: 'First Aid Kit', price: 500, image: '', description: 'Complete first aid kit with bandages, antiseptic', category: 'Health' },
            { id: 'p19', name: 'Vitamins Multivitamin', price: 350, image: '', description: '30-day supply multivitamins', category: 'Supplements' },
            { id: 'p20', name: 'Mosquito Repellent', price: 150, image: '', description: 'DEET-free insect repellent spray', category: 'Health' }
        ]
    },
    {
        id: 'hardware-1', name: 'FèBlan Hardware', category: 'hardware',
        image: '', rating: 4.3, reviews: 45, deliveryFee: 250, eta: '40-60',
        open: true, verified: true, featured: false,
        description: 'Construction materials, tools, and home improvement supplies.',
        address: 'Route de Frères, Pétion-Ville',
        products: [
            { id: 'p21', name: 'Cement (50kg bag)', price: 900, image: '', description: 'Portland cement, 50kg bag', category: 'Construction' },
            { id: 'p22', name: 'Steel Rebar (1/2")', price: 450, image: '', description: 'Steel reinforcing bar, 20ft', category: 'Construction' },
            { id: 'p23', name: 'Paint (1 gallon)', price: 600, image: '', description: 'Interior/exterior latex paint', category: 'Paint' },
            { id: 'p24', name: 'Hammer', price: 350, image: '', description: 'Steel claw hammer with rubber grip', category: 'Tools' }
        ]
    },
    {
        id: 'wholesale-1', name: 'Gwo Komès Haiti', category: 'wholesale',
        image: '', rating: 4.4, reviews: 33, deliveryFee: 0, eta: '45-90',
        open: true, verified: true, featured: false,
        description: 'Wholesale prices on bulk goods. Perfect for businesses and large families.',
        address: 'Marché en Fer, Port-au-Prince',
        products: [
            { id: 'p25', name: 'Rice 100lb Bulk', price: 2800, image: '', description: 'Long grain rice, 100lb bulk sack', category: 'Bulk Staples' },
            { id: 'p26', name: 'Sugar 50lb', price: 1200, image: '', description: 'White granulated sugar, 50lb bag', category: 'Bulk Staples' },
            { id: 'p27', name: 'Cooking Oil Case (6gal)', price: 2400, image: '', description: '6 gallons vegetable oil', category: 'Bulk Staples' }
        ]
    },
    {
        id: 'retail-1', name: 'Ayiti Style', category: 'retail',
        image: '', rating: 4.6, reviews: 78, deliveryFee: 150, eta: '30-45',
        open: true, verified: true, featured: true,
        description: 'Fashion, accessories, and lifestyle products made in Haiti.',
        address: 'Champ de Mars, Port-au-Prince',
        products: [
            { id: 'p28', name: 'Haiti Flag T-Shirt', price: 450, image: '', description: 'Cotton t-shirt with Haiti flag design', category: 'Clothing' },
            { id: 'p29', name: 'Handcrafted Earrings', price: 300, image: '', description: 'Artisan earrings, Haitian craft', category: 'Accessories' },
            { id: 'p30', name: 'Sandals (Leather)', price: 600, image: '', description: 'Handmade leather sandals', category: 'Footwear' }
        ]
    }
];

const SAMPLE_ORDERS = [
    {
        id: 'ORD-2026-001', store: 'Lakay Kreyòl', status: 'delivered',
        items: [{ name: 'Griot ak Bannann', qty: 2, price: 350 }, { name: 'Akasan', qty: 1, price: 100 }],
        total: 950, deliveryFee: 150, date: '2026-03-28', rider: 'Jean-Baptiste'
    },
    {
        id: 'ORD-2026-002', store: 'Caribbean Supermarket', status: 'on_the_way',
        items: [{ name: 'Diri (Rice 25lb)', qty: 1, price: 800 }, { name: 'Café Haïtien', qty: 2, price: 180 }],
        total: 1260, deliveryFee: 100, date: '2026-03-31', rider: 'Pierre'
    },
    {
        id: 'ORD-2026-003', store: 'Pharma Plus Haiti', status: 'preparing',
        items: [{ name: 'Vitamins Multivitamin', qty: 1, price: 350 }],
        total: 425, deliveryFee: 75, date: '2026-03-31', rider: null
    }
];

const ORDER_STATUSES = [
    { key: 'placed', label: 'Order Placed', labelKr: 'Kòmann Plase' },
    { key: 'confirmed', label: 'Confirmed', labelKr: 'Konfime' },
    { key: 'preparing', label: 'Preparing', labelKr: 'Ap Prepare' },
    { key: 'assigned', label: 'Rider Assigned', labelKr: 'Livrezon Asiye' },
    { key: 'picked_up', label: 'Picked Up', labelKr: 'Ranmase' },
    { key: 'on_the_way', label: 'On the Way', labelKr: 'Sou Wout' },
    { key: 'delivered', label: 'Delivered', labelKr: 'Livre' }
];

// Currency formatting for Haitian Gourdes
function formatHTG(amount) {
    return amount.toLocaleString('en-US') + ' HTG';
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.MOCK = { CATEGORIES, STORES, SAMPLE_ORDERS, ORDER_STATUSES, formatHTG };
}
