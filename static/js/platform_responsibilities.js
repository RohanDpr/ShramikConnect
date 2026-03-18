/**
 * PLATFORM RESPONSIBILITIES PAGE - TERMS & CONDITIONS
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
        'platform_title': 'Platform Responsibilities',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the role and responsibilities of the ShramikConnect platform. ShramikConnect is designed to help workers and employers discover each other and communicate about job opportunities. The platform provides tools and services that facilitate these connections while maintaining a safe and reliable environment.',
        
        // Section 1 - Connection Platform
        'connection_title': 'Providing a Connection Platform',
        'connection_desc': 'ShramikConnect provides a digital platform where:',
        'connection1': 'Workers can search for job opportunities',
        'connection2': 'Employers can find workers for different types of work',
        'connection3': 'Users can communicate regarding job requirements',
        'connection_note': 'The platform focuses on making it easier for users to discover opportunities and connect with each other.',
        
        // Section 2 - Accessibility
        'accessibility_title': 'Maintaining Platform Accessibility',
        'accessibility_desc': 'ShramikConnect aims to keep the platform accessible and functional for users.',
        'accessibility_maintenance': 'The platform may perform regular updates and maintenance to improve performance, fix technical issues, and introduce new features.',
        'accessibility_note': 'Temporary service interruptions may occur during these maintenance activities.',
        
        // Section 3 - Safety
        'safety_title': 'Promoting Safe Platform Usage',
        'safety_desc': 'ShramikConnect encourages safe and responsible use of the platform.',
        'safety_monitoring': 'The platform may monitor reported activities and take action when policies are violated in order to protect users from harmful or inappropriate behavior.',
        
        // Section 4 - Protection
        'protection_title': 'Protecting User Information',
        'protection_desc': 'ShramikConnect makes reasonable efforts to protect user data and account information.',
        'protection_measures': 'The platform uses appropriate measures to maintain the confidentiality and security of user data.',
        'protection_note': 'Users are also responsible for protecting their account credentials.',
        
        // Section 5 - Review
        'review_title': 'Reviewing Reported Issues',
        'review_desc': 'Users may report problems related to platform usage such as:',
        'review1': 'Misleading job posts',
        'review2': 'Inappropriate behavior',
        'review3': 'Suspicious activities',
        'review_note': 'ShramikConnect may review such reports and take action where necessary according to platform policies.',
        
        // Section 6 - Improvement
        'improvement_title': 'Improving Platform Features',
        'improvement_desc': 'ShramikConnect may continuously improve the platform to enhance user experience.',
        'improvement_includes': 'This may include:',
        'improvement1': 'Adding new features',
        'improvement2': 'Improving job discovery tools',
        'improvement3': 'Enhancing communication capabilities',
        'improvement4': 'Updating system performance',
        'improvement_note': 'These improvements help maintain an effective platform for workers and employers.',
        
        // Section 7 - Neutral
        'neutral_title': 'Maintaining Neutral Platform Role',
        'neutral_desc': 'ShramikConnect maintains a neutral role between workers and employers.',
        'neutral_tools': 'The platform provides tools for connection and communication but does not participate in job agreements between users.',
        'neutral_note': 'All work arrangements and agreements are handled directly by the users involved.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect\'s responsibility is limited to providing a digital platform that connects workers and employers.',
        'important_notice_platform': 'The platform does not:',
        'important1': 'Supervise work performed by users',
        'important2': 'Manage payments between users',
        'important3': 'Guarantee job completion or job availability',
        'important_notice_footer': 'Users are responsible for managing their own agreements and work arrangements.',
        
        // Footer Button
        'back_to_terms': 'Back to Terms & Conditions'
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
        'platform_title': 'प्लेटफॉर्म जिम्मेदारियां',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म की भूमिका और जिम्मेदारियों की व्याख्या करता है। श्रमिककनेक्ट को श्रमिकों और नियोक्ताओं को एक दूसरे को खोजने और नौकरी के अवसरों के बारे में संवाद करने में मदद करने के लिए डिज़ाइन किया गया है। प्लेटफॉर्म सुरक्षित और विश्वसनीय वातावरण बनाए रखते हुए इन कनेक्शनों को सुविधाजनक बनाने के लिए उपकरण और सेवाएं प्रदान करता है।',
        
        // Section 1 - Connection Platform
        'connection_title': 'कनेक्शन प्लेटफॉर्म प्रदान करना',
        'connection_desc': 'श्रमिककनेक्ट एक डिजिटल प्लेटफॉर्म प्रदान करता है जहां:',
        'connection1': 'श्रमिक नौकरी के अवसर खोज सकते हैं',
        'connection2': 'नियोक्ता विभिन्न प्रकार के काम के लिए श्रमिक ढूंढ सकते हैं',
        'connection3': 'उपयोगकर्ता नौकरी की आवश्यकताओं के बारे में संवाद कर सकते हैं',
        'connection_note': 'प्लेटफॉर्म उपयोगकर्ताओं के लिए अवसरों की खोज और एक दूसरे से जुड़ना आसान बनाने पर केंद्रित है।',
        
        // Section 2 - Accessibility
        'accessibility_title': 'प्लेटफॉर्म पहुंच बनाए रखना',
        'accessibility_desc': 'श्रमिककनेक्ट का लक्ष्य प्लेटफॉर्म को उपयोगकर्ताओं के लिए सुलभ और कार्यात्मक बनाए रखना है।',
        'accessibility_maintenance': 'प्लेटफॉर्म प्रदर्शन में सुधार, तकनीकी मुद्दों को ठीक करने और नई सुविधाओं को पेश करने के लिए नियमित अपडेट और रखरखाव कर सकता है।',
        'accessibility_note': 'इन रखरखाव गतिविधियों के दौरान अस्थायी सेवा रुकावटें हो सकती हैं।',
        
        // Section 3 - Safety
        'safety_title': 'सुरक्षित प्लेटफॉर्म उपयोग को बढ़ावा देना',
        'safety_desc': 'श्रमिककनेक्ट प्लेटफॉर्म के सुरक्षित और जिम्मेदार उपयोग को प्रोत्साहित करता है।',
        'safety_monitoring': 'प्लेटफॉर्म रिपोर्ट की गई गतिविधियों की निगरानी कर सकता है और उपयोगकर्ताओं को हानिकारक या अनुचित व्यवहार से बचाने के लिए नीतियों के उल्लंघन पर कार्रवाई कर सकता है।',
        
        // Section 4 - Protection
        'protection_title': 'उपयोगकर्ता जानकारी की सुरक्षा',
        'protection_desc': 'श्रमिककनेक्ट उपयोगकर्ता डेटा और खाता जानकारी की सुरक्षा के लिए उचित प्रयास करता है।',
        'protection_measures': 'प्लेटफॉर्म उपयोगकर्ता डेटा की गोपनीयता और सुरक्षा बनाए रखने के लिए उचित उपायों का उपयोग करता है।',
        'protection_note': 'उपयोगकर्ता अपने खाता क्रेडेंशियल की सुरक्षा के लिए भी जिम्मेदार हैं।',
        
        // Section 5 - Review
        'review_title': 'रिपोर्ट किए गए मुद्दों की समीक्षा',
        'review_desc': 'उपयोगकर्ता प्लेटफॉर्म उपयोग से संबंधित समस्याओं की रिपोर्ट कर सकते हैं जैसे:',
        'review1': 'भ्रामक नौकरी पोस्ट',
        'review2': 'अनुचित व्यवहार',
        'review3': 'संदिग्ध गतिविधियां',
        'review_note': 'श्रमिककनेक्ट ऐसी रिपोर्टों की समीक्षा कर सकता है और प्लेटफॉर्म नीतियों के अनुसार आवश्यक होने पर कार्रवाई कर सकता है।',
        
        // Section 6 - Improvement
        'improvement_title': 'प्लेटफॉर्म सुविधाओं में सुधार',
        'improvement_desc': 'श्रमिककनेक्ट उपयोगकर्ता अनुभव को बेहतर बनाने के लिए प्लेटफॉर्म में लगातार सुधार कर सकता है।',
        'improvement_includes': 'इसमें शामिल हो सकता है:',
        'improvement1': 'नई सुविधाएं जोड़ना',
        'improvement2': 'नौकरी खोज उपकरणों में सुधार',
        'improvement3': 'संचार क्षमताओं को बढ़ाना',
        'improvement4': 'सिस्टम प्रदर्शन को अपडेट करना',
        'improvement_note': 'ये सुधार श्रमिकों और नियोक्ताओं के लिए एक प्रभावी प्लेटफॉर्म बनाए रखने में मदद करते हैं।',
        
        // Section 7 - Neutral
        'neutral_title': 'तटस्थ प्लेटफॉर्म भूमिका बनाए रखना',
        'neutral_desc': 'श्रमिककनेक्ट श्रमिकों और नियोक्ताओं के बीच तटस्थ भूमिका बनाए रखता है।',
        'neutral_tools': 'प्लेटफॉर्म कनेक्शन और संचार के लिए उपकरण प्रदान करता है लेकिन उपयोगकर्ताओं के बीच नौकरी समझौतों में भाग नहीं लेता है।',
        'neutral_note': 'सभी कार्य व्यवस्थाएं और समझौते सीधे शामिल उपयोगकर्ताओं द्वारा संभाले जाते हैं।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट की जिम्मेदारी श्रमिकों और नियोक्ताओं को जोड़ने वाला एक डिजिटल प्लेटफॉर्म प्रदान करने तक सीमित है।',
        'important_notice_platform': 'प्लेटफॉर्म निम्नलिखित नहीं करता है:',
        'important1': 'उपयोगकर्ताओं द्वारा किए गए कार्य की निगरानी',
        'important2': 'उपयोगकर्ताओं के बीच भुगतान का प्रबंधन',
        'important3': 'नौकरी पूर्णता या नौकरी उपलब्धता की गारंटी',
        'important_notice_footer': 'उपयोगकर्ता अपने स्वयं के समझौतों और कार्य व्यवस्थाओं के प्रबंधन के लिए जिम्मेदार हैं।',
        
        // Footer Button
        'back_to_terms': 'नियम और शर्तों पर वापस जाएं'
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
        'platform_title': 'प्लॅटफॉर्म जबाबदाऱ्या',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मची भूमिका आणि जबाबदाऱ्या स्पष्ट करतो. श्रमिककनेक्ट हे कामगार आणि नियोक्त्यांना एकमेकांना शोधण्यात आणि नोकरीच्या संधींबद्दल संवाद साधण्यात मदत करण्यासाठी डिझाइन केले आहे. प्लॅटफॉर्म सुरक्षित आणि विश्वासार्ह वातावरण राखताना या कनेक्शन सुलभ करण्यासाठी साधने आणि सेवा प्रदान करते.',
        
        // Section 1 - Connection Platform
        'connection_title': 'कनेक्शन प्लॅटफॉर्म प्रदान करणे',
        'connection_desc': 'श्रमिककनेक्ट एक डिजिटल प्लॅटफॉर्म प्रदान करते जिथे:',
        'connection1': 'कामगार नोकरीच्या संधी शोधू शकतात',
        'connection2': 'नियोक्ते विविध प्रकारच्या कामासाठी कामगार शोधू शकतात',
        'connection3': 'वापरकर्ते नोकरीच्या आवश्यकतांबद्दल संवाद साधू शकतात',
        'connection_note': 'प्लॅटफॉर्म वापरकर्त्यांसाठी संधी शोधणे आणि एकमेकांशी कनेक्ट होणे सोपे करण्यावर लक्ष केंद्रित करते.',
        
        // Section 2 - Accessibility
        'accessibility_title': 'प्लॅटफॉर्म प्रवेशयोग्यता राखणे',
        'accessibility_desc': 'श्रमिककनेक्टचे उद्दिष्ट प्लॅटफॉर्म वापरकर्त्यांसाठी प्रवेशयोग्य आणि कार्यशील ठेवणे आहे.',
        'accessibility_maintenance': 'प्लॅटफॉर्म कार्यक्षमता सुधारण्यासाठी, तांत्रिक समस्या सोडवण्यासाठी आणि नवीन वैशिष्ट्ये सादर करण्यासाठी नियमित अद्यतने आणि देखभाल करू शकते.',
        'accessibility_note': 'या देखभाल क्रियाकलापांदरम्यान तात्पुरते सेवा व्यत्यय येऊ शकतात.',
        
        // Section 3 - Safety
        'safety_title': 'सुरक्षित प्लॅटफॉर्म वापरास प्रोत्साहन देणे',
        'safety_desc': 'श्रमिककनेक्ट प्लॅटफॉर्मच्या सुरक्षित आणि जबाबदार वापरास प्रोत्साहित करते.',
        'safety_monitoring': 'प्लॅटफॉर्म नोंदवलेल्या क्रियाकलापांचे निरीक्षण करू शकते आणि वापरकर्त्यांना हानिकारक किंवा अयोग्य वर्तनापासून संरक्षण करण्यासाठी धोरणांचे उल्लंघन झाल्यास कारवाई करू शकते.',
        
        // Section 4 - Protection
        'protection_title': 'वापरकर्ता माहितीचे संरक्षण',
        'protection_desc': 'श्रमिककनेक्ट वापरकर्ता डेटा आणि खाते माहितीचे संरक्षण करण्यासाठी योग्य प्रयत्न करते.',
        'protection_measures': 'प्लॅटफॉर्म वापरकर्ता डेटाची गोपनीयता आणि सुरक्षितता राखण्यासाठी योग्य उपायांचा वापर करते.',
        'protection_note': 'वापरकर्ते त्यांच्या खाते क्रेडेंशियल्सचे संरक्षण करण्यासाठी देखील जबाबदार आहेत.',
        
        // Section 5 - Review
        'review_title': 'नोंदवलेल्या समस्यांचे पुनरावलोकन',
        'review_desc': 'वापरकर्ते प्लॅटफॉर्म वापराशी संबंधित समस्या नोंदवू शकतात जसे की:',
        'review1': 'दिशाभूल करणारी नोकरी पोस्ट',
        'review2': 'अयोग्य वर्तन',
        'review3': 'संशयास्पद क्रियाकलाप',
        'review_note': 'श्रमिककनेक्ट अशा अहवालांचे पुनरावलोकन करू शकते आणि प्लॅटफॉर्म धोरणांनुसार आवश्यक असल्यास कारवाई करू शकते.',
        
        // Section 6 - Improvement
        'improvement_title': 'प्लॅटफॉर्म वैशिष्ट्यांमध्ये सुधारणा',
        'improvement_desc': 'श्रमिककनेक्ट वापरकर्ता अनुभव वाढविण्यासाठी प्लॅटफॉर्ममध्ये सतत सुधारणा करू शकते.',
        'improvement_includes': 'यामध्ये हे समाविष्ट असू शकते:',
        'improvement1': 'नवीन वैशिष्ट्ये जोडणे',
        'improvement2': 'नोकरी शोध साधनांमध्ये सुधारणा',
        'improvement3': 'संप्रेषण क्षमता वाढवणे',
        'improvement4': 'प्रणाली कार्यक्षमता अद्यतनित करणे',
        'improvement_note': 'या सुधारणा कामगार आणि नियोक्त्यांसाठी प्रभावी प्लॅटफॉर्म राखण्यास मदत करतात.',
        
        // Section 7 - Neutral
        'neutral_title': 'तटस्थ प्लॅटफॉर्म भूमिका राखणे',
        'neutral_desc': 'श्रमिककनेक्ट कामगार आणि नियोक्त्यांमध्ये तटस्थ भूमिका राखते.',
        'neutral_tools': 'प्लॅटफॉर्म कनेक्शन आणि संप्रेषणासाठी साधने प्रदान करते परंतु वापरकर्त्यांमधील नोकरी करारांमध्ये भाग घेत नाही.',
        'neutral_note': 'सर्व कामाच्या व्यवस्था आणि करार थेट सहभागी वापरकर्त्यांद्वारे हाताळले जातात.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्टची जबाबदारी कामगार आणि नियोक्त्यांना जोडणारे डिजिटल प्लॅटफॉर्म प्रदान करण्यापुरती मर्यादित आहे.',
        'important_notice_platform': 'प्लॅटफॉर्म हे करत नाही:',
        'important1': 'वापरकर्त्यांनी केलेल्या कामाचे पर्यवेक्षण',
        'important2': 'वापरकर्त्यांमधील पेमेंट व्यवस्थापित करणे',
        'important3': 'नोकरी पूर्णता किंवा नोकरी उपलब्धतेची हमी',
        'important_notice_footer': 'वापरकर्ते त्यांचे स्वतःचे करार आणि कामाच्या व्यवस्था व्यवस्थापित करण्यासाठी जबाबदार आहेत.',
        
        // Footer Button
        'back_to_terms': 'अटी आणि नियमांवर परत जा'
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
    console.log('Platform Responsibilities page initialized');

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