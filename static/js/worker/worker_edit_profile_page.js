/**
 * Worker Edit Profile Page - Complete
 * Fixed: Language switching, full width, preview removed, back button outside
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
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
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

// Professional
const profession = document.getElementById('profession');
const workArea = document.getElementById('workArea');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pincode = document.getElementById('pincode');
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

const DUMMY_EMAIL_OTP = '123456';
const DUMMY_MOBILE_OTP = '654321';

const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[6-9]\d{9}$/,
    otp: /^\d{6}$/,
    pincode: /^\d{6}$/
};

// ============================================
// COMPLETE TRANSLATIONS (EN, HI, MR)
// ============================================
const translations = {
    en: {
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        'edit_profile': 'Edit Profile', 'edit_profile_sub': 'Update your personal and professional details',
        'personal_info': 'Personal Information', 'security_verification': 'Security & Verification',
        'identity_documents': 'Identity & Documentation',
        'first_name': 'First Name *', 'last_name': 'Last Name *', 'enter_first_name': 'Enter first name', 'enter_last_name': 'Enter last name',
        'date_of_birth': 'Date of Birth *', 'gender': 'Gender *', 'male': 'Male', 'female': 'Female', 'other': 'Other',
        'email_verification': 'Email Verification', 'enter_email': 'Enter your email', 'get_otp': 'Get OTP',
        'verify_otp': 'Verify', 'otp_placeholder': 'XXXXXX', 'resend_otp_60s': 'Resend OTP (60s)',
        'email_verified': 'Email Verified', 'mobile_verification': 'Mobile Verification',
        'enter_mobile': 'Enter mobile number', 'mobile_verified': 'Mobile Verified',
        'change_password': 'Change Password', 'old_password': 'Old Password', 'old_password_placeholder': '········',
        'new_password': 'New Password', 'new_password_placeholder': 'Minimum 8 characters',
        'confirm_password': 'Confirm Password', 'confirm_password_placeholder': 'Re-enter password',
        'password_strength': 'Password Strength', 'passwords_match': 'Passwords match',
        'profession': 'Profession *', 'profession_hint': 'Hold Ctrl/Cmd to select multiple',
        'preferred_work_area': 'Preferred Work Area *', 'work_area_placeholder': 'e.g. Mumbai, Andheri, Bandra',
        'street': 'Street', 'city': 'City', 'state': 'State', 'pincode': 'Pincode',
        'document_type': 'Document Type', 'upload_new': 'Upload New', 'uploaded': 'Uploaded',
        'clear': 'Clear', 'save_changes': 'Save Changes', 'delete_account': 'Delete Account',
        'delete_account_title': 'Delete Account', 'delete_confirmation': 'Are you sure you want to permanently delete your worker account?',
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
        'edit_profile': 'प्रोफ़ाइल संपादित करें', 'edit_profile_sub': 'अपने व्यक्तिगत और व्यावसायिक विवरण अपडेट करें',
        'personal_info': 'व्यक्तिगत जानकारी', 'security_verification': 'सुरक्षा और सत्यापन',
        'identity_documents': 'पहचान और दस्तावेज़',
        'first_name': 'पहला नाम *', 'last_name': 'अंतिम नाम *', 'enter_first_name': 'पहला नाम दर्ज करें', 'enter_last_name': 'अंतिम नाम दर्ज करें',
        'date_of_birth': 'जन्म तिथि *', 'gender': 'लिंग *', 'male': 'पुरुष', 'female': 'महिला', 'other': 'अन्य',
        'email_verification': 'ईमेल सत्यापन', 'enter_email': 'अपना ईमेल दर्ज करें', 'get_otp': 'ओटीपी प्राप्त करें',
        'verify_otp': 'सत्यापित करें', 'otp_placeholder': 'XXXXXX', 'resend_otp_60s': 'ओटीपी पुनः भेजें (60s)',
        'email_verified': 'ईमेल सत्यापित', 'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'मोबाइल नंबर दर्ज करें', 'mobile_verified': 'मोबाइल सत्यापित',
        'change_password': 'पासवर्ड बदलें', 'old_password': 'पुराना पासवर्ड', 'old_password_placeholder': '········',
        'new_password': 'नया पासवर्ड', 'new_password_placeholder': 'न्यूनतम 8 अक्षर',
        'confirm_password': 'पासवर्ड की पुष्टि करें', 'confirm_password_placeholder': 'पासवर्ड फिर से दर्ज करें',
        'password_strength': 'पासवर्ड की मजबूती', 'passwords_match': 'पासवर्ड मेल खाते हैं',
        'profession': 'व्यवसाय *', 'profession_hint': 'एकाधिक चुनने के लिए Ctrl/Cmd दबाए रखें',
        'preferred_work_area': 'पसंदीदा कार्य क्षेत्र *', 'work_area_placeholder': 'जैसे मुंबई, अंधेरी, बांद्रा',
        'street': 'गली', 'city': 'शहर', 'state': 'राज्य', 'pincode': 'पिन कोड',
        'document_type': 'दस्तावेज़ प्रकार', 'upload_new': 'नया अपलोड करें', 'uploaded': 'अपलोड किया गया',
        'clear': 'साफ़ करें', 'save_changes': 'बदलाव सहेजें', 'delete_account': 'खाता हटाएं',
        'delete_account_title': 'खाता हटाएं', 'delete_confirmation': 'क्या आप वाकई अपना खाता स्थायी रूप से हटाना चाहते हैं?',
        'yes_delete': 'हाँ, हटाएं', 'cancel': 'रद्द करें',
        'back_to_dashboard': 'डैशबोर्ड पर वापस जाएं', 'go_to_dashboard': 'डैशबोर्ड पर जाएं →',
        'profile_updated': 'प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!',
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
        'edit_profile': 'प्रोफाइल संपादित करा', 'edit_profile_sub': 'तुमचे वैयक्तिक आणि व्यावसायिक तपशील अद्यतनित करा',
        'personal_info': 'वैयक्तिक माहिती', 'security_verification': 'सुरक्षा आणि सत्यापन',
        'identity_documents': 'ओळख आणि दस्तऐवज',
        'first_name': 'पहिले नाव *', 'last_name': 'आडनाव *', 'enter_first_name': 'पहिले नाव प्रविष्ट करा', 'enter_last_name': 'आडनाव प्रविष्ट करा',
        'date_of_birth': 'जन्मतारीख *', 'gender': 'लिंग *', 'male': 'पुरुष', 'female': 'स्त्री', 'other': 'इतर',
        'email_verification': 'ईमेल सत्यापन', 'enter_email': 'तुमचा ईमेल प्रविष्ट करा', 'get_otp': 'ओटीपी मिळवा',
        'verify_otp': 'सत्यापित करा', 'otp_placeholder': 'XXXXXX', 'resend_otp_60s': 'ओटीपी पुन्हा पाठवा (60s)',
        'email_verified': 'ईमेल सत्यापित', 'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'मोबाइल नंबर प्रविष्ट करा', 'mobile_verified': 'मोबाइल सत्यापित',
        'change_password': 'पासवर्ड बदला', 'old_password': 'जुना पासवर्ड', 'old_password_placeholder': '········',
        'new_password': 'नवीन पासवर्ड', 'new_password_placeholder': 'किमान ८ वर्ण',
        'confirm_password': 'पासवर्डची पुष्टी करा', 'confirm_password_placeholder': 'पासवर्ड पुन्हा प्रविष्ट करा',
        'password_strength': 'पासवर्ड सामर्थ्य', 'passwords_match': 'पासवर्ड जुळतात',
        'profession': 'व्यवसाय *', 'profession_hint': 'एकाधिक निवडण्यासाठी Ctrl/Cmd दाबा',
        'preferred_work_area': 'प्राधान्य कार्यक्षेत्र *', 'work_area_placeholder': 'उदा. मुंबई, अंधेरी, बांद्रा',
        'street': 'रस्ता', 'city': 'शहर', 'state': 'राज्य', 'pincode': 'पिन कोड',
        'document_type': 'दस्तऐवज प्रकार', 'upload_new': 'नवीन अपलोड करा', 'uploaded': 'अपलोड केले',
        'clear': 'साफ करा', 'save_changes': 'बदल जतन करा', 'delete_account': 'खाते हटवा',
        'delete_account_title': 'खाते हटवा', 'delete_confirmation': 'तुम्हाला तुमचे खाते कायमचे हटवायचे आहे का?',
        'yes_delete': 'होय, हटवा', 'cancel': 'रद्द करा',
        'back_to_dashboard': 'डॅशबोर्डवर परत जा', 'go_to_dashboard': 'डॅशबोर्डवर जा →',
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
    
    // Update all elements with data-i18n
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
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
    
    // Update resend texts if countdown active
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
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Settings toggle
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Language options
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            localStorage.setItem('preferredLanguage', currentLanguage);
            applyLanguage(currentLanguage);
            updateActiveButtons();
        });
    });

    // Theme options
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(btn.dataset.theme);
            updateActiveButtons();
        });
    });

    // System theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'system') applyTheme('system');
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
        window.location.href = 'dashboard.html';
    });

    // Document upload (demo)
    uploadDocBtn.addEventListener('click', () => {
        showNotification(translations[currentLanguage].document_uploaded || 'Document upload (demo)', 'info');
    });
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

    // Password match
    if (confirmPassword.value.length > 0) {
        passwordMatch.classList.toggle('visible', val === confirmPassword.value);
    } else {
        passwordMatch.classList.remove('visible');
    }
}

// ============================================
// OTP SIMULATION
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
            emailResendText.textContent = translations[currentLanguage].resend_otp_60s?.replace('60s', '') || 'Resend OTP';
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
            mobileResendText.textContent = translations[currentLanguage].resend_otp_60s?.replace('60s', '') || 'Resend OTP';
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
    firstName.value = '';
    lastName.value = '';
    dob.value = '';
    ageText.textContent = 'Select date';
    
    genderRadios.forEach(r => r.checked = false);
    
    emailInput.value = '';
    mobileInput.value = '';
    oldPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
    
    workArea.value = '';
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