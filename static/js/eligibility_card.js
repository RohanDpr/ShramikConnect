/**
 * ELIGIBILITY PAGE - TERMS & CONDITIONS
 * Full theme and language support
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

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
        'eligibility_title': 'User Eligibility',
        'eligibility_desc': 'This section explains the requirements and legal eligibility to use the ShramikConnect platform as a worker or employer.',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Eligibility Requirements',
        'overview_desc': 'This page explains the eligibility criteria required to use the ShramikConnect platform. These requirements ensure that both workers and employers can use the platform safely and responsibly.',
        
        // Section 1 - Age
        'age_title': 'Minimum Age Requirement',
        'age_desc': 'To use the ShramikConnect platform, users must be at least 18 years old.',
        'age_restriction': 'Individuals below the age of 18 are not permitted to create accounts or use the platform.',
        'age_enforcement': 'If ShramikConnect discovers that an account belongs to a minor, the account may be suspended or permanently removed.',
        'age_rationale': 'This rule ensures that users are legally capable of communicating and entering work agreements.',
        
        // Section 2 - Geographic
        'geo_title': 'Geographic Availability',
        'geo_desc': 'ShramikConnect is designed primarily for users located within India.',
        'geo_requirement': 'Workers and employers using the platform should be located in India or offering job opportunities within Indian locations.',
        'geo_restriction': 'The platform may restrict certain services if the user is located outside supported regions.',
        
        // Section 3 - Worker
        'worker_title': 'Worker Eligibility',
        'worker_desc': 'To register as a worker on ShramikConnect, users must meet the following requirements:',
        'worker_req1': 'Must have a valid mobile number for account verification',
        'worker_req2': 'Must provide basic personal information',
        'worker_req3': 'Must provide skill details or work category',
        'worker_req4': 'Must provide accurate location information',
        'worker_responsibility': 'Workers are responsible for ensuring that their profile details are correct and updated.',
        'worker_verification': 'ShramikConnect may request identity verification if suspicious activity or complaints are reported.',
        
        // Section 4 - Employer
        'employer_title': 'Employer Eligibility',
        'employer_desc': 'Employers on ShramikConnect may be individual persons or organizations seeking workers for different types of jobs.',
        'employer_requirements': 'To use the platform as an employer:',
        'employer_req1': 'A valid mobile number verification is required',
        'employer_req2': 'Employers must provide accurate job information',
        'employer_req3': 'Employers must provide the correct job location',
        'employer_registration': 'Employers are not required to have a business registration or GST registration to post jobs on the platform.',
        
        // Section 5 - Accuracy
        'accuracy_title': 'Accurate Information Requirement',
        'accuracy_desc': 'All users must provide true, accurate, and complete information when creating accounts or posting job details.',
        'accuracy_consequences': 'Providing false or misleading information may result in actions such as:',
        'accuracy_action1': 'Removal of job listings',
        'accuracy_action2': 'Temporary account suspension',
        'accuracy_action3': 'Permanent account termination in serious cases',
        'accuracy_trust': 'This rule helps maintain a trustworthy environment for all users.',
        
        // Section 6 - Account
        'account_title': 'Account Responsibility',
        'account_desc': 'Users are responsible for maintaining the security of their account information.',
        'account_prohibited': 'Users must not:',
        'account_prohibit1': 'Share their account credentials with others',
        'account_prohibit2': 'Allow unauthorized access to their account',
        'account_prohibit3': "Use another person's account to access the platform",
        'account_liability': 'Any activity performed through a user account will be considered the responsibility of the account holder.',
        
        // Important Notice
        'notice_title': 'Important Notice',
        'notice_desc': 'ShramikConnect acts only as a digital platform that connects workers and employers.',
        'notice_platform': 'The platform:',
        'notice_point1': 'Does not act as an employer',
        'notice_point2': 'Does not guarantee job availability',
        'notice_point3': 'Does not manage or process payments between users',
        'notice_footer': 'Workers and employers communicate directly and are responsible for negotiating job details and payment terms independently.',
        
        // Footer Button
        'back_to_terms': 'Back to Terms & Conditions'
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
        'eligibility_title': 'उपयोगकर्ता पात्रता',
        'eligibility_desc': 'यह खंड श्रमिक या नियोक्ता के रूप में श्रमिककनेक्ट प्लेटफॉर्म का उपयोग करने के लिए आवश्यकताओं और कानूनी पात्रता की व्याख्या करता है।',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'पात्रता आवश्यकताएं',
        'overview_desc': 'यह पृष्ठ श्रमिककनेक्ट प्लेटफॉर्म का उपयोग करने के लिए आवश्यक पात्रता मानदंडों की व्याख्या करता है। ये आवश्यकताएं सुनिश्चित करती हैं कि श्रमिक और नियोक्ता दोनों प्लेटफॉर्म का सुरक्षित और जिम्मेदारी से उपयोग कर सकें।',
        
        // Section 1 - Age
        'age_title': 'न्यूनतम आयु आवश्यकता',
        'age_desc': 'श्रमिककनेक्ट प्लेटफॉर्म का उपयोग करने के लिए, उपयोगकर्ताओं की आयु कम से कम 18 वर्ष होनी चाहिए।',
        'age_restriction': '18 वर्ष से कम आयु के व्यक्तियों को खाते बनाने या प्लेटफॉर्म का उपयोग करने की अनुमति नहीं है।',
        'age_enforcement': 'यदि श्रमिककनेक्ट को पता चलता है कि कोई खाता नाबालिग का है, तो खाता निलंबित या स्थायी रूप से हटाया जा सकता है।',
        'age_rationale': 'यह नियम सुनिश्चित करता है कि उपयोगकर्ता संचार करने और कार्य समझौतों में प्रवेश करने के लिए कानूनी रूप से सक्षम हैं।',
        
        // Section 2 - Geographic
        'geo_title': 'भौगोलिक उपलब्धता',
        'geo_desc': 'श्रमिककनेक्ट मुख्य रूप से भारत में स्थित उपयोगकर्ताओं के लिए डिज़ाइन किया गया है।',
        'geo_requirement': 'प्लेटफॉर्म का उपयोग करने वाले श्रमिकों और नियोक्ताओं को भारत में स्थित होना चाहिए या भारतीय स्थानों के भीतर नौकरी के अवसर प्रदान करने चाहिए।',
        'geo_restriction': 'यदि उपयोगकर्ता समर्थित क्षेत्रों के बाहर स्थित है तो प्लेटफॉर्म कुछ सेवाओं को प्रतिबंधित कर सकता है।',
        
        // Section 3 - Worker
        'worker_title': 'श्रमिक पात्रता',
        'worker_desc': 'श्रमिककनेक्ट पर श्रमिक के रूप में पंजीकरण करने के लिए, उपयोगकर्ताओं को निम्नलिखित आवश्यकताओं को पूरा करना होगा:',
        'worker_req1': 'खाता सत्यापन के लिए एक वैध मोबाइल नंबर होना चाहिए',
        'worker_req2': 'बुनियादी व्यक्तिगत जानकारी प्रदान करनी चाहिए',
        'worker_req3': 'कौशल विवरण या कार्य श्रेणी प्रदान करनी चाहिए',
        'worker_req4': 'सटीक स्थान जानकारी प्रदान करनी चाहिए',
        'worker_responsibility': 'श्रमिक यह सुनिश्चित करने के लिए जिम्मेदार हैं कि उनकी प्रोफाइल जानकारी सही और अद्यतन है।',
        'worker_verification': 'यदि संदिग्ध गतिविधि या शिकायतों की सूचना मिलती है तो श्रमिककनेक्ट पहचान सत्यापन का अनुरोध कर सकता है।',
        
        // Section 4 - Employer
        'employer_title': 'नियोक्ता पात्रता',
        'employer_desc': 'श्रमिककनेक्ट पर नियोक्ता व्यक्तिगत व्यक्ति या संगठन हो सकते हैं जो विभिन्न प्रकार के कार्यों के लिए श्रमिकों की तलाश कर रहे हैं।',
        'employer_requirements': 'नियोक्ता के रूप में प्लेटफॉर्म का उपयोग करने के लिए:',
        'employer_req1': 'एक वैध मोबाइल नंबर सत्यापन आवश्यक है',
        'employer_req2': 'नियोक्ताओं को सटीक नौकरी की जानकारी प्रदान करनी चाहिए',
        'employer_req3': 'नियोक्ताओं को सही नौकरी स्थान प्रदान करना चाहिए',
        'employer_registration': 'प्लेटफॉर्म पर नौकरियां पोस्ट करने के लिए नियोक्ताओं के लिए व्यवसाय पंजीकरण या जीएसटी पंजीकरण होना आवश्यक नहीं है।',
        
        // Section 5 - Accuracy
        'accuracy_title': 'सटीक जानकारी की आवश्यकता',
        'accuracy_desc': 'सभी उपयोगकर्ताओं को खाते बनाते समय या नौकरी के विवरण पोस्ट करते समय सही, सटीक और पूरी जानकारी प्रदान करनी चाहिए।',
        'accuracy_consequences': 'गलत या भ्रामक जानकारी प्रदान करने के परिणामस्वरूप निम्नलिखित कार्रवाई हो सकती है:',
        'accuracy_action1': 'नौकरी सूचियों को हटाना',
        'accuracy_action2': 'अस्थायी खाता निलंबन',
        'accuracy_action3': 'गंभीर मामलों में स्थायी खाता समाप्ति',
        'accuracy_trust': 'यह नियम सभी उपयोगकर्ताओं के लिए एक भरोसेमंद वातावरण बनाए रखने में मदद करता है।',
        
        // Section 6 - Account
        'account_title': 'खाता जिम्मेदारी',
        'account_desc': 'उपयोगकर्ता अपने खाते की जानकारी की सुरक्षा बनाए रखने के लिए जिम्मेदार हैं।',
        'account_prohibited': 'उपयोगकर्ताओं को नहीं करना चाहिए:',
        'account_prohibit1': 'अपने खाते के क्रेडेंशियल दूसरों के साथ साझा करना',
        'account_prohibit2': 'अपने खाते तक अनधिकृत पहुंच की अनुमति देना',
        'account_prohibit3': 'प्लेटफॉर्म तक पहुंचने के लिए किसी अन्य व्यक्ति के खाते का उपयोग करना',
        'account_liability': 'उपयोगकर्ता खाते के माध्यम से की गई कोई भी गतिविधि खाता धारक की जिम्मेदारी मानी जाएगी।',
        
        // Important Notice
        'notice_title': 'महत्वपूर्ण सूचना',
        'notice_desc': 'श्रमिककनेक्ट केवल एक डिजिटल प्लेटफॉर्म के रूप में कार्य करता है जो श्रमिकों और नियोक्ताओं को जोड़ता है।',
        'notice_platform': 'प्लेटफॉर्म:',
        'notice_point1': 'नियोक्ता के रूप में कार्य नहीं करता है',
        'notice_point2': 'नौकरी की उपलब्धता की गारंटी नहीं देता है',
        'notice_point3': 'उपयोगकर्ताओं के बीच भुगतान का प्रबंधन या प्रक्रिया नहीं करता है',
        'notice_footer': 'श्रमिक और नियोक्ता सीधे संवाद करते हैं और स्वतंत्र रूप से नौकरी के विवरण और भुगतान शर्तों पर बातचीत करने के लिए जिम्मेदार होते हैं।',
        
        // Footer Button
        'back_to_terms': 'नियम और शर्तों पर वापस जाएं'
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
        'eligibility_title': 'वापरकर्ता पात्रता',
        'eligibility_desc': 'हा विभाग कामगार किंवा नियोक्ता म्हणून श्रमिककनेक्ट प्लॅटफॉर्म वापरण्यासाठी आवश्यकता आणि कायदेशीर पात्रता स्पष्ट करतो.',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'पात्रता आवश्यकता',
        'overview_desc': 'हा पृष्ठ श्रमिककनेक्ट प्लॅटफॉर्म वापरण्यासाठी आवश्यक पात्रता निकष स्पष्ट करतो. या आवश्यकता हे सुनिश्चित करतात की कामगार आणि नियोक्ता दोघेही प्लॅटफॉर्म सुरक्षितपणे आणि जबाबदारीने वापरू शकतात.',
        
        // Section 1 - Age
        'age_title': 'किमान वय आवश्यकता',
        'age_desc': 'श्रमिककनेक्ट प्लॅटफॉर्म वापरण्यासाठी, वापरकर्त्यांचे वय किमान १८ वर्षे असणे आवश्यक आहे.',
        'age_restriction': '१८ वर्षांखालील व्यक्तींना खाती तयार करण्याची किंवा प्लॅटफॉर्म वापरण्याची परवानगी नाही.',
        'age_enforcement': 'जर श्रमिककनेक्टला आढळले की एखादे खाते अल्पवयीन व्यक्तीचे आहे, तर खाते निलंबित किंवा कायमचे काढून टाकले जाऊ शकते.',
        'age_rationale': 'हा नियम हे सुनिश्चित करतो की वापरकर्ते संवाद साधण्यासाठी आणि कामाच्या करारांमध्ये प्रवेश करण्यासाठी कायदेशीरदृष्ट्या सक्षम आहेत.',
        
        // Section 2 - Geographic
        'geo_title': 'भौगोलिक उपलब्धता',
        'geo_desc': 'श्रमिककनेक्ट प्रामुख्याने भारतातील वापरकर्त्यांसाठी डिझाइन केले आहे.',
        'geo_requirement': 'प्लॅटफॉर्म वापरणारे कामगार आणि नियोक्ते भारतात असावेत किंवा भारतीय स्थानांमध्ये नोकरीच्या संधी देत असावेत.',
        'geo_restriction': 'वापरकर्ता समर्थित प्रदेशांच्या बाहेर असल्यास प्लॅटफॉर्म काही सेवा प्रतिबंधित करू शकतो.',
        
        // Section 3 - Worker
        'worker_title': 'कामगार पात्रता',
        'worker_desc': 'श्रमिककनेक्टवर कामगार म्हणून नोंदणी करण्यासाठी, वापरकर्त्यांनी खालील आवश्यकता पूर्ण केल्या पाहिजेत:',
        'worker_req1': 'खाते सत्यापनासाठी वैध मोबाइल क्रमांक असणे आवश्यक आहे',
        'worker_req2': 'मूलभूत वैयक्तिक माहिती प्रदान करणे आवश्यक आहे',
        'worker_req3': 'कौशल्य तपशील किंवा काम श्रेणी प्रदान करणे आवश्यक आहे',
        'worker_req4': 'अचूक स्थान माहिती प्रदान करणे आवश्यक आहे',
        'worker_responsibility': 'त्यांची प्रोफाइल माहिती बरोबर आणि अद्ययावत आहे याची खात्री करण्यासाठी कामगार जबाबदार आहेत.',
        'worker_verification': 'संशयास्पद क्रियाकलाप किंवा तक्रारी नोंदवल्यास श्रमिककनेक्ट ओळख सत्यापनाची विनंती करू शकते.',
        
        // Section 4 - Employer
        'employer_title': 'नियोक्ता पात्रता',
        'employer_desc': 'श्रमिककनेक्टवर नियोक्ते वैयक्तिक व्यक्ती किंवा संस्था असू शकतात जे विविध प्रकारच्या कामांसाठी कामगार शोधत आहेत.',
        'employer_requirements': 'नियोक्ता म्हणून प्लॅटफॉर्म वापरण्यासाठी:',
        'employer_req1': 'वैध मोबाइल क्रमांक सत्यापन आवश्यक आहे',
        'employer_req2': 'नियोक्त्यांनी अचूक नोकरी माहिती प्रदान करणे आवश्यक आहे',
        'employer_req3': 'नियोक्त्यांनी योग्य नोकरी स्थान प्रदान करणे आवश्यक आहे',
        'employer_registration': 'प्लॅटफॉर्मवर नोकऱ्या पोस्ट करण्यासाठी नियोक्त्यांसाठी व्यवसाय नोंदणी किंवा जीएसटी नोंदणी असणे आवश्यक नाही.',
        
        // Section 5 - Accuracy
        'accuracy_title': 'अचूक माहिती आवश्यकता',
        'accuracy_desc': 'सर्व वापरकर्त्यांनी खाती तयार करताना किंवा नोकरीचे तपशील पोस्ट करताना खरी, अचूक आणि संपूर्ण माहिती प्रदान करणे आवश्यक आहे.',
        'accuracy_consequences': 'चुकीची किंवा दिशाभूल करणारी माहिती प्रदान केल्याने पुढील क्रिया होऊ शकतात:',
        'accuracy_action1': 'नोकरी सूची काढून टाकणे',
        'accuracy_action2': 'तात्पुरते खाते निलंबन',
        'accuracy_action3': 'गंभीर प्रकरणांमध्ये कायमचे खाते समाप्ती',
        'accuracy_trust': 'हा नियम सर्व वापरकर्त्यांसाठी विश्वासार्ह वातावरण राखण्यास मदत करतो.',
        
        // Section 6 - Account
        'account_title': 'खाते जबाबदारी',
        'account_desc': 'वापरकर्ते त्यांच्या खात्याच्या माहितीची सुरक्षा राखण्यासाठी जबाबदार आहेत.',
        'account_prohibited': 'वापरकर्त्यांनी हे करू नये:',
        'account_prohibit1': 'त्यांचे खाते क्रेडेंशियल इतरांसह सामायिक करणे',
        'account_prohibit2': 'त्यांच्या खात्यात अनधिकृत प्रवेशास परवानगी देणे',
        'account_prohibit3': 'प्लॅटफॉर्मवर प्रवेश करण्यासाठी दुसऱ्या व्यक्तीच्या खात्याचा वापर करणे',
        'account_liability': 'वापरकर्ता खात्याद्वारे केलेली कोणतीही क्रिया खाते धारकाची जबाबदारी मानली जाईल.',
        
        // Important Notice
        'notice_title': 'महत्वाची सूचना',
        'notice_desc': 'श्रमिककनेक्ट केवळ एक डिजिटल प्लॅटफॉर्म म्हणून कार्य करते जे कामगार आणि नियोक्त्यांना जोडते.',
        'notice_platform': 'प्लॅटफॉर्म:',
        'notice_point1': 'नियोक्ता म्हणून कार्य करत नाही',
        'notice_point2': 'नोकरीच्या उपलब्धतेची हमी देत नाही',
        'notice_point3': 'वापरकर्त्यांमधील पेमेंट व्यवस्थापित किंवा प्रक्रिया करत नाही',
        'notice_footer': 'कामगार आणि नियोक्ते थेट संवाद साधतात आणि स्वतंत्रपणे नोकरीचे तपशील आणि पेमेंट अटींवर वाटाघाटी करण्यासाठी जबाबदार असतात.',
        
        // Footer Button
        'back_to_terms': 'अटी आणि नियमांवर परत जा'
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
    console.log('Eligibility page initialized');

    // Load saved language
    const savedLanguage = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLanguage);

    // Load theme
    initTheme();

    // Setup event listeners
    setupEventListeners();
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}