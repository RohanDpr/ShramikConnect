// JavaScript for role selection page with working language switch

// Translation resources
const translations = {
    en: {
        choose_role: "Choose Your Role",
        select_how: "Select how you want to use ShramikConnect",
        kaam_dhundho: "Kaam Dhundho",
        worker_description: "Looking for work opportunities? Join as a worker to find jobs that match your skills and experience. Connect directly with employers and grow your career.",
        feature1_worker: "Find jobs matching your skills",
        feature2_worker: "Connect directly with employers",
        feature3_worker: "Build your professional profile",
        login_worker: "Login as Worker",
        kaam_karao: "Kaam Karao",
        employer_description: "Need skilled workers? Join as an employer to find the right talent for your projects. Post jobs, review profiles, and hire efficiently.",
        feature1_employer: "Post jobs and find skilled workers",
        feature2_employer: "Review detailed worker profiles",
        feature3_employer: "Hire efficiently with our platform",
        login_employer: "Login as Employer",
        not_sure: "Not Sure Which to Choose?",
        help_text: "If you're looking for work opportunities, select 'Kaam Dhundho'. If you need to hire workers for your projects, select 'Kaam Karao'.",
        tagline: "Connecting hands to work",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        help: "Help & Contact",
        copyright: "© 2025 ShramikConnect. All rights reserved.",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System"
    },
    hi: {
        choose_role: "अपनी भूमिका चुनें",
        select_how: "चुनें कि आप ShramikConnect का उपयोग कैसे करना चाहते हैं",
        kaam_dhundho: "काम ढूंढो",
        worker_description: "काम के अवसरों की तलाश है? एक कर्मचारी के रूप में शामिल हों और अपने कौशल और अनुभव से मेल खाने वाली नौकरियां ढूंढें। सीधे नियोक्ताओं से जुड़ें और अपने करियर को आगे बढ़ाएं।",
        feature1_worker: "अपने कौशल से मेल खाने वाली नौकरियां ढूंढें",
        feature2_worker: "सीधे नियोक्ताओं से जुड़ें",
        feature3_worker: "अपना पेशेवर प्रोफाइल बनाएं",
        login_worker: "कर्मचारी के रूप में लॉगिन करें",
        kaam_karao: "काम कराओ",
        employer_description: "कुशल कर्मचारियों की आवश्यकता है? एक नियोक्ता के रूप में शामिल हों और अपनी परियोजनाओं के लिए सही प्रतिभा ढूंढें। नौकरियां पोस्ट करें, प्रोफाइल्स की समीक्षा करें, और कुशलता से किराया करें।",
        feature1_employer: "नौकरियां पोस्ट करें और कुशल कर्मचारी ढूंढें",
        feature2_employer: "विस्तृत कर्मचारी प्रोफाइल की समीक्षा करें",
        feature3_employer: "हमारे प्लेटफॉर्म के साथ कुशलता से किराया करें",
        login_employer: "नियोक्ता के रूप में लॉगिन करें",
        not_sure: "निश्चित नहीं हैं कि क्या चुनें?",
        help_text: "यदि आप काम के अवसरों की तलाश कर रहे हैं, तो 'काम ढूंढो' चुनें। यदि आपको अपनी परियोजनाओं के लिए कर्मचारियों को किराए पर लेने की आवश्यकता है, तो 'काम कराओ' चुनें।",
        tagline: "काम से जुड़ते हाथ",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        help: "सहायता केंद्र",
        copyright: "© 2024 ShramikConnect. सर्वाधिकार सुरक्षित।",
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम"
    },
    mr: {
        choose_role: "तुमची भूमिका निवडा",
        select_how: "ShramikConnect कसा वापरायचा आहे ते निवडा",
        kaam_dhundho: "काम शोधा",
        worker_description: "कामाच्या संधींचा शोध आहे? कामगार म्हणून सामील व्हा आणि तुमच्या कौशल्य आणि अनुभवाशी जुळणारी नोकऱ्या शोधा. थेट नियोक्त्यांशी कनेक्ट व्हा आणि तुमच्या कारकिर्दीला चालना द्या.",
        feature1_worker: "तुमच्या कौशल्याशी जुळणारी नोकऱ्या शोधा",
        feature2_worker: "थेट नियोक्त्यांशी कनेक्ट व्हा",
        feature3_worker: "तुमचे व्यावसायिक प्रोफाइल तयार करा",
        login_worker: "कामगार म्हणून लॉगिन करा",
        kaam_karao: "काम करा",
        employer_description: "कुशल कामगारांची गरज आहे? नियोक्ता म्हणून सामील व्हा आणि तुमच्या प्रकल्पांसाठी योग्य कौशल्ये शोधा. नोकऱ्या पोस्ट करा, प्रोफाइलचे पुनरावलोकन करा आणि कार्यक्षमतेने भाड्याने घ्या.",
        feature1_employer: "नोकऱ्या पोस्ट करा आणि कुशल कामगार शोधा",
        feature2_employer: "तपशीलवार कामगार प्रोफाइलचे पुनरावलोकन करा",
        feature3_employer: "आमच्या प्लॅटफॉर्मसह कार्यक्षमतेने भाड्याने घ्या",
        login_employer: "नियोक्ता म्हणून लॉगिन करा",
        not_sure: "खात्री नाही की काय निवडायचे?",
        help_text: "जर तुम्हाला कामाच्या संधींचा शोध असेल तर 'काम शोधा' निवडा. जर तुम्हाला तुमच्या प्रकल्पांसाठी कामगार भाड्याने घ्यायचे असतील तर 'काम करा' निवडा.",
        tagline: "कामाशी जोडणारे हात",
        privacy: "गोपनीयता धोरण",
        terms: "सेवा अटी",
        help: "मदत केंद्र",
        copyright: "© 2024 ShramikConnect. सर्व हक्क राखीव.",
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// App Initialization
function initializeApp() {
    console.log('Initializing role selection page...');

    // Set initial theme and language
    const initialTheme = getPreferredTheme();
    const initialLanguage = getStoredLanguage();

    setTheme(initialTheme);
    setLanguage(initialLanguage);

    // Initialize components
    initializeAnimations();
    initializeRoleButtons();
    initializeSystemThemeListener();
    initializeAccessibility();
    initializeSettingsDropdown();

    // Update active buttons
    updateActiveThemeButton(initialTheme);
    updateActiveLanguageButton(initialLanguage);
}

// Theme Management
function getStoredTheme() {
    return localStorage.getItem('theme') || 'system';
}

function setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', systemTheme === 'dark');
    } else {
        document.body.classList.toggle('dark-theme', theme === 'dark');
    }
    setStoredTheme(theme);
    updateActiveThemeButton(theme);
}

function updateActiveThemeButton(theme) {
    const themeButtons = document.querySelectorAll('.theme-option');
    if (!themeButtons.length) return;
    themeButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.theme === theme);
    });
}

// Language Management
function getStoredLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setStoredLanguage(lang) {
    localStorage.setItem('language', lang);
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    setStoredLanguage(lang);
    updateActiveLanguageButton(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateActiveLanguageButton(lang) {
    const languageButtons = document.querySelectorAll('.language-option');
    if (!languageButtons.length) return;
    languageButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

// Update all translatable content
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Role Button Handlers
function initializeRoleButtons() {
    const kaamDhundhoBtn = document.querySelector('.kaam-dhundho-btn');
    const kaamKaraoBtn = document.querySelector('.kaam-karao-btn');
    
    if (kaamDhundhoBtn) {
        kaamDhundhoBtn.addEventListener('click', function() {
            handleRoleSelection('worker');
        });
    }
    
    if (kaamKaraoBtn) {
        kaamKaraoBtn.addEventListener('click', function() {
            handleRoleSelection('employer');
        });
    }
}

function handleRoleSelection(role) {
    console.log('Role selected:', role);
    
    // Add button click animation
    const button = document.querySelector(`.${role === 'worker' ? 'kaam-dhundho-btn' : 'kaam-karao-btn'}`);
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
    
    // In a real implementation, this would redirect to the appropriate login page
    // For now, we'll simulate a redirect with a timeout
    setTimeout(() => {
        alert(`Redirecting to ${role} login page...`);
        // window.location.href = `/accounts/login/${role}/`;
    }, 300);
}

// Animations
function initializeAnimations() {
    // Add scroll-triggered animations for elements
    const animatedElements = document.querySelectorAll('.role-card, .page-title-section, .additional-info');
    
    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add hover effects to cards
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// System Theme Change Listener
function initializeSystemThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme();
        if (storedTheme === 'system') {
            setTheme('system');
        }
    });
}

// Accessibility Features
function initializeAccessibility() {
    const settingsIcon = document.getElementById('settingsIcon');
    if (!settingsIcon) return;

    settingsIcon.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSettingsDropdown();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSettingsDropdown();
        }
    });
    
    // Add keyboard navigation for role cards
    const roleButtons = document.querySelectorAll('.card-button');
    roleButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Settings Dropdown
function initializeSettingsDropdown() {
    const settingsIcon = document.getElementById('settingsIcon');
    const settingsDropdown = document.getElementById('settingsDropdown');
    
    if (!settingsIcon || !settingsDropdown) return;

    // Ensure ARIA attributes exist and initial visual state matches aria-hidden
    settingsIcon.setAttribute('aria-haspopup', 'true');
    settingsIcon.setAttribute('aria-expanded', 'false');
    settingsDropdown.setAttribute('aria-hidden', 'true');

    function toggleSettingsDropdown() {
        const isOpen = settingsDropdown.classList.contains('active');
        if (isOpen) {
            closeSettingsDropdown();
        } else {
            openSettingsDropdown();
        }
    }

    function openSettingsDropdown() {
        settingsDropdown.classList.add('active');
        settingsDropdown.setAttribute('aria-hidden', 'false');
        settingsIcon.setAttribute('aria-expanded', 'true');
        const first = settingsDropdown.querySelector('button, [tabindex]:not([tabindex="-1"])');
        if (first) first.focus();
    }

    function closeSettingsDropdown() {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
        settingsIcon.focus();
    }

    // Toggle on click
    settingsIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSettingsDropdown();
    });

    // Close when clicking/tapping outside
    document.addEventListener('click', function(e) {
        if (!settingsDropdown.classList.contains('active')) return;
        if (!settingsDropdown.contains(e.target) && !settingsIcon.contains(e.target)) {
            closeSettingsDropdown();
        }
    });

    // Language switcher - FIXED: Now properly calls setLanguage
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function (evt) {
            evt.stopPropagation();
            document.querySelectorAll('.language-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            setLanguage(this.dataset.lang); // This line was missing!
            closeSettingsDropdown();
        });
    });

    // Theme switcher
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function (evt) {
            evt.stopPropagation();
            document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            setTheme(this.dataset.theme);
            closeSettingsDropdown();
        });
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
});
