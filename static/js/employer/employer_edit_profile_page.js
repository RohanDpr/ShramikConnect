/**
 * Employer Edit Profile Page
 * Based on employee_signup.js pattern
 * FIXED: Settings icon and theme switching now working properly
 */

// ============================================
// DOM ELEMENTS
// ============================================
// Settings
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Notification
const notifWrapper = document.getElementById('notificationWrapper');

// Delete Popup
const deletePopup = document.getElementById('deletePopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

// Profile Photo
const profilePreview = document.getElementById('profilePreview');
const changePhotoBtn = document.getElementById('changePhotoBtn');
const removePhotoBtn = document.getElementById('removePhotoBtn');

// Personal Info
const employerName = document.getElementById('employerName');
const companyName = document.getElementById('companyName');
const dob = document.getElementById('dob');
const ageText = document.getElementById('ageText');
const ageDisplay = document.getElementById('ageDisplay');
const genderRadios = document.querySelectorAll('input[name="gender"]');

// Email Verification
const emailInput = document.getElementById('emailInput');
const getEmailOtpBtn = document.getElementById('getEmailOtpBtn');
const emailDisplay = document.getElementById('emailDisplay');
const emailOtpSection = document.getElementById('emailOtpSection');
const emailOtpInput = document.getElementById('emailOtpInput');
const verifyEmailOtpBtn = document.getElementById('verifyEmailOtpBtn');
const emailStatus = document.getElementById('emailStatus');
const resendEmailOtpBtn = document.getElementById('resendEmailOtpBtn');
const emailResendText = document.getElementById('emailResendText');

// Mobile Verification
const mobileInput = document.getElementById('mobileInput');
const getMobileOtpBtn = document.getElementById('getMobileOtpBtn');
const mobileDisplay = document.getElementById('mobileDisplay');
const mobileOtpSection = document.getElementById('mobileOtpSection');
const mobileOtpInput = document.getElementById('mobileOtpInput');
const verifyMobileOtpBtn = document.getElementById('verifyMobileOtpBtn');
const mobileStatus = document.getElementById('mobileStatus');
const resendMobileOtpBtn = document.getElementById('resendMobileOtpBtn');
const mobileResendText = document.getElementById('mobileResendText');

// Password
const oldPassword = document.getElementById('oldPassword');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');
const passwordStrength = document.getElementById('passwordStrength');
const strengthText = document.getElementById('strengthText');
const passwordMatch = document.getElementById('passwordMatch');

// Address
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pincode = document.getElementById('pincode');

// Map
const mapContainer = document.getElementById('map');
const locateMeBtn = document.getElementById('locateMeBtn');
const markLocationBtn = document.getElementById('markLocationBtn');
const selectedLocationText = document.getElementById('selectedLocationText');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');

// Document
const docType = document.getElementById('docType');
const uploadDocBtn = document.getElementById('uploadDocBtn');
const docFileName = document.getElementById('docFileName');

// Action Buttons
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const backToDashboard = document.getElementById('backToDashboard');

// ============================================
// STATE
// ============================================
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
let currentTheme = localStorage.getItem('preferredTheme') || 'light';

let emailVerified = true;
let mobileVerified = true;
let emailResendCountdown = null, mobileResendCountdown = null;
let emailResendTimeLeft = 60, mobileResendTimeLeft = 60;

let map = null;
let marker = null;
let isMarkingMode = false;

const DUMMY_EMAIL_OTP = '123456';
const DUMMY_MOBILE_OTP = '654321';

const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[6-9]\d{9}$/,
    otp: /^\d{6}$/,
    pincode: /^\d{6}$/
};

// ============================================
// TRANSLATIONS (simplified for employer)
// ============================================
const translations = {
    en: {
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        'edit_profile': 'Edit Profile', 'edit_profile_sub': 'Update your personal and professional details',
        'personal_info': 'Personal Information', 'contact_verification': 'Contact & Verification',
        'address_location': 'Address & Work Location', 'identity_documents': 'Identity & Documents',
        'employer_name': 'Employer Name *', 'company_name': 'Company Name *',
        'enter_employer_name': 'Enter your name', 'enter_company_name': 'Enter company name',
        'date_of_birth': 'Date of Birth *', 'gender': 'Gender *', 'male': 'Male', 'female': 'Female', 'other': 'Other',
        'email_verification': 'Email Verification', 'enter_email': 'Enter your email',
        'get_otp': 'Get OTP', 'verify_otp': 'Verify', 'otp_placeholder': 'XXXXXX',
        'resend_otp_60s': 'Resend OTP (60s)', 'email_verified': 'Email Verified',
        'mobile_verification': 'Mobile Verification', 'enter_mobile': 'Enter your mobile number',
        'mobile_verified': 'Mobile Verified',
        'change_password': 'Change Password', 'old_password': 'Old Password',
        'old_password_placeholder': '········', 'new_password': 'New Password',
        'new_password_placeholder': 'Minimum 8 characters', 'confirm_password': 'Confirm Password',
        'confirm_password_placeholder': 'Re-enter password', 'password_strength': 'Password Strength',
        'passwords_match': 'Passwords match',
        'full_address': 'Full Address *', 'street': 'Street', 'city': 'City', 'state': 'State', 'pincode': 'Pincode',
        'work_location': 'Work Location *', 'locate_me': 'Locate Me', 'mark_location': 'Mark Location',
        'selected_location': 'Selected Location:', 'work_location_hint': 'Click "Mark Location" and click on map to select exact work location',
        'document_type': 'Document Type', 'aadhar_card': 'Aadhar Card', 'pan_card': 'PAN Card',
        'upload_new': 'Upload New', 'uploaded': 'Uploaded',
        'clear': 'Clear', 'save_changes': 'Save Changes', 'delete_account': 'Delete Account',
        'delete_account_title': 'Delete Account', 'delete_confirmation': 'Are you sure you want to permanently delete your employer account?',
        'delete_message': 'This action cannot be undone. All your job posts and data will be permanently removed.',
        'yes_delete': 'Yes, Delete', 'cancel': 'Cancel',
        'back_to_dashboard': 'Back to Dashboard', 'go_to_dashboard': 'Go to Dashboard →',
        'profile_updated': 'Profile updated successfully!',
        'fields_cleared': 'All fields have been cleared',
        'age_restriction': 'You must be 18 years or older',
        'photo_removed': 'Profile photo removed',
        'photo_changed': 'Photo change clicked (demo)',
        'document_uploaded': 'Document upload clicked (demo)',
        'otp_sent': 'OTP sent successfully!',
        'otp_verified': 'OTP verified successfully!',
        'invalid_otp': 'Invalid OTP. Please try again.'
    },
    hi: {
        'language': 'भाषा', 'theme': 'थीम', 'light': 'लाइट', 'dark': 'डार्क', 'system': 'सिस्टम',
        'edit_profile': 'प्रोफ़ाइल संपादित करें',
        'edit_profile_sub': 'अपने व्यक्तिगत और व्यावसायिक विवरण अपडेट करें',
        'personal_info': 'व्यक्तिगत जानकारी',
        'contact_verification': 'संपर्क और सत्यापन',
        'address_location': 'पता और कार्य स्थान',
        'identity_documents': 'पहचान और दस्तावेज़',
        'employer_name': 'नियोक्ता का नाम *',
        'company_name': 'कंपनी का नाम *',
        'enter_employer_name': 'अपना नाम दर्ज करें',
        'enter_company_name': 'कंपनी का नाम दर्ज करें',
        'date_of_birth': 'जन्म तिथि *',
        'gender': 'लिंग *',
        'male': 'पुरुष',
        'female': 'महिला',
        'other': 'अन्य',
        'email_verification': 'ईमेल सत्यापन',
        'enter_email': 'अपना ईमेल दर्ज करें',
        'get_otp': 'ओटीपी प्राप्त करें',
        'verify_otp': 'सत्यापित करें',
        'otp_placeholder': 'XXXXXX',
        'resend_otp_60s': 'ओटीपी पुनः भेजें (60s)',
        'email_verified': 'ईमेल सत्यापित',
        'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'मोबाइल नंबर दर्ज करें',
        'mobile_verified': 'मोबाइल सत्यापित',
        'change_password': 'पासवर्ड बदलें',
        'old_password': 'पुराना पासवर्ड',
        'old_password_placeholder': '········',
        'new_password': 'नया पासवर्ड',
        'new_password_placeholder': 'न्यूनतम 8 अक्षर',
        'confirm_password': 'पासवर्ड की पुष्टि करें',
        'confirm_password_placeholder': 'पासवर्ड फिर से दर्ज करें',
        'password_strength': 'पासवर्ड की मजबूती',
        'passwords_match': 'पासवर्ड मेल खाते हैं',
        'full_address': 'पूरा पता *',
        'street': 'सड़क',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'work_location': 'कार्य स्थान *',
        'locate_me': 'मेरी लोकेशन',
        'mark_location': 'स्थान चिन्हित करें',
        'selected_location': 'चयनित स्थान:',
        'work_location_hint': '"स्थान चिन्हित करें" पर क्लिक करें और नक्शे पर क्लिक करके सटीक कार्य स्थान चुनें',
        'document_type': 'दस्तावेज़ प्रकार',
        'aadhar_card': 'आधार कार्ड',
        'pan_card': 'पैन कार्ड',
        'upload_new': 'नया अपलोड करें',
        'uploaded': 'अपलोड किया गया',
        'clear': 'साफ़ करें',
        'save_changes': 'बदलाव सहेजें',
        'delete_account': 'खाता हटाएं',
        'delete_account_title': 'खाता हटाएं',
        'delete_confirmation': 'क्या आप वाकई अपना नियोक्ता खाता स्थायी रूप से हटाना चाहते हैं?',
        'delete_message': 'यह क्रिया पूर्ववत नहीं की जा सकती। आपके सभी नौकरी पोस्ट और डेटा स्थायी रूप से हटा दिए जाएंगे।',
        'yes_delete': 'हाँ, हटाएं',
        'cancel': 'रद्द करें',
        'back_to_dashboard': 'डैशबोर्ड पर वापस जाएं',
        'go_to_dashboard': 'डैशबोर्ड पर जाएं →',
        'profile_updated': 'प्रोफ़ाइल सफलतापूर्वक अपडेट हुई!',
        'fields_cleared': 'सभी फ़ील्ड साफ़ कर दिए गए हैं',
        'age_restriction': 'आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए',
        'photo_removed': 'प्रोफ़ाइल फोटो हटा दी गई',
        'photo_changed': 'फोटो बदलें (डेमो)',
        'document_uploaded': 'दस्तावेज़ अपलोड (डेमो)',
        'otp_sent': 'ओटीपी सफलतापूर्वक भेजा गया!',
        'otp_verified': 'ओटीपी सफलतापूर्वक सत्यापित हुआ!',
        'invalid_otp': 'अमान्य ओटीपी। कृपया पुनः प्रयास करें।'
    },
    mr: {
        'language': 'भाषा', 'theme': 'थीम', 'light': 'लाइट', 'dark': 'डार्क', 'system': 'सिस्टम',
        'edit_profile': 'प्रोफाइल संपादित करा',
        'edit_profile_sub': 'तुमचे वैयक्तिक आणि व्यावसायिक तपशील अद्यतनित करा',
        'personal_info': 'वैयक्तिक माहिती',
        'contact_verification': 'संपर्क आणि सत्यापन',
        'address_location': 'पत्ता आणि कार्यस्थळ',
        'identity_documents': 'ओळख आणि दस्तऐवज',
        'employer_name': 'नियोक्त्याचे नाव *',
        'company_name': 'कंपनीचे नाव *',
        'enter_employer_name': 'तुमचे नाव प्रविष्ट करा',
        'enter_company_name': 'कंपनीचे नाव प्रविष्ट करा',
        'date_of_birth': 'जन्मतारीख *',
        'gender': 'लिंग *',
        'male': 'पुरुष',
        'female': 'स्त्री',
        'other': 'इतर',
        'email_verification': 'ईमेल सत्यापन',
        'enter_email': 'तुमचा ईमेल प्रविष्ट करा',
        'get_otp': 'ओटीपी मिळवा',
        'verify_otp': 'सत्यापित करा',
        'otp_placeholder': 'XXXXXX',
        'resend_otp_60s': 'ओटीपी पुन्हा पाठवा (60s)',
        'email_verified': 'ईमेल सत्यापित',
        'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'मोबाइल नंबर प्रविष्ट करा',
        'mobile_verified': 'मोबाइल सत्यापित',
        'change_password': 'पासवर्ड बदला',
        'old_password': 'जुना पासवर्ड',
        'old_password_placeholder': '········',
        'new_password': 'नवीन पासवर्ड',
        'new_password_placeholder': 'किमान ८ वर्ण',
        'confirm_password': 'पासवर्डची पुष्टी करा',
        'confirm_password_placeholder': 'पासवर्ड पुन्हा प्रविष्ट करा',
        'password_strength': 'पासवर्ड सामर्थ्य',
        'passwords_match': 'पासवर्ड जुळतात',
        'full_address': 'संपूर्ण पत्ता *',
        'street': 'रस्ता',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'work_location': 'कार्यस्थळ *',
        'locate_me': 'माझी लोकेशन',
        'mark_location': 'स्थान चिन्हांकित करा',
        'selected_location': 'निवडलेले स्थान:',
        'work_location_hint': '"स्थान चिन्हांकित करा" वर क्लिक करा आणि नकाशावर क्लिक करून सटीक कार्यस्थळ निवडा',
        'document_type': 'दस्तऐवज प्रकार',
        'aadhar_card': 'आधार कार्ड',
        'pan_card': 'पॅन कार्ड',
        'upload_new': 'नवीन अपलोड करा',
        'uploaded': 'अपलोड केले',
        'clear': 'साफ करा',
        'save_changes': 'बदल जतन करा',
        'delete_account': 'खाते हटवा',
        'delete_account_title': 'खाते हटवा',
        'delete_confirmation': 'तुम्हाला तुमचे नियोक्ता खाते कायमचे हटवायचे आहे का?',
        'delete_message': 'ही क्रिया पूर्ववत करता येणार नाही. तुमच्या सर्व नोकरी पोस्ट आणि डेटा कायमचे हटवले जातील.',
        'yes_delete': 'होय, हटवा',
        'cancel': 'रद्द करा',
        'back_to_dashboard': 'डॅशबोर्डवर परत जा',
        'go_to_dashboard': 'डॅशबोर्डवर जा →',
        'profile_updated': 'प्रोफाइल यशस्वीरित्या अद्यतनित केले!',
        'fields_cleared': 'सर्व फील्ड साफ केली गेली आहेत',
        'age_restriction': 'तुमचे वय १८ वर्षे किंवा त्यापेक्षा जास्त असणे आवश्यक आहे',
        'photo_removed': 'प्रोफाइल फोटो काढला',
        'photo_changed': 'फोटो बदला (डेमो)',
        'document_uploaded': 'दस्तऐवज अपलोड (डेमो)',
        'otp_sent': 'ओटीपी यशस्वीरित्या पाठविला!',
        'otp_verified': 'ओटीपी यशस्वीरित्या सत्यापित!',
        'invalid_otp': 'अवैध ओटीपी. कृपया पुन्हा प्रयत्न करा.'
    }
};

// ============================================
// INIT
// ============================================
function init() {
    loadPreferences();
    applyLanguage(currentLanguage);
    applyTheme(currentTheme);
    setupEventListeners();
    calculateAge();
    updatePasswordStrength();
    setupOtpSimulation();
    initMap();
}

function loadPreferences() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) currentLanguage = savedLang;
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) currentTheme = savedTheme;
    
    updateActiveButtons();
}

function updateActiveButtons() {
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                if (el.getAttribute('data-i18n-placeholder')) {
                    el.placeholder = t[key];
                }
            } else if (el.tagName === 'OPTION') {
                el.textContent = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
    
    if (emailResendCountdown) updateEmailResendText();
    if (mobileResendCountdown) updateMobileResendText();
}

function applyTheme(theme) {
    let th = theme;
    if (theme === 'system') {
        th = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(th + '-theme');
    localStorage.setItem('preferredTheme', theme);
    
    // Update active button in dropdown
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Settings toggle - FIXED: now properly toggles dropdown
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });
    
    // Close settings when clicking outside - FIXED
    document.addEventListener('click', (e) => {
        if (!settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Language options - FIXED: now properly updates active state
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all language buttons
            languageOptions.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            currentLanguage = btn.dataset.lang;
            localStorage.setItem('preferredLanguage', currentLanguage);
            applyLanguage(currentLanguage);
        });
    });

    // Theme options - FIXED: now properly updates active state
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all theme buttons
            themeOptions.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            currentTheme = btn.dataset.theme;
            applyTheme(currentTheme);
        });
    });

    // System theme change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });

    // Profile photo
    changePhotoBtn.addEventListener('click', () => {
        showNotification(translations[currentLanguage].photo_changed || 'Photo change (demo)', 'info');
    });
    
    removePhotoBtn.addEventListener('click', () => {
        profilePreview.innerHTML = '<i class="fas fa-user"></i>';
        showNotification(translations[currentLanguage].photo_removed || 'Photo removed', 'info');
    });

    // DOB age calculation & validation
    dob.addEventListener('change', () => {
        calculateAge();
        validateAgeRestriction();
    });

    // Password strength & match
    newPassword.addEventListener('input', updatePasswordStrength);
    confirmPassword.addEventListener('input', updatePasswordStrength);

    // Toggle password visibility
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            const type = targetInput.type === 'password' ? 'text' : 'password';
            targetInput.type = type;
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });

    // Action buttons
    clearBtn.addEventListener('click', clearAllFields);
    
    saveBtn.addEventListener('click', () => {
        if (!validateAgeRestriction()) {
            showNotification(translations[currentLanguage].age_restriction || 'Age restriction', 'error');
            return;
        }
        showNotification(translations[currentLanguage].profile_updated || 'Profile updated!', 'success');
    });

    // Delete account popup
    deleteAccountBtn.addEventListener('click', () => {
        deletePopup.classList.add('active');
    });
    
    closePopupBtn.addEventListener('click', () => deletePopup.classList.remove('active'));
    cancelDeleteBtn.addEventListener('click', () => deletePopup.classList.remove('active'));
    
    confirmDeleteBtn.addEventListener('click', () => {
        showNotification('Account deleted (demo)', 'error');
        deletePopup.classList.remove('active');
    });

    // Back to dashboard
    backToDashboard.addEventListener('click', () => {
        window.location.href = 'g_e.html';
    });

    // Document upload (demo)
    uploadDocBtn.addEventListener('click', () => {
        showNotification(translations[currentLanguage].document_uploaded || 'Document upload (demo)', 'info');
    });

    // Map buttons
    if (locateMeBtn) {
        locateMeBtn.addEventListener('click', locateUser);
    }
    
    if (markLocationBtn) {
        markLocationBtn.addEventListener('click', toggleMarkingMode);
    }
}

// ============================================
// MAP FUNCTIONS (like employee_signup)
// ============================================
function initMap() {
    if (!mapContainer) return;
    
    const defaultLat = parseFloat(latitudeInput.value) || 19.1136;
    const defaultLng = parseFloat(longitudeInput.value) || 72.8697;
    
    map = L.map('map').setView([defaultLat, defaultLng], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    marker = L.marker([defaultLat, defaultLng], {
        draggable: true
    }).addTo(map);
    
    marker.on('dragend', function(e) {
        const position = e.target.getLatLng();
        updateLocation(position.lat, position.lng);
    });
    
    map.on('click', function(e) {
        if (isMarkingMode) {
            marker.setLatLng(e.latlng);
            updateLocation(e.latlng.lat, e.latlng.lng);
            isMarkingMode = false;
            markLocationBtn.innerHTML = '<i class="fas fa-map-pin"></i><span data-i18n="mark_location">Mark Location</span>';
            markLocationBtn.style.background = '';
            markLocationBtn.style.color = '';
            showNotification('Location Marked', 'Work location has been marked', 'success');
        }
    });
    
    getAddressFromCoordinates(defaultLat, defaultLng);
}

function updateLocation(lat, lng) {
    latitudeInput.value = lat.toFixed(6);
    longitudeInput.value = lng.toFixed(6);
    getAddressFromCoordinates(lat, lng);
}

async function getAddressFromCoordinates(lat, lng) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
        );
        
        if (!response.ok) throw new Error('Failed to fetch address');
        
        const data = await response.json();
        
        if (data.display_name) {
            selectedLocationText.textContent = data.display_name;
        } else {
            selectedLocationText.textContent = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
        }
    } catch (error) {
        console.error('Error fetching address:', error);
        selectedLocationText.textContent = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }
}

function locateUser() {
    if (!navigator.geolocation) {
        showNotification('Error', 'Geolocation is not supported', 'error');
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
            marker.setLatLng([lat, lng]);
            updateLocation(lat, lng);
            
            locateMeBtn.disabled = false;
            locateMeBtn.innerHTML = originalText;
            
            showNotification('Location Found', 'Your location has been found', 'success');
        },
        (error) => {
            locateMeBtn.disabled = false;
            locateMeBtn.innerHTML = originalText;
            showNotification('Location Error', 'Unable to retrieve your location', 'error');
        }
    );
}

function toggleMarkingMode() {
    isMarkingMode = !isMarkingMode;
    
    if (isMarkingMode) {
        markLocationBtn.innerHTML = '<i class="fas fa-times"></i><span>Cancel Marking</span>';
        markLocationBtn.style.background = '#DC2626';
        markLocationBtn.style.color = 'white';
        showNotification('Marking Mode', 'Click on the map to mark your work location', 'info');
    } else {
        markLocationBtn.innerHTML = '<i class="fas fa-map-pin"></i><span data-i18n="mark_location">Mark Location</span>';
        markLocationBtn.style.background = '';
        markLocationBtn.style.color = '';
    }
}

// ============================================
// AGE FUNCTIONS
// ============================================
function calculateAge() {
    if (!dob.value) return;
    const birth = new Date(dob.value);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    ageText.textContent = age + ' years old';
    return age;
}

function validateAgeRestriction() {
    if (!dob.value) return true;
    const age = calculateAge();
    if (age < 18) {
        ageDisplay.classList.add('error');
        ageText.innerHTML = `${age} years old <span style="color:#DC2626;">(Must be 18+)</span>`;
        return false;
    } else {
        ageDisplay.classList.remove('error');
        return true;
    }
}

// ============================================
// PASSWORD STRENGTH
// ============================================
function updatePasswordStrength() {
    const val = newPassword.value;
    let strength = 0;
    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[a-z]/.test(val)) strength++;
    if (/\d/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    passwordStrength.className = 'password-strength';
    
    if (val.length === 0) {
        strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
    } else if (strength <= 2) {
        passwordStrength.classList.add('weak');
        strengthText.textContent = 'Weak';
    } else if (strength === 3) {
        passwordStrength.classList.add('medium');
        strengthText.textContent = 'Medium';
    } else if (strength === 4) {
        passwordStrength.classList.add('strong');
        strengthText.textContent = 'Strong';
    } else {
        passwordStrength.classList.add('very-strong');
        strengthText.textContent = 'Very Strong';
    }

    if (confirmPassword.value.length > 0) {
        passwordMatch.classList.toggle('visible', val === confirmPassword.value);
    } else {
        passwordMatch.classList.remove('visible');
    }
}

// ============================================
// OTP SIMULATION (like employee_signup)
// ============================================
function setupOtpSimulation() {
    // Email OTP
    getEmailOtpBtn.addEventListener('click', () => {
        if (!validationPatterns.email.test(emailInput.value)) {
            showNotification('Invalid email', 'error');
            return;
        }
        emailDisplay.textContent = `OTP sent to ${emailInput.value}`;
        emailDisplay.classList.add('show');
        emailOtpSection.classList.add('active');
        getEmailOtpBtn.disabled = true;
        startEmailResendCountdown();
        showNotification(translations[currentLanguage].otp_sent || 'OTP sent!', 'success');
    });

    verifyEmailOtpBtn.addEventListener('click', () => {
        if (emailOtpInput.value === DUMMY_EMAIL_OTP) {
            emailVerified = true;
            emailStatus.innerHTML = '<i class="fas fa-check-circle"></i> <span data-i18n="email_verified">Email Verified</span>';
            emailOtpSection.classList.remove('active');
            emailDisplay.classList.remove('show');
            if (emailResendCountdown) clearInterval(emailResendCountdown);
            showNotification(translations[currentLanguage].otp_verified || 'OTP verified!', 'success');
        } else {
            showNotification(translations[currentLanguage].invalid_otp || 'Invalid OTP', 'error');
        }
    });

    emailOtpInput.addEventListener('input', () => {
        verifyEmailOtpBtn.disabled = emailOtpInput.value.length !== 6;
    });

    // Mobile OTP
    getMobileOtpBtn.addEventListener('click', () => {
        if (!validationPatterns.phone.test(mobileInput.value)) {
            showNotification('Invalid mobile number', 'error');
            return;
        }
        mobileDisplay.textContent = `OTP sent to ${mobileInput.value}`;
        mobileDisplay.classList.add('show');
        mobileOtpSection.classList.add('active');
        getMobileOtpBtn.disabled = true;
        startMobileResendCountdown();
        showNotification(translations[currentLanguage].otp_sent || 'OTP sent!', 'success');
    });

    verifyMobileOtpBtn.addEventListener('click', () => {
        if (mobileOtpInput.value === DUMMY_MOBILE_OTP) {
            mobileVerified = true;
            mobileStatus.innerHTML = '<i class="fas fa-check-circle"></i> <span data-i18n="mobile_verified">Mobile Verified</span>';
            mobileOtpSection.classList.remove('active');
            mobileDisplay.classList.remove('show');
            if (mobileResendCountdown) clearInterval(mobileResendCountdown);
            showNotification(translations[currentLanguage].otp_verified || 'OTP verified!', 'success');
        } else {
            showNotification(translations[currentLanguage].invalid_otp || 'Invalid OTP', 'error');
        }
    });

    mobileOtpInput.addEventListener('input', () => {
        verifyMobileOtpBtn.disabled = mobileOtpInput.value.length !== 6;
    });
}

function startEmailResendCountdown() {
    if (emailResendCountdown) clearInterval(emailResendCountdown);
    emailResendTimeLeft = 60;
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

function updateEmailResendText() {
    const base = translations[currentLanguage].resend_otp_60s || 'Resend OTP (60s)';
    emailResendText.textContent = base.replace('60s', `${emailResendTimeLeft}s`);
}

function startMobileResendCountdown() {
    if (mobileResendCountdown) clearInterval(mobileResendCountdown);
    mobileResendTimeLeft = 60;
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

function updateMobileResendText() {
    const base = translations[currentLanguage].resend_otp_60s || 'Resend OTP (60s)';
    mobileResendText.textContent = base.replace('60s', `${mobileResendTimeLeft}s`);
}

// ============================================
// CLEAR ALL FIELDS
// ============================================
function clearAllFields() {
    employerName.value = '';
    companyName.value = '';
    dob.value = '';
    ageText.textContent = 'Select date';
    
    genderRadios.forEach(r => r.checked = false);
    
    emailInput.value = '';
    mobileInput.value = '';
    oldPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
    
    street.value = '';
    city.value = '';
    state.value = '';
    pincode.value = '';
    
    // Reset password indicators
    passwordStrength.className = 'password-strength';
    strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
    passwordMatch.classList.remove('visible');
    
    showNotification(translations[currentLanguage].fields_cleared || 'All fields cleared', 'info');
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    notif.innerHTML = `
        <div class="notification-icon"><i class="fas fa-${icon}"></i></div>
        <div class="notification-content"><p>${message}</p></div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    notifWrapper.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 10);
    
    notif.querySelector('.notification-close').addEventListener('click', () => {
        notif.remove();
    });
    
    setTimeout(() => notif.remove(), 4000);
}

// ============================================
// START
// ============================================
document.addEventListener('DOMContentLoaded', init);