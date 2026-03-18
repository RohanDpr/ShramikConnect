/**
 * THIRD-PARTY DATA SHARING PAGE - PRIVACY POLICY
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
        'sharing_title': 'Third-Party Data Sharing',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'ShramikConnect values your privacy and does not sell your personal information to third parties. However, there are limited circumstances where we may share data with trusted third-party service providers to operate and improve our platform. This section explains when and how we share information with third parties.',
        
        // Section 1 - No Sell
        'no_sell_title': 'We Do Not Sell Your Data',
        'no_sell_desc': '<strong>ShramikConnect does not sell, rent, or trade your personal information to third parties for marketing or advertising purposes.</strong> Your data is only used to provide and improve our platform services as described in this privacy policy.',
        
        // Section 2 - Service Providers
        'service_providers_title': 'Service Providers and Infrastructure',
        'service_providers_desc': 'We engage trusted third-party service providers to help us operate our platform. These providers are contractually obligated to protect your data and only use it for the specific services they provide to us.',
        'hosting_subtitle': 'Hosting Services',
        'hosting_desc': '<strong>Render</strong> - Our platform is hosted on Render\'s cloud infrastructure. Render may have access to data stored on their servers as necessary to provide hosting services, but they are contractually bound to maintain confidentiality and security.',
        'analytics_subtitle': 'Analytics and Monitoring',
        'analytics_desc': 'We may use analytics tools to understand how users interact with our platform. These tools collect anonymous usage data and do not identify individual users.',
        'service_providers_note': 'All service providers are carefully vetted and must agree to strict data protection requirements before accessing any user information.',
        
        // Section 3 - YouTube
        'youtube_title': 'YouTube and Embedded Content',
        'youtube_desc': 'Our platform may display embedded YouTube videos to help users understand how ShramikConnect works. When you watch these videos:',
        'youtube1': 'YouTube may collect data about your interaction with the video, including viewing history and device information.',
        'youtube2': 'This data collection is governed by Google\'s Privacy Policy, not by ShramikConnect\'s privacy policy.',
        'youtube3': 'We do not control what information YouTube collects or how they use it.',
        'youtube_note': 'You can review Google\'s privacy policy to understand how YouTube handles your data: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>',
        
        // Section 4 - Legal Requirements
        'legal_sharing_title': 'Legal Requirements and Law Enforcement',
        'legal_sharing_desc': 'We may disclose your personal information if required by law or in response to valid legal requests, such as:',
        'legal1': 'Court orders or legal processes',
        'legal2': 'Requests from law enforcement or government authorities',
        'legal3': 'Compliance with applicable laws and regulations',
        'legal_sharing_note': 'When permitted by law, we will make reasonable efforts to notify users of such requests before disclosing their information.',
        
        // Section 5 - Protection of Platform Rights
        'protection_title': 'Protection of Platform Rights',
        'protection_desc': 'We may share information when necessary to:',
        'protection1': 'Protect the rights, property, or safety of ShramikConnect, our users, or others',
        'protection2': 'Investigate and prevent fraud, security issues, or technical problems',
        'protection3': 'Enforce our Terms and Conditions or other platform policies',
        'protection_note': 'In such cases, we will only share information to the extent reasonably necessary to address the situation.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect does not sell your personal information to third parties. Any sharing of data is limited to specific, legitimate purposes as described in this policy, and we require all third parties to maintain appropriate security and confidentiality measures.',
        'important_notice_footer': 'If you have questions about how your data is shared, please contact us at <strong>support@shramikconnect.in</strong>.',
        
        // Footer Button
        'back_to_privacy': 'Back to Privacy Policy'
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
        'sharing_title': 'तृतीय-पक्ष डेटा साझाकरण',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'श्रमिककनेक्ट आपकी गोपनीयता को महत्व देता है और आपकी व्यक्तिगत जानकारी को तृतीय पक्षों को नहीं बेचता है। हालांकि, कुछ सीमित परिस्थितियां हैं जहां हम अपने प्लेटफॉर्म को संचालित और बेहतर बनाने के लिए विश्वसनीय तृतीय-पक्ष सेवा प्रदाताओं के साथ डेटा साझा कर सकते हैं। यह खंड बताता है कि हम तृतीय पक्षों के साथ कब और कैसे जानकारी साझा करते हैं।',
        
        // Section 1 - No Sell
        'no_sell_title': 'हम आपका डेटा नहीं बेचते हैं',
        'no_sell_desc': '<strong>श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी को मार्केटिंग या विज्ञापन उद्देश्यों के लिए तृतीय पक्षों को नहीं बेचता, किराए पर नहीं देता या व्यापार नहीं करता है।</strong> आपका डेटा केवल इस गोपनीयता नीति में वर्णित अनुसार हमारी प्लेटफॉर्म सेवाएं प्रदान करने और सुधारने के लिए उपयोग किया जाता है।',
        
        // Section 2 - Service Providers
        'service_providers_title': 'सेवा प्रदाता और बुनियादी ढांचा',
        'service_providers_desc': 'हम अपने प्लेटफॉर्म को संचालित करने में मदद करने के लिए विश्वसनीय तृतीय-पक्ष सेवा प्रदाताओं को शामिल करते हैं। ये प्रदाता आपके डेटा की सुरक्षा करने और केवल हमें प्रदान की जाने वाली विशिष्ट सेवाओं के लिए इसका उपयोग करने के लिए संविदात्मक रूप से बाध्य हैं।',
        'hosting_subtitle': 'होस्टिंग सेवाएं',
        'hosting_desc': '<strong>Render</strong> - हमारा प्लेटफॉर्म Render के क्लाउड इंफ्रास्ट्रक्चर पर होस्ट किया गया है। होस्टिंग सेवाएं प्रदान करने के लिए आवश्यक होने पर Render के पास उनके सर्वर पर संग्रहीत डेटा तक पहुंच हो सकती है, लेकिन वे गोपनीयता और सुरक्षा बनाए रखने के लिए संविदात्मक रूप से बाध्य हैं।',
        'analytics_subtitle': 'एनालिटिक्स और निगरानी',
        'analytics_desc': 'हम यह समझने के लिए एनालिटिक्स टूल का उपयोग कर सकते हैं कि उपयोगकर्ता हमारे प्लेटफॉर्म के साथ कैसे इंटरैक्ट करते हैं। ये उपकरण अज्ञात उपयोग डेटा एकत्र करते हैं और व्यक्तिगत उपयोगकर्ताओं की पहचान नहीं करते हैं।',
        'service_providers_note': 'सभी सेवा प्रदाताओं की सावधानीपूर्वक जांच की जाती है और किसी भी उपयोगकर्ता जानकारी तक पहुंचने से पहले सख्त डेटा सुरक्षा आवश्यकताओं से सहमत होना चाहिए।',
        
        // Section 3 - YouTube
        'youtube_title': 'YouTube और एम्बेडेड सामग्री',
        'youtube_desc': 'हमारा प्लेटफॉर्म उपयोगकर्ताओं को यह समझने में मदद करने के लिए एम्बेडेड YouTube वीडियो प्रदर्शित कर सकता है कि श्रमिककनेक्ट कैसे काम करता है। जब आप ये वीडियो देखते हैं:',
        'youtube1': 'YouTube आपके वीडियो के साथ बातचीत के बारे में डेटा एकत्र कर सकता है, जिसमें देखने का इतिहास और डिवाइस जानकारी शामिल है।',
        'youtube2': 'यह डेटा संग्रह Google की गोपनीयता नीति द्वारा नियंत्रित किया जाता है, न कि श्रमिककनेक्ट की गोपनीयता नीति द्वारा।',
        'youtube3': 'हम नियंत्रित नहीं करते कि YouTube क्या जानकारी एकत्र करता है या वे इसका उपयोग कैसे करते हैं।',
        'youtube_note': 'YouTube आपके डेटा को कैसे संभालता है, यह समझने के लिए आप Google की गोपनीयता नीति देख सकते हैं: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>',
        
        // Section 4 - Legal Requirements
        'legal_sharing_title': 'कानूनी आवश्यकताएं और कानून प्रवर्तन',
        'legal_sharing_desc': 'हम आपकी व्यक्तिगत जानकारी का खुलासा कर सकते हैं यदि कानून द्वारा आवश्यक हो या वैध कानूनी अनुरोधों के जवाब में, जैसे:',
        'legal1': 'अदालत के आदेश या कानूनी प्रक्रियाएं',
        'legal2': 'कानून प्रवर्तन या सरकारी अधिकारियों से अनुरोध',
        'legal3': 'लागू कानूनों और विनियमों का अनुपालन',
        'legal_sharing_note': 'जब कानून द्वारा अनुमति हो, तो हम अपनी जानकारी का खुलासा करने से पहले ऐसे अनुरोधों के बारे में उपयोगकर्ताओं को सूचित करने के लिए उचित प्रयास करेंगे।',
        
        // Section 5 - Protection of Platform Rights
        'protection_title': 'प्लेटफॉर्म अधिकारों का संरक्षण',
        'protection_desc': 'हम आवश्यक होने पर जानकारी साझा कर सकते हैं:',
        'protection1': 'श्रमिककनेक्ट, हमारे उपयोगकर्ताओं या अन्य लोगों के अधिकारों, संपत्ति या सुरक्षा की रक्षा करना',
        'protection2': 'धोखाधड़ी, सुरक्षा मुद्दों या तकनीकी समस्याओं की जांच और रोकथाम करना',
        'protection3': 'हमारे नियम और शर्तों या अन्य प्लेटफॉर्म नीतियों को लागू करना',
        'protection_note': 'ऐसे मामलों में, हम केवल स्थिति को संबोधित करने के लिए उचित सीमा तक जानकारी साझा करेंगे।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी को तृतीय पक्षों को नहीं बेचता है। डेटा का कोई भी साझाकरण इस नीति में वर्णित विशिष्ट, वैध उद्देश्यों तक सीमित है, और हम सभी तृतीय पक्षों को उचित सुरक्षा और गोपनीयता उपाय बनाए रखने की आवश्यकता रखते हैं।',
        'important_notice_footer': 'यदि आपके डेटा को कैसे साझा किया जाता है, इसके बारे में प्रश्न हैं, तो कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें।',
        
        // Footer Button
        'back_to_privacy': 'गोपनीयता नीति पर वापस जाएं'
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
        'sharing_title': 'तृतीय-पक्ष डेटा सामायिकरण',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'श्रमिककनेक्ट तुमच्या गोपनीयतेला महत्त्व देते आणि तुमची वैयक्तिक माहिती तृतीय पक्षांना विकत नाही. तथापि, आमचे प्लॅटफॉर्म चालविण्यासाठी आणि सुधारण्यासाठी आम्ही मर्यादित परिस्थितीत विश्वासू तृतीय-पक्ष सेवा प्रदात्यांसह डेटा सामायिक करू शकतो. हा विभाग स्पष्ट करतो की आम्ही तृतीय पक्षांसह केव्हा आणि कशी माहिती सामायिक करतो.',
        
        // Section 1 - No Sell
        'no_sell_title': 'आम्ही तुमचा डेटा विकत नाही',
        'no_sell_desc': '<strong>श्रमिककनेक्ट तुमची वैयक्तिक माहिती विपणन किंवा जाहिरात उद्देशांसाठी तृतीय पक्षांना विकत नाही, भाड्याने देत नाही किंवा व्यापार करत नाही.</strong> तुमचा डेटा फक्त या गोपनीयता धोरणात वर्णन केल्याप्रमाणे आमच्या प्लॅटफॉर्म सेवा प्रदान करण्यासाठी आणि सुधारण्यासाठी वापरला जातो.',
        
        // Section 2 - Service Providers
        'service_providers_title': 'सेवा प्रदाते आणि पायाभूत सुविधा',
        'service_providers_desc': 'आमचे प्लॅटफॉर्म चालविण्यात मदत करण्यासाठी आम्ही विश्वासू तृतीय-पक्ष सेवा प्रदात्यांना सामील करतो. हे प्रदाते तुमच्या डेटाचे संरक्षण करण्यासाठी आणि ते आम्हाला प्रदान केलेल्या विशिष्ट सेवांसाठीच वापरण्यासाठी कराराने बांधील आहेत.',
        'hosting_subtitle': 'होस्टिंग सेवा',
        'hosting_desc': '<strong>Render</strong> - आमचे प्लॅटफॉर्म Render च्या क्लाउड इन्फ्रास्ट्रक्चरवर होस्ट केले आहे. होस्टिंग सेवा प्रदान करण्यासाठी आवश्यक असल्यास Render ला त्यांच्या सर्व्हरवर संग्रहित डेटामध्ये प्रवेश असू शकतो, परंतु ते गोपनीयता आणि सुरक्षा राखण्यासाठी कराराने बांधील आहेत.',
        'analytics_subtitle': 'विश्लेषण आणि निरीक्षण',
        'analytics_desc': 'वापरकर्ते आमच्या प्लॅटफॉर्मशी कसे संवाद साधतात हे समजून घेण्यासाठी आम्ही विश्लेषण साधने वापरू शकतो. ही साधने अज्ञात वापर डेटा गोळा करतात आणि वैयक्तिक वापरकर्त्यांना ओळखत नाहीत.',
        'service_providers_note': 'सर्व सेवा प्रदात्यांची काळजीपूर्वक तपासणी केली जाते आणि कोणत्याही वापरकर्त्याच्या माहितीमध्ये प्रवेश करण्यापूर्वी कठोर डेटा संरक्षण आवश्यकतांशी सहमत असणे आवश्यक आहे.',
        
        // Section 3 - YouTube
        'youtube_title': 'YouTube आणि एम्बेड केलेली सामग्री',
        'youtube_desc': 'श्रमिककनेक्ट कसे कार्य करते हे समजून घेण्यास वापरकर्त्यांना मदत करण्यासाठी आमचे प्लॅटफॉर्म एम्बेड केलेले YouTube व्हिडिओ प्रदर्शित करू शकते. जेव्हा तुम्ही हे व्हिडिओ पाहता:',
        'youtube1': 'YouTube तुमच्या व्हिडिओशी संवादाबद्दल डेटा गोळा करू शकतो, ज्यामध्ये पाहण्याचा इतिहास आणि डिव्हाइस माहिती समाविष्ट आहे.',
        'youtube2': 'हा डेटा संग्रह Google च्या गोपनीयता धोरणाद्वारे नियंत्रित केला जातो, श्रमिककनेक्टच्या गोपनीयता धोरणाद्वारे नाही.',
        'youtube3': 'YouTube कोणती माहिती गोळा करतो किंवा ते ती कशी वापरतात यावर आमचे नियंत्रण नाही.',
        'youtube_note': 'YouTube तुमचा डेटा कसा हाताळतो हे समजून घेण्यासाठी तुम्ही Google चे गोपनीयता धोरण पाहू शकता: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>',
        
        // Section 4 - Legal Requirements
        'legal_sharing_title': 'कायदेशीर आवश्यकता आणि कायदा अंमलबजावणी',
        'legal_sharing_desc': 'कायद्याने आवश्यक असल्यास किंवा वैध कायदेशीर विनंत्यांना प्रतिसाद म्हणून आम्ही तुमची वैयक्तिक माहिती उघड करू शकतो, जसे की:',
        'legal1': 'न्यायालयाचे आदेश किंवा कायदेशीर प्रक्रिया',
        'legal2': 'कायदा अंमलबजावणी किंवा सरकारी अधिकाऱ्यांकडून विनंत्या',
        'legal3': 'लागू कायदे आणि नियमांचे पालन',
        'legal_sharing_note': 'कायद्याने परवानगी दिल्यास, आम्ही त्यांची माहिती उघड करण्यापूर्वी अशा विनंत्यांबद्दल वापरकर्त्यांना सूचित करण्यासाठी योग्य प्रयत्न करू.',
        
        // Section 5 - Protection of Platform Rights
        'protection_title': 'प्लॅटफॉर्म अधिकारांचे संरक्षण',
        'protection_desc': 'आवश्यक असताना आम्ही माहिती सामायिक करू शकतो:',
        'protection1': 'श्रमिककनेक्ट, आमच्या वापरकर्त्यांचे किंवा इतरांचे अधिकार, मालमत्ता किंवा सुरक्षिततेचे संरक्षण करणे',
        'protection2': 'फसवणूक, सुरक्षा समस्या किंवा तांत्रिक समस्यांची तपासणी करणे आणि प्रतिबंध करणे',
        'protection3': 'आमच्या अटी व नियम किंवा इतर प्लॅटफॉर्म धोरणे लागू करणे',
        'protection_note': 'अशा प्रकरणांमध्ये, आम्ही परिस्थिती सोडवण्यासाठी आवश्यक तेवढ्याच मर्यादेत माहिती सामायिक करू.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट तुमची वैयक्तिक माहिती तृतीय पक्षांना विकत नाही. डेटाचे कोणतेही सामायिकरण या धोरणात वर्णन केलेल्या विशिष्ट, वैध उद्देशांपुरते मर्यादित आहे आणि आम्ही सर्व तृतीय पक्षांना योग्य सुरक्षा आणि गोपनीयता उपाय राखण्याची आवश्यकता असते.',
        'important_notice_footer': 'तुमचा डेटा कसा सामायिक केला जातो याबद्दल प्रश्न असल्यास, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा.',
        
        // Footer Button
        'back_to_privacy': 'गोपनीयता धोरणावर परत जा'
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
            if (element.tagName === 'A' && element.hasAttribute('href')) {
                // For links, we don't change the href, just the text content if needed
                if (key === 'youtube_note') {
                    element.innerHTML = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            } else {
                element.innerHTML = translation[key];
            }
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
    console.log('Third-Party Data Sharing page initialized');

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