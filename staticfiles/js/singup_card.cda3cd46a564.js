/**
 * TROUBLE IN SIGNUP PAGE - EXACT HELP & CONTACT THEME
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
        'signup_trouble_title': 'Trouble in Signup?',
        'signup_trouble_subtitle': "Let's get you registered smoothly",
        'signup_general_text': 'Creating a new account? Follow the steps below based on your role. If you face any issues, we have specific guides for workers and employers.',
        'worker': 'Worker',
        'worker_signup_desc': 'Register as a job seeker',
        'employer': 'Employer',
        'employer_signup_desc': 'Register as a hiring company',
        'click_to_continue': 'Click to continue',
        'back_to_help': 'Back to Help & Contact',
        'worker_signup_title': 'Worker Signup Guide',
        'worker_signup_subtitle': 'Complete your registration',
        'worker_signup_step1': 'Enter your mobile number (will be verified via OTP)',
        'worker_signup_step2': 'Fill in your basic details: name, age, skills',
        'worker_signup_step3': 'Upload documents for verification (Aadhar, etc.)',
        'worker_signup_step4': 'Set a strong password for your account',
        'worker_signup_now': 'Sign up as Worker',
        'worker_signup_help': 'Need Help?',
        'employer_signup_title': 'Employer Signup Guide',
        'employer_signup_subtitle': 'Register your company',
        'employer_signup_step1': 'Enter your company email and phone number',
        'employer_signup_step2': 'Provide business details: company name, address, GST',
        'employer_signup_step3': 'Upload business registration documents',
        'employer_signup_step4': 'Create admin account with secure password',
        'employer_signup_now': 'Sign up as Employer',
        'employer_signup_help': 'Need Help?'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'signup_trouble_title': 'साइनअप में समस्या?',
        'signup_trouble_subtitle': 'आपका रजिस्ट्रेशन आसान बनाते हैं',
        'signup_general_text': 'नया खाता बना रहे हैं? अपनी भूमिका के आधार पर नीचे दिए गए चरणों का पालन करें। यदि कोई समस्या होती है, तो हमारे पास कामगारों और नियोक्ताओं के लिए विशेष गाइड हैं।',
        'worker': 'कामगार',
        'worker_signup_desc': 'नौकरी चाहने वाले के रूप में पंजीकरण',
        'employer': 'नियोक्ता',
        'employer_signup_desc': 'कंपनी के रूप में पंजीकरण',
        'click_to_continue': 'जारी रखने के लिए क्लिक करें',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं',
        'worker_signup_title': 'कामगार साइनअप गाइड',
        'worker_signup_subtitle': 'अपना पंजीकरण पूरा करें',
        'worker_signup_step1': 'अपना मोबाइल नंबर दर्ज करें (OTP से सत्यापित होगा)',
        'worker_signup_step2': 'बुनियादी विवरण भरें: नाम, आयु, कौशल',
        'worker_signup_step3': 'सत्यापन के लिए दस्तावेज़ अपलोड करें (आधार, आदि)',
        'worker_signup_step4': 'अपने खाते के लिए एक मजबूत पासवर्ड सेट करें',
        'worker_signup_now': 'कामगार के रूप में साइनअप करें',
        'worker_signup_help': 'मदद चाहिए?',
        'employer_signup_title': 'नियोक्ता साइनअप गाइड',
        'employer_signup_subtitle': 'अपनी कंपनी पंजीकृत करें',
        'employer_signup_step1': 'अपना कंपनी ईमेल और फोन नंबर दर्ज करें',
        'employer_signup_step2': 'व्यवसाय विवरण प्रदान करें: कंपनी का नाम, पता, जीएसटी',
        'employer_signup_step3': 'व्यवसाय पंजीकरण दस्तावेज़ अपलोड करें',
        'employer_signup_step4': 'सुरक्षित पासवर्ड के साथ व्यवस्थापक खाता बनाएं',
        'employer_signup_now': 'नियोक्ता के रूप में साइनअप करें',
        'employer_signup_help': 'मदद चाहिए?'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'signup_trouble_title': 'साइनअपमध्ये अडचण?',
        'signup_trouble_subtitle': 'तुमची नोंदणी सुलभ करूया',
        'signup_general_text': 'नवीन खाते तयार करत आहात? तुमच्या भूमिकेनुसार खालील चरणांचे अनुसरण करा. काही समस्या आल्यास, आमच्याकडे कामगार आणि नियोक्त्यांसाठी विशेष मार्गदर्शक आहेत.',
        'worker': 'कामगार',
        'worker_signup_desc': 'नोकरी शोधक म्हणून नोंदणी',
        'employer': 'नियोक्ता',
        'employer_signup_desc': 'कंपनी म्हणून नोंदणी',
        'click_to_continue': 'पुढे जाण्यासाठी क्लिक करा',
        'back_to_help': 'मदत आणि संपर्क वर परत जा',
        'worker_signup_title': 'कामगार साइनअप मार्गदर्शक',
        'worker_signup_subtitle': 'तुमची नोंदणी पूर्ण करा',
        'worker_signup_step1': 'तुमचा मोबाइल क्रमांक प्रविष्ट करा (OTP द्वारे सत्यापित होईल)',
        'worker_signup_step2': 'मूलभूत तपशील भरा: नाव, वय, कौशल्ये',
        'worker_signup_step3': 'सत्यापनासाठी दस्तऐवज अपलोड करा (आधार, इ.)',
        'worker_signup_step4': 'तुमच्या खात्यासाठी मजबूत पासवर्ड सेट करा',
        'worker_signup_now': 'कामगार म्हणून साइनअप करा',
        'worker_signup_help': 'मदत हवी आहे?',
        'employer_signup_title': 'नियोक्ता साइनअप मार्गदर्शक',
        'employer_signup_subtitle': 'तुमची कंपनी नोंदवा',
        'employer_signup_step1': 'तुमचा कंपनी ईमेल आणि फोन नंबर प्रविष्ट करा',
        'employer_signup_step2': 'व्यवसाय तपशील प्रदान करा: कंपनीचे नाव, पत्ता, जीएसटी',
        'employer_signup_step3': 'व्यवसाय नोंदणी दस्तऐवज अपलोड करा',
        'employer_signup_step4': 'सुरक्षित पासवर्डसह प्रशासक खाते तयार करा',
        'employer_signup_now': 'नियोक्ता म्हणून साइनअप करा',
        'employer_signup_help': 'मदत हवी आहे?'
    }
};

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
    console.log('Trouble in Signup page initialized with full theme support');

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