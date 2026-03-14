/**
 * TROUBLE IN LOGIN PAGE - EXACT HELP & CONTACT THEME
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
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        'back': 'Back',
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        'login_trouble_title': 'Trouble in Login?',
        'login_trouble_subtitle': "Don't worry, we're here to help",
        'general_instructions_text': 'Before proceeding, please ensure you have access to your registered email or phone number. Select your account type below for specific troubleshooting steps.',
        'worker': 'Worker',
        'worker_desc': 'I\'m looking for work',
        'employer': 'Employer',
        'employer_desc': 'I\'m hiring workers',
        'click_to_continue': 'Click to continue',
        'back_to_help': 'Back to Help & Contact',
        'worker_page_title': 'Worker Login Help',
        'worker_page_subtitle': 'Steps to recover your account',
        'worker_step1': 'Use your registered mobile number or email',
        'worker_step2': 'Click "Get Password" to receive via SMS',
        'worker_step3': 'Use "Reset Password" if needed',
        'worker_step4': 'Call helpline: 1800-123-4567',
        'employer_page_title': 'Employer Login Help',
        'employer_page_subtitle': 'Steps to recover your account',
        'employer_step1': 'Use your company email address',
        'employer_step2': 'Click "Get Password" to receive on email',
        'employer_step3': 'Use "Reset Password" to set new password',
        'employer_step4': 'Call support: 1800-987-6543',
        'get_password': 'Get your password',
        'reset_password': 'Reset your password'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'login_trouble_title': 'लॉगिन में समस्या?',
        'login_trouble_subtitle': 'चिंता न करें, हम मदद के लिए यहाँ हैं',
        'general_instructions_text': 'आगे बढ़ने से पहले, कृपया सुनिश्चित करें कि आपके पास पंजीकृत ईमेल या फोन नंबर है। विशिष्ट समस्या निवारण चरणों के लिए नीचे अपना खाता प्रकार चुनें।',
        'worker': 'कामगार',
        'worker_desc': 'मैं काम ढूंढ रहा हूं',
        'employer': 'नियोक्ता',
        'employer_desc': 'मैं कामगारों को नियुक्त कर रहा हूं',
        'click_to_continue': 'जारी रखने के लिए क्लिक करें',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं',
        'worker_page_title': 'कामगार लॉगिन सहायता',
        'worker_page_subtitle': 'अपना खाता पुनर्प्राप्त करने के चरण',
        'worker_step1': 'अपना पंजीकृत मोबाइल नंबर या ईमेल उपयोग करें',
        'worker_step2': '"पासवर्ड प्राप्त करें" पर क्लिक करें, SMS में मिलेगा',
        'worker_step3': 'ज़रूरत हो तो "पासवर्ड रीसेट करें" उपयोग करें',
        'worker_step4': 'हेल्पलाइन: 1800-123-4567 पर कॉल करें',
        'employer_page_title': 'नियोक्ता लॉगिन सहायता',
        'employer_page_subtitle': 'अपना खाता पुनर्प्राप्त करने के चरण',
        'employer_step1': 'अपना कंपनी ईमेल पता उपयोग करें',
        'employer_step2': '"पासवर्ड प्राप्त करें" पर क्लिक करें, ईमेल पर मिलेगा',
        'employer_step3': 'नया पासवर्ड सेट करने के लिए "पासवर्ड रीसेट करें" उपयोग करें',
        'employer_step4': 'सहायता: 1800-987-6543 पर कॉल करें',
        'get_password': 'पासवर्ड प्राप्त करें',
        'reset_password': 'पासवर्ड रीसेट करें'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'login_trouble_title': 'लॉगिनमध्ये अडचण?',
        'login_trouble_subtitle': 'काळजी करू नका, आम्ही मदतीसाठी येथे आहोत',
        'general_instructions_text': 'पुढे जाण्यापूर्वी, कृपया तुमच्याकडे नोंदणीकृत ईमेल किंवा फोन नंबर आहे याची खात्री करा. विशिष्ट समस्या निवारण चरणांसाठी खाली तुमचा खाते प्रकार निवडा.',
        'worker': 'कामगार',
        'worker_desc': 'मी काम शोधत आहे',
        'employer': 'नियोक्ता',
        'employer_desc': 'मी कामगार नियुक्त करत आहे',
        'click_to_continue': 'पुढे जाण्यासाठी क्लिक करा',
        'back_to_help': 'मदत आणि संपर्क वर परत जा',
        'worker_page_title': 'कामगार लॉगिन मदत',
        'worker_page_subtitle': 'तुमचे खाते पुनर्प्राप्त करण्यासाठी चरण',
        'worker_step1': 'तुमचा नोंदणीकृत मोबाइल क्रमांक किंवा ईमेल वापरा',
        'worker_step2': '"पासवर्ड मिळवा" वर क्लिक करा, SMS वर मिळेल',
        'worker_step3': 'आवश्यक असल्यास "पासवर्ड रीसेट करा" वापरा',
        'worker_step4': 'हेल्पलाइन: 1800-123-4567 वर कॉल करा',
        'employer_page_title': 'नियोक्ता लॉगिन मदत',
        'employer_page_subtitle': 'तुमचे खाते पुनर्प्राप्त करण्यासाठी चरण',
        'employer_step1': 'तुमचा कंपनी ईमेल पत्ता वापरा',
        'employer_step2': '"पासवर्ड मिळवा" वर क्लिक करा, ईमेलवर मिळेल',
        'employer_step3': 'नवीन पासवर्ड सेट करण्यासाठी "पासवर्ड रीसेट करा" वापरा',
        'employer_step4': 'समर्थन: 1800-987-6543 वर कॉल करा',
        'get_password': 'पासवर्ड मिळवा',
        'reset_password': 'पासवर्ड रीसेट करा'
    }
};

// ============================================
// THEME MANAGEMENT (Exactly like help & contact)
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

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translation[key]) {
            element.placeholder = translation[key];
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

    // Window resize - close settings on resize if open
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
    console.log('Trouble in Login page initialized with full theme support');

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