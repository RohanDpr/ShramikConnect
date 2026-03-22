/**
 * EMPLOYER DATA PAGE - PRIVACY POLICY
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
        'employer_title': 'Employer Data',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the specific types of personal information we collect from employers on the ShramikConnect platform. We collect only the information necessary to help employers find suitable workers and post job opportunities effectively.',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'Basic Account Information',
        'basic_info_desc': 'When employers register on ShramikConnect, we collect essential account information:',
        'basic_info1': 'Full name',
        'basic_info2': 'Mobile number (verified via OTP)',
        'basic_info3': 'Email address (optional but recommended)',
        'basic_info4': 'Password (encrypted)',
        'basic_info_note': 'This information is necessary to create and maintain your employer account and to communicate with workers about job opportunities.',
        
        // Section 2 - Business Information
        'business_info_title': 'Business Information',
        'business_info_desc': 'To help workers understand who they might be working for, we collect business-related information:',
        'business_info1': '<strong>Business name</strong> - Optional. You can operate as an individual or provide your business/organization name.',
        'business_info2': '<strong>Location</strong> - City/area where you need workers (can be your business location or job site location).',
        'business_info3': '<strong>Work category</strong> - Types of workers you typically hire (construction, plumbing, electrical, domestic help, etc.).',
        'business_info_note': '<strong>Note:</strong> Business registration documents (GST, company registration) are <strong>NOT required</strong> to use ShramikConnect. Individuals can hire workers without any business registration.',
        
        // Section 3 - Job Posting Data
        'job_posting_title': 'Job Posting Data',
        'job_posting_desc': 'When you post jobs on the platform, we collect and store the following information:',
        'job_posting1': '<strong>Job title and description</strong> - Details about the work to be performed',
        'job_posting2': '<strong>Required skills</strong> - Skills needed for the job',
        'job_posting3': '<strong>Work location</strong> - Where the job will take place',
        'job_posting4': '<strong>Duration and timing</strong> - Expected work duration, start date, working hours',
        'job_posting5': '<strong>Payment offered</strong> - Wages or payment amount (optional - can be discussed with workers)',
        'job_posting_note': 'Job postings are visible to workers on the platform. Clear and accurate job descriptions help attract suitable workers.',
        
        // Section 4 - Hiring and Communication Data
        'hiring_title': 'Hiring and Communication Data',
        'hiring_desc': 'When you interact with workers and hire them, we collect information related to these activities:',
        'hiring1': '<strong>Job posting history</strong> - All jobs you have posted on the platform',
        'hiring2': '<strong>Applicant information</strong> - Workers who have applied to your jobs',
        'hiring3': '<strong>Messages exchanged</strong> - Communication with workers about job details',
        'hiring4': '<strong>Hiring decisions</strong> - Which workers you selected for jobs',
        'hiring_note': 'This information helps you track your hiring activities and manage your interactions with workers.',
        
        // Section 5 - Ratings and Feedback Given
        'ratings_given_title': 'Ratings and Feedback Given',
        'ratings_given_desc': 'After job completion, employers may provide ratings and feedback about workers:',
        'ratings_given1': '<strong>Star ratings</strong> - 1 to 5 stars based on work quality, behavior, punctuality, and professionalism',
        'ratings_given2': '<strong>Written feedback</strong> - Comments about the worker\'s performance',
        'ratings_impact_title': 'Impact of Your Ratings',
        'ratings_impact_desc': 'The ratings and feedback you provide help other employers make informed decisions when hiring workers. Honest and fair ratings contribute to a trustworthy community on ShramikConnect.',
        
        // Section 6 - Employer Rights
        'employer_rights_title': 'Employer Rights Regarding Data',
        'employer_rights_desc': 'As an employer on ShramikConnect, you have the following rights regarding your data:',
        'employer_rights1': '<strong>Access</strong> - Request a copy of your data anytime',
        'employer_rights2': '<strong>Update</strong> - Edit your profile information through account settings',
        'employer_rights3': '<strong>Delete</strong> - Request account deletion via email (processed within 2 days)',
        'contact_title': 'Data Requests',
        
        // Important Notice
        'important_notice_title': 'Important Notice for Employers',
        'important_notice_desc': 'The information you provide as an employer helps workers find suitable job opportunities. Providing accurate job details increases your chances of finding the right workers for your needs.',
        'important_notice_footer': '<strong>No business registration required:</strong> You can hire workers as an individual without any business registration, GST, or company documents. ShramikConnect is designed to be accessible to all employers, from individuals to large organizations.',
        
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
        'employer_title': 'नियोक्ता डेटा',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म पर नियोक्ताओं से एकत्र की जाने वाली विशिष्ट प्रकार की व्यक्तिगत जानकारी की व्याख्या करता है। हम केवल नियोक्ताओं को उपयुक्त श्रमिक खोजने और नौकरी के अवसरों को प्रभावी ढंग से पोस्ट करने में मदद करने के लिए आवश्यक जानकारी एकत्र करते हैं।',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'मूल खाता जानकारी',
        'basic_info_desc': 'जब नियोक्ता श्रमिककनेक्ट पर पंजीकरण करते हैं, तो हम आवश्यक खाता जानकारी एकत्र करते हैं:',
        'basic_info1': 'पूरा नाम',
        'basic_info2': 'मोबाइल नंबर (ओटीपी द्वारा सत्यापित)',
        'basic_info3': 'ईमेल पता (वैकल्पिक लेकिन अनुशंसित)',
        'basic_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'basic_info_note': 'यह जानकारी आपका नियोक्ता खाता बनाने और बनाए रखने और श्रमिकों के साथ नौकरी के अवसरों के बारे में संवाद करने के लिए आवश्यक है।',
        
        // Section 2 - Business Information
        'business_info_title': 'व्यवसाय जानकारी',
        'business_info_desc': 'श्रमिकों को यह समझने में मदद करने के लिए कि वे किसके लिए काम कर सकते हैं, हम व्यवसाय-संबंधी जानकारी एकत्र करते हैं:',
        'business_info1': '<strong>व्यवसाय का नाम</strong> - वैकल्पिक। आप एक व्यक्ति के रूप में काम कर सकते हैं या अपने व्यवसाय/संगठन का नाम प्रदान कर सकते हैं।',
        'business_info2': '<strong>स्थान</strong> - शहर/क्षेत्र जहां आपको श्रमिकों की आवश्यकता है (आपका व्यवसाय स्थान या कार्य स्थल स्थान हो सकता है)।',
        'business_info3': '<strong>कार्य श्रेणी</strong> - आप आमतौर पर किस प्रकार के श्रमिकों को काम पर रखते हैं (निर्माण, प्लंबिंग, इलेक्ट्रिकल, घरेलू सहायता, आदि)।',
        'business_info_note': '<strong>नोट:</strong> श्रमिककनेक्ट का उपयोग करने के लिए व्यवसाय पंजीकरण दस्तावेज (जीएसटी, कंपनी पंजीकरण) <strong>आवश्यक नहीं हैं</strong>। व्यक्ति बिना किसी व्यवसाय पंजीकरण के श्रमिकों को काम पर रख सकते हैं।',
        
        // Section 3 - Job Posting Data
        'job_posting_title': 'नौकरी पोस्टिंग डेटा',
        'job_posting_desc': 'जब आप प्लेटफॉर्म पर नौकरियां पोस्ट करते हैं, तो हम निम्नलिखित जानकारी एकत्र और संग्रहीत करते हैं:',
        'job_posting1': '<strong>नौकरी का शीर्षक और विवरण</strong> - किए जाने वाले कार्य के बारे में विवरण',
        'job_posting2': '<strong>आवश्यक कौशल</strong> - नौकरी के लिए आवश्यक कौशल',
        'job_posting3': '<strong>कार्य स्थान</strong> - नौकरी कहां होगी',
        'job_posting4': '<strong>अवधि और समय</strong> - अपेक्षित कार्य अवधि, प्रारंभ तिथि, काम के घंटे',
        'job_posting5': '<strong>भुगतान की पेशकश</strong> - मजदूरी या भुगतान राशि (वैकल्पिक - श्रमिकों के साथ चर्चा की जा सकती है)',
        'job_posting_note': 'नौकरी पोस्टिंग प्लेटफॉर्म पर श्रमिकों को दिखाई देती हैं। स्पष्ट और सटीक नौकरी विवरण उपयुक्त श्रमिकों को आकर्षित करने में मदद करते हैं।',
        
        // Section 4 - Hiring and Communication Data
        'hiring_title': 'नियुक्ति और संचार डेटा',
        'hiring_desc': 'जब आप श्रमिकों के साथ बातचीत करते हैं और उन्हें काम पर रखते हैं, तो हम इन गतिविधियों से संबंधित जानकारी एकत्र करते हैं:',
        'hiring1': '<strong>नौकरी पोस्टिंग इतिहास</strong> - आपके द्वारा प्लेटफॉर्म पर पोस्ट की गई सभी नौकरियां',
        'hiring2': '<strong>आवेदक जानकारी</strong> - जिन श्रमिकों ने आपकी नौकरियों के लिए आवेदन किया है',
        'hiring3': '<strong>आदान-प्रदान किए गए संदेश</strong> - नौकरी के विवरण के बारे में श्रमिकों के साथ संचार',
        'hiring4': '<strong>नियुक्ति निर्णय</strong> - आपने किन श्रमिकों को नौकरियों के लिए चुना',
        'hiring_note': 'यह जानकारी आपको अपनी नियुक्ति गतिविधियों को ट्रैक करने और श्रमिकों के साथ अपनी बातचीत का प्रबंधन करने में मदद करती है।',
        
        // Section 5 - Ratings and Feedback Given
        'ratings_given_title': 'दी गई रेटिंग और प्रतिक्रिया',
        'ratings_given_desc': 'नौकरी पूरी होने के बाद, नियोक्ता श्रमिकों के बारे में रेटिंग और प्रतिक्रिया प्रदान कर सकते हैं:',
        'ratings_given1': '<strong>स्टार रेटिंग</strong> - काम की गुणवत्ता, व्यवहार, समय की पाबंदी और व्यावसायिकता के आधार पर 1 से 5 स्टार',
        'ratings_given2': '<strong>लिखित प्रतिक्रिया</strong> - श्रमिक के प्रदर्शन के बारे में टिप्पणियां',
        'ratings_impact_title': 'आपकी रेटिंग का प्रभाव',
        'ratings_impact_desc': 'आपके द्वारा प्रदान की गई रेटिंग और प्रतिक्रिया अन्य नियोक्ताओं को श्रमिकों को काम पर रखते समय सूचित निर्णय लेने में मदद करती है। ईमानदार और निष्पक्ष रेटिंग श्रमिककनेक्ट पर एक भरोसेमंद समुदाय में योगदान करती हैं।',
        
        // Section 6 - Employer Rights
        'employer_rights_title': 'डेटा के संबंध में नियोक्ता अधिकार',
        'employer_rights_desc': 'श्रमिककनेक्ट पर एक नियोक्ता के रूप में, आपके पास अपने डेटा के संबंध में निम्नलिखित अधिकार हैं:',
        'employer_rights1': '<strong>पहुंच</strong> - किसी भी समय अपने डेटा की एक प्रति का अनुरोध करें',
        'employer_rights2': '<strong>अपडेट</strong> - खाता सेटिंग्स के माध्यम से अपनी प्रोफाइल जानकारी संपादित करें',
        'employer_rights3': '<strong>हटाएं</strong> - ईमेल के माध्यम से खाता हटाने का अनुरोध करें (2 दिनों के भीतर संसाधित)',
        'contact_title': 'डेटा अनुरोध',
        
        // Important Notice
        'important_notice_title': 'नियोक्ताओं के लिए महत्वपूर्ण सूचना',
        'important_notice_desc': 'एक नियोक्ता के रूप में आपके द्वारा प्रदान की गई जानकारी श्रमिकों को उपयुक्त नौकरी के अवसर खोजने में मदद करती है। सटीक नौकरी विवरण प्रदान करने से आपकी आवश्यकताओं के लिए सही श्रमिक खोजने की संभावना बढ़ जाती है।',
        'important_notice_footer': '<strong>कोई व्यवसाय पंजीकरण आवश्यक नहीं:</strong> आप बिना किसी व्यवसाय पंजीकरण, जीएसटी या कंपनी दस्तावेजों के एक व्यक्ति के रूप में श्रमिकों को काम पर रख सकते हैं। श्रमिककनेक्ट को व्यक्तियों से लेकर बड़े संगठनों तक, सभी नियोक्ताओं के लिए सुलभ बनाने के लिए डिज़ाइन किया गया है।',
        
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
        'employer_title': 'नियोक्ता डेटा',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मवर नियोक्त्यांकडून गोळा केलेल्या विशिष्ट प्रकारच्या वैयक्तिक माहितीचे स्पष्टीकरण देतो. आम्ही फक्त नियोक्त्यांना योग्य कामगार शोधण्यात आणि नोकरीच्या संधी प्रभावीपणे पोस्ट करण्यात मदत करण्यासाठी आवश्यक माहिती गोळा करतो.',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'मूलभूत खाते माहिती',
        'basic_info_desc': 'जेव्हा नियोक्ते श्रमिककनेक्टवर नोंदणी करतात, तेव्हा आम्ही आवश्यक खाते माहिती गोळा करतो:',
        'basic_info1': 'पूर्ण नाव',
        'basic_info2': 'मोबाइल क्रमांक (ओटीपीद्वारे सत्यापित)',
        'basic_info3': 'ईमेल पत्ता (पर्यायी परंतु शिफारस केलेले)',
        'basic_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'basic_info_note': 'तुमचे नियोक्ता खाते तयार करण्यासाठी आणि राखण्यासाठी आणि कामगारांशी नोकरीच्या संधींबद्दल संवाद साधण्यासाठी ही माहिती आवश्यक आहे.',
        
        // Section 2 - Business Information
        'business_info_title': 'व्यवसाय माहिती',
        'business_info_desc': 'कामगारांना ते कोणासाठी काम करू शकतात हे समजून घेण्यास मदत करण्यासाठी, आम्ही व्यवसाय-संबंधित माहिती गोळा करतो:',
        'business_info1': '<strong>व्यवसायाचे नाव</strong> - पर्यायी. तुम्ही व्यक्ती म्हणून काम करू शकता किंवा तुमचे व्यवसाय/संस्थेचे नाव प्रदान करू शकता.',
        'business_info2': '<strong>स्थान</strong> - शहर/क्षेत्र जिथे तुम्हाला कामगारांची आवश्यकता आहे (तुमचे व्यवसाय स्थान किंवा कामाच्या ठिकाणाचे स्थान असू शकते).',
        'business_info3': '<strong>काम श्रेणी</strong> - तुम्ही सामान्यतः कोणत्या प्रकारचे कामगार नियुक्त करता (बांधकाम, प्लंबिंग, इलेक्ट्रिकल, घरगुती मदत, इ.).',
        'business_info_note': '<strong>टीप:</strong> श्रमिककनेक्ट वापरण्यासाठी व्यवसाय नोंदणी दस्तऐवज (जीएसटी, कंपनी नोंदणी) <strong>आवश्यक नाहीत</strong>. व्यक्ती कोणत्याही व्यवसाय नोंदणीशिवाय कामगार नियुक्त करू शकतात.',
        
        // Section 3 - Job Posting Data
        'job_posting_title': 'नोकरी पोस्टिंग डेटा',
        'job_posting_desc': 'जेव्हा तुम्ही प्लॅटफॉर्मवर नोकऱ्या पोस्ट करता, तेव्हा आम्ही खालील माहिती गोळा करतो आणि संग्रहित करतो:',
        'job_posting1': '<strong>नोकरीचे शीर्षक आणि वर्णन</strong> - केल्या जाणाऱ्या कामाबद्दल तपशील',
        'job_posting2': '<strong>आवश्यक कौशल्ये</strong> - नोकरीसाठी आवश्यक कौशल्ये',
        'job_posting3': '<strong>कामाचे ठिकाण</strong> - नोकरी कुठे होईल',
        'job_posting4': '<strong>कालावधी आणि वेळ</strong> - अपेक्षित कामाचा कालावधी, सुरू होण्याची तारीख, कामाचे तास',
        'job_posting5': '<strong>ऑफर केलेले पेमेंट</strong> - मजुरी किंवा पेमेंट रक्कम (पर्यायी - कामगारांशी चर्चा केली जाऊ शकते)',
        'job_posting_note': 'नोकरी पोस्टिंग प्लॅटफॉर्मवर कामगारांना दृश्यमान असतात. स्पष्ट आणि अचूक नोकरी वर्णन योग्य कामगारांना आकर्षित करण्यास मदत करतात.',
        
        // Section 4 - Hiring and Communication Data
        'hiring_title': 'नियुक्ती आणि संप्रेषण डेटा',
        'hiring_desc': 'जेव्हा तुम्ही कामगारांशी संवाद साधता आणि त्यांना नियुक्त करता, तेव्हा आम्ही या क्रियाकलापांशी संबंधित माहिती गोळा करतो:',
        'hiring1': '<strong>नोकरी पोस्टिंग इतिहास</strong> - तुम्ही प्लॅटफॉर्मवर पोस्ट केलेल्या सर्व नोकऱ्या',
        'hiring2': '<strong>अर्जदार माहिती</strong> - तुमच्या नोकऱ्यांसाठी अर्ज केलेले कामगार',
        'hiring3': '<strong>देवाणघेवाण केलेले संदेश</strong> - नोकरीच्या तपशीलांबद्दल कामगारांशी संप्रेषण',
        'hiring4': '<strong>नियुक्ती निर्णय</strong> - तुम्ही कोणते कामगार नोकऱ्यांसाठी निवडले',
        'hiring_note': 'ही माहिती तुम्हाला तुमच्या नियुक्ती क्रियाकलाप ट्रॅक करण्यात आणि कामगारांशी तुमचे संवाद व्यवस्थापित करण्यात मदत करते.',
        
        // Section 5 - Ratings and Feedback Given
        'ratings_given_title': 'दिलेली रेटिंग आणि अभिप्राय',
        'ratings_given_desc': 'नोकरी पूर्ण झाल्यानंतर, नियोक्ते कामगारांबद्दल रेटिंग आणि अभिप्राय देऊ शकतात:',
        'ratings_given1': '<strong>स्टार रेटिंग</strong> - कामाची गुणवत्ता, वर्तन, वेळेचे पालन आणि व्यावसायिकतेवर आधारित १ ते ५ स्टार',
        'ratings_given2': '<strong>लिखित अभिप्राय</strong> - कामगाराच्या कामगिरीबद्दल टिप्पण्या',
        'ratings_impact_title': 'तुमच्या रेटिंगचा प्रभाव',
        'ratings_impact_desc': 'तुम्ही प्रदान केलेली रेटिंग आणि अभिप्राय इतर नियोक्त्यांना कामगार नियुक्त करताना माहितीपूर्ण निर्णय घेण्यास मदत करतात. प्रामाणिक आणि न्याय्य रेटिंग श्रमिककनेक्टवर विश्वासार्ह समुदायासाठी योगदान देतात.',
        
        // Section 6 - Employer Rights
        'employer_rights_title': 'डेटाबाबत नियोक्ता अधिकार',
        'employer_rights_desc': 'श्रमिककनेक्टवर नियोक्ता म्हणून, तुमच्या डेटाबाबत तुम्हाला खालील अधिकार आहेत:',
        'employer_rights1': '<strong>प्रवेश</strong> - कधीही तुमच्या डेटाची प्रत मागवा',
        'employer_rights2': '<strong>अद्यतन</strong> - खाते सेटिंग्जद्वारे तुमची प्रोफाइल माहिती संपादित करा',
        'employer_rights3': '<strong>हटवा</strong> - ईमेलद्वारे खाते हटवण्याची विनंती करा (२ दिवसांत प्रक्रिया केली जाते)',
        'contact_title': 'डेटा विनंत्या',
        
        // Important Notice
        'important_notice_title': 'नियोक्त्यांसाठी महत्वाची सूचना',
        'important_notice_desc': 'नियोक्ता म्हणून तुम्ही प्रदान केलेली माहिती कामगारांना योग्य नोकरीच्या संधी शोधण्यात मदत करते. अचूक नोकरी तपशील प्रदान केल्याने तुमच्या गरजांसाठी योग्य कामगार शोधण्याची शक्यता वाढते.',
        'important_notice_footer': '<strong>कोणतीही व्यवसाय नोंदणी आवश्यक नाही:</strong> तुम्ही कोणत्याही व्यवसाय नोंदणी, जीएसटी किंवा कंपनी दस्तऐवजांशिवाय व्यक्ती म्हणून कामगार नियुक्त करू शकता. श्रमिककनेक्ट हे व्यक्तींपासून मोठ्या संस्थांपर्यंत, सर्व नियोक्त्यांसाठी सुलभ करण्यासाठी डिझाइन केले आहे.',
        
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
    console.log('Employer Data page initialized');

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