/**
 * TERMINATION POLICY PAGE - TERMS & CONDITIONS
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
        'termination_title': 'Account Termination Policy',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the conditions under which a user account on the ShramikConnect platform may be suspended, restricted, or permanently terminated. ShramikConnect aims to maintain a safe and trustworthy platform for workers and employers. Accounts that violate platform policies may be subject to appropriate action.',
        
        // Section 1 - Reasons
        'reasons_title': 'Reasons for Account Termination',
        'reasons_desc': 'ShramikConnect may suspend or terminate user accounts in situations such as:',
        'reasons1': 'Repeated violation of platform policies',
        'reasons2': 'Fraudulent activity or scams',
        'reasons3': 'Providing false or misleading information',
        'reasons4': 'Harassment or abusive behavior toward other users',
        'reasons5': 'Posting illegal or prohibited job requests',
        'reasons_note': 'The platform reserves the right to take action when necessary to protect the community.',
        
        // Section 2 - Suspension
        'suspension_title': 'Temporary Account Suspension',
        'suspension_desc': 'In certain cases, accounts may be temporarily suspended instead of permanently terminated.',
        'suspension_cases': 'Temporary suspension may occur when:',
        'suspension1': 'Minor policy violations are reported',
        'suspension2': 'Suspicious activity is detected',
        'suspension3': 'Platform review is required',
        'suspension_note': 'During suspension, users may not be able to access certain platform features.',
        
        // Section 3 - Permanent
        'permanent_title': 'Permanent Account Termination',
        'permanent_desc': 'Accounts may be permanently terminated if serious violations occur.',
        'permanent_examples': 'Examples include:',
        'permanent1': 'Fraud or scams',
        'permanent2': 'Repeated abusive behavior',
        'permanent3': 'Illegal activities through the platform',
        'permanent4': 'Severe violations of platform conduct rules',
        'permanent_note': 'Once an account is permanently terminated, access to the platform may be restricted.',
        
        // Section 4 - User Requested
        'user_requested_title': 'User Requested Account Deletion',
        'user_requested_desc': 'Users may request the deletion of their own account if they no longer wish to use the platform.',
        'user_requested_process': 'Upon request:',
        'user_requested1': 'The account may be deactivated',
        'user_requested2': 'Certain personal information may be removed from active systems',
        'user_requested_note': 'However, some information may be retained if required for legal or security purposes.',
        
        // Section 5 - Platform Rights
        'platform_rights_title': 'Platform Rights',
        'platform_rights_desc': 'ShramikConnect reserves the right to:',
        'platform_rights1': 'Investigate suspicious activities',
        'platform_rights2': 'Restrict access to certain features',
        'platform_rights3': 'Remove accounts that threaten platform safety',
        'platform_rights_note': 'These actions help maintain a secure and reliable environment for all users.',
        
        // Section 6 - Effect
        'effect_title': 'Effect of Termination',
        'effect_desc': 'If an account is terminated:',
        'effect1': 'Access to the platform may be removed',
        'effect2': 'User profiles may become inactive',
        'effect3': 'Ongoing communication between users may be interrupted',
        'effect_note': 'Users should ensure they follow platform policies to avoid termination.',
        
        // Section 7 - Appeals
        'appeals_title': 'Appeals and Review',
        'appeals_desc': 'If a user believes their account was terminated incorrectly, they may contact platform support for review.',
        'appeals_requests': 'Requests for review may include:',
        'appeals1': 'Explanation of the situation',
        'appeals2': 'Supporting information or clarification',
        'appeals_note': 'ShramikConnect may review such requests but does not guarantee account restoration.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect enforces termination policies to maintain a safe, fair, and respectful environment for all users.',
        'important_notice_footer': 'Users are encouraged to follow platform rules and communicate responsibly to avoid account restrictions.',
        
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
        'termination_title': 'खाता समाप्ति नीति',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड उन स्थितियों की व्याख्या करता है जिनके तहत श्रमिककनेक्ट प्लेटफॉर्म पर उपयोगकर्ता खाते को निलंबित, प्रतिबंधित या स्थायी रूप से समाप्त किया जा सकता है। श्रमिककनेक्ट का लक्ष्य श्रमिकों और नियोक्ताओं के लिए एक सुरक्षित और भरोसेमंद प्लेटफॉर्म बनाए रखना है। प्लेटफॉर्म नीतियों का उल्लंघन करने वाले खातों पर उचित कार्रवाई की जा सकती है।',
        
        // Section 1 - Reasons
        'reasons_title': 'खाता समाप्ति के कारण',
        'reasons_desc': 'श्रमिककनेक्ट निम्नलिखित स्थितियों में उपयोगकर्ता खातों को निलंबित या समाप्त कर सकता है:',
        'reasons1': 'प्लेटफॉर्म नीतियों का बार-बार उल्लंघन',
        'reasons2': 'धोखाधड़ी गतिविधि या स्कैम',
        'reasons3': 'झूठी या भ्रामक जानकारी प्रदान करना',
        'reasons4': 'अन्य उपयोगकर्ताओं के प्रति उत्पीड़न या अपमानजनक व्यवहार',
        'reasons5': 'अवैध या निषिद्ध नौकरी अनुरोध पोस्ट करना',
        'reasons_note': 'प्लेटफॉर्म समुदाय की सुरक्षा के लिए आवश्यक होने पर कार्रवाई करने का अधिकार सुरक्षित रखता है।',
        
        // Section 2 - Suspension
        'suspension_title': 'अस्थायी खाता निलंबन',
        'suspension_desc': 'कुछ मामलों में, खातों को स्थायी रूप से समाप्त करने के बजाय अस्थायी रूप से निलंबित किया जा सकता है।',
        'suspension_cases': 'अस्थायी निलंबन निम्नलिखित स्थितियों में हो सकता है:',
        'suspension1': 'मामूली नीति उल्लंघन की सूचना मिलने पर',
        'suspension2': 'संदिग्ध गतिविधि का पता चलने पर',
        'suspension3': 'प्लेटफॉर्म समीक्षा आवश्यक होने पर',
        'suspension_note': 'निलंबन के दौरान, उपयोगकर्ता कुछ प्लेटफॉर्म सुविधाओं तक पहुंचने में सक्षम नहीं हो सकते हैं।',
        
        // Section 3 - Permanent
        'permanent_title': 'स्थायी खाता समाप्ति',
        'permanent_desc': 'यदि गंभीर उल्लंघन होते हैं तो खातों को स्थायी रूप से समाप्त किया जा सकता है।',
        'permanent_examples': 'उदाहरणों में शामिल हैं:',
        'permanent1': 'धोखाधड़ी या स्कैम',
        'permanent2': 'बार-बार अपमानजनक व्यवहार',
        'permanent3': 'प्लेटफॉर्म के माध्यम से अवैध गतिविधियाँ',
        'permanent4': 'प्लेटफॉर्म आचरण नियमों का गंभीर उल्लंघन',
        'permanent_note': 'एक बार खाता स्थायी रूप से समाप्त हो जाने पर, प्लेटफॉर्म तक पहुंच प्रतिबंधित की जा सकती है।',
        
        // Section 4 - User Requested
        'user_requested_title': 'उपयोगकर्ता द्वारा अनुरोधित खाता हटाना',
        'user_requested_desc': 'यदि उपयोगकर्ता अब प्लेटफॉर्म का उपयोग नहीं करना चाहते हैं तो वे अपने खाते को हटाने का अनुरोध कर सकते हैं।',
        'user_requested_process': 'अनुरोध पर:',
        'user_requested1': 'खाता निष्क्रिय किया जा सकता है',
        'user_requested2': 'कुछ व्यक्तिगत जानकारी सक्रिय प्रणालियों से हटाई जा सकती है',
        'user_requested_note': 'हालांकि, कानूनी या सुरक्षा उद्देश्यों के लिए आवश्यक होने पर कुछ जानकारी बरकरार रखी जा सकती है।',
        
        // Section 5 - Platform Rights
        'platform_rights_title': 'प्लेटफॉर्म के अधिकार',
        'platform_rights_desc': 'श्रमिककनेक्ट निम्नलिखित का अधिकार सुरक्षित रखता है:',
        'platform_rights1': 'संदिग्ध गतिविधियों की जांच करना',
        'platform_rights2': 'कुछ सुविधाओं तक पहुंच प्रतिबंधित करना',
        'platform_rights3': 'उन खातों को हटाना जो प्लेटफॉर्म सुरक्षा को खतरा पहुंचाते हैं',
        'platform_rights_note': 'ये कार्रवाइयां सभी उपयोगकर्ताओं के लिए एक सुरक्षित और विश्वसनीय वातावरण बनाए रखने में मदद करती हैं।',
        
        // Section 6 - Effect
        'effect_title': 'समाप्ति का प्रभाव',
        'effect_desc': 'यदि कोई खाता समाप्त किया जाता है:',
        'effect1': 'प्लेटफॉर्म तक पहुंच हटाई जा सकती है',
        'effect2': 'उपयोगकर्ता प्रोफाइल निष्क्रिय हो सकती हैं',
        'effect3': 'उपयोगकर्ताओं के बीच चल रहे संचार बाधित हो सकते हैं',
        'effect_note': 'उपयोगकर्ताओं को समाप्ति से बचने के लिए प्लेटफॉर्म नीतियों का पालन करना सुनिश्चित करना चाहिए।',
        
        // Section 7 - Appeals
        'appeals_title': 'अपील और समीक्षा',
        'appeals_desc': 'यदि किसी उपयोगकर्ता का मानना है कि उनका खाता गलत तरीके से समाप्त किया गया था, तो वे समीक्षा के लिए प्लेटफॉर्म समर्थन से संपर्क कर सकते हैं।',
        'appeals_requests': 'समीक्षा के अनुरोध में शामिल हो सकते हैं:',
        'appeals1': 'स्थिति का स्पष्टीकरण',
        'appeals2': 'समर्थन जानकारी या स्पष्टीकरण',
        'appeals_note': 'श्रमिककनेक्ट ऐसे अनुरोधों की समीक्षा कर सकता है लेकिन खाता बहाली की गारंटी नहीं देता है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट सभी उपयोगकर्ताओं के लिए एक सुरक्षित, निष्पक्ष और सम्मानजनक वातावरण बनाए रखने के लिए समाप्ति नीतियों को लागू करता है।',
        'important_notice_footer': 'उपयोगकर्ताओं को खाता प्रतिबंधों से बचने के लिए प्लेटफॉर्म नियमों का पालन करने और जिम्मेदारी से संवाद करने के लिए प्रोत्साहित किया जाता है।',
        
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
        'termination_title': 'खाते समाप्ती धोरण',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग अशा परिस्थिती स्पष्ट करतो ज्यांच्या अंतर्गत श्रमिककनेक्ट प्लॅटफॉर्मवरील वापरकर्ता खाते निलंबित, प्रतिबंधित किंवा कायमचे समाप्त केले जाऊ शकते. श्रमिककनेक्टचे उद्दिष्ट कामगार आणि नियोक्त्यांसाठी सुरक्षित आणि विश्वासार्ह प्लॅटफॉर्म राखणे आहे. प्लॅटफॉर्म धोरणांचे उल्लंघन करणाऱ्या खात्यांवर योग्य कारवाई केली जाऊ शकते.',
        
        // Section 1 - Reasons
        'reasons_title': 'खाते समाप्तीची कारणे',
        'reasons_desc': 'श्रमिककनेक्ट अशा परिस्थितीत वापरकर्ता खाती निलंबित किंवा समाप्त करू शकते:',
        'reasons1': 'प्लॅटफॉर्म धोरणांचे वारंवार उल्लंघन',
        'reasons2': 'फसवणूक क्रियाकलाप किंवा स्कॅम',
        'reasons3': 'खोटी किंवा दिशाभूल करणारी माहिती प्रदान करणे',
        'reasons4': 'इतर वापरकर्त्यांबद्दल छळ किंवा अपमानास्पद वर्तन',
        'reasons5': 'बेकायदेशीर किंवा प्रतिबंधित नोकरी विनंत्या पोस्ट करणे',
        'reasons_note': 'समुदायाच्या संरक्षणासाठी आवश्यक असताना प्लॅटफॉर्म कारवाई करण्याचा अधिकार राखून ठेवते.',
        
        // Section 2 - Suspension
        'suspension_title': 'तात्पुरते खाते निलंबन',
        'suspension_desc': 'काही प्रकरणांमध्ये, खाती कायमची समाप्त करण्याऐवजी तात्पुरती निलंबित केली जाऊ शकतात.',
        'suspension_cases': 'तात्पुरते निलंबन या प्रकरणांमध्ये होऊ शकते:',
        'suspension1': 'किरकोळ धोरण उल्लंघनाची तक्रार केली असता',
        'suspension2': 'संशयास्पद क्रियाकलाप आढळल्यास',
        'suspension3': 'प्लॅटफॉर्म पुनरावलोकन आवश्यक असल्यास',
        'suspension_note': 'निलंबनादरम्यान, वापरकर्ते काही प्लॅटफॉर्म वैशिष्ट्यांमध्ये प्रवेश करू शकणार नाहीत.',
        
        // Section 3 - Permanent
        'permanent_title': 'कायमचे खाते समाप्ती',
        'permanent_desc': 'गंभीर उल्लंघन झाल्यास खाती कायमची समाप्त केली जाऊ शकतात.',
        'permanent_examples': 'उदाहरणांमध्ये हे समाविष्ट आहे:',
        'permanent1': 'फसवणूक किंवा स्कॅम',
        'permanent2': 'वारंवार अपमानास्पद वर्तन',
        'permanent3': 'प्लॅटफॉर्मद्वारे बेकायदेशीर क्रियाकलाप',
        'permanent4': 'प्लॅटफॉर्म आचरण नियमांचे गंभीर उल्लंघन',
        'permanent_note': 'एकदा खाते कायमचे समाप्त झाल्यानंतर, प्लॅटफॉर्ममध्ये प्रवेश प्रतिबंधित केला जाऊ शकतो.',
        
        // Section 4 - User Requested
        'user_requested_title': 'वापरकर्त्याने विनंती केलेले खाते हटवणे',
        'user_requested_desc': 'वापरकर्ते यापुढे प्लॅटफॉर्म वापरू इच्छित नसल्यास त्यांचे स्वतःचे खाते हटवण्याची विनंती करू शकतात.',
        'user_requested_process': 'विनंती केल्यावर:',
        'user_requested1': 'खाते निष्क्रिय केले जाऊ शकते',
        'user_requested2': 'विशिष्ट वैयक्तिक माहिती सक्रिय प्रणालींमधून काढून टाकली जाऊ शकते',
        'user_requested_note': 'तथापि, कायदेशीर किंवा सुरक्षा उद्देशांसाठी आवश्यक असल्यास काही माहिती ठेवली जाऊ शकते.',
        
        // Section 5 - Platform Rights
        'platform_rights_title': 'प्लॅटफॉर्मचे अधिकार',
        'platform_rights_desc': 'श्रमिककनेक्ट हे अधिकार राखून ठेवते:',
        'platform_rights1': 'संशयास्पद क्रियाकलापांची तपासणी करणे',
        'platform_rights2': 'काही वैशिष्ट्यांमध्ये प्रवेश प्रतिबंधित करणे',
        'platform_rights3': 'प्लॅटफॉर्म सुरक्षिततेस धोका निर्माण करणारी खाती काढून टाकणे',
        'platform_rights_note': 'या क्रिया सर्व वापरकर्त्यांसाठी सुरक्षित आणि विश्वासार्ह वातावरण राखण्यास मदत करतात.',
        
        // Section 6 - Effect
        'effect_title': 'समाप्तीचा परिणाम',
        'effect_desc': 'जर एखादे खाते समाप्त केले गेले तर:',
        'effect1': 'प्लॅटफॉर्ममध्ये प्रवेश काढून टाकला जाऊ शकतो',
        'effect2': 'वापरकर्ता प्रोफाइल निष्क्रिय होऊ शकतात',
        'effect3': 'वापरकर्त्यांमधील चालू संप्रेषण व्यत्ययित होऊ शकते',
        'effect_note': 'समाप्ती टाळण्यासाठी वापरकर्त्यांनी प्लॅटफॉर्म धोरणांचे पालन केले पाहिजे.',
        
        // Section 7 - Appeals
        'appeals_title': 'अपील आणि पुनरावलोकन',
        'appeals_desc': 'जर एखाद्या वापरकर्त्याचा विश्वास असेल की त्यांचे खाते चुकीच्या पद्धतीने समाप्त केले गेले आहे, तर ते पुनरावलोकनासाठी प्लॅटफॉर्म समर्थनाशी संपर्क साधू शकतात.',
        'appeals_requests': 'पुनरावलोकनाच्या विनंत्यांमध्ये हे समाविष्ट असू शकते:',
        'appeals1': 'परिस्थितीचे स्पष्टीकरण',
        'appeals2': 'समर्थन माहिती किंवा स्पष्टीकरण',
        'appeals_note': 'श्रमिककनेक्ट अशा विनंत्या पुनरावलोकन करू शकते परंतु खाते पुनर्संचयित करण्याची हमी देत नाही.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट सर्व वापरकर्त्यांसाठी सुरक्षित, न्याय्य आणि आदरयुक्त वातावरण राखण्यासाठी समाप्ती धोरणे लागू करते.',
        'important_notice_footer': 'खाते निर्बंध टाळण्यासाठी वापरकर्त्यांनी प्लॅटफॉर्म नियमांचे पालन करण्यास आणि जबाबदारीने संवाद साधण्यास प्रोत्साहित केले जाते.',
        
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
    console.log('Termination Policy page initialized');

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