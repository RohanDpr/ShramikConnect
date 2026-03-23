/**
 * Worker Get Password Page - JavaScript
 * Handles password recovery - checks email in Worker DB, then sends password via email
 */

// DOM Elements
const settingsIcon    = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const passwordForm    = document.getElementById('passwordForm');
const contactInput    = document.getElementById('contactInput');
const submitBtn       = document.getElementById('submitBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions    = document.querySelectorAll('.theme-option');

// State
let currentLanguage = 'en';
let currentTheme    = 'light';

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── i18n Translations ────────────────────────────────────────────────────────
const translations = {
    en: {
        'back_to_login'          : 'Back to Login',
        'get_password'           : 'Get Your Password',
        'recover_password'       : 'Recover Your Password',
        'enter_email'            : 'Enter your registered email address to receive your current password.',
        'email'                  : 'Email Address',
        'enter_email_placeholder': 'Enter your email address',
        'enter_registered_email' : 'Enter the email address associated with your account',
        'get_password_btn'       : 'Get Password',
        'security_notice'        : "For security reasons, we'll only send your password to your registered email. If you don't receive it within 5 minutes, please contact support.",
        'cant_access'            : "Can't access this email?",
        'try_another_method'     : 'Try another recovery method',
        'language': 'Language', 'theme': 'Theme',
        'light': 'Light', 'dark': 'Dark', 'system': 'System',
        'success_title'          : 'Password Sent!',
        'email_success'          : 'Your password has been sent to your email address.',
        'invalid_email'          : 'Please enter a valid email address',
        'required_field'         : 'Please enter your email address',
        'email_not_found'        : 'No worker account found with this email address.',
        'sending'                : 'Sending...',
    },
    hi: {
        'back_to_login'          : 'लॉगिन पर वापस जाएं',
        'get_password'           : 'अपना पासवर्ड प्राप्त करें',
        'recover_password'       : 'अपना पासवर्ड पुनर्प्राप्त करें',
        'enter_email'            : 'अपना वर्तमान पासवर्ड प्राप्त करने के लिए अपना पंजीकृत ईमेल पता दर्ज करें।',
        'email'                  : 'ईमेल पता',
        'enter_email_placeholder': 'अपना ईमेल पता दर्ज करें',
        'enter_registered_email' : 'अपने खाते से संबंधित ईमेल पता दर्ज करें',
        'get_password_btn'       : 'पासवर्ड प्राप्त करें',
        'security_notice'        : 'सुरक्षा कारणों से, हम आपका पासवर्ड केवल आपके पंजीकृत ईमेल पर भेजेंगे। यदि आपको इसे 5 मिनट के भीतर प्राप्त नहीं होता है, तो कृपया सहायता से संपर्क करें।',
        'cant_access'            : 'क्या आप इस ईमेल को एक्सेस नहीं कर सकते?',
        'try_another_method'     : 'दूसरी पुनर्प्राप्ति विधि आजमाएं',
        'language': 'भाषा', 'theme': 'थीम',
        'light': 'लाइट', 'dark': 'डार्क', 'system': 'सिस्टम',
        'success_title'          : 'पासवर्ड भेजा गया!',
        'email_success'          : 'आपका पासवर्ड आपके ईमेल पते पर भेज दिया गया है।',
        'invalid_email'          : 'कृपया एक मान्य ईमेल पता दर्ज करें',
        'required_field'         : 'कृपया अपना ईमेल पता दर्ज करें',
        'email_not_found'        : 'इस ईमेल से कोई श्रमिक खाता नहीं मिला।',
        'sending'                : 'भेजा जा रहा है...',
    },
    mr: {
        'back_to_login'          : 'लॉगिन वर परत जा',
        'get_password'           : 'आपला पासवर्ड मिळवा',
        'recover_password'       : 'आपला पासवर्ड पुनर्प्राप्त करा',
        'enter_email'            : 'आपला सध्याचा पासवर्ड प्राप्त करण्यासाठी आपला नोंदणीकृत ईमेल पत्ता प्रविष्ट करा.',
        'email'                  : 'ईमेल पत्ता',
        'enter_email_placeholder': 'आपला ईमेल पत्ता प्रविष्ट करा',
        'enter_registered_email' : 'आपल्या खात्याशी संबंधित ईमेल पत्ता प्रविष्ट करा',
        'get_password_btn'       : 'पासवर्ड मिळवा',
        'security_notice'        : 'सुरक्षेच्या कारणास्तव, आम्ही आपला पासवर्ड केवळ आपल्या नोंदणीकृत ईमेलवर पाठवू. जर आपल्याला ते 5 मिनिटांच्या आत प्राप्त झाले नाही तर कृपया समर्थनाशी संपर्क साधा.',
        'cant_access'            : 'या ईमेलमध्ये प्रवेश करू शकत नाही?',
        'try_another_method'     : 'दुसरी पुनर्प्राप्ती पद्धत वापरून पहा',
        'language': 'भाषा', 'theme': 'थीम',
        'light': 'लाइट', 'dark': 'डार्क', 'system': 'सिस्टम',
        'success_title'          : 'पासवर्ड पाठवला!',
        'email_success'          : 'आपला पासवर्ड आपल्या ईमेल पत्त्यावर पाठवला गेला आहे.',
        'invalid_email'          : 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
        'required_field'         : 'कृपया आपला ईमेल पत्ता प्रविष्ट करा',
        'email_not_found'        : 'या ईमेलसह कोणतेही कामगार खाते सापडले नाही.',
        'sending'                : 'पाठवत आहे...',
    }
};

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
    loadPreferences();
    setupEventListeners();
    applyInitialAnimations();
}

function loadPreferences() {
    setTheme(localStorage.getItem('preferredTheme') || 'light');
    setLanguage(localStorage.getItem('preferredLanguage') || 'en');
    updateActiveButtons();
}

function updateActiveButtons() {
    document.querySelectorAll('.language-option').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage));
    document.querySelectorAll('.theme-option').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.theme === currentTheme));
}

function setupEventListeners() {
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    passwordForm.addEventListener('submit', handleFormSubmit);
    contactInput.addEventListener('input', () =>
        contactInput.closest('.input-group').classList.remove('error'));
    languageOptions.forEach(btn => btn.addEventListener('click', handleLanguageChange));
    themeOptions.forEach(btn => btn.addEventListener('click', handleThemeChange));
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handleSystemThemeChange);
}

// ─── Settings ─────────────────────────────────────────────────────────────────
function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    settingsIcon.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

function closeSettingsOnClickOutside(e) {
    if (!settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

// ─── Form Submission — REAL API CALL ─────────────────────────────────────────
async function handleFormSubmit(event) {
    event.preventDefault();

    const t     = translations[currentLanguage];
    const email = contactInput.value.trim();

    if (!email) { showErrorNotification(t.required_field); return; }
    if (!emailRegex.test(email)) { showErrorNotification(t.invalid_email); return; }

    // Loading state
    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${t.sending}</span>`;

    try {
        const response = await fetch('/get_password_worker/', {
            method : 'POST',
            headers: {
                'Content-Type'    : 'application/json',
                'X-CSRFToken'     : getCookie('csrftoken'),
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
            showSuccessNotification(email);
            passwordForm.reset();
        } else {
            // 404 = email not found in Worker table
            showErrorNotification(
                response.status === 404 ? t.email_not_found : data.message
            );
        }

    } catch (err) {
        console.error('get_password_worker error:', err);
        showErrorNotification('Network error. Please try again.');
    } finally {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled  = false;
    }
}

// ─── CSRF Cookie Helper ───────────────────────────────────────────────────────
function getCookie(name) {
    if (!document.cookie) return null;
    for (const cookie of document.cookie.split(';')) {
        const c = cookie.trim();
        if (c.startsWith(name + '='))
            return decodeURIComponent(c.slice(name.length + 1));
    }
    return null;
}

// ─── Notifications ────────────────────────────────────────────────────────────
function showSuccessNotification(emailValue) {
    const t    = translations[currentLanguage];
    const note = createNotification(`
        <div class="notification-icon"><i class="fas fa-check-circle"></i></div>
        <div class="notification-content">
            <h4>${t.success_title}</h4>
            <p>${t.email_success}</p>
            <small>Email: ${maskEmail(emailValue)}</small>
        </div>
        <button class="notification-close" aria-label="Close"><i class="fas fa-times"></i></button>
    `);
    note.querySelector('.notification-close')
        .addEventListener('click', () => { closeNotification(note); redirectToLogin(); });
    setTimeout(() => { closeNotification(note); redirectToLogin(); }, 5000);
}

function showErrorNotification(message) {
    const note = createNotification(`
        <div class="notification-icon"><i class="fas fa-exclamation-circle"></i></div>
        <div class="notification-content">
            <h4>Error</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Close"><i class="fas fa-times"></i></button>
    `, 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)');
    note.querySelector('.notification-close')
        .addEventListener('click', () => closeNotification(note));
    setTimeout(() => closeNotification(note), 4000);
}

function createNotification(innerHTML, background) {
    const note = document.createElement('div');
    note.className  = 'notification';
    note.innerHTML  = innerHTML;
    if (background) note.style.background = background;
    document.body.appendChild(note);
    setTimeout(() => note.classList.add('show'), 10);
    return note;
}

function closeNotification(note) {
    note.classList.remove('show');
    setTimeout(() => { if (note.parentNode) note.parentNode.removeChild(note); }, 400);
}

function maskEmail(email) {
    const [u, d] = email.split('@');
    const masked = u.length > 2 ? u[0] + '***' + u[u.length - 1] : u;
    return masked + '@' + d;
}

// ─── Redirect ─────────────────────────────────────────────────────────────────
function redirectToLogin() {
    const note = createNotification(`
        <div class="notification-icon"><i class="fas fa-sign-in-alt"></i></div>
        <div class="notification-content">
            <h4>Redirecting...</h4>
            <p>Taking you to login page</p>
        </div>
    `, 'linear-gradient(135deg, #4362C9 0%, #2A4AB3 100%)');
    setTimeout(() => { window.location.href = '/login_worker/'; }, 1000);
}

// ─── Language ─────────────────────────────────────────────────────────────────
function handleLanguageChange(e) {
    const lang = e.currentTarget.dataset.lang;
    setLanguage(lang);
    document.querySelectorAll('.language-option').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === lang));
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateTranslations();
}

function updateTranslations() {
    const t = translations[currentLanguage] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
    document.title = t.get_password + ' | Password Recovery';
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function handleThemeChange(e) {
    const theme = e.currentTarget.dataset.theme;
    setTheme(theme);
    document.querySelectorAll('.theme-option').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.theme === theme));
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    let apply = theme === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme;
    document.body.className = apply + '-theme';
}

function handleSystemThemeChange(e) {
    if (currentTheme === 'system')
        document.body.className = (e.matches ? 'dark' : 'light') + '-theme';
}

// ─── Animations ───────────────────────────────────────────────────────────────
function applyInitialAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
            0%   { transform: scale(1); }
            100% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

if (currentTheme === 'system')
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });

window.pageFunctions = { init, showSuccessNotification, showErrorNotification, setLanguage, setTheme };