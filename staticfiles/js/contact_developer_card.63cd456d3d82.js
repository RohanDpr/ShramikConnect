/**
 * CONTACT DEVELOPER PAGE - EXACT ABOUT PAGE STYLE
 * Same carousel behavior - center card on top until user interaction
 * With scrollable card backs
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const knowMoreBtns = document.querySelectorAll('.know-more-back-btn');

// Carousel elements
const cards = Array.from(document.querySelectorAll('.team-card'));
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const track = document.querySelector('.carousel-track');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ['light', 'dark', 'system'];

// Carousel state - EXACT same as about.js
let positions = [-2, -1, 0, 1, 2];
let isAnimating = false;
let autoPlayInterval = null;
let hasInteracted = false;
let touchStartX = 0;
let wheelTimeout;

// Flag to control scroll behavior on the page
let userHasScrolled = false;
let scrollTimeout;

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
        'developers_title': 'Meet Our Amazing Developers',
        'developers_subtitle': 'The creative minds behind ShramikConnect',
        'developers_intro': 'Our dedicated team of developers works tirelessly to make ShramikConnect better every day. Hover over cards and click "Know more" to visit individual developer pages.',
        'back_to_help': 'Back to Help & Contact'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'developers_title': 'हमारे अद्भुत डेवलपर्स से मिलें',
        'developers_subtitle': 'श्रमिककनेक्ट के पीछे की रचनात्मक प्रतिभाएँ',
        'developers_intro': 'हमारी समर्पित डेवलपर टीम श्रमिककनेक्ट को हर दिन बेहतर बनाने के लिए अथक प्रयास करती है। कार्ड पर होवर करें और व्यक्तिगत डेवलपर पेज पर जाने के लिए "और जानें" पर क्लिक करें।',
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'developers_title': 'आमच्या अद्भुत डेव्हलपरशी भेटा',
        'developers_subtitle': 'श्रमिककनेक्ट मागील सर्जनशील प्रतिभा',
        'developers_intro': 'आमची समर्पित डेव्हलपर टीम श्रमिककनेक्ट दररोज चांगले बनवण्यासाठी अथक प्रयत्न करते. कार्डवर होवर करा आणि वैयक्तिक डेव्हलपर पेजवर जाण्यासाठी "अधिक जाणून घ्या" वर क्लिक करा.',
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

    // Update "Know more" buttons text (without changing href)
    document.querySelectorAll('.know-more-back-btn span').forEach(span => {
        span.textContent = 'Know more';
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
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIconRight.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// SCROLL BEHAVIOR - Top 3 cards fixed until interaction
// ============================================
function initScrollBehavior() {
    // Initially, lock scroll position to top
    window.scrollTo(0, 0);
    
    // Prevent default scrolling until user interacts
    const preventScroll = (e) => {
        if (!userHasScrolled) {
            e.preventDefault();
            window.scrollTo(0, 0);
            return false;
        }
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', preventScroll, { passive: false });
    
    // Touch move prevention
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Function to unlock scrolling after user interaction
    const unlockScroll = () => {
        if (!userHasScrolled) {
            userHasScrolled = true;
            
            // Remove scroll prevention
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
            
            console.log('Scroll unlocked after user interaction');
        }
        
        // Clear any existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
    };

    // Unlock on any user interaction with the page
    const interactionEvents = ['click', 'touchstart', 'mousedown', 'keydown'];
    interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, unlockScroll, { once: true });
    });

    // Also unlock if user tries to scroll and we detect it
    let scrollCheckInterval = setInterval(() => {
        if (window.scrollY > 5 && !userHasScrolled) {
            unlockScroll();
            clearInterval(scrollCheckInterval);
        }
    }, 100);

    // Clean up after 5 seconds if no interaction (safety)
    setTimeout(() => {
        if (!userHasScrolled) {
            unlockScroll();
        }
        clearInterval(scrollCheckInterval);
    }, 5000);
}

// ============================================
// CAROUSEL FUNCTIONS - EXACT same as about.js
// ============================================
function updateCards() {
    cards.forEach((card, index) => {
        card.setAttribute('data-pos', positions[index]);
    });
}

function moveRight() {
    if (isAnimating) return;
    isAnimating = true;
    positions.unshift(positions.pop());
    updateCards();
    setTimeout(() => isAnimating = false, 800);
}

function moveLeft() {
    if (isAnimating) return;
    isAnimating = true;
    positions.push(positions.shift());
    updateCards();
    setTimeout(() => isAnimating = false, 800);
}

function triggerInteraction() {
    if (!hasInteracted) {
        hasInteracted = true;
        startAutoPlay();
    } else {
        resetAutoPlay();
    }
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        moveLeft();
    }, 3000);
}

function resetAutoPlay() {
    if (hasInteracted) {
        clearInterval(autoPlayInterval);
        startAutoPlay();
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

    // Carousel navigation - EXACT same as about.js
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            triggerInteraction();
            moveLeft();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            triggerInteraction();
            moveRight();
        });
    }

    // Wheel navigation - EXACT same as about.js
    if (track) {
        track.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (isAnimating) return;

            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                triggerInteraction();
                if (e.deltaX > 0 || e.deltaY > 0) {
                    moveRight();
                } else {
                    moveLeft();
                }
            }, 50);
        }, { passive: false });

        // Touch navigation - EXACT same as about.js
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                triggerInteraction();
                if (diff > 0) moveRight();
                else moveLeft();
            }
        }, { passive: true });
    }

    // Know More buttons - redirect to individual pages
    knowMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Don't prevent default - let the href work
            // Just add a small animation effect
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });

    // Pause auto-play on hover
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        });

        container.addEventListener('mouseleave', () => {
            if (hasInteracted) startAutoPlay();
        });
    }

    // Keyboard navigation - EXACT same as about.js
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            triggerInteraction();
            moveRight();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            triggerInteraction();
            moveLeft();
        } else if (e.key === 'Escape') {
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
    console.log('Contact Developer page initialized with exact About page style');

    // Set initial card positions
    updateCards();

    // Load saved language
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLanguage);

    // Load theme
    initTheme();

    // Setup scroll behavior (top 3 cards fixed until interaction)
    initScrollBehavior();

    // Setup event listeners
    setupEventListeners();

    // DO NOT start auto-play initially - center card stays on top until interaction
    // This matches about.js behavior where auto-play starts after first interaction
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}