/**
 * CONNECT ON SOCIAL MEDIA PAGE
 * Full theme and language support
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const socialLinks = document.querySelectorAll('.social-card-link');

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
        'social_title': 'Connect With Us',
        'social_subtitle': 'Follow ShramikConnect on Social Media',
        'social_intro': 'Stay updated with our latest news, job opportunities, and community stories. Follow us on your favorite social media platforms and be part of the ShramikConnect family!',
        'follow': 'Follow',
        'subscribe': 'Subscribe',
        'like': 'Like',
        'send': 'Send Email',
        'join': 'Join',
        'total_community': 'Total Community',
        'monthly_reach': 'Monthly Reach',
        'active_support': 'Active Support',
        'back_to_help': 'Back to Help & Contact'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'social_title': 'हमसे जुड़ें',
        'social_subtitle': 'सोशल मीडिया पर श्रमिककनेक्ट को फॉलो करें',
        'social_intro': 'हमारी नवीनतम खबरों, नौकरी के अवसरों और समुदाय की कहानियों से अपडेट रहें। अपने पसंदीदा सोशल मीडिया प्लेटफॉर्म पर हमें फॉलो करें और श्रमिककनेक्ट परिवार का हिस्सा बनें!',
        'follow': 'फॉलो करें',
        'subscribe': 'सब्सक्राइब',
        'like': 'लाइक करें',
        'send': 'ईमेल भेजें',
        'join': 'जुड़ें',
        'total_community': 'कुल समुदाय',
        'monthly_reach': 'मासिक पहुंच',
        'active_support': 'सक्रिय समर्थन',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'social_title': 'आमच्याशी कनेक्ट व्हा',
        'social_subtitle': 'सोशल मीडियावर श्रमिककनेक्टला फॉलो करा',
        'social_intro': 'आमच्या नवीनतम बातम्या, नोकरीच्या संधी आणि समुदायाच्या कथांसह अद्ययावत रहा. आपल्या आवडत्या सोशल मीडिया प्लॅटफॉर्मवर आम्हाला फॉलो करा आणि श्रमिककनेक्ट कुटुंबाचा भाग व्हा!',
        'follow': 'फॉलो करा',
        'subscribe': 'सबस्क्राईब',
        'like': 'लाईक करा',
        'send': 'ईमेल पाठवा',
        'join': 'सामील व्हा',
        'total_community': 'एकूण समुदाय',
        'monthly_reach': 'मासिक पोहोच',
        'active_support': 'सक्रिय समर्थन',
        'back_to_help': 'मदत आणि संपर्क वर परत जा'
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

    // Update follow buttons text
    document.querySelectorAll('.follow-btn').forEach(btn => {
        const platform = btn.closest('.social-card-link')?.classList[1];
        if (platform === 'youtube') {
            btn.textContent = translation.subscribe || 'Subscribe';
        } else if (platform === 'email') {
            btn.textContent = translation.send || 'Send Email';
        } else if (platform === 'whatsapp' || platform === 'telegram') {
            btn.textContent = translation.join || 'Join';
        } else if (platform === 'facebook') {
            btn.textContent = translation.like || 'Like';
        } else {
            btn.textContent = translation.follow || 'Follow';
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
        applyTheme(getSystemDefaultTheme());
    }
}

function handleThemeChange(theme) {
    if (!ALL_THEMES.includes(theme)) return;
    applyTheme(theme);
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
// SOCIAL CARD INTERACTIONS
// ============================================
function setupSocialCards() {
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add animation effect
            const card = link.querySelector('.social-card');
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);

            // Open in new tab (handled by href/_blank)
        });
    });
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

    // Back button
    if (smallBackBtn) {
        smallBackBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Setup social cards
    setupSocialCards();

    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSettingsDropdown();
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
    console.log('Connect on Social Media page initialized');

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