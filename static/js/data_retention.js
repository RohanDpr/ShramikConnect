/**
 * DATA RETENTION PAGE - PRIVACY POLICY
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
        'retention_title': 'Data Retention',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains how long ShramikConnect retains your personal information, the criteria we use to determine retention periods, and what happens to your data when you delete your account. We retain data only as long as necessary to provide our services and fulfill the purposes described in this privacy policy.',
        
        // Section 1 - General Principle
        'general_title': 'General Retention Principle',
        'general_desc': 'ShramikConnect retains your personal information only for as long as necessary to:',
        'general1': 'Provide you with access to our platform and services',
        'general2': 'Fulfill the purposes for which the information was collected',
        'general3': 'Comply with legal and regulatory obligations',
        'general4': 'Resolve disputes and enforce our agreements',
        'general_note': 'Once the retention period expires, your personal information is securely deleted or anonymized so that it can no longer be associated with you.',
        
        // Section 2 - Active Account
        'active_title': 'Active Account Data Retention',
        'active_desc': 'While your account is active, we retain your personal information to provide you with uninterrupted access to our services:',
        'active_profile_title': 'Profile Information',
        'active_profile_desc': 'Retained for the entire duration your account remains active',
        'active_activity_title': 'Activity History',
        'active_activity_desc': 'Job applications, messages, and interactions are retained while your account is active',
        'active_ratings_title': 'Ratings and Feedback',
        'active_ratings_desc': 'Ratings you give and receive are retained as part of your profile history',
        'active_badge': 'Active Account',
        
        // Section 3 - Inactive Account
        'inactive_title': 'Inactive Account Deactivation',
        'inactive_desc': 'To maintain data accuracy and reduce security risks, we have an inactive account policy:',
        'inactive_period_title': '12-Month Inactivity Period',
        'inactive_period_desc': 'Accounts that remain inactive for <strong>12 consecutive months</strong> may be automatically deactivated. An account is considered inactive if the user has not logged in or performed any platform activity during this period.',
        'inactive_note': 'Before deactivation, we may attempt to notify you using the contact information associated with your account. After deactivation, you can reactivate your account by simply logging in again.',
        
        // Section 4 - Account Deletion
        'deletion_process_title': 'Account Deletion Process',
        'deletion_process_desc': 'When you request account deletion, we follow this process:',
        'step1_title': 'User Request',
        'step1_desc': 'You send an email to <strong>support@shramikconnect.in</strong> requesting account deletion',
        'step2_title': 'Verification',
        'step2_desc': 'We verify your identity to ensure the request is legitimate',
        'step3_title': 'Processing Period',
        'step3_desc': '<strong>Within 2 days</strong> of receiving and verifying your request, we initiate the deletion process',
        'step4_title': 'Data Removal',
        'step4_desc': 'Your account and associated personal information are permanently removed from our active systems',
        'deletion_note': '<strong>Note:</strong> Some information may be retained longer if required for legal compliance, fraud prevention, or to resolve disputes, but only to the extent necessary and for the minimum period required by law.',
        
        // Section 5 - Specific Data Types
        'specific_title': 'Retention of Specific Data Types',
        'specific_desc': 'Different types of data are retained for different periods:',
        'data_type': 'Data Type',
        'retention_period': 'Retention Period',
        'details': 'Details',
        
        // Section 6 - Legal Retention
        'legal_retention_title': 'Legal and Compliance Retention',
        'legal_retention_desc': 'In certain circumstances, we may need to retain information for longer periods:',
        'legal1': '<strong>Legal Obligations:</strong> To comply with applicable laws, regulations, or court orders',
        'legal2': '<strong>Fraud Prevention:</strong> To investigate and prevent fraudulent activities',
        'legal3': '<strong>Dispute Resolution:</strong> To resolve ongoing disputes or enforce our agreements',
        'legal4': '<strong>Tax and Accounting:</strong> To meet financial record-keeping requirements',
        'legal_retention_note': 'When information is retained for these purposes, it is accessed only as necessary and stored securely.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect is committed to retaining your personal information only as long as necessary. You have control over your data through account deletion requests, which are processed within 2 days.',
        'important_notice_footer': 'If you have questions about our data retention practices or need assistance with account deletion, please contact us at <strong>support@shramikconnect.in</strong>.',
        
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
        'retention_title': 'डेटा प्रतिधारण',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड बताता है कि श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी को कितने समय तक बनाए रखता है, प्रतिधारण अवधि निर्धारित करने के लिए हम किस मानदंड का उपयोग करते हैं, और जब आप अपना खाता हटाते हैं तो आपके डेटा का क्या होता है। हम केवल अपनी सेवाएं प्रदान करने और इस गोपनीयता नीति में वर्णित उद्देश्यों को पूरा करने के लिए आवश्यक समय तक डेटा बनाए रखते हैं।',
        
        // Section 1 - General Principle
        'general_title': 'सामान्य प्रतिधारण सिद्धांत',
        'general_desc': 'श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी को केवल तब तक बनाए रखता है जब तक आवश्यक हो:',
        'general1': 'आपको हमारे प्लेटफॉर्म और सेवाओं तक पहुंच प्रदान करना',
        'general2': 'जिन उद्देश्यों के लिए जानकारी एकत्र की गई थी, उन्हें पूरा करना',
        'general3': 'कानूनी और नियामक दायित्वों का पालन करना',
        'general4': 'विवादों का समाधान करना और हमारे समझौतों को लागू करना',
        'general_note': 'प्रतिधारण अवधि समाप्त होने के बाद, आपकी व्यक्तिगत जानकारी सुरक्षित रूप से हटा दी जाती है या अनाम कर दी जाती है ताकि इसे अब आपके साथ नहीं जोड़ा जा सके।',
        
        // Section 2 - Active Account
        'active_title': 'सक्रिय खाता डेटा प्रतिधारण',
        'active_desc': 'जब आपका खाता सक्रिय होता है, तो हम आपको हमारी सेवाओं तक निर्बाध पहुंच प्रदान करने के लिए आपकी व्यक्तिगत जानकारी बनाए रखते हैं:',
        'active_profile_title': 'प्रोफाइल जानकारी',
        'active_profile_desc': 'आपके खाते के सक्रिय रहने की पूरी अवधि के लिए बनाए रखा जाता है',
        'active_activity_title': 'गतिविधि इतिहास',
        'active_activity_desc': 'नौकरी आवेदन, संदेश और बातचीत आपके खाते के सक्रिय रहने तक बनाए रखी जाती है',
        'active_ratings_title': 'रेटिंग और प्रतिक्रिया',
        'active_ratings_desc': 'आपके द्वारा दी और प्राप्त की गई रेटिंग आपके प्रोफाइल इतिहास के हिस्से के रूप में बनाए रखी जाती है',
        'active_badge': 'सक्रिय खाता',
        
        // Section 3 - Inactive Account
        'inactive_title': 'निष्क्रिय खाता निष्क्रियकरण',
        'inactive_desc': 'डेटा सटीकता बनाए रखने और सुरक्षा जोखिमों को कम करने के लिए, हमारी एक निष्क्रिय खाता नीति है:',
        'inactive_period_title': '12 महीने की निष्क्रियता अवधि',
        'inactive_period_desc': '<strong>12 लगातार महीनों</strong> तक निष्क्रिय रहने वाले खाते स्वचालित रूप से निष्क्रिय किए जा सकते हैं। एक खाता निष्क्रिय माना जाता है यदि उपयोगकर्ता ने इस अवधि के दौरान लॉग इन नहीं किया है या कोई प्लेटफॉर्म गतिविधि नहीं की है।',
        'inactive_note': 'निष्क्रिय करने से पहले, हम आपके खाते से जुड़ी संपर्क जानकारी का उपयोग करके आपको सूचित करने का प्रयास कर सकते हैं। निष्क्रिय करने के बाद, आप केवल फिर से लॉग इन करके अपना खाता पुनः सक्रिय कर सकते हैं।',
        
        // Section 4 - Account Deletion
        'deletion_process_title': 'खाता हटाने की प्रक्रिया',
        'deletion_process_desc': 'जब आप खाता हटाने का अनुरोध करते हैं, तो हम इस प्रक्रिया का पालन करते हैं:',
        'step1_title': 'उपयोगकर्ता अनुरोध',
        'step1_desc': 'आप <strong>support@shramikconnect.in</strong> पर खाता हटाने का अनुरोध करते हुए एक ईमेल भेजते हैं',
        'step2_title': 'सत्यापन',
        'step2_desc': 'हम यह सुनिश्चित करने के लिए आपकी पहचान सत्यापित करते हैं कि अनुरोध वैध है',
        'step3_title': 'प्रसंस्करण अवधि',
        'step3_desc': 'आपके अनुरोध को प्राप्त करने और सत्यापित करने के <strong>2 दिनों के भीतर</strong>, हम हटाने की प्रक्रिया शुरू करते हैं',
        'step4_title': 'डेटा हटाना',
        'step4_desc': 'आपका खाता और संबंधित व्यक्तिगत जानकारी हमारी सक्रिय प्रणालियों से स्थायी रूप से हटा दी जाती है',
        'deletion_note': '<strong>नोट:</strong> कानूनी अनुपालन, धोखाधड़ी की रोकथाम, या विवादों को हल करने के लिए आवश्यक होने पर कुछ जानकारी लंबे समय तक बनाए रखी जा सकती है, लेकिन केवल आवश्यक सीमा तक और कानून द्वारा आवश्यक न्यूनतम अवधि के लिए।',
        
        // Section 5 - Specific Data Types
        'specific_title': 'विशिष्ट डेटा प्रकारों का प्रतिधारण',
        'specific_desc': 'विभिन्न प्रकार के डेटा अलग-अलग अवधियों के लिए बनाए रखे जाते हैं:',
        'data_type': 'डेटा प्रकार',
        'retention_period': 'प्रतिधारण अवधि',
        'details': 'विवरण',
        
        // Section 6 - Legal Retention
        'legal_retention_title': 'कानूनी और अनुपालन प्रतिधारण',
        'legal_retention_desc': 'कुछ परिस्थितियों में, हमें लंबी अवधि के लिए जानकारी बनाए रखने की आवश्यकता हो सकती है:',
        'legal1': '<strong>कानूनी दायित्व:</strong> लागू कानूनों, विनियमों या अदालत के आदेशों का पालन करने के लिए',
        'legal2': '<strong>धोखाधड़ी की रोकथाम:</strong> धोखाधड़ी गतिविधियों की जांच और रोकथाम के लिए',
        'legal3': '<strong>विवाद समाधान:</strong> चल रहे विवादों को हल करने या हमारे समझौतों को लागू करने के लिए',
        'legal4': '<strong>कर और लेखा:</strong> वित्तीय रिकॉर्ड-रखरखाव आवश्यकताओं को पूरा करने के लिए',
        'legal_retention_note': 'जब जानकारी इन उद्देश्यों के लिए बनाए रखी जाती है, तो इसे केवल आवश्यकतानुसार एक्सेस किया जाता है और सुरक्षित रूप से संग्रहीत किया जाता है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी को केवल आवश्यक समय तक बनाए रखने के लिए प्रतिबद्ध है। खाता हटाने के अनुरोधों के माध्यम से आपका अपने डेटा पर नियंत्रण है, जिसे 2 दिनों के भीतर संसाधित किया जाता है।',
        'important_notice_footer': 'यदि आपके पास हमारी डेटा प्रतिधारण प्रथाओं के बारे में प्रश्न हैं या खाता हटाने में सहायता की आवश्यकता है, तो कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें।',
        
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
        'retention_title': 'डेटा धारणा',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग स्पष्ट करतो की श्रमिककनेक्ट तुमची वैयक्तिक माहिती किती काळ ठेवते, धारणा कालावधी निर्धारित करण्यासाठी आम्ही कोणते निकष वापरतो आणि तुम्ही तुमचे खाते हटवता तेव्हा तुमच्या डेटाचे काय होते. आम्ही फक्त आमच्या सेवा प्रदान करण्यासाठी आणि या गोपनीयता धोरणात वर्णन केलेली उद्दिष्टे पूर्ण करण्यासाठी आवश्यक तेवढा डेटा ठेवतो.',
        
        // Section 1 - General Principle
        'general_title': 'सामान्य धारणा तत्त्व',
        'general_desc': 'श्रमिककनेक्ट तुमची वैयक्तिक माहिती फक्त तोपर्यंत ठेवते जोपर्यंत आवश्यक आहे:',
        'general1': 'तुम्हाला आमच्या प्लॅटफॉर्म आणि सेवांमध्ये प्रवेश प्रदान करणे',
        'general2': 'ज्या उद्देशांसाठी माहिती गोळा केली गेली ती पूर्ण करणे',
        'general3': 'कायदेशीर आणि नियामक दायित्वांचे पालन करणे',
        'general4': 'विवाद सोडवणे आणि आमचे करार लागू करणे',
        'general_note': 'धारणा कालावधी संपल्यानंतर, तुमची वैयक्तिक माहिती सुरक्षितपणे हटवली जाते किंवा अनामित केली जाते जेणेकरून ती यापुढे तुमच्याशी जोडली जाऊ शकत नाही.',
        
        // Section 2 - Active Account
        'active_title': 'सक्रिय खाते डेटा धारणा',
        'active_desc': 'तुमचे खाते सक्रिय असताना, आम्ही तुम्हाला आमच्या सेवांमध्ये अखंड प्रवेश प्रदान करण्यासाठी तुमची वैयक्तिक माहिती ठेवतो:',
        'active_profile_title': 'प्रोफाइल माहिती',
        'active_profile_desc': 'तुमचे खाते सक्रिय असताना संपूर्ण कालावधीसाठी ठेवली जाते',
        'active_activity_title': 'क्रियाकलाप इतिहास',
        'active_activity_desc': 'नोकरी अर्ज, संदेश आणि परस्परसंवाद तुमचे खाते सक्रिय असताना ठेवले जातात',
        'active_ratings_title': 'रेटिंग आणि अभिप्राय',
        'active_ratings_desc': 'तुम्ही दिलेली आणि मिळालेली रेटिंग तुमच्या प्रोफाइल इतिहासाचा भाग म्हणून ठेवली जातात',
        'active_badge': 'सक्रिय खाते',
        
        // Section 3 - Inactive Account
        'inactive_title': 'निष्क्रिय खाते निष्क्रियीकरण',
        'inactive_desc': 'डेटा अचूकता राखण्यासाठी आणि सुरक्षा जोखीम कमी करण्यासाठी, आमचे निष्क्रिय खाते धोरण आहे:',
        'inactive_period_title': '१२ महिने निष्क्रियता कालावधी',
        'inactive_period_desc': '<strong>१२ सलग महिने</strong> निष्क्रिय राहिलेली खाती आपोआप निष्क्रिय केली जाऊ शकतात. या कालावधीत वापरकर्त्याने लॉग इन केले नाही किंवा कोणतीही प्लॅटफॉर्म क्रियाकलाप केला नाही तर खाते निष्क्रिय मानले जाते.',
        'inactive_note': 'निष्क्रिय करण्यापूर्वी, आम्ही तुमच्या खात्याशी संबंधित संपर्क माहिती वापरून तुम्हाला सूचित करण्याचा प्रयत्न करू शकतो. निष्क्रिय केल्यानंतर, तुम्ही फक्त पुन्हा लॉग इन करून तुमचे खाते पुन्हा सक्रिय करू शकता.',
        
        // Section 4 - Account Deletion
        'deletion_process_title': 'खाते हटवण्याची प्रक्रिया',
        'deletion_process_desc': 'जेव्हा तुम्ही खाते हटवण्याची विनंती करता, तेव्हा आम्ही या प्रक्रियेचे अनुसरण करतो:',
        'step1_title': 'वापरकर्ता विनंती',
        'step1_desc': 'तुम्ही <strong>support@shramikconnect.in</strong> वर खाते हटवण्याची विनंती करणारा ईमेल पाठवता',
        'step2_title': 'सत्यापन',
        'step2_desc': 'विनंती वैध आहे याची खात्री करण्यासाठी आम्ही तुमची ओळख सत्यापित करतो',
        'step3_title': 'प्रक्रिया कालावधी',
        'step3_desc': 'तुमची विनंती प्राप्त झाल्यानंतर आणि सत्यापित केल्यानंतर <strong>२ दिवसांत</strong>, आम्ही हटवण्याची प्रक्रिया सुरू करतो',
        'step4_title': 'डेटा हटवणे',
        'step4_desc': 'तुमचे खाते आणि संबंधित वैयक्तिक माहिती आमच्या सक्रिय प्रणालींमधून कायमची काढून टाकली जाते',
        'deletion_note': '<strong>टीप:</strong> कायदेशीर अनुपालन, फसवणूक प्रतिबंध, किंवा विवाद सोडवण्यासाठी आवश्यक असल्यास काही माहिती जास्त काळ ठेवली जाऊ शकते, परंतु फक्त आवश्यक मर्यादेपर्यंत आणि कायद्याने आवश्यक असलेल्या किमान कालावधीसाठी.',
        
        // Section 5 - Specific Data Types
        'specific_title': 'विशिष्ट डेटा प्रकारांची धारणा',
        'specific_desc': 'वेगवेगळ्या प्रकारचा डेटा वेगवेगळ्या कालावधीसाठी ठेवला जातो:',
        'data_type': 'डेटा प्रकार',
        'retention_period': 'धारणा कालावधी',
        'details': 'तपशील',
        
        // Section 6 - Legal Retention
        'legal_retention_title': 'कायदेशीर आणि अनुपालन धारणा',
        'legal_retention_desc': 'विशिष्ट परिस्थितीत, आम्हाला जास्त कालावधीसाठी माहिती ठेवण्याची आवश्यकता असू शकते:',
        'legal1': '<strong>कायदेशीर दायित्वे:</strong> लागू कायदे, नियम किंवा न्यायालयाच्या आदेशांचे पालन करण्यासाठी',
        'legal2': '<strong>फसवणूक प्रतिबंध:</strong> फसवणूक क्रियाकलापांची तपासणी आणि प्रतिबंध करण्यासाठी',
        'legal3': '<strong>विवाद निराकरण:</strong> सुरू असलेले विवाद सोडवण्यासाठी किंवा आमचे करार लागू करण्यासाठी',
        'legal4': '<strong>कर आणि लेखा:</strong> आर्थिक नोंदी-ठेवण्याच्या आवश्यकता पूर्ण करण्यासाठी',
        'legal_retention_note': 'जेव्हा या उद्देशांसाठी माहिती ठेवली जाते, तेव्हा ती फक्त आवश्यकतेनुसार प्रवेश केली जाते आणि सुरक्षितपणे संग्रहित केली जाते.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट तुमची वैयक्तिक माहिती फक्त आवश्यक तोपर्यंत ठेवण्यासाठी वचनबद्ध आहे. खाते हटवण्याच्या विनंत्यांद्वारे तुमच्या डेटावर तुमचे नियंत्रण आहे, ज्या २ दिवसांत प्रक्रिया केल्या जातात.',
        'important_notice_footer': 'आमच्या डेटा धारणा पद्धतींबद्दल प्रश्न असल्यास किंवा खाते हटवण्यासाठी मदत हवी असल्यास, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा.',
        
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
            element.innerHTML = translation[key];
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
    console.log('Data Retention page initialized');

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