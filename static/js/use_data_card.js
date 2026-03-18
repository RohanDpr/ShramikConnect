/**
 * HOW WE USE DATA PAGE - PRIVACY POLICY
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

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ['light', 'dark', 'system'];

// ============================================
// COMPLETE TRANSLATIONS (EN/HI/MR)
// ============================================
const translations = {
    en: {
        // Basic UI
        'back': 'Back',
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Page Header
        'use_title': 'How We Use Data',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains how ShramikConnect uses the personal information we collect from users. We use your data only for legitimate purposes related to providing and improving our platform services, and we never sell your personal information to third parties.',
        
        // Section 1 - Account Management
        'account_management_title': 'Account Management',
        'account_management_desc': 'We use your account information to:',
        'account_management1': 'Create and maintain your user account',
        'account_management2': 'Authenticate your identity when you log in',
        'account_management3': 'Protect your account from unauthorized access',
        'account_management4': 'Send important account-related notifications',
        'account_management_note': 'These uses are essential for providing you with access to our platform and ensuring the security of your account.',
        
        // Section 2 - Platform Functionality
        'functionality_title': 'Platform Functionality',
        'functionality_desc': 'We use your profile and activity data to enable core platform features:',
        'functionality1': 'Help workers discover relevant job opportunities',
        'functionality2': 'Help employers find workers with matching skills',
        'functionality3': 'Facilitate communication between workers and employers',
        'functionality4': 'Display ratings and feedback to build trust',
        'functionality_note': 'This data is essential for the matching and connection services that ShramikConnect provides.',
        
        // Section 3 - Service Improvement
        'improvement_title': 'Service Improvement',
        'improvement_desc': 'We analyze usage patterns and technical data to improve our platform:',
        'improvement1': 'Understand how users interact with the platform',
        'improvement2': 'Identify and fix technical issues',
        'improvement3': 'Optimize platform performance and user experience',
        'improvement4': 'Develop new features based on user needs',
        'improvement_note': 'This helps us make ShramikConnect more useful and user-friendly for everyone.',
        
        // Section 4 - Communication
        'communication_title': 'Communication',
        'communication_desc': 'We use your contact information to communicate with you about:',
        'communication1': 'Job applications and responses from employers',
        'communication2': 'Messages from workers or employers',
        'communication3': 'Responses to your support inquiries',
        'communication4': 'Important updates about platform policies or security',
        'communication_note': 'We do not send marketing emails or promotional messages without your consent. Currently, we do not engage in marketing communications.',
        
        // Section 5 - Trust and Safety
        'safety_title': 'Trust and Safety',
        'safety_desc': 'We use data to maintain a safe and trustworthy platform:',
        'safety1': 'Verify user identities when needed',
        'safety2': 'Detect and prevent fraudulent or suspicious activity',
        'safety3': 'Investigate reported violations of platform policies',
        'safety4': 'Take appropriate action against misconduct',
        'safety_note': 'These measures help protect all users and maintain the integrity of our community.',
        
        // Section 6 - Legal Compliance
        'legal_title': 'Legal Compliance',
        'legal_desc': 'We may use or disclose your information when required by law:',
        'legal1': 'Comply with legal obligations and court orders',
        'legal2': 'Respond to requests from law enforcement or government authorities',
        'legal3': 'Establish, exercise, or defend legal claims',
        'legal_note': 'We only share information in response to valid legal requests, and we notify users when permitted by law.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect uses your personal information only for the purposes described in this policy. We do not sell your data to third parties, and we do not use your information for advertising or marketing without your explicit consent.',
        'important_notice_footer': 'If our data usage practices change in the future, we will update this policy and notify users as required by applicable law.',
        
        // Footer Button
        'back_to_privacy': 'Back to Privacy Policy'
    },
    
    hi: {
        // Basic UI
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        
        // Page Header
        'use_title': 'हम डेटा का उपयोग कैसे करते हैं',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड बताता है कि श्रमिककनेक्ट उपयोगकर्ताओं से एकत्र की गई व्यक्तिगत जानकारी का उपयोग कैसे करता है। हम आपके डेटा का उपयोग केवल हमारी प्लेटफॉर्म सेवाओं को प्रदान करने और सुधारने से संबंधित वैध उद्देश्यों के लिए करते हैं, और हम आपकी व्यक्तिगत जानकारी को तृतीय पक्षों को कभी नहीं बेचते हैं।',
        
        // Section 1 - Account Management
        'account_management_title': 'खाता प्रबंधन',
        'account_management_desc': 'हम आपकी खाता जानकारी का उपयोग निम्नलिखित के लिए करते हैं:',
        'account_management1': 'आपका उपयोगकर्ता खाता बनाना और बनाए रखना',
        'account_management2': 'लॉग इन करते समय आपकी पहचान प्रमाणित करना',
        'account_management3': 'आपके खाते को अनधिकृत पहुंच से सुरक्षित रखना',
        'account_management4': 'महत्वपूर्ण खाता-संबंधी सूचनाएं भेजना',
        'account_management_note': 'ये उपयोग आपको हमारे प्लेटफॉर्म तक पहुंच प्रदान करने और आपके खाते की सुरक्षा सुनिश्चित करने के लिए आवश्यक हैं।',
        
        // Section 2 - Platform Functionality
        'functionality_title': 'प्लेटफॉर्म कार्यक्षमता',
        'functionality_desc': 'हम मुख्य प्लेटफॉर्म सुविधाओं को सक्षम करने के लिए आपके प्रोफाइल और गतिविधि डेटा का उपयोग करते हैं:',
        'functionality1': 'श्रमिकों को प्रासंगिक नौकरी के अवसर खोजने में मदद करना',
        'functionality2': 'नियोक्ताओं को मेल खाने वाले कौशल वाले श्रमिक खोजने में मदद करना',
        'functionality3': 'श्रमिकों और नियोक्ताओं के बीच संचार की सुविधा प्रदान करना',
        'functionality4': 'विश्वास बनाने के लिए रेटिंग और प्रतिक्रिया प्रदर्शित करना',
        'functionality_note': 'यह डेटा श्रमिककनेक्ट द्वारा प्रदान की जाने वाली मिलान और कनेक्शन सेवाओं के लिए आवश्यक है।',
        
        // Section 3 - Service Improvement
        'improvement_title': 'सेवा में सुधार',
        'improvement_desc': 'हम अपने प्लेटफॉर्म को बेहतर बनाने के लिए उपयोग पैटर्न और तकनीकी डेटा का विश्लेषण करते हैं:',
        'improvement1': 'समझना कि उपयोगकर्ता प्लेटफॉर्म के साथ कैसे इंटरैक्ट करते हैं',
        'improvement2': 'तकनीकी मुद्दों की पहचान करना और उन्हें ठीक करना',
        'improvement3': 'प्लेटफॉर्म प्रदर्शन और उपयोगकर्ता अनुभव को अनुकूलित करना',
        'improvement4': 'उपयोगकर्ता आवश्यकताओं के आधार पर नई सुविधाएं विकसित करना',
        'improvement_note': 'यह हमें श्रमिककनेक्ट को सभी के लिए अधिक उपयोगी और उपयोगकर्ता-अनुकूल बनाने में मदद करता है।',
        
        // Section 4 - Communication
        'communication_title': 'संचार',
        'communication_desc': 'हम आपकी संपर्क जानकारी का उपयोग आपसे संवाद करने के लिए करते हैं:',
        'communication1': 'नौकरी आवेदन और नियोक्ताओं से प्रतिक्रियाएं',
        'communication2': 'श्रमिकों या नियोक्ताओं से संदेश',
        'communication3': 'आपकी सहायता पूछताछ के जवाब',
        'communication4': 'प्लेटफॉर्म नीतियों या सुरक्षा के बारे में महत्वपूर्ण अपडेट',
        'communication_note': 'हम आपकी सहमति के बिना मार्केटिंग ईमेल या प्रचार संदेश नहीं भेजते हैं। वर्तमान में, हम मार्केटिंग संचार में संलग्न नहीं हैं।',
        
        // Section 5 - Trust and Safety
        'safety_title': 'विश्वास और सुरक्षा',
        'safety_desc': 'हम एक सुरक्षित और भरोसेमंद प्लेटफॉर्म बनाए रखने के लिए डेटा का उपयोग करते हैं:',
        'safety1': 'आवश्यक होने पर उपयोगकर्ता की पहचान सत्यापित करना',
        'safety2': 'धोखाधड़ी या संदिग्ध गतिविधि का पता लगाना और रोकना',
        'safety3': 'प्लेटफॉर्म नीतियों के उल्लंघन की रिपोर्ट की जांच करना',
        'safety4': 'दुराचार के खिलाफ उचित कार्रवाई करना',
        'safety_note': 'ये उपाय सभी उपयोगकर्ताओं की सुरक्षा और हमारे समुदाय की अखंडता बनाए रखने में मदद करते हैं।',
        
        // Section 6 - Legal Compliance
        'legal_title': 'कानूनी अनुपालन',
        'legal_desc': 'हम कानून द्वारा आवश्यक होने पर आपकी जानकारी का उपयोग या खुलासा कर सकते हैं:',
        'legal1': 'कानूनी दायित्वों और अदालत के आदेशों का पालन करना',
        'legal2': 'कानून प्रवर्तन या सरकारी अधिकारियों के अनुरोधों का जवाब देना',
        'legal3': 'कानूनी दावों को स्थापित करना, लागू करना या बचाव करना',
        'legal_note': 'हम केवल वैध कानूनी अनुरोधों के जवाब में जानकारी साझा करते हैं, और जब कानून द्वारा अनुमति होती है तो उपयोगकर्ताओं को सूचित करते हैं।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी का उपयोग केवल इस नीति में वर्णित उद्देश्यों के लिए करता है। हम आपका डेटा तृतीय पक्षों को नहीं बेचते हैं, और हम आपकी स्पष्ट सहमति के बिना आपकी जानकारी का उपयोग विज्ञापन या मार्केटिंग के लिए नहीं करते हैं।',
        'important_notice_footer': 'यदि भविष्य में हमारी डेटा उपयोग प्रथाएं बदलती हैं, तो हम इस नीति को अपडेट करेंगे और लागू कानून द्वारा आवश्यक उपयोगकर्ताओं को सूचित करेंगे।',
        
        // Footer Button
        'back_to_privacy': 'गोपनीयता नीति पर वापस जाएं'
    },
    
    mr: {
        // Basic UI
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        
        // Page Header
        'use_title': 'आम्ही डेटा कसा वापरतो',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग स्पष्ट करतो की श्रमिककनेक्ट वापरकर्त्यांकडून गोळा केलेली वैयक्तिक माहिती कशी वापरते. आम्ही तुमचा डेटा फक्त आमच्या प्लॅटफॉर्म सेवा प्रदान करण्यासाठी आणि सुधारण्याशी संबंधित वैध उद्देशांसाठी वापरतो, आणि आम्ही तुमची वैयक्तिक माहिती तृतीय पक्षांना कधीही विकत नाही.',
        
        // Section 1 - Account Management
        'account_management_title': 'खाते व्यवस्थापन',
        'account_management_desc': 'आम्ही तुमची खाते माहिती यासाठी वापरतो:',
        'account_management1': 'तुमचे वापरकर्ता खाते तयार करणे आणि राखणे',
        'account_management2': 'लॉग इन करताना तुमची ओळख सत्यापित करणे',
        'account_management3': 'तुमच्या खात्याचे अनधिकृत प्रवेशापासून संरक्षण करणे',
        'account_management4': 'महत्वाच्या खाते-संबंधित सूचना पाठवणे',
        'account_management_note': 'तुम्हाला आमच्या प्लॅटफॉर्मवर प्रवेश प्रदान करण्यासाठी आणि तुमच्या खात्याची सुरक्षितता सुनिश्चित करण्यासाठी हे वापर आवश्यक आहेत.',
        
        // Section 2 - Platform Functionality
        'functionality_title': 'प्लॅटफॉर्म कार्यक्षमता',
        'functionality_desc': 'आम्ही मुख्य प्लॅटफॉर्म वैशिष्ट्ये सक्षम करण्यासाठी तुमची प्रोफाइल आणि क्रियाकलाप डेटा वापरतो:',
        'functionality1': 'कामगारांना संबंधित नोकरीच्या संधी शोधण्यात मदत करणे',
        'functionality2': 'नियोक्त्यांना जुळणारी कौशल्ये असलेले कामगार शोधण्यात मदत करणे',
        'functionality3': 'कामगार आणि नियोक्त्यांमध्ये संप्रेषण सुलभ करणे',
        'functionality4': 'विश्वास निर्माण करण्यासाठी रेटिंग आणि अभिप्राय प्रदर्शित करणे',
        'functionality_note': 'श्रमिककनेक्ट प्रदान करते अशा जुळणी आणि कनेक्शन सेवांसाठी हा डेटा आवश्यक आहे.',
        
        // Section 3 - Service Improvement
        'improvement_title': 'सेवा सुधारणा',
        'improvement_desc': 'आम्ही आमचा प्लॅटफॉर्म सुधारण्यासाठी वापर पद्धती आणि तांत्रिक डेटाचे विश्लेषण करतो:',
        'improvement1': 'वापरकर्ते प्लॅटफॉर्मशी कसे संवाद साधतात हे समजून घेणे',
        'improvement2': 'तांत्रिक समस्या ओळखणे आणि निराकरण करणे',
        'improvement3': 'प्लॅटफॉर्म कार्यक्षमता आणि वापरकर्ता अनुभव अनुकूलित करणे',
        'improvement4': 'वापरकर्त्यांच्या गरजांवर आधारित नवीन वैशिष्ट्ये विकसित करणे',
        'improvement_note': 'हे आम्हाला श्रमिककनेक्ट प्रत्येकासाठी अधिक उपयुक्त आणि वापरकर्ता-अनुकूल बनवण्यास मदत करते।',
        
        // Section 4 - Communication
        'communication_title': 'संप्रेषण',
        'communication_desc': 'आम्ही तुमची संपर्क माहिती तुमच्याशी संवाद साधण्यासाठी वापरतो:',
        'communication1': 'नोकरी अर्ज आणि नियोक्त्यांकडून प्रतिसाद',
        'communication2': 'कामगार किंवा नियोक्त्यांकडून संदेश',
        'communication3': 'तुमच्या समर्थन विचारणांना प्रतिसाद',
        'communication4': 'प्लॅटफॉर्म धोरणे किंवा सुरक्षिततेबद्दल महत्वाची अद्यतने',
        'communication_note': 'आम्ही तुमच्या संमतीशिवाय मार्केटिंग ईमेल किंवा प्रचारात्मक संदेश पाठवत नाही. सध्या, आम्ही मार्केटिंग संप्रेषणात गुंतलेले नाही.',
        
        // Section 5 - Trust and Safety
        'safety_title': 'विश्वास आणि सुरक्षितता',
        'safety_desc': 'आम्ही सुरक्षित आणि विश्वासार्ह प्लॅटफॉर्म राखण्यासाठी डेटा वापरतो:',
        'safety1': 'आवश्यक असताना वापरकर्ता ओळख सत्यापित करणे',
        'safety2': 'फसवणूक किंवा संशयास्पद क्रियाकलाप शोधणे आणि प्रतिबंधित करणे',
        'safety3': 'प्लॅटफॉर्म धोरणांच्या उल्लंघनाच्या तक्रारींची तपासणी करणे',
        'safety4': 'गैरवर्तनाविरुद्ध योग्य कारवाई करणे',
        'safety_note': 'हे उपाय सर्व वापरकर्त्यांचे संरक्षण करण्यास आणि आमच्या समुदायाची अखंडता राखण्यास मदत करतात।',
        
        // Section 6 - Legal Compliance
        'legal_title': 'कायदेशीर अनुपालन',
        'legal_desc': 'आम्ही कायद्याने आवश्यक असताना तुमची माहिती वापरू किंवा उघड करू शकतो:',
        'legal1': 'कायदेशीर दायित्वे आणि न्यायालयाच्या आदेशांचे पालन करणे',
        'legal2': 'कायदा अंमलबजावणी किंवा सरकारी अधिकाऱ्यांच्या विनंत्यांना प्रतिसाद देणे',
        'legal3': 'कायदेशीर दावे स्थापित करणे, वापरणे किंवा बचाव करणे',
        'legal_note': 'आम्ही फक्त वैध कायदेशीर विनंत्यांना प्रतिसाद म्हणून माहिती सामायिक करतो, आणि कायद्याने परवानगी दिल्यास वापरकर्त्यांना सूचित करतो.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट तुमची वैयक्तिक माहिती फक्त या धोरणात वर्णन केलेल्या उद्देशांसाठी वापरते. आम्ही तुमचा डेटा तृतीय पक्षांना विकत नाही, आणि आम्ही तुमच्या स्पष्ट संमतीशिवाय तुमची माहिती जाहिरात किंवा मार्केटिंगसाठी वापरत नाही.',
        'important_notice_footer': 'भविष्यात आमच्या डेटा वापर पद्धती बदलल्यास, आम्ही हे धोरण अद्यतनित करू आणि लागू कायद्यानुसार वापरकर्त्यांना सूचित करू.',
        
        // Footer Button
        'back_to_privacy': 'गोपनीयता धोरणावर परत जा'
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

    // Back button (history)
    if (smallBackBtn) {
        smallBackBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

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
    console.log('How We Use Data page initialized');

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