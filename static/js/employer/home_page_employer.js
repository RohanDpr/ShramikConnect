/**
 * EMPLOYER HOME PAGE - ENHANCED VERSION
 * Complete navigation with working hamburger menu, settings, notifications, and welcome dashboard
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Settings Elements (INSIDE SIDEBAR)
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Sidebar Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const logoutBtn = document.getElementById('logoutBtn');
const profileEditBtn = document.getElementById('profileEditBtn');
const logoContainer = document.getElementById('logoContainer');

// Profile Elements
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');

// Welcome Dashboard Elements
const employerNameDisplay = document.getElementById('employerNameDisplay');

// Notification Wrapper
const notificationWrapper = document.getElementById('notificationWrapper');

// ============================================
// STATE VARIABLES
// ============================================

let currentLanguage = 'en';
let currentTheme = 'light';

// ============================================
// TRANSLATIONS (English, Hindi, Marathi)
// ============================================

const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'help': 'Help',
        'about': 'About',
        
        // Sidebar
        'menu': 'Menu',
        'settings': 'Settings',
        'help_contact': 'Help & Contact',
        'about_us': 'About Us',
        'terms_conditions': 'Terms & Conditions',
        'privacy_policy': 'Privacy Policy',
        'logout': 'Logout',
        'edit_profile': 'Edit Profile',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Notifications (Only logout)
        'logout_success': 'Logged out',
        'logout_message': 'You have been logged out successfully. Redirecting to login...',
        
        // Welcome Dashboard
        'welcome': 'Welcome',
        'welcome_slogan': 'Find Perfect Worker According to your location, budget, timings and requirements',
        'workers_hired': 'Workers Hired',
        'jobs_posted': 'Jobs Posted',
        'avg_rating': 'Average Rating',
        'till_now': 'Till Now',
        'given_to_workers': 'Given to Workers'
    },
    hi: {
        // Hindi translations
        'home': 'होम',
        'help': 'सहायता',
        'about': 'के बारे में',
        
        'menu': 'मेनू',
        'settings': 'सेटिंग्स',
        'help_contact': 'सहायता और संपर्क',
        'about_us': 'हमारे बारे में',
        'terms_conditions': 'नियम और शर्तें',
        'privacy_policy': 'गोपनीयता नीति',
        'logout': 'लॉगआउट',
        'edit_profile': 'प्रोफाइल संपादित करें',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        'logout_success': 'लॉग आउट किया गया',
        'logout_message': 'आप सफलतापूर्वक लॉग आउट हो गए हैं। लॉगिन पृष्ठ पर पुनर्निर्देशित किया जा रहा है...',
        
        // Welcome Dashboard
        'welcome': 'स्वागत है',
        'welcome_slogan': 'अपने स्थान, बजट, समय और आवश्यकताओं के अनुसार सही कर्मचारी खोजें',
        'workers_hired': 'कर्मचारी किराए पर लिए',
        'jobs_posted': 'नौकरियां पोस्ट की गईं',
        'avg_rating': 'औसत रेटिंग',
        'till_now': 'अब तक',
        'given_to_workers': 'कर्मचारियों को दिया गया'
    },
    mr: {
        // Marathi translations
        'home': 'होम',
        'help': 'मदत',
        'about': 'विषयी',
        
        'menu': 'मेनू',
        'settings': 'सेटिंग्ज',
        'help_contact': 'मदत आणि संपर्क',
        'about_us': 'आमच्याबद्दल',
        'terms_conditions': 'अटी आणि नियम',
        'privacy_policy': 'गोपनीयता धोरण',
        'logout': 'लॉगआउट',
        'edit_profile': 'प्रोफाइल संपादित करा',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        'logout_success': 'लॉग आउट केले',
        'logout_message': 'तुम्ही यशस्वीरित्या लॉग आउट झाले आहात. लॉगिन पृष्ठावर पुनर्निर्देशित केले जात आहे...',
        
        // Welcome Dashboard
        'welcome': 'स्वागत आहे',
        'welcome_slogan': 'तुमच्या स्थान, बजेट, वेळ आणि गरजांनुसार परिपूर्ण कामगार शोधा',
        'workers_hired': 'कामगार भाड्याने घेतले',
        'jobs_posted': 'नोकऱ्या पोस्ट केल्या',
        'avg_rating': 'सरासरी रेटिंग',
        'till_now': 'आतापर्यंत',
        'given_to_workers': 'कामगारांना दिले'
    }
};

// ============================================
// NOTIFICATION SYSTEM (Only for logout)
// ============================================

/**
 * Show notification with proper styling (Only used for logout)
 * @param {string} title - Notification title
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, warning, info)
 * @param {number} duration - Auto close duration in milliseconds
 */
function showNotification(title, message, type = 'info', duration = 5000) {
    // Create notification container if it doesn't exist
    if (!notificationWrapper) {
        const wrapper = document.createElement('div');
        wrapper.className = 'notification-wrapper';
        wrapper.id = 'notificationWrapper';
        document.body.appendChild(wrapper);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    // Generate unique ID for notification
    const notificationId = 'notification-' + Date.now();
    notification.id = notificationId;
    
    // Create notification HTML
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Close notification" data-notification-id="${notificationId}">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification to wrapper
    const wrapper = document.getElementById('notificationWrapper');
    wrapper.appendChild(notification);
    
    // Trigger animation after a small delay
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Set up close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notificationId);
    });
    
    // Auto-close after specified duration
    if (duration > 0) {
        setTimeout(() => {
            if (document.getElementById(notificationId)) {
                closeNotification(notificationId);
            }
        }, duration);
    }
    
    return notificationId;
}

/**
 * Close a specific notification
 * @param {string} notificationId - ID of the notification to close
 */
function closeNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

/**
 * Close all notifications
 */
function closeAllNotifications() {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

/**
 * Apply language translations to all elements
 */
function applyLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang] || translations.en;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Update profile name from localStorage
    const employerName = localStorage.getItem('employerName') || 'Employer';
    profileName.textContent = employerName;
    
    // Fix mobile view for different languages
    updateMobileViewForLanguage();
}

/**
 * Handle language change
 */
function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('employerLanguage', lang);
    
    // Update active button
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Apply language
    applyLanguage(lang);
    
    // Update dashboard with new language
    updateDashboardOnLanguageChange();
    
    // Close settings dropdown
    closeSettingsDropdown();
    
    // NO NOTIFICATION FOR LANGUAGE CHANGE (as requested)
}

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Apply theme to the page
 */
function applyTheme(theme) {
    currentTheme = theme;
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Update body class
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${themeToApply}-theme`);
    
    // Update active button in settings
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // Save to localStorage
    localStorage.setItem('employerTheme', theme);
    
    // NO NOTIFICATION FOR THEME CHANGE (as requested)
}

/**
 * Handle theme change
 */
function handleThemeChange(theme) {
    applyTheme(theme);
    
    // Close settings dropdown
    closeSettingsDropdown();
    
    // NO NOTIFICATION FOR THEME CHANGE (as requested)
}

/**
 * Handle system theme change
 */
function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        applyTheme('system');
    }
}

// ============================================
// SETTINGS DROPDOWN (INSIDE SIDEBAR)
// ============================================

/**
 * Toggle settings dropdown visibility
 */
function toggleSettingsDropdown(event) {
    event.stopPropagation();
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    sidebarSettingsIcon.setAttribute('aria-expanded', isActive);
}

/**
 * Close settings dropdown
 */
function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
    sidebarSettingsIcon.setAttribute('aria-expanded', 'false');
}

/**
 * Close settings when clicking outside
 */
function closeSettingsOnClickOutside(event) {
    if (!sidebarSettingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// SIDEBAR MANAGEMENT
// ============================================

/**
 * Toggle sidebar (open/close)
 */
function toggleSidebar() {
    const isActive = sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active', isActive);
    
    if (isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        // Close settings dropdown when closing sidebar
        closeSettingsDropdown();
    }
}

/**
 * Close sidebar
 */
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Close settings dropdown
    closeSettingsDropdown();
}

/**
 * Handle profile edit button click
 */
function handleProfileEdit() {
    // Redirect to profile edit page
    // You can change this URL to your actual profile edit page
    window.location.href = 'employer_profile.html';
}

/**
 * Handle logout
 */
function handleLogout() {
    const translation = translations[currentLanguage];
    
    // Show logout notification (only notification we're keeping)
    showNotification(
        translation.logout_success,
        translation.logout_message,
        'success'
    );
    
    // Clear user data from localStorage
    localStorage.removeItem('employerName');
    localStorage.removeItem('employerEmail');
    
    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = 'login_employee.html';
    }, 2000);
}

document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "/login_employer/";
});

// ============================================
// WELCOME DASHBOARD FUNCTIONS
// ============================================

/**
 * Load and display employer statistics
 * Currently uses dummy data - replace with API calls when backend is ready
 */
function loadEmployerStatistics() {
    // Dummy data - Replace with actual API calls
    const dummyData = {
        workersHired: 47,
        jobsPosted: 23,
        averageRating: 4.3 // Out of 5
    };
    
    // You can also load from localStorage if previously saved
    // const savedStats = JSON.parse(localStorage.getItem('employerStats')) || dummyData;
    const stats = dummyData;
    
    // Animate numbers counting up
    animateCountUp('workersHiredValue', stats.workersHired, 2000);
    animateCountUp('jobsPostedValue', stats.jobsPosted, 2000);
    updateRatingDisplay(stats.averageRating);
    
    // Display employer name
    const employerName = localStorage.getItem('employerName') || 'Employer';
    if (employerNameDisplay) {
        employerNameDisplay.textContent = employerName;
    }
    
    // Save stats to localStorage for persistence (optional)
    // localStorage.setItem('employerStats', JSON.stringify(stats));
}

/**
 * Animate number counting up
 * @param {string} elementId - ID of the element to animate
 * @param {number} targetValue - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCountUp(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const startTime = performance.now();
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuad = progress => progress * (2 - progress);
        const currentValue = Math.floor(easeOutQuad(progress) * targetValue);
        
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCount);
}

/**
 * Update star rating display
 * @param {number} rating - Rating value (0-5)
 */
function updateRatingDisplay(rating) {
    const ratingElement = document.getElementById('ratingValue');
    const starsContainer = document.getElementById('ratingStars');
    
    if (!ratingElement || !starsContainer) return;
    
    // Animate rating value
    animateCountUp('ratingValue', rating, 2000);
    
    // Clear previous stars
    starsContainer.innerHTML = '';
    
    // Create stars (5 total)
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    const totalStars = 5;
    
    for (let i = 1; i <= totalStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        if (i <= fullStars) {
            star.classList.add('filled');
        } else if (i === fullStars + 1 && partialStar > 0) {
            star.classList.add('partial');
            // Set CSS variable for partial fill
            const fillPercentage = partialStar * 100;
            star.style.setProperty('--fill-percentage', `${fillPercentage}%`);
        }
        
        star.textContent = '★';
        starsContainer.appendChild(star);
        
        // Add staggered animation
        star.style.animation = `starPop 0.5s ease-out ${i * 0.1}s both`;
    }
}

/**
 * Add star animation CSS to the page
 */
function addStarAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes starPop {
            0% {
                opacity: 0;
                transform: scale(0.5) rotate(-180deg);
            }
            50% {
                transform: scale(1.2) rotate(10deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Setup statistics card interactions
 */
function setupStatisticsInteractions() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(1, 160, 96, 0.2);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Add ripple animation CSS to the page
 */
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Update dashboard on language change
 */
function updateDashboardOnLanguageChange() {
    // Employer name might need to be re-fetched on language change
    const employerName = localStorage.getItem('employerName') || 'Employer';
    if (employerNameDisplay) {
        employerNameDisplay.textContent = employerName;
    }
    
    // Re-animate statistics with new language
    setTimeout(() => {
        loadEmployerStatistics();
    }, 100);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Truncate text if it's too long
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis if needed
 */
function truncateText(text, maxLength = 40) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

/**
 * Update profile information in sidebar
 */
function updateProfileInfo() {
    const employerName = localStorage.getItem('employerName') || 'Employer';
    const employerEmail = localStorage.getItem('employerEmail') || 'employer@example.com';
    
    // Update profile name
    profileName.textContent = employerName;
    
    // Update email with truncation for mobile
    const emailText = document.querySelector('.email-text');
    if (emailText) {
        // Store original email in data attribute
        emailText.dataset.fullEmail = employerEmail;
        
        // Check screen width and truncate if needed
        if (window.innerWidth <= 768) {
            emailText.textContent = truncateText(employerEmail, 25);
        } else {
            emailText.textContent = employerEmail;
        }
    }
}

/**
 * Update mobile view for different languages
 * This fixes the layout issues in Hindi/Marathi
 */
function updateMobileViewForLanguage() {
    const navTexts = document.querySelectorAll('.nav-text');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Adjust max width based on language
        let maxWidth = '60px';
        if (currentLanguage === 'hi' || currentLanguage === 'mr') {
            // Allow more width for Hindi/Marathi text
            maxWidth = '80px';
        }
        
        navTexts.forEach(text => {
            text.style.maxWidth = maxWidth;
        });
    } else {
        // Reset on desktop
        navTexts.forEach(text => {
            text.style.maxWidth = '';
        });
    }
}

/**
 * Handle logo click/hover
 */
function setupLogoEffects() {
    if (!logoContainer) return;
    
    // Click on logo to go to home
    logoContainer.addEventListener('click', function(e) {
        e.preventDefault();
        // You can add custom behavior here
        console.log('Logo clicked - navigate to home');
        // window.location.href = 'employer_home_page.html'; // Uncomment for actual navigation
    });
    
    // Add hover effects
    logoContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    logoContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Settings dropdown toggle (INSIDE SIDEBAR)
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    
    // Close settings when clicking outside
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    // Language switcher
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });
    
    // Theme switcher
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });
    
    // System theme change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
    
    // Hamburger menu toggle
    hamburgerBtn.addEventListener('click', toggleSidebar);
    
    // Close sidebar when clicking overlay or close button
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    
    // Profile edit button
    profileEditBtn.addEventListener('click', handleProfileEdit);
    
    // Logout
    logoutBtn.addEventListener('click', handleLogout);
    
    // Close sidebar when clicking on menu links
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
    
    // Handle window resize for responsive adjustments
    window.addEventListener('resize', handleWindowResize);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Setup logo effects
    setupLogoEffects();
}

/**
 * Handle window resize events
 */
function handleWindowResize() {
    // Update email truncation based on screen size
    updateProfileInfo();
    
    // Update mobile view for language
    updateMobileViewForLanguage();
    
    // Close sidebar on mobile when resizing to larger screen
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
}

/**
 * Handle keyboard navigation
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyboardNavigation(event) {
    // Escape key closes sidebar, settings dropdown, and notifications
    if (event.key === 'Escape') {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        }
        if (settingsDropdown.classList.contains('active')) {
            closeSettingsDropdown();
        }
        closeAllNotifications();
    }
    
    // Tab key navigation within sidebar when it's open
    if (event.key === 'Tab' && sidebar.classList.contains('active')) {
        const focusableElements = sidebar.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (event.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    console.log('Employer Home Page - Enhanced Version Initialized');
    
    // Load user data
    updateProfileInfo();
    
    // Load preferences
    const savedLanguage = localStorage.getItem('employerLanguage') || 'en';
    const savedTheme = localStorage.getItem('employerTheme') || 'light';
    
    // Apply language
    handleLanguageChange(savedLanguage);
    
    // Apply theme
    applyTheme(savedTheme);
    
    // Setup event listeners
    setupEventListeners();
    
    // Add custom animations
    addStarAnimation();
    addRippleAnimation();
    
    // Load and display employer statistics
    loadEmployerStatistics();
    
    // Setup statistics interactions
    setupStatisticsInteractions();
    
    // Initialize any additional features
    initializeAdditionalFeatures();
    
    // NO WELCOME NOTIFICATION (as requested)
}

/**
 * Initialize any additional features
 */
function initializeAdditionalFeatures() {
    // Add subtle hover effects to menu items
    const menuItems = document.querySelectorAll('.menu-item-box');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
    
    // Add loading animation to logout button
    logoutBtn.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Logging out...</span>';
        this.disabled = true;
        
        // Restore original text after 2 seconds if still on page
        setTimeout(() => {
            if (this.parentNode) {
                this.innerHTML = originalText;
                this.disabled = false;
            }
        }, 2000);
    });
}

// ============================================
// START APPLICATION
// ============================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}



