/**
 * TERMS & CONDITIONS PAGE
 * With 3-theme system (light, dark, system) and i18n
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Navigation Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const homeLink = document.getElementById('homeLink');
const navHome = document.getElementById('navHome');
const logoContainer = document.getElementById('logoContainer');

// Settings Elements
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Cards Container
const cardsContainer = document.getElementById('cardsContainer');

// ============================================
// STATE VARIABLES
// ============================================

let currentLanguage = 'en';
let currentTheme = 'light';
let previousPage = 'index.html';

// ============================================
// ALL THEMES CONSTANT - ONLY 3 THEMES
// ============================================
const ALL_THEMES = ["light", "dark", "system"];

// ============================================
// TERMS CARDS DATA - SIRF 9 CARDS (NO DUPLICATES)
// ============================================
const termsCards = [
    {
        id: 'intro',
        icon: 'fa-file-contract',
        titleKey: 'terms_intro_title',
        descKey: 'terms_intro_desc',
        tags: ['intro', 'overview'],
        url: 'terms/introduction.html',
        special: true
    },
    {
        id: 'eligibility',
        icon: 'fa-user-check',
        titleKey: 'terms_eligibility_title',
        descKey: 'terms_eligibility_desc',
        tags: ['age', 'legal', 'requirements'],
        url: 'terms/eligibility.html',
        special: true
    },
    {
        id: 'worker',
        icon: 'fa-hard-hat',
        titleKey: 'terms_worker_title',
        descKey: 'terms_worker_desc',
        tags: ['worker', 'responsibilities', 'obligations'],
        url: 'terms/worker.html'
    },
    {
        id: 'employer',
        icon: 'fa-building',
        titleKey: 'terms_employer_title',
        descKey: 'terms_employer_desc',
        tags: ['employer', 'hiring', 'obligations'],
        url: 'terms/employer.html'
    },
    {
        id: 'platform',
        icon: 'fa-cogs',
        titleKey: 'terms_platform_title',
        descKey: 'terms_platform_desc',
        tags: ['platform', 'responsibilities', 'role'],
        url: 'terms/platform.html'
    },
    {
        id: 'conduct',
        icon: 'fa-gavel',
        titleKey: 'terms_conduct_title',
        descKey: 'terms_conduct_desc',
        tags: ['conduct', 'rules', 'prohibited'],
        url: 'terms/conduct.html'
    },
    {
        id: 'termination',
        icon: 'fa-ban',
        titleKey: 'terms_termination_title',
        descKey: 'terms_termination_desc',
        tags: ['termination', 'suspension', 'account'],
        url: 'terms/termination.html'
    },
    {
        id: 'liability',
        icon: 'fa-scale-balanced',
        titleKey: 'terms_liability_title',
        descKey: 'terms_liability_desc',
        tags: ['liability', 'limitation', 'legal'],
        url: 'terms/liability.html'
    },
    {
        id: 'dispute',
        icon: 'fa-handshake',
        titleKey: 'terms_dispute_title',
        descKey: 'terms_dispute_desc',
        tags: ['dispute', 'resolution', 'arbitration'],
        url: 'terms/dispute.html'
    }
];

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        'home': 'Home',
        'help': 'Help',
        'about': 'About',
        'menu': 'Menu',
        'settings': 'Settings',
        'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions',
        'privacy_policy': 'Privacy Policy',
        
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        'terms_subtitle': 'Welcome to ShramikConnect. By accessing or using our platform, you agree to be bound by these Terms & Conditions. Please take a moment to review them carefully. If you have any questions, feel free to contact our support team.',
        
        'terms_intro_title': 'Introduction',
        'terms_eligibility_title': 'User Eligibility',
        'terms_worker_title': 'Worker Terms',
        'terms_employer_title': 'Employer Terms',
        'terms_platform_title': 'Platform Responsibilities',
        'terms_conduct_title': 'User Conduct',
        'terms_termination_title': 'Termination',
        'terms_liability_title': 'Limitation of Liability',
        'terms_dispute_title': 'Dispute Resolution',
        
        'terms_intro_desc': 'Overview of ShramikConnect platform and agreement',
        'terms_eligibility_desc': 'Age requirements and legal eligibility to use the platform',
        'terms_worker_desc': 'Responsibilities and obligations for workers',
        'terms_employer_desc': 'Responsibilities and obligations for employers',
        'terms_platform_desc': 'What ShramikConnect provides and our role',
        'terms_conduct_desc': 'Prohibited actions and acceptable behavior',
        'terms_termination_desc': 'Account suspension and termination policies',
        'terms_liability_desc': 'Limits of our legal responsibility',
        'terms_dispute_desc': 'How disputes are resolved',
        
        'tag_intro': 'intro',
        'tag_overview': 'overview',
        'tag_age': 'age',
        'tag_legal': 'legal',
        'tag_requirements': 'requirements',
        'tag_worker': 'worker',
        'tag_responsibilities': 'responsibilities',
        'tag_obligations': 'obligations',
        'tag_employer': 'employer',
        'tag_hiring': 'hiring',
        'tag_platform': 'platform',
        'tag_role': 'role',
        'tag_conduct': 'conduct',
        'tag_rules': 'rules',
        'tag_prohibited': 'prohibited',
        'tag_termination': 'termination',
        'tag_suspension': 'suspension',
        'tag_account': 'account',
        'tag_liability': 'liability',
        'tag_limitation': 'limitation',
        'tag_dispute': 'dispute',
        'tag_resolution': 'resolution',
        'tag_arbitration': 'arbitration',
        
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions'
    },
    hi: {
        'home': 'होम',
        'help': 'सहायता',
        'about': 'के बारे में',
        'menu': 'मेनू',
        'settings': 'सेटिंग्स',
        'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें',
        'privacy_policy': 'गोपनीयता नीति',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        
        'terms_subtitle': 'श्रमिककनेक्ट में आपका स्वागत है। हमारे प्लेटफॉर्म का उपयोग करके, आप इन नियमों और शर्तों से बंधे होने के लिए सहमत हैं। कृपया इन्हें ध्यान से पढ़ें।',
        
        'terms_intro_title': 'परिचय',
        'terms_eligibility_title': 'उपयोगकर्ता पात्रता',
        'terms_worker_title': 'कर्मचारी नियम',
        'terms_employer_title': 'नियोक्ता नियम',
        'terms_platform_title': 'प्लेटफॉर्म जिम्मेदारियां',
        'terms_conduct_title': 'उपयोगकर्ता आचरण',
        'terms_termination_title': 'समाप्ति',
        'terms_liability_title': 'देयता की सीमा',
        'terms_dispute_title': 'विवाद समाधान',
        
        'terms_intro_desc': 'श्रमिककनेक्ट प्लेटफॉर्म और समझौते का अवलोकन',
        'terms_eligibility_desc': 'आयु आवश्यकताएं और प्लेटफॉर्म का उपयोग करने की कानूनी पात्रता',
        'terms_worker_desc': 'कर्मचारियों के लिए जिम्मेदारियां और दायित्व',
        'terms_employer_desc': 'नियोक्ताओं के लिए जिम्मेदारियां और दायित्व',
        'terms_platform_desc': 'श्रमिककनेक्ट क्या प्रदान करता है और हमारी भूमिका',
        'terms_conduct_desc': 'निषिद्ध कार्य और स्वीकार्य व्यवहार',
        'terms_termination_desc': 'खाता निलंबन और समाप्ति नीतियां',
        'terms_liability_desc': 'हमारी कानूनी जिम्मेदारी की सीमाएं',
        'terms_dispute_desc': 'विवाद कैसे हल किए जाते हैं',
        
        'tag_intro': 'परिचय',
        'tag_overview': 'अवलोकन',
        'tag_age': 'आयु',
        'tag_legal': 'कानूनी',
        'tag_requirements': 'आवश्यकताएं',
        'tag_worker': 'कर्मचारी',
        'tag_responsibilities': 'जिम्मेदारियां',
        'tag_obligations': 'दायित्व',
        'tag_employer': 'नियोक्ता',
        'tag_hiring': 'नियुक्ति',
        'tag_platform': 'प्लेटफॉर्म',
        'tag_role': 'भूमिका',
        'tag_conduct': 'आचरण',
        'tag_rules': 'नियम',
        'tag_prohibited': 'निषिद्ध',
        'tag_termination': 'समाप्ति',
        'tag_suspension': 'निलंबन',
        'tag_account': 'खाता',
        'tag_liability': 'देयता',
        'tag_limitation': 'सीमा',
        'tag_dispute': 'विवाद',
        'tag_resolution': 'समाधान',
        'tag_arbitration': 'मध्यस्थता',
        
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।'
    },
    mr: {
        'home': 'होम',
        'help': 'मदत',
        'about': 'विषयी',
        'menu': 'मेनू',
        'settings': 'सेटिंग्ज',
        'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम',
        'privacy_policy': 'गोपनीयता धोरण',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        
        'terms_subtitle': 'श्रमिककनेक्टमध्ये आपले स्वागत आहे. आमच्या प्लॅटफॉर्मचा वापर करून, आपण या अटी व नियमांना बांधील आहात. कृपया काळजीपूर्वक वाचा.',
        
        'terms_intro_title': 'प्रस्तावना',
        'terms_eligibility_title': 'वापरकर्ता पात्रता',
        'terms_worker_title': 'कामगार नियम',
        'terms_employer_title': 'नियोक्ता नियम',
        'terms_platform_title': 'प्लॅटफॉर्म जबाबदाऱ्या',
        'terms_conduct_title': 'वापरकर्ता आचरण',
        'terms_termination_title': 'समाप्ती',
        'terms_liability_title': 'दायित्व मर्यादा',
        'terms_dispute_title': 'वाद निराकरण',
        
        'terms_intro_desc': 'श्रमिककनेक्ट प्लॅटफॉर्म आणि कराराचे विहंगावलोकन',
        'terms_eligibility_desc': 'वय आवश्यकता आणि प्लॅटफॉर्म वापरण्याची कायदेशीर पात्रता',
        'terms_worker_desc': 'कामगारांसाठी जबाबदाऱ्या आणि दायित्वे',
        'terms_employer_desc': 'नियोक्त्यांसाठी जबाबदाऱ्या आणि दायित्वे',
        'terms_platform_desc': 'श्रमिककनेक्ट काय प्रदान करते आणि आमची भूमिका',
        'terms_conduct_desc': 'प्रतिबंधित कृती आणि स्वीकार्य वर्तन',
        'terms_termination_desc': 'खाते निलंबन आणि समाप्ती धोरणे',
        'terms_liability_desc': 'आमच्या कायदेशीर जबाबदारीच्या मर्यादा',
        'terms_dispute_desc': 'वाद कसे सोडवले जातात',
        
        'tag_intro': 'प्रस्तावना',
        'tag_overview': 'विहंगावलोकन',
        'tag_age': 'वय',
        'tag_legal': 'कायदेशीर',
        'tag_requirements': 'आवश्यकता',
        'tag_worker': 'कामगार',
        'tag_responsibilities': 'जबाबदाऱ्या',
        'tag_obligations': 'दायित्वे',
        'tag_employer': 'नियोक्ता',
        'tag_hiring': 'नियुक्ती',
        'tag_platform': 'प्लॅटफॉर्म',
        'tag_role': 'भूमिका',
        'tag_conduct': 'आचरण',
        'tag_rules': 'नियम',
        'tag_prohibited': 'प्रतिबंधित',
        'tag_termination': 'समाप्ती',
        'tag_suspension': 'निलंबन',
        'tag_account': 'खाते',
        'tag_liability': 'दायित्व',
        'tag_limitation': 'मर्यादा',
        'tag_dispute': 'वाद',
        'tag_resolution': 'निराकरण',
        'tag_arbitration': 'मध्यस्थता',
        
        'tagline': 'कामासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.'
    }
};

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
    
    refreshCards();
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

function refreshCards() {
    if (cardsContainer) {
        cardsContainer.innerHTML = '';
        createTermsCards();
    }
}

// ============================================
// THEME MANAGEMENT
// ============================================

function applyTheme(theme) {
    document.body.classList.remove(...ALL_THEMES);
    document.body.classList.add(theme);
    localStorage.setItem("selectedTheme", theme);
    currentTheme = theme;
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function getSystemDefaultTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme && ALL_THEMES.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        applyTheme(getSystemDefaultTheme());
    }
}

function handleThemeChange(theme) {
    if (ALL_THEMES.includes(theme)) {
        applyTheme(theme);
    }
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================

function toggleSettingsDropdown(event) {
    event.stopPropagation();
    settingsDropdown.classList.toggle('active');
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
}

function closeSettingsOnClickOutside(event) {
    if (!sidebarSettingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
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
    previousPage = localStorage.getItem('previousPage') || 'index.html';
    
    [homeLink, navHome, logoContainer].forEach(el => {
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = previousPage;
            });
        }
    });
}

// ============================================
// TERMS CARDS CREATION
// ============================================

function createTermsCards() {
    if (!cardsContainer) return;
    
    const translation = translations[currentLanguage];
    
    termsCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `help-card ${card.id}`;
        cardElement.dataset.cardId = card.id;
        
        if (index < 2) {
            cardElement.classList.add('special');
        }
        
        const tagsHTML = card.tags.map(tag => 
            `<span class="tag" data-i18n="tag_${tag}">${translation[`tag_${tag}`] || tag}</span>`
        ).join('');
        
        cardElement.innerHTML = `
            <div class="card-icon">
                <i class="fas ${card.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${translation[card.titleKey] || card.titleKey}</h3>
                <p>${translation[card.descKey] || card.descKey}</p>
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
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
    hamburgerBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });
    
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });
    
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
    console.log('Terms & Conditions Page Initialized');
    
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'term_and_condition.html') {
        localStorage.setItem('previousPage', currentPage);
    }
    
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLanguage); // yeh andar createTermsCards() already call karta hai
    initTheme();
    setupNavigation();
    // createTermsCards() hataya — handleLanguageChange → applyLanguage → refreshCards se already ho jaata hai
    setupEventListeners();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}