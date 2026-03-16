/**
 * ShramikConnect - Worker Dashboard
 * COMPLETE WORKING VERSION WITH ALL APIS
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
        add_message_for_employer: "Add a message for the employer...",
        total_earnings: "Total Earnings",
        completed_jobs: "Completed Jobs",
        from_completed_jobs: "From Completed Jobs",
        successfully_delivered: "Successfully Delivered",
        no_jobs_found: "No Jobs Found",
        no_jobs_found_desc: "Check back later for new job postings",
        no_applied_jobs: "No Applied Jobs",
        no_applied_jobs_desc: "You haven't applied to any jobs yet",
        no_active_jobs: "No Active Jobs",
        no_active_jobs_desc: "You don't have any active jobs at the moment",
        no_work_history: "No Work History",
        no_work_history_desc: "Complete jobs will appear here",
        view: "View",
        chat: "Chat",
        details: "Details",
        apply: "Apply",
        applied: "Applied",
        accepted: "Accepted",
        rejected: "Rejected",
        hired: "Hired",
        completed: "Completed",
        pending: "Pending",
        job_pay: "Job Pay",
        your_expected: "Your Expected",
        applied_on: "Applied on",
        started_on: "Started on",
        mark_complete: "Mark Complete",
        clear_skill_filter: "Clear Skill Filter",
        clear_status_filter: "Clear Status Filter"
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
        add_message_for_employer: "नियोक्ता के लिए एक संदेश जोड़ें...",
        total_earnings: "कुल कमाई",
        completed_jobs: "पूर्ण की गई नौकरियां",
        from_completed_jobs: "पूर्ण की गई नौकरियों से",
        successfully_delivered: "सफलतापूर्वक वितरित",
        no_jobs_found: "कोई नौकरी नहीं मिली",
        no_jobs_found_desc: "नई नौकरी पोस्ट के लिए बाद में देखें",
        no_applied_jobs: "कोई आवेदित नौकरी नहीं",
        no_applied_jobs_desc: "आपने अभी तक किसी नौकरी के लिए आवेदन नहीं किया है",
        no_active_jobs: "कोई सक्रिय नौकरी नहीं",
        no_active_jobs_desc: "फिलहाल आपके पास कोई सक्रिय नौकरी नहीं है",
        no_work_history: "कोई कार्य इतिहास नहीं",
        no_work_history_desc: "पूर्ण की गई नौकरियां यहां दिखाई देंगी",
        view: "देखें",
        chat: "चैट",
        details: "विवरण",
        apply: "आवेदन करें",
        applied: "आवेदित",
        accepted: "स्वीकृत",
        rejected: "अस्वीकृत",
        hired: "किराए पर लिया गया",
        completed: "पूर्ण",
        pending: "लंबित",
        job_pay: "नौकरी का भुगतान",
        your_expected: "आपकी अपेक्षा",
        applied_on: "आवेदन तिथि",
        started_on: "प्रारंभ तिथि",
        mark_complete: "पूर्ण चिह्नित करें",
        clear_skill_filter: "कौशल फ़िल्टर साफ़ करें",
        clear_status_filter: "स्थिति फ़िल्टर साफ़ करें"
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
        add_message_for_employer: "नियोक्त्यासाठी एक संदेश जोडा...",
        total_earnings: "एकूण कमाई",
        completed_jobs: "पूर्ण केलेल्या नोकऱ्या",
        from_completed_jobs: "पूर्ण केलेल्या नोकऱ्यांमधून",
        successfully_delivered: "यशस्वीरित्या वितरित",
        no_jobs_found: "कोणतीही नोकरी सापडली नाही",
        no_jobs_found_desc: "नवीन नोकरी पोस्टसाठी नंतर तपासा",
        no_applied_jobs: "कोणत्याही अर्ज केलेल्या नोकऱ्या नाहीत",
        no_applied_jobs_desc: "तुम्ही अद्याप कोणत्याही नोकरीसाठी अर्ज केलेला नाही",
        no_active_jobs: "कोणत्याही सक्रिय नोकऱ्या नाहीत",
        no_active_jobs_desc: "सध्या तुमच्याकडे कोणतीही सक्रिय नोकरी नाही",
        no_work_history: "कोणताही कामाचा इतिहास नाही",
        no_work_history_desc: "पूर्ण केलेल्या नोकऱ्या येथे दिसतील",
        view: "पहा",
        chat: "चॅट",
        details: "तपशील",
        apply: "अर्ज करा",
        applied: "अर्ज केले",
        accepted: "स्वीकृत",
        rejected: "नकारले",
        hired: "भाड्याने घेतले",
        completed: "पूर्ण",
        pending: "प्रलंबित",
        job_pay: "नोकरीचे पेमेंट",
        your_expected: "तुमची अपेक्षा",
        applied_on: "अर्ज तारीख",
        started_on: "सुरू तारीख",
        mark_complete: "पूर्ण चिन्हांकित करा",
        clear_skill_filter: "कौशल्य फिल्टर साफ करा",
        clear_status_filter: "स्थिती फिल्टर साफ करा"
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
    pollingInterval: null,
    isPolling: false,
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
    
    // Start auto-refresh polling
    startPolling();
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
            
            console.log('Dashboard data loaded:', {
                jobs: AppState.jobs.length,
                applied: AppState.appliedJobs.length,
                active: AppState.activeJobs.length,
                history: AppState.workHistory.length
            });
        } else {
            console.error('Failed to load dashboard data:', data.message);
            showNotification('Failed to load data', 'error');
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Error loading data. Please refresh.', 'error');
    }
}

// ============================================
// SMART AUTO-REFRESH POLLING SYSTEM
// ============================================

function startPolling() {
    if (AppState.pollingInterval) {
        clearInterval(AppState.pollingInterval);
    }
    // Poll every 15 seconds
    AppState.pollingInterval = setInterval(pollForUpdates, 15000);
    console.log('Worker auto-refresh polling started (every 15s)');
}

function stopPolling() {
    if (AppState.pollingInterval) {
        clearInterval(AppState.pollingInterval);
        AppState.pollingInterval = null;
    }
}

async function pollForUpdates() {
    // Don't poll if already running
    if (AppState.isPolling) return;

    // Don't poll if any modal is open
    const anyModalOpen = document.querySelector('.popup-overlay.active');
    if (anyModalOpen) return;

    AppState.isPolling = true;

    try {
        const response = await fetch('/api/worker/dashboard-data/', {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });

        const data = await response.json();

        if (!data.success) {
            AppState.isPolling = false;
            return;
        }

        const newJobs        = data.data.jobs         || [];
        const newApplied     = data.data.applied_jobs  || [];
        const newActive      = data.data.active_jobs   || [];
        const newHistory     = data.data.work_history  || [];

        let hasChanges = false;
        let changeMessages = [];

        // ---- Check available jobs ----
        if (newJobs.length !== AppState.jobs.length) {
            hasChanges = true;
            const diff = newJobs.length - AppState.jobs.length;
            if (diff > 0) {
                changeMessages.push(`${diff} new job${diff > 1 ? 's' : ''} available!`);
            }
        }

        // ---- Check applied jobs status changes ----
        const oldAppliedMap = {};
        AppState.appliedJobs.forEach(j => { oldAppliedMap[j.id] = j.status; });

        newApplied.forEach(j => {
            if (oldAppliedMap[j.id] && oldAppliedMap[j.id] !== j.status) {
                // Status changed for an application
                if (j.status === 'accepted') {
                    changeMessages.push(`Your application for "${j.jobTitle || 'a job'}" was Accepted! ✅`);
                } else if (j.status === 'rejected') {
                    changeMessages.push(`Your application for "${j.jobTitle || 'a job'}" was Rejected.`);
                }
                hasChanges = true;
            }
        });

        // ---- Check active jobs ----
        if (newActive.length !== AppState.activeJobs.length) {
            hasChanges = true;
            if (newActive.length > AppState.activeJobs.length) {
                changeMessages.push(`You have been Hired for a new job! 🎉`);
            }
        }

        // ---- Check work history ----
        if (newHistory.length !== AppState.workHistory.length) {
            hasChanges = true;
        }

        if (hasChanges) {
            // Update state
            AppState.jobs        = newJobs;
            AppState.appliedJobs = newApplied;
            AppState.activeJobs  = newActive;
            AppState.workHistory = newHistory;

            // Update stats silently
            updateStats();

            // Re-render only current visible section
            const current = AppState.activeSection;
            if (current === 'find-jobs')     renderFindJobs();
            else if (current === 'applied-jobs')  renderAppliedJobs();
            else if (current === 'active-jobs')   renderActiveJobs();
            else if (current === 'work-history')  renderWorkHistory();

            // Also refresh all sections in background so data is ready when user navigates
            renderFindJobs();
            renderAppliedJobs();
            renderActiveJobs();
            renderWorkHistory();

            // Show important notifications
            changeMessages.forEach(msg => {
                const type = msg.includes('Rejected') ? 'error' : 'success';
                showNotification(msg, type);
            });

            console.log('Worker auto-refresh: Changes detected and UI updated');
        }

    } catch (error) {
        console.log('Worker auto-refresh: Network error (silent):', error.message);
    } finally {
        AppState.isPolling = false;
    }
}

// Pause polling when tab is hidden, resume when visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopPolling();
        console.log('Worker polling paused - tab hidden');
    } else {
        startPolling();
        pollForUpdates(); // Immediate fetch when user comes back
        console.log('Worker polling resumed - tab visible');
    }
});

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
    clearBtn.innerHTML = `<i class="fas fa-times-circle"></i> <span>${translations[AppState.settings.language].clear_skill_filter || 'Clear Skill Filter'}</span>`;
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
                <h3 class="empty-state-title">${translations[AppState.settings.language].no_jobs_found || 'No Jobs Found'}</h3>
                <p class="empty-state-message">${(AppState.jobFilters.search || AppState.jobFilters.selectedSkill) ? (translations[AppState.settings.language].no_workers_desc || 'Try adjusting your search criteria') : (translations[AppState.settings.language].no_jobs_found_desc || 'Check back later for new job postings')}</p>
                ${AppState.jobFilters.selectedSkill ? `<button class="small-btn" id="clearSkillFilterBtn" style="margin-top:15px;"><i class="fas fa-times"></i> ${translations[AppState.settings.language].clear_skill_filter || 'Clear Skill Filter'}</button>` : ''}
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
    
    const lang = AppState.settings.language;
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title || 'Untitled'}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName || 'Unknown'}</p>
                <p class="job-location">📍 ${job.location || 'Unknown'} ${job.distance ? `(${job.distance} km)` : ''}</p>
            </div>
        </div>
        <div class="job-details">
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>${translations[lang].payment || 'Pay'}: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-clock"></i><span>${translations[lang].time_required || 'Time'}: ${job.time || 0} hours</span></div>
            <div class="job-detail"><i class="fas fa-tools"></i><span>${translations[lang].skills || 'Skills'}: ${(job.skills || []).join(', ')}</span></div>
        </div>
        <div class="job-actions">
            <button class="small-btn apply-btn"><i class="fas fa-paper-plane"></i> ${translations[lang].apply || 'Apply'}</button>
            <button class="small-btn chat-job-btn"><i class="fas fa-comment"></i> ${translations[lang].chat || 'Chat'}</button>
            <button class="small-btn view-details-btn"><i class="fas fa-eye"></i> ${translations[lang].details || 'Details'}</button>
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
        <div class="preview-detail"><span class="preview-label">${translations[AppState.settings.language].employer_name || 'Employer'}:</span><span class="preview-value">${job.employerName}</span></div>
        <div class="preview-detail"><span class="preview-label">${translations[AppState.settings.language].location || 'Location'}:</span><span class="preview-value">${job.location}</span></div>
        <div class="preview-detail"><span class="preview-label">${translations[AppState.settings.language].job_pay || 'Job Pay'}:</span><span class="preview-value">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
        <div class="preview-detail"><span class="preview-label">${translations[AppState.settings.language].time_required || 'Time Required'}:</span><span class="preview-value">${job.time || 0} hours</span></div>
        <div class="preview-detail"><span class="preview-label">${translations[AppState.settings.language].skills || 'Skills Required'}:</span><span class="preview-value">${(job.skills || []).join(', ')}</span></div>
    `;
    
    DOM.expectedPriceInput.value = Math.round((job.pay || 0) * 0.9);
    DOM.availabilityText.innerHTML = `<i class="fas fa-calendar availability-icon"></i><span class="availability-label">${translations[AppState.settings.language].select_availability || 'Select availability'}</span>`;
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
    
    const lang = AppState.settings.language;
    
    DOM.jobDetailsContent.innerHTML = `
        <div class="detail-section">
            <h3>${translations[lang].job_details || 'Job Details'}</h3>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_title || 'Job Title'}:</span><span class="detail-value">${job.title}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].work_type || 'Work Type'}:</span><span class="detail-value">${job.workType}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_description || 'Job Description'}:</span><span class="detail-value">${job.description}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].required_skills || 'Required Skills'}:</span><span class="detail-value">${(job.skills || []).join(', ')}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].location || 'Location'}:</span><span class="detail-value">${job.location} ${job.distance ? `(${job.distance} km from you)` : ''}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].time_required || 'Time Required'}:</span><span class="detail-value">${job.time || 0} hours</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].posted_date || 'Posted Date'}:</span><span class="detail-value">${new Date(job.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].employer_name || 'Employer Name'}:</span><span class="detail-value">${job.employerName}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].payment || 'Payment'}:</span><span class="detail-value">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
        </div>
        <div class="detail-section">
            <h3>${translations[lang].employer_details || 'Employer Details'}</h3>
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px;">
                <img src="${job.employerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${job.employerName}" style="width:60px;height:60px;border-radius:50%;object-fit:cover;">
                <div><div style="font-weight:600;font-size:18px;">${job.employerName}</div><div style="color:#666;">${job.workType} Employer</div></div>
            </div>
        </div>
        <div class="detail-section">
            <h3>${translations[lang].payment_details || 'Payment Details'}</h3>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_pay || 'Job Pay'}:</span><span class="detail-value" style="color:#4362C9;font-size:24px;">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].payment_terms || 'Payment Terms'}:</span><span class="detail-value">${translations[lang].payment_upon_completion || 'Payment upon completion of work'}</span></div>
        </div>
        <div style="display:flex;gap:15px;margin-top:20px;">
            <button class="submit-job-btn" id="applyFromDetailsBtn"><i class="fas fa-paper-plane"></i> ${translations[lang].apply_now || 'Apply Now'}</button>
            <button class="small-btn chat-job-btn" style="padding:15px 20px;" id="chatFromDetailsBtn"><i class="fas fa-comment"></i> ${translations[lang].chat || 'Chat'}</button>
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
                <h3 class="empty-state-title">${translations[AppState.settings.language].no_applied_jobs || 'No Applied Jobs'}</h3>
                <p class="empty-state-message">${(AppState.appliedFilters.search || AppState.appliedFilters.status) ? (translations[AppState.settings.language].no_workers_desc || 'Try adjusting your search criteria') : (translations[AppState.settings.language].no_applied_jobs_desc || "You haven't applied to any jobs yet")}</p>
                ${AppState.appliedFilters.status ? `<button class="small-btn" id="clearStatusFilterBtn" style="margin-top:15px;"><i class="fas fa-times"></i> ${translations[AppState.settings.language].clear_status_filter || 'Clear Status Filter'}</button>` : ''}
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
    
    const lang = AppState.settings.language;
    
    let statusClass = '', statusText = '', statusIcon = '';
    switch(job.status) {
        case 'pending': statusClass = 'status-applied'; statusText = translations[lang].pending || 'Pending'; statusIcon = 'fa-paper-plane'; break;
        case 'accepted': statusClass = 'status-accepted'; statusText = translations[lang].accepted || 'Accepted'; statusIcon = 'fa-check'; break;
        case 'rejected': statusClass = 'status-rejected'; statusText = translations[lang].rejected || 'Rejected'; statusIcon = 'fa-times'; break;
        case 'hired': statusClass = 'status-hired'; statusText = translations[lang].hired || 'Hired'; statusIcon = 'fa-user-check'; break;
        case 'completed': statusClass = 'status-completed'; statusText = translations[lang].completed || 'Completed'; statusIcon = 'fa-check-circle'; break;
        default: statusClass = 'status-applied'; statusText = translations[lang].applied || 'Applied'; statusIcon = 'fa-paper-plane';
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
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>${translations[lang].job_pay || 'Job Pay'}: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-rupee-sign"></i><span>${translations[lang].your_expected || 'Your Expected'}: ₹${(job.expectedPrice || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-calendar"></i><span>${translations[lang].applied_on || 'Applied on'}: ${new Date(job.appliedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
        </div>
        <div class="job-actions">
            <button class="small-btn chat-job-btn"><i class="fas fa-comment"></i> ${translations[lang].chat || 'Chat'}</button>
            <button class="small-btn view-details-btn"><i class="fas fa-eye"></i> ${translations[lang].view || 'View'}</button>
        </div>
    `;
    
    card.querySelector('.chat-job-btn').addEventListener('click', () => openChatFromAppliedJob(job.id));
    card.querySelector('.view-details-btn').addEventListener('click', () => viewAppliedJobDetails(job.id));
    
    return card;
}

function viewAppliedJobDetails(jobId) {
    const job = AppState.appliedJobs.find(j => j.id === jobId);
    if (!job) return;
    
    const lang = AppState.settings.language;
    
    DOM.jobDetailsContent.innerHTML = `
        <div class="detail-section">
            <h3>${translations[lang].job_details || 'Job Details'}</h3>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_title || 'Job Title'}:</span><span class="detail-value">${job.jobTitle}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].employer_name || 'Employer Name'}:</span><span class="detail-value">${job.employerName}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].location || 'Location'}:</span><span class="detail-value">${job.location}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_pay || 'Job Pay'}:</span><span class="detail-value">₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].your_expected || 'Your Expected'}:</span><span class="detail-value">₹${(job.expectedPrice || 0).toLocaleString('en-IN')}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].availability || 'Availability'}:</span><span class="detail-value">${job.availability || 'immediate'}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].cover_message || 'Cover Message'}:</span><span class="detail-value">${job.cover_message || 'No message'}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].status || 'Status'}:</span><span class="detail-value status-${job.status}">${job.status}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].applied_on || 'Applied on'}:</span><span class="detail-value">${new Date(job.appliedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
        </div>
        <div style="display:flex;gap:15px;margin-top:20px;">
            <button class="submit-job-btn" id="chatFromDetailsBtn"><i class="fas fa-comment"></i> ${translations[lang].chat || 'Chat'}</button>
        </div>
    `;
    
    document.getElementById('chatFromDetailsBtn').addEventListener('click', () => {
        closeModal(DOM.jobDetailsModal);
        openChatFromAppliedJob(job.id);
    });
    
    openModal(DOM.jobDetailsModal);
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
                <h3 class="empty-state-title">${translations[AppState.settings.language].no_active_jobs || 'No Active Jobs'}</h3>
                <p class="empty-state-message">${translations[AppState.settings.language].no_active_jobs_desc || "You don't have any active jobs at the moment"}</p>
                <button class="small-btn" id="findJobsBtn" style="margin-top:15px;"><i class="fas fa-search"></i> ${translations[AppState.settings.language].find_jobs || 'Find Jobs'}</button>
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
    
    const lang = AppState.settings.language;
    
    card.innerHTML = `
        <div class="employer-profile">
            <div class="employer-photo"><img src="${job.employerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${job.employerName}"></div>
            <div><h3 class="employer-name">${job.employerName}</h3><p class="job-location">📍 ${job.location}</p></div>
        </div>
        <div class="job-details">
            <div class="job-detail"><i class="fas fa-briefcase"></i><span>${job.jobTitle}</span></div>
            <div class="job-detail"><i class="fas fa-money-bill-wave"></i><span>${translations[lang].payment || 'Payment'}: ₹${(job.pay || 0).toLocaleString('en-IN')}</span></div>
            <div class="job-detail"><i class="fas fa-calendar"></i><span>${translations[lang].started_on || 'Started on'}: ${new Date(job.hiredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
        </div>
        <div class="active-job-actions">
            <button class="action-btn-small chat-btn"><i class="fas fa-comment"></i> ${translations[lang].chat || 'Chat'}</button>
            <button class="action-btn-small request-completion-btn"><i class="fas fa-check-circle"></i> ${translations[lang].mark_complete || 'Mark Complete'}</button>
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
                    <h3 class="empty-state-title">${translations[AppState.settings.language].no_work_history || 'No Work History'}</h3>
                    <p class="empty-state-message">${(AppState.historyFilters.search) ? (translations[AppState.settings.language].no_workers_desc || 'Try adjusting your search criteria') : (translations[AppState.settings.language].no_work_history_desc || 'Complete jobs will appear here')}</p>
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
    
    const lang = AppState.settings.language;
    
    row.innerHTML = `
        <td>${job.employerName || 'Unknown'}</td>
        <td>${job.jobTitle || 'Untitled'}</td>
        <td>${new Date(job.completionDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
        <td>₹${(job.payment || 0).toLocaleString('en-IN')}</td>
        <td><div class="rating-stars">${starsHTML}<span class="rating-value">${rating.toFixed(1)}</span></div></td>
        <td><button class="small-btn view-details-btn"><i class="fas fa-eye"></i> ${translations[lang].view || 'View'}</button></td>
    `;
    
    row.querySelector('.view-details-btn').addEventListener('click', () => viewWorkHistoryDetails(job.id));
    
    return row;
}

function viewWorkHistoryDetails(historyId) {
    const history = AppState.workHistory.find(h => h.id === historyId);
    if (!history || !DOM.workHistoryContent) return;
    
    const lang = AppState.settings.language;
    const rating = history.rating || 0;
    
    // Create stars for rating
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else {
            starsHTML += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    
    DOM.workHistoryContent.innerHTML = `
        <div class="detail-section">
            <h3>${translations[lang].employer_details || 'Employer Details'}</h3>
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px;">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="${history.employerName}" style="width:60px;height:60px;border-radius:50%;object-fit:cover;">
                <div><div style="font-weight:600;font-size:18px;">${history.employerName || 'Unknown'}</div></div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>${translations[lang].job_details || 'Job Details'}</h3>
            <div class="detail-row"><span class="detail-label">${translations[lang].job_title || 'Job Title'}:</span><span class="detail-value">${history.jobTitle || 'Unknown'}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].location || 'Location'}:</span><span class="detail-value">${history.location || 'Not specified'}</span></div>
            <div class="detail-row"><span class="detail-label">${translations[lang].completion_date || 'Completion Date'}:</span><span class="detail-value">${new Date(history.completionDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
        </div>
        
        <div class="detail-section">
            <h3>${translations[lang].payment_rating || 'Payment & Rating'}</h3>
            <div class="detail-row"><span class="detail-label">${translations[lang].payment_earned || 'Payment Earned'}:</span><span class="detail-value" style="color: #01A060; font-size: 20px;">₹${(history.payment || 0).toLocaleString('en-IN')}</span></div>
            <div class="detail-row">
                <span class="detail-label">${translations[lang].rating || 'Rating'}:</span>
                <span class="detail-value">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        ${starsHTML}
                        <span style="font-weight: 600; margin-left: 10px;">${rating}/5</span>
                    </div>
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${translations[lang].feedback || 'Feedback'}:</span>
                <span class="detail-value">${history.feedback || translations[lang].no_feedback || 'No feedback provided'}</span>
            </div>
        </div>
    `;
    
    openModal(DOM.workHistoryModal);
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

function handleChatFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    showNotification(`File "${file.name}" uploaded`, 'success');
}

function toggleVoiceRecording() {
    showNotification('Voice message recording started', 'info');
    
    setTimeout(() => {
        showNotification('Voice message sent', 'success');
    }, 2000);
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
        
        // For now, just show success message
        showNotification('Work completion requested. Employer will review.', 'success');
        closeModal(DOM.confirmationModal);
        
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

function handleAIFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    showNotification(`File "${file.name}" uploaded for AI analysis`, 'success');
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
                : `Based on your skills as a ${AppState.worker.profession}, I recommend the "${job.title}" job in ${job.location} paying ₹${job.pay}.`;
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
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 350px;
        min-width: 300px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        transform: translateX(120%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        background: #01A060;
        color: white;
    }
    
    .notification.error {
        background: #DC2626;
        color: white;
    }
    
    .notification.warning {
        background: #F59E0B;
        color: white;
    }
    
    .notification.info {
        background: #3B82F6;
        color: white;
    }
    
    .notification-icon {
        font-size: 24px;
    }
    
    .notification-content {
        flex: 1;
    }
    
    .notification-content h4 {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
    }
    
    .notification-content p {
        margin: 0;
        font-size: 14px;
        opacity: 0.9;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .empty-state-container {
        text-align: center;
        padding: 40px 20px;
        background: #F8F8F8;
        border-radius: 16px;
        border: 2px dashed rgba(1, 160, 96, 0.2);
        width: 100%;
    }
    
    .empty-state-icon {
        font-size: 48px;
        color: #01A060;
        margin-bottom: 20px;
    }
    
    .empty-state-title {
        font-size: 20px;
        color: #1A1A1A;
        margin-bottom: 10px;
    }
    
    .empty-state-message {
        color: #666;
        margin-bottom: 20px;
    }
    
    .status-badge {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }
    
    .status-applied {
        background: #E3F2FD;
        color: #1976D2;
    }
    
    .status-accepted {
        background: #E8F5E9;
        color: #2E7D32;
    }
    
    .status-rejected {
        background: #FFEBEE;
        color: #C62828;
    }
    
    .status-hired {
        background: #FFF3E0;
        color: #F57C00;
    }
    
    .status-completed {
        background: #E0F7FA;
        color: #00838F;
    }
    
        .rating-star {
        color: #FFD700;
        margin-right: 2px;
    }
    
    .rating-star.empty {
        color: #E0E0E0;
    }
    
    .rating-value {
        margin-left: 5px;
        font-weight: 600;
        color: #1A1A1A;
    }
    
    .detail-section {
        background: #F8F8F8;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .detail-section h3 {
        margin: 0 0 15px 0;
        color: #1A1A1A;
        font-size: 18px;
    }
    
    .detail-row {
        display: flex;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .detail-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .detail-label {
        width: 140px;
        color: #666;
        font-size: 14px;
    }
    
    .detail-value {
        flex: 1;
        color: #1A1A1A;
        font-weight: 500;
    }
    
    .preview-detail {
        display: flex;
        margin-bottom: 10px;
        padding: 8px;
        background: #F5F5F5;
        border-radius: 8px;
    }
    
    .preview-label {
        width: 120px;
        color: #666;
        font-size: 13px;
    }
    
    .preview-value {
        flex: 1;
        color: #1A1A1A;
        font-weight: 500;
    }
    
    .filter-nested-options {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        padding: 10px;
        min-width: 200px;
        z-index: 1000;
        margin-top: 5px;
    }
    
    .filter-nested-options.show {
        display: block;
    }
    
    .filter-nested-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 10px 15px;
        border: none;
        background: none;
        color: #1A1A1A;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s;
    }
    
    .filter-nested-btn:hover {
        background: rgba(1, 160, 96, 0.1);
    }
    
    .filter-nested-btn.active {
        background: #01A060;
        color: white;
    }
    
    .filter-nested-btn i {
        width: 16px;
    }
    
    .filter-parent-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 15px;
        background: white;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
        color: #1A1A1A;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .filter-parent-btn:hover {
        background: rgba(1, 160, 96, 0.1);
        border-color: #01A060;
    }
    
    .filter-parent-btn.active {
        background: #01A060;
        color: white;
        border-color: #01A060;
    }
    
    .filter-group {
        position: relative;
        display: inline-block;
    }
    
    .filter-strip-horizontal {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        padding: 15px 0;
    }
    
    .filter-clear-btn {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px 15px;
        background: #F8F8F8;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
        color: #666;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .filter-clear-btn:hover {
        background: #FFEBEE;
        border-color: #DC2626;
        color: #DC2626;
    }
    
    .search-container {
        flex: 1;
        max-width: 300px;
    }
    
    .search-input {
        width: 100%;
        padding: 10px 15px 10px 40px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 30px;
        font-size: 14px;
        transition: all 0.3s;
    }
    
    .search-input:focus {
        outline: none;
        border-color: #01A060;
        box-shadow: 0 0 0 3px rgba(1, 160, 96, 0.1);
    }
    
    .section-header.with-filters {
        margin-bottom: 20px;
    }
    
    .workers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .worker-card {
        background: white;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        transition: all 0.3s;
        border: 1px solid rgba(0,0,0,0.05);
    }
    
    .worker-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(1, 160, 96, 0.15);
        border-color: #01A060;
    }
    
    .worker-header {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }
    
    .worker-photo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #01A060;
    }
    
    .worker-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .worker-name-container {
        flex: 1;
    }
    
    .worker-name {
        margin: 0 0 5px 0;
        font-size: 18px;
        color: #1A1A1A;
    }
    
    .worker-details {
        margin-bottom: 15px;
    }
    
    .worker-detail {
        display: flex;
        margin-bottom: 8px;
        font-size: 14px;
    }
    
    .detail-label {
        width: 100px;
        color: #666;
    }
    
    .detail-value {
        flex: 1;
        color: #1A1A1A;
        font-weight: 500;
    }
    
    .worker-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
    
    .action-btn-small {
        flex: 1;
        min-width: 80px;
        padding: 8px 12px;
        border: none;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    
    .chat-btn {
        background: #E3F2FD;
        color: #1976D2;
    }
    
    .chat-btn:hover {
        background: #1976D2;
        color: white;
    }
    
    .profile-btn {
        background: #F3E5F5;
        color: #7B1FA2;
    }
    
    .profile-btn:hover {
        background: #7B1FA2;
        color: white;
    }
    
    .hire-btn {
        background: #E8F5E9;
        color: #2E7D32;
    }
    
    .hire-btn:hover {
        background: #2E7D32;
        color: white;
    }
    
    .reject-btn {
        background: #FFEBEE;
        color: #C62828;
    }
    
    .reject-btn:hover {
        background: #C62828;
        color: white;
    }
    
    .complete-btn {
        background: #E0F7FA;
        color: #00838F;
    }
    
    .complete-btn:hover {
        background: #00838F;
        color: white;
    }
    
    .small-btn {
        padding: 8px 15px;
        border: none;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        background: #F0F0F0;
        color: #333;
    }
    
    .small-btn:hover {
        background: #01A060;
        color: white;
    }
    
    .jobs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .job-card {
        background: white;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        transition: all 0.3s;
        border: 1px solid rgba(0,0,0,0.05);
    }
    
    .job-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(1, 160, 96, 0.15);
        border-color: #01A060;
    }
    
    .job-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .job-title {
        margin: 0 0 5px 0;
        font-size: 18px;
        color: #1A1A1A;
    }
    
    .job-employer {
        margin: 0 0 5px 0;
        font-size: 14px;
        color: #666;
    }
    
    .job-location {
        margin: 0;
        font-size: 14px;
        color: #888;
    }
    
    .job-status {
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
    }
    
    .status-open {
        background: #E8F5E9;
        color: #2E7D32;
    }
    
    .status-in-progress {
        background: #FFF3E0;
        color: #F57C00;
    }
    
    .status-completed {
        background: #E0F7FA;
        color: #00838F;
    }
    
    .job-details {
        margin-bottom: 15px;
    }
    
    .job-detail {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
        font-size: 13px;
        color: #666;
    }
    
    .job-detail i {
        width: 16px;
        color: #01A060;
    }
    
    .job-actions {
        display: flex;
        gap: 8px;
    }
    
    .applied-jobs-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
    }
    
    .applied-job-card {
        background: white;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        border: 1px solid rgba(0,0,0,0.05);
    }
    
    .active-jobs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .active-job-card {
        background: white;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    .employer-profile {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }
    
    .employer-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .employer-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .employer-name {
        margin: 0 0 5px 0;
        font-size: 16px;
    }
    
    .active-job-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }
    
    .history-table-container {
        overflow-x: auto;
        margin-top: 20px;
    }
    
    .history-table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    
    .history-table th {
        background: #F5F5F5;
        padding: 15px;
        text-align: left;
        font-weight: 600;
        color: #1A1A1A;
    }
    
    .history-table td {
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .rating-stars {
        display: flex;
        align-items: center;
        gap: 2px;
    }
    
    /* Modal Styles */
    .popup-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10000;
        align-items: center;
        justify-content: center;
    }
    
    .popup-overlay.active {
        display: flex;
    }
    
    .popup-container {
        background: white;
        border-radius: 20px;
        width: 90%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        animation: modalSlideIn 0.3s ease;
    }
    
    @keyframes modalSlideIn {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .popup-header {
        padding: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        background: white;
        border-radius: 20px 20px 0 0;
        z-index: 10;
    }
    
    .popup-header h2 {
        margin: 0;
        font-size: 20px;
        color: #1A1A1A;
    }
    
    .popup-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #666;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
    }
    
    .popup-close:hover {
        background: rgba(0,0,0,0.05);
        color: #DC2626;
    }
    
    .popup-content {
        padding: 20px;
    }
    
    /* Form Styles */
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #1A1A1A;
    }
    
    .input-with-icon {
        position: relative;
    }
    
    .input-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        z-index: 1;
    }
    
    .form-input {
        width: 100%;
        padding: 12px 15px 12px 45px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        font-size: 14px;
        transition: all 0.3s;
        background: white;
    }
    
    .form-input:focus {
        outline: none;
        border-color: #01A060;
        box-shadow: 0 0 0 3px rgba(1, 160, 96, 0.1);
    }
    
    .form-input.textarea {
        resize: vertical;
        min-height: 100px;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    
    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .checkbox-group input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    
    .submit-job-btn {
        width: 100%;
        padding: 15px;
        background: #01A060;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .submit-job-btn:hover {
        background: #018049;
        transform: translateY(-2px);
        box-shadow: 0 5px 20px rgba(1, 160, 96, 0.3);
    }
    
    .submit-job-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    /* Chat Modal Styles */
    .chat-modal {
        max-width: 500px;
    }
    
    .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: 15px;
        background: #F5F5F5;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    
    .chat-message {
        display: flex;
        margin-bottom: 15px;
    }
    
    .chat-message.sent {
        justify-content: flex-end;
    }
    
    .chat-message.received {
        justify-content: flex-start;
    }
    
    .message-bubble {
        max-width: 70%;
        padding: 10px 15px;
        border-radius: 15px;
        position: relative;
    }
    
    .sent .message-bubble {
        background: #01A060;
        color: white;
        border-bottom-right-radius: 5px;
    }
    
    .received .message-bubble {
        background: white;
        color: #1A1A1A;
        border-bottom-left-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .message-bubble small {
        display: block;
        font-size: 10px;
        opacity: 0.7;
        margin-top: 5px;
    }
    
    .chat-input-container {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .chat-attachments {
        display: flex;
        gap: 5px;
    }
    
    .attachment-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #F0F0F0;
        color: #666;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .attachment-btn:hover {
        background: #01A060;
        color: white;
    }
    
    .chat-send-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #01A060;
        color: white;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .chat-send-btn:hover {
        background: #018049;
        transform: scale(1.1);
    }
    
    .negotiation-options {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(0,0,0,0.1);
    }
    
    .negotiation-options h4 {
        margin: 0 0 10px 0;
        font-size: 14px;
        color: #666;
    }
    
    .negotiation-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .negotiation-btn {
        flex: 1;
        min-width: 120px;
        padding: 10px;
        border: 1px solid #01A060;
        background: white;
        color: #01A060;
        border-radius: 8px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    
    .negotiation-btn:hover {
        background: #01A060;
        color: white;
    }
    
    /* Rating Modal Styles */
    .rating-popup {
        max-width: 400px;
    }
    
    .rating-worker-info {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .rating-worker-photo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #F0F0F0;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #666;
    }
    
    .rating-worker-info h3 {
        margin: 0 0 5px 0;
        font-size: 18px;
    }
    
    .rating-worker-job {
        margin: 0;
        color: #666;
        font-size: 14px;
    }
    
    .rating-instruction {
        text-align: center;
        margin-bottom: 20px;
        color: #666;
    }
    
    .rating-stars-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .stars-rating {
        display: flex;
        gap: 10px;
    }
    
    .stars-rating .star {
        font-size: 30px;
        cursor: pointer;
        color: #ddd;
        transition: all 0.3s;
    }
    
    .stars-rating .star.active,
    .stars-rating .star:hover {
        color: #FFD700;
    }
    
    .rating-value-display {
        font-size: 24px;
        font-weight: 600;
        color: #1A1A1A;
    }
    
    .rating-feedback {
        margin-bottom: 20px;
    }
    
    .rating-feedback label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
    }
    
    .submit-rating-btn {
        width: 100%;
        padding: 15px;
        background: #01A060;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .submit-rating-btn:hover:not(:disabled) {
        background: #018049;
    }
    
    .submit-rating-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    /* AI Assistant Styles */
    .ai-modal {
        max-width: 500px;
    }
    
    .ai-chat-container {
        height: 500px;
        display: flex;
        flex-direction: column;
    }
    
    .ai-chat-header {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background: #F5F5F5;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    
    .ai-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #01A060;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
    }
    
    .ai-chat-header h3 {
        margin: 0 0 5px 0;
        font-size: 16px;
    }
    
    .ai-chat-header p {
        margin: 0;
        font-size: 13px;
        color: #666;
    }
    
    .ai-chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 15px;
        background: #F9F9F9;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    
    .ai-message {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }
    
    .ai-message.user-message {
        justify-content: flex-end;
    }
    
    .ai-message.user-message .message-avatar {
        order: 2;
    }
    
    .message-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #01A060;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
    }
    
    .ai-message.user-message .message-avatar {
        background: #4362C9;
    }
    
    .message-content {
        max-width: 70%;
        padding: 10px 15px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .ai-message.user-message .message-content {
        background: #01A060;
        color: white;
    }
    
    .message-content p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
    }
    
    .ai-chat-input {
        display: flex;
        gap: 10px;
    }
    
    .ai-send-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #01A060;
        color: white;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .ai-send-btn:hover {
        background: #018049;
        transform: scale(1.1);
    }
    
    .ai-quick-suggestions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 15px;
    }
    
    .suggestion-btn {
        padding: 8px 15px;
        background: #F0F0F0;
        border: none;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .suggestion-btn:hover {
        background: #01A060;
        color: white;
    }
    
    .ai-suggestions-container {
        margin-top: 20px;
    }
    
    .ai-suggestions-container h3 {
        margin: 0 0 15px 0;
        font-size: 16px;
    }
    
    .ai-suggestions-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    }
    
    .ai-suggestion-card {
        background: #F5F5F5;
        border-radius: 12px;
        padding: 15px;
        border: 1px solid rgba(0,0,0,0.05);
    }
    
    .ai-suggestion-card h4 {
        margin: 0 0 5px 0;
        font-size: 14px;
    }
    
    .ai-suggestion-card p {
        margin: 0 0 10px 0;
        font-size: 12px;
        color: #666;
    }
    
    .ai-suggestion-card .worker-info {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #888;
        margin-bottom: 10px;
    }
    
    /* Responsive Styles */
    @media (max-width: 768px) {
        .workers-grid,
        .jobs-grid,
        .active-jobs-grid {
            grid-template-columns: 1fr;
        }
        
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .filter-strip-horizontal {
            flex-direction: column;
            align-items: stretch;
        }
        
        .filter-group {
            width: 100%;
        }
        
        .filter-parent-btn {
            width: 100%;
            justify-content: space-between;
        }
        
        .filter-nested-options {
            width: 100%;
            position: static;
            margin-top: 5px;
        }
        
        .search-container {
            max-width: 100%;
        }
        
        .worker-actions {
            flex-direction: column;
        }
        
        .action-btn-small {
            width: 100%;
        }
        
        .negotiation-buttons {
            flex-direction: column;
        }
        
        .negotiation-btn {
            width: 100%;
        }
        
        .popup-container {
            width: 95%;
            margin: 10px;
        }
    }
    
    /* Dark Theme Support */
    .dark-theme {
        background: #1A1A1A;
        color: #FFFFFF;
    }
    
    .dark-theme .navbar {
        background: #2D2D2D;
        border-bottom-color: #404040;
    }
    
    .dark-theme .sidebar {
        background: #2D2D2D;
    }
    
    .dark-theme .stat-card {
        background: #2D2D2D;
        border-color: #404040;
    }
    
    .dark-theme .job-card,
    .dark-theme .worker-card,
    .dark-theme .applied-job-card,
    .dark-theme .active-job-card {
        background: #2D2D2D;
        border-color: #404040;
    }
    
    .dark-theme .filter-parent-btn {
        background: #2D2D2D;
        border-color: #404040;
        color: #FFFFFF;
    }
    
    .dark-theme .filter-nested-options {
        background: #2D2D2D;
        border: 1px solid #404040;
    }
    
    .dark-theme .popup-container {
        background: #2D2D2D;
    }
    
    .dark-theme .popup-header {
        background: #2D2D2D;
        border-bottom-color: #404040;
    }
    
    .dark-theme .form-input {
        background: #1A1A1A;
        border-color: #404040;
        color: #FFFFFF;
    }
    
    .dark-theme .chat-messages {
        background: #1A1A1A;
    }
    
    .dark-theme .received .message-bubble {
        background: #2D2D2D;
        color: #FFFFFF;
    }
    
    .dark-theme .history-table {
        background: #2D2D2D;
    }
    
    .dark-theme .history-table th {
        background: #1A1A1A;
        color: #FFFFFF;
    }
    
    .dark-theme .history-table td {
        border-bottom-color: #404040;
        color: #FFFFFF;
    }
    
    .dark-theme .empty-state-container {
        background: #2D2D2D;
    }
    
    .dark-theme .empty-state-title {
        color: #FFFFFF;
    }
    
    .dark-theme .empty-state-message {
        color: #AAAAAA;
    }
`;

document.head.appendChild(style);

// ============================================
// Initialize the application
// ============================================
document.addEventListener('DOMContentLoaded', initializeApp);