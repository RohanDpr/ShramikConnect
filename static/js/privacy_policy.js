/**
 * PRIVACY POLICY PAGE
 * With 3-theme system (light, dark, system) and i18n
 * EXACT SAME DESIGN AS TERMS PAGE
 */

// ============================================
// DOM ELEMENTS
// ============================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const homeLink = document.getElementById('homeLink');
const navHome = document.getElementById('navHome');
const logoContainer = document.getElementById('logoContainer');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const cardsContainer = document.getElementById('cardsContainer');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
let previousPage = 'index.html';
const ALL_THEMES = ["light", "dark", "system"];

// ============================================
// PRIVACY CARDS DATA - WITH URLs
// ============================================
const privacyCards = [
    {
        id: 'collect',
        icon: 'fa-database',
        titleKey: 'privacy_collect_title',
        descKey: 'privacy_collect_desc',
        tags: ['personal', 'account', 'profile'],
        url: 'privacy/collect.html',
        special: true
    },
    {
        id: 'use',
        icon: 'fa-chart-line',
        titleKey: 'privacy_use_title',
        descKey: 'privacy_use_desc',
        tags: ['purpose', 'service', 'improvement'],
        url: 'privacy/use.html',
        special: true
    },
    {
        id: 'worker',
        icon: 'fa-hard-hat',
        titleKey: 'privacy_worker_title',
        descKey: 'privacy_worker_desc',
        tags: ['worker', 'skills', 'verification'],
        url: 'privacy/worker.html'
    },
    {
        id: 'employer',
        icon: 'fa-building',
        titleKey: 'privacy_employer_title',
        descKey: 'privacy_employer_desc',
        tags: ['employer', 'business', 'hiring'],
        url: 'privacy/employer.html'
    },
    {
        id: 'location',
        icon: 'fa-map-marker-alt',
        titleKey: 'privacy_location_title',
        descKey: 'privacy_location_desc',
        tags: ['location', 'gps', 'tracking'],
        url: 'privacy/location.html'
    },
    {
        id: 'payments',
        icon: 'fa-credit-card',
        titleKey: 'privacy_payments_title',
        descKey: 'privacy_payments_desc',
        tags: ['payment', 'transaction', 'financial'],
        url: 'privacy/payments.html'
    },
    {
        id: 'cookies',
        icon: 'fa-cookie-bite',
        titleKey: 'privacy_cookies_title',
        descKey: 'privacy_cookies_desc',
        tags: ['cookies', 'tracking', 'preferences'],
        url: 'privacy/cookies.html'
    },
    {
        id: 'security',
        icon: 'fa-shield-halved',
        titleKey: 'privacy_security_title',
        descKey: 'privacy_security_desc',
        tags: ['security', 'encryption', 'protection'],
        url: 'privacy/security.html'
    },
    {
        id: 'sharing',
        icon: 'fa-share-alt',
        titleKey: 'privacy_sharing_title',
        descKey: 'privacy_sharing_desc',
        tags: ['sharing', 'third-party', 'partners'],
        url: 'privacy/sharing.html'
    },
    {
        id: 'rights',
        icon: 'fa-scale-balanced',
        titleKey: 'privacy_rights_title',
        descKey: 'privacy_rights_desc',
        tags: ['rights', 'access', 'control'],
        url: 'privacy/rights.html'
    },
    {
        id: 'retention',
        icon: 'fa-clock',
        titleKey: 'privacy_retention_title',
        descKey: 'privacy_retention_desc',
        tags: ['retention', 'storage', 'deletion'],
        url: 'privacy/retention.html'
    },
    {
        id: 'contact',
        icon: 'fa-envelope',
        titleKey: 'privacy_contact_title',
        descKey: 'privacy_contact_desc',
        tags: ['contact', 'questions', 'dpo'],
        url: 'privacy/contact.html'
    }
];

// ============================================
// FULL TRANSLATIONS
// ============================================
const translations = {
    en: {
        // Navigation
        'home': 'Home', 'help': 'Help', 'about': 'About', 'menu': 'Menu',
        'settings': 'Settings', 'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions', 'privacy_policy': 'Privacy Policy',
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        
        // Header
        'privacy_subtitle': 'At ShramikConnect, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our platform. We are committed to ensuring that your privacy is protected and maintained.',
        
        // Card Titles
        'privacy_collect_title': 'Information We Collect',
        'privacy_use_title': 'How We Use Data',
        'privacy_worker_title': 'Worker Data',
        'privacy_employer_title': 'Employer Data',
        'privacy_location_title': 'Location Data',
        'privacy_payments_title': 'Payments',
        'privacy_cookies_title': 'Cookies',
        'privacy_security_title': 'Data Security',
        'privacy_sharing_title': 'Third-Party Sharing',
        'privacy_rights_title': 'User Rights',
        'privacy_retention_title': 'Data Retention',
        'privacy_contact_title': 'Contact',
        
        // Card Descriptions
        'privacy_collect_desc': 'Personal information, account details, and usage data we collect',
        'privacy_use_desc': 'How we use your information to provide and improve services',
        'privacy_worker_desc': 'Data collected specifically from workers on our platform',
        'privacy_employer_desc': 'Information we collect from employers and businesses',
        'privacy_location_desc': 'How we handle location data and GPS information',
        'privacy_payments_desc': 'Payment information and financial data protection',
        'privacy_cookies_desc': 'How we use cookies and similar tracking technologies',
        'privacy_security_desc': 'Measures we take to protect your data',
        'privacy_sharing_desc': 'When and how we share data with third parties',
        'privacy_rights_desc': 'Your rights regarding your personal data',
        'privacy_retention_desc': 'How long we keep your information',
        'privacy_contact_desc': 'How to contact us about privacy concerns',
        
        // Tags
        'tag_personal': 'personal',
        'tag_account': 'account',
        'tag_profile': 'profile',
        'tag_purpose': 'purpose',
        'tag_service': 'service',
        'tag_improvement': 'improvement',
        'tag_worker': 'worker',
        'tag_skills': 'skills',
        'tag_verification': 'verification',
        'tag_employer': 'employer',
        'tag_business': 'business',
        'tag_hiring': 'hiring',
        'tag_location': 'location',
        'tag_gps': 'gps',
        'tag_tracking': 'tracking',
        'tag_payment': 'payment',
        'tag_transaction': 'transaction',
        'tag_financial': 'financial',
        'tag_cookies': 'cookies',
        'tag_preferences': 'preferences',
        'tag_security': 'security',
        'tag_encryption': 'encryption',
        'tag_protection': 'protection',
        'tag_sharing': 'sharing',
        'tag_third-party': 'third-party',
        'tag_partners': 'partners',
        'tag_rights': 'rights',
        'tag_access': 'access',
        'tag_control': 'control',
        'tag_retention': 'retention',
        'tag_storage': 'storage',
        'tag_deletion': 'deletion',
        'tag_contact': 'contact',
        'tag_questions': 'questions',
        'tag_dpo': 'dpo',
        
        // Footer
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions'
    },
    hi: {
        // Hindi translations
        'home': 'होम', 'help': 'सहायता', 'about': 'के बारे में', 'menu': 'मेनू',
        'settings': 'सेटिंग्स', 'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें', 'privacy_policy': 'गोपनीयता नीति',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हल्का', 'dark': 'गहरा', 'system': 'सिस्टम',
        
        'privacy_subtitle': 'श्रमिककनेक्ट में, हम आपकी गोपनीयता को गंभीरता से लेते हैं। यह नीति बताती है कि हम आपके प्लेटफॉर्म का उपयोग करते समय आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
        
        'privacy_collect_title': 'हम क्या जानकारी एकत्र करते हैं',
        'privacy_use_title': 'हम डेटा का उपयोग कैसे करते हैं',
        'privacy_worker_title': 'कर्मचारी डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_payments_title': 'भुगतान',
        'privacy_cookies_title': 'कुकीज़',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष साझाकरण',
        'privacy_rights_title': 'उपयोगकर्ता अधिकार',
        'privacy_retention_title': 'डेटा प्रतिधारण',
        'privacy_contact_title': 'संपर्क करें',
        
        'privacy_collect_desc': 'व्यक्तिगत जानकारी, खाता विवरण और उपयोग डेटा जो हम एकत्र करते हैं',
        'privacy_use_desc': 'सेवाएं प्रदान करने और सुधारने के लिए हम आपकी जानकारी का उपयोग कैसे करते हैं',
        'privacy_worker_desc': 'हमारे प्लेटफॉर्म पर कर्मचारियों से विशेष रूप से एकत्र किया गया डेटा',
        'privacy_employer_desc': 'हम नियोक्ताओं और व्यवसायों से क्या जानकारी एकत्र करते हैं',
        'privacy_location_desc': 'हम स्थान डेटा और जीपीएस जानकारी कैसे संभालते हैं',
        'privacy_payments_desc': 'भुगतान जानकारी और वित्तीय डेटा सुरक्षा',
        'privacy_cookies_desc': 'हम कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग कैसे करते हैं',
        'privacy_security_desc': 'आपके डेटा की सुरक्षा के लिए हम जो उपाय करते हैं',
        'privacy_sharing_desc': 'हम तीसरे पक्ष के साथ डेटा कब और कैसे साझा करते हैं',
        'privacy_rights_desc': 'आपके व्यक्तिगत डेटा के संबंध में आपके अधिकार',
        'privacy_retention_desc': 'हम आपकी जानकारी को कितने समय तक रखते हैं',
        'privacy_contact_desc': 'गोपनीयता संबंधी चिंताओं के बारे में हमसे कैसे संपर्क करें',
        
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।'
    },
    mr: {
        // Marathi translations
        'home': 'होम', 'help': 'मदत', 'about': 'विषयी', 'menu': 'मेनू',
        'settings': 'सेटिंग्ज', 'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम', 'privacy_policy': 'गोपनीयता धोरण',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हलका', 'dark': 'गडद', 'system': 'सिस्टम',
        
        'privacy_subtitle': 'श्रमिककनेक्टमध्ये, आम्ही तुमच्या गोपनीयतेला गंभीरतेने घेतो. हे धोरण वर्णन करते की आम्ही तुमचा प्लॅटफॉर्म वापरताना तुमची वैयक्तिक माहिती कशी गोळा, वापर आणि संरक्षित करतो.',
        
        'privacy_collect_title': 'आम्ही कोणती माहिती गोळा करतो',
        'privacy_use_title': 'आम्ही डेटा कसा वापरतो',
        'privacy_worker_title': 'कामगार डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_payments_title': 'देयके',
        'privacy_cookies_title': 'कुकीज',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष सामायिकरण',
        'privacy_rights_title': 'वापरकर्ता अधिकार',
        'privacy_retention_title': 'डेटा धारणा',
        'privacy_contact_title': 'संपर्क करा',
        
        'tagline': 'कामासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.'
    }
};

// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    
    refreshCards();
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    languageOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    applyLanguage(lang);
    closeSettingsDropdown();
}

function refreshCards() {
    if (cardsContainer) {
        cardsContainer.innerHTML = '';
        createPrivacyCards();
    }
}

// ============================================
// THEME FUNCTIONS
// ============================================
function applyTheme(theme) {
    document.body.classList.remove(...ALL_THEMES);
    document.body.classList.add(theme);
    localStorage.setItem("selectedTheme", theme);
    currentTheme = theme;
    themeOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme));
}

function getSystemDefaultTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme() {
    const saved = localStorage.getItem("selectedTheme");
    if (saved && ALL_THEMES.includes(saved)) applyTheme(saved);
    else applyTheme(getSystemDefaultTheme());
}

function handleThemeChange(theme) {
    if (ALL_THEMES.includes(theme)) applyTheme(theme);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function toggleSettingsDropdown(e) {
    e.stopPropagation();
    settingsDropdown.classList.toggle('active');
}
function closeSettingsDropdown() { settingsDropdown.classList.remove('active'); }
function closeSettingsOnClickOutside(e) {
    if (!sidebarSettingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) closeSettingsDropdown();
}

// ============================================
// SIDEBAR & NAVIGATION
// ============================================
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeSettingsDropdown();
}

function setupNavigation() {
    // Get the previous page from localStorage
    let previousPage = localStorage.getItem('previousPage');
    
    // If no previous page exists, go to homepage
    if (!previousPage) {
        previousPage = '/';
    }
    
    const homeElements = [homeLink, navHome, logoContainer];
    
    homeElements.forEach(el => {
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = previousPage;
            });
        }
    });
}

// ============================================
// PRIVACY CARDS CREATION - EXACT SAME AS TERMS PAGE
// ============================================
function createPrivacyCards() {
    if (!cardsContainer) return;
    
    const t = translations[currentLanguage];
    
    privacyCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `privacy-card ${card.id}`;
        cardElement.dataset.cardId = card.id;
        
        if (index < 2) {
            cardElement.classList.add('special');
        }
        
        const tagsHTML = card.tags.map(tag => 
            `<span class="tag" data-i18n="tag_${tag}">${t[`tag_${tag}`] || tag}</span>`
        ).join('');
        
        cardElement.innerHTML = `
            <div class="card-icon">
                <i class="fas ${card.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${t[card.titleKey] || card.titleKey}</h3>
                <p>${t[card.descKey] || card.descKey}</p>
                <div class="card-tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="card-action">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;
        
        cardElement.addEventListener('click', () => {
            handleCardClick(card.url);
        });
        
        cardsContainer.appendChild(cardElement);
    });
}

function handleCardClick(url) {
    window.location.href = url;
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    hamburgerBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    languageOptions.forEach(btn => btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang)));
    themeOptions.forEach(btn => btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme)));

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSidebar(); closeSettingsDropdown(); } });
}

// ============================================
// INIT
// ============================================

function init() {
    console.log('Privacy Policy Page Initialized');
    
    // Save the previous page from referrer
    const referrer = document.referrer;
    const currentPage = window.location.href;
    
    // Only save if coming from another page on the same site
    if (referrer && referrer !== currentPage && referrer.includes(window.location.hostname)) {
        localStorage.setItem('previousPage', referrer);
    } else if (!localStorage.getItem('previousPage')) {
        // If no previous page, set default
        localStorage.setItem('previousPage', '/');
    }
    
    const savedLang = localStorage.getItem('privacyLanguage') || 'en';
    handleLanguageChange(savedLang);
    
    initTheme();
    setupNavigation();
    createPrivacyCards();
    setupEventListeners();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();