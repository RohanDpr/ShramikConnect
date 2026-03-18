/**
 * DATA SECURITY PAGE - PRIVACY POLICY
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
        'security_title': 'Data Security',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'ShramikConnect takes the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. This section explains the security practices we follow to keep your information safe.',
        
        // Section 1 - Encryption
        'encryption_title': 'Encryption',
        'encryption_desc': 'We use industry-standard encryption to protect your data:',
        'encryption1': 'All data transmitted between your device and our servers is encrypted using SSL/TLS technology (HTTPS). This ensures that your information cannot be intercepted or read by unauthorized parties during transmission.',
        'encryption2': 'Sensitive information, such as passwords, is hashed and securely stored in our database. This means that even in the unlikely event of a data breach, your actual password would not be exposed.',
        'encryption3': 'Identity documents (Aadhar, PAN) provided by users are stored with additional security measures to protect this sensitive information.',
        
        // Section 2 - Hosting Security
        'hosting_security_title': 'Secure Hosting Infrastructure',
        'hosting_security_desc': 'ShramikConnect is hosted on <strong>Render</strong>, a trusted cloud platform that provides:',
        'hosting_security1': 'Secure data centers with physical security measures',
        'hosting_security2': 'Network firewalls and intrusion detection systems',
        'hosting_security3': 'Regular data backups to prevent data loss',
        'hosting_security4': 'High availability and redundancy to ensure platform reliability',
        'hosting_security_note': 'Render implements comprehensive security measures that meet industry standards. You can learn more about Render\'s security practices on their official website.',
        
        // Section 3 - Access Controls
        'access_control_title': 'Access Controls',
        'access_control_desc': 'We strictly limit access to user data within our organization:',
        'access_control1': 'Only authorized personnel with a legitimate business need can access user data',
        'access_control2': 'All employee access is protected by strong authentication and logged for audit purposes',
        'access_control3': 'Regular access reviews are conducted to ensure permissions remain appropriate',
        'access_control_note': 'We follow the principle of least privilege, meaning employees only have access to the minimum data necessary to perform their job functions.',
        
        // Section 4 - Authentication
        'authentication_title': 'Authentication and Account Security',
        'authentication_desc': 'We provide security features to help protect your account:',
        'authentication1': 'OTP (One-Time Password) verification for mobile number authentication',
        'authentication2': 'Session management to automatically log out inactive users',
        'authentication3': 'Account lockout mechanisms after multiple failed login attempts to prevent brute force attacks',
        'user_responsibility_title': 'Your Responsibility',
        'user_responsibility_desc': 'You play an important role in keeping your account secure. Always use a strong, unique password, never share your login credentials with others, and log out of your account when using shared devices.',
        
        // Section 5 - Retention
        'retention_title': 'Data Retention and Deletion',
        'retention_desc': 'We retain your personal information only as long as necessary:',
        'retention1': 'Active accounts: Data is retained while your account is active',
        'retention2': 'Inactive accounts: Accounts inactive for 12 months may be deactivated',
        'retention3': 'Account deletion: When you request account deletion via email, we delete your account and associated data within 2 days',
        'retention_note': 'Some information may be retained longer if required for legal compliance or to resolve disputes, but only to the extent necessary.',
        
        // Section 6 - Incident Response
        'incident_title': 'Security Monitoring and Incident Response',
        'incident_desc': 'We continuously monitor our platform for potential security threats:',
        'incident1': 'Regular monitoring for suspicious activities and potential security incidents',
        'incident2': 'Automated alerts for unusual patterns that may indicate a security breach',
        'incident3': 'Established incident response procedures to quickly address any security issues',
        'incident_note': 'In the unlikely event of a data breach that affects your personal information, we will notify affected users as required by applicable law.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'While we implement strong security measures, no method of transmission over the Internet or electronic storage is 100% secure. We continuously work to maintain and improve our security practices to protect your data.',
        'important_notice_footer': 'If you have any questions about the security of your data or suspect any unauthorized activity on your account, please contact us immediately at <strong>support@shramikconnect.in</strong>.',
        
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
        'security_title': 'डेटा सुरक्षा',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'श्रमिककनेक्ट आपकी व्यक्तिगत जानकारी की सुरक्षा को गंभीरता से लेता है। हम आपके डेटा को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन या विनाश से बचाने के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं। यह खंड उन सुरक्षा प्रथाओं की व्याख्या करता है जिनका हम आपकी जानकारी को सुरक्षित रखने के लिए पालन करते हैं।',
        
        // Section 1 - Encryption
        'encryption_title': 'एन्क्रिप्शन',
        'encryption_desc': 'हम आपके डेटा की सुरक्षा के लिए उद्योग-मानक एन्क्रिप्शन का उपयोग करते हैं:',
        'encryption1': 'आपके डिवाइस और हमारे सर्वर के बीच प्रेषित सभी डेटा SSL/TLS तकनीक (HTTPS) का उपयोग करके एन्क्रिप्ट किया जाता है। यह सुनिश्चित करता है कि आपकी जानकारी को प्रसारण के दौरान अनधिकृत पक्षों द्वारा इंटरसेप्ट या पढ़ा नहीं जा सकता है।',
        'encryption2': 'संवेदनशील जानकारी, जैसे पासवर्ड, हैश की जाती है और हमारे डेटाबेस में सुरक्षित रूप से संग्रहीत की जाती है। इसका मतलब है कि डेटा उल्लंघन की असंभावित स्थिति में भी, आपका वास्तविक पासवर्ड उजागर नहीं होगा।',
        'encryption3': 'उपयोगकर्ताओं द्वारा प्रदान किए गए पहचान दस्तावेज (आधार, पैन) इस संवेदनशील जानकारी की सुरक्षा के लिए अतिरिक्त सुरक्षा उपायों के साथ संग्रहीत किए जाते हैं।',
        
        // Section 2 - Hosting Security
        'hosting_security_title': 'सुरक्षित होस्टिंग इंफ्रास्ट्रक्चर',
        'hosting_security_desc': 'श्रमिककनेक्ट <strong>Render</strong> पर होस्ट किया गया है, जो एक विश्वसनीय क्लाउड प्लेटफॉर्म है जो प्रदान करता है:',
        'hosting_security1': 'भौतिक सुरक्षा उपायों के साथ सुरक्षित डेटा केंद्र',
        'hosting_security2': 'नेटवर्क फ़ायरवॉल और घुसपैठ का पता लगाने वाली प्रणाली',
        'hosting_security3': 'डेटा हानि को रोकने के लिए नियमित डेटा बैकअप',
        'hosting_security4': 'प्लेटफॉर्म विश्वसनीयता सुनिश्चित करने के लिए उच्च उपलब्धता और अतिरेकता',
        'hosting_security_note': 'Render उद्योग मानकों को पूरा करने वाले व्यापक सुरक्षा उपायों को लागू करता है। आप Render की आधिकारिक वेबसाइट पर उनकी सुरक्षा प्रथाओं के बारे में अधिक जान सकते हैं।',
        
        // Section 3 - Access Controls
        'access_control_title': 'पहुंच नियंत्रण',
        'access_control_desc': 'हम अपने संगठन के भीतर उपयोगकर्ता डेटा तक पहुंच को सख्ती से सीमित करते हैं:',
        'access_control1': 'केवल अधिकृत कर्मी जिनकी वैध व्यावसायिक आवश्यकता है, उपयोगकर्ता डेटा तक पहुंच सकते हैं',
        'access_control2': 'सभी कर्मचारी पहुंच मजबूत प्रमाणीकरण द्वारा संरक्षित है और ऑडिट उद्देश्यों के लिए लॉग की जाती है',
        'access_control3': 'यह सुनिश्चित करने के लिए नियमित पहुंच समीक्षा आयोजित की जाती है कि अनुमतियां उचित बनी रहें',
        'access_control_note': 'हम न्यूनतम विशेषाधिकार के सिद्धांत का पालन करते हैं, जिसका अर्थ है कि कर्मचारियों के पास अपने कार्यों को करने के लिए आवश्यक न्यूनतम डेटा तक ही पहुंच है।',
        
        // Section 4 - Authentication
        'authentication_title': 'प्रमाणीकरण और खाता सुरक्षा',
        'authentication_desc': 'हम आपके खाते की सुरक्षा में मदद के लिए सुरक्षा सुविधाएं प्रदान करते हैं:',
        'authentication1': 'मोबाइल नंबर प्रमाणीकरण के लिए ओटीपी (वन-टाइम पासवर्ड) सत्यापन',
        'authentication2': 'निष्क्रिय उपयोगकर्ताओं को स्वचालित रूप से लॉग आउट करने के लिए सत्र प्रबंधन',
        'authentication3': 'ब्रूट फोर्स हमलों को रोकने के लिए कई असफल लॉगिन प्रयासों के बाद खाता लॉकआउट तंत्र',
        'user_responsibility_title': 'आपकी जिम्मेदारी',
        'user_responsibility_desc': 'आप अपने खाते को सुरक्षित रखने में महत्वपूर्ण भूमिका निभाते हैं। हमेशा एक मजबूत, अद्वितीय पासवर्ड का उपयोग करें, अपने लॉगिन क्रेडेंशियल कभी दूसरों के साथ साझा न करें, और साझा डिवाइस का उपयोग करते समय अपने खाते से लॉग आउट करें।',
        
        // Section 5 - Retention
        'retention_title': 'डेटा प्रतिधारण और विलोपन',
        'retention_desc': 'हम आपकी व्यक्तिगत जानकारी को केवल आवश्यकता तक बनाए रखते हैं:',
        'retention1': 'सक्रिय खाते: आपका खाता सक्रिय रहने तक डेटा बनाए रखा जाता है',
        'retention2': 'निष्क्रिय खाते: 12 महीने तक निष्क्रिय रहने वाले खाते निष्क्रिय किए जा सकते हैं',
        'retention3': 'खाता विलोपन: जब आप ईमेल के माध्यम से खाता विलोपन का अनुरोध करते हैं, तो हम 2 दिनों के भीतर आपका खाता और संबंधित डेटा हटा देते हैं',
        'retention_note': 'कानूनी अनुपालन या विवादों को हल करने के लिए आवश्यक होने पर कुछ जानकारी लंबे समय तक बनाए रखी जा सकती है, लेकिन केवल आवश्यक सीमा तक।',
        
        // Section 6 - Incident Response
        'incident_title': 'सुरक्षा निगरानी और घटना प्रतिक्रिया',
        'incident_desc': 'हम संभावित सुरक्षा खतरों के लिए अपने प्लेटफॉर्म की लगातार निगरानी करते हैं:',
        'incident1': 'संदिग्ध गतिविधियों और संभावित सुरक्षा घटनाओं के लिए नियमित निगरानी',
        'incident2': 'असामान्य पैटर्न के लिए स्वचालित अलर्ट जो सुरक्षा उल्लंघन का संकेत दे सकते हैं',
        'incident3': 'किसी भी सुरक्षा मुद्दे को जल्दी से हल करने के लिए स्थापित घटना प्रतिक्रिया प्रक्रियाएं',
        'incident_note': 'डेटा उल्लंघन की असंभावित स्थिति में जो आपकी व्यक्तिगत जानकारी को प्रभावित करता है, हम लागू कानून के अनुसार प्रभावित उपयोगकर्ताओं को सूचित करेंगे।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'हालांकि हम मजबूत सुरक्षा उपाय लागू करते हैं, इंटरनेट पर प्रसारण या इलेक्ट्रॉनिक भंडारण का कोई भी तरीका 100% सुरक्षित नहीं है। हम आपके डेटा की सुरक्षा के लिए अपनी सुरक्षा प्रथाओं को बनाए रखने और सुधारने के लिए लगातार काम करते हैं।',
        'important_notice_footer': 'यदि आपके डेटा की सुरक्षा के बारे में कोई प्रश्न हैं या आपके खाते पर कोई अनधिकृत गतिविधि का संदेह है, तो कृपया तुरंत हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें।',
        
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
        'security_title': 'डेटा सुरक्षा',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'श्रमिककनेक्ट तुमच्या वैयक्तिक माहितीच्या सुरक्षिततेला गंभीरतेने घेते. तुमच्या डेटाचे अनधिकृत प्रवेश, प्रकटीकरण, बदल किंवा नाश यापासून संरक्षण करण्यासाठी आम्ही योग्य तांत्रिक आणि संस्थात्मक उपाय लागू करतो. हा विभाग तुमची माहिती सुरक्षित ठेवण्यासाठी आम्ही अनुसरण करत असलेल्या सुरक्षा पद्धती स्पष्ट करतो.',
        
        // Section 1 - Encryption
        'encryption_title': 'एन्क्रिप्शन',
        'encryption_desc': 'आम्ही तुमच्या डेटाचे संरक्षण करण्यासाठी उद्योग-मानक एन्क्रिप्शन वापरतो:',
        'encryption1': 'तुमच्या डिव्हाइस आणि आमच्या सर्व्हर दरम्यान प्रसारित केलेला सर्व डेटा SSL/TLS तंत्रज्ञान (HTTPS) वापरून एन्क्रिप्ट केला जातो. हे सुनिश्चित करते की प्रसारणादरम्यान तुमची माहिती अनधिकृत पक्षांद्वारे व्यत्यय किंवा वाचली जाऊ शकत नाही.',
        'encryption2': 'संवेदनशील माहिती, जसे की पासवर्ड, हैश केली जाते आणि आमच्या डेटाबेसमध्ये सुरक्षितपणे संग्रहित केली जाते. याचा अर्थ असा की डेटा उल्लंघनाच्या अशक्य घटनेतही, तुमचा वास्तविक पासवर्ड उघड होणार नाही.',
        'encryption3': 'वापरकर्त्यांद्वारे प्रदान केलेली ओळख दस्तऐवज (आधार, पॅन) या संवेदनशील माहितीचे संरक्षण करण्यासाठी अतिरिक्त सुरक्षा उपायांसह संग्रहित केली जातात.',
        
        // Section 2 - Hosting Security
        'hosting_security_title': 'सुरक्षित होस्टिंग इन्फ्रास्ट्रक्चर',
        'hosting_security_desc': 'श्रमिककनेक्ट <strong>Render</strong> वर होस्ट केले आहे, जे एक विश्वसनीय क्लाउड प्लॅटफॉर्म आहे जे प्रदान करते:',
        'hosting_security1': 'भौतिक सुरक्षा उपायांसह सुरक्षित डेटा केंद्रे',
        'hosting_security2': 'नेटवर्क फायरवॉल आणि घुसखोरी शोध प्रणाली',
        'hosting_security3': 'डेटा हानी रोखण्यासाठी नियमित डेटा बॅकअप',
        'hosting_security4': 'प्लॅटफॉर्म विश्वासार्हता सुनिश्चित करण्यासाठी उच्च उपलब्धता आणि अतिरेकता',
        'hosting_security_note': 'Render उद्योग मानके पूर्ण करणारे व्यापक सुरक्षा उपाय लागू करते. तुम्ही Render च्या अधिकृत वेबसाइटवर त्यांच्या सुरक्षा पद्धतींबद्दल अधिक जाणून घेऊ शकता.',
        
        // Section 3 - Access Controls
        'access_control_title': 'प्रवेश नियंत्रण',
        'access_control_desc': 'आम्ही आमच्या संस्थेमध्ये वापरकर्ता डेटामध्ये प्रवेश कठोरपणे मर्यादित करतो:',
        'access_control1': 'फक्त अधिकृत कर्मचारी ज्यांना वैध व्यवसायाची आवश्यकता आहे ते वापरकर्ता डेटामध्ये प्रवेश करू शकतात',
        'access_control2': 'सर्व कर्मचारी प्रवेश मजबूत प्रमाणीकरणाद्वारे संरक्षित आहे आणि ऑडिट उद्देशांसाठी लॉग केला जातो',
        'access_control3': 'परवानग्या योग्य राहतील याची खात्री करण्यासाठी नियमित प्रवेश पुनरावलोकने आयोजित केली जातात',
        'access_control_note': 'आम्ही किमान विशेषाधिकाराच्या तत्त्वाचे अनुसरण करतो, याचा अर्थ कर्मचाऱ्यांकडे त्यांची कार्ये करण्यासाठी आवश्यक असलेल्या किमान डेटामध्येच प्रवेश असतो.',
        
        // Section 4 - Authentication
        'authentication_title': 'प्रमाणीकरण आणि खाते सुरक्षा',
        'authentication_desc': 'आम्ही तुमच्या खात्याचे संरक्षण करण्यासाठी सुरक्षा वैशिष्ट्ये प्रदान करतो:',
        'authentication1': 'मोबाइल क्रमांक प्रमाणीकरणासाठी ओटीपी (वन-टाइम पासवर्ड) सत्यापन',
        'authentication2': 'निष्क्रिय वापरकर्त्यांना आपोआप लॉग आउट करण्यासाठी सत्र व्यवस्थापन',
        'authentication3': 'ब्रूट फोर्स हल्ले रोखण्यासाठी अनेक अयशस्वी लॉगिन प्रयत्नांनंतर खाते लॉकआउट यंत्रणा',
        'user_responsibility_title': 'तुमची जबाबदारी',
        'user_responsibility_desc': 'तुमचे खाते सुरक्षित ठेवण्यात तुम्ही महत्त्वाची भूमिका बजावता. नेहमी मजबूत, अद्वितीय पासवर्ड वापरा, तुमचे लॉगिन क्रेडेंशियल कधीही इतरांसोबत शेअर करू नका आणि शेअर केलेली डिव्हाइस वापरताना तुमच्या खात्यातून लॉग आउट करा.',
        
        // Section 5 - Retention
        'retention_title': 'डेटा धारणा आणि हटवणे',
        'retention_desc': 'आम्ही तुमची वैयक्तिक माहिती फक्त आवश्यक तोपर्यंत ठेवतो:',
        'retention1': 'सक्रिय खाती: तुमचे खाते सक्रिय असताना डेटा ठेवला जातो',
        'retention2': 'निष्क्रिय खाती: १२ महिने निष्क्रिय असलेली खाती निष्क्रिय केली जाऊ शकतात',
        'retention3': 'खाते हटवणे: जेव्हा तुम्ही ईमेलद्वारे खाते हटवण्याची विनंती करता, तेव्हा आम्ही २ दिवसांत तुमचे खाते आणि संबंधित डेटा हटवतो',
        'retention_note': 'कायदेशीर अनुपालन किंवा विवाद सोडवण्यासाठी आवश्यक असल्यास काही माहिती जास्त काळ ठेवली जाऊ शकते, परंतु फक्त आवश्यक मर्यादेपर्यंत.',
        
        // Section 6 - Incident Response
        'incident_title': 'सुरक्षा निरीक्षण आणि घटना प्रतिसाद',
        'incident_desc': 'आम्ही संभाव्य सुरक्षा धोक्यांसाठी आमच्या प्लॅटफॉर्मचे सतत निरीक्षण करतो:',
        'incident1': 'संशयास्पद क्रियाकलाप आणि संभाव्य सुरक्षा घटनांसाठी नियमित निरीक्षण',
        'incident2': 'असामान्य नमुन्यांसाठी स्वयंचलित अलर्ट जे सुरक्षा उल्लंघन दर्शवू शकतात',
        'incident3': 'कोणत्याही सुरक्षा समस्या त्वरित सोडवण्यासाठी स्थापित घटना प्रतिसाद प्रक्रिया',
        'incident_note': 'डेटा उल्लंघनाच्या अशक्य घटनेत जी तुमच्या वैयक्तिक माहितीवर परिणाम करते, आम्ही लागू कायद्यानुसार प्रभावित वापरकर्त्यांना सूचित करू.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'आम्ही मजबूत सुरक्षा उपाय लागू करत असलो तरी, इंटरनेटवर प्रसारण किंवा इलेक्ट्रॉनिक स्टोरेजची कोणतीही पद्धत १००% सुरक्षित नाही. तुमच्या डेटाचे संरक्षण करण्यासाठी आम्ही आमच्या सुरक्षा पद्धती राखण्यासाठी आणि सुधारण्यासाठी सतत कार्य करतो.',
        'important_notice_footer': 'तुमच्या डेटाच्या सुरक्षिततेबद्दल काही प्रश्न असल्यास किंवा तुमच्या खात्यावर कोणतीही अनधिकृत क्रियाकलाप संशयित असल्यास, कृपया त्वरित आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा.',
        
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
    console.log('Data Security page initialized');

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