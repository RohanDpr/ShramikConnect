/**
 * Worker Signup Page - 5-Step Form
 * COMPLETELY UPDATED VERSION WITH ALL FIXES
 * Fixed Issues:
 * 1. Password strength text language support
 * 2. Terms popup proper countdown (10 seconds)
 * 3. Terms links clickable
 * 4. Checkbox text visible
 * 5. "Already have account" language support
 * 6. Back button in Step 5 working
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
const profession = document.getElementById('profession');
const otherProfessionSection = document.getElementById('otherProfessionSection');
const otherProfession = document.getElementById('otherProfession');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pincode = document.getElementById('pincode');
const workArea = document.getElementById('workArea');
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
const previewProfession = document.getElementById('previewProfession');
const previewAddress = document.getElementById('previewAddress');
const previewWorkArea = document.getElementById('previewWorkArea');
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

// Login Link
const loginLinkTitle = document.querySelector('.link-title');
const loginLinkAction = document.querySelector('.link-action');

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
    profession: '',
    otherProfession: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    workArea: '',
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
    phone: /^[6-9]\d{9}$/, // Indian mobile numbers
    otp: /^\d{6}$/,
    pincode: /^\d{6}$/
};

// Dummy OTPs for demo
const DUMMY_EMAIL_OTP = '123456';
const DUMMY_MOBILE_OTP = '654321';

// ============================================
// TRANSLATION SYSTEM - UPDATED WITH ALL TEXTS
// ============================================

const translations = {
    en: {
        // Page Header
        'worker_signup': 'Worker Signup',
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
        'identity_subtitle': 'Provide your profession, address and documents',
        'profession': 'Profession *',
        'select_profession': 'Select your profession',
        'plumber': 'Plumber',
        'electrician': 'Electrician',
        'carpenter': 'Carpenter',
        'painter': 'Painter',
        'mason': 'Mason',
        'welder': 'Welder',
        'driver': 'Driver',
        'cleaner': 'Cleaner',
        'gardener': 'Gardener',
        'security_guard': 'Security Guard',
        'cook': 'Cook',
        'housekeeper': 'Housekeeper',
        'delivery_boy': 'Delivery Boy',
        'mechanic': 'Mechanic',
        'construction_worker': 'Construction Worker',
        'other_profession': 'Other',
        'specify_profession': 'Please specify your profession',
        'address': 'Full Address *',
        'street': 'Street',
        'city': 'City',
        'state': 'State',
        'pincode': 'Pincode',
        'preferred_work_area': 'Preferred Work Area *',
        'work_area_placeholder': 'in [City], [Area1, Area2...]',
        'work_area_hint': 'Example: "in Akola, Gita Nagar, Harihar Peth"',
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
        'worker_signup': 'कर्मचारी पंजीकरण',
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
        'identity_subtitle': 'अपना व्यवसाय, पता और दस्तावेज़ प्रदान करें',
        'profession': 'व्यवसाय *',
        'select_profession': 'अपना व्यवसाय चुनें',
        'plumber': 'प्लंबर',
        'electrician': 'इलेक्ट्रीशियन',
        'carpenter': 'बढ़ई',
        'painter': 'पेंटर',
        'mason': 'राजमिस्त्री',
        'welder': 'वेल्डर',
        'driver': 'ड्राइवर',
        'cleaner': 'सफाई कर्मचारी',
        'gardener': 'माली',
        'security_guard': 'सुरक्षा गार्ड',
        'cook': 'रसोइया',
        'housekeeper': 'हाउसकीपर',
        'delivery_boy': 'डिलीवरी बॉय',
        'mechanic': 'मैकेनिक',
        'construction_worker': 'निर्माण कार्यकर्ता',
        'other_profession': 'अन्य',
        'specify_profession': 'कृपया अपना व्यवसाय बताएं',
        'address': 'पूरा पता *',
        'street': 'सड़क',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'preferred_work_area': 'पसंदीदा कार्य क्षेत्र *',
        'work_area_placeholder': 'में [शहर], [क्षेत्र1, क्षेत्र2...]',
        'work_area_hint': 'उदाहरण: "अकोला में, गीता नगर, हरिहर पेठ"',
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
        'worker_signup': 'कामगार नोंदणी',
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
        'identity_subtitle': 'तुमचे व्यवसाय, पत्ता आणि दस्तऐवज प्रदान करा',
        'profession': 'व्यवसाय *',
        'select_profession': 'तुमचा व्यवसाय निवडा',
        'plumber': 'नळ बुवा',
        'electrician': 'इलेक्ट्रीशियन',
        'carpenter': 'सुतार',
        'painter': 'पेंटर',
        'mason': 'वळीव',
        'welder': 'वेल्डर',
        'driver': 'ड्रायव्हर',
        'cleaner': 'स्वच्छताकर्मी',
        'gardener': 'माळी',
        'security_guard': 'सुरक्षा गार्ड',
        'cook': 'स्वयंपाकी',
        'housekeeper': 'हाउसकीपर',
        'delivery_boy': 'डिलिव्हरी बॉय',
        'mechanic': 'मेकॅनिक',
        'construction_worker': 'बांधकाम कामगार',
        'other_profession': 'इतर',
        'specify_profession': 'कृपया तुमचा व्यवसाय सांगा',
        'address': 'संपूर्ण पत्ता *',
        'street': 'रस्ता',
        'city': 'शहर',
        'state': 'राज्य',
        'pincode': 'पिन कोड',
        'preferred_work_area': 'पसंतीचे कार्यक्षेत्र *',
        'work_area_placeholder': 'मध्ये [शहर], [क्षेत्र१, क्षेत्र२...]',
        'work_area_hint': 'उदाहरण: "अकोळा मध्ये, गीता नगर, हरिहर पेठ"',
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

/**
 * Initialize the application
 */
function init() {
    console.log('Worker Signup Page Initialized');
    
    // ✅ पहले preferences load करें
    loadPreferences();
    
    // ✅ फिर language apply करें (इससे dropdown button update हो जाएगा)
    applyLanguage(currentLanguage);
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Update progress bar
    updateProgressBar();
    
    // Initialize DOB restrictions
    initializeDOB();
    
    // Enable terms checkbox
    termsCheckbox.disabled = false;
}

/**
 * Load saved user preferences
 */
/**
 * Load saved user preferences
 */
function loadPreferences() {
    // Load theme preference
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    currentTheme = savedTheme;
    
    // Load language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // ✅ IMMEDIATELY update language buttons in dropdown
    updateLanguageButtons(savedLanguage);
    
    // Apply theme
    applyTheme(currentTheme);
}

/**
 * Update language buttons active state
 */
function updateLanguageButtons(lang) {
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/**
 * Initialize form validation
 */
function initializeFormValidation() {
    // Initial validation for step 1
    validateStep1();
    
    // Initialize password strength
    validatePassword();
}

/**
 * Initialize date of birth restrictions
 */
function initializeDOB() {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    
    dob.max = maxDate.toISOString().split('T')[0];
    dob.min = minDate.toISOString().split('T')[0];
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
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });
    
    // Theme switcher
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });
    
    // System theme change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
    
    // Step 1 Listeners
    capturePhotoBtn.addEventListener('click', handleCapturePhoto);
    uploadPhotoBtn.addEventListener('click', handleUploadPhoto);
    firstName.addEventListener('input', validateStep1);
    lastName.addEventListener('input', validateStep1);
    dob.addEventListener('change', handleDateOfBirthChange);
    genderInputs.forEach(input => {
        input.addEventListener('change', validateStep1);
    });
    nextStep1.addEventListener('click', goToStep2);
    
    // Step 2 Listeners
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
    
    // Step 3 Listeners
    profession.addEventListener('change', handleProfessionChange);
    otherProfession.addEventListener('input', validateStep3);
    street.addEventListener('input', validateStep3);
    city.addEventListener('input', validateStep3);
    state.addEventListener('input', validateStep3);
    pincode.addEventListener('input', validateStep3);
    workArea.addEventListener('input', validateStep3);
    documentTypeInputs.forEach(input => {
        input.addEventListener('change', validateStep3);
    });
    captureDocumentBtn.addEventListener('click', handleCaptureDocument);
    uploadDocumentBtn.addEventListener('click', handleUploadDocument);
    
    backStep3.addEventListener('click', () => goToStep(2));
    nextStep3.addEventListener('click', goToStep4);
    
    // Step 4 Listeners
    backStep4.addEventListener('click', () => goToStep(3));
    nextStep4.addEventListener('click', goToStep5);
    
      // Step 5 Listeners
    termsCheckbox.addEventListener('change', handleTermsCheckbox);
    
    // ✅ Direct event listeners for terms links
    document.addEventListener('click', function(event) {
        // Check if clicked element is a terms link
        if (event.target.classList.contains('terms-link')) {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            
            // Open in new tab
            window.open(href, '_blank');
            
            // Show notification (optional)
            if (href.includes('term_and_condition')) {
                showNotification('Terms & Conditions', 'Opening Terms & Conditions in new tab', 'info');
            } else if (href.includes('privacy_policy')) {
                showNotification('Privacy Policy', 'Opening Privacy Policy in new tab', 'info');
            }
        }
    });
    
    backStep5.addEventListener('click', () => goToStep(4));
    createAccountBtn.addEventListener('click', handleCreateAccount);
    
    // Terms popup close button
    closePopupBtn.addEventListener('click', closeTermsPopup);
    
    // Setup terms links listeners
    setupTermsLinksListeners();
}

/**
 * Setup event listeners for terms links
 */
function setupTermsLinksListeners() {
    // Checkbox label के अंदर के links
    const checkboxLabel = document.querySelector('.checkbox-label');
    if (checkboxLabel) {
        checkboxLabel.addEventListener('click', function(event) {
            if (event.target.tagName === 'A' && event.target.classList.contains('terms-link')) {
                event.preventDefault();
                const href = event.target.getAttribute('href');
                window.open(href, '_blank');
                
                // Show notification
                showNotification(
                    href === 't&c.html' ? 'Terms & Conditions' : 'Privacy Policy',
                    `Opening ${href === 't&c.html' ? 'Terms & Conditions' : 'Privacy Policy'} in new tab`,
                    'info'
                );
            }
        });
    }
    
    // Popup में links
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

/**
 * Toggle settings dropdown visibility
 */
function toggleSettingsDropdown() {
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    settingsIcon.setAttribute('aria-expanded', isActive);
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
function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // ✅ पहले buttons update करें
    updateLanguageButtons(lang);
    
    // फिर language apply करें
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
            let translatedText = translation[key];
            
            // Handle timer text with placeholder
            if (key === 'timer' && element.tagName === 'SPAN') {
                const timerValue = element.querySelector('#timerDisplay') ? element.querySelector('#timerDisplay').textContent : '10';
                translatedText = translatedText.replace('{0}', timerValue);
            }
            
            if (element.tagName === 'INPUT' && element.type === 'submit' || 
                element.tagName === 'BUTTON' || 
                element.tagName === 'OPTION') {
                element.textContent = translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translation[key] && element.placeholder !== undefined) {
            element.placeholder = translation[key];
        }
    });
    
    // Update OTP resend text if timer is running
    if (emailResendCountdown) {
        updateEmailResendText();
    }
    if (mobileResendCountdown) {
        updateMobileResendText();
    }
    
    // Update password strength text
    updatePasswordStrengthText();
}

// ============================================
// THEME FUNCTIONS
// ============================================

/**
 * Handle theme change
 */
function handleThemeChange(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    applyTheme(theme);
    
    // Update active button
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

/**
 * Apply theme to the page
 */
function applyTheme(theme) {
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Update body class
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${themeToApply}-theme`);
    
    // Update active button in dropdown
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

/**
 * Handle system theme change
 */
function handleSystemThemeChange(event) {
    if (currentTheme === 'system') {
        applyTheme('system');
    }
}

// ============================================
// STEP NAVIGATION FUNCTIONS
// ============================================

/**
 * Navigate to specific step - UPDATED FOR SMOOTHER TRANSITIONS
 */
function goToStep(stepNumber) {
    // Validate current step before leaving
    if (stepNumber > currentStep) {
        if (!validateCurrentStep()) {
            showValidationError();
            return;
        }
    }
    
    // ✅ Smooth transition effect
    const formContainer = document.querySelector('.form-container');
    formContainer.style.opacity = '0.7';
    formContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        // Hide all steps
        step1.classList.remove('active');
        step2.classList.remove('active');
        step3.classList.remove('active');
        step4.classList.remove('active');
        step5.classList.remove('active');
        
        // Show target step
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
        
        // Update progress bar
        updateProgressBar();
        
        // ✅ Restore form container
        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateY(0)';
        
        // Scroll to top of form
        document.querySelector('.form-container').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
    }, 150); // ✅ Short delay for smooth transition
}

/**
 * Update progress bar
 */
function updateProgressBar() {
    // Update step completion
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
        } else if (stepNumber < currentStep) {
            step.classList.add('completed');
        }
    });
    
    // Update progress line
    const progressPercentage = ((currentStep - 1) / 4) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

/**
 * Validate current step before proceeding
 */
function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        case 4:
            return true; // Preview step doesn't need validation
        case 5:
            return validateStep5();
        default:
            return false;
    }
}

/**
 * Show validation error message
 */
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

/**
 * Handle profile photo capture
 */
function handleCapturePhoto() {
    showNotification('Camera Access', 'Camera access would be requested in a real application. For demo, please use upload photo option.', 'info');
    
    setTimeout(() => {
        handleUploadPhoto();
    }, 1000);
}

/**
 * Handle profile photo upload
 */
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

/**
 * Handle date of birth change
 */
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

/**
 * Validate step 1
 */
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

/**
 * Go to step 2
 */
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
// STEP 2: SECURITY
// ============================================

/**
 * Validate email input
 */
function validateEmailInput() {
    const value = emailInput.value.trim();
    const isValid = validationPatterns.email.test(value);
    
    getEmailOtpBtn.disabled = !isValid || userData.emailVerified;
    
    return isValid;
}

/**
 * Validate mobile input
 */
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
    
    setTimeout(() => {
        console.log(`OTP sent to email: ${email}`);
        
        emailOtpSection.classList.add('active');
        emailOtpInput.value = '';
        emailDisplay.textContent = `OTP sent to ${email}`;
        emailDisplay.classList.add('show');
        
        getEmailOtpBtn.classList.add('hidden');
        
        startEmailResendCountdown();
        
        showNotification('OTP Sent!', 'OTP has been sent to your email address', 'success');
    }, 1500);
}

/**
 * Handle Get Mobile OTP button click
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

/**
 * Start email resend countdown
 */
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

/**
 * Start mobile resend countdown
 */
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

/**
 * Update email resend button text
 */
function updateEmailResendText() {
    const translation = translations[currentLanguage] || translations.en;
    emailResendText.textContent = translation.resend_otp_60s.replace('60s', `${emailResendTimeLeft}s`);
}

/**
 * Update mobile resend button text
 */
function updateMobileResendText() {
    const translation = translations[currentLanguage] || translations.en;
    mobileResendText.textContent = translation.resend_otp_60s.replace('60s', `${mobileResendTimeLeft}s`);
}

/**
 * Validate email OTP
 */
function validateEmailOtp() {
    const value = emailOtpInput.value.trim();
    const isValid = validationPatterns.otp.test(value);
    verifyEmailOtpBtn.disabled = !isValid;
    return isValid;
}

/**
 * Validate mobile OTP
 */
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
    
    setTimeout(() => {
        const isValid = enteredOtp === DUMMY_EMAIL_OTP;
        
        if (isValid) {
            userData.emailVerified = true;
            
            emailStatus.classList.add('verified');
            emailStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Email Verified</span>';
            
            emailOtpSection.classList.remove('active');
            emailDisplay.classList.remove('show');
            
            if (emailResendCountdown) {
                clearInterval(emailResendCountdown);
                emailResendCountdown = null;
            }
            
            showNotification('OTP Verified!', 'Your email has been verified successfully', 'success');
            
            validateStep2();
        } else {
            showNotification('Error', 'Invalid OTP. Please try again', 'error');
            
            verifyEmailOtpBtn.disabled = false;
            verifyEmailOtpBtn.innerHTML = originalText;
            
            emailOtpInput.value = '';
            validateEmailOtp();
        }
    }, 1500);
}

/**
 * Handle Verify Mobile OTP button click
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
        const isValid = enteredOtp === DUMMY_MOBILE_OTP;
        
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
 * Handle Resend Email OTP
 */
function handleResendEmailOtp() {
    resendEmailOtpBtn.disabled = true;
    const originalText = emailResendText.innerHTML;
    emailResendText.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    setTimeout(() => {
        console.log(`Resent OTP to email: ${userData.email}`);
        
        emailOtpInput.value = '';
        verifyEmailOtpBtn.disabled = true;
        
        startEmailResendCountdown();
        
        showNotification('OTP Sent!', 'New OTP has been sent to your email', 'success');
    }, 1000);
}

/**
 * Handle Resend Mobile OTP
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

/**
 * Toggle password visibility
 */
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

/**
 * Update password strength text based on language
 */
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

/**
 * Validate password strength
 */
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

/**
 * Validate step 2
 */
function validateStep2() {
    const isEmailVerified = userData.emailVerified;
    const isMobileVerified = userData.mobileVerified;
    const isPasswordValid = password.value.length >= 8 && password.value === confirmPassword.value;
    
    const isValid = isEmailVerified && isMobileVerified && isPasswordValid;
    nextStep2.disabled = !isValid;
    
    return isValid;
}

/**
 * Go to step 3
 */
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

/**
 * Handle profession change
 */
function handleProfessionChange() {
    const selectedValue = profession.value;
    userData.profession = selectedValue;
    
    if (selectedValue === 'other') {
        otherProfessionSection.classList.add('active');
        userData.otherProfession = otherProfession.value.trim();
    } else {
        otherProfessionSection.classList.remove('active');
        userData.otherProfession = '';
    }
    
    validateStep3();
}

/**
 * Validate step 3
 */
function validateStep3() {
    userData.profession = profession.value;
    if (profession.value === 'other') {
        userData.otherProfession = otherProfession.value.trim();
    }
    
    userData.street = street.value.trim();
    userData.city = city.value.trim();
    userData.state = state.value.trim();
    userData.pincode = pincode.value.trim();
    
    userData.workArea = workArea.value.trim();
    
    const selectedDocument = Array.from(documentTypeInputs).find(input => input.checked);
    userData.documentType = selectedDocument ? selectedDocument.value : '';
    
    const isPincodeValid = userData.pincode === '' || validationPatterns.pincode.test(userData.pincode);
    
    const isValid = 
        userData.profession !== '' &&
        (userData.profession !== 'other' || userData.otherProfession !== '') &&
        userData.street !== '' &&
        userData.city !== '' &&
        userData.state !== '' &&
        userData.pincode !== '' &&
        isPincodeValid &&
        userData.workArea !== '' &&
        userData.documentType !== '' &&
        userData.documentFile !== null;
    
    nextStep3.disabled = !isValid;
    return isValid;
}

/**
 * Handle document capture
 */
function handleCaptureDocument() {
    showNotification('Document Capture', 'Camera access would be requested to capture document. For demo, please use upload file option.', 'info');
    
    setTimeout(() => {
        handleUploadDocument();
    }, 1000);
}

/**
 * Handle document upload
 */
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

/**
 * Go to step 4
 */
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

/**
 * Update preview with user data
 */
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
    
    let professionText = '';
    if (userData.profession === 'other') {
        professionText = userData.otherProfession;
    } else if (userData.profession) {
        const option = document.querySelector(`#profession option[value="${userData.profession}"]`);
        professionText = option ? option.textContent : userData.profession;
    }
    previewProfession.textContent = professionText || 'Not provided';
    
    previewAddress.textContent = `${userData.street}, ${userData.city}, ${userData.state} - ${userData.pincode}`;
    
    previewWorkArea.textContent = userData.workArea || 'Not provided';
    
    const documentType = userData.documentType === 'aadhar' ? 'Aadhar Card' : 
                        userData.documentType === 'pan' ? 'Pan Card' : 'Document';
    previewDocument.textContent = userData.documentFile ? 
        `${documentType} uploaded` : 'Not uploaded';
}

/**
 * Go to step 5
 */
function goToStep5() {
    goToStep(5);
}

// ============================================
// STEP 5: TERMS & CREATE ACCOUNT
// ============================================

/**
 * Handle checkbox change - SIMPLE VERSION
 */
function handleTermsCheckbox(event) {
    // अगर checkbox check किया जा रहा है
    if (termsCheckbox.checked) {
        showTermsPopup();
    }
    
    validateStep5();
}

/**
 * Show terms and conditions popup - SIMPLE FIX
 */
function showTermsPopup() {
    // 1. Popup show करो
    termsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 2. Close button को disabled करो
    closePopupBtn.disabled = true;
    
    // 3. Countdown text को reset करो
    termsPopupCountdown = 10;
    countdownElement.textContent = termsPopupCountdown;
    timerDisplay.textContent = termsPopupCountdown;
    
    // 4. Close button text update करो
    const translation = translations[currentLanguage] || translations.en;
    closePopupBtn.innerHTML = `<span>${translation.close}</span> (<span id="countdown">${termsPopupCountdown}</span>s)`;
    
    // 5. Timer start करो
    startTermsPopupCountdown();
}

/**
 * Start terms popup countdown - SIMPLE FIX
 */
function startTermsPopupCountdown() {
    // 1. पहले का timer clear करो
    if (termsPopupTimer) {
        clearInterval(termsPopupTimer);
        termsPopupTimer = null;
    }
    
    // 2. नया timer start करो
    termsPopupTimer = setInterval(() => {
        termsPopupCountdown--;
        
        // 3. DOM elements को fresh लो (important!)
        const freshCountdown = document.getElementById('countdown');
        const freshTimerDisplay = document.getElementById('timerDisplay');
        const freshCloseBtn = document.getElementById('closePopupBtn');
        
        // 4. Update countdown display
        if (freshCountdown) freshCountdown.textContent = termsPopupCountdown;
        if (freshTimerDisplay) freshTimerDisplay.textContent = termsPopupCountdown;
        
        // 5. Timer text update
        const translation = translations[currentLanguage] || translations.en;
        const timerTextElements = document.querySelectorAll('[data-i18n="timer"]');
        timerTextElements.forEach(el => {
            el.textContent = translation.timer.replace('{0}', termsPopupCountdown);
        });
        
        // 6. जब timer 0 हो जाए
        if (termsPopupCountdown <= 0) {
            clearInterval(termsPopupTimer);
            termsPopupTimer = null;
            
            // 7. Close button enable करो
            if (freshCloseBtn) {
                freshCloseBtn.disabled = false;
                freshCloseBtn.innerHTML = `<span>${translation.close}</span>`;
            }
        }
    }, 1000);
}

/**
 * Update terms popup countdown display
 */
function updateTermsPopupCountdown() {
    countdownElement.textContent = termsPopupCountdown;
    timerDisplay.textContent = termsPopupCountdown;
    
    // Update timer text with translation
    const timerElements = document.querySelectorAll('[data-i18n="timer"]');
    timerElements.forEach(element => {
        const translation = translations[currentLanguage] || translations.en;
        element.textContent = translation.timer.replace('{0}', termsPopupCountdown);
    });
}

/**
 * Close terms popup - SIMPLE VERSION
 */
function closeTermsPopup() {
    if (closePopupBtn.disabled) return;
    
    termsPopup.classList.remove('active');
    document.body.style.overflow = '';
    
    validateStep5();
}

/**
 * Validate step 5
 */
function validateStep5() {
    // Update requirements checklist
    updateRequirementsChecklist();
    
    // Check all requirements
    const isAgeValid = userData.age >= 18;
    const isEmailVerified = userData.emailVerified;
    const isMobileVerified = userData.mobileVerified;
    const isDocumentUploaded = userData.documentFile !== null;
    const isAllFieldsFilled = 
        userData.firstName && userData.lastName && userData.gender &&
        userData.profession && userData.street && userData.city &&
        userData.state && userData.pincode && userData.workArea;
    const isTermsChecked = termsCheckbox.checked;
    
    const allValid = isAgeValid && isEmailVerified && isMobileVerified && 
                     isDocumentUploaded && isAllFieldsFilled && isTermsChecked;
    
    // Enable/disable create account button
    createAccountBtn.disabled = !allValid;
    
    return allValid;
}

/**
 * Update requirements checklist
 */
function updateRequirementsChecklist() {
    // Age requirement
    reqAge.classList.toggle('checked', userData.age >= 18);
    
    // Email verification
    reqEmail.classList.toggle('checked', userData.emailVerified);
    
    // Mobile verification
    reqMobile.classList.toggle('checked', userData.mobileVerified);
    
    // Document upload
    reqDocument.classList.toggle('checked', userData.documentFile !== null);
    
    // All fields filled
    const isAllFieldsFilled = 
        userData.firstName && userData.lastName && userData.gender &&
        userData.profession && userData.street && userData.city &&
        userData.state && userData.pincode && userData.workArea;
    reqFields.classList.toggle('checked', isAllFieldsFilled);
    
    // Terms agreement
    reqTerms.classList.toggle('checked', termsCheckbox.checked);
}

/**
 * Handle create account button click
 */
function handleCreateAccount() {
    if (createAccountBtn.disabled) {
        return;
    }
    
    // Show terms error if checkbox not checked
    if (!termsCheckbox.checked) {
        showNotification('Error', 'You must agree to the Terms & Conditions', 'error');
        return;
    }
    
    // Disable button and show loading
    createAccountBtn.disabled = true;
    const originalText = createAccountBtn.innerHTML;
    createAccountBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Creating Account...</span>';
    
    // Simulate API call to create account
    setTimeout(() => {
        // Show success notification
        showNotification('Account Created!', 'Your account has been created successfully. Redirecting to login...', 'success');
        
        // Reset button
        createAccountBtn.disabled = false;
        createAccountBtn.innerHTML = originalText;
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login_worker.html';
        }, 2000);
    }, 2000);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

/**
 * Show notification with different types
 */
function showNotification(title, message, type = 'info') {
    // Create notification container if it doesn't exist
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles for notifications
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
                background: linear-gradient(135deg, #4362C9 0%, #2A4AB3 100%);
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
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Set icon based on type
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
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
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
    }, 300);
}

// ============================================
// INITIALIZE APPLICATION
// ============================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Apply system theme on load if set to system
if (currentTheme === 'system') {
    handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });
}