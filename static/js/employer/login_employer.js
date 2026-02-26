// ============================================
// DOM ELEMENTS
// ============================================

const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const userInput = document.getElementById('userInput');
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('passwordToggle');
const termsCheckbox = document.getElementById('termsCheckbox');
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const termsPopup = document.getElementById('termsPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const countdownElement = document.getElementById('countdown');
const timerDisplay = document.getElementById('timerDisplay');

// Error Elements
const userError = document.getElementById('userError');
const passwordError = document.getElementById('passwordError');
const termsError = document.getElementById('termsError');

// ============================================
// STATE VARIABLES
// ============================================

let isPasswordVisible = false;
let countdownTimer = null;
let countdownValue = 10;
let currentLanguage = 'en';
let currentTheme = 'light';

// ============================================
// INITIALIZATION
// ============================================

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadPreferences();
    setupEventListeners();
    validateForm();
}

// Load user preferences from localStorage
function loadPreferences() {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Load language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    // Set active buttons
    updateActiveButtons();
}

// Update active language and theme buttons
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

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
    // Settings dropdown toggle
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    
    // Close settings when clicking outside
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    // Password visibility toggle
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    
    // Real-time form validation
    userInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    
    // Terms checkbox - show popup on click
    termsCheckbox.addEventListener('change', handleTermsCheckboxChange);
    
    // Form submission
    loginForm.addEventListener('submit', handleLogin);
    
    // Language switcher
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', handleLanguageChange);
    });
    
    // Theme switcher
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', handleThemeChange);
    });
    
    // Popup close button
    closePopupBtn.addEventListener('click', closeTermsPopup);
    
    // Close popup when clicking overlay (only when button enabled)
    termsPopup.addEventListener('click', handlePopupOverlayClick);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
}

// ============================================
// SETTINGS FUNCTIONS
//============================================

// Toggle settings dropdown visibility
function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    
    if (isActive) {
        settingsIcon.setAttribute('aria-expanded', 'true');
    } else {
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

// Close settings dropdown when clicking outside
function closeSettingsOnClickOutside(event) {
    if (!settingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

// ============================================
// PASSWORD FUNCTIONS
// ============================================

// Toggle password visibility
function togglePasswordVisibility() {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? 'text' : 'password';
    
    // Update icon
    const icon = passwordToggle.querySelector('.password-icon');
    if (isPasswordVisible) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
    
    // Add animation effect
    passwordToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        passwordToggle.style.transform = 'scale(1)';
    }, 150);
}

// ============================================
// FORM VALIDATION FUNCTIONS
// ============================================

// Validate entire form
function validateForm() {
    const isUserValid = validateUserInput();
    const isPasswordValid = validatePassword();
    const isTermsChecked = termsCheckbox.checked;
    
    // Enable/Disable checkbox based on credentials
    termsCheckbox.disabled = !(isUserValid && isPasswordValid);
    
    // Update login button state
    loginButton.disabled = !(isUserValid && isPasswordValid && isTermsChecked);
    
    return isUserValid && isPasswordValid;
}

// Validate username/email input
function validateUserInput() {
    const value = userInput.value.trim();
    
    if (!value) {
        showError(userError, 'Enter company email or username');
        return false;
    }
    
    // Basic validation
    if (value.length < 3) {
        showError(userError, 'Enter at least 3 characters');
        return false;
    }
    
    hideError(userError);
    return true;
}

// Validate password input
function validatePassword() {
    const value = passwordInput.value;
    
    if (!value) {
        showError(passwordError, 'Enter your password');
        return false;
    }
    
    if (value.length < 8) {
        showError(passwordError, 'Minimum 8 characters required');
        return false;
    }
    
    hideError(passwordError);
    return true;
}

// Show error message
function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

// Hide error message
function hideError(element) {
    element.textContent = '';
    element.classList.remove('show');
}

// ============================================
// TERMS & CONDITIONS FUNCTIONS
// ============================================

// Handle terms checkbox change
function handleTermsCheckboxChange(event) {
    if (termsCheckbox.disabled) {
        event.preventDefault();
        return;
    }

    // User is checking the checkbox
    if (termsCheckbox.checked) {
        event.preventDefault();
        termsCheckbox.checked = false; // Stop auto-check
        showTermsPopup();
    }
}

// Show terms and conditions popup
function showTermsPopup() {
    // First, check the checkbox temporarily for visual feedback
    termsCheckbox.checked = true;
    
    // Then reset countdown
    countdownValue = 10;
    updateTimerDisplay();
    
    // Disable close button
    closePopupBtn.disabled = true;
    closePopupBtn.textContent = `Close (${countdownValue}s)`;
    
    // Show popup with animation
    termsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Start countdown timer
    startCountdown();
}

// Start countdown timer for terms popup
function startCountdown() {
    // Clear any existing timer
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }
    
    countdownTimer = setInterval(() => {
        countdownValue--;
        updateTimerDisplay();
        
        if (countdownValue <= 0) {
            clearInterval(countdownTimer);
            enableCloseButton();
        }
    }, 1000);
}

// Update timer display in popup
function updateTimerDisplay() {
    countdownElement.textContent = countdownValue;
    timerDisplay.textContent = countdownValue;
    closePopupBtn.textContent = `Close (${countdownValue}s)`;
}

// Enable close button after countdown
function enableCloseButton() {
    closePopupBtn.disabled = false;
    closePopupBtn.textContent = 'Close';
}

// Close terms popup
function closeTermsPopup() {
    if (!closePopupBtn.disabled) {
        // Hide popup with animation
        termsPopup.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear timer
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        
        // Check the checkbox after popup is closed
        termsCheckbox.checked = true;
        validateForm(); // Re-validate form to enable login button
    }
}

// Handle popup overlay click
function handlePopupOverlayClick(event) {
    if (event.target === termsPopup && !closePopupBtn.disabled) {
        closeTermsPopup();
    }
}

// ============================================
// CSRF TOKEN FUNCTION
// ============================================

// CSRF token get karne ka function
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// ============================================
// LOGIN FUNCTION - FIXED VERSION
// ============================================

// Handle form submission
async function handleLogin(event) {
    event.preventDefault();
    
    if (loginButton.disabled) return;
    
    // Get form data
    const email = userInput.value.trim();
    const password = passwordInput.value;
    
    // Show loading state
    loginButton.classList.add('loading');
    loginButton.disabled = true;
    const originalText = loginButton.querySelector('.button-text').textContent;
    loginButton.querySelector('.button-text').textContent = 'Logging in...';
    
    try {
        // ACTUAL API CALL - Django server ko request bhejo
        const response = await fetch('/login_employer/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': getCookie('csrftoken')  // CSRF token bhejna zaroori hai
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Success - redirect to dashboard
            showSuccessMessage('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = data.redirect_url || '/dashboard_employer/';
            }, 1000);
        } else {
            // Error - show message
            showErrorMessage(data.message || 'Invalid credentials');
            
            // Reset button state
            loginButton.classList.remove('loading');
            loginButton.querySelector('.button-text').textContent = originalText;
            loginButton.disabled = false;
        }
    } catch (error) {
        // Network error
        console.error('Login error:', error);
        showErrorMessage('Connection error. Please try again.');
        
        // Reset button state
        loginButton.classList.remove('loading');
        loginButton.querySelector('.button-text').textContent = originalText;
        loginButton.disabled = false;
    }
}

// Show success message after login
function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #01A060 0%, #007A47 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(1, 160, 96, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 320px;
        ">
            <i class="fas fa-check-circle" style="font-size: 18px;"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show error message
function showErrorMessage(message) {
    // Create error notification
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #DC2626;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(220, 38, 38, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 320px;
        ">
            <i class="fas fa-exclamation-circle" style="font-size: 18px;"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ============================================
// LANGUAGE FUNCTIONS
// ============================================

// Handle language change
function handleLanguageChange(event) {
    const lang = event.currentTarget.dataset.lang;
    setLanguage(lang);
    
    // Update active button
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Set language and save preference
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    updateTranslations();
}

// Update all text based on selected language
function updateTranslations() {
    const translations = {
        en: {
            'language': 'Language',
            'theme': 'Theme',
            'light': 'Light',
            'dark': 'Dark',
            'system': 'System',
            'username': 'Company Email / Username',
            'password': 'Password',
            'placeholderUser': 'Enter company email or username',
            'placeholderPass': 'Password (min 8 chars)',
            'subtitle': 'Login to access thousands of potential candidates',
            'login': 'Login',
            'trouble': 'Trouble in Login',
            'help': 'Get Help',
            'forgot': 'Forgot Password',
            'reset': 'Get or Reset Password',
            'new': 'New Employer',
            'register': 'Register Company'
        },
        hi: {
            'language': 'भाषा',
            'theme': 'थीम',
            'light': 'लाइट',
            'dark': 'डार्क',
            'system': 'सिस्टम',
            'username': 'कंपनी ईमेल / उपयोगकर्ता',
            'password': 'पासवर्ड',
            'placeholderUser': 'कंपनी ईमेल या उपयोगकर्ता दर्ज करें',
            'placeholderPass': 'पासवर्ड (कम से कम 8 अक्षर)',
            'subtitle': 'हजारों संभावित उम्मीदवारों तक पहुंचने के लिए लॉगिन करें',
            'login': 'लॉगिन',
            'trouble': 'लॉगिन में समस्या',
            'help': 'सहायता प्राप्त करें',
            'forgot': 'पासवर्ड भूल गए',
            'reset': 'पासवर्ड प्राप्त या रीसेट करें',
            'new': 'नया नियोक्ता',
            'register': 'कंपनी पंजीकरण'
        },
        mr: {
            'language': 'भाषा',
            'theme': 'थीम',
            'light': 'लाइट',
            'dark': 'डार्क',
            'system': 'सिस्टम',
            'username': 'कंपनी ईमेल / वापरकर्ता',
            'password': 'पासवर्ड',
            'placeholderUser': 'कंपनी ईमेल किंवा वापरकर्ता प्रविष्ट करा',
            'placeholderPass': 'पासवर्ड (किमान 8 अक्षरे)',
            'subtitle': 'हजारो संभाव्य उमेदवारांपर्यंत प्रवेश करण्यासाठी लॉगिन करा',
            'login': 'लॉगिन',
            'trouble': 'लॉगिनमध्ये समस्या',
            'help': 'मदत मिळवा',
            'forgot': 'पासवर्ड विसरलात',
            'reset': 'पासवर्ड मिळवा किंवा रीसेट करा',
            'new': 'नवीन नियोक्ता',
            'register': 'कंपनी नोंदणी'
        }
    };
    
    const t = translations[currentLanguage] || translations.en;
    
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update hardcoded elements
    const labels = {
        userInput: t.username,
        password: t.password,
        login: t.login,
        subtitle: t.subtitle,
        trouble: t.trouble,
        help: t.help,
        forgot: t.forgot,
        reset: t.reset,
        new: t.new,
        register: t.register
    };
    
    // Update form labels
    document.querySelector('label[for="userInput"]').textContent = labels.userInput;
    document.querySelector('label[for="password"]').textContent = labels.password;
    
    // Update placeholders
    userInput.placeholder = t.placeholderUser;
    passwordInput.placeholder = t.placeholderPass;
    
    // Update button text
    loginButton.querySelector('.button-text').textContent = labels.login;
    
    // Update subtitle
    document.querySelector('.logo-subtitle').textContent = labels.subtitle;
    
    // Update link boxes
    const linkTitles = document.querySelectorAll('.link-title');
    const linkActions = document.querySelectorAll('.link-action');
    
    if (linkTitles[0]) linkTitles[0].textContent = labels.trouble;
    if (linkActions[0]) linkActions[0].textContent = labels.help;
    if (linkTitles[1]) linkTitles[1].textContent = labels.forgot;
    if (linkActions[1]) linkActions[1].textContent = labels.reset;
    if (linkTitles[2]) linkTitles[2].textContent = labels.new;
    if (linkActions[2]) linkActions[2].textContent = labels.register;
}

// ============================================
// THEME FUNCTIONS
// ============================================

// Handle theme change
function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    setTheme(theme);
    
    // Update active button
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Set theme and save preference
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Update body class
    document.body.className = themeToApply + '-theme';
}

// Handle system theme changes
function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        const theme = event.matches ? 'dark' : 'light';
        document.body.className = theme + '-theme';
    }
}

// ============================================
// ADD CSS FOR ANIMATIONS
// ============================================

// Add slide-in animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .success-notification, .error-notification {
        font-family: 'Inter', sans-serif;
    }
`;
document.head.appendChild(style);

// Initialize with current system theme if set to system
if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}