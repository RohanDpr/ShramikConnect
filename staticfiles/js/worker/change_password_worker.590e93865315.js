/**
 * Worker Change Password Page - JavaScript
 * Handles multi-step password change process with OTP verification
 * Fixed issues:
 * 1. Language support added to all text elements
 * 2. Color scheme fixed to use only blue (#4362C9) and derivatives
 * 3. Resend OTP functionality fixed
 * 4. Added "Can't access this email/phone?" section
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Settings Elements
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Step Elements
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

// Step 1 Elements
const contactInput = document.getElementById('contactInput');
const getOtpBtn = document.getElementById('getOtpBtn');

// Step 2 Elements
const backToStep1 = document.getElementById('backToStep1');
const otpMessage = document.getElementById('otpMessage');
const otpInput = document.getElementById('otpInput');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const otpTimer = document.getElementById('otpTimer');
const timerDisplay = document.getElementById('timerDisplay');
const resendOtpBtn = document.getElementById('resendOtpBtn');
const resendText = document.getElementById('resendText');

// Step 3 Elements
const backToStep2 = document.getElementById('backToStep2');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const toggleNewPassword = document.getElementById('toggleNewPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordStrength = document.getElementById('passwordStrength');
const passwordMatch = document.getElementById('passwordMatch');
const updatePasswordBtn = document.getElementById('updatePasswordBtn');

// Recovery Methods Section
const tryRecoveryBtn = document.querySelector('.try-recovery-btn');

// ============================================
// STATE VARIABLES
// ============================================
let currentStep = 1;
let currentLanguage = 'en';
let currentTheme = 'light';
let otpCountdown = null;
let otpTimeLeft = 60; // 1 minute in seconds
let resendCountdown = null;
let resendTimeLeft = 60; // 1 minute in seconds
let userContact = ''; // Store user's contact info
let contactType = ''; // Store contact type (email/phone)

// Validation patterns
const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{9,14}$/, // Minimum 10 digits, maximum 15 with country code
    otp: /^\d{6}$/
};

// Dummy OTP for testing
const DUMMY_OTP = '123456';

// Translation dictionary
const translations = {
    en: {
        // Header
        'change_password': 'Change Password',
        
        // Instructions
        'secure_password_change': 'Change Your Password',
        'change_password_instruction': 'Enter your registered email or phone number to receive OTP',
        
        // Step 1
        'email_phone': 'Email or Phone Number',
        'email_phone_placeholder': 'Email or phone',
        'get_otp': 'Get OTP',
        'enter_registered_contact': 'Enter registered email or phone',
        'security_notice': 'For security reasons, we verify your identity before allowing password change.',
        
        // Step 2
        'back': 'Back',
        'enter_otp': 'Enter OTP',
        'otp_sent': 'OTP sent to your contact',
        'enter_otp_label': 'Enter OTP',
        'otp_placeholder': 'XXXXXX',
        'enter_6digit_otp': 'Enter 6-digit OTP received',
        'verify_otp': 'Verify OTP',
        'didnt_receive_otp': 'Didn\'t receive OTP?',
        'resend_otp_60s': 'Resend OTP (60s)',
        
        // Step 3
        'set_new_password': 'Set New Password',
        'password_requirements': 'Password Requirements:',
        'min_8_chars': 'Minimum 8 characters',
        'new_password_label': 'New Password',
        'enter_new_password': 'Enter new password',
        'password_strength': 'Password Strength',
        'confirm_password_label': 'Confirm Password',
        're_enter_password': 'Re-enter password',
        'passwords_match': 'Passwords match',
        'password_security_note': 'Your new password must be strong and unique.',
        'update_password': 'Update Password',
        
        // Recovery Section
        'cant_access': 'Can\'t access this email/phone?',
        'try_another_method': 'Try another recovery method',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System'
    },
    hi: {
        // Header
        'change_password': 'पासवर्ड बदलें',
        
        // Instructions
        'secure_password_change': 'अपना पासवर्ड बदलें',
        'change_password_instruction': 'OTP प्राप्त करने के लिए अपना पंजीकृत ईमेल या फोन नंबर दर्ज करें',
        
        // Step 1
        'email_phone': 'ईमेल या फोन नंबर',
        'email_phone_placeholder': 'ईमेल या फोन',
        'get_otp': 'OTP प्राप्त करें',
        'enter_registered_contact': 'पंजीकृत ईमेल या फोन दर्ज करें',
        'security_notice': 'सुरक्षा कारणों से, हम पासवर्ड बदलने की अनुमति देने से पहले आपकी पहचान सत्यापित करते हैं।',
        
        // Step 2
        'back': 'वापस',
        'enter_otp': 'OTP दर्ज करें',
        'otp_sent': 'OTP आपके संपर्क पर भेजा गया',
        'enter_otp_label': 'OTP दर्ज करें',
        'otp_placeholder': 'XXXXXX',
        'enter_6digit_otp': 'प्राप्त 6-अंकीय OTP दर्ज करें',
        'verify_otp': 'OTP सत्यापित करें',
        'didnt_receive_otp': 'OTP प्राप्त नहीं हुआ?',
        'resend_otp_60s': 'OTP पुनः भेजें (60s)',
        
        // Step 3
        'set_new_password': 'नया पासवर्ड सेट करें',
        'password_requirements': 'पासवर्ड आवश्यकताएँ:',
        'min_8_chars': 'न्यूनतम 8 वर्ण',
        'new_password_label': 'नया पासवर्ड',
        'enter_new_password': 'नया पासवर्ड दर्ज करें',
        'password_strength': 'पासवर्ड की मजबूती',
        'confirm_password_label': 'पासवर्ड की पुष्टि करें',
        're_enter_password': 'पासवर्ड पुनः दर्ज करें',
        'passwords_match': 'पासवर्ड मेल खाते हैं',
        'password_security_note': 'आपका नया पासवर्ड मजबूत और अद्वितीय होना चाहिए।',
        'update_password': 'पासवर्ड अपडेट करें',
        
        // Recovery Section
        'cant_access': 'इस ईमेल/फोन तक पहुंच नहीं हो सकती?',
        'try_another_method': 'दूसरी पुनर्प्राप्ति विधि आज़माएं',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम'
    },
    mr: {
        // Header
        'change_password': 'पासवर्ड बदला',
        
        // Instructions
        'secure_password_change': 'तुमचा पासवर्ड बदला',
        'change_password_instruction': 'OTP प्राप्त करण्यासाठी तुमचा नोंदणीकृत ईमेल किंवा फोन नंबर प्रविष्ट करा',
        
        // Step 1
        'email_phone': 'ईमेल किंवा फोन नंबर',
        'email_phone_placeholder': 'ईमेल किंवा फोन',
        'get_otp': 'OTP मिळवा',
        'enter_registered_contact': 'नोंदणीकृत ईमेल किंवा फोन प्रविष्ट करा',
        'security_notice': 'सुरक्षेच्या कारणांसाठी, आम्ही पासवर्ड बदलण्याची परवानगी देण्यापूर्वी तुमची ओळख सत्यापित करतो.',
        
        // Step 2
        'back': 'मागे',
        'enter_otp': 'OTP प्रविष्ट करा',
        'otp_sent': 'OTP तुमच्या संपर्कावर पाठवला',
        'enter_otp_label': 'OTP प्रविष्ट करा',
        'otp_placeholder': 'XXXXXX',
        'enter_6digit_otp': 'प्राप्त 6-अंकीय OTP प्रविष्ट करा',
        'verify_otp': 'OTP सत्यापित करा',
        'didnt_receive_otp': 'OTP प्राप्त झाला नाही?',
        'resend_otp_60s': 'OTP पुन्हा पाठवा (60s)',
        
        // Step 3
        'set_new_password': 'नवीन पासवर्ड सेट करा',
        'password_requirements': 'पासवर्ड आवश्यकता:',
        'min_8_chars': 'किमान 8 वर्ण',
        'new_password_label': 'नवीन पासवर्ड',
        'enter_new_password': 'नवीन पासवर्ड प्रविष्ट करा',
        'password_strength': 'पासवर्ड सामर्थ्य',
        'confirm_password_label': 'पासवर्डची पुष्टी करा',
        're_enter_password': 'पासवर्ड पुन्हा प्रविष्ट करा',
        'passwords_match': 'पासवर्ड जुळतात',
        'password_security_note': 'तुमचा नवीन पासवर्ड मजबूत आणि अद्वितीय असावा.',
        'update_password': 'पासवर्ड अपडेट करा',
        
        // Recovery Section
        'cant_access': 'या ईमेल/फोनवर प्रवेश मिळू शकत नाही?',
        'try_another_method': 'दुसरी पुनर्प्राप्ती पद्धत वापरा',
        
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'फिका',
        'dark': 'गडद',
        'system': 'सिस्टीम'
    }
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    console.log('Worker Change Password Page Initialized');
    
    // Load saved preferences
    loadPreferences();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Apply current language
    applyLanguage(currentLanguage);
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
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    
    // Update theme button
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Settings dropdown toggle
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    
    // Close settings when clicking outside
    document.addEventListener('click', closeSettingsOnClickOutside);
    
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
    
    // Step 1: Contact validation
    contactInput.addEventListener('input', validateContactInput);
    
    // Step 1: Get OTP button
    getOtpBtn.addEventListener('click', handleGetOtp);
    
    // Step 2: Back button
    backToStep1.addEventListener('click', () => goToStep(1));
    
    // Step 2: OTP validation
    otpInput.addEventListener('input', validateOtpInput);
    
    // Step 2: Verify OTP button
    verifyOtpBtn.addEventListener('click', handleVerifyOtp);
    
    // Step 2: Resend OTP button
    resendOtpBtn.addEventListener('click', handleResendOtp);
    
    // Step 3: Back button
    backToStep2.addEventListener('click', () => goToStep(2));
    
    // Step 3: Toggle password visibility
    toggleNewPassword.addEventListener('click', () => togglePasswordVisibility(newPassword, toggleNewPassword));
    toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility(confirmPassword, toggleConfirmPassword));
    
    // Step 3: Password validation
    newPassword.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', checkPasswordMatch);
    
    // Step 3: Update password button
    updatePasswordBtn.addEventListener('click', handleUpdatePassword);
    
    // Recovery button
    if (tryRecoveryBtn) {
        tryRecoveryBtn.addEventListener('click', handleTryRecovery);
    }
}

/**
 * Initialize form validation
 */
function initializeFormValidation() {
    // Initial validation
    validateContactInput();
    validateOtpInput();
    validatePassword();
    checkPasswordMatch();
}

// ============================================
// SETTINGS FUNCTIONS
// ============================================

/**
 * Toggle settings dropdown visibility
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

/**
 * Close settings when clicking outside
 */
function closeSettingsOnClickOutside(event) {
    if (!settingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

// ============================================
// LANGUAGE FUNCTIONS
// ============================================

/**
 * Handle language change
 */
function handleLanguageChange(event) {
    const lang = event.currentTarget.dataset.lang;
    setLanguage(lang);
    
    // Update active button
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/**
 * Set language and apply translations
 */
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

/**
 * Apply language translations to all elements
 */
function applyLanguage(lang) {
    const translation = translations[lang] || translations.en;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('data-i18n-placeholder')) {
                // Handle placeholder separately
                const placeholderKey = element.getAttribute('data-i18n-placeholder');
                if (translation[placeholderKey]) {
                    element.placeholder = translation[placeholderKey];
                }
            } else {
                element.textContent = translation[key];
            }
        }
    });
    
    // Update placeholders separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translation[key] && element.placeholder !== undefined) {
            element.placeholder = translation[key];
        }
    });
}

// ============================================
// THEME FUNCTIONS
// ============================================

/**
 * Handle theme change
 */
function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    setTheme(theme);
    
    // Update active button
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

/**
 * Set theme
 */
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

/**
 * Handle system theme change
 */
function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        const theme = event.matches ? 'dark' : 'light';
        document.body.className = theme + '-theme';
    }
}

// ============================================
// STEP NAVIGATION FUNCTIONS
// ============================================

/**
 * Navigate to specific step
 */
function goToStep(stepNumber) {
    // Hide all steps
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    
    // Show target step
    if (stepNumber === 1) {
        step1.classList.add('active');
        currentStep = 1;
    } else if (stepNumber === 2) {
        step2.classList.add('active');
        currentStep = 2;
        startOtpTimer();
    } else if (stepNumber === 3) {
        step3.classList.add('active');
        currentStep = 3;
        stopOtpTimer();
    }
}

// ============================================
// STEP 1: CONTACT VERIFICATION
// ============================================

/**
 * Validate contact input - Only enable when COMPLETE valid contact is entered
 */
function validateContactInput() {
    const value = contactInput.value.trim();
    
    // Check if input is COMPLETE valid email
    const isCompleteEmail = validationPatterns.email.test(value);
    
    // Check if input is COMPLETE valid phone (minimum 10 digits)
    const isCompletePhone = validationPatterns.phone.test(value.replace(/\D/g, ''));
    
    // Enable Get OTP button only when COMPLETE valid contact is entered
    const isValidContact = isCompleteEmail || isCompletePhone;
    getOtpBtn.disabled = !isValidContact;
    
    return isValidContact;
}

/**
 * Handle Get OTP button click
 */
function handleGetOtp(event) {
    event.preventDefault();
    
    const value = contactInput.value.trim();
    
    if (!validateContactInput()) {
        showNotification('Error', 'Please enter a complete valid email or phone number', 'error');
        return;
    }
    
    // Store contact info for later use
    userContact = value;
    
    // Determine contact type for notification
    const isEmail = validationPatterns.email.test(value);
    contactType = isEmail ? 'email' : 'phone';
    
    // Disable Get OTP button and show loading
    getOtpBtn.disabled = true;
    const originalText = getOtpBtn.innerHTML;
    getOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending OTP...</span>';
    
    // Simulate API call to send OTP
    setTimeout(() => {
        // In real app, this would be an API call to backend
        console.log(`OTP would be sent to: ${userContact}`);
        
        // Update OTP message with correct contact type
        const maskedContact = maskContact(userContact, contactType);
        const contactTypeText = contactType === 'email' ? 'email' : 'phone';
        otpMessage.textContent = `OTP sent to ${contactTypeText}: ${maskedContact}`;
        
        // Reset button
        getOtpBtn.disabled = false;
        getOtpBtn.innerHTML = originalText;
        
        // Show success notification with correct contact type
        const notificationMessage = contactType === 'email' 
            ? 'OTP has been sent to your email address' 
            : 'OTP has been sent to your phone number via SMS';
        
        showNotification(
            'OTP Sent!',
            notificationMessage,
            'success'
        );
        
        // Move to step 2
        goToStep(2);
    }, 1500);
}

// ============================================
// STEP 2: OTP VERIFICATION
// ============================================

/**
 * Start OTP timer (1 minute)
 */
function startOtpTimer() {
    // Clear existing timer
    if (otpCountdown) {
        clearInterval(otpCountdown);
    }
    
    // Reset timer to 1 minute
    otpTimeLeft = 60;
    updateTimerDisplay();
    
    // Reset OTP input field and enable it
    otpInput.value = '';
    otpInput.disabled = false;
    validateOtpInput();
    
    // Reset timer color
    otpTimer.classList.remove('expiring');
    
    // Start countdown
    otpCountdown = setInterval(() => {
        otpTimeLeft--;
        updateTimerDisplay();
        
        // Change color when 10 seconds remaining
        if (otpTimeLeft <= 10) {
            otpTimer.classList.add('expiring');
        }
        
        if (otpTimeLeft <= 0) {
            clearInterval(otpCountdown);
            otpTimer.classList.add('expiring');
            otpInput.disabled = true;
            verifyOtpBtn.disabled = true;
        }
    }, 1000);
    
    // Start resend timer
    startResendTimer();
}

/**
 * Stop OTP timer
 */
function stopOtpTimer() {
    if (otpCountdown) {
        clearInterval(otpCountdown);
    }
    if (resendCountdown) {
        clearInterval(resendCountdown);
    }
}

/**
 * Update timer display
 */
function updateTimerDisplay() {
    const minutes = Math.floor(otpTimeLeft / 60);
    const seconds = otpTimeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Start resend timer (1 minute)
 */
function startResendTimer() {
    // Clear existing timer
    if (resendCountdown) {
        clearInterval(resendCountdown);
    }
    
    // Reset timer to 1 minute
    resendTimeLeft = 60;
    updateResendButton();
    
    // Start countdown
    resendCountdown = setInterval(() => {
        resendTimeLeft--;
        updateResendButton();
        
        if (resendTimeLeft <= 0) {
            clearInterval(resendCountdown);
            resendOtpBtn.disabled = false;
            resendText.textContent = translations[currentLanguage]?.resend_otp_60s || 'Resend OTP';
        }
    }, 1000);
}

/**
 * Update resend button
 */
function updateResendButton() {
    resendOtpBtn.disabled = true;
    const resendTextKey = translations[currentLanguage]?.resend_otp_60s || 'Resend OTP (60s)';
    resendText.textContent = resendTextKey.replace('60s', `${resendTimeLeft}s`);
}

/**
 * Validate OTP input
 */
function validateOtpInput() {
    const value = otpInput.value.trim();
    
    // Check if input is valid 6-digit OTP
    const isValid = validationPatterns.otp.test(value);
    
    // Enable Verify OTP button
    verifyOtpBtn.disabled = !isValid;
    
    return isValid;
}

/**
 * Handle Verify OTP button click
 */
function handleVerifyOtp(event) {
    event.preventDefault();
    
    const enteredOtp = otpInput.value.trim();
    
    if (!validateOtpInput()) {
        showNotification('Error', 'Please enter a valid 6-digit OTP', 'error');
        return;
    }
    
    // Disable Verify OTP button and show loading
    verifyOtpBtn.disabled = true;
    const originalText = verifyOtpBtn.innerHTML;
    verifyOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Verifying...</span>';
    
    // Simulate API call to verify OTP (using dummy OTP for demo)
    setTimeout(() => {
        // Check against dummy OTP (in real app, verify with backend)
        const isValid = enteredOtp === DUMMY_OTP;
        
        if (isValid) {
            // Show success notification
            showNotification(
                'OTP Verified!',
                'Your identity has been verified successfully.',
                'success'
            );
            
            // Move to step 3
            goToStep(3);
        } else {
            // Show error notification
            showNotification('Error', 'Invalid OTP. Please try again.', 'error');
            
            // Reset button
            verifyOtpBtn.disabled = false;
            verifyOtpBtn.innerHTML = originalText;
            
            // Clear OTP input
            otpInput.value = '';
            validateOtpInput();
        }
    }, 1500);
}

/**
 * Handle Resend OTP button click
 */
function handleResendOtp() {
    // Show notification
    const notificationMessage = contactType === 'email' 
        ? 'New OTP has been sent to your email' 
        : 'New OTP has been sent to your phone';
    
    showNotification(
        'OTP Resent!',
        notificationMessage,
        'success'
    );
    
    // Reset OTP input field and enable it
    otpInput.value = '';
    otpInput.disabled = false;
    validateOtpInput();
    
    // Restart timers
    startOtpTimer();
    startResendTimer();
}

// ============================================
// STEP 3: PASSWORD CHANGE
// ============================================

/**
 * Toggle password visibility
 */
function togglePasswordVisibility(passwordField, toggleButton) {
    const isPasswordVisible = passwordField.type === 'text';
    passwordField.type = isPasswordVisible ? 'password' : 'text';
    
    // Update icon
    const icon = toggleButton.querySelector('i');
    if (isPasswordVisible) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

/**
 * Validate password strength (only checks minimum 8 characters)
 */
function validatePassword() {
    const password = newPassword.value;
    
    // Check only minimum 8 characters requirement
    const isLongEnough = password.length >= 8;
    
    // Update strength indicator based only on length
    passwordStrength.className = 'password-strength';
    if (password.length === 0) {
        // Empty - no strength
    } else if (password.length < 8) {
        passwordStrength.classList.add('weak');
    } else if (password.length < 12) {
        passwordStrength.classList.add('medium');
    } else if (password.length < 16) {
        passwordStrength.classList.add('strong');
    } else {
        passwordStrength.classList.add('very-strong');
    }
    
    // Check password match
    checkPasswordMatch();
    
    return isLongEnough;
}

/**
 * Check if passwords match - Update button ONLY when passwords match
 */
function checkPasswordMatch() {
    const password = newPassword.value;
    const confirm = confirmPassword.value;
    
    if (password && confirm) {
        const isMatch = password === confirm;
        passwordMatch.classList.toggle('visible', isMatch);
        
        // Enable Update Password button ONLY when:
        // 1. Password meets minimum requirement (8 chars)
        // 2. Passwords match
        const isValidPassword = password.length >= 8;
        updatePasswordBtn.disabled = !(isMatch && isValidPassword);
        
        return isMatch;
    }
    
    passwordMatch.classList.remove('visible');
    updatePasswordBtn.disabled = true;
    return false;
}

/**
 * Handle Update Password button click
 */
function handleUpdatePassword(event) {
    event.preventDefault();
    
    // Validate password meets minimum requirement
    if (newPassword.value.length < 8) {
        showNotification('Error', 'Password must be at least 8 characters long', 'error');
        return;
    }
    
    // Check password match
    if (!checkPasswordMatch()) {
        showNotification('Error', 'Passwords do not match', 'error');
        return;
    }
    
    // Disable Update Password button and show loading
    updatePasswordBtn.disabled = true;
    const originalText = updatePasswordBtn.innerHTML;
    updatePasswordBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Updating Password...</span>';
    
    // Simulate API call to update password
    setTimeout(() => {
        // Show success notification with auto-redirect
        showNotification(
            'Password Updated!',
            'Your password has been changed successfully.',
            'success',
            true // Auto-redirect
        );
    }, 1500);
}

// ============================================
// RECOVERY METHODS
// ============================================

/**
 * Handle Try Another Recovery button click
 */
function handleTryRecovery() {
    showNotification(
        'Recovery Options',
        'Please contact support for alternative recovery methods.',
        'info'
    );
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Mask contact information for privacy
 */
function maskContact(contact, type) {
    if (type === 'email') {
        const [username, domain] = contact.split('@');
        if (username.length <= 2) return '***@' + domain;
        return username.charAt(0) + '***' + username.charAt(username.length - 1) + '@' + domain;
    } else {
        // Phone number masking
        const digits = contact.replace(/\D/g, '');
        if (digits.length <= 4) return '***' + digits.slice(-2);
        return '***' + digits.slice(-4);
    }
}

// ============================================
// NOTIFICATION SYSTEM (BLUE THEME ONLY)
// ============================================

/**
 * Show notification with blue theme only
 */
function showNotification(title, message, type = 'info', autoRedirect = false) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Always use blue theme - removed other colors
    notification.style.background = 'linear-gradient(135deg, #4362C9 0%, #2A4AB3 100%)';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
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
        if (autoRedirect) {
            redirectToLogin();
        }
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
            if (autoRedirect) {
                redirectToLogin();
            }
        }
    }, 5000);
}

/**
 * Close notification
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
 * Redirect to login page
 */
function redirectToLogin() {
    // Show redirecting notification
    showNotification(
        'Redirecting...',
        'Taking you to login page',
        'info'
    );
    
    // Redirect after 1 second
    setTimeout(() => {
        window.location.href = 'login_worker.html';
    }, 1000);
}

// ============================================
// INITIALIZE APPLICATION
// ============================================

/**
 * Initialize application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', init);

// Initialize system theme if set to system
if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}