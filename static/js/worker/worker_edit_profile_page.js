/**
 * Worker Edit Profile Page - Complete Working Version
 */

// ============================================
// CSRF TOKEN HELPER
// ============================================
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

function getCSRFToken() {
    // Try to get from hidden input first
    const tokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
    if (tokenInput && tokenInput.value) {
        return tokenInput.value;
    }
    // Fall back to cookie
    return getCookie('csrftoken');
}

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIcon = document.getElementById('settingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const notifWrapper = document.getElementById('notificationWrapper');
const deletePopup = document.getElementById('deletePopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

// Profile Photo
const profilePreview = document.getElementById('profilePreview');
const changePhotoBtn = document.getElementById('changePhotoBtn');
const removePhotoBtn = document.getElementById('removePhotoBtn');
const profilePhotoInput = document.getElementById('profilePhotoInput');

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
const otherProfession = document.getElementById('otherProfession');
const workArea = document.getElementById('workArea');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pincode = document.getElementById('pincode');
const docType = document.getElementById('docType');
const uploadDocBtn = document.getElementById('uploadDocBtn');
const docFileName = document.getElementById('docFileName');
const documentFileInput = document.getElementById('documentFileInput');

// Action Buttons
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const backToDashboard = document.getElementById('backToDashboard');

// ============================================
// STATE
// ============================================
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
let currentTheme = localStorage.getItem('preferredTheme') || 'light';
let emailResendCountdown = null, mobileResendCountdown = null;
let emailResendTimeLeft = 60, mobileResendTimeLeft = 60;
let removeProfilePhotoRequested = false;

// ============================================
// TRANSLATIONS
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
        'change_password': 'Change Password', 'old_password': 'Old Password',
        'new_password': 'New Password', 'confirm_password': 'Confirm Password',
        'password_strength': 'Password Strength', 'passwords_match': 'Passwords match',
        'profession': 'Profession *', 'preferred_work_area': 'Preferred Work Area *',
        'street': 'Street', 'city': 'City', 'state': 'State', 'pincode': 'Pincode',
        'document_type': 'Document Type', 'upload_new': 'Upload New', 'uploaded': 'Uploaded',
        'clear': 'Clear', 'save_changes': 'Save Changes', 'delete_account': 'Delete Account',
        'back_to_dashboard': 'Back to Dashboard', 'go_to_dashboard': 'Go to Dashboard →',
        'profile_updated': 'Profile updated successfully!',
        'fields_cleared': 'All fields have been cleared',
        'age_restriction': 'You must be 18 years or older',
        'photo_removed': 'Profile photo removed',
        'photo_changed': 'Photo changed successfully',
        'document_uploaded': 'Document uploaded successfully',
        'otp_sent': 'OTP sent successfully!',
        'otp_verified': 'OTP verified successfully!',
        'invalid_otp': 'Invalid OTP. Please try again.',
        'saving': 'Saving...',
        'error_saving': 'Error saving profile'
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
        'change_password': 'पासवर्ड बदलें', 'old_password': 'पुराना पासवर्ड',
        'new_password': 'नया पासवर्ड', 'confirm_password': 'पासवर्ड की पुष्टि करें',
        'password_strength': 'पासवर्ड की मजबूती', 'passwords_match': 'पासवर्ड मेल खाते हैं',
        'profession': 'व्यवसाय *', 'preferred_work_area': 'पसंदीदा कार्य क्षेत्र *',
        'street': 'गली', 'city': 'शहर', 'state': 'राज्य', 'pincode': 'पिन कोड',
        'document_type': 'दस्तावेज़ प्रकार', 'upload_new': 'नया अपलोड करें', 'uploaded': 'अपलोड किया गया',
        'clear': 'साफ़ करें', 'save_changes': 'बदलाव सहेजें', 'delete_account': 'खाता हटाएं',
        'back_to_dashboard': 'डैशबोर्ड पर वापस जाएं', 'go_to_dashboard': 'डैशबोर्ड पर जाएं →',
        'profile_updated': 'प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!',
        'fields_cleared': 'सभी फ़ील्ड साफ़ कर दिए गए हैं',
        'age_restriction': 'आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए',
        'photo_removed': 'प्रोफ़ाइल फोटो हटा दी गई',
        'photo_changed': 'फोटो बदल दिया गया है',
        'document_uploaded': 'दस्तावेज़ अपलोड कर दिया गया है',
        'otp_sent': 'ओटीपी सफलतापूर्वक भेजा गया!',
        'otp_verified': 'ओटीपी सफलतापूर्वक सत्यापित हुआ!',
        'invalid_otp': 'अमान्य ओटीपी। कृपया पुनः प्रयास करें।',
        'saving': 'सहेजा जा रहा है...',
        'error_saving': 'प्रोफ़ाइल सहेजने में त्रुटि'
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
        'change_password': 'पासवर्ड बदला', 'old_password': 'जुना पासवर्ड',
        'new_password': 'नवीन पासवर्ड', 'confirm_password': 'पासवर्डची पुष्टी करा',
        'password_strength': 'पासवर्ड सामर्थ्य', 'passwords_match': 'पासवर्ड जुळतात',
        'profession': 'व्यवसाय *', 'preferred_work_area': 'प्राधान्य कार्यक्षेत्र *',
        'street': 'रस्ता', 'city': 'शहर', 'state': 'राज्य', 'pincode': 'पिन कोड',
        'document_type': 'दस्तऐवज प्रकार', 'upload_new': 'नवीन अपलोड करा', 'uploaded': 'अपलोड केले',
        'clear': 'साफ करा', 'save_changes': 'बदल जतन करा', 'delete_account': 'खाते हटवा',
        'back_to_dashboard': 'डॅशबोर्डवर परत जा', 'go_to_dashboard': 'डॅशबोर्डवर जा →',
        'profile_updated': 'प्रोफाइल यशस्वीरित्या अद्यतनित केले!',
        'fields_cleared': 'सर्व फील्ड साफ केली गेली आहेत',
        'age_restriction': 'तुमचे वय १८ वर्षे किंवा त्यापेक्षा जास्त असणे आवश्यक आहे',
        'photo_removed': 'प्रोफाइल फोटो काढला',
        'photo_changed': 'फोटो बदलला आहे',
        'document_uploaded': 'दस्तऐवज अपलोड केला आहे',
        'otp_sent': 'ओटीपी यशस्वीरित्या पाठविला!',
        'otp_verified': 'ओटीपी यशस्वीरित्या सत्यापित!',
        'invalid_otp': 'अवैध ओटीपी. कृपया पुन्हा प्रयत्न करा.',
        'saving': 'जतन करत आहे...',
        'error_saving': 'प्रोफाइल जतन करण्यात त्रुटी'
    }
};

// ============================================
// INITIALIZATION
// ============================================
function init() {
    console.log('Edit Profile Page Initialized');
    loadPreferences();
    applyLanguage(currentLanguage);
    applyTheme(currentTheme);
    setupEventListeners();
    calculateAge();
    updatePasswordStrength();
    setupOtpHandling();
    initializeProfessionField();
    loadWorkerData();
}

function loadWorkerData() {
    console.log('Loading worker data:', window.workerData);
    
    if (window.workerData) {
        if (firstName) firstName.value = window.workerData.first_name || '';
        if (lastName) lastName.value = window.workerData.last_name || '';
        if (dob && window.workerData.date_of_birth) dob.value = window.workerData.date_of_birth;
        if (workArea) workArea.value = window.workerData.preferred_work_area || '';
        if (street) street.value = window.workerData.street || '';
        if (city) city.value = window.workerData.city || '';
        if (state) state.value = window.workerData.state || '';
        if (pincode) pincode.value = window.workerData.pincode || '';
        if (emailInput) emailInput.value = window.workerData.email || '';
        if (mobileInput) mobileInput.value = window.workerData.mobile || '';
        
        // Set gender
        if (window.workerData.gender) {
            genderRadios.forEach(radio => {
                if (radio.value === window.workerData.gender) radio.checked = true;
            });
        }
        
        // Set profession
        if (profession && window.workerData.profession) {
            profession.value = window.workerData.profession;
            if (window.workerData.profession === 'other' && window.workerData.other_profession) {
                if (otherProfession) otherProfession.value = window.workerData.other_profession;
            }
        }
        
        // Set profile photo
        if (window.workerData.profile_photo && profilePreview) {
            profilePreview.innerHTML = `<img src="${window.workerData.profile_photo}" alt="Profile">`;
        }
        
        // Set document name
        if (window.workerData.document_file && docFileName) {
            const fileName = window.workerData.document_file.split('/').pop();
            docFileName.textContent = fileName;
        }
        
        // Set email verification status
        if (emailStatus && window.workerData.email_verified) {
            emailStatus.innerHTML = '<i class="fas fa-check-circle"></i> Email Verified';
            emailStatus.classList.add('verified');
        }
        
        // Set mobile verification status
        if (mobileStatus && window.workerData.mobile_verified) {
            mobileStatus.innerHTML = '<i class="fas fa-check-circle"></i> Mobile Verified';
            mobileStatus.classList.add('verified');
        }
        
        calculateAge();
    }
}

function loadPreferences() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) currentLanguage = savedLang;
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) currentTheme = savedTheme;
    updateActiveButtons();
}

function initializeProfessionField() {
    if (profession && otherProfession) {
        if (profession.value === 'other') {
            otherProfession.style.display = 'block';
        } else {
            otherProfession.style.display = 'none';
        }
    }
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
    if (settingsIcon) {
        settingsIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', (e) => {
        if (settingsIcon && settingsDropdown && !settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
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

    // Profile photo
    if (changePhotoBtn && profilePhotoInput) {
        changePhotoBtn.addEventListener('click', () => profilePhotoInput.click());
        
        profilePhotoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (profilePreview) {
                        profilePreview.innerHTML = `<img src="${event.target.result}" alt="Profile">`;
                    }
                    removeProfilePhotoRequested = false;
                    showNotification('Photo selected', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    if (removePhotoBtn) {
        removePhotoBtn.addEventListener('click', () => {
            if (profilePreview) {
                profilePreview.innerHTML = '<i class="fas fa-user" style="color: white; font-size: 48px;"></i>';
            }
            if (profilePhotoInput) profilePhotoInput.value = '';
            removeProfilePhotoRequested = true;
            showNotification('Photo removed', 'info');
        });
    }

    // DOB
    if (dob) {
        dob.addEventListener('change', () => {
            calculateAge();
            validateAgeRestriction();
        });
    }

    // Profession
    if (profession && otherProfession) {
        profession.addEventListener('change', () => {
            if (profession.value === 'other') {
                otherProfession.style.display = 'block';
            } else {
                otherProfession.style.display = 'none';
            }
        });
    }

    // Password
    if (newPassword) newPassword.addEventListener('input', updatePasswordStrength);
    if (confirmPassword) confirmPassword.addEventListener('input', updatePasswordStrength);

    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            if (targetInput) {
                const type = targetInput.type === 'password' ? 'text' : 'password';
                targetInput.type = type;
                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            }
        });
    });

    // Clear button
    if (clearBtn) clearBtn.addEventListener('click', clearAllFields);
    
    // Save button - MAIN FIX
    if (saveBtn) {
        saveBtn.addEventListener('click', saveProfile);
    }

    // Delete account
    if (deleteAccountBtn && deletePopup) {
        deleteAccountBtn.addEventListener('click', () => deletePopup.classList.add('active'));
        if (closePopupBtn) closePopupBtn.addEventListener('click', () => deletePopup.classList.remove('active'));
        if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', () => deletePopup.classList.remove('active'));
        if (confirmDeleteBtn) {
            confirmDeleteBtn.addEventListener('click', () => {
                showNotification('Account deletion is not available in demo mode', 'error');
                deletePopup.classList.remove('active');
            });
        }
    }

    // Back to dashboard
    if (backToDashboard) {
        backToDashboard.addEventListener('click', () => {
            window.location.href = '/dashboard_worker/';
        });
    }

    // Document upload
    if (uploadDocBtn && documentFileInput) {
        uploadDocBtn.addEventListener('click', () => documentFileInput.click());
        documentFileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && docFileName) {
                docFileName.textContent = file.name;
                showNotification('Document selected', 'success');
            }
        });
    }
}

// ============================================
// SAVE PROFILE FUNCTION - MAIN FIX
// ============================================
async function saveProfile() {
    if (!validateAgeRestriction()) {
        showNotification(translations[currentLanguage].age_restriction || 'You must be 18 years or older', 'error');
        return;
    }

    // Disable save button and show loading state
    saveBtn.disabled = true;
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (translations[currentLanguage].saving || 'Saving...');

    try {
        // Create FormData object
        const formData = new FormData();
        formData.append('action', 'update_profile');
        
        // Personal Info
        formData.append('first_name', firstName ? firstName.value.trim() : '');
        formData.append('last_name', lastName ? lastName.value.trim() : '');
        formData.append('dob', dob ? dob.value : '');
        
        // Gender
        let selectedGender = '';
        genderRadios.forEach(radio => {
            if (radio.checked) selectedGender = radio.value;
        });
        formData.append('gender', selectedGender);
        
        // Professional Info
        formData.append('profession', profession ? profession.value : '');
        if (profession && profession.value === 'other' && otherProfession) {
            formData.append('other_profession', otherProfession.value.trim());
        }
        
        // Address
        formData.append('street', street ? street.value.trim() : '');
        formData.append('city', city ? city.value.trim() : '');
        formData.append('state', state ? state.value.trim() : '');
        formData.append('pincode', pincode ? pincode.value.trim() : '');
        formData.append('preferred_work_area', workArea ? workArea.value.trim() : '');

        // Password change (processed on same Save Changes action)
        formData.append('old_password', oldPassword ? oldPassword.value.trim() : '');
        formData.append('new_password', newPassword ? newPassword.value.trim() : '');
        formData.append('confirm_password', confirmPassword ? confirmPassword.value.trim() : '');
        
        // Profile photo
        formData.append('remove_profile_photo', removeProfilePhotoRequested ? 'true' : 'false');
        if (profilePhotoInput && profilePhotoInput.files[0]) {
            formData.append('profile_photo', profilePhotoInput.files[0]);
        }
        
        // Document
        if (documentFileInput && documentFileInput.files[0]) {
            formData.append('document_file', documentFileInput.files[0]);
            formData.append('document_type', docType ? docType.value : 'aadhar');
        }
        
        // Add CSRF token
        const csrfToken = getCSRFToken();
        if (csrfToken) {
            formData.append('csrfmiddlewaretoken', csrfToken);
        }
        
        console.log('Saving profile with data:');
        console.log('First Name:', formData.get('first_name'));
        console.log('Last Name:', formData.get('last_name'));
        console.log('Profession:', formData.get('profession'));
        console.log('City:', formData.get('city'));
        
        // Make the POST request
        const response = await fetch(window.location.href, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        });
        
        console.log('Response status:', response.status);
        
        const result = await response.json();
        console.log('Response data:', result);
        
        if (result.success) {
            showNotification(result.message, 'success');
            
            // Update window.workerData with new values
            if (window.workerData) {
                window.workerData.first_name = formData.get('first_name');
                window.workerData.last_name = formData.get('last_name');
                window.workerData.full_name = `${formData.get('first_name')} ${formData.get('last_name')}`;
                window.workerData.profession = profession.value === 'other' ? (otherProfession ? otherProfession.value : 'other') : profession.value;
                window.workerData.city = formData.get('city');
                window.workerData.state = formData.get('state');
                window.workerData.street = formData.get('street');
                window.workerData.pincode = formData.get('pincode');
                window.workerData.preferred_work_area = formData.get('preferred_work_area');
            }
            
            // Also update parent window data if this is opened from dashboard
            if (window.opener) {
                window.opener.workerData = window.workerData;
            }
            
            // Refresh page after 1.5 seconds
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            console.error('Save failed:', result.message);
            showNotification(result.message || 'Failed to update profile', 'error');
        }
    } catch (error) {
        console.error('Error saving profile:', error);
        showNotification(translations[currentLanguage].error_saving + ': ' + error.message, 'error');
    } finally {
        // Re-enable save button
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalText;
    }
}

// ============================================
// AGE FUNCTIONS
// ============================================
function calculateAge() {
    if (!dob || !dob.value) return;
    const birth = new Date(dob.value);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    if (ageText) ageText.textContent = age + ' years old';
    return age;
}

function validateAgeRestriction() {
    if (!dob || !dob.value) return true;
    const age = calculateAge();
    if (age < 18) {
        if (ageDisplay) ageDisplay.classList.add('error');
        if (ageText) ageText.innerHTML = `${age} years old <span style="color:#DC2626;">(Must be 18+)</span>`;
        return false;
    } else {
        if (ageDisplay) ageDisplay.classList.remove('error');
        return true;
    }
}

// ============================================
// PASSWORD STRENGTH
// ============================================
function updatePasswordStrength() {
    if (!newPassword) return;
    const val = newPassword.value;
    let strength = 0;
    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[a-z]/.test(val)) strength++;
    if (/\d/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    if (passwordStrength) passwordStrength.className = 'password-strength';
    
    if (val.length === 0) {
        if (strengthText) strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
    } else if (strength <= 2) {
        if (passwordStrength) passwordStrength.classList.add('weak');
        if (strengthText) strengthText.textContent = 'Weak';
    } else if (strength === 3) {
        if (passwordStrength) passwordStrength.classList.add('medium');
        if (strengthText) strengthText.textContent = 'Medium';
    } else if (strength === 4) {
        if (passwordStrength) passwordStrength.classList.add('strong');
        if (strengthText) strengthText.textContent = 'Strong';
    } else {
        if (passwordStrength) passwordStrength.classList.add('very-strong');
        if (strengthText) strengthText.textContent = 'Very Strong';
    }

    if (confirmPassword && confirmPassword.value.length > 0) {
        if (passwordMatch) passwordMatch.classList.toggle('visible', val === confirmPassword.value);
    } else {
        if (passwordMatch) passwordMatch.classList.remove('visible');
    }
}

// ============================================
// OTP HANDLING
// ============================================
function setupOtpHandling() {
    // Email OTP
    if (getEmailOtpBtn) {
        getEmailOtpBtn.addEventListener('click', async () => {
            const email = emailInput ? emailInput.value.trim() : '';
            if (!email) { showNotification('Email is required', 'error'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showNotification('Invalid email format', 'error'); return; }

            try {
                const formData = new FormData();
                formData.append('action', 'send_email_otp');
                formData.append('email', email);
                const csrfToken = getCSRFToken();
                if (csrfToken) formData.append('csrfmiddlewaretoken', csrfToken);

                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });
                const result = await response.json();
                if (result.success) {
                    if (emailDisplay) emailDisplay.classList.add('show');
                    if (emailOtpSection) emailOtpSection.classList.add('active');
                    if (getEmailOtpBtn) getEmailOtpBtn.disabled = true;
                    startEmailResendCountdown();
                    showNotification(result.message, 'success');
                } else {
                    showNotification(result.message, 'error');
                }
            } catch (error) {
                showNotification('Error sending OTP', 'error');
            }
        });
    }

    if (verifyEmailOtpBtn) {
        verifyEmailOtpBtn.addEventListener('click', async () => {
            const email = emailInput ? emailInput.value.trim() : '';
            const otp = emailOtpInput ? emailOtpInput.value.trim() : '';

            try {
                const formData = new FormData();
                formData.append('action', 'verify_email_otp');
                formData.append('email', email);
                formData.append('otp', otp);
                const csrfToken = getCSRFToken();
                if (csrfToken) formData.append('csrfmiddlewaretoken', csrfToken);

                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });
                const result = await response.json();
                if (result.success) {
                    if (emailStatus) emailStatus.innerHTML = '<i class="fas fa-check-circle"></i> Email Verified';
                    if (emailOtpSection) emailOtpSection.classList.remove('active');
                    if (emailDisplay) emailDisplay.classList.remove('show');
                    if (emailResendCountdown) clearInterval(emailResendCountdown);
                    showNotification(result.message, 'success');
                } else {
                    showNotification(result.message, 'error');
                }
            } catch (error) {
                showNotification('Error verifying OTP', 'error');
            }
        });
    }

    if (emailOtpInput) {
        emailOtpInput.addEventListener('input', () => {
            if (verifyEmailOtpBtn) verifyEmailOtpBtn.disabled = emailOtpInput.value.length !== 6;
        });
    }

    // Mobile OTP (similar)
    if (getMobileOtpBtn) {
        getMobileOtpBtn.addEventListener('click', async () => {
            const mobile = mobileInput ? mobileInput.value.trim() : '';
            if (!mobile) { showNotification('Mobile number is required', 'error'); return; }
            if (!/^[6-9]\d{9}$/.test(mobile)) { showNotification('Invalid mobile number', 'error'); return; }

            try {
                const formData = new FormData();
                formData.append('action', 'send_mobile_otp');
                formData.append('mobile', mobile);
                const csrfToken = getCSRFToken();
                if (csrfToken) formData.append('csrfmiddlewaretoken', csrfToken);

                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });
                const result = await response.json();
                if (result.success) {
                    if (mobileDisplay) mobileDisplay.classList.add('show');
                    if (mobileOtpSection) mobileOtpSection.classList.add('active');
                    if (getMobileOtpBtn) getMobileOtpBtn.disabled = true;
                    startMobileResendCountdown();
                    showNotification(result.message, 'success');
                } else {
                    showNotification(result.message, 'error');
                }
            } catch (error) {
                showNotification('Error sending OTP', 'error');
            }
        });
    }

    if (verifyMobileOtpBtn) {
        verifyMobileOtpBtn.addEventListener('click', async () => {
            const mobile = mobileInput ? mobileInput.value.trim() : '';
            const otp = mobileOtpInput ? mobileOtpInput.value.trim() : '';

            try {
                const formData = new FormData();
                formData.append('action', 'verify_mobile_otp');
                formData.append('mobile', mobile);
                formData.append('otp', otp);
                const csrfToken = getCSRFToken();
                if (csrfToken) formData.append('csrfmiddlewaretoken', csrfToken);

                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });
                const result = await response.json();
                if (result.success) {
                    if (mobileStatus) mobileStatus.innerHTML = '<i class="fas fa-check-circle"></i> Mobile Verified';
                    if (mobileOtpSection) mobileOtpSection.classList.remove('active');
                    if (mobileDisplay) mobileDisplay.classList.remove('show');
                    if (mobileResendCountdown) clearInterval(mobileResendCountdown);
                    showNotification(result.message, 'success');
                } else {
                    showNotification(result.message, 'error');
                }
            } catch (error) {
                showNotification('Error verifying OTP', 'error');
            }
        });
    }

    if (mobileOtpInput) {
        mobileOtpInput.addEventListener('input', () => {
            if (verifyMobileOtpBtn) verifyMobileOtpBtn.disabled = mobileOtpInput.value.length !== 6;
        });
    }
}

function startEmailResendCountdown() {
    if (emailResendCountdown) clearInterval(emailResendCountdown);
    emailResendTimeLeft = 60;
    if (resendEmailOtpBtn) resendEmailOtpBtn.disabled = true;
    
    emailResendCountdown = setInterval(() => {
        emailResendTimeLeft--;
        const base = translations[currentLanguage].resend_otp_60s || 'Resend OTP (60s)';
        if (emailResendText) emailResendText.textContent = base.replace('60s', `${emailResendTimeLeft}s`);
        if (emailResendTimeLeft <= 0) {
            clearInterval(emailResendCountdown);
            if (resendEmailOtpBtn) resendEmailOtpBtn.disabled = false;
            if (emailResendText) emailResendText.textContent = translations[currentLanguage].resend_otp_60s?.replace('60s', '') || 'Resend OTP';
        }
    }, 1000);
}

function startMobileResendCountdown() {
    if (mobileResendCountdown) clearInterval(mobileResendCountdown);
    mobileResendTimeLeft = 60;
    if (resendMobileOtpBtn) resendMobileOtpBtn.disabled = true;
    
    mobileResendCountdown = setInterval(() => {
        mobileResendTimeLeft--;
        const base = translations[currentLanguage].resend_otp_60s || 'Resend OTP (60s)';
        if (mobileResendText) mobileResendText.textContent = base.replace('60s', `${mobileResendTimeLeft}s`);
        if (mobileResendTimeLeft <= 0) {
            clearInterval(mobileResendCountdown);
            if (resendMobileOtpBtn) resendMobileOtpBtn.disabled = false;
            if (mobileResendText) mobileResendText.textContent = translations[currentLanguage].resend_otp_60s?.replace('60s', '') || 'Resend OTP';
        }
    }, 1000);
}

// ============================================
// CLEAR ALL FIELDS
// ============================================
function clearAllFields() {
    if (firstName) firstName.value = '';
    if (lastName) lastName.value = '';
    if (dob) dob.value = '';
    if (ageText) ageText.textContent = 'Select date';
    genderRadios.forEach(r => r.checked = false);
    if (emailInput) emailInput.value = '';
    if (mobileInput) mobileInput.value = '';
    if (oldPassword) oldPassword.value = '';
    if (newPassword) newPassword.value = '';
    if (confirmPassword) confirmPassword.value = '';
    if (workArea) workArea.value = '';
    if (street) street.value = '';
    if (city) city.value = '';
    if (state) state.value = '';
    if (pincode) pincode.value = '';
    if (passwordStrength) passwordStrength.className = 'password-strength';
    if (strengthText) strengthText.textContent = translations[currentLanguage].password_strength || 'Password Strength';
    if (passwordMatch) passwordMatch.classList.remove('visible');
    showNotification(translations[currentLanguage].fields_cleared || 'All fields cleared', 'info');
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(message, type = 'info') {
    if (!notifWrapper) return;
    
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
    notif.querySelector('.notification-close').addEventListener('click', () => notif.remove());
    setTimeout(() => notif.remove(), 4000);
}

// ============================================
// START
// ============================================
document.addEventListener('DOMContentLoaded', init);