// ============================================
// TRANSLATIONS (EN, HI, MR)
// ============================================
const translations = {
    en: {
        // General
        language: 'Language',
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System',

        // Hero & Get Started
        get_started_title: 'Get started with ShramikConnect',
        tagline: 'Connecting hands to work',
        description: 'ShramikConnect brings workers and employers on a single platform. Discover opportunities, connect instantly, and simplify the way labour hiring works.',
        cta: 'Start Connecting',

        // Feature highlights
        feature_verified: 'Verified Workers & Employers',
        feature_instant: 'Instant Communication Channel',
        feature_zero: 'Zero Middlemen, Zero Confusion',

        // Stats
        stat_workers: 'Workers Connected',
        stat_employers: 'Active Employers',
        stat_hirings: 'Successful Hirings',

        // Footer
        platform: 'Platform',
        for_workers: 'For Workers',
        for_employers: 'For Employers',
        company: 'Company',
        about: 'About Us',
        how_it_works: 'How It Works',
        support: 'Support',
        help_contact: 'Help & Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        ready_to_start: 'Ready to get started?',
        join_now: 'Join Now',
        copyright: '© 2025 ShramikConnect. All rights reserved.'
    },
    hi: {
        language: 'भाषा',
        theme: 'थीम',
        light: 'लाइट',
        dark: 'डार्क',
        system: 'सिस्टम',

        get_started_title: 'ShramikConnect से शुरुआत करें',
        tagline: 'काम से जुड़ते हाथ',
        description: 'ShramikConnect श्रमिकों और नियोक्ताओं को एक ही मंच पर लाता है। अवसर खोजें, तुरंत जुड़ें, और श्रम भर्ती के तरीके को सरल बनाएं।',
        cta: 'जुड़ना शुरू करें',

        feature_verified: 'सत्यापित कर्मचारी और नियोक्ता',
        feature_instant: 'तत्काल संचार चैनल',
        feature_zero: 'कोई बिचौलिया नहीं, कोई भ्रम नहीं',

        stat_workers: 'कर्मचारी जुड़े',
        stat_employers: 'सक्रिय नियोक्ता',
        stat_hirings: 'सफल नियुक्तियाँ',

        platform: 'प्लेटफॉर्म',
        for_workers: 'कर्मचारियों के लिए',
        for_employers: 'नियोक्ताओं के लिए',
        company: 'कंपनी',
        about: 'हमारे बारे में',
        how_it_works: 'यह कैसे काम करता है',
        support: 'सहायता',
        help_contact: 'सहायता और संपर्क',
        privacy: 'गोपनीयता नीति',
        terms: 'नियम और शर्तें',
        ready_to_start: 'शुरू करने के लिए तैयार हैं?',
        join_now: 'अभी जुड़ें',
        copyright: '© 2025 ShramikConnect. सर्वाधिकार सुरक्षित।'
    },
    mr: {
        language: 'भाषा',
        theme: 'थीम',
        light: 'लाइट',
        dark: 'डार्क',
        system: 'सिस्टम',

        get_started_title: 'ShramikConnect सह प्रारंभ करा',
        tagline: 'कामाशी जोडणारे हात',
        description: 'ShramikConnect कामगार आणि नियोक्त्यांना एकाच व्यासपीठावर आणते. संधी शोधा, त्वरित कनेक्ट व्हा आणि कामगार भरतीचा मार्ग सुलभ करा.',
        cta: 'कनेक्ट करणे सुरू करा',

        feature_verified: 'प्रमाणित कामगार आणि नियोक्ते',
        feature_instant: 'त्वरित संवाद माध्यम',
        feature_zero: 'शून्य मध्यस्थ, शून्य गोंधळ',

        stat_workers: 'कामगार जोडले गेले',
        stat_employers: 'सक्रिय नियोक्ते',
        stat_hirings: 'यशस्वी नियुक्त्या',

        platform: 'व्यासपीठ',
        for_workers: 'कामगारांसाठी',
        for_employers: 'नियोक्त्यांसाठी',
        company: 'कंपनी',
        about: 'आमच्याबद्दल',
        how_it_works: 'हे कसे कार्य करते',
        support: 'मदत',
        help_contact: 'मदत आणि संपर्क',
        privacy: 'गोपनीयता धोरण',
        terms: 'अटी व नियम',
        ready_to_start: 'प्रारंभ करण्यास तयार आहात?',
        join_now: 'आता सामील व्हा',
        copyright: '© 2025 ShramikConnect. सर्व हक्क राखीव.'
    }
};

// ============================================
// THEME MANAGEMENT (3 THEMES)
// ============================================
const ALL_THEMES = ['light', 'dark', 'system'];

function getSystemDefaultTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    const body = document.body;
    ALL_THEMES.forEach(t => body.classList.remove(t));
    body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme);

    // Update active button
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && ALL_THEMES.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        applyTheme('system');
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
let currentLanguage = 'en';

function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang] || translations.en;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update active language button
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');

function toggleSettingsDropdown(e) {
    e.stopPropagation();
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    settingsIcon.setAttribute('aria-expanded', isActive);
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
    settingsIcon.setAttribute('aria-expanded', 'false');
}

function closeSettingsOnClickOutside(e) {
    if (!settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// VIDEO HANDLING
// ============================================
function handleVideoAutoplay() {
    const video = document.querySelector('.hero-video');
    const fallback = document.getElementById('videoFallback');
    if (!video) return;

    video.play().catch(() => {
        if (fallback) {
            fallback.classList.add('active');
            video.style.display = 'none';
        }
    });

    video.addEventListener('error', () => {
        if (fallback) {
            fallback.classList.add('active');
            video.style.display = 'none';
        }
    });
}

// ============================================
// GSAP ANIMATIONS (if GSAP exists)
// ============================================
function initializeAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.getElementById('heroSection');
    const getStarted = document.getElementById('getStartedSection');
    if (hero && getStarted) {
        gsap.to(hero, {
            y: '-100vh',
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: getStarted,
                start: 'top bottom',
                end: 'top top',
                scrub: 1
            }
        });
    }

    gsap.from('.feature-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.feature-highlights',
            start: 'top 80%'
        }
    });

    gsap.from('.stat-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.stat-cards',
            start: 'top 80%'
        }
    });

    const cta = document.getElementById('ctaButton');
    if (cta) {
        cta.addEventListener('mouseenter', () => gsap.to(cta, { scale: 1.05, y: -3, duration: 0.3 }));
        cta.addEventListener('mouseleave', () => gsap.to(cta, { scale: 1, y: 0, duration: 0.3 }));
    }
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Load saved language or default to 'en'
    const savedLang = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLang);

    // Initialize theme
    initTheme();

    // Setup event listeners
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });

    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });

    // Keyboard: ESC closes dropdown
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSettingsDropdown();
        }
    });

    // Video
    handleVideoAutoplay();

    // Animations (if GSAP loaded)
    if (document.readyState === 'complete') {
        initializeAnimations();
    } else {
        window.addEventListener('load', initializeAnimations);
    }

    // CTA click feedback
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        window.location.href = this.closest('a').getAttribute('href');
                    }
                });
            } else {
                window.location.href = this.closest('a').getAttribute('href');
            }
        });
    }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}