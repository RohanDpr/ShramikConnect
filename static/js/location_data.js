/**
 * LOCATION DATA PAGE - PRIVACY POLICY
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
        'location_title': 'Location Data',
        'last_updated': 'Last Updated: March 2026',
        
        // Overview
        'overview_title': 'Overview',
        'overview_desc': 'Location information helps workers and employers connect based on geographic proximity. This section explains what location data we collect, how we use it, and your choices regarding location information on the ShramikConnect platform.',
        
        // Section 1 - Types of Location Data
        'types_title': 'Types of Location Data We Collect',
        'types_desc': 'ShramikConnect collects different types of location information depending on how you use the platform:',
        'city_area_title': 'City/Area Level Location',
        'city_area_desc': '<strong>Required:</strong> When you register, we ask for your city or area. This helps match workers with jobs in their vicinity and helps employers find workers near their job sites.',
        'precise_title': 'Precise Location (Optional)',
        'precise_desc': '<strong>Optional:</strong> Workers may choose to share their precise location (GPS coordinates) to help employers find them more accurately. This is completely optional and can be controlled through your device settings.',
        'location_note': 'You are in full control of your location information. Precise location sharing is never required to use ShramikConnect.',
        
        // Section 2 - How We Use Location Data
        'how_use_title': 'How We Use Location Data',
        'how_use_desc': 'We use location information to provide and improve our services:',
        'how_use1': '<strong>Job Matching:</strong> Show workers job opportunities near their location',
        'how_use2': '<strong>Worker Discovery:</strong> Help employers find workers in their area',
        'how_use3': '<strong>Search Filters:</strong> Allow users to filter jobs or workers by distance or location',
        'how_use4': '<strong>Platform Improvement:</strong> Analyze aggregate location data to understand where our platform is being used and improve service coverage',
        'privacy_first_title': 'Privacy First',
        'privacy_first_desc': 'We never share your precise location with other users without your consent. When workers choose to share precise location, it is only visible to employers they interact with, and only for the purpose of facilitating work arrangements.',
        
        // Section 3 - Location Data in Job Postings
        'job_location_title': 'Location Data in Job Postings',
        'job_location_desc': 'When employers post jobs, they provide location information about where the work will take place:',
        'job_location1': '<strong>Job Location:</strong> Employers specify the city/area where work is needed. This helps workers find jobs near them.',
        'job_location2': '<strong>Work Site Details:</strong> Additional location details may be shared with workers after they are hired, through direct communication.',
        'job_location_note': 'Job location information is visible to all workers on the platform to help them decide whether to apply.',
        
        // Section 4 - Your Choices and Control
        'control_title': 'Your Choices and Control',
        'control_desc': 'You have several ways to control your location information:',
        'profile_edit_title': 'Profile Settings',
        'profile_edit_desc': 'You can update your city/area information anytime through your profile settings.',
        'device_title': 'Device Permissions',
        'device_desc': 'If you\'ve enabled precise location, you can revoke this permission through your device settings at any time.',
        'location_history_title': 'Location History',
        'location_history_desc': 'We do not track or store your location history. Only your current city/area (or current precise location if you choose to share it) is used.',
        'control_note': '<strong>Tip:</strong> Providing your accurate city/area helps you find more relevant job opportunities. You don\'t need to share your exact address - your city or area is sufficient for most job matches.',
        
        // Section 5 - Data Retention
        'retention_title': 'Data Retention and Deletion',
        'retention_desc': 'We handle location data according to the following practices:',
        'retention1': '<strong>City/Area:</strong> Your city/area information is stored as part of your profile and remains until you update it or delete your account.',
        'retention2': '<strong>Precise Location:</strong> If you choose to share precise location, it is used only during your current session and not stored permanently.',
        'retention3': '<strong>Account Deletion:</strong> When you delete your account (within 2 days of request), all location information associated with your profile is removed from our active systems.',
        'retention_note': 'Some location data may be retained in anonymized form for analytical purposes, but this cannot be linked back to you.',
        
        // Important Notice
        'important_notice_title': 'Important Notice',
        'important_notice_desc': 'Your location privacy matters to us. ShramikConnect is designed to work effectively with just your city or area information. Precise location sharing is completely optional and under your control at all times.',
        'important_notice_footer': 'If you have questions about how your location data is handled, please contact us at <strong>support@shramikconnect.in</strong>.',
        
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
        'location_title': 'स्थान डेटा',
        'last_updated': 'अंतिम अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'अवलोकन',
        'overview_desc': 'स्थान की जानकारी श्रमिकों और नियोक्ताओं को भौगोलिक निकटता के आधार पर जुड़ने में मदद करती है। यह खंड बताता है कि हम कौन सा स्थान डेटा एकत्र करते हैं, हम इसका उपयोग कैसे करते हैं, और श्रमिककनेक्ट प्लेटफॉर्म पर स्थान जानकारी के संबंध में आपके विकल्प।',
        
        // Section 1 - Types of Location Data
        'types_title': 'हम किस प्रकार का स्थान डेटा एकत्र करते हैं',
        'types_desc': 'श्रमिककनेक्ट आपके प्लेटफॉर्म के उपयोग के आधार पर विभिन्न प्रकार की स्थान जानकारी एकत्र करता है:',
        'city_area_title': 'शहर/क्षेत्र स्तर का स्थान',
        'city_area_desc': '<strong>आवश्यक:</strong> जब आप पंजीकरण करते हैं, तो हम आपके शहर या क्षेत्र के बारे में पूछते हैं। यह श्रमिकों को उनके आस-पास की नौकरियों से मिलान करने में मदद करता है और नियोक्ताओं को उनके कार्य स्थलों के पास श्रमिक खोजने में मदद करता है।',
        'precise_title': 'सटीक स्थान (वैकल्पिक)',
        'precise_desc': '<strong>वैकल्पिक:</strong> श्रमिक नियोक्ताओं को अधिक सटीक रूप से खोजने में मदद करने के लिए अपना सटीक स्थान (जीपीएस निर्देशांक) साझा करना चुन सकते हैं। यह पूरी तरह से वैकल्पिक है और इसे आपके डिवाइस सेटिंग्स के माध्यम से नियंत्रित किया जा सकता है।',
        'location_note': 'आप अपनी स्थान जानकारी के पूर्ण नियंत्रण में हैं। श्रमिककनेक्ट का उपयोग करने के लिए सटीक स्थान साझाकरण कभी भी आवश्यक नहीं है।',
        
        // Section 2 - How We Use Location Data
        'how_use_title': 'हम स्थान डेटा का उपयोग कैसे करते हैं',
        'how_use_desc': 'हम अपनी सेवाएं प्रदान करने और सुधारने के लिए स्थान जानकारी का उपयोग करते हैं:',
        'how_use1': '<strong>नौकरी मिलान:</strong> श्रमिकों को उनके स्थान के पास नौकरी के अवसर दिखाना',
        'how_use2': '<strong>श्रमिक खोज:</strong> नियोक्ताओं को उनके क्षेत्र में श्रमिक खोजने में मदद करना',
        'how_use3': '<strong>खोज फ़िल्टर:</strong> उपयोगकर्ताओं को दूरी या स्थान के अनुसार नौकरियों या श्रमिकों को फ़िल्टर करने की अनुमति देना',
        'how_use4': '<strong>प्लेटफॉर्म सुधार:</strong> यह समझने के लिए कि हमारा प्लेटफॉर्म कहां उपयोग किया जा रहा है और सेवा कवरेज में सुधार करने के लिए समग्र स्थान डेटा का विश्लेषण करना',
        'privacy_first_title': 'गोपनीयता पहले',
        'privacy_first_desc': 'हम आपकी सहमति के बिना आपका सटीक स्थान अन्य उपयोगकर्ताओं के साथ कभी साझा नहीं करते हैं। जब श्रमिक सटीक स्थान साझा करना चुनते हैं, तो यह केवल उन नियोक्ताओं को दिखाई देता है जिनके साथ वे बातचीत करते हैं, और केवल कार्य व्यवस्था को सुविधाजनक बनाने के उद्देश्य से।',
        
        // Section 3 - Location Data in Job Postings
        'job_location_title': 'नौकरी पोस्टिंग में स्थान डेटा',
        'job_location_desc': 'जब नियोक्ता नौकरियां पोस्ट करते हैं, तो वे उस स्थान के बारे में जानकारी प्रदान करते हैं जहां काम होगा:',
        'job_location1': '<strong>नौकरी का स्थान:</strong> नियोक्ता उस शहर/क्षेत्र को निर्दिष्ट करते हैं जहां काम की आवश्यकता है। यह श्रमिकों को उनके पास नौकरियां खोजने में मदद करता है।',
        'job_location2': '<strong>कार्य स्थल विवरण:</strong> अतिरिक्त स्थान विवरण सीधे संचार के माध्यम से, काम पर रखे जाने के बाद श्रमिकों के साथ साझा किए जा सकते हैं।',
        'job_location_note': 'नौकरी स्थान की जानकारी प्लेटफॉर्म पर सभी श्रमिकों को दिखाई देती है ताकि उन्हें आवेदन करने का निर्णय लेने में मदद मिल सके।',
        
        // Section 4 - Your Choices and Control
        'control_title': 'आपके विकल्प और नियंत्रण',
        'control_desc': 'आपके पास अपनी स्थान जानकारी को नियंत्रित करने के कई तरीके हैं:',
        'profile_edit_title': 'प्रोफाइल सेटिंग्स',
        'profile_edit_desc': 'आप अपनी प्रोफाइल सेटिंग्स के माध्यम से कभी भी अपने शहर/क्षेत्र की जानकारी अपडेट कर सकते हैं।',
        'device_title': 'डिवाइस अनुमतियां',
        'device_desc': 'यदि आपने सटीक स्थान सक्षम किया है, तो आप किसी भी समय अपनी डिवाइस सेटिंग्स के माध्यम से इस अनुमति को रद्द कर सकते हैं।',
        'location_history_title': 'स्थान इतिहास',
        'location_history_desc': 'हम आपके स्थान इतिहास को ट्रैक या संग्रहीत नहीं करते हैं। केवल आपका वर्तमान शहर/क्षेत्र (या वर्तमान सटीक स्थान यदि आप इसे साझा करना चुनते हैं) का उपयोग किया जाता है।',
        'control_note': '<strong>टिप:</strong> अपना सटीक शहर/क्षेत्र प्रदान करने से आपको अधिक प्रासंगिक नौकरी के अवसर खोजने में मदद मिलती है। आपको अपना सटीक पता साझा करने की आवश्यकता नहीं है - आपका शहर या क्षेत्र अधिकांश नौकरी मिलान के लिए पर्याप्त है।',
        
        // Section 5 - Data Retention
        'retention_title': 'डेटा प्रतिधारण और विलोपन',
        'retention_desc': 'हम निम्नलिखित प्रथाओं के अनुसार स्थान डेटा संभालते हैं:',
        'retention1': '<strong>शहर/क्षेत्र:</strong> आपके शहर/क्षेत्र की जानकारी आपकी प्रोफाइल के हिस्से के रूप में संग्रहीत की जाती है और जब तक आप इसे अपडेट नहीं करते या अपना खाता हटा नहीं देते, तब तक बनी रहती है।',
        'retention2': '<strong>सटीक स्थान:</strong> यदि आप सटीक स्थान साझा करना चुनते हैं, तो इसका उपयोग केवल आपके वर्तमान सत्र के दौरान किया जाता है और इसे स्थायी रूप से संग्रहीत नहीं किया जाता है।',
        'retention3': '<strong>खाता विलोपन:</strong> जब आप अपना खाता हटाते हैं (अनुरोध के 2 दिनों के भीतर), तो आपकी प्रोफाइल से जुड़ी सभी स्थान जानकारी हमारी सक्रिय प्रणालियों से हटा दी जाती है।',
        'retention_note': 'कुछ स्थान डेटा विश्लेषणात्मक उद्देश्यों के लिए अनाम रूप में बनाए रखा जा सकता है, लेकिन यह आपसे वापस नहीं जोड़ा जा सकता है।',
        
        // Important Notice
        'important_notice_title': 'महत्वपूर्ण सूचना',
        'important_notice_desc': 'आपकी स्थान गोपनीयता हमारे लिए महत्वपूर्ण है। श्रमिककनेक्ट को केवल आपके शहर या क्षेत्र की जानकारी के साथ प्रभावी ढंग से काम करने के लिए डिज़ाइन किया गया है। सटीक स्थान साझाकरण पूरी तरह से वैकल्पिक है और हर समय आपके नियंत्रण में है।',
        'important_notice_footer': 'यदि आपके स्थान डेटा को कैसे संभाला जाता है, इसके बारे में प्रश्न हैं, तो कृपया हमसे <strong>support@shramikconnect.in</strong> पर संपर्क करें।',
        
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
        'location_title': 'स्थान डेटा',
        'last_updated': 'शेवटचे अपडेट: मार्च २०२६',
        
        // Overview
        'overview_title': 'विहंगावलोकन',
        'overview_desc': 'स्थान माहिती कामगार आणि नियोक्त्यांना भौगोलिक निकटतेच्या आधारावर कनेक्ट होण्यास मदत करते. हा विभाग स्पष्ट करतो की आम्ही कोणता स्थान डेटा गोळा करतो, आम्ही त्याचा वापर कसा करतो आणि श्रमिककनेक्ट प्लॅटफॉर्मवर स्थान माहितीबाबत तुमचे पर्याय.',
        
        // Section 1 - Types of Location Data
        'types_title': 'आम्ही कोणत्या प्रकारचा स्थान डेटा गोळा करतो',
        'types_desc': 'श्रमिककनेक्ट तुमच्या प्लॅटफॉर्मच्या वापरावर आधारित विविध प्रकारची स्थान माहिती गोळा करते:',
        'city_area_title': 'शहर/क्षेत्र स्तर स्थान',
        'city_area_desc': '<strong>आवश्यक:</strong> जेव्हा तुम्ही नोंदणी करता, तेव्हा आम्ही तुमचे शहर किंवा क्षेत्र विचारतो. हे कामगारांना त्यांच्या जवळच्या नोकऱ्यांशी जुळवण्यास मदत करते आणि नियोक्त्यांना त्यांच्या कामाच्या ठिकाणाजवळ कामगार शोधण्यास मदत करते.',
        'precise_title': 'अचूक स्थान (पर्यायी)',
        'precise_desc': '<strong>पर्यायी:</strong> कामगार नियोक्त्यांना अधिक अचूकपणे शोधण्यात मदत करण्यासाठी त्यांचे अचूक स्थान (GPS निर्देशांक) सामायिक करणे निवडू शकतात. हे पूर्णपणे पर्यायी आहे आणि तुमच्या डिव्हाइस सेटिंग्जद्वारे नियंत्रित केले जाऊ शकते.',
        'location_note': 'तुम्ही तुमच्या स्थान माहितीच्या पूर्ण नियंत्रणात आहात. श्रमिककनेक्ट वापरण्यासाठी अचूक स्थान सामायिकरण कधीही आवश्यक नाही.',
        
        // Section 2 - How We Use Location Data
        'how_use_title': 'आम्ही स्थान डेटा कसा वापरतो',
        'how_use_desc': 'आम्ही आमच्या सेवा प्रदान करण्यासाठी आणि सुधारण्यासाठी स्थान माहितीचा वापर करतो:',
        'how_use1': '<strong>नोकरी जुळणी:</strong> कामगारांना त्यांच्या स्थानाजवळील नोकरीच्या संधी दाखवा',
        'how_use2': '<strong>कामगार शोध:</strong> नियोक्त्यांना त्यांच्या क्षेत्रातील कामगार शोधण्यात मदत करा',
        'how_use3': '<strong>शोध फिल्टर:</strong> वापरकर्त्यांना अंतर किंवा स्थानानुसार नोकऱ्या किंवा कामगार फिल्टर करण्याची परवानगी द्या',
        'how_use4': '<strong>प्लॅटफॉर्म सुधारणा:</strong> आमचा प्लॅटफॉर्म कुठे वापरला जात आहे हे समजून घेण्यासाठी आणि सेवा कव्हरेज सुधारण्यासाठी एकत्रित स्थान डेटाचे विश्लेषण करा',
        'privacy_first_title': 'गोपनीयता प्रथम',
        'privacy_first_desc': 'आम्ही तुमच्या संमतीशिवाय तुमचे अचूक स्थान इतर वापरकर्त्यांशी कधीही सामायिक करत नाही. जेव्हा कामगार अचूक स्थान सामायिक करणे निवडतात, तेव्हा ते फक्त ते ज्या नियोक्त्यांशी संवाद साधतात त्यांना दिसते आणि फक्त कामाच्या व्यवस्था सुलभ करण्याच्या उद्देशाने.',
        
        // Section 3 - Location Data in Job Postings
        'job_location_title': 'नोकरी पोस्टिंगमध्ये स्थान डेटा',
        'job_location_desc': 'जेव्हा नियोक्ते नोकऱ्या पोस्ट करतात, तेव्हा ते काम कुठे होईल याबद्दल स्थान माहिती प्रदान करतात:',
        'job_location1': '<strong>नोकरीचे स्थान:</strong> नियोक्ते ज्या शहर/क्षेत्रात कामाची आवश्यकता आहे ते निर्दिष्ट करतात. हे कामगारांना त्यांच्या जवळील नोकऱ्या शोधण्यात मदत करते.',
        'job_location2': '<strong>कामाच्या ठिकाणाचे तपशील:</strong> अतिरिक्त स्थान तपशील थेट संप्रेषणाद्वारे, कामावर घेतल्यानंतर कामगारांशी सामायिक केले जाऊ शकतात.',
        'job_location_note': 'नोकरीच्या स्थानाची माहिती प्लॅटफॉर्मवरील सर्व कामगारांना दिसते जेणेकरून त्यांना अर्ज करायचा की नाही हे ठरवण्यास मदत होईल.',
        
        // Section 4 - Your Choices and Control
        'control_title': 'तुमचे पर्याय आणि नियंत्रण',
        'control_desc': 'तुमच्या स्थान माहितीवर नियंत्रण ठेवण्याचे तुमच्याकडे अनेक मार्ग आहेत:',
        'profile_edit_title': 'प्रोफाइल सेटिंग्ज',
        'profile_edit_desc': 'तुम्ही तुमच्या प्रोफाइल सेटिंग्जद्वारे कधीही तुमची शहर/क्षेत्र माहिती अद्यतनित करू शकता.',
        'device_title': 'डिव्हाइस परवानग्या',
        'device_desc': 'जर तुम्ही अचूक स्थान सक्षम केले असेल, तर तुम्ही कधीही तुमच्या डिव्हाइस सेटिंग्जद्वारे ही परवानगी रद्द करू शकता.',
        'location_history_title': 'स्थान इतिहास',
        'location_history_desc': 'आम्ही तुमचा स्थान इतिहास ट्रॅक किंवा संग्रहित करत नाही. फक्त तुमचे वर्तमान शहर/क्षेत्र (किंवा तुम्ही ते सामायिक करणे निवडल्यास वर्तमान अचूक स्थान) वापरले जाते.',
        'control_note': '<strong>टीप:</strong> तुमचे अचूक शहर/क्षेत्र प्रदान केल्याने तुम्हाला अधिक संबंधित नोकरीच्या संधी शोधण्यात मदत होते. तुम्हाला तुमचा अचूक पत्ता सामायिक करण्याची आवश्यकता नाही - तुमचे शहर किंवा क्षेत्र बहुतेक नोकरी जुळणीसाठी पुरेसे आहे.',
        
        // Section 5 - Data Retention
        'retention_title': 'डेटा धारणा आणि हटवणे',
        'retention_desc': 'आम्ही खालील पद्धतींनुसार स्थान डेटा हाताळतो:',
        'retention1': '<strong>शहर/क्षेत्र:</strong> तुमची शहर/क्षेत्र माहिती तुमच्या प्रोफाइलचा भाग म्हणून संग्रहित केली जाते आणि तुम्ही ती अद्यतनित करेपर्यंत किंवा तुमचे खाते हटवेपर्यंत राहते.',
        'retention2': '<strong>अचूक स्थान:</strong> जर तुम्ही अचूक स्थान सामायिक करणे निवडले, तर ते फक्त तुमच्या वर्तमान सत्रादरम्यान वापरले जाते आणि कायमचे संग्रहित केले जात नाही.',
        'retention3': '<strong>खाते हटवणे:</strong> जेव्हा तुम्ही तुमचे खाते हटवता (विनंतीच्या २ दिवसांत), तेव्हा तुमच्या प्रोफाइलशी संबंधित सर्व स्थान माहिती आमच्या सक्रिय प्रणालींमधून काढून टाकली जाते.',
        'retention_note': 'काही स्थान डेटा विश्लेषणात्मक उद्देशांसाठी अनामित स्वरूपात ठेवला जाऊ शकतो, परंतु हे तुमच्याशी जोडले जाऊ शकत नाही.',
        
        // Important Notice
        'important_notice_title': 'महत्वाची सूचना',
        'important_notice_desc': 'तुमची स्थान गोपनीयता आमच्यासाठी महत्त्वाची आहे. श्रमिककनेक्ट फक्त तुमची शहर किंवा क्षेत्र माहितीसह प्रभावीपणे कार्य करण्यासाठी डिझाइन केले आहे. अचूक स्थान सामायिकरण पूर्णपणे पर्यायी आहे आणि नेहमी तुमच्या नियंत्रणात आहे.',
        'important_notice_footer': 'तुमचा स्थान डेटा कसा हाताळला जातो याबद्दल प्रश्न असल्यास, कृपया आमच्याशी <strong>support@shramikconnect.in</strong> वर संपर्क साधा.',
        
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
    console.log('Location Data page initialized');

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