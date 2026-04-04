// MyPlopPlop API Client
// Connects frontend to backend

const API = (() => {
    // Backend URL - change this when deploying to production
    const BASE_URL = 'https://investigations-minister-entering-lights.trycloudflare.com';

    // Token management
    function getToken() { return localStorage.getItem('pp_token'); }
    function setToken(token) { localStorage.setItem('pp_token', token); }
    function clearToken() { localStorage.removeItem('pp_token'); localStorage.removeItem('pp_user'); }

    function getUser() {
        const u = localStorage.getItem('pp_user');
        return u ? JSON.parse(u) : null;
    }
    function setUser(user) { localStorage.setItem('pp_user', JSON.stringify(user)); }

    function isLoggedIn() { return !!getToken(); }

    // HTTP helper
    async function request(method, path, body = null) {
        const opts = {
            method,
            headers: {}
        };
        const token = getToken();
        if (token) opts.headers['Authorization'] = 'Bearer ' + token;

        if (body && !(body instanceof FormData)) {
            opts.headers['Content-Type'] = 'application/json';
            opts.body = JSON.stringify(body);
        } else if (body) {
            opts.body = body;
        }

        try {
            const res = await fetch(BASE_URL + path, opts);
            const data = await res.json();
            return data;
        } catch (err) {
            console.error('API Error:', err);
            return { success: false, message: 'Connection error. Please try again.' };
        }
    }

    // Auth
    async function register(name, phone, password, role = 'customer', language = 'fr') {
        const data = await request('POST', '/api/auth/register', { name, phone, password, role, language });
        if (data.success && data.token) {
            setToken(data.token);
            setUser(data.user);
        }
        return data;
    }

    async function login(phone, password) {
        const data = await request('POST', '/api/auth/login', { phone, password });
        if (data.success && data.token) {
            setToken(data.token);
            setUser(data.user);
        }
        return data;
    }

    function logout() {
        clearToken();
        window.location.href = 'login.html';
    }

    async function getMe() {
        return await request('GET', '/api/auth/me');
    }

    // Drivers
    async function driverOnboard(formData) {
        return await request('POST', '/api/drivers/onboard', formData);
    }

    async function driverProfile() {
        return await request('GET', '/api/drivers/profile');
    }

    async function driverGoOnline() {
        return await request('PUT', '/api/drivers/online', { isOnline: true });
    }

    async function driverGoOffline() {
        return await request('PUT', '/api/drivers/online', { isOnline: false });
    }

    async function driverUpdateLocation(latitude, longitude) {
        return await request('PUT', '/api/drivers/location', { latitude, longitude });
    }

    async function driverStats() {
        return await request('GET', '/api/drivers/stats');
    }

    // Rides
    async function createRide(type, pickup, dropoff, paymentMethod, distanceKm, items = [], recipient = null) {
        return await request('POST', '/api/rides', {
            type, pickup, dropoff, paymentMethod, distanceKm, items, recipient
        });
    }

    async function getMyRides(status = null, page = 1) {
        const qs = status ? `?status=${status}&page=${page}` : `?page=${page}`;
        return await request('GET', '/api/rides' + qs);
    }

    async function getAvailableRides() {
        return await request('GET', '/api/rides/available');
    }

    async function getRide(id) {
        return await request('GET', '/api/rides/' + id);
    }

    async function acceptRide(id) {
        return await request('PUT', '/api/rides/' + id + '/accept');
    }

    async function updateRideStatus(id, status, reason = '') {
        return await request('PUT', '/api/rides/' + id + '/status', { status, reason });
    }

    async function cancelRide(id, reason = '') {
        return await request('PUT', '/api/rides/' + id + '/cancel', { reason });
    }

    async function rateRide(id, rating) {
        return await request('PUT', '/api/rides/' + id + '/rate', { rating });
    }

    // Admin
    async function adminDashboard() {
        return await request('GET', '/api/admin/dashboard');
    }

    async function adminDrivers(status = 'pending') {
        return await request('GET', '/api/admin/drivers?status=' + status);
    }

    async function adminVerifyDriver(id, action, reason = '') {
        return await request('PUT', '/api/admin/drivers/' + id + '/verify', { action, reason });
    }

    async function adminRides(status = '', page = 1) {
        const qs = status ? `?status=${status}&page=${page}` : `?page=${page}`;
        return await request('GET', '/api/admin/rides' + qs);
    }

    async function adminTransactions(type = '', page = 1) {
        const qs = type ? `?type=${type}&page=${page}` : `?page=${page}`;
        return await request('GET', '/api/admin/transactions' + qs);
    }

    // Payments
    async function moncashTopup(amount) {
        return await request('POST', '/api/payments/moncash/topup', { amount });
    }

    async function moncashPayRide(rideId) {
        return await request('POST', '/api/payments/moncash/ride', { rideId });
    }

    async function natcashTopup(amount, natcashPhone) {
        return await request('POST', '/api/payments/natcash/topup', { amount, natcashPhone });
    }

    async function natcashPayRide(rideId) {
        return await request('POST', '/api/payments/natcash/ride', { rideId });
    }

    async function walletPayRide(rideId) {
        return await request('POST', '/api/payments/wallet/ride', { rideId });
    }

    async function paymentHistory() {
        return await request('GET', '/api/payments/history');
    }

    async function verifyMoncash(orderId) {
        return await request('GET', '/api/payments/moncash/verify?orderId=' + orderId);
    }

    // Chat
    async function getChatMessages(rideId) {
        return await request('GET', '/api/chat/' + rideId);
    }

    async function sendChatMessage(rideId, message) {
        return await request('POST', '/api/chat/' + rideId, { message });
    }

    async function getUnreadCount(rideId) {
        return await request('GET', '/api/chat/' + rideId + '/unread');
    }

    async function getQuickReplies() {
        return await request('GET', '/api/chat/quick/replies');
    }

    // Health check
    async function health() {
        return await request('GET', '/api/health');
    }

    // UI Helpers
    function updateNavForUser() {
        const user = getUser();
        const accountLinks = document.querySelectorAll('a[href="login.html"]');
        if (user && accountLinks.length) {
            accountLinks.forEach(link => {
                if (link.closest('.bottom-nav')) {
                    const span = link.querySelector('span:not(.nav-badge)');
                    if (span) span.textContent = user.name.split(' ')[0];
                }
                if (link.closest('.header-actions')) {
                    link.style.color = 'var(--primary-blue)';
                }
            });
        }
    }

    // Show toast notification
    function toast(message, type = 'info') {
        const existing = document.querySelector('.pp-toast');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = 'pp-toast';
        const bg = type === 'success' ? '#1a8c3f' : type === 'error' ? '#D21034' : '#00209F';
        div.style.cssText = `position:fixed;top:40px;left:50%;transform:translateX(-50%);background:${bg};color:#fff;padding:12px 24px;border-radius:12px;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.3);text-align:center;max-width:90%;`;
        div.textContent = message;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3500);
    }

    // ─── Push Notifications ───
    async function subscribeToPush() {
        try {
            if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;
            if (!isLoggedIn()) return;

            const registration = await navigator.serviceWorker.ready;
            const existing = await registration.pushManager.getSubscription();
            if (existing) {
                await request('POST', '/api/notifications/subscribe', { subscription: existing.toJSON() });
                return;
            }

            const keyRes = await request('GET', '/api/notifications/vapid-key');
            if (!keyRes.success || !keyRes.publicKey) return;

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(keyRes.publicKey)
            });

            await request('POST', '/api/notifications/subscribe', { subscription: subscription.toJSON() });
        } catch (e) {
            console.log('Push subscription failed:', e.message);
        }
    }

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
        return outputArray;
    }

    // Auto-update nav on page load + subscribe to push
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { updateNavForUser(); subscribeToPush(); });
    } else {
        updateNavForUser();
        subscribeToPush();
    }

    return {
        BASE_URL, getToken, setToken, getUser, setUser, isLoggedIn, logout, toast,
        register, login, getMe,
        driverOnboard, driverProfile, driverGoOnline, driverGoOffline, driverUpdateLocation, driverStats,
        createRide, getMyRides, getAvailableRides, getRide, acceptRide, updateRideStatus, cancelRide, rateRide,
        adminDashboard, adminDrivers, adminVerifyDriver, adminRides, adminTransactions,
        moncashTopup, moncashPayRide, natcashTopup, natcashPayRide, walletPayRide, paymentHistory, verifyMoncash,
        getChatMessages, sendChatMessage, getUnreadCount, getQuickReplies,
        subscribeToPush, health, updateNavForUser
    };
})();
