// DOM Elements
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

// State Variables
let isPasswordVisible = false;
let countdownTimer = null;
let countdownValue = 10;
let currentLanguage = 'en';
let currentTheme = 'light';

// Initialize Application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadPreferences();
    setupEventListeners();
    validateForm();
}

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

// Settings Functions
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

// Password Functions
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

// Form Validation Functions
function validateForm() {
    const isUserValid = validateUserInput();
    const isPasswordValid = validatePassword();
    const isTermsChecked = termsCheckbox.checked;
    
    // Enable/Disable checkbox based on credentials
    termsCheckbox.disabled = !(isUserValid && isPasswordValid);
    
    // Update login button state
    loginButton.disabled = !(isUserValid && isPasswordValid && isTermsChecked);
    
    // REMOVED: The terms error notification part completely
    
    return isUserValid && isPasswordValid;
}

function validateUserInput() {
    const value = userInput.value.trim();
    
    if (!value) {
        showError(userError, 'Enter username, email or phone');
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

function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

function hideError(element) {
    element.textContent = '';
    element.classList.remove('show');
}

// Terms & Conditions Functions
function handleTermsCheckboxChange(event) {
    if (termsCheckbox.disabled) {
        event.preventDefault();
        return;
    }

    // User is checking the checkbox
    if (termsCheckbox.checked) {
        event.preventDefault();
        termsCheckbox.checked = false; // stop auto-check
        showTermsPopup();
    }
}

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

function showTermsPopup() {
    // Reset countdown
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

function updateTimerDisplay() {
    countdownElement.textContent = countdownValue;
    timerDisplay.textContent = countdownValue;
    closePopupBtn.textContent = `Close (${countdownValue}s)`;
}

function enableCloseButton() {
    closePopupBtn.disabled = false;
    closePopupBtn.textContent = 'Close';
}

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

function handlePopupOverlayClick(event) {
    if (event.target === termsPopup && !closePopupBtn.disabled) {
        closeTermsPopup();
    }
}

// Login Function
async function handleLogin(event) {
    event.preventDefault();
    
    if (loginButton.disabled) return;
    
    // Get form data
    const userData = {
        username: userInput.value.trim(),
        password: passwordInput.value,
        termsAccepted: termsCheckbox.checked
    };
    
    // Show loading state
    loginButton.classList.add('loading');
    loginButton.disabled = true;
    const originalText = loginButton.querySelector('.button-text').textContent;
    loginButton.querySelector('.button-text').textContent = 'Logging in...';
    
    try {
        // Simulate API call
        await simulateLogin(userData);
        
        // Success - in real app, redirect to dashboard
        showSuccessMessage();
        
    } catch (error) {
        // Error handling
        showErrorMessage(error.message);
    } finally {
        // Reset button state
        loginButton.classList.remove('loading');
        loginButton.querySelector('.button-text').textContent = originalText;
        loginButton.disabled = false;
        validateForm(); // Re-validate form
    }
}

function simulateLogin(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful login
            if (userData.password.length >= 8 && userData.username && userData.termsAccepted) {
                resolve({ success: true, message: 'Login successful' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1500);
    });
}

function showSuccessMessage() {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4362C9 0%, #2A4AB5 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(67, 98, 201, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 320px;
        ">
            <i class="fas fa-check-circle" style="font-size: 18px;"></i>
            <span>Login successful! Redirecting...</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

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

// Language Functions
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
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    updateTranslations();
}

function updateTranslations() {
    const translations = {
        en: {
            'language': 'Language',
            'theme': 'Theme',
            'light': 'Light',
            'dark': 'Dark',
            'system': 'System',
            'username': 'Username / Email / Phone',
            'password': 'Password',
            'placeholderUser': 'Enter username, email or phone',
            'placeholderPass': 'Password (min 8 chars)',
            'subtitle': 'Login to find thousands of job opportunities',
            'login': 'Login',
            'trouble': 'Trouble in Login',
            'help': 'Get Help',
            'forgot': 'Forgot Password',
            'reset': 'Get or Reset Password',
            'new': 'New User',
            'register': 'Register'
        },
        hi: {
            'language': 'भाषा',
            'theme': 'थीम',
            'light': 'लाइट',
            'dark': 'डार्क',
            'system': 'सिस्टम',
            'username': 'उपयोगकर्ता / ईमेल / फ़ोन',
            'password': 'पासवर्ड',
            'placeholderUser': 'उपयोगकर्ता, ईमेल या फ़ोन दर्ज करें',
            'placeholderPass': 'पासवर्ड (कम से कम 8 अक्षर)',
            'subtitle': 'हजारों नौकरी के अवसर खोजने के लिए लॉगिन करें',
            'login': 'लॉगिन',
            'trouble': 'लॉगिन में समस्या',
            'help': 'सहायता प्राप्त करें',
            'forgot': 'पासवर्ड भूल गए',
            'reset': 'पासवर्ड प्राप्त या रीसेट करें',
            'new': 'नया उपयोगकर्ता',
            'register': 'पंजीकरण करें'
        },
        mr: {
            'language': 'भाषा',
            'theme': 'थीम',
            'light': 'लाइट',
            'dark': 'डार्क',
            'system': 'सिस्टम',
            'username': 'वापरकर्ता / ईमेल / फोन',
            'password': 'पासवर्ड',
            'placeholderUser': 'वापरकर्ता, ईमेल किंवा फोन प्रविष्ट करा',
            'placeholderPass': 'पासवर्ड (किमान 8 अक्षरे)',
            'subtitle': 'हजारो नोकरीच्या संधी शोधण्यासाठी लॉगिन करा',
            'login': 'लॉगिन',
            'trouble': 'लॉगिनमध्ये समस्या',
            'help': 'मदत मिळवा',
            'forgot': 'पासवर्ड विसरलात',
            'reset': 'पासवर्ड मिळवा किंवा रीसेट करा',
            'new': 'नवीन वापरकर्ता',
            'register': 'नोंदणी करा'
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

// Theme Functions
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
    localStorage.setItem('theme', theme);
    
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

// Add CSS for animations
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