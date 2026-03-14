/**
 * HELP & CONTACT PAGE - ENHANCED VERSION
 * With 3-theme system (light, dark, system)
 */

// ============================================
// DOM ELEMENTS
// ============================================

// Navigation Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const homeLink = document.getElementById('homeLink');
const navHome = document.getElementById('navHome');
const logoContainer = document.getElementById('logoContainer');

// Settings Elements
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Welcome Section Elements
const liveChatBtn = document.getElementById('liveChatBtn');
const chatbotBtn = document.getElementById('chatbotBtn');

// Form Elements
const problemReportForm = document.getElementById('problemReportForm');
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInput = document.getElementById('attachment');
const filePreviews = document.getElementById('filePreviews');
const getLocationBtn = document.getElementById('getLocationBtn');
const locationInput = document.getElementById('locationInput');
const issueDescription = document.getElementById('issueDescription');
const charCount = document.getElementById('charCount');

// FAQ Elements
const faqSearch = document.getElementById('faqSearch');
const searchClear = document.getElementById('searchClear');
const resultCount = document.getElementById('resultCount');
const faqContainer = document.getElementById('faqContainer');

// Cards Container
const cardsContainer = document.getElementById('cardsContainer');

// ============================================
// STATE VARIABLES
// ============================================

let currentLanguage = 'en';
let currentTheme = 'light';
let userLocation = null;
let previousPage = 'index.html';
let uploadedFiles = [];

// ============================================
// ALL THEMES CONSTANT - ONLY 3 THEMES
// ============================================
const ALL_THEMES = [
  "light",
  "dark", 
  "system"
];

// ============================================
// TRANSLATIONS (Unchanged - same as original)
// ============================================

const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'help': 'Help',
        'about': 'About',
        'menu': 'Menu',
        'settings': 'Settings',
        'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions',
        'privacy_policy': 'Privacy Policy',
        
        // Settings
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        
        // Welcome Section
        'welcome_title': 'How We Can Help You',
        'welcome_subtitle': 'Hello! 👋 We\'re glad you\'re here. Whether you\'re looking for work opportunities, seeking to hire skilled workers, or need assistance with our platform - we\'re excited to help you succeed!',
        'live_chat': 'Live Chat',
        'live_chat_desc': 'Chat directly with our support team',
        'ai_chatbot': 'AI Assistant',
        'ai_chatbot_desc': 'Instant answers 24/7',
        'online': 'Online',
        'available': 'Available',
        'response_time': '24h Avg Response',
        'satisfaction_rate': '98% Satisfaction',
        'support_available': '24/7 Support',
        
        // Cards Section
        'quick_help': 'Quick Help Topics',
        'quick_help_desc': 'Click on any topic below to get immediate assistance',
        
        // Cards (12 cards as requested)
        'trouble_login': 'Trouble in Login',
        'trouble_login_desc': 'Can\'t access your account? Get immediate login assistance.',
        'trouble_signup': 'Trouble in Signup',
        'trouble_signup_desc': 'Issues creating a new account? We\'ll help you through the process.',
        'forgot_password': 'Forgot Password',
        'forgot_password_desc': 'Reset your password securely with our step-by-step guide.',
        'contact_developer': 'Contact Developer Team',
        'contact_developer_desc': 'Report technical bugs or suggest new features directly to developers.',
        'social_media': 'Connect on Social Media',
        'social_media_desc': 'Get support, updates, and connect with our community on social platforms.',
        'emergency_contacts': 'Emergency Contacts',
        'emergency_contacts_desc': 'Immediate assistance numbers for urgent safety concerns.',
        'how_it_works': 'How Platform Works',
        'how_it_works_desc': 'Complete guide to using ShramikConnect as a worker or employer.',
        'account_management': 'Account Management',
        'account_management_desc': 'Update profile, change settings, or manage your account details.',
        'job_search_help': 'Job Search Help',
        'job_search_help_desc': 'Tips and assistance for finding the right job opportunities.',
        'worker_verification': 'Worker Verification',
        'worker_verification_desc': 'Learn about our verification process for worker profiles.',
        'payment_security': 'Payment & Security',
        'payment_security_desc': 'Information about secure payments and financial safety.',
        'report_issues': 'Report Platform Issues',
        'report_issues_desc': 'Report technical problems or platform malfunctions.',
        
        // Form Section
        'report_problem': 'Report a Problem',
        'report_problem_desc': 'Can\'t find a solution? Submit your issue and we\'ll help you personally.',
        'form_title': 'Tell Us About Your Issue',
        'personal_info': 'Personal Information',
        'full_name': 'Full Name',
        'email_address': 'Email Address',
        'contact_number': 'Contact Number',
        'user_type': 'You are a',
        'issue_details': 'Issue Details',
        'issue_type': 'Type of Issue',
        'issue_subject': 'Issue Subject',
        'issue_description': 'Detailed Description',
        'additional_info': 'Additional Information',
        'attach_files': 'Attach Files (Optional)',
        'location': 'Location (Optional)',
        'urgency_level': 'Urgency Level',
        'submit_report': 'Submit Report',
        'reset_form': 'Clear Form',
        
        // Form Placeholders & Options
        'name_placeholder': 'Enter your full name',
        'email_placeholder': 'Enter your email',
        'phone_placeholder': 'Enter your phone number',
        'select_user': 'Select User Type',
        'worker': 'Worker',
        'employer': 'Employer',
        'visitor': 'Visitor',
        'select_issue': 'Select Issue Type',
        'login_issue': 'Login/Signup Issue',
        'technical_issue': 'Technical Problem',
        'payment_issue': 'Payment/Billing',
        'safety_concern': 'Safety Concern',
        'account_issue': 'Account Related',
        'job_issue': 'Job/Work Related',
        'feedback_suggestion': 'Feedback/Suggestion',
        'other_issue': 'Other',
        'subject_placeholder': 'Brief description of your issue',
        'description_placeholder': 'Please describe your issue in detail...',
        'drop_files': 'Drop files here or click to upload',
        'file_hint': 'Supports images, PDF, DOC (Max 5MB each)',
        'location_placeholder': 'Enter your location or click to auto-detect',
        'low_urgency': 'Low (Within 48 hours)',
        'medium_urgency': 'Medium (Within 24 hours)',
        'high_urgency': 'High (Within 6 hours)',
        'form_tip': 'Tip: Attaching screenshots helps us resolve issues faster',
        
        // FAQ Section
        'faq_title': 'Frequently Asked Questions',
        'faq_subtitle': 'Find quick answers to common questions below',
        'search_faq': 'Type to search questions...',
        'still_questions': 'Still have questions?',
        'chat_with_us': 'Chat with Us',
        'ask_ai_bot': 'Ask AI Bot',
        'contact_support': 'Contact Support',
        
        // FAQ Questions (15 questions)
        'faq1_q': 'How do I reset my password?',
        'faq1_a': 'Go to the login page and click "Forgot Password". Enter your registered email address and check your inbox for password reset instructions.',
        
        'faq2_q': 'How can I contact customer support?',
        'faq2_a': 'You can use the Live Chat option, submit the report form, or email us at support@shramikconnect.com. For emergencies, use the emergency contacts card.',
        
        'faq3_q': 'Is my personal information secure?',
        'faq3_a': 'Yes, we use bank-level encryption and follow strict data protection protocols. Your information is never shared without consent.',
        
        'faq4_q': 'How do I report a safety concern?',
        'faq4_a': 'Use the Emergency Contacts card for immediate assistance or submit a report with "Safety Concern" as the issue type for urgent matters.',
        
        'faq5_q': 'Can I use the platform without registration?',
        'faq5_a': 'No, registration is required to ensure security, verify identities, and provide a safe environment for all users.',
        
        'faq6_q': 'How long does it take to resolve issues?',
        'faq6_a': 'Most issues are resolved within 24 hours. Urgent safety concerns are addressed immediately. You\'ll receive email updates.',
        
        'faq7_q': 'Are there any charges for using the platform?',
        'faq7_a': 'Basic features are completely free. Some premium features for employers may have nominal charges, clearly communicated upfront.',
        
        'faq8_q': 'How do I verify my worker profile?',
        'faq8_a': 'Submit required documents through your profile settings. Verification typically takes 24-48 hours after document submission.',
        
        'faq9_q': 'What payment methods are accepted?',
        'faq9_a': 'We accept UPI, net banking, debit/credit cards, and digital wallets. All payments are secured with SSL encryption.',
        
        'faq10_q': 'How do I post a job as an employer?',
        'faq10_a': 'Click "Post Job" from your employer dashboard, fill in job details, requirements, and budget. Workers can then apply.',
        
        'faq11_q': 'Can I delete my account?',
        'faq11_a': 'Yes, you can delete your account from the settings page. Note: This action is irreversible and removes all your data.',
        
        'faq12_q': 'What should I do if I find inappropriate content?',
        'faq12_a': 'Immediately report it using the "Report Platform Issues" card. Our moderation team reviews reports within 2 hours.',
        
        'faq13_q': 'How are workers rated on the platform?',
        'faq13_a': 'Employers rate workers after job completion based on performance, reliability, and professionalism.',
        
        'faq14_q': 'What if I encounter fraudulent users?',
        'faq14_a': 'Report immediately using the emergency contacts. We have a dedicated team to handle fraud cases and protect users.',
        
        'faq15_q': 'How do I update my profile information?',
        'faq15_a': 'Go to your profile settings from the dashboard. You can update personal details, skills, experience, and profile picture.',
        
        // Footer
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'about': 'About Us',
        'help_contact': 'Help & Contact',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions'
    },
    hi: {
        // Hindi translations (same as original)
        'home': 'होम',
        'help': 'सहायता',
        'about': 'के बारे में',
        'menu': 'मेनू',
        'settings': 'सेटिंग्स',
        'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें',
        'privacy_policy': 'गोपनीयता नीति',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        
        'welcome_title': 'हम आपकी कैसे मदद कर सकते हैं',
        'welcome_subtitle': 'नमस्ते! 👋 हमें खुशी है कि आप यहाँ हैं। चाहे आप नौकरी के अवसर तलाश रहे हों, कुशल कर्मचारियों को काम पर रखना चाहते हों, या हमारे प्लेटफॉर्म में सहायता की आवश्यकता हो - हम आपकी सफलता में मदद करने के लिए उत्साहित हैं!',
        'live_chat': 'लाइव चैट',
        'live_chat_desc': 'हमारी सहायता टीम से सीधे चैट करें',
        'ai_chatbot': 'एआई सहायक',
        'ai_chatbot_desc': '24/7 तत्काल उत्तर',
        'online': 'ऑनलाइन',
        'available': 'उपलब्ध',
        'response_time': '24 घंटे औसत प्रतिक्रिया',
        'satisfaction_rate': '98% संतुष्टि',
        'support_available': '24/7 सहायता',
        
        'quick_help': 'त्वरित सहायता विषय',
        'quick_help_desc': 'तत्काल सहायता प्राप्त करने के लिए नीचे किसी भी विषय पर क्लिक करें',
        
        'trouble_login': 'लॉगिन में परेशानी',
        'trouble_login_desc': 'क्या आप अपने खाते तक नहीं पहुँच पा रहे हैं? तत्काल लॉगिन सहायता प्राप्त करें।',
        'trouble_signup': 'साइनअप में परेशानी',
        'trouble_signup_desc': 'नया खाता बनाने में समस्या? हम आपको प्रक्रिया में मदद करेंगे।',
        'forgot_password': 'पासवर्ड भूल गए',
        'forgot_password_desc': 'हमारे चरण-दर-चरण मार्गदर्शिका के साथ अपना पासवर्ड सुरक्षित रूप से रीसेट करें।',
        'contact_developer': 'डेवलपर टीम से संपर्क करें',
        'contact_developer_desc': 'तकनीकी बग की रिपोर्ट करें या डेवलपर्स को सीधे नई सुविधाओं का सुझाव दें।',
        'social_media': 'सोशल मीडिया पर जुड़ें',
        'social_media_desc': 'सोशल प्लेटफॉर्म पर समर्थन, अपडेट प्राप्त करें और हमारे समुदाय से जुड़ें।',
        'emergency_contacts': 'आपातकालीन संपर्क',
        'emergency_contacts_desc': 'जरूरी सुरक्षा चिंताओं के लिए तत्काल सहायता नंबर।',
        'how_it_works': 'प्लेटफॉर्म कैसे काम करता है',
        'how_it_works_desc': 'एक कार्यकर्ता या नियोक्ता के रूप में श्रमिककनेक्ट का उपयोग करने की पूरी मार्गदर्शिका।',
        'account_management': 'खाता प्रबंधन',
        'account_management_desc': 'प्रोफ़ाइल अपडेट करें, सेटिंग्स बदलें, या अपने खाता विवरण प्रबंधित करें।',
        'job_search_help': 'नौकरी खोज सहायता',
        'job_search_help_desc': 'सही नौकरी के अवसर खोजने के लिए सुझाव और सहायता।',
        'worker_verification': 'कार्यकर्ता सत्यापन',
        'worker_verification_desc': 'कार्यकर्ता प्रोफाइल के लिए हमारी सत्यापन प्रक्रिया के बारे में जानें।',
        'payment_security': 'भुगतान और सुरक्षा',
        'payment_security_desc': 'सुरक्षित भुगतान और वित्तीय सुरक्षा के बारे में जानकारी।',
        'report_issues': 'प्लेटफॉर्म समस्याओं की रिपोर्ट करें',
        'report_issues_desc': 'तकनीकी समस्याओं या प्लेटफॉर्म खराबी की रिपोर्ट करें।',
        
        'report_problem': 'समस्या रिपोर्ट करें',
        'report_problem_desc': 'कोई समाधान नहीं मिल रहा? अपनी समस्या सबमिट करें और हम आपकी व्यक्तिगत रूप से मदद करेंगे।',
        'form_title': 'हमें अपनी समस्या के बारे में बताएं',
        'personal_info': 'व्यक्तिगत जानकारी',
        'full_name': 'पूरा नाम',
        'email_address': 'ईमेल पता',
        'contact_number': 'संपर्क नंबर',
        'user_type': 'आप एक हैं',
        'issue_details': 'समस्या विवरण',
        'issue_type': 'समस्या का प्रकार',
        'issue_subject': 'समस्या विषय',
        'issue_description': 'विस्तृत विवरण',
        'additional_info': 'अतिरिक्त जानकारी',
        'attach_files': 'फ़ाइलें संलग्न करें (वैकल्पिक)',
        'location': 'स्थान (वैकल्पिक)',
        'urgency_level': 'जरूरी स्तर',
        'submit_report': 'रिपोर्ट सबमिट करें',
        'reset_form': 'फॉर्म साफ करें',
        
        'name_placeholder': 'अपना पूरा नाम दर्ज करें',
        'email_placeholder': 'अपना ईमेल दर्ज करें',
        'phone_placeholder': 'अपना फोन नंबर दर्ज करें',
        'select_user': 'उपयोगकर्ता प्रकार चुनें',
        'worker': 'कार्यकर्ता',
        'employer': 'नियोक्ता',
        'visitor': 'आगंतुक',
        'select_issue': 'समस्या प्रकार चुनें',
        'login_issue': 'लॉगिन/साइनअप समस्या',
        'technical_issue': 'तकनीकी समस्या',
        'payment_issue': 'भुगतान/बिलिंग',
        'safety_concern': 'सुरक्षा चिंता',
        'account_issue': 'खाता संबंधित',
        'job_issue': 'नौकरी/काम संबंधित',
        'feedback_suggestion': 'प्रतिक्रिया/सुझाव',
        'other_issue': 'अन्य',
        'subject_placeholder': 'अपनी समस्या का संक्षिप्त विवरण',
        'description_placeholder': 'कृपया अपनी समस्या का विस्तार से वर्णन करें...',
        'drop_files': 'फाइलें यहाँ छोड़ें या अपलोड करने के लिए क्लिक करें',
        'file_hint': 'छवियों, पीडीएफ, डॉक का समर्थन करता है (प्रत्येक अधिकतम 5 एमबी)',
        'location_placeholder': 'अपना स्थान दर्ज करें या ऑटो-डिटेक्ट करने के लिए क्लिक करें',
        'low_urgency': 'कम (48 घंटे के भीतर)',
        'medium_urgency': 'मध्यम (24 घंटे के भीतर)',
        'high_urgency': 'उच्च (6 घंटे के भीतर)',
        'form_tip': 'सुझाव: स्क्रीनशॉट संलग्न करने से हमें समस्याओं को तेजी से हल करने में मदद मिलती है',
        
        'faq_title': 'अक्सर पूछे जाने वाले प्रश्न',
        'faq_subtitle': 'नीचे सामान्य प्रश्नों के त्वरित उत्तर खोजें',
        'search_faq': 'प्रश्न खोजने के लिए टाइप करें...',
        'still_questions': 'अभी भी प्रश्न हैं?',
        'chat_with_us': 'हमसे चैट करें',
        'ask_ai_bot': 'एआई बॉट से पूछें',
        'contact_support': 'सहायता से संपर्क करें',
        
        'faq1_q': 'मैं अपना पासवर्ड कैसे रीसेट करूं?',
        'faq1_a': 'लॉगिन पेज पर जाएं और "पासवर्ड भूल गए" पर क्लिक करें। अपना पंजीकृत ईमेल पता दर्ज करें और पासवर्ड रीसेट निर्देशों के लिए अपने इनबॉक्स की जांच करें।',
        
        'faq2_q': 'मैं ग्राहक सहायता से कैसे संपर्क कर सकता हूं?',
        'faq2_a': 'आप लाइव चैट विकल्प का उपयोग कर सकते हैं, रिपोर्ट फॉर्म सबमिट कर सकते हैं, या हमें support@shramikconnect.com पर ईमेल कर सकते हैं। आपात स्थितियों के लिए, आपातकालीन संपर्क कार्ड का उपयोग करें।',
        
        'faq3_q': 'क्या मेरी व्यक्तिगत जानकारी सुरक्षित है?',
        'faq3_a': 'हाँ, हम बैंक1स्तरीय एन्क्रिप्शन का उपयोग करते हैं और सख्त डेटा संरक्षण प्रोटोकॉल का पालन करते हैं। आपकी जानकारी सहमति के बिना कभी साझा नहीं की जाती है।',
        
        'faq4_q': 'मैं सुरक्षा चिंता की रिपोर्ट कैसे करूं?',
        'faq4_a': 'तत्काल सहायता के लिए आपातकालीन संपर्क कार्ड का उपयोग करें या जरूरी मामलों के लिए "सुरक्षा चिंता" को समस्या प्रकार के रूप में चुनकर रिपोर्ट सबमिट करें।',
        
        'faq5_q': 'क्या मैं पंजीकरण के बिना प्लेटफॉर्म का उपयोग कर सकता हूं?',
        'faq5_a': 'नहीं, सुरक्षा सुनिश्चित करने, पहचान सत्यापित करने और सभी उपयोगकर्ताओं के लिए सुरक्षित वातावरण प्रदान करने के लिए पंजीकरण आवश्यक है।',
        
        'faq6_q': 'समस्याओं को हल करने में कितना समय लगता है?',
        'faq6_a': 'अधिकांश समस्याएं 24 घंटे के भीतर हल हो जाती हैं। जरूरी सुरक्षा चिंताओं पर तुरंत ध्यान दिया जाता है। आपको ईमेल अपडेट प्राप्त होंगे।',
        
        'faq7_q': 'क्या प्लेटफॉर्म का उपयोग करने के लिए कोई शुल्क है?',
        'faq7_a': 'मूल सुविधाएं पूरी तरह से मुफ्त हैं। नियोक्ताओं के लिए कुछ प्रीमियम सुविधाओं पर नाममात्र शुल्क हो सकता है, जो पहले से स्पष्ट रूप से बताया जाता है।',
        
        'faq8_q': 'मैं अपनी कार्यकर्ता प्रोफाइल कैसे सत्यापित करूं?',
        'faq8_a': 'अपनी प्रोफाइल सेटिंग्स के माध्यम से आवश्यक दस्तावेज सबमिट करें। दस्तावेज सबमिशन के बाद सत्यापन में आमतौर पर 24-48 घंटे लगते हैं।',
        
        'faq9_q': 'कौन से भुगतान तरीके स्वीकार किए जाते हैं?',
        'faq9_a': 'हम यूपीआई, नेट बैंकिंग, डेबिट/क्रेडिट कार्ड और डिजिटल वॉलेट स्वीकार करते हैं। सभी भुगतान एसएसएल एन्क्रिप्शन के साथ सुरक्षित हैं।',
        
        'faq10_q': 'मैं नियोक्ता के रूप में नौकरी कैसे पोस्ट करूं?',
        'faq10_a': 'अपने नियोक्ता डैशबोर्ड से "नौकरी पोस्ट करें" पर क्लिक करें, नौकरी विवरण, आवश्यकताएं और बजट भरें। कार्यकर्ता फिर आवेदन कर सकते हैं।',
        
        'faq11_q': 'क्या मैं अपना खाता हटा सकता हूं?',
        'faq11_a': 'हाँ, आप सेटिंग्स पेज से अपना खाता हटा सकते हैं। ध्यान दें: यह क्रिया अपरिवर्तनीय है और आपके सभी डेटा को हटा देती है।',
        
        'faq12_q': 'यदि मुझे अनुपयुक्त सामग्री मिलती है तो मुझे क्या करना चाहिए?',
        'faq12_a': 'इसे तुरंत "प्लेटफॉर्म समस्याओं की रिपोर्ट करें" कार्ड का उपयोग करके रिपोर्ट करें। हमारी मॉडरेशन टीम 2 घंटे के भीतर रिपोर्टों की समीक्षा करती है।',
        
        'faq13_q': 'प्लेटफॉर्म पर कार्यकर्ताओं को कैसे रेट किया जाता है?',
        'faq13_a': 'नियोक्ता नौकरी पूरा होने के बाद प्रदर्शन, विश्वसनीयता और पेशेवरता के आधार पर कार्यकर्ताओं को रेट करते हैं।',
        
        'faq14_q': 'यदि मुझे धोखाधड़ी करने वाले उपयोगकर्ता मिलते हैं तो क्या करूं?',
        'faq14_a': 'तुरंत आपातकालीन संपर्कों का उपयोग करके रिपोर्ट करें। धोखाधड़ी के मामलों को संभालने और उपयोगकर्ताओं की सुरक्षा के लिए हमारे पास एक समर्पित टीम है।',
        
        'faq15_q': 'मैं अपनी प्रोफाइल जानकारी कैसे अपडेट करूं?',
        'faq15_a': 'डैशबोर्ड से अपनी प्रोफाइल सेटिंग्स पर जाएं। आप व्यक्तिगत विवरण, कौशल, अनुभव और प्रोफाइल चित्र अपडेट कर सकते हैं।',
        
        // Footer
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।'
    },
    mr: {
        // Marathi translations (same as original)
        'home': 'होम',
        'help': 'मदत',
        'about': 'विषयी',
        'menu': 'मेनू',
        'settings': 'सेटिंग्ज',
        'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम',
        'privacy_policy': 'गोपनीयता धोरण',
        
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        
        'welcome_title': 'आम्ही तुम्हाला कशी मदत करू शकतो',
        'welcome_subtitle': 'नमस्कार! 👋 तुम्ही येथे आलात याबद्दल आम्हाला आनंद आहे. तुम्ही नोकरीच्या संधी शोधत असाल, कुशल कामगारांना नोकरीवर ठेवू इच्छित असाल किंवा आमच्या प्लॅटफॉर्मवर मदतीची गरज असली तरी - आम्ही तुम्हाला यशस्वी होण्यात मदत करण्यासाठी उत्सुक आहोत!',
        'live_chat': 'लाइव्ह चॅट',
        'live_chat_desc': 'आमच्या सपोर्ट टीमशी थेट चॅट करा',
        'ai_chatbot': 'AI सहाय्यक',
        'ai_chatbot_desc': '24/7 तात्काळ उत्तरे',
        'online': 'ऑनलाइन',
        'available': 'उपलब्ध',
        'response_time': '24 तास सरासरी प्रतिसाद',
        'satisfaction_rate': '98% समाधान',
        'support_available': '24/7 सपोर्ट',
        
        'quick_help': 'त्वरित मदत विषय',
        'quick_help_desc': 'तात्काळ सहाय्य मिळविण्यासाठी खालील कोणत्याही विषयावर क्लिक करा',
        
        'trouble_login': 'लॉगिनमध्ये अडचण',
        'trouble_login_desc': 'तुमच्या खात्यात प्रवेश मिळत नाही? तात्काळ लॉगिन सहाय्य मिळवा.',
        'trouble_signup': 'साइनअपमध्ये अडचण',
        'trouble_signup_desc': 'नवीन खाते तयार करताना समस्या? आम्ही तुम्हाला प्रक्रियेत मदत करू.',
        'forgot_password': 'पासवर्ड विसरलात',
        'forgot_password_desc': 'आमच्या चरण-दर-चरण मार्गदर्शनासह तुमचा पासवर्ड सुरक्षितपणे रीसेट करा.',
        'contact_developer': 'डेव्हलपर टीमशी संपर्क साधा',
        'contact_developer_desc': 'तांत्रिक बग किंवा नवीन वैशिष्ट्यांच्या सूचना डेव्हलपर्सना थेट कळवा.',
        'social_media': 'सोशल मीडियावर कनेक्ट व्हा',
        'social_media_desc': 'सोशल प्लॅटफॉर्मवर सपोर्ट, अद्यतने मिळवा आणि आमच्या समुदायाशी जोडा.',
        'emergency_contacts': 'आणीबाणी संपर्क',
        'emergency_contacts_desc': 'गंभीर सुरक्षा चिंतेसाठी तात्काळ सहाय्य क्रमांक.',
        'how_it_works': 'प्लॅटफॉर्म कसे काम करते',
        'how_it_works_desc': 'कामगार किंवा नियोक्ता म्हणून श्रमिककनेक्ट वापरण्याचे संपूर्ण मार्गदर्शक.',
        'account_management': 'खाते व्यवस्थापन',
        'account_management_desc': 'प्रोफाइल अपडेट करा, सेटिंग्ज बदला किंवा तुमचे खाते तपशील व्यवस्थापित करा.',
        'job_search_help': 'नोकरी शोध मदत',
        'job_search_help_desc': 'योग्य नोकरी संधी शोधण्यासाठी टिपा आणि मदत.',
        'worker_verification': 'कामगार सत्यापन',
        'worker_verification_desc': 'कामगार प्रोफाइलसाठी आमच्या सत्यापन प्रक्रियेबद्दल जाणून घ्या.',
        'payment_security': 'पेमेंट आणि सुरक्षा',
        'payment_security_desc': 'सुरक्षित पेमेंट आणि आर्थिक सुरक्षेबद्दल माहिती.',
        'report_issues': 'प्लॅटफॉर्म समस्यांचा अहवाल द्या',
        'report_issues_desc': 'तांत्रिक समस्या किंवा प्लॅटफॉर्म खराबीचा अहवाल द्या.',
        
        'report_problem': 'समस्या नोंदवा',
        'report_problem_desc': 'उपाय सापडत नाही? तुमची समस्या सबमिट करा आणि आम्ही तुम्हाला वैयक्तिकरित्या मदत करू.',
        'form_title': 'आम्हाला तुमच्या समस्येबद्दल सांगा',
        'personal_info': 'वैयक्तिक माहिती',
        'full_name': 'पूर्ण नाव',
        'email_address': 'ईमेल पत्ता',
        'contact_number': 'संपर्क क्रमांक',
        'user_type': 'तुम्ही एक आहात',
        'issue_details': 'समस्या तपशील',
        'issue_type': 'समस्येचा प्रकार',
        'issue_subject': 'समस्या विषय',
        'issue_description': 'तपशीलवार वर्णन',
        'additional_info': 'अतिरिक्त माहिती',
        'attach_files': 'फाइल संलग्न करा (पर्यायी)',
        'location': 'स्थान (पर्यायी)',
        'urgency_level': 'गंभीरता पातळी',
        'submit_report': 'अहवाल सबमिट करा',
        'reset_form': 'फॉर्म साफ करा',
        
        'name_placeholder': 'तुमचे पूर्ण नाव प्रविष्ट करा',
        'email_placeholder': 'तुमचा ईमेल प्रविष्ट करा',
        'phone_placeholder': 'तुमचा फोन नंबर प्रविष्ट करा',
        'select_user': 'वापरकर्ता प्रकार निवडा',
        'worker': 'कामगार',
        'employer': 'नियोक्ता',
        'visitor': 'पाहुणा',
        'select_issue': 'समस्या प्रकार निवडा',
        'login_issue': 'लॉगिन/साइनअप समस्या',
        'technical_issue': 'तांत्रिक समस्या',
        'payment_issue': 'पेमेंट/बिलिंग',
        'safety_concern': 'सुरक्षा चिंता',
        'account_issue': 'खाते संबंधित',
        'job_issue': 'नोकरी/काम संबंधित',
        'feedback_suggestion': 'अभिप्राय/सूचना',
        'other_issue': 'इतर',
        'subject_placeholder': 'तुमच्या समस्येचे संक्षिप्त वर्णन',
        'description_placeholder': 'कृपया तुमच्या समस्येचे तपशीलवार वर्णन करा...',
        'drop_files': 'फाइल येथे ड्रॉप करा किंवा अपलोड करण्यासाठी क्लिक करा',
        'file_hint': 'प्रतिमा, PDF, DOC समर्थित (प्रत्येक जास्तीत जास्त 5MB)',
        'location_placeholder': 'तुमचे स्थान प्रविष्ट करा किंवा ऑटो-डिटेक्ट करण्यासाठी क्लिक करा',
        'low_urgency': 'कमी (48 तासांत)',
        'medium_urgency': 'मध्यम (24 तासांत)',
        'high_urgency': 'उच्च (6 तासांत)',
        'form_tip': 'टीप: स्क्रीनशॉट संलग्न केल्याने आम्हाला समस्या लवकर सोडवण्यास मदत होते',
        
        'faq_title': 'वारंवार विचारले जाणारे प्रश्न',
        'faq_subtitle': 'खाली सामान्य प्रश्नांची त्वरित उत्तरे शोधा',
        'search_faq': 'प्रश्न शोधण्यासाठी टाइप करा...',
        'still_questions': 'अजूनही प्रश्न आहेत?',
        'chat_with_us': 'आमच्याशी चॅट करा',
        'ask_ai_bot': 'AI बॉटला विचारा',
        'contact_support': 'सपोर्टशी संपर्क साधा',
        
        'faq1_q': 'मी माझा पासवर्ड कसा रीसेट करू?',
        'faq1_a': 'लॉगिन पेजवर जा आणि "पासवर्ड विसरलात" वर क्लिक करा. तुमचा नोंदणीकृत ईमेल पत्ता प्रविष्ट करा आणि पासवर्ड रीसेट सूचनांसाठी तुमच्या इनबॉक्सची तपासणी करा.',
        
        'faq2_q': 'मी ग्राहक सेवा कशी संपर्क करू शकतो?',
        'faq2_a': 'तुम्ही लाइव्ह चॅट पर्याय वापरू शकता, अहवाल फॉर्म सबमिट करू शकता किंवा आम्हाला support@shramikconnect.com येथे ईमेल करू शकता. आणीबाणीच्या वेळी, आणीबाणी संपर्क कार्ड वापरा.',
        
        'faq3_q': 'माझी वैयक्तिक माहिती सुरक्षित आहे का?',
        'faq3_a': 'होय, आम्ही बँक-स्तरीय एन्क्रिप्शन वापरतो आणि कठोर डेटा संरक्षण प्रोटोकॉलचे पालन करतो. तुमची माहिती संमतीशिवाय कधीही सामायिक केली जात नाही.',
        
        'faq4_q': 'मी सुरक्षा चिंतेचा अहवाल कसा देवू?',
        'faq4_a': 'तात्काळ सहाय्यासाठी आणीबाणी संपर्क कार्ड वापरा किंवा गंभीर बाबींसाठी "सुरक्षा चिंता" हा समस्या प्रकार म्हणून निवडून अहवाल सबमिट करा.',
        
        'faq5_q': 'मी नोंदणीशिवाय प्लॅटफॉर्म वापरू शकतो का?',
        'faq5_a': 'नाही, सुरक्षा सुनिश्चित करण्यासाठी, ओळख सत्यापित करण्यासाठी आणि सर्व वापरकर्त्यांसाठी सुरक्षित वातावरण प्रदान करण्यासाठी नोंदणी आवश्यक आहे.',
        
        'faq6_q': 'समस्या सोडवण्यासाठी किती वेळ लागतो?',
        'faq6_a': 'बहुतेक समस्या 24 तासांच्या आत सोडवल्या जातात. गंभीर सुरक्षा चिंतांवर त्वरित लक्ष दिले जाते. तुम्हाला ईमेल अद्यतने मिळतील.',
        
        'faq7_q': 'प्लॅटफॉर्म वापरण्यासाठी काही शुल्क आहे का?',
        'faq7_a': 'मूलभूत वैशिष्ट्ये पूर्णपणे विनामूल्य आहेत. नियोक्त्यांसाठी काही प्रीमियम वैशिष्ट्यांवर नाममात्र शुल्क असू शकते, जे पूर्वी स्पष्टपणे सांगितले जाते.',
        
        'faq8_q': 'मी माझी कामगार प्रोफाइल कशी सत्यापित करू?',
        'faq8_a': 'तुमच्या प्रोफाइल सेटिंग्जद्वारे आवश्यक दस्तऐवज सबमिट करा. दस्तऐवज सबमिशननंतर सत्यापनास सामान्यतः 24-48 तास लागतात.',
        
        'faq9_q': 'कोणत्या पेमेंट पद्धती स्वीकारल्या जातात?',
        'faq9_a': 'आम्ही UPI, नेट बँकिंग, डेबिट/क्रेडिट कार्ड आणि डिजिटल वॉलेट स्वीकारतो. सर्व पेमेंट SSL एन्क्रिप्शनसह सुरक्षित आहेत.',
        
        'faq10_q': 'मी नियोक्ता म्हणून नोकरी कशी पोस्ट करू?',
        'faq10_a': 'तुमच्या नियोक्ता डॅशबोर्डवरून "नोकरी पोस्ट करा" वर क्लिक करा, नोकरी तपशील, आवश्यकता आणि बजेट भरा. कामगार नंतर अर्ज करू शकतात.',
        
        'faq11_q': 'मी माझे खाते हटवू शकतो का?',
        'faq11_a': 'होय, तुम्ही सेटिंग्ज पेजवरून तुमचे खाते हटवू शकता. लक्षात ठेवा: ही क्रिया अपरिवर्तनीय आहे आणि तुमचा सर्व डेटा काढून टाकते.',
        
        'faq12_q': 'मला अनुपयुक्त सामग्री आढळल्यास मी काय करावे?',
        'faq12_a': 'ताबडतोब "प्लॅटफॉर्म समस्यांचा अहवाल द्या" कार्ड वापरून त्याचा अहवाल द्या. आमची मॉडरेशन टीम 2 तासांच्या आत अहवालांचे पुनरावलोकन करते.',
        
        'faq13_q': 'प्लॅटफॉर्मवर कामगारांचे मूल्यांकन कसे केले जाते?',
        'faq13_a': 'नियोक्ते नोकरी पूर्ण झाल्यानंतर कामगिमत, विश्वासार्हता आणि व्यावसायिकतेच्या आधारे कामगारांचे मूल्यांकन करतात.',
        
        'faq14_q': 'मला फसवे वापरकर्ते आढळल्यास काय करावे?',
        'faq14_a': 'ताबडतोब आणीबाणी संपर्क वापरून अहवाल द्या. फसवणूक प्रकरणे हाताळण्यासाठी आणि वापरकर्त्यांचे संरक्षण करण्यासाठी आमच्याकडे एक समर्पित टीम आहे.',
        
        'faq15_q': 'मी माझी प्रोफाइल माहिती कशी अपडेट करू?',
        'faq15_a': 'डॅशबोर्डवरून तुमच्या प्रोफाइल सेटिंग्जवर जा. तुम्ही वैयक्तिक तपशील, कौशल्ये, अनुभव आणि प्रोफाइल चित्र अपडेट करू शकता.',
        
        // Footer
        'tagline': 'कामासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.'
    }
};

// ============================================
// LANGUAGE MANAGEMENT (Unchanged)
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
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translation[key]) {
            element.placeholder = translation[key];
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translation[key]) {
            option.textContent = translation[key];
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
    
    refreshTranslatedContent();
}

function refreshTranslatedContent() {
    const translation = translations[currentLanguage];
    
    document.querySelectorAll('.help-card').forEach(card => {
        const cardId = card.dataset.cardId;
        const cardData = helpCards.find(c => c.id === cardId);
        
        if (cardData && translation) {
            const titleElement = card.querySelector('h3');
            const descElement = card.querySelector('p');
            
            if (titleElement) {
                titleElement.textContent = translation[cardData.titleKey] || cardData.titleKey;
            }
            if (descElement) {
                descElement.textContent = translation[cardData.descKey] || cardData.descKey;
            }
        }
    });
    
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        const faqId = faqItem.dataset.faqId;
        const faqData = faqItems.find(f => f.id === faqId);
        
        if (faqData && translation) {
            const questionElement = faqItem.querySelector('.faq-question span');
            const answerElement = faqItem.querySelector('.faq-answer p');
            const linkElement = faqItem.querySelector('.faq-link');
            
            if (questionElement) {
                questionElement.textContent = translation[faqData.questionKey] || faqData.questionKey;
            }
            if (answerElement) {
                answerElement.textContent = translation[faqData.answerKey] || faqData.answerKey;
            }
            if (linkElement) {
                const relatedCard = helpCards.find(c => c.id === faqData.relatedCard);
                if (relatedCard) {
                    linkElement.textContent = `Learn more about "${translation[relatedCard.titleKey] || relatedCard.titleKey}"`;
                }
            }
        }
    });
}

// ============================================
// CLEAN THEME MANAGEMENT - 3 THEMES ONLY
// ============================================

function applyTheme(theme) {
  const body = document.body;

  // Remove all theme classes
  ALL_THEMES.forEach(t => body.classList.remove(t));
  
  // Add the selected theme class
  body.classList.add(theme);

  localStorage.setItem("selectedTheme", theme);
  currentTheme = theme;
  
  // Update theme buttons
  themeOptions.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

function getSystemDefaultTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function initTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme && ALL_THEMES.includes(savedTheme)) {
    applyTheme(savedTheme);
  } else {
    const systemTheme = getSystemDefaultTheme();
    applyTheme(systemTheme);
  }
}

function handleThemeChange(theme) {
    if (!ALL_THEMES.includes(theme)) {
        console.error('Invalid theme:', theme);
        return;
    }
    
    applyTheme(theme);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================

function toggleSettingsDropdown(event) {
    event.stopPropagation();
    const isActive = settingsDropdown.classList.toggle('active');
    settingsDropdown.setAttribute('aria-hidden', !isActive);
    sidebarSettingsIcon.setAttribute('aria-expanded', isActive);
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
    settingsDropdown.setAttribute('aria-hidden', 'true');
    sidebarSettingsIcon.setAttribute('aria-expanded', 'false');
}

function closeSettingsOnClickOutside(event) {
    if (!sidebarSettingsIcon.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// SIDEBAR & NAVIGATION (Unchanged)
// ============================================

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

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeSettingsDropdown();
}

function setupNavigation() {
    previousPage = localStorage.getItem('previousPage') || 'index.html';
    
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = previousPage;
        });
    }
    
    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = previousPage;
        });
    }
    
    if (logoContainer) {
        logoContainer.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = previousPage;
        });
    }
}

// ============================================
// HELP CARDS MANAGEMENT (Unchanged)
// ============================================

const helpCards = [
    {
        id: 'login',
        icon: 'fa-sign-in-alt',
        titleKey: 'trouble_login',
        descKey: 'trouble_login_desc',
        tags: ['login', 'account', 'access'],
        type: 'login',
        special: true
    },
    {
        id: 'signup',
        icon: 'fa-user-plus',
        titleKey: 'trouble_signup',
        descKey: 'trouble_signup_desc',
        tags: ['registration', 'account'],
        type: 'signup',
        special: true
    },
    {
        id: 'password',
        icon: 'fa-key',
        titleKey: 'forgot_password',
        descKey: 'forgot_password_desc',
        tags: ['security', 'account'],
        type: 'password'
    },
    {
        id: 'developer',
        icon: 'fa-code',
        titleKey: 'contact_developer',
        descKey: 'contact_developer_desc',
        tags: ['technical', 'bugs', 'features'],
        type: 'developer'
    },
    {
        id: 'social',
        icon: 'fa-share-alt',
        titleKey: 'social_media',
        descKey: 'social_media_desc',
        tags: ['community', 'support', 'updates'],
        type: 'social'
    },
    {
        id: 'emergency',
        icon: 'fa-phone-alt',
        titleKey: 'emergency_contacts',
        descKey: 'emergency_contacts_desc',
        tags: ['urgent', 'safety', 'emergency'],
        type: 'emergency'
    },
    {
        id: 'how-it-works',
        icon: 'fa-cogs',
        titleKey: 'how_it_works',
        descKey: 'how_it_works_desc',
        tags: ['guide', 'platform', 'tutorial'],
        type: 'how-it-works'
    },

    {
        id: 'report',
        icon: 'fa-exclamation-triangle',
        titleKey: 'report_issues',
        descKey: 'report_issues_desc',
        tags: ['report', 'technical', 'platform'],
        type: 'report'
    }
];

function createHelpCards() {
    if (!cardsContainer) return;
    
    const translation = translations[currentLanguage];
    
    helpCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `help-card ${card.type}`;
        cardElement.dataset.cardId = card.id;
        
        if (index < 2) {
            cardElement.classList.add('special');
        }
        
        const tagsHTML = card.tags.map(tag => 
            `<span class="card-tag">${tag}</span>`
        ).join('');
        
        cardElement.innerHTML = `
            <div class="card-icon">
                <i class="fas ${card.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${translation[card.titleKey] || card.titleKey}</h3>
                <p>${translation[card.descKey] || card.descKey}</p>
                <div class="card-tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="card-action">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;
        
        cardElement.addEventListener('click', () => {
            handleCardClick(card.id);
        });
        
        cardsContainer.appendChild(cardElement);
    });
}

function handleCardClick(cardId) {
    const card = helpCards.find(c => c.id === cardId);
    if (!card) return;
    
    const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
    if (cardElement) {
        cardElement.style.transform = 'scale(0.98)';
        setTimeout(() => {
            cardElement.style.transform = '';
        }, 150);
    }
    
    // =====================================
    // HAR CARD KE LIYE ALAG URL
    // =====================================
    switch(cardId) {
        
        // FORGOT PASSWORD CARD
        case 'password':
            window.location.href = '/forgot_password_card/';  // ← APNA URL
            break;
        
        // LOGIN CARD
        case 'login':
            window.location.href = '/login-help/';  // ← APNA URL
            break;
        
        // SIGNUP CARD
        case 'signup':
            window.location.href = '/signup-help/';  // ← APNA URL
            break;
        
        // DEVELOPER CARD
        case 'developer':
            window.location.href = '/contact_developer/';  // ← APNA URL
            break;
        
        // SOCIAL MEDIA CARD
        case 'social':
            window.location.href = '/social-media/';  // ← APNA URL
            break;
        
        // EMERGENCY CARD (Alert dikhana hai to)
        case 'emergency':
            alert('Emergency contacts:\nPolice: 100\nAmbulance: 102\nFire: 101');
            break;
        
        // HOW IT WORKS CARD
        case 'how-it-works':
            window.location.href = '/how-it-works/';  // ← APNA URL
            break;
        
        
        
        // REPORT ISSUES CARD
        case 'report':
            window.location.href = '/report-issues/';  // ← APNA URL
            break;
        
        // AGAR KOI AUR CARD HO
        default:
            alert(card.title + ' page under construction');
    }
}
// ============================================
// FORM HANDLING (Unchanged)
// ============================================

function setupForm() {
    if (!problemReportForm) return;
    
    problemReportForm.addEventListener('submit', handleFormSubmit);
    
    if (issueDescription && charCount) {
        issueDescription.addEventListener('input', updateCharCount);
        updateCharCount();
    }
    
    setupFileUpload();
    setupLocationService();
    
    problemReportForm.addEventListener('reset', handleFormReset);
}

function updateCharCount() {
    if (!issueDescription || !charCount) return;
    
    const length = issueDescription.value.length;
    charCount.textContent = length;
    
    if (length > 500) {
        charCount.style.color = '#EF4444';
    } else if (length > 400) {
        charCount.style.color = '#F59E0B';
    } else {
        charCount.style.color = '#10B981';
    }
}

function setupFileUpload() {
    if (!fileUploadArea || !fileInput) return;
    
    fileUploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', handleFileSelect);
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, highlightArea, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        fileUploadArea.addEventListener(eventName, unhighlightArea, false);
    });
    
    fileUploadArea.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlightArea() {
    fileUploadArea.style.borderColor = 'var(--accent-1)';
    fileUploadArea.style.background = 'var(--hover-bg)';
}

function unhighlightArea() {
    fileUploadArea.style.borderColor = '';
    fileUploadArea.style.background = '';
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (!files || files.length === 0) return;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (file.size > 5 * 1024 * 1024) {
            alert(`File "${file.name}" is too large. Maximum size is 5MB.`);
            continue;
        }
        
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!validTypes.includes(file.type)) {
            alert(`File "${file.name}" has an unsupported format.`);
            continue;
        }
        
        uploadedFiles.push(file);
        createFilePreview(file);
    }
    
    fileInput.value = '';
}

function createFilePreview(file) {
    if (!filePreviews) return;
    
    const previewId = 'preview-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    let icon = 'fa-file';
    if (file.type.startsWith('image/')) icon = 'fa-file-image';
    else if (file.type === 'application/pdf') icon = 'fa-file-pdf';
    else if (file.type.includes('word')) icon = 'fa-file-word';
    
    const previewElement = document.createElement('div');
    previewElement.className = 'file-preview';
    previewElement.id = previewId;
    
    previewElement.innerHTML = `
        <div class="file-preview-icon">
            <i class="fas ${icon}"></i>
        </div>
        <div class="file-preview-name" title="${file.name}">
            ${file.name.length > 20 ? file.name.substring(0, 17) + '...' + fileExtension : file.name}
        </div>
        <button type="button" class="file-preview-remove" data-file-id="${previewId}">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    filePreviews.appendChild(previewElement);
    
    const removeBtn = previewElement.querySelector('.file-preview-remove');
    removeBtn.addEventListener('click', () => {
        removeFilePreview(previewId, file.name);
    });
}

function removeFilePreview(previewId, fileName) {
    const previewElement = document.getElementById(previewId);
    if (previewElement) {
        previewElement.remove();
    }
    
    uploadedFiles = uploadedFiles.filter(file => file.name !== fileName);
}

function setupLocationService() {
    if (!getLocationBtn) return;
    
    getLocationBtn.addEventListener('click', getUserLocation);
}

function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
    }
    
    getLocationBtn.disabled = true;
    getLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            
            if (locationInput) {
                locationInput.value = `Lat: ${userLocation.latitude.toFixed(4)}, Long: ${userLocation.longitude.toFixed(4)}`;
            }
            
            getLocationBtn.disabled = false;
            getLocationBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
        },
        (error) => {
            console.error('Error getting location:', error);
            
            let errorMessage = 'Unable to get your location. ';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage += 'Please enable location permissions in your browser settings.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage += 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage += 'Location request timed out.';
                    break;
                default:
                    errorMessage += 'An unknown error occurred.';
            }
            
            alert(errorMessage);
            getLocationBtn.disabled = false;
            getLocationBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(problemReportForm);
    
    uploadedFiles.forEach(file => {
        formData.append('attachments', file);
    });
    
    const requiredFields = ['userName', 'userEmail', 'userPhone', 'userType', 'issueType', 'issueSubject', 'issueDescription'];
    let isValid = true;
    
    for (const field of requiredFields) {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
            isValid = false;
            
            const input = problemReportForm.querySelector(`[name="${field}"]`);
            if (input) {
                input.style.borderColor = '#EF4444';
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 3000);
            }
            break;
        }
    }
    
    if (!isValid) {
        alert('Please fill all required fields marked with *.');
        return;
    }
    
    if (issueDescription && issueDescription.value.length > 500) {
        alert('Description must be 500 characters or less.');
        return;
    }
    
    const submitBtn = problemReportForm.querySelector('.btn-primary');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you! Your report has been submitted successfully. We\'ll contact you within 24 hours.');
        
        problemReportForm.reset();
        uploadedFiles = [];
        filePreviews.innerHTML = '';
        userLocation = null;
        if (locationInput) locationInput.value = '';
        updateCharCount();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        document.getElementById('reportSection').scrollIntoView({
            behavior: 'smooth'
        });
    }, 2000);
}

function handleFormReset() {
    uploadedFiles = [];
    userLocation = null;
    if (filePreviews) filePreviews.innerHTML = '';
    if (locationInput) locationInput.value = '';
    updateCharCount();
}

// ============================================
// FAQ MANAGEMENT (Unchanged)
// ============================================

const faqItems = [
    {
        id: 'faq1',
        questionKey: 'faq1_q',
        answerKey: 'faq1_a',
        relatedCard: 'password'
    },
    {
        id: 'faq2',
        questionKey: 'faq2_q',
        answerKey: 'faq2_a',
        relatedCard: 'developer'
    },
    {
        id: 'faq3',
        questionKey: 'faq3_q',
        answerKey: 'faq3_a',
        relatedCard: 'payment'
    },
    {
        id: 'faq4',
        questionKey: 'faq4_q',
        answerKey: 'faq4_a',
        relatedCard: 'emergency'
    },
    {
        id: 'faq5',
        questionKey: 'faq5_q',
        answerKey: 'faq5_a',
        relatedCard: 'signup'
    },
    {
        id: 'faq6',
        questionKey: 'faq6_q',
        answerKey: 'faq6_a',
        relatedCard: 'developer'
    },
    {
        id: 'faq7',
        questionKey: 'faq7_q',
        answerKey: 'faq7_a',
        relatedCard: 'payment'
    },
    {
        id: 'faq8',
        questionKey: 'faq8_q',
        answerKey: 'faq8_a',
        relatedCard: 'verification'
    },
    {
        id: 'faq9',
        questionKey: 'faq9_q',
        answerKey: 'faq9_a',
        relatedCard: 'payment'
    },
    {
        id: 'faq10',
        questionKey: 'faq10_q',
        answerKey: 'faq10_a',
        relatedCard: 'job-search'
    },
    {
        id: 'faq11',
        questionKey: 'faq11_q',
        answerKey: 'faq11_a',
        relatedCard: 'account'
    },
    {
        id: 'faq12',
        questionKey: 'faq12_q',
        answerKey: 'faq12_a',
        relatedCard: 'report'
    },
    {
        id: 'faq13',
        questionKey: 'faq13_q',
        answerKey: 'faq13_a',
        relatedCard: 'how-it-works'
    },
    {
        id: 'faq14',
        questionKey: 'faq14_q',
        answerKey: 'faq14_a',
        relatedCard: 'emergency'
    },
    {
        id: 'faq15',
        questionKey: 'faq15_q',
        answerKey: 'faq15_a',
        relatedCard: 'account'
    }
];

function createFAQ() {
    if (!faqContainer) return;
    
    const translation = translations[currentLanguage];
    
    faqItems.forEach((item) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'faq-item';
        faqElement.dataset.faqId = item.id;
        
        const relatedCard = helpCards.find(c => c.id === item.relatedCard);
        const relatedCardTitle = relatedCard ? (translation[relatedCard.titleKey] || relatedCard.titleKey) : '';
        
        faqElement.innerHTML = `
            <div class="faq-question">
                <span>${translation[item.questionKey] || item.questionKey}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${translation[item.answerKey] || item.answerKey}</p>
                ${relatedCard ? `<a href="#" class="faq-link" data-related-card="${item.relatedCard}">
                    Learn more about "${relatedCardTitle}"
                </a>` : ''}
            </div>
        `;
        
        const questionElement = faqElement.querySelector('.faq-question');
        questionElement.addEventListener('click', () => {
            const currentlyActive = faqContainer.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== faqElement) {
                currentlyActive.classList.remove('active');
            }
            faqElement.classList.toggle('active');
        });
        
        const linkElement = faqElement.querySelector('.faq-link');
        if (linkElement) {
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const cardElement = document.querySelector(`[data-card-id="${item.relatedCard}"]`);
                if (cardElement) {
                    cardElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    cardElement.classList.add('highlight');
                    setTimeout(() => {
                        cardElement.classList.remove('highlight');
                    }, 2000);
                }
            });
        }
        
        faqContainer.appendChild(faqElement);
    });
}

function filterFAQ(searchTerm) {
    const faqItems = document.querySelectorAll('.faq-item');
    const searchLower = searchTerm.toLowerCase().trim();
    let visibleCount = 0;
    
    if (searchLower === '') {
        faqItems.forEach(item => {
            item.style.display = 'block';
            visibleCount++;
        });
        
        if (resultCount) {
            resultCount.textContent = faqItems.length;
        }
        return;
    }
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
        
        if (question.includes(searchLower) || answer.includes(searchLower)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    if (resultCount) {
        resultCount.textContent = visibleCount;
    }
}

// ============================================
// CHAT FUNCTIONS (Unchanged)
// ============================================

function setupChatFunctions() {
    if (liveChatBtn) {
        liveChatBtn.addEventListener('click', () => {
            console.log('Live chat initiated');
            alert('Live chat feature would open here. In a real application, this would connect you with a support agent.');
        });
    }
    
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', () => {
            console.log('Chatbot initiated');
            alert('AI Assistant would open here. In a real application, this would start a conversation with our AI bot.');
        });
    }
}

function setupFAQChatButtons() {
    const faqLiveChat = document.getElementById('faqLiveChat');
    if (faqLiveChat) {
        faqLiveChat.addEventListener('click', () => {
            console.log('FAQ Live chat initiated');
            document.getElementById('liveChatBtn').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            setTimeout(() => {
                document.getElementById('liveChatBtn').click();
            }, 1000);
        });
    }
    
    const faqAskBot = document.getElementById('faqAskBot');
    if (faqAskBot) {
        faqAskBot.addEventListener('click', () => {
            console.log('FAQ AI Bot initiated');
            document.getElementById('chatbotBtn').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            setTimeout(() => {
                document.getElementById('chatbotBtn').click();
            }, 1000);
        });
    }
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
    // Sidebar
    hamburgerBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    
    // Settings
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);
    
    // Language
    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });
    
    // Theme - Updated for 3 themes
    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });
    
    // FAQ search
    if (faqSearch) {
        faqSearch.addEventListener('input', (e) => {
            filterFAQ(e.target.value);
            
            if (searchClear) {
                searchClear.style.display = e.target.value ? 'flex' : 'none';
            }
        });
        
        searchClear.style.display = faqSearch.value ? 'flex' : 'none';
    }
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (faqSearch) {
                faqSearch.value = '';
                filterFAQ('');
                searchClear.style.display = 'none';
                faqSearch.focus();
            }
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Window resize
    window.addEventListener('resize', handleWindowResize);
}

function handleKeyboardNavigation(event) {
    if (event.key === 'Escape') {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        }
        if (settingsDropdown.classList.contains('active')) {
            closeSettingsDropdown();
        }
    }
    
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        if (faqSearch) {
            faqSearch.focus();
        }
    }
}

function handleWindowResize() {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    console.log('Enhanced Help & Contact Page Initialized with 3-theme system');
    
    // Save current page as previous for home navigation
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'help_and_contact_page.html') {
        localStorage.setItem('previousPage', currentPage);
    }
    
    // Load preferences
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    
    // Apply language
    handleLanguageChange(savedLanguage);
    
    // Apply theme with clean logic
    initTheme();
    
    // Setup navigation
    setupNavigation();
    
    // Create dynamic content
    createHelpCards();
    createFAQ();
    
    // Setup forms and services
    setupForm();
    setupChatFunctions();
    setupFAQChatButtons();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial FAQ search results count
    filterFAQ('');
}

// ============================================
// START APPLICATION
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}