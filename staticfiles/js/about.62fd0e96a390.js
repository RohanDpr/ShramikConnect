/**
 * ABOUT PAGE - COMPLETE WITH FULL I18n AND ENHANCED FEATURES
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
const statNumbers = document.querySelectorAll('.stat-number');
const revealElements = document.querySelectorAll('.reveal');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ["light", "dark", "system"];

// ============================================
// FULL TRANSLATIONS
// ============================================
const translations = {
    en: {
        'home': 'Home', 'help': 'Help', 'about': 'About', 'menu': 'Menu',
        'settings': 'Settings', 'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions', 'privacy_policy': 'Privacy Policy',
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        'hero_title': 'Connecting Hands to Work',
        'hero_subtitle': 'India\'s most trusted platform for workers & employers',
        'join_worker': 'Join as Worker',
        'hire_employer': 'Hire as Employer',
        'mission_title': 'Our Mission',
        'mission_desc': 'Empowering India\'s informal workforce by providing dignified job opportunities, fair wages, and skill development through technology-driven solutions that bridge the gap between workers and verified employers.',
        'vision_title': 'Our Vision',
        'vision_desc': 'To create a future where every Indian worker has access to meaningful employment opportunities, financial independence, and social security, while employers can easily find skilled, trustworthy talent in their local communities.',
        'platform_title': 'What is ShramikConnect?',
        'platform_desc': 'We bridge the gap between India\'s informal workforce and verified employers through technology, transparency, and trust. Our platform makes hiring simple, safe, and accessible for everyone.',
        'stat_workers': 'Workers',
        'stat_employers': 'Employers',
        'stat_jobs': 'Jobs',
        'stat_satisfaction': 'Satisfaction',
        'why_title': 'Why Choose ShramikConnect',
        'feature1_title': 'Verified Workers',
        'feature1_desc': 'Every worker undergoes multi-step verification for authenticity and skill.',
        'feature2_title': 'Chatbot Support',
        'feature2_desc': '24/7 AI-powered assistance for instant answers and guidance.',
        'feature3_title': 'Transparent Ratings',
        'feature3_desc': 'Genuine reviews from both sides build a trustworthy community.',
        'feature4_title': '24/7 Support',
        'feature4_desc': 'We\'re always here to help, with multi-lingual support and quick resolution.',
        'social_title': 'Connect With Us',
        'developers_title': 'Meet Our Developers',
        'know_more': 'Know More About Developers',
        'cta_title': 'Ready to Get Started?',
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions'
    },
    hi: {
        'home': 'होम', 'help': 'सहायता', 'about': 'के बारे में', 'menu': 'मेनू',
        'settings': 'सेटिंग्स', 'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें', 'privacy_policy': 'गोपनीयता नीति',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हल्का', 'dark': 'गहरा', 'system': 'सिस्टम',
        'hero_title': 'काम करने के लिए हाथ जोड़ना',
        'hero_subtitle': 'श्रमिकों और नियोक्ताओं के लिए भारत का सबसे भरोसेमंद मंच',
        'join_worker': 'कार्यकर्ता के रूप में शामिल हों',
        'hire_employer': 'नियोक्ता के रूप में किराए पर लें',
        'mission_title': 'हमारा मिशन',
        'mission_desc': 'भारत के अनौपचारिक कार्यबल को सम्मानजनक अवसरों, उचित मजदूरी और कौशल विकास के माध्यम से सशक्त बनाना, तकनीकी समाधानों के माध्यम से श्रमिकों और सत्यापित नियोक्ताओं के बीच की खाई को पाटना।',
        'vision_title': 'हमारा दृष्टिकोण',
        'vision_desc': 'एक ऐसा भविष्य बनाना जहाँ हर भारतीय श्रमिक को सार्थक रोजगार, वित्तीय स्वतंत्रता और सामाजिक सुरक्षा मिले, और नियोक्ता अपने स्थानीय समुदायों में कुशल, विश्वसनीय प्रतिभा आसानी से पा सकें।',
        'platform_title': 'श्रमिककनेक्ट क्या है?',
        'platform_desc': 'हम प्रौद्योगिकी, पारदर्शिता और विश्वास के माध्यम से भारत के अनौपचारिक कार्यबल और सत्यापित नियोक्ताओं के बीच की खाई को पाटते हैं। हमारा मंच सभी के लिए नियुक्ति को सरल, सुरक्षित और सुलभ बनाता है।',
        'stat_workers': 'कार्यकर्ता',
        'stat_employers': 'नियोक्ता',
        'stat_jobs': 'नौकरियां',
        'stat_satisfaction': 'संतुष्टि',
        'why_title': 'श्रमिककनेक्ट क्यों चुनें',
        'feature1_title': 'सत्यापित कार्यकर्ता',
        'feature1_desc': 'प्रामाणिकता और कौशल के लिए प्रत्येक कार्यकर्ता बहु-चरणीय सत्यापन से गुजरता है।',
        'feature2_title': 'चैटबॉट समर्थन',
        'feature2_desc': 'त्वरित उत्तर और मार्गदर्शन के लिए 24/7 एआई-संचालित सहायता।',
        'feature3_title': 'पारदर्शी रेटिंग',
        'feature3_desc': 'दोनों पक्षों की वास्तविक समीक्षा एक भरोसेमंद समुदाय का निर्माण करती है।',
        'feature4_title': '24/7 समर्थन',
        'feature4_desc': 'हम हमेशा मदद के लिए यहाँ हैं, बहुभाषी समर्थन और त्वरित समाधान के साथ।',
        'social_title': 'हमसे जुड़ें',
        'developers_title': 'हमारे डेवलपर्स से मिलें',
        'know_more': 'डेवलपर्स के बारे में और जानें',
        'cta_title': 'शुरू करने के लिए तैयार हैं?',
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।',
        'privacy': 'गोपनीयता नीति',
        'terms': 'नियम और शर्तें'
    },
    mr: {
        'home': 'होम', 'help': 'मदत', 'about': 'विषयी', 'menu': 'मेनू',
        'settings': 'सेटिंग्ज', 'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम', 'privacy_policy': 'गोपनीयता धोरण',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हलका', 'dark': 'गडद', 'system': 'सिस्टम',
        'hero_title': 'काम करण्यासाठी हात जोडणे',
        'hero_subtitle': 'कामगार आणि नियोक्त्यांसाठी भारतातील सर्वात विश्वासार्ह व्यासपीठ',
        'join_worker': 'कामगार म्हणून सामील व्हा',
        'hire_employer': 'नियोक्ता म्हणून नियुक्त करा',
        'mission_title': 'आमचे ध्येय',
        'mission_desc': 'भारताच्या अनौपचारिक कार्यबलाला सन्मानजनक संधी, योग्य वेतन आणि कौशल्य विकासाद्वारे सक्षम करणे, तंत्रज्ञान-चालित उपायांद्वारे कामगार आणि सत्यापित नियोक्त्यांमधील दरी कमी करणे.',
        'vision_title': 'आमचे दृष्टिकोन',
        'vision_desc': 'असे भविष्य निर्माण करणे जिथे प्रत्येक भारतीय कामगाराला अर्थपूर्ण रोजगार, आर्थिक स्वातंत्र्य आणि सामाजिक सुरक्षा मिळेल, आणि नियोक्ते त्यांच्या स्थानिक समुदायांमध्ये कुशल, विश्वासू प्रतिभा सहजपणे शोधू शकतील.',
        'platform_title': 'श्रमिककनेक्ट म्हणजे काय?',
        'platform_desc': 'आम्ही तंत्रज्ञान, पारदर्शकता आणि विश्वासाद्वारे भारतातील अनौपचारिक कार्यबल आणि सत्यापित नियोक्त्यांमधील दरी कमी करतो. आमचे व्यासपीठ सर्वांसाठी नियुक्ती सोपी, सुरक्षित आणि सुलभ बनवते.',
        'stat_workers': 'कामगार',
        'stat_employers': 'नियोक्ते',
        'stat_jobs': 'नोकऱ्या',
        'stat_satisfaction': 'समाधान',
        'why_title': 'श्रमिककनेक्ट का निवडावे',
        'feature1_title': 'सत्यापित कामगार',
        'feature1_desc': 'प्रामाणिकता आणि कौशल्यासाठी प्रत्येक कामगार बहु-चरणीय सत्यापन करतो.',
        'feature2_title': 'चॅटबॉट समर्थन',
        'feature2_desc': 'त्वरित उत्तरे आणि मार्गदर्शनासाठी 24/7 AI-शक्तीवर चालणारी मदत.',
        'feature3_title': 'पारदर्शक रेटिंग',
        'feature3_desc': 'दोन्ही बाजूंच्या वास्तविक पुनरावलोकने विश्वासार्ह समुदाय तयार करतात.',
        'feature4_title': '24/7 समर्थन',
        'feature4_desc': 'आम्ही नेहमी मदतीसाठी येथे आहोत, बहुभाषिक समर्थन आणि द्रुत निराकरणासह.',
        'social_title': 'आमच्याशी कनेक्ट व्हा',
        'developers_title': 'आमच्या डेव्हलपरशी भेटा',
        'know_more': 'डेव्हलपर बद्दल अधिक जाणून घ्या',
        'cta_title': 'प्रारंभ करण्यास तयार आहात?',
        'tagline': 'काम करण्यासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.',
        'privacy': 'गोपनीयता धोरण',
        'terms': 'अटी आणि नियम'
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
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    languageOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    applyLanguage(lang);
    closeSettingsDropdown();
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
    let prev = localStorage.getItem('previousPage') || '/';
    if (!prev.startsWith('/')) prev = '/';
    [homeLink, navHome, logoContainer].forEach(el => {
        if (el) el.addEventListener('click', (e) => { e.preventDefault(); window.location.href = prev; });
    });
}

// ============================================
// COUNT-UP STATS
// ============================================
function startCountUp() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        if (isNaN(target)) return;
        let current = 0;
        const step = target / 50;
        const update = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else stat.textContent = target;
        };
        update();
    });
}

// ============================================
// SCROLL REVEAL
// ============================================
function checkReveal() {
    const wh = window.innerHeight;
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < wh - 100) el.classList.add('active');
    });
}

// ============================================
// CAROUSEL (ENHANCED)
// ============================================
function initCarousel() {
    const cards = Array.from(document.querySelectorAll('.team-card'));
    if (!cards.length) return;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const track = document.querySelector('.carousel-track');
    let positions = [-2, -1, 0, 1, 2];
    let isAnimating = false;
    let autoPlayInterval = null;
    let hasInteracted = false;

    const updateCards = () => cards.forEach((card, i) => card.setAttribute('data-pos', positions[i]));

    const moveRight = () => {
        if (isAnimating) return;
        isAnimating = true;
        positions.unshift(positions.pop());
        updateCards();
        setTimeout(() => isAnimating = false, 800);
    };
    const moveLeft = () => {
        if (isAnimating) return;
        isAnimating = true;
        positions.push(positions.shift());
        updateCards();
        setTimeout(() => isAnimating = false, 800);
    };

    const triggerInteraction = () => {
        if (!hasInteracted) { hasInteracted = true; startAutoPlay(); }
        else resetAutoPlay();
    };
    const startAutoPlay = () => { autoPlayInterval = setInterval(moveLeft, 3000); };
    const resetAutoPlay = () => { if (hasInteracted) { clearInterval(autoPlayInterval); startAutoPlay(); } };

    if (nextBtn) nextBtn.addEventListener('click', () => { triggerInteraction(); moveLeft(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { triggerInteraction(); moveRight(); });

    // Wheel
    let wheelTimeout;
    if (track) {
        track.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (isAnimating) return;
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                triggerInteraction();
                if (e.deltaX > 0 || e.deltaY > 0) moveRight();
                else moveLeft();
            }, 50);
        }, { passive: false });

        // Touch
        let startX = 0;
        track.addEventListener('touchstart', (e) => startX = e.touches[0].clientX, { passive: true });
        track.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                triggerInteraction();
                if (diff > 0) moveRight();
                else moveLeft();
            }
        }, { passive: true });
    }
    updateCards();
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

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSidebar(); closeSettingsDropdown(); } });

    const statsSection = document.getElementById('statsGrid');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { startCountUp(); observer.unobserve(entry.target); } });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }
}

// ============================================
// INIT
// ============================================
function init() {
    localStorage.setItem('previousPage', window.location.pathname || '/');
    const savedLang = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLang);
    initTheme();
    setupNavigation();
    initCarousel();
    setupEventListeners();
    checkReveal();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();