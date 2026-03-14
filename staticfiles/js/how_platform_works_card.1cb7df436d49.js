/**
 * HOW IT WORKS PAGE - COMPLETE VERSION
 * Full theme and language support with improved layout
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Navigation elements
const landingSection = document.getElementById('landingSection');
const roleSelectionSection = document.getElementById('roleSelectionSection');
const workerWorkflow = document.getElementById('workerWorkflow');
const employerWorkflow = document.getElementById('employerWorkflow');

// Buttons
const startConnectingBtn = document.getElementById('startConnectingBtn');
const backToLandingBtn = document.getElementById('backToLandingBtn');
const workerRoleBtn = document.querySelector('[data-role="worker"]');
const employerRoleBtn = document.querySelector('[data-role="employer"]');
const workerBackToRoles = document.getElementById('workerBackToRoles');
const employerBackToRoles = document.getElementById('employerBackToRoles');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ['light', 'dark', 'system'];

// ============================================
// COMPLETE TRANSLATIONS (EN/HI/MR)
// ============================================
const translations = {
    en: {
        // Basic UI
        'back': 'Back',
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Page Header
        'platform_title': 'How ShramikConnect Works',
        'platform_subtitle': 'Your Complete Guide to the Platform',
        'platform_intro': 'Welcome to ShramikConnect! Whether you\'re a worker looking for opportunities or an employer seeking skilled labor, we\'re here to help. Click "Start Connecting" to begin your journey, or watch our video guide below.',
        
        // Landing Section
        'landing_title': 'Ready to Get Started?',
        'landing_desc': 'Choose your path and we\'ll guide you through every step - from account creation to finding the perfect match.',
        'workers': 'Workers',
        'employers': 'Employers',
        'jobs_completed': 'Jobs Completed',
        'start_connecting': 'Start Connecting',
        
        // Role Selection
        'choose_role': 'Who are you?',
        'worker': 'Worker',
        'worker_desc_large': 'I\'m looking for work opportunities, want to showcase my skills, and connect with employers.',
        'worker_feature1': 'Find jobs near you',
        'worker_feature2': 'Get fair wages',
        'worker_feature3': 'Build your profile',
        'select_worker': 'I\'m a Worker',
        'employer': 'Employer',
        'employer_desc_large': 'I need skilled workers for my projects, want to post jobs, and hire verified talent.',
        'employer_feature1': 'Post job requirements',
        'employer_feature2': 'Find verified workers',
        'employer_feature3': 'Secure payments',
        'select_employer': 'I\'m an Employer',
        'back_to_start': 'Back to Start',
        'back_to_roles': 'Back to Role Selection',
        
        // Workflow Titles
        'worker_workflow_title': '👷 Worker Journey on ShramikConnect',
        'employer_workflow_title': '💼 Employer Journey on ShramikConnect',
        
        // Worker Journey - Steps
        'worker_step1_title': 'Registration',
        'worker_step1_desc': 'Workers register on the ShramikConnect app or website by providing basic details: Full Name, Mobile Number (OTP verification), Location, Skills, Experience level, and Preferred working hours. After registration, a worker profile is created.',
        
        'worker_step2_title': 'Login',
        'worker_step2_desc': 'After registration, workers can log in using Mobile Number + OTP or Email + Password. Upon login, they access the dashboard where available jobs and notifications are displayed.',
        
        'worker_step3_title': 'Browse Jobs',
        'worker_step3_desc': 'Workers can browse available jobs on their dashboard and filter by Location, Job Type, Salary, Working Hours, and Skill Category. This helps them find jobs that match their skills and preferences.',
        
        'worker_step4_title': 'View Job Details',
        'worker_step4_desc': 'Clicking on a job displays complete information: Employer name, Job description, Required skills, Work location, Payment details, and Job duration. Workers can decide if the job is suitable for them.',
        
        'worker_step5_title': 'Chatbot Help',
        'worker_step5_desc': 'If workers face any issues, the AI chatbot provides instant assistance with job search guidance, app usage help, safety instructions, and employer communication tips.',
        
        'worker_step6_title': 'Apply for Job',
        'worker_step6_desc': 'When workers find a suitable job, they click the "Apply" button. The application process sends a request to the employer, who reviews the worker\'s profile and decides whether to hire them.',
        
        'worker_step7_title': 'Work Completion Request',
        'worker_step7_desc': 'After completing the job, workers send a completion request. The employer verifies the work, and the payment process is initiated. This officially marks the job as complete.',
        
        // Employer Journey - Steps
        'employer_step1_title': 'Registration',
        'employer_step1_desc': 'Employers register on the platform by providing: Name, Business name (optional), Mobile Number (OTP verification), Location, and Work category. This creates their employer account.',
        
        'employer_step2_title': 'Login',
        'employer_step2_desc': 'After registration, employers log in to access their employer dashboard, where they can manage jobs, view applications, and hire workers.',
        
        'employer_step3_title': 'Post Job',
        'employer_step3_desc': 'Employers post jobs by filling in: Job title, Work description, Required skills, Location, Payment/Wages, and Working duration. Once posted, the job becomes visible to workers.',
        
        'employer_step4_title': 'View Workers',
        'employer_step4_desc': 'Employers can browse available worker profiles and check their skills, experience, ratings, and location to find suitable candidates.',
        
        'employer_step5_title': 'Chatbot Help',
        'employer_step5_desc': 'Employers can use the AI chatbot for guidance on job posting, worker selection tips, and platform usage, ensuring a smooth experience.',
        
        'employer_step6_title': 'Hire Worker',
        'employer_step6_desc': 'When employers select a worker, they send a hire request. The worker receives a notification and can accept the job, after which work begins.',
        
        'employer_step7_title': 'Rating Worker',
        'employer_step7_desc': 'After job completion, employers rate workers based on work quality, behavior, time management, and professionalism. This helps future employers identify trusted workers.',
        
        'employer_step8_title': 'Mark Job Complete',
        'employer_step8_desc': 'In the final step, employers mark the job as complete, confirming completion and settling payment. The job is saved in history, officially closing the transaction.',
        
        // Existing Account Cards
        'existing_account_worker': 'Already have an account?',
        'existing_account_worker_desc': 'Go to the login page and enter your mobile number and password. If you forgot your password, use the "Forgot Password" option to reset it.',
        'existing_account_employer': 'Already have an account?',
        'existing_account_employer_desc': 'Login with your registered email or mobile number and password. Forgot your password? Use the reset option to create a new one.',
        
        // Video Section
        'video_title': '🎥 Watch: How ShramikConnect Works',
        'video_caption': 'This video explains the complete platform workflow for both workers and employers.',
        
        // Footer Button
        'back_to_help': 'Back to Help & Contact'
    },
    
    hi: {
        // Basic UI
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        
        // Page Header
        'platform_title': 'श्रमिककनेक्ट कैसे काम करता है',
        'platform_subtitle': 'प्लेटफॉर्म के लिए आपकी संपूर्ण मार्गदर्शिका',
        'platform_intro': 'श्रमिककनेक्ट में आपका स्वागत है! चाहे आप अवसरों की तलाश में कामगार हों या कुशल श्रमिकों की तलाश में नियोक्ता, हम मदद के लिए यहाँ हैं। अपनी यात्रा शुरू करने के लिए "कनेक्ट करना शुरू करें" पर क्लिक करें, या नीचे हमारी वीडियो गाइड देखें।',
        
        // Landing Section
        'landing_title': 'शुरू करने के लिए तैयार हैं?',
        'landing_desc': 'अपना रास्ता चुनें और हम हर कदम पर आपका मार्गदर्शन करेंगे - खाता निर्माण से लेकर सही मेल खोजने तक।',
        'workers': 'कामगार',
        'employers': 'नियोक्ता',
        'jobs_completed': 'नौकरियां पूरी हुईं',
        'start_connecting': 'कनेक्ट करना शुरू करें',
        
        // Role Selection
        'choose_role': 'आप कौन हैं?',
        'worker': 'कामगार',
        'worker_desc_large': 'मैं काम के अवसरों की तलाश में हूं, अपने कौशल दिखाना चाहता हूं और नियोक्ताओं से जुड़ना चाहता हूं।',
        'worker_feature1': 'अपने आस-पास नौकरियां खोजें',
        'worker_feature2': 'उचित मजदूरी प्राप्त करें',
        'worker_feature3': 'अपना प्रोफाइल बनाएं',
        'select_worker': 'मैं एक कामगार हूं',
        'employer': 'नियोक्ता',
        'employer_desc_large': 'मुझे अपने प्रोजेक्ट के लिए कुशल कामगार चाहिए, नौकरियां पोस्ट करना और सत्यापित प्रतिभा को काम पर रखना चाहता हूं।',
        'employer_feature1': 'नौकरी की आवश्यकताएं पोस्ट करें',
        'employer_feature2': 'सत्यापित कामगार खोजें',
        'employer_feature3': 'सुरक्षित भुगतान',
        'select_employer': 'मैं एक नियोक्ता हूं',
        'back_to_start': 'शुरुआत पर वापस जाएं',
        'back_to_roles': 'भूमिका चयन पर वापस जाएं',
        
        // Workflow Titles
        'worker_workflow_title': '👷 श्रमिककनेक्ट पर कामगार की यात्रा',
        'employer_workflow_title': '💼 श्रमिककनेक्ट पर नियोक्ता की यात्रा',
        
        // Worker Journey - Steps (English text - can be translated if needed)
        'worker_step1_title': 'पंजीकरण',
        'worker_step1_desc': 'Workers register on the ShramikConnect app or website by providing basic details: Full Name, Mobile Number (OTP verification), Location, Skills, Experience level, and Preferred working hours. After registration, a worker profile is created.',
        'worker_step2_title': 'लॉगिन',
        'worker_step2_desc': 'After registration, workers can log in using Mobile Number + OTP or Email + Password. Upon login, they access the dashboard where available jobs and notifications are displayed.',
        'worker_step3_title': 'नौकरियां ब्राउज़ करें',
        'worker_step3_desc': 'Workers can browse available jobs on their dashboard and filter by Location, Job Type, Salary, Working Hours, and Skill Category. This helps them find jobs that match their skills and preferences.',
        'worker_step4_title': 'नौकरी का विवरण देखें',
        'worker_step4_desc': 'Clicking on a job displays complete information: Employer name, Job description, Required skills, Work location, Payment details, and Job duration. Workers can decide if the job is suitable for them.',
        'worker_step5_title': 'चैटबॉट सहायता',
        'worker_step5_desc': 'If workers face any issues, the AI chatbot provides instant assistance with job search guidance, app usage help, safety instructions, and employer communication tips.',
        'worker_step6_title': 'नौकरी के लिए आवेदन करें',
        'worker_step6_desc': 'When workers find a suitable job, they click the "Apply" button. The application process sends a request to the employer, who reviews the worker\'s profile and decides whether to hire them.',
        'worker_step7_title': 'काम पूरा होने का अनुरोध',
        'worker_step7_desc': 'After completing the job, workers send a completion request. The employer verifies the work, and the payment process is initiated. This officially marks the job as complete.',
        
        // Employer Journey - Steps
        'employer_step1_title': 'पंजीकरण',
        'employer_step1_desc': 'Employers register on the platform by providing: Name, Business name (optional), Mobile Number (OTP verification), Location, and Work category. This creates their employer account.',
        'employer_step2_title': 'लॉगिन',
        'employer_step2_desc': 'After registration, employers log in to access their employer dashboard, where they can manage jobs, view applications, and hire workers.',
        'employer_step3_title': 'नौकरी पोस्ट करें',
        'employer_step3_desc': 'Employers post jobs by filling in: Job title, Work description, Required skills, Location, Payment/Wages, and Working duration. Once posted, the job becomes visible to workers.',
        'employer_step4_title': 'कामगार देखें',
        'employer_step4_desc': 'Employers can browse available worker profiles and check their skills, experience, ratings, and location to find suitable candidates.',
        'employer_step5_title': 'चैटबॉट सहायता',
        'employer_step5_desc': 'Employers can use the AI chatbot for guidance on job posting, worker selection tips, and platform usage, ensuring a smooth experience.',
        'employer_step6_title': 'कामगार को काम पर रखें',
        'employer_step6_desc': 'When employers select a worker, they send a hire request. The worker receives a notification and can accept the job, after which work begins.',
        'employer_step7_title': 'कामगार को रेटिंग दें',
        'employer_step7_desc': 'After job completion, employers rate workers based on work quality, behavior, time management, and professionalism. This helps future employers identify trusted workers.',
        'employer_step8_title': 'काम पूरा चिह्नित करें',
        'employer_step8_desc': 'In the final step, employers mark the job as complete, confirming completion and settling payment. The job is saved in history, officially closing the transaction.',
        
        // Existing Account Cards
        'existing_account_worker': 'पहले से खाता है?',
        'existing_account_worker_desc': 'लॉगिन पेज पर जाएं और अपना मोबाइल नंबर और पासवर्ड दर्ज करें। अगर पासवर्ड भूल गए हैं, तो "पासवर्ड भूल गए" विकल्प का उपयोग करके इसे रीसेट करें।',
        'existing_account_employer': 'पहले से खाता है?',
        'existing_account_employer_desc': 'अपने पंजीकृत ईमेल या मोबाइल नंबर और पासवर्ड से लॉगिन करें। पासवर्ड भूल गए? रीसेट विकल्प का उपयोग करके नया पासवर्ड बनाएं।',
        
        // Video Section
        'video_title': '🎥 देखें: श्रमिककनेक्ट कैसे काम करता है',
        'video_caption': 'यह वीडियो कामगारों और नियोक्ताओं दोनों के लिए संपूर्ण प्लेटफॉर्म वर्कफ़्लो समझाता है।',
        
        // Footer Button
        'back_to_help': 'सहायता और संपर्क पर वापस जाएं'
    },
    
    mr: {
        // Basic UI
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        
        // Page Header
        'platform_title': 'श्रमिककनेक्ट कसे कार्य करते',
        'platform_subtitle': 'प्लॅटफॉर्मसाठी तुमचे संपूर्ण मार्गदर्शक',
        'platform_intro': 'श्रमिककनेक्टमध्ये आपले स्वागत आहे! तुम्ही संधी शोधणारे कामगार असाल किंवा कुशल कामगार शोधणारे नियोक्ता असाल, आम्ही मदतीसाठी येथे आहोत. तुमचा प्रवास सुरू करण्यासाठी "कनेक्ट करणे सुरू करा" वर क्लिक करा किंवा खाली आमची व्हिडिओ मार्गदर्शिका पहा.',
        
        // Landing Section
        'landing_title': 'सुरू करण्यास तयार आहात?',
        'landing_desc': 'तुमचा मार्ग निवडा आणि आम्ही प्रत्येक पायरीवर तुम्हाला मार्गदर्शन करू - खाते निर्मितीपासून योग्य जुळणी शोधण्यापर्यंत.',
        'workers': 'कामगार',
        'employers': 'नियोक्ते',
        'jobs_completed': 'नोकऱ्या पूर्ण झाल्या',
        'start_connecting': 'कनेक्ट करणे सुरू करा',
        
        // Role Selection
        'choose_role': 'तुम्ही कोण आहात?',
        'worker': 'कामगार',
        'worker_desc_large': 'मी कामाच्या संधी शोधत आहे, माझी कौशल्ये दाखवू इच्छितो आणि नियोक्त्यांशी कनेक्ट होऊ इच्छितो.',
        'worker_feature1': 'तुमच्या जवळ नोकऱ्या शोधा',
        'worker_feature2': 'योग्य वेतन मिळवा',
        'worker_feature3': 'तुमचे प्रोफाइल तयार करा',
        'select_worker': 'मी एक कामगार आहे',
        'employer': 'नियोक्ता',
        'employer_desc_large': 'मला माझ्या प्रकल्पांसाठी कुशल कामगार हवे आहेत, नोकऱ्या पोस्ट करू इच्छितो आणि सत्यापित प्रतिभा नियुक्त करू इच्छितो.',
        'employer_feature1': 'नोकरीच्या आवश्यकता पोस्ट करा',
        'employer_feature2': 'सत्यापित कामगार शोधा',
        'employer_feature3': 'सुरक्षित पेमेंट',
        'select_employer': 'मी एक नियोक्ता आहे',
        'back_to_start': 'सुरुवातीस परत जा',
        'back_to_roles': 'भूमिका निवडीवर परत जा',
        
        // Workflow Titles
        'worker_workflow_title': '👷 श्रमिककनेक्टवर कामगाराचा प्रवास',
        'employer_workflow_title': '💼 श्रमिककनेक्टवर नियोक्त्याचा प्रवास',
        
        // Worker Journey - Steps (English text - can be translated if needed)
        'worker_step1_title': 'नोंदणी',
        'worker_step1_desc': 'Workers register on the ShramikConnect app or website by providing basic details: Full Name, Mobile Number (OTP verification), Location, Skills, Experience level, and Preferred working hours. After registration, a worker profile is created.',
        'worker_step2_title': 'लॉगिन',
        'worker_step2_desc': 'After registration, workers can log in using Mobile Number + OTP or Email + Password. Upon login, they access the dashboard where available jobs and notifications are displayed.',
        'worker_step3_title': 'नोकऱ्या ब्राउझ करा',
        'worker_step3_desc': 'Workers can browse available jobs on their dashboard and filter by Location, Job Type, Salary, Working Hours, and Skill Category. This helps them find jobs that match their skills and preferences.',
        'worker_step4_title': 'नोकरीचे तपशील पहा',
        'worker_step4_desc': 'Clicking on a job displays complete information: Employer name, Job description, Required skills, Work location, Payment details, and Job duration. Workers can decide if the job is suitable for them.',
        'worker_step5_title': 'चॅटबॉट मदत',
        'worker_step5_desc': 'If workers face any issues, the AI chatbot provides instant assistance with job search guidance, app usage help, safety instructions, and employer communication tips.',
        'worker_step6_title': 'नोकरीसाठी अर्ज करा',
        'worker_step6_desc': 'When workers find a suitable job, they click the "Apply" button. The application process sends a request to the employer, who reviews the worker\'s profile and decides whether to hire them.',
        'worker_step7_title': 'काम पूर्ण झाल्याची विनंती',
        'worker_step7_desc': 'After completing the job, workers send a completion request. The employer verifies the work, and the payment process is initiated. This officially marks the job as complete.',
        
        // Employer Journey - Steps
        'employer_step1_title': 'नोंदणी',
        'employer_step1_desc': 'Employers register on the platform by providing: Name, Business name (optional), Mobile Number (OTP verification), Location, and Work category. This creates their employer account.',
        'employer_step2_title': 'लॉगिन',
        'employer_step2_desc': 'After registration, employers log in to access their employer dashboard, where they can manage jobs, view applications, and hire workers.',
        'employer_step3_title': 'नोकरी पोस्ट करा',
        'employer_step3_desc': 'Employers post jobs by filling in: Job title, Work description, Required skills, Location, Payment/Wages, and Working duration. Once posted, the job becomes visible to workers.',
        'employer_step4_title': 'कामगार पहा',
        'employer_step4_desc': 'Employers can browse available worker profiles and check their skills, experience, ratings, and location to find suitable candidates.',
        'employer_step5_title': 'चॅटबॉट मदत',
        'employer_step5_desc': 'Employers can use the AI chatbot for guidance on job posting, worker selection tips, and platform usage, ensuring a smooth experience.',
        'employer_step6_title': 'कामगार नियुक्त करा',
        'employer_step6_desc': 'When employers select a worker, they send a hire request. The worker receives a notification and can accept the job, after which work begins.',
        'employer_step7_title': 'कामगाराला रेटिंग द्या',
        'employer_step7_desc': 'After job completion, employers rate workers based on work quality, behavior, time management, and professionalism. This helps future employers identify trusted workers.',
        'employer_step8_title': 'काम पूर्ण चिन्हांकित करा',
        'employer_step8_desc': 'In the final step, employers mark the job as complete, confirming completion and settling payment. The job is saved in history, officially closing the transaction.',
        
        // Existing Account Cards
        'existing_account_worker': 'आधीपासून खाते आहे?',
        'existing_account_worker_desc': 'लॉगिन पेजवर जा आणि तुमचा मोबाइल नंबर आणि पासवर्ड प्रविष्ट करा. जर पासवर्ड विसरलात, तर "पासवर्ड विसरलात" पर्याय वापरून तो रीसेट करा.',
        'existing_account_employer': 'आधीपासून खाते आहे?',
        'existing_account_employer_desc': 'तुमच्या नोंदणीकृत ईमेल किंवा मोबाइल नंबर आणि पासवर्डसह लॉगिन करा. पासवर्ड विसरलात? रीसेट पर्याय वापरून नवीन पासवर्ड तयार करा.',
        
        // Video Section
        'video_title': '🎥 पहा: श्रमिककनेक्ट कसे कार्य करते',
        'video_caption': 'हा व्हिडिओ कामगार आणि नियोक्ते या दोघांसाठी संपूर्ण प्लॅटफॉर्म वर्कफ़्लो स्पष्ट करतो.',
        
        // Footer Button
        'back_to_help': 'मदत आणि संपर्क वर परत जा'
    }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
function applyLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// THEME MANAGEMENT
// ============================================
function applyTheme(theme) {
    const body = document.body;
    ALL_THEMES.forEach(t => body.classList.remove(t));
    body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme);
    currentTheme = theme;
    
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function getSystemDefaultTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && ALL_THEMES.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        applyTheme(getSystemDefaultTheme());
    }
}

function handleThemeChange(theme) {
    if (!ALL_THEMES.includes(theme)) return;
    applyTheme(theme);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function toggleSettingsDropdown(event) {
    event.stopPropagation();
    settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', 
        settingsDropdown.classList.contains('active') ? 'false' : 'true');
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIconRight.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
function showLanding() {
    landingSection.style.display = 'block';
    roleSelectionSection.style.display = 'none';
    workerWorkflow.style.display = 'none';
    employerWorkflow.style.display = 'none';
}

function showRoleSelection() {
    landingSection.style.display = 'none';
    roleSelectionSection.style.display = 'block';
    workerWorkflow.style.display = 'none';
    employerWorkflow.style.display = 'none';
}

function showWorkerWorkflow() {
    landingSection.style.display = 'none';
    roleSelectionSection.style.display = 'none';
    workerWorkflow.style.display = 'block';
    employerWorkflow.style.display = 'none';
    
    // Scroll to top of workflow
    workerWorkflow.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showEmployerWorkflow() {
    landingSection.style.display = 'none';
    roleSelectionSection.style.display = 'none';
    workerWorkflow.style.display = 'none';
    employerWorkflow.style.display = 'block';
    
    // Scroll to top of workflow
    employerWorkflow.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Settings
    settingsIconRight.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    // Language
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });

    // Theme
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });

    // Back button (history)
    if (smallBackBtn) {
        smallBackBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Navigation buttons
    if (startConnectingBtn) {
        startConnectingBtn.addEventListener('click', showRoleSelection);
    }

    if (backToLandingBtn) {
        backToLandingBtn.addEventListener('click', showLanding);
    }

    if (workerRoleBtn) {
        workerRoleBtn.addEventListener('click', showWorkerWorkflow);
    }

    if (employerRoleBtn) {
        employerRoleBtn.addEventListener('click', showEmployerWorkflow);
    }

    if (workerBackToRoles) {
        workerBackToRoles.addEventListener('click', showRoleSelection);
    }

    if (employerBackToRoles) {
        employerBackToRoles.addEventListener('click', showRoleSelection);
    }

    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSettingsDropdown();
        }
    });

    // Window resize
    window.addEventListener('resize', () => {
        if (settingsDropdown.classList.contains('active')) {
            closeSettingsDropdown();
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    console.log('How It Works page initialized with improved layout');

    // Load saved language
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLanguage);

    // Load theme
    initTheme();

    // Setup event listeners
    setupEventListeners();

    // Ensure landing page is visible initially
    showLanding();
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}