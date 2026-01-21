
/**
 * EMPLOYER HOME PAGE - COMPLETE VERSION
 * All three sections: Welcome Dashboard, Accepted Workers, Job Posting Form
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Settings Elements (INSIDE SIDEBAR)
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Sidebar Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const logoutBtn = document.getElementById('logoutBtn');
const profileEditBtn = document.getElementById('profileEditBtn');
const logoContainer = document.getElementById('logoContainer');

// Profile Elements
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');

// Welcome Dashboard Elements
const employerNameDisplay = document.getElementById('employerNameDisplay');
const workersHiredValue = document.getElementById('workersHiredValue');
const jobsPostedValue = document.getElementById('jobsPostedValue');
const ratingValue = document.getElementById('ratingValue');
const ratingStars = document.getElementById('ratingStars');

// Notification Wrapper
const notificationWrapper = document.getElementById('notificationWrapper');

// Accepted Workers Section Elements
const acceptedWorkersSection = document.getElementById('acceptedWorkersSection');
const emptyStateContainer = document.getElementById('emptyStateContainer');
const filtersSearchContainer = document.getElementById('filtersSearchContainer');
const jobTablesContainer = document.getElementById('jobTablesContainer');
const paginationContainer = document.getElementById('paginationContainer');
const postJobFloatBtn = document.getElementById('postJobFloatBtn');
const workerSearch = document.getElementById('workerSearch');

// Filter Elements
const filterBtns = document.querySelectorAll('.filter-btn');
const filterDropdown = document.getElementById('filterDropdown');
const filterOptions = document.getElementById('filterOptions');

// Pagination Elements
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageIndicators = document.getElementById('pageIndicators');

// Popup Elements
const assignmentPopup = document.getElementById('assignmentPopup');
const closeAssignmentPopupBtn = document.getElementById('closeAssignmentPopupBtn');
const assignmentCountdown = document.getElementById('assignmentCountdown');
const assignmentTimerDisplay = document.getElementById('assignmentTimerDisplay');
const assignmentWorkerPhoto = document.getElementById('assignmentWorkerPhoto');
const assignmentWorkerName = document.getElementById('assignmentWorkerName');
const assignmentRatingStars = document.getElementById('assignmentRatingStars');
const assignmentRatingValue = document.getElementById('assignmentRatingValue');
const assignmentOccupation = document.getElementById('assignmentOccupation');
const assignmentJobTitle = document.getElementById('assignmentJobTitle');
const assignmentAskAmount = document.getElementById('assignmentAskAmount');
const assignmentDistance = document.getElementById('assignmentDistance');
const assignmentTermsCheckbox = document.getElementById('assignmentTermsCheckbox');
const visitProfileBtn = document.getElementById('visitProfileBtn');

// Job Posting Popup Elements
const jobPostingPopup = document.getElementById('jobPostingPopup');
const closeJobPopupBtn = document.getElementById('closeJobPopupBtn');
const jobPostingForm = document.getElementById('jobPostingForm');
const employerNameInput = document.getElementById('employerName');
const addressOptions = document.querySelectorAll('.address-option');
const digipinContainer = document.getElementById('digipinContainer');
const digipinInput = document.getElementById('digipinInput');
const workTypeInput = document.getElementById('workType');
const jobDescriptionInput = document.getElementById('jobDescription');
const budgetInput = document.getElementById('budget');
const toolsOptions = document.querySelectorAll('.tools-option');
const urgencyOptions = document.querySelectorAll('.urgency-option');
const additionalRequirementsInput = document.getElementById('additionalRequirements');
const submitJobBtn = document.getElementById('submitJobBtn');

// Rating Popup Elements
const ratingPopup = document.getElementById('ratingPopup');
const closeRatingPopupBtn = document.getElementById('closeRatingPopupBtn');
const ratingWorkerPhoto = document.getElementById('ratingWorkerPhoto');
const ratingWorkerName = document.getElementById('ratingWorkerName');
const ratingWorkerJob = document.getElementById('ratingWorkerJob');
const starsRating = document.getElementById('starsRating');
const ratingSelectedValue = document.getElementById('ratingSelectedValue');
const ratingFeedback = document.getElementById('ratingFeedback');
const submitRatingBtn = document.getElementById('submitRatingBtn');

// ============================================
// STATE VARIABLES
// ============================================

let currentLanguage = 'en';
let currentTheme = 'light';

// Data State
let employerData = {
    name: 'Employer',
    email: 'employer@example.com',
    stats: {
        workersHired: 0,
        jobsPosted: 0,
        averageRating: 0
    }
};

// Jobs and Workers State
let jobs = [];
let assignedWorkers = [];
let currentFilter = 'time';
let currentFilterValue = 'first_to_last';
let currentSearchQuery = '';
let currentPage = 1;
const workersPerPage = 8;

// Assignment Popup State
let assignmentPopupCountdown = 10;
let assignmentPopupTimer = null;
let currentAssigningWorker = null;
let currentAssigningJob = null;

// Rating Popup State
let currentRating = 0;
let currentRatingWorker = null;
let currentRatingAssignment = null;

// ============================================
// TRANSLATIONS (English, Hindi, Marathi)
// ============================================

const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'help': 'Help',
        'about': 'About',
        
        // Sidebar
        'menu': 'Menu',
        'settings': 'Settings',
        'help_contact': 'Help & Contact',
        'about_us': 'About Us',
        'terms_conditions': 'Terms & Conditions',
        'privacy_policy': 'Privacy Policy',
        'logout': 'Logout',
        'edit_profile': 'Edit Profile',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Notifications
        'logout_success': 'Logged out',
        'logout_message': 'You have been logged out successfully. Redirecting to login...',
        
        // Welcome Dashboard
        'welcome': 'Welcome',
        'welcome_slogan': 'Find Perfect Worker According to your location, budget, timings and requirements',
        'workers_hired': 'Workers Hired',
        'jobs_posted': 'Jobs Posted',
        'avg_rating': 'Average Rating',
        'till_now': 'Till Now',
        'given_to_workers': 'Given to Workers',
        
        // Accepted Workers Section
        'accepted_workers': 'Accepted Workers',
        'post_job': 'Post Job',
        'name': 'Name',
        'acceptance_time': 'Acceptance Time',
        'distance': 'Distance',
        'rating': 'Rating',
        'price': 'Price',
        'profession': 'Profession',
        'search_placeholder': 'Search by name',
        'previous': 'Previous',
        'next': 'Next',
        
        // Filter Options
        'a_to_z': 'A to Z',
        'z_to_a': 'Z to A',
        'first_to_last': 'First to Last',
        'last_to_first': 'Last to First',
        'near_to_far': 'Near to Far',
        'far_to_near': 'Far to Near',
        'high_to_low': 'High to Low',
        'low_to_high': 'Low to High',
        'low_to_high_price': 'Low to High',
        'high_to_low_price': 'High to Low',
        
        // Table Headers
        'worker_name': 'Worker Name',
        'ask_amount': 'Ask Amount',
        'avg_rating': 'Average Rating',
        'profession': 'Profession',
        'distance_km': 'Distance (km)',
        'actions': 'Actions',
        
        // Empty States
        'no_jobs_posted': 'No Jobs Posted Yet',
        'fill_form_message': 'Fill Out Below Form 👇 To Hire Worker for your work',
        'post_job_button': 'Post a Job',
        'no_workers_accepted': 'No Worker Yet Accepted Your Job',
        'workers_will_appear': 'Workers will appear here once they accept your job offers',
        'filters_available': 'Filters and search will be available when workers accept jobs',
        
        // Work Status
        'work_in_progress': 'Work in Progress',
        'work_completed': 'Work Completed',
        
        // Assignment Popup
        'assign_worker': 'Assign Worker',
        'close': 'Close',
        'job_details': 'Job Details',
        'job_title': 'Job Title',
        'ask_amount': 'Ask Amount',
        'distance': 'Distance',
        'visit_profile': 'Visit Profile',
        'agree_terms': 'I agree to the Terms & Conditions',
        'timer_info': 'Close button enabled when timer ends',
        'timer': 'Timer',
        'seconds': 's remaining',
        
        // Rating Popup
        'rate_worker': 'Rate Worker',
        'rate_instruction': 'Please rate the worker\'s performance for this job',
        'additional_feedback': 'Additional Feedback (Optional)',
        'submit_rating': 'Submit Rating',
        
        // Job Posting Form
        'post_new_job': 'Post New Job',
        'employer_name': 'Employer Name',
        'choose_address': 'Choose Address',
        'home_address': 'Home Address',
        'other_address': 'Other Address (DIGIPIN)',
        'work_type': 'Type of Work',
        'job_description': 'Job Description',
        'budget_amount': 'Budget Amount (₹)',
        'tools_available': 'Tools Available',
        'tools_yes': 'Yes, I have tools',
        'tools_no': 'No, worker should bring',
        'urgency_level': 'Urgency Level',
        'urgency_low': 'Low (Within 1 week)',
        'urgency_medium': 'Medium (Within 3 days)',
        'urgency_high': 'High (Within 24 hours)',
        'additional_req': 'Additional Requirements',
        
        // Notifications
        'job_posted_success': 'Job Posted Successfully',
        'job_posted_message': 'Your job has been posted successfully. Workers can now view and accept it.',
        'worker_assigned': 'Worker Assigned',
        'worker_assigned_message': 'Worker has been successfully assigned to the job.',
        'job_removed': 'Job Removed',
        'job_removed_message': 'The job posting has been removed successfully.',
        'work_completed': 'Work Completed',
        'work_completed_message': 'Work marked as completed. Please rate the worker.',
        'rating_submitted': 'Rating Submitted',
        'rating_submitted_message': 'Thank you for rating the worker. Your feedback has been recorded.'
    },
    hi: {
        // Hindi translations
        'home': 'होम',
        'help': 'सहायता',
        'about': 'के बारे में',
        
        'menu': 'मेनू',
        'settings': 'सेटिंग्स',
        'help_contact': 'सहायता और संपर्क',
        'about_us': 'हमारे बारे में',
        'terms_conditions': 'नियम और शर्तें',
        'privacy_policy': 'गोपनीयता नीति',
        'logout': 'लॉगआउट',
        'edit_profile': 'प्रोफाइल संपादित करें',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        'logout_success': 'लॉग आउट किया गया',
        'logout_message': 'आप सफलतापूर्वक लॉग आउट हो गए हैं। लॉगिन पृष्ठ पर पुनर्निर्देशित किया जा रहा है...',
        
        'welcome': 'स्वागत है',
        'welcome_slogan': 'अपने स्थान, बजट, समय और आवश्यकताओं के अनुसार सही कर्मचारी खोजें',
        'workers_hired': 'कर्मचारी किराए पर लिए',
        'jobs_posted': 'नौकरियां पोस्ट की गईं',
        'avg_rating': 'औसत रेटिंग',
        'till_now': 'अब तक',
        'given_to_workers': 'कर्मचारियों को दिया गया',
        
        'accepted_workers': 'स्वीकृत कर्मचारी',
        'post_job': 'नौकरी पोस्ट करें',
        'name': 'नाम',
        'acceptance_time': 'स्वीकृति समय',
        'distance': 'दूरी',
        'rating': 'रेटिंग',
        'price': 'मूल्य',
        'profession': 'पेशा',
        'search_placeholder': 'नाम से खोजें',
        'previous': 'पिछला',
        'next': 'अगला',
        
        'a_to_z': 'ए से जेड',
        'z_to_a': 'जेड से ए',
        'first_to_last': 'पहले से अंतिम',
        'last_to_first': 'अंतिम से पहले',
        'near_to_far': 'निकट से दूर',
        'far_to_near': 'दूर से निकट',
        'high_to_low': 'उच्च से निम्न',
        'low_to_high': 'निम्न से उच्च',
        'low_to_high_price': 'निम्न से उच्च',
        'high_to_low_price': 'उच्च से निम्न',
        
        'worker_name': 'कर्मचारी का नाम',
        'ask_amount': 'मांग राशि',
        'avg_rating': 'औसत रेटिंग',
        'profession': 'पेशा',
        'distance_km': 'दूरी (किमी)',
        'actions': 'कार्रवाई',
        
        'no_jobs_posted': 'अभी तक कोई नौकरी पोस्ट नहीं की गई',
        'fill_form_message': 'अपने काम के लिए कर्मचारी किराए पर लेने के लिए नीचे दिए गए फॉर्म को भरें 👇',
        'post_job_button': 'नौकरी पोस्ट करें',
        'no_workers_accepted': 'अभी तक कोई कर्मचारी ने आपकी नौकरी स्वीकार नहीं की है',
        'workers_will_appear': 'कर्मचारी आपकी नौकरी के प्रस्तावों को स्वीकार करने के बाद यहां दिखाई देंगे',
        'filters_available': 'कर्मचारियों द्वारा नौकरियों को स्वीकार करने के बाद फ़िल्टर और खोज उपलब्ध होंगे',
        
        'work_in_progress': 'काम प्रगति पर है',
        'work_completed': 'काम पूरा हुआ',
        
        'assign_worker': 'कर्मचारी नियुक्त करें',
        'close': 'बंद करें',
        'job_details': 'नौकरी विवरण',
        'job_title': 'नौकरी शीर्षक',
        'ask_amount': 'मांग राशि',
        'distance': 'दूरी',
        'visit_profile': 'प्रोफाइल देखें',
        'agree_terms': 'मैं नियम और शर्तों से सहमत हूं',
        'timer_info': 'टाइमर समाप्त होने पर बंद बटन सक्षम होगा',
        'timer': 'टाइमर',
        'seconds': 'सेकंड शेष',
        
        'rate_worker': 'कर्मचारी को रेट करें',
        'rate_instruction': 'कृपया इस नौकरी के लिए कर्मचारी के प्रदर्शन को रेट करें',
        'additional_feedback': 'अतिरिक्त फीडबैक (वैकल्पिक)',
        'submit_rating': 'रेटिंग सबमिट करें',
        
        'post_new_job': 'नई नौकरी पोस्ट करें',
        'employer_name': 'नियोक्ता का नाम',
        'choose_address': 'पता चुनें',
        'home_address': 'घर का पता',
        'other_address': 'अन्य पता (DIGIPIN)',
        'work_type': 'काम का प्रकार',
        'job_description': 'नौकरी विवरण',
        'budget_amount': 'बजट राशि (₹)',
        'tools_available': 'उपकरण उपलब्ध',
        'tools_yes': 'हां, मेरे पास उपकरण हैं',
        'tools_no': 'नहीं, कर्मचारी को लाना चाहिए',
        'urgency_level': 'तात्कालिकता स्तर',
        'urgency_low': 'कम (1 सप्ताह के भीतर)',
        'urgency_medium': 'मध्यम (3 दिनों के भीतर)',
        'urgency_high': 'उच्च (24 घंटों के भीतर)',
        'additional_req': 'अतिरिक्त आवश्यकताएं',
        
        'job_posted_success': 'नौकरी सफलतापूर्वक पोस्ट की गई',
        'job_posted_message': 'आपकी नौकरी सफलतापूर्वक पोस्ट कर दी गई है। कर्मचारी अब इसे देख और स्वीकार कर सकते हैं।',
        'worker_assigned': 'कर्मचारी नियुक्त किया गया',
        'worker_assigned_message': 'कर्मचारी को नौकरी के लिए सफलतापूर्वक नियुक्त किया गया है।',
        'job_removed': 'नौकरी हटाई गई',
        'job_removed_message': 'नौकरी पोस्टिंग सफलतापूर्वक हटा दी गई है।',
        'work_completed': 'काम पूरा हुआ',
        'work_completed_message': 'काम पूरा के रूप में चिह्नित किया गया। कृपया कर्मचारी को रेट करें।',
        'rating_submitted': 'रेटिंग सबमिट की गई',
        'rating_submitted_message': 'कर्मचारी को रेट करने के लिए धन्यवाद। आपकी प्रतिक्रिया दर्ज की गई है।'
    },
    mr: {
        // Marathi translations
        'home': 'होम',
        'help': 'मदत',
        'about': 'विषयी',
        
        'menu': 'मेनू',
        'settings': 'सेटिंग्ज',
        'help_contact': 'मदत आणि संपर्क',
        'about_us': 'आमच्याबद्दल',
        'terms_conditions': 'अटी आणि नियम',
        'privacy_policy': 'गोपनीयता धोरण',
        'logout': 'लॉगआउट',
        'edit_profile': 'प्रोफाइल संपादित करा',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'लाइट',
        'dark': 'डार्क',
        'system': 'सिस्टम',
        
        'logout_success': 'लॉग आउट केले',
        'logout_message': 'तुम्ही यशस्वीरित्या लॉग आउट झाले आहात. लॉगिन पृष्ठावर पुनर्निर्देशित केले जात आहे...',
        
        'welcome': 'स्वागत आहे',
        'welcome_slogan': 'तुमच्या स्थान, बजेट, वेळ आणि गरजांनुसार परिपूर्ण कामगार शोधा',
        'workers_hired': 'कामगार भाड्याने घेतले',
        'jobs_posted': 'नोकऱ्या पोस्ट केल्या',
        'avg_rating': 'सरासरी रेटिंग',
        'till_now': 'आतापर्यंत',
        'given_to_workers': 'कामगारांना दिले',
        
        'accepted_workers': 'स्वीकारलेले कामगार',
        'post_job': 'नोकरी पोस्ट करा',
        'name': 'नाव',
        'acceptance_time': 'स्वीकृती वेळ',
        'distance': 'अंतर',
        'rating': 'रेटिंग',
        'price': 'किंमत',
        'profession': 'व्यवसाय',
        'search_placeholder': 'नावाने शोधा',
        'previous': 'मागील',
        'next': 'पुढील',
        
        'a_to_z': 'अ ते ज',
        'z_to_a': 'ज ते अ',
        'first_to_last': 'पहिले ते शेवटचे',
        'last_to_first': 'शेवटचे ते पहिले',
        'near_to_far': 'जवळचे ते दूरचे',
        'far_to_near': 'दूरचे ते जवळचे',
        'high_to_low': 'उच्च ते कमी',
        'low_to_high': 'कमी ते उच्च',
        'low_to_high_price': 'कमी ते उच्च',
        'high_to_low_price': 'उच्च ते कमी',
        
        'worker_name': 'कामगाराचे नाव',
        'ask_amount': 'मागणी रक्कम',
        'avg_rating': 'सरासरी रेटिंग',
        'profession': 'व्यवसाय',
        'distance_km': 'अंतर (किमी)',
        'actions': 'क्रिया',
        
        'no_jobs_posted': 'अद्याप कोणतीही नोकरी पोस्ट केली नाही',
        'fill_form_message': 'तुमच्या कामासाठी कामगार भाड्याने घेण्यासाठी खालील फॉर्म भरा 👇',
        'post_job_button': 'नोकरी पोस्ट करा',
        'no_workers_accepted': 'अद्याप कोणत्याही कामगाराने तुमची नोकरी स्वीकारली नाही',
        'workers_will_appear': 'कामगार तुमची नोकरी ऑफर स्वीकारल्यानंतर येथे दिसतील',
        'filters_available': 'कामगार नोकऱ्या स्वीकारल्यानंतर फिल्टर आणि शोध उपलब्ध होतील',
        
        'work_in_progress': 'काम प्रगतीपथावर आहे',
        'work_completed': 'काम पूर्ण झाले',
        
        'assign_worker': 'कामगार नियुक्त करा',
        'close': 'बंद करा',
        'job_details': 'नोकरी तपशील',
        'job_title': 'नोकरी शीर्षक',
        'ask_amount': 'मागणी रक्कम',
        'distance': 'अंतर',
        'visit_profile': 'प्रोफाइल पाहा',
        'agree_terms': 'मी अटी आणि नियमांशी सहमत आहे',
        'timer_info': 'टाइमर संपल्यावर बंद बटण सक्षम होईल',
        'timer': 'टाइमर',
        'seconds': 'सेकंद शिल्लक',
        
        'rate_worker': 'कामगाराला रेट करा',
        'rate_instruction': 'कृपया या नोकरीसाठी कामगाराच्या कामगिरीचे मूल्यांकन करा',
        'additional_feedback': 'अतिरिक्त अभिप्राय (पर्यायी)',
        'submit_rating': 'रेटिंग सबमिट करा',
        
        'post_new_job': 'नवीन नोकरी पोस्ट करा',
        'employer_name': 'नियोक्त्याचे नाव',
        'choose_address': 'पत्ता निवडा',
        'home_address': 'घराचा पत्ता',
        'other_address': 'इतर पत्ता (DIGIPIN)',
        'work_type': 'कामाचा प्रकार',
        'job_description': 'नोकरी वर्णन',
        'budget_amount': 'बजेट रक्कम (₹)',
        'tools_available': 'साधने उपलब्ध',
        'tools_yes': 'होय, माझ्याकडे साधने आहेत',
        'tools_no': 'नाही, कामगाराने आणावीत',
        'urgency_level': 'गरजेची पातळी',
        'urgency_low': 'कमी (1 आठवड्यात)',
        'urgency_medium': 'मध्यम (3 दिवसात)',
        'urgency_high': 'उच्च (24 तासात)',
        'additional_req': 'अतिरिक्त आवश्यकता',
        
        'job_posted_success': 'नोकरी यशस्वीरित्या पोस्ट केली',
        'job_posted_message': 'तुमची नोकरी यशस्वीरित्या पोस्ट केली गेली आहे. कामगार आता ते पाहू आणि स्वीकारू शकतात.',
        'worker_assigned': 'कामगार नियुक्त केला',
        'worker_assigned_message': 'कामगार यशस्वीरित्या नोकरीसाठी नियुक्त केला गेला आहे.',
        'job_removed': 'नोकरी काढून टाकली',
        'job_removed_message': 'नोकरी पोस्टिंग यशस्वीरित्या काढून टाकली गेली आहे.',
        'work_completed': 'काम पूर्ण झाले',
        'work_completed_message': 'काम पूर्ण म्हणून चिन्हांकित केले. कृपया कामगाराला रेट करा.',
        'rating_submitted': 'रेटिंग सबमिट केली',
        'rating_submitted_message': 'कामगाराला रेट करण्याबद्दल धन्यवाद. तुमचा अभिप्राय नोंदवला गेला आहे.'
    }
};

// Filter options for each filter type
const filterOptionsData = {
    name: [
        { value: 'a_to_z', label: 'a_to_z' },
        { value: 'z_to_a', label: 'z_to_a' }
    ],
    time: [
        { value: 'first_to_last', label: 'first_to_last' },
        { value: 'last_to_first', label: 'last_to_first' }
    ],
    distance: [
        { value: 'near_to_far', label: 'near_to_far' },
        { value: 'far_to_near', label: 'far_to_near' }
    ],
    rating: [
        { value: 'high_to_low', label: 'high_to_low' },
        { value: 'low_to_high', label: 'low_to_high' }
    ],
    price: [
        { value: 'low_to_high_price', label: 'low_to_high_price' },
        { value: 'high_to_low_price', label: 'high_to_low_price' }
    ],
    profession: [
        { value: 'a_to_z', label: 'a_to_z' },
        { value: 'z_to_a', label: 'z_to_a' }
    ]
};

// ============================================
// DUMMY DATA FOR DEMONSTRATION
// ============================================

// Sample jobs data
const sampleJobs = [
    {
        id: 1,
        title: 'Plumber Needed for Bathroom Repair',
        description: 'Need a plumber to fix leaking pipes in bathroom',
        postedDate: '2024-01-15',
        budget: 1500,
        toolsAvailable: true,
        urgency: 'medium',
        workersAccepted: [
            {
                id: 101,
                name: 'Rajesh Kumar',
                profession: 'Plumber',
                askAmount: 1200,
                rating: 4.5,
                distance: 2.5,
                photo: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-16 10:30:00'
            },
            {
                id: 102,
                name: 'Sanjay Patel',
                profession: 'Plumber',
                askAmount: 1400,
                rating: 4.2,
                distance: 3.2,
                photo: 'https://ui-avatars.com/api/?name=Sanjay+Patel&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-16 11:15:00'
            },
            {
                id: 103,
                name: 'Amit Sharma',
                profession: 'Plumber',
                askAmount: 1100,
                rating: 4.7,
                distance: 5.1,
                photo: 'https://ui-avatars.com/api/?name=Amit+Sharma&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-16 09:45:00'
            }
        ]
    },
    {
        id: 2,
        title: 'Electrician for Wiring Work',
        description: 'Complete house wiring for new construction',
        postedDate: '2024-01-10',
        budget: 5000,
        toolsAvailable: false,
        urgency: 'high',
        workersAccepted: [
            {
                id: 201,
                name: 'Vikram Singh',
                profession: 'Electrician',
                askAmount: 4500,
                rating: 4.8,
                distance: 1.8,
                photo: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-11 14:20:00'
            },
            {
                id: 202,
                name: 'Ramesh Gupta',
                profession: 'Electrician',
                askAmount: 4800,
                rating: 4.3,
                distance: 4.3,
                photo: 'https://ui-avatars.com/api/?name=Ramesh+Gupta&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-12 10:10:00'
            }
        ]
    },
    {
        id: 3,
        title: 'Carpenter for Furniture Making',
        description: 'Custom wooden furniture for living room',
        postedDate: '2024-01-18',
        budget: 8000,
        toolsAvailable: true,
        urgency: 'low',
        workersAccepted: [
            {
                id: 301,
                name: 'Mohan Das',
                profession: 'Carpenter',
                askAmount: 7500,
                rating: 4.6,
                distance: 6.2,
                photo: 'https://ui-avatars.com/api/?name=Mohan+Das&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-19 16:45:00'
            },
            {
                id: 302,
                name: 'Suresh Nair',
                profession: 'Carpenter',
                askAmount: 8200,
                rating: 4.4,
                distance: 3.8,
                photo: 'https://ui-avatars.com/api/?name=Suresh+Nair&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-19 17:30:00'
            },
            {
                id: 303,
                name: 'Prakash Reddy',
                profession: 'Carpenter',
                askAmount: 7800,
                rating: 4.9,
                distance: 7.1,
                photo: 'https://ui-avatars.com/api/?name=Prakash+Reddy&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-20 09:15:00'
            },
            {
                id: 304,
                name: 'Anil Kumar',
                profession: 'Carpenter',
                askAmount: 7200,
                rating: 4.1,
                distance: 2.9,
                photo: 'https://ui-avatars.com/api/?name=Anil+Kumar&background=01A060&color=fff&size=100',
                acceptedTime: '2024-01-20 11:45:00'
            }
        ]
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Show notification with proper styling
 */
function showNotification(title, message, type = 'info', duration = 5000) {
    if (!notificationWrapper) return null;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    const notificationId = 'notification-' + Date.now();
    notification.id = notificationId;
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close" aria-label="Close notification" data-notification-id="${notificationId}">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notificationWrapper.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notificationId);
    });
    
    if (duration > 0) {
        setTimeout(() => {
            if (document.getElementById(notificationId)) {
                closeNotification(notificationId);
            }
        }, duration);
    }
    
    return notificationId;
}

/**
 * Close a specific notification
 */
function closeNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

/**
 * Format date to readable string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'en' ? 'en-IN' : currentLanguage, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

/**
 * Format currency (Indian Rupees)
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// ============================================
// WELCOME DASHBOARD FUNCTIONS
// ============================================

/**
 * Load and display employer statistics
 */
function loadEmployerStatistics() {
    // Load from localStorage or calculate from data
    const savedStats = JSON.parse(localStorage.getItem('employerStats'));
    if (savedStats) {
        employerData.stats = savedStats;
    } else {
        // Calculate from current data
        updateDashboardStats();
    }
    
    // Animate numbers counting up
    animateCountUp('workersHiredValue', employerData.stats.workersHired, 2000);
    animateCountUp('jobsPostedValue', employerData.stats.jobsPosted, 2000);
    updateRatingDisplay(employerData.stats.averageRating);
    
    // Display employer name
    const employerName = localStorage.getItem('employerName') || 'Employer';
    if (employerNameDisplay) {
        employerNameDisplay.textContent = employerName;
    }
}

/**
 * Animate number counting up
 */
function animateCountUp(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const startTime = performance.now();
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeOutQuad = progress => progress * (2 - progress);
        const currentValue = Math.floor(easeOutQuad(progress) * targetValue);
        
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCount);
}

/**
 * Update star rating display
 */
function updateRatingDisplay(rating) {
    const ratingElement = document.getElementById('ratingValue');
    const starsContainer = document.getElementById('ratingStars');
    
    if (!ratingElement || !starsContainer) return;
    
    // Animate rating value
    const targetRating = parseFloat(rating);
    const startValue = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function updateRatingAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeOutQuad = progress => progress * (2 - progress);
        const currentValue = parseFloat((easeOutQuad(progress) * targetRating).toFixed(1));
        
        ratingElement.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateRatingAnimation);
        } else {
            ratingElement.textContent = targetRating.toFixed(1);
        }
    }
    
    requestAnimationFrame(updateRatingAnimation);
    
    // Clear previous stars
    starsContainer.innerHTML = '';
    
    // Create stars (5 total)
    const fullStars = Math.floor(targetRating);
    const partialStar = targetRating % 1;
    const totalStars = 5;
    
    for (let i = 1; i <= totalStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        if (i <= fullStars) {
            star.classList.add('filled');
        } else if (i === fullStars + 1 && partialStar > 0) {
            star.classList.add('partial');
            const fillPercentage = partialStar * 100;
            star.style.setProperty('--fill-percentage', `${fillPercentage}%`);
        }
        
        star.textContent = '★';
        starsContainer.appendChild(star);
        
        star.style.animation = `starPop 0.5s ease-out ${i * 0.1}s both`;
    }
}

/**
 * Create stars for rating display
 */
function createStars(rating, container, size = 'small') {
    container.innerHTML = '';
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    const totalStars = 5;
    
    for (let i = 1; i <= totalStars; i++) {
        const star = document.createElement('div');
        star.className = size === 'small' ? 'rating-star' : 'star';
        
        if (i <= fullStars) {
            star.classList.add('filled');
        } else if (i === fullStars + 1 && partialStar > 0) {
            star.classList.add('partial');
            const fillPercentage = partialStar * 100;
            star.style.setProperty('--fill-percentage', `${fillPercentage}%`);
        }
        
        star.textContent = '★';
        container.appendChild(star);
    }
}

// ============================================
// ACCEPTED WORKERS SECTION FUNCTIONS
// ============================================

/**
 * Load jobs and workers data
 */
function loadJobsData() {
    // Load from localStorage or use sample data
    const savedJobs = JSON.parse(localStorage.getItem('employerJobs'));
    const savedAssigned = JSON.parse(localStorage.getItem('assignedWorkers'));
    
    jobs = savedJobs || sampleJobs;
    assignedWorkers = savedAssigned || [];
    
    updateDashboardStats();
    renderAcceptedWorkersSection();
}

/**
 * Update dashboard statistics
 */
function updateDashboardStats() {
    // Update stats based on current data
    employerData.stats.jobsPosted = jobs.length;
    employerData.stats.workersHired = assignedWorkers.length;
    
    // Calculate average rating
    let totalRating = 0;
    let ratingCount = 0;
    
    assignedWorkers.forEach(assignment => {
        totalRating += assignment.worker.rating;
        ratingCount++;
    });
    
    jobs.forEach(job => {
        if (job.assignedWorker) {
            totalRating += job.assignedWorker.rating;
            ratingCount++;
        }
    });
    
    employerData.stats.averageRating = ratingCount > 0 ? parseFloat((totalRating / ratingCount).toFixed(1)) : 0;
    
    // Save to localStorage
    localStorage.setItem('employerStats', JSON.stringify(employerData.stats));
    localStorage.setItem('employerJobs', JSON.stringify(jobs));
    localStorage.setItem('assignedWorkers', JSON.stringify(assignedWorkers));
    
    // Update displayed stats
    document.getElementById('workersHiredValue').textContent = employerData.stats.workersHired;
    document.getElementById('jobsPostedValue').textContent = employerData.stats.jobsPosted;
    updateRatingDisplay(employerData.stats.averageRating);
}

/**
 * Render accepted workers section based on current state
 */
function renderAcceptedWorkersSection() {
    // Clear existing content
    emptyStateContainer.innerHTML = '';
    jobTablesContainer.innerHTML = '';
    
    // Check if there are any jobs
    if (jobs.length === 0) {
        showNoJobsEmptyState();
        filtersSearchContainer.style.display = 'none';
        paginationContainer.style.display = 'none';
        return;
    }
    
    // Check if any job has accepted workers or assigned workers
    const hasAcceptedWorkers = jobs.some(job => job.workersAccepted && job.workersAccepted.length > 0);
    const hasAssignedWorkers = assignedWorkers.length > 0;
    
    if (!hasAcceptedWorkers && !hasAssignedWorkers) {
        showNoWorkersEmptyState();
        filtersSearchContainer.style.display = 'none';
        paginationContainer.style.display = 'none';
        return;
    }
    
    // Show filters and pagination
    filtersSearchContainer.style.display = 'block';
    paginationContainer.style.display = 'flex';
    
    // Render assigned workers cards first
    renderAssignedWorkers();
    
    // Render job tables if there are workers to show
    renderJobTables();
    
    // Update pagination
    updatePagination();
}

/**
 * Show empty state when no jobs are posted
 */
function showNoJobsEmptyState() {
    const t = translations[currentLanguage];
    
    emptyStateContainer.innerHTML = `
        <div class="empty-state-icon">
            <i class="fas fa-clipboard-list"></i>
        </div>
        <h2 class="empty-state-title">${t.no_jobs_posted}</h2>
        <p class="empty-state-message">${t.fill_form_message}</p>
        <button class="empty-state-action" id="postJobFromEmptyState">
            <i class="fas fa-plus"></i>
            <span>${t.post_job_button}</span>
        </button>
    `;
    
    // Add event listener to the button
    document.getElementById('postJobFromEmptyState').addEventListener('click', () => {
        openJobPostingPopup();
    });
}

/**
 * Show empty state when jobs exist but no workers have accepted
 */
function showNoWorkersEmptyState() {
    const t = translations[currentLanguage];
    
    emptyStateContainer.innerHTML = `
        <div class="empty-state-icon">
            <i class="fas fa-users"></i>
        </div>
        <h2 class="empty-state-title">${t.no_workers_accepted}</h2>
        <p class="empty-state-message">${t.workers_will_appear}</p>
        <p class="empty-state-info">${t.filters_available}</p>
    `;
}

/**
 * Render assigned workers cards
 */
function renderAssignedWorkers() {
    if (assignedWorkers.length === 0) return;
    
    const t = translations[currentLanguage];
    
    assignedWorkers.forEach((assignment, index) => {
        const assignedCard = document.createElement('div');
        assignedCard.className = 'assigned-worker-card';
        assignedCard.dataset.assignmentIndex = index;
        
        assignedCard.innerHTML = `
            <div class="assigned-worker-photo">
                <img src="${assignment.worker.photo}" alt="${assignment.worker.name}">
            </div>
            <div class="assigned-worker-details">
                <h3 class="assigned-worker-name">${assignment.worker.name}</h3>
                <p class="assigned-worker-profession">${assignment.worker.profession}</p>
                <div class="assigned-worker-info">
                    <div class="info-item">
                        <i class="fas fa-star"></i>
                        <span>${assignment.worker.rating}/5</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-rupee-sign"></i>
                        <span>${formatCurrency(assignment.worker.askAmount)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${assignment.worker.distance} km</span>
                    </div>
                </div>
                
                <!-- Work Status Buttons -->
                <div class="work-status-container">
                    <button class="work-status-btn in-progress ${!assignment.completed ? 'active' : ''}" 
                            data-status="in-progress" 
                            data-assignment-index="${index}">
                        <i class="fas fa-spinner"></i>
                        <span>${t.work_in_progress}</span>
                    </button>
                    <button class="work-status-btn completed ${assignment.completed ? 'active' : ''}" 
                            data-status="completed" 
                            data-assignment-index="${index}">
                        <i class="fas fa-check-circle"></i>
                        <span>${t.work_completed}</span>
                    </button>
                </div>
                
                <div class="assigned-job-details">
                    <h4 class="assigned-job-title">${assignment.job.title}</h4>
                    <div class="assigned-job-meta">
                        <span><i class="fas fa-calendar"></i> Assigned on: ${formatDate(assignment.assignedDate)}</span>
                        <span><i class="fas fa-clock"></i> Budget: ${formatCurrency(assignment.job.budget)}</span>
                    </div>
                </div>
            </div>
        `;
        
        jobTablesContainer.appendChild(assignedCard);
        
        // Add event listeners for work status buttons
        setTimeout(() => {
            const inProgressBtn = assignedCard.querySelector('.work-status-btn.in-progress');
            const completedBtn = assignedCard.querySelector('.work-status-btn.completed');
            
            inProgressBtn.addEventListener('click', () => handleWorkStatusChange(index, 'in-progress'));
            completedBtn.addEventListener('click', () => handleWorkStatusChange(index, 'completed'));
        }, 100);
    });
}

/**
 * Render job tables for jobs with accepted workers
 */
function renderJobTables() {
    const t = translations[currentLanguage];
    
    // Filter jobs that have accepted workers and are not assigned
    const jobsWithWorkers = jobs.filter(job => 
        job.workersAccepted && 
        job.workersAccepted.length > 0 && 
        !job.assignedWorker
    );
    
    if (jobsWithWorkers.length === 0) return;
    
    jobsWithWorkers.forEach(job => {
        // Get workers for this job (filtered and sorted)
        let workers = [...job.workersAccepted];
        
        // Apply search filter
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            workers = workers.filter(worker => 
                worker.name.toLowerCase().includes(query) ||
                worker.profession.toLowerCase().includes(query)
            );
        }
        
        // Apply sorting
        workers = sortWorkers(workers, currentFilter, currentFilterValue);
        
        // Apply pagination
        const startIndex = (currentPage - 1) * workersPerPage;
        const endIndex = startIndex + workersPerPage;
        const paginatedWorkers = workers.slice(startIndex, endIndex);
        
        // If no workers after filtering, skip this job table
        if (paginatedWorkers.length === 0 && currentPage === 1) return;
        
        // Create job table
        const jobTable = document.createElement('div');
        jobTable.className = 'job-table';
        jobTable.dataset.jobId = job.id;
        
        let tableContent = '';
        
        if (paginatedWorkers.length > 0) {
            tableContent = `
                <div class="job-table-header">
                    <h3 class="job-table-title">
                        <i class="fas fa-briefcase"></i>
                        ${job.title}
                    </h3>
                </div>
                <div class="job-table-content">
                    <table class="workers-table">
                        <thead>
                            <tr>
                                <th>${t.worker_name}</th>
                                <th>${t.ask_amount}</th>
                                <th>${t.avg_rating}</th>
                                <th>${t.profession}</th>
                                <th>${t.distance_km}</th>
                                <th>${t.actions}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${paginatedWorkers.map(worker => `
                                <tr data-worker-id="${worker.id}" data-job-id="${job.id}">
                                    <td>
                                        <div class="worker-name-cell">
                                            <div class="worker-photo">
                                                <img src="${worker.photo}" alt="${worker.name}">
                                            </div>
                                            <div>
                                                <div class="worker-name">${worker.name}</div>
                                                <div class="worker-profession">${worker.profession}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="amount-cell">${formatCurrency(worker.askAmount)}</td>
                                    <td class="rating-cell">
                                        <div class="rating-stars">
                                            ${createStarHTML(worker.rating)}
                                        </div>
                                        <span class="rating-value-small">${worker.rating}/5</span>
                                    </td>
                                    <td>${worker.profession}</td>
                                    <td class="distance-cell">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <span>${worker.distance} km</span>
                                    </td>
                                    <td>
                                        <div class="action-cell">
                                            <button class="action-btn view" data-worker-id="${worker.id}" title="${t.visit_profile}">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="action-btn assign" data-worker-id="${worker.id}" data-job-id="${job.id}" title="${t.assign_worker}">
                                                <i class="fas fa-check"></i>
                                            </button>
                                            <button class="action-btn remove" data-worker-id="${worker.id}" data-job-id="${job.id}" title="Remove">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }
        
        jobTable.innerHTML = tableContent;
        jobTablesContainer.appendChild(jobTable);
        
        // Add event listeners to action buttons
        if (paginatedWorkers.length > 0) {
            setTimeout(() => {
                jobTable.querySelectorAll('.action-btn.view').forEach(btn => {
                    btn.addEventListener('click', handleViewProfile);
                });
                
                jobTable.querySelectorAll('.action-btn.assign').forEach(btn => {
                    btn.addEventListener('click', handleAssignWorker);
                });
                
                jobTable.querySelectorAll('.action-btn.remove').forEach(btn => {
                    btn.addEventListener('click', handleRemoveWorker);
                });
            }, 100);
        }
    });
}

/**
 * Create star HTML for rating display
 */
function createStarHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<div class="rating-star filled">★</div>';
        } else if (i === fullStars + 1 && partialStar > 0) {
            starsHTML += `<div class="rating-star partial" style="--fill-percentage: ${partialStar * 100}%">★</div>`;
        } else {
            starsHTML += '<div class="rating-star">★</div>';
        }
    }
    
    return starsHTML;
}

/**
 * Sort workers based on filter
 */
function sortWorkers(workers, filter, value) {
    const sortedWorkers = [...workers];
    
    switch (filter) {
        case 'name':
            if (value === 'a_to_z') {
                sortedWorkers.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                sortedWorkers.sort((a, b) => b.name.localeCompare(a.name));
            }
            break;
            
        case 'time':
            if (value === 'first_to_last') {
                sortedWorkers.sort((a, b) => new Date(a.acceptedTime) - new Date(b.acceptedTime));
            } else {
                sortedWorkers.sort((a, b) => new Date(b.acceptedTime) - new Date(a.acceptedTime));
            }
            break;
            
        case 'distance':
            if (value === 'near_to_far') {
                sortedWorkers.sort((a, b) => a.distance - b.distance);
            } else {
                sortedWorkers.sort((a, b) => b.distance - a.distance);
            }
            break;
            
        case 'rating':
            if (value === 'high_to_low') {
                sortedWorkers.sort((a, b) => b.rating - a.rating);
            } else {
                sortedWorkers.sort((a, b) => a.rating - b.rating);
            }
            break;
            
        case 'price':
            if (value === 'low_to_high_price') {
                sortedWorkers.sort((a, b) => a.askAmount - b.askAmount);
            } else {
                sortedWorkers.sort((a, b) => b.askAmount - a.askAmount);
            }
            break;
            
        case 'profession':
            if (value === 'a_to_z') {
                sortedWorkers.sort((a, b) => a.profession.localeCompare(b.profession));
            } else {
                sortedWorkers.sort((a, b) => b.profession.localeCompare(a.profession));
            }
            break;
    }
    
    return sortedWorkers;
}

/**
 * Update pagination controls
 */
function updatePagination() {
    // Calculate total workers across all jobs
    let totalWorkers = 0;
    jobs.forEach(job => {
        if (job.workersAccepted && job.workersAccepted.length > 0 && !job.assignedWorker) {
            totalWorkers += job.workersAccepted.length;
        }
    });
    
    const totalPages = Math.ceil(totalWorkers / workersPerPage);
    
    // Update buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Update page indicators
    pageIndicators.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const indicator = document.createElement('div');
        indicator.className = `page-indicator ${i === currentPage ? 'active' : ''}`;
        indicator.dataset.page = i;
        indicator.addEventListener('click', () => {
            if (i !== currentPage) {
                currentPage = i;
                renderAcceptedWorkersSection();
            }
        });
        pageIndicators.appendChild(indicator);
    }
}

// ============================================
// FILTER FUNCTIONS
// ============================================

/**
 * Initialize filter functionality
 */
function initializeFilters() {
    // Set default filter (Acceptance Time - First to Last)
    currentFilter = 'time';
    currentFilterValue = 'first_to_last';
    
    // Update active filter button
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Initialize search
    if (workerSearch) {
        workerSearch.addEventListener('input', handleSearch);
    }
    
    // Close filter dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-btn') && !e.target.closest('.filter-dropdown')) {
            filterDropdown.classList.remove('show');
        }
    });
}

/**
 * Handle filter button click
 */
function handleFilterClick(e) {
    const filterBtn = e.currentTarget;
    const filterType = filterBtn.dataset.filter;
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    filterBtn.classList.add('active');
    
    // Show filter dropdown
    showFilterDropdown(filterType, filterBtn);
}

/**
 * Show filter dropdown with options - FIXED POSITION
 */
function showFilterDropdown(filterType, filterBtn) {
    const t = translations[currentLanguage];
    const options = filterOptionsData[filterType];
    
    if (!options) return;
    
    // Get button position relative to viewport
    const rect = filterBtn.getBoundingClientRect();
    
    // Position dropdown directly below the button
    filterDropdown.style.position = 'fixed';
    filterDropdown.style.left = `${rect.left}px`;
    filterDropdown.style.top = `${rect.bottom + 5}px`; // 5px below button
    filterDropdown.style.width = `${rect.width}px`;
    
    // Populate options
    filterOptions.innerHTML = options.map(option => `
        <button class="filter-option ${option.value === currentFilterValue && currentFilter === filterType ? 'active' : ''}" 
                data-value="${option.value}" 
                data-filter="${filterType}">
            ${t[option.label]}
        </button>
    `).join('');
    
    // Show dropdown
    filterDropdown.classList.add('show');
    
    // Add event listeners to options
    filterOptions.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', handleFilterOptionClick);
    });
}

/**
 * Handle filter option selection
 */
function handleFilterOptionClick(e) {
    const option = e.currentTarget;
    const filterType = option.dataset.filter;
    const filterValue = option.dataset.value;
    
    // Update current filter
    currentFilter = filterType;
    currentFilterValue = filterValue;
    
    // Reset to first page when filter changes
    currentPage = 1;
    
    // Re-render workers
    renderAcceptedWorkersSection();
    
    // Close dropdown
    filterDropdown.classList.remove('show');
    
    // Update filter button text with selected option
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterType}"]`);
    if (filterBtn) {
        const t = translations[currentLanguage];
        const optionText = filterOptionsData[filterType].find(opt => opt.value === filterValue)?.label;
        if (optionText) {
            filterBtn.querySelector('span').textContent = t[optionText];
        }
    }
}

/**
 * Handle search input
 */
function handleSearch(e) {
    currentSearchQuery = e.target.value.trim();
    currentPage = 1; // Reset to first page when searching
    renderAcceptedWorkersSection();
}

// ============================================
// WORKER ACTION FUNCTIONS
// ============================================

/**
 * Handle view profile button click
 */
function handleViewProfile(e) {
    const workerId = parseInt(e.currentTarget.dataset.workerId);
    const jobId = parseInt(e.currentTarget.closest('tr').dataset.jobId);
    
    // Find worker and job
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    
    const worker = job.workersAccepted.find(w => w.id === workerId);
    if (!worker) return;
    
    // In a real app, this would redirect to worker profile page
    // For demo, show an alert
    alert(`Viewing profile of ${worker.name}\n\nThis would redirect to the worker's profile page in a real application.`);
}

/**
 * Handle assign worker button click
 */
function handleAssignWorker(e) {
    const workerId = parseInt(e.currentTarget.dataset.workerId);
    const jobId = parseInt(e.currentTarget.dataset.jobId);
    
    // Find worker and job
    const jobIndex = jobs.findIndex(j => j.id === jobId);
    if (jobIndex === -1) return;
    
    const job = jobs[jobIndex];
    const workerIndex = job.workersAccepted.findIndex(w => w.id === workerId);
    if (workerIndex === -1) return;
    
    const worker = job.workersAccepted[workerIndex];
    
    // Store for assignment popup
    currentAssigningWorker = worker;
    currentAssigningJob = job;
    
    // Show assignment popup
    showAssignmentPopup(worker, job);
}

/**
 * Handle remove worker button click
 */
function handleRemoveWorker(e) {
    const workerId = parseInt(e.currentTarget.dataset.workerId);
    const jobId = parseInt(e.currentTarget.dataset.jobId);
    
    // Find job
    const jobIndex = jobs.findIndex(j => j.id === jobId);
    if (jobIndex === -1) return;
    
    // Remove worker from job's accepted workers
    jobs[jobIndex].workersAccepted = jobs[jobIndex].workersAccepted.filter(w => w.id !== workerId);
    
    // If no workers left, remove the job
    if (jobs[jobIndex].workersAccepted.length === 0) {
        jobs.splice(jobIndex, 1);
        
        // Show notification
        const t = translations[currentLanguage];
        showNotification(t.job_removed, t.job_removed_message, 'info');
    }
    
    // Update data and re-render
    updateDashboardStats();
    renderAcceptedWorkersSection();
}

/**
 * Handle work status change
 */
function handleWorkStatusChange(assignmentIndex, status) {
    if (assignmentIndex >= assignedWorkers.length) return;
    
    const assignment = assignedWorkers[assignmentIndex];
    const t = translations[currentLanguage];
    
    if (status === 'completed') {
        // Store the assignment for rating
        currentRatingAssignment = assignment;
        currentRatingWorker = assignment.worker;
        
        // Show rating popup (non-cancellable)
        showRatingPopup(assignment.worker, assignment.job);
        
        // Show notification
        showNotification(t.work_completed, t.work_completed_message, 'info');
    } else {
        // Mark as in-progress
        assignment.completed = false;
        
        // Update localStorage
        localStorage.setItem('assignedWorkers', JSON.stringify(assignedWorkers));
        
        // Re-render
        renderAcceptedWorkersSection();
    }
}

// ============================================
// ASSIGNMENT POPUP FUNCTIONS
// ============================================

/**
 * Show assignment popup
 */
function showAssignmentPopup(worker, job) {
    const t = translations[currentLanguage];
    
    // Populate popup data
    assignmentWorkerPhoto.src = worker.photo;
    assignmentWorkerPhoto.alt = worker.name;
    assignmentWorkerName.textContent = worker.name;
    assignmentOccupation.textContent = worker.profession;
    assignmentJobTitle.textContent = job.title;
    assignmentAskAmount.textContent = formatCurrency(worker.askAmount);
    assignmentDistance.textContent = `${worker.distance} km`;
    assignmentRatingValue.textContent = worker.rating.toFixed(1);
    
    // Create stars
    createStars(worker.rating, assignmentRatingStars, 'large');
    
    // Reset checkbox
    assignmentTermsCheckbox.checked = false;
    
    // Reset countdown
    assignmentPopupCountdown = 10;
    assignmentCountdown.textContent = assignmentPopupCountdown;
    assignmentTimerDisplay.textContent = assignmentPopupCountdown;
    
    // Disable close button
    closeAssignmentPopupBtn.disabled = true;
    
    // Show popup
    assignmentPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Start countdown timer
    startAssignmentCountdown();
    
    // Add event listeners
    assignmentTermsCheckbox.addEventListener('change', handleAssignmentTermsChange);
    visitProfileBtn.addEventListener('click', handleVisitProfile);
}

/**
 * Start countdown timer for assignment popup
 */
function startAssignmentCountdown() {
    if (assignmentPopupTimer) {
        clearInterval(assignmentPopupTimer);
    }
    
    assignmentPopupTimer = setInterval(() => {
        assignmentPopupCountdown--;
        assignmentCountdown.textContent = assignmentPopupCountdown;
        assignmentTimerDisplay.textContent = assignmentPopupCountdown;
        
        if (assignmentPopupCountdown <= 0) {
            clearInterval(assignmentPopupTimer);
            enableAssignmentCloseButton();
        }
    }, 1000);
}

/**
 * Enable close button after countdown
 */
function enableAssignmentCloseButton() {
    closeAssignmentPopupBtn.disabled = false;
}

/**
 * Handle terms checkbox change in assignment popup
 */
function handleAssignmentTermsChange() {
    // Enable/disable assign button based on checkbox
    // In this case, we don't have a separate assign button
    // The close button becomes the assign button after countdown
}

/**
 * Handle visit profile button in assignment popup
 */
function handleVisitProfile() {
    if (currentAssigningWorker) {
        // In a real app, this would redirect to worker profile page
        alert(`Visiting profile of ${currentAssigningWorker.name}\n\nThis would redirect to the worker's profile page in a real application.`);
    }
}

/**
 * Close assignment popup
 */
function closeAssignmentPopup() {
    if (!closeAssignmentPopupBtn.disabled) {
        assignmentPopup.classList.remove('active');
        document.body.style.overflow = '';
        
        if (assignmentPopupTimer) {
            clearInterval(assignmentPopupTimer);
            assignmentPopupTimer = null;
        }
        
        // Remove event listeners
        assignmentTermsCheckbox.removeEventListener('change', handleAssignmentTermsChange);
        visitProfileBtn.removeEventListener('click', handleVisitProfile);
        
        // If checkbox is checked, assign the worker
        if (assignmentTermsCheckbox.checked && currentAssigningWorker && currentAssigningJob) {
            assignWorkerToJob(currentAssigningWorker, currentAssigningJob);
        }
        
        // Reset
        currentAssigningWorker = null;
        currentAssigningJob = null;
    }
}

/**
 * Assign worker to job
 */
function assignWorkerToJob(worker, job) {
    // Find job index
    const jobIndex = jobs.findIndex(j => j.id === job.id);
    if (jobIndex === -1) return;
    
    // Mark job as assigned
    jobs[jobIndex].assignedWorker = worker;
    jobs[jobIndex].assignedDate = new Date().toISOString();
    
    // Remove other workers from this job
    jobs[jobIndex].workersAccepted = [];
    
    // Add to assigned workers list
    assignedWorkers.push({
        worker: worker,
        job: job,
        assignedDate: new Date().toISOString(),
        completed: false
    });
    
    // Update data and re-render
    updateDashboardStats();
    renderAcceptedWorkersSection();
    
    // Show success notification
    const t = translations[currentLanguage];
    showNotification(t.worker_assigned, t.worker_assigned_message, 'success');
}

// ============================================
// RATING POPUP FUNCTIONS
// ============================================

/**
 * Show rating popup (non-cancellable)
 */
function showRatingPopup(worker, job) {
    const t = translations[currentLanguage];
    
    // Populate popup data
    ratingWorkerPhoto.src = worker.photo;
    ratingWorkerPhoto.alt = worker.name;
    ratingWorkerName.textContent = worker.name;
    ratingWorkerJob.textContent = job.title;
    
    // Reset rating
    currentRating = 0;
    ratingSelectedValue.textContent = '0';
    ratingFeedback.value = '';
    
    // Reset stars
    const starElements = starsRating.querySelectorAll('.star');
    starElements.forEach(star => {
        star.classList.remove('active');
        star.style.color = '#E5E7EB';
    });
    
    // Add event listeners to stars
    starElements.forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseover', handleStarHover);
        star.addEventListener('mouseout', handleStarOut);
    });
    
    // Remove close button functionality - make it non-cancellable
    closeRatingPopupBtn.style.display = 'none';
    
    // Show popup (non-cancellable)
    ratingPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Prevent closing by clicking outside
    ratingPopup.style.pointerEvents = 'auto';
    ratingPopup.querySelector('.popup-container').style.pointerEvents = 'auto';
    
    // Add event listener for submit button
    submitRatingBtn.addEventListener('click', handleSubmitRating);
}

/**
 * Handle star click for rating
 */
function handleStarClick(e) {
    const star = e.currentTarget;
    const rating = parseInt(star.dataset.rating);
    currentRating = rating;
    ratingSelectedValue.textContent = rating;
    
    // Update all stars
    const starElements = starsRating.querySelectorAll('.star');
    starElements.forEach((s, index) => {
        if (index < rating) {
            s.classList.add('active');
            s.style.color = '#FFD700';
        } else {
            s.classList.remove('active');
            s.style.color = '#E5E7EB';
        }
    });
}

/**
 * Handle star hover
 */
function handleStarHover(e) {
    const star = e.currentTarget;
    const rating = parseInt(star.dataset.rating);
    
    const starElements = starsRating.querySelectorAll('.star');
    starElements.forEach((s, index) => {
        if (index < rating) {
            s.style.color = '#FFD700';
        } else {
            s.style.color = '#E5E7EB';
        }
    });
}

/**
 * Handle star mouse out
 */
function handleStarOut() {
    const starElements = starsRating.querySelectorAll('.star');
    starElements.forEach((s, index) => {
        if (index < currentRating) {
            s.style.color = '#FFD700';
        } else {
            s.style.color = '#E5E7EB';
        }
    });
}

/**
 * Handle submit rating
 */
function handleSubmitRating() {
    if (currentRating === 0) {
        alert('Please select a rating before submitting.');
        return;
    }
    
    const t = translations[currentLanguage];
    const feedback = ratingFeedback.value.trim();
    
    // Update worker rating (in a real app, this would be sent to backend)
    if (currentRatingWorker) {
        // Here you would typically send the rating to your backend
        // For demo, we'll just show a notification
        
        // Remove the assignment from assigned workers
        const assignmentIndex = assignedWorkers.findIndex(a => 
            a.worker.id === currentRatingWorker.id && 
            a.job.id === currentRatingAssignment.job.id
        );
        
        if (assignmentIndex !== -1) {
            assignedWorkers.splice(assignmentIndex, 1);
            
            // Update localStorage
            localStorage.setItem('assignedWorkers', JSON.stringify(assignedWorkers));
            
            // Update dashboard stats
            updateDashboardStats();
        }
        
        // Close popup
        closeRatingPopup();
        
        // Re-render
        renderAcceptedWorkersSection();
        
        // Show success notification
        showNotification(t.rating_submitted, t.rating_submitted_message, 'success');
    }
}

/**
 * Close rating popup
 */
function closeRatingPopup() {
    ratingPopup.classList.remove('active');
    document.body.style.overflow = '';
    
    // Remove event listeners
    const starElements = starsRating.querySelectorAll('.star');
    starElements.forEach(star => {
        star.removeEventListener('click', handleStarClick);
        star.removeEventListener('mouseover', handleStarHover);
        star.removeEventListener('mouseout', handleStarOut);
    });
    
    submitRatingBtn.removeEventListener('click', handleSubmitRating);
    
    // Reset
    currentRating = 0;
    currentRatingWorker = null;
    currentRatingAssignment = null;
    
    // Restore close button
    closeRatingPopupBtn.style.display = 'block';
}

// ============================================
// JOB POSTING FORM FUNCTIONS
// ============================================

/**
 * Initialize job posting form
 */
function initializeJobPostingForm() {
    // Set employer name
    const employerName = localStorage.getItem('employerName') || 'Employer';
    employerNameInput.value = employerName;
    
    // Address selection
    addressOptions.forEach(option => {
        option.addEventListener('click', () => {
            addressOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Show/hide DIGIPIN input
            if (option.dataset.address === 'other') {
                digipinContainer.style.display = 'block';
                digipinInput.required = true;
            } else {
                digipinContainer.style.display = 'none';
                digipinInput.required = false;
            }
        });
    });
    
    // Tools selection
    toolsOptions.forEach(option => {
        option.addEventListener('click', () => {
            toolsOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Urgency selection
    urgencyOptions.forEach(option => {
        option.addEventListener('click', () => {
            urgencyOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Form submission
    jobPostingForm.addEventListener('submit', handleJobPostingSubmit);
    
    // Close button
    closeJobPopupBtn.addEventListener('click', closeJobPostingPopup);
}

/**
 * Open job posting popup
 */
function openJobPostingPopup() {
    // Reset form
    jobPostingForm.reset();
    
    // Set default selections
    addressOptions[0].classList.add('active');
    digipinContainer.style.display = 'none';
    toolsOptions[0].classList.add('active');
    urgencyOptions[1].classList.add('active');
    
    // Show popup
    jobPostingPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close job posting popup
 */
function closeJobPostingPopup() {
    jobPostingPopup.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Handle job posting form submission
 */
function handleJobPostingSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        title: workTypeInput.value.trim(),
        description: jobDescriptionInput.value.trim(),
        budget: parseInt(budgetInput.value),
        toolsAvailable: document.querySelector('.tools-option.active').dataset.tools === 'yes',
        urgency: document.querySelector('.urgency-option.active').dataset.urgency,
        additionalRequirements: additionalRequirementsInput.value.trim(),
        addressType: document.querySelector('.address-option.active').dataset.address,
        digipin: digipinInput.value.trim(),
        postedDate: new Date().toISOString(),
        workersAccepted: []
    };
    
    // Validate budget
    if (formData.budget < 100) {
        alert('Budget must be at least ₹100');
        return;
    }
    
    // Validate DIGIPIN if other address selected
    if (formData.addressType === 'other' && !formData.digipin) {
        alert('Please enter DIGIPIN for other address');
        return;
    }
    
    // Create new job
    const newJob = {
        id: Date.now(), // Use timestamp as unique ID
        ...formData
    };
    
    // Add to jobs array
    jobs.push(newJob);
    
    // Update data and re-render
    updateDashboardStats();
    renderAcceptedWorkersSection();
    
    // Close popup
    closeJobPostingPopup();
    
    // Show success notification
    const t = translations[currentLanguage];
    showNotification(t.job_posted_success, t.job_posted_message, 'success');
    
    // Simulate workers accepting the job after a delay
    simulateWorkersAcceptingJob(newJob.id);
}

/**
 * Simulate workers accepting a new job (for demo purposes)
 */
function simulateWorkersAcceptingJob(jobId) {
    setTimeout(() => {
        const jobIndex = jobs.findIndex(j => j.id === jobId);
        if (jobIndex === -1) return;
        
        // Add some dummy workers
        const professions = ['Plumber', 'Electrician', 'Carpenter', 'Painter', 'Mason'];
        const names = ['Rajesh', 'Sanjay', 'Amit', 'Vikram', 'Ramesh', 'Mohan', 'Suresh', 'Prakash', 'Anil'];
        const surnames = ['Kumar', 'Patel', 'Sharma', 'Singh', 'Gupta', 'Das', 'Nair', 'Reddy'];
        
        const numWorkers = Math.floor(Math.random() * 3) + 1; // 1-3 workers
        
        for (let i = 0; i < numWorkers; i++) {
            const firstName = names[Math.floor(Math.random() * names.length)];
            const lastName = surnames[Math.floor(Math.random() * surnames.length)];
            const profession = professions[Math.floor(Math.random() * professions.length)];
            
            const worker = {
                id: Date.now() + i,
                name: `${firstName} ${lastName}`,
                profession: profession,
                askAmount: Math.floor(jobs[jobIndex].budget * (0.7 + Math.random() * 0.6)), // 70-130% of budget
                rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)), // 3.5-5.0
                distance: parseFloat((1 + Math.random() * 9).toFixed(1)), // 1-10 km
                photo: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=01A060&color=fff&size=100`,
                acceptedTime: new Date(Date.now() + i * 60000).toISOString() // Staggered times
            };
            
            jobs[jobIndex].workersAccepted.push(worker);
        }
        
        // Update display
        updateDashboardStats();
        renderAcceptedWorkersSection();
        
        // Show notification
        const t = translations[currentLanguage];
        showNotification('New Workers Available', `${numWorkers} worker(s) have accepted your job "${jobs[jobIndex].title}"`, 'info');
        
    }, 3000); // Simulate 3 second delay
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

/**
 * Apply language translations to all elements
 */
function applyLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang] || translations.en;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Update search placeholder
    if (workerSearch) {
        workerSearch.placeholder = translation.search_placeholder;
    }
    
    // Update profile name from localStorage
    const employerName = localStorage.getItem('employerName') || 'Employer';
    profileName.textContent = employerName;
    
    // Update dashboard with new language
    renderAcceptedWorkersSection();
}

/**
 * Handle language change
 */
function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('employerLanguage', lang);
    
    // Update active button
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Apply language
    applyLanguage(lang);
    
    // Close settings dropdown
    closeSettingsDropdown();
}

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Apply theme to the page
 */
function applyTheme(theme) {
    currentTheme = theme;
    let themeToApply = theme;
    
    if (theme === 'system') {
        themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Update body class
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${themeToApply}-theme`);
    
    // Update active button in settings
    themeOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // Save to localStorage
    localStorage.setItem('employerTheme', theme);
}

/**
 * Handle theme change
 */
function handleThemeChange(theme) {
    applyTheme(theme);
    closeSettingsDropdown();
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
// SETTINGS DROPDOWN FUNCTIONS
// ============================================

/**
 * Toggle settings dropdown visibility
 */
function toggleSettingsDropdown(event) {
    event.stopPropagation();
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    sidebarSettingsIcon.setAttribute('aria-expanded', isActive);
}

/**
 * Close settings dropdown
 */
function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
    sidebarSettingsIcon.setAttribute('aria-expanded', 'false');
}

/**
 * Close settings when clicking outside
 */
function closeSettingsOnClickOutside(event) {
    if (!sidebarSettingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// SIDEBAR MANAGEMENT
// ============================================

/**
 * Toggle sidebar (open/close)
 */
function toggleSidebar() {
    const isActive = sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active', isActive);
    
    if (isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        closeSettingsDropdown();
    }
}

/**
 * Close sidebar
 */
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeSettingsDropdown();
}

/**
 * Handle profile edit button click
 */
function handleProfileEdit() {
    // Redirect to profile edit page
    window.location.href = 'employer_profile.html';
}

/**
 * Handle logout
 */
function handleLogout() {
    const translation = translations[currentLanguage];
    
    // Show logout notification
    showNotification(
        translation.logout_success,
        translation.logout_message,
        'success'
    );
    
    // Clear user data from localStorage
    localStorage.removeItem('employerName');
    localStorage.removeItem('employerEmail');
    
    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = 'login_employee.html';
    }, 2000);
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    console.log('Employer Home Page - Complete Version Initialized');
    
    // Load user data
    const savedName = localStorage.getItem('employerName') || 'Employer';
    const savedEmail = localStorage.getItem('employerEmail') || 'employer@example.com';
    
    profileName.textContent = savedName;
    profileEmail.textContent = savedEmail;
    employerNameDisplay.textContent = savedName;
    
    // Load preferences
    const savedLanguage = localStorage.getItem('employerLanguage') || 'en';
    const savedTheme = localStorage.getItem('employerTheme') || 'light';
    
    // Apply language
    handleLanguageChange(savedLanguage);
    
    // Apply theme
    applyTheme(savedTheme);
    
    // Setup event listeners
    setupEventListeners();
    
    // Load data
    loadJobsData();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize job posting form
    initializeJobPostingForm();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Settings dropdown toggle
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    
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
    
    // Hamburger menu toggle
    hamburgerBtn.addEventListener('click', toggleSidebar);
    
    // Close sidebar when clicking overlay or close button
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    
    // Profile edit button
    profileEditBtn.addEventListener('click', handleProfileEdit);
    
    // Logout
    logoutBtn.addEventListener('click', handleLogout);
    
    // Close sidebar when clicking on menu links
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
    
    // Post job float button
    postJobFloatBtn.addEventListener('click', openJobPostingPopup);
    
    // Assignment popup close button
    closeAssignmentPopupBtn.addEventListener('click', closeAssignmentPopup);
    
    // Close assignment popup when clicking overlay
    assignmentPopup.addEventListener('click', (e) => {
        if (e.target === assignmentPopup && !closeAssignmentPopupBtn.disabled) {
            closeAssignmentPopup();
        }
    });
    
    // Rating popup close button
    closeRatingPopupBtn.addEventListener('click', closeRatingPopup);
    
    // Close rating popup when clicking overlay
    ratingPopup.addEventListener('click', (e) => {
        if (e.target === ratingPopup) {
            closeRatingPopup();
        }
    });
    
    // Handle window resize for responsive adjustments
    window.addEventListener('resize', handleWindowResize);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Handle window resize events
 */
function handleWindowResize() {
    // Close sidebar on mobile when resizing to larger screen
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(event) {
    // Escape key closes sidebar, settings dropdown, popups and notifications
    if (event.key === 'Escape') {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        }
        if (settingsDropdown.classList.contains('active')) {
            closeSettingsDropdown();
        }
        if (assignmentPopup.classList.contains('active')) {
            closeAssignmentPopup();
        }
        if (jobPostingPopup.classList.contains('active')) {
            closeJobPostingPopup();
        }
        if (ratingPopup.classList.contains('active')) {
            closeRatingPopup();
        }
    }
}

// ============================================
// START APPLICATION
// ============================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
