// Initialize i18next for internationalization
document.addEventListener('DOMContentLoaded', function() {
    initializeI18n();
});

function initializeI18n() {
    // If i18next is not loaded, log and continue initializing app without i18n
    if (typeof i18next === 'undefined') {
        console.warn('i18next is not loaded — continuing without i18n');
        initializeApp();
        return;
    }

    // Initialize i18next
    i18next.init({
        lng: 'en',
        debug: false,
        resources: {
            en: {
                translation: {
                    get_started_title: "Get started with ShramikConnect",
                    tagline: "Connecting hands to work",
                    description: "ShramikConnect brings workers and employers on a single platform. Discover opportunities, connect instantly, and simplify the way labour hiring works.",
                    cta: "Start Connecting",
                    language: "Language",
                    theme: "Theme",
                    light: "Light",
                    dark: "Dark",
                    system: "System",
                    help_contact: "Help & Contact",
                    about: "About",
                    privacy: "Privacy Policy",
                    terms: "Terms & Conditions",
                    copyright: "© 2024 ShramikConnect. All rights reserved."
                }
            },
            hi: {
                translation: {
                    get_started_title: "ShramikConnect से शुरुआत करें",
                    tagline: "काम से जुड़ते हाथ",
                    description: "श्रमिकों और नियोक्ताओं को सहजता से जोड़ने के लिए हमारे प्लेटफॉर्म से जुड़ें। एक ही स्थान पर सही अवसर और प्रतिभाएं खोजें।",
                    cta: "जुड़ना शुरू करें",
                    language: "भाषा",
                    theme: "थीम",
                    light: "लाइट",
                    dark: "डार्क",
                    system: "सिस्टम",
                    help_contact: "सहायता और संपर्क",
                    about: "हमारे बारे में",
                    privacy: "गोपनीयता नीति",
                    terms: "नियम और शर्तें",
                    copyright: "© 2024 ShramikConnect. सर्वाधिकार सुरक्षित।"
                }
            },
            mr: {
                translation: {
                    get_started_title: "ShramikConnect सह प्रारंभ करा",
                    tagline: "कामाशी जोडणारे हात",
                    description: "कामगार आणि नियोक्त्यांना सहजतेने जोडण्यासाठी आमच्या प्लॅटफॉर्मवर सामील व्हा. एकाच ठिकाणी योग्य संधी आणि प्रतिभा शोधा.",
                    cta: "कनेक्ट करणे सुरू करा",
                    language: "भाषा",
                    theme: "थीम",
                    light: "लाइट",
                    dark: "डार्क",
                    system: "सिस्टम",
                    help_contact: "मदत आणि संपर्क",
                    about: "आमच्याबद्दल",
                    privacy: "गोपनीयता धोरण",
                    terms: "अटी आणि नियम",
                    copyright: "© 2024 ShramikConnect. सर्व हक्क राखीव."
                }
            }
        }
    }).then(function() {
        updateContent();
        initializeApp();
    }).catch(function(err) {
        console.error('Error initializing i18next:', err);
        initializeApp();
    });
}

// App Initialization
function initializeApp() {
    console.log('Initializing app...');

    // Set initial theme and language
    const initialTheme = getPreferredTheme();
    const initialLanguage = getStoredLanguage();

    setTheme(initialTheme);
    setLanguage(initialLanguage);

    // Initialize components
    handleVideoAutoplay();
    initializeAnimations();
    initializeCTAButton();
    initializeSystemThemeListener();
    initializeResponsiveVideo();
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
    if (typeof i18next === 'undefined') {
        console.log('i18next not available, skipping language change');
        setStoredLanguage(lang);
        updateActiveLanguageButton(lang);
        return;
    }

    i18next.changeLanguage(lang).then(function() {
        updateContent();
        setStoredLanguage(lang);
        updateActiveLanguageButton(lang);
    }).catch(function(err) {
        console.log('Language change failed:', err);
    });
}

function updateActiveLanguageButton(lang) {
    const languageButtons = document.querySelectorAll('.language-option');
    if (!languageButtons.length) return;
    languageButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    if (!elements.length) return;
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (typeof i18next !== 'undefined' && i18next.t) {
            element.textContent = i18next.t(key);
        }
    });
}

// Video Autoplay Handling
function handleVideoAutoplay() {
    const video = document.querySelector('.hero-video');
    const videoFallback = document.getElementById('videoFallback');
    
    if (!video) return;

    const promise = video.play();
    if (promise !== undefined) {
        promise.catch(() => {
            if (videoFallback) {
                videoFallback.classList.add('active');
                video.style.display = 'none';
            }
        });
    }

    video.addEventListener('loadeddata', function() {
        if (video.readyState >= 3 && videoFallback) {
            videoFallback.classList.remove('active');
        }
    });

    video.controls = false;
    video.removeAttribute('controls');
}

// GSAP Animations
function initializeAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not available, skipping animations');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const heroSection = document.getElementById('heroSection');
    const getStartedSection = document.getElementById('getStartedSection');

    if (heroSection && getStartedSection) {
        gsap.to(heroSection, {
            y: '-100vh',
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: getStartedSection,
                start: 'top bottom',
                end: 'top top',
                scrub: 1,
                markers: false
            }
        });
    }

    const featureItems = document.querySelectorAll('.feature-item');
    const statCards = document.querySelectorAll('.stat-card');

    if (featureItems.length > 0) {
        gsap.from(featureItems, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.feature-highlights',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    if (statCards.length > 0) {
        gsap.from(statCards, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.stat-cards',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.05, y: -3, duration: 0.3, ease: 'power2.out' });
        });
        ctaButton.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
        });
    }
}

// CTA Button Handler
function initializeCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    if (!ctaButton) return;

    ctaButton.addEventListener('click', function() {
        if (typeof gsap !== 'undefined') {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    window.location.href = '/accounts/login/';
                }
            });
        } else {
            window.location.href = '/accounts/login/';
        }
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

// Responsive Video Handling
function initializeResponsiveVideo() {
    function handleResize() {
        const video = document.querySelector('.hero-video');
        if (!video) return;
        video.style.objectFit = window.innerWidth < window.innerHeight ? 'cover' : 'contain';
    }

    window.addEventListener('resize', handleResize);
    handleResize();
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

    // Language switcher
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function (evt) {
            evt.stopPropagation();
            document.querySelectorAll('.language-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            setLanguage(this.dataset.lang);
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

// Error handling for video
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'VIDEO') {
        const videoFallback = document.getElementById('videoFallback');
        if (videoFallback) {
            console.log('Video error occurred, showing fallback');
            videoFallback.classList.add('active');
            const video = document.querySelector('.hero-video');
            if (video) {
                video.style.display = 'none';
                video.pause && video.pause();
            }
        }
    }
}, true);