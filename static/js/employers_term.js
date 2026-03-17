/**
 * EMPLOYER TERMS PAGE - TERMS & CONDITIONS
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
        'employer_title': 'Employer Terms',
        'employer_desc': 'This section explains the responsibilities, expectations, and rules for employers who use the ShramikConnect platform to connect with workers.',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the responsibilities, expectations, and rules for employers who use the ShramikConnect platform to connect with workers. Employers must follow these guidelines to maintain a fair, safe, and transparent environment for all users of the platform.',
        
        // Section 1 - Employer Registration
        'employer_reg_title': 'Employer Registration',
        'employer_reg_desc': 'To use ShramikConnect as an employer, users must create an employer profile and provide accurate information.',
        'employer_reg_requirements': 'During registration, employers may be required to provide:',
        'employer_reg_req1': 'Mobile number verification',
        'employer_reg_req2': 'Basic personal details',
        'employer_reg_req3': 'Job location information',
        'employer_reg_responsibility': 'Employers must ensure that the information provided in their account is correct and up to date.',
        
        // Section 2 - Job Posting
        'job_posting_title': 'Job Posting Requirements',
        'job_posting_desc': 'Employers can post job opportunities on the platform to find suitable workers.',
        'job_posting_requirements': 'When posting a job, employers should clearly mention:',
        'job_posting_req1': 'Type of work',
        'job_posting_req2': 'Job location',
        'job_posting_req3': 'Expected work duration',
        'job_posting_req4': 'Basic work requirements',
        'job_posting_note': 'Providing clear and accurate job descriptions helps workers understand the nature of the job before applying.',
        
        // Section 3 - Honest Information
        'honest_info_title': 'Honest Job Information',
        'honest_info_desc': 'Employers must ensure that all job postings are accurate and truthful.',
        'honest_info_prohibited': 'Job posts must not contain:',
        'honest_info_prohibited1': 'Misleading information',
        'honest_info_prohibited2': 'Fake job opportunities',
        'honest_info_prohibited3': 'Illegal work requests',
        'honest_info_consequence': 'If false or misleading job details are reported, the platform may remove the listing or suspend the employer account.',
        
        // Section 4 - Communication
        'communication_title': 'Communication with Workers',
        'communication_desc': 'Employers should communicate clearly and respectfully with workers.',
        'communication_instructions': 'Employers must provide workers with clear instructions about the work, location, and expectations before the job begins.',
        'communication_warning': 'Harassment, abusive language, or inappropriate behavior toward workers may result in account suspension.',
        
        // Section 5 - Payment
        'payment_title': 'Payment Agreement',
        'payment_desc': 'ShramikConnect does not process or control payments between employers and workers.',
        'payment_negotiation': 'Employers and workers must negotiate payment terms directly with each other.',
        'payment_responsibility': 'Employers are responsible for paying workers according to the agreed terms once the work is completed.',
        'payment_disclaimer': 'The platform is not responsible for payment disputes between users.',
        
        // Section 6 - Cancellation
        'cancellation_title': 'Job Cancellation',
        'cancellation_desc': 'If an employer needs to cancel a job after workers have applied, the employer should communicate directly with the workers involved.',
        'cancellation_platform': 'ShramikConnect does not manage cancellations or compensation arrangements.',
        'cancellation_resolution': 'Employers and workers must resolve such situations through direct communication.',
        
        // Section 7 - Fair Treatment
        'fair_treatment_title': 'Fair Treatment of Workers',
        'fair_treatment_desc': 'Employers must treat workers fairly and respectfully.',
        'fair_treatment_prohibited': 'Employers should not:',
        'fair_treatment_prohibited1': 'Discriminate against workers',
        'fair_treatment_prohibited2': 'Exploit workers',
        'fair_treatment_prohibited3': 'Request unsafe or illegal work',
        'fair_treatment_note': 'Maintaining respectful behavior helps build a trustworthy community on the platform.',
        
        // Section 8 - Independent Relationship
        'independent_title': 'Independent Hiring Relationship',
        'independent_desc': 'Workers found through ShramikConnect are independent individuals.',
        'independent_relationship': 'Using the platform does not create an employment relationship between the employer and ShramikConnect.',
        'independent_agreement': 'Any work agreement exists only between the employer and the worker.',
        'independent_role': 'ShramikConnect acts only as a platform connecting both parties.',
        
        // Section 9 - Platform Limitations
        'limitations_title': 'Platform Limitations',
        'limitations_desc': 'ShramikConnect provides tools to help employers find workers but does not guarantee:',
        'limitation1': 'Worker availability',
        'limitation2': 'Worker performance',
        'limitation3': 'Successful job completion',
        'limitations_note': 'Employers should communicate directly with workers before confirming any work arrangements.',
        
        // Section 10 - Responsibility
        'responsibility_title': 'Responsibility of Employers',
        'responsibility_desc': 'Employers are responsible for:',
        'responsibility1': 'Providing accurate job details',
        'responsibility2': 'Communicating clearly with workers',
        'responsibility3': 'Paying workers as agreed',
        'responsibility4': 'Ensuring safe working conditions',
        'responsibility_consequence': 'Failure to follow these responsibilities may result in account restrictions.',
        
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
        'employer_title': 'नियोक्ता नियम',
        'employer_desc': 'यह खंड उन जिम्मेदारियों, अपेक्षाओं और नियमों की व्याख्या करता है जो श्रमिकों से जुड़ने के लिए श्रमिककनेक्ट प्लेटफॉर्म का उपयोग करने वाले नियोक्ताओं पर लागू होते हैं।',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड उन जिम्मेदारियों, अपेक्षाओं और नियमों की व्याख्या करता है जो श्रमिकों से जुड़ने के लिए श्रमिककनेक्ट प्लेटफॉर्म का उपयोग करने वाले नियोक्ताओं पर लागू होते हैं। प्लेटफॉर्म के सभी उपयोगकर्ताओं के लिए निष्पक्ष, सुरक्षित और पारदर्शी वातावरण बनाए रखने के लिए नियोक्ताओं को इन दिशानिर्देशों का पालन करना चाहिए।',
        
        // Section 1 - Employer Registration
        'employer_reg_title': 'नियोक्ता पंजीकरण',
        'employer_reg_desc': 'नियोक्ता के रूप में श्रमिककनेक्ट का उपयोग करने के लिए, उपयोगकर्ताओं को एक नियोक्ता प्रोफाइल बनाना होगा और सटीक जानकारी प्रदान करनी होगी।',
        'employer_reg_requirements': 'पंजीकरण के दौरान, नियोक्ताओं को निम्नलिखित प्रदान करने की आवश्यकता हो सकती है:',
        'employer_reg_req1': 'मोबाइल नंबर सत्यापन',
        'employer_reg_req2': 'बुनियादी व्यक्तिगत विवरण',
        'employer_reg_req3': 'नौकरी स्थान की जानकारी',
        'employer_reg_responsibility': 'नियोक्ताओं को यह सुनिश्चित करना चाहिए कि उनके खाते में दी गई जानकारी सही और अद्यतन है।',
        
        // Section 2 - Job Posting
        'job_posting_title': 'नौकरी पोस्टिंग आवश्यकताएं',
        'job_posting_desc': 'नियोक्ता उपयुक्त श्रमिकों को खोजने के लिए प्लेटफॉर्म पर नौकरी के अवसर पोस्ट कर सकते हैं।',
        'job_posting_requirements': 'नौकरी पोस्ट करते समय, नियोक्ताओं को स्पष्ट रूप से उल्लेख करना चाहिए:',
        'job_posting_req1': 'कार्य का प्रकार',
        'job_posting_req2': 'नौकरी का स्थान',
        'job_posting_req3': 'अपेक्षित कार्य अवधि',
        'job_posting_req4': 'बुनियादी कार्य आवश्यकताएं',
        'job_posting_note': 'स्पष्ट और सटीक नौकरी विवरण प्रदान करने से श्रमिकों को आवेदन करने से पहले नौकरी की प्रकृति समझने में मदद मिलती है।',
        
        // Section 3 - Honest Information
        'honest_info_title': 'ईमानदार नौकरी जानकारी',
        'honest_info_desc': 'नियोक्ताओं को यह सुनिश्चित करना चाहिए कि सभी नौकरी पोस्टिंग सटीक और सच्ची हों।',
        'honest_info_prohibited': 'नौकरी पोस्ट में निम्नलिखित नहीं होना चाहिए:',
        'honest_info_prohibited1': 'भ्रामक जानकारी',
        'honest_info_prohibited2': 'नकली नौकरी के अवसर',
        'honest_info_prohibited3': 'अवैध कार्य अनुरोध',
        'honest_info_consequence': 'यदि गलत या भ्रामक नौकरी विवरण की सूचना मिलती है, तो प्लेटफॉर्म लिस्टिंग हटा सकता है या नियोक्ता खाता निलंबित कर सकता है।',
        
        // Section 4 - Communication
        'communication_title': 'श्रमिकों के साथ संचार',
        'communication_desc': 'नियोक्ताओं को श्रमिकों के साथ स्पष्ट और सम्मानपूर्वक संवाद करना चाहिए।',
        'communication_instructions': 'नियोक्ताओं को काम शुरू होने से पहले श्रमिकों को काम, स्थान और अपेक्षाओं के बारे में स्पष्ट निर्देश प्रदान करने चाहिए।',
        'communication_warning': 'श्रमिकों के प्रति उत्पीड़न, अपमानजनक भाषा या अनुचित व्यवहार के परिणामस्वरूप खाता निलंबन हो सकता है।',
        
        // Section 5 - Payment
        'payment_title': 'भुगतान समझौता',
        'payment_desc': 'श्रमिककनेक्ट नियोक्ताओं और श्रमिकों के बीच भुगतान को संसाधित या नियंत्रित नहीं करता है।',
        'payment_negotiation': 'नियोक्ताओं और श्रमिकों को सीधे एक दूसरे के साथ भुगतान शर्तों पर बातचीत करनी चाहिए।',
        'payment_responsibility': 'काम पूरा होने के बाद नियोक्ता सहमत शर्तों के अनुसार श्रमिकों को भुगतान करने के लिए जिम्मेदार हैं।',
        'payment_disclaimer': 'प्लेटफॉर्म उपयोगकर्ताओं के बीच भुगतान विवादों के लिए जिम्मेदार नहीं है।',
        
        // Section 6 - Cancellation
        'cancellation_title': 'नौकरी रद्द करना',
        'cancellation_desc': 'यदि किसी नियोक्ता को श्रमिकों के आवेदन करने के बाद नौकरी रद्द करने की आवश्यकता है, तो नियोक्ता को संबंधित श्रमिकों के साथ सीधे संवाद करना चाहिए।',
        'cancellation_platform': 'श्रमिककनेक्ट रद्दीकरण या मुआवजा व्यवस्था का प्रबंधन नहीं करता है।',
        'cancellation_resolution': 'नियोक्ताओं और श्रमिकों को सीधे संचार के माध्यम से ऐसी स्थितियों का समाधान करना चाहिए।',
        
        // Section 7 - Fair Treatment
        'fair_treatment_title': 'श्रमिकों के साथ उचित व्यवहार',
        'fair_treatment_desc': 'नियोक्ताओं को श्रमिकों के साथ उचित और सम्मानपूर्वक व्यवहार करना चाहिए।',
        'fair_treatment_prohibited': 'नियोक्ताओं को नहीं करना चाहिए:',
        'fair_treatment_prohibited1': 'श्रमिकों के साथ भेदभाव',
        'fair_treatment_prohibited2': 'श्रमिकों का शोषण',
        'fair_treatment_prohibited3': 'असुरक्षित या अवैध काम का अनुरोध',
        'fair_treatment_note': 'सम्मानजनक व्यवहार बनाए रखने से प्लेटफॉर्म पर एक भरोसेमंद समुदाय बनाने में मदद मिलती है।',
        
        // Section 8 - Independent Relationship
        'independent_title': 'स्वतंत्र नियुक्ति संबंध',
        'independent_desc': 'श्रमिककनेक्ट के माध्यम से मिलने वाले श्रमिक स्वतंत्र व्यक्ति हैं।',
        'independent_relationship': 'प्लेटफॉर्म का उपयोग नियोक्ता और श्रमिककनेक्ट के बीच रोजगार संबंध नहीं बनाता है।',
        'independent_agreement': 'कोई भी कार्य समझौता केवल नियोक्ता और श्रमिक के बीच मौजूद होता है।',
        'independent_role': 'श्रमिककनेक्ट केवल दोनों पक्षों को जोड़ने वाले प्लेटफॉर्म के रूप में कार्य करता है।',
        
        // Section 9 - Platform Limitations
        'limitations_title': 'प्लेटफॉर्म सीमाएं',
        'limitations_desc': 'श्रमिककनेक्ट नियोक्ताओं को श्रमिक खोजने में मदद करने के लिए उपकरण प्रदान करता है लेकिन निम्नलिखित की गारंटी नहीं देता है:',
        'limitation1': 'श्रमिक उपलब्धता',
        'limitation2': 'श्रमिक प्रदर्शन',
        'limitation3': 'सफल नौकरी पूर्णता',
        'limitations_note': 'नियोक्ताओं को किसी भी कार्य व्यवस्था की पुष्टि करने से पहले श्रमिकों के साथ सीधे संवाद करना चाहिए।',
        
        // Section 10 - Responsibility
        'responsibility_title': 'नियोक्ताओं की जिम्मेदारी',
        'responsibility_desc': 'नियोक्ता निम्नलिखित के लिए जिम्मेदार हैं:',
        'responsibility1': 'सटीक नौकरी विवरण प्रदान करना',
        'responsibility2': 'श्रमिकों के साथ स्पष्ट रूप से संवाद करना',
        'responsibility3': 'सहमति अनुसार श्रमिकों को भुगतान करना',
        'responsibility4': 'सुरक्षित काम करने की स्थिति सुनिश्चित करना',
        'responsibility_consequence': 'इन जिम्मेदारियों का पालन न करने पर खाता प्रतिबंध हो सकते हैं।',
        
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
        'employer_title': 'नियोक्ता नियम',
        'employer_desc': 'हा विभाग जबाबदाऱ्या, अपेक्षा आणि नियम स्पष्ट करतो जे कामगारांशी जोडण्यासाठी श्रमिककनेक्ट प्लॅटफॉर्म वापरणाऱ्या नियोक्त्यांना लागू होतात.',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग जबाबदाऱ्या, अपेक्षा आणि नियम स्पष्ट करतो जे कामगारांशी जोडण्यासाठी श्रमिककनेक्ट प्लॅटफॉर्म वापरणाऱ्या नियोक्त्यांना लागू होतात. प्लॅटफॉर्मच्या सर्व वापरकर्त्यांसाठी न्याय्य, सुरक्षित आणि पारदर्शक वातावरण राखण्यासाठी नियोक्त्यांनी या मार्गदर्शक तत्त्वांचे पालन करणे आवश्यक आहे.',
        
        // Section 1 - Employer Registration
        'employer_reg_title': 'नियोक्ता नोंदणी',
        'employer_reg_desc': 'नियोक्ता म्हणून श्रमिककनेक्ट वापरण्यासाठी, वापरकर्त्यांनी नियोक्ता प्रोफाइल तयार करणे आणि अचूक माहिती प्रदान करणे आवश्यक आहे.',
        'employer_reg_requirements': 'नोंदणी दरम्यान, नियोक्त्यांना खालील गोष्टी प्रदान करण्याची आवश्यकता असू शकते:',
        'employer_reg_req1': 'मोबाइल क्रमांक सत्यापन',
        'employer_reg_req2': 'मूलभूत वैयक्तिक तपशील',
        'employer_reg_req3': 'नोकरी स्थान माहिती',
        'employer_reg_responsibility': 'नियोक्त्यांनी त्यांच्या खात्यात दिलेली माहिती बरोबर आणि अद्ययावत आहे याची खात्री करणे आवश्यक आहे.',
        
        // Section 2 - Job Posting
        'job_posting_title': 'नोकरी पोस्टिंग आवश्यकता',
        'job_posting_desc': 'नियोक्ते योग्य कामगार शोधण्यासाठी प्लॅटफॉर्मवर नोकरीच्या संधी पोस्ट करू शकतात.',
        'job_posting_requirements': 'नोकरी पोस्ट करताना, नियोक्त्यांनी स्पष्टपणे नमूद केले पाहिजे:',
        'job_posting_req1': 'कामाचा प्रकार',
        'job_posting_req2': 'नोकरीचे स्थान',
        'job_posting_req3': 'अपेक्षित कामाचा कालावधी',
        'job_posting_req4': 'मूलभूत काम आवश्यकता',
        'job_posting_note': 'स्पष्ट आणि अचूक नोकरी वर्णन प्रदान केल्याने कामगारांना अर्ज करण्यापूर्वी नोकरीचे स्वरूप समजण्यास मदत होते.',
        
        // Section 3 - Honest Information
        'honest_info_title': 'प्रामाणिक नोकरी माहिती',
        'honest_info_desc': 'नियोक्त्यांनी सर्व नोकरी पोस्टिंग अचूक आणि सत्य आहेत याची खात्री करणे आवश्यक आहे.',
        'honest_info_prohibited': 'नोकरी पोस्टमध्ये हे असू नये:',
        'honest_info_prohibited1': 'दिशाभूल करणारी माहिती',
        'honest_info_prohibited2': 'बनावट नोकरीच्या संधी',
        'honest_info_prohibited3': 'बेकायदेशीर काम विनंत्या',
        'honest_info_consequence': 'चुकीच्या किंवा दिशाभूल करणाऱ्या नोकरीच्या तपशीलांची तक्रार केल्यास, प्लॅटफॉर्म यादी काढून टाकू शकतो किंवा नियोक्ता खाते निलंबित करू शकतो.',
        
        // Section 4 - Communication
        'communication_title': 'कामगारांशी संवाद',
        'communication_desc': 'नियोक्त्यांनी कामगारांशी स्पष्टपणे आणि आदरपूर्वक संवाद साधला पाहिजे.',
        'communication_instructions': 'काम सुरू होण्यापूर्वी नियोक्त्यांनी कामगारांना काम, स्थान आणि अपेक्षांबद्दल स्पष्ट सूचना द्याव्यात.',
        'communication_warning': 'कामगारांबद्दल छळ, अपमानास्पद भाषा किंवा अयोग्य वर्तनामुळे खाते निलंबन होऊ शकते.',
        
        // Section 5 - Payment
        'payment_title': 'पेमेंट करार',
        'payment_desc': 'श्रमिककनेक्ट नियोक्ते आणि कामगार यांच्यातील पेमेंटवर प्रक्रिया किंवा नियंत्रण करत नाही.',
        'payment_negotiation': 'नियोक्ते आणि कामगारांनी थेट एकमेकांशी पेमेंट अटींवर वाटाघाटी करणे आवश्यक आहे.',
        'payment_responsibility': 'काम पूर्ण झाल्यानंतर सहमत अटींनुसार कामगारांना पैसे देण्यासाठी नियोक्ते जबाबदार आहेत.',
        'payment_disclaimer': 'वापरकर्त्यांमधील पेमेंट विवादांसाठी प्लॅटफॉर्म जबाबदार नाही.',
        
        // Section 6 - Cancellation
        'cancellation_title': 'नोकरी रद्द करणे',
        'cancellation_desc': 'जर एखाद्या नियोक्त्याला कामगारांनी अर्ज केल्यानंतर नोकरी रद्द करण्याची आवश्यकता असेल, तर नियोक्त्याने संबंधित कामगारांशी थेट संवाद साधला पाहिजे.',
        'cancellation_platform': 'श्रमिककनेक्ट रद्दीकरण किंवा भरपाई व्यवस्था व्यवस्थापित करत नाही.',
        'cancellation_resolution': 'नियोक्ते आणि कामगारांनी थेट संवादाद्वारे अशा परिस्थितींचे निराकरण करणे आवश्यक आहे.',
        
        // Section 7 - Fair Treatment
        'fair_treatment_title': 'कामगारांशी न्याय्य वागणूक',
        'fair_treatment_desc': 'नियोक्त्यांनी कामगारांशी न्याय्य आणि आदरपूर्वक वागणूक दिली पाहिजे.',
        'fair_treatment_prohibited': 'नियोक्त्यांनी हे करू नये:',
        'fair_treatment_prohibited1': 'कामगारांशी भेदभाव करणे',
        'fair_treatment_prohibited2': 'कामगारांचे शोषण करणे',
        'fair_treatment_prohibited3': 'असुरक्षित किंवा बेकायदेशीर कामाची विनंती करणे',
        'fair_treatment_note': 'आदरपूर्वक वर्तन राखल्याने प्लॅटफॉर्मवर विश्वासार्ह समुदाय तयार होण्यास मदत होते.',
        
        // Section 8 - Independent Relationship
        'independent_title': 'स्वतंत्र नियुक्ती संबंध',
        'independent_desc': 'श्रमिककनेक्टद्वारे सापडलेले कामगार स्वतंत्र व्यक्ती आहेत.',
        'independent_relationship': 'प्लॅटफॉर्म वापरल्याने नियोक्ता आणि श्रमिककनेक्ट यांच्यात रोजगार संबंध निर्माण होत नाही.',
        'independent_agreement': 'कोणताही काम करार फक्त नियोक्ता आणि कामगार यांच्यामध्ये अस्तित्वात असतो.',
        'independent_role': 'श्रमिककनेक्ट फक्त दोन्ही पक्षांना जोडणारे प्लॅटफॉर्म म्हणून कार्य करते.',
        
        // Section 9 - Platform Limitations
        'limitations_title': 'प्लॅटफॉर्म मर्यादा',
        'limitations_desc': 'श्रमिककनेक्ट नियोक्त्यांना कामगार शोधण्यात मदत करण्यासाठी साधने प्रदान करते परंतु याची हमी देत नाही:',
        'limitation1': 'कामगार उपलब्धता',
        'limitation2': 'कामगार कामगिरी',
        'limitation3': 'यशस्वी नोकरी पूर्णता',
        'limitations_note': 'कोणत्याही कामाच्या व्यवस्थेची पुष्टी करण्यापूर्वी नियोक्त्यांनी कामगारांशी थेट संवाद साधला पाहिजे.',
        
        // Section 10 - Responsibility
        'responsibility_title': 'नियोक्त्यांची जबाबदारी',
        'responsibility_desc': 'नियोक्ते यासाठी जबाबदार आहेत:',
        'responsibility1': 'अचूक नोकरी तपशील प्रदान करणे',
        'responsibility2': 'कामगारांशी स्पष्टपणे संवाद साधणे',
        'responsibility3': 'सहमतीनुसार कामगारांना पैसे देणे',
        'responsibility4': 'सुरक्षित कामाची परिस्थिती सुनिश्चित करणे',
        'responsibility_consequence': 'या जबाबदाऱ्या पाळण्यात अयशस्वी झाल्यास खाते निर्बंध येऊ शकतात.',
        
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
    console.log('Employer Terms page initialized');

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