/**
 * WORKER TERMS PAGE - TERMS & CONDITIONS
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
        'worker_title': 'Worker Terms',
        'worker_desc': 'This section explains the responsibilities, expectations, and rules that apply to workers who use the ShramikConnect platform to find job opportunities.',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the responsibilities, expectations, and rules that apply to workers who use the ShramikConnect platform to find job opportunities. Workers must follow these terms while using the platform to maintain a safe and reliable environment for all users.',
        
        // Section 1 - Worker Registration
        'worker_reg_title': 'Worker Registration',
        'worker_reg_desc': 'To use ShramikConnect as a worker, users must create a worker profile and provide accurate information.',
        'worker_reg_requirements': 'During registration, workers may be required to provide:',
        'worker_reg_req1': 'Mobile number verification',
        'worker_reg_req2': 'Basic personal details',
        'worker_reg_req3': 'Skill or work category',
        'worker_reg_req4': 'Current location',
        'worker_reg_responsibility': 'Workers are responsible for ensuring that the information provided in their profile is correct and updated.',
        
        // Section 2 - Skill Information
        'skill_title': 'Skill Information',
        'skill_desc': 'Workers must clearly mention their skills, experience, or type of work they are able to perform.',
        'skill_benefit': 'This helps employers understand the worker\'s capabilities before offering job opportunities.',
        'skill_disclaimer': 'ShramikConnect does not guarantee the accuracy of self-declared skills and encourages employers to communicate directly with workers before confirming any work.',
        
        // Section 3 - Job Applications
        'job_apply_title': 'Job Applications',
        'job_apply_desc': 'Workers may browse available jobs on the platform and apply to jobs that match their skills.',
        'job_apply_before': 'Before applying for a job, workers should:',
        'job_apply_step1': 'Read the job description carefully',
        'job_apply_step2': 'Confirm the job location',
        'job_apply_step3': 'Understand the work requirements',
        'job_apply_note': 'Workers should only apply for jobs they are capable of completing.',
        
        // Section 4 - Communication
        'communication_title': 'Communication with Employers',
        'communication_desc': 'Once a worker applies for a job, communication may take place directly between the worker and the employer through the platform or other mutually agreed methods.',
        'communication_professional': 'Workers should maintain professional and respectful communication with employers.',
        'communication_warning': 'Any abusive, threatening, or inappropriate behavior may result in account suspension.',
        
        // Section 5 - Payment
        'payment_title': 'Payment Negotiation',
        'payment_desc': 'ShramikConnect does not manage or process payments between workers and employers.',
        'payment_responsibility': 'Workers and employers are responsible for negotiating payment terms directly.',
        'payment_agreement': 'Payment methods, timing, and amounts must be agreed upon by both parties independently.',
        'payment_disclaimer': 'The platform is not responsible for payment disputes.',
        
        // Section 6 - Work Completion
        'completion_title': 'Work Completion',
        'completion_desc': 'Workers are expected to complete the work they agree to perform in a timely and responsible manner.',
        'completion_inability': 'If a worker is unable to complete the work, they should inform the employer as soon as possible.',
        'completion_consequence': 'Failure to complete agreed work without proper communication may affect the worker\'s reputation on the platform.',
        
        // Section 7 - Ratings
        'ratings_title': 'Ratings and Feedback',
        'ratings_desc': 'Employers may provide ratings or feedback after a job interaction.',
        'ratings_system': 'ShramikConnect uses a 5-star rating system to help maintain trust within the platform.',
        'ratings_criteria': 'Ratings may reflect:',
        'ratings_criteria1': 'Work quality',
        'ratings_criteria2': 'Reliability',
        'ratings_criteria3': 'Professional behavior',
        'ratings_criteria4': 'Communication',
        'ratings_impact': 'Consistently poor ratings may affect a worker\'s ability to receive job opportunities.',
        
        // Section 8 - Responsibility
        'responsibility_title': 'Worker Responsibility',
        'responsibility_desc': 'Workers are responsible for:',
        'responsibility1': 'Performing work safely',
        'responsibility2': 'Following employer instructions related to the job',
        'responsibility3': 'Maintaining professional behavior',
        'responsibility4': 'Ensuring the accuracy of their profile information',
        'responsibility_note': 'Workers must ensure that the work they accept is within their skills and capabilities.',
        
        // Section 9 - Independent
        'independent_title': 'Independent Work Relationship',
        'independent_desc': 'Workers using ShramikConnect act as independent individuals.',
        'independent_relationship': 'The platform does not create an employment relationship between the worker and ShramikConnect.',
        'independent_role': 'ShramikConnect only provides a platform to connect workers with employers.',
        'independent_agreement': 'Workers are responsible for their own agreements with employers.',
        
        // Section 10 - Platform Role
        'platform_role_title': 'Platform Role',
        'platform_role_desc': 'ShramikConnect only facilitates connections between workers and employers.',
        'platform_role_limitations': 'The platform does not:',
        'platform_limitation1': 'Guarantee job availability',
        'platform_limitation2': 'Guarantee payment',
        'platform_limitation3': 'Supervise work performed by workers',
        'platform_role_note': 'Workers should communicate clearly with employers before accepting any job opportunity.',
        
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
        'worker_title': 'श्रमिक नियम',
        'worker_desc': 'यह खंड उन जिम्मेदारियों, अपेक्षाओं और नियमों की व्याख्या करता है जो श्रमिककनेक्ट प्लेटफॉर्म पर नौकरी के अवसर खोजने वाले श्रमिकों पर लागू होते हैं।',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड उन जिम्मेदारियों, अपेक्षाओं और नियमों की व्याख्या करता है जो श्रमिककनेक्ट प्लेटफॉर्म पर नौकरी के अवसर खोजने वाले श्रमिकों पर लागू होते हैं। सभी उपयोगकर्ताओं के लिए सुरक्षित और विश्वसनीय वातावरण बनाए रखने के लिए श्रमिकों को प्लेटफॉर्म का उपयोग करते समय इन नियमों का पालन करना चाहिए।',
        
        // Section 1 - Worker Registration
        'worker_reg_title': 'श्रमिक पंजीकरण',
        'worker_reg_desc': 'श्रमिक के रूप में श्रमिककनेक्ट का उपयोग करने के लिए, उपयोगकर्ताओं को एक श्रमिक प्रोफाइल बनाना होगा और सटीक जानकारी प्रदान करनी होगी।',
        'worker_reg_requirements': 'पंजीकरण के दौरान, श्रमिकों को निम्नलिखित प्रदान करने की आवश्यकता हो सकती है:',
        'worker_reg_req1': 'मोबाइल नंबर सत्यापन',
        'worker_reg_req2': 'बुनियादी व्यक्तिगत विवरण',
        'worker_reg_req3': 'कौशल या कार्य श्रेणी',
        'worker_reg_req4': 'वर्तमान स्थान',
        'worker_reg_responsibility': 'श्रमिक यह सुनिश्चित करने के लिए जिम्मेदार हैं कि उनकी प्रोफाइल में दी गई जानकारी सही और अद्यतन है।',
        
        // Section 2 - Skill Information
        'skill_title': 'कौशल जानकारी',
        'skill_desc': 'श्रमिकों को अपने कौशल, अनुभव या कार्य के प्रकार का स्पष्ट रूप से उल्लेख करना चाहिए जो वे करने में सक्षम हैं।',
        'skill_benefit': 'इससे नियोक्ताओं को नौकरी के अवसर देने से पहले श्रमिक की क्षमताओं को समझने में मदद मिलती है।',
        'skill_disclaimer': 'श्रमिककनेक्ट स्व-घोषित कौशल की सटीकता की गारंटी नहीं देता है और नियोक्ताओं को किसी भी कार्य की पुष्टि करने से पहले श्रमिकों के साथ सीधे संवाद करने के लिए प्रोत्साहित करता है।',
        
        // Section 3 - Job Applications
        'job_apply_title': 'नौकरी आवेदन',
        'job_apply_desc': 'श्रमिक प्लेटफॉर्म पर उपलब्ध नौकरियों को ब्राउज़ कर सकते हैं और उन नौकरियों के लिए आवेदन कर सकते हैं जो उनके कौशल से मेल खाती हैं।',
        'job_apply_before': 'नौकरी के लिए आवेदन करने से पहले, श्रमिकों को चाहिए:',
        'job_apply_step1': 'नौकरी के विवरण को ध्यान से पढ़ें',
        'job_apply_step2': 'नौकरी के स्थान की पुष्टि करें',
        'job_apply_step3': 'कार्य आवश्यकताओं को समझें',
        'job_apply_note': 'श्रमिकों को केवल उन नौकरियों के लिए आवेदन करना चाहिए जिन्हें वे पूरा करने में सक्षम हैं।',
        
        // Section 4 - Communication
        'communication_title': 'नियोक्ताओं के साथ संचार',
        'communication_desc': 'एक बार जब कोई श्रमिक नौकरी के लिए आवेदन करता है, तो संचार सीधे श्रमिक और नियोक्ता के बीच प्लेटफॉर्म के माध्यम से या अन्य पारस्परिक रूप से सहमत तरीकों से हो सकता है।',
        'communication_professional': 'श्रमिकों को नियोक्ताओं के साथ पेशेवर और सम्मानजनक संचार बनाए रखना चाहिए।',
        'communication_warning': 'किसी भी अपमानजनक, धमकी भरे या अनुचित व्यवहार के परिणामस्वरूप खाता निलंबन हो सकता है।',
        
        // Section 5 - Payment
        'payment_title': 'भुगतान वार्ता',
        'payment_desc': 'श्रमिककनेक्ट श्रमिकों और नियोक्ताओं के बीच भुगतान का प्रबंधन या प्रक्रिया नहीं करता है।',
        'payment_responsibility': 'श्रमिक और नियोक्ता सीधे भुगतान शर्तों पर बातचीत करने के लिए जिम्मेदार हैं।',
        'payment_agreement': 'भुगतान के तरीके, समय और राशि दोनों पक्षों द्वारा स्वतंत्र रूप से सहमत होनी चाहिए।',
        'payment_disclaimer': 'प्लेटफॉर्म भुगतान विवादों के लिए जिम्मेदार नहीं है।',
        
        // Section 6 - Work Completion
        'completion_title': 'कार्य पूरा होना',
        'completion_desc': 'श्रमिकों से अपेक्षा की जाती है कि वे जिस कार्य को करने के लिए सहमत हुए हैं, उसे समय पर और जिम्मेदार तरीके से पूरा करें।',
        'completion_inability': 'यदि कोई श्रमिक कार्य पूरा करने में असमर्थ है, तो उन्हें जल्द से जल्द नियोक्ता को सूचित करना चाहिए।',
        'completion_consequence': 'उचित संचार के बिना सहमत कार्य को पूरा करने में विफलता प्लेटफॉर्म पर श्रमिक की प्रतिष्ठा को प्रभावित कर सकती है।',
        
        // Section 7 - Ratings
        'ratings_title': 'रेटिंग और प्रतिक्रिया',
        'ratings_desc': 'नियोक्ता कार्य बातचीत के बाद रेटिंग या प्रतिक्रिया प्रदान कर सकते हैं।',
        'ratings_system': 'श्रमिककनेक्ट प्लेटफॉर्म के भीतर विश्वास बनाए रखने में मदद करने के लिए 5-स्टार रेटिंग प्रणाली का उपयोग करता है।',
        'ratings_criteria': 'रेटिंग निम्नलिखित को दर्शा सकती हैं:',
        'ratings_criteria1': 'कार्य गुणवत्ता',
        'ratings_criteria2': 'विश्वसनीयता',
        'ratings_criteria3': 'पेशेवर व्यवहार',
        'ratings_criteria4': 'संचार',
        'ratings_impact': 'लगातार खराब रेटिंग श्रमिक की नौकरी के अवसर प्राप्त करने की क्षमता को प्रभावित कर सकती है।',
        
        // Section 8 - Responsibility
        'responsibility_title': 'श्रमिक जिम्मेदारी',
        'responsibility_desc': 'श्रमिक निम्नलिखित के लिए जिम्मेदार हैं:',
        'responsibility1': 'कार्य सुरक्षित रूप से करना',
        'responsibility2': 'कार्य से संबंधित नियोक्ता के निर्देशों का पालन करना',
        'responsibility3': 'पेशेवर व्यवहार बनाए रखना',
        'responsibility4': 'उनकी प्रोफाइल जानकारी की सटीकता सुनिश्चित करना',
        'responsibility_note': 'श्रमिकों को यह सुनिश्चित करना चाहिए कि वे जो कार्य स्वीकार करते हैं, वह उनके कौशल और क्षमताओं के भीतर है।',
        
        // Section 9 - Independent
        'independent_title': 'स्वतंत्र कार्य संबंध',
        'independent_desc': 'श्रमिककनेक्ट का उपयोग करने वाले श्रमिक स्वतंत्र व्यक्तियों के रूप में कार्य करते हैं।',
        'independent_relationship': 'प्लेटफॉर्म श्रमिक और श्रमिककनेक्ट के बीच रोजगार संबंध नहीं बनाता है।',
        'independent_role': 'श्रमिककनेक्ट केवल श्रमिकों को नियोक्ताओं से जोड़ने के लिए एक प्लेटफॉर्म प्रदान करता है।',
        'independent_agreement': 'श्रमिक नियोक्ताओं के साथ अपने स्वयं के समझौतों के लिए जिम्मेदार हैं।',
        
        // Section 10 - Platform Role
        'platform_role_title': 'प्लेटफॉर्म की भूमिका',
        'platform_role_desc': 'श्रमिककनेक्ट केवल श्रमिकों और नियोक्ताओं के बीच कनेक्शन की सुविधा प्रदान करता है।',
        'platform_role_limitations': 'प्लेटफॉर्म निम्नलिखित नहीं करता है:',
        'platform_limitation1': 'नौकरी की उपलब्धता की गारंटी',
        'platform_limitation2': 'भुगतान की गारंटी',
        'platform_limitation3': 'श्रमिकों द्वारा किए गए कार्य की निगरानी',
        'platform_role_note': 'श्रमिकों को किसी भी नौकरी के अवसर को स्वीकार करने से पहले नियोक्ताओं के साथ स्पष्ट रूप से संवाद करना चाहिए।',
        
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
        'worker_title': 'कामगार नियम',
        'worker_desc': 'हा विभाग जबाबदाऱ्या, अपेक्षा आणि नियम स्पष्ट करतो जे श्रमिककनेक्ट प्लॅटफॉर्मवर नोकरीच्या संधी शोधणाऱ्या कामगारांना लागू होतात.',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग जबाबदाऱ्या, अपेक्षा आणि नियम स्पष्ट करतो जे श्रमिककनेक्ट प्लॅटफॉर्मवर नोकरीच्या संधी शोधणाऱ्या कामगारांना लागू होतात. सर्व वापरकर्त्यांसाठी सुरक्षित आणि विश्वासार्ह वातावरण राखण्यासाठी कामगारांनी प्लॅटफॉर्म वापरताना या नियमांचे पालन करणे आवश्यक आहे.',
        
        // Section 1 - Worker Registration
        'worker_reg_title': 'कामगार नोंदणी',
        'worker_reg_desc': 'कामगार म्हणून श्रमिककनेक्ट वापरण्यासाठी, वापरकर्त्यांनी कामगार प्रोफाइल तयार करणे आणि अचूक माहिती प्रदान करणे आवश्यक आहे.',
        'worker_reg_requirements': 'नोंदणी दरम्यान, कामगारांना खालील गोष्टी प्रदान करण्याची आवश्यकता असू शकते:',
        'worker_reg_req1': 'मोबाइल क्रमांक सत्यापन',
        'worker_reg_req2': 'मूलभूत वैयक्तिक तपशील',
        'worker_reg_req3': 'कौशल्य किंवा काम श्रेणी',
        'worker_reg_req4': 'सद्य स्थान',
        'worker_reg_responsibility': 'त्यांच्या प्रोफाइलमध्ये दिलेली माहिती बरोबर आणि अद्ययावत आहे याची खात्री करण्यासाठी कामगार जबाबदार आहेत.',
        
        // Section 2 - Skill Information
        'skill_title': 'कौशल्य माहिती',
        'skill_desc': 'कामगारांनी त्यांची कौशल्ये, अनुभव किंवा ते करू शकतील अशा कामाचा प्रकार स्पष्टपणे नमूद करणे आवश्यक आहे.',
        'skill_benefit': 'यामुळे नियोक्त्यांना नोकरीच्या संधी देण्यापूर्वी कामगाराची क्षमता समजण्यास मदत होते.',
        'skill_disclaimer': 'श्रमिककनेक्ट स्व-घोषित कौशल्यांच्या अचूकतेची हमी देत नाही आणि कोणत्याही कामाची पुष्टी करण्यापूर्वी नियोक्त्यांना कामगारांशी थेट संवाद साधण्यास प्रोत्साहित करते.',
        
        // Section 3 - Job Applications
        'job_apply_title': 'नोकरी अर्ज',
        'job_apply_desc': 'कामगार प्लॅटफॉर्मवर उपलब्ध नोकऱ्या ब्राउझ करू शकतात आणि त्यांच्या कौशल्यांशी जुळणाऱ्या नोकऱ्यांसाठी अर्ज करू शकतात.',
        'job_apply_before': 'नोकरीसाठी अर्ज करण्यापूर्वी, कामगारांनी हे केले पाहिजे:',
        'job_apply_step1': 'नोकरीचे वर्णन काळजीपूर्वक वाचा',
        'job_apply_step2': 'नोकरीच्या स्थानाची पुष्टी करा',
        'job_apply_step3': 'कामाच्या आवश्यकता समजून घ्या',
        'job_apply_note': 'कामगारांनी फक्त त्या नोकऱ्यांसाठी अर्ज केला पाहिजे ज्या ते पूर्ण करण्यास सक्षम आहेत.',
        
        // Section 4 - Communication
        'communication_title': 'नियोक्त्यांशी संवाद',
        'communication_desc': 'एकदा का कामगार नोकरीसाठी अर्ज करतो, संवाद थेट कामगार आणि नियोक्ता यांच्यात प्लॅटफॉर्मद्वारे किंवा इतर परस्पर सहमत पद्धतींद्वारे होऊ शकतो.',
        'communication_professional': 'कामगारांनी नियोक्त्यांशी व्यावसायिक आणि आदरयुक्त संवाद राखला पाहिजे.',
        'communication_warning': 'कोणतेही अपमानास्पद, धमकी देणारे किंवा अयोग्य वर्तन खाते निलंबनास कारणीभूत ठरू शकते.',
        
        // Section 5 - Payment
        'payment_title': 'पेमेंट वाटाघाटी',
        'payment_desc': 'श्रमिककनेक्ट कामगार आणि नियोक्त्यांमधील पेमेंट व्यवस्थापित किंवा प्रक्रिया करत नाही.',
        'payment_responsibility': 'कामगार आणि नियोक्ते थेट पेमेंट अटींवर वाटाघाटी करण्यासाठी जबाबदार आहेत.',
        'payment_agreement': 'पेमेंट पद्धती, वेळ आणि रक्कम दोन्ही पक्षांनी स्वतंत्रपणे मान्य केली पाहिजेत.',
        'payment_disclaimer': 'प्लॅटफॉर्म पेमेंट विवादांसाठी जबाबदार नाही.',
        
        // Section 6 - Work Completion
        'completion_title': 'काम पूर्ण होणे',
        'completion_desc': 'कामगारांनी केले जाईल असे मान्य केलेले काम वेळेवर आणि जबाबदारीने पूर्ण करणे अपेक्षित आहे.',
        'completion_inability': 'जर एखादा कामगार काम पूर्ण करण्यास असमर्थ असेल तर त्यांनी शक्य तितक्या लवकर नियोक्ताला सूचित केले पाहिजे.',
        'completion_consequence': 'योग्य संवादाशिवाय मान्य केलेले काम पूर्ण करण्यात अयशस्वी झाल्यास प्लॅटफॉर्मवर कामगाराच्या प्रतिष्ठेवर परिणाम होऊ शकतो.',
        
        // Section 7 - Ratings
        'ratings_title': 'रेटिंग आणि अभिप्राय',
        'ratings_desc': 'नियोक्ते कामाच्या परस्परसंवादानंतर रेटिंग किंवा अभिप्राय देऊ शकतात.',
        'ratings_system': 'श्रमिककनेक्ट प्लॅटफॉर्ममध्ये विश्वास राखण्यास मदत करण्यासाठी 5-स्टार रेटिंग प्रणाली वापरते.',
        'ratings_criteria': 'रेटिंग हे दर्शवू शकतात:',
        'ratings_criteria1': 'कामाची गुणवत्ता',
        'ratings_criteria2': 'विश्वसनीयता',
        'ratings_criteria3': 'व्यावसायिक वर्तन',
        'ratings_criteria4': 'संवाद',
        'ratings_impact': 'सातत्याने खराब रेटिंग कामगाराच्या नोकरीच्या संधी मिळविण्याच्या क्षमतेवर परिणाम करू शकते.',
        
        // Section 8 - Responsibility
        'responsibility_title': 'कामगार जबाबदारी',
        'responsibility_desc': 'कामगार यासाठी जबाबदार आहेत:',
        'responsibility1': 'सुरक्षितपणे काम करणे',
        'responsibility2': 'कामाशी संबंधित नियोक्त्याच्या सूचनांचे पालन करणे',
        'responsibility3': 'व्यावसायिक वर्तन राखणे',
        'responsibility4': 'त्यांच्या प्रोफाइल माहितीची अचूकता सुनिश्चित करणे',
        'responsibility_note': 'कामगारांनी हे सुनिश्चित केले पाहिजे की ते स्वीकारत असलेले काम त्यांच्या कौशल्ये आणि क्षमतांमध्ये आहे.',
        
        // Section 9 - Independent
        'independent_title': 'स्वतंत्र काम संबंध',
        'independent_desc': 'श्रमिककनेक्ट वापरणारे कामगार स्वतंत्र व्यक्ती म्हणून कार्य करतात.',
        'independent_relationship': 'प्लॅटफॉर्म कामगार आणि श्रमिककनेक्ट यांच्यात रोजगार संबंध निर्माण करत नाही.',
        'independent_role': 'श्रमिककनेक्ट फक्त कामगारांना नियोक्त्यांशी जोडण्यासाठी एक प्लॅटफॉर्म प्रदान करते.',
        'independent_agreement': 'कामगार नियोक्त्यांशी त्यांच्या स्वतःच्या करारांसाठी जबाबदार आहेत.',
        
        // Section 10 - Platform Role
        'platform_role_title': 'प्लॅटफॉर्मची भूमिका',
        'platform_role_desc': 'श्रमिककनेक्ट फक्त कामगार आणि नियोक्ता यांच्यातील कनेक्शन सुलभ करते.',
        'platform_role_limitations': 'प्लॅटफॉर्म हे करत नाही:',
        'platform_limitation1': 'नोकरीच्या उपलब्धतेची हमी',
        'platform_limitation2': 'पेमेंटची हमी',
        'platform_limitation3': 'कामगारांनी केलेल्या कामाचे पर्यवेक्षण',
        'platform_role_note': 'कोणतीही नोकरीची संधी स्वीकारण्यापूर्वी कामगारांनी नियोक्त्यांशी स्पष्टपणे संवाद साधला पाहिजे.',
        
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
    console.log('Worker Terms page initialized');

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