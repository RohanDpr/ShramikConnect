/**
 * FORGOT PASSWORD PAGE - EXACT HELP & CONTACT THEME
 * Full theme support with light/dark/system modes
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const workerCard = document.getElementById('workerCard');
const employerCard = document.getElementById('employerCard');
const workerPage = document.getElementById('workerPage');
const employerPage = document.getElementById('employerPage');
const workerBackBtn = document.getElementById('workerBackBtn');
const employerBackBtn = document.getElementById('employerBackBtn');
const smallBackBtn = document.getElementById('smallBackBtn');

// Settings elements
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ['light', 'dark', 'system'];

// ============================================
// TRANSLATIONS - UPDATED WITH 3 BUTTONS
// ============================================
const translations = {
    en: {
        'back': 'Back',
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        'forgot_title': 'Forgot Your Password?',
        'forgot_subtitle': "Don't worry, we'll help you reset it",
        'forgot_general_text': 'Select your account type below. We\'ll guide you through the password reset process. You\'ll need access to your registered email or phone number.',
        'worker': 'Worker',
        'worker_forgot_desc': 'Reset password for worker account',
        'employer': 'Employer',
        'employer_forgot_desc': 'Reset password for employer account',
        'click_to_continue': 'Click to continue',
        'back_to_help': 'Back to Help & Contact',
        'worker_forgot_title': 'Worker Password Reset',
        'worker_forgot_subtitle': 'Follow these steps',
        'worker_forgot_step1': 'Go to login page and click "Forgot Password"',
        'worker_forgot_step2': 'Enter your registered mobile number or email',
        'worker_forgot_step3': "You'll receive OTP via SMS/email",
        'worker_forgot_step4': 'Enter OTP and create a new password',
        'employer_forgot_title': 'Employer Password Reset',
        'employer_forgot_subtitle': 'Secure account recovery',
        'employer_forgot_step1': 'Visit employer login page and click "Forgot Password"',
        'employer_forgot_step2': 'Enter your registered company email',
        'employer_forgot_step3': 'Check your email for password reset link',
        'employer_forgot_step4': 'Click link and create a new password',
        // Three buttons
        'reset_password': 'Reset Password',
        'get_password': 'Get Password',
        'contact_support': 'Contact Support'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'forgot_title': 'पासवर्ड भूल गए?',
        'forgot_subtitle': 'चिंता न करें, हम रीसेट करने में मदद करेंगे',
        'forgot_general_text': 'नीचे अपना खाता प्रकार चुनें। हम आपको पासवर्ड रीसेट प्रक्रिया में मार्गदर्शन करेंगे। आपको अपने पंजीकृत ईमेल या फोन नंबर की आवश्यकता होगी।',
        'worker': 'कामगार',
        'worker_forgot_desc': 'कामगार खाते के लिए पासवर्ड रीसेट',
        'employer': 'नियोक्ता',
        'employer_forgot_desc': 'नियोक्ता खाते के लिए पासवर्ड रीसेट',
        'click_to_continue': 'जारी रखने के लिए क्लिक करें',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं',
        'worker_forgot_title': 'कामगार पासवर्ड रीसेट',
        'worker_forgot_subtitle': 'इन चरणों का पालन करें',
        'worker_forgot_step1': 'लॉगिन पेज पर जाएं और "पासवर्ड भूल गए" पर क्लिक करें',
        'worker_forgot_step2': 'अपना पंजीकृत मोबाइल नंबर या ईमेल दर्ज करें',
        'worker_forgot_step3': 'आपको एसएमएस/ईमेल पर ओटीपी मिलेगा',
        'worker_forgot_step4': 'ओटीपी दर्ज करें और नया पासवर्ड बनाएं',
        'employer_forgot_title': 'नियोक्ता पासवर्ड रीसेट',
        'employer_forgot_subtitle': 'सुरक्षित खाता पुनर्प्राप्ति',
        'employer_forgot_step1': 'नियोक्ता लॉगिन पेज पर जाएं और "पासवर्ड भूल गए" पर क्लिक करें',
        'employer_forgot_step2': 'अपना पंजीकृत कंपनी ईमेल दर्ज करें',
        'employer_forgot_step3': 'पासवर्ड रीसेट लिंक के लिए अपना ईमेल जांचें',
        'employer_forgot_step4': 'लिंक पर क्लिक करें और नया पासवर्ड बनाएं',
        // Three buttons
        'reset_password': 'पासवर्ड रीसेट करें',
        'get_password': 'पासवर्ड प्राप्त करें',
        'contact_support': 'सहायता से संपर्क करें'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'forgot_title': 'पासवर्ड विसरलात?',
        'forgot_subtitle': 'काळजी करू नका, आम्ही रीसेट करण्यात मदत करू',
        'forgot_general_text': 'खाली तुमचा खाते प्रकार निवडा. आम्ही तुम्हाला पासवर्ड रीसेट प्रक्रियेत मार्गदर्शन करू. तुम्हाला तुमच्या नोंदणीकृत ईमेल किंवा फोन नंबरची आवश्यकता असेल.',
        'worker': 'कामगार',
        'worker_forgot_desc': 'कामगार खात्यासाठी पासवर्ड रीसेट',
        'employer': 'नियोक्ता',
        'employer_forgot_desc': 'नियोक्ता खात्यासाठी पासवर्ड रीसेट',
        'click_to_continue': 'पुढे जाण्यासाठी क्लिक करा',
        'back_to_help': 'मदत आणि संपर्क वर परत जा',
        'worker_forgot_title': 'कामगार पासवर्ड रीसेट',
        'worker_forgot_subtitle': 'या चरणांचे अनुसरण करा',
        'worker_forgot_step1': 'लॉगिन पेजवर जा आणि "पासवर्ड विसरलात" वर क्लिक करा',
        'worker_forgot_step2': 'तुमचा नोंदणीकृत मोबाइल क्रमांक किंवा ईमेल प्रविष्ट करा',
        'worker_forgot_step3': 'तुम्हाला SMS/ईमेलवर OTP मिळेल',
        'worker_forgot_step4': 'OTP प्रविष्ट करा आणि नवीन पासवर्ड तयार करा',
        'employer_forgot_title': 'नियोक्ता पासवर्ड रीसेट',
        'employer_forgot_subtitle': 'सुरक्षित खाते पुनर्प्राप्ती',
        'employer_forgot_step1': 'नियोक्ता लॉगिन पेजवर जा आणि "पासवर्ड विसरलात" वर क्लिक करा',
        'employer_forgot_step2': 'तुमचा नोंदणीकृत कंपनी ईमेल प्रविष्ट करा',
        'employer_forgot_step3': 'पासवर्ड रीसेट लिंकसाठी तुमचा ईमेल तपासा',
        'employer_forgot_step4': 'लिंकवर क्लिक करा आणि नवीन पासवर्ड तयार करा',
        // Three buttons
        'reset_password': 'पासवर्ड रीसेट करा',
        'get_password': 'पासवर्ड मिळवा',
        'contact_support': 'समर्थनाशी संपर्क साधा'
    }
};

// ============================================
// THEME MANAGEMENT
// ============================================
function applyTheme(theme) {
    const body = document.body;
    ALL_THEMES.forEach(t => body.classList.remove(t));
    body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme);
    currentTheme = theme;
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function getSystemDefaultTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && ALL_THEMES.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        const systemTheme = getSystemDefaultTheme();
        applyTheme(systemTheme);
    }
}

function handleThemeChange(theme) {
    if (!ALL_THEMES.includes(theme)) return;
    applyTheme(theme);
    closeSettingsDropdown();
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
function applyLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function toggleSettingsDropdown(event) {
    event.stopPropagation();
    settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', 
        settingsDropdown.classList.contains('active') ? 'false' : 'true');
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIconRight.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// PAGE NAVIGATION
// ============================================
function openWorkerPage() {
    workerPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWorkerPage() {
    workerPage.classList.remove('active');
    document.body.style.overflow = '';
}

function openEmployerPage() {
    employerPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEmployerPage() {
    employerPage.classList.remove('active');
    document.body.style.overflow = '';
}

function goToPreviousPage() {
    window.history.back();
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Settings
    settingsIconRight.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    // Language
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });

    // Theme
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });

    // Role cards
    workerCard.addEventListener('click', openWorkerPage);
    employerCard.addEventListener('click', openEmployerPage);

    // Back buttons
    if (workerBackBtn) workerBackBtn.addEventListener('click', closeWorkerPage);
    if (employerBackBtn) employerBackBtn.addEventListener('click', closeEmployerPage);
    if (smallBackBtn) smallBackBtn.addEventListener('click', goToPreviousPage);

    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (workerPage.classList.contains('active')) closeWorkerPage();
            if (employerPage.classList.contains('active')) closeEmployerPage();
            if (settingsDropdown.classList.contains('active')) closeSettingsDropdown();
        }
    });

    // Window resize
    window.addEventListener('resize', () => {
        if (settingsDropdown.classList.contains('active')) {
            closeSettingsDropdown();
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    console.log('Forgot Password page initialized with 3 buttons');

    // Load saved language
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLanguage);

    // Load theme
    initTheme();

    // Setup event listeners
    setupEventListeners();
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}