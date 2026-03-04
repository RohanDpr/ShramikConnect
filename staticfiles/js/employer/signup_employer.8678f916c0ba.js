/**
 * Employer Signup Page - 5-Step Form
 * COMPLETE UPDATED VERSION WITH REAL EMAIL OTP VERIFICATION
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
        // Hindi translations
        'employer_signup': 'कर्मचारी पंजीकरण',
        'signup_subtitle': '5 आसान चरणों में अपना खाता बनाएं',
        'already_have_account': 'पहले से ही एक खाता है?',
        'login_here': 'यहाँ लॉगिन करें',
        
        // Progress Steps
        'step_personal': 'व्यक्तिगत',
        'step_security': 'सुरक्षा',
        'step_identity': 'पहचान',
        'step_preview': 'पूर्वावलोकन',
        'step_terms': 'शर्तें',
        
        // Step 1
        'personal_info': 'व्यक्तिगत जानकारी',
        'personal_info_subtitle': 'आरंभ करने के लिए अपने बुनियादी विवरण दर्ज करें',
        'take_photo': 'फोटो लें',
        'upload_photo': 'फोटो अपलोड करें',
        'first_name': 'पहला नाम *',
        'last_name': 'अंतिम नाम *',
        'enter_first_name': 'पहला नाम दर्ज करें',
        'enter_last_name': 'अंतिम नाम दर्ज करें',
        'date_of_birth': 'जन्म तिथि *',
        'select_date': 'आयु की गणना करने के लिए तिथि चुनें',
        'gender': 'लिंग *',
        'male': 'पुरुष',
        'female': 'महिला',
        'other': 'अन्य',
        'next': 'आगे',
        'back': 'वापस',
        
        // Step 2
        'security_details': 'सुरक्षा विवरण',
        'security_subtitle': 'अपना ईमेल, मोबाइल सत्यापित करें और पासवर्ड सेट करें',
        'email_verification': 'ईमेल सत्यापन',
        'enter_email': 'अपना ईमेल दर्ज करें',
        'get_otp': 'OTP प्राप्त करें',
        'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'अपना मोबाइल नंबर दर्ज करें',
        'otp_placeholder': 'XXXXXX',
        'verify_otp': 'सत्यापित करें',
        'email_not_verified': 'ईमेल सत्यापित नहीं',
        'mobile_not_verified': 'मोबाइल सत्यापित नहीं',
        'set_password': 'पासवर्ड सेट करें',
        'password': 'पासवर्ड *',
        'password_placeholder': 'न्यूनतम 8 वर्ण',
        'password_strength': 'पासवर्ड की मजबूती',
        'confirm_password': 'पासवर्ड की पुष्टि करें *',
        'confirm_password_placeholder': 'पासवर्ड पुनः दर्ज करें',
        'passwords_match': 'पासवर्ड मेल खाते हैं',
        'resend_otp_60s': 'OTP पुनः भेजें (60s)',
        
        // Step 3
        'identity_documents': 'पहचान और दस्तावेज़',
        'identity_subtitle': 'अपना पता और दस्तावेज़ प्रदान करें',
        'address': 'पूरा पता *',
        'street': 'सड़क',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'work_location': 'कार्य स्थान *',
        'locate_me': 'मेरी लोकेशन',
        'mark_location': 'स्थान चिन्हित करें',
        'selected_location': 'चयनित स्थान:',
        'work_location_hint': '"स्थान चिन्हित करें" पर क्लिक करें और नक्शे पर क्लिक करके सटीक कार्य स्थान चुनें',
        'document_upload': 'दस्तावेज़ अपलोड *',
        'aadhar_card': 'आधार कार्ड',
        'pan_card': 'पैन कार्ड',
        'upload_file': 'फाइल अपलोड करें',
        'no_document': 'कोई दस्तावेज़ अपलोड नहीं',
        
        // Step 4
        'preview_details': 'विवरण पूर्वावलोकन',
        'preview_subtitle': 'सबमिशन से पहले अपनी सभी जानकारी की समीक्षा करें',
        'profile_photo': 'प्रोफाइल फोटो',
        'email': 'ईमेल',
        'mobile': 'मोबाइल',
        'not_verified': 'सत्यापित नहीं',
        'verified': 'सत्यापित',
        
        // Step 5
        'terms_account': 'शर्तें और खाता निर्माण',
        'terms_subtitle': 'अपना खाता बनाने का अंतिम चरण',
        'agree_terms': 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं',
        'requirements_checklist': 'आवश्यकताएँ सूची',
        'req_age': 'उम्र 18 या उससे अधिक होनी चाहिए',
        'req_email': 'ईमेल सत्यापित होना चाहिए',
        'req_mobile': 'मोबाइल सत्यापित होना चाहिए',
        'req_document': 'दस्तावेज़ अपलोड होना चाहिए',
        'req_fields': 'सभी फ़ील्ड भरे होने चाहिए',
        'req_terms': 'शर्तों से सहमत होना चाहिए',
        'create_account': 'खाता बनाएं',
        'agree_terms_prefix': 'मैं ',
        'agree_terms_middle': ' और ',
        'terms_conditions': 'सेवा की शर्तों',
        'privacy_policy': 'गोपनीयता नीति',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        
        // Terms Popup
        'terms_conditions': 'शर्तें और नियम',
        'close': 'बंद करें',
        'important_terms': 'महत्वपूर्ण शर्तें और नियम',
        'term1': 'खाता बनाकर, आप हमारी सेवा की शर्तों से सहमत होते हैं',
        'term2': 'आपकी आयु कम से कम 18 वर्ष होनी चाहिए',
        'term3': 'आप खाते की सुरक्षा के लिए जिम्मेदार हैं',
        'term4': 'हम आपकी प्रोफाइल के आधार पर नौकरी अलर्ट भेज सकते हैं',
        'term5': 'सटीक और पूरी जानकारी प्रदान करें',
        'term6': 'हम नीतियों का उल्लंघन करने वाले खातों को समाप्त कर सकते हैं',
        'privacy_policy': 'गोपनीयता नीति हाइलाइट्स',
        'privacy1': 'हम बेहतर नौकरी मैच के लिए जानकारी एकत्र करते हैं',
        'privacy2': 'आपका डेटा एन्क्रिप्टेड और सुरक्षित है',
        'privacy3': 'हम सहमति के बिना जानकारी साझा नहीं करते',
        'privacy4': 'कभी भी डेटा हटाने का अनुरोध करें',
        'privacy5': 'कुकीज़ ब्राउजिंग अनुभव को बेहतर बनाती हैं',
        'full_terms': 'पूर्ण शर्तें और नियम पढ़ें',
        'full_privacy': 'पूर्ण गोपनीयता नीति पढ़ें',
        'timer_info': 'टाइमर समाप्त होने पर क्लोज बटन सक्षम होगा',
        'timer': 'टाइमर: {0} सेकंड शेष'
    },
    mr: {
        // Marathi translations
        'employer_signup': 'कर्मचारी नोंदणी',
        'signup_subtitle': '5 सोप्या पायरीत तुमचे खाते तयार करा',
        'already_have_account': 'आधीपासून खाते आहे?',
        'login_here': 'येथे लॉगिन करा',
        
        // Progress Steps
        'step_personal': 'वैयक्तिक',
        'step_security': 'सुरक्षा',
        'step_identity': 'ओळख',
        'step_preview': 'पूर्वावलोकन',
        'step_terms': 'अटी',
        
        // Step 1
        'personal_info': 'वैयक्तिक माहिती',
        'personal_info_subtitle': 'प्रारंभ करण्यासाठी तुमचे मूलभूत तपशील प्रविष्ट करा',
        'take_photo': 'फोटो काढा',
        'upload_photo': 'फोटो अपलोड करा',
        'first_name': 'पहिले नाव *',
        'last_name': 'आडनाव *',
        'enter_first_name': 'पहिले नाव प्रविष्ट करा',
        'enter_last_name': 'आडनाव प्रविष्ट करा',
        'date_of_birth': 'जन्मतारीख *',
        'select_date': 'वय मोजण्यासाठी तारीख निवडा',
        'gender': 'लिंग *',
        'male': 'पुरुष',
        'female': 'स्त्री',
        'other': 'इतर',
        'next': 'पुढे',
        'back': 'मागे',
        
        // Step 2
        'security_details': 'सुरक्षा तपशील',
        'security_subtitle': 'तुमचा ईमेल, मोबाइल सत्यापित करा आणि पासवर्ड सेट करा',
        'email_verification': 'ईमेल सत्यापन',
        'enter_email': 'तुमचा ईमेल प्रविष्ट करा',
        'get_otp': 'OTP मिळवा',
        'mobile_verification': 'मोबाइल सत्यापन',
        'enter_mobile': 'तुमचा मोबाइल नंबर प्रविष्ट करा',
        'otp_placeholder': 'XXXXXX',
        'verify_otp': 'सत्यापित करा',
        'email_not_verified': 'ईमेल सत्यापित नाही',
        'mobile_not_verified': 'मोबाइल सत्यापित नाही',
        'set_password': 'पासवर्ड सेट करा',
        'password': 'पासवर्ड *',
        'password_placeholder': 'किमान 8 वर्ण',
        'password_strength': 'पासवर्ड सामर्थ्य',
        'confirm_password': 'पासवर्डची पुष्टी करा *',
        'confirm_password_placeholder': 'पासवर्ड पुन्हा प्रविष्ट करा',
        'passwords_match': 'पासवर्ड जुळतात',
        'resend_otp_60s': 'OTP पुन्हा पाठवा (60s)',
        
        // Step 3
        'identity_documents': 'ओळख आणि दस्तऐवज',
        'identity_subtitle': 'तुमचा पत्ता आणि दस्तऐवज प्रदान करा',
        'address': 'संपूर्ण पत्ता *',
        'street': 'रस्ता',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'work_location': 'कार्यस्थळ *',
        'locate_me': 'माझी लोकेशन',
        'mark_location': 'स्थान चिन्हांकित करा',
        'selected_location': 'निवडलेले स्थान:',
        'work_location_hint': '"स्थान चिन्हांकित करा" वर क्लिक करा आणि नकाशावर क्लिक करून सटीक कार्यस्थळ निवडा',
        'document_upload': 'दस्तऐवज अपलोड *',
        'aadhar_card': 'आधार कार्ड',
        'pan_card': 'पॅन कार्ड',
        'upload_file': 'फाइल अपलोड करा',
        'no_document': 'दस्तऐवज अपलोड नाही',
        
        // Step 4
        'preview_details': 'तपशील पूर्वावलोकन',
        'preview_subtitle': 'सबमिशन करण्यापूर्वी सर्व माहितीचे पुनरावलोकन करा',
        'profile_photo': 'प्रोफाइल फोटो',
        'email': 'ईमेल',
        'mobile': 'मोबाइल',
        'not_verified': 'सत्यापित नाही',
        'verified': 'सत्यापित',
        
        // Step 5
        'terms_account': 'अटी आणि खाते निर्मिती',
        'terms_subtitle': 'तुमचे खाते तयार करण्याचा अंतिम चरण',
        'agree_terms': 'मी सेवा अटी आणि गोपनीयता धोरणाशी सहमत आहे',
        'requirements_checklist': 'आवश्यकता यादी',
        'req_age': 'वय १८ किंवा त्यापेक्षा जास्त असले पाहिजे',
        'req_email': 'ईमेल सत्यापित असले पाहिजे',
        'req_mobile': 'मोबाइल सत्यापित असले पाहिजे',
        'req_document': 'दस्तऐवज अपलोड असले पाहिजे',
        'req_fields': 'सर्व फील्ड भरलेले असावेत',
        'req_terms': 'अटींशी सहमत असले पाहिजे',
        'create_account': 'खाते तयार करा',
        'agree_terms_prefix': 'मी ',
        'agree_terms_middle': ' आणि ',
        'terms_conditions': 'सेवा अटी',
        'privacy_policy': 'गोपनीयता धोरण',
        
        // Settings
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'फिका',
        'dark': 'गडद',
        'system': 'सिस्टीम',
        
        // Terms Popup
        'terms_conditions': 'अटी आणि नियम',
        'close': 'बंद करा',
        'important_terms': 'महत्वाच्या अटी आणि नियम',
        'term1': 'खाते तयार करून, तुम्ही आमच्या सेवा अटींशी सहमत आहात',
        'term2': 'तुमचे वय किमान १८ वर्षे असले पाहिजे',
        'term3': 'तुम्ही खात्याच्या सुरक्षेसाठी जबाबदार आहात',
        'term4': 'आम्ही तुमच्या प्रोफाइलवर आधारित नोकरी अलर्ट पाठवू शकतो',
        'term5': 'अचूक आणि पूर्ण माहिती प्रदान करा',
        'term6': 'आम्ही धोरणांचे उल्लंघन करणारी खाती समाप्त करू शकतो',
        'privacy_policy': 'गोपनीयता धोरण हाइलाइट्स',
        'privacy1': 'आम्ही चांगल्या नोकरी मॅचसाठी माहिती गोळा करतो',
        'privacy2': 'तुमचा डेटा एन्क्रिप्टेड आणि सुरक्षित आहे',
        'privacy3': 'आम्ही संमतीशिवाय माहिती सामायिक करत नाही',
        'privacy4': 'कोणत्याही वेळी डेटा हटवण्याची विनंती करा',
        'privacy5': 'कुकीज ब्राउझिंग अनुभव सुधारतात',
        'full_terms': 'संपूर्ण अटी आणि नियम वाचा',
        'full_privacy': 'संपूर्ण गोपनीयता धोरण वाचा',
        'timer_info': 'टाइमर संपल्यावर क्लोज बटण सक्षम होईल',
        'timer': 'टाइमर: {0} सेकंद शिल्लक'
    }
};

// ============================================
// INITIALIZATION
// ============================================

function init() {
    console.log('Employer Signup Page Initialized');
    
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
// STEP 2: SECURITY - UPDATED WITH REAL OTP
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
 * Handle Get Email OTP button click - UPDATED with real API
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
 * Handle Get Mobile OTP button click - KEEPING DUMMY FOR NOW
 */
function handleGetMobileOtp() {
    const mobile = mobileInput.value.trim();
    
    if (!validateMobileInput()) {
        showNotification('Error', 'Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    userData.mobile = mobile;
    
    getMobileOtpBtn.disabled = true;
    const originalText = getMobileOtpBtn.innerHTML;
    getMobileOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending OTP...</span>';
    
    setTimeout(() => {
        console.log(`OTP sent to mobile: ${mobile}`);
        
        mobileOtpSection.classList.add('active');
        mobileOtpInput.value = '';
        mobileDisplay.textContent = `OTP sent to ${mobile}`;
        mobileDisplay.classList.add('show');
        
        getMobileOtpBtn.classList.add('hidden');
        
        startMobileResendCountdown();
        
        showNotification('OTP Sent!', 'OTP has been sent to your mobile number', 'success');
    }, 1500);
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
 * Handle Verify Email OTP button click - UPDATED with real API
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
 * Handle Verify Mobile OTP button click - KEEPING DUMMY FOR NOW
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
    
    setTimeout(() => {
        const isValid = enteredOtp === '654321';
        
        if (isValid) {
            userData.mobileVerified = true;
            
            mobileStatus.classList.add('verified');
            mobileStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Mobile Verified</span>';
            
            mobileOtpSection.classList.remove('active');
            mobileDisplay.classList.remove('show');
            
            if (mobileResendCountdown) {
                clearInterval(mobileResendCountdown);
                mobileResendCountdown = null;
            }
            
            showNotification('OTP Verified!', 'Your mobile number has been verified successfully', 'success');
            
            validateStep2();
        } else {
            showNotification('Error', 'Invalid OTP. Please try again', 'error');
            
            verifyMobileOtpBtn.disabled = false;
            verifyMobileOtpBtn.innerHTML = originalText;
            
            mobileOtpInput.value = '';
            validateMobileOtp();
        }
    }, 1500);
}

/**
 * Handle Resend Email OTP - UPDATED with real API
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
 * Handle Resend Mobile OTP - KEEPING DUMMY FOR NOW
 */
function handleResendMobileOtp() {
    resendMobileOtpBtn.disabled = true;
    const originalText = mobileResendText.innerHTML;
    mobileResendText.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    setTimeout(() => {
        console.log(`Resent OTP to mobile: ${userData.mobile}`);
        
        mobileOtpInput.value = '';
        verifyMobileOtpBtn.disabled = true;
        
        startMobileResendCountdown();
        
        showNotification('OTP Sent!', 'New OTP has been sent to your mobile', 'success');
    }, 1000);
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