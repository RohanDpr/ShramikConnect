/**
 * LIABILITY PAGE - TERMS & CONDITIONS
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
        'liability_title': 'Liability and Disclaimer',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the limitations of responsibility for the ShramikConnect platform. ShramikConnect acts only as a digital platform that connects workers and employers. The platform does not directly participate in job agreements or financial transactions between users. By using the platform, users acknowledge and accept the limitations described in this section.',
        
        // Section 1 - Platform Role
        'platform_role_title': 'Platform Role',
        'platform_role_desc': 'ShramikConnect operates as a technology platform that allows workers and employers to connect with each other.',
        'platform_role_tools': 'The platform provides tools that help users:',
        'platform_role_tool1': 'Discover job opportunities',
        'platform_role_tool2': 'Connect with workers or employers',
        'platform_role_tool3': 'Communicate regarding work',
        'platform_role_note': 'ShramikConnect does not act as an employer, contractor, or agent for any user.',
        
        // Section 2 - No Employment
        'no_employment_title': 'No Employment Relationship',
        'no_employment_desc': 'Using ShramikConnect does not create an employment relationship between:',
        'no_employment_relation1': 'Workers and the platform',
        'no_employment_relation2': 'Employers and the platform',
        'no_employment_agreement': 'Any work agreement exists only between the worker and the employer.',
        'no_employment_involvement': 'ShramikConnect is not involved in managing or supervising work.',
        
        // Section 3 - Payment Responsibility
        'payment_responsibility_title': 'Payment Responsibility',
        'payment_responsibility_desc': 'ShramikConnect does not process or manage payments between users.',
        'payment_responsibility_negotiation': 'Workers and employers negotiate payment terms directly and handle payments independently.',
        'payment_responsibility_platform': 'The platform is not responsible for:',
        'payment_responsibility1': 'Payment delays',
        'payment_responsibility2': 'Payment disputes',
        'payment_responsibility3': 'Non-payment issues',
        'payment_responsibility_note': 'Users must resolve payment matters directly with each other.',
        
        // Section 4 - Job Quality
        'job_quality_title': 'Job Quality and Performance',
        'job_quality_desc': 'ShramikConnect does not guarantee the quality, reliability, or performance of workers.',
        'job_quality_employer': 'Similarly, the platform does not guarantee that employers will provide suitable work conditions.',
        'job_quality_note': 'Users are encouraged to communicate clearly and verify job details before accepting work.',
        
        // Section 5 - User Conduct
        'user_conduct_title': 'User Conduct Responsibility',
        'user_conduct_desc': 'Users are responsible for their own actions while using the platform.',
        'user_conduct_platform': 'ShramikConnect is not responsible for:',
        'user_conduct1': 'Misconduct by workers or employers',
        'user_conduct2': 'False information provided by users',
        'user_conduct3': 'Any damages caused during work arrangements',
        'user_conduct_dispute': 'If disputes arise between users, they must be resolved between the involved parties.',
        
        // Section 6 - Availability
        'availability_title': 'Platform Availability',
        'availability_desc': 'While ShramikConnect aims to provide reliable service, the platform does not guarantee uninterrupted availability.',
        'availability_interruptions': 'Temporary interruptions may occur due to:',
        'availability_reason1': 'Maintenance updates',
        'availability_reason2': 'Technical issues',
        'availability_reason3': 'Internet connectivity problems',
        'availability_liability': 'ShramikConnect is not liable for losses resulting from such interruptions.',
        
        // Section 7 - Third Party
        'third_party_title': 'Third-Party Communication',
        'third_party_desc': 'Users may communicate outside the platform after connecting.',
        'third_party_monitoring': 'ShramikConnect does not control or monitor external communication channels.',
        'third_party_liability': 'Therefore, the platform is not responsible for any agreements, misunderstandings, or issues that arise from such interactions.',
        
        // Section 8 - Limitation of Liability
        'limitation_liability_title': 'Limitation of Liability',
        'limitation_liability_desc': 'To the maximum extent permitted by law, ShramikConnect shall not be liable for:',
        'limitation_liability1': 'Financial losses',
        'limitation_liability2': 'Work-related damages',
        'limitation_liability3': 'Contract disputes between users',
        'limitation_liability4': 'Any indirect or consequential damages',
        'limitation_liability_note': 'Users agree that they use the platform at their own discretion and responsibility.',
        
        // Section 9 - User Responsibility
        'user_responsibility_title': 'User Responsibility',
        'user_responsibility_desc': 'By using the platform, users agree that they are responsible for:',
        'user_responsibility1': 'Verifying job details',
        'user_responsibility2': 'Negotiating payment terms',
        'user_responsibility3': 'Ensuring safe working arrangements',
        'user_responsibility4': 'Following applicable laws',
        'user_responsibility_note': 'ShramikConnect only facilitates connections and does not participate in user agreements.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect provides a platform to help workers and employers find each other.',
        'important_notice_platform': 'The platform does not:',
        'important_notice1': 'Guarantee job completion',
        'important_notice2': 'Guarantee payment',
        'important_notice3': 'Supervise work performed by users',
        'important_notice_footer': 'All agreements and responsibilities remain between the worker and the employer.',
        
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
        'liability_title': 'देयता और अस्वीकरण',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म के लिए जिम्मेदारी की सीमाओं की व्याख्या करता है। श्रमिककनेक्ट केवल एक डिजिटल प्लेटफॉर्म के रूप में कार्य करता है जो श्रमिकों और नियोक्ताओं को जोड़ता है। प्लेटफॉर्म उपयोगकर्ताओं के बीच नौकरी समझौतों या वित्तीय लेनदेन में सीधे भाग नहीं लेता है। प्लेटफॉर्म का उपयोग करके, उपयोगकर्ता इस खंड में वर्णित सीमाओं को स्वीकार करते हैं।',
        
        // Section 1 - Platform Role
        'platform_role_title': 'प्लेटफॉर्म की भूमिका',
        'platform_role_desc': 'श्रमिककनेक्ट एक प्रौद्योगिकी प्लेटफॉर्म के रूप में संचालित होता है जो श्रमिकों और नियोक्ताओं को एक दूसरे से जुड़ने की अनुमति देता है।',
        'platform_role_tools': 'प्लेटफॉर्म उपकरण प्रदान करता है जो उपयोगकर्ताओं की मदद करते हैं:',
        'platform_role_tool1': 'नौकरी के अवसर खोजना',
        'platform_role_tool2': 'श्रमिकों या नियोक्ताओं से जुड़ना',
        'platform_role_tool3': 'कार्य के बारे में संवाद करना',
        'platform_role_note': 'श्रमिककनेक्ट किसी भी उपयोगकर्ता के लिए नियोक्ता, ठेकेदार या एजेंट के रूप में कार्य नहीं करता है।',
        
        // Section 2 - No Employment
        'no_employment_title': 'कोई रोजगार संबंध नहीं',
        'no_employment_desc': 'श्रमिककनेक्ट का उपयोग निम्नलिखित के बीच रोजगार संबंध नहीं बनाता है:',
        'no_employment_relation1': 'श्रमिक और प्लेटफॉर्म',
        'no_employment_relation2': 'नियोक्ता और प्लेटफॉर्म',
        'no_employment_agreement': 'कोई भी कार्य समझौता केवल श्रमिक और नियोक्ता के बीच मौजूद होता है।',
        'no_employment_involvement': 'श्रमिककनेक्ट कार्य के प्रबंधन या पर्यवेक्षण में शामिल नहीं है।',
        
        // Section 3 - Payment Responsibility
        'payment_responsibility_title': 'भुगतान जिम्मेदारी',
        'payment_responsibility_desc': 'श्रमिककनेक्ट उपयोगकर्ताओं के बीच भुगतान को संसाधित या प्रबंधित नहीं करता है।',
        'payment_responsibility_negotiation': 'श्रमिक और नियोक्ता सीधे भुगतान शर्तों पर बातचीत करते हैं और स्वतंत्र रूप से भुगतान संभालते हैं।',
        'payment_responsibility_platform': 'प्लेटफॉर्म निम्नलिखित के लिए जिम्मेदार नहीं है:',
        'payment_responsibility1': 'भुगतान में देरी',
        'payment_responsibility2': 'भुगतान विवाद',
        'payment_responsibility3': 'गैर-भुगतान मुद्दे',
        'payment_responsibility_note': 'उपयोगकर्ताओं को भुगतान मामलों को सीधे एक दूसरे के साथ हल करना चाहिए।',
        
        // Section 4 - Job Quality
        'job_quality_title': 'नौकरी की गुणवत्ता और प्रदर्शन',
        'job_quality_desc': 'श्रमिककनेक्ट श्रमिकों की गुणवत्ता, विश्वसनीयता या प्रदर्शन की गारंटी नहीं देता है।',
        'job_quality_employer': 'इसी तरह, प्लेटफॉर्म गारंटी नहीं देता है कि नियोक्ता उपयुक्त कार्य स्थितियां प्रदान करेंगे।',
        'job_quality_note': 'उपयोगकर्ताओं को कार्य स्वीकार करने से पहले स्पष्ट रूप से संवाद करने और नौकरी के विवरण सत्यापित करने के लिए प्रोत्साहित किया जाता है।',
        
        // Section 5 - User Conduct
        'user_conduct_title': 'उपयोगकर्ता आचरण जिम्मेदारी',
        'user_conduct_desc': 'उपयोगकर्ता प्लेटफॉर्म का उपयोग करते समय अपने स्वयं के कार्यों के लिए जिम्मेदार हैं।',
        'user_conduct_platform': 'श्रमिककनेक्ट निम्नलिखित के लिए जिम्मेदार नहीं है:',
        'user_conduct1': 'श्रमिकों या नियोक्ताओं द्वारा दुराचार',
        'user_conduct2': 'उपयोगकर्ताओं द्वारा प्रदान की गई झूठी जानकारी',
        'user_conduct3': 'कार्य व्यवस्था के दौरान होने वाली कोई भी क्षति',
        'user_conduct_dispute': 'यदि उपयोगकर्ताओं के बीच विवाद उत्पन्न होते हैं, तो उन्हें शामिल पक्षों के बीच हल किया जाना चाहिए।',
        
        // Section 6 - Availability
        'availability_title': 'प्लेटफॉर्म उपलब्धता',
        'availability_desc': 'जबकि श्रमिककनेक्ट विश्वसनीय सेवा प्रदान करने का लक्ष्य रखता है, प्लेटफॉर्म निर्बाध उपलब्धता की गारंटी नहीं देता है।',
        'availability_interruptions': 'अस्थायी रुकावटें निम्नलिखित के कारण हो सकती हैं:',
        'availability_reason1': 'रखरखाव अपडेट',
        'availability_reason2': 'तकनीकी समस्याएं',
        'availability_reason3': 'इंटरनेट कनेक्टिविटी समस्याएं',
        'availability_liability': 'श्रमिककनेक्ट ऐसी रुकावटों से होने वाले नुकसान के लिए उत्तरदायी नहीं है।',
        
        // Section 7 - Third Party
        'third_party_title': 'तृतीय-पक्ष संचार',
        'third_party_desc': 'उपयोगकर्ता जुड़ने के बाद प्लेटफॉर्म के बाहर संवाद कर सकते हैं।',
        'third_party_monitoring': 'श्रमिककनेक्ट बाहरी संचार चैनलों को नियंत्रित या मॉनिटर नहीं करता है।',
        'third_party_liability': 'इसलिए, प्लेटफॉर्म ऐसी बातचीत से उत्पन्न होने वाले किसी भी समझौते, गलतफहमी या मुद्दों के लिए जिम्मेदार नहीं है।',
        
        // Section 8 - Limitation of Liability
        'limitation_liability_title': 'देयता की सीमा',
        'limitation_liability_desc': 'कानून द्वारा अनुमत अधिकतम सीमा तक, श्रमिककनेक्ट निम्नलिखित के लिए उत्तरदायी नहीं होगा:',
        'limitation_liability1': 'वित्तीय नुकसान',
        'limitation_liability2': 'कार्य संबंधी क्षति',
        'limitation_liability3': 'उपयोगकर्ताओं के बीच अनुबंध विवाद',
        'limitation_liability4': 'कोई भी अप्रत्यक्ष या परिणामी क्षति',
        'limitation_liability_note': 'उपयोगकर्ता सहमत हैं कि वे प्लेटफॉर्म का उपयोग अपने स्वयं के विवेक और जिम्मेदारी पर करते हैं।',
        
        // Section 9 - User Responsibility
        'user_responsibility_title': 'उपयोगकर्ता जिम्मेदारी',
        'user_responsibility_desc': 'प्लेटफॉर्म का उपयोग करके, उपयोगकर्ता सहमत हैं कि वे निम्नलिखित के लिए जिम्मेदार हैं:',
        'user_responsibility1': 'नौकरी के विवरण सत्यापित करना',
        'user_responsibility2': 'भुगतान शर्तों पर बातचीत करना',
        'user_responsibility3': 'सुरक्षित कार्य व्यवस्था सुनिश्चित करना',
        'user_responsibility4': 'लागू कानूनों का पालन करना',
        'user_responsibility_note': 'श्रमिककनेक्ट केवल कनेक्शन की सुविधा प्रदान करता है और उपयोगकर्ता समझौतों में भाग नहीं लेता है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट श्रमिकों और नियोक्ताओं को एक दूसरे को खोजने में मदद करने के लिए एक प्लेटफॉर्म प्रदान करता है।',
        'important_notice_platform': 'प्लेटफॉर्म निम्नलिखित नहीं करता है:',
        'important_notice1': 'नौकरी पूर्णता की गारंटी',
        'important_notice2': 'भुगतान की गारंटी',
        'important_notice3': 'उपयोगकर्ताओं द्वारा किए गए कार्य की निगरानी',
        'important_notice_footer': 'सभी समझौते और जिम्मेदारियां श्रमिक और नियोक्ता के बीच बनी रहती हैं।',
        
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
        'liability_title': 'दायित्व आणि अस्वीकरण',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मसाठी जबाबदारीच्या मर्यादा स्पष्ट करतो. श्रमिककनेक्ट फक्त एक डिजिटल प्लॅटफॉर्म म्हणून कार्य करते जे कामगार आणि नियोक्त्यांना जोडते. प्लॅटफॉर्म वापरकर्त्यांमधील नोकरी करार किंवा आर्थिक व्यवहारांमध्ये थेट भाग घेत नाही. प्लॅटफॉर्म वापरून, वापरकर्ते या विभागात वर्णन केलेल्या मर्यादा मान्य करतात.',
        
        // Section 1 - Platform Role
        'platform_role_title': 'प्लॅटफॉर्मची भूमिका',
        'platform_role_desc': 'श्रमिककनेक्ट एक तंत्रज्ञान प्लॅटफॉर्म म्हणून कार्य करते जे कामगार आणि नियोक्त्यांना एकमेकांशी जोडण्यास अनुमती देते.',
        'platform_role_tools': 'प्लॅटफॉर्म साधने प्रदान करते जी वापरकर्त्यांना मदत करतात:',
        'platform_role_tool1': 'नोकरीच्या संधी शोधणे',
        'platform_role_tool2': 'कामगार किंवा नियोक्त्यांशी कनेक्ट होणे',
        'platform_role_tool3': 'कामाबद्दल संवाद साधणे',
        'platform_role_note': 'श्रमिककनेक्ट कोणत्याही वापरकर्त्यासाठी नियोक्ता, कंत्राटदार किंवा एजंट म्हणून कार्य करत नाही.',
        
        // Section 2 - No Employment
        'no_employment_title': 'कोणताही रोजगार संबंध नाही',
        'no_employment_desc': 'श्रमिककनेक्ट वापरल्याने यांच्यात रोजगार संबंध निर्माण होत नाही:',
        'no_employment_relation1': 'कामगार आणि प्लॅटफॉर्म',
        'no_employment_relation2': 'नियोक्ता आणि प्लॅटफॉर्म',
        'no_employment_agreement': 'कोणताही काम करार फक्त कामगार आणि नियोक्ता यांच्यामध्ये अस्तित्वात असतो.',
        'no_employment_involvement': 'श्रमिककनेक्ट कामाच्या व्यवस्थापन किंवा पर्यवेक्षणात सहभागी नाही.',
        
        // Section 3 - Payment Responsibility
        'payment_responsibility_title': 'पेमेंट जबाबदारी',
        'payment_responsibility_desc': 'श्रमिककनेक्ट वापरकर्त्यांमधील पेमेंटवर प्रक्रिया किंवा व्यवस्थापन करत नाही.',
        'payment_responsibility_negotiation': 'कामगार आणि नियोक्ते थेट पेमेंट अटींवर वाटाघाटी करतात आणि स्वतंत्रपणे पेमेंट हाताळतात.',
        'payment_responsibility_platform': 'प्लॅटफॉर्म यासाठी जबाबदार नाही:',
        'payment_responsibility1': 'पेमेंट विलंब',
        'payment_responsibility2': 'पेमेंट विवाद',
        'payment_responsibility3': 'गैर-पेमेंट समस्या',
        'payment_responsibility_note': 'वापरकर्त्यांनी पेमेंट बाबी थेट एकमेकांसोबत सोडवल्या पाहिजेत.',
        
        // Section 4 - Job Quality
        'job_quality_title': 'नोकरी गुणवत्ता आणि कामगिरी',
        'job_quality_desc': 'श्रमिककनेक्ट कामगारांची गुणवत्ता, विश्वासार्हता किंवा कामगिरीची हमी देत नाही.',
        'job_quality_employer': 'त्याचप्रमाणे, प्लॅटफॉर्म हमी देत नाही की नियोक्ते योग्य कामाची परिस्थिती प्रदान करतील.',
        'job_quality_note': 'काम स्वीकारण्यापूर्वी वापरकर्त्यांनी स्पष्टपणे संवाद साधण्यास आणि नोकरीचे तपशील सत्यापित करण्यास प्रोत्साहित केले जाते.',
        
        // Section 5 - User Conduct
        'user_conduct_title': 'वापरकर्ता आचरण जबाबदारी',
        'user_conduct_desc': 'प्लॅटफॉर्म वापरताना वापरकर्ते त्यांच्या स्वतःच्या कृतींसाठी जबाबदार आहेत.',
        'user_conduct_platform': 'श्रमिककनेक्ट यासाठी जबाबदार नाही:',
        'user_conduct1': 'कामगार किंवा नियोक्त्यांकडून गैरवर्तन',
        'user_conduct2': 'वापरकर्त्यांनी प्रदान केलेली खोटी माहिती',
        'user_conduct3': 'कामाच्या व्यवस्थेदरम्यान झालेले कोणतेही नुकसान',
        'user_conduct_dispute': 'वापरकर्त्यांमध्ये विवाद उद्भवल्यास, ते सहभागी पक्षांमध्ये सोडवले जाणे आवश्यक आहे.',
        
        // Section 6 - Availability
        'availability_title': 'प्लॅटफॉर्म उपलब्धता',
        'availability_desc': 'श्रमिककनेक्ट विश्वसनीय सेवा प्रदान करण्याचे उद्दिष्ट ठेवते, परंतु प्लॅटफॉर्म अखंड उपलब्धतेची हमी देत नाही.',
        'availability_interruptions': 'यामुळे तात्पुरते व्यत्यय येऊ शकतात:',
        'availability_reason1': 'देखभाल अद्यतने',
        'availability_reason2': 'तांत्रिक समस्या',
        'availability_reason3': 'इंटरनेट कनेक्टिव्हिटी समस्या',
        'availability_liability': 'अशा व्यत्ययांमुळे होणाऱ्या नुकसानीसाठी श्रमिककनेक्ट जबाबदार नाही.',
        
        // Section 7 - Third Party
        'third_party_title': 'तृतीय-पक्ष संवाद',
        'third_party_desc': 'वापरकर्ते कनेक्ट झाल्यानंतर प्लॅटफॉर्मच्या बाहेर संवाद साधू शकतात.',
        'third_party_monitoring': 'श्रमिककनेक्ट बाह्य संवाद चॅनेल नियंत्रित किंवा निरीक्षण करत नाही.',
        'third_party_liability': 'म्हणून, अशा परस्परसंवादातून उद्भवलेल्या कोणत्याही करार, गैरसमज किंवा समस्यांसाठी प्लॅटफॉर्म जबाबदार नाही.',
        
        // Section 8 - Limitation of Liability
        'limitation_liability_title': 'दायित्वाची मर्यादा',
        'limitation_liability_desc': 'कायद्याने परवानगी दिलेल्या कमाल मर्यादेपर्यंत, श्रमिककनेक्ट यासाठी जबाबदार राहणार नाही:',
        'limitation_liability1': 'आर्थिक नुकसान',
        'limitation_liability2': 'कामाशी संबंधित नुकसान',
        'limitation_liability3': 'वापरकर्त्यांमधील करार विवाद',
        'limitation_liability4': 'कोणतेही अप्रत्यक्ष किंवा परिणामी नुकसान',
        'limitation_liability_note': 'वापरकर्ते सहमत आहेत की ते प्लॅटफॉर्म त्यांच्या स्वतःच्या विवेकबुद्धीने आणि जबाबदारीने वापरतात.',
        
        // Section 9 - User Responsibility
        'user_responsibility_title': 'वापरकर्ता जबाबदारी',
        'user_responsibility_desc': 'प्लॅटफॉर्म वापरून, वापरकर्ते सहमत आहेत की ते यासाठी जबाबदार आहेत:',
        'user_responsibility1': 'नोकरीचे तपशील सत्यापित करणे',
        'user_responsibility2': 'पेमेंट अटींवर वाटाघाटी करणे',
        'user_responsibility3': 'सुरक्षित कामाची व्यवस्था सुनिश्चित करणे',
        'user_responsibility4': 'लागू कायद्यांचे पालन करणे',
        'user_responsibility_note': 'श्रमिककनेक्ट फक्त कनेक्शन सुलभ करते आणि वापरकर्ता करारांमध्ये भाग घेत नाही.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट कामगार आणि नियोक्त्यांना एकमेकांना शोधण्यात मदत करण्यासाठी एक प्लॅटफॉर्म प्रदान करते.',
        'important_notice_platform': 'प्लॅटफॉर्म हे करत नाही:',
        'important_notice1': 'नोकरी पूर्णतेची हमी',
        'important_notice2': 'पेमेंटची हमी',
        'important_notice3': 'वापरकर्त्यांनी केलेल्या कामाचे पर्यवेक्षण',
        'important_notice_footer': 'सर्व करार आणि जबाबदाऱ्या कामगार आणि नियोक्ता यांच्यामध्येच राहतात.',
        
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
    console.log('Liability page initialized');

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