// e.js - COMPLETE WORKING VERSION
/**
 * ShramikConnect - Worker Dashboard
 * COMPLETE IMPLEMENTATION WITH ALL FIXES
 */

// ============================================
// APPLICATION STATE (Single Source of Truth)
// ============================================
const AppState = {
    // Worker Information
    worker: {
        id: 1,
        name: "Ramesh Kumar",
        skill: "Electrician",
        location: { city: "Mumbai", lat: 19.0760, lng: 72.8777 }
    },

    // Navigation State
    activeSection: "dashboard",
    previousSection: null,
    
    // UI State
    sidebarOpen: false,
    settingsDropdownOpen: false,
    activeModals: [],
    
    // Filter States
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
    
    // Settings
    settings: {
        language: 'en',
        theme: 'light'
    },
    
    // Current Data
    currentJob: null,
    currentChat: {
        employer: null,
        messages: []
    },
    currentFile: null,
    
    // Media Recorder State
    mediaRecorder: null,
    isRecording: false,
    audioChunks: [],
    
    // Confirmation State
    confirmationData: {
        jobId: null,
        callback: null
    },
    
    // Mock Data
    jobs: [
        {
            id: 1,
            employerName: "Rajesh Sharma",
            employerPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
            title: "Electrician for House Wiring",
            workType: "Electrical Wiring",
            description: "Need an experienced electrician for complete house wiring in a 3BHK apartment. Must have experience with modern electrical systems.",
            skills: ["Electrician", "Electrical Wiring"],
            location: "Mumbai, Andheri West",
            pay: 15000,
            time: 40,
            status: "open",
            postedDate: "2023-10-15",
            distance: 2.5
        },
        {
            id: 2,
            employerName: "Sunil Patel",
            employerPhoto: "https://randomuser.me/api/portraits/men/44.jpg",
            title: "Plumber for Bathroom Renovation",
            workType: "Plumbing",
            description: "Plumbing work for bathroom renovation including pipe fitting and fixture installation. Need experienced plumber.",
            skills: ["Plumber", "Pipe Fitting"],
            location: "Pune, Kothrud",
            pay: 8000,
            time: 24,
            status: "open",
            postedDate: "2023-10-12",
            distance: 4.2
        },
        {
            id: 3,
            employerName: "Amit Verma",
            employerPhoto: "https://randomuser.me/api/portraits/men/22.jpg",
            title: "Welder for Construction Site",
            workType: "Welding",
            description: "Need skilled welder for steel fabrication work at construction site.",
            skills: ["Welder", "Steel Fabrication"],
            location: "Mumbai, Thane",
            pay: 12000,
            time: 48,
            status: "open",
            postedDate: "2023-10-10",
            distance: 3.1
        },
        {
            id: 4,
            employerName: "Vikram Singh",
            employerPhoto: "https://randomuser.me/api/portraits/men/28.jpg",
            title: "Mason for Wall Construction",
            workType: "Masonry",
            description: "Experienced mason required for residential wall construction.",
            skills: ["Mason", "Construction"],
            location: "Navi Mumbai",
            pay: 9000,
            time: 32,
            status: "open",
            postedDate: "2023-10-08",
            distance: 5.5
        }
    ],
    
    appliedJobs: [
        {
            id: 101,
            jobId: 5,
            jobTitle: "AC Technician for Installation",
            employerName: "Sanjay Gupta",
            location: "Mumbai, Powai",
            pay: 8000,
            appliedDate: "2023-10-05",
            status: "accepted",
            expectedPrice: 7500,
            availability: "immediate",
            coverMessage: "I have 5 years experience in AC installation."
        },
        {
            id: 102,
            jobId: 6,
            jobTitle: "Carpenter for Furniture Making",
            employerName: "Rahul Mehta",
            location: "Mumbai, Andheri",
            pay: 12000,
            appliedDate: "2023-10-03",
            status: "applied",
            expectedPrice: 11000,
            availability: "within_3_days",
            coverMessage: "Expert in custom furniture making."
        }
    ],
    
    activeJobs: [
        {
            id: 201,
            jobId: 5,
            jobTitle: "AC Technician for Installation",
            employerName: "Sanjay Gupta",
            employerPhoto: "https://randomuser.me/api/portraits/men/28.jpg",
            workType: "AC Installation",
            location: "Mumbai, Powai",
            pay: 8000,
            startDate: "2023-10-10",
            expectedCompletion: "2023-10-12",
            status: "in-progress"
        }
    ],
    
    workHistory: [
        {
            id: 301,
            jobId: 1,
            jobTitle: "House Wiring for 2BHK",
            employerName: "Deepak Gupta",
            employerPhoto: "https://randomuser.me/api/portraits/men/22.jpg",
            company: "Gupta Constructions",
            contact: "+91 9876543210",
            location: "Mumbai, Bandra",
            jobDuration: "5 days",
            payment: 12000,
            workPeriod: "Oct 1-5, 2023",
            paymentReceived: 12000,
            jobStatus: "Completed",
            rating: 4.5,
            completionDate: "2023-10-05"
        },
        {
            id: 302,
            jobId: 2,
            jobTitle: "Plumbing Work for Shop",
            employerName: "Mohan Lal",
            employerPhoto: "https://randomuser.me/api/portraits/men/35.jpg",
            company: "Lal Enterprises",
            contact: "+91 9876543211",
            location: "Mumbai, Dadar",
            jobDuration: "2 days",
            payment: 6000,
            workPeriod: "Sep 28-29, 2023",
            paymentReceived: 6000,
            jobStatus: "Completed",
            rating: 4.8,
            completionDate: "2023-09-29"
        }
    ],
    
    // Comprehensive skills list
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
// i18n TRANSLATIONS (Complete Dictionary)
// ============================================
const translations = {
    en: {
        // Navigation
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
        
        // Profile
        electrician: "Electrician",
        edit_profile: "Edit Profile",
        settings: "Settings",
        
        // Settings
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System",
        
        // Dashboard
        welcome: "Welcome",
        dashboard_slogan_worker: "Find jobs based on your skills and manage your work easily",
        jobs_applied: "Jobs Applied",
        till_now: "Till Now",
        currently: "Currently",
        quick_actions: "Quick Actions",
        
        // Job Application
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
        
        // Filters
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
        
        // Search Placeholders
        search_jobs_placeholder: "Search by skill, job title or location",
        search_applied_jobs: "Search applied jobs...",
        search_work_history: "Search work history...",
        
        // Chat
        chat_with_employer: "Chat with",
        type_your_message: "Type your message...",
        
        // Modals
        job_details: "Job Details",
        work_details: "Work Details",
        confirm_work_completion: "Confirm Work Completion",
        confirm_work_completion_question: "Are you sure work is completed?",
        confirm_work_completion_description: "This will notify the employer and move the job to your work history.",
        yes_complete: "Yes, Complete",
        no_cancel: "No, Cancel",
        
        // AI Assistant
        ai_welcome_worker: "Hello! I'm your AI assistant. I can help you find the best jobs based on your skills and preferences.",
        ai_ready_worker: "Ready to help you find the best jobs",
        ai_welcome_full_worker: "Hello! I'm your AI assistant. I can help you find the best jobs based on your skills and preferences. Try asking me: 'Best jobs for my skills' or 'High paying jobs near me'.",
        ai_subtitle_worker: "Get help finding the best jobs for your skills",
        type_your_message_here: "Type your message here...",
        
        // Brand
        shramik: "Shramik",
        connect: "Connect",
        
        // Work History Table
        employer_name: "Employer Name",
        job_title: "Job Title",
        completion_date: "Completion Date",
        payment_earned: "Payment Earned",
        rating: "Rating",
        actions: "Actions",
        
        // Footer
        tagline: "Connecting hands to work",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        copyright: "© 2025 ShramikConnect. All rights reserved.",
        
        // Additional
        add_message_for_employer: "Add a message for the employer..."
    },
    hi: {
        // Navigation
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
        
        // Profile
        electrician: "बिजली मिस्त्री",
        edit_profile: "प्रोफ़ाइल संपादित करें",
        settings: "सेटिंग्स",
        
        // Settings
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम",
        
        // Dashboard
        welcome: "स्वागत है",
        dashboard_slogan_worker: "अपने कौशल के आधार पर नौकरियां ढूंढें और अपने काम को आसानी से प्रबंधित करें",
        jobs_applied: "आवेदित नौकरियां",
        till_now: "अब तक",
        currently: "वर्तमान में",
        quick_actions: "त्वरित कार्रवाइयां",
        
        // Job Application
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
        
        // Filters
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
        
        // Search Placeholders
        search_jobs_placeholder: "कौशल, नौकरी शीर्षक या स्थान से खोजें",
        search_applied_jobs: "आवेदित नौकरियां खोजें...",
        search_work_history: "कार्य इतिहास खोजें...",
        
        // Chat
        chat_with_employer: "के साथ चैट करें",
        type_your_message: "अपना संदेश टाइप करें...",
        
        // Modals
        job_details: "नौकरी विवरण",
        work_details: "कार्य विवरण",
        confirm_work_completion: "कार्य पूर्णता की पुष्टि करें",
        confirm_work_completion_question: "क्या आप सुनिश्चित हैं कि कार्य पूरा हो गया है?",
        confirm_work_completion_description: "यह नियोक्ता को सूचित करेगा और नौकरी को आपके कार्य इतिहास में ले जाएगा।",
        yes_complete: "हां, पूर्ण करें",
        no_cancel: "नहीं, रद्द करें",
        
        // AI Assistant
        ai_welcome_worker: "नमस्ते! मैं आपका AI सहायक हूं। मैं आपके कौशल और प्राथमिकताओं के आधार पर सर्वोत्तम नौकरियां खोजने में आपकी मदद कर सकता हूं।",
        ai_ready_worker: "सर्वोत्तम नौकरियां खोजने में मदद के लिए तैयार",
        ai_welcome_full_worker: "नमस्ते! मैं आपका AI सहायक हूं। मैं आपके कौशल और प्राथमिकताओं के आधार पर सर्वोत्तम नौकरियां खोजने में आपकी मदद कर सकता हूं। मुझसे पूछें: 'मेरे कौशल के लिए सर्वोत्तम नौकरियां' या 'मेरे पास उच्च वेतन वाली नौकरियां'।",
        ai_subtitle_worker: "अपने कौशल के लिए सर्वोत्तम नौकरियां खोजने में मदद लें",
        type_your_message_here: "अपना संदेश यहां टाइप करें...",
        
        // Brand
        shramik: "श्रमिक",
        connect: "कनेक्ट",
        
        // Work History Table
        employer_name: "नियोक्ता का नाम",
        job_title: "नौकरी शीर्षक",
        completion_date: "पूर्णता तिथि",
        payment_earned: "अर्जित भुगतान",
        rating: "रेटिंग",
        actions: "कार्रवाइयां",
        
        // Footer
        tagline: "हाथों को काम से जोड़ना",
        privacy: "गोपनीयता नीति",
        terms: "नियम और शर्तें",
        copyright: "© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।",
        
        // Additional
        add_message_for_employer: "नियोक्ता के लिए एक संदेश जोड़ें..."
    },
    mr: {
        // Navigation
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
        
        // Profile
        electrician: "विजेमिस्त्री",
        edit_profile: "प्रोफाइल संपादित करा",
        settings: "सेटिंग्ज",
        
        // Settings
        language: "भाषा",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम",
        
        // Dashboard
        welcome: "स्वागत आहे",
        dashboard_slogan_worker: "तुमच्या कौशल्यावर आधारित नोकऱ्या शोधा आणि तुमचे काम सहज व्यवस्थापित करा",
        jobs_applied: "अर्ज केलेल्या नोकऱ्या",
        till_now: "आतापर्यंत",
        currently: "सध्या",
        quick_actions: "द्रुत क्रिया",
        
        // Job Application
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
        
        // Filters
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
        
        // Search Placeholders
        search_jobs_placeholder: "कौशल्य, नोकरी शीर्षक किंवा स्थानानुसार शोधा",
        search_applied_jobs: "अर्ज केलेल्या नोकऱ्या शोधा...",
        search_work_history: "कामाचा इतिहास शोधा...",
        
        // Chat
        chat_with_employer: "शी चॅट करा",
        type_your_message: "तुमचा संदेश टाइप करा...",
        
        // Modals
        job_details: "नोकरी तपशील",
        work_details: "कामाचे तपशील",
        confirm_work_completion: "काम पूर्ण होण्याची पुष्टी करा",
        confirm_work_completion_question: "तुम्हाला खात्री आहे की काम पूर्ण झाले आहे?",
        confirm_work_completion_description: "हे नियोक्त्याला सूचित करेल आणि नोकरी तुमच्या कामाच्या इतिहासात हलवेल.",
        yes_complete: "होय, पूर्ण करा",
        no_cancel: "नाही, रद्द करा",
        
        // AI Assistant
        ai_welcome_worker: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या कौशल्य आणि प्राधान्यांवर आधारित सर्वोत्तम नोकऱ्या शोधण्यात तुमची मदत करू शकतो.",
        ai_ready_worker: "सर्वोत्तम नोकऱ्या शोधण्यात मदत करण्यासाठी तयार",
        ai_welcome_full_worker: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या कौशल्य आणि प्राधान्यांवर आधारित सर्वोत्तम नोकऱ्या शोधण्यात तुमची मदत करू शकतो. मला विचारा: 'माझ्या कौशल्यासाठी सर्वोत्तम नोकऱ्या' किंवा 'माझ्या जवळ उच्च पगाराच्या नोकऱ्या'.",
        ai_subtitle_worker: "तुमच्या कौशल्यासाठी सर्वोत्तम नोकऱ्या शोधण्यासाठी मदत मिळवा",
        type_your_message_here: "तुमचा संदेश येथे टाइप करा...",
        
        // Brand
        shramik: "श्रमिक",
        connect: "कनेक्ट",
        
        // Work History Table
        employer_name: "नियोक्त्याचे नाव",
        job_title: "नोकरी शीर्षक",
        completion_date: "पूर्णता तारीख",
        payment_earned: "मिळालेले पेमेंट",
        rating: "रेटिंग",
        actions: "क्रिया",
        
        // Footer
        tagline: "हातांना कामाशी जोडणे",
        privacy: "गोपनीयता धोरण",
        terms: "अटी आणि नियम",
        copyright: "© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.",
        
        // Additional
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
// INITIALIZATION
// ============================================
function initializeApp() {
    console.log('Initializing Worker Dashboard...');
    
    // Load saved settings
    loadSettings();
    
    // Set worker name in UI
    if (DOM.workerNameDisplay) {
        DOM.workerNameDisplay.textContent = AppState.worker.name;
    }
    if (DOM.profileName) {
        DOM.profileName.textContent = AppState.worker.name;
    }
    
    // Set initial active section
    setActiveSection(AppState.activeSection);
    
    // Render all data
    updateStats();
    renderSkillFilters();
    renderFindJobs();
    renderAppliedJobs();
    renderActiveJobs();
    renderWorkHistory();
    
    // Setup all event listeners
    setupEventListeners();
    
    // Setup custom dropdown
    setupCustomDropdown();
    
    // Setup filter listeners
    setupFilterListeners();
    
    console.log('Worker Dashboard initialized successfully');
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================
function setupEventListeners() {
    // Sidebar
    DOM.hamburgerBtn.addEventListener('click', openSidebar);
    DOM.sidebarClose.addEventListener('click', closeSidebar);
    DOM.sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Settings
    DOM.sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
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
            const lang = option.dataset.lang;
            setLanguage(lang);
        });
    });
    
    DOM.themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const theme = option.dataset.theme;
            setTheme(theme);
        });
    });
    
    // Navigation - Sidebar menu items
    DOM.menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            setActiveSection(section);
            closeSidebar();
        });
    });
    
    // Top navbar links
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const section = link.dataset.section;
            if (section === 'help' || section === 'about') {
                return; // Let these links redirect normally
            }
            e.preventDefault();
            setActiveSection(section);
        });
    });
    
    // Global nav strip buttons
    DOM.navStripBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const section = btn.dataset.section;
            setActiveSection(section);
        });
    });
    
    // Quick redirect strip buttons
    DOM.redirectStripBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const section = btn.dataset.section;
            setActiveSection(section);
        });
    });
    
    // Statistics Cards
    DOM.statCardApplied.addEventListener('click', () => {
        setActiveSection('applied-jobs');
    });
    DOM.statCardActive.addEventListener('click', () => {
        setActiveSection('active-jobs');
    });
    DOM.statCardEarnings.addEventListener('click', () => {
        setActiveSection('work-history');
    });
    DOM.statCardCompleted.addEventListener('click', () => {
        setActiveSection('work-history');
    });
    
    // Quick Actions (Dashboard)
    DOM.quickActionFindJobs.addEventListener('click', () => {
        setActiveSection('find-jobs');
    });
    DOM.quickActionAppliedJobs.addEventListener('click', () => {
        setActiveSection('applied-jobs');
    });
    DOM.quickActionActiveJobs.addEventListener('click', () => {
        setActiveSection('active-jobs');
    });
    DOM.quickActionAI.addEventListener('click', () => {
        setActiveSection('ai-assistant');
    });
    DOM.quickActionHistory.addEventListener('click', () => {
        setActiveSection('work-history');
    });
    DOM.quickActionLogout.addEventListener('click', handleLogout);
    
    // Modal Close Buttons
    DOM.closeApplyModalBtn.addEventListener('click', () => closeModal(DOM.applyJobModal));
    DOM.closeChatModalBtn.addEventListener('click', () => closeModal(DOM.chatModal));
    DOM.closeJobDetailsModalBtn.addEventListener('click', () => closeModal(DOM.jobDetailsModal));
    DOM.closeWorkHistoryModalBtn.addEventListener('click', () => closeModal(DOM.workHistoryModal));
    DOM.closeAIModalBtn.addEventListener('click', () => {
        closeModal(DOM.aiAssistantModal);
        // After closing AI modal, if we have a previous section, go back to it
        if (AppState.previousSection && AppState.previousSection !== 'dashboard') {
            setTimeout(() => {
                setActiveSection(AppState.previousSection);
            }, 100);
        }
    });
    DOM.closeConfirmationModalBtn.addEventListener('click', () => closeModal(DOM.confirmationModal));
    
    // Confirmation Modal Buttons
    if (DOM.confirmYesBtn) {
        DOM.confirmYesBtn.addEventListener('click', handleConfirmationYes);
    }
    if (DOM.confirmNoBtn) {
        DOM.confirmNoBtn.addEventListener('click', handleConfirmationNo);
    }
    
    // Close modals on overlay click
    DOM.modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Job Application
    DOM.submitApplicationBtn.addEventListener('click', submitJobApplication);
    
    // Search Functionality
    if (DOM.jobSearch) {
        DOM.jobSearch.addEventListener('input', (e) => {
            AppState.jobFilters.search = e.target.value;
            renderFindJobs();
        });
    }
    
    if (DOM.appliedSearch) {
        DOM.appliedSearch.addEventListener('input', (e) => {
            AppState.appliedFilters.search = e.target.value;
            renderAppliedJobs();
        });
    }
    
    if (DOM.historySearch) {
        DOM.historySearch.addEventListener('input', (e) => {
            AppState.historyFilters.search = e.target.value;
            renderWorkHistory();
        });
    }
    
    // AI Assistant (Page)
    if (DOM.aiSendBtn) {
        DOM.aiSendBtn.addEventListener('click', () => sendAIMessage(DOM.aiInput, DOM.aiChatMessages));
    }
    
    if (DOM.aiInput) {
        DOM.aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
        });
    }
    
    // AI Assistant (Modal)
    if (DOM.aiModalSendBtn) {
        DOM.aiModalSendBtn.addEventListener('click', () => sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages));
    }
    
    if (DOM.aiModalInput) {
        DOM.aiModalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
        });
    }
    
    // AI File Upload
    if (DOM.aiFileUploadBtn) {
        DOM.aiFileUploadBtn.addEventListener('click', () => DOM.aiFileInput.click());
    }
    
    if (DOM.aiFileInput) {
        DOM.aiFileInput.addEventListener('change', handleAIFileUpload);
    }
    
    // Chat
    if (DOM.chatSendBtn) {
        DOM.chatSendBtn.addEventListener('click', sendChatMessage);
    }
    
    if (DOM.chatInput) {
        DOM.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendChatMessage();
        });
    }
    
    if (DOM.fileUploadBtn) {
        DOM.fileUploadBtn.addEventListener('click', () => DOM.fileInput.click());
    }
    
    if (DOM.fileInput) {
        DOM.fileInput.addEventListener('change', handleChatFileUpload);
    }
    
    if (DOM.voiceMessageBtn) {
        DOM.voiceMessageBtn.addEventListener('click', toggleVoiceRecording);
    }
    
    // Logout
    if (DOM.logoutBtn) DOM.logoutBtn.addEventListener('click', handleLogout);
    if (DOM.stripLogoutBtn) DOM.stripLogoutBtn.addEventListener('click', handleLogout);
    
    // Profile Edit Button
    const profileEditBtn = document.getElementById('profileEditBtn');
    if (profileEditBtn) {
        profileEditBtn.addEventListener('click', () => {
            showNotification('Profile editing feature coming soon!', 'info');
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape closes modals
        if (e.key === 'Escape') {
            closeAllModals();
            closeSidebar();
        }
    });
}

function setupFilterListeners() {
    // Find Jobs Filters
    const findJobFilterBtns = document.querySelectorAll('#find-jobs .filter-parent-btn');
    findJobFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterType = btn.dataset.filterType;
            toggleFilterOptions('find-jobs', filterType);
        });
    });
    
    // Find Jobs Sort Buttons
    const findJobSortBtns = document.querySelectorAll('#find-jobs .filter-nested-btn[data-sort]');
    findJobSortBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const sort = btn.dataset.sort;
            AppState.jobFilters.activeSort = sort;
            closeAllFilterOptions();
            renderFindJobs();
        });
    });
    
    // Applied Jobs Filters
    const appliedFilterBtns = document.querySelectorAll('#applied-jobs .filter-parent-btn');
    appliedFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterType = btn.dataset.filterType;
            toggleFilterOptions('applied-jobs', filterType);
        });
    });
    
    // Applied Jobs Sort/Filter Buttons
    const appliedActionBtns = document.querySelectorAll('#applied-jobs .filter-nested-btn');
    appliedActionBtns.forEach(btn => {
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
    const historyFilterBtns = document.querySelectorAll('#work-history .filter-parent-btn');
    historyFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterType = btn.dataset.filterType;
            toggleFilterOptions('work-history', filterType);
        });
    });
    
    // Work History Sort Buttons
    const historySortBtns = document.querySelectorAll('#work-history .filter-nested-btn[data-sort]');
    historySortBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            AppState.historyFilters.activeSort = btn.dataset.sort;
            closeAllFilterOptions();
            renderWorkHistory();
        });
    });
    
    // Clear Filters
    if (DOM.clearAllFilters) {
        DOM.clearAllFilters.addEventListener('click', () => {
            AppState.jobFilters = { search: '', activeSort: null, selectedSkill: null };
            DOM.jobSearch.value = '';
            renderFindJobs();
            closeAllFilterOptions();
        });
    }
    
    if (DOM.clearAppliedFilters) {
        DOM.clearAppliedFilters.addEventListener('click', () => {
            AppState.appliedFilters = { search: '', activeSort: null, status: null };
            DOM.appliedSearch.value = '';
            renderAppliedJobs();
            closeAllFilterOptions();
        });
    }
    
    if (DOM.clearHistoryFilters) {
        DOM.clearHistoryFilters.addEventListener('click', () => {
            AppState.historyFilters = { search: '', activeSort: null };
            DOM.historySearch.value = '';
            renderWorkHistory();
            closeAllFilterOptions();
        });
    }
    
    // Close filters when clicking outside
    document.addEventListener('click', () => {
        closeAllFilterOptions();
    });
}

// ============================================
// SIDEBAR FUNCTIONS
// ============================================
function openSidebar() {
    DOM.sidebar.classList.add('active');
    DOM.sidebarOverlay.classList.add('active');
    AppState.sidebarOpen = true;
}

function closeSidebar() {
    DOM.sidebar.classList.remove('active');
    DOM.sidebarOverlay.classList.remove('active');
    if (DOM.settingsDropdown) {
        DOM.settingsDropdown.classList.remove('active');
    }
    AppState.sidebarOpen = false;
    AppState.settingsDropdownOpen = false;
}

// ============================================
// LANGUAGE HANDLING FUNCTIONS (FIXED)
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
    const names = {
        'en': 'English',
        'hi': 'Hindi',
        'mr': 'Marathi'
    };
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
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholderKey = element.getAttribute('data-i18n-placeholder') || key;
                if (translations[lang][placeholderKey]) {
                    element.setAttribute('placeholder', translations[lang][placeholderKey]);
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update buttons with spans
    document.querySelectorAll('button span[data-i18n]').forEach(span => {
        const key = span.getAttribute('data-i18n');
        if (translations[lang][key]) {
            span.textContent = translations[lang][key];
        }
    });
}

// ============================================
// THEME HANDLING FUNCTIONS
// ============================================
function setTheme(theme) {
    AppState.settings.theme = theme;
    saveSettings();
    applyTheme();
    updateThemeUI();
    showNotification(`Theme changed to ${theme}`, 'success');
}

function applyTheme() {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('light-theme', 'dark-theme');
    
    if (AppState.settings.theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.classList.add('dark-theme');
        } else {
            body.classList.add('light-theme');
        }
    } else {
        body.classList.add(`${AppState.settings.theme}-theme`);
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
// NAVIGATION FUNCTIONS (CORRECTED)
// ============================================
function setActiveSection(sectionId) {
    if (!sectionId) return;
    
    // If clicking the same section (except AI Assistant), don't do anything
    if (sectionId === AppState.activeSection && sectionId !== 'ai-assistant') {
        return;
    }
    
    // Store previous section
    AppState.previousSection = AppState.activeSection;
    AppState.activeSection = sectionId;
    
    // Handle AI Assistant specially
    if (sectionId === 'ai-assistant') {
        // Define which sections should open MODAL vs FULL PAGE
        const modalOpeningSections = [
            'find-jobs', 
            'applied-jobs', 
            'active-jobs', 
            'work-history'
        ];
        
        // If coming from sections that should open modal
        if (AppState.previousSection && modalOpeningSections.includes(AppState.previousSection)) {
            console.log('Opening AI Assistant as MODAL (coming from:', AppState.previousSection, ')');
            openModal(DOM.aiAssistantModal);
            return; // Don't change to full page
        } 
        // If coming from dashboard, sidebar (or undefined), show full page
        else {
            console.log('Opening AI Assistant as FULL PAGE (coming from:', AppState.previousSection, ')');
            showAIFullPage();
            return; // Don't continue with normal navigation
        }
    }
    
    // Normal navigation for other sections
    // Update content sections
    DOM.contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    
    // Update menu items
    DOM.menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Update navbar links
    DOM.navLinks.forEach(link => {
        const linkSection = link.dataset.section;
        
        if (linkSection === 'help' || linkSection === 'about') return;
        
        // Reset all nav links
        link.classList.remove('active');
        
        // Home link is always active
        if (linkSection === 'dashboard') {
            link.classList.add('active');
        }
    });
    
    // Update global nav strip buttons
    DOM.navStripBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    // Update quick redirect strip buttons
    if (DOM.redirectStripBtns) {
        DOM.redirectStripBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === sectionId) {
                btn.classList.add('active');
            }
        });
    }
    
    // Show/hide navigation strips based on section
    updateNavigationStrips(sectionId);
    
    // Close sidebar if open
    closeSidebar();
    
    // Close any open filter dropdowns
    closeAllFilterOptions();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log(`Navigated to section: ${sectionId}`);
}

function showAIFullPage() {
    // Hide all sections first
    DOM.contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show AI Assistant full page
    const aiSection = document.getElementById('ai-assistant');
    if (aiSection) {
        aiSection.classList.add('active');
    }
    
    // Update menu items - AI should be active
    DOM.menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === 'ai-assistant') {
            item.classList.add('active');
        }
    });
    
    // Update navbar links - Home should be active
    DOM.navLinks.forEach(link => {
        const linkSection = link.dataset.section;
        if (linkSection === 'help' || linkSection === 'about') return;
        link.classList.remove('active');
        if (linkSection === 'dashboard') {
            link.classList.add('active');
        }
    });
    
    // Update global nav strip buttons - AI should be active
    if (DOM.navStripBtns) {
        DOM.navStripBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === 'ai-assistant') {
                btn.classList.add('active');
            }
        });
    }
    
    // Show navigation strips - AI full page SHOULD show global nav strip
    updateNavigationStrips('ai-assistant');
    
    // Close sidebar if open
    closeSidebar();
    
    // Close any open filter dropdowns
    closeAllFilterOptions();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavigationStrips(sectionId) {
    // Hide both strips by default
    DOM.globalNavStrip.classList.remove('active');
    DOM.quickRedirectStrip.classList.remove('active');
    
    // Show appropriate strip based on section
    if (sectionId === 'dashboard') {
        // Dashboard should NOT show the global strip
        DOM.globalNavStrip.classList.remove('active');
    } else if (sectionId === 'ai-assistant') {
        // AI Assistant full page SHOULD show global nav strip
        DOM.globalNavStrip.classList.add('active');
    } else {
        // Other sections (find-jobs, applied-jobs, active-jobs, work-history)
        // show global nav strip
        DOM.globalNavStrip.classList.add('active');
    }
    
    // Update main content margin based on active strips
    if (DOM.globalNavStrip.classList.contains('active')) {
        document.querySelector('.main-content').style.marginTop = '140px';
    } else {
        document.querySelector('.main-content').style.marginTop = '70px';
    }
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modal) {
    if (!modal) return;
    
    // SPECIAL: When opening AI modal, hide global navigation strip
    if (modal.id === 'aiAssistantModal') {
        DOM.globalNavStrip.classList.remove('active');
        document.querySelector('.main-content').style.marginTop = '70px';
    }
    
    closeAllModals();
    modal.classList.add('active');
    AppState.activeModals.push(modal.id);
    document.body.style.overflow = 'hidden';
    
    console.log(`Opened modal: ${modal.id}`);
}

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    const index = AppState.activeModals.indexOf(modal.id);
    if (index > -1) {
        AppState.activeModals.splice(index, 1);
    }
    
    if (AppState.activeModals.length === 0) {
        document.body.style.overflow = 'auto';
        // Restore appropriate navigation strip
        updateNavigationStrips(AppState.activeSection);
    }
    
    console.log(`Closed modal: ${modal.id}`);
}

function closeAllModals() {
    DOM.modals.forEach(modal => {
        modal.classList.remove('active');
    });
    AppState.activeModals = [];
    document.body.style.overflow = 'auto';
    updateNavigationStrips(AppState.activeSection);
}

// ============================================
// SETTINGS FUNCTIONS
// ============================================
function toggleSettingsDropdown(e) {
    e.stopPropagation();
    DOM.settingsDropdown.classList.toggle('active');
    AppState.settingsDropdownOpen = !AppState.settingsDropdownOpen;
}

// ============================================
// STATISTICS FUNCTIONS
// ============================================
function updateStats() {
    if (!DOM.totalApplied || !DOM.activeJobs || !DOM.totalEarnings || !DOM.completedJobs) return;
    
    // Jobs Applied
    DOM.totalApplied.textContent = AppState.appliedJobs.length;
    
    // Active Jobs
    DOM.activeJobs.textContent = AppState.activeJobs.length;
    
    // Total Earnings
    const totalEarnings = AppState.workHistory.reduce((sum, job) => sum + job.payment, 0);
    DOM.totalEarnings.textContent = `₹${totalEarnings.toLocaleString('en-IN')}`;
    
    // Completed Jobs
    DOM.completedJobs.textContent = AppState.workHistory.length;
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
    
    const dropdownItems = DOM.availabilityMenu.querySelectorAll('.dropdown-item:not(.custom-date-container)');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;
            
            // Update display
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
// FILTER FUNCTIONS (FIXED)
// ============================================
function toggleFilterOptions(section, filterType) {
    // Close all filter options first
    closeAllFilterOptions();
    
    // Open the clicked one
    const filterGroup = document.querySelector(`#${section} .filter-parent-btn[data-filter-type="${filterType}"]`).closest('.filter-group');
    const nestedOptions = filterGroup.querySelector('.filter-nested-options');
    const parentBtn = filterGroup.querySelector('.filter-parent-btn');
    
    if (nestedOptions) {
        nestedOptions.classList.add('show');
        parentBtn.classList.add('active');
    }
}

function closeAllFilterOptions() {
    const allNestedOptions = document.querySelectorAll('.filter-nested-options');
    const allParentBtns = document.querySelectorAll('.filter-parent-btn');
    
    allNestedOptions.forEach(options => {
        options.classList.remove('show');
    });
    allParentBtns.forEach(btn => {
        btn.classList.remove('active');
    });
}

// ============================================
// SKILL FILTER FUNCTIONS (FIXED - Single Select)
// ============================================
function renderSkillFilters() {
    if (!DOM.skillOptions) return;
    
    DOM.skillOptions.innerHTML = '';
    
    // Add a clear filter option
    const clearBtn = document.createElement('button');
    clearBtn.className = 'filter-nested-btn';
    clearBtn.innerHTML = `
        <i class="fas fa-times-circle"></i> <span>Clear Skill Filter</span>
    `;
    clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AppState.jobFilters.selectedSkill = null;
        renderSkillFilters();
        renderFindJobs();
        closeAllFilterOptions();
    });
    DOM.skillOptions.appendChild(clearBtn);
    
    // Add divider
    const divider = document.createElement('div');
    divider.style.height = '1px';
    divider.style.background = 'rgba(67, 98, 201, 0.1)';
    divider.style.margin = '8px 0';
    DOM.skillOptions.appendChild(divider);
    
    // Add all skills with single-select behavior
    AppState.allSkills.forEach(skill => {
        const btn = document.createElement('button');
        btn.className = 'filter-nested-btn';
        btn.dataset.skill = skill;
        btn.innerHTML = `
            <i class="fas ${AppState.jobFilters.selectedSkill === skill ? 'fa-check-circle' : 'fa-circle'}"></i> 
            <span>${skill}</span>
        `;
        
        if (AppState.jobFilters.selectedSkill === skill) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Single-select behavior: only one skill can be selected
            AppState.jobFilters.selectedSkill = AppState.jobFilters.selectedSkill === skill ? null : skill;
            
            renderSkillFilters();
            renderFindJobs();
            closeAllFilterOptions();
        });
        
        DOM.skillOptions.appendChild(btn);
    });
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
            job.title.toLowerCase().includes(searchTerm) ||
            job.employerName.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm) ||
            job.skills.some(skill => skill.toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply skill filter (single-select)
    if (AppState.jobFilters.selectedSkill) {
        jobs = jobs.filter(job => 
            job.skills.some(skill => 
                skill.toLowerCase() === AppState.jobFilters.selectedSkill.toLowerCase()
            )
        );
    }
    
    // Apply sorting
    if (AppState.jobFilters.activeSort) {
        switch (AppState.jobFilters.activeSort) {
            case 'payment-asc':
                jobs.sort((a, b) => a.pay - b.pay);
                break;
            case 'payment-desc':
                jobs.sort((a, b) => b.pay - a.pay);
                break;
            case 'location-asc':
                jobs.sort((a, b) => a.distance - b.distance);
                break;
            case 'location-desc':
                jobs.sort((a, b) => b.distance - a.distance);
                break;
        }
    }
    
    DOM.findJobsContainer.innerHTML = '';
    
    if (jobs.length === 0) {
        DOM.findJobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3 class="empty-state-title">No Jobs Found</h3>
                <p class="empty-state-message">${AppState.jobFilters.search || AppState.jobFilters.selectedSkill ? 'Try adjusting your search criteria' : 'Check back later for new job postings'}</p>
                ${AppState.jobFilters.selectedSkill ? `
                <button class="small-btn" id="clearSkillFilterBtn" style="margin-top: 15px;">
                    <i class="fas fa-times"></i> Clear Skill Filter
                </button>
                ` : ''}
            </div>
        `;
        
        // Add event listener to clear skill filter button
        const clearBtn = document.getElementById('clearSkillFilterBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                AppState.jobFilters.selectedSkill = null;
                renderSkillFilters();
                renderFindJobs();
            });
        }
        return;
    }
    
    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        DOM.findJobsContainer.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.dataset.id = job.id;
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName}</p>
                <p class="job-location">📍 ${job.location} (${job.distance} km)</p>
            </div>
        </div>
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-money-bill-wave"></i>
                <span>Pay: ₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-clock"></i>
                <span>Time: ${job.time} hours</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-tools"></i>
                <span>Skills: ${job.skills.join(', ')}</span>
            </div>
        </div>
        <div class="job-actions">
            <button class="small-btn apply-btn" data-job-id="${job.id}">
                <i class="fas fa-paper-plane"></i> Apply
            </button>
            <button class="small-btn chat-job-btn" data-job-id="${job.id}">
                <i class="fas fa-comment"></i> Chat
            </button>
            <button class="small-btn view-details-btn" data-job-id="${job.id}">
                <i class="fas fa-eye"></i> Details
            </button>
        </div>
    `;
    
    // Add event listeners to buttons
    const applyBtn = card.querySelector('.apply-btn');
    const chatBtn = card.querySelector('.chat-job-btn');
    const detailsBtn = card.querySelector('.view-details-btn');
    
    applyBtn.addEventListener('click', () => applyForJob(job.id));
    chatBtn.addEventListener('click', () => openChatFromJob(job.id));
    detailsBtn.addEventListener('click', () => viewJobDetails(job.id));
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 15px 35px rgba(67, 98, 201, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 24px rgba(67, 98, 201, 0.1)';
    });
    
    return card;
}

function applyForJob(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    AppState.currentJob = job;
    
    // Populate job preview
    DOM.jobPreviewContent.innerHTML = `
        <h3>${job.title}</h3>
        <div class="preview-detail">
            <span class="preview-label">Employer:</span>
            <span class="preview-value">${job.employerName}</span>
        </div>
        <div class="preview-detail">
            <span class="preview-label">Location:</span>
            <span class="preview-value">${job.location}</span>
        </div>
        <div class="preview-detail">
            <span class="preview-label">Job Pay:</span>
            <span class="preview-value">₹${job.pay.toLocaleString('en-IN')}</span>
        </div>
        <div class="preview-detail">
            <span class="preview-label">Time Required:</span>
            <span class="preview-value">${job.time} hours</span>
        </div>
        <div class="preview-detail">
            <span class="preview-label">Skills Required:</span>
            <span class="preview-value">${job.skills.join(', ')}</span>
        </div>
    `;
    
    // Set default expected price (10% less than job pay)
    DOM.expectedPriceInput.value = Math.round(job.pay * 0.9);
    
    // Reset form
    DOM.availabilityText.innerHTML = `
        <i class="fas fa-calendar availability-icon"></i>
        <span class="availability-label">${translations[AppState.settings.language].select_availability || 'Select availability'}</span>
    `;
    DOM.availabilityInput.value = '';
    DOM.customDateContainer.style.display = 'none';
    DOM.customDateInput.value = '';
    DOM.coverMessageInput.value = '';
    
    openModal(DOM.applyJobModal);
}

function submitJobApplication() {
    if (!AppState.currentJob) return;
    
    const expectedPrice = parseInt(DOM.expectedPriceInput.value);
    const availability = DOM.availabilityInput.value;
    const coverMessage = DOM.coverMessageInput.value;
    
    // Handle custom date
    let availabilityValue = availability;
    if (availability === 'custom_date' && DOM.customDateInput.value) {
        availabilityValue = DOM.customDateInput.value;
    }
    
    if (!expectedPrice || !availabilityValue) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (expectedPrice > AppState.currentJob.pay * 2) {
        if (!confirm('Your expected price seems very high. Are you sure you want to submit this application?')) {
            return;
        }
    }
    
    const newApplication = {
        id: Date.now(),
        jobId: AppState.currentJob.id,
        jobTitle: AppState.currentJob.title,
        employerName: AppState.currentJob.employerName,
        location: AppState.currentJob.location,
        pay: AppState.currentJob.pay,
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'applied',
        expectedPrice: expectedPrice,
        availability: availabilityValue,
        coverMessage: coverMessage
    };
    
    AppState.appliedJobs.unshift(newApplication);
    
    // Update UI
    renderFindJobs();
    renderAppliedJobs();
    updateStats();
    
    closeModal(DOM.applyJobModal);
    showNotification('Job application submitted successfully!', 'success');
}

function viewJobDetails(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    DOM.jobDetailsContent.innerHTML = `
        <div class="detail-section">
            <h3>Job Details</h3>
            <div class="detail-row">
                <span class="detail-label">Job Title</span>
                <span class="detail-value">${job.title}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Work Type</span>
                <span class="detail-value">${job.workType}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Job Description</span>
                <span class="detail-value">${job.description}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Required Skills</span>
                <span class="detail-value">${job.skills.join(', ')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location</span>
                <span class="detail-value">${job.location} (${job.distance} km from you)</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Time Required</span>
                <span class="detail-value">${job.time} hours</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Posted Date</span>
                <span class="detail-value">${new Date(job.postedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Employer Name</span>
                <span class="detail-value">${job.employerName}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment</span>
                <span class="detail-value">₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Employer Details</h3>
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <img src="${job.employerPhoto}" alt="${job.employerName}" style="width: 60px; height: 60px; border-radius: 50%;">
                <div>
                    <div style="font-weight: 600; font-size: 18px;">${job.employerName}</div>
                    <div style="color: #666; font-size: 14px;">${job.workType} Employer</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Payment Details</h3>
            <div class="detail-row">
                <span class="detail-label">Job Pay</span>
                <span class="detail-value" style="color: #4362C9; font-size: 24px;">₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment Terms</span>
                <span class="detail-value">Payment upon completion of work</span>
            </div>
        </div>
        
        <div style="display: flex; gap: 15px; margin-top: 20px;">
            <button class="submit-job-btn" id="applyFromDetailsBtn">
                <i class="fas fa-paper-plane"></i> Apply Now
            </button>
            <button class="small-btn chat-job-btn" style="padding: 15px 20px;" id="chatFromDetailsBtn">
                <i class="fas fa-comment"></i> Chat
            </button>
        </div>
    `;
    
    // Add event listeners to buttons in modal
    const applyBtn = document.getElementById('applyFromDetailsBtn');
    const chatBtn = document.getElementById('chatFromDetailsBtn');
    
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            closeModal(DOM.jobDetailsModal);
            applyForJob(job.id);
        });
    }
    
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            closeModal(DOM.jobDetailsModal);
            openChatFromJob(job.id);
        });
    }
    
    openModal(DOM.jobDetailsModal);
}

// ============================================
// APPLIED JOBS FUNCTIONS
// ============================================
function renderAppliedJobs() {
    if (!DOM.appliedJobsContainer) return;
    
    let appliedJobs = [...AppState.appliedJobs];
    
    // Apply search filter
    if (AppState.appliedFilters.search) {
        const searchTerm = AppState.appliedFilters.search.toLowerCase();
        appliedJobs = appliedJobs.filter(job => 
            job.jobTitle.toLowerCase().includes(searchTerm) ||
            job.employerName.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply status filter
    if (AppState.appliedFilters.status) {
        appliedJobs = appliedJobs.filter(job => 
            AppState.appliedFilters.status === `status-${job.status}`
        );
    }
    
    // Apply sorting
    if (AppState.appliedFilters.activeSort) {
        switch (AppState.appliedFilters.activeSort) {
            case 'date-desc':
                appliedJobs.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
                break;
            case 'date-asc':
                appliedJobs.sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate));
                break;
        }
    }
    
    DOM.appliedJobsContainer.innerHTML = '';
    
    if (appliedJobs.length === 0) {
        DOM.appliedJobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <h3 class="empty-state-title">No Applied Jobs</h3>
                <p class="empty-state-message">${AppState.appliedFilters.search || AppState.appliedFilters.status ? 'Try adjusting your search criteria' : 'You haven\'t applied to any jobs yet'}</p>
                ${AppState.appliedFilters.status ? `
                <button class="small-btn" id="clearStatusFilterBtn" style="margin-top: 15px;">
                    <i class="fas fa-times"></i> Clear Status Filter
                </button>
                ` : ''}
            </div>
        `;
        
        // Add event listener to clear status filter button
        const clearBtn = document.getElementById('clearStatusFilterBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                AppState.appliedFilters.status = null;
                renderAppliedJobs();
            });
        }
        return;
    }
    
    appliedJobs.forEach(job => {
        const jobCard = createAppliedJobCard(job);
        DOM.appliedJobsContainer.appendChild(jobCard);
    });
}

function createAppliedJobCard(job) {
    const card = document.createElement('div');
    card.className = 'applied-job-card';
    card.dataset.id = job.id;
    
    // Status badge styling
    let statusClass = '';
    let statusText = '';
    let statusIcon = '';
    
    switch(job.status) {
        case 'applied':
            statusClass = 'status-applied';
            statusText = 'Applied';
            statusIcon = 'fa-paper-plane';
            break;
        case 'accepted':
            statusClass = 'status-accepted';
            statusText = 'Accepted';
            statusIcon = 'fa-check';
            break;
        case 'rejected':
            statusClass = 'status-rejected';
            statusText = 'Rejected';
            statusIcon = 'fa-times';
            break;
        default:
            statusClass = 'status-applied';
            statusText = 'Applied';
            statusIcon = 'fa-paper-plane';
    }
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.jobTitle}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName}</p>
                <p class="job-location">📍 ${job.location}</p>
            </div>
            <div class="status-badge ${statusClass}">
                <i class="fas ${statusIcon}"></i> ${statusText}
            </div>
        </div>
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-money-bill-wave"></i>
                <span>Job Pay: ₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-rupee-sign"></i>
                <span>Your Expected: ₹${job.expectedPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-calendar"></i>
                <span>Applied: ${new Date(job.appliedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-clock"></i>
                <span>Availability: ${formatAvailability(job.availability)}</span>
            </div>
        </div>
        <div class="job-actions">
            <button class="small-btn chat-job-btn" data-job-id="${job.id}">
                <i class="fas fa-comment"></i> Chat
            </button>
            <button class="small-btn view-details-btn" data-job-id="${job.id}">
                <i class="fas fa-eye"></i> View Details
            </button>
        </div>
    `;
    
    // Add event listeners
    const chatBtn = card.querySelector('.chat-job-btn');
    const detailsBtn = card.querySelector('.view-details-btn');
    
    if (chatBtn) {
        chatBtn.addEventListener('click', () => openChatFromAppliedJob(job.id));
    }
    
    if (detailsBtn) {
        detailsBtn.addEventListener('click', () => viewAppliedJobDetails(job.id));
    }
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 15px 35px rgba(67, 98, 201, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 24px rgba(67, 98, 201, 0.1)';
    });
    
    return card;
}

function formatAvailability(availability) {
    const availabilityMap = {
        'immediate': 'Immediate',
        'tomorrow': 'Tomorrow',
        'within_3_days': 'Within 3 Days',
        'within_1_week': 'Within 1 Week',
        'custom_date': 'Custom Date'
    };
    
    if (availability in availabilityMap) {
        return availabilityMap[availability];
    }
    
    // Check if it's a date string
    if (availability.includes('-')) {
        return new Date(availability).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
    
    return availability;
}

function openChatFromAppliedJob(appliedJobId) {
    const job = AppState.appliedJobs.find(j => j.id === appliedJobId);
    if (!job) return;
    
    const employer = {
        name: job.employerName,
        id: job.jobId
    };
    
    openChatModal(employer);
}

function viewAppliedJobDetails(appliedJobId) {
    const job = AppState.appliedJobs.find(j => j.id === appliedJobId);
    if (!job) return;
    
    const modalContent = `
        <div class="detail-section">
            <h3>Application Details</h3>
            <div class="detail-row">
                <span class="detail-label">Job Title</span>
                <span class="detail-value">${job.jobTitle}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Employer Name</span>
                <span class="detail-value">${job.employerName}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location</span>
                <span class="detail-value">${job.location}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Job Pay</span>
                <span class="detail-value">₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Your Expected Price</span>
                <span class="detail-value">₹${job.expectedPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Applied Date</span>
                <span class="detail-value">${new Date(job.appliedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Availability</span>
                <span class="detail-value">${formatAvailability(job.availability)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status</span>
                <span class="detail-value">
                    <span class="status-badge ${job.status === 'applied' ? 'status-applied' : job.status === 'accepted' ? 'status-accepted' : 'status-rejected'}">
                        ${job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                </span>
            </div>
            ${job.coverMessage ? `
            <div class="detail-row">
                <span class="detail-label">Cover Message</span>
                <span class="detail-value">${job.coverMessage}</span>
            </div>
            ` : ''}
        </div>
        
        <div style="display: flex; gap: 15px; margin-top: 20px;">
            <button class="submit-job-btn" id="chatFromAppliedDetailsBtn">
                <i class="fas fa-comment"></i> Chat with Employer
            </button>
        </div>
    `;
    
    const modalTitle = DOM.jobDetailsModal.querySelector('h2');
    modalTitle.textContent = 'Application Details';
    DOM.jobDetailsContent.innerHTML = modalContent;
    
    const chatBtn = document.getElementById('chatFromAppliedDetailsBtn');
    
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            closeModal(DOM.jobDetailsModal);
            openChatFromAppliedJob(job.id);
        });
    }
    
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
                <div class="empty-state-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <h3 class="empty-state-title">No Active Jobs</h3>
                <p class="empty-state-message">You don't have any active jobs at the moment</p>
                <button class="small-btn" id="findJobsBtn" style="margin-top: 15px;">
                    <i class="fas fa-search"></i> Find Jobs
                </button>
            </div>
        `;
        
        // Add event listener to find jobs button
        const findJobsBtn = document.getElementById('findJobsBtn');
        if (findJobsBtn) {
            findJobsBtn.addEventListener('click', () => {
                setActiveSection('find-jobs');
            });
        }
        return;
    }
    
    AppState.activeJobs.forEach(job => {
        const jobCard = createActiveJobCard(job);
        DOM.activeJobsContainer.appendChild(jobCard);
    });
}

function createActiveJobCard(job) {
    const card = document.createElement('div');
    card.className = 'active-job-card';
    card.dataset.id = job.id;
    
    card.innerHTML = `
        <div class="employer-profile">
            <div class="employer-photo">
                <img src="${job.employerPhoto}" alt="${job.employerName}">
            </div>
            <div>
                <h3 class="employer-name">${job.employerName}</h3>
                <p class="job-location">📍 ${job.location}</p>
            </div>
        </div>
        
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-briefcase"></i>
                <span>${job.jobTitle}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-money-bill-wave"></i>
                <span>Payment: ₹${job.pay.toLocaleString('en-IN')}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-calendar"></i>
                <span>Started: ${new Date(job.startDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-flag-checkered"></i>
                <span>Expected Completion: ${new Date(job.expectedCompletion).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}</span>
            </div>
        </div>
        
        <div class="active-job-actions">
            <button class="action-btn-small chat-btn" data-job-id="${job.id}">
                <i class="fas fa-comment"></i> Chat
            </button>
            <button class="action-btn-small request-completion-btn" data-job-id="${job.id}">
                <i class="fas fa-check-circle"></i> Mark Complete
            </button>
        </div>
    `;
    
    // Add event listeners
    const chatBtn = card.querySelector('.chat-btn');
    const completeBtn = card.querySelector('.request-completion-btn');
    
    if (chatBtn) {
        chatBtn.addEventListener('click', () => openChatFromActiveJob(job.id));
    }
    
    if (completeBtn) {
        completeBtn.addEventListener('click', () => requestWorkCompletion(job.id));
    }
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 15px 35px rgba(67, 98, 201, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 24px rgba(67, 98, 201, 0.1)';
    });
    
    return card;
}

function openChatFromActiveJob(activeJobId) {
    const job = AppState.activeJobs.find(j => j.id === activeJobId);
    if (!job) return;
    
    const employer = {
        name: job.employerName,
        id: job.jobId
    };
    
    openChatModal(employer);
}

function requestWorkCompletion(jobId) {
    const job = AppState.activeJobs.find(j => j.id === jobId);
    if (!job) return;
    
    AppState.confirmationData = {
        jobId: jobId,
        callback: () => completeWork(jobId)
    };
    
    openModal(DOM.confirmationModal);
}

function handleConfirmationYes() {
    if (AppState.confirmationData.callback) {
        AppState.confirmationData.callback();
    }
    closeModal(DOM.confirmationModal);
}

function handleConfirmationNo() {
    closeModal(DOM.confirmationModal);
}

function completeWork(jobId) {
    const jobIndex = AppState.activeJobs.findIndex(j => j.id === jobId);
    if (jobIndex === -1) return;
    
    const job = AppState.activeJobs[jobIndex];
    
    // Create work history entry
    const workHistoryEntry = {
        id: Date.now(),
        jobId: job.jobId,
        jobTitle: job.jobTitle,
        employerName: job.employerName,
        employerPhoto: job.employerPhoto,
        company: "Individual Employer",
        contact: "+91 9876543210",
        location: job.location,
        jobDuration: "3 days",
        payment: job.pay,
        workPeriod: `${new Date(job.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} - ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`,
        paymentReceived: job.pay,
        jobStatus: "Completed",
        rating: 4.5,
        completionDate: new Date().toISOString().split('T')[0]
    };
    
    // Remove from active jobs
    AppState.activeJobs.splice(jobIndex, 1);
    
    // Add to work history
    AppState.workHistory.unshift(workHistoryEntry);
    
    // Update UI
    renderActiveJobs();
    renderWorkHistory();
    updateStats();
    
    showNotification('Job marked as completed! Added to Work History.', 'success');
}

// ============================================
// WORK HISTORY FUNCTIONS
// ============================================
function renderWorkHistory() {
    if (!DOM.workHistoryContainer) return;
    
    let workHistory = [...AppState.workHistory];
    
    // Apply search filter
    if (AppState.historyFilters.search) {
        const searchTerm = AppState.historyFilters.search.toLowerCase();
        workHistory = workHistory.filter(job => 
            job.jobTitle.toLowerCase().includes(searchTerm) ||
            job.employerName.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    if (AppState.historyFilters.activeSort) {
        switch (AppState.historyFilters.activeSort) {
            case 'date-desc':
                workHistory.sort((a, b) => new Date(b.completionDate || b.workPeriod) - new Date(a.completionDate || a.workPeriod));
                break;
            case 'date-asc':
                workHistory.sort((a, b) => new Date(a.completionDate || a.workPeriod) - new Date(b.completionDate || b.workPeriod));
                break;
            case 'payment-desc':
                workHistory.sort((a, b) => b.payment - a.payment);
                break;
            case 'payment-asc':
                workHistory.sort((a, b) => a.payment - b.payment);
                break;
        }
    }
    
    DOM.workHistoryContainer.innerHTML = '';
    
    if (workHistory.length === 0) {
        DOM.workHistoryContainer.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div class="empty-state-container" style="margin: 0;">
                        <div class="empty-state-icon">
                            <i class="fas fa-history"></i>
                        </div>
                        <h3 class="empty-state-title">No Work History</h3>
                        <p class="empty-state-message">${AppState.historyFilters.search ? 'Try adjusting your search criteria' : 'Complete jobs will appear here'}</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    workHistory.forEach(job => {
        const row = createWorkHistoryRow(job);
        DOM.workHistoryContainer.appendChild(row);
    });
}

function createWorkHistoryRow(job) {
    const row = document.createElement('tr');
    
    // Properly generate star ratings
    const rating = job.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star rating-star"></i>';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt rating-star"></i>';
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star rating-star empty"></i>';
    }
    
    row.innerHTML = `
        <td>${job.employerName}</td>
        <td>${job.jobTitle}</td>
        <td>${new Date(job.completionDate || job.workPeriod).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })}</td>
        <td>₹${job.payment.toLocaleString('en-IN')}</td>
        <td>
            <div class="rating-stars">
                ${starsHTML}
                <span class="rating-value">${rating.toFixed(1)}</span>
            </div>
        </td>
        <td>
            <button class="small-btn view-details-btn" data-job-id="${job.id}">
                <i class="fas fa-eye"></i> View
            </button>
        </td>
    `;
    
    // Add hover effect
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#F8F9FA';
    });
    
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = '';
    });
    
    // Add event listener
    const viewBtn = row.querySelector('.view-details-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', () => viewWorkHistoryDetails(job.id));
        viewBtn.addEventListener('mouseenter', () => {
            viewBtn.style.transform = 'translateY(-2px)';
            viewBtn.style.boxShadow = '0 4px 12px rgba(67, 98, 201, 0.2)';
        });
        viewBtn.addEventListener('mouseleave', () => {
            viewBtn.style.transform = 'translateY(0)';
            viewBtn.style.boxShadow = 'none';
        });
    }
    
    return row;
}

function viewWorkHistoryDetails(jobId) {
    const job = AppState.workHistory.find(j => j.id === jobId);
    if (!job) return;
    
    // Properly generate star ratings for modal
    const rating = job.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star rating-star"></i>';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt rating-star"></i>';
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star rating-star empty"></i>';
    }
    
    DOM.workHistoryContent.innerHTML = `
        <div class="detail-section">
            <h3>Work Details</h3>
            <div class="detail-row">
                <span class="detail-label">Job Title</span>
                <span class="detail-value">${job.jobTitle}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Employer Name</span>
                <span class="detail-value">${job.employerName}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Company</span>
                <span class="detail-value">${job.company}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Contact</span>
                <span class="detail-value">${job.contact}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location</span>
                <span class="detail-value">${job.location}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Work Period</span>
                <span class="detail-value">${job.workPeriod}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Job Duration</span>
                <span class="detail-value">${job.jobDuration}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Payment Details</h3>
            <div class="detail-row">
                <span class="detail-label">Agreed Payment</span>
                <span class="detail-value" style="color: #4362C9; font-size: 24px;">₹${job.payment.toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment Received</span>
                <span class="detail-value" style="color: #01A060; font-size: 20px;">₹${job.paymentReceived.toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Job Status</span>
                <span class="detail-value">
                    <span class="status-badge status-accepted">${job.jobStatus}</span>
                </span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Rating & Feedback</h3>
            <div class="detail-row">
                <span class="detail-label">Rating</span>
                <span class="detail-value">
                    <div class="rating-stars" style="font-size: 20px;">
                        ${starsHTML}
                        <span class="rating-value" style="font-size: 18px;">${rating.toFixed(1)}/5</span>
                    </div>
                </span>
            </div>
        </div>
        
        <div style="display: flex; gap: 15px; margin-top: 20px;">
            <button class="submit-job-btn" id="viewEmployerProfileBtn">
                <i class="fas fa-user"></i> View Employer Profile
            </button>
        </div>
    `;
    
    const profileBtn = document.getElementById('viewEmployerProfileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            showNotification('Employer profile feature coming soon!', 'info');
        });
    }
    
    openModal(DOM.workHistoryModal);
}

// ============================================
// CHAT FUNCTIONS
// ============================================
function openChatFromJob(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    const employer = {
        name: job.employerName,
        id: job.id,
        photo: job.employerPhoto
    };
    
    openChatModal(employer);
}

function openChatModal(employer) {
    if (!employer) return;
    
    // Update employer name
    DOM.chatEmployerName.textContent = employer.name;
    
    // Load chat messages (simulated)
    AppState.currentChat = {
        employer: employer,
        messages: [
            {
                id: 1,
                sender: 'employer',
                text: `Hello! I saw your profile and I'm interested in hiring you for the job.`,
                time: '10:30 AM',
                date: 'Today'
            },
            {
                id: 2,
                sender: 'worker',
                text: 'Hi! Thank you for your interest. Can you tell me more about the job requirements?',
                time: '10:32 AM',
                date: 'Today'
            },
            {
                id: 3,
                sender: 'employer',
                text: 'Sure! It\'s a wiring job for my new house. Need someone with experience in modern electrical systems.',
                time: '10:35 AM',
                date: 'Today'
            }
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
        
        messageElement.innerHTML = `
            <div class="message-bubble">
                <p>${message.text}</p>
                <div class="message-time">${message.time}</div>
            </div>
        `;
        
        DOM.chatMessages.appendChild(messageElement);
    });
    
    // Scroll to bottom
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function sendChatMessage() {
    if (!DOM.chatInput || !DOM.chatInput.value.trim()) return;
    
    const messageText = DOM.chatInput.value.trim();
    
    // Add message to chat
    const newMessage = {
        id: Date.now(),
        sender: 'worker',
        text: messageText,
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        date: 'Today'
    };
    
    AppState.currentChat.messages.push(newMessage);
    
    // Clear input
    DOM.chatInput.value = '';
    
    // Re-render messages
    renderChatMessages();
    
    // Simulate employer reply after 1 second
    setTimeout(() => {
        const replies = [
            "Thanks for your message! Let me check the details.",
            "That sounds good. When can you start?",
            "I'll discuss with my partner and get back to you.",
            "Can you share your previous work experience?",
            "What's your availability next week?"
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const employerReply = {
            id: Date.now() + 1,
            sender: 'employer',
            text: randomReply,
            time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            date: 'Today'
        };
        
        AppState.currentChat.messages.push(employerReply);
        renderChatMessages();
    }, 1000);
}

function handleChatFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    AppState.currentFile = file;
    
    // Show notification
    showNotification(`File "${file.name}" selected for upload`, 'info');
    
    // Simulate file upload and add to chat
    setTimeout(() => {
        const fileMessage = {
            id: Date.now(),
            sender: 'worker',
            text: `📎 File: ${file.name} (${formatFileSize(file.size)})`,
            time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            date: 'Today',
            isFile: true,
            fileName: file.name,
            fileSize: file.size
        };
        
        AppState.currentChat.messages.push(fileMessage);
        renderChatMessages();
        showNotification('File uploaded successfully!', 'success');
    }, 1500);
}

function toggleVoiceRecording() {
    if (!AppState.isRecording) {
        startVoiceRecording();
    } else {
        stopVoiceRecording();
    }
}

function startVoiceRecording() {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
        showNotification('Voice recording not supported in your browser', 'error');
        return;
    }
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            AppState.mediaRecorder = new MediaRecorder(stream);
            AppState.audioChunks = [];
            
            AppState.mediaRecorder.ondataavailable = event => {
                AppState.audioChunks.push(event.data);
            };
            
            AppState.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(AppState.audioChunks, { type: 'audio/webm' });
                sendVoiceMessage(audioBlob);
                
                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());
            };
            
            AppState.mediaRecorder.start();
            AppState.isRecording = true;
            DOM.voiceMessageBtn.innerHTML = '<i class="fas fa-stop-circle"></i>';
            showNotification('Recording... Click again to stop', 'info');
        })
        .catch(err => {
            console.error('Error accessing microphone:', err);
            showNotification('Microphone access denied. Please check permissions.', 'error');
        });
}

function stopVoiceRecording() {
    if (AppState.mediaRecorder && AppState.isRecording) {
        AppState.mediaRecorder.stop();
        AppState.isRecording = false;
        DOM.voiceMessageBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    }
}

function sendVoiceMessage(audioBlob) {
    // Simulate voice message upload
    const voiceMessage = {
        id: Date.now(),
        sender: 'worker',
        text: '🎤 Voice message',
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        date: 'Today',
        isVoice: true,
        duration: '5s'
    };
    
    AppState.currentChat.messages.push(voiceMessage);
    renderChatMessages();
    showNotification('Voice message sent!', 'success');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ============================================
// AI ASSISTANT FUNCTIONS (WITH PAGE/MODAL LOGIC)
// ============================================
function sendAIMessage(inputElement, messagesContainer) {
    if (!inputElement || !inputElement.value.trim()) return;
    
    const messageText = inputElement.value.trim();
    
    // Add user message
    addAIMessage('user', messageText, messagesContainer);
    
    // Clear input
    inputElement.value = '';
    
    // Simulate AI thinking
    setTimeout(() => {
        const aiResponse = generateAIResponse(messageText);
        addAIMessage('ai', aiResponse, messagesContainer);
    }, 1000);
}

function addAIMessage(sender, text, container) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;
    
    if (sender === 'ai') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    }
    
    container.appendChild(messageDiv);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    const currentLang = AppState.settings.language;
    
    if (lowerMessage.includes('best job') || lowerMessage.includes('recommend')) {
        const skills = AppState.worker.skill.toLowerCase();
        const matchingJobs = AppState.jobs.filter(job => 
            job.skills.some(skill => skill.toLowerCase().includes(skills)) ||
            job.title.toLowerCase().includes(skills)
        );
        
        if (matchingJobs.length > 0) {
            const job = matchingJobs[0];
            return currentLang === 'hi' 
                ? `आपके कौशल "${AppState.worker.skill}" के आधार पर, मैं "${job.title}" नौकरी की सिफारिश करता हूं जो ${job.location} में है। यह ₹${job.pay} का भुगतान करती है और इसमें ${job.time} घंटे का काम है। यह आपके कौशल सेट के लिए बिल्कुल सही है!`
                : currentLang === 'mr'
                ? `तुमच्या कौशल्य "${AppState.worker.skill}" वर आधारित, मी "${job.title}" नोकरीची शिफारस करतो जी ${job.location} मध्ये आहे. ही ₹${job.pay} पेमेंट देते आणि यासाठी ${job.time} तासांचे काम आहे. हे तुमच्या कौशल्य सेटसाठी अगदी परफेक्ट आहे!`
                : `Based on your skills as an ${AppState.worker.skill}, I recommend the "${job.title}" job in ${job.location}. It pays ₹${job.pay.toLocaleString('en-IN')} and requires ${job.time} hours of work. This matches your skill set perfectly!`;
        } else {
            return currentLang === 'hi'
                ? `मुझे "${AppState.worker.skill}" से विशेष रूप से मेल खाती कोई नौकरी नहीं मिली। "नौकरी खोजें" अनुभाग देखें और उपयुक्त अवसरों को खोजने के लिए फ़िल्टर का उपयोग करें।`
                : currentLang === 'mr'
                ? `मला "${AppState.worker.skill}" शी विशेषतः जुळणारी नोकऱ्या सापडल्या नाहीत. "नोकऱ्या शोधा" विभाग तपासा आणि योग्य संधी शोधण्यासाठी फिल्टर वापरा.`
                : `I couldn't find jobs specifically matching "${AppState.worker.skill}". Try checking the "Find Jobs" section and use filters to find suitable opportunities.`;
        }
    } else if (lowerMessage.includes('high pay') || lowerMessage.includes('earning')) {
        const highPayingJobs = [...AppState.jobs]
            .filter(job => !AppState.appliedJobs.some(applied => applied.jobId === job.id))
            .sort((a, b) => b.pay - a.pay)
            .slice(0, 2);
        
        if (highPayingJobs.length > 0) {
            let response = currentLang === 'hi'
                ? 'यहां उपलब्ध सबसे अधिक भुगतान वाली नौकरियां हैं:\n\n'
                : currentLang === 'mr'
                ? 'येथे उपलब्ध सर्वोत्तम पगाराच्या नोकऱ्या आहेत:\n\n'
                : 'Here are the highest paying jobs available:\n\n';
            
            highPayingJobs.forEach((job, index) => {
                response += `${index + 1}. ${job.title} - ₹${job.pay.toLocaleString('en-IN')} in ${job.location}\n`;
            });
            return response;
        } else {
            return currentLang === 'hi'
                ? 'वर्तमान में कोई उच्च वेतन वाली नौकरी उपलब्ध नहीं है। बाद में जांचें या विभिन्न खोज मानदंड आज़माएं।'
                : currentLang === 'mr'
                ? 'सध्या उच्च पगाराच्या नोकऱ्या उपलब्ध नाहीत. नंतर तपासा किंवा वेगवेगळ्या शोध निकष वापरून पहा.'
                : 'No high-paying jobs are currently available. Check back later or try different search criteria.';
        }
    } else if (lowerMessage.includes('near me') || lowerMessage.includes('location')) {
        const nearbyJobs = AppState.jobs
            .filter(job => job.distance < 5)
            .sort((a, b) => a.distance - b.distance);
        
        if (nearbyJobs.length > 0) {
            let response = currentLang === 'hi'
                ? `आपके स्थान ${AppState.worker.location.city} के आस-पास की नौकरियां:\n\n`
                : currentLang === 'mr'
                ? `तुमच्या स्थानावर ${AppState.worker.location.city} जवळच्या नोकऱ्या:\n\n`
                : `Jobs near your location in ${AppState.worker.location.city}:\n\n`;
            
            nearbyJobs.forEach((job, index) => {
                response += `${index + 1}. ${job.title} - ${job.distance} km away, pays ₹${job.pay.toLocaleString('en-IN')}\n`;
            });
            return response;
        } else {
            return currentLang === 'hi'
                ? `${AppState.worker.location.city} के 5 किमी के दायरे में कोई नौकरी नहीं मिली। फ़िल्टर में अपनी खोज त्रिज्या बढ़ाने का प्रयास करें।`
                : currentLang === 'mr'
                ? `${AppState.worker.location.city} च्या 5 किमी अंतरात कोणतीही नोकरी सापडली नाही. फिल्टरमध्ये तुमची शोध त्रिज्या वाढवण्याचा प्रयत्न करा.`
                : `No jobs found within 5 km of ${AppState.worker.location.city}. Try expanding your search radius in the filters.`;
        }
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('improve')) {
        return currentLang === 'hi'
            ? `एक ${AppState.worker.skill} के रूप में, इन पूरक कौशलों को सीखने पर विचार करें:\n\n1. बेसिक प्लंबिंग - आपकी सेवा की पेशकश का विस्तार करता है\n2. सोलर पैनल इंस्टालेशन - बढ़ता क्षेत्र\n3. होम ऑटोमेशन सिस्टम - उच्च मांग\n4. सुरक्षा प्रमाणन - विश्वसनीयता बढ़ाता है\n\nअपने कौशल को अपग्रेड करने के लिए ऑनलाइन कोर्स या स्थानीय प्रशिक्षण केंद्र देखें!`
            : currentLang === 'mr'
            ? `एक ${AppState.worker.skill} म्हणून, या पूरक कौशल्यांवर विचार करा:\n\n1. मूलभूत नळकाम - तुमच्या सेवा ऑफरिंगचा विस्तार करते\n2. सौर पॅनेल स्थापना - वाढणारे क्षेत्र\n3. होम ऑटोमेशन सिस्टम - उच्च मागणी\n4. सुरक्षा प्रमाणपत्र - विश्वसनीयता वाढवते\n\nतुमची कौशल्ये अपग्रेड करण्यासाठी ऑनलाइन कोर्स किंवा स्थानिक प्रशिक्षण केंद्रे तपासा!`
            : `As an ${AppState.worker.skill}, consider learning these complementary skills:\n\n1. Basic plumbing - expands your service offerings\n2. Solar panel installation - growing field\n3. Home automation systems - high demand\n4. Safety certification - increases credibility\n\nCheck online courses or local training centers to upgrade your skills!`;
    } else if (lowerMessage.includes('applied') || lowerMessage.includes('status')) {
        const pendingApplications = AppState.appliedJobs.filter(job => job.status === 'applied');
        const acceptedApplications = AppState.appliedJobs.filter(job => job.status === 'accepted');
        
        return currentLang === 'hi'
            ? `आपके कुल ${AppState.appliedJobs.length} आवेदन हैं:\n\n✅ स्वीकृत: ${acceptedApplications.length}\n⏳ लंबित: ${pendingApplications.length}\n\nविस्तृत स्थिति अपडेट के लिए "आवेदित नौकरियां" अनुभाग देखें।`
            : currentLang === 'mr'
            ? `तुमचे एकूण ${AppState.appliedJobs.length} अर्ज आहेत:\n\n✅ स्वीकृत: ${acceptedApplications.length}\n⏳ प्रलंबित: ${pendingApplications.length}\n\nतपशीलवार स्थिती अद्यतनांसाठी "अर्ज केलेल्या नोकऱ्या" विभाग तपासा.`
            : `You have ${AppState.appliedJobs.length} total applications:\n\n✅ Accepted: ${acceptedApplications.length}\n⏳ Pending: ${pendingApplications.length}\n\nCheck the "Applied Jobs" section for detailed status updates.`;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how to')) {
        return currentLang === 'hi'
            ? `मैं आपकी मदद कर सकता हूं:\n\n1. आपके कौशल से मेल खाती नौकरियां ढूंढना\n2. उच्च वेतन वाले अवसरों की पहचान करना\n3. आपके आस-पास की नौकरियों का पता लगाना\n4. आपके आवेदनों को ट्रैक करना\n5. कौशल सुधार के सुझाव देना\n\nमुझसे विशिष्ट प्रश्न पूछने का प्रयास करें जैसे:\n• "मुझे बिजली मिस्त्री की नौकरियां दिखाएं"\n• "मेरे पास उच्च वेतन वाली नौकरियां"\n• "मेरे आवेदन की स्थिति जांचें"`
            : currentLang === 'mr'
            ? `मी तुमची मदत करू शकतो:\n\n1. तुमच्या कौशल्याशी जुळणाऱ्या नोकऱ्या शोधणे\n2. उच्च पगाराच्या संधी ओळखणे\n3. तुमच्या जवळच्या नोकऱ्या शोधणे\n4. तुमच्या अर्जांचा मागोवा घेणे\n5. कौशल्य सुधारण्याचे सूचना देणे\n\nमला विशिष्ट प्रश्न विचारण्याचा प्रयत्न करा जसे की:\n• "मला विजेमिस्त्रीच्या नोकऱ्या दाखवा"\n• "माझ्या जवळ उच्च पगाराच्या नोकऱ्या"\n• "माझ्या अर्जाची स्थिती तपासा"`
            : `I can help you with:\n\n1. Finding jobs matching your skills\n2. Identifying high-paying opportunities\n3. Locating jobs near you\n4. Tracking your applications\n5. Suggesting skill improvements\n\nTry asking me specific questions like:\n• "Show me electrician jobs"\n• "Best paying jobs near me"\n• "Check my application status"`;
    } else {
        const defaultResponses = {
            en: [
                "I'm here to help you find the best jobs! Try asking about jobs near you, high-paying opportunities, or your application status.",
                "As your AI assistant, I can help you discover job opportunities based on your skills and preferences.",
                "Looking for work? I can help you find jobs that match your expertise as an electrician.",
                "Check out the 'Find Jobs' section to see all available opportunities, or ask me for specific recommendations!"
            ],
            hi: [
                "मैं आपको सर्वोत्तम नौकरियां खोजने में मदद करने के लिए यहां हूं! अपने आस-पास की नौकरियों, उच्च वेतन वाले अवसरों, या अपने आवेदन की स्थिति के बारे में पूछने का प्रयास करें।",
                "आपके AI सहायक के रूप में, मैं आपके कौशल और प्राथमिकताओं के आधार पर नौकरी के अवसर खोजने में आपकी मदद कर सकता हूं।",
                "काम की तलाश है? मैं आपको बिजली मिस्त्री के रूप में आपकी विशेषज्ञता से मेल खाती नौकरियां खोजने में मदद कर सकता हूं।",
                "सभी उपलब्ध अवसरों को देखने के लिए 'नौकरी खोजें' अनुभाग देखें, या विशिष्ट सिफारिशों के लिए मुझसे पूछें!"
            ],
            mr: [
                "मी तुम्हाला सर्वोत्तम नोकऱ्या शोधण्यात मदत करण्यासाठी येथे आहे! तुमच्या जवळच्या नोकऱ्या, उच्च पगाराच्या संधी किंवा तुमच्या अर्जाच्या स्थितीबद्दल विचारण्याचा प्रयत्न करा.",
                "तुमचा AI सहाय्यक म्हणून, मी तुमच्या कौशल्य आणि प्राधान्यांवर आधारित नोकरीच्या संधी शोधण्यात तुमची मदत करू शकतो.",
                "काम शोधत आहात? मी तुम्हाला विजेमिस्त्री म्हणून तुमच्या विशेषज्ञतेशी जुळणाऱ्या नोकऱ्या शोधण्यात मदत करू शकतो.",
                "सर्व उपलब्ध संधी पाहण्यासाठी 'नोकऱ्या शोधा' विभाग तपासा किंवा विशिष्ट शिफारसींसाठी मला विचारा!"
            ]
        };
        
        const responses = defaultResponses[currentLang] || defaultResponses.en;
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

function handleAIFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    showNotification(`File "${file.name}" uploaded to AI assistant`, 'info');
    
    // Simulate AI processing file
    setTimeout(() => {
        const response = `I've analyzed your file "${file.name}". It appears to be a ${file.type.split('/')[1] || 'document'} file. If this is a resume or work sample, I can help you find jobs that match the skills mentioned in it.`;
        addAIMessage('ai', response, DOM.aiModalMessages);
    }, 2000);
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
        case 'success':
            icon = 'fas fa-check-circle';
            title = 'Success';
            break;
        case 'error':
            icon = 'fas fa-exclamation-circle';
            title = 'Error';
            break;
        case 'warning':
            icon = 'fas fa-exclamation-triangle';
            title = 'Warning';
            break;
        case 'info':
        default:
            icon = 'fas fa-info-circle';
            title = 'Information';
    }
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icon}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    DOM.notificationWrapper.appendChild(notification);
    
    // Add close event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// ============================================
// LOGOUT FUNCTION
// ============================================
function handleLogout() {
    const confirmMessage = AppState.settings.language === 'hi'
        ? 'क्या आप लॉगआउट करना चाहते हैं?'
        : AppState.settings.language === 'mr'
        ? 'तुम्हाला लॉगआउट करायचे आहे का?'
        : 'Are you sure you want to logout?';
    
    if (confirm(confirmMessage)) {
        showNotification('Logging out...', 'info');
        
        // Clear sensitive data
        AppState.currentJob = null;
        AppState.currentChat = { employer: null, messages: [] };
        AppState.currentFile = null;
        
        // Simulate logout process
        setTimeout(() => {
            showNotification('Logged out successfully!', 'success');
            
            // Reset to dashboard
            AppState.previousSection = null;
            setActiveSection('dashboard');
            renderFindJobs();
            renderAppliedJobs();
            renderActiveJobs();
            renderWorkHistory();
            updateStats();
        }, 1500);
    }
}

// ============================================
// SYSTEM PREFERENCE LISTENERS
// ============================================
function setupSystemPreferenceListeners() {
    // Listen for system theme changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', (e) => {
        if (AppState.settings.theme === 'system') {
            applyTheme();
        }
    });
    
    // Listen for system language changes
    window.addEventListener('languagechange', () => {
        // Could implement system language detection here
    });
}

// ============================================
// INITIALIZE APP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupSystemPreferenceListeners();
});

// ============================================
// EXPORT FOR DEBUGGING
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AppState, translations };
}