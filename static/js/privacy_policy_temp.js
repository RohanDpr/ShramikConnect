/**
 * PRIVACY POLICY PAGE
 * With 3-theme system (light, dark, system) and i18n
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
const ALL_THEMES = ["light", "dark", "system"];

// ============================================
// PRIVACY CARDS DATA - 10 CARDS
// ============================================
const privacyCards = [
    {
        id: 'collect',
        icon: 'fa-database',
        titleKey: 'privacy_collect_title',
        descKey: 'privacy_collect_desc',
        tags: ['personal', 'account', 'profile'],
        special: true
    },
    {
        id: 'use',
        icon: 'fa-chart-line',
        titleKey: 'privacy_use_title',
        descKey: 'privacy_use_desc',
        tags: ['purpose', 'service', 'improvement'],
        special: true
    },
    {
        id: 'worker',
        icon: 'fa-hard-hat',
        titleKey: 'privacy_worker_title',
        descKey: 'privacy_worker_desc',
        tags: ['worker', 'skills', 'verification']
    },
    {
        id: 'employer',
        icon: 'fa-building',
        titleKey: 'privacy_employer_title',
        descKey: 'privacy_employer_desc',
        tags: ['employer', 'business', 'hiring']
    },
    {
        id: 'location',
        icon: 'fa-map-marker-alt',
        titleKey: 'privacy_location_title',
        descKey: 'privacy_location_desc',
        tags: ['location', 'gps', 'tracking']
    },
    {
        id: 'security',
        icon: 'fa-shield-halved',
        titleKey: 'privacy_security_title',
        descKey: 'privacy_security_desc',
        tags: ['security', 'encryption', 'protection']
    },
    {
        id: 'sharing',
        icon: 'fa-share-alt',
        titleKey: 'privacy_sharing_title',
        descKey: 'privacy_sharing_desc',
        tags: ['sharing', 'third-party', 'partners']
    },
    {
        id: 'rights',
        icon: 'fa-scale-balanced',
        titleKey: 'privacy_rights_title',
        descKey: 'privacy_rights_desc',
        tags: ['rights', 'access', 'control']
    },
    {
        id: 'retention',
        icon: 'fa-clock',
        titleKey: 'privacy_retention_title',
        descKey: 'privacy_retention_desc',
        tags: ['retention', 'storage', 'deletion']
    },
    {
        id: 'contact',
        icon: 'fa-envelope',
        titleKey: 'privacy_contact_title',
        descKey: 'privacy_contact_desc',
        tags: ['contact', 'questions', 'dpo']
    }
];

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
        'privacy_contact_title': 'Contact Us',
        
        'privacy_collect_desc': 'Personal information, account details, and usage data we collect to provide better services',
        'privacy_use_desc': 'How we use your information to provide, improve, and personalize our services',
        'privacy_worker_desc': 'Data collected specifically from workers on our platform including skills and verification',
        'privacy_employer_desc': 'Information we collect from employers and businesses for hiring purposes',
        'privacy_location_desc': 'How we handle location data and GPS information for job matching',
        'privacy_security_desc': 'Measures we take to protect your data with encryption and security protocols',
        'privacy_sharing_desc': 'When and how we share data with third parties and service providers',
        'privacy_rights_desc': 'Your rights regarding your personal data including access and deletion',
        'privacy_retention_desc': 'How long we keep your information and when we delete it',
        'privacy_contact_desc': 'How to contact us about privacy concerns and data requests',
        
        // Tags
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
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions',
        'platform': 'Platform',
        'for_workers': 'For Workers',
        'for_employers': 'For Employers',
        'company': 'Company',
        'how_it_works': 'How It Works',
        'support': 'Support'
    },
    hi: {
        'home': 'होम', 'help': 'सहायता', 'about': 'हमारे बारे में', 'menu': 'मेनू',
        'settings': 'सेटिंग्स', 'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें', 'privacy_policy': 'गोपनीयता नीति',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हल्का', 'dark': 'गहरा', 'system': 'सिस्टम',
        
        'privacy_subtitle': 'श्रमिक कनेक्ट पर, हम आपकी गोपनीयता को गंभीरता से लेते हैं। यह नीति बताती है कि हम आपके व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
        
        'privacy_collect_title': 'हम क्या जानकारी एकत्र करते हैं',
        'privacy_use_title': 'डेटा का उपयोग कैसे करते हैं',
        'privacy_worker_title': 'श्रमिक डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष साझाकरण',
        'privacy_rights_title': 'उपयोगकर्ता अधिकार',
        'privacy_retention_title': 'डेटा प्रतिधारण',
        'privacy_contact_title': 'संपर्क करें',
        
        'privacy_collect_desc': 'व्यक्तिगत जानकारी, खाता विवरण और उपयोग डेटा जो हम एकत्र करते हैं',
        'privacy_use_desc': 'हम आपकी जानकारी का उपयोग सेवाएं प्रदान करने और सुधारने के लिए कैसे करते हैं',
        'privacy_worker_desc': 'हमारे प्लेटफॉर्म पर श्रमिकों से विशेष रूप से एकत्र किया गया डेटा',
        'privacy_employer_desc': 'हम नियोक्ताओं और व्यवसायों से कौन सी जानकारी एकत्र करते हैं',
        'privacy_location_desc': 'हम स्थान डेटा और जीपीएस जानकारी को कैसे संभालते हैं',
        'privacy_security_desc': 'हम आपके डेटा की सुरक्षा के लिए क्या उपाय करते हैं',
        'privacy_sharing_desc': 'हम कब और कैसे तृतीय-पक्षों के साथ डेटा साझा करते हैं',
        'privacy_rights_desc': 'आपके व्यक्तिगत डेटा के संबंध में आपके अधिकार',
        'privacy_retention_desc': 'हम आपकी जानकारी को कितने समय तक रखते हैं',
        'privacy_contact_desc': 'गोपनीयता संबंधी चिंताओं के लिए हमसे कैसे संपर्क करें',
        
        'tag_personal': 'व्यक्तिगत', 'tag_account': 'खाता', 'tag_profile': 'प्रोफाइल',
        'tag_purpose': 'उद्देश्य', 'tag_service': 'सेवा', 'tag_improvement': 'सुधार',
        'tag_worker': 'श्रमिक', 'tag_skills': 'कौशल', 'tag_verification': 'सत्यापन',
        'tag_employer': 'नियोक्ता', 'tag_business': 'व्यवसाय', 'tag_hiring': 'भर्ती',
        'tag_location': 'स्थान', 'tag_gps': 'जीपीएस', 'tag_tracking': 'ट्रैकिंग',
        'tag_security': 'सुरक्षा', 'tag_encryption': 'एन्क्रिप्शन', 'tag_protection': 'संरक्षण',
        'tag_sharing': 'साझाकरण', 'tag_third-party': 'तृतीय-पक्ष', 'tag_partners': 'साझेदार',
        'tag_rights': 'अधिकार', 'tag_access': 'पहुंच', 'tag_control': 'नियंत्रण',
        'tag_retention': 'प्रतिधारण', 'tag_storage': 'भंडारण', 'tag_deletion': 'हटाना',
        'tag_contact': 'संपर्क', 'tag_questions': 'प्रश्न', 'tag_dpo': 'डीपीओ',
        
        'tagline': 'हाथों को काम से जोड़ना',
        'copyright': '© 2025 श्रमिक कनेक्ट। सभी अधिकार सुरक्षित।',
        'privacy': 'गोपनीयता नीति',
        'terms': 'नियम और शर्तें',
        'platform': 'प्लेटफॉर्म',
        'for_workers': 'श्रमिकों के लिए',
        'for_employers': 'नियोक्ताओं के लिए',
        'company': 'कंपनी',
        'how_it_works': 'यह कैसे काम करता है',
        'support': 'सहायता'
    },
    mr: {
        'home': 'होम', 'help': 'मदत', 'about': 'आम्ही कोण', 'menu': 'मेनू',
        'settings': 'सेटिंग्ज', 'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'नियम आणि शर्ती', 'privacy_policy': 'गोपनीयता धोरण',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हलका', 'dark': 'गडद', 'system': 'सिस्टम',
        
        'privacy_subtitle': 'श्रमिक कनेक्ट येथे, आम्ही आपली गोपनीयता गांभीर्याने घेतो. हे धोरण वर्णन करते की आम्ही आपली वैयक्तिक माहिती कशी गोळा करतो, वापरतो आणि संरक्षित करतो.',
        
        'privacy_collect_title': 'आम्ही कोणती माहिती गोळा करतो',
        'privacy_use_title': 'डेटा कसा वापरतो',
        'privacy_worker_title': 'कामगार डेटा',
        'privacy_employer_title': 'नियोक्ता डेटा',
        'privacy_location_title': 'स्थान डेटा',
        'privacy_security_title': 'डेटा सुरक्षा',
        'privacy_sharing_title': 'तृतीय-पक्ष सामायिकरण',
        'privacy_rights_title': 'वापरकर्ता अधिकार',
        'privacy_retention_title': 'डेटा प्रतिधारण',
        'privacy_contact_title': 'संपर्क करा',
        
        'privacy_collect_desc': 'वैयक्तिक माहिती, खाते तपशील आणि आम्ही गोळा केलेला वापर डेटा',
        'privacy_use_desc': 'सेवा प्रदान करण्यासाठी आणि सुधारण्यासाठी आम्ही आपली माहिती कशी वापरतो',
        'privacy_worker_desc': 'आमच्या प्लॅटफॉर्मवर कामगारांकडून विशेषतः गोळा केलेला डेटा',
        'privacy_employer_desc': 'आम्ही नियोक्ते आणि व्यवसायांकडून कोणती माहिती गोळा करतो',
        'privacy_location_desc': 'आम्ही स्थान डेटा आणि जीपीएस माहिती कशी हाताळतो',
        'privacy_security_desc': 'आम्ही आपल्या डेटाचे संरक्षण करण्यासाठी घेतलेली उपाययोजना',
        'privacy_sharing_desc': 'आम्ही केव्हा आणि कशी तृतीय-पक्षांसह डेटा सामायिक करतो',
        'privacy_rights_desc': 'आपल्या वैयक्तिक डेटाबाबत आपले अधिकार',
        'privacy_retention_desc': 'आम्ही आपली माहिती किती काळ ठेवतो',
        'privacy_contact_desc': 'गोपनीयता संबंधित चिंतांसाठी आमच्याशी कसा संपर्क करावा',
        
        'tag_personal': 'वैयक्तिक', 'tag_account': 'खाते', 'tag_profile': 'प्रोफाइल',
        'tag_purpose': 'उद्देश', 'tag_service': 'सेवा', 'tag_improvement': 'सुधारणा',
        'tag_worker': 'कामगार', 'tag_skills': 'कौशल्ये', 'tag_verification': 'पडताळणी',
        'tag_employer': 'नियोक्ता', 'tag_business': 'व्यवसाय', 'tag_hiring': 'भर्ती',
        'tag_location': 'स्थान', 'tag_gps': 'जीपीएस', 'tag_tracking': 'ट्रॅकिंग',
        'tag_security': 'सुरक्षा', 'tag_encryption': 'एन्क्रिप्शन', 'tag_protection': 'संरक्षण',
        'tag_sharing': 'सामायिकरण', 'tag_third-party': 'तृतीय-पक्ष', 'tag_partners': 'भागीदार',
        'tag_rights': 'अधिकार', 'tag_access': 'प्रवेश', 'tag_control': 'नियंत्रण',
        'tag_retention': 'प्रतिधारण', 'tag_storage': 'संचयन', 'tag_deletion': 'हटविणे',
        'tag_contact': 'संपर्क', 'tag_questions': 'प्रश्न', 'tag_dpo': 'डीपीओ',
        
        'tagline': 'हातांना कामाशी जोडणे',
        'copyright': '© 2025 श्रमिक कनेक्ट. सर्व हक्क राखीव.',
        'privacy': 'गोपनीयता धोरण',
        'terms': 'नियम आणि शर्ती',
        'platform': 'प्लॅटफॉर्म',
        'for_workers': 'कामगारांसाठी',
        'for_employers': 'नियोक्त्यांसाठी',
        'company': 'कंपनी',
        'how_it_works': 'हे कसे कार्य करते',
        'support': 'समर्थन'
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
    localStorage.setItem('privacyLanguage', lang);
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

function closeSettingsDropdown() { 
    settingsDropdown.classList.remove('active'); 
}

function closeSettingsOnClickOutside(e) {
    if (!sidebarSettingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
        closeSettingsDropdown();
    }
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
// CARD CLICK HANDLER - UPDATE URLs HERE
// ============================================
function handleCardClick(cardId) {
    // Update these URLs according to your actual page URLs
    switch(cardId) {
        case 'collect':
            window.location.href = '/collect-card/';
            break;
        case 'use':
            window.location.href = '/use-data-card/';
            break;
        case 'worker':
            window.location.href = '/worker-data-card/';
            break;
        case 'employer':
            window.location.href = '/employer-data-card/';
            break;
        case 'location':
            window.location.href = '/location-data-card/';
            break;
        case 'security':
            window.location.href = '/data-security/';
            break;
        case 'sharing':
            window.location.href = '/data-sharing/';
            break;
        case 'rights':
            window.location.href = '/user-rights/';
            break;
        case 'retention':
            window.location.href = '/data-retention/';
            break;
        case 'contact':
            window.location.href = '/help-and-contact/';
            break;
        default:
            alert('This page is under construction');
    }
}

// ============================================
// CARDS CREATION
// ============================================
function createPrivacyCards() {
    if (!cardsContainer) return;
    
    const t = translations[currentLanguage];
    
    privacyCards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.className = `privacy-card ${card.id}`;
        cardElement.dataset.cardId = card.id;
        
        const tagsHTML = card.tags.map(tag => 
            `<span class="tag">${t[`tag_${tag}`] || tag}</span>`
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
            handleCardClick(card.id);
        });
        
        cardsContainer.appendChild(cardElement);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarSettingsIcon) sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    languageOptions.forEach(btn => btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang)));
    themeOptions.forEach(btn => btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme)));

    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') { 
            closeSidebar(); 
            closeSettingsDropdown(); 
        } 
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
}

// ============================================
// INITIALIZATION
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
    setupEventListeners();
}

// Start everything when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}