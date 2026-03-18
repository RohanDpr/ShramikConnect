/**
 * INFORMATION WE COLLECT PAGE - PRIVACY POLICY
 * Full theme and language support - No related links
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
// COMPLETE TRANSLATIONS (EN/HI/MR) - NO RELATED LINKS
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
        'collect_title': 'Information We Collect',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the types of personal information we collect from users of the ShramikConnect platform. We collect only the information necessary to provide our services and maintain a safe, trustworthy environment for workers and employers.',
        
        // Section 1 - Account Information
        'account_info_title': 'Account Information',
        'account_info_desc': 'When you create an account on ShramikConnect, we collect basic information required for registration:',
        'account_info1': 'Full name',
        'account_info2': 'Mobile number (verified via OTP)',
        'account_info3': 'Email address (optional)',
        'account_info4': 'Password (encrypted)',
        'account_info_note': 'We do not allow users under 18 years of age to create accounts on our platform.',
        
        // Section 2 - Profile Information
        'profile_info_title': 'Profile Information',
        'profile_info_desc': 'To help workers and employers connect effectively, we collect additional profile details:',
        'profile_info1': 'Location (city/area)',
        'profile_info2': 'Skills and work category (for workers)',
        'profile_info3': 'Work experience (optional)',
        'profile_info4': 'Ratings and feedback from employers/workers',
        'profile_info_note': 'This information helps us match workers with relevant job opportunities and build trust within the community.',
        
        // Section 3 - Identity Verification
        'identity_title': 'Identity Verification Documents',
        'identity_desc': 'In certain cases, we may request identity verification documents to enhance trust and safety on the platform:',
        'identity1': 'Aadhar card (optional but recommended for verification)',
        'identity2': 'PAN card (optional alternative)',
        'identity_storage_title': 'Secure Storage',
        'identity_storage_desc': 'When provided, identity documents are stored securely in our database and used only for verification purposes. We take appropriate measures to protect this sensitive information.',
        'identity_note': 'Providing identity documents is voluntary but may help build trust with employers and increase your chances of getting hired.',
        
        // Section 4 - Technical Data
        'technical_title': 'Technical and Usage Data',
        'technical_desc': 'When you use our platform, we automatically collect certain technical information:',
        'technical1': 'Device information (browser type, operating system)',
        'technical2': 'IP address',
        'technical3': 'Usage patterns (pages visited, time spent)',
        'technical4': 'Cookies and similar tracking technologies',
        'technical_note': 'This data helps us improve our services, fix technical issues, and enhance user experience.',
        
        // Section 5 - Hosting
        'hosting_title': 'Hosting and Infrastructure',
        'hosting_desc': 'ShramikConnect is hosted on <strong>Render</strong>, a cloud platform that provides reliable and secure hosting services. Your data is stored on Render\'s secure servers located in accordance with industry standards.',
        'hosting_note': 'Render implements security measures to protect hosted data, and we choose trusted infrastructure partners to ensure your information remains safe.',
        'hosting_info': 'For more information about Render\'s security practices, you can refer to their security documentation.',
        
        // Section 6 - Third Party
        'third_party_title': 'Information from Third Parties',
        'third_party_desc': 'We may receive information about you from third parties in limited circumstances:',
        'third_party1': 'YouTube videos embedded on our platform (standard YouTube API)',
        'third_party2': 'Information shared by other users about you (e.g., feedback, ratings)',
        'third_party_note': 'Embedded YouTube videos may collect data according to Google\'s privacy policy. We do not control how YouTube collects or uses this information.',
        
        // Section 7 - Children's Data
        'children_title': 'Children\'s Data',
        'children_desc': 'ShramikConnect is not intended for users under 18 years of age. We do not knowingly collect personal information from individuals under 18.',
        'children_note': 'If we become aware that we have collected personal information from a user under 18, we will take steps to delete that information.',
        
        // Section 8 - International Users
        'international_title': 'International Users',
        'international_desc': 'Currently, ShramikConnect services are available only to users located in India. We do not intentionally collect data from international users.',
        'international_note': 'If this changes in the future, we will update this policy accordingly.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect collects only the information necessary to provide our services and maintain a safe platform for workers and employers.',
        'important_notice_footer': 'We do not sell your personal information to third parties. Any sensitive data (such as identity documents) is stored securely and used only for verification purposes.',
        
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
        'collect_title': 'हम क्या जानकारी एकत्र करते हैं',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म के उपयोगकर्ताओं से हमारे द्वारा एकत्र की जाने वाली व्यक्तिगत जानकारी के प्रकारों की व्याख्या करता है। हम केवल वही जानकारी एकत्र करते हैं जो हमारी सेवाएं प्रदान करने और श्रमिकों और नियोक्ताओं के लिए सुरक्षित, भरोसेमंद वातावरण बनाए रखने के लिए आवश्यक है।',
        
        // Section 1 - Account Information
        'account_info_title': 'खाता जानकारी',
        'account_info_desc': 'जब आप श्रमिककनेक्ट पर खाता बनाते हैं, तो हम पंजीकरण के लिए आवश्यक बुनियादी जानकारी एकत्र करते हैं:',
        'account_info1': 'पूरा नाम',
        'account_info2': 'मोबाइल नंबर (ओटीपी द्वारा सत्यापित)',
        'account_info3': 'ईमेल पता (वैकल्पिक)',
        'account_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'account_info_note': 'हम 18 वर्ष से कम आयु के उपयोगकर्ताओं को हमारे प्लेटफॉर्म पर खाता बनाने की अनुमति नहीं देते हैं।',
        
        // Section 2 - Profile Information
        'profile_info_title': 'प्रोफाइल जानकारी',
        'profile_info_desc': 'श्रमिकों और नियोक्ताओं को प्रभावी ढंग से जोड़ने में मदद करने के लिए, हम अतिरिक्त प्रोफाइल विवरण एकत्र करते हैं:',
        'profile_info1': 'स्थान (शहर/क्षेत्र)',
        'profile_info2': 'कौशल और कार्य श्रेणी (श्रमिकों के लिए)',
        'profile_info3': 'कार्य अनुभव (वैकल्पिक)',
        'profile_info4': 'नियोक्ताओं/श्रमिकों से रेटिंग और प्रतिक्रिया',
        'profile_info_note': 'यह जानकारी हमें श्रमिकों को प्रासंगिक नौकरी के अवसरों से मिलाने और समुदाय के भीतर विश्वास बनाने में मदद करती है।',
        
        // Section 3 - Identity Verification
        'identity_title': 'पहचान सत्यापन दस्तावेज',
        'identity_desc': 'कुछ मामलों में, हम प्लेटफॉर्म पर विश्वास और सुरक्षा बढ़ाने के लिए पहचान सत्यापन दस्तावेजों का अनुरोध कर सकते हैं:',
        'identity1': 'आधार कार्ड (वैकल्पिक लेकिन सत्यापन के लिए अनुशंसित)',
        'identity2': 'पैन कार्ड (वैकल्पिक)',
        'identity_storage_title': 'सुरक्षित भंडारण',
        'identity_storage_desc': 'प्रदान किए जाने पर, पहचान दस्तावेज हमारे डेटाबेस में सुरक्षित रूप से संग्रहीत किए जाते हैं और केवल सत्यापन उद्देश्यों के लिए उपयोग किए जाते हैं। हम इस संवेदनशील जानकारी की सुरक्षा के लिए उचित उपाय करते हैं।',
        'identity_note': 'पहचान दस्तावेज प्रदान करना स्वैच्छिक है लेकिन नियोक्ताओं के साथ विश्वास बनाने और नियुक्त होने की संभावना बढ़ाने में मदद कर सकता है।',
        
        // Section 4 - Technical Data
        'technical_title': 'तकनीकी और उपयोग डेटा',
        'technical_desc': 'जब आप हमारे प्लेटफॉर्म का उपयोग करते हैं, तो हम स्वचालित रूप से कुछ तकनीकी जानकारी एकत्र करते हैं:',
        'technical1': 'डिवाइस जानकारी (ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम)',
        'technical2': 'आईपी पता',
        'technical3': 'उपयोग पैटर्न (देखे गए पृष्ठ, बिताया गया समय)',
        'technical4': 'कुकीज़ और समान ट्रैकिंग तकनीक',
        'technical_note': 'यह डेटा हमें अपनी सेवाओं में सुधार करने, तकनीकी मुद्दों को ठीक करने और उपयोगकर्ता अनुभव बढ़ाने में मदद करता है।',
        
        // Section 5 - Hosting
        'hosting_title': 'होस्टिंग और बुनियादी ढांचा',
        'hosting_desc': 'श्रमिककनेक्ट <strong>Render</strong> पर होस्ट किया गया है, जो एक क्लाउड प्लेटफॉर्म है जो विश्वसनीय और सुरक्षित होस्टिंग सेवाएं प्रदान करता है। आपका डेटा Render के सुरक्षित सर्वर पर संग्रहीत किया जाता है जो उद्योग मानकों के अनुसार स्थित हैं।',
        'hosting_note': 'Render होस्ट किए गए डेटा की सुरक्षा के लिए सुरक्षा उपाय लागू करता है, और हम यह सुनिश्चित करने के लिए विश्वसनीय बुनियादी ढांचा भागीदारों का चयन करते हैं कि आपकी जानकारी सुरक्षित रहे।',
        'hosting_info': 'Render की सुरक्षा प्रथाओं के बारे में अधिक जानकारी के लिए, आप उनके सुरक्षा दस्तावेज़ीकरण का संदर्भ ले सकते हैं।',
        
        // Section 6 - Third Party
        'third_party_title': 'तृतीय पक्षों से जानकारी',
        'third_party_desc': 'हम सीमित परिस्थितियों में तृतीय पक्षों से आपके बारे में जानकारी प्राप्त कर सकते हैं:',
        'third_party1': 'हमारे प्लेटफॉर्म पर एम्बेडेड YouTube वीडियो (मानक YouTube API)',
        'third_party2': 'अन्य उपयोगकर्ताओं द्वारा आपके बारे में साझा की गई जानकारी (जैसे, प्रतिक्रिया, रेटिंग)',
        'third_party_note': 'एम्बेडेड YouTube वीडियो Google की गोपनीयता नीति के अनुसार डेटा एकत्र कर सकते हैं। हम यह नियंत्रित नहीं करते कि YouTube इस जानकारी को कैसे एकत्र या उपयोग करता है।',
        
        // Section 7 - Children's Data
        'children_title': 'बच्चों का डेटा',
        'children_desc': 'श्रमिककनेक्ट 18 वर्ष से कम आयु के उपयोगकर्ताओं के लिए नहीं है। हम जानबूझकर 18 वर्ष से कम आयु के व्यक्तियों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं।',
        'children_note': 'यदि हमें पता चलता है कि हमने 18 वर्ष से कम आयु के उपयोगकर्ता से व्यक्तिगत जानकारी एकत्र की है, तो हम उस जानकारी को हटाने के लिए कदम उठाएंगे।',
        
        // Section 8 - International Users
        'international_title': 'अंतर्राष्ट्रीय उपयोगकर्ता',
        'international_desc': 'वर्तमान में, श्रमिककनेक्ट सेवाएं केवल भारत में स्थित उपयोगकर्ताओं के लिए उपलब्ध हैं। हम जानबूझकर अंतर्राष्ट्रीय उपयोगकर्ताओं से डेटा एकत्र नहीं करते हैं।',
        'international_note': 'यदि भविष्य में इसमें बदलाव होता है, तो हम इस नीति को अपडेट करेंगे।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट केवल हमारी सेवाएं प्रदान करने और श्रमिकों और नियोक्ताओं के लिए एक सुरक्षित प्लेटफॉर्म बनाए रखने के लिए आवश्यक जानकारी एकत्र करता है।',
        'important_notice_footer': 'हम आपकी व्यक्तिगत जानकारी तृतीय पक्षों को नहीं बेचते हैं। कोई भी संवेदनशील डेटा (जैसे पहचान दस्तावेज) सुरक्षित रूप से संग्रहीत किया जाता है और केवल सत्यापन उद्देश्यों के लिए उपयोग किया जाता है।',
        
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
        'collect_title': 'आम्ही कोणती माहिती गोळा करतो',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मच्या वापरकर्त्यांकडून आम्ही गोळा करत असलेल्या वैयक्तिक माहितीचे प्रकार स्पष्ट करतो. आम्ही फक्त आमच्या सेवा प्रदान करण्यासाठी आणि कामगार आणि नियोक्त्यांसाठी सुरक्षित, विश्वासार्ह वातावरण राखण्यासाठी आवश्यक माहिती गोळा करतो.',
        
        // Section 1 - Account Information
        'account_info_title': 'खाते माहिती',
        'account_info_desc': 'तुम्ही श्रमिककनेक्टवर खाते तयार करता तेव्हा, आम्ही नोंदणीसाठी आवश्यक मूलभूत माहिती गोळा करतो:',
        'account_info1': 'पूर्ण नाव',
        'account_info2': 'मोबाइल क्रमांक (ओटीपीद्वारे सत्यापित)',
        'account_info3': 'ईमेल पत्ता (पर्यायी)',
        'account_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'account_info_note': 'आम्ही १८ वर्षांखालील वापरकर्त्यांना आमच्या प्लॅटफॉर्मवर खाती तयार करण्याची परवानगी देत नाही.',
        
        // Section 2 - Profile Information
        'profile_info_title': 'प्रोफाइल माहिती',
        'profile_info_desc': 'कामगार आणि नियोक्त्यांना प्रभावीपणे जोडण्यास मदत करण्यासाठी, आम्ही अतिरिक्त प्रोफाइल तपशील गोळा करतो:',
        'profile_info1': 'स्थान (शहर/क्षेत्र)',
        'profile_info2': 'कौशल्ये आणि काम श्रेणी (कामगारांसाठी)',
        'profile_info3': 'कामाचा अनुभव (पर्यायी)',
        'profile_info4': 'नियोक्ते/कामगार यांच्याकडून रेटिंग आणि अभिप्राय',
        'profile_info_note': 'ही माहिती आम्हाला कामगारांना संबंधित नोकरीच्या संधींशी जुळवण्यास आणि समुदायामध्ये विश्वास निर्माण करण्यास मदत करते.',
        
        // Section 3 - Identity Verification
        'identity_title': 'ओळख सत्यापन दस्तऐवज',
        'identity_desc': 'काही प्रकरणांमध्ये, आम्ही प्लॅटफॉर्मवर विश्वास आणि सुरक्षितता वाढवण्यासाठी ओळख सत्यापन दस्तऐवजांची विनंती करू शकतो:',
        'identity1': 'आधार कार्ड (पर्यायी परंतु सत्यापनासाठी शिफारस केलेले)',
        'identity2': 'पॅन कार्ड (पर्यायी)',
        'identity_storage_title': 'सुरक्षित स्टोरेज',
        'identity_storage_desc': 'प्रदान केल्यावर, ओळख दस्तऐवज आमच्या डेटाबेसमध्ये सुरक्षितपणे संग्रहित केले जातात आणि केवळ सत्यापन उद्देशांसाठी वापरले जातात. आम्ही या संवेदनशील माहितीचे संरक्षण करण्यासाठी योग्य उपाय करतो.',
        'identity_note': 'ओळख दस्तऐवज प्रदान करणे ऐच्छिक आहे परंतु नियोक्त्यांसह विश्वास निर्माण करण्यास आणि नियुक्त होण्याची शक्यता वाढवण्यास मदत करू शकते.',
        
        // Section 4 - Technical Data
        'technical_title': 'तांत्रिक आणि वापर डेटा',
        'technical_desc': 'तुम्ही आमचा प्लॅटफॉर्म वापरता तेव्हा, आम्ही आपोआप काही तांत्रिक माहिती गोळा करतो:',
        'technical1': 'डिव्हाइस माहिती (ब्राउझर प्रकार, ऑपरेटिंग सिस्टम)',
        'technical2': 'आयपी पत्ता',
        'technical3': 'वापर पद्धती (भेट दिलेली पृष्ठे, घालवलेला वेळ)',
        'technical4': 'कुकीज आणि तत्सम ट्रॅकिंग तंत्रज्ञान',
        'technical_note': 'हा डेटा आम्हाला आमच्या सेवा सुधारण्यास, तांत्रिक समस्या सोडवण्यास आणि वापरकर्ता अनुभव वाढवण्यास मदत करतो.',
        
        // Section 5 - Hosting
        'hosting_title': 'होस्टिंग आणि पायाभूत सुविधा',
        'hosting_desc': 'श्रमिककनेक्ट <strong>Render</strong> वर होस्ट केले आहे, जे एक क्लाउड प्लॅटफॉर्म आहे जे विश्वसनीय आणि सुरक्षित होस्टिंग सेवा प्रदान करते. तुमचा डेटा Render च्या सुरक्षित सर्व्हरवर संग्रहित केला जातो जे उद्योग मानकांनुसार स्थित आहेत.',
        'hosting_note': 'Render होस्ट केलेल्या डेटाचे संरक्षण करण्यासाठी सुरक्षा उपाय लागू करते, आणि तुमची माहिती सुरक्षित राहील याची खात्री करण्यासाठी आम्ही विश्वासू पायाभूत सुविधा भागीदार निवडतो.',
        'hosting_info': 'Render च्या सुरक्षा पद्धतींबद्दल अधिक माहितीसाठी, तुम्ही त्यांच्या सुरक्षा दस्तऐवजीकरणाचा संदर्भ घेऊ शकता.',
        
        // Section 6 - Third Party
        'third_party_title': 'तृतीय पक्षांकडून माहिती',
        'third_party_desc': 'आम्हाला मर्यादित परिस्थितीत तृतीय पक्षांकडून तुमच्याबद्दल माहिती मिळू शकते:',
        'third_party1': 'आमच्या प्लॅटफॉर्मवर एम्बेड केलेले YouTube व्हिडिओ (मानक YouTube API)',
        'third_party2': 'इतर वापरकर्त्यांनी तुमच्याबद्दल सामायिक केलेली माहिती (उदा., अभिप्राय, रेटिंग)',
        'third_party_note': 'एम्बेड केलेले YouTube व्हिडिओ Google च्या गोपनीयता धोरणानुसार डेटा गोळा करू शकतात. YouTube ही माहिती कशी गोळा किंवा वापरते यावर आमचे नियंत्रण नाही.',
        
        // Section 7 - Children's Data
        'children_title': 'मुलांचा डेटा',
        'children_desc': 'श्रमिककनेक्ट १८ वर्षांखालील वापरकर्त्यांसाठी नाही. आम्ही जाणूनबुजून १८ वर्षांखालील व्यक्तींकडून वैयक्तिक माहिती गोळा करत नाही.',
        'children_note': 'जर आम्हाला समजले की आम्ही १८ वर्षांखालील वापरकर्त्याकडून वैयक्तिक माहिती गोळा केली आहे, तर आम्ही ती माहिती हटवण्यासाठी पावले उचलू.',
        
        // Section 8 - International Users
        'international_title': 'आंतरराष्ट्रीय वापरकर्ते',
        'international_desc': 'सध्या, श्रमिककनेक्ट सेवा फक्त भारतातील वापरकर्त्यांसाठी उपलब्ध आहेत. आम्ही जाणूनबुजून आंतरराष्ट्रीय वापरकर्त्यांकडून डेटा गोळा करत नाही.',
        'international_note': 'जर भविष्यात यात बदल झाला, तर आम्ही हे धोरण त्यानुसार अद्यतनित करू.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट फक्त आमच्या सेवा प्रदान करण्यासाठी आणि कामगार आणि नियोक्त्यांसाठी सुरक्षित प्लॅटफॉर्म राखण्यासाठी आवश्यक माहिती गोळा करते.',
        'important_notice_footer': 'आम्ही तुमची वैयक्तिक माहिती तृतीय पक्षांना विकत नाही. कोणताही संवेदनशील डेटा (जसे की ओळख दस्तऐवज) सुरक्षितपणे संग्रहित केला जातो आणि फक्त सत्यापन उद्देशांसाठी वापरला जातो.',
        
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
    console.log('Information We Collect page initialized');

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