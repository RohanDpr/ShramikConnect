/**
 * Worker Get Password Page - JavaScript
 * Handles password recovery form submission with notifications and redirect
 */

// DOM Elements
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const passwordForm = document.getElementById('passwordForm');
const contactInput = document.getElementById('contactInput');
const submitBtn = document.getElementById('submitBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// State Variables
let currentLanguage = 'en';
let currentTheme = 'light';

// Validation patterns
const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/
};

// i18n Translations
const translations = {
    en: {
        // Header
        'back_to_login': 'Back to Login',
        'get_password': 'Get Your Password',
        
        // Instructions
        'recover_password': 'Recover Your Password',
        'enter_email_phone': 'Enter your registered email address or phone number to receive your current password.',
        
        // Form
        'email_phone': 'Email or Phone Number',
        'enter_email_phone_placeholder': 'Enter your email or phone number',
        'enter_registered_contact': 'Enter the email or phone number associated with your account',
        'get_password_btn': 'Get Password',
        
        // Security
        'security_notice': 'For security reasons, we\'ll only send your password to your registered contact. If you don\'t receive it within 5 minutes, please contact support.',
        
        // Alternatives
        'cant_access': 'Can\'t access this email/phone?',
        'try_another_method': 'Try another recovery method',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Notifications
        'success_title': 'Password Sent!',
        'email_success': 'Your password has been sent to your email address.',
        'phone_success': 'Your password has been sent to your phone number via SMS.',
        'invalid_email': 'Please enter a valid email address',
        'invalid_phone': 'Please enter a valid phone number',
        'required_field': 'Please enter your email or phone number'
    },
    hi: {
        // Header
        'back_to_login': 'लॉगिन पर वापस जाएं',
        'get_password': 'अपना पासवर्ड प्राप्त करें',
        
        // Instructions
        'recover_password': 'अपना पासवर्ड पुनर्प्राप्त करें',
        'enter_email_phone': 'अपना वर्तमान पासवर्ड प्राप्त करने के लिए अपना पंजीकृत ईमेल पता या फोन नंबर दर्ज करें।',
        
        // Form
        'email_phone': 'ईमेल या फोन नंबर',
        'enter_email_phone_placeholder': 'अपना ईमेल या फोन नंबर दर्ज करें',
        'enter_registered_contact': 'अपने खाते से संबंधित ईमेल या फोन नंबर दर्ज करें',
        'get_password_btn': 'पासवर्ड प्राप्त करें',
        
        // Security
        'security_notice': 'सुरक्षा कारणों से, हम आपका पासवर्ड केवल आपके पंजीकृत संपर्क पर भेजेंगे। यदि आपको इसे 5 मिनट के भीतर प्राप्त नहीं होता है, तो कृपया सहायता से संपर्क करें।',
        
        // Alternatives
        'cant_access': 'क्या आप इस ईमेल/फोन को एक्सेस नहीं कर सकते?',
        'try_another_method': 'दूसरी पुनर्प्राप्ति विधि आजमाएं',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        // Notifications
        'success_title': 'पासवर्ड भेजा गया!',
        'email_success': 'आपका पासवर्ड आपके ईमेल पते पर भेज दिया गया है।',
        'phone_success': 'आपका पासवर्ड एसएमएस के माध्यम से आपके फोन नंबर पर भेज दिया गया है।',
        'invalid_email': 'कृपया एक मान्य ईमेल पता दर्ज करें',
        'invalid_phone': 'कृपया एक मान्य फोन नंबर दर्ज करें',
        'required_field': 'कृपया अपना ईमेल या फोन नंबर दर्ज करें'
    },
    mr: {
        // Header
        'back_to_login': 'लॉगिन वर परत जा',
        'get_password': 'आपला पासवर्ड मिळवा',
        
        // Instructions
        'recover_password': 'आपला पासवर्ड पुनर्प्राप्त करा',
        'enter_email_phone': 'आपला सध्याचा पासवर्ड प्राप्त करण्यासाठी आपला नोंदणीकृत ईमेल पत्ता किंवा फोन नंबर प्रविष्ट करा.',
        
        // Form
        'email_phone': 'ईमेल किंवा फोन नंबर',
        'enter_email_phone_placeholder': 'आपला ईमेल किंवा फोन नंबर प्रविष्ट करा',
        'enter_registered_contact': 'आपल्या खात्याशी संबंधित ईमेल किंवा फोन नंबर प्रविष्ट करा',
        'get_password_btn': 'पासवर्ड मिळवा',
        
        // Security
        'security_notice': 'सुरक्षेच्या कारणास्तव, आम्ही आपला पासवर्ड केवळ आपल्या नोंदणीकृत संपर्कावर पाठवू. जर आपल्याला ते 5 मिनिटांच्या आत प्राप्त झाले नाही तर कृपया समर्थनाशी संपर्क साधा.',
        
        // Alternatives
        'cant_access': 'या ईमेल/फोनमध्ये प्रवेश करू शकत नाही?',
        'try_another_method': 'दुसरी पुनर्प्राप्ती पद्धत वापरून पहा',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        // Notifications
        'success_title': 'पासवर्ड पाठवला!',
        'email_success': 'आपला पासवर्ड आपल्या ईमेल पत्त्यावर पाठवला गेला आहे.',
        'phone_success': 'आपला पासवर्ड एसएमएस द्वारे आपल्या फोन नंबरवर पाठवला गेला आहे.',
        'invalid_email': 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
        'invalid_phone': 'कृपया वैध फोन नंबर प्रविष्ट करा',
        'required_field': 'कृपया आपला ईमेल किंवा फोन नंबर प्रविष्ट करा'
    }
};

/**
 * Initialize the application
 */
function init() {
    console.log('Get Password Page Initialized');
    
    // Load saved preferences
    loadPreferences();
    
    // Setup event listeners
    setupEventListeners();
    
    // Apply initial animations
    applyInitialAnimations();
}

/**
 * Load saved user preferences
 */
function loadPreferences() {
    // Load theme preference
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    setTheme(savedTheme);
    
    // Load language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Update active buttons
    updateActiveButtons();
}

/**
 * Update active state of settings buttons
 */
function updateActiveButtons() {
    // Update language button
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    
    // Update theme button
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Settings dropdown toggle
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    
    // Close settings when clicking outside
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    // Form submission
    passwordForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time input validation
    contactInput.addEventListener('input', validateInput);
    
    // Language switcher
    languageOptions.forEach(btn => {
        btn.addEventListener('click', handleLanguageChange);
    });
    
    // Theme switcher
    themeOptions.forEach(btn => {
        btn.addEventListener('click', handleThemeChange);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
}

/**
 * Settings Functions
 */
function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    
    if (isActive) {
        settingsIcon.setAttribute('aria-expanded', 'true');
    } else {
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

/**
 * Input Validation
 */
function validateInput() {
    const value = contactInput.value.trim();
    const inputGroup = contactInput.closest('.input-group');
    
    if (!value) {
        return false;
    }
    
    const isEmail = validationPatterns.email.test(value);
    const isPhone = validationPatterns.phone.test(value.replace(/\D/g, ''));
    
    if (!isEmail && !isPhone) {
        return false;
    }
    
    return true;
}

/**
 * Handle Form Submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get input value
    const value = contactInput.value.trim();
    
    // Validate input
    if (!value) {
        showErrorNotification(translations[currentLanguage].required_field);
        return;
    }
    
    const isEmail = validationPatterns.email.test(value);
    const isPhone = validationPatterns.phone.test(value.replace(/\D/g, ''));
    
    if (!isEmail && !isPhone) {
        showErrorNotification(translations[currentLanguage].invalid_email);
        return;
    }
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    // Simulate API call delay
    setTimeout(() => {
        // ✅ FIXED: Determine contact type correctly
        let contactType = 'email';
        if (isPhone && !isEmail) {
            contactType = 'phone';
        }
        
        // ✅ FIXED: Pass correct parameters
        showSuccessNotification(isEmail, contactType, value);
        
        // Reset form and button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Clear form
        passwordForm.reset();
    }, 1500);
}

/**
 * Show Success Notification
 */
function showSuccessNotification(isEmail, contactType, contactValue) {
    const t = translations[currentLanguage];
    
    // यहाँ fix करें:
    // 'contactType' parameter सही use करें, 'isEmail' नहीं
    const isContactEmail = contactType === 'email';
    
    const maskedContact = maskContact(contactValue, contactType);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="notification-content">
            <h4>${t.success_title}</h4>
            <p>${isContactEmail ? t.email_success : t.phone_success}</p>
            <small>${isContactEmail ? 'Email:' : 'Phone:'} ${maskedContact}</small>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
        redirectToLogin();
    });
    
    // Auto-close after 5 seconds and redirect
    setTimeout(() => {
        closeNotification(notification);
        redirectToLogin();
    }, 5000);
}

/**
 * Show Error Notification
 */
function showErrorNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.background = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="notification-content">
            <h4>Error</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 3000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => closeNotification(notification));
}

/**
 * Close Notification
 */
function closeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 400);
}

/**
 * Mask contact information for privacy
 */
function maskContact(contact, type) {
    if (type === 'email') {
        const [username, domain] = contact.split('@');
        const maskedUsername = username.length > 2 
            ? username.charAt(0) + '***' + username.charAt(username.length - 1)
            : username;
        return maskedUsername + '@' + domain;
    } else {
        // Phone number masking
        if (contact.length <= 4) return '***' + contact.slice(-2);
        return '***' + contact.slice(-4);
    }
}

/**
 * Redirect to Login Page
 */
function redirectToLogin() {
    // Show redirecting message
    const redirectMsg = document.createElement('div');
    redirectMsg.className = 'notification';
    redirectMsg.style.background = 'linear-gradient(135deg, #4362C9 0%, #2A4AB3 100%)';
    redirectMsg.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-sign-in-alt"></i>
        </div>
        <div class="notification-content">
            <h4>Redirecting...</h4>
            <p>Taking you to login page</p>
        </div>
    `;
    
    document.body.appendChild(redirectMsg);
    
    setTimeout(() => {
        redirectMsg.classList.add('show');
    }, 10);
    
    // ✅ FIXED: Correct redirect URL
    setTimeout(() => {
        window.location.href = 'login_worker.html'; // ✅ यही correct file name है
    }, 1000);
}

/**
 * Language Functions
 */
function handleLanguageChange(event) {
    const lang = event.currentTarget.dataset.lang;
    setLanguage(lang);
    
    // Update active button
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateTranslations();
}

function updateTranslations() {
    const t = translations[currentLanguage] || translations.en;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Update page title
    document.title = t.get_password + ' | Password Recovery';
}

/**
 * Theme Functions
 */
function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    setTheme(theme);
    
    // Update active button
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Update body class
    document.body.className = themeToApply + '-theme';
}

function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        const theme = event.matches ? 'dark' : 'light';
        document.body.className = theme + '-theme';
    }
}

/**
 * Apply Initial Animations
 */
function applyInitialAnimations() {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initialize application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', init);

// Initialize system theme if set to system
if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}

// Export functions for testing
window.pageFunctions = {
    init,
    validateInput,
    showSuccessNotification,
    showErrorNotification,
    setLanguage,
    setTheme
};