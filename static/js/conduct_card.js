/**
 * CONDUCT POLICY PAGE - TERMS & CONDITIONS
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
        'conduct_title': 'User Conduct Policy',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section describes the standards of behavior expected from all users of the ShramikConnect platform. To maintain a safe and respectful environment for workers and employers, all users must follow the conduct rules outlined below. Failure to comply with these rules may result in account restrictions or suspension.',
        
        // Section 1 - Respectful Communication
        'respectful_title': 'Respectful Communication',
        'respectful_desc': 'All users must communicate with each other in a respectful and professional manner.',
        'respectful_prohibited': 'Users must not engage in:',
        'respectful_prohibited1': 'Harassment',
        'respectful_prohibited2': 'Threats or intimidation',
        'respectful_prohibited3': 'Abusive or offensive language',
        'respectful_prohibited4': 'Discriminatory remarks',
        'respectful_note': 'Respectful interaction helps maintain a trustworthy platform for everyone.',
        
        // Section 2 - Honest Representation
        'honest_title': 'Honest Representation',
        'honest_desc': 'Users must provide truthful and accurate information while using the platform.',
        'honest_includes': 'This includes:',
        'honest_includes1': 'Personal profile information',
        'honest_includes2': 'Skills and work experience',
        'honest_includes3': 'Job descriptions posted by employers',
        'honest_warning': 'Misleading or false information can harm other users and may lead to account suspension.',
        
        // Section 3 - Prohibited Activities
        'prohibited_title': 'Prohibited Activities',
        'prohibited_desc': 'The following activities are strictly prohibited on the platform:',
        'prohibited1': 'Illegal job postings',
        'prohibited2': 'Fraud or scam activities',
        'prohibited3': 'Requesting dangerous or unlawful work',
        'prohibited4': 'Posting misleading job offers',
        'prohibited5': 'Using the platform for non-work related exploitation',
        'prohibited_consequence': 'Any such activity may result in immediate account suspension.',
        
        // Section 4 - Fair Interaction
        'fair_title': 'Fair Interaction Between Users',
        'fair_desc': 'Workers and employers should treat each other fairly and maintain professional conduct.',
        'fair_prohibited': 'Users should not:',
        'fair_prohibited1': 'Exploit workers',
        'fair_prohibited2': 'Force unreasonable work demands',
        'fair_prohibited3': 'Provide misleading instructions regarding work',
        'fair_note': 'Maintaining fairness ensures a healthy and reliable environment for all platform users.',
        
        // Section 5 - Account Usage
        'account_title': 'Account Usage',
        'account_desc': 'Users must only operate one account per individual.',
        'account_prohibited': 'Users must not:',
        'account_prohibited1': 'Create multiple accounts to bypass restrictions',
        'account_prohibited2': "Use someone else's account",
        'account_prohibited3': 'Allow unauthorized access to their account',
        'account_responsibility': 'Users are responsible for all activity that occurs through their accounts.',
        
        // Section 6 - Safety and Legal
        'safety_title': 'Safety and Legal Compliance',
        'safety_desc': 'All users must follow applicable laws and safety practices while arranging work through the platform.',
        'safety_avoid': 'Users should avoid any work arrangements that may:',
        'safety_avoid1': 'Violate local laws',
        'safety_avoid2': 'Create unsafe working conditions',
        'safety_avoid3': 'Harm individuals or property',
        'safety_note': 'ShramikConnect encourages users to prioritize safety in all interactions.',
        
        // Section 7 - Reporting Misconduct
        'reporting_title': 'Reporting Misconduct',
        'reporting_desc': 'If a user experiences or observes misconduct on the platform, they are encouraged to report it.',
        'reporting_includes': 'Reports may include:',
        'reporting_includes1': 'Harassment',
        'reporting_includes2': 'Fraudulent activities',
        'reporting_includes3': 'Unsafe job requests',
        'reporting_action': 'ShramikConnect may review reported cases and take appropriate action.',
        
        // Section 8 - Consequences
        'consequences_title': 'Consequences of Violations',
        'consequences_desc': 'Violation of the conduct policy may result in actions such as:',
        'consequences1': 'Removal of job listings',
        'consequences2': 'Temporary account suspension',
        'consequences3': 'Permanent account termination in severe cases',
        'consequences_note': 'The platform reserves the right to take necessary action to protect users and maintain platform integrity.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'ShramikConnect aims to create a safe and professional environment where workers and employers can connect.',
        'important_notice_footer': 'All users are expected to follow the conduct rules to ensure respectful interactions and trustworthy platform usage.',
        
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
        'conduct_title': 'उपयोगकर्ता आचरण नीति',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म के सभी उपयोगकर्ताओं से अपेक्षित व्यवहार के मानकों का वर्णन करता है। श्रमिकों और नियोक्ताओं के लिए एक सुरक्षित और सम्मानजनक वातावरण बनाए रखने के लिए, सभी उपयोगकर्ताओं को नीचे दिए गए आचरण नियमों का पालन करना चाहिए। इन नियमों का पालन न करने पर खाता प्रतिबंध या निलंबन हो सकता है।',
        
        // Section 1 - Respectful Communication
        'respectful_title': 'सम्मानजनक संचार',
        'respectful_desc': 'सभी उपयोगकर्ताओं को एक दूसरे के साथ सम्मानजनक और पेशेवर तरीके से संवाद करना चाहिए।',
        'respectful_prohibited': 'उपयोगकर्ताओं को निम्नलिखित में शामिल नहीं होना चाहिए:',
        'respectful_prohibited1': 'उत्पीड़न',
        'respectful_prohibited2': 'धमकी या डराना',
        'respectful_prohibited3': 'अपमानजनक या आपत्तिजनक भाषा',
        'respectful_prohibited4': 'भेदभावपूर्ण टिप्पणियाँ',
        'respectful_note': 'सम्मानजनक बातचीत सभी के लिए एक भरोसेमंद प्लेटफॉर्म बनाए रखने में मदद करती है।',
        
        // Section 2 - Honest Representation
        'honest_title': 'ईमानदार प्रतिनिधित्व',
        'honest_desc': 'उपयोगकर्ताओं को प्लेटफॉर्म का उपयोग करते समय सच्ची और सटीक जानकारी प्रदान करनी चाहिए।',
        'honest_includes': 'इसमें शामिल है:',
        'honest_includes1': 'व्यक्तिगत प्रोफाइल जानकारी',
        'honest_includes2': 'कौशल और कार्य अनुभव',
        'honest_includes3': 'नियोक्ताओं द्वारा पोस्ट की गई नौकरी का विवरण',
        'honest_warning': 'भ्रामक या झूठी जानकारी अन्य उपयोगकर्ताओं को नुकसान पहुंचा सकती है और खाता निलंबन का कारण बन सकती है।',
        
        // Section 3 - Prohibited Activities
        'prohibited_title': 'निषिद्ध गतिविधियाँ',
        'prohibited_desc': 'निम्नलिखित गतिविधियाँ प्लेटफॉर्म पर सख्त वर्जित हैं:',
        'prohibited1': 'अवैध नौकरी पोस्टिंग',
        'prohibited2': 'धोखाधड़ी या स्कैम गतिविधियाँ',
        'prohibited3': 'खतरनाक या गैरकानूनी काम का अनुरोध',
        'prohibited4': 'भ्रामक नौकरी के अवसर पोस्ट करना',
        'prohibited5': 'गैर-कार्य संबंधी शोषण के लिए प्लेटफॉर्म का उपयोग',
        'prohibited_consequence': 'ऐसी किसी भी गतिविधि के परिणामस्वरूप तत्काल खाता निलंबन हो सकता है।',
        
        // Section 4 - Fair Interaction
        'fair_title': 'उपयोगकर्ताओं के बीच निष्पक्ष बातचीत',
        'fair_desc': 'श्रमिकों और नियोक्ताओं को एक दूसरे के साथ निष्पक्ष व्यवहार करना चाहिए और पेशेवर आचरण बनाए रखना चाहिए।',
        'fair_prohibited': 'उपयोगकर्ताओं को नहीं करना चाहिए:',
        'fair_prohibited1': 'श्रमिकों का शोषण',
        'fair_prohibited2': 'अनुचित काम की मांगों को मजबूर करना',
        'fair_prohibited3': 'काम के बारे में भ्रामक निर्देश प्रदान करना',
        'fair_note': 'निष्पक्षता बनाए रखना सभी प्लेटफॉर्म उपयोगकर्ताओं के लिए एक स्वस्थ और विश्वसनीय वातावरण सुनिश्चित करता है।',
        
        // Section 5 - Account Usage
        'account_title': 'खाता उपयोग',
        'account_desc': 'उपयोगकर्ताओं को प्रति व्यक्ति केवल एक खाता संचालित करना चाहिए।',
        'account_prohibited': 'उपयोगकर्ताओं को नहीं करना चाहिए:',
        'account_prohibited1': 'प्रतिबंधों को दरकिनार करने के लिए कई खाते बनाना',
        'account_prohibited2': 'किसी और के खाते का उपयोग करना',
        'account_prohibited3': 'अपने खाते तक अनधिकृत पहुंच की अनुमति देना',
        'account_responsibility': 'उपयोगकर्ता अपने खातों के माध्यम से होने वाली सभी गतिविधियों के लिए जिम्मेदार हैं।',
        
        // Section 6 - Safety and Legal
        'safety_title': 'सुरक्षा और कानूनी अनुपालन',
        'safety_desc': 'सभी उपयोगकर्ताओं को प्लेटफॉर्म के माध्यम से काम की व्यवस्था करते समय लागू कानूनों और सुरक्षा प्रथाओं का पालन करना चाहिए।',
        'safety_avoid': 'उपयोगकर्ताओं को ऐसी कार्य व्यवस्थाओं से बचना चाहिए जो:',
        'safety_avoid1': 'स्थानीय कानूनों का उल्लंघन करती हैं',
        'safety_avoid2': 'असुरक्षित काम करने की स्थिति पैदा करती हैं',
        'safety_avoid3': 'व्यक्तियों या संपत्ति को नुकसान पहुंचाती हैं',
        'safety_note': 'श्रमिककनेक्ट उपयोगकर्ताओं को सभी बातचीत में सुरक्षा को प्राथमिकता देने के लिए प्रोत्साहित करता है।',
        
        // Section 7 - Reporting Misconduct
        'reporting_title': 'दुराचार की रिपोर्ट करना',
        'reporting_desc': 'यदि कोई उपयोगकर्ता प्लेटफॉर्म पर दुराचार का अनुभव करता है या देखता है, तो उन्हें इसकी रिपोर्ट करने के लिए प्रोत्साहित किया जाता है।',
        'reporting_includes': 'रिपोर्ट में शामिल हो सकते हैं:',
        'reporting_includes1': 'उत्पीड़न',
        'reporting_includes2': 'धोखाधड़ी गतिविधियाँ',
        'reporting_includes3': 'असुरक्षित नौकरी अनुरोध',
        'reporting_action': 'श्रमिककनेक्ट रिपोर्ट किए गए मामलों की समीक्षा कर सकता है और उचित कार्रवाई कर सकता है।',
        
        // Section 8 - Consequences
        'consequences_title': 'उल्लंघन के परिणाम',
        'consequences_desc': 'आचरण नीति के उल्लंघन के परिणामस्वरूप निम्नलिखित कार्रवाई हो सकती है:',
        'consequences1': 'नौकरी सूचियों को हटाना',
        'consequences2': 'अस्थायी खाता निलंबन',
        'consequences3': 'गंभीर मामलों में स्थायी खाता समाप्ति',
        'consequences_note': 'प्लेटफॉर्म उपयोगकर्ताओं की सुरक्षा और प्लेटफॉर्म अखंडता बनाए रखने के लिए आवश्यक कार्रवाई करने का अधिकार सुरक्षित रखता है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट एक सुरक्षित और पेशेवर वातावरण बनाने का लक्ष्य रखता है जहां श्रमिक और नियोक्ता जुड़ सकें।',
        'important_notice_footer': 'सभी उपयोगकर्ताओं से सम्मानजनक बातचीत और विश्वसनीय प्लेटफॉर्म उपयोग सुनिश्चित करने के लिए आचरण नियमों का पालन करने की अपेक्षा की जाती है।',
        
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
        'conduct_title': 'वापरकर्ता आचरण धोरण',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मच्या सर्व वापरकर्त्यांकडून अपेक्षित वर्तनाचे मानक स्पष्ट करतो. कामगार आणि नियोक्त्यांसाठी सुरक्षित आणि आदरयुक्त वातावरण राखण्यासाठी, सर्व वापरकर्त्यांनी खाली दिलेल्या आचरण नियमांचे पालन करणे आवश्यक आहे. या नियमांचे पालन न केल्यास खाते निर्बंध किंवा निलंबन होऊ शकते.',
        
        // Section 1 - Respectful Communication
        'respectful_title': 'आदरयुक्त संवाद',
        'respectful_desc': 'सर्व वापरकर्त्यांनी एकमेकांशी आदरयुक्त आणि व्यावसायिक पद्धतीने संवाद साधला पाहिजे.',
        'respectful_prohibited': 'वापरकर्त्यांनी यात सहभागी होऊ नये:',
        'respectful_prohibited1': 'छळ',
        'respectful_prohibited2': 'धमक्या किंवा भीतीदर्शन',
        'respectful_prohibited3': 'अपमानास्पद किंवा आक्षेपार्ह भाषा',
        'respectful_prohibited4': 'भेदभावपूर्ण टिप्पण्या',
        'respectful_note': 'आदरयुक्त संवाद प्रत्येकासाठी विश्वासार्ह प्लॅटफॉर्म राखण्यास मदत करतो.',
        
        // Section 2 - Honest Representation
        'honest_title': 'प्रामाणिक प्रतिनिधित्व',
        'honest_desc': 'प्लॅटफॉर्म वापरताना वापरकर्त्यांनी सत्य आणि अचूक माहिती प्रदान करणे आवश्यक आहे.',
        'honest_includes': 'यामध्ये हे समाविष्ट आहे:',
        'honest_includes1': 'वैयक्तिक प्रोफाइल माहिती',
        'honest_includes2': 'कौशल्ये आणि कामाचा अनुभव',
        'honest_includes3': 'नियोक्त्यांनी पोस्ट केलेले नोकरीचे वर्णन',
        'honest_warning': 'दिशाभूल करणारी किंवा खोटी माहिती इतर वापरकर्त्यांना हानी पोहोचवू शकते आणि खाते निलंबनास कारणीभूत ठरू शकते.',
        
        // Section 3 - Prohibited Activities
        'prohibited_title': 'प्रतिबंधित क्रियाकलाप',
        'prohibited_desc': 'प्लॅटफॉर्मवर खालील क्रियाकलाप कठोरपणे प्रतिबंधित आहेत:',
        'prohibited1': 'बेकायदेशीर नोकरी पोस्टिंग',
        'prohibited2': 'फसवणूक किंवा स्कॅम क्रियाकलाप',
        'prohibited3': 'धोकादायक किंवा बेकायदेशीर कामाची विनंती',
        'prohibited4': 'दिशाभूल करणारे नोकरीचे प्रस्ताव पोस्ट करणे',
        'prohibited5': 'गैर-काम संबंधित शोषणासाठी प्लॅटफॉर्मचा वापर',
        'prohibited_consequence': 'अशा कोणत्याही क्रियाकलापामुळे त्वरित खाते निलंबन होऊ शकते.',
        
        // Section 4 - Fair Interaction
        'fair_title': 'वापरकर्त्यांमध्ये न्याय्य संवाद',
        'fair_desc': 'कामगार आणि नियोक्त्यांनी एकमेकांशी न्याय्य वागणूक दिली पाहिजे आणि व्यावसायिक आचरण राखले पाहिजे.',
        'fair_prohibited': 'वापरकर्त्यांनी हे करू नये:',
        'fair_prohibited1': 'कामगारांचे शोषण करणे',
        'fair_prohibited2': 'अवास्तव कामाच्या मागण्या लादणे',
        'fair_prohibited3': 'कामाबद्दल दिशाभूल करणाऱ्या सूचना देणे',
        'fair_note': 'न्याय्यता राखल्याने सर्व प्लॅटफॉर्म वापरकर्त्यांसाठी निरोगी आणि विश्वासार्ह वातावरण सुनिश्चित होते.',
        
        // Section 5 - Account Usage
        'account_title': 'खाते वापर',
        'account_desc': 'वापरकर्त्यांनी प्रति व्यक्ती फक्त एक खाते चालवले पाहिजे.',
        'account_prohibited': 'वापरकर्त्यांनी हे करू नये:',
        'account_prohibited1': 'निर्बंध टाळण्यासाठी अनेक खाती तयार करणे',
        'account_prohibited2': 'दुसऱ्याच्या खात्याचा वापर करणे',
        'account_prohibited3': 'त्यांच्या खात्यात अनधिकृत प्रवेशास परवानगी देणे',
        'account_responsibility': 'वापरकर्ते त्यांच्या खात्यांद्वारे होणाऱ्या सर्व क्रियाकलापांसाठी जबाबदार आहेत.',
        
        // Section 6 - Safety and Legal
        'safety_title': 'सुरक्षा आणि कायदेशीर अनुपालन',
        'safety_desc': 'प्लॅटफॉर्मद्वारे कामाची व्यवस्था करताना सर्व वापरकर्त्यांनी लागू कायदे आणि सुरक्षा पद्धतींचे पालन केले पाहिजे.',
        'safety_avoid': 'वापरकर्त्यांनी अशा कामाच्या व्यवस्था टाळल्या पाहिजेत ज्या:',
        'safety_avoid1': 'स्थानिक कायद्यांचे उल्लंघन करतात',
        'safety_avoid2': 'असुरक्षित कामाची परिस्थिती निर्माण करतात',
        'safety_avoid3': 'व्यक्ती किंवा मालमत्तेला हानी पोहोचवतात',
        'safety_note': 'श्रमिककनेक्ट वापरकर्त्यांना सर्व परस्परसंवादात सुरक्षिततेला प्राधान्य देण्यास प्रोत्साहित करते.',
        
        // Section 7 - Reporting Misconduct
        'reporting_title': 'गैरवर्तनाची तक्रार करणे',
        'reporting_desc': 'जर एखाद्या वापरकर्त्याला प्लॅटफॉर्मवर गैरवर्तनाचा अनुभव येतो किंवा तो पाहतो, तर त्यांनी त्याची तक्रार करण्यास प्रोत्साहित केले जाते.',
        'reporting_includes': 'तक्रारींमध्ये हे समाविष्ट असू शकते:',
        'reporting_includes1': 'छळ',
        'reporting_includes2': 'फसवणूक क्रियाकलाप',
        'reporting_includes3': 'असुरक्षित नोकरी विनंत्या',
        'reporting_action': 'श्रमिककनेक्ट तक्रार केलेल्या प्रकरणांचे पुनरावलोकन करू शकते आणि योग्य कारवाई करू शकते.',
        
        // Section 8 - Consequences
        'consequences_title': 'उल्लंघनाचे परिणाम',
        'consequences_desc': 'आचरण धोरणाचे उल्लंघन केल्यास अशा कारवाया होऊ शकतात:',
        'consequences1': 'नोकरी सूची काढून टाकणे',
        'consequences2': 'तात्पुरते खाते निलंबन',
        'consequences3': 'गंभीर प्रकरणांमध्ये कायमचे खाते समाप्ती',
        'consequences_note': 'वापरकर्त्यांचे संरक्षण करण्यासाठी आणि प्लॅटफॉर्मची अखंडता राखण्यासाठी प्लॅटफॉर्म आवश्यक कारवाई करण्याचा अधिकार राखून ठेवते.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'श्रमिककनेक्ट एक सुरक्षित आणि व्यावसायिक वातावरण तयार करण्याचे उद्दिष्ट ठेवते जिथे कामगार आणि नियोक्ते कनेक्ट होऊ शकतात.',
        'important_notice_footer': 'सर्व वापरकर्त्यांनी आदरयुक्त संवाद आणि विश्वासार्ह प्लॅटफॉर्म वापर सुनिश्चित करण्यासाठी आचरण नियमांचे पालन करणे अपेक्षित आहे.',
        
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
    console.log('Conduct Policy page initialized');

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