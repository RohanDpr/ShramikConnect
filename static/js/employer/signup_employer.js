/**
 * Employer Signup Page - 5-Step Form
 * COMPLETE VERSION WITH REAL OTP VERIFICATION (EMAIL + MOBILE)
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Settings Elements
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Terms Popup Elements
const termsPopup = document.getElementById('termsPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const countdownElement = document.getElementById('countdown');
const timerDisplay = document.getElementById('timerDisplay');

// Progress Bar Elements
const progressFill = document.getElementById('progressFill');
const steps = document.querySelectorAll('.step');

// Form Steps
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');

// Step 1: Personal Information
const profilePreview = document.getElementById('profilePreview');
const capturePhotoBtn = document.getElementById('capturePhotoBtn');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const ageDisplay = document.getElementById('ageDisplay');
const ageText = document.getElementById('ageText');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const nextStep1 = document.getElementById('nextStep1');

// Step 2: Security
const emailInput = document.getElementById('emailInput');
const getEmailOtpBtn = document.getElementById('getEmailOtpBtn');
const emailDisplay = document.getElementById('emailDisplay');
const emailOtpSection = document.getElementById('emailOtpSection');
const emailOtpInput = document.getElementById('emailOtpInput');
const verifyEmailOtpBtn = document.getElementById('verifyEmailOtpBtn');
const emailStatus = document.getElementById('emailStatus');
const resendEmailOtpBtn = document.getElementById('resendEmailOtpBtn');
const emailResendText = document.getElementById('emailResendText');

const mobileInput = document.getElementById('mobileInput');
const getMobileOtpBtn = document.getElementById('getMobileOtpBtn');
const mobileDisplay = document.getElementById('mobileDisplay');
const mobileOtpSection = document.getElementById('mobileOtpSection');
const mobileOtpInput = document.getElementById('mobileOtpInput');
const verifyMobileOtpBtn = document.getElementById('verifyMobileOtpBtn');
const mobileStatus = document.getElementById('mobileStatus');
const resendMobileOtpBtn = document.getElementById('resendMobileOtpBtn');
const mobileResendText = document.getElementById('mobileResendText');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordStrength = document.getElementById('passwordStrength');
const strengthText = document.getElementById('strengthText');
const passwordMatch = document.getElementById('passwordMatch');
const backStep2 = document.getElementById('backStep2');
const nextStep2 = document.getElementById('nextStep2');

// Step 3: Identity & Documents
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pincode = document.getElementById('pincode');
const mapContainer = document.getElementById('mapContainer');
const locateMeBtn = document.getElementById('locateMeBtn');
const markLocationBtn = document.getElementById('markLocationBtn');
const selectedLocationText = document.getElementById('selectedLocationText');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const documentTypeInputs = document.querySelectorAll('input[name="documentType"]');
const captureDocumentBtn = document.getElementById('captureDocumentBtn');
const uploadDocumentBtn = document.getElementById('uploadDocumentBtn');
const documentPreviewElement = document.getElementById('documentPreview');
const backStep3 = document.getElementById('backStep3');
const nextStep3 = document.getElementById('nextStep3');

// Step 4: Preview
const previewProfilePhoto = document.getElementById('previewProfilePhoto');
const previewPersonalInfo = document.getElementById('previewPersonalInfo');
const previewEmail = document.getElementById('previewEmail');
const previewEmailBadge = document.getElementById('previewEmailBadge');
const previewMobile = document.getElementById('previewMobile');
const previewMobileBadge = document.getElementById('previewMobileBadge');
const previewPassword = document.getElementById('previewPassword');
const previewAddress = document.getElementById('previewAddress');
const previewMap = document.getElementById('previewMap');
const previewLocationText = document.getElementById('previewLocationText');
const previewDocument = document.getElementById('previewDocument');
const backStep4 = document.getElementById('backStep4');
const nextStep4 = document.getElementById('nextStep4');

// Step 5: Terms & Create Account
const termsCheckbox = document.getElementById('termsCheckbox');
const checkboxGroup = document.getElementById('checkboxGroup');
const reqAge = document.getElementById('reqAge');
const reqEmail = document.getElementById('reqEmail');
const reqMobile = document.getElementById('reqMobile');
const reqDocument = document.getElementById('reqDocument');
const reqFields = document.getElementById('reqFields');
const reqTerms = document.getElementById('reqTerms');
const backStep5 = document.getElementById('backStep5');
const createAccountBtn = document.getElementById('createAccountBtn');

// ============================================
// STATE VARIABLES
// ============================================

let currentStep = 1;
let currentLanguage = 'en';
let currentTheme = 'light';

// ✅ FIX: Detect if we're on HTTPS
const isHttps = window.location.protocol === 'https:';
console.log('Current protocol:', window.location.protocol);

// User Data Storage
let userData = {
    profilePhoto: null,
    firstName: '',
    lastName: '',
    dob: '',
    age: 0,
    gender: '',
    email: '',
    emailVerified: false,
    mobile: '',
    mobileVerified: false,
    password: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    workLocation: {
        lat: null,
        lng: null,
        address: ''
    },
    documentType: '',
    documentFile: null
};

// OTP Timers
let emailResendCountdown = null;
let emailResendTimeLeft = 60;
let mobileResendCountdown = null;
let mobileResendTimeLeft = 60;

// Terms Popup Timer
let termsPopupTimer = null;
let termsPopupCountdown = 10;

// Map Variables
let map = null;
let marker = null;
let isMarkingMode = false;
let previewMapInstance = null;
let previewMarker = null;

// Password strength texts for different languages
const passwordStrengthTexts = {
    weak: { en: 'Weak', hi: 'कमजोर', mr: 'कमकुवत' },
    medium: { en: 'Medium', hi: 'मध्यम', mr: 'मध्यम' },
    strong: { en: 'Strong', hi: 'मजबूत', mr: 'मजबूत' },
    veryStrong: { en: 'Very Strong', hi: 'बहुत मजबूत', mr: 'खूप मजबूत' }
};

// Validation Patterns
const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[6-9]\d{9}$/,
    otp: /^\d{6}$/,
    pincode: /^\d{6}$/
};

// ============================================
// ✅ FIX: Force HTTP if needed
// ============================================
function checkAndFixProtocol() {
    // Agar HTTPS pe ho aur DEBUG mode ho to HTTP pe redirect karo
    if (isHttps && window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        console.log('⚠️ HTTPS detected on localhost. Redirecting to HTTP...');
        window.location.href = 'http://' + window.location.host + window.location.pathname;
        return true;
    }
    return false;
}

// ============================================
// CSRF TOKEN HELPER FUNCTION
// ============================================

/**
 * Get CSRF token from cookies
 */
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

// ============================================
// ✅ FIX: Safe fetch function with relative URLs
// ============================================
function safeFetch(url, options = {}) {
    // ✅ FIX: Always use relative URLs (starting with /)
    // Never use absolute URLs with http/https
    
    // Add CSRF token to headers
    if (!options.headers) {
        options.headers = {};
    }
    options.headers['X-CSRFToken'] = getCookie('csrftoken');
    
    return fetch(url, options);
}

// ============================================
// TRANSLATION SYSTEM
// ============================================

const translations = {
    en: {
        // Page Header
        'employer_signup': 'Employer Signup',
        'signup_subtitle': 'Create your account in 5 easy steps',
        'already_have_account': 'Already have an account?',
        'login_here': 'Login here',
        
        // Progress Steps
        'step_personal': 'Personal',
        'step_security': 'Security',
        'step_identity': 'Identity',
        'step_preview': 'Preview',
        'step_terms': 'Terms',
        
        // Step 1
        'personal_info': 'Personal Information',
        'personal_info_subtitle': 'Enter your basic details to get started',
        'take_photo': 'Take Photo',
        'upload_photo': 'Upload Photo',
        'first_name': 'First Name *',
        'last_name': 'Last Name *',
        'enter_first_name': 'Enter first name',
        'enter_last_name': 'Enter last name',
        'date_of_birth': 'Date of Birth *',
        'select_date': 'Select date to calculate age',
        'gender': 'Gender *',
        'male': 'Male',
        'female': 'Female',
        'other': 'Other',
        'next': 'Next',
        'back': 'Back',
        
        // Step 2
        'security_details': 'Security Details',
        'security_subtitle': 'Verify your email, mobile and set password',
        'email_verification': 'Email Verification',
        'enter_email': 'Enter your email',
        'get_otp': 'Get OTP',
        'mobile_verification': 'Mobile Verification',
        'enter_mobile': 'Enter your mobile number',
        'otp_placeholder': 'XXXXXX',
        'verify_otp': 'Verify',
        'email_not_verified': 'Email not verified',
        'mobile_not_verified': 'Mobile not verified',
        'set_password': 'Set Password',
        'password': 'Password *',
        'password_placeholder': 'Minimum 8 characters',
        'password_strength': 'Password Strength',
        'confirm_password': 'Confirm Password *',
        'confirm_password_placeholder': 'Re-enter password',
        'passwords_match': 'Passwords match',
        'resend_otp_60s': 'Resend OTP (60s)',
        
        // Step 3
        'identity_documents': 'Identity & Documents',
        'identity_subtitle': 'Provide your address and documents',
        'address': 'Full Address *',
        'street': 'Street',
        'city': 'City',
        'state': 'State',
        'pincode': 'Pincode',
        'work_location': 'Work Location *',
        'locate_me': 'Locate Me',
        'mark_location': 'Mark Location',
        'selected_location': 'Selected Location:',
        'work_location_hint': 'Click "Mark Location" and click on map to select exact work location',
        'document_upload': 'Document Upload *',
        'aadhar_card': 'Aadhar Card',
        'pan_card': 'Pan Card',
        'upload_file': 'Upload File',
        'no_document': 'No document uploaded',
        
        // Step 4
        'preview_details': 'Preview Details',
        'preview_subtitle': 'Review all your information before submission',
        'profile_photo': 'Profile Photo',
        'email': 'Email',
        'mobile': 'Mobile',
        'not_verified': 'Not Verified',
        'verified': 'Verified',
        
        // Step 5
        'terms_account': 'Terms & Account Creation',
        'terms_subtitle': 'Final step to create your account',
        'agree_terms': 'I agree to the Terms & Conditions and Privacy Policy',
        'requirements_checklist': 'Requirements Checklist',
        'req_age': 'Age must be 18 or above',
        'req_email': 'Email must be verified',
        'req_mobile': 'Mobile must be verified',
        'req_document': 'Document must be uploaded',
        'req_fields': 'All fields must be filled',
        'req_terms': 'Must agree to Terms & Conditions',
        'create_account': 'Create Account',
        'agree_terms_prefix': 'I agree to the ',
        'agree_terms_middle': ' and ',
        'terms_conditions': 'Terms & Conditions',
        'privacy_policy': 'Privacy Policy',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Terms Popup
        'terms_conditions': 'Terms & Conditions',
        'close': 'Close',
        'important_terms': 'Important Terms & Conditions',
        'term1': 'By creating an account, you agree to our terms of service',
        'term2': 'You must be at least 18 years old',
        'term3': 'You\'re responsible for account security',
        'term4': 'We may send job alerts based on your profile',
        'term5': 'Provide accurate and complete information',
        'term6': 'We can terminate accounts violating policies',
        'privacy_policy': 'Privacy Policy Highlights',
        'privacy1': 'We collect info for better job matches',
        'privacy2': 'Your data is encrypted and secure',
        'privacy3': 'We don\'t share info without consent',
        'privacy4': 'Request data deletion anytime',
        'privacy5': 'Cookies enhance browsing experience',
        'full_terms': 'Read Full Terms & Conditions',
        'full_privacy': 'Read Full Privacy Policy',
        'timer_info': 'Close button enabled when timer ends',
        'timer': 'Timer: {0}s remaining'
    },
    hi: {
        // Hindi translations (keep as is)
        'employer_signup': 'कर्मचारी पंजीकरण',
        // ... rest of Hindi translations
    },
    mr: {
        // Marathi translations (keep as is)
        'employer_signup': 'कर्मचारी नोंदणी',
        // ... rest of Marathi translations
    }
};

// ============================================
// INITIALIZATION
// ============================================

function init() {
    console.log('Employer Signup Page Initialized');
    
    // ✅ FIX: Check protocol first
    if (checkAndFixProtocol()) {
        return; // Stop execution if redirecting
    }
    
    loadPreferences();
    applyLanguage(currentLanguage);
    setupEventListeners();
    initializeFormValidation();
    updateProgressBar();
    initializeDOB();
    termsCheckbox.disabled = false;
    initializeMapWhenReady();
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    currentTheme = savedTheme;
    
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    updateLanguageButtons(savedLanguage);
    applyTheme(currentTheme);
}

function updateLanguageButtons(lang) {
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initializeFormValidation() {
    validateStep1();
    validatePassword();
}

function initializeDOB() {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    
    dob.max = maxDate.toISOString().split('T')[0];
    dob.min = minDate.toISOString().split('T')[0];
}

function initializeMapWhenReady() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (step3.classList.contains('active') && !map) {
                    initializeMap();
                }
            }
        });
    });
    
    observer.observe(step3, { attributes: true });
}

function initializeMap() {
    const defaultLat = 19.0760;
    const defaultLng = 72.8777;
    
    map = L.map('map').setView([defaultLat, defaultLng], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    locateMeBtn.addEventListener('click', locateUser);
    markLocationBtn.addEventListener('click', toggleMarkingMode);
    map.on('click', handleMapClick);
    
    console.log('Map initialized');
}

function initializePreviewMap(lat, lng) {
    if (previewMapInstance) {
        previewMapInstance.remove();
    }
    
    previewMapInstance = L.map('previewMap').setView([lat, lng], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(previewMapInstance);
    
    if (previewMarker) {
        previewMarker.remove();
    }
    
    previewMarker = L.marker([lat, lng]).addTo(previewMapInstance);
    
    getAddressFromCoordinates(lat, lng).then(address => {
        previewLocationText.textContent = address || `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }).catch(() => {
        previewLocationText.textContent = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    });
}

async function getAddressFromCoordinates(lat, lng) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch address');
        }
        
        const data = await response.json();
        return data.display_name || `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    } catch (error) {
        console.error('Error fetching address:', error);
        return `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });
    
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
    
    capturePhotoBtn.addEventListener('click', handleCapturePhoto);
    uploadPhotoBtn.addEventListener('click', handleUploadPhoto);
    firstName.addEventListener('input', validateStep1);
    lastName.addEventListener('input', validateStep1);
    dob.addEventListener('change', handleDateOfBirthChange);
    genderInputs.forEach(input => {
        input.addEventListener('change', validateStep1);
    });
    nextStep1.addEventListener('click', goToStep2);
    
    emailInput.addEventListener('input', validateEmailInput);
    getEmailOtpBtn.addEventListener('click', handleGetEmailOtp);
    emailOtpInput.addEventListener('input', validateEmailOtp);
    verifyEmailOtpBtn.addEventListener('click', handleVerifyEmailOtp);
    resendEmailOtpBtn.addEventListener('click', handleResendEmailOtp);
    
    mobileInput.addEventListener('input', validateMobileInput);
    getMobileOtpBtn.addEventListener('click', handleGetMobileOtp);
    mobileOtpInput.addEventListener('input', validateMobileOtp);
    verifyMobileOtpBtn.addEventListener('click', handleVerifyMobileOtp);
    resendMobileOtpBtn.addEventListener('click', handleResendMobileOtp);
    
    togglePassword.addEventListener('click', () => togglePasswordVisibility(password, togglePassword));
    toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility(confirmPassword, toggleConfirmPassword));
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);
    
    backStep2.addEventListener('click', () => goToStep(1));
    nextStep2.addEventListener('click', goToStep3);
    
    street.addEventListener('input', validateStep3);
    city.addEventListener('input', validateStep3);
    state.addEventListener('input', validateStep3);
    pincode.addEventListener('input', validateStep3);
    documentTypeInputs.forEach(input => {
        input.addEventListener('change', validateStep3);
    });
    captureDocumentBtn.addEventListener('click', handleCaptureDocument);
    uploadDocumentBtn.addEventListener('click', handleUploadDocument);
    
    backStep3.addEventListener('click', () => goToStep(2));
    nextStep3.addEventListener('click', goToStep4);
    
    backStep4.addEventListener('click', () => goToStep(3));
    nextStep4.addEventListener('click', goToStep5);
    
    termsCheckbox.addEventListener('change', handleTermsCheckbox);
    
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('terms-link')) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            window.open(href, '_blank');
        }
    });
    
    backStep5.addEventListener('click', () => goToStep(4));
    createAccountBtn.addEventListener('click', handleCreateAccount);
    
    closePopupBtn.addEventListener('click', closeTermsPopup);
    setupTermsLinksListeners();
}

function setupTermsLinksListeners() {
    const checkboxLabel = document.querySelector('.checkbox-label');
    if (checkboxLabel) {
        checkboxLabel.addEventListener('click', function(event) {
            if (event.target.tagName === 'A' && event.target.classList.contains('terms-link')) {
                event.preventDefault();
                const href = event.target.getAttribute('href');
                window.open(href, '_blank');
            }
        });
    }
    
    const popupLinks = document.querySelectorAll('.popup-link');
    popupLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            window.open(href, '_blank');
        });
    });
}

// ============================================
// SETTINGS FUNCTIONS
// ============================================

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

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguageButtons(lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const translation = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'BUTTON' || element.tagName === 'OPTION') {
                element.textContent = translation[key];
            } else {
                element.textContent = translation[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translation[key] && element.placeholder !== undefined) {
            element.placeholder = translation[key];
        }
    });
    
    if (emailResendCountdown) {
        updateEmailResendText();
    }
    if (mobileResendCountdown) {
        updateMobileResendText();
    }
    
    updatePasswordStrengthText();
}

function handleThemeChange(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    applyTheme(theme);
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function applyTheme(theme) {
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${themeToApply}-theme`);
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        applyTheme('system');
    }
}

// ============================================
// MAP FUNCTIONS
// ============================================

function locateUser() {
    if (!navigator.geolocation) {
        showNotification('Error', 'Geolocation is not supported by your browser', 'error');
        return;
    }
    
    locateMeBtn.disabled = true;
    const originalText = locateMeBtn.innerHTML;
    locateMeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Locating...</span>';
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            map.setView([lat, lng], 15);
            
            if (marker) {
                marker.remove();
            }
            
            marker = L.marker([lat, lng]).addTo(map);
            
            userData.workLocation.lat = lat;
            userData.workLocation.lng = lng;
            
            getAddressFromCoordinates(lat, lng).then(address => {
                userData.workLocation.address = address;
                selectedLocationText.textContent = address || `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
            }).catch(() => {
                selectedLocationText.textContent = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
            });
            
            latitudeInput.value = lat;
            longitudeInput.value = lng;
            
            validateStep3();
            
            locateMeBtn.disabled = false;
            locateMeBtn.innerHTML = originalText;
            
            showNotification('Location Found', 'Your location has been found on the map', 'success');
        },
        (error) => {
            console.error('Geolocation error:', error);
            
            locateMeBtn.disabled = false;
            locateMeBtn.innerHTML = originalText;
            
            let errorMessage = 'Unable to retrieve your location';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location permission denied. Please allow location access.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out.';
                    break;
            }
            
            showNotification('Location Error', errorMessage, 'error');
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function toggleMarkingMode() {
    isMarkingMode = !isMarkingMode;
    
    if (isMarkingMode) {
        markLocationBtn.innerHTML = '<i class="fas fa-times"></i><span>Cancel Marking</span>';
        markLocationBtn.style.background = '#DC2626';
        markLocationBtn.style.borderColor = '#DC2626';
        markLocationBtn.style.color = '#FFFFFF';
        
        showNotification('Marking Mode', 'Click on the map to mark your work location', 'info');
    } else {
        markLocationBtn.innerHTML = '<i class="fas fa-map-pin"></i><span>Mark Location</span>';
        markLocationBtn.style.background = '';
        markLocationBtn.style.borderColor = '';
        markLocationBtn.style.color = '';
    }
}

function handleMapClick(event) {
    if (!isMarkingMode) return;
    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    if (marker) {
        marker.remove();
    }
    
    marker = L.marker([lat, lng]).addTo(map);
    
    userData.workLocation.lat = lat;
    userData.workLocation.lng = lng;
    
    getAddressFromCoordinates(lat, lng).then(address => {
        userData.workLocation.address = address;
        selectedLocationText.textContent = address || `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }).catch(() => {
        selectedLocationText.textContent = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    });
    
    latitudeInput.value = lat;
    longitudeInput.value = lng;
    
    isMarkingMode = false;
    markLocationBtn.innerHTML = '<i class="fas fa-map-pin"></i><span>Mark Location</span>';
    markLocationBtn.style.background = '';
    markLocationBtn.style.borderColor = '';
    markLocationBtn.style.color = '';
    
    validateStep3();
    
    showNotification('Location Marked', 'Work location has been marked on the map', 'success');
}

// ============================================
// STEP NAVIGATION FUNCTIONS
// ============================================

function goToStep(stepNumber) {
    if (stepNumber > currentStep) {
        if (!validateCurrentStep()) {
            showValidationError();
            return;
        }
    }
    
    const formContainer = document.querySelector('.form-container');
    formContainer.style.opacity = '0.7';
    formContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        step1.classList.remove('active');
        step2.classList.remove('active');
        step3.classList.remove('active');
        step4.classList.remove('active');
        step5.classList.remove('active');
        
        if (stepNumber === 1) {
            step1.classList.add('active');
            currentStep = 1;
        } else if (stepNumber === 2) {
            step2.classList.add('active');
            currentStep = 2;
        } else if (stepNumber === 3) {
            step3.classList.add('active');
            currentStep = 3;
        } else if (stepNumber === 4) {
            step4.classList.add('active');
            currentStep = 4;
            updatePreview();
        } else if (stepNumber === 5) {
            step5.classList.add('active');
            currentStep = 5;
            validateStep5();
        }
        
        updateProgressBar();
        
        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateY(0)';
        
        document.querySelector('.form-container').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    }, 150);
}

function updateProgressBar() {
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
        } else if (stepNumber < currentStep) {
            step.classList.add('completed');
        }
    });
    
    const progressPercentage = ((currentStep - 1) / 4) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        case 4:
            return true;
        case 5:
            return validateStep5();
        default:
            return false;
    }
}

function showValidationError() {
    const errorMessages = {
        1: 'Please fill all personal information fields',
        2: 'Please verify email, mobile and set password',
        3: 'Please fill all identity and document fields',
        5: 'Please agree to terms and conditions'
    };
    
    showNotification('Validation Error', errorMessages[currentStep] || 'Please complete all required fields', 'error');
}

// ============================================
// STEP 1: PERSONAL INFORMATION
// ============================================

function handleCapturePhoto() {
    showNotification('Camera Access', 'Camera access would be requested in a real application. For demo, please use upload photo option.', 'info');
    
    setTimeout(() => {
        handleUploadPhoto();
    }, 1000);
}

function handleUploadPhoto() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                showNotification('Error', 'Please select an image file', 'error');
                return;
            }
            
            if (file.size > 5 * 1024 * 1024) {
                showNotification('Error', 'Image size should be less than 5MB', 'error');
                return;
            }
            
            userData.profilePhoto = file;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePreview.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
                profilePreview.classList.add('has-photo');
            };
            reader.readAsDataURL(file);
            
            showNotification('Success', 'Profile photo uploaded successfully', 'success');
        }
        
        document.body.removeChild(fileInput);
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
}

function handleDateOfBirthChange() {
    const dobValue = dob.value;
    if (!dobValue) {
        ageText.textContent = 'Select date to calculate age';
        ageDisplay.classList.remove('error');
        userData.age = 0;
        userData.dob = '';
        validateStep1();
        return;
    }
    
    const birthDate = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    userData.dob = dobValue;
    userData.age = age;
    
    ageText.textContent = `${age} years old`;
    
    if (age < 18) {
        ageDisplay.classList.add('error');
        ageText.innerHTML = `${age} years old <span style="color: #DC2626; font-weight: 600;">(Must be 18+)</span>`;
        
        const message = currentLanguage === 'en' 
            ? 'You must be at least 18 years old to register'
            : currentLanguage === 'hi'
            ? 'पंजीकरण के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए'
            : 'नोंदणीसाठी तुमचे वय किमान १८ वर्षे असणे आवश्यक आहे';
        
        showNotification('Age Restriction', message, 'error');
    } else {
        ageDisplay.classList.remove('error');
    }
    
    validateStep1();
}

function validateStep1() {
    userData.firstName = firstName.value.trim();
    userData.lastName = lastName.value.trim();
    
    const selectedGender = Array.from(genderInputs).find(input => input.checked);
    userData.gender = selectedGender ? selectedGender.value : '';
    
    const isValid = 
        userData.firstName.length >= 2 &&
        userData.lastName.length >= 2 &&
        userData.dob &&
        userData.age >= 18 &&
        userData.gender !== '';
    
    nextStep1.disabled = !isValid;
    return isValid;
}

function goToStep2() {
    if (!validateStep1()) {
        if (userData.age < 18) {
            showNotification('Age Restriction', 'You must be 18 or older to continue', 'error');
        } else {
            showNotification('Validation Error', 'Please fill all required fields in Personal Information', 'error');
        }
        return;
    }
    
    goToStep(2);
}

// ============================================
// STEP 2: SECURITY - REAL OTP IMPLEMENTATION
// ============================================

function validateEmailInput() {
    const value = emailInput.value.trim();
    const isValid = validationPatterns.email.test(value);
    
    getEmailOtpBtn.disabled = !isValid || userData.emailVerified;
    
    return isValid;
}

function validateMobileInput() {
    const value = mobileInput.value.trim();
    const isValid = validationPatterns.phone.test(value);
    
    getMobileOtpBtn.disabled = !isValid || userData.mobileVerified;
    
    return isValid;
}

/**
 * Handle Get Email OTP button click
 */
function handleGetEmailOtp() {
    const email = emailInput.value.trim();
    
    if (!validateEmailInput()) {
        showNotification('Error', 'Please enter a valid email address', 'error');
        return;
    }
    
    userData.email = email;
    
    getEmailOtpBtn.disabled = true;
    const originalText = getEmailOtpBtn.innerHTML;
    getEmailOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending OTP...</span>';
    
    fetch('/api/send-email-otp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(`OTP sent to email: ${email}`);
            
            emailOtpSection.classList.add('active');
            emailOtpInput.value = '';
            emailDisplay.textContent = `OTP sent to ${email}`;
            emailDisplay.classList.add('show');
            
            getEmailOtpBtn.classList.add('hidden');
            
            startEmailResendCountdown();
            
            showNotification('OTP Sent!', data.message, 'success');
            
            // For development only
            if (data.otp) {
                console.log(`📧 OTP for ${email}: ${data.otp}`);
            }
        } else {
            showNotification('Error', data.message, 'error');
            getEmailOtpBtn.disabled = false;
            getEmailOtpBtn.innerHTML = originalText;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        getEmailOtpBtn.disabled = false;
        getEmailOtpBtn.innerHTML = originalText;
    });
}

/**
 * Handle Get Mobile OTP button click - REAL OTP
 */
function handleGetMobileOtp() {
    const mobile = mobileInput.value.trim();
    
    if (!validateMobileInput()) {
        showNotification('Error', 'Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    // First check if mobile already exists
    fetch(`/api/check-mobile-exists/?mobile=${encodeURIComponent(mobile)}`)
    .then(response => response.json())
    .then(data => {
        if (data.exists) {
            showNotification('Error', 'This mobile number is already registered', 'error');
            return;
        }
        
        // Mobile doesn't exist, proceed with OTP
        userData.mobile = mobile;
        
        getMobileOtpBtn.disabled = true;
        const originalText = getMobileOtpBtn.innerHTML;
        getMobileOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending OTP...</span>';
        
        fetch('/api/send-mobile-otp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ mobile: mobile })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log(`OTP sent to mobile: ${mobile}`);
                
                mobileOtpSection.classList.add('active');
                mobileOtpInput.value = '';
                mobileDisplay.textContent = `OTP sent to ${mobile}`;
                mobileDisplay.classList.add('show');
                
                getMobileOtpBtn.classList.add('hidden');
                
                startMobileResendCountdown();
                
                showNotification('OTP Sent!', data.message, 'success');
                
                // For development only
                if (data.otp) {
                    console.log(`📱 OTP for ${mobile}: ${data.otp}`);
                }
            } else {
                showNotification('Error', data.message, 'error');
                getMobileOtpBtn.disabled = false;
                getMobileOtpBtn.innerHTML = originalText;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Error', 'Network error. Please try again.', 'error');
            getMobileOtpBtn.disabled = false;
            getMobileOtpBtn.innerHTML = originalText;
        });
    })
    .catch(error => {
        console.error('Error checking mobile:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
    });
}

function startEmailResendCountdown() {
    if (emailResendCountdown) {
        clearInterval(emailResendCountdown);
    }
    
    emailResendTimeLeft = 60;
    updateEmailResendText();
    
    emailOtpInput.value = '';
    verifyEmailOtpBtn.disabled = true;
    resendEmailOtpBtn.disabled = true;
    
    emailResendCountdown = setInterval(() => {
        emailResendTimeLeft--;
        updateEmailResendText();
        
        if (emailResendTimeLeft <= 0) {
            clearInterval(emailResendCountdown);
            resendEmailOtpBtn.disabled = false;
            emailResendText.textContent = translations[currentLanguage].resend_otp_60s || 'Resend OTP';
        }
    }, 1000);
}

function startMobileResendCountdown() {
    if (mobileResendCountdown) {
        clearInterval(mobileResendCountdown);
    }
    
    mobileResendTimeLeft = 60;
    updateMobileResendText();
    
    mobileOtpInput.value = '';
    verifyMobileOtpBtn.disabled = true;
    resendMobileOtpBtn.disabled = true;
    
    mobileResendCountdown = setInterval(() => {
        mobileResendTimeLeft--;
        updateMobileResendText();
        
        if (mobileResendTimeLeft <= 0) {
            clearInterval(mobileResendCountdown);
            resendMobileOtpBtn.disabled = false;
            mobileResendText.textContent = translations[currentLanguage].resend_otp_60s || 'Resend OTP';
        }
    }, 1000);
}

function updateEmailResendText() {
    const translation = translations[currentLanguage] || translations.en;
    emailResendText.textContent = translation.resend_otp_60s.replace('60s', `${emailResendTimeLeft}s`);
}

function updateMobileResendText() {
    const translation = translations[currentLanguage] || translations.en;
    mobileResendText.textContent = translation.resend_otp_60s.replace('60s', `${mobileResendTimeLeft}s`);
}

function validateEmailOtp() {
    const value = emailOtpInput.value.trim();
    const isValid = validationPatterns.otp.test(value);
    verifyEmailOtpBtn.disabled = !isValid;
    return isValid;
}

function validateMobileOtp() {
    const value = mobileOtpInput.value.trim();
    const isValid = validationPatterns.otp.test(value);
    verifyMobileOtpBtn.disabled = !isValid;
    return isValid;
}

/**
 * Handle Verify Email OTP button click
 */
function handleVerifyEmailOtp() {
    const enteredOtp = emailOtpInput.value.trim();
    
    if (!validateEmailOtp()) {
        showNotification('Error', 'Please enter a valid 6-digit OTP', 'error');
        return;
    }
    
    verifyEmailOtpBtn.disabled = true;
    const originalText = verifyEmailOtpBtn.innerHTML;
    verifyEmailOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Verifying...</span>';
    
    fetch('/api/verify-email-otp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ 
            email: userData.email,
            otp: enteredOtp 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            userData.emailVerified = true;
            
            emailStatus.classList.add('verified');
            emailStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Email Verified</span>';
            
            emailOtpSection.classList.remove('active');
            emailDisplay.classList.remove('show');
            
            if (emailResendCountdown) {
                clearInterval(emailResendCountdown);
                emailResendCountdown = null;
            }
            
            showNotification('OTP Verified!', data.message, 'success');
            
            validateStep2();
        } else {
            showNotification('Error', data.message, 'error');
            
            verifyEmailOtpBtn.disabled = false;
            verifyEmailOtpBtn.innerHTML = originalText;
            
            emailOtpInput.value = '';
            validateEmailOtp();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        verifyEmailOtpBtn.disabled = false;
        verifyEmailOtpBtn.innerHTML = originalText;
    });
}

/**
 * Handle Verify Mobile OTP button click - REAL OTP
 */
function handleVerifyMobileOtp() {
    const enteredOtp = mobileOtpInput.value.trim();
    
    if (!validateMobileOtp()) {
        showNotification('Error', 'Please enter a valid 6-digit OTP', 'error');
        return;
    }
    
    verifyMobileOtpBtn.disabled = true;
    const originalText = verifyMobileOtpBtn.innerHTML;
    verifyMobileOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Verifying...</span>';
    
    fetch('/api/verify-mobile-otp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ 
            mobile: userData.mobile,
            otp: enteredOtp 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            userData.mobileVerified = true;
            
            mobileStatus.classList.add('verified');
            mobileStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Mobile Verified</span>';
            
            mobileOtpSection.classList.remove('active');
            mobileDisplay.classList.remove('show');
            
            if (mobileResendCountdown) {
                clearInterval(mobileResendCountdown);
                mobileResendCountdown = null;
            }
            
            showNotification('OTP Verified!', data.message, 'success');
            
            validateStep2();
        } else {
            showNotification('Error', data.message, 'error');
            
            verifyMobileOtpBtn.disabled = false;
            verifyMobileOtpBtn.innerHTML = originalText;
            
            mobileOtpInput.value = '';
            validateMobileOtp();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        verifyMobileOtpBtn.disabled = false;
        verifyMobileOtpBtn.innerHTML = originalText;
    });
}

/**
 * Handle Resend Email OTP
 */
function handleResendEmailOtp() {
    resendEmailOtpBtn.disabled = true;
    const originalText = emailResendText.innerHTML;
    emailResendText.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    fetch('/api/resend-email-otp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ email: userData.email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(`Resent OTP to email: ${userData.email}`);
            
            emailOtpInput.value = '';
            verifyEmailOtpBtn.disabled = true;
            
            startEmailResendCountdown();
            
            showNotification('OTP Sent!', data.message, 'success');
            
            // For development only
            if (data.otp) {
                console.log(`📧 New OTP: ${data.otp}`);
            }
        } else {
            showNotification('Error', data.message, 'error');
            resendEmailOtpBtn.disabled = false;
            emailResendText.innerHTML = originalText;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        resendEmailOtpBtn.disabled = false;
        emailResendText.innerHTML = originalText;
    });
}

/**
 * Handle Resend Mobile OTP - REAL OTP
 */
function handleResendMobileOtp() {
    resendMobileOtpBtn.disabled = true;
    const originalText = mobileResendText.innerHTML;
    mobileResendText.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    fetch('/api/resend-mobile-otp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ mobile: userData.mobile })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(`Resent OTP to mobile: ${userData.mobile}`);
            
            mobileOtpInput.value = '';
            verifyMobileOtpBtn.disabled = true;
            
            startMobileResendCountdown();
            
            showNotification('OTP Sent!', data.message, 'success');
            
            // For development only
            if (data.otp) {
                console.log(`📱 New OTP: ${data.otp}`);
            }
        } else {
            showNotification('Error', data.message, 'error');
            resendMobileOtpBtn.disabled = false;
            mobileResendText.innerHTML = originalText;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        resendMobileOtpBtn.disabled = false;
        mobileResendText.innerHTML = originalText;
    });
}

function togglePasswordVisibility(passwordField, toggleButton) {
    const isPasswordVisible = passwordField.type === 'text';
    passwordField.type = isPasswordVisible ? 'password' : 'text';
    
    const icon = toggleButton.querySelector('i');
    if (isPasswordVisible) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

function updatePasswordStrengthText() {
    const passValue = password.value;
    if (passValue.length === 0) {
        strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
        return;
    }
    
    let strength = 0;
    if (passValue.length >= 8) strength++;
    if (/[A-Z]/.test(passValue)) strength++;
    if (/[a-z]/.test(passValue)) strength++;
    if (/\d/.test(passValue)) strength++;
    if (/[^A-Za-z0-9]/.test(passValue)) strength++;
    
    const strengthTexts = passwordStrengthTexts;
    
    if (strength <= 2) {
        strengthText.textContent = strengthTexts.weak[currentLanguage] || 'Weak';
    } else if (strength === 3) {
        strengthText.textContent = strengthTexts.medium[currentLanguage] || 'Medium';
    } else if (strength === 4) {
        strengthText.textContent = strengthTexts.strong[currentLanguage] || 'Strong';
    } else {
        strengthText.textContent = strengthTexts.veryStrong[currentLanguage] || 'Very Strong';
    }
}

function validatePassword() {
    const passValue = password.value;
    const confirmValue = confirmPassword.value;
    
    userData.password = passValue;
    
    const isLongEnough = passValue.length >= 8;
    
    let strength = 0;
    if (passValue.length >= 8) strength++;
    if (/[A-Z]/.test(passValue)) strength++;
    if (/[a-z]/.test(passValue)) strength++;
    if (/\d/.test(passValue)) strength++;
    if (/[^A-Za-z0-9]/.test(passValue)) strength++;
    
    passwordStrength.className = 'password-strength';
    
    if (passValue.length === 0) {
        strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
    } else if (strength <= 2) {
        passwordStrength.classList.add('weak');
        strengthText.textContent = passwordStrengthTexts.weak[currentLanguage] || 'Weak';
    } else if (strength === 3) {
        passwordStrength.classList.add('medium');
        strengthText.textContent = passwordStrengthTexts.medium[currentLanguage] || 'Medium';
    } else if (strength === 4) {
        passwordStrength.classList.add('strong');
        strengthText.textContent = passwordStrengthTexts.strong[currentLanguage] || 'Strong';
    } else {
        passwordStrength.classList.add('very-strong');
        strengthText.textContent = passwordStrengthTexts.veryStrong[currentLanguage] || 'Very Strong';
    }
    
    if (passValue && confirmValue) {
        const isMatch = passValue === confirmValue;
        passwordMatch.classList.toggle('visible', isMatch);
    } else {
        passwordMatch.classList.remove('visible');
    }
    
    validateStep2();
    
    return isLongEnough && passValue === confirmValue;
}

function validateStep2() {
    const isEmailVerified = userData.emailVerified;
    const isMobileVerified = userData.mobileVerified;
    const isPasswordValid = password.value.length >= 8 && password.value === confirmPassword.value;
    
    const isValid = isEmailVerified && isMobileVerified && isPasswordValid;
    nextStep2.disabled = !isValid;
    
    return isValid;
}

function goToStep3() {
    if (!validateStep2()) {
        showNotification('Validation Error', 'Please verify email, mobile and set password', 'error');
        return;
    }
    
    goToStep(3);
}

// ============================================
// STEP 3: IDENTITY & DOCUMENTS
// ============================================

function validateStep3() {
    userData.street = street.value.trim();
    userData.city = city.value.trim();
    userData.state = state.value.trim();
    userData.pincode = pincode.value.trim();
    
    const selectedDocument = Array.from(documentTypeInputs).find(input => input.checked);
    userData.documentType = selectedDocument ? selectedDocument.value : '';
    
    const isPincodeValid = userData.pincode === '' || validationPatterns.pincode.test(userData.pincode);
    const isLocationSelected = userData.workLocation.lat !== null && userData.workLocation.lng !== null;
    
    const isValid = 
        userData.street !== '' &&
        userData.city !== '' &&
        userData.state !== '' &&
        userData.pincode !== '' &&
        isPincodeValid &&
        isLocationSelected &&
        userData.documentType !== '' &&
        userData.documentFile !== null;
    
    nextStep3.disabled = !isValid;
    return isValid;
}

function handleCaptureDocument() {
    showNotification('Document Capture', 'Camera access would be requested to capture document. For demo, please use upload file option.', 'info');
    
    setTimeout(() => {
        handleUploadDocument();
    }, 1000);
}

function handleUploadDocument() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*,.pdf';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
            if (!validTypes.includes(file.type)) {
                showNotification('Error', 'Please upload JPEG, PNG, or PDF files only', 'error');
                return;
            }
            
            if (file.size > 10 * 1024 * 1024) {
                showNotification('Error', 'File size should be less than 10MB', 'error');
                return;
            }
            
            userData.documentFile = file;
            
            documentPreviewElement.classList.add('uploaded');
            
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    documentPreviewElement.innerHTML = `
                        <div class="document-info">
                            <img src="${e.target.result}" alt="Document Preview">
                            <div class="document-name">${file.name}</div>
                        </div>
                    `;
                };
                reader.readAsDataURL(file);
            } else {
                documentPreviewElement.innerHTML = `
                    <div class="document-info">
                        <i class="fas fa-file-pdf"></i>
                        <div class="document-name">${file.name}</div>
                    </div>
                `;
            }
            
            showNotification('Document Uploaded', 'Document has been uploaded successfully', 'success');
            
            validateStep3();
        }
        
        document.body.removeChild(fileInput);
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
}

function goToStep4() {
    if (!validateStep3()) {
        showNotification('Validation Error', 'Please fill all required fields in Identity & Documents', 'error');
        return;
    }
    
    goToStep(4);
}

// ============================================
// STEP 4: PREVIEW
// ============================================

function updatePreview() {
    if (userData.profilePhoto) {
        if (userData.profilePhoto instanceof File) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewProfilePhoto.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
            };
            reader.readAsDataURL(userData.profilePhoto);
        } else {
            previewProfilePhoto.innerHTML = profilePreview.innerHTML;
        }
    }
    
    const genderText = userData.gender === 'male' ? 'Male' : 
                      userData.gender === 'female' ? 'Female' : 'Other';
    previewPersonalInfo.textContent = `${userData.firstName} ${userData.lastName}, ${userData.age} years, ${genderText}`;
    
    previewEmail.textContent = userData.email || 'Not provided';
    previewEmailBadge.className = 'verification-badge';
    if (userData.emailVerified) {
        previewEmailBadge.classList.add('verified');
        previewEmailBadge.innerHTML = '<i class="fas fa-check-circle"></i><span>Verified</span>';
    } else {
        previewEmailBadge.innerHTML = '<i class="fas fa-times-circle"></i><span>Not Verified</span>';
    }
    
    previewMobile.textContent = userData.mobile || 'Not provided';
    previewMobileBadge.className = 'verification-badge';
    if (userData.mobileVerified) {
        previewMobileBadge.classList.add('verified');
        previewMobileBadge.innerHTML = '<i class="fas fa-check-circle"></i><span>Verified</span>';
    } else {
        previewMobileBadge.innerHTML = '<i class="fas fa-times-circle"></i><span>Not Verified</span>';
    }
    
    previewPassword.textContent = '••••••••';
    
    previewAddress.textContent = `${userData.street}, ${userData.city}, ${userData.state} - ${userData.pincode}`;
    
    if (userData.workLocation.lat && userData.workLocation.lng) {
        initializePreviewMap(userData.workLocation.lat, userData.workLocation.lng);
    }
    
    const documentType = userData.documentType === 'aadhar' ? 'Aadhar Card' : 
                        userData.documentType === 'pan' ? 'Pan Card' : 'Document';
    previewDocument.textContent = userData.documentFile ? 
        `${documentType} uploaded` : 'Not uploaded';
}

function goToStep5() {
    goToStep(5);
}

// ============================================
// STEP 5: TERMS & CREATE ACCOUNT
// ============================================

function handleTermsCheckbox(event) {
    if (termsCheckbox.checked) {
        showTermsPopup();
    }
    
    validateStep5();
}

function showTermsPopup() {
    termsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    closePopupBtn.disabled = true;
    
    termsPopupCountdown = 10;
    countdownElement.textContent = termsPopupCountdown;
    timerDisplay.textContent = termsPopupCountdown;
    
    const translation = translations[currentLanguage] || translations.en;
    closePopupBtn.innerHTML = `<span>${translation.close}</span> (<span id="countdown">${termsPopupCountdown}</span>s)`;
    
    startTermsPopupCountdown();
}

function startTermsPopupCountdown() {
    if (termsPopupTimer) {
        clearInterval(termsPopupTimer);
        termsPopupTimer = null;
    }
    
    termsPopupTimer = setInterval(() => {
        termsPopupCountdown--;
        
        const freshCountdown = document.getElementById('countdown');
        const freshTimerDisplay = document.getElementById('timerDisplay');
        const freshCloseBtn = document.getElementById('closePopupBtn');
        
        if (freshCountdown) freshCountdown.textContent = termsPopupCountdown;
        if (freshTimerDisplay) freshTimerDisplay.textContent = termsPopupCountdown;
        
        const translation = translations[currentLanguage] || translations.en;
        const timerTextElements = document.querySelectorAll('[data-i18n="timer"]');
        timerTextElements.forEach(el => {
            el.textContent = translation.timer.replace('{0}', termsPopupCountdown);
        });
        
        if (termsPopupCountdown <= 0) {
            clearInterval(termsPopupTimer);
            termsPopupTimer = null;
            
            if (freshCloseBtn) {
                freshCloseBtn.disabled = false;
                freshCloseBtn.innerHTML = `<span>${translation.close}</span>`;
            }
        }
    }, 1000);
}

function closeTermsPopup() {
    if (closePopupBtn.disabled) return;
    
    termsPopup.classList.remove('active');
    document.body.style.overflow = '';
    
    validateStep5();
}

function validateStep5() {
    updateRequirementsChecklist();
    
    const isAgeValid = userData.age >= 18;
    const isEmailVerified = userData.emailVerified;
    const isMobileVerified = userData.mobileVerified;
    const isDocumentUploaded = userData.documentFile !== null;
    const isAllFieldsFilled = 
        userData.firstName && userData.lastName && userData.gender &&
        userData.street && userData.city && userData.state && 
        userData.pincode && userData.workLocation.lat && userData.workLocation.lng;
    const isTermsChecked = termsCheckbox.checked;
    
    const allValid = isAgeValid && isEmailVerified && isMobileVerified && 
                     isDocumentUploaded && isAllFieldsFilled && isTermsChecked;
    
    createAccountBtn.disabled = !allValid;
    
    return allValid;
}

function updateRequirementsChecklist() {
    reqAge.classList.toggle('checked', userData.age >= 18);
    reqEmail.classList.toggle('checked', userData.emailVerified);
    reqMobile.classList.toggle('checked', userData.mobileVerified);
    reqDocument.classList.toggle('checked', userData.documentFile !== null);
    
    const isAllFieldsFilled = 
        userData.firstName && userData.lastName && userData.gender &&
        userData.street && userData.city && userData.state && 
        userData.pincode && userData.workLocation.lat && userData.workLocation.lng;
    reqFields.classList.toggle('checked', isAllFieldsFilled);
    
    reqTerms.classList.toggle('checked', termsCheckbox.checked);
}

/**
 * Handle Create Account
 */
function handleCreateAccount() {
    if (createAccountBtn.disabled) {
        return;
    }
    
    if (!termsCheckbox.checked) {
        showNotification('Error', 'You must agree to the Terms & Conditions', 'error');
        return;
    }
    
    createAccountBtn.disabled = true;
    createAccountBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Creating Account...</span>';
    
    const formData = new FormData();
    
    formData.append('first_name', userData.firstName);
    formData.append('last_name', userData.lastName);
    formData.append('dob', userData.dob);
    formData.append('age', userData.age);
    formData.append('gender', userData.gender);
    formData.append('email', userData.email);
    formData.append('email_verified', userData.emailVerified);
    formData.append('mobile', userData.mobile);
    formData.append('mobile_verified', userData.mobileVerified);
    formData.append('password', userData.password);
    formData.append('street', userData.street);
    formData.append('city', userData.city);
    formData.append('state', userData.state);
    formData.append('pincode', userData.pincode);
    formData.append('latitude', userData.workLocation.lat);
    formData.append('longitude', userData.workLocation.lng);
    formData.append('location_address', userData.workLocation.address || '');
    formData.append('document_type', userData.documentType);
    
    if (userData.profilePhoto) {
        formData.append('profile_photo', userData.profilePhoto);
    }
    
    if (userData.documentFile) {
        formData.append('document_file', userData.documentFile);
    }
    
    fetch('/signup_employer/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Success!', data.message, 'success');
            setTimeout(() => {
                window.location.href = data.redirect_url;
            }, 2000);
        } else {
            showNotification('Error', data.message, 'error');
            createAccountBtn.disabled = false;
            createAccountBtn.innerHTML = '<i class="fas fa-user-plus"></i><span>Create Account</span>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error', 'Network error. Please try again.', 'error');
        createAccountBtn.disabled = false;
        createAccountBtn.innerHTML = '<i class="fas fa-user-plus"></i><span>Create Account</span>';
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(title, message, type = 'info') {
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        const style = document.createElement('style');
        style.textContent = `
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                max-width: 350px;
            }
            
            .notification {
                background: linear-gradient(135deg, #01A060 0%, #018049 100%);
                color: white;
                padding: 16px;
                border-radius: 10px;
                margin-bottom: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: flex-start;
                animation: slideIn 0.3s ease-out;
                transform: translateX(400px);
                opacity: 0;
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification-icon {
                margin-right: 12px;
                font-size: 20px;
            }
            
            .notification-content {
                flex: 1;
            }
            
            .notification-content h4 {
                margin: 0 0 5px 0;
                font-size: 15px;
                font-weight: 600;
            }
            
            .notification-content p {
                margin: 0;
                font-size: 13px;
                opacity: 0.9;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                opacity: 0.7;
                cursor: pointer;
                padding: 0;
                margin-left: 10px;
                font-size: 14px;
                transition: opacity 0.2s;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ============================================
// INITIALIZE APPLICATION
// ============================================

document.addEventListener('DOMContentLoaded', init);

if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}