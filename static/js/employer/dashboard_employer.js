/**
 * ShramikConnect - Enhanced Employer Dashboard
 * Merging functionality with modern design
 * 
 * BUG FIXES APPLIED:
 * 1. Fixed duplicate data-i18n="ai_assistant" in HTML causing translation issues
 * 2. Fixed setActiveSection referencing undefined DOM.postJobFloatBtn
 * 3. Fixed AI Assistant navigation logic conflict between modal and page
 * 4. Fixed state.currentSection not being properly tracked
 * 5. Fixed Help/About section navigation handling
 * 6. Fixed global nav strip logout button event listener
 * 7. Fixed CSS margin issue when global nav strip is active
 */

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
            
            // Filters
            sort_by: "Sort By",
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
            apply_filters: "Apply Filters",
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
            date_new_old: "Date: New → Old",
            date_old_new: "Date: Old → New",
            
            // Footer
            help_center: "Help Center",
            about_us: "About Us",
            privacy_policy: "Privacy Policy",
            terms_service: "Terms of Service",
            
            // Logo
            shramik: "Shramik",
            connect: "Connect",
            
            tagline: "Connecting hands to work",
            copyright: "© 2025 ShramikConnect. All rights reserved."
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
            
            sort_by: "क्रमबद्ध करें",
            distance_near_far: "दूरी: नजदीक → दूर",
            distance_far_near: "दूरी: दूर → नजदीक",
            name_a_z: "नाम: अ → ज़",
            name_z_a: "नाम: ज़ → अ",
            price_low_high: "मूल्य: कम → अधिक",
            price_high_low: "मूल्य: अधिक → कम",
            rating_high_low: "रेटिंग: अधिक → कम",
            rating_low_high: "रेटिंग: कम → अधिक",
            acceptance_first_last: "स्वीकृति समय: पहला → अंतिम",
            acceptance_last_first: "स्वीकृति समय: अंतिम → पहला",
            apply_filters: "फ़िल्टर लागू करें",
            reset: "रीसेट",
            
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
            ai_welcome: "नमस्ते! मैं आपका एआई सहायक हूं। मैं आपकी नौकरी पोस्ट के लिए सर्वश्रेष्ठ कर्मचारी खोजने में आपकी मदद कर सकता हूं।",
            ai_welcome_full: "नमस्ते! मैं आपका एआई सहायक हूं। मैं आपकी नौकरी पोस्ट के लिए सर्वश्रेष्ठ कर्मचारी खोजने में आपकी मदद कर सकता हूं। मुझसे पूछें: \"इस नौकरी के लिए सर्वश्रेष्ठ कर्मचारी खोजें\" या बताएं कि आप क्या ढूंढ रहे हैं।",
            find_best_worker: "इस नौकरी के लिए सर्वश्रेष्ठ कर्मचारी खोजें",
            show_plumbing_workers: "मुझे प्लंबिंग कौशल वाले कर्मचारी दिखाएं",
            find_near_workers: "मेरे स्थान के पास कर्मचारी खोजें",
            ai_suggestions: "एआई सुझाव",
            ai_subtitle: "अपनी नौकरियों के लिए सर्वश्रेष्ठ कर्मचारी खोजने में सहायता प्राप्त करें",
            
            work_details: "कार्य विवरण",
            worker_name: "कर्मचारी का नाम",
            completion_date: "पूरा होने की तारीख",
            rating_given: "दी गई रेटिंग",
            date_new_old: "तारीख: नया → पुराना",
            date_old_new: "तारीख: पुराना → नया",
            
            help_center: "सहायता केंद्र",
            about_us: "हमारे बारे में",
            privacy_policy: "गोपनीयता नीति",
            terms_service: "सेवा की शर्तें",
            
            shramik: "श्रमिक",
            connect: "कनेक्ट",
            
            tagline: "काम से हाथ जोड़ना",
            copyright: "© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।"
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
            
            sort_by: "क्रमवारी लावा",
            distance_near_far: "अंतर: जवळ → दूर",
            distance_far_near: "अंतर: दूर → जवळ",
            name_a_z: "नाव: अ → झ",
            name_z_a: "नाव: झ → अ",
            price_low_high: "किंमत: कमी → जास्त",
            price_high_low: "किंमत: जास्त → कमी",
            rating_high_low: "रेटिंग: जास्त → कमी",
            rating_low_high: "रेटिंग: कमी → जास्त",
            acceptance_first_last: "स्वीकृती वेळ: प्रथम → शेवटचे",
            acceptance_last_first: "स्वीकृती वेळ: शेवटचे → प्रथम",
            apply_filters: "फिल्टर लागू करा",
            reset: "रीसेट",
            
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
            ai_welcome: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या नोकरी पोस्टसाठी सर्वोत्तम कामगार शोधण्यात तुमची मदत करू शकतो.",
            ai_welcome_full: "नमस्कार! मी तुमचा AI सहाय्यक आहे. मी तुमच्या नोकरी पोस्टसाठी सर्वोत्तम कामगार शोधण्यात तुमची मदत करू शकतो. मला विचारा: \"या नोकरीसाठी सर्वोत्तम कामगार शोधा\" किंवा तुम्ही काय शोधत आहात ते सांगा.",
            find_best_worker: "या नोकरीसाठी सर्वोत्तम कामगार शोधा",
            show_plumbing_workers: "मला प्लंबिंग कौशल्ये असलेले कामगार दाखवा",
            find_near_workers: "माझ्या स्थानाजवळ कामगार शोधा",
            ai_suggestions: "AI सूचना",
            ai_subtitle: "तुमच्या नोकऱ्यांसाठी सर्वोत्तम कामगार शोधण्यात मदत मिळवा",
            
            work_details: "कामाचे तपशील",
            worker_name: "कामगाराचे नाव",
            completion_date: "पूर्ण होण्याची तारीख",
            rating_given: "दिलेली रेटिंग",
            date_new_old: "तारीख: नवीन → जुने",
            date_old_new: "तारीख: जुने → नवीन",
            
            help_center: "मदत केंद्र",
            about_us: "आमच्याबद्दल",
            privacy_policy: "गोपनीयता धोरण",
            terms_service: "सेवा अटी",
            
            shramik: "श्रमिक",
            connect: "कनेक्ट",
            
            tagline: "कामाशी हात जोडणे",
            copyright: "© 2025 श्रमिककनेक्ट। सर्व हक्क राखीव।"
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
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
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
    employerNameDisplay: document.getElementById('employerNameDisplay'),
    profileEditBtn: document.getElementById('profileEditBtn'),
    profileImage: document.getElementById('profileImage'),
    
    // Stats
    totalJobs: document.getElementById('totalJobs'),
    totalHired: document.getElementById('totalHired'),
    avgRating: document.getElementById('avgRating'),
    ratingStars: document.getElementById('ratingStars'),
    
    // Buttons and actions
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
    currentWorkerId: null,
    currentJobId: null,
    currentChatWorker: null,
    currentSection: 'dashboard',
    pendingDeleteJobId: null,
    pendingRemoveWorkerId: null,
    pendingCompleteWorkerId: null,
    map: null,
    marker: null,
    jobs: [],
    acceptedWorkers: [],
    hiredWorkers: [],
    workHistory: [],
    // Updated filter structure for nested filters
    filters: {
        search: '',
        activeSorts: {}, // Stores active sort for each filter type
        activeFilterType: null // Currently open filter type
    },
    historyFilters: {
        search: '',
        activeSorts: {},
        activeFilterType: null
    },
    settings: {
        language: 'en',
        theme: 'light'
    }
};

// ============================================
// Mock Data
// ============================================
const mockData = {
    jobs: [
        {
            id: 1,
            employerName: "Rajesh Sharma",
            workAddress: "Bandra West, Mumbai",
            latitude: 19.0596,
            longitude: 72.8295,
            title: "Electrician for House Wiring",
            workType: "Electrical Wiring",
            description: "Need an experienced electrician for complete house wiring in a 3BHK apartment.",
            skills: ["Electrical Wiring", "Circuit Repair", "Safety Standards"],
            location: "Mumbai, Andheri West",
            pay: 15000,
            time: 40,
            toolsAvailable: true,
            status: "open",
            postedDate: "2023-10-15"
        },
        {
            id: 2,
            employerName: "Rajesh Sharma",
            workAddress: "Kothrud, Pune",
            latitude: 18.5074,
            longitude: 73.8077,
            title: "Plumber for Bathroom Renovation",
            workType: "Plumbing",
            description: "Plumbing work for bathroom renovation including pipe fitting and fixture installation.",
            skills: ["Pipe Fitting", "Fixture Installation", "Leak Repair"],
            location: "Pune, Kothrud",
            pay: 8000,
            time: 24,
            toolsAvailable: false,
            status: "in-progress",
            postedDate: "2023-10-10"
        },
        {
            id: 3,
            employerName: "Rajesh Sharma",
            workAddress: "Rohini, Delhi",
            latitude: 28.7433,
            longitude: 77.0679,
            title: "Carpenter for Furniture Making",
            workType: "Carpentry",
            description: "Skilled carpenter needed for custom furniture making including wardrobes and beds.",
            skills: ["Woodworking", "Furniture Making", "Measurement"],
            location: "Delhi, Rohini",
            pay: 12000,
            time: 48,
            toolsAvailable: true,
            status: "completed",
            postedDate: "2023-09-25"
        }
    ],
    
    acceptedWorkers: [
        {
            id: 1,
            name: "Ramesh Kumar",
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
            age: 32,
            gender: "Male",
            skills: ["Electrical Wiring", "Circuit Repair", "Maintenance"],
            address: "Andheri West, Mumbai",
            distance: 2.5,
            rating: 4.5,
            expectedPrice: 14000,
            jobAcceptanceTime: "2023-10-16T09:30:00",
            jobId: 1,
            negotiatedPrice: null,
            negotiatedTime: null
        },
        {
            id: 2,
            name: "Suresh Patel",
            photo: "https://randomuser.me/api/portraits/men/2.jpg",
            age: 28,
            gender: "Male",
            skills: ["Electrical Work", "Installation", "Troubleshooting"],
            address: "Bandra, Mumbai",
            distance: 5.2,
            rating: 4.2,
            expectedPrice: 14500,
            jobAcceptanceTime: "2023-10-16T10:15:00",
            jobId: 1,
            negotiatedPrice: null,
            negotiatedTime: null
        },
        {
            id: 3,
            name: "Arun Singh",
            photo: "https://randomuser.me/api/portraits/men/3.jpg",
            age: 35,
            gender: "Male",
            skills: ["Pipe Fitting", "Leak Repair", "Bathroom Plumbing"],
            address: "Kothrud, Pune",
            distance: 1.8,
            rating: 4.7,
            expectedPrice: 7500,
            jobAcceptanceTime: "2023-10-11T14:20:00",
            jobId: 2,
            negotiatedPrice: null,
            negotiatedTime: null
        },
        {
            id: 4,
            name: "Vikram Joshi",
            photo: "https://randomuser.me/api/portraits/men/4.jpg",
            age: 40,
            gender: "Male",
            skills: ["Woodworking", "Furniture Making", "Carpentry"],
            address: "Rohini, Delhi",
            distance: 3.5,
            rating: 4.8,
            expectedPrice: 11500,
            jobAcceptanceTime: "2023-09-26T11:45:00",
            jobId: 3,
            negotiatedPrice: null,
            negotiatedTime: null
        },
        {
            id: 5,
            name: "Priya Sharma",
            photo: "https://randomuser.me/api/portraits/women/1.jpg",
            age: 29,
            gender: "Female",
            skills: ["Electrical Maintenance", "Wiring", "Safety Checks"],
            address: "Malad, Mumbai",
            distance: 7.3,
            rating: 4.3,
            expectedPrice: 13500,
            jobAcceptanceTime: "2023-10-17T08:15:00",
            jobId: 1,
            negotiatedPrice: null,
            negotiatedTime: null
        }
    ],
    
    hiredWorkers: [
        {
            id: 6,
            name: "Ajay Verma",
            photo: "https://randomuser.me/api/portraits/men/5.jpg",
            age: 38,
            gender: "Male",
            skills: ["Advanced Plumbing", "Pipe Installation", "Water System"],
            address: "Hadapsar, Pune",
            distance: 4.2,
            rating: 4.9,
            expectedPrice: 8500,
            jobAcceptanceTime: "2023-10-05T09:00:00",
            jobId: 2,
            hiredDate: "2023-10-06",
            status: "in-progress"
        },
        {
            id: 7,
            name: "Deepak Gupta",
            photo: "https://randomuser.me/api/portraits/men/6.jpg",
            age: 45,
            gender: "Male",
            skills: ["Carpentry", "Furniture Repair", "Wood Finishing"],
            address: "Dwarka, Delhi",
            distance: 6.1,
            rating: 4.6,
            expectedPrice: 12500,
            jobAcceptanceTime: "2023-09-20T10:30:00",
            jobId: 3,
            hiredDate: "2023-09-21",
            status: "completed"
        }
    ],
    
    workHistory: [
        {
            id: 101,
            workerId: 7,
            workerName: "Deepak Gupta",
            workerPhoto: "https://randomuser.me/api/portraits/men/6.jpg",
            employerName: "Rajesh Sharma",
            jobId: 3,
            jobTitle: "Carpenter for Furniture Making",
            workAddress: "Rohini, Delhi",
            completionDate: "2023-10-10",
            rating: 5,
            payment: 12500,
            feedback: "Excellent work, very professional. Completed the furniture making ahead of schedule with great attention to detail.",
            workType: "Carpentry",
            toolsAvailable: true,
            jobDescription: "Skilled carpenter needed for custom furniture making including wardrobes and beds.",
            requiredSkills: ["Woodworking", "Furniture Making", "Measurement"],
            workTime: 48,
            jobLocation: "Delhi, Rohini"
        },
        {
            id: 102,
            workerId: 8,
            workerName: "Mohammed Ali",
            workerPhoto: "https://randomuser.me/api/portraits/men/7.jpg",
            employerName: "Rajesh Sharma",
            jobId: 4,
            jobTitle: "Painter for House Interior",
            workAddress: "Andheri East, Mumbai",
            completionDate: "2023-09-15",
            rating: 4,
            payment: 9000,
            feedback: "Good quality work, timely completion. Could improve on clean-up after work.",
            workType: "Painting",
            toolsAvailable: false,
            jobDescription: "Interior painting for 2BHK apartment including walls and ceilings.",
            requiredSkills: ["Wall Painting", "Color Mixing", "Surface Preparation"],
            workTime: 32,
            jobLocation: "Mumbai, Andheri East"
        }
    ],
    
    chatMessages: {
        1: [
            { sender: 'worker', text: 'Hello sir, I am interested in the electrician job.', time: '09:35 AM' },
            { sender: 'employer', text: 'Hello Ramesh, can you start tomorrow?', time: '09:40 AM' },
            { sender: 'worker', text: 'Yes, I can start tomorrow morning.', time: '09:42 AM' }
        ],
        2: [
            { sender: 'worker', text: 'Namaste sir, I have 5 years experience in electrical work.', time: '10:20 AM' },
            { sender: 'employer', text: 'Great, what is your expected price for this job?', time: '10:25 AM' }
        ],
        3: [
            { sender: 'worker', text: 'Hello, I am Arun. I saw your plumbing job posting.', time: '02:25 PM' }
        ]
    }
};

// ============================================
// Initialize Application
// ============================================
function init() {
    // Initialize i18n
    i18n.init();
    
    // Load mock data
    state.jobs = [...mockData.jobs];
    state.acceptedWorkers = [...mockData.acceptedWorkers];
    state.hiredWorkers = [...mockData.hiredWorkers];
    state.workHistory = [...mockData.workHistory];
    
    // Update stats
    updateStats();
    
    // Render initial data
    renderJobs();
    renderAcceptedWorkers();
    renderHiredWorkers();
    renderWorkHistory();
    renderRatingStars();
    
    // Setup event listeners
    setupEventListeners();
    
    // Set active section
    setActiveSection('dashboard');
    
    // Load settings from localStorage
    loadSettings();
    
    // Initialize map for job posting
    initMap();
    
    console.log('Enhanced ShramikConnect Dashboard initialized - Navigation bugs fixed');
}

// ============================================
// Map Functions
// ============================================
function initMap() {
    if (!DOM.mapContainer) return;
    
    // Default to Mumbai
    const defaultLat = 19.0760;
    const defaultLng = 72.8777;
    
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
        DOM.latitudeInput.value = position.lat;
        DOM.longitudeInput.value = position.lng;
    });
    
    // Update marker when map is clicked
    state.map.on('click', function(e) {
        state.marker.setLatLng(e.latlng);
        DOM.latitudeInput.value = e.latlng.lat;
        DOM.longitudeInput.value = e.latlng.lng;
    });
    
    // Set initial coordinates
    DOM.latitudeInput.value = defaultLat;
    DOM.longitudeInput.value = defaultLng;
}

// ============================================
// Update Statistics
// ============================================
function updateStats() {
    DOM.totalJobs.textContent = state.jobs.length;
    DOM.totalHired.textContent = state.hiredWorkers.length + state.workHistory.length;
    
    // Calculate average rating
    const allRatings = [...state.workHistory.map(w => w.rating)];
    const avg = allRatings.length > 0 
        ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
        : '0.0';
    DOM.avgRating.textContent = avg;
}

// ============================================
// Render Rating Stars
// ============================================
function renderRatingStars() {
    const rating = parseFloat(DOM.avgRating.textContent);
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
                <h3 class="empty-state-title">No Jobs Posted Yet</h3>
                <p class="empty-state-message">Start by posting your first job to find workers</p>
                <button class="empty-state-action" id="postFirstJobBtn">
                    <i class="fas fa-plus"></i>
                    Post Your First Job
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
    const statusText = job.status === 'in-progress' ? 'In Progress' : 
                      job.status === 'completed' ? 'Completed' : 'Open';
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title}</h3>
                <p class="job-employer">👨‍💼 ${job.employerName}</p>
                <p class="job-location">📍 ${job.location}</p>
            </div>
            <span class="job-status ${statusClass}">${statusText}</span>
        </div>
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-map-marker-alt"></i>
                <span>Address: ${job.workAddress}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-tools"></i>
                <span>Work Type: ${job.workType}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-money-bill-wave"></i>
                <span>Pay: ₹${job.pay}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-clock"></i>
                <span>Time: ${job.time} hours</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-tools"></i>
                <span>Skills: ${job.skills.join(', ')}</span>
            </div>
            <div class="job-detail">
                <i class="fas fa-toolbox"></i>
                <span>Tools: ${job.toolsAvailable ? 'Available' : 'Not Available'}</span>
            </div>
        </div>
        <div class="job-actions">
            <button class="small-btn view-applicants-btn" onclick="viewApplicants(${job.id})">
                <i class="fas fa-users"></i> View Applicants
            </button>
            <button class="small-btn delete-job-btn" onclick="confirmDeleteJob(${job.id})">
                <i class="fas fa-trash"></i> Delete
            </button>
        </div>
    `;
    
    return card;
}

// ============================================
// Render Accepted Workers
// ============================================
function renderAcceptedWorkers() {
    if (!DOM.acceptedWorkersContainer) return;
    
    let workers = [...state.acceptedWorkers];
    
    // Apply search filter
    if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        workers = workers.filter(worker => 
            worker.name.toLowerCase().includes(searchTerm) ||
            worker.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
            worker.rating.toString().includes(searchTerm) ||
            worker.expectedPrice.toString().includes(searchTerm)
        );
    }
    
    // Apply nested filter sorting (all active sorts combined)
    const activeSorts = Object.values(state.filters.activeSorts);
    
    if (activeSorts.length > 0) {
        workers.sort((a, b) => {
            // Apply multiple sorts in priority order
            for (const sort of activeSorts) {
                let comparison = 0;
                
                switch(sort) {
                    case 'distance-asc':
                        comparison = a.distance - b.distance;
                        break;
                    case 'distance-desc':
                        comparison = b.distance - a.distance;
                        break;
                    case 'name-asc':
                        comparison = a.name.localeCompare(b.name);
                        break;
                    case 'name-desc':
                        comparison = b.name.localeCompare(a.name);
                        break;
                    case 'price-asc':
                        comparison = (a.negotiatedPrice || a.expectedPrice) - (b.negotiatedPrice || b.expectedPrice);
                        break;
                    case 'price-desc':
                        comparison = (b.negotiatedPrice || b.expectedPrice) - (a.negotiatedPrice || a.expectedPrice);
                        break;
                    case 'rating-desc':
                        comparison = b.rating - a.rating;
                        break;
                    case 'rating-asc':
                        comparison = a.rating - b.rating;
                        break;
                    case 'time-asc':
                        comparison = new Date(a.jobAcceptanceTime) - new Date(b.jobAcceptanceTime);
                        break;
                    case 'time-desc':
                        comparison = new Date(b.jobAcceptanceTime) - new Date(a.jobAcceptanceTime);
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
                <h3 class="empty-state-title">No Workers Found</h3>
                <p class="empty-state-message">${state.filters.search ? 'Try adjusting your search criteria' : 'Post a job to start receiving applications'}</p>
            </div>
        `;
        return;
    }
    
    workers.forEach(worker => {
        const workerCard = createWorkerCard(worker, 'accepted');
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
                <h3 class="empty-state-title">No Hired Workers Yet</h3>
                <p class="empty-state-message">Hire workers from your accepted applicants</p>
            </div>
        `;
        return;
    }
    
    state.hiredWorkers.forEach(worker => {
        const workerCard = createWorkerCard(worker, 'hired');
        DOM.hiredWorkersContainer.appendChild(workerCard);
    });
}

// ============================================
// Create Worker Card
// ============================================
function createWorkerCard(worker, type) {
    const card = document.createElement('div');
    card.className = 'worker-card';
    card.dataset.id = worker.id;
    
    const price = worker.negotiatedPrice || worker.expectedPrice;
    const time = worker.negotiatedTime || worker.time || 0;
    
    // Format acceptance time
    const acceptanceTime = new Date(worker.jobAcceptanceTime);
    const formattedTime = acceptanceTime.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Create stars for rating
    let starsHTML = '';
    const fullStars = Math.floor(worker.rating);
    const hasHalfStar = worker.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '★';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '★';
        } else {
            starsHTML += '☆';
        }
    }
    
    let actionsHTML = '';
    
    if (type === 'accepted') {
        actionsHTML = `
            <button class="action-btn-small chat-btn" onclick="openChat(${worker.id})">
                <i class="fas fa-comment"></i> Chat
            </button>
            <button class="action-btn-small profile-btn" onclick="redirectToProfile(${worker.id})">
                <i class="fas fa-user"></i> Profile
            </button>
            <button class="action-btn-small hire-btn" onclick="hireWorker(${worker.id})">
                <i class="fas fa-user-check"></i> Hire
            </button>
            <button class="action-btn-small remove-btn" onclick="confirmRemoveWorker(${worker.id})">
                <i class="fas fa-times"></i> Remove
            </button>
        `;
    } else if (type === 'hired') {
        const isCompleted = worker.status === 'completed';
        actionsHTML = `
            <button class="action-btn-small chat-btn" onclick="openChat(${worker.id})">
                <i class="fas fa-comment"></i> Chat
            </button>
            <button class="action-btn-small profile-btn" onclick="redirectToProfile(${worker.id})">
                <i class="fas fa-user"></i> Profile
            </button>
            <button class="action-btn-small complete-btn ${isCompleted ? 'disabled' : ''}" 
                    onclick="${isCompleted ? '' : `confirmCompleteWork(${worker.id})`}"
                    ${isCompleted ? 'disabled' : ''}>
                <i class="fas fa-check-circle"></i> ${isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
        `;
    }
    
    card.innerHTML = `
        <div class="worker-header">
            <div class="worker-photo">
                <img src="${worker.photo}" alt="${worker.name}">
            </div>
            <div class="worker-name-container">
                <h3 class="worker-name">${worker.name}</h3>
                <div class="worker-rating" title="Rating: ${worker.rating}">
                    ${starsHTML} <span>${worker.rating}</span>
                </div>
            </div>
        </div>
        <div class="worker-details">
            <div class="worker-detail">
                <span class="detail-label">Age:</span>
                <span class="detail-value">${worker.age} years</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Gender:</span>
                <span class="detail-value">${worker.gender}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Skills:</span>
                <span class="detail-value">${worker.skills.join(', ')}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Address:</span>
                <span class="detail-value">${worker.address}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Distance:</span>
                <span class="detail-value">${worker.distance} km</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Expected Price:</span>
                <span class="detail-value">₹${price}</span>
            </div>
            <div class="worker-detail">
                <span class="detail-label">Accepted:</span>
                <span class="detail-value">${formattedTime}</span>
            </div>
            ${worker.negotiatedPrice ? `
            <div class="worker-detail">
                <span class="detail-label">Negotiated Price:</span>
                <span class="detail-value negotiated">₹${worker.negotiatedPrice}</span>
            </div>
            ` : ''}
            ${worker.negotiatedTime ? `
            <div class="worker-detail">
                <span class="detail-label">Negotiated Time:</span>
                <span class="detail-value negotiated">${worker.negotiatedTime} hours</span>
            </div>
            ` : ''}
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
            item.workerName.toLowerCase().includes(searchTerm) ||
            item.jobTitle.toLowerCase().includes(searchTerm) ||
            item.payment.toString().includes(searchTerm)
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
                        comparison = new Date(b.completionDate) - new Date(a.completionDate);
                        break;
                    case 'date-asc':
                        comparison = new Date(a.completionDate) - new Date(b.completionDate);
                        break;
                    case 'rating-desc':
                        comparison = b.rating - a.rating;
                        break;
                    case 'rating-asc':
                        comparison = a.rating - b.rating;
                        break;
                    case 'price-desc':
                        comparison = b.payment - a.payment;
                        break;
                    case 'price-asc':
                        comparison = a.payment - b.payment;
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
                    <div style="text-align: center;">
                        <i class="fas fa-history" style="font-size: 48px; color: #01A060; margin-bottom: 20px;"></i>
                        <h3 style="color: #666; margin-bottom: 10px;">No Work History Yet</h3>
                        <p style="color: #888;">Complete jobs to build your work history</p>
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
    for (let i = 1; i <= 5; i++) {
        if (i <= history.rating) {
            starsHTML += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else {
            starsHTML += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    
    row.innerHTML = `
        <td>
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${history.workerPhoto}" alt="${history.workerName}" style="width: 40px; height: 40px; border-radius: 50%;">
                ${history.workerName}
            </div>
        </td>
        <td>${history.jobTitle}</td>
        <td>${new Date(history.completionDate).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })}</td>
        <td>
            <div class="rating-stars">
                ${starsHTML}
                <span style="margin-left: 5px;">(${history.rating})</span>
            </div>
        </td>
        <td>₹${history.payment}</td>
        <td>
            <button class="small-btn view-applicants-btn" onclick="viewWorkHistoryDetails(${history.id})">
                <i class="fas fa-eye"></i> View
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
    DOM.hamburgerBtn.addEventListener('click', () => {
        DOM.sidebar.classList.add('active');
        DOM.sidebarOverlay.classList.add('active');
    });
    
    DOM.sidebarClose.addEventListener('click', closeSidebar);
    DOM.sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Settings dropdown
    DOM.sidebarSettingsIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.settingsDropdown.classList.toggle('active');
    });
    
    // Close settings dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!DOM.settingsDropdown.contains(e.target) && !DOM.sidebarSettingsIcon.contains(e.target)) {
            DOM.settingsDropdown.classList.remove('active');
        }
    });
    
    // Language and theme settings
    DOM.languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            DOM.languageOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            i18n.saveLanguage(option.dataset.lang);
            state.settings.language = option.dataset.lang;
            saveSettings();
        });
    });
    
    DOM.themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            DOM.themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            state.settings.theme = option.dataset.theme;
            applyTheme();
            saveSettings();
        });
    });
    


// Menu item clicks - Update AI Assistant handling
DOM.menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;
        
        if (section === 'ai-assistant') {
            handleAIAccess('sidebar');
        } else {
            setActiveSection(section);
            closeSidebar();
        }
    });
});

// Global navigation strip - Update AI Assistant handling
DOM.navStripBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const section = btn.dataset.section;
        if (section) {
            if (section === 'ai-assistant') {
                handleAIAccess('quick-links');
            } else {
                setActiveSection(section);
            }
        }
    });
});
    
    
    // Post job buttons
    [DOM.postJobBtn, DOM.addJobBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => openModal(DOM.postJobModal));
        }
    });
    
    // Quick action buttons - FIX: Proper event handling
    if (DOM.viewAcceptedBtn) {
        DOM.viewAcceptedBtn.addEventListener('click', () => setActiveSection('accepted-workers'));
    }

    if (DOM.viewHiredBtn) {
        DOM.viewHiredBtn.addEventListener('click', () => setActiveSection('hired-workers'));
    }

    // AI Assistant - Use centralized controller
    if (DOM.aiAssistantBtn) {
        DOM.aiAssistantBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleAIAccess('dashboard');
        });
    }

    if (DOM.workHistoryBtn) {
        DOM.workHistoryBtn.addEventListener('click', () => setActiveSection('work-history'));
    }
    
    // Logout buttons - FIX: Added missing stripLogoutBtn
    [DOM.logoutBtn, DOM.quickLogoutBtn, DOM.stripLogoutBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleLogout);
        }
    });
    
    // Modal close buttons
    [DOM.closeJobModalBtn, DOM.closeChatModalBtn, DOM.closeRatingModalBtn, DOM.closeProfileModalBtn, DOM.closeAIModalBtn, DOM.closeDeleteModalBtn, DOM.closeCompleteModalBtn, DOM.closeRemoveModalBtn, DOM.closeHistoryModalBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                closeAllModals();
            });
        }
    });
    
    // Close modal on outside click
    DOM.modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // Job form submission
    if (DOM.submitJobBtn) {
        DOM.submitJobBtn.addEventListener('click', (e) => {
            e.preventDefault();
            submitJob();
        });
    }
    
    // Enter key in job form
    if (DOM.jobForm) {
        DOM.jobForm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitJob();
            }
        });
    }
    
    // Search functionality
    if (DOM.workerSearch) {
        DOM.workerSearch.addEventListener('input', (e) => {
            state.filters.search = e.target.value;
            renderAcceptedWorkers();
        });
    }
    
    if (DOM.historySearch) {
        DOM.historySearch.addEventListener('input', (e) => {
            state.historyFilters.search = e.target.value;
            renderWorkHistory();
        });
    }
    
    // AI Assistant
    if (DOM.aiSendBtn) {
        DOM.aiSendBtn.addEventListener('click', () => sendAIMessage(DOM.aiInput, DOM.aiChatMessages));
    }
    
    if (DOM.aiInput) {
        DOM.aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
            }
        });
    }
    
    if (DOM.aiModalSendBtn) {
        DOM.aiModalSendBtn.addEventListener('click', () => sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages));
    }
    
    if (DOM.aiModalInput) {
        DOM.aiModalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
            }
        });
    }
    
    // AI suggestion buttons
    DOM.suggestionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const suggestion = btn.dataset.suggestion;
            if (state.currentSection === 'ai-assistant') {
                DOM.aiInput.value = suggestion;
                sendAIMessage(DOM.aiInput, DOM.aiChatMessages);
            } else {
                DOM.aiModalInput.value = suggestion;
                sendAIMessage(DOM.aiModalInput, DOM.aiModalMessages);
            }
        });
    });
    
    // AI file upload
    [DOM.aiFileUploadBtn, DOM.aiPageFileUploadBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const fileInput = btn.id === 'aiFileUploadBtn' ? DOM.aiFileInput : DOM.aiPageFileInput;
                fileInput.click();
            });
        }
    });
    
    [DOM.aiFileInput, DOM.aiPageFileInput].forEach(input => {
        if (input) {
            input.addEventListener('change', handleAIFileUpload);
        }
    });
    
    // Chat functionality
    if (DOM.chatSendBtn) {
        DOM.chatSendBtn.addEventListener('click', sendChatMessage);
    }
    
    if (DOM.chatInput) {
        DOM.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Chat file upload
    if (DOM.fileUploadBtn) {
        DOM.fileUploadBtn.addEventListener('click', () => {
            DOM.fileInput.click();
        });
    }
    
    if (DOM.fileInput) {
        DOM.fileInput.addEventListener('change', handleChatFileUpload);
    }
    
    // Voice message button
    if (DOM.voiceMessageBtn) {
        DOM.voiceMessageBtn.addEventListener('click', handleVoiceMessage);
    }
    
    // Negotiation buttons
    document.querySelectorAll('.negotiation-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.dataset.type;
            const value = parseInt(btn.dataset.value);
            handleNegotiation(type, value);
        });
    });
    
    // Rating stars
    DOM.stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            setRating(rating);
        });
        
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', () => {
            const currentRating = parseInt(DOM.ratingSelectedValue.textContent);
            highlightStars(currentRating);
        });
    });
    
    // Submit rating
    if (DOM.submitRatingBtn) {
        DOM.submitRatingBtn.addEventListener('click', submitRating);
    }
    
    // Confirmation buttons
    if (DOM.cancelDeleteBtn) {
        DOM.cancelDeleteBtn.addEventListener('click', () => closeAllModals());
    }
    
    if (DOM.confirmDeleteBtn) {
        DOM.confirmDeleteBtn.addEventListener('click', deleteJobConfirmed);
    }
    
    if (DOM.cancelCompleteBtn) {
        DOM.cancelCompleteBtn.addEventListener('click', () => closeAllModals());
    }
    
    if (DOM.confirmCompleteBtn) {
        DOM.confirmCompleteBtn.addEventListener('click', completeWorkConfirmed);
    }
    
    if (DOM.cancelRemoveBtn) {
        DOM.cancelRemoveBtn.addEventListener('click', () => closeAllModals());
    }
    
    if (DOM.confirmRemoveBtn) {
        DOM.confirmRemoveBtn.addEventListener('click', removeWorkerConfirmed);
    }
    
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
    DOM.sidebar.classList.remove('active');
    DOM.sidebarOverlay.classList.remove('active');
    DOM.settingsDropdown.classList.remove('active');
}

// ============================================
// Settings Functions
// ============================================
function loadSettings() {
    const savedSettings = localStorage.getItem('shramikconnect_settings');
    if (savedSettings) {
        state.settings = JSON.parse(savedSettings);
    }
    
    // Apply settings
    DOM.languageOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === state.settings.language);
    });
    
    DOM.themeOptions.forEach(option => {
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
// Set Active Section - FIXED BUG
// ============================================
// ============================================
// Set Active Section - FIXED: Home always active
// ============================================
function setActiveSection(sectionId) {
    console.log(`Setting active section to: ${sectionId}`);
    
    // Update state
    state.currentSection = sectionId;
    
    // Update menu items
    DOM.menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Update nav links
    DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Update global navigation strip
    DOM.navStripBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    // Update content sections
    DOM.contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    
    // Show/hide global navigation strip
    if (sectionId === 'dashboard') {
        DOM.globalNavStrip.classList.remove('active');
    } else {
        DOM.globalNavStrip.classList.add('active');
    }
    
    // Scroll to top of the section
    window.scrollTo(0, 0);
}

// ============================================
// Modal Functions
// ============================================
function openModal(modal) {
    closeAllModals();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    DOM.modals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = 'auto';
    DOM.settingsDropdown.classList.remove('active');
}

// ============================================
// Job Functions
// ============================================
function submitJob() {
    const employerName = DOM.employerNameInput.value.trim();
    const workAddress = DOM.workAddressInput.value.trim();
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
    const pay = parseInt(DOM.jobPayInput.value);
    const time = parseInt(DOM.workTimeInput.value);
    const toolsAvailable = DOM.toolsAvailableInput.checked;
    const latitude = parseFloat(DOM.latitudeInput.value);
    const longitude = parseFloat(DOM.longitudeInput.value);
    
    if (!employerName || !workAddress || !title || !workType || !description || selectedSkills.length === 0 || !location || !pay || !time) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    const newJob = {
        id: Date.now(),
        employerName,
        workAddress,
        latitude,
        longitude,
        title,
        workType,
        description,
        skills: selectedSkills,
        location,
        pay,
        time,
        toolsAvailable,
        status: 'open',
        postedDate: new Date().toISOString().split('T')[0]
    };
    
    state.jobs.unshift(newJob);
    renderJobs();
    updateStats();
    
    // Reset form (including multi-select)
    DOM.jobForm.reset();
    closeAllModals();
    
    // Show success message
    showNotification('Job posted successfully!', 'success');
}

function confirmDeleteJob(jobId) {
    const job = state.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    state.pendingDeleteJobId = jobId;
    DOM.deleteConfirmTitle.textContent = i18n.t('delete_job_confirm');
    DOM.deleteConfirmMessage.textContent = `Job: ${job.title}`;
    openModal(DOM.deleteConfirmModal);
}

function deleteJobConfirmed() {
    if (!state.pendingDeleteJobId) return;
    
    state.jobs = state.jobs.filter(job => job.id !== state.pendingDeleteJobId);
    renderJobs();
    updateStats();
    closeAllModals();
    showNotification('Job deleted successfully', 'success');
    state.pendingDeleteJobId = null;
}

function viewApplicants(jobId) {
    setActiveSection('accepted-workers');
}

// ============================================
// Worker Functions
// ============================================
function openChat(workerId) {
    const worker = [...state.acceptedWorkers, ...state.hiredWorkers].find(w => w.id === workerId);
    if (!worker) return;
    
    state.currentWorkerId = workerId;
    state.currentChatWorker = worker;
    DOM.chatWorkerName.textContent = worker.name;
    
    // Load chat messages
    loadChatMessages(workerId);
    
    openModal(DOM.chatModal);
}

function loadChatMessages(workerId) {
    const messages = mockData.chatMessages[workerId] || [];
    DOM.chatMessages.innerHTML = '';
    
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${msg.sender === 'employer' ? 'sent' : 'received'}`;
        
        const time = msg.time || new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <p>${msg.text}</p>
                <small style="opacity: 0.7; font-size: 11px;">${time}</small>
            </div>
        `;
        
        DOM.chatMessages.appendChild(messageDiv);
    });
    
    // Scroll to bottom
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function sendChatMessage() {
    const message = DOM.chatInput.value.trim();
    if (!message || !state.currentWorkerId) return;
    
    // Add message to UI
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message sent';
    
    const time = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    messageDiv.innerHTML = `
        <div class="message-bubble">
            <p>${message}</p>
            <small style="opacity: 0.7; font-size: 11px;">${time}</small>
        </div>
    `;
    
    DOM.chatMessages.appendChild(messageDiv);
    DOM.chatInput.value = '';
    
    // Scroll to bottom
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
    
    // In a real app, we would save the message to the backend
    // For demo, we'll simulate a reply after 1 second
    setTimeout(() => {
        const replies = [
            "Yes, I can do that.",
            "Okay, let's discuss the price.",
            "I'll be available at that time.",
            "Can we negotiate the price?",
            "Thank you for the opportunity."
        ];
        
        const reply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyDiv = document.createElement('div');
        replyDiv.className = 'chat-message received';
        
        const replyTime = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        replyDiv.innerHTML = `
            <div class="message-bubble">
                <p>${reply}</p>
                <small style="opacity: 0.7; font-size: 11px;">${replyTime}</small>
            </div>
        `;
        
        DOM.chatMessages.appendChild(replyDiv);
        DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
    }, 1000);
}

function handleChatFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Show file in chat
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message sent';
    
    const time = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    messageDiv.innerHTML = `
        <div class="message-bubble">
            <p><i class="fas fa-paperclip"></i> ${file.name} (${(file.size / 1024).toFixed(1)} KB)</p>
            <small style="opacity: 0.7; font-size: 11px;">${time}</small>
        </div>
    `;
    
    DOM.chatMessages.appendChild(messageDiv);
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
    
    // Reset file input
    DOM.fileInput.value = '';
    
    showNotification(`File "${file.name}" uploaded`, 'success');
}

function handleVoiceMessage() {
    showNotification('Voice message recording started (simulated)', 'info');
    // In a real app, this would use the Web Audio API
    setTimeout(() => {
        showNotification('Voice message sent', 'success');
        
        // Add voice message to chat
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message sent';
        
        const time = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <p><i class="fas fa-microphone"></i> Voice message (0:15)</p>
                <small style="opacity: 0.7; font-size: 11px;">${time}</small>
            </div>
        `;
        
        DOM.chatMessages.appendChild(messageDiv);
        DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
    }, 1500);
}

function handleNegotiation(type, value) {
    if (!state.currentWorkerId) return;
    
    const worker = state.acceptedWorkers.find(w => w.id === state.currentWorkerId);
    if (!worker) return;
    
    if (type === 'price') {
        worker.negotiatedPrice = (worker.negotiatedPrice || worker.expectedPrice) + value;
        
        // Add negotiation message to chat
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message sent';
        
        const time = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const action = value > 0 ? 'increased' : 'decreased';
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <p>I have ${action} the price by ₹${Math.abs(value)}. New price: ₹${worker.negotiatedPrice}</p>
                <small style="opacity: 0.7; font-size: 11px;">${time}</small>
            </div>
        `;
        
        DOM.chatMessages.appendChild(messageDiv);
        
        // Update worker card
        renderAcceptedWorkers();
        
        showNotification(`Price ${action} to ₹${worker.negotiatedPrice}`, 'success');
    }
    
    // Scroll to bottom
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function redirectToProfile(workerId) {
    // In a real app, redirect to worker profile page
    // For demo, we'll show an alert
    showNotification('Redirecting to worker profile page...', 'info');
    // window.location.href = `worker_profile.html?id=${workerId}`;
}

function hireWorker(workerId) {
    const workerIndex = state.acceptedWorkers.findIndex(w => w.id === workerId);
    if (workerIndex === -1) return;
    
    const worker = state.acceptedWorkers[workerIndex];
    
    // Move worker from accepted to hired
    state.acceptedWorkers.splice(workerIndex, 1);
    state.hiredWorkers.push({
        ...worker,
        hiredDate: new Date().toISOString().split('T')[0],
        status: 'in-progress'
    });
    
    // Update UI
    renderAcceptedWorkers();
    renderHiredWorkers();
    updateStats();
    
    showNotification(`${worker.name} hired successfully!`, 'success');
}

function confirmRemoveWorker(workerId) {
    const worker = state.acceptedWorkers.find(w => w.id === workerId);
    if (!worker) return;
    
    state.pendingRemoveWorkerId = workerId;
    openModal(DOM.removeWorkerModal);
}

function removeWorkerConfirmed() {
    if (!state.pendingRemoveWorkerId) return;
    
    state.acceptedWorkers = state.acceptedWorkers.filter(w => w.id !== state.pendingRemoveWorkerId);
    renderAcceptedWorkers();
    closeAllModals();
    showNotification('Worker removed', 'success');
    state.pendingRemoveWorkerId = null;
}

function confirmCompleteWork(workerId) {
    const worker = state.hiredWorkers.find(w => w.id === workerId);
    if (!worker) return;
    
    state.pendingCompleteWorkerId = workerId;
    openModal(DOM.workCompleteModal);
}

function completeWorkConfirmed() {
    if (!state.pendingCompleteWorkerId) return;
    
    const workerIndex = state.hiredWorkers.findIndex(w => w.id === state.pendingCompleteWorkerId);
    if (workerIndex === -1) return;
    
    const worker = state.hiredWorkers[workerIndex];
    state.currentWorkerId = worker.id;
    DOM.ratingWorkerName.textContent = worker.name;
    
    closeAllModals();
    openModal(DOM.ratingModal);
    state.pendingCompleteWorkerId = null;
}

// ============================================
// Rating Functions
// ============================================
function setRating(rating) {
    DOM.ratingSelectedValue.textContent = rating;
    highlightStars(rating);
    DOM.submitRatingBtn.disabled = rating === 0;
}

function highlightStars(rating) {
    DOM.stars.forEach(star => {
        if (parseInt(star.dataset.rating) <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitRating() {
    const rating = parseInt(DOM.ratingSelectedValue.textContent);
    if (rating === 0) return;
    
    const workerIndex = state.hiredWorkers.findIndex(w => w.id === state.currentWorkerId);
    if (workerIndex === -1) return;
    
    const worker = state.hiredWorkers[workerIndex];
    const job = state.jobs.find(j => j.id === worker.jobId);
    
    // Move to work history
    const workHistory = {
        id: Date.now(),
        workerId: worker.id,
        workerName: worker.name,
        workerPhoto: worker.photo,
        employerName: job?.employerName || 'Rajesh Sharma',
        jobId: worker.jobId,
        jobTitle: job?.title || 'Unknown Job',
        workAddress: job?.workAddress || 'Unknown',
        completionDate: new Date().toISOString().split('T')[0],
        rating: rating,
        payment: worker.negotiatedPrice || worker.expectedPrice,
        feedback: DOM.ratingFeedback.value || 'Work completed successfully',
        workType: job?.workType || 'Unknown',
        toolsAvailable: job?.toolsAvailable || false,
        jobDescription: job?.description || '',
        requiredSkills: job?.skills || [],
        workTime: job?.time || 0,
        jobLocation: job?.location || ''
    };
    
    state.workHistory.unshift(workHistory);
    state.hiredWorkers.splice(workerIndex, 1);
    
    // Update UI
    renderHiredWorkers();
    renderWorkHistory();
    updateStats();
    renderRatingStars();
    
    closeAllModals();
    showNotification(`Work completed and ${worker.name} rated ${rating} stars!`, 'success');
}

// ============================================
// AI Assistant Functions - FIXED BUG
// ============================================
function sendAIMessage(inputElement, messagesContainer) {
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
        return `Based on your job requirements, I've analyzed all available workers and found the top candidates. Here are my recommendations:

1. **Ramesh Kumar** (Rating: 4.5/5) - Best match for electrical work. Has 8+ years experience in house wiring and is located just 2.5km from your job site.

2. **Arun Singh** (Rating: 4.7/5) - Top choice for plumbing jobs. Specializes in bathroom renovations and pipe fitting with excellent customer feedback.

3. **Vikram Joshi** (Rating: 4.8/5) - Highly skilled carpenter with expertise in custom furniture making. Has completed 25+ similar projects.

I've displayed detailed suggestions in the right panel. You can filter workers by skills, rating, or distance to find the perfect match.`;
    } else if (lowerMessage.includes('plumbing') || lowerMessage.includes('plumber')) {
        return `For plumbing jobs, I recommend these workers:

1. **Arun Singh** (4.7/5 rating) - Specializes in bathroom plumbing and pipe fitting. 12 years experience.

2. **Ajay Verma** (4.9/5 rating) - Expert in advanced plumbing systems. Currently hired for your Pune project.

Key factors considered: Experience with bathroom renovations, leak repair skills, customer ratings, and proximity to your location.`;
    } else if (lowerMessage.includes('electric') || lowerMessage.includes('wiring')) {
        return `For electrical work, here are the top workers:

1. **Ramesh Kumar** (4.5/5) - 8 years experience, specializes in house wiring and circuit repair.

2. **Suresh Patel** (4.2/5) - Strong troubleshooting skills, 5 years experience.

3. **Priya Sharma** (4.3/5) - Excellent safety record, specializes in electrical maintenance.

All are available in Mumbai and have experience with residential electrical work.`;
    } else {
        return `I understand you're looking for workers. To help you better, please specify:

- What type of job (electrical, plumbing, carpentry, etc.)
- Location preferences
- Budget range
- Required experience level

For example, try: "Find best worker for electrical wiring in Mumbai" or "Show me carpenters with 5+ years experience".`;
    }
}

function generateAISuggestions(message) {
    const lowerMessage = message.toLowerCase();
    DOM.aiSuggestions.innerHTML = '';
    
    let suggestedWorkers = [];
    
    if (lowerMessage.includes('best worker') || lowerMessage.includes('find worker')) {
        suggestedWorkers = state.acceptedWorkers
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
    } else if (lowerMessage.includes('electric') || lowerMessage.includes('wiring')) {
        suggestedWorkers = state.acceptedWorkers
            .filter(w => w.skills.some(s => s.toLowerCase().includes('electric') || s.toLowerCase().includes('wiring')))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
    } else if (lowerMessage.includes('plumb')) {
        suggestedWorkers = state.acceptedWorkers
            .filter(w => w.skills.some(s => s.toLowerCase().includes('plumb') || s.toLowerCase().includes('pipe')))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
    } else {
        suggestedWorkers = state.acceptedWorkers
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
    }
    
    suggestedWorkers.forEach(worker => {
        const suggestionCard = document.createElement('div');
        suggestionCard.className = 'ai-suggestion-card';
        
        suggestionCard.innerHTML = `
            <h4>${worker.name}</h4>
            <p>${worker.skills.slice(0, 3).join(' • ')}</p>
            <div class="worker-info">
                <span>⭐ ${worker.rating}/5</span>
                <span>📍 ${worker.distance} km</span>
                <span>₹${worker.expectedPrice}</span>
            </div>
            <button class="small-btn hire-btn" onclick="hireWorker(${worker.id})" style="margin-top: 10px; width: 100%;">
                Hire ${worker.name.split(' ')[0]}
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
    if (!history) return;
    
    // Create stars for rating
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= history.rating) {
            starsHTML += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else {
            starsHTML += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    
    DOM.workHistoryDetails.innerHTML = `
        <div class="detail-section">
            <h3>Employer Details</h3>
            <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">${history.employerName}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Work Address</span>
                <span class="detail-value">${history.workAddress}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Worker Details</h3>
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <img src="${history.workerPhoto}" alt="${history.workerName}" style="width: 60px; height: 60px; border-radius: 50%;">
                <div>
                    <div style="font-weight: 600; font-size: 18px;">${history.workerName}</div>
                    <div style="color: #666; font-size: 14px;">Completed on ${new Date(history.completionDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Job Details</h3>
            <div class="detail-row">
                <span class="detail-label">Job Title</span>
                <span class="detail-value">${history.jobTitle}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Work Type</span>
                <span class="detail-value">${history.workType}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Job Description</span>
                <span class="detail-value">${history.jobDescription || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Required Skills</span>
                <span class="detail-value">${Array.isArray(history.requiredSkills) ? history.requiredSkills.join(', ') : history.requiredSkills || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location</span>
                <span class="detail-value">${history.jobLocation || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Work Time</span>
                <span class="detail-value">${history.workTime || 0} hours</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Tools Provided</span>
                <span class="detail-value">${history.toolsAvailable ? 'Yes' : 'No'}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Payment & Rating</h3>
            <div class="detail-row">
                <span class="detail-label">Payment</span>
                <span class="detail-value" style="color: #01A060; font-size: 20px;">₹${history.payment}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Rating</span>
                <span class="detail-value">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        ${starsHTML}
                        <span style="font-weight: 600; margin-left: 10px;">${history.rating}/5</span>
                    </div>
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Feedback</span>
                <span class="detail-value">${history.feedback || 'No feedback provided'}</span>
            </div>
        </div>
    `;
    
    openModal(DOM.workHistoryModal);
}

// ============================================
// Utility Functions
// ============================================
function showNotification(message, type = 'success') {
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
// AI Assistant Access Controller - FIXED BUG
// ============================================
// ============================================
// AI Assistant Access Controller - FIXED: Centralized routing
// ============================================
function handleAIAccess(source) {
    // Source can be: 'dashboard', 'sidebar', 'quick-links', 'modal', 'other'
    console.log(`AI Access from: ${source}`);
    
    // RULE 1: Open as FULL PAGE when from:
    // - Dashboard Quick Actions (source: 'dashboard')
    // - Sidebar menu (source: 'sidebar')
    if (source === 'dashboard' || source === 'sidebar') {
        // Open AI Assistant as full page
        setActiveSection('ai-assistant');
        // Ensure global navigation strip is shown for AI Assistant page
        DOM.globalNavStrip.classList.add('active');
        return;
    }
    
    // RULE 2: Open as MODAL when from:
    // - Quick Links (source: 'quick-links')
    // - Any other non-dashboard/sidebar context
    if (source === 'quick-links' || source === 'modal' || source === 'other') {
        // Open AI Assistant as modal
        openModal(DOM.aiAssistantModal);
        return;
    }
    
    // Default fallback: open as modal
    openModal(DOM.aiAssistantModal);
}

// ============================================
// Setup Nested Filter Event Listeners
// ============================================
function setupFilterEventListeners() {
    // Parent filter buttons for accepted workers
    const parentFilterBtns = document.querySelectorAll('.filter-parent-btn[data-filter-type]');
    parentFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filterType = btn.dataset.filterType;
            const isHistory = btn.closest('#work-history') !== null;
            
            // Close other open filters
            closeAllFilterOptions(isHistory);
            
            // Toggle current filter
            if (isHistory) {
                state.historyFilters.activeFilterType = 
                    state.historyFilters.activeFilterType === filterType ? null : filterType;
            } else {
                state.filters.activeFilterType = 
                    state.filters.activeFilterType === filterType ? null : filterType;
            }
            
            updateFilterUI();
        });
    });
    
    // Nested filter buttons
    const nestedBtns = document.querySelectorAll('.filter-nested-btn[data-sort]');
    nestedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const sortValue = btn.dataset.sort;
            const isHistory = btn.closest('#work-history') !== null;
            const filterGroup = btn.closest('.filter-group');
            const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
            
            // Set active sort for this filter type
            if (isHistory) {
                state.historyFilters.activeSorts[filterType] = sortValue;
            } else {
                state.filters.activeSorts[filterType] = sortValue;
            }
            
            // Close filter options
            if (isHistory) {
                state.historyFilters.activeFilterType = null;
            } else {
                state.filters.activeFilterType = null;
            }
            
            updateFilterUI();
            
            // Apply filters immediately
            if (isHistory) {
                renderWorkHistory();
            } else {
                renderAcceptedWorkers();
            }
        });
    });
    
    // Clear all filters
    const clearAllFiltersBtn = document.getElementById('clearAllFilters');
    if (clearAllFiltersBtn) {
        clearAllFiltersBtn.addEventListener('click', () => {
            state.filters = {
                search: '',
                activeSorts: {},
                activeFilterType: null
            };
            DOM.workerSearch.value = '';
            updateFilterUI();
            renderAcceptedWorkers();
        });
    }
    
    const clearHistoryFiltersBtn = document.getElementById('clearHistoryFilters');
    if (clearHistoryFiltersBtn) {
        clearHistoryFiltersBtn.addEventListener('click', () => {
            state.historyFilters = {
                search: '',
                activeSorts: {},
                activeFilterType: null
            };
            DOM.historySearch.value = '';
            updateFilterUI();
            renderWorkHistory();
        });
    }
    
    // Close filters when clicking outside
    document.addEventListener('click', () => {
        state.filters.activeFilterType = null;
        state.historyFilters.activeFilterType = null;
        updateFilterUI();
    });
}

// ============================================
// Filter UI Management
// ============================================
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
    
    // Update nested button active states for accepted workers
    const nestedBtns = document.querySelectorAll('#accepted-workers .filter-nested-btn');
    nestedBtns.forEach(btn => {
        const sortValue = btn.dataset.sort;
        const filterGroup = btn.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        
        btn.classList.toggle('active', state.filters.activeSorts[filterType] === sortValue);
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
    
    // Update nested button active states for work history
    const historyNestedBtns = document.querySelectorAll('#work-history .filter-nested-btn');
    historyNestedBtns.forEach(btn => {
        const sortValue = btn.dataset.sort;
        const filterGroup = btn.closest('.filter-group');
        const filterType = filterGroup.querySelector('.filter-parent-btn').dataset.filterType;
        
        btn.classList.toggle('active', state.historyFilters.activeSorts[filterType] === sortValue);
    });
}

// ============================================
// Logout Function
// ============================================
function handleLogout() {
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        // In a real app, redirect to login page
        // window.location.href = 'login.html';
        console.log('Redirecting to login page...');
    }, 1500);
}

// ============================================
// Initialize the application
// ============================================
document.addEventListener('DOMContentLoaded', init);

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
`;
document.head.appendChild(style);