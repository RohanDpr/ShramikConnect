/**
 * DISPUTE RESOLUTION PAGE - TERMS & CONDITIONS
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
        'dispute_title': 'Dispute Resolution Policy',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains how disputes related to the use of the ShramikConnect platform may be handled. ShramikConnect provides a platform that connects workers and employers. Since job agreements and payments occur directly between users, disputes should primarily be resolved between the involved parties.',
        
        // Section 1 - Direct Resolution
        'direct_title': 'Direct Resolution Between Users',
        'direct_desc': 'If a disagreement or conflict arises between a worker and an employer, both parties are encouraged to communicate directly and attempt to resolve the issue.',
        'direct_includes': 'This may include discussions regarding:',
        'direct1': 'Job expectations',
        'direct2': 'Work completion',
        'direct3': 'Payment agreements',
        'direct4': 'Job cancellation or misunderstandings',
        'direct_note': 'Direct communication often helps resolve disputes quickly and effectively.',
        
        // Section 2 - Platform Assistance
        'assistance_title': 'Platform Assistance',
        'assistance_desc': 'ShramikConnect may provide limited assistance when disputes are reported.',
        'assistance_review': 'The platform may review complaints related to:',
        'assistance1': 'Misconduct',
        'assistance2': 'Misleading job postings',
        'assistance3': 'Abusive behavior between users',
        'assistance_note': 'However, the platform does not act as a mediator for financial or contractual disputes.',
        
        // Section 3 - Payment Disputes
        'payment_dispute_title': 'Payment Disputes',
        'payment_dispute_desc': 'ShramikConnect does not process payments between workers and employers.',
        'payment_dispute_because': 'Because of this:',
        'payment1': 'The platform cannot hold or release payments',
        'payment2': 'The platform cannot enforce payment agreements',
        'payment3': 'Payment conflicts must be resolved directly between the parties involved',
        'payment_note': 'Users are encouraged to clearly discuss payment terms before starting work.',
        
        // Section 4 - Documentation
        'documentation_title': 'Documentation and Communication',
        'documentation_desc': 'In case of disputes, users are encouraged to maintain clear communication and keep records of important details such as:',
        'doc1': 'Job descriptions',
        'doc2': 'Agreed payment amounts',
        'doc3': 'Work timelines',
        'doc4': 'Messages exchanged between users',
        'documentation_note': 'These records may help both parties clarify misunderstandings.',
        
        // Section 5 - Legal Resolution
        'legal_title': 'Legal Resolution',
        'legal_desc': 'If a dispute cannot be resolved through direct communication, users may choose to pursue resolution through appropriate legal channels.',
        'legal_jurisdiction': 'Any legal matters related to the use of the ShramikConnect platform may fall under the jurisdiction of courts located in Buldhana District, Maharashtra, India.',
        'legal_note': 'Users are responsible for handling their legal matters independently.',
        
        // Section 6 - Platform Neutrality
        'neutrality_title': 'Platform Neutrality',
        'neutrality_desc': 'ShramikConnect maintains a neutral role in disputes between workers and employers.',
        'neutrality_guarantee': 'The platform does not guarantee:',
        'neutrality1': 'Job outcomes',
        'neutrality2': 'Work quality',
        'neutrality3': 'Payment fulfillment',
        'neutrality_note': 'Its primary role is to provide a connection platform for users.',
        
        // Section 7 - Responsible Use
        'responsible_title': 'Responsible Use of the Platform',
        'responsible_desc': 'Users are encouraged to act responsibly when entering work arrangements through the platform.',
        'responsible_note': 'Clear communication, transparency, and mutual respect can significantly reduce the likelihood of disputes.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect encourages users to resolve disputes respectfully and responsibly.',
        'important_notice_footer': 'The platform\'s role is limited to connecting workers and employers and does not extend to managing work agreements or enforcing financial arrangements.',
        
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
        'dispute_title': 'विवाद समाधान नीति',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड बताता है कि श्रमिककनेक्ट प्लेटफॉर्म के उपयोग से संबंधित विवादों को कैसे हल किया जा सकता है। श्रमिककनेक्ट एक प्लेटफॉर्म प्रदान करता है जो श्रमिकों और नियोक्ताओं को जोड़ता है। चूंकि नौकरी के समझौते और भुगतान सीधे उपयोगकर्ताओं के बीच होते हैं, इसलिए विवादों को मुख्य रूप से शामिल पक्षों के बीच हल किया जाना चाहिए।',
        
        // Section 1 - Direct Resolution
        'direct_title': 'उपयोगकर्ताओं के बीच सीधा समाधान',
        'direct_desc': 'यदि किसी कामगार और नियोक्ता के बीच असहमति या संघर्ष उत्पन्न होता है, तो दोनों पक्षों को सीधे संवाद करने और मुद्दे को हल करने का प्रयास करने के लिए प्रोत्साहित किया जाता है।',
        'direct_includes': 'इसमें निम्नलिखित के बारे में चर्चा शामिल हो सकती है:',
        'direct1': 'नौकरी की अपेक्षाएं',
        'direct2': 'काम पूरा होना',
        'direct3': 'भुगतान समझौते',
        'direct4': 'नौकरी रद्द करना या गलतफहमियां',
        'direct_note': 'सीधा संचार अक्सर विवादों को जल्दी और प्रभावी ढंग से हल करने में मदद करता है।',
        
        // Section 2 - Platform Assistance
        'assistance_title': 'प्लेटफॉर्म सहायता',
        'assistance_desc': 'श्रमिककनेक्ट विवादों की रिपोर्ट होने पर सीमित सहायता प्रदान कर सकता है।',
        'assistance_review': 'प्लेटफॉर्म निम्नलिखित से संबंधित शिकायतों की समीक्षा कर सकता है:',
        'assistance1': 'दुराचार',
        'assistance2': 'भ्रामक नौकरी पोस्टिंग',
        'assistance3': 'उपयोगकर्ताओं के बीच अपमानजनक व्यवहार',
        'assistance_note': 'हालांकि, प्लेटफॉर्म वित्तीय या संविदात्मक विवादों के लिए मध्यस्थ के रूप में कार्य नहीं करता है।',
        
        // Section 3 - Payment Disputes
        'payment_dispute_title': 'भुगतान विवाद',
        'payment_dispute_desc': 'श्रमिककनेक्ट श्रमिकों और नियोक्ताओं के बीच भुगतान संसाधित नहीं करता है।',
        'payment_dispute_because': 'इस वजह से:',
        'payment1': 'प्लेटफॉर्म भुगतान रोक या जारी नहीं कर सकता',
        'payment2': 'प्लेटफॉर्म भुगतान समझौतों को लागू नहीं कर सकता',
        'payment3': 'भुगतान विवादों को सीधे शामिल पक्षों के बीच हल किया जाना चाहिए',
        'payment_note': 'उपयोगकर्ताओं को काम शुरू करने से पहले भुगतान की शर्तों पर स्पष्ट रूप से चर्चा करने के लिए प्रोत्साहित किया जाता है।',
        
        // Section 4 - Documentation
        'documentation_title': 'दस्तावेज़ीकरण और संचार',
        'documentation_desc': 'विवाद की स्थिति में, उपयोगकर्ताओं को स्पष्ट संचार बनाए रखने और महत्वपूर्ण विवरणों के रिकॉर्ड रखने के लिए प्रोत्साहित किया जाता है जैसे:',
        'doc1': 'नौकरी का विवरण',
        'doc2': 'सहमत भुगतान राशि',
        'doc3': 'काम की समयसीमा',
        'doc4': 'उपयोगकर्ताओं के बीच आदान-प्रदान किए गए संदेश',
        'documentation_note': 'ये रिकॉर्ड दोनों पक्षों को गलतफहमियों को स्पष्ट करने में मदद कर सकते हैं।',
        
        // Section 5 - Legal Resolution
        'legal_title': 'कानूनी समाधान',
        'legal_desc': 'यदि कोई विवाद सीधे संचार के माध्यम से हल नहीं किया जा सकता है, तो उपयोगकर्ता उचित कानूनी माध्यमों से समाधान का विकल्प चुन सकते हैं।',
        'legal_jurisdiction': 'श्रमिककनेक्ट प्लेटफॉर्म के उपयोग से संबंधित कोई भी कानूनी मामला बुलढाणा जिला, महाराष्ट्र, भारत में स्थित अदालतों के अधिकार क्षेत्र में आ सकता है।',
        'legal_note': 'उपयोगकर्ता अपने कानूनी मामलों को स्वतंत्र रूप से संभालने के लिए जिम्मेदार हैं।',
        
        // Section 6 - Platform Neutrality
        'neutrality_title': 'प्लेटफॉर्म तटस्थता',
        'neutrality_desc': 'श्रमिककनेक्ट श्रमिकों और नियोक्ताओं के बीच विवादों में तटस्थ भूमिका बनाए रखता है।',
        'neutrality_guarantee': 'प्लेटफॉर्म निम्नलिखित की गारंटी नहीं देता है:',
        'neutrality1': 'नौकरी के परिणाम',
        'neutrality2': 'काम की गुणवत्ता',
        'neutrality3': 'भुगतान पूर्ति',
        'neutrality_note': 'इसकी प्राथमिक भूमिका उपयोगकर्ताओं के लिए एक कनेक्शन प्लेटफॉर्म प्रदान करना है।',
        
        // Section 7 - Responsible Use
        'responsible_title': 'प्लेटफॉर्म का जिम्मेदार उपयोग',
        'responsible_desc': 'उपयोगकर्ताओं को प्लेटफॉर्म के माध्यम से कार्य व्यवस्था में प्रवेश करते समय जिम्मेदारी से कार्य करने के लिए प्रोत्साहित किया जाता है।',
        'responsible_note': 'स्पष्ट संचार, पारदर्शिता और आपसी सम्मान विवादों की संभावना को काफी कम कर सकते हैं।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट उपयोगकर्ताओं को विवादों को सम्मानपूर्वक और जिम्मेदारी से हल करने के लिए प्रोत्साहित करता है।',
        'important_notice_footer': 'प्लेटफॉर्म की भूमिका श्रमिकों और नियोक्ताओं को जोड़ने तक सीमित है और यह कार्य समझौतों के प्रबंधन या वित्तीय व्यवस्थाओं को लागू करने तक विस्तारित नहीं है।',
        
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
        'dispute_title': 'वाद निराकरण धोरण',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग स्पष्ट करतो की श्रमिककनेक्ट प्लॅटफॉर्मच्या वापराशी संबंधित वाद कसे हाताळले जाऊ शकतात. श्रमिककनेक्ट एक प्लॅटफॉर्म प्रदान करते जे कामगार आणि नियोक्त्यांना जोडते. नोकरीचे करार आणि देयके थेट वापरकर्त्यांमध्ये होत असल्याने, वाद प्रामुख्याने सहभागी पक्षांमध्ये सोडवले जावेत.',
        
        // Section 1 - Direct Resolution
        'direct_title': 'वापरकर्त्यांमध्ये थेट निराकरण',
        'direct_desc': 'जर कामगार आणि नियोक्ता यांच्यात मतभेद किंवा संघर्ष उद्भवला तर, दोन्ही पक्षांना थेट संवाद साधण्यास आणि समस्या सोडवण्याचा प्रयत्न करण्यास प्रोत्साहित केले जाते.',
        'direct_includes': 'यामध्ये याबद्दल चर्चा समाविष्ट असू शकते:',
        'direct1': 'नोकरीच्या अपेक्षा',
        'direct2': 'काम पूर्ण होणे',
        'direct3': 'पेमेंट करार',
        'direct4': 'नोकरी रद्द करणे किंवा गैरसमज',
        'direct_note': 'थेट संप्रेषण अनेकदा वाद त्वरीत आणि प्रभावीपणे सोडवण्यास मदत करते.',
        
        // Section 2 - Platform Assistance
        'assistance_title': 'प्लॅटफॉर्म सहाय्य',
        'assistance_desc': 'वादांची तक्रार केल्यावर श्रमिककनेक्ट मर्यादित सहाय्य प्रदान करू शकते.',
        'assistance_review': 'प्लॅटफॉर्म यांच्याशी संबंधित तक्रारींचे पुनरावलोकन करू शकते:',
        'assistance1': 'गैरवर्तन',
        'assistance2': 'दिशाभूल करणारी नोकरी पोस्टिंग',
        'assistance3': 'वापरकर्त्यांमधील अपमानास्पद वर्तन',
        'assistance_note': 'तथापि, प्लॅटफॉर्म आर्थिक किंवा करारात्मक वादांसाठी मध्यस्थ म्हणून कार्य करत नाही.',
        
        // Section 3 - Payment Disputes
        'payment_dispute_title': 'पेमेंट वाद',
        'payment_dispute_desc': 'श्रमिककनेक्ट कामगार आणि नियोक्ते यांच्यातील पेमेंटवर प्रक्रिया करत नाही.',
        'payment_dispute_because': 'यामुळे:',
        'payment1': 'प्लॅटफॉर्म पेमेंट रोखू किंवा रिलीझ करू शकत नाही',
        'payment2': 'प्लॅटफॉर्म पेमेंट करार लागू करू शकत नाही',
        'payment3': 'पेमेंट विवाद सहभागी पक्षांमध्ये थेट सोडवले जाणे आवश्यक आहे',
        'payment_note': 'काम सुरू करण्यापूर्वी वापरकर्त्यांनी पेमेंट अटींवर स्पष्टपणे चर्चा करण्यास प्रोत्साहित केले जाते.',
        
        // Section 4 - Documentation
        'documentation_title': 'दस्तऐवजीकरण आणि संप्रेषण',
        'documentation_desc': 'वाद झाल्यास, वापरकर्त्यांनी स्पष्ट संप्रेषण राखण्यास आणि महत्त्वाच्या तपशीलांच्या नोंदी ठेवण्यास प्रोत्साहित केले जाते जसे की:',
        'doc1': 'नोकरीचे वर्णन',
        'doc2': 'मान्य केलेली पेमेंट रक्कम',
        'doc3': 'कामाची वेळापत्रक',
        'doc4': 'वापरकर्त्यांमध्ये देवाणघेवाण केलेले संदेश',
        'documentation_note': 'या नोंदी दोन्ही पक्षांना गैरसमज स्पष्ट करण्यास मदत करू शकतात.',
        
        // Section 5 - Legal Resolution
        'legal_title': 'कायदेशीर निराकरण',
        'legal_desc': 'जर थेट संप्रेषणाद्वारे वाद सोडवता येत नसेल तर, वापरकर्ते योग्य कायदेशीर माध्यमांद्वारे निराकरण करण्याचा पर्याय निवडू शकतात.',
        'legal_jurisdiction': 'श्रमिककनेक्ट प्लॅटफॉर्मच्या वापराशी संबंधित कोणतेही कायदेशीर प्रकरण बुलढाणा जिल्हा, महाराष्ट्र, भारत येथील न्यायालयांच्या अधिकारक्षेत्रात येऊ शकते.',
        'legal_note': 'वापरकर्ते त्यांचे कायदेशीर प्रकरण स्वतंत्रपणे हाताळण्यासाठी जबाबदार आहेत.',
        
        // Section 6 - Platform Neutrality
        'neutrality_title': 'प्लॅटफॉर्म तटस्थता',
        'neutrality_desc': 'श्रमिककनेक्ट कामगार आणि नियोक्त्यांमधील वादांमध्ये तटस्थ भूमिका राखते.',
        'neutrality_guarantee': 'प्लॅटफॉर्म याची हमी देत नाही:',
        'neutrality1': 'नोकरीचे परिणाम',
        'neutrality2': 'कामाची गुणवत्ता',
        'neutrality3': 'पेमेंट पूर्तता',
        'neutrality_note': 'त्याची प्राथमिक भूमिका वापरकर्त्यांसाठी कनेक्शन प्लॅटफॉर्म प्रदान करणे आहे.',
        
        // Section 7 - Responsible Use
        'responsible_title': 'प्लॅटफॉर्मचा जबाबदार वापर',
        'responsible_desc': 'प्लॅटफॉर्मद्वारे कामाच्या व्यवस्था करताना वापरकर्त्यांनी जबाबदारीने वागण्यास प्रोत्साहित केले जाते.',
        'responsible_note': 'स्पष्ट संप्रेषण, पारदर्शकता आणि परस्पर आदर वादाची शक्यता लक्षणीयरीत्या कमी करू शकतात.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट वापरकर्त्यांना वाद आदरपूर्वक आणि जबाबदारीने सोडवण्यास प्रोत्साहित करते.',
        'important_notice_footer': 'प्लॅटफॉर्मची भूमिका कामगार आणि नियोक्त्यांना जोडण्यापुरती मर्यादित आहे आणि कामाचे करार व्यवस्थापित करण्यापर्यंत किंवा आर्थिक व्यवस्था लागू करण्यापर्यंत विस्तारित नाही.',
        
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
    console.log('Dispute Resolution page initialized');

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