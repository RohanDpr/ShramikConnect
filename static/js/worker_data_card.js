/**
 * WORKER DATA PAGE - PRIVACY POLICY
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
        'worker_title': 'Worker Data',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'This section explains the specific types of personal information we collect from workers on the ShramikConnect platform. We collect only the information necessary to help workers find suitable job opportunities and connect with employers.',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'Basic Account Information',
        'basic_info_desc': 'When workers register on ShramikConnect, we collect essential account information:',
        'basic_info1': 'Full name',
        'basic_info2': 'Mobile number (verified via OTP)',
        'basic_info3': 'Email address (optional)',
        'basic_info4': 'Password (encrypted)',
        'basic_info_note': 'This information is necessary to create and maintain your worker account and to communicate with you about job opportunities.',
        
        // Section 2 - Profile Information
        'profile_info_title': 'Profile Information',
        'profile_info_desc': 'To help employers find you and understand your capabilities, we collect additional profile details:',
        'profile_info1': 'Location (city/area where you\'re available for work)',
        'profile_info2': 'Skills and work categories (e.g., plumber, electrician, painter, construction worker, etc.)',
        'profile_info3': 'Work experience (years of experience, previous work history - optional)',
        'profile_info4': 'Preferred working hours and availability',
        'profile_info5': 'Expected wages or payment preferences (optional)',
        'profile_info_note': 'This information helps employers understand your skills and experience, making it easier for them to offer you relevant job opportunities.',
        
        // Section 3 - Identity Verification
        'identity_title': 'Identity Verification Documents',
        'identity_desc': 'To enhance trust and safety on the platform, we may request identity verification documents:',
        'identity1': '<strong>Aadhar card</strong> - Optional but recommended for verification. Helps build trust with employers.',
        'identity2': '<strong>PAN card</strong> - Optional alternative for identity verification.',
        'identity_storage_title': 'Secure Storage',
        'identity_storage_desc': 'When provided, identity documents are stored securely in our database and used only for verification purposes. We take appropriate measures to protect this sensitive information. You can choose not to provide these documents, but verified workers may receive more job opportunities from employers.',
        'identity_note': 'Providing identity documents is completely voluntary. However, employers often prefer to hire workers who have completed verification as it increases trust.',
        
        // Section 4 - Job Application Data
        'job_data_title': 'Job Application Data',
        'job_data_desc': 'When you apply for jobs or interact with employers, we collect information related to your job-seeking activities:',
        'job_data1': 'Job application history (jobs you\'ve applied for)',
        'job_data2': 'Messages exchanged with employers',
        'job_data3': 'Job start dates and work duration (when applicable)',
        'job_data4': 'Ratings and feedback received from employers',
        'job_data_note': 'This information helps us improve your job recommendations and allows employers to see your work history and reliability.',
        
        // Section 5 - Ratings and Feedback
        'ratings_title': 'Ratings and Feedback',
        'ratings_desc': 'After job completion, employers may provide ratings and feedback about your work:',
        'ratings1': '<strong>Star ratings</strong> - 1 to 5 stars based on work quality, behavior, punctuality, and professionalism',
        'ratings2': '<strong>Written feedback</strong> - Comments about your work performance',
        'ratings_note': 'Your ratings and feedback are visible to other employers on the platform. Good ratings can help you get more job opportunities. You cannot delete individual ratings, but you can respond to feedback if needed.',
        
        // Section 6 - Worker Rights
        'worker_rights_title': 'Worker Rights Regarding Data',
        'worker_rights_desc': 'As a worker on ShramikConnect, you have the following rights regarding your data:',
        'worker_rights1': '<strong>Access</strong> - Request a copy of your data anytime',
        'worker_rights2': '<strong>Update</strong> - Edit your profile information through account settings',
        'worker_rights3': '<strong>Delete</strong> - Request account deletion via email (processed within 2 days)',
        'worker_rights_note': 'For any requests related to your data, please contact us at <strong>support@shramikconnect.in</strong>.',
        
        // Important Notice
        'important_notice_title': 'Important Notice for Workers',
        'important_notice_desc': 'The information you provide as a worker helps employers find and hire you. Providing accurate and complete information increases your chances of finding suitable work opportunities.',
        'important_notice_footer': 'You are in control of your profile. You can update your information at any time, and you have the right to request deletion of your account when you no longer wish to use ShramikConnect.',
        
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
        'worker_title': 'श्रमिक डेटा',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'यह खंड श्रमिककनेक्ट प्लेटफॉर्म पर श्रमिकों से एकत्र की जाने वाली विशिष्ट प्रकार की व्यक्तिगत जानकारी की व्याख्या करता है। हम केवल श्रमिकों को उपयुक्त नौकरी के अवसर खोजने और नियोक्ताओं से जुड़ने में मदद करने के लिए आवश्यक जानकारी एकत्र करते हैं।',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'मूल खाता जानकारी',
        'basic_info_desc': 'जब श्रमिक श्रमिककनेक्ट पर पंजीकरण करते हैं, तो हम आवश्यक खाता जानकारी एकत्र करते हैं:',
        'basic_info1': 'पूरा नाम',
        'basic_info2': 'मोबाइल नंबर (ओटीपी द्वारा सत्यापित)',
        'basic_info3': 'ईमेल पता (वैकल्पिक)',
        'basic_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'basic_info_note': 'यह जानकारी आपका श्रमिक खाता बनाने और बनाए रखने और आपको नौकरी के अवसरों के बारे में सूचित करने के लिए आवश्यक है।',
        
        // Section 2 - Profile Information
        'profile_info_title': 'प्रोफाइल जानकारी',
        'profile_info_desc': 'नियोक्ताओं को आपको खोजने और आपकी क्षमताओं को समझने में मदद करने के लिए, हम अतिरिक्त प्रोफाइल विवरण एकत्र करते हैं:',
        'profile_info1': 'स्थान (शहर/क्षेत्र जहां आप काम के लिए उपलब्ध हैं)',
        'profile_info2': 'कौशल और कार्य श्रेणियां (जैसे, प्लंबर, इलेक्ट्रीशियन, पेंटर, निर्माण श्रमिक, आदि)',
        'profile_info3': 'कार्य अनुभव (अनुभव के वर्ष, पिछला कार्य इतिहास - वैकल्पिक)',
        'profile_info4': 'पसंदीदा काम के घंटे और उपलब्धता',
        'profile_info5': 'अपेक्षित मजदूरी या भुगतान प्राथमिकताएं (वैकल्पिक)',
        'profile_info_note': 'यह जानकारी नियोक्ताओं को आपके कौशल और अनुभव को समझने में मदद करती है, जिससे उनके लिए आपको प्रासंगिक नौकरी के अवसर प्रदान करना आसान हो जाता है।',
        
        // Section 3 - Identity Verification
        'identity_title': 'पहचान सत्यापन दस्तावेज',
        'identity_desc': 'प्लेटफॉर्म पर विश्वास और सुरक्षा बढ़ाने के लिए, हम पहचान सत्यापन दस्तावेजों का अनुरोध कर सकते हैं:',
        'identity1': '<strong>आधार कार्ड</strong> - वैकल्पिक लेकिन सत्यापन के लिए अनुशंसित। नियोक्ताओं के साथ विश्वास बनाने में मदद करता है।',
        'identity2': '<strong>पैन कार्ड</strong> - पहचान सत्यापन के लिए वैकल्पिक विकल्प।',
        'identity_storage_title': 'सुरक्षित भंडारण',
        'identity_storage_desc': 'प्रदान किए जाने पर, पहचान दस्तावेज हमारे डेटाबेस में सुरक्षित रूप से संग्रहीत किए जाते हैं और केवल सत्यापन उद्देश्यों के लिए उपयोग किए जाते हैं। हम इस संवेदनशील जानकारी की सुरक्षा के लिए उचित उपाय करते हैं। आप इन दस्तावेजों को न देने का विकल्प चुन सकते हैं, लेकिन सत्यापित श्रमिकों को नियोक्ताओं से अधिक नौकरी के अवसर मिल सकते हैं।',
        'identity_note': 'पहचान दस्तावेज प्रदान करना पूरी तरह से स्वैच्छिक है। हालांकि, नियोक्ता अक्सर उन श्रमिकों को काम पर रखना पसंद करते हैं जिन्होंने सत्यापन पूरा कर लिया है क्योंकि इससे विश्वास बढ़ता है।',
        
        // Section 4 - Job Application Data
        'job_data_title': 'नौकरी आवेदन डेटा',
        'job_data_desc': 'जब आप नौकरियों के लिए आवेदन करते हैं या नियोक्ताओं के साथ बातचीत करते हैं, तो हम आपकी नौकरी खोज गतिविधियों से संबंधित जानकारी एकत्र करते हैं:',
        'job_data1': 'नौकरी आवेदन इतिहास (जिन नौकरियों के लिए आपने आवेदन किया है)',
        'job_data2': 'नियोक्ताओं के साथ आदान-प्रदान किए गए संदेश',
        'job_data3': 'नौकरी शुरू होने की तारीखें और कार्य अवधि (जब लागू हो)',
        'job_data4': 'नियोक्ताओं से प्राप्त रेटिंग और प्रतिक्रिया',
        'job_data_note': 'यह जानकारी हमें आपकी नौकरी सिफारिशों को बेहतर बनाने में मदद करती है और नियोक्ताओं को आपके कार्य इतिहास और विश्वसनीयता देखने की अनुमति देती है।',
        
        // Section 5 - Ratings and Feedback
        'ratings_title': 'रेटिंग और प्रतिक्रिया',
        'ratings_desc': 'नौकरी पूरी होने के बाद, नियोक्ता आपके काम के बारे में रेटिंग और प्रतिक्रिया प्रदान कर सकते हैं:',
        'ratings1': '<strong>स्टार रेटिंग</strong> - काम की गुणवत्ता, व्यवहार, समय की पाबंदी और व्यावसायिकता के आधार पर 1 से 5 स्टार',
        'ratings2': '<strong>लिखित प्रतिक्रिया</strong> - आपके काम के प्रदर्शन के बारे में टिप्पणियां',
        'ratings_note': 'आपकी रेटिंग और प्रतिक्रिया प्लेटफॉर्म पर अन्य नियोक्ताओं को दिखाई देती है। अच्छी रेटिंग आपको अधिक नौकरी के अवसर प्राप्त करने में मदद कर सकती है। आप व्यक्तिगत रेटिंग हटा नहीं सकते, लेकिन यदि आवश्यक हो तो आप प्रतिक्रिया का जवाब दे सकते हैं।',
        
        // Section 6 - Worker Rights
        'worker_rights_title': 'डेटा के संबंध में श्रमिक अधिकार',
        'worker_rights_desc': 'श्रमिककनेक्ट पर एक श्रमिक के रूप में, आपके पास अपने डेटा के संबंध में निम्नलिखित अधिकार हैं:',
        'worker_rights1': '<strong>पहुंच</strong> - किसी भी समय अपने डेटा की एक प्रति का अनुरोध करें',
        'worker_rights2': '<strong>अपडेट</strong> - खाता सेटिंग्स के माध्यम से अपनी प्रोफाइल जानकारी संपादित करें',
        'worker_rights3': '<strong>हटाएं</strong> - ईमेल के माध्यम से खाता हटाने का अनुरोध करें (2 दिनों के भीतर संसाधित)',
        'worker_rights_note': 'अपने डेटा से संबंधित किसी भी अनुरोध के लिए, कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें।',
        
        // Important Notice
        'important_notice_title': 'श्रमिकों के लिए महत्वपूर्ण सूचना',
        'important_notice_desc': 'एक श्रमिक के रूप में आपके द्वारा प्रदान की गई जानकारी नियोक्ताओं को आपको खोजने और काम पर रखने में मदद करती है। सटीक और पूर्ण जानकारी प्रदान करने से उपयुक्त काम के अवसर खोजने की आपकी संभावना बढ़ जाती है।',
        'important_notice_footer': 'आप अपने प्रोफाइल के नियंत्रण में हैं। आप किसी भी समय अपनी जानकारी अपडेट कर सकते हैं, और जब आप श्रमिककनेक्ट का उपयोग नहीं करना चाहते हैं तो आपको अपना खाता हटाने का अनुरोध करने का अधिकार है।',
        
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
        'worker_title': 'कामगार डेटा',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'हा विभाग श्रमिककनेक्ट प्लॅटफॉर्मवर कामगारांकडून गोळा केलेल्या विशिष्ट प्रकारच्या वैयक्तिक माहितीचे स्पष्टीकरण देतो. आम्ही फक्त कामगारांना योग्य नोकरीच्या संधी शोधण्यात आणि नियोक्त्यांशी कनेक्ट होण्यास मदत करण्यासाठी आवश्यक माहिती गोळा करतो.',
        
        // Section 1 - Basic Account Information
        'basic_info_title': 'मूलभूत खाते माहिती',
        'basic_info_desc': 'जेव्हा कामगार श्रमिककनेक्टवर नोंदणी करतात, तेव्हा आम्ही आवश्यक खाते माहिती गोळा करतो:',
        'basic_info1': 'पूर्ण नाव',
        'basic_info2': 'मोबाइल क्रमांक (ओटीपीद्वारे सत्यापित)',
        'basic_info3': 'ईमेल पत्ता (पर्यायी)',
        'basic_info4': 'पासवर्ड (एन्क्रिप्टेड)',
        'basic_info_note': 'तुमचे कामगार खाते तयार करण्यासाठी आणि राखण्यासाठी आणि तुम्हाला नोकरीच्या संधींबद्दल माहिती देण्यासाठी ही माहिती आवश्यक आहे.',
        
        // Section 2 - Profile Information
        'profile_info_title': 'प्रोफाइल माहिती',
        'profile_info_desc': 'नियोक्त्यांना तुम्हाला शोधण्यात आणि तुमची क्षमता समजून घेण्यात मदत करण्यासाठी, आम्ही अतिरिक्त प्रोफाइल तपशील गोळा करतो:',
        'profile_info1': 'स्थान (शहर/क्षेत्र जिथे तुम्ही कामासाठी उपलब्ध आहात)',
        'profile_info2': 'कौशल्ये आणि काम श्रेणी (उदा., प्लंबर, इलेक्ट्रिशियन, पेंटर, बांधकाम कामगार, इ.)',
        'profile_info3': 'कामाचा अनुभव (अनुभवाची वर्षे, मागील कामाचा इतिहास - पर्यायी)',
        'profile_info4': 'प्राधान्य कामाचे तास आणि उपलब्धता',
        'profile_info5': 'अपेक्षित वेतन किंवा पेमेंट प्राधान्ये (पर्यायी)',
        'profile_info_note': 'ही माहिती नियोक्त्यांना तुमची कौशल्ये आणि अनुभव समजून घेण्यास मदत करते, ज्यामुळे त्यांना तुम्हाला संबंधित नोकरीच्या संधी देणे सोपे होते.',
        
        // Section 3 - Identity Verification
        'identity_title': 'ओळख सत्यापन दस्तऐवज',
        'identity_desc': 'प्लॅटफॉर्मवर विश्वास आणि सुरक्षितता वाढवण्यासाठी, आम्ही ओळख सत्यापन दस्तऐवजांची विनंती करू शकतो:',
        'identity1': '<strong>आधार कार्ड</strong> - पर्यायी परंतु सत्यापनासाठी शिफारस केलेले. नियोक्त्यांसह विश्वास निर्माण करण्यास मदत करते.',
        'identity2': '<strong>पॅन कार्ड</strong> - ओळख सत्यापनासाठी पर्यायी पर्याय.',
        'identity_storage_title': 'सुरक्षित स्टोरेज',
        'identity_storage_desc': 'प्रदान केल्यावर, ओळख दस्तऐवज आमच्या डेटाबेसमध्ये सुरक्षितपणे संग्रहित केले जातात आणि फक्त सत्यापन उद्देशांसाठी वापरले जातात. आम्ही या संवेदनशील माहितीचे संरक्षण करण्यासाठी योग्य उपाय करतो. तुम्ही हे दस्तऐवज न देण्याचा पर्याय निवडू शकता, परंतु सत्यापित कामगारांना नियोक्त्यांकडून अधिक नोकरीच्या संधी मिळू शकतात.',
        'identity_note': 'ओळख दस्तऐवज प्रदान करणे पूर्णपणे ऐच्छिक आहे. तथापि, नियोक्ते अनेकदा अशा कामगारांना नियुक्त करण्यास प्राधान्य देतात ज्यांनी सत्यापन पूर्ण केले आहे कारण यामुळे विश्वास वाढतो.',
        
        // Section 4 - Job Application Data
        'job_data_title': 'नोकरी अर्ज डेटा',
        'job_data_desc': 'जेव्हा तुम्ही नोकऱ्यांसाठी अर्ज करता किंवा नियोक्त्यांशी संवाद साधता, तेव्हा आम्ही तुमच्या नोकरी शोध क्रियाकलापांशी संबंधित माहिती गोळा करतो:',
        'job_data1': 'नोकरी अर्ज इतिहास (तुम्ही ज्या नोकऱ्यांसाठी अर्ज केला आहे)',
        'job_data2': 'नियोक्त्यांशी देवाणघेवाण केलेले संदेश',
        'job_data3': 'नोकरी सुरू होण्याच्या तारखा आणि कामाचा कालावधी (जेव्हा लागू असेल)',
        'job_data4': 'नियोक्त्यांकडून प्राप्त रेटिंग आणि अभिप्राय',
        'job_data_note': 'ही माहिती आम्हाला तुमच्या नोकरी शिफारसी सुधारण्यास मदत करते आणि नियोक्त्यांना तुमचा कामाचा इतिहास आणि विश्वासार्हता पाहण्याची परवानगी देते.',
        
        // Section 5 - Ratings and Feedback
        'ratings_title': 'रेटिंग आणि अभिप्राय',
        'ratings_desc': 'नोकरी पूर्ण झाल्यानंतर, नियोक्ते तुमच्या कामाबद्दल रेटिंग आणि अभिप्राय देऊ शकतात:',
        'ratings1': '<strong>स्टार रेटिंग</strong> - कामाची गुणवत्ता, वर्तन, वेळेचे पालन आणि व्यावसायिकतेवर आधारित १ ते ५ स्टार',
        'ratings2': '<strong>लिखित अभिप्राय</strong> - तुमच्या कामाच्या कामगिरीबद्दल टिप्पण्या',
        'ratings_note': 'तुमची रेटिंग आणि अभिप्राय प्लॅटफॉर्मवर इतर नियोक्त्यांना दृश्यमान आहेत. चांगली रेटिंग तुम्हाला अधिक नोकरीच्या संधी मिळवण्यात मदत करू शकते. तुम्ही वैयक्तिक रेटिंग हटवू शकत नाही, परंतु आवश्यक असल्यास तुम्ही अभिप्रायाला प्रतिसाद देऊ शकता.',
        
        // Section 6 - Worker Rights
        'worker_rights_title': 'डेटाबाबत कामगार अधिकार',
        'worker_rights_desc': 'श्रमिककनेक्टवर कामगार म्हणून, तुमच्या डेटाबाबत तुम्हाला खालील अधिकार आहेत:',
        'worker_rights1': '<strong>प्रवेश</strong> - कधीही तुमच्या डेटाची प्रत मागवा',
        'worker_rights2': '<strong>अद्यतन</strong> - खाते सेटिंग्जद्वारे तुमची प्रोफाइल माहिती संपादित करा',
        'worker_rights3': '<strong>हटवा</strong> - ईमेलद्वारे खाते हटवण्याची विनंती करा (२ दिवसांत प्रक्रिया केली जाते)',
        'worker_rights_note': 'तुमच्या डेटाशी संबंधित कोणत्याही विनंत्यांसाठी, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा.',
        
        // Important Notice
        'important_notice_title': 'कामगारांसाठी महत्वाची सूचना',
        'important_notice_desc': 'कामगार म्हणून तुम्ही प्रदान केलेली माहिती नियोक्त्यांना तुम्हाला शोधण्यात आणि कामावर ठेवण्यात मदत करते. अचूक आणि संपूर्ण माहिती प्रदान केल्याने योग्य कामाच्या संधी शोधण्याची तुमची शक्यता वाढते.',
        'important_notice_footer': 'तुम्ही तुमच्या प्रोफाइलच्या नियंत्रणात आहात. तुम्ही कधीही तुमची माहिती अद्यतनित करू शकता, आणि जेव्हा तुम्ही श्रमिककनेक्ट वापरू इच्छित नाही तेव्हा तुमचे खाते हटवण्याची विनंती करण्याचा तुम्हाला अधिकार आहे.',
        
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
    console.log('Worker Data page initialized');

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