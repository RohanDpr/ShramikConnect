/**
 * Worker Change Password Page - JavaScript
 * Real implementation: DB check → OTP via email/SMS → password update
 * Blue theme (#4362C9)
 */

// ── DOM Elements ──────────────────────────────────────────────────────────────
const settingsIcon      = document.getElementById('settingsIcon');
const settingsDropdown  = document.getElementById('settingsDropdown');
const languageOptions   = document.querySelectorAll('.language-option');
const themeOptions      = document.querySelectorAll('.theme-option');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const contactInput  = document.getElementById('contactInput');
const getOtpBtn     = document.getElementById('getOtpBtn');

const backToStep1   = document.getElementById('backToStep1');
const otpMessage    = document.getElementById('otpMessage');
const otpInput      = document.getElementById('otpInput');
const verifyOtpBtn  = document.getElementById('verifyOtpBtn');
const otpTimer      = document.getElementById('otpTimer');
const timerDisplay  = document.getElementById('timerDisplay');
const resendOtpBtn  = document.getElementById('resendOtpBtn');
const resendText    = document.getElementById('resendText');

const backToStep2        = document.getElementById('backToStep2');
const newPassword        = document.getElementById('newPassword');
const confirmPassword    = document.getElementById('confirmPassword');
const toggleNewPassword  = document.getElementById('toggleNewPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordStrength   = document.getElementById('passwordStrength');
const passwordMatch      = document.getElementById('passwordMatch');
const updatePasswordBtn  = document.getElementById('updatePasswordBtn');

// ── State ─────────────────────────────────────────────────────────────────────
let currentStep     = 1;
let currentLanguage = 'en';
let currentTheme    = 'light';
let otpCountdown    = null;
let otpTimeLeft     = 60;
let resendCountdown = null;
let resendTimeLeft  = 60;
let userContact     = '';   // actual email or phone entered
let contactType     = '';   // 'email' | 'phone'

// ── Validation ────────────────────────────────────────────────────────────────
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;           // Indian 10-digit mobile
const otpRegex   = /^\d{6}$/;

// ── i18n ──────────────────────────────────────────────────────────────────────
const translations = {
    en: {
        change_password: 'Change Password', secure_password_change: 'Change Your Password',
        change_password_instruction: 'Enter your registered email or phone number to receive OTP',
        email_phone: 'Email or Phone Number', email_phone_placeholder: 'Email or phone',
        get_otp: 'Get OTP', enter_registered_contact: 'Enter registered email or phone',
        security_notice: 'For security reasons, we verify your identity before allowing password change.',
        back: 'Back', enter_otp: 'Enter OTP', otp_sent: 'OTP sent to your contact',
        enter_otp_label: 'Enter OTP', otp_placeholder: 'XXXXXX',
        enter_6digit_otp: 'Enter 6-digit OTP received', verify_otp: 'Verify OTP',
        didnt_receive_otp: "Didn't receive OTP?", resend_otp_60s: 'Resend OTP (60s)',
        set_new_password: 'Set New Password', password_requirements: 'Password Requirements:',
        min_8_chars: 'Minimum 8 characters', new_password_label: 'New Password',
        enter_new_password: 'Enter new password', password_strength: 'Password Strength',
        confirm_password_label: 'Confirm Password', re_enter_password: 'Re-enter password',
        passwords_match: 'Passwords match',
        password_security_note: 'Your new password must be strong and unique.',
        update_password: 'Update Password',
        cant_access: "Can't access this email/phone?", try_another_method: 'Try another recovery method',
        language: 'Language', theme: 'Theme', light: 'Light', dark: 'Dark', system: 'System',
        // notifications
        not_found_email: 'No worker account found with this email.',
        not_found_phone: 'No worker account found with this phone number.',
        invalid_contact: 'Enter a valid email or 10-digit phone number.',
        sending_otp: 'Sending OTP...',
        otp_sent_email: 'OTP has been sent to your email address.',
        otp_sent_phone: 'OTP has been sent to your phone number via SMS.',
        verifying: 'Verifying...',
        otp_verified: 'OTP Verified!', otp_verified_msg: 'Your identity has been verified successfully.',
        invalid_otp: 'Invalid OTP. Please try again.',
        updating: 'Updating Password...',
        password_updated: 'Password Updated!', password_updated_msg: 'Your password has been changed successfully.',
    },
    hi: {
        change_password: 'पासवर्ड बदलें', secure_password_change: 'अपना पासवर्ड बदलें',
        change_password_instruction: 'OTP प्राप्त करने के लिए अपना पंजीकृत ईमेल या फोन नंबर दर्ज करें',
        email_phone: 'ईमेल या फोन नंबर', email_phone_placeholder: 'ईमेल या फोन',
        get_otp: 'OTP प्राप्त करें', enter_registered_contact: 'पंजीकृत ईमेल या फोन दर्ज करें',
        security_notice: 'सुरक्षा कारणों से, हम पासवर्ड बदलने की अनुमति देने से पहले आपकी पहचान सत्यापित करते हैं।',
        back: 'वापस', enter_otp: 'OTP दर्ज करें', otp_sent: 'OTP आपके संपर्क पर भेजा गया',
        enter_otp_label: 'OTP दर्ज करें', otp_placeholder: 'XXXXXX',
        enter_6digit_otp: 'प्राप्त 6-अंकीय OTP दर्ज करें', verify_otp: 'OTP सत्यापित करें',
        didnt_receive_otp: 'OTP प्राप्त नहीं हुआ?', resend_otp_60s: 'OTP पुनः भेजें (60s)',
        set_new_password: 'नया पासवर्ड सेट करें', password_requirements: 'पासवर्ड आवश्यकताएँ:',
        min_8_chars: 'न्यूनतम 8 वर्ण', new_password_label: 'नया पासवर्ड',
        enter_new_password: 'नया पासवर्ड दर्ज करें', password_strength: 'पासवर्ड की मजबूती',
        confirm_password_label: 'पासवर्ड की पुष्टि करें', re_enter_password: 'पासवर्ड पुनः दर्ज करें',
        passwords_match: 'पासवर्ड मेल खाते हैं',
        password_security_note: 'आपका नया पासवर्ड मजबूत और अद्वितीय होना चाहिए।',
        update_password: 'पासवर्ड अपडेट करें',
        cant_access: 'इस ईमेल/फोन तक पहुंच नहीं हो सकती?', try_another_method: 'दूसरी पुनर्प्राप्ति विधि आज़माएं',
        language: 'भाषा', theme: 'थीम', light: 'हल्का', dark: 'गहरा', system: 'सिस्टम',
        not_found_email: 'इस ईमेल से कोई श्रमिक खाता नहीं मिला।',
        not_found_phone: 'इस फोन नंबर से कोई श्रमिक खाता नहीं मिला।',
        invalid_contact: 'मान्य ईमेल या 10-अंकीय फोन नंबर दर्ज करें।',
        sending_otp: 'OTP भेजा जा रहा है...', otp_sent_email: 'OTP आपके ईमेल पते पर भेजा गया है।',
        otp_sent_phone: 'OTP SMS के माध्यम से आपके फोन नंबर पर भेजा गया है।',
        verifying: 'सत्यापित किया जा रहा है...',
        otp_verified: 'OTP सत्यापित!', otp_verified_msg: 'आपकी पहचान सफलतापूर्वक सत्यापित हो गई।',
        invalid_otp: 'अमान्य OTP। कृपया पुनः प्रयास करें।',
        updating: 'पासवर्ड अपडेट किया जा रहा है...',
        password_updated: 'पासवर्ड अपडेट!', password_updated_msg: 'आपका पासवर्ड सफलतापूर्वक बदल दिया गया है।',
    },
    mr: {
        change_password: 'पासवर्ड बदला', secure_password_change: 'तुमचा पासवर्ड बदला',
        change_password_instruction: 'OTP प्राप्त करण्यासाठी तुमचा नोंदणीकृत ईमेल किंवा फोन नंबर प्रविष्ट करा',
        email_phone: 'ईमेल किंवा फोन नंबर', email_phone_placeholder: 'ईमेल किंवा फोन',
        get_otp: 'OTP मिळवा', enter_registered_contact: 'नोंदणीकृत ईमेल किंवा फोन प्रविष्ट करा',
        security_notice: 'सुरक्षेच्या कारणांसाठी, आम्ही पासवर्ड बदलण्याची परवानगी देण्यापूर्वी तुमची ओळख सत्यापित करतो.',
        back: 'मागे', enter_otp: 'OTP प्रविष्ट करा', otp_sent: 'OTP तुमच्या संपर्कावर पाठवला',
        enter_otp_label: 'OTP प्रविष्ट करा', otp_placeholder: 'XXXXXX',
        enter_6digit_otp: 'प्राप्त 6-अंकीय OTP प्रविष्ट करा', verify_otp: 'OTP सत्यापित करा',
        didnt_receive_otp: 'OTP प्राप्त झाला नाही?', resend_otp_60s: 'OTP पुन्हा पाठवा (60s)',
        set_new_password: 'नवीन पासवर्ड सेट करा', password_requirements: 'पासवर्ड आवश्यकता:',
        min_8_chars: 'किमान 8 वर्ण', new_password_label: 'नवीन पासवर्ड',
        enter_new_password: 'नवीन पासवर्ड प्रविष्ट करा', password_strength: 'पासवर्ड सामर्थ्य',
        confirm_password_label: 'पासवर्डची पुष्टी करा', re_enter_password: 'पासवर्ड पुन्हा प्रविष्ट करा',
        passwords_match: 'पासवर्ड जुळतात',
        password_security_note: 'तुमचा नवीन पासवर्ड मजबूत आणि अद्वितीय असावा.',
        update_password: 'पासवर्ड अपडेट करा',
        cant_access: 'या ईमेल/फोनवर प्रवेश मिळू शकत नाही?', try_another_method: 'दुसरी पुनर्प्राप्ती पद्धत वापरा',
        language: 'भाषा', theme: 'थीम', light: 'फिका', dark: 'गडद', system: 'सिस्टीम',
        not_found_email: 'या ईमेलसह कोणतेही कामगार खाते सापडले नाही.',
        not_found_phone: 'या फोन नंबरसह कोणतेही कामगार खाते सापडले नाही.',
        invalid_contact: 'वैध ईमेल किंवा 10-अंकी फोन नंबर प्रविष्ट करा.',
        sending_otp: 'OTP पाठवत आहे...', otp_sent_email: 'OTP तुमच्या ईमेल पत्त्यावर पाठवला गेला आहे.',
        otp_sent_phone: 'OTP SMS द्वारे तुमच्या फोन नंबरवर पाठवला गेला आहे.',
        verifying: 'सत्यापित करत आहे...',
        otp_verified: 'OTP सत्यापित!', otp_verified_msg: 'तुमची ओळख यशस्वीरित्या सत्यापित झाली.',
        invalid_otp: 'अवैध OTP. कृपया पुन्हा प्रयत्न करा.',
        updating: 'पासवर्ड अपडेट करत आहे...',
        password_updated: 'पासवर्ड अपडेट!', password_updated_msg: 'तुमचा पासवर्ड यशस्वीरित्या बदलला गेला आहे.',
    }
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function t(key) { return (translations[currentLanguage] || translations.en)[key] || key; }

function getCookie(name) {
    if (!document.cookie) return null;
    for (const c of document.cookie.split(';')) {
        const part = c.trim();
        if (part.startsWith(name + '=')) return decodeURIComponent(part.slice(name.length + 1));
    }
    return null;
}

async function apiPost(body) {
    const res = await fetch('/change_password_worker/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRFToken': getCookie('csrftoken'), 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify(body)
    });
    return { res, data: await res.json() };
}

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
    loadPreferences();
    setupEventListeners();
    validateContactInput();
    validateOtpInput();
    checkPasswordMatch();
}

function loadPreferences() {
    setTheme(localStorage.getItem('preferredTheme') || 'light');
    setLanguage(localStorage.getItem('preferredLanguage') || 'en');
    updateActiveButtons();
}

function updateActiveButtons() {
    languageOptions.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLanguage));
    themeOptions.forEach(b => b.classList.toggle('active', b.dataset.theme === currentTheme));
}

// ── Event Listeners ───────────────────────────────────────────────────────────
function setupEventListeners() {
    settingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    languageOptions.forEach(b => b.addEventListener('click', handleLanguageChange));
    themeOptions.forEach(b => b.addEventListener('click', handleThemeChange));
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);

    contactInput.addEventListener('input', validateContactInput);
    getOtpBtn.addEventListener('click', handleGetOtp);

    backToStep1.addEventListener('click', () => goToStep(1));
    otpInput.addEventListener('input', validateOtpInput);
    verifyOtpBtn.addEventListener('click', handleVerifyOtp);
    resendOtpBtn.addEventListener('click', handleResendOtp);

    backToStep2.addEventListener('click', () => goToStep(2));
    toggleNewPassword.addEventListener('click', () => togglePasswordVisibility(newPassword, toggleNewPassword));
    toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility(confirmPassword, toggleConfirmPassword));
    newPassword.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', checkPasswordMatch);
    updatePasswordBtn.addEventListener('click', handleUpdatePassword);
}

// ── Settings ──────────────────────────────────────────────────────────────────
function toggleSettingsDropdown() {
    const active = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !active);
    settingsIcon.setAttribute('aria-expanded', active ? 'true' : 'false');
}
function closeSettingsOnClickOutside(e) {
    if (!settingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) {
        settingsDropdown.classList.remove('active');
        settingsDropdown.setAttribute('aria-hidden', 'true');
        settingsIcon.setAttribute('aria-expanded', 'false');
    }
}

// ── Step Navigation ───────────────────────────────────────────────────────────
function goToStep(n) {
    [step1, step2, step3].forEach(s => s.classList.remove('active'));
    if (n === 1) { step1.classList.add('active'); currentStep = 1; }
    else if (n === 2) { step2.classList.add('active'); currentStep = 2; startOtpTimer(); }
    else if (n === 3) { step3.classList.add('active'); currentStep = 3; stopOtpTimer(); }
}

// ── Step 1: Get OTP ───────────────────────────────────────────────────────────
function validateContactInput() {
    const val = contactInput.value.trim();
    const valid = emailRegex.test(val) || phoneRegex.test(val.replace(/\D/g, ''));
    getOtpBtn.disabled = !valid;
    return valid;
}

async function handleGetOtp() {
    const val = contactInput.value.trim();
    if (!validateContactInput()) {
        showNotification('Error', t('invalid_contact'), 'error');
        return;
    }

    userContact  = val;
    contactType  = emailRegex.test(val) ? 'email' : 'phone';

    getOtpBtn.disabled = true;
    const origHTML = getOtpBtn.innerHTML;
    getOtpBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${t('sending_otp')}</span>`;

    try {
        const { res, data } = await apiPost({ action: 'send_otp', contact: userContact });

        if (data.success) {
            contactType = data.contact_type || contactType;
            const masked = maskContact(userContact, contactType);
            otpMessage.textContent = `OTP sent to ${contactType === 'email' ? 'email' : 'phone'}: ${masked}`;
            showNotification('OTP Sent!', contactType === 'email' ? t('otp_sent_email') : t('otp_sent_phone'), 'success');
            goToStep(2);
        } else {
            showNotification('Error', data.message || 'Failed to send OTP.', 'error');
        }
    } catch (err) {
        showNotification('Error', 'Network error. Please try again.', 'error');
    } finally {
        getOtpBtn.disabled = false;
        getOtpBtn.innerHTML = origHTML;
    }
}

// ── Step 2: Verify OTP ────────────────────────────────────────────────────────
function validateOtpInput() {
    const valid = otpRegex.test(otpInput.value.trim());
    verifyOtpBtn.disabled = !valid;
    return valid;
}

async function handleVerifyOtp(e) {
    e.preventDefault();
    if (!validateOtpInput()) { showNotification('Error', 'Please enter a valid 6-digit OTP', 'error'); return; }

    verifyOtpBtn.disabled = true;
    const origHTML = verifyOtpBtn.innerHTML;
    verifyOtpBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${t('verifying')}</span>`;

    try {
        const { res, data } = await apiPost({ action: 'verify_otp', contact: userContact, otp: otpInput.value.trim(), contact_type: contactType });

        if (data.success) {
            showNotification(t('otp_verified'), t('otp_verified_msg'), 'success');
            goToStep(3);
        } else {
            showNotification('Error', data.message || t('invalid_otp'), 'error');
            otpInput.value = '';
            validateOtpInput();
            verifyOtpBtn.disabled = false;
            verifyOtpBtn.innerHTML = origHTML;
        }
    } catch (err) {
        showNotification('Error', 'Network error. Please try again.', 'error');
        verifyOtpBtn.disabled = false;
        verifyOtpBtn.innerHTML = origHTML;
    }
}

async function handleResendOtp() {
    resendOtpBtn.disabled = true;
    try {
        const { data } = await apiPost({ action: 'send_otp', contact: userContact });
        if (data.success) {
            showNotification('OTP Resent!', contactType === 'email' ? t('otp_sent_email') : t('otp_sent_phone'), 'success');
            otpInput.value = '';
            otpInput.disabled = false;
            validateOtpInput();
            startOtpTimer();
        } else {
            showNotification('Error', data.message || 'Failed to resend OTP.', 'error');
            resendOtpBtn.disabled = false;
        }
    } catch (err) {
        showNotification('Error', 'Network error. Please try again.', 'error');
        resendOtpBtn.disabled = false;
    }
}

// ── OTP Timers ────────────────────────────────────────────────────────────────
function startOtpTimer() {
    if (otpCountdown) clearInterval(otpCountdown);
    otpTimeLeft = 60;
    otpInput.value = '';
    otpInput.disabled = false;
    validateOtpInput();
    otpTimer.classList.remove('expiring');
    updateTimerDisplay();

    otpCountdown = setInterval(() => {
        otpTimeLeft--;
        updateTimerDisplay();
        if (otpTimeLeft <= 10) otpTimer.classList.add('expiring');
        if (otpTimeLeft <= 0) {
            clearInterval(otpCountdown);
        }
    }, 1000);
    startResendTimer();
}

function stopOtpTimer() {
    if (otpCountdown)  clearInterval(otpCountdown);
    if (resendCountdown) clearInterval(resendCountdown);
}

function updateTimerDisplay() {
    const m = Math.floor(otpTimeLeft / 60), s = otpTimeLeft % 60;
    timerDisplay.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function startResendTimer() {
    if (resendCountdown) clearInterval(resendCountdown);
    resendTimeLeft = 60;
    updateResendButton();
    resendCountdown = setInterval(() => {
        resendTimeLeft--;
        updateResendButton();
        if (resendTimeLeft <= 0) {
            clearInterval(resendCountdown);
            resendOtpBtn.disabled = false;
            resendText.textContent = t('resend_otp_60s').replace('(60s)', '');
        }
    }, 1000);
}

function updateResendButton() {
    resendOtpBtn.disabled = true;
    resendText.textContent = `${t('resend_otp_60s').replace(/\(\d+s\)/, '')} (${resendTimeLeft}s)`;
}

// ── Step 3: Update Password ───────────────────────────────────────────────────
function togglePasswordVisibility(field, btn) {
    field.type = field.type === 'password' ? 'text' : 'password';
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-eye', field.type === 'password');
    icon.classList.toggle('fa-eye-slash', field.type === 'text');
}

function validatePassword() {
    const pw = newPassword.value;
    passwordStrength.className = 'password-strength';
    if (pw.length > 0) {
        if (pw.length < 8)       passwordStrength.classList.add('weak');
        else if (pw.length < 12) passwordStrength.classList.add('medium');
        else if (pw.length < 16) passwordStrength.classList.add('strong');
        else                     passwordStrength.classList.add('very-strong');
    }
    checkPasswordMatch();
    return pw.length >= 8;
}

function checkPasswordMatch() {
    const pw = newPassword.value, cp = confirmPassword.value;
    if (pw && cp) {
        const match = pw === cp;
        passwordMatch.classList.toggle('visible', match);
        updatePasswordBtn.disabled = !(match && pw.length >= 8);
        return match;
    }
    passwordMatch.classList.remove('visible');
    updatePasswordBtn.disabled = true;
    return false;
}

async function handleUpdatePassword(e) {
    e.preventDefault();
    if (newPassword.value.length < 8) { showNotification('Error', 'Password must be at least 8 characters long', 'error'); return; }
    if (!checkPasswordMatch()) { showNotification('Error', 'Passwords do not match', 'error'); return; }

    updatePasswordBtn.disabled = true;
    const origHTML = updatePasswordBtn.innerHTML;
    updatePasswordBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${t('updating')}</span>`;

    try {
        const { data } = await apiPost({ action: 'update_password', contact: userContact, contact_type: contactType, new_password: newPassword.value });

        if (data.success) {
            showNotification(t('password_updated'), t('password_updated_msg'), 'success', true);
        } else {
            showNotification('Error', data.message || 'Failed to update password.', 'error');
            updatePasswordBtn.disabled = false;
            updatePasswordBtn.innerHTML = origHTML;
        }
    } catch (err) {
        showNotification('Error', 'Network error. Please try again.', 'error');
        updatePasswordBtn.disabled = false;
        updatePasswordBtn.innerHTML = origHTML;
    }
}

// ── Notifications ─────────────────────────────────────────────────────────────
function showNotification(title, message, type = 'info', autoRedirect = false) {
    const note = document.createElement('div');
    note.className = 'notification';
    const bg = type === 'error'
        ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
        : 'linear-gradient(135deg, #4362C9 0%, #2A4AB3 100%)';
    note.style.background = bg;
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    note.innerHTML = `
        <div class="notification-icon"><i class="fas fa-${icon}"></i></div>
        <div class="notification-content"><h4>${title}</h4><p>${message}</p></div>
        <button class="notification-close" aria-label="Close"><i class="fas fa-times"></i></button>`;
    document.body.appendChild(note);
    setTimeout(() => note.classList.add('show'), 10);

    note.querySelector('.notification-close').addEventListener('click', () => {
        closeNotification(note);
        if (autoRedirect) redirectToLogin();
    });
    setTimeout(() => {
        if (note.parentNode) { closeNotification(note); if (autoRedirect) redirectToLogin(); }
    }, 2000);
}

function closeNotification(note) {
    note.classList.remove('show');
    setTimeout(() => { if (note.parentNode) note.parentNode.removeChild(note); }, 400);
}

function maskContact(c, type) {
    if (type === 'email') {
        const [u, d] = c.split('@');
        return (u.length <= 2 ? '***' : u[0] + '***' + u[u.length-1]) + '@' + d;
    }
    return '***' + c.replace(/\D/g,'').slice(-4);
}

function redirectToLogin() {
    showNotification('Redirecting...', 'Taking you to login page', 'info');
    setTimeout(() => { window.location.href = '/login_worker/'; }, 2000);
}

// ── Language / Theme ──────────────────────────────────────────────────────────
function handleLanguageChange(e) {
    const lang = e.currentTarget.dataset.lang;
    setLanguage(lang);
    languageOptions.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}
function applyLanguage(lang) {
    const tr = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tr[key]) el.textContent = tr[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (tr[key]) el.placeholder = tr[key];
    });
}
function handleThemeChange(e) {
    const theme = e.currentTarget.dataset.theme;
    setTheme(theme);
    themeOptions.forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
}
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    let apply = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
    document.body.className = apply + '-theme';
}
function handleSystemThemeChange(e) {
    if (currentTheme === 'system') document.body.className = (e.matches ? 'dark' : 'light') + '-theme';
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
if (currentTheme === 'system') handleSystemThemeChange({ matches: window.matchMedia('(prefers-color-scheme: dark)').matches });