// Worker Login JavaScript
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

// CSRF Token Helper
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Initialize Application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadPreferences();
    setupEventListeners();
    validateForm();
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    updateActiveButtons();
}

function updateActiveButtons() {
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
}

function setupEventListeners() {
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    userInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    termsCheckbox.addEventListener('change', handleTermsCheckboxChange);
    loginForm.addEventListener('submit', handleLogin);
    
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', handleLanguageChange);
    });
    
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', handleThemeChange);
    });
    
    closePopupBtn.addEventListener('click', closeTermsPopup);
    termsPopup.addEventListener('click', handlePopupOverlayClick);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
}

function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    settingsIcon.setAttribute('aria-expanded', isActive);
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

function togglePasswordVisibility() {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? 'text' : 'password';
    
    const icon = passwordToggle.querySelector('.password-icon');
    if (isPasswordVisible) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
    
    passwordToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        passwordToggle.style.transform = 'scale(1)';
    }, 150);
}

function validateForm() {
    const isUserValid = validateUserInput();
    const isPasswordValid = validatePassword();
    const isTermsChecked = termsCheckbox.checked;
    
    termsCheckbox.disabled = !(isUserValid && isPasswordValid);
    loginButton.disabled = !(isUserValid && isPasswordValid && isTermsChecked);
    
    return isUserValid && isPasswordValid;
}

function validateUserInput() {
    const value = userInput.value.trim();
    
    if (!value) {
        showError(userError, 'Enter username, email or phone');
        return false;
    }
    
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

function handleTermsCheckboxChange(event) {
    if (termsCheckbox.disabled) {
        event.preventDefault();
        return;
    }

    if (termsCheckbox.checked) {
        event.preventDefault();
        termsCheckbox.checked = false;
        showTermsPopup();
    }
}

function showTermsPopup() {
    countdownValue = 10;
    updateTimerDisplay();
    
    closePopupBtn.disabled = true;
    closePopupBtn.textContent = `Close (${countdownValue}s)`;
    
    termsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    startCountdown();
}

function startCountdown() {
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
        termsPopup.classList.remove('active');
        document.body.style.overflow = '';
        
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        
        termsCheckbox.checked = true;
        validateForm();
    }
}

function handlePopupOverlayClick(event) {
    if (event.target === termsPopup && !closePopupBtn.disabled) {
        closeTermsPopup();
    }
}

async function handleLogin(event) {
    event.preventDefault();
    
    if (loginButton.disabled) return;
    
    const email = userInput.value.trim();
    const password = passwordInput.value;
    
    loginButton.classList.add('loading');
    loginButton.disabled = true;
    const originalText = loginButton.querySelector('.button-text').textContent;
    loginButton.querySelector('.button-text').textContent = 'Logging in...';
    
    try {
        const response = await fetch('/login_worker/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showSuccessMessage('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = data.redirect_url || '/dashboard_worker/';
            }, 1000);
        } else {
            showErrorMessage(data.message || 'Invalid credentials');
            loginButton.classList.remove('loading');
            loginButton.querySelector('.button-text').textContent = originalText;
            loginButton.disabled = false;
        }
    } catch (error) {
        console.error('Login error:', error);
        showErrorMessage('Connection error. Please try again.');
        loginButton.classList.remove('loading');
        loginButton.querySelector('.button-text').textContent = originalText;
        loginButton.disabled = false;
    }
}

function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
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
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 18px;"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
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
    `;
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle" style="font-size: 18px;"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function handleLanguageChange(event) {
    const lang = event.currentTarget.dataset.lang;
    setLanguage(lang);
    
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
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
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    document.querySelector('label[for="userInput"]').textContent = t.username;
    document.querySelector('label[for="password"]').textContent = t.password;
    userInput.placeholder = t.placeholderUser;
    passwordInput.placeholder = t.placeholderPass;
    loginButton.querySelector('.button-text').textContent = t.login;
    document.querySelector('.logo-subtitle').textContent = t.subtitle;
    
    const linkTitles = document.querySelectorAll('.link-title');
    const linkActions = document.querySelectorAll('.link-action');
    
    if (linkTitles[0]) linkTitles[0].textContent = t.trouble;
    if (linkActions[0]) linkActions[0].textContent = t.help;
    if (linkTitles[1]) linkTitles[1].textContent = t.forgot;
    if (linkActions[1]) linkActions[1].textContent = t.reset;
    if (linkTitles[2]) linkTitles[2].textContent = t.new;
    if (linkActions[2]) linkActions[2].textContent = t.register;
}

function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    setTheme(theme);
    
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
`;
document.head.appendChild(style);

if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}