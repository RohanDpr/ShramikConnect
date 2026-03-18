/**
 * USER RIGHTS PAGE - PRIVACY POLICY
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
        'rights_title': 'User Rights',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'As a user of ShramikConnect, you have certain rights regarding your personal information. This section explains the rights available to you and how you can exercise them. We are committed to respecting your privacy and providing you with control over your data.',
        
        // Section 1 - Right to Access
        'access_title': 'Right to Access',
        'access_desc': 'You have the right to request a copy of the personal information we hold about you. This includes:',
        'access1': 'Account information (name, mobile number, email)',
        'access2': 'Profile details (location, skills, work experience)',
        'access3': 'Job application history and interactions',
        'access4': 'Ratings and feedback received',
        'access_note': 'To request access to your data, please contact us at <strong>support@shramikconnect.in</strong>. We will respond to your request within 15 working days as required by law.',
        
        // Section 2 - Right to Rectification
        'rectification_title': 'Right to Rectification',
        'rectification_desc': 'If you believe that any personal information we hold about you is inaccurate or incomplete, you have the right to request correction.',
        'rectification_update': 'You can update certain information directly through your account settings, including:',
        'rectification1': 'Name and contact details',
        'rectification2': 'Skills and work preferences',
        'rectification3': 'Location information',
        'rectification_note': 'For corrections to other information, please contact our support team.',
        
        // Section 3 - Right to Deletion
        'deletion_title': 'Right to Deletion (Right to be Forgotten)',
        'deletion_desc': 'You have the right to request deletion of your personal information in certain circumstances, such as:',
        'deletion1': 'Your data is no longer needed for the purposes for which it was collected',
        'deletion2': 'You withdraw your consent (where processing is based on consent)',
        'deletion3': 'Your data has been processed unlawfully',
        'deletion_process_title': 'Account Deletion Process',
        'deletion_process_desc': 'To delete your account, please send an email to <strong>support@shramikconnect.in</strong> with your request. We will process your account deletion within <strong>2 days</strong> of receiving your request. Once deleted, your account and associated data will be permanently removed from our active systems.',
        'deletion_note': 'Some information may be retained longer if required for legal compliance or to resolve disputes, but only to the extent necessary.',
        
        // Section 4 - Right to Restrict
        'restrict_title': 'Right to Restrict Processing',
        'restrict_desc': 'You have the right to request that we restrict the processing of your personal information in certain situations, such as:',
        'restrict1': 'You contest the accuracy of your data (while we verify it)',
        'restrict2': 'The processing is unlawful, but you oppose deletion',
        'restrict3': 'We no longer need the data, but you require it for legal claims',
        'restrict_note': 'If processing is restricted, we will only store your data and not use it further without your consent or for legal purposes.',
        
        // Section 5 - Right to Portability
        'portability_title': 'Right to Data Portability',
        'portability_desc': 'You have the right to receive your personal information in a structured, commonly used, and machine-readable format. This allows you to transfer your data to another service provider if you wish.',
        'portability_note': 'To request a copy of your data in portable format, please contact us at <strong>support@shramikconnect.in</strong>. We will provide your data in a standard format such as JSON or CSV.',
        
        // Section 6 - Right to Object
        'object_title': 'Right to Object',
        'object_desc': 'You have the right to object to the processing of your personal information in certain circumstances, including:',
        'object1': 'Processing based on legitimate interests (unless we have compelling legitimate grounds)',
        'object2': 'Processing for direct marketing purposes (though we do not currently engage in marketing)',
        'object_note': 'If you object, we will stop processing your data unless we have legitimate grounds that override your interests or for legal claims.',
        
        // Section 7 - How to Exercise
        'exercise_title': 'How to Exercise Your Rights',
        'exercise_desc': 'To exercise any of your rights described above, please contact us using the following methods:',
        'email_title': 'Email',
        'response_time_title': 'Response Time',
        'response_time_desc': 'We will respond to your request within <strong>15 working days</strong> as required by applicable law.',
        'exercise_note': 'To help us process your request efficiently, please provide as much detail as possible about the specific right you wish to exercise and the information it relates to. We may need to verify your identity before processing your request.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'Your privacy rights are important to us. ShramikConnect is committed to respecting your choices and providing you with control over your personal information.',
        'important_notice_footer': 'If you have any questions about your rights or need assistance exercising them, please contact us at <strong>support@shramikconnect.in</strong>. We\'re here to help.',
        
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
        'rights_title': 'उपयोगकर्ता अधिकार',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'श्रमिककनेक्ट के उपयोगकर्ता के रूप में, आपके पास अपनी व्यक्तिगत जानकारी के संबंध में कुछ अधिकार हैं। यह खंड आपके लिए उपलब्ध अधिकारों और उन्हें कैसे लागू करें, इसकी व्याख्या करता है। हम आपकी गोपनीयता का सम्मान करने और आपको आपके डेटा पर नियंत्रण प्रदान करने के लिए प्रतिबद्ध हैं।',
        
        // Section 1 - Right to Access
        'access_title': 'पहुंच का अधिकार',
        'access_desc': 'आपको अपनी व्यक्तिगत जानकारी की एक प्रति का अनुरोध करने का अधिकार है जो हम आपके बारे में रखते हैं। इसमें शामिल है:',
        'access1': 'खाता जानकारी (नाम, मोबाइल नंबर, ईमेल)',
        'access2': 'प्रोफाइल विवरण (स्थान, कौशल, कार्य अनुभव)',
        'access3': 'नौकरी आवेदन इतिहास और बातचीत',
        'access4': 'प्राप्त रेटिंग और प्रतिक्रिया',
        'access_note': 'अपने डेटा तक पहुंच का अनुरोध करने के लिए, कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें। हम कानून द्वारा आवश्यक 15 कार्य दिवसों के भीतर आपके अनुरोध का जवाब देंगे।',
        
        // Section 2 - Right to Rectification
        'rectification_title': 'सुधार का अधिकार',
        'rectification_desc': 'यदि आप मानते हैं कि आपके बारे में हमारे पास कोई व्यक्तिगत जानकारी गलत या अपूर्ण है, तो आपको सुधार का अनुरोध करने का अधिकार है।',
        'rectification_update': 'आप अपनी खाता सेटिंग्स के माध्यम से सीधे कुछ जानकारी अपडेट कर सकते हैं, जिसमें शामिल है:',
        'rectification1': 'नाम और संपर्क विवरण',
        'rectification2': 'कौशल और कार्य प्राथमिकताएं',
        'rectification3': 'स्थान जानकारी',
        'rectification_note': 'अन्य जानकारी के सुधार के लिए, कृपया हमारी सहायता टीम से संपर्क करें।',
        
        // Section 3 - Right to Deletion
        'deletion_title': 'हटाने का अधिकार (भूल जाने का अधिकार)',
        'deletion_desc': 'आपको कुछ परिस्थितियों में अपनी व्यक्तिगत जानकारी को हटाने का अनुरोध करने का अधिकार है, जैसे:',
        'deletion1': 'आपका डेटा अब उन उद्देश्यों के लिए आवश्यक नहीं है जिनके लिए इसे एकत्र किया गया था',
        'deletion2': 'आप अपनी सहमति वापस लेते हैं (जहां प्रसंस्करण सहमति पर आधारित है)',
        'deletion3': 'आपका डेटा अवैध रूप से संसाधित किया गया है',
        'deletion_process_title': 'खाता हटाने की प्रक्रिया',
        'deletion_process_desc': 'अपना खाता हटाने के लिए, कृपया अपने अनुरोध के साथ <strong>support@shramikconnect.in</strong> पर एक ईमेल भेजें। हम आपके अनुरोध को प्राप्त करने के <strong>2 दिनों</strong> के भीतर आपका खाता हटाने की प्रक्रिया करेंगे। हटाए जाने के बाद, आपका खाता और संबंधित डेटा हमारी सक्रिय प्रणालियों से स्थायी रूप से हटा दिया जाएगा।',
        'deletion_note': 'कानूनी अनुपालन या विवादों को हल करने के लिए आवश्यक होने पर कुछ जानकारी लंबे समय तक बनाए रखी जा सकती है, लेकिन केवल आवश्यक सीमा तक।',
        
        // Section 4 - Right to Restrict
        'restrict_title': 'प्रसंस्करण प्रतिबंधित करने का अधिकार',
        'restrict_desc': 'आपको कुछ स्थितियों में अपनी व्यक्तिगत जानकारी के प्रसंस्करण को प्रतिबंधित करने का अनुरोध करने का अधिकार है, जैसे:',
        'restrict1': 'आप अपने डेटा की सटीकता पर विवाद करते हैं (जब हम इसे सत्यापित कर रहे हों)',
        'restrict2': 'प्रसंस्करण अवैध है, लेकिन आप हटाने का विरोध करते हैं',
        'restrict3': 'हमें अब डेटा की आवश्यकता नहीं है, लेकिन आपको कानूनी दावों के लिए इसकी आवश्यकता है',
        'restrict_note': 'यदि प्रसंस्करण प्रतिबंधित है, तो हम केवल आपका डेटा संग्रहीत करेंगे और आपकी सहमति या कानूनी उद्देश्यों के बिना इसका आगे उपयोग नहीं करेंगे।',
        
        // Section 5 - Right to Portability
        'portability_title': 'डेटा पोर्टेबिलिटी का अधिकार',
        'portability_desc': 'आपको अपनी व्यक्तिगत जानकारी को एक संरचित, सामान्य रूप से उपयोग किए जाने वाले और मशीन-पठनीय प्रारूप में प्राप्त करने का अधिकार है। यह आपको अपना डेटा किसी अन्य सेवा प्रदाता को स्थानांतरित करने की अनुमति देता है यदि आप चाहें।',
        'portability_note': 'पोर्टेबल प्रारूप में अपने डेटा की एक प्रति का अनुरोध करने के लिए, कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें। हम आपका डेटा JSON या CSV जैसे मानक प्रारूप में प्रदान करेंगे।',
        
        // Section 6 - Right to Object
        'object_title': 'आपत्ति करने का अधिकार',
        'object_desc': 'आपको कुछ परिस्थितियों में अपनी व्यक्तिगत जानकारी के प्रसंस्करण पर आपत्ति करने का अधिकार है, जिसमें शामिल है:',
        'object1': 'वैध हितों पर आधारित प्रसंस्करण (जब तक हमारे पास सम्मोहक वैध आधार न हों)',
        'object2': 'प्रत्यक्ष विपणन उद्देश्यों के लिए प्रसंस्करण (हालांकि हम वर्तमान में विपणन में संलग्न नहीं हैं)',
        'object_note': 'यदि आप आपत्ति करते हैं, तो हम आपके डेटा को संसाधित करना बंद कर देंगे जब तक कि हमारे पास वैध आधार न हों जो आपके हितों या कानूनी दावों को प्राथमिकता देते हों।',
        
        // Section 7 - How to Exercise
        'exercise_title': 'अपने अधिकारों का प्रयोग कैसे करें',
        'exercise_desc': 'ऊपर वर्णित अपने किसी भी अधिकार का प्रयोग करने के लिए, कृपया निम्नलिखित तरीकों का उपयोग करके हमसे संपर्क करें:',
        'email_title': 'ईमेल',
        'response_time_title': 'प्रतिक्रिया समय',
        'response_time_desc': 'हम लागू कानून द्वारा आवश्यक <strong>15 कार्य दिवसों</strong> के भीतर आपके अनुरोध का जवाब देंगे।',
        'exercise_note': 'हमें आपके अनुरोध को कुशलतापूर्वक संसाधित करने में मदद करने के लिए, कृपया उस विशिष्ट अधिकार के बारे में यथासंभव अधिक जानकारी प्रदान करें जिसका आप प्रयोग करना चाहते हैं और वह जानकारी जिससे यह संबंधित है। आपके अनुरोध को संसाधित करने से पहले हमें आपकी पहचान सत्यापित करने की आवश्यकता हो सकती है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'आपके गोपनीयता अधिकार हमारे लिए महत्वपूर्ण हैं। श्रमिककनेक्ट आपकी पसंद का सम्मान करने और आपको आपकी व्यक्तिगत जानकारी पर नियंत्रण प्रदान करने के लिए प्रतिबद्ध है।',
        'important_notice_footer': 'यदि आपके अधिकारों के बारे में कोई प्रश्न हैं या उनका प्रयोग करने में सहायता चाहिए, तो कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें। हम मदद के लिए यहाँ हैं।',
        
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
        'rights_title': 'वापरकर्ता अधिकार',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'श्रमिककनेक्टचा वापरकर्ता म्हणून, तुमच्या वैयक्तिक माहितीबाबत तुम्हाला काही अधिकार आहेत. हा विभाग तुमच्यासाठी उपलब्ध अधिकार आणि ते कसे वापरावे हे स्पष्ट करतो. आम्ही तुमच्या गोपनीयतेचा आदर करण्यासाठी आणि तुमच्या डेटावर तुम्हाला नियंत्रण प्रदान करण्यासाठी वचनबद्ध आहोत.',
        
        // Section 1 - Right to Access
        'access_title': 'प्रवेशाचा अधिकार',
        'access_desc': 'तुमच्याबद्दल आमच्याकडे असलेल्या वैयक्तिक माहितीची प्रत मागवण्याचा तुम्हाला अधिकार आहे. यामध्ये हे समाविष्ट आहे:',
        'access1': 'खाते माहिती (नाव, मोबाइल क्रमांक, ईमेल)',
        'access2': 'प्रोफाइल तपशील (स्थान, कौशल्ये, कामाचा अनुभव)',
        'access3': 'नोकरी अर्ज इतिहास आणि परस्परसंवाद',
        'access4': 'प्राप्त रेटिंग आणि अभिप्राय',
        'access_note': 'तुमच्या डेटामध्ये प्रवेशाची विनंती करण्यासाठी, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा. आम्ही कायद्यानुसार आवश्यक 15 कामकाजी दिवसांत तुमच्या विनंतीला प्रतिसाद देऊ.',
        
        // Section 2 - Right to Rectification
        'rectification_title': 'सुधारण्याचा अधिकार',
        'rectification_desc': 'तुमच्याबद्दल आमच्याकडे असलेली कोणतीही वैयक्तिक माहिती चुकीची किंवा अपूर्ण आहे असे तुम्हाला वाटत असल्यास, तुम्हाला सुधारणाची विनंती करण्याचा अधिकार आहे.',
        'rectification_update': 'तुम्ही तुमच्या खाते सेटिंग्जद्वारे थेट काही माहिती अद्यतनित करू शकता, यासह:',
        'rectification1': 'नाव आणि संपर्क तपशील',
        'rectification2': 'कौशल्ये आणि काम प्राधान्ये',
        'rectification3': 'स्थान माहिती',
        'rectification_note': 'इतर माहितीच्या सुधारणांसाठी, कृपया आमच्या समर्थन टीमशी संपर्क साधा.',
        
        // Section 3 - Right to Deletion
        'deletion_title': 'हटवण्याचा अधिकार (विसरले जाण्याचा अधिकार)',
        'deletion_desc': 'विशिष्ट परिस्थितीत तुमची वैयक्तिक माहिती हटवण्याची विनंती करण्याचा तुम्हाला अधिकार आहे, जसे की:',
        'deletion1': 'तुमचा डेटा यापुढे ज्या उद्देशांसाठी गोळा केला गेला होता त्यासाठी आवश्यक नाही',
        'deletion2': 'तुम्ही तुमची संमती मागे घेता (जिथे प्रक्रिया संमतीवर आधारित आहे)',
        'deletion3': 'तुमचा डेटा बेकायदेशीरपणे प्रक्रिया केला गेला आहे',
        'deletion_process_title': 'खाते हटवण्याची प्रक्रिया',
        'deletion_process_desc': 'तुमचे खाते हटवण्यासाठी, कृपया तुमच्या विनंतीसह <strong>support@shramikconnect.in</strong> वर ईमेल पाठवा. आम्ही तुमची विनंती प्राप्त झाल्यापासून <strong>२ दिवसांत</strong> तुमचे खाते हटवण्याची प्रक्रिया करू. हटवल्यानंतर, तुमचे खाते आणि संबंधित डेटा आमच्या सक्रिय प्रणालींमधून कायमचा काढून टाकला जाईल.',
        'deletion_note': 'कायदेशीर अनुपालन किंवा विवाद सोडवण्यासाठी आवश्यक असल्यास काही माहिती जास्त काळ ठेवली जाऊ शकते, परंतु फक्त आवश्यक मर्यादेपर्यंत.',
        
        // Section 4 - Right to Restrict
        'restrict_title': 'प्रक्रिया प्रतिबंधित करण्याचा अधिकार',
        'restrict_desc': 'विशिष्ट परिस्थितीत तुमच्या वैयक्तिक माहितीची प्रक्रिया प्रतिबंधित करण्याची विनंती करण्याचा तुम्हाला अधिकार आहे, जसे की:',
        'restrict1': 'तुम्ही तुमच्या डेटाच्या अचूकतेवर वाद घालता (आम्ही ते सत्यापित करत असताना)',
        'restrict2': 'प्रक्रिया बेकायदेशीर आहे, परंतु तुम्ही हटवण्यास विरोध करता',
        'restrict3': 'आम्हाला यापुढे डेटाची आवश्यकता नाही, परंतु कायदेशीर दाव्यांसाठी तुम्हाला त्याची आवश्यकता आहे',
        'restrict_note': 'प्रक्रिया प्रतिबंधित असल्यास, आम्ही फक्त तुमचा डेटा संग्रहित करू आणि तुमच्या संमतीशिवाय किंवा कायदेशीर उद्देशांशिवाय त्याचा पुढे वापर करणार नाही.',
        
        // Section 5 - Right to Portability
        'portability_title': 'डेटा पोर्टेबिलिटीचा अधिकार',
        'portability_desc': 'तुमची वैयक्तिक माहिती संरचित, सामान्यतः वापरल्या जाणाऱ्या आणि मशीन-वाचनीय स्वरूपात प्राप्त करण्याचा तुम्हाला अधिकार आहे. यामुळे तुम्ही इच्छित असल्यास तुमचा डेटा दुसऱ्या सेवा प्रदात्याकडे हस्तांतरित करू शकता.',
        'portability_note': 'पोर्टेबल स्वरूपात तुमच्या डेटाची प्रत मागवण्यासाठी, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा. आम्ही तुमचा डेटा JSON किंवा CSV सारख्या मानक स्वरूपात प्रदान करू.',
        
        // Section 6 - Right to Object
        'object_title': 'आक्षेप घेण्याचा अधिकार',
        'object_desc': 'विशिष्ट परिस्थितीत तुमच्या वैयक्तिक माहितीच्या प्रक्रियेवर आक्षेप घेण्याचा तुम्हाला अधिकार आहे, यासह:',
        'object1': 'वैध हितसंबंधांवर आधारित प्रक्रिया (जोपर्यंत आमच्याकडे आक्षेपार्ह वैध कारणे नाहीत)',
        'object2': 'थेट विपणन उद्देशांसाठी प्रक्रिया (जरी आम्ही सध्या विपणनात गुंतलेले नाही)',
        'object_note': 'तुम्ही आक्षेप घेतल्यास, आम्ही तुमच्या डेटावर प्रक्रिया करणे थांबवू जोपर्यंत आमच्याकडे तुमच्या हितसंबंधांवर मात करणारी वैध कारणे किंवा कायदेशीर दावे नसतील.',
        
        // Section 7 - How to Exercise
        'exercise_title': 'तुमचे अधिकार कसे वापरावे',
        'exercise_desc': 'वर वर्णन केलेल्या तुमच्या कोणत्याही अधिकारांचा वापर करण्यासाठी, कृपया खालील पद्धती वापरून आमच्याशी संपर्क साधा:',
        'email_title': 'ईमेल',
        'response_time_title': 'प्रतिसाद वेळ',
        'response_time_desc': 'आम्ही लागू कायद्यानुसार आवश्यक <strong>१५ कामकाजी दिवसांत</strong> तुमच्या विनंतीला प्रतिसाद देऊ.',
        'exercise_note': 'तुमची विनंती कार्यक्षमतेने प्रक्रिया करण्यात आम्हाला मदत करण्यासाठी, कृपया तुम्ही वापरू इच्छित असलेल्या विशिष्ट अधिकाराबद्दल आणि त्याच्याशी संबंधित माहितीबद्दल शक्य तितके तपशील प्रदान करा. तुमच्या विनंतीवर प्रक्रिया करण्यापूर्वी आम्हाला तुमची ओळख सत्यापित करण्याची आवश्यकता असू शकते.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'तुमचे गोपनीयता अधिकार आमच्यासाठी महत्त्वाचे आहेत. श्रमिककनेक्ट तुमच्या निवडींचा आदर करण्यासाठी आणि तुमच्या वैयक्तिक माहितीवर तुम्हाला नियंत्रण प्रदान करण्यासाठी वचनबद्ध आहे.',
        'important_notice_footer': 'तुमच्या अधिकारांबद्दल काही प्रश्न असल्यास किंवा ते वापरण्यासाठी मदत हवी असल्यास, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा. आम्ही मदत करण्यासाठी येथे आहोत.',
        
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
    console.log('User Rights page initialized');

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