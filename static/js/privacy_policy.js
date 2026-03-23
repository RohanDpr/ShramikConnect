/**
 * PRIVACY POLICY PAGE
 * Theme: light / dark / system
 * i18n: English / Hindi / Marathi
 * NOTE: Cards are hardcoded in HTML — JS sirf theme/language/sidebar ke liye hai
 */

const ALL_THEMES = ['light', 'dark', 'system'];
let currentLanguage = 'en';

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        'home': 'Home', 'help': 'Help', 'about': 'About', 'menu': 'Menu',
        'settings': 'Settings', 'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions', 'privacy_policy': 'Privacy Policy',
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        'privacy_subtitle': 'At ShramikConnect, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our platform.',
        'privacy_collect_title': 'Information We Collect',
        'privacy_use_title': 'How We Use Data',
        'privacy_worker_title': 'Worker Data',
        'privacy_employer_title': 'Employer Data',
        'privacy_location_title': 'Location Data',
        'privacy_security_title': 'Data Security',
        'privacy_sharing_title': 'Third-Party Sharing',
        'privacy_rights_title': 'User Rights',
        'privacy_retention_title': 'Data Retention',
        'privacy_contact_title': 'Contact',
        'privacy_collect_desc': 'Personal information, account details, and usage data we collect',
        'privacy_use_desc': 'How we use your information to provide and improve services',
        'privacy_worker_desc': 'Data collected specifically from workers on our platform',
        'privacy_employer_desc': 'Information we collect from employers and businesses',
        'privacy_location_desc': 'How we handle location data and GPS information',
        'privacy_security_desc': 'Measures we take to protect your data',
        'privacy_sharing_desc': 'When and how we share data with third parties',
        'privacy_rights_desc': 'Your rights regarding your personal data',
        'privacy_retention_desc': 'How long we keep your information',
        'privacy_contact_desc': 'How to contact us about privacy concerns',
        'tag_personal': 'personal', 'tag_account': 'account', 'tag_profile': 'profile',
        'tag_purpose': 'purpose', 'tag_service': 'service', 'tag_improvement': 'improvement',
        'tag_worker': 'worker', 'tag_skills': 'skills', 'tag_verification': 'verification',
        'tag_employer': 'employer', 'tag_business': 'business', 'tag_hiring': 'hiring',
        'tag_location': 'location', 'tag_gps': 'gps', 'tag_tracking': 'tracking',
        'tag_security': 'security', 'tag_encryption': 'encryption', 'tag_protection': 'protection',
        'tag_sharing': 'sharing', 'tag_third-party': 'third-party', 'tag_partners': 'partners',
        'tag_rights': 'rights', 'tag_access': 'access', 'tag_control': 'control',
        'tag_retention': 'retention', 'tag_storage': 'storage', 'tag_deletion': 'deletion',
        'tag_contact': 'contact', 'tag_questions': 'questions', 'tag_dpo': 'dpo',
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'privacy': 'Privacy Policy', 'terms': 'Terms & Conditions',
    },
    hi: {
        'home': 'होम', 'help': 'सहायता', 'about': 'के बारे में', 'menu': 'मेनू',
        'settings': 'सेटिंग्स', 'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें', 'privacy_policy': 'गोपनीयता नीति',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हल्का', 'dark': 'गहरा', 'system': 'सिस्टम',
        'privacy_subtitle': 'श्रमिककनेक्ट में, हम आपकी गोपनीयता को गंभीरता से लेते हैं।',
        'privacy_collect_title': 'हम क्या जानकारी एकत्र करते हैं',
        'privacy_use_title': 'हम डेटा का उपयोग कैसे करते हैं',
        'privacy_worker_title': 'कर्मचारी डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष साझाकरण',
        'privacy_rights_title': 'उपयोगकर्ता अधिकार',
        'privacy_retention_title': 'डेटा प्रतिधारण',
        'privacy_contact_title': 'संपर्क करें',
        'privacy_collect_desc': 'व्यक्तिगत जानकारी, खाता विवरण और उपयोग डेटा',
        'privacy_use_desc': 'सेवाएं प्रदान करने के लिए जानकारी का उपयोग',
        'privacy_worker_desc': 'प्लेटफॉर्म पर कर्मचारियों से एकत्र डेटा',
        'privacy_employer_desc': 'नियोक्ताओं से एकत्र जानकारी',
        'privacy_location_desc': 'स्थान डेटा और जीपीएस जानकारी',
        'privacy_security_desc': 'डेटा सुरक्षा के उपाय',
        'privacy_sharing_desc': 'तीसरे पक्ष के साथ डेटा साझाकरण',
        'privacy_rights_desc': 'आपके व्यक्तिगत डेटा के अधिकार',
        'privacy_retention_desc': 'जानकारी संग्रहण अवधि',
        'privacy_contact_desc': 'गोपनीयता संबंधी संपर्क',
        'tag_personal': 'व्यक्तिगत', 'tag_account': 'खाता', 'tag_profile': 'प्रोफ़ाइल',
        'tag_purpose': 'उद्देश्य', 'tag_service': 'सेवा', 'tag_improvement': 'सुधार',
        'tag_worker': 'कर्मचारी', 'tag_skills': 'कौशल', 'tag_verification': 'सत्यापन',
        'tag_employer': 'नियोक्ता', 'tag_business': 'व्यवसाय', 'tag_hiring': 'भर्ती',
        'tag_location': 'स्थान', 'tag_gps': 'जीपीएस', 'tag_tracking': 'ट्रैकिंग',
        'tag_security': 'सुरक्षा', 'tag_encryption': 'एन्क्रिप्शन', 'tag_protection': 'संरक्षण',
        'tag_sharing': 'साझाकरण', 'tag_third-party': 'तृतीय-पक्ष', 'tag_partners': 'भागीदार',
        'tag_rights': 'अधिकार', 'tag_access': 'पहुंच', 'tag_control': 'नियंत्रण',
        'tag_retention': 'प्रतिधारण', 'tag_storage': 'भंडारण', 'tag_deletion': 'हटाना',
        'tag_contact': 'संपर्क', 'tag_questions': 'प्रश्न', 'tag_dpo': 'डीपीओ',
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।',
        'privacy': 'गोपनीयता नीति', 'terms': 'नियम और शर्तें',
    },
    mr: {
        'home': 'होम', 'help': 'मदत', 'about': 'विषयी', 'menu': 'मेनू',
        'settings': 'सेटिंग्ज', 'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम', 'privacy_policy': 'गोपनीयता धोरण',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हलका', 'dark': 'गडद', 'system': 'सिस्टम',
        'privacy_subtitle': 'श्रमिककनेक्टमध्ये, आम्ही तुमच्या गोपनीयतेला गंभीरतेने घेतो.',
        'privacy_collect_title': 'आम्ही कोणती माहिती गोळा करतो',
        'privacy_use_title': 'आम्ही डेटा कसा वापरतो',
        'privacy_worker_title': 'कामगार डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष सामायिकरण',
        'privacy_rights_title': 'वापरकर्ता अधिकार',
        'privacy_retention_title': 'डेटा धारणा',
        'privacy_contact_title': 'संपर्क करा',
        'privacy_collect_desc': 'आम्ही गोळा करत असलेली वैयक्तिक माहिती',
        'privacy_use_desc': 'सेवा प्रदान करण्यासाठी माहितीचा वापर',
        'privacy_worker_desc': 'कामगारांकडून गोळा केलेला डेटा',
        'privacy_employer_desc': 'नियोक्त्यांकडून गोळा केलेली माहिती',
        'privacy_location_desc': 'स्थान डेटा आणि GPS माहिती',
        'privacy_security_desc': 'डेटा संरक्षणाचे उपाय',
        'privacy_sharing_desc': 'तृतीय पक्षांसह डेटा सामायिकरण',
        'privacy_rights_desc': 'वैयक्तिक डेटाचे अधिकार',
        'privacy_retention_desc': 'माहिती किती काळ ठेवतो',
        'privacy_contact_desc': 'गोपनीयता संपर्क',
        'tag_personal': 'वैयक्तिक', 'tag_account': 'खाते', 'tag_profile': 'प्रोफाइल',
        'tag_purpose': 'उद्देश', 'tag_service': 'सेवा', 'tag_improvement': 'सुधारणा',
        'tag_worker': 'कामगार', 'tag_skills': 'कौशल्ये', 'tag_verification': 'सत्यापन',
        'tag_employer': 'नियोक्ता', 'tag_business': 'व्यवसाय', 'tag_hiring': 'भरती',
        'tag_location': 'स्थान', 'tag_gps': 'जीपीएस', 'tag_tracking': 'ट्रॅकिंग',
        'tag_security': 'सुरक्षा', 'tag_encryption': 'एन्क्रिप्शन', 'tag_protection': 'संरक्षण',
        'tag_sharing': 'सामायिकरण', 'tag_third-party': 'तृतीय-पक्ष', 'tag_partners': 'भागीदार',
        'tag_rights': 'अधिकार', 'tag_access': 'प्रवेश', 'tag_control': 'नियंत्रण',
        'tag_retention': 'धारणा', 'tag_storage': 'संग्रहण', 'tag_deletion': 'हटवणे',
        'tag_contact': 'संपर्क', 'tag_questions': 'प्रश्न', 'tag_dpo': 'डीपीओ',
        'tagline': 'कामासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.',
        'privacy': 'गोपनीयता धोरण', 'terms': 'अटी आणि नियम',
    }
};

// ============================================
// LANGUAGE
// ============================================
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('privacyLanguage', lang);
    document.querySelectorAll('.language-option').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // FIX: Cards HTML mein hain — innerHTML clear NAHI karo, sirf text translate karo
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// THEME
// ============================================
function applyTheme(theme) {
    document.body.classList.remove('light', 'dark', 'system');
    document.body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme);
    document.querySelectorAll('.theme-option').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function initTheme() {
    var saved = localStorage.getItem('selectedTheme');
    if (saved && ALL_THEMES.indexOf(saved) !== -1) {
        applyTheme(saved);
    } else {
        applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function toggleSettingsDropdown(e) {
    e.stopPropagation();
    var el = document.getElementById('settingsDropdown');
    if (el) el.classList.toggle('active');
}

function closeSettingsDropdown() {
    var el = document.getElementById('settingsDropdown');
    if (el) el.classList.remove('active');
}

// ============================================
// SIDEBAR
// ============================================
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (!sidebar) return;
    sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    closeSettingsDropdown();
}

// ============================================
// INIT
// ============================================
function init() {
    // Theme
    initTheme();

    // Language
    var savedLang = localStorage.getItem('privacyLanguage') || 'en';
    currentLanguage = savedLang;
    document.querySelectorAll('.language-option').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    applyLanguage(savedLang);

    // Sidebar
    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var sidebarOverlay = document.getElementById('sidebarOverlay');
    var sidebarClose = document.getElementById('sidebarClose');
    var sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');

    if (hamburgerBtn)        hamburgerBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay)      sidebarOverlay.addEventListener('click', closeSidebar);
    if (sidebarClose)        sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarSettingsIcon) sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);

    // Language & Theme buttons
    document.querySelectorAll('.language-option').forEach(function(btn) {
        btn.addEventListener('click', function() { handleLanguageChange(btn.dataset.lang); });
    });
    document.querySelectorAll('.theme-option').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (ALL_THEMES.indexOf(btn.dataset.theme) !== -1) applyTheme(btn.dataset.theme);
            closeSettingsDropdown();
        });
    });

    // Close settings on outside click
    document.addEventListener('click', function(e) {
        var icon = document.getElementById('sidebarSettingsIcon');
        var dropdown = document.getElementById('settingsDropdown');
        if (icon && dropdown && !icon.contains(e.target) && !dropdown.contains(e.target)) {
            closeSettingsDropdown();
        }
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { closeSidebar(); closeSettingsDropdown(); }
    });

    // Resize
    window.addEventListener('resize', function() {
        var s = document.getElementById('sidebar');
        if (window.innerWidth > 768 && s && s.classList.contains('active')) closeSidebar();
    });
}

// DOM ready check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}