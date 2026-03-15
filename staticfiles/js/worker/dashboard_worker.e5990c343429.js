/**
 * ShramikConnect - Worker Dashboard
 * COMPLETE WORKING VERSION
 */

// ============================================
// APPLICATION STATE
// ============================================
const AppState = {
    workerId: null,
    worker: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        profession: '',
        profilePhoto: null
    },
    activeSection: 'dashboard',
    previousSection: null,
    sidebarOpen: false,
    settingsDropdownOpen: false,
    activeModals: [],
    jobFilters: {
        search: '',
        activeSort: null,
        selectedSkill: null
    },
    appliedFilters: {
        search: '',
        activeSort: null,
        status: null
    },
    historyFilters: {
        search: '',
        activeSort: null
    },
    settings: {
        language: 'en',
        theme: 'light'
    },
    currentJob: null,
    currentChat: {
        employer: null,
        messages: []
    },
    currentFile: null,
    confirmationData: {
        jobId: null,
        callback: null
    },
    jobs: [],
    appliedJobs: [],
    activeJobs: [],
    workHistory: [],
    allSkills: [
        'Electrician', 'Plumber', 'Welder', 'Mason', 'Painter', 
        'Carpenter', 'Tile Fitter', 'Helper', 'AC Technician', 
        'Refrigerator Technician', 'RO Technician', 'CCTV Installer',
        'Solar Technician', 'Driver (LMV)', 'Heavy Driver', 
        'Machine Operator', 'Factory Worker', 'Housekeeping', 
        'Security Guard', 'Gardener', 'Construction Supervisor', 
        'Crane Operator', 'Forklift Operator'
    ]
};

// ============================================
// i18n TRANSLATIONS
// ============================================
const translations = {
    en: {
        menu: "Menu",
        dashboard: "Dashboard",
        find_jobs: "Find Jobs",
        applied_jobs: "Applied Jobs",
        active_jobs: "Active Jobs",
        work_history: "Work History",
        ai_assistant: "AI Assistant",
        logout: "Logout",
        home: "Home",
        help: "Help",
        about: "About",
        electrician: "Electrician",
        edit_profile: "Edit Profile",
        settings: "Settings",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System",
        welcome: "Welcome",
        dashboard_slogan_worker: "Find jobs based on your skills and manage your work easily",
        jobs_applied: "Jobs Applied",
        till_now: "Till Now",
        currently: "Currently",
        quick_actions: "Quick Actions",
        apply_for_job: "Apply for Job",
        application_details: "Application Details",
        expected_price: "Expected Price (₹)",
        availability: "Availability",
        cover_message: "Cover Message (Optional)",
        submit_application: "Submit Application",
        select_availability: "Select availability",
        immediate: "Immediate",
        tomorrow: "Tomorrow",
        within_3_days: "Within 3 Days",
        within_1_week: "Within 1 Week",
        custom_date: "Custom Date",
        skill: "Skill",
        payment: "Payment",
        location: "Location",
        clear_all: "Clear All",
        payment_low_high: "Low → High",
        payment_high_low: "High → Low",
        location_near_far: "Near → Far",
        location_far_near: "Far → Near",
        status: "Status",
        status_applied: "Applied",
        status_accepted: "Accepted",
        status_rejected: "Rejected",
        date: "Date",
        date_new_old: "New → Old",
        date_old_new: "Old → New",
        search_jobs_placeholder: "Search by skill, job title or location",
        search_applied_jobs: "Search applied jobs...",
        search_work_history: "Search work history...",
        chat_with_employer: "Chat with",
        type_your_message: "Type your message...",
        job_details: "Job Details",
        work_details: "Work Details",
        confirm_work_completion: "Confirm Work Completion",
        confirm_work_completion_question: "Are you sure work is completed?",
        confirm_work_completion_description: "This will notify the employer and move the job to your work history.",
        yes_complete: "Yes, Complete",
        no_cancel: "No, Cancel",
        ai_welcome_worker: "Hello! I'm your AI assistant. I can help you find the best jobs based on your skills and preferences.",
        ai_ready_worker: "Ready to help you find the best jobs",
        ai_welcome_full_worker: "Hello! I'm your AI assistant. I can help you find the best jobs based on your skills and preferences. Try asking me: 'Best jobs for my skills' or 'High paying jobs near me'.",
        ai_subtitle_worker: "Get help finding the best jobs for your skills",
        type_your_message_here: "Type your message here...",
        shramik: "Shramik",
        connect: "Connect",
        employer_name: "Employer Name",
        job_title: "Job Title",
        completion_date: "Completion Date",
        payment_earned: "Payment Earned",
        rating: "Rating",
        actions: "Actions",
        tagline: "Connecting hands to work",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        copyright: "© 2025 ShramikConnect. All rights reserved.",
        add_message_for_employer: "Add a message for the employer..."
    },
    hi: {
        menu: "मेनू",
        dashboard: "डैशबोर्ड",
        find_jobs: "नौकरी ढूंढें",
        applied_jobs: "आवेदित नौकरियां",
        active_jobs: "सक्रिय नौकरियां",
        work_history: "कार्य इतिहास",
        ai_assistant: "एआई सहायक",
        logout: "लॉग आउट",
        home: "होम",
        help: "मदद",
        about: "हमारे बारे में",
        electrician: "बिजली मिस्त्री",
        edit_profile: "प्रोफ़ाइल संपादित करें",
        settings: "सेटिंग्स",
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम",
        welcome: "स्वागत है",
        dashboard_slogan_worker: "अपने कौशल के आधार पर नौकरियां ढूंढें और अपने काम को आसानी से प्रबंधित करें",
        jobs_applied: "आवेदित नौकरियां",
        till_now: "अब तक",
        currently: "वर्तमान में",
        quick_actions: "त्वरित कार्रवाइयां",
        apply_for_job: "नौकरी के लिए आवेदन करें",
        application_details: "आवेदन विवरण",
        expected_price: "अपेक्षित मूल्य (₹)",
        availability: "उपलब्धता",
        cover_message: "कवर संदेश (वैकल्पिक)",
        submit_application: "आवेदन जमा करें",
        select_availability: "उपलब्धता चुनें",
        immediate: "तुरंत",
        tomorrow: "कल",
        within_3_days: "3 दिनों के भीतर",
        within_1_week: "1 सप्ताह के भीतर",
        custom_date: "कस्टम तिथि",
        skill: "कौशल",
        payment: "भुगतान",
        location: "स्थान",
        clear_all: "सभी साफ करें",
        payment_low_high: "कम → ज्यादा",
        payment_high_low: "ज्यादा → कम",
        location_near_far: "निकट → दूर",
        location_far_near: "दूर → निकट",
        status: "स्थिति",
        status_applied: "आवेदित",
        status_accepted: "स्वीकृत",
        status_rejected: "अस्वीकृत",
        date: "तारीख",
        date_new_old: "नया → पुराना",
        date_old_new: "पुराना → नया",
        search_jobs_placeholder: "कौशल, नौकरी शीर्षक या स्थान से खोजें",
        search_applied_jobs: "आवेदित नौकरियां खोजें...",
        search_work_history: "कार्य इतिहास खोजें...",
        chat_with_employer: "के साथ चैट करें",
        type_your_message: "अपना संदेश टाइप करें...",
        job_details: "नौकरी विवरण",
        work_details: "कार्य विवरण",
        confirm_work_completion: "कार्य पूर्णता की पुष्टि करें",
        confirm_work_completion_question: "क्या आप सुनिश्चित हैं कि कार्य पूरा हो गया है?",
        confirm_work_completion_description: "यह नियोक्ता को सूचित करेगा और नौकरी को आपके कार्य इतिहास में ले जाएगा।",
        yes_complete: "हां, पूर्ण करें",
        no_cancel: "नहीं, रद्द करें",
        ai_welcome_worker: "नमस्ते! मैं आपका AI सहायक हूं। मैं आपके कौशल और प्राथमिकताओं के आधार पर सर्वोत्तम नौकरियां खोजने में आपकी मदद कर सकता हूं।",
        ai_ready_worker: "सर्वोत्तम नौकरियां खोजने में मदद के लिए तैयार",
        ai_welcome_full_worker: "नमस्ते! मैं आपका AI सहायक हूं। मैं आपके कौशल और प्राथमिकताओं के आधार पर सर्वोत्तम नौकरियां खोजने में आपकी मदद कर सकता हूं। मुझसे पूछें: 'मेरे कौशल के लिए सर्वोत्तम नौकरियां' या 'मेरे पास उच्च वेतन वाली नौकरियां'।",
        ai_subtitle_worker: "अपने कौशल के लिए सर्वोत्तम नौकरियां खोजने में मदद लें",
        type_your_message_here: "अपना संदेश यहां टाइप करें...",
        shramik: "श्रमिक",
        connect: "कनेक्ट",
        employer_name: "नियोक्ता का नाम",
        job_title: "नौकरी शीर्षक",
        completion_date: "पूर्णता तिथि",
        payment_earned: "अर्जित भुगतान",
        rating: "रेटिंग",
        actions: "कार्रवाइयां",
        tagline: "हाथों को काम से जोड़ना",
        privacy: "गोपनीयता नीति",
        terms: "नियम और शर्तें",
        copyright: "© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।",
        add_message_for_employer: "नियोक्ता के लिए एक संदेश जोड़ें..."
    },
    mr: {
        menu: "मेनू",
        dashboard: "डॅशबोर्ड",
        find_jobs: "नोकऱ्या शोधा",
        applied_jobs: "अर्ज केलेल्या नोकऱ्या",
        active_jobs: "सक्रिय नोकऱ्या",
        work_history: "कामाचा इतिहास",
        ai_assistant: "AI सहाय्यक",
        logout: "बाहेर पडा",
        home: "मुख्यपृष्ठ",
        help: "मदत",
        about: "आमच्याबद्दल",
        electrician: "विजेमिस्त्री",
        edit_profile: "प्रोफाइल संपादित करा",
        settings: "सेटिंग्ज",
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम",
        welcome: "स्वागत आहे",
        dashboard_slogan_worker: "तुमच्या कौशल्यावर आधारित नोकऱ्या शोधा आणि तुमचे काम सहज व्यवस्थापित करा",
        jobs_applied: "अर्ज केलेल्या नोकऱ्या",
        till_now: "आतापर्यंत",
        currently: "सध्या",
        quick_actions: "द्रुत क्रिया",
        apply_for_job: "नोकरीसाठी अर्ज करा",
        application_details: "अर्ज तपशील",
        expected_price: "अपेक्षित किंमत (₹)",
        availability: "उपलब्धता",
        cover_message: "कव्हर संदेश (पर्यायी)",
        submit_application: "अर्ज सबमिट करा",
        select_availability: "उपलब्धता निवडा",
        immediate: "तत्काळ",
        tomorrow: "उद्या",
        within_3_days: "3 दिवसात",
        within_1_week: "1 आठवड्यात",
        custom_date: "सानुकूल तारीख",
        skill: "कौशल्य",
        payment: "पेमेंट",
        location: "स्थान",
        clear_all: "सर्व क्लियर करा",
        payment_low_high: "कमी → जास्त",
        payment_high_low: "जास्त → कमी",
        location_near_far: "जवळ → दूर",
        location_far_near: "दूर → जवळ",
        status: "स्थिती",
        status_applied: "अर्ज केले",
        status_accepted: "स्वीकृत",
        status_rejected: "नकारले",
        date: "तारीख",
        date_new_old: "नवीन → जुने",
        date_old_new: "जुने → नवीन",
        search_jobs_placeholder: "कौशल्य, नोकरी शीर्षक किंवा स्थानानुसार शोधा",
        search_applied_jobs: "अर्ज केलेल्या नोकऱ्या शोधा...",
        search_work_history: "कामाचा इतिहास शोधा...",
        chat_with_employer: "शी चॅट करा",
        type_your_message: "तुमचा संदेश टाइप करा...",
        job_details: "नोकरी तपशील",
        work_details: "कामाचे तपशील",
        confirm_work_completion: "काम पूर्ण होण्याची पुष्टी करा",
        confirm_work_completion_question: "तुम्हाला खात्री आहे की काम पूर्ण झाले आहे?",
        confirm_work_completion_description: "हे नियोक्त्याला सूचित करेल आणि नोकरी तुमच्या कामाच्या इतिहासात हलवेल.",
        yes_complete: "होय, पूर्ण करा",
        no_cancel: "नाही, रद्द करा",
        ai_welcome_worker: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या कौशल्य आणि प्राधान्यांवर आधारित सर्वोत्तम नोकऱ्या शोधण्यात तुमची मदत करू शकतो.",
        ai_ready_worker: "सर्वोत्तम नोकऱ्या शोधण्यात मदत करण्यासाठी तयार",
        ai_welcome_full_worker: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या कौशल्य आणि प्राधान्यांवर आधारित सर्वोत्तम नोकऱ्या शोधण्यात तुमची मदत करू शकतो. मला विचारा: 'माझ्या कौशल्यासाठी सर्वोत्तम नोकऱ्या' किंवा 'माझ्या जवळ उच्च पगाराच्या नोकऱ्या'.",
        ai_subtitle_worker: "तुमच्या कौशल्यासाठी सर्वोत्तम नोकऱ्या शोधण्यासाठी मदत मिळवा",
        type_your_message_here: "तुमचा संदेश येथे टाइप करा...",
        shramik: "श्रमिक",
        connect: "कनेक्ट",
        employer_name: "नियोक्त्याचे नाव",
        job_title: "नोकरी शीर्षक",
        completion_date: "पूर्णता तारीख",
        payment_earned: "मिळालेले पेमेंट",
        rating: "रेटिंग",
        actions: "क्रिया",
        tagline: "हातांना कामाशी जोडणे",
        privacy: "गोपनीयता धोरण",
        terms: "अटी आणि नियम",
        copyright: "© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.",
        add_message_for_employer: "नियोक्त्यासाठी एक संदेश जोडा..."
    }
};

// ============================================
// DOM CACHE
// ============================================
const DOM = {
    // Navigation
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    sidebarClose: document.getElementById('sidebarClose'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    
    // Settings
    sidebarSettingsIcon: document.getElementById('sidebarSettingsIcon'),
    settingsDropdown: document.getElementById('settingsDropdown'),
    languageOptions: document.querySelectorAll('.language-option'),
    themeOptions: document.querySelectorAll('.theme-option'),
    
    // Menu Items
    menuItems: document.querySelectorAll('.menu-item-box[data-section]'),
    navLinks: document.querySelectorAll('.nav-link[data-section]'),
    
    // Global Navigation Strip
    globalNavStrip: document.getElementById('globalNavStrip'),
    navStripBtns: document.querySelectorAll('.nav-strip-btn'),
    
    // Quick Redirection Strip
    quickRedirectStrip: document.getElementById('quickRedirectStrip'),
    redirectStripBtns: document.querySelectorAll('.redirect-strip-btn'),
    
    // Content Sections
    contentSections: document.querySelectorAll('.content-section'),
    
    // Statistics Cards
    statCardApplied: document.getElementById('statCardApplied'),
    statCardActive: document.getElementById('statCardActive'),
    statCardEarnings: document.getElementById('statCardEarnings'),
    statCardCompleted: document.getElementById('statCardCompleted'),
    
    // Quick Actions - Dashboard
    quickActionFindJobs: document.getElementById('quickActionFindJobs'),
    quickActionAppliedJobs: document.getElementById('quickActionAppliedJobs'),
    quickActionActiveJobs: document.getElementById('quickActionActiveJobs'),
    quickActionAI: document.getElementById('quickActionAI'),
    quickActionHistory: document.getElementById('quickActionHistory'),
    quickActionLogout: document.getElementById('quickActionLogout'),
    
    // Stats Display
    totalApplied: document.getElementById('totalApplied'),
    activeJobs: document.getElementById('activeJobs'),
    totalEarnings: document.getElementById('totalEarnings'),
    completedJobs: document.getElementById('completedJobs'),
    
    // Modals
    modals: document.querySelectorAll('.popup-overlay'),
    applyJobModal: document.getElementById('applyJobModal'),
    chatModal: document.getElementById('chatModal'),
    jobDetailsModal: document.getElementById('jobDetailsModal'),
    workHistoryModal: document.getElementById('workHistoryModal'),
    aiAssistantModal: document.getElementById('aiAssistantModal'),
    confirmationModal: document.getElementById('confirmationModal'),
    
    // Modal Close Buttons
    closeApplyModalBtn: document.getElementById('closeApplyModalBtn'),
    closeChatModalBtn: document.getElementById('closeChatModalBtn'),
    closeJobDetailsModalBtn: document.getElementById('closeJobDetailsModalBtn'),
    closeWorkHistoryModalBtn: document.getElementById('closeWorkHistoryModalBtn'),
    closeAIModalBtn: document.getElementById('closeAIModalBtn'),
    closeConfirmationModalBtn: document.getElementById('closeConfirmationModalBtn'),
    
    // Confirmation Modal Buttons
    confirmYesBtn: document.getElementById('confirmYesBtn'),
    confirmNoBtn: document.getElementById('confirmNoBtn'),
    
    // Job Application
    submitApplicationBtn: document.getElementById('submitApplicationBtn'),
    expectedPriceInput: document.getElementById('expectedPrice'),
    coverMessageInput: document.getElementById('coverMessage'),
    jobPreviewContent: document.getElementById('jobPreviewContent'),
    
    // Availability Dropdown
    availabilityDropdown: document.getElementById('availabilityDropdown'),
    availabilityToggle: document.getElementById('availabilityToggle'),
    availabilityText: document.getElementById('availabilityText'),
    availabilityMenu: document.getElementById('availabilityMenu'),
    availabilityInput: document.getElementById('availability'),
    customDateContainer: document.getElementById('customDateContainer'),
    customDateInput: document.getElementById('customDateInput'),
    
    // Search Inputs
    jobSearch: document.getElementById('jobSearch'),
    appliedSearch: document.getElementById('appliedSearch'),
    historySearch: document.getElementById('historySearch'),
    
    // Chat
    chatInput: document.getElementById('chatInput'),
    chatSendBtn: document.getElementById('chatSendBtn'),
    chatMessages: document.getElementById('chatMessages'),
    chatEmployerName: document.getElementById('chatEmployerName'),
    fileUploadBtn: document.getElementById('fileUploadBtn'),
    fileInput: document.getElementById('fileInput'),
    voiceMessageBtn: document.getElementById('voiceMessageBtn'),
    
    // AI Assistant
    aiInput: document.getElementById('aiInput'),
    aiSendBtn: document.getElementById('aiSendBtn'),
    aiChatMessages: document.getElementById('aiChatMessages'),
    aiModalInput: document.getElementById('aiModalInput'),
    aiModalSendBtn: document.getElementById('aiModalSendBtn'),
    aiModalMessages: document.getElementById('aiModalMessages'),
    aiFileUploadBtn: document.getElementById('aiFileUploadBtn'),
    aiFileInput: document.getElementById('aiFileInput'),
    
    // Containers
    findJobsContainer: document.getElementById('findJobsContainer'),
    appliedJobsContainer: document.getElementById('appliedJobsContainer'),
    activeJobsContainer: document.getElementById('activeJobsContainer'),
    workHistoryContainer: document.getElementById('workHistoryContainer'),
    jobDetailsContent: document.getElementById('jobDetailsContent'),
    workHistoryContent: document.getElementById('workHistoryContent'),
    skillOptions: document.getElementById('skillOptions'),
    
    // Filter Buttons
    clearAllFilters: document.getElementById('clearAllFilters'),
    clearAppliedFilters: document.getElementById('clearAppliedFilters'),
    clearHistoryFilters: document.getElementById('clearHistoryFilters'),
    
    // Logout Buttons
    logoutBtn: document.getElementById('logoutBtn'),
    stripLogoutBtn: document.getElementById('stripLogoutBtn'),
    
    // Notification
    notificationWrapper: document.getElementById('notificationWrapper'),
    
    // Worker Name Display
    workerNameDisplay: document.getElementById('workerNameDisplay'),
    profileName: document.getElementById('profileName')
};

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

// ============================================
// INITIALIZATION
// ============================================
async function initializeApp() {
    console.log('Initializing Worker Dashboard...');
    
    // Load settings
    loadSettings();
    
    // Check authentication
    await checkAuth();
    
    // Set worker name in UI
    updateWorkerInfo();
    
    // Set initial active section
    setActiveSection(AppState.activeSection);
    
    // Load data from server
    await loadDashboardData();
    
    // Render all data
    updateStats();
    renderSkillFilters();
    renderFindJobs();
    renderAppliedJobs();
    renderActiveJobs();
    renderWorkHistory();
    
    // Setup all event listeners
    setupEventListeners();
    setupFilterListeners();
    setupCustomDropdown();
    
    console.log('Worker Dashboard initialized successfully');
}

async function checkAuth() {
    try {
        const response = await fetch('/api/worker/dashboard-data/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        if (!response.ok) {
            window.location.href = '/login_worker/';
            return;
        }
        
        const data = await response.json();
        if (!data.success) {
            window.location.href = '/login_worker/';
        }
    } catch (error) {
        console.error('Auth check failed:', error);
        window.location.href = '/login_worker/';
    }
}

async function loadDashboardData() {
    try {
        const response = await fetch('/api/worker/dashboard-data/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            AppState.jobs = data.data.jobs || [];
            AppState.appliedJobs = data.data.applied_jobs || [];
            AppState.activeJobs = data.data.active_jobs || [];
            AppState.workHistory = data.data.work_history || [];
            
            // Update worker info from session
            if (window.workerData) {
                AppState.worker = window.workerData;
                AppState.workerId = window.workerData.id;
            }
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Error loading data. Please refresh.', 'error');
    }
}

function updateWorkerInfo() {
    if (window.workerData) {
        if (DOM.workerNameDisplay) {
            DOM.workerNameDisplay.textContent = window.workerData.full_name || 'Worker';
        }
        if (DOM.profileName) {
            DOM.profileName.textContent = window.workerData.full_name || 'Worker';
        }
    }
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================
function setupEventListeners() {
    // Sidebar
    DOM.hamburgerBtn?.addEventListener('click', openSidebar);
    DOM.sidebarClose?.addEventListener('click', closeSidebar);
    DOM.sidebarOverlay?.addEventListener('click', closeSidebar);
    
    // Settings
    DOM.sidebarSettingsIcon?.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', (e) => {
        if (DOM.settingsDropdown && !DOM.settingsDropdown.contains(e.target) && 
            DOM.sidebarSettingsIcon && !DOM.sidebarSettingsIcon.contains(e.target)) {
            DOM.settingsDropdown.classList.remove('active');
            AppState.settingsDropdownOpen = false;
        }
    });
    
    // Language and Theme Settings
    DOM.languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            setLanguage(option.dataset.lang);
        });
    });
    
    DOM.themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            setTheme(option.dataset.theme);
        });
    });
    
    // Navigation - Sidebar menu items
    DOM.menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(item.dataset.section);
            closeSidebar();
        });
    });
    
    // Top navbar links
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const section = link.dataset.section;
            if (section === 'help' || section === 'about') {
                return;
            }
            e.preventDefault();
            setActiveSection(section);
        });
    });
    
    // Global nav strip buttons
    DOM.navStripBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(btn.dataset.section);
        });
    });
    
    // Quick redirect strip buttons
    DOM.redirectStripBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSection(btn.dataset.section);
        });
    });
    
    // Statistics Cards
    DOM.statCardApplied?.addEventListener('click', () => setActiveSection('applied-jobs'));
    DOM.statCardActive?.addEventListener('click', () => setActiveSection('active-jobs'));
    DOM.statCardEarnings?.addEventListener('click', () => setActiveSection('work-history'));
    DOM.statCardCompleted?.addEventListener('click', () => setActiveSection('work-history'));
    
    // Quick Actions
    DOM.quickActionFindJobs?.addEventListener('click', () => setActiveSection('find-jobs'));
    DOM.quickActionAppliedJobs?.addEventListener('click', () => setActiveSection('applied-jobs'));
    DOM.quickActionActiveJobs?.addEventListener('click', () => setActiveSection('active-jobs'));
    DOM.quickActionAI?.addEventListener('click', () => setActiveSection('ai-assistant'));
    DOM.quickActionHistory?.addEventListener('click', () => setActiveSection('work-history'));
    DOM.quickActionLogout?.addEventListener('click', handleLogout);
    
    // Modal Close Buttons
    DOM.closeApplyModalBtn?.addEventListener('click', () => closeModal(DOM.applyJobModal));
    DOM.closeChatModalBtn?.addEventListener('click', () => closeModal(DOM.chatModal));
    DOM.closeJobDetailsModalBtn?.addEventListener('click', () => closeModal(DOM.jobDetailsModal));
    DOM.closeWorkHistoryModalBtn?.addEventListener('click', () => closeModal(DOM.workHistoryModal));
    DOM.closeAIModalBtn?.addEventListener('click', () => {
        closeModal(DOM.aiAssistantModal);
        if (AppState.previousSection && AppState.previousSection !== 'dashboard') {
            setTimeout(() => setActiveSection(AppState.previousSection), 100);
        }
    });
    DOM.closeConfirmationModalBtn?.addEventListener('click', () => closeModal(DOM.confirmationModal));
    
    // Confirmation Modal
    DOM.confirmYesBtn?.addEventListener('click', handleConfirmationYes);
    DOM.confirmNoBtn?.addEventListener('click', handleConfirmationNo);
    
    // Close modals on overlay click
    DOM.modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });
    
    // Job Application
    DOM.submitApplicationBtn?.addEventListener('click', submitJobApplication);
    
    // Search Functionality
    DOM.jobSearch?.addEventListener('input', (e) => {
        AppState.jobFilters.search = e.target.value;
        renderFindJobs();
    });
    
    DOM.appliedSearch?.addEventListener('input', (e) => {
        AppState.appliedFilters.search = e.target.value;
        renderAppliedJobs();
    });
    
    DOM.historySearch?.addEventListener('input', (e) => {
        AppState.historyFilters.search = e.target.value;
        renderWorkHistory();
    });
    
    // AI Assistant
    DOM.aiSendBtn?.addEventListener('click', () => sendAIMessage(DOM.aiInput, DOM.aiChatMessages));
    DOM.aiInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
    });
    
    DOM.aiModalSendBtn?.addEventListener('click', () => sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages));
    DOM.aiModalInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
    });
    
    // AI File Upload
    DOM.aiFileUploadBtn?.addEventListener('click', () => DOM.aiFileInput?.click());
    DOM.aiFileInput?.addEventListener('change', handleAIFileUpload);
    
    // Chat
    DOM.chatSendBtn?.addEventListener('click', sendChatMessage);
    DOM.chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    DOM.fileUploadBtn?.addEventListener('click', () => DOM.fileInput?.click());
    DOM.fileInput?.addEventListener('change', handleChatFileUpload);
    DOM.voiceMessageBtn?.addEventListener('click', toggleVoiceRecording);
    
    // Logout
    DOM.logoutBtn?.addEventListener('click', handleLogout);
    DOM.stripLogoutBtn?.addEventListener('click', handleLogout);
    
    // Profile Edit
    document.getElementById('profileEditBtn')?.addEventListener('click', () => {
        showNotification('Profile editing feature coming soon!', 'info');
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
            closeSidebar();
        }
    });
}

// ============================================
// SIDEBAR FUNCTIONS
// ============================================
function openSidebar() {
    DOM.sidebar?.classList.add('active');
    DOM.sidebarOverlay?.classList.add('active');
    AppState.sidebarOpen = true;
}

function closeSidebar() {
    DOM.sidebar?.classList.remove('active');
    DOM.sidebarOverlay?.classList.remove('active');
    if (DOM.settingsDropdown) DOM.settingsDropdown.classList.remove('active');
    AppState.sidebarOpen = false;
    AppState.settingsDropdownOpen = false;
}

// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    AppState.settings.language = lang;
    saveSettings();
    updateLanguageUI();
    translatePage(lang);
    showNotification(`Language changed to ${getLanguageName(lang)}`, 'success');
}

function getLanguageName(lang) {
    const names = { 'en': 'English', 'hi': 'Hindi', 'mr': 'Marathi' };
    return names[lang] || lang;
}

function loadSettings() {
    const savedSettings = localStorage.getItem('shramikconnect_worker_settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        AppState.settings = { ...AppState.settings, ...settings };
    }
    applyTheme();
    updateThemeUI();
    updateLanguageUI();
    translatePage(AppState.settings.language);
}

function saveSettings() {
    localStorage.setItem('shramikconnect_worker_settings', JSON.stringify(AppState.settings));
}

function updateLanguageUI() {
    DOM.languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === AppState.settings.language) {
            option.classList.add('active');
        }
    });
}

function translatePage(lang) {
    if (!translations[lang]) return;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholderKey = element.getAttribute('data-i18n-placeholder') || key;
                if (translations[lang][placeholderKey]) {
                    element.placeholder = translations[lang][placeholderKey];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('button span[data-i18n]').forEach(span => {
        const key = span.getAttribute('data-i18n');
        if (translations[lang][key]) span.textContent = translations[lang][key];
    });
}

// ============================================
// THEME FUNCTIONS
// ============================================
function setTheme(theme) {
    AppState.settings.theme = theme;
    saveSettings();
    applyTheme();
    updateThemeUI();
    showNotification(`Theme changed to ${theme}`, 'success');
}

function applyTheme() {
    document.body.classList.remove('light-theme', 'dark-theme');
    
    if (AppState.settings.theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
    } else {
        document.body.classList.add(`${AppState.settings.theme}-theme`);
    }
}

function updateThemeUI() {
    DOM.themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === AppState.settings.theme) {
            option.classList.add('active');
        }
    });
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
function setActiveSection(sectionId) {
    if (!sectionId) return;
    
    if (sectionId === AppState.activeSection && sectionId !== 'ai-assistant') {
        return;
    }
    
    AppState.previousSection = AppState.activeSection;
    AppState.activeSection = sectionId;
    
    if (sectionId === 'ai-assistant') {
        const modalOpeningSections = ['find-jobs', 'applied-jobs', 'active-jobs', 'work-history'];
        if (AppState.previousSection && modalOpeningSections.includes(AppState.previousSection)) {
            openModal(DOM.aiAssistantModal);
            return;
        } else {
            showAIFullPage();
            return;
        }
    }
    
    // Normal navigation
    DOM.contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) section.classList.add('active');
    });
    
    DOM.menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) item.classList.add('active');
    });
    
    DOM.navLinks.forEach(link => {
        if (link.dataset.section === 'help' || link.dataset.section === 'about') return;
        link.classList.remove('active');
        if (link.dataset.section === 'dashboard') link.classList.add('active');
    });
    
    DOM.navStripBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) btn.classList.add('active');
    });
    
    DOM.redirectStripBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) btn.classList.add('active');
    });
    
    updateNavigationStrips(sectionId);
    closeSidebar();
    closeAllFilterOptions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAIFullPage() {
    DOM.contentSections.forEach(section => section.classList.remove('active'));
    document.getElementById('ai-assistant')?.classList.add('active');
    
    DOM.menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === 'ai-assistant') item.classList.add('active');
    });
    
    DOM.navLinks.forEach(link => {
        if (link.dataset.section === 'help' || link.dataset.section === 'about') return;
        link.classList.remove('active');
        if (link.dataset.section === 'dashboard') link.classList.add('active');
    });
    
    DOM.navStripBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === 'ai-assistant') btn.classList.add('active');
    });
    
    updateNavigationStrips('ai-assistant');
    closeSidebar();
    closeAllFilterOptions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavigationStrips(sectionId) {
    DOM.globalNavStrip?.classList.remove('active');
    DOM.quickRedirectStrip?.classList.remove('active');
    
    if (sectionId === 'dashboard') {
        DOM.globalNavStrip?.classList.remove('active');
    } else if (sectionId === 'ai-assistant') {
        DOM.globalNavStrip?.classList.add('active');
    } else {
        DOM.globalNavStrip?.classList.add('active');
    }
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.marginTop = DOM.globalNavStrip?.classList.contains('active') ? '140px' : '70px';
    }
}

// ============================================
// SETTINGS FUNCTIONS
// ============================================
function toggleSettingsDropdown(e) {
    e?.stopPropagation();
    DOM.settingsDropdown?.classList.toggle('active');
    AppState.settingsDropdownOpen = DOM.settingsDropdown?.classList.contains('active');
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modal) {
    if (!modal) return;
    
    if (modal.id === 'aiAssistantModal') {
        DOM.globalNavStrip?.classList.remove('active');
        document.querySelector('.main-content').style.marginTop = '70px';
    }
    
    closeAllModals();
    modal.classList.add('active');
    AppState.activeModals.push(modal.id);
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    const index = AppState.activeModals.indexOf(modal.id);
    if (index > -1) AppState.activeModals.splice(index, 1);
    
    if (AppState.activeModals.length === 0) {
        document.body.style.overflow = 'auto';
        updateNavigationStrips(AppState.activeSection);
    }
}

function closeAllModals() {
    DOM.modals.forEach(modal => modal.classList.remove('active'));
    AppState.activeModals = [];
    document.body.style.overflow = 'auto';
    updateNavigationStrips(AppState.activeSection);
}

// ============================================
// FILTER FUNCTIONS
// ============================================
function setupFilterListeners() {
    // Find Jobs Filters
    document.querySelectorAll('#find-jobs .filter-parent-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFilterOptions('find-jobs', btn.dataset.filterType);
        });
    });
    
    document.querySelectorAll('#find-jobs .filter-nested-btn[data-sort]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            AppState.jobFilters.activeSort = btn.dataset.sort;
            closeAllFilterOptions();
            renderFindJobs();
        });
    });
    
    // Applied Jobs Filters
    document.querySelectorAll('#applied-jobs .filter-parent-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFilterOptions('applied-jobs', btn.dataset.filterType);
        });
    });
    
    document.querySelectorAll('#applied-jobs .filter-nested-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (btn.dataset.sort) {
                AppState.appliedFilters.activeSort = btn.dataset.sort;
            } else if (btn.dataset.filter) {
                AppState.appliedFilters.status = btn.dataset.filter;
            }
            closeAllFilterOptions();
            renderAppliedJobs();
        });
    });
    
    // Work History Filters
    document.querySelectorAll('#work-history .filter-parent-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFilterOptions('work-history', btn.dataset.filterType);
        });
    });
    
    document.querySelectorAll('#work-history .filter-nested-btn[data-sort]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            AppState.historyFilters.activeSort = btn.dataset.sort;
            closeAllFilterOptions();
            renderWorkHistory();
        });
    });
    
    // Clear Filters
    DOM.clearAllFilters?.addEventListener('click', () => {
        AppState.jobFilters = { search: '', activeSort: null, selectedSkill: null };
        if (DOM.jobSearch) DOM.jobSearch.value = '';
        renderFindJobs();
        closeAllFilterOptions();
    });
    
    DOM.clearAppliedFilters?.addEventListener('click', () => {
        AppState.appliedFilters = { search: '', activeSort: null, status: null };
        if (DOM.appliedSearch) DOM.appliedSearch.value = '';
        renderAppliedJobs();
        closeAllFilterOptions();
    });
    
    DOM.clearHistoryFilters?.addEventListener('click', () => {
        AppState.historyFilters = { search: '', activeSort: null };
        if (DOM.historySearch) DOM.historySearch.value = '';
        renderWorkHistory();
        closeAllFilterOptions();
    });
    
    document.addEventListener('click', closeAllFilterOptions);
}

function toggleFilterOptions(section, filterType) {
    closeAllFilterOptions();
    
    const filterGroup = document.querySelector(`#${section} .filter-parent-btn[data-filter-type="${filterType}"]`)?.closest('.filter-group');
    if (!filterGroup) return;
    
    const nestedOptions = filterGroup.querySelector('.filter-nested-options');
    const parentBtn = filterGroup.querySelector('.filter-parent-btn');
    
    nestedOptions?.classList.add('show');
    parentBtn?.classList.add('active');
}

function closeAllFilterOptions() {
    document.querySelectorAll('.filter-nested-options').forEach(options => {
        options.classList.remove('show');
    });
    document.querySelectorAll('.filter-parent-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// ============================================
// SKILL FILTER FUNCTIONS
// ============================================
function renderSkillFilters() {
    if (!DOM.skillOptions) return;
    
    DOM.skillOptions.innerHTML = '';
    
    const clearBtn = document.createElement('button');
    clearBtn.className = 'filter-nested-btn';
    clearBtn.innerHTML = `<i class="fas fa-times-circle"></i> <span>Clear Skill Filter</span>`;
    clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AppState.jobFilters.selectedSkill = null;
        renderSkillFilters();
        renderFindJobs();
        closeAllFilterOptions();
    });
    DOM.skillOptions.appendChild(clearBtn);
    
    const divider = document.createElement('div');
    divider.style.cssText = 'height:1px;background:rgba(67,98,201,0.1);margin:8px 0;';
    DOM.skillOptions.appendChild(divider);
    
    AppState.allSkills.forEach(skill => {
        const btn = document.createElement('button');
        btn.className = 'filter-nested-btn';
        btn.dataset.skill = skill;
        btn.innerHTML = `<i class="fas ${AppState.jobFilters.selectedSkill === skill ? 'fa-check-circle' : 'fa-circle'}"></i> <span>${skill}</span>`;
        
        if (AppState.jobFilters.selectedSkill === skill) btn.classList.add('active');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            AppState.jobFilters.selectedSkill = AppState.jobFilters.selectedSkill === skill ? null : skill;
            renderSkillFilters();
            renderFindJobs();
            closeAllFilterOptions();
        });
        
        DOM.skillOptions.appendChild(btn);
    });
}

// ============================================
// AVAILABILITY DROPDOWN
// ============================================
function setupCustomDropdown() {
    if (!DOM.availabilityToggle || !DOM.availabilityMenu) return;
    
    DOM.availabilityToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.availabilityMenu.classList.toggle('show');
        DOM.availabilityToggle.classList.toggle('active');
    });
    
    DOM.availabilityMenu.querySelectorAll('.dropdown-item:not(.custom-date-container)').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;
            const icon = item.querySelector('i').className;
            
            DOM.availabilityText.innerHTML = `
                <i class="${icon} availability-icon"></i>
                <span class="availability-label">${text}</span>
            `;
            DOM.availabilityInput.value = value;
            
            if (value === 'custom_date') {
                DOM.customDateContainer.style.display = 'block';
            } else {
                DOM.customDateContainer.style.display = 'none';
                DOM.customDateInput.value = '';
            }
            
            DOM.availabilityMenu.classList.remove('show');
            DOM.availabilityToggle.classList.remove('active');
        });
    });
    
    document.addEventListener('click', () => {
        DOM.availabilityMenu.classList.remove('show');
        DOM.availabilityToggle.classList.remove('active');
    });
}

// ============================================
// STATISTICS FUNCTIONS
// ============================================
function updateStats() {
    if (DOM.totalApplied) DOM.totalApplied.textContent = AppState.appliedJobs.length;
    if (DOM.activeJobs) DOM.activeJobs.textContent = AppState.activeJobs.length;
    
    const totalEarnings = AppState.workHistory.reduce((sum, job) => sum + (job.payment || 0), 0);
    if (DOM.totalEarnings) DOM.totalEarnings.textContent = `₹${totalEarnings.toLocaleString('en-IN')}`;
    if (DOM.completedJobs) DOM.completedJobs.textContent = AppState.workHistory.length;
}

// ============================================
// JOB FUNCTIONS
// ============================================
function renderFindJobs() {
    if (!DOM.findJobsContainer) return;
    
    let jobs = [...AppState.jobs];
    
    // Filter out applied and active jobs
    const appliedJobIds = AppState.appliedJobs.map(job => job.jobId);
    const activeJobIds = AppState.activeJobs.map(job => job.jobId);
    const excludedIds = [...appliedJobIds, ...activeJobIds];
    jobs = jobs.filter(job => !excludedIds.includes(job.id));
    
    // Apply search filter
    if (AppState.jobFilters.search) {
        const searchTerm = AppState.jobFilters.search.toLowerCase();
        jobs = jobs.filter(job => 
            (job.title || '').toLowerCase().includes(searchTerm) ||
            (job.employerName || '').toLowerCase().includes(searchTerm) ||
            (job.location || '').toLowerCase().includes(searchTerm) ||
            (job.skills || []).some(skill => (skill || '').toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply skill filter
    if (AppState.jobFilters.selectedSkill) {
        jobs = jobs.filter(job => 
            (job.skills || []).some(skill => 
                (skill || '').toLowerCase() === AppState.jobFilters.selectedSkill.toLowerCase()
            )
        );
    }
    
    // Apply sorting
    if (AppState.jobFilters.activeSort) {
        switch (AppState.jobFilters.activeSort) {
            case 'payment-asc':
                jobs.sort((a, b) => (a.pay || 0) - (b.pay || 0));
                break;
            case 'payment-desc':
                jobs.sort((a, b) => (b.pay || 0) - (a.pay || 0));
                break;
            case 'location-asc':
                jobs.sort((a, b) => (a.distance || 999) - (b.distance || 999));
                break;
            case 'location-desc':
                jobs.sort((a, b) => (b.distance || 0) - (a.distance || 0));
                break;
        }
    }
    
    DOM.findJobsContainer.innerHTML = '';
    
    if (jobs.length === 0) {
        DOM.findJobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon"><i class="fas fa-search"></i></div>
                <h3 class="empty-state-title">No Jobs Found</h3>
                <p class="empty-state-message">${AppState.jobFilters.search || AppState.jobFilters.selectedSkill ? 'Try adjusting your search criteria' : 'Check back later for new job postings'}</p>
                ${AppState.jobFilters.selectedSkill ? `<button class="small-btn" id="clearSkillFilterBtn" style="margin-top:15px;"><i class="fas fa-times"></i> Clear Skill Filter</button>` : ''}
            </div>
        `;
        
        document.getElementById('clearSkillFilterBtn')?.addEventListener('click', () => {
            AppState.jobFilters.selectedSkill = null;
            renderSkillFilters();
            renderFindJobs();
        });
        return;
    }
    
    jobs.forEach(job => DOM.findJobsContainer.appendChild(createJobCard(job)));
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.dataset.id = job.id;
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title || 'Untitled'}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName || 'Unknown'}</p>
                <p class="job-location">📍 ${job.location || 'Unknown'} ${job.distance ? `(${job.distance} km)` : ''}</p>
            </div>
        </div>
        <div class="job-details">
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>Pay: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-clock"></i><span>Time: ${job.time || 0} hours</span></div>
            <div class="job-detail"><i class="fas fa-tools"></i><span>Skills: ${(job.skills || []).join(', ')}</span></div>
        </div>
        <div class="job-actions">
            <button class="small-btn apply-btn"><i class="fas fa-paper-plane"></i> Apply</button>
            <button class="small-btn chat-job-btn"><i class="fas fa-comment"></i> Chat</button>
            <button class="small-btn view-details-btn"><i class="fas fa-eye"></i> Details</button>
        </div>
    `;
    
    card.querySelector('.apply-btn').addEventListener('click', () => applyForJob(job.id));
    card.querySelector('.chat-job-btn').addEventListener('click', () => openChatFromJob(job.id));
    card.querySelector('.view-details-btn').addEventListener('click', () => viewJobDetails(job.id));
    
    return card;
}

function applyForJob(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    AppState.currentJob = job;
    
    DOM.jobPreviewContent.innerHTML = `
        <h3>${job.title}</h3>
        <div class="preview-detail"><span class="preview-label">Employer:</span><span class="preview-value">${job.employerName}</span></div>
        <div class="preview-detail"><span class="preview-label">Location:</span><span class="preview-value">${job.location}</span></div>
        <div class="preview-detail"><span class="preview-label">Job Pay:</span><span class="preview-value">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
        <div class="preview-detail"><span class="preview-label">Time Required:</span><span class="preview-value">${job.time || 0} hours</span></div>
        <div class="preview-detail"><span class="preview-label">Skills Required:</span><span class="preview-value">${(job.skills || []).join(', ')}</span></div>
    `;
    
    DOM.expectedPriceInput.value = Math.round((job.pay || 0) * 0.9);
    DOM.availabilityText.innerHTML = `<i class="fas fa-calendar availability-icon"></i><span class="availability-label">Select availability</span>`;
    DOM.availabilityInput.value = '';
    DOM.customDateContainer.style.display = 'none';
    DOM.customDateInput.value = '';
    DOM.coverMessageInput.value = '';
    
    openModal(DOM.applyJobModal);
}

async function submitJobApplication() {
    if (!AppState.currentJob) return;
    
    const expectedPrice = parseInt(DOM.expectedPriceInput.value);
    let availability = DOM.availabilityInput.value;
    const coverMessage = DOM.coverMessageInput.value;
    
    if (availability === 'custom_date' && DOM.customDateInput.value) {
        availability = DOM.customDateInput.value;
    }
    
    if (!expectedPrice || !availability) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (expectedPrice > AppState.currentJob.pay * 2) {
        if (!confirm('Your expected price seems very high. Are you sure you want to submit this application?')) return;
    }
    
    try {
        const response = await fetch('/api/apply-job/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                job_id: AppState.currentJob.id,
                expected_price: expectedPrice,
                availability: availability,
                cover_message: coverMessage
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            await loadDashboardData();
            renderFindJobs();
            renderAppliedJobs();
            updateStats();
            closeModal(DOM.applyJobModal);
            showNotification('Job application submitted successfully!', 'success');
        } else {
            showNotification(data.message || 'Failed to submit application', 'error');
        }
    } catch (error) {
        console.error('Error applying for job:', error);
        showNotification('Network error. Please try again.', 'error');
    }
}

function viewJobDetails(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    DOM.jobDetailsContent.innerHTML = `
        <div class="detail-section">
            <h3>Job Details</h3>
            <div class="detail-row"><span class="detail-label">Job Title</span><span class="detail-value">${job.title}</span></div>
            <div class="detail-row"><span class="detail-label">Work Type</span><span class="detail-value">${job.workType}</span></div>
            <div class="detail-row"><span class="detail-label">Job Description</span><span class="detail-value">${job.description}</span></div>
            <div class="detail-row"><span class="detail-label">Required Skills</span><span class="detail-value">${(job.skills || []).join(', ')}</span></div>
            <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">${job.location} ${job.distance ? `(${job.distance} km from you)` : ''}</span></div>
            <div class="detail-row"><span class="detail-label">Time Required</span><span class="detail-value">${job.time || 0} hours</span></div>
            <div class="detail-row"><span class="detail-label">Posted Date</span><span class="detail-value">${new Date(job.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
            <div class="detail-row"><span class="detail-label">Employer Name</span><span class="detail-value">${job.employerName}</span></div>
            <div class="detail-row"><span class="detail-label">Payment</span><span class="detail-value">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
        </div>
        <div class="detail-section">
            <h3>Employer Details</h3>
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px;">
                <img src="${job.employerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${job.employerName}" style="width:60px;height:60px;border-radius:50%;">
                <div><div style="font-weight:600;font-size:18px;">${job.employerName}</div><div style="color:#666;">${job.workType} Employer</div></div>
            </div>
        </div>
        <div class="detail-section">
            <h3>Payment Details</h3>
            <div class="detail-row"><span class="detail-label">Job Pay</span><span class="detail-value" style="color:#4362C9;font-size:24px;">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="detail-row"><span class="detail-label">Payment Terms</span><span class="detail-value">Payment upon completion of work</span></div>
        </div>
        <div style="display:flex;gap:15px;margin-top:20px;">
            <button class="submit-job-btn" id="applyFromDetailsBtn"><i class="fas fa-paper-plane"></i> Apply Now</button>
            <button class="small-btn chat-job-btn" style="padding:15px 20px;" id="chatFromDetailsBtn"><i class="fas fa-comment"></i> Chat</button>
        </div>
    `;
    
    document.getElementById('applyFromDetailsBtn').addEventListener('click', () => {
        closeModal(DOM.jobDetailsModal);
        applyForJob(job.id);
    });
    
    document.getElementById('chatFromDetailsBtn').addEventListener('click', () => {
        closeModal(DOM.jobDetailsModal);
        openChatFromJob(job.id);
    });
    
    openModal(DOM.jobDetailsModal);
}

// ============================================
// APPLIED JOBS FUNCTIONS
// ============================================
function renderAppliedJobs() {
    if (!DOM.appliedJobsContainer) return;
    
    let appliedJobs = [...AppState.appliedJobs];
    
    if (AppState.appliedFilters.search) {
        const searchTerm = AppState.appliedFilters.search.toLowerCase();
        appliedJobs = appliedJobs.filter(job => 
            (job.jobTitle || '').toLowerCase().includes(searchTerm) ||
            (job.employerName || '').toLowerCase().includes(searchTerm) ||
            (job.location || '').toLowerCase().includes(searchTerm)
        );
    }
    
    if (AppState.appliedFilters.status) {
        appliedJobs = appliedJobs.filter(job => 
            AppState.appliedFilters.status === `status-${job.status}`
        );
    }
    
    if (AppState.appliedFilters.activeSort) {
        switch (AppState.appliedFilters.activeSort) {
            case 'date-desc':
                appliedJobs.sort((a, b) => new Date(b.appliedDate || 0) - new Date(a.appliedDate || 0));
                break;
            case 'date-asc':
                appliedJobs.sort((a, b) => new Date(a.appliedDate || 0) - new Date(b.appliedDate || 0));
                break;
        }
    }
    
    DOM.appliedJobsContainer.innerHTML = '';
    
    if (appliedJobs.length === 0) {
        DOM.appliedJobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon"><i class="fas fa-file-alt"></i></div>
                <h3 class="empty-state-title">No Applied Jobs</h3>
                <p class="empty-state-message">${AppState.appliedFilters.search || AppState.appliedFilters.status ? 'Try adjusting your search criteria' : 'You haven\'t applied to any jobs yet'}</p>
                ${AppState.appliedFilters.status ? `<button class="small-btn" id="clearStatusFilterBtn" style="margin-top:15px;"><i class="fas fa-times"></i> Clear Status Filter</button>` : ''}
            </div>
        `;
        
        document.getElementById('clearStatusFilterBtn')?.addEventListener('click', () => {
            AppState.appliedFilters.status = null;
            renderAppliedJobs();
        });
        return;
    }
    
    appliedJobs.forEach(job => DOM.appliedJobsContainer.appendChild(createAppliedJobCard(job)));
}

function createAppliedJobCard(job) {
    const card = document.createElement('div');
    card.className = 'applied-job-card';
    card.dataset.id = job.id;
    
    let statusClass = '', statusText = '', statusIcon = '';
    switch(job.status) {
        case 'applied': statusClass = 'status-applied'; statusText = 'Applied'; statusIcon = 'fa-paper-plane'; break;
        case 'accepted': statusClass = 'status-accepted'; statusText = 'Accepted'; statusIcon = 'fa-check'; break;
        case 'rejected': statusClass = 'status-rejected'; statusText = 'Rejected'; statusIcon = 'fa-times'; break;
        default: statusClass = 'status-applied'; statusText = 'Applied'; statusIcon = 'fa-paper-plane';
    }
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.jobTitle || 'Untitled'}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName || 'Unknown'}</p>
                <p class="job-location">📍 ${job.location || 'Unknown'}</p>
            </div>
            <div class="status-badge ${statusClass}"><i class="fas ${statusIcon}"></i> ${statusText}</div>
        </div>
        <div class="job-details">
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>Job Pay: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-rupee-sign"></i><span>Your Expected: ₹${(job.expectedPrice || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-calendar"></i><span>Applied: ${new Date(job.appliedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
        </div>
        <div class="job-actions">
            <button class="small-btn chat-job-btn"><i class="fas fa-comment"></i> Chat</button>
            <button class="small-btn view-details-btn"><i class="fas fa-eye"></i> View Details</button>
        </div>
    `;
    
    card.querySelector('.chat-job-btn').addEventListener('click', () => openChatFromAppliedJob(job.id));
    card.querySelector('.view-details-btn').addEventListener('click', () => viewAppliedJobDetails(job.id));
    
    return card;
}

// ============================================
// ACTIVE JOBS FUNCTIONS
// ============================================
function renderActiveJobs() {
    if (!DOM.activeJobsContainer) return;
    
    DOM.activeJobsContainer.innerHTML = '';
    
    if (AppState.activeJobs.length === 0) {
        DOM.activeJobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon"><i class="fas fa-briefcase"></i></div>
                <h3 class="empty-state-title">No Active Jobs</h3>
                <p class="empty-state-message">You don't have any active jobs at the moment</p>
                <button class="small-btn" id="findJobsBtn" style="margin-top:15px;"><i class="fas fa-search"></i> Find Jobs</button>
            </div>
        `;
        
        document.getElementById('findJobsBtn')?.addEventListener('click', () => setActiveSection('find-jobs'));
        return;
    }
    
    AppState.activeJobs.forEach(job => DOM.activeJobsContainer.appendChild(createActiveJobCard(job)));
}

function createActiveJobCard(job) {
    const card = document.createElement('div');
    card.className = 'active-job-card';
    card.dataset.id = job.id;
    
    card.innerHTML = `
        <div class="employer-profile">
            <div class="employer-photo"><img src="${job.employerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${job.employerName}"></div>
            <div><h3 class="employer-name">${job.employerName}</h3><p class="job-location">📍 ${job.location}</p></div>
        </div>
        <div class="job-details">
            <div class="job-detail"><i class="fas fa-briefcase"></i><span>${job.jobTitle}</span></div>
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>Payment: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-calendar"></i><span>Started: ${new Date(job.hiredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
        </div>
        <div class="active-job-actions">
            <button class="action-btn-small chat-btn"><i class="fas fa-comment"></i> Chat</button>
            <button class="action-btn-small request-completion-btn"><i class="fas fa-check-circle"></i> Mark Complete</button>
        </div>
    `;
    
    card.querySelector('.chat-btn').addEventListener('click', () => openChatFromActiveJob(job.id));
    card.querySelector('.request-completion-btn').addEventListener('click', () => requestWorkCompletion(job.id));
    
    return card;
}

// ============================================
// WORK HISTORY FUNCTIONS
// ============================================
function renderWorkHistory() {
    if (!DOM.workHistoryContainer) return;
    
    let workHistory = [...AppState.workHistory];
    
    if (AppState.historyFilters.search) {
        const searchTerm = AppState.historyFilters.search.toLowerCase();
        workHistory = workHistory.filter(job => 
            (job.jobTitle || '').toLowerCase().includes(searchTerm) ||
            (job.employerName || '').toLowerCase().includes(searchTerm) ||
            (job.location || '').toLowerCase().includes(searchTerm)
        );
    }
    
    if (AppState.historyFilters.activeSort) {
        switch (AppState.historyFilters.activeSort) {
            case 'date-desc':
                workHistory.sort((a, b) => new Date(b.completionDate || 0) - new Date(a.completionDate || 0));
                break;
            case 'date-asc':
                workHistory.sort((a, b) => new Date(a.completionDate || 0) - new Date(b.completionDate || 0));
                break;
            case 'payment-desc':
                workHistory.sort((a, b) => (b.payment || 0) - (a.payment || 0));
                break;
            case 'payment-asc':
                workHistory.sort((a, b) => (a.payment || 0) - (b.payment || 0));
                break;
        }
    }
    
    DOM.workHistoryContainer.innerHTML = '';
    
    if (workHistory.length === 0) {
        DOM.workHistoryContainer.innerHTML = `
            <tr><td colspan="6" style="text-align:center;padding:40px;">
                <div class="empty-state-container">
                    <div class="empty-state-icon"><i class="fas fa-history"></i></div>
                    <h3 class="empty-state-title">No Work History</h3>
                    <p class="empty-state-message">${AppState.historyFilters.search ? 'Try adjusting your search criteria' : 'Complete jobs will appear here'}</p>
                </div>
            </td></tr>
        `;
        return;
    }
    
    workHistory.forEach(job => DOM.workHistoryContainer.appendChild(createWorkHistoryRow(job)));
}

function createWorkHistoryRow(job) {
    const row = document.createElement('tr');
    const rating = job.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star rating-star"></i>';
    if (hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt rating-star"></i>';
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) starsHTML += '<i class="far fa-star rating-star empty"></i>';
    
    row.innerHTML = `
        <td>${job.employerName || 'Unknown'}</td>
        <td>${job.jobTitle || 'Untitled'}</td>
        <td>${new Date(job.completionDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
        <td>₹${(job.payment || 0).toLocaleString('en-IN')}</td>
        <td><div class="rating-stars">${starsHTML}<span class="rating-value">${rating.toFixed(1)}</span></div></td>
        <td><button class="small-btn view-details-btn"><i class="fas fa-eye"></i> View</button></td>
    `;
    
    row.querySelector('.view-details-btn').addEventListener('click', () => viewWorkHistoryDetails(job.id));
    
    return row;
}

// ============================================
// CHAT FUNCTIONS
// ============================================
function openChatFromJob(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    openChatModal({ name: job.employerName, id: job.id, photo: job.employerPhoto });
}

function openChatFromAppliedJob(appliedJobId) {
    const job = AppState.appliedJobs.find(j => j.id === appliedJobId);
    if (!job) return;
    openChatModal({ name: job.employerName, id: job.jobId });
}

function openChatFromActiveJob(activeJobId) {
    const job = AppState.activeJobs.find(j => j.id === activeJobId);
    if (!job) return;
    openChatModal({ name: job.employerName, id: job.jobId, photo: job.employerPhoto });
}

function openChatModal(employer) {
    if (!employer) return;
    
    DOM.chatEmployerName.textContent = employer.name;
    
    AppState.currentChat = {
        employer: employer,
        messages: [
            { id: 1, sender: 'employer', text: `Hello! I saw your profile and I'm interested in hiring you.`, time: '10:30 AM', date: 'Today' },
            { id: 2, sender: 'worker', text: 'Hi! Thank you for your interest. Can you tell me more about the job requirements?', time: '10:32 AM', date: 'Today' },
            { id: 3, sender: 'employer', text: 'Sure! It requires experience in this field.', time: '10:35 AM', date: 'Today' }
        ]
    };
    
    renderChatMessages();
    openModal(DOM.chatModal);
}

function renderChatMessages() {
    if (!DOM.chatMessages) return;
    
    DOM.chatMessages.innerHTML = '';
    
    AppState.currentChat.messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.sender === 'worker' ? 'sent' : 'received'}`;
        messageElement.innerHTML = `<div class="message-bubble"><p>${message.text}</p><div class="message-time">${message.time}</div></div>`;
        DOM.chatMessages.appendChild(messageElement);
    });
    
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function sendChatMessage() {
    if (!DOM.chatInput || !DOM.chatInput.value.trim()) return;
    
    const messageText = DOM.chatInput.value.trim();
    
    AppState.currentChat.messages.push({
        id: Date.now(),
        sender: 'worker',
        text: messageText,
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        date: 'Today'
    });
    
    DOM.chatInput.value = '';
    renderChatMessages();
    
    setTimeout(() => {
        const replies = [
            "Thanks for your message! Let me check the details.",
            "That sounds good. When can you start?",
            "I'll discuss with my partner and get back to you.",
            "Can you share your previous work experience?",
            "What's your availability next week?"
        ];
        
        AppState.currentChat.messages.push({
            id: Date.now() + 1,
            sender: 'employer',
            text: replies[Math.floor(Math.random() * replies.length)],
            time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            date: 'Today'
        });
        renderChatMessages();
    }, 1000);
}

// ============================================
// CONFIRMATION FUNCTIONS
// ============================================
function requestWorkCompletion(jobId) {
    const job = AppState.activeJobs.find(j => j.id === jobId);
    if (!job) return;
    
    AppState.confirmationData = { jobId: jobId, callback: () => completeWork(jobId) };
    openModal(DOM.confirmationModal);
}

function handleConfirmationYes() {
    if (AppState.confirmationData.callback) AppState.confirmationData.callback();
    closeModal(DOM.confirmationModal);
}

function handleConfirmationNo() {
    closeModal(DOM.confirmationModal);
}

async function completeWork(jobId) {
    try {
        // In a real app, call API to mark job as completed
        const jobIndex = AppState.activeJobs.findIndex(j => j.id === jobId);
        if (jobIndex === -1) return;
        
        const job = AppState.activeJobs[jobIndex];
        
        // Remove from active jobs
        AppState.activeJobs.splice(jobIndex, 1);
        
        // Refresh data
        await loadDashboardData();
        renderActiveJobs();
        renderWorkHistory();
        updateStats();
        
        showNotification('Job marked as completed!', 'success');
    } catch (error) {
        console.error('Error completing work:', error);
        showNotification('Error completing work. Please try again.', 'error');
    }
}

// ============================================
// AI ASSISTANT FUNCTIONS
// ============================================
function sendAIMessage(inputElement, messagesContainer) {
    if (!inputElement || !inputElement.value.trim()) return;
    
    const messageText = inputElement.value.trim();
    addAIMessage('user', messageText, messagesContainer);
    inputElement.value = '';
    
    setTimeout(() => {
        const response = generateAIResponse(messageText);
        addAIMessage('ai', response, messagesContainer);
    }, 1000);
}

function addAIMessage(sender, text, container) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;
    messageDiv.innerHTML = `
        <div class="message-avatar"><i class="fas fa-${sender === 'ai' ? 'robot' : 'user'}"></i></div>
        <div class="message-content"><p>${text}</p></div>
    `;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    const currentLang = AppState.settings.language;
    
    if (lowerMessage.includes('best job') || lowerMessage.includes('recommend')) {
        const skills = AppState.worker.profession || 'electrician';
        const matchingJobs = AppState.jobs.filter(job => 
            (job.skills || []).some(skill => (skill || '').toLowerCase().includes(skills)) ||
            (job.title || '').toLowerCase().includes(skills)
        );
        
        if (matchingJobs.length > 0) {
            const job = matchingJobs[0];
            return currentLang === 'hi' 
                ? `आपके कौशल "${AppState.worker.profession}" के आधार पर, मैं "${job.title}" नौकरी की सिफारिश करता हूं जो ${job.location} में है। यह ₹${job.pay} का भुगतान करती है।`
                : currentLang === 'mr'
                ? `तुमच्या कौशल्य "${AppState.worker.profession}" वर आधारित, मी "${job.title}" नोकरीची शिफारस करतो जी ${job.location} मध्ये आहे.`
                : `Based on your skills as a ${AppState.worker.profession}, I recommend the "${job.title}" job in ${job.location}.`;
        } else {
            return currentLang === 'hi'
                ? `मुझे "${AppState.worker.profession}" से मेल खाती कोई नौकरी नहीं मिली।`
                : currentLang === 'mr'
                ? `मला "${AppState.worker.profession}" शी जुळणारी नोकऱ्या सापडल्या नाहीत.`
                : `I couldn't find jobs matching "${AppState.worker.profession}".`;
        }
    } else if (lowerMessage.includes('high pay') || lowerMessage.includes('earning')) {
        const highPayingJobs = [...AppState.jobs].sort((a, b) => (b.pay || 0) - (a.pay || 0)).slice(0, 2);
        if (highPayingJobs.length > 0) {
            let response = currentLang === 'hi' ? 'सबसे अधिक भुगतान वाली नौकरियां:\n\n' :
                          currentLang === 'mr' ? 'सर्वोत्तम पगाराच्या नोकऱ्या:\n\n' :
                          'Highest paying jobs:\n\n';
            highPayingJobs.forEach((job, index) => {
                response += `${index + 1}. ${job.title} - ₹${job.pay.toLocaleString('en-IN')} in ${job.location}\n`;
            });
            return response;
        }
        return currentLang === 'hi' ? 'कोई उच्च वेतन वाली नौकरी उपलब्ध नहीं है।' :
               currentLang === 'mr' ? 'उच्च पगाराच्या नोकऱ्या उपलब्ध नाहीत.' :
               'No high-paying jobs available.';
    } else if (lowerMessage.includes('near me') || lowerMessage.includes('location')) {
        const nearbyJobs = AppState.jobs.filter(job => job.distance < 10).sort((a, b) => a.distance - b.distance);
        if (nearbyJobs.length > 0) {
            let response = currentLang === 'hi' ? `आपके आस-पास की नौकरियां:\n\n` :
                          currentLang === 'mr' ? `तुमच्या जवळच्या नोकऱ्या:\n\n` :
                          `Jobs near you:\n\n`;
            nearbyJobs.forEach((job, index) => {
                response += `${index + 1}. ${job.title} - ${job.distance} km away, pays ₹${job.pay.toLocaleString('en-IN')}\n`;
            });
            return response;
        }
        return currentLang === 'hi' ? 'आपके पास कोई नौकरी नहीं मिली।' :
               currentLang === 'mr' ? 'तुमच्या जवळ कोणतीही नोकरी सापडली नाही.' :
               'No jobs found near you.';
    } else {
        return currentLang === 'hi'
            ? "नमस्ते! मैं आपका AI सहायक हूं। मैं आपके कौशल के आधार पर नौकरियां ढूंढने में मदद कर सकता हूं।"
            : currentLang === 'mr'
            ? "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या कौशल्यावर आधारित नोकऱ्या शोधण्यात मदत करू शकतो."
            : "Hello! I'm your AI assistant. I can help you find jobs based on your skills.";
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    if (!DOM.notificationWrapper) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = 'fas fa-info-circle';
    let title = 'Information';
    
    switch(type) {
        case 'success': icon = 'fas fa-check-circle'; title = 'Success'; break;
        case 'error': icon = 'fas fa-exclamation-circle'; title = 'Error'; break;
        case 'warning': icon = 'fas fa-exclamation-triangle'; title = 'Warning'; break;
        default: icon = 'fas fa-info-circle'; title = 'Information';
    }
    
    notification.innerHTML = `
        <div class="notification-icon"><i class="${icon}"></i></div>
        <div class="notification-content"><h4>${title}</h4><p>${message}</p></div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    DOM.notificationWrapper.appendChild(notification);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// LOGOUT FUNCTION
// ============================================
function handleLogout() {
    if (confirm(AppState.settings.language === 'hi' ? 'क्या आप लॉगआउट करना चाहते हैं?' :
                AppState.settings.language === 'mr' ? 'तुम्हाला लॉगआउट करायचे आहे का?' :
                'Are you sure you want to logout?')) {
        window.location.href = '/logout_worker/';
    }
}

// ============================================
// ADD CSS FOR ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    .notification { position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 350px; }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZE APP
// ============================================
document.addEventListener('DOMContentLoaded', initializeApp);