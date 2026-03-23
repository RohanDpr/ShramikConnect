/**
 * Password Recovery Page - JavaScript
 * Simple implementation with language switching, theme switching, and proper redirects
 */

// DOM Elements
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const getPasswordBtn = document.getElementById('getPasswordBtn');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const optionCards = document.querySelectorAll('.option-card');

// State Variables
let currentLanguage = 'en';
let currentTheme = 'light';

// i18n Translation Dictionary
const translations = {
    en: {
        // Page title
        'password_recovery': 'Password Recovery',
        'choose_recovery_method': 'Choose how you\'d like to recover your password',
        
        // Option 1
        'get_password': 'Get Your Password',
        'get_password_desc': 'Receive your current password directly via email or SMS. This is the fastest way if you\'ve forgotten your password.',
        'instant_delivery': 'Instant delivery',
        'no_change_required': 'No password change required',
        'direct_contact': 'Direct to your registered contact',
        'get_password_now': 'Get Password Now',
        
        // Option 2
        'reset_password': 'Reset Your Password',
        'reset_password_desc': 'Reset your password using OTP verification. More secure option if you suspect unauthorized access.',
        'enhanced_security': 'Enhanced security',
        'otp_verification': 'OTP verification required',
        'set_new_password': 'Set a new password',
        'reset_password_btn': 'Reset Password',
        
        // Divider
        'or': 'OR',
        
        // Help section
        'need_help': 'Need Help...?',
        'contact_support': 'Contact our support team',
        'quick_response': 'We\'ll respond quickly to assist you',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System'
    },
    hi: {
        // Page title
        'password_recovery': 'पासवर्ड पुनर्प्राप्ति',
        'choose_recovery_method': 'चुनें कि आप अपना पासवर्ड कैसे पुनर्प्राप्त करना चाहते हैं',
        
        // Option 1
        'get_password': 'अपना पासवर्ड प्राप्त करें',
        'get_password_desc': 'ईमेल या एसएमएस के माध्यम से सीधे अपना वर्तमान पासवर्ड प्राप्त करें। यदि आप अपना पासवर्ड भूल गए हैं तो यह सबसे तेज़ तरीका है।',
        'instant_delivery': 'तुरंत वितरण',
        'no_change_required': 'पासवर्ड परिवर्तन की आवश्यकता नहीं',
        'direct_contact': 'आपके पंजीकृत संपर्क पर सीधे',
        'get_password_now': 'अभी पासवर्ड प्राप्त करें',
        
        // Option 2
        'reset_password': 'अपना पासवर्ड रीसेट करें',
        'reset_password_desc': 'OTP सत्यापन का उपयोग करके अपना पासवर्ड रीसेट करें। यदि आपको अनधिकृत पहुंच का संदेह है तो यह अधिक सुरक्षित विकल्प है।',
        'enhanced_security': 'उन्नत सुरक्षा',
        'otp_verification': 'OTP सत्यापन आवश्यक',
        'set_new_password': 'एक नया पासवर्ड सेट करें',
        'reset_password_btn': 'पासवर्ड रीसेट करें',
        
        // Divider
        'or': 'या',
        
        // Help section
        'need_help': 'सहायता चाहिए...?',
        'contact_support': 'हमारी सहायता टीम से संपर्क करें',
        'quick_response': 'आपकी सहायता करने के लिए हम जल्दी से प्रतिक्रिया देंगे',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम'
    },
    mr: {
        // Page title
        'password_recovery': 'पासवर्ड पुनर्प्राप्ती',
        'choose_recovery_method': 'आपला पासवर्ड कसा पुनर्प्राप्त करायचा आहे ते निवडा',
        
        // Option 1
        'get_password': 'आपला पासवर्ड मिळवा',
        'get_password_desc': 'ईमेल किंवा एसएमएस द्वारे थेट आपला सध्याचा पासवर्ड प्राप्त करा. आपण आपला पासवर्ड विसरलात तर हा सर्वात वेगवान मार्ग आहे.',
        'instant_delivery': 'तत्काळ वितरण',
        'no_change_required': 'पासवर्ड बदल आवश्यक नाही',
        'direct_contact': 'आपल्या नोंदणीकृत संपर्कावर थेट',
        'get_password_now': 'आत्ताच पासवर्ड मिळवा',
        
        // Option 2
        'reset_password': 'आपला पासवर्ड रीसेट करा',
        'reset_password_desc': 'OTP सत्यापन वापरून आपला पासवर्ड रीसेट करा. अनधिकृत प्रवेशाचा संशय असल्यास हा अधिक सुरक्षित पर्याय आहे.',
        'enhanced_security': 'उन्नत सुरक्षा',
        'otp_verification': 'OTP सत्यापन आवश्यक',
        'set_new_password': 'नवीन पासवर्ड सेट करा',
        'reset_password_btn': 'पासवर्ड रीसेट करा',
        
        // Divider
        'or': 'किंवा',
        
        // Help section
        'need_help': 'मदत हवी...?',
        'contact_support': 'आमच्या समर्थन संघाशी संपर्क साधा',
        'quick_response': 'आपली मदत करण्यासाठी आम्ही लवकर प्रतिसाद देऊ',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'फिका',
        'dark': 'गडद',
        'system': 'सिस्टम'
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Password Recovery Page Initialized');
    
    // Load saved preferences
    loadPreferences();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update UI with saved preferences
    updateUI();
}

/**
 * Load user preferences from localStorage
 */
function loadPreferences() {
    // Load language preference
    const savedLanguage = localStorage.getItem('passwordRecoveryLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('passwordRecoveryTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
    }
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Settings dropdown toggle
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    
    // Close settings when clicking outside
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    // Button click handlers with proper redirects
    getPasswordBtn.addEventListener('click', handleGetPassword);
    resetPasswordBtn.addEventListener('click', handleResetPassword);
    
    // Language switcher
    languageOptions.forEach(btn => {
        btn.addEventListener('click', handleLanguageChange);
    });
    
    // Theme switcher
    themeOptions.forEach(btn => {
        btn.addEventListener('click', handleThemeChange);
    });
    
    // Add click effect to option cards
    optionCards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
}

/**
 * Update UI with current preferences
 */
function updateUI() {
    // Update translations
    updateTranslations();
    
    // Update theme
    applyTheme(currentTheme);
    
    // Update active buttons in settings
    updateActiveButtons();
}

/**
 * Toggle settings dropdown visibility
 */
function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    
    if (isActive) {
        settingsIcon.setAttribute('aria-expanded', 'true');
        settingsIcon.style.transform = 'scale(1.1)';
    } else {
        settingsIcon.setAttribute('aria-expanded', 'false');
        settingsIcon.style.transform = 'scale(1)';
    }
}

/**
 * Close settings dropdown when clicking outside
 */
function closeSettingsOnClickOutside(event) {
    if (!settingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
        settingsIcon.style.transform = 'scale(1)';
    }
}

/**
 * Handle Get Password button click
 * Redirects to /get_password_employer/ (Django URL)
 */
function handleGetPassword() {
    // Animation only - navigation handled by <a> tag in HTML
    getPasswordBtn.style.transform = 'scale(0.98)';
    setTimeout(() => {
        getPasswordBtn.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Handle Reset Password button click
 * Redirects to /change_password_employer/ (Django URL)
 */
function handleResetPassword() {
    // Animation only - navigation handled by <a> tag in HTML
    resetPasswordBtn.style.transform = 'scale(0.98)';
    setTimeout(() => {
        resetPasswordBtn.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Handle card click effect
 */
function handleCardClick(event) {
    const card = event.currentTarget;
    
    // Add click effect
    card.style.transform = 'scale(0.98)';
    
    // Remove click effect after delay
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
}

/**
 * Handle language change
 */
function handleLanguageChange(event) {
    const lang = event.currentTarget.dataset.lang;
    setLanguage(lang);
    
    // Update active button
    updateActiveButtons();
}

/**
 * Set application language
 */
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('passwordRecoveryLanguage', lang);
        updateTranslations();
    }
}

/**
 * Update all translations on the page
 */
function updateTranslations() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update page title
    document.title = t['password_recovery'];
}

/**
 * Handle theme change
 */
function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    setTheme(theme);
    
    // Update active button
    updateActiveButtons();
}

/**
 * Set application theme
 */
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('passwordRecoveryTheme', theme);
    applyTheme(theme);
}

/**
 * Apply theme to the page
 */
function applyTheme(theme) {
    let themeToApply = theme;
    
    // If theme is 'system', check system preference
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme');
    
    // Add new theme class
    document.body.classList.add(themeToApply + '-theme');
}

/**
 * Update active buttons in settings dropdown
 */
function updateActiveButtons() {
    // Update language buttons
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    
    // Update theme buttons
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
}

/**
 * Handle system theme changes when theme is set to 'system'
 */
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });
}

// Log initialization
console.log('Password Recovery Page Ready');