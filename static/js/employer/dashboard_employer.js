/**
 * ShramikConnect - Enhanced Employer Dashboard
 * Complete working version with all APIs integrated
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
// INTERNATIONALIZATION (i18n)
// ============================================
const i18n = {
    translations: {
        en: {
            // Navigation
            menu: "Menu",
            settings: "Settings",
            dashboard: "Dashboard",
            job_posts: "Job Posts",
            accepted_workers: "Accepted Workers",
            hired_workers: "Hired Workers",
            work_history: "Work History",
            ai_assistant: "AI Assistant",
            logout: "Logout",
            home: "Home",
            help: "Help",
            about: "About",
            construction_company: "Construction Company",
            edit_profile: "Edit Profile",
            
            // Settings
            language: "Language",
            theme: "Theme",
            light: "Light",
            dark: "Dark",
            system: "System",
            
            // Dashboard
            welcome: "Welcome",
            dashboard_slogan: "Manage your job posts, workers, and hiring process",
            total_jobs_posted: "Total Jobs Posted",
            total_workers_hired: "Total Workers Hired",
            employer_average_rating: "Employer Average Rating",
            given_by_workers: "Given by Workers",
            till_now: "Till Now",
            quick_actions: "Quick Actions",
            post_new_job: "Post New Job",
            view_accepted_workers: "View Accepted Workers",
            view_hired_workers: "View Hired Workers",
            
            // Job Posts
            employer_name: "Employer Name",
            work_address: "Work Address",
            work_location: "Work Location on Map",
            job_title: "Job Title",
            work_type: "Work Type",
            job_description: "Job Description",
            required_skills: "Required Skills",
            location: "Location",
            time_required: "Time Required (Hours)",
            money: "Money (₹)",
            tools_available: "Tools available with employer",
            submit_job: "Submit Job",
            total_applications: "Total Applications",
            pending: "Pending",
            accepted: "Accepted",
            hired: "Hired",
            
            // Filters
            sort_by: "Sort By",
            distance: "Distance",
            name: "Name",
            price: "Price",
            rating: "Rating",
            acceptance_time: "Acceptance Time",
            date: "Date",
            distance_near_far: "Distance: Near → Far",
            distance_far_near: "Distance: Far → Near",
            name_a_z: "Name: A → Z",
            name_z_a: "Name: Z → A",
            price_low_high: "Price: Low → High",
            price_high_low: "Price: High → Low",
            rating_high_low: "Rating: High → Low",
            rating_low_high: "Rating: Low → High",
            acceptance_first_last: "Acceptance Time: First → Last",
            acceptance_last_first: "Acceptance Time: Last → First",
            date_new_old: "Date: New → Old",
            date_old_new: "Date: Old → New",
            apply_filters: "Apply Filters",
            clear_all: "Clear All",
            reset: "Reset",
            
            // Chat
            chat_with: "Chat with",
            negotiation_options: "Negotiation Options",
            reduce_price: "Reduce Price by ₹100",
            increase_price: "Increase Price by ₹100",
            reduce_time: "Reduce Time by 1 hour",
            increase_time: "Increase Time by 1 hour",
            
            // Rating
            rate_worker: "Rate Worker",
            job_completed: "Job Completed",
            rate_worker_performance: "Rate the worker's performance for this job",
            additional_feedback: "Additional Feedback (Optional)",
            submit_rating: "Submit Rating",
            
            // Confirmation
            confirmation: "Confirmation",
            delete_job_confirm: "Are you sure you want to delete this job?",
            remove_worker_confirm: "Are you sure you want to remove this worker?",
            remove_worker_message: "This worker will be removed from your accepted workers list.",
            work_complete_confirm: "Are you sure work is completed?",
            work_complete_message: "This will move the worker to work history and open rating.",
            yes: "Yes",
            no: "No",
            
            // AI Assistant
            ai_ready: "Ready to help you find the best workers",
            ai_welcome: "Hello! I'm your AI assistant. I can help you find the best workers for your job posts.",
            ai_welcome_full: "Hello! I'm your AI assistant. I can help you find the best workers for your job posts. Try asking me: \"Find best worker for this job\" or describe what you're looking for.",
            find_best_worker: "Find best worker for this job",
            show_plumbing_workers: "Show me workers with plumbing skills",
            find_near_workers: "Find workers near my location",
            ai_suggestions: "AI Suggestions",
            ai_subtitle: "Get help finding the best workers for your jobs",
            
            // Work History
            work_details: "Work Details",
            worker_name: "Worker Name",
            job_title: "Job Title",
            completion_date: "Completion Date",
            rating_given: "Rating Given",
            payment: "Payment",
            actions: "Actions",
            
            // Footer
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            help_contact: "Help & Contact",
            about_us: "About Us",
            
            // Logo
            shramik: "Shramik",
            connect: "Connect",
            
            tagline: "Connecting hands to work",
            copyright: "© 2025 ShramikConnect. All rights reserved.",
            
            // Application Status
            status_pending: "Pending",
            status_accepted: "Accepted",
            status_rejected: "Rejected",
            status_hired: "Hired",
            status_completed: "Completed",
            
            // Buttons
            accept: "Accept",
            reject: "Reject",
            hire: "Hire",
            chat: "Chat",
            view_profile: "View Profile",
            mark_complete: "Mark Complete",
            delete: "Delete",
            
            // Messages
            no_jobs: "No Jobs Posted Yet",
            no_jobs_desc: "Start by posting your first job to find workers",
            post_first_job: "Post Your First Job",
            no_workers: "No Workers Found",
            no_workers_desc: "Try adjusting your search criteria",
            no_hired_workers: "No Hired Workers Yet",
            no_hired_workers_desc: "Hire workers from your accepted applicants",
            no_work_history: "No Work History Yet",
            no_work_history_desc: "Complete jobs to build your work history",
            no_pending: "No Pending Applications",
            no_pending_desc: "Workers who apply for your jobs will appear here",
            pending_applications: "Pending Applications",
            accept: "Accept",
            skills: "Skills",
            profession: "Profession",
            expected_price: "Expected Price",
            availability: "Availability",
            cover_message: "Cover Message",
            applied_date: "Applied Date",
            view: "View"
        },
        hi: {
            menu: "मेनू",
            settings: "सेटिंग्स",
            dashboard: "डैशबोर्ड",
            job_posts: "नौकरी पोस्ट",
            accepted_workers: "स्वीकृत कर्मचारी",
            hired_workers: "किराए पर कर्मचारी",
            work_history: "कार्य इतिहास",
            ai_assistant: "एआई सहायक",
            logout: "लॉगआउट",
            home: "होम",
            help: "सहायता",
            about: "हमारे बारे में",
            construction_company: "निर्माण कंपनी",
            edit_profile: "प्रोफाइल संपादित करें",
            language: "भाषा",
            theme: "थीम",
            light: "लाइट",
            dark: "डार्क",
            system: "सिस्टम",
            welcome: "स्वागत है",
            dashboard_slogan: "अपनी नौकरी पोस्ट, कर्मचारियों और भर्ती प्रक्रिया का प्रबंधन करें",
            total_jobs_posted: "कुल नौकरियां पोस्ट की गईं",
            total_workers_hired: "कुल कर्मचारी किराए पर लिए",
            employer_average_rating: "नियोक्ता औसत रेटिंग",
            given_by_workers: "कर्मचारियों द्वारा दिया गया",
            till_now: "अब तक",
            quick_actions: "त्वरित कार्रवाई",
            post_new_job: "नई नौकरी पोस्ट करें",
            view_accepted_workers: "स्वीकृत कर्मचारी देखें",
            view_hired_workers: "किराए पर कर्मचारी देखें",
            employer_name: "नियोक्ता का नाम",
            work_address: "कार्य का पता",
            work_location: "मानचित्र पर कार्य स्थान",
            job_title: "नौकरी का शीर्षक",
            work_type: "कार्य का प्रकार",
            job_description: "नौकरी का विवरण",
            required_skills: "आवश्यक कौशल",
            location: "स्थान",
            time_required: "आवश्यक समय (घंटे)",
            money: "पैसा (₹)",
            tools_available: "नियोक्ता के पास उपकरण उपलब्ध हैं",
            submit_job: "नौकरी सबमिट करें",
            total_applications: "कुल आवेदन",
            pending: "लंबित",
            accepted: "स्वीकृत",
            hired: "किराए पर",
            distance: "दूरी",
            name: "नाम",
            price: "मूल्य",
            rating: "रेटिंग",
            date: "तारीख",
            clear_all: "सब साफ़ करें",
            chat_with: "चैट करें",
            negotiation_options: "बातचीत विकल्प",
            reduce_price: "मूल्य ₹100 कम करें",
            increase_price: "मूल्य ₹100 बढ़ाएं",
            reduce_time: "समय 1 घंटा कम करें",
            increase_time: "समय 1 घंटा बढ़ाएं",
            rate_worker: "कर्मचारी को रेट करें",
            job_completed: "नौकरी पूरी हुई",
            rate_worker_performance: "इस नौकरी के लिए कर्मचारी के प्रदर्शन को रेट करें",
            additional_feedback: "अतिरिक्त प्रतिक्रिया (वैकल्पिक)",
            submit_rating: "रेटिंग सबमिट करें",
            confirmation: "पुष्टि",
            delete_job_confirm: "क्या आप वाकई इस नौकरी को हटाना चाहते हैं?",
            remove_worker_confirm: "क्या आप वाकई इस कर्मचारी को हटाना चाहते हैं?",
            remove_worker_message: "यह कर्मचारी आपकी स्वीकृत कर्मचारियों की सूची से हटा दिया जाएगा।",
            work_complete_confirm: "क्या आप वाकई काम पूरा हो गया है?",
            work_complete_message: "यह कर्मचारी को कार्य इतिहास में ले जाएगा और रेटिंग खुलेगा।",
            yes: "हाँ",
            no: "नहीं",
            ai_ready: "सर्वश्रेष्ठ कर्मचारी खोजने में आपकी सहायता के लिए तैयार",
            ai_welcome_full: "नमस्ते! मैं आपका एआई सहायक हूं। मैं आपकी नौकरी पोस्ट के लिए सर्वश्रेष्ठ कर्मचारी खोजने में आपकी मदद कर सकता हूं।",
            find_best_worker: "इस नौकरी के लिए सर्वश्रेष्ठ कर्मचारी खोजें",
            show_plumbing_workers: "मुझे प्लंबिंग कौशल वाले कर्मचारी दिखाएं",
            find_near_workers: "मेरे स्थान के पास कर्मचारी खोजें",
            ai_suggestions: "एआई सुझाव",
            ai_subtitle: "अपनी नौकरियों के लिए सर्वश्रेष्ठ कर्मचारी खोजने में सहायता प्राप्त करें",
            work_details: "कार्य विवरण",
            worker_name: "कर्मचारी का नाम",
            completion_date: "पूरा होने की तारीख",
            rating_given: "दी गई रेटिंग",
            payment: "भुगतान",
            actions: "कार्रवाई",
            status_pending: "लंबित",
            status_accepted: "स्वीकृत",
            status_rejected: "अस्वीकृत",
            status_hired: "किराए पर",
            status_completed: "पूर्ण",
            accept: "स्वीकार करें",
            reject: "अस्वीकार करें",
            hire: "किराए पर लें",
            chat: "चैट",
            view_profile: "प्रोफाइल देखें",
            mark_complete: "पूर्ण चिह्नित करें",
            delete: "हटाएं",
            no_jobs: "अभी तक कोई नौकरी पोस्ट नहीं",
            no_jobs_desc: "श्रमिकों को खोजने के लिए अपनी पहली नौकरी पोस्ट करें",
            post_first_job: "अपनी पहली नौकरी पोस्ट करें",
            no_workers: "कोई कर्मचारी नहीं मिला",
            no_workers_desc: "अपने खोज मानदंड समायोजित करें",
            no_hired_workers: "अभी तक कोई किराए पर कर्मचारी नहीं",
            no_hired_workers_desc: "अपने स्वीकृत आवेदकों से कर्मचारियों को किराए पर लें",
            no_work_history: "अभी तक कोई कार्य इतिहास नहीं",
            no_work_history_desc: "अपना कार्य इतिहास बनाने के लिए नौकरियां पूरी करें",
            no_pending: "कोई लंबित आवेदन नहीं",
            no_pending_desc: "आपकी नौकरियों के लिए आवेदन करने वाले कर्मचारी यहां दिखेंगे",
            pending_applications: "लंबित आवेदन",
            skills: "कौशल",
            profession: "पेशा",
            expected_price: "अपेक्षित मूल्य",
            availability: "उपलब्धता",
            cover_message: "कवर संदेश",
            applied_date: "आवेदन तिथि",
            view: "देखें"
        },
        mr: {
            menu: "मेनू",
            settings: "सेटिंग्ज",
            dashboard: "डॅशबोर्ड",
            job_posts: "नोकरी पोस्ट",
            accepted_workers: "स्वीकृत कामगार",
            hired_workers: "भाड्याने कामगार",
            work_history: "कामाचा इतिहास",
            ai_assistant: "AI सहाय्यक",
            logout: "लॉगआउट",
            home: "होम",
            help: "मदत",
            about: "आमच्याबद्दल",
            construction_company: "बांधकाम कंपनी",
            edit_profile: "प्रोफाइल संपादित करा",
            language: "भाषा",
            theme: "थीम",
            light: "लाइट",
            dark: "डार्क",
            system: "सिस्टम",
            welcome: "स्वागत आहे",
            dashboard_slogan: "तुमच्या नोकरी पोस्ट, कामगार आणि भरती प्रक्रियेचे व्यवस्थापन करा",
            total_jobs_posted: "एकूण नोकऱ्या पोस्ट केल्या",
            total_workers_hired: "एकूण कामगार भाड्याने घेतले",
            employer_average_rating: "नियोक्ता सरासरी रेटिंग",
            given_by_workers: "कामगारांकडून दिले",
            till_now: "आतापर्यंत",
            quick_actions: "द्रुत क्रिया",
            post_new_job: "नवीन नोकरी पोस्ट करा",
            view_accepted_workers: "स्वीकृत कामगार पहा",
            view_hired_workers: "भाड्याने कामगार पहा",
            employer_name: "नियोक्त्याचे नाव",
            work_address: "कामाचा पत्ता",
            work_location: "नकाशावर कामाचे स्थान",
            job_title: "नोकरीचे शीर्षक",
            work_type: "कामाचा प्रकार",
            job_description: "नोकरीचे वर्णन",
            required_skills: "आवश्यक कौशल्ये",
            location: "स्थान",
            time_required: "आवश्यक वेळ (तास)",
            money: "पैसा (₹)",
            tools_available: "नियोक्त्याकडे साधने उपलब्ध आहेत",
            submit_job: "नोकरी सबमिट करा",
            total_applications: "एकूण अर्ज",
            pending: "प्रलंबित",
            accepted: "स्वीकृत",
            hired: "भाड्याने",
            distance: "अंतर",
            name: "नाव",
            price: "किंमत",
            rating: "रेटिंग",
            date: "तारीख",
            clear_all: "सर्व साफ करा",
            chat_with: "चॅट करा",
            negotiation_options: "वाटाघाटी पर्याय",
            reduce_price: "किंमत ₹100 कमी करा",
            increase_price: "किंमत ₹100 वाढवा",
            reduce_time: "वेळ 1 तास कमी करा",
            increase_time: "वेळ 1 तास वाढवा",
            rate_worker: "कामगाराला रेट करा",
            job_completed: "नोकरी पूर्ण झाली",
            rate_worker_performance: "या नोकरीसाठी कामगाराच्या कामगिरीचे मूल्यांकन करा",
            additional_feedback: "अतिरिक्त अभिप्राय (ऐच्छिक)",
            submit_rating: "रेटिंग सबमिट करा",
            confirmation: "पुष्टीकरण",
            delete_job_confirm: "तुम्हाला खरोखर ही नोकरी हटवायची आहे का?",
            remove_worker_confirm: "तुम्हाला खरोखर हा कामगार काढून टाकायचा आहे का?",
            remove_worker_message: "हा कामगार तुमच्या स्वीकृत कामगारांच्या यादीतून काढला जाईल.",
            work_complete_confirm: "तुम्हाला खात्री आहे की काम पूर्ण झाले आहे?",
            work_complete_message: "हे कामगार कामाच्या इतिहासात हलवेल आणि रेटिंग उघडेल.",
            yes: "होय",
            no: "नाही",
            ai_ready: "सर्वोत्तम कामगार शोधण्यात मदत करण्यासाठी तयार",
            ai_welcome_full: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या नोकरी पोस्टसाठी सर्वोत्तम कामगार शोधण्यात तुमची मदत करू शकतो.",
            find_best_worker: "या नोकरीसाठी सर्वोत्तम कामगार शोधा",
            show_plumbing_workers: "मला प्लंबिंग कौशल्ये असलेले कामगार दाखवा",
            find_near_workers: "माझ्या स्थानाजवळ कामगार शोधा",
            ai_suggestions: "AI सूचना",
            ai_subtitle: "तुमच्या नोकऱ्यांसाठी सर्वोत्तम कामगार शोधण्यात मदत मिळवा",
            work_details: "कामाचे तपशील",
            worker_name: "कामगाराचे नाव",
            completion_date: "पूर्ण होण्याची तारीख",
            rating_given: "दिलेली रेटिंग",
            payment: "पेमेंट",
            actions: "क्रिया",
            status_pending: "प्रलंबित",
            status_accepted: "स्वीकृत",
            status_rejected: "नकारले",
            status_hired: "भाड्याने",
            status_completed: "पूर्ण",
            accept: "स्वीकारा",
            reject: "नकार द्या",
            hire: "भाड्याने घ्या",
            chat: "चॅट",
            view_profile: "प्रोफाइल पहा",
            mark_complete: "पूर्ण चिन्हांकित करा",
            delete: "हटवा",
            no_jobs: "अद्याप कोणतीही नोकरी पोस्ट केलेली नाही",
            no_jobs_desc: "कामगार शोधण्यासाठी तुमची पहिली नोकरी पोस्ट करा",
            post_first_job: "तुमची पहिली नोकरी पोस्ट करा",
            no_workers: "कोणतेही कामगार सापडले नाहीत",
            no_workers_desc: "तुमचे शोध निकष समायोजित करा",
            no_hired_workers: "अद्याप कोणतेही भाड्याने कामगार नाहीत",
            no_hired_workers_desc: "तुमच्या स्वीकृत अर्जदारांकडून कामगार भाड्याने घ्या",
            no_work_history: "अद्याप कोणताही कामाचा इतिहास नाही",
            no_work_history_desc: "तुमचा कामाचा इतिहास तयार करण्यासाठी नोकऱ्या पूर्ण करा",
            no_pending: "कोणतेही प्रलंबित अर्ज नाहीत",
            no_pending_desc: "तुमच्या नोकऱ्यांसाठी अर्ज करणारे कामगार येथे दिसतील",
            pending_applications: "प्रलंबित अर्ज",
            skills: "कौशल्ये",
            profession: "व्यवसाय",
            expected_price: "अपेक्षित किंमत",
            availability: "उपलब्धता",
            cover_message: "कव्हर संदेश",
            applied_date: "अर्ज तारीख",
            view: "पहा"
        },
    },
    
    currentLang: 'en',
    
    init: function() {
        this.loadLanguage();
        this.translatePage();
    },
    
    loadLanguage: function() {
        const savedLang = localStorage.getItem('shramikconnect_language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }
    },
    
    saveLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('shramikconnect_language', lang);
            this.translatePage();
        }
    },
    
    translatePage: function() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    element.placeholder = this.translations[this.currentLang][key];
                } else {
                    element.textContent = this.translations[this.currentLang][key];
                }
            }
        });
    },
    
    t: function(key) {
        return this.translations[this.currentLang][key] || key;
    }
};

// ============================================
// DOM Elements
// ============================================
const DOM = {
    // Sidebar and navigation
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    sidebarClose: document.getElementById('sidebarClose'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    sidebarSettingsIcon: document.getElementById('sidebarSettingsIcon'),
    settingsDropdown: document.getElementById('settingsDropdown'),
    menuItems: document.querySelectorAll('.menu-item-box[data-section]'),
    contentSections: document.querySelectorAll('.content-section'),
    navLinks: document.querySelectorAll('.nav-link[data-section]'),
    globalNavStrip: document.getElementById('globalNavStrip'),
    navStripBtns: document.querySelectorAll('.nav-strip-btn'),
    stripLogoutBtn: document.getElementById('stripLogoutBtn'),
    
    // Settings
    languageOptions: document.querySelectorAll('.language-option'),
    themeOptions: document.querySelectorAll('.theme-option'),
    
    // Profile
    profileName: document.getElementById('profileName'),
    profileEmail: document.getElementById('profileEmail'),
    employerNameDisplay: document.getElementById('employerNameDisplay'),
    profileEditBtn: document.getElementById('profileEditBtn'),
    profileImage: document.getElementById('profileImage'),
    
    // Stats
    totalJobs: document.getElementById('totalJobs'),
    totalHired: document.getElementById('totalHired'),
    avgRating: document.getElementById('avgRating'),
    ratingStars: document.getElementById('ratingStars'),
    
    // Buttons and actions
    quickActionDashboard: document.getElementById('quickActionDashboard'),
    postJobBtn: document.getElementById('postJobBtn'),
    addJobBtn: document.getElementById('addJobBtn'),
    viewAcceptedBtn: document.getElementById('viewAcceptedBtn'),
    viewHiredBtn: document.getElementById('viewHiredBtn'),
    aiAssistantBtn: document.getElementById('aiAssistantBtn'),
    workHistoryBtn: document.getElementById('workHistoryBtn'),
    quickLogoutBtn: document.getElementById('quickLogoutBtn'),
    
    // Modals
    modals: document.querySelectorAll('.popup-overlay'),
    postJobModal: document.getElementById('postJobModal'),
    chatModal: document.getElementById('chatModal'),
    ratingModal: document.getElementById('ratingModal'),
    profileModal: document.getElementById('profileModal'),
    aiAssistantModal: document.getElementById('aiAssistantModal'),
    deleteConfirmModal: document.getElementById('deleteConfirmModal'),
    workCompleteModal: document.getElementById('workCompleteModal'),
    removeWorkerModal: document.getElementById('removeWorkerModal'),
    workHistoryModal: document.getElementById('workHistoryModal'),
    
    // Modal close buttons
    closeJobModalBtn: document.getElementById('closeJobModalBtn'),
    closeChatModalBtn: document.getElementById('closeChatModalBtn'),
    closeRatingModalBtn: document.getElementById('closeRatingModalBtn'),
    closeProfileModalBtn: document.getElementById('closeProfileModalBtn'),
    closeAIModalBtn: document.getElementById('closeAIModalBtn'),
    closeDeleteModalBtn: document.getElementById('closeDeleteModalBtn'),
    closeCompleteModalBtn: document.getElementById('closeCompleteModalBtn'),
    closeRemoveModalBtn: document.getElementById('closeRemoveModalBtn'),
    closeHistoryModalBtn: document.getElementById('closeHistoryModalBtn'),
    
    // Confirmation buttons
    cancelDeleteBtn: document.getElementById('cancelDeleteBtn'),
    confirmDeleteBtn: document.getElementById('confirmDeleteBtn'),
    cancelCompleteBtn: document.getElementById('cancelCompleteBtn'),
    confirmCompleteBtn: document.getElementById('confirmCompleteBtn'),
    cancelRemoveBtn: document.getElementById('cancelRemoveBtn'),
    confirmRemoveBtn: document.getElementById('confirmRemoveBtn'),
    
    // Forms and inputs
    jobForm: document.getElementById('jobForm'),
    submitJobBtn: document.getElementById('submitJobBtn'),
    employerNameInput: document.getElementById('employerName'),
    workAddressInput: document.getElementById('workAddress'),
    jobTitleInput: document.getElementById('jobTitle'),
    workTypeInput: document.getElementById('workType'),
    jobDescriptionInput: document.getElementById('jobDescription'),
    requiredSkillsInput: document.getElementById('requiredSkills'),
    jobLocationInput: document.getElementById('jobLocation'),
    jobPayInput: document.getElementById('jobPay'),
    workTimeInput: document.getElementById('workTime'),
    toolsAvailableInput: document.getElementById('toolsAvailable'),
    latitudeInput: document.getElementById('latitude'),
    longitudeInput: document.getElementById('longitude'),
    mapContainer: document.getElementById('map'),
    
    // Filters and search
    workerSearch: document.getElementById('workerSearch'),
    historySearch: document.getElementById('historySearch'),
    
    // AI Assistant
    aiInput: document.getElementById('aiInput'),
    aiSendBtn: document.getElementById('aiSendBtn'),
    aiChatMessages: document.getElementById('aiChatMessages'),
    aiSuggestions: document.getElementById('aiSuggestions'),
    suggestionBtns: document.querySelectorAll('.suggestion-btn'),
    aiModalInput: document.getElementById('aiModalInput'),
    aiModalSendBtn: document.getElementById('aiModalSendBtn'),
    aiModalMessages: document.getElementById('aiModalMessages'),
    aiFileUploadBtn: document.getElementById('aiFileUploadBtn'),
    aiFileInput: document.getElementById('aiFileInput'),
    aiPageFileUploadBtn: document.getElementById('aiPageFileUploadBtn'),
    aiPageFileInput: document.getElementById('aiPageFileInput'),
    
    // Chat
    chatInput: document.getElementById('chatInput'),
    chatSendBtn: document.getElementById('chatSendBtn'),
    chatMessages: document.getElementById('chatMessages'),
    chatWorkerName: document.getElementById('chatWorkerName'),
    fileUploadBtn: document.getElementById('fileUploadBtn'),
    fileInput: document.getElementById('fileInput'),
    voiceMessageBtn: document.getElementById('voiceMessageBtn'),
    
    // Rating
    submitRatingBtn: document.getElementById('submitRatingBtn'),
    ratingWorkerName: document.getElementById('ratingWorkerName'),
    ratingSelectedValue: document.getElementById('ratingSelectedValue'),
    starsRating: document.getElementById('starsRating'),
    stars: document.querySelectorAll('.stars-rating .star'),
    ratingFeedback: document.getElementById('ratingFeedback'),
    
    // Containers
    jobsContainer: document.getElementById('jobsContainer'),
    acceptedWorkersContainer: document.getElementById('acceptedWorkersContainer'),
    hiredWorkersContainer: document.getElementById('hiredWorkersContainer'),
    workHistoryContainer: document.getElementById('workHistoryContainer'),
    workHistoryDetails: document.getElementById('workHistoryDetails'),
    
    // Notification
    notificationWrapper: document.getElementById('notificationWrapper'),
    
    // Logout
    logoutBtn: document.getElementById('logoutBtn'),
    deleteConfirmTitle: document.getElementById('deleteConfirmTitle'),
    deleteConfirmMessage: document.getElementById('deleteConfirmMessage')
};

// ============================================
// Application State
// ============================================
const state = {
    currentApplicationId: null,
    currentJobId: null,
    currentChatWorker: null,
    currentSection: 'dashboard',
    pendingDeleteJobId: null,
    pendingRemoveWorkerId: null,
    pendingCompleteApplicationId: null,
    map: null,
    marker: null,
    jobs: [],
    pendingApplications: [],
    applications: [], // All applications for employer's jobs
    acceptedWorkers: [], // Applications with status 'accepted'
    hiredWorkers: [], // Applications with status 'hired'
    workHistory: [],
    filters: {
        search: '',
        activeSorts: {},
        activeFilterType: null
    },
    pendingFilters: {
        search: '',
        activeSorts: {},
        activeFilterType: null
    },
    historyFilters: {
        search: '',
        activeSorts: {},
        activeFilterType: null
    },
    settings: {
        language: 'en',
        theme: 'light'
    },
    pollingInterval: null,
    isPolling: false
};

// ============================================
// Initialize Application
// ============================================
async function init() {
    // Initialize i18n
    i18n.init();
    
    // Load settings from localStorage
    loadSettings();
    
    // Load data from server
    await loadEmployerJobs();
    await loadApplications();
    await loadWorkHistory();
    
    // Update UI with loaded data
    updateStats();
    renderJobs();
    organizeApplications();
    renderPendingApplications();
    renderAcceptedWorkers();
    renderHiredWorkers();
    renderWorkHistory();
    renderRatingStars();
    
    // Setup event listeners
    setupEventListeners();
    
    // Set active section
    setActiveSection('dashboard');
    
    // Initialize map for job posting
    initMap();
    
    console.log('Enhanced ShramikConnect Dashboard initialized - Data loaded from server');
    
    // Start auto-refresh polling
    startPolling();
}

// ============================================
// Load Jobs from Server
// ============================================
async function loadEmployerJobs() {
    try {
        const response = await fetch('/api/employer/get-my-jobs/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            state.jobs = data.jobs || [];
            console.log('Jobs loaded:', state.jobs);
        } else {
            console.error('Failed to load jobs:', data.message);
            showNotification('Failed to load jobs', 'error');
        }
    } catch (error) {
        console.error('Error loading jobs:', error);
        showNotification('Error loading jobs. Please refresh.', 'error');
    }
}

// ============================================
// Load Applications from Server
// ============================================
async function loadApplications() {
    try {
        const response = await fetch('/api/employer/get-applications/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            state.applications = data.applications || [];
            console.log('Applications loaded:', state.applications);
            organizeApplications();
        } else {
            console.error('Failed to load applications:', data.message);
            showNotification('Failed to load applications', 'error');
        }
    } catch (error) {
        console.error('Error loading applications:', error);
        showNotification('Error loading applications. Please refresh.', 'error');
    }
}

// ============================================
// Organize Applications by Status
// ============================================
function organizeApplications() {
    state.pendingApplications = state.applications.filter(app => app.status === 'pending');
    state.acceptedWorkers = state.applications.filter(app => app.status === 'accepted');
    state.hiredWorkers = state.applications.filter(app => app.status === 'hired');
    
    // Work history comes from separate API or from completed applications
    // For now, we'll filter completed applications
    const completedApps = state.applications.filter(app => app.status === 'completed');
    
    // If we have work history data from somewhere else, use it
    // This will be populated when we implement complete_work API
}

// ============================================
// Render Pending Applications with Filters
// ============================================
function renderPendingApplications() {
    const container = document.getElementById('pendingApplicationsContainer');
    if (!container) return;

    let workers = [...state.pendingApplications];

    // Apply search
    if (state.pendingFilters.search) {
        const searchTerm = state.pendingFilters.search.toLowerCase();
        workers = workers.filter(app =>
            (app.worker?.name || '').toLowerCase().includes(searchTerm) ||
            (app.worker?.skills || []).some(skill => (skill || '').toLowerCase().includes(searchTerm)) ||
            (app.worker?.rating || 0).toString().includes(searchTerm) ||
            (app.expected_price || 0).toString().includes(searchTerm)
        );
    }

    // Apply sorting
    const activeSorts = Object.values(state.pendingFilters.activeSorts);
    if (activeSorts.length > 0) {
        workers.sort((a, b) => {
            for (const sort of activeSorts) {
                let comparison = 0;
                switch (sort) {
                    case 'distance-asc':
                        comparison = (a.worker?.distance ?? 9999) - (b.worker?.distance ?? 9999);
                        break;
                    case 'distance-desc':
                        comparison = (b.worker?.distance ?? 9999) - (a.worker?.distance ?? 9999);
                        break;
                    case 'name-asc':
                        comparison = (a.worker?.name || '').localeCompare(b.worker?.name || '');
                        break;
                    case 'name-desc':
                        comparison = (b.worker?.name || '').localeCompare(a.worker?.name || '');
                        break;
                    case 'price-asc':
                        comparison = (a.expected_price || 0) - (b.expected_price || 0);
                        break;
                    case 'price-desc':
                        comparison = (b.expected_price || 0) - (a.expected_price || 0);
                        break;
                    case 'rating-desc':
                        comparison = (b.worker?.rating || 0) - (a.worker?.rating || 0);
                        break;
                    case 'rating-asc':
                        comparison = (a.worker?.rating || 0) - (b.worker?.rating || 0);
                        break;
                    case 'date-desc':
                        comparison = new Date(b.applied_date || 0) - new Date(a.applied_date || 0);
                        break;
                    case 'date-asc':
                        comparison = new Date(a.applied_date || 0) - new Date(b.applied_date || 0);
                        break;
                }
                if (comparison !== 0) return comparison;
            }
            return 0;
        });
    }

    container.innerHTML = '';

    if (workers.length === 0) {
        container.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-inbox"></i>
                </div>
                <h3 class="empty-state-title">${i18n.t('no_pending')}</h3>
                <p class="empty-state-message">${state.pendingFilters.search ? i18n.t('no_workers_desc') : i18n.t('no_pending_desc')}</p>
            </div>
        `;
        return;
    }

    workers.forEach(application => {
        const card = createApplicationCard(application, 'pending');
        container.appendChild(card);
    });
}

// ============================================
// Load Work History from Server
// ============================================
async function loadWorkHistory() {
    try {
        const response = await fetch('/api/employer/work-history/', {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        
        const data = await response.json();
        
        if (data.success) {
            state.workHistory = data.work_history || [];
            console.log('Work history loaded:', state.workHistory.length, 'records');
        } else {
            console.error('Failed to load work history:', data.message);
            state.workHistory = [];
        }
    } catch (error) {
        console.error('Error loading work history:', error);
        state.workHistory = [];
    }
}

// ============================================
// SMART AUTO-REFRESH POLLING SYSTEM
// ============================================

function startPolling() {
    // Clear any existing interval
    if (state.pollingInterval) {
        clearInterval(state.pollingInterval);
    }
    // Poll every 15 seconds
    state.pollingInterval = setInterval(pollForUpdates, 15000);
    console.log('Auto-refresh polling started (every 15s)');
}

function stopPolling() {
    if (state.pollingInterval) {
        clearInterval(state.pollingInterval);
        state.pollingInterval = null;
    }
}

async function pollForUpdates() {
    // Don't poll if already polling (prevents overlapping requests)
    if (state.isPolling) return;
    
    // Don't poll if any modal is open (user is doing something)
    const anyModalOpen = document.querySelector('.popup-overlay.active');
    if (anyModalOpen) return;
    
    state.isPolling = true;
    
    try {
        // Fetch fresh data silently
        const [jobsRes, appsRes, historyRes] = await Promise.all([
            fetch('/api/employer/get-my-jobs/', { headers: { 'X-Requested-With': 'XMLHttpRequest' } }),
            fetch('/api/employer/get-applications/', { headers: { 'X-Requested-With': 'XMLHttpRequest' } }),
            fetch('/api/employer/work-history/', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        ]);

        const [jobsData, appsData, historyData] = await Promise.all([
            jobsRes.json(),
            appsRes.json(),
            historyRes.json()
        ]);

        let hasChanges = false;
        let changeMessages = [];

        // ---- Check Jobs ----
        if (jobsData.success) {
            const newJobs = jobsData.jobs || [];
            if (newJobs.length !== state.jobs.length) {
                hasChanges = true;
            }
            state.jobs = newJobs;
        }

        // ---- Check Applications ----
        if (appsData.success) {
            const newApps = appsData.applications || [];

            // Count pending before update
            const oldPendingCount = state.pendingApplications.length;
            const oldAcceptedCount = state.acceptedWorkers.length;
            const oldHiredCount = state.hiredWorkers.length;

            state.applications = newApps;
            organizeApplications();

            const newPendingCount = state.pendingApplications.length;
            const newAcceptedCount = state.acceptedWorkers.length;
            const newHiredCount = state.hiredWorkers.length;

            if (newPendingCount > oldPendingCount) {
                const diff = newPendingCount - oldPendingCount;
                changeMessages.push(`${diff} new application${diff > 1 ? 's' : ''} received!`);
                hasChanges = true;
            }
            if (newAcceptedCount !== oldAcceptedCount) hasChanges = true;
            if (newHiredCount !== oldHiredCount) hasChanges = true;
        }

        // ---- Check Work History ----
        if (historyData.success) {
            const newHistory = historyData.work_history || [];
            if (newHistory.length !== state.workHistory.length) {
                hasChanges = true;
            }
            state.workHistory = newHistory;
        }

        // ---- If changes found, update only current visible section ----
        if (hasChanges) {
            const currentSection = state.currentSection;

            // Always update stats silently
            updateStats();
            renderRatingStars();

            // Re-render only the section user is currently viewing
            // so no jarring full-page update happens
            if (currentSection === 'pending-applications') {
                renderPendingApplications();
            } else if (currentSection === 'accepted-workers') {
                renderAcceptedWorkers();
            } else if (currentSection === 'hired-workers') {
                renderHiredWorkers();
            } else if (currentSection === 'work-history') {
                renderWorkHistory();
            } else if (currentSection === 'job-posts') {
                renderJobs();
            } else if (currentSection === 'dashboard') {
                // Dashboard stats already updated above
            }

            // Always re-render other sections in background too
            // so when user navigates there, data is fresh
            renderPendingApplications();
            renderAcceptedWorkers();
            renderHiredWorkers();
            renderWorkHistory();
            renderJobs();

            // Show notification only for important changes
            if (changeMessages.length > 0) {
                changeMessages.forEach(msg => showNotification(msg, 'info'));
            }

            updateUnreadChatBadge();
            console.log('Auto-refresh: Changes detected and UI updated');
        }

    } catch (error) {
        // Silent fail - don't show error to user for background polling
        console.log('Auto-refresh: Network error (silent):', error.message);
    } finally {
        state.isPolling = false;
    }
}

// Stop polling when page is hidden (user switched tab) to save resources
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopPolling();
        console.log('Polling paused - tab hidden');
    } else {
        // Resume polling and immediately fetch when user comes back
        startPolling();
        pollForUpdates();
        console.log('Polling resumed - tab visible');
    }
});

// ============================================
// Update Profile Information
// ============================================
function updateProfileInfo() {
    if (window.employerData) {
        const emp = window.employerData;
        
        if (DOM.profileName) {
            DOM.profileName.textContent = emp.firstName + ' ' + emp.lastName;
        }
        
        if (DOM.profileEmail) {
            DOM.profileEmail.textContent = emp.email;
        }
        
        if (DOM.employerNameDisplay) {
            DOM.employerNameDisplay.textContent = emp.firstName + ' ' + emp.lastName;
        }
        
        // Update profile photo if exists
        if (emp.profilePhoto && DOM.profileImage) {
            DOM.profileImage.src = emp.profilePhoto;
        }
    }
}

// ============================================
// Map Functions
// ============================================
function initMap() {
    if (!DOM.mapContainer) return;
    
    // Default to Mumbai or employer's saved location
    const defaultLat = parseFloat(DOM.latitudeInput?.value) || 19.0760;
    const defaultLng = parseFloat(DOM.longitudeInput?.value) || 72.8777;
    
    state.map = L.map('map').setView([defaultLat, defaultLng], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(state.map);
    
    state.marker = L.marker([defaultLat, defaultLng], {
        draggable: true
    }).addTo(state.map);
    
    // Update coordinates when marker is dragged
    state.marker.on('dragend', function(e) {
        const position = e.target.getLatLng();
        if (DOM.latitudeInput) DOM.latitudeInput.value = position.lat;
        if (DOM.longitudeInput) DOM.longitudeInput.value = position.lng;
    });
    
    // Update marker when map is clicked
    state.map.on('click', function(e) {
        state.marker.setLatLng(e.latlng);
        if (DOM.latitudeInput) DOM.latitudeInput.value = e.latlng.lat;
        if (DOM.longitudeInput) DOM.longitudeInput.value = e.latlng.lng;
    });
    
    // Set initial coordinates
    if (DOM.latitudeInput) DOM.latitudeInput.value = defaultLat;
    if (DOM.longitudeInput) DOM.longitudeInput.value = defaultLng;
}

// ============================================
// Update Statistics
// ============================================
function updateStats() {
    if (DOM.totalJobs) {
        DOM.totalJobs.textContent = state.jobs.length;
    }
    
    const totalPendingEl = document.getElementById('totalPending');
    if (totalPendingEl) {
        totalPendingEl.textContent = state.pendingApplications.length;
    }
    
    if (DOM.totalHired) {
        DOM.totalHired.textContent = state.hiredWorkers.length + state.workHistory.length;
    }
    
    // Calculate average rating from work history
    const allRatings = state.workHistory.map(w => w.rating || 0);
    const avg = allRatings.length > 0 
        ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
        : '0.0';
    
    if (DOM.avgRating) {
        DOM.avgRating.textContent = avg;
    }
}

// ============================================
// Render Rating Stars
// ============================================
function renderRatingStars() {
    if (!DOM.ratingStars) return;
    
    const rating = parseFloat(DOM.avgRating?.textContent || '0');
    DOM.ratingStars.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        if (i <= Math.floor(rating)) {
            star.classList.add('filled');
        } else if (i - 1 < rating && rating < i) {
            star.classList.add('partial');
            star.style.setProperty('--fill-percentage', `${(rating - Math.floor(rating)) * 100}%`);
        }
        star.innerHTML = '★';
        DOM.ratingStars.appendChild(star);
    }
}

// ============================================
// Render Jobs
// ============================================
function renderJobs() {
    if (!DOM.jobsContainer) return;
    
    DOM.jobsContainer.innerHTML = '';
    
    if (state.jobs.length === 0) {
        DOM.jobsContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <h3 class="empty-state-title">${i18n.t('no_jobs')}</h3>
                <p class="empty-state-message">${i18n.t('no_jobs_desc')}</p>
                <button class="empty-state-action" id="postFirstJobBtn">
                    <i class="fas fa-plus"></i>
                    ${i18n.t('post_first_job')}
                </button>
            </div>
        `;
        
        document.getElementById('postFirstJobBtn')?.addEventListener('click', () => {
            openModal(DOM.postJobModal);
        });
        return;
    }
    
    state.jobs.forEach(job => {
        const jobCard = createJobCard(job);
        DOM.jobsContainer.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.dataset.id = job.id;
    
    const statusClass = `status-${job.status}`;
    const statusText = job.status === 'open' ? i18n.t('status_pending') : 
                      job.status === 'in-progress' ? i18n.t('status_hired') : 
                      job.status === 'completed' ? i18n.t('status_completed') : job.status;
    
    const pendingCount = job.applications?.pending || 0;
    const acceptedCount = job.applications?.accepted || 0;
    const hiredCount = job.applications?.hired || 0;
    const totalApps = job.applications?.total || 0;
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title || 'Untitled'}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName || window.employerData?.firstName + ' ' + window.employerData?.lastName || 'You'}</p>
                <p class="job-location">📍 ${job.location || 'Unknown'}</p>
            </div>
            <span class="job-status ${statusClass}">${statusText}</span>
        </div>
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-map-marker-alt"></i>
                <span>${i18n.t('work_address')}: ${job.workAddress || 'Not specified'}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-tools"></i>
                <span>${i18n.t('work_type')}: ${job.work_type || 'Not specified'}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-money-bill-wave"></i>
                <span>${i18n.t('payment')}: ₹${job.pay?.toLocaleString('en-IN') || 0}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-clock"></i>
                <span>${i18n.t('time_required')}: ${job.time || 0} hours</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-tools"></i>
                <span>${i18n.t('required_skills')}: ${job.skills?.join(', ') || 'Not specified'}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-users"></i>
                <span>${i18n.t('total_applications')}: ${totalApps} (${i18n.t('pending')}: ${pendingCount}, ${i18n.t('accepted')}: ${acceptedCount}, ${i18n.t('hired')}: ${hiredCount})</span>
            </div>
        </div>
        <div class="job-actions">
            <button class="small-btn view-applicants-btn" onclick="viewApplicants(${job.id})">
                <i class="fas fa-users"></i> ${i18n.t('view_accepted_workers')}
            </button>
            <button class="small-btn delete-job-btn" onclick="confirmDeleteJob(${job.id})">
                <i class="fas fa-trash"></i> ${i18n.t('delete')}
            </button>
        </div>
    `;
    
    return card;
}

// ============================================
// Render Accepted Workers (Applications with status 'accepted')
// ============================================
function renderAcceptedWorkers() {
    if (!DOM.acceptedWorkersContainer) return;
    
    let workers = [...state.acceptedWorkers];
    
    // Apply search filter
    if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        workers = workers.filter(app => 
            (app.worker?.name || '').toLowerCase().includes(searchTerm) ||
            (app.worker?.skills || []).some(skill => (skill || '').toLowerCase().includes(searchTerm)) ||
            (app.worker?.rating || 0).toString().includes(searchTerm) ||
            (app.expected_price || 0).toString().includes(searchTerm)
        );
    }
    
    // Apply nested filter sorting
    const activeSorts = Object.values(state.filters.activeSorts);
    
    if (activeSorts.length > 0) {
        workers.sort((a, b) => {
            for (const sort of activeSorts) {
                let comparison = 0;
                
                switch(sort) {
                    case 'name-asc':
                        comparison = (a.worker?.name || '').localeCompare(b.worker?.name || '');
                        break;
                    case 'name-desc':
                        comparison = (b.worker?.name || '').localeCompare(a.worker?.name || '');
                        break;
                    case 'price-asc':
                        comparison = (a.expected_price || 0) - (b.expected_price || 0);
                        break;
                    case 'price-desc':
                        comparison = (b.expected_price || 0) - (a.expected_price || 0);
                        break;
                    case 'rating-desc':
                        comparison = (b.worker?.rating || 0) - (a.worker?.rating || 0);
                        break;
                    case 'rating-asc':
                        comparison = (a.worker?.rating || 0) - (b.worker?.rating || 0);
                        break;
                }
                
                if (comparison !== 0) {
                    return comparison;
                }
            }
            
            return 0;
        });
    }
    
    DOM.acceptedWorkersContainer.innerHTML = '';
    
    if (workers.length === 0) {
        DOM.acceptedWorkersContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3 class="empty-state-title">${i18n.t('no_workers')}</h3>
                <p class="empty-state-message">${state.filters.search ? i18n.t('no_workers_desc') : i18n.t('no_jobs_desc')}</p>
            </div>
        `;
        return;
    }
    
    workers.forEach(application => {
        const workerCard = createApplicationCard(application, 'accepted');
        DOM.acceptedWorkersContainer.appendChild(workerCard);
    });
}

// ============================================
// Render Hired Workers
// ============================================
function renderHiredWorkers() {
    if (!DOM.hiredWorkersContainer) return;
    
    DOM.hiredWorkersContainer.innerHTML = '';
    
    if (state.hiredWorkers.length === 0) {
        DOM.hiredWorkersContainer.innerHTML = `
            <div class="empty-state-container">
                <div class="empty-state-icon">
                    <i class="fas fa-user-check"></i>
                </div>
                <h3 class="empty-state-title">${i18n.t('no_hired_workers')}</h3>
                <p class="empty-state-message">${i18n.t('no_hired_workers_desc')}</p>
            </div>
        `;
        return;
    }
    
    state.hiredWorkers.forEach(application => {
        const workerCard = createApplicationCard(application, 'hired');
        DOM.hiredWorkersContainer.appendChild(workerCard);
    });
}

// ============================================
// Create Application Card
// ============================================
function createApplicationCard(application, type) {
    const card = document.createElement('div');
    card.className = 'worker-card';
    card.dataset.id = application.id;
    card.dataset.workerId = application.worker?.id;
    
    const worker = application.worker || {};
    const price = application.expected_price || 0;
    
    // Create stars for rating
    let starsHTML = '';
    const rating = worker.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    let actionsHTML = '';
    
    if (type === 'pending') {
        actionsHTML = `
            <button class="action-btn-small profile-btn" onclick="viewWorkerProfile(${worker.id})">
                <i class="fas fa-user"></i> ${i18n.t('view_profile')}
            </button>
            <button class="action-btn-small hire-btn" onclick="acceptApplication(${application.id})">
                <i class="fas fa-check"></i> ${i18n.t('accept')}
            </button>
            <button class="action-btn-small reject-btn" onclick="rejectApplication(${application.id})">
                <i class="fas fa-times"></i> ${i18n.t('reject')}
            </button>
        `;
    } else if (type === 'accepted') {
        actionsHTML = `
            <button class="action-btn-small chat-btn" onclick="openChat(${application.id})">
                <i class="fas fa-comment"></i> ${i18n.t('chat')}
            </button>
            <button class="action-btn-small profile-btn" onclick="viewWorkerProfile(${worker.id})">
                <i class="fas fa-user"></i> ${i18n.t('view_profile')}
            </button>
            <button class="action-btn-small hire-btn" onclick="hireWorker(${application.id})">
                <i class="fas fa-user-check"></i> ${i18n.t('hire')}
            </button>
            <button class="action-btn-small reject-btn" onclick="rejectApplication(${application.id})">
                <i class="fas fa-times"></i> ${i18n.t('reject')}
            </button>
        `;
    } else if (type === 'hired') {
        actionsHTML = `
            <button class="action-btn-small chat-btn" onclick="openChat(${application.id})">
                <i class="fas fa-comment"></i> ${i18n.t('chat')}
            </button>
            <button class="action-btn-small profile-btn" onclick="viewWorkerProfile(${worker.id})">
                <i class="fas fa-user"></i> ${i18n.t('view_profile')}
            </button>
            <button class="action-btn-small complete-btn" onclick="confirmCompleteWork(${application.id})">
                <i class="fas fa-check-circle"></i> ${i18n.t('mark_complete')}
            </button>
        `;
    }
    
    card.innerHTML = `
        <div class="worker-header">
            <div class="worker-photo">
                <img src="${worker.photo || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${worker.name || 'Worker'}">
            </div>
            <div class="worker-name-container">
                <h3 class="worker-name">${worker.name || 'Unknown Worker'}</h3>
                <div class="worker-rating" title="${i18n.t('rating')}: ${rating}">
                    ${starsHTML} <span>${rating}</span>
                </div>
            </div>
        </div>
        <div class="worker-details">
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('job_title')}:</span>
                <span class="detail-value">${application.job_title || 'Unknown'}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('profession')}:</span>
                <span class="detail-value">${worker.profession || 'Not specified'}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('skills')}:</span>
                <span class="detail-value">${worker.skills?.join(', ') || 'Not specified'}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('location')}:</span>
                <span class="detail-value">${worker.city || 'Not specified'}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('expected_price')}:</span>
                <span class="detail-value">₹${price.toLocaleString('en-IN')}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('availability')}:</span>
                <span class="detail-value">${application.availability || 'immediate'}</span>
            </div>
            ${application.cover_message ? `
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('cover_message')}:</span>
                <span class="detail-value">"${application.cover_message}"</span>
            </div>
            ` : ''}
            <div class="worker-detail">
                <span class="detail-label">${i18n.t('applied_date')}:</span>
                <span class="detail-value">${new Date(application.applied_date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</span>
            </div>
        </div>
        <div class="worker-actions">
            ${actionsHTML}
        </div>
    `;
    
    return card;
}

// ============================================
// Render Work History
// ============================================
function renderWorkHistory() {
    if (!DOM.workHistoryContainer) return;
    
    let history = [...state.workHistory];
    
    // Apply search filter
    if (state.historyFilters.search) {
        const searchTerm = state.historyFilters.search.toLowerCase();
        history = history.filter(item => 
            (item.workerName || '').toLowerCase().includes(searchTerm) ||
            (item.jobTitle || '').toLowerCase().includes(searchTerm) ||
            (item.payment || 0).toString().includes(searchTerm)
        );
    }
    
    // Apply nested filter sorting
    const activeSorts = Object.values(state.historyFilters.activeSorts);
    
    if (activeSorts.length > 0) {
        history.sort((a, b) => {
            for (const sort of activeSorts) {
                let comparison = 0;
                
                switch(sort) {
                    case 'date-desc':
                        comparison = new Date(b.completionDate || 0) - new Date(a.completionDate || 0);
                        break;
                    case 'date-asc':
                        comparison = new Date(a.completionDate || 0) - new Date(b.completionDate || 0);
                        break;
                    case 'rating-desc':
                        comparison = (b.rating || 0) - (a.rating || 0);
                        break;
                    case 'rating-asc':
                        comparison = (a.rating || 0) - (b.rating || 0);
                        break;
                    case 'price-desc':
                        comparison = (b.payment || 0) - (a.payment || 0);
                        break;
                    case 'price-asc':
                        comparison = (a.payment || 0) - (b.payment || 0);
                        break;
                }
                
                if (comparison !== 0) {
                    return comparison;
                }
            }
            
            return 0;
        });
    }
    
    DOM.workHistoryContainer.innerHTML = '';
    
    if (history.length === 0) {
        DOM.workHistoryContainer.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div class="empty-state-container">
                        <div class="empty-state-icon">
                            <i class="fas fa-history"></i>
                        </div>
                        <h3 class="empty-state-title">${i18n.t('no_work_history')}</h3>
                        <p class="empty-state-message">${i18n.t('no_work_history_desc')}</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    history.forEach(item => {
        const row = createWorkHistoryRow(item);
        DOM.workHistoryContainer.appendChild(row);
    });
}

function createWorkHistoryRow(history) {
    const row = document.createElement('tr');
    
    // Create stars for rating
    let starsHTML = '';
    const rating = history.rating || 0;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else {
            starsHTML += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    
    row.innerHTML = `
        <td>
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${history.workerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${history.workerName}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                ${history.workerName || 'Unknown'}
            </div>
        </td>
        <td>${history.jobTitle || 'Unknown'}</td>
        <td>${new Date(history.completionDate || new Date()).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })}</td>
        <td>
            <div class="rating-stars">
                ${starsHTML}
                <span style="margin-left: 5px;">(${rating})</span>
            </div>
        </td>
        <td>₹${(history.payment || 0).toLocaleString('en-IN')}</td>
        <td>
            <button class="small-btn view-applicants-btn" onclick="viewWorkHistoryDetails(${history.id})">
                <i class="fas fa-eye"></i> ${i18n.t('view')}
            </button>
        </td>
    `;
    
    return row;
}

// ============================================
// Setup Event Listeners
// ============================================
function setupEventListeners() {
    // Sidebar functionality
    DOM.hamburgerBtn?.addEventListener('click', () => {
        DOM.sidebar?.classList.add('active');
        DOM.sidebarOverlay?.classList.add('active');
    });
    
    DOM.sidebarClose?.addEventListener('click', closeSidebar);
    DOM.sidebarOverlay?.addEventListener('click', closeSidebar);
    
    // Settings dropdown
    DOM.sidebarSettingsIcon?.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.settingsDropdown?.classList.toggle('active');
    });
    
    // Close settings dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (DOM.settingsDropdown && DOM.sidebarSettingsIcon) {
            if (!DOM.settingsDropdown.contains(e.target) && !DOM.sidebarSettingsIcon.contains(e.target)) {
                DOM.settingsDropdown.classList.remove('active');
            }
        }
    });
    
    // Language and theme settings
    DOM.languageOptions?.forEach(option => {
        option.addEventListener('click', () => {
            DOM.languageOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            i18n.saveLanguage(option.dataset.lang);
            state.settings.language = option.dataset.lang;
            saveSettings();
        });
    });
    
    DOM.themeOptions?.forEach(option => {
        option.addEventListener('click', () => {
            DOM.themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            state.settings.theme = option.dataset.theme;
            applyTheme();
            saveSettings();
        });
    });

    // Menu item clicks
    DOM.menuItems?.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            setActiveSection(section);
            closeSidebar();
        });
    });

    // Global navigation strip
    DOM.navStripBtns?.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const section = btn.dataset.section;
            if (section) {
                setActiveSection(section);
            }
        });
    });
    
    // Post job buttons
    [DOM.postJobBtn, DOM.addJobBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => openModal(DOM.postJobModal));
        }
    });
    
    // Quick action buttons
    DOM.quickActionDashboard?.addEventListener('click', () => setActiveSection('dashboard'));
    DOM.viewAcceptedBtn?.addEventListener('click', () => setActiveSection('accepted-workers'));
    DOM.viewHiredBtn?.addEventListener('click', () => setActiveSection('hired-workers'));
    DOM.aiAssistantBtn?.addEventListener('click', () => setActiveSection('ai-assistant'));
    DOM.workHistoryBtn?.addEventListener('click', () => setActiveSection('work-history'));
    
    // Logout buttons
    [DOM.logoutBtn, DOM.quickLogoutBtn, DOM.stripLogoutBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleLogout);
        }
    });
    
    // Modal close buttons
    const closeButtons = [
        DOM.closeJobModalBtn, DOM.closeChatModalBtn, DOM.closeRatingModalBtn, 
        DOM.closeProfileModalBtn, DOM.closeAIModalBtn, DOM.closeDeleteModalBtn, 
        DOM.closeCompleteModalBtn, DOM.closeRemoveModalBtn, DOM.closeHistoryModalBtn
    ];
    
    closeButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', closeAllModals);
        }
    });
    
    // Close modal on outside click
    DOM.modals?.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // Job form submission
    DOM.submitJobBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        submitJob();
    });
    
    // Enter key in job form
    DOM.jobForm?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitJob();
        }
    });
    
    // Search functionality
    DOM.workerSearch?.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        renderAcceptedWorkers();
    });

    const pendingSearchEl = document.getElementById('pendingSearch');
    if (pendingSearchEl) {
        pendingSearchEl.addEventListener('input', (e) => {
            state.pendingFilters.search = e.target.value;
            renderPendingApplications();
        });
    }

    DOM.historySearch?.addEventListener('input', (e) => {
        state.historyFilters.search = e.target.value;
        renderWorkHistory();
    });
    
    // AI Assistant
    DOM.aiSendBtn?.addEventListener('click', () => sendAIMessage(DOM.aiInput, DOM.aiChatMessages));
    DOM.aiInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
        }
    });
    
    DOM.aiModalSendBtn?.addEventListener('click', () => sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages));
    DOM.aiModalInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
        }
    });
    
    // AI suggestion buttons
    DOM.suggestionBtns?.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const suggestion = btn.dataset.suggestion;
            if (state.currentSection === 'ai-assistant') {
                if (DOM.aiInput) {
                    DOM.aiInput.value = suggestion;
                    sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
                }
            } else {
                if (DOM.aiModalInput) {
                    DOM.aiModalInput.value = suggestion;
                    sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
                }
            }
        });
    });
    
    // AI file upload
    [DOM.aiFileUploadBtn, DOM.aiPageFileUploadBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const fileInput = btn.id === 'aiFileUploadBtn' ? DOM.aiFileInput : DOM.aiPageFileInput;
                if (fileInput) {
                    fileInput.click();
                }
            });
        }
    });
    
    [DOM.aiFileInput, DOM.aiPageFileInput].forEach(input => {
        if (input) {
            input.addEventListener('change', handleAIFileUpload);
        }
    });
    
    // Chat functionality
    DOM.chatSendBtn?.addEventListener('click', sendChatMessage);
    DOM.chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Chat file upload
    DOM.fileUploadBtn?.addEventListener('click', () => {
        DOM.fileInput?.click();
    });
    
    DOM.fileInput?.addEventListener('change', handleChatFileUpload);
    
    // Voice message button
    DOM.voiceMessageBtn?.addEventListener('click', handleVoiceMessage);
    
    // Negotiation buttons
    document.querySelectorAll('.negotiation-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.dataset.type;
            const value = parseInt(btn.dataset.value);
            handleNegotiation(type, value);
        });
    });
    
    // Rating stars
    DOM.stars?.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            setRating(rating);
        });
        
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', () => {
            const currentRating = parseInt(DOM.ratingSelectedValue?.textContent || '0');
            highlightStars(currentRating);
        });
    });
    
    // Submit rating
    DOM.submitRatingBtn?.addEventListener('click', submitRating);
    
    // Confirmation buttons
    DOM.cancelDeleteBtn?.addEventListener('click', closeAllModals);
    DOM.confirmDeleteBtn?.addEventListener('click', deleteJobConfirmed);
    DOM.cancelCompleteBtn?.addEventListener('click', closeAllModals);
    DOM.confirmCompleteBtn?.addEventListener('click', completeWorkConfirmed);
    DOM.cancelRemoveBtn?.addEventListener('click', closeAllModals);
    DOM.confirmRemoveBtn?.addEventListener('click', removeWorkerConfirmed);
    
    setupFilterEventListeners();
    
    // Close filters when clicking outside filter groups
    document.addEventListener('click', (e) => {
        const clickedFilterGroup = e.target.closest('.filter-group');
        const clickedFilterBtn = e.target.closest('.filter-parent-btn');
        
        if (!clickedFilterGroup && !clickedFilterBtn) {
            state.filters.activeFilterType = null;
            state.historyFilters.activeFilterType = null;
            updateFilterUI();
        }
    });
}

// ============================================
// Sidebar Functions
// ============================================
function closeSidebar() {
    DOM.sidebar?.classList.remove('active');
    DOM.sidebarOverlay?.classList.remove('active');
    DOM.settingsDropdown?.classList.remove('active');
}

// ============================================
// Settings Functions
// ============================================
function loadSettings() {
    const savedSettings = localStorage.getItem('shramikconnect_settings');
    if (savedSettings) {
        try {
            const settings = JSON.parse(savedSettings);
            state.settings = { ...state.settings, ...settings };
        } catch (e) {
            console.error('Error parsing settings', e);
        }
    }
    
    // Apply settings
    DOM.languageOptions?.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === state.settings.language);
    });
    
    DOM.themeOptions?.forEach(option => {
        option.classList.toggle('active', option.dataset.theme === state.settings.theme);
    });
    
    applyTheme();
}

function saveSettings() {
    localStorage.setItem('shramikconnect_settings', JSON.stringify(state.settings));
}

function applyTheme() {
    if (state.settings.theme === 'system') {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-theme', isDarkMode);
    } else {
        document.body.classList.toggle('dark-theme', state.settings.theme === 'dark');
    }
}

// ============================================
// Set Active Section
// ============================================
function setActiveSection(sectionId) {
    console.log(`Setting active section to: ${sectionId}`);
    
    // Update state
    state.currentSection = sectionId;
    
    // Update menu items
    DOM.menuItems?.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Update nav links
    DOM.navLinks?.forEach(link => {
        if (link.dataset.section === 'help' || link.dataset.section === 'about') return;
        link.classList.remove('active');
        if (link.dataset.section === 'dashboard') link.classList.add('active');
    });
    
    // Update global navigation strip
    DOM.navStripBtns?.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    // Update content sections
    DOM.contentSections?.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    
    // Show/hide global navigation strip
    if (DOM.globalNavStrip) {
        if (sectionId === 'dashboard') {
            DOM.globalNavStrip.classList.remove('active');
        } else {
            DOM.globalNavStrip.classList.add('active');
        }
    }
    
    // Scroll to top of the section
    window.scrollTo(0, 0);
}

// ============================================
// Modal Functions
// ============================================
function openModal(modal) {
    closeAllModals();
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAllModals() {
    DOM.modals?.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = 'auto';
    DOM.settingsDropdown?.classList.remove('active');
    // Stop chat polling when chat modal closes
    if (chatPollingInterval) {
        clearInterval(chatPollingInterval);
        chatPollingInterval = null;
    }
}

// ============================================
// Job Functions
// ============================================
async function submitJob() {
    if (!DOM.jobTitleInput || !DOM.workTypeInput || !DOM.jobDescriptionInput || 
        !DOM.requiredSkillsInput || !DOM.jobLocationInput || !DOM.jobPayInput || !DOM.workTimeInput) {
        showNotification('Form inputs not found', 'error');
        return;
    }
    
    const title = DOM.jobTitleInput.value.trim();
    const workType = DOM.workTypeInput.value.trim();
    const description = DOM.jobDescriptionInput.value.trim();
    
    // Get selected skills from multi-select dropdown
    const skillsSelect = DOM.requiredSkillsInput;
    const selectedSkills = [];
    for (let i = 0; i < skillsSelect.options.length; i++) {
        if (skillsSelect.options[i].selected) {
            selectedSkills.push(skillsSelect.options[i].value);
        }
    }
    
    const location = DOM.jobLocationInput.value.trim();
    const workAddress = DOM.workAddressInput?.value.trim() || location;
    const pay = parseInt(DOM.jobPayInput.value);
    const time = parseInt(DOM.workTimeInput.value);
    const toolsAvailable = DOM.toolsAvailableInput ? DOM.toolsAvailableInput.checked : false;
    const latitude = DOM.latitudeInput ? parseFloat(DOM.latitudeInput.value) : 19.0760;
    const longitude = DOM.longitudeInput ? parseFloat(DOM.longitudeInput.value) : 72.8777;
    
    if (!title || !workType || !description || selectedSkills.length === 0 || !location || !pay || !time) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    const jobData = {
        title,
        workType,
        description,
        skills: selectedSkills,
        location,
        workAddress,
        latitude,
        longitude,
        pay,
        time,
        toolsAvailable
    };
    
    try {
        const response = await fetch('/api/employer/create-job/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(jobData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            await loadEmployerJobs();
            renderJobs();
            updateStats();
            
            // Reset form
            if (DOM.jobForm) {
                DOM.jobForm.reset();
            }
            closeAllModals();
            showNotification('Job posted successfully!', 'success');
        } else {
            showNotification(data.message || 'Failed to post job', 'error');
        }
    } catch (error) {
        console.error('Error posting job:', error);
        showNotification('Network error. Please try again.', 'error');
    }
}

function confirmDeleteJob(jobId) {
    const job = state.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    state.pendingDeleteJobId = jobId;
    if (DOM.deleteConfirmTitle) {
        DOM.deleteConfirmTitle.textContent = i18n.t('delete_job_confirm');
    }
    if (DOM.deleteConfirmMessage) {
        DOM.deleteConfirmMessage.textContent = `${i18n.t('job_title')}: ${job.title}`;
    }
    openModal(DOM.deleteConfirmModal);
}

async function deleteJobConfirmed() {
    if (!state.pendingDeleteJobId) return;
    
    try {
        const response = await fetch(`/api/employer/delete-job/${state.pendingDeleteJobId}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            state.jobs = state.jobs.filter(job => job.id !== state.pendingDeleteJobId);
            renderJobs();
            updateStats();
            closeAllModals();
            showNotification('Job deleted successfully', 'success');
        } else {
            showNotification(data.message || 'Failed to delete job', 'error');
        }
    } catch (error) {
        console.error('Error deleting job:', error);
        showNotification('Network error. Please try again.', 'error');
    }
    
    state.pendingDeleteJobId = null;
}

function viewApplicants(jobId) {
    // Filter applications for this job
    const jobApplications = state.applications.filter(app => app.job_id === jobId && app.status !== 'rejected');
    
    // Update state to show only these applications
    // For now, just navigate to accepted workers section
    setActiveSection('accepted-workers');
}

// ============================================
// Application Management Functions
// ============================================
async function updateApplicationStatus(applicationId, newStatus) {
    try {
        const response = await fetch('/api/employer/update-application-status/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                application_id: applicationId,
                status: newStatus
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            await loadApplications();
            await loadEmployerJobs(); // Update job counts
            
            renderPendingApplications();
            renderAcceptedWorkers();
            renderHiredWorkers();
            renderJobs();
            updateStats();
            
            showNotification(data.message || `Application ${newStatus} successfully!`, 'success');
        } else {
            showNotification(data.message || 'Failed to update application', 'error');
        }
    } catch (error) {
        console.error('Error updating application:', error);
        showNotification('Network error. Please try again.', 'error');
    }
}

function hireWorker(applicationId) {
    updateApplicationStatus(applicationId, 'hired');
}

function acceptApplication(applicationId) {
    updateApplicationStatus(applicationId, 'accepted');
}

function rejectApplication(applicationId) {
    updateApplicationStatus(applicationId, 'rejected');
}

function confirmRemoveWorker(workerId) {
    const application = state.acceptedWorkers.find(app => app.id === workerId);
    if (!application) return;
    
    state.pendingRemoveWorkerId = workerId;
    openModal(DOM.removeWorkerModal);
}

function removeWorkerConfirmed() {
    if (!state.pendingRemoveWorkerId) return;
    rejectApplication(state.pendingRemoveWorkerId);
    closeAllModals();
    state.pendingRemoveWorkerId = null;
}

function confirmCompleteWork(applicationId) {
    const application = state.hiredWorkers.find(app => app.id === applicationId);
    if (!application) return;
    
    state.pendingCompleteApplicationId = applicationId;
    if (DOM.ratingWorkerName) {
        DOM.ratingWorkerName.textContent = application.worker?.name || 'Worker';
    }
    openModal(DOM.workCompleteModal);
}

async function completeWorkConfirmed() {
    if (!state.pendingCompleteApplicationId) return;
    
    closeAllModals();
    openModal(DOM.ratingModal);
}

// ============================================
// Rating Functions
// ============================================
function setRating(rating) {
    if (DOM.ratingSelectedValue) {
        DOM.ratingSelectedValue.textContent = rating;
    }
    highlightStars(rating);
    if (DOM.submitRatingBtn) {
        DOM.submitRatingBtn.disabled = rating === 0;
    }
}

function highlightStars(rating) {
    DOM.stars?.forEach(star => {
        if (parseInt(star.dataset.rating) <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

async function submitRating() {
    if (!DOM.ratingSelectedValue) return;
    
    const rating = parseInt(DOM.ratingSelectedValue.textContent);
    if (rating === 0) return;
    
    const feedback = DOM.ratingFeedback?.value || '';
    
    try {
        const response = await fetch('/api/employer/complete-work/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                application_id: state.pendingCompleteApplicationId,
                rating: rating,
                feedback: feedback
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            await loadApplications();
            await loadEmployerJobs();
            await loadWorkHistory();
            
            organizeApplications();
            renderPendingApplications();
            renderAcceptedWorkers();
            renderHiredWorkers();
            renderWorkHistory();
            updateStats();
            renderRatingStars();
            
            closeAllModals();
            showNotification('Work completed and rated successfully!', 'success');
        } else {
            showNotification(data.message || 'Failed to complete work', 'error');
        }
    } catch (error) {
        console.error('Error completing work:', error);
        showNotification('Network error. Please try again.', 'error');
    }
    
    state.pendingCompleteApplicationId = null;
}

// ============================================
// Chat Time Helper — always uses user's local timezone
// Works on localhost AND deployed Render site
// ============================================
function formatChatTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

function formatChatDate(isoString) {
    const date = new Date(isoString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
}

// ============================================
// Chat Functions
// ============================================
function openChat(applicationId) {
    const application = [...state.pendingApplications, ...state.acceptedWorkers, ...state.hiredWorkers].find(app => app.id === applicationId);
    if (!application || !application.worker) return;

    state.currentApplicationId = applicationId;
    state.currentChatWorker = application.worker;

    if (DOM.chatWorkerName) {
        DOM.chatWorkerName.textContent = application.worker.name;
    }

    loadChatMessages(applicationId);
    openModal(DOM.chatModal);

    // Start chat polling every 5 seconds while chat is open
    startChatPolling(applicationId);
}

let chatPollingInterval = null;

function startChatPolling(applicationId) {
    if (chatPollingInterval) clearInterval(chatPollingInterval);
    chatPollingInterval = setInterval(() => {
        if (document.getElementById('chatModal')?.classList.contains('active')) {
            loadChatMessages(applicationId, true); // silent=true
        } else {
            clearInterval(chatPollingInterval);
        }
    }, 5000);
}

async function loadChatMessages(applicationId, silent = false) {
    if (!DOM.chatMessages) return;

    if (!silent) {
        DOM.chatMessages.innerHTML = `
            <div style="text-align:center; padding: 30px; color: #999;">
                <i class="fas fa-spinner fa-spin"></i> Loading messages...
            </div>
        `;
    }

    try {
        const response = await fetch(`/api/chat/${applicationId}/messages/`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-User-Role': 'employer'
            }
        });

        const data = await response.json();

        if (!data.success) {
            if (!silent) {
                DOM.chatMessages.innerHTML = `<div style="text-align:center;padding:30px;color:#999;">Failed to load messages</div>`;
            }
            return;
        }

        // my_role from API — 'employer' or 'worker'
        const myRole = data.my_role || 'employer';

        const wasAtBottom = DOM.chatMessages.scrollHeight - DOM.chatMessages.scrollTop <= DOM.chatMessages.clientHeight + 50;

        DOM.chatMessages.innerHTML = '';

        if (data.messages.length === 0) {
            DOM.chatMessages.innerHTML = `
                <div style="text-align:center; padding: 40px; color: #999;">
                    <i class="fas fa-comment-slash" style="font-size:32px; margin-bottom:10px; display:block;"></i>
                    No messages yet. Start the conversation!
                </div>
            `;
            return;
        }

        let lastDate = '';
        data.messages.forEach(msg => {
            const msgDate = formatChatDate(msg.created_at);
            const msgTime = formatChatTime(msg.created_at);

            if (msgDate !== lastDate) {
                const dateSep = document.createElement('div');
                dateSep.style.cssText = 'text-align:center; margin: 10px 0; color:#999; font-size:12px;';
                dateSep.textContent = msgDate;
                DOM.chatMessages.appendChild(dateSep);
                lastDate = msgDate;
            }

            // isSent = message sender matches my role
            const isSent = msg.sender === myRole;
            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-message ${isSent ? 'sent' : 'received'}`;
            msgDiv.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: ${isSent ? 'flex-end' : 'flex-start'};
                margin-bottom: 10px;
                width: 100%;
            `;

            let contentHTML = '';
            if (msg.file_url) {
                const isImage = msg.file_url.match(/\.(jpg|jpeg|png|gif|webp)$/i);
                if (isImage) {
                    contentHTML += `<img src="${msg.file_url}" style="max-width:200px; border-radius:8px; display:block; margin-bottom:4px;" onclick="window.open('${msg.file_url}')">`;
                } else {
                    contentHTML += `<a href="${msg.file_url}" target="_blank" style="color:white; display:block; margin-bottom:4px;"><i class="fas fa-paperclip"></i> Download file</a>`;
                }
            }
            if (msg.message) {
                contentHTML += `<p style="margin:0;">${msg.message}</p>`;
            }

            msgDiv.innerHTML = `
                <div class="message-bubble" style="
                    max-width: 70%;
                    padding: 10px 14px;
                    border-radius: ${isSent ? '18px 18px 4px 18px' : '18px 18px 18px 4px'};
                    background: ${isSent ? '#01A060' : '#f0f0f0'};
                    color: ${isSent ? 'white' : '#1a1a1a'};
                    word-break: break-word;
                ">
                    ${contentHTML}
                    <small style="opacity:0.7; font-size:11px; display:block; margin-top:4px; text-align:right;">${msgTime} ${msg.is_read && isSent ? '✓✓' : isSent ? '✓' : ''}</small>
                </div>
            `;
            DOM.chatMessages.appendChild(msgDiv);
        });

        if (!silent || wasAtBottom) {
            DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
        }

    } catch (error) {
        console.error('Error loading chat messages:', error);
        if (!silent) {
            DOM.chatMessages.innerHTML = `<div style="text-align:center;padding:30px;color:#999;">Error loading messages</div>`;
        }
    }
}

async function sendChatMessage() {
    if (!DOM.chatInput || !DOM.chatMessages) return;

    const message = DOM.chatInput.value.trim();
    if (!message || !state.currentApplicationId) return;

    DOM.chatInput.value = '';
    DOM.chatInput.disabled = true;

    try {
        const response = await fetch(`/api/chat/${state.currentApplicationId}/send/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
                'X-Requested-With': 'XMLHttpRequest',
                'X-User-Role': 'employer'
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if (data.success) {
            // Reload messages to show new one
            await loadChatMessages(state.currentApplicationId, true);
            DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
        } else {
            showNotification(data.message || 'Failed to send message', 'error');
            DOM.chatInput.value = message; // Restore message on failure
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showNotification('Network error. Try again.', 'error');
        DOM.chatInput.value = message;
    } finally {
        DOM.chatInput.disabled = false;
        DOM.chatInput.focus();
    }
}

async function handleChatFileUpload(e) {
    const file = e.target.files[0];
    if (!file || !DOM.chatMessages || !state.currentApplicationId) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('message', '');

    showNotification(`Uploading "${file.name}"...`, 'info');

    try {
        const response = await fetch(`/api/chat/${state.currentApplicationId}/send/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'X-User-Role': 'employer'
            },
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            await loadChatMessages(state.currentApplicationId, true);
            DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
            showNotification(`File "${file.name}" sent!`, 'success');
        } else {
            showNotification('Failed to upload file', 'error');
        }
    } catch (error) {
        showNotification('Network error uploading file', 'error');
    }

    if (DOM.fileInput) DOM.fileInput.value = '';
}

function handleVoiceMessage() {
    showNotification('Voice messages coming soon!', 'info');
}

function handleNegotiation(type, value) {
    if (!state.currentApplicationId || !state.currentChatWorker) return;

    let message = '';
    if (type === 'price') {
        const action = value > 0 ? 'increased' : 'decreased';
        message = `I would like to ${action} the price by ₹${Math.abs(value)}.`;
    } else if (type === 'time') {
        const action = value > 0 ? 'increase' : 'decrease';
        message = `I would like to ${action} the time by ${Math.abs(value)} hour.`;
    }

    if (DOM.chatInput) {
        DOM.chatInput.value = message;
        DOM.chatInput.focus();
    }
}

function viewWorkerProfile(workerId) {
    showNotification('Worker profile feature coming soon!', 'info');
}

// ============================================
// AI Assistant Functions
// ============================================
function sendAIMessage(inputElement, messagesContainer) {
    if (!inputElement || !messagesContainer) return;
    
    const message = inputElement.value.trim();
    if (!message) return;
    
    // Add user message
    addAIMessage(message, 'user', messagesContainer);
    inputElement.value = '';
    
    // Generate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addAIMessage(response, 'ai', messagesContainer);
        if (messagesContainer === DOM.aiChatMessages) {
            generateAISuggestions(message);
        }
    }, 1000);
}

function addAIMessage(message, sender, container) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message';
    
    const avatar = sender === 'ai' ? 
        '<div class="message-avatar"><i class="fas fa-robot"></i></div>' : 
        '<div class="message-avatar"><i class="fas fa-user"></i></div>';
    
    messageDiv.innerHTML = `
        ${avatar}
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function handleAIFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Show file in AI chat
    const container = e.target.id === 'aiFileInput' ? DOM.aiModalMessages : DOM.aiChatMessages;
    if (!container) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar"><i class="fas fa-user"></i></div>
        <div class="message-content">
            <p><i class="fas fa-paperclip"></i> ${file.name} (${(file.size / 1024).toFixed(1)} KB)</p>
            <p style="margin-top: 5px; font-size: 12px; color: #666;">File uploaded for AI analysis</p>
        </div>
    `;
    
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
    
    // Reset file input
    e.target.value = '';
    
    showNotification(`File "${file.name}" uploaded for AI analysis`, 'success');
}

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('best worker') || lowerMessage.includes('find worker')) {
        const topWorkers = state.acceptedWorkers
            .sort((a, b) => (b.worker?.rating || 0) - (a.worker?.rating || 0))
            .slice(0, 3);
        
        if (topWorkers.length > 0) {
            let response = "Based on your job requirements, here are the top candidates:\n\n";
            topWorkers.forEach((app, i) => {
                response += `${i+1}. **${app.worker?.name}** (Rating: ${app.worker?.rating}/5) - ₹${app.expected_price}\n`;
                response += `   Skills: ${app.worker?.skills?.join(', ')}\n\n`;
            });
            return response;
        }
        return `I've analyzed all available workers but couldn't find any matching your criteria. Try adjusting your filters or post a new job to attract workers.`;
    } else if (lowerMessage.includes('plumbing') || lowerMessage.includes('plumber')) {
        const plumbers = state.applications.filter(app => 
            app.worker?.skills?.some(s => s.toLowerCase().includes('plumb'))
        );
        if (plumbers.length > 0) {
            return `Found ${plumbers.length} workers with plumbing skills. Check the accepted workers section to review them.`;
        }
        return `No workers with plumbing skills found in current applications.`;
    } else {
        return `I understand you're looking for workers. To help you better, please specify:

- What type of worker (electrical, plumbing, carpentry, etc.)
- Budget range
- Required experience level

For example, try: "Find best electrician" or "Show me workers with 5+ years experience".`;
    }
}

function generateAISuggestions(message) {
    if (!DOM.aiSuggestions) return;
    
    const lowerMessage = message.toLowerCase();
    DOM.aiSuggestions.innerHTML = '';
    
    let suggestedWorkers = [];
    
    if (lowerMessage.includes('best worker') || lowerMessage.includes('find worker')) {
        suggestedWorkers = state.acceptedWorkers
            .sort((a, b) => (b.worker?.rating || 0) - (a.worker?.rating || 0))
            .slice(0, 5);
    } else if (lowerMessage.includes('electric') || lowerMessage.includes('wiring')) {
        suggestedWorkers = state.acceptedWorkers
            .filter(app => app.worker?.skills?.some(s => 
                s.toLowerCase().includes('electric') || s.toLowerCase().includes('wiring')
            ))
            .sort((a, b) => (b.worker?.rating || 0) - (a.worker?.rating || 0))
            .slice(0, 5);
    } else if (lowerMessage.includes('plumb')) {
        suggestedWorkers = state.acceptedWorkers
            .filter(app => app.worker?.skills?.some(s => 
                s.toLowerCase().includes('plumb') || s.toLowerCase().includes('pipe')
            ))
            .sort((a, b) => (b.worker?.rating || 0) - (a.worker?.rating || 0))
            .slice(0, 5);
    } else {
        suggestedWorkers = state.acceptedWorkers
            .sort((a, b) => (b.worker?.rating || 0) - (a.worker?.rating || 0))
            .slice(0, 3);
    }
    
    suggestedWorkers.forEach(app => {
        const worker = app.worker;
        const suggestionCard = document.createElement('div');
        suggestionCard.className = 'ai-suggestion-card';
        
        suggestionCard.innerHTML = `
            <h4>${worker?.name || 'Unknown'}</h4>
            <p>${worker?.skills?.slice(0, 3).join(' • ') || 'No skills'}</p>
            <div class="worker-info">
                <span>⭐ ${worker?.rating || 0}/5</span>
                <span>📍 ${worker?.city || 'Unknown'}</span>
                <span>₹${app.expected_price}</span>
            </div>
            <button class="small-btn hire-btn" onclick="hireWorker(${app.id})" style="margin-top: 10px; width: 100%;">
                ${i18n.t('hire')} ${worker?.name?.split(' ')[0] || 'Worker'}
            </button>
        `;
        
        DOM.aiSuggestions.appendChild(suggestionCard);
    });
}

// ============================================
// Work History Functions
// ============================================
function viewWorkHistoryDetails(historyId) {
    const history = state.workHistory.find(h => h.id === historyId);
    if (!history || !DOM.workHistoryDetails) return;
    
    // Create stars for rating
    let starsHTML = '';
    const rating = history.rating || 0;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else {
            starsHTML += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    
    DOM.workHistoryDetails.innerHTML = `
        <div class="detail-section">
            <h3>${i18n.t('employer_details')}</h3>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('name')}</span>
                <span class="detail-value">${history.employerName || 'You'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('work_address')}</span>
                <span class="detail-value">${history.workAddress || 'Not specified'}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>${i18n.t('worker_details')}</h3>
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <img src="${history.workerPhoto || 'https://randomuser.me/api/portraits/men/1.jpg'}" alt="${history.workerName}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
                <div>
                    <div style="font-weight: 600; font-size: 18px;">${history.workerName || 'Unknown'}</div>
                    <div style="color: #666; font-size: 14px;">${i18n.t('completed_on')} ${new Date(history.completionDate || new Date()).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>${i18n.t('job_details')}</h3>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('job_title')}</span>
                <span class="detail-value">${history.jobTitle || 'Unknown'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('work_type')}</span>
                <span class="detail-value">${history.workType || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('job_description')}</span>
                <span class="detail-value">${history.jobDescription || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('required_skills')}</span>
                <span class="detail-value">${Array.isArray(history.requiredSkills) ? history.requiredSkills.join(', ') : history.requiredSkills || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('location')}</span>
                <span class="detail-value">${history.jobLocation || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('work_time')}</span>
                <span class="detail-value">${history.workTime || 0} hours</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('tools_available')}</span>
                <span class="detail-value">${history.toolsAvailable ? i18n.t('yes') : i18n.t('no')}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>${i18n.t('payment_rating')}</h3>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('payment')}</span>
                <span class="detail-value" style="color: #01A060; font-size: 20px;">₹${(history.payment || 0).toLocaleString('en-IN')}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('rating')}</span>
                <span class="detail-value">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        ${starsHTML}
                        <span style="font-weight: 600; margin-left: 10px;">${rating}/5</span>
                    </div>
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">${i18n.t('feedback')}</span>
                <span class="detail-value">${history.feedback || i18n.t('no_feedback')}</span>
            </div>
        </div>
    `;
    
    openModal(DOM.workHistoryModal);
}

// ============================================
// Utility Functions
// ============================================
function showNotification(message, type = 'success') {
    if (!DOM.notificationWrapper) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: relative;
        padding: 18px 20px;
        background: ${type === 'success' ? '#01A060' : type === 'error' ? '#DC2626' : type === 'info' ? '#17a2b8' : '#6c757d'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
        margin-bottom: 10px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'info' ? 'info-circle' : 'bell'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    DOM.notificationWrapper.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ============================================
// Setup Nested Filter Event Listeners
// ============================================
function setupFilterEventListeners() {
    const parentFilterBtns = document.querySelectorAll('.filter-parent-btn[data-filter-type]');
    parentFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterType = btn.dataset.filterType;
            const isHistory = btn.closest('#work-history') !== null;
            const isPending = btn.closest('#pending-applications') !== null;

            closeAllFilterOptions();

            if (isHistory) {
                state.historyFilters.activeFilterType =
                    state.historyFilters.activeFilterType === filterType ? null : filterType;
            } else if (isPending) {
                state.pendingFilters.activeFilterType =
                    state.pendingFilters.activeFilterType === filterType ? null : filterType;
            } else {
                state.filters.activeFilterType =
                    state.filters.activeFilterType === filterType ? null : filterType;
            }

            updateFilterUI();
        });
    });

    const nestedBtns = document.querySelectorAll('.filter-nested-btn[data-sort]');
    nestedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const sortValue = btn.dataset.sort;
            const isHistory = btn.closest('#work-history') !== null;
            const isPending = btn.closest('#pending-applications') !== null;
            const filterGroup = btn.closest('.filter-group');
            const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;

            if (isHistory) {
                state.historyFilters.activeSorts[filterType] = sortValue;
                state.historyFilters.activeFilterType = null;
            } else if (isPending) {
                state.pendingFilters.activeSorts[filterType] = sortValue;
                state.pendingFilters.activeFilterType = null;
            } else {
                state.filters.activeSorts[filterType] = sortValue;
                state.filters.activeFilterType = null;
            }

            updateFilterUI();

            if (isHistory) {
                renderWorkHistory();
            } else if (isPending) {
                renderPendingApplications();
            } else {
                renderAcceptedWorkers();
            }
        });
    });

    // Clear accepted workers filters
    const clearAllFiltersBtn = document.getElementById('clearAllFilters');
    if (clearAllFiltersBtn) {
        clearAllFiltersBtn.addEventListener('click', () => {
            state.filters = { search: '', activeSorts: {}, activeFilterType: null };
            if (DOM.workerSearch) DOM.workerSearch.value = '';
            updateFilterUI();
            renderAcceptedWorkers();
        });
    }

    // Clear pending filters
    const clearPendingFiltersBtn = document.getElementById('clearPendingFilters');
    if (clearPendingFiltersBtn) {
        clearPendingFiltersBtn.addEventListener('click', () => {
            state.pendingFilters = { search: '', activeSorts: {}, activeFilterType: null };
            const pendingSearchEl = document.getElementById('pendingSearch');
            if (pendingSearchEl) pendingSearchEl.value = '';
            updateFilterUI();
            renderPendingApplications();
        });
    }

    // Clear history filters
    const clearHistoryFiltersBtn = document.getElementById('clearHistoryFilters');
    if (clearHistoryFiltersBtn) {
        clearHistoryFiltersBtn.addEventListener('click', () => {
            state.historyFilters = { search: '', activeSorts: {}, activeFilterType: null };
            if (DOM.historySearch) DOM.historySearch.value = '';
            updateFilterUI();
            renderWorkHistory();
        });
    }
}

function closeAllFilterOptions(isHistory = false) {
    const allNestedOptions = document.querySelectorAll('.filter-nested-options');
    allNestedOptions.forEach(options => {
        options.classList.remove('show');
    });
    
    const allParentBtns = document.querySelectorAll('.filter-parent-btn');
    allParentBtns.forEach(btn => {
        btn.classList.remove('active');
    });
}

function updateFilterUI() {
    // Update accepted workers filters
    const parentFilterBtns = document.querySelectorAll('#accepted-workers .filter-parent-btn');
    const nestedOptions = document.querySelectorAll('#accepted-workers .filter-nested-options');
    
    parentFilterBtns.forEach(btn => {
        const filterType = btn.dataset.filterType;
        btn.classList.toggle('active', state.filters.activeFilterType === filterType);
    });
    
    nestedOptions.forEach(options => {
        const filterGroup = options.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        options.classList.toggle('show', state.filters.activeFilterType === filterType);
    });
    
    const nestedBtns = document.querySelectorAll('#accepted-workers .filter-nested-btn');
    nestedBtns.forEach(btn => {
        const sortValue = btn.dataset.sort;
        const filterGroup = btn.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        btn.classList.toggle('active', state.filters.activeSorts[filterType] === sortValue);
    });

    // Update pending applications filters
    const pendingParentBtns = document.querySelectorAll('#pending-applications .filter-parent-btn');
    const pendingNestedOptions = document.querySelectorAll('#pending-applications .filter-nested-options');

    pendingParentBtns.forEach(btn => {
        const filterType = btn.dataset.filterType;
        btn.classList.toggle('active', state.pendingFilters.activeFilterType === filterType);
    });

    pendingNestedOptions.forEach(options => {
        const filterGroup = options.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        options.classList.toggle('show', state.pendingFilters.activeFilterType === filterType);
    });

    const pendingNestedBtns = document.querySelectorAll('#pending-applications .filter-nested-btn');
    pendingNestedBtns.forEach(btn => {
        const sortValue = btn.dataset.sort;
        const filterGroup = btn.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        btn.classList.toggle('active', state.pendingFilters.activeSorts[filterType] === sortValue);
    });
    
    // Update work history filters
    const historyParentBtns = document.querySelectorAll('#work-history .filter-parent-btn');
    const historyNestedOptions = document.querySelectorAll('#work-history .filter-nested-options');
    
    historyParentBtns.forEach(btn => {
        const filterType = btn.dataset.filterType;
        btn.classList.toggle('active', state.historyFilters.activeFilterType === filterType);
    });
    
    historyNestedOptions.forEach(options => {
        const filterGroup = options.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        options.classList.toggle('show', state.historyFilters.activeFilterType === filterType);
    });
    
    const historyNestedBtns = document.querySelectorAll('#work-history .filter-nested-btn');
    historyNestedBtns.forEach(btn => {
        const sortValue = btn.dataset.sort;
        const filterGroup = btn.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        btn.classList.toggle('active', state.historyFilters.activeSorts[filterType] === sortValue);
    });
}

// ============================================
// Unread Chat Badge
// ============================================
async function updateUnreadChatBadge() {
    try {
        const response = await fetch('/api/chat/unread-count/', {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        const data = await response.json();
        if (data.success) {
            const badge = document.getElementById('chatUnreadBadge');
            if (badge) {
                badge.textContent = data.unread_count;
                badge.style.display = data.unread_count > 0 ? 'inline-flex' : 'none';
            }
        }
    } catch (e) {
        // silent fail
    }
}

// ============================================
// Logout Function
// ============================================
function handleLogout() {
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = '/login_employer/';
    }, 1500);
}

// ============================================
// Add animation styles
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
    
    .disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
    }
    
    .negotiated {
        color: #01A060;
        font-weight: 600;
    }
    
    .clickable {
        cursor: pointer;
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
    
    .empty-state-action {
        padding: 12px 24px;
        background: #01A060;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    }
    
    .empty-state-action:hover {
        background: #018049;
        transform: translateY(-2px);
    }
    
    .worker-rating i {
        color: #FFD700;
        margin-right: 2px;
    }
    
    .worker-rating span {
        margin-left: 5px;
        font-weight: 600;
    }
    
    .reject-btn {
        background-color: #DC2626 !important;
    }
    
    .reject-btn:hover {
        background-color: #B91C1C !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Initialize the application
// ============================================
document.addEventListener('DOMContentLoaded', init);