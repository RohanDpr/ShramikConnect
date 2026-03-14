/**
 * EMERGENCY CONTACT PAGE
 * Full theme and language support with phone dialer functionality
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const emergencyCards = document.querySelectorAll('.emergency-card');

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
        'emergency_title': 'Emergency Contacts',
        'emergency_subtitle': '24/7 Helpline - Your Safety Matters',
        'urgent_title': '⚠️ In case of emergency, click any card to call directly',
        'urgent_text': 'These numbers are available 24/7. For fraud-related issues, please use the dedicated Fraud Helpline.',
        'national_services': '🇮🇳 National Emergency Services',
        'police': 'Police',
        'police_desc': 'For immediate police assistance',
        'ambulance': 'Ambulance',
        'ambulance_desc': 'Medical emergency services',
        'fire': 'Fire Brigade',
        'fire_desc': 'Fire and rescue services',
        'women_helpline': 'Women Helpline',
        'women_desc': '24/7 women safety helpline',
        'child_helpline': 'Child Helpline',
        'child_desc': 'For children in need',
        'disaster': 'Disaster Management',
        'disaster_desc': 'National disaster response',
        'fraud_protection': '🛡️ Fraud Protection & Reporting',
        'fraud_helpline': 'Fraud Helpline',
        'fraud_desc': 'Report fraudulent employers/workers',
        'cyber_crime': 'Cyber Crime',
        'cyber_desc': 'Report online fraud/cyber crime',
        'payment_dispute': 'Payment Dispute',
        'payment_desc': 'Wage/payment related issues',
        'team_contacts': '👨‍💻 ShramikConnect Team',
        'tech_support': 'Technical Support',
        'tech_desc': 'App/website technical issues',
        'dev_team': 'Developer Team',
        'dev_desc': 'Bug reports, feature requests',
        'account_recovery': 'Account Recovery',
        'account_desc': 'Hacked/locked account help',
        'safety_officer': 'Safety Officer',
        'safety_desc': 'Workplace safety concerns',
        'safety_tips': '📋 Safety Tips for Workers & Employers',
        'tip1': 'Always verify employer/worker identity before starting work',
        'tip2': 'Never share OTP or banking details with anyone',
        'tip3': 'Report suspicious behavior immediately',
        'tip4': 'Keep emergency contacts saved in your phone',
        'back_to_help': 'Back to Help & Contact'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'emergency_title': 'आपातकालीन संपर्क',
        'emergency_subtitle': '24/7 हेल्पलाइन - आपकी सुरक्षा मायने रखती है',
        'urgent_title': '⚠️ आपात स्थिति में, सीधे कॉल करने के लिए किसी भी कार्ड पर क्लिक करें',
        'urgent_text': 'ये नंबर 24/7 उपलब्ध हैं। धोखाधड़ी से संबंधित मुद्दों के लिए, कृपया समर्पित फ्रॉड हेल्पलाइन का उपयोग करें।',
        'national_services': '🇮🇳 राष्ट्रीय आपातकालीन सेवाएं',
        'police': 'पुलिस',
        'police_desc': 'तत्काल पुलिस सहायता के लिए',
        'ambulance': 'एम्बुलेंस',
        'ambulance_desc': 'चिकित्सा आपातकालीन सेवाएं',
        'fire': 'अग्निशमन',
        'fire_desc': 'आग और बचाव सेवाएं',
        'women_helpline': 'महिला हेल्पलाइन',
        'women_desc': '24/7 महिला सुरक्षा हेल्पलाइन',
        'child_helpline': 'बाल हेल्पलाइन',
        'child_desc': 'जरूरतमंद बच्चों के लिए',
        'disaster': 'आपदा प्रबंधन',
        'disaster_desc': 'राष्ट्रीय आपदा प्रतिक्रिया',
        'fraud_protection': '🛡️ धोखाधड़ी संरक्षण और रिपोर्टिंग',
        'fraud_helpline': 'धोखाधड़ी हेल्पलाइन',
        'fraud_desc': 'धोखाधड़ी करने वाले नियोक्ताओं/श्रमिकों की रिपोर्ट करें',
        'cyber_crime': 'साइबर अपराध',
        'cyber_desc': 'ऑनलाइन धोखाधड़ी/साइबर अपराध की रिपोर्ट करें',
        'payment_dispute': 'भुगतान विवाद',
        'payment_desc': 'मजदूरी/भुगतान संबंधी मुद्दे',
        'team_contacts': '👨‍💻 श्रमिककनेक्ट टीम',
        'tech_support': 'तकनीकी सहायता',
        'tech_desc': 'ऐप/वेबसाइट तकनीकी मुद्दे',
        'dev_team': 'डेवलपर टीम',
        'dev_desc': 'बग रिपोर्ट, फीचर अनुरोध',
        'account_recovery': 'खाता पुनर्प्राप्ति',
        'account_desc': 'हैक/लॉक खाता सहायता',
        'safety_officer': 'सुरक्षा अधिकारी',
        'safety_desc': 'कार्यस्थल सुरक्षा चिंताएं',
        'safety_tips': '📋 श्रमिकों और नियोक्ताओं के लिए सुरक्षा टिप्स',
        'tip1': 'काम शुरू करने से पहले हमेशा नियोक्ता/श्रमिक की पहचान सत्यापित करें',
        'tip2': 'कभी भी ओटीपी या बैंकिंग विवरण किसी के साथ साझा न करें',
        'tip3': 'संदिग्ध व्यवहार की तुरंत रिपोर्ट करें',
        'tip4': 'आपातकालीन संपर्क अपने फोन में सेव रखें',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'emergency_title': 'आणीबाणी संपर्क',
        'emergency_subtitle': '24/7 हेल्पलाइन - तुमची सुरक्षा महत्त्वाची',
        'urgent_title': '⚠️ आणीबाणीच्या परिस्थितीत, थेट कॉल करण्यासाठी कोणत्याही कार्डवर क्लिक करा',
        'urgent_text': 'हे क्रमांक 24/7 उपलब्ध आहेत. फसवणूकीशी संबंधित समस्यांसाठी, कृपया समर्पित फ्रॉड हेल्पलाइन वापरा.',
        'national_services': '🇮🇳 राष्ट्रीय आणीबाणी सेवा',
        'police': 'पोलिस',
        'police_desc': 'तात्काळ पोलिस मदतीसाठी',
        'ambulance': 'रुग्णवाहिका',
        'ambulance_desc': 'वैद्यकीय आणीबाणी सेवा',
        'fire': 'अग्निशमन',
        'fire_desc': 'आग आणि बचाव सेवा',
        'women_helpline': 'महिला हेल्पलाइन',
        'women_desc': '24/7 महिला सुरक्षा हेल्पलाइन',
        'child_helpline': 'बाल हेल्पलाइन',
        'child_desc': 'गरजू मुलांसाठी',
        'disaster': 'आपत्ती व्यवस्थापन',
        'disaster_desc': 'राष्ट्रीय आपत्ती प्रतिसाद',
        'fraud_protection': '🛡️ फसवणूक संरक्षण आणि अहवाल',
        'fraud_helpline': 'फसवणूक हेल्पलाइन',
        'fraud_desc': 'फसवे नियोक्ते/कामगार अहवाल द्या',
        'cyber_crime': 'सायबर गुन्हा',
        'cyber_desc': 'ऑनलाइन फसवणूक/सायबर गुन्हा अहवाल द्या',
        'payment_dispute': 'पेमेंट विवाद',
        'payment_desc': 'मजुरी/पेमेंट संबंधित समस्या',
        'team_contacts': '👨‍💻 श्रमिककनेक्ट टीम',
        'tech_support': 'तांत्रिक समर्थन',
        'tech_desc': 'अॅप/वेबसाइट तांत्रिक समस्या',
        'dev_team': 'डेव्हलपर टीम',
        'dev_desc': 'बग अहवाल, वैशिष्ट्य विनंत्या',
        'account_recovery': 'खाते पुनर्प्राप्ती',
        'account_desc': 'हॅक/लॉक खाते मदत',
        'safety_officer': 'सुरक्षा अधिकारी',
        'safety_desc': 'कामाची ठिकाणी सुरक्षा चिंता',
        'safety_tips': '📋 कामगार आणि नियोक्त्यांसाठी सुरक्षा टिप्स',
        'tip1': 'काम सुरू करण्यापूर्वी नेहमी नियोक्ता/कामगाराची ओळख सत्यापित करा',
        'tip2': 'कधीही OTP किंवा बँकिंग तपशील कोणाशीही शेअर करू नका',
        'tip3': 'संशयास्पद वर्तनाची त्वरित तक्रार करा',
        'tip4': 'आणीबाणी संपर्क तुमच्या फोनमध्ये सेव्ह ठेवा',
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
// EMERGENCY CARD CLICK HANDLER
// ============================================
function handleEmergencyCardClick(e) {
    const card = e.currentTarget;
    const href = card.getAttribute('href');
    
    if (href && href.startsWith('tel:')) {
        // Add animation effect
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
        
        // Show confirmation dialog (optional)
        const phoneNumber = href.replace('tel:', '');
        const confirmCall = confirm(`Call ${phoneNumber}?`);
        
        if (!confirmCall) {
            e.preventDefault();
        }
    }
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

    // Emergency cards
    emergencyCards.forEach(card => {
        card.addEventListener('click', handleEmergencyCardClick);
    });

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
    console.log('Emergency Contact page initialized');

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