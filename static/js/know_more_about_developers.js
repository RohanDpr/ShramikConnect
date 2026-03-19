/**
 * DEVELOPERS OVERVIEW PAGE - COMPLETE FIXED
 */

// ============================================
// DOM ELEMENTS
// ============================================
const settingsIconRight = document.getElementById('settingsIconRight');
const settingsDropdown = document.getElementById('settingsDropdown');
const smallBackBtn = document.getElementById('smallBackBtn');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');

// Slideshow state
const slideshows = [];

// ============================================
// TRANSLATIONS
// ============================================
// [LANG SWITCH] translations object - start
const translations = {
    en: {
        'back': 'Back',
        'language': 'Language',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'System',
        'back_to_about': 'Back to About',
        
        'hero_badge': 'The Creative Minds',
        'hero_title': 'Meet Our Developer Team',
        'hero_description': 'Five passionate developers from Government Polytechnic Khamgaon, building ShramikConnect with Django, PostgreSQL, and modern frontend technologies. Their journey of innovation and dedication brings this platform to life.',
        'developers': 'Developers',
        'founded': 'Founded',
        'users': 'Users',
        
        'meet_developers': 'Meet the Developers',
        'meet_developers_sub': 'Click or hover on cards to flip and learn more',
        'our_journey': 'Our Journey',
        'our_journey_sub': 'From an idea to a platform serving thousands',
        'our_skills': 'Our Skills',
        'our_skills_sub': 'Technologies we master to build amazing experiences',
        'developer_gallery': 'Developer Gallery',
        'developer_gallery_sub': 'Moments from our journey',
        'how_we_work': 'How We Work',
        'how_we_work_sub': 'Our development philosophy and workflow',
        'our_achievements': 'Our Achievements',
        'our_achievements_sub': 'Milestones we\'ve reached together',
        'connect_team_heading': 'Connect with the Team',
        'connect_team_text': 'Follow us on social media or reach out via email',
        
        // Settings buttons
        'lang_en': 'English',
        'lang_hi': 'हिन्दी',
        'lang_mr': 'मराठी',
        'theme_light': 'Light',
        'theme_dark': 'Dark',
        'theme_system': 'System',

        // Developer: Nagesh
        'nagesh_first': 'Nagesh',
        'nagesh_last': 'Daberao',
        'nagesh_name': 'Nagesh Daberao',
        'nagesh_role_front': 'Co-Founder & Frontend Developer',
        'nagesh_role_back': 'Frontend Developer',
        'nagesh_desc': 'Building impactful digital solutions with modern web technologies. Expert in creating seamless user experiences.',
        'nagesh_tag1': 'React.js',
        'nagesh_tag2': 'UI/UX',
        'nagesh_tag3': 'JavaScript',
        
        // Developer: Rohan
        'rohan_first': 'Rohan',
        'rohan_last': 'Dharpawar',
        'rohan_name': 'Rohan Dharpawar',
        'rohan_role_front': 'Co-Founder & Backend Developer',
        'rohan_role_back': 'Backend Developer',
        'rohan_desc': 'Designing robust, scalable backend systems with Django and PostgreSQL. Passionate about databases and APIs.',
        'rohan_tag1': 'Django',
        'rohan_tag2': 'Python',
        'rohan_tag3': 'PostgreSQL',
        
        // Developer: Shaan
        'shaan_first': 'Shaan',
        'shaan_last': 'Shukla',
        'shaan_name': 'Shaan Shukla',
        'shaan_role_front': 'Founder & Full Stack Developer',
        'shaan_role_back': 'Full Stack Developer',
        'shaan_desc': 'Visionary leader with expertise in full-stack development. Creating innovative solutions that connect workers with opportunities.',
        'shaan_tag1': 'Django',
        'shaan_tag2': 'React',
        'shaan_tag3': 'PostgreSQL',
        'shaan_tag4': 'System Design',
        
        // Developer: Wasif
        'wasif_first': 'Mohmmad',
        'wasif_last': 'Wasif',
        'wasif_name': 'Mohmmad Wasif',
        'wasif_role_front': 'Co-Founder & Frontend Developer',
        'wasif_role_back': 'UI/UX Designer',
        'wasif_desc': 'Crafting beautiful, intuitive interfaces with attention to detail. Focused on accessibility and user-centered design.',
        'wasif_tag1': 'Figma',
        'wasif_tag2': 'Tailwind',
        'wasif_tag3': 'UI/UX',
        
        // Developer: Sumedh
        'sumedh_first': 'Sumedh',
        'sumedh_last': 'Ingle',
        'sumedh_name': 'Sumedh Ingle',
        'sumedh_role_front': 'Co-Founder & Frontend Developer',
        'sumedh_role_back': 'Creative Developer',
        'sumedh_desc': 'Bringing creative ideas to life through code. Expert in animations, interactions, and modern frontend frameworks.',
        'sumedh_tag1': 'GSAP',
        'sumedh_tag2': 'Three.js',
        'sumedh_tag3': 'Animations',
        
        // Common
        'from_college': 'From',
        'gp_khamgaon': 'Government Polytechnic Khamgaon',
        'know_more': 'Know more',
        
        // Timeline
        'timeline_2023': '2023',
        'timeline_2023_title': 'First Meeting',
        'timeline_2023_desc': 'Five students met at Government Polytechnic Khamgaon and discovered their shared passion for technology.',
        'timeline_2024': '2024',
        'timeline_2024_title': 'Small Projects',
        'timeline_2024_desc': 'Started collaborating on small web projects, learning and growing together as a team.',
        'timeline_sep2025': 'Sep 2025',
        'timeline_sep2025_title': 'Idea Conceived',
        'timeline_sep2025_desc': 'The idea for ShramikConnect was born - a platform to connect workers with employers.',
        'timeline_nov2025': 'Nov 2025',
        'timeline_nov2025_title': 'Development Began',
        'timeline_nov2025_desc': 'Started building with Django, PostgreSQL, and modern frontend technologies.',
        'timeline_2026': '2026',
        'timeline_2026_title': 'Ongoing Development',
        'timeline_2026_desc': 'Continuously improving, adding features, and serving thousands of users.',
        
        // Skills
        'frontend': 'Frontend',
        'frontend_1': 'HTML5 & CSS3',
        'frontend_2': 'JavaScript (ES6+)',
        'frontend_3': 'React.js',
        'frontend_4': 'GSAP Animations',
        'backend': 'Backend',
        'backend_1': 'Django (Python)',
        'backend_2': 'Node.js',
        'backend_3': 'REST APIs',
        'backend_4': 'Authentication',
        'database': 'Database',
        'database_1': 'PostgreSQL',
        'database_2': 'MongoDB',
        'database_3': 'Database Design',
        'database_4': 'Query Optimization',
        'devops': 'DevOps',
        'devops_1': 'Render Hosting',
        'devops_2': 'Git & GitHub',
        'devops_3': 'CI/CD',
        'devops_4': 'SSL/TLS',
        
        // Gallery categories
        'gallery_meetings_title': 'Team Meetings',
        'gallery_coding_title': 'Coding Sessions',
        'gallery_events_title': 'Team Events',
        'gallery_college_title': 'College Life',
        
        // Gallery slides
        'gallery_meeting_1': 'Planning Session - Jan 2025',
        'gallery_meeting_2': 'Sprint Planning - Mar 2025',
        'gallery_meeting_3': 'Code Review - May 2025',
        'gallery_meeting_4': 'Strategy Meeting - Jul 2025',
        'gallery_meeting_5': 'Retrospective - Sep 2025',
        'gallery_coding_1': 'Pair Programming - Feb 2025',
        'gallery_coding_2': 'Debugging Session - Apr 2025',
        'gallery_coding_3': 'Late Night Coding - Jun 2025',
        'gallery_coding_4': 'Code Review - Aug 2025',
        'gallery_coding_5': 'Final Testing - Oct 2025',
        'gallery_event_1': 'Launch Party - Jun 2025',
        'gallery_event_2': 'Team Lunch - Aug 2025',
        'gallery_event_3': 'Birthday Celebration - Sep 2025',
        'gallery_event_4': 'Hackathon Win - Oct 2025',
        'gallery_event_5': 'Year End Party - Dec 2025',
        'gallery_event_6': 'Team Outing - Jan 2026',
        'gallery_college_1': 'First Day at GP Khamgaon',
        'gallery_college_2': 'Library Session',
        'gallery_college_3': 'Lab Work',
        'gallery_college_4': 'Campus Grounds',
        'gallery_college_5': 'Graduation Prep',
        
        // How we work
        'work_1_title': 'Collaborative',
        'work_1_desc': 'Daily standups, pair programming, and code reviews ensure quality.',
        'work_2_title': 'Agile',
        'work_2_desc': 'We follow agile methodology with 2-week sprints and continuous feedback.',
        'work_3_title': 'Always Learning',
        'work_3_desc': 'We constantly learn new technologies and share knowledge within the team.',
        'work_4_title': 'User-Focused',
        'work_4_desc': 'Every feature starts with understanding what users really need.',
        
        // Achievements
        'achievement_1': 'Workers Registered',
        'achievement_2': 'Employers',
        'achievement_3': 'Jobs Completed',
        'achievement_4': 'Satisfaction Rate',
        
        // Connect
        'github': 'GitHub',
        'linkedin': 'LinkedIn',
        'twitter': 'Twitter',
        'email': 'Email',
        'team_email': 'team@shramikconnect.in'
    },
    hi: {
        'back': 'वापस',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हल्का',
        'dark': 'गहरा',
        'system': 'सिस्टम',
        'back_to_about': 'अबाउट पर वापस जाएं',
        'hero_badge': 'रचनात्मक दिमाग',
        'hero_title': 'हमारी डेवलपर टीम से मिलें',
        'hero_description': 'सरकारी पॉलिटेक्निक खामगांव के पांच जुनूनी डेवलपर, Django, PostgreSQL और आधुनिक फ्रंटएंड तकनीकों के साथ श्रमिककनेक्ट का निर्माण कर रहे हैं।',
        'developers': 'डेवलपर्स',
        'founded': 'स्थापित',
        'users': 'उपयोगकर्ता',
        'meet_developers': 'डेवलपर्स से मिलें',
        'meet_developers_sub': 'अधिक जानने के लिए कार्ड पर क्लिक करें या होवर करें',
        'our_journey': 'हमारी यात्रा',
        'our_journey_sub': 'एक विचार से हजारों की सेवा करने वाले प्लेटफॉर्म तक',
        'our_skills': 'हमारी कुशलता',
        'our_skills_sub': 'अद्भुत अनुभव बनाने के लिए हम जिन तकनीकों में महारत रखते हैं',
        'developer_gallery': 'डेवलपर गैलरी',
        'developer_gallery_sub': 'हमारी यात्रा के क्षण',
        'how_we_work': 'हम कैसे काम करते हैं',
        'how_we_work_sub': 'हमारा विकास दर्शन और कार्यप्रवाह',
        'our_achievements': 'हमारी उपलब्धियां',
        'our_achievements_sub': 'हमने मिलकर जो मील के पत्थर हासिल किए हैं',
        'connect_team_heading': 'टीम से जुड़ें',
        'connect_team_text': 'सोशल मीडिया पर हमें फॉलो करें या ईमेल से संपर्क करें',
        
        // Settings buttons
        'lang_en': 'English',
        'lang_hi': 'हिन्दी',
        'lang_mr': 'मराठी',
        'theme_light': 'हल्का',
        'theme_dark': 'गहरा',
        'theme_system': 'सिस्टम',

        // Nagesh
        'nagesh_first': 'नागेश',
        'nagesh_last': 'डाबेराव',
        'nagesh_name': 'नागेश डाबेराव',
        'nagesh_role_front': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'nagesh_role_back': 'फ्रंटएंड डेवलपर',
        'nagesh_desc': 'आधुनिक वेब तकनीकों के साथ प्रभावशाली डिजिटल समाधान बनाना। निर्बाध उपयोगकर्ता अनुभव बनाने में विशेषज्ञ।',
        'nagesh_tag1': 'React.js',
        'nagesh_tag2': 'UI/UX',
        'nagesh_tag3': 'JavaScript',
        
        // Rohan
        'rohan_first': 'रोहन',
        'rohan_last': 'धरपावर',
        'rohan_name': 'रोहन धरपावर',
        'rohan_role_front': 'सह-संस्थापक और बैकएंड डेवलपर',
        'rohan_role_back': 'बैकएंड डेवलपर',
        'rohan_desc': 'Django और PostgreSQL के साथ मजबूत, स्केलेबल बैकएंड सिस्टम डिजाइन करना। डेटाबेस और एपीआई के प्रति जुनूनी।',
        'rohan_tag1': 'Django',
        'rohan_tag2': 'Python',
        'rohan_tag3': 'PostgreSQL',
        
        // Shaan
        'shaan_first': 'शान',
        'shaan_last': 'शुक्ला',
        'shaan_name': 'शान शुक्ला',
        'shaan_role_front': 'संस्थापक और फुल स्टैक डेवलपर',
        'shaan_role_back': 'फुल स्टैक डेवलपर',
        'shaan_desc': 'फुल-स्टैक डेवलपमेंट में विशेषज्ञता के साथ दूरदर्शी नेता। श्रमिकों को अवसरों से जोड़ने वाले अभिनव समाधान बनाना।',
        'shaan_tag1': 'Django',
        'shaan_tag2': 'React',
        'shaan_tag3': 'PostgreSQL',
        'shaan_tag4': 'सिस्टम डिजाइन',
        
        // Wasif
        'wasif_first': 'मोहम्मद',
        'wasif_last': 'वसीफ',
        'wasif_name': 'मोहम्मद वसीफ',
        'wasif_role_front': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'wasif_role_back': 'UI/UX डिजाइनर',
        'wasif_desc': 'विस्तार पर ध्यान देने के साथ सुंदर, सहज इंटरफेस तैयार करना। पहुंच और उपयोगकर्ता-केंद्रित डिजाइन पर केंद्रित।',
        'wasif_tag1': 'Figma',
        'wasif_tag2': 'Tailwind',
        'wasif_tag3': 'UI/UX',
        
        // Sumedh
        'sumedh_first': 'सुमेध',
        'sumedh_last': 'इंगले',
        'sumedh_name': 'सुमेध इंगले',
        'sumedh_role_front': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'sumedh_role_back': 'क्रिएटिव डेवलपर',
        'sumedh_desc': 'कोड के माध्यम से रचनात्मक विचारों को जीवन में लाना। एनिमेशन, इंटरैक्शन और आधुनिक फ्रंटएंड फ्रेमवर्क में विशेषज्ञ।',
        'sumedh_tag1': 'GSAP',
        'sumedh_tag2': 'Three.js',
        'sumedh_tag3': 'एनिमेशन',
        
        // Common
        'from_college': 'से',
        'gp_khamgaon': 'सरकारी पॉलिटेक्निक खामगांव',
        'know_more': 'और जानें',
        
        // Timeline
        'timeline_2023': '2023',
        'timeline_2023_title': 'पहली मुलाकात',
        'timeline_2023_desc': 'पांच छात्र सरकारी पॉलिटेक्निक खामगांव में मिले और प्रौद्योगिकी के प्रति अपने साझा जुनून की खोज की।',
        'timeline_2024': '2024',
        'timeline_2024_title': 'छोटे प्रोजेक्ट',
        'timeline_2024_desc': 'छोटे वेब प्रोजेक्ट पर सहयोग करना शुरू किया, एक टीम के रूप में सीखना और बढ़ना।',
        'timeline_sep2025': 'सितंबर 2025',
        'timeline_sep2025_title': 'विचार का जन्म',
        'timeline_sep2025_desc': 'श्रमिककनेक्ट का विचार पैदा हुआ - श्रमिकों को नियोक्ताओं से जोड़ने वाला एक मंच।',
        'timeline_nov2025': 'नवंबर 2025',
        'timeline_nov2025_title': 'विकास शुरू',
        'timeline_nov2025_desc': 'Django, PostgreSQL और आधुनिक फ्रंटएंड तकनीकों के साथ निर्माण शुरू किया।',
        'timeline_2026': '2026',
        'timeline_2026_title': 'निरंतर विकास',
        'timeline_2026_desc': 'लगातार सुधार, सुविधाएँ जोड़ना और हजारों उपयोगकर्ताओं की सेवा करना।',
        
        // Skills
        'frontend': 'फ्रंटएंड',
        'frontend_1': 'HTML5 और CSS3',
        'frontend_2': 'JavaScript (ES6+)',
        'frontend_3': 'React.js',
        'frontend_4': 'GSAP एनिमेशन',
        'backend': 'बैकएंड',
        'backend_1': 'Django (Python)',
        'backend_2': 'Node.js',
        'backend_3': 'REST API',
        'backend_4': 'प्रमाणीकरण',
        'database': 'डेटाबेस',
        'database_1': 'PostgreSQL',
        'database_2': 'MongoDB',
        'database_3': 'डेटाबेस डिजाइन',
        'database_4': 'क्वेरी अनुकूलन',
        'devops': 'DevOps',
        'devops_1': 'Render होस्टिंग',
        'devops_2': 'Git और GitHub',
        'devops_3': 'CI/CD',
        'devops_4': 'SSL/TLS',
        
        // Gallery categories
        'gallery_meetings_title': 'टीम बैठकें',
        'gallery_coding_title': 'कोडिंग सत्र',
        'gallery_events_title': 'टीम कार्यक्रम',
        'gallery_college_title': 'कॉलेज जीवन',
        
        // Gallery slides
        'gallery_meeting_1': 'योजना सत्र - जनवरी 2025',
        'gallery_meeting_2': 'स्प्रिंट योजना - मार्च 2025',
        'gallery_meeting_3': 'कोड समीक्षा - मई 2025',
        'gallery_meeting_4': 'रणनीति बैठक - जुलाई 2025',
        'gallery_meeting_5': 'पूर्वव्यापी - सितंबर 2025',
        'gallery_coding_1': 'युगल प्रोग्रामिंग - फरवरी 2025',
        'gallery_coding_2': 'डीबगिंग सत्र - अप्रैल 2025',
        'gallery_coding_3': 'रात भर कोडिंग - जून 2025',
        'gallery_coding_4': 'कोड समीक्षा - अगस्त 2025',
        'gallery_coding_5': 'अंतिम परीक्षण - अक्टूबर 2025',
        'gallery_event_1': 'लॉन्च पार्टी - जून 2025',
        'gallery_event_2': 'टीम लंच - अगस्त 2025',
        'gallery_event_3': 'जन्मदिन समारोह - सितंबर 2025',
        'gallery_event_4': 'हैकाथॉन जीत - अक्टूबर 2025',
        'gallery_event_5': 'वर्ष अंत पार्टी - दिसंबर 2025',
        'gallery_event_6': 'टीम आउटिंग - जनवरी 2026',
        'gallery_college_1': 'जीपी खामगांव में पहला दिन',
        'gallery_college_2': 'पुस्तकालय सत्र',
        'gallery_college_3': 'प्रयोगशाला कार्य',
        'gallery_college_4': 'कैंपस मैदान',
        'gallery_college_5': 'स्नातक तैयारी',
        
        // How we work
        'work_1_title': 'सहयोगात्मक',
        'work_1_desc': 'दैनिक स्टैंडअप, युगल प्रोग्रामिंग और कोड समीक्षा गुणवत्ता सुनिश्चित करते हैं।',
        'work_2_title': 'एजाइल',
        'work_2_desc': 'हम 2-सप्ताह के स्प्रिंट और निरंतर प्रतिक्रिया के साथ एजाइल पद्धति का पालन करते हैं।',
        'work_3_title': 'हमेशा सीखना',
        'work_3_desc': 'हम लगातार नई तकनीकें सीखते हैं और टीम के भीतर ज्ञान साझा करते हैं।',
        'work_4_title': 'उपयोगकर्ता-केंद्रित',
        'work_4_desc': 'हर सुविधा यह समझने से शुरू होती है कि उपयोगकर्ताओं को वास्तव में क्या चाहिए।',
        
        // Achievements
        'achievement_1': 'पंजीकृत श्रमिक',
        'achievement_2': 'नियोक्ता',
        'achievement_3': 'पूर्ण नौकरियां',
        'achievement_4': 'संतुष्टि दर',
        
        // Connect
        'github': 'GitHub',
        'linkedin': 'LinkedIn',
        'twitter': 'Twitter',
        'email': 'ईमेल',
        'team_email': 'team@shramikconnect.in'
    },
    mr: {
        'back': 'मागे',
        'language': 'भाषा',
        'theme': 'थीम',
        'light': 'हलका',
        'dark': 'गडद',
        'system': 'सिस्टम',
        'back_to_about': 'अबाउट वर परत जा',
        'hero_badge': 'सर्जनशील मने',
        'hero_title': 'आमच्या डेव्हलपर टीमला भेटा',
        'hero_description': 'सरकारी पॉलिटेक्निक खामगांवचे पाच उत्कट डेव्हलपर, Django, PostgreSQL आणि आधुनिक फ्रंटएंड तंत्रज्ञानासह श्रमिककनेक्ट तयार करीत आहेत।',
        'developers': 'डेव्हलपर',
        'founded': 'स्थापना',
        'users': 'वापरकर्ते',
        'meet_developers': 'डेव्हलपरशी भेटा',
        'meet_developers_sub': 'अधिक जाणून घेण्यासाठी कार्डवर क्लिक करा किंवा होवर करा',
        'our_journey': 'आमचा प्रवास',
        'our_journey_sub': 'कल्पनेपासून हजारोंची सेवा करणाऱ्या प्लॅटफॉर्मपर्यंत',
        'our_skills': 'आमची कौशल्ये',
        'our_skills_sub': 'अद्भुत अनुभव तयार करण्यासाठी आम्ही ज्या तंत्रज्ञानात प्रभुत्व मिळवले आहे',
        'developer_gallery': 'डेव्हलपर गॅलरी',
        'developer_gallery_sub': 'आमच्या प्रवासातील क्षण',
        'how_we_work': 'आम्ही कसे काम करतो',
        'how_we_work_sub': 'आमचा विकास तत्त्वज्ञान आणि कार्यप्रवाह',
        'our_achievements': 'आमची उपलब्धी',
        'our_achievements_sub': 'आम्ही एकत्रितपणे गाठलेले टप्पे',
        'connect_team_heading': 'टीमशी कनेक्ट व्हा',
        'connect_team_text': 'सोशल मीडियावर आम्हाला फॉलो करा किंवा ईमेलद्वारे संपर्क साधा',
        
        // Settings buttons
        'lang_en': 'English',
        'lang_hi': 'हिन्दी',
        'lang_mr': 'मराठी',
        'theme_light': 'हलका',
        'theme_dark': 'गडद',
        'theme_system': 'सिस्टम',

        // Nagesh
        'nagesh_first': 'नागेश',
        'nagesh_last': 'डाबेराव',
        'nagesh_name': 'नागेश डाबेराव',
        'nagesh_role_front': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'nagesh_role_back': 'फ्रंटएंड डेव्हलपर',
        'nagesh_desc': 'आधुनिक वेब तंत्रज्ञानासह प्रभावशाली डिजिटल सोल्यूशन्स तयार करणे। निर्बाध वापरकर्ता अनुभव तयार करण्यात तज्ञ।',
        'nagesh_tag1': 'React.js',
        'nagesh_tag2': 'UI/UX',
        'nagesh_tag3': 'JavaScript',
        
        // Rohan
        'rohan_first': 'रोहन',
        'rohan_last': 'धरपावर',
        'rohan_name': 'रोहन धरपावर',
        'rohan_role_front': 'सह-संस्थापक आणि बॅकएंड डेव्हलपर',
        'rohan_role_back': 'बॅकएंड डेव्हलपर',
        'rohan_desc': 'Django आणि PostgreSQL सह मजबूत, स्केलेबल बॅकएंड सिस्टम डिझाइन करणे। डेटाबेस आणि API चा उत्साही।',
        'rohan_tag1': 'Django',
        'rohan_tag2': 'Python',
        'rohan_tag3': 'PostgreSQL',
        
        // Shaan
        'shaan_first': 'शान',
        'shaan_last': 'शुक्ला',
        'shaan_name': 'शान शुक्ला',
        'shaan_role_front': 'संस्थापक आणि फुल स्टॅक डेव्हलपर',
        'shaan_role_back': 'फुल स्टॅक डेव्हलपर',
        'shaan_desc': 'फुल-स्टॅक डेव्हलपमेंटमध्ये कौशल्य असलेले दूरदर्शी नेते। कामगारांना संधींशी जोडणारे नाविन्यपूर्ण उपाय तयार करणे।',
        'shaan_tag1': 'Django',
        'shaan_tag2': 'React',
        'shaan_tag3': 'PostgreSQL',
        'shaan_tag4': 'सिस्टम डिझाइन',
        
        // Wasif
        'wasif_first': 'मोहम्मद',
        'wasif_last': 'वसीफ',
        'wasif_name': 'मोहम्मद वसीफ',
        'wasif_role_front': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'wasif_role_back': 'UI/UX डिझाइनर',
        'wasif_desc': 'तपशीलाकडे लक्ष देऊन सुंदर, अंतर्ज्ञानी इंटरफेस तयार करणे। प्रवेशयोग्यता आणि वापरकर्ता-केंद्रित डिझाइनवर केंद्रित।',
        'wasif_tag1': 'Figma',
        'wasif_tag2': 'Tailwind',
        'wasif_tag3': 'UI/UX',
        
        // Sumedh
        'sumedh_first': 'सुमेध',
        'sumedh_last': 'इंगळे',
        'sumedh_name': 'सुमेध इंगळे',
        'sumedh_role_front': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'sumedh_role_back': 'क्रिएटिव्ह डेव्हलपर',
        'sumedh_desc': 'कोडद्वारे सर्जनशील कल्पना जिवंत करणे। ॲनिमेशन, परस्परसंवाद आणि आधुनिक फ्रंटएंड फ्रेमवर्कमध्ये तज्ञ।',
        'sumedh_tag1': 'GSAP',
        'sumedh_tag2': 'Three.js',
        'sumedh_tag3': 'ॲनिमेशन',
        
        // Common
        'from_college': 'कडून',
        'gp_khamgaon': 'सरकारी पॉलिटेक्निक खामगांव',
        'know_more': 'अधिक जाणून घ्या',
        
        // Timeline
        'timeline_2023': '2023',
        'timeline_2023_title': 'पहिली भेट',
        'timeline_2023_desc': 'पाच विद्यार्थी सरकारी पॉलिटेक्निक खामगांव येथे भेटले आणि तंत्रज्ञानाबद्दलची त्यांची सामायिक आवड शोधली।',
        'timeline_2024': '2024',
        'timeline_2024_title': 'छोटे प्रकल्प',
        'timeline_2024_desc': 'लहान वेब प्रकल्पांवर सहयोग करण्यास सुरुवात केली, एक संघ म्हणून शिकणे आणि वाढणे।',
        'timeline_sep2025': 'सप्टेंबर 2025',
        'timeline_sep2025_title': 'कल्पना जन्माला आली',
        'timeline_sep2025_desc': 'श्रमिककनेक्टची कल्पना जन्माला आली - कामगारांना नियोक्त्यांशी जोडणारे व्यासपीठ।',
        'timeline_nov2025': 'नोव्हेंबर 2025',
        'timeline_nov2025_title': 'विकास सुरू',
        'timeline_nov2025_desc': 'Django, PostgreSQL आणि आधुनिक फ्रंटएंड तंत्रज्ञानासह बांधकाम सुरू केले।',
        'timeline_2026': '2026',
        'timeline_2026_title': 'चालू विकास',
        'timeline_2026_desc': 'सतत सुधारणा, वैशिष्ट्ये जोडणे आणि हजारो वापरकर्त्यांची सेवा करणे।',
        
        // Skills
        'frontend': 'फ्रंटएंड',
        'frontend_1': 'HTML5 आणि CSS3',
        'frontend_2': 'JavaScript (ES6+)',
        'frontend_3': 'React.js',
        'frontend_4': 'GSAP ॲनिमेशन',
        'backend': 'बॅकएंड',
        'backend_1': 'Django (Python)',
        'backend_2': 'Node.js',
        'backend_3': 'REST API',
        'backend_4': 'प्रमाणीकरण',
        'database': 'डेटाबेस',
        'database_1': 'PostgreSQL',
        'database_2': 'MongoDB',
        'database_3': 'डेटाबेस डिझाइन',
        'database_4': 'क्वेरी ऑप्टिमायझेशन',
        'devops': 'DevOps',
        'devops_1': 'Render होस्टिंग',
        'devops_2': 'Git आणि GitHub',
        'devops_3': 'CI/CD',
        'devops_4': 'SSL/TLS',
        
        // Gallery categories
        'gallery_meetings_title': 'संघ बैठका',
        'gallery_coding_title': 'कोडिंग सत्रे',
        'gallery_events_title': 'संघ कार्यक्रम',
        'gallery_college_title': 'कॉलेज जीवन',
        
        // Gallery slides
        'gallery_meeting_1': 'नियोजन सत्र - जानेवारी 2025',
        'gallery_meeting_2': 'स्प्रिंट नियोजन - मार्च 2025',
        'gallery_meeting_3': 'कोड पुनरावलोकन - मे 2025',
        'gallery_meeting_4': 'रणनीती बैठक - जुलै 2025',
        'gallery_meeting_5': 'पूर्वव्यापी - सप्टेंबर 2025',
        'gallery_coding_1': 'जोडी प्रोग्रामिंग - फेब्रुवारी 2025',
        'gallery_coding_2': 'डीबगिंग सत्र - एप्रिल 2025',
        'gallery_coding_3': 'रात्रभर कोडिंग - जून 2025',
        'gallery_coding_4': 'कोड पुनरावलोकन - ऑगस्ट 2025',
        'gallery_coding_5': 'अंतिम चाचणी - ऑक्टोबर 2025',
        'gallery_event_1': 'लॉन्च पार्टी - जून 2025',
        'gallery_event_2': 'संघ दुपारचे जेवण - ऑगस्ट 2025',
        'gallery_event_3': 'वाढदिवस साजरा - सप्टेंबर 2025',
        'gallery_event_4': 'हॅकाथॉन विजय - ऑक्टोबर 2025',
        'gallery_event_5': 'वर्ष अखेर पार्टी - डिसेंबर 2025',
        'gallery_event_6': 'संघ सहल - जानेवारी 2026',
        'gallery_college_1': 'जीपी खामगांव येथे पहिला दिवस',
        'gallery_college_2': 'ग्रंथालय सत्र',
        'gallery_college_3': 'प्रयोगशाळेतील काम',
        'gallery_college_4': 'कॅम्पस मैदान',
        'gallery_college_5': 'पदवीपूर्व तयारी',
        
        // How we work
        'work_1_title': 'सहयोगी',
        'work_1_desc': 'दैनिक स्टँडअप, जोडी प्रोग्रामिंग आणि कोड पुनरावलोकन गुणवत्ता सुनिश्चित करतात।',
        'work_2_title': 'अ‍ॅजाइल',
        'work_2_desc': 'आम्ही 2-आठवड्यांच्या स्प्रिंट आणि सतत अभिप्रायासह अ‍ॅजाइल पद्धतीचे अनुसरण करतो।',
        'work_3_title': 'नेहमी शिकत',
        'work_3_desc': 'आम्ही सतत नवीन तंत्रज्ञान शिकतो आणि संघात ज्ञान सामायिक करतो।',
        'work_4_title': 'वापरकर्ता-केंद्रित',
        'work_4_desc': 'प्रत्येक वैशिष्ट्य वापरकर्त्यांना खरोखर काय हवे आहे हे समजून घेण्यापासून सुरू होते।',
        
        // Achievements
        'achievement_1': 'नोंदणीकृत कामगार',
        'achievement_2': 'नियोक्ते',
        'achievement_3': 'पूर्ण झालेल्या नोकऱ्या',
        'achievement_4': 'समाधान दर',
        
        // Connect
        'github': 'GitHub',
        'linkedin': 'LinkedIn',
        'twitter': 'Twitter',
        'email': 'ईमेल',
        'team_email': 'team@shramikconnect.in'
    }
};
// [LANG SWITCH] translations object - end

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
let currentLanguage = 'en';

function applyLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key] !== undefined) {
            element.textContent = translation[key];
        }
    });

    // Update active language button
    languageOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLang', lang);
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// THEME MANAGEMENT
// ============================================
let currentTheme = 'light';
const ALL_THEMES = ['light', 'dark', 'system'];

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
}

function closeSettingsDropdown() {
    settingsDropdown.classList.remove('active');
}

function closeSettingsOnClickOutside(event) {
    if (!settingsIconRight.contains(event.target) && !settingsDropdown.contains(event.target)) {
        closeSettingsDropdown();
    }
}

// ============================================
// CAROUSEL STATE
// ============================================
const cards = Array.from(document.querySelectorAll('.team-card'));
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const track = document.querySelector('.carousel-track');
const knowMoreBtns = document.querySelectorAll('.know-more-btn');

let positions = [-2, -1, 0, 1, 2];
let isAnimating = false;
let autoPlayInterval = null;

// ============================================
// CAROUSEL FUNCTIONS
// ============================================
function updateCards() {
    cards.forEach((card, index) => {
        card.setAttribute('data-pos', positions[index]);
    });
}

function moveRight() {
    if (isAnimating) return;
    isAnimating = true;
    positions.unshift(positions.pop());
    updateCards();
    setTimeout(() => isAnimating = false, 800);
}

function moveLeft() {
    if (isAnimating) return;
    isAnimating = true;
    positions.push(positions.shift());
    updateCards();
    setTimeout(() => isAnimating = false, 800);
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        const anyCardFlipped = cards.some(card => card.classList.contains('flipped'));
        if (!anyCardFlipped && !isAnimating) {
            moveLeft();
        }
    }, 3000);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// ============================================
// CARD FLIP CONTROL
// ============================================
function checkAndResumeAutoPlay() {
    const anyCardFlipped = cards.some(c => c.classList.contains('flipped'));
    if (!anyCardFlipped) startAutoPlay();
}

function toggleDeveloperCard(card) {
    if (card.getAttribute('data-pos') !== '0') return;
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        checkAndResumeAutoPlay();
    } else {
        card.classList.add('flipped');
        stopAutoPlay();
    }
}

function initCardFlip() {
    cards.forEach(card => {
        let justFlippedByHover = false;

        card.addEventListener('mouseenter', () => {
            justFlippedByHover = true;
            toggleDeveloperCard(card);
            setTimeout(() => { justFlippedByHover = false; }, 300);
        });

        card.addEventListener('click', () => {
            if (justFlippedByHover) return;
            toggleDeveloperCard(card);
        });
    });
}

// ============================================
// KNOW MORE BUTTON HANDLER
// ============================================
function initKnowMoreButtons() {
    knowMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = ''; }, 150);
        });
    });
}

// ============================================
// CAROUSEL EVENT LISTENERS (< > buttons + drag + swipe)
// ============================================
function setupCarouselListeners() {
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const anyFlipped = cards.some(c => c.classList.contains('flipped'));
            if (!anyFlipped) moveLeft();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const anyFlipped = cards.some(c => c.classList.contains('flipped'));
            if (!anyFlipped) moveRight();
        });
    }

    // Mouse drag
    let isDragging = false;
    let dragStartX = 0;
    let dragCurrentX = 0;

    if (track) {
        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX;
            dragCurrentX = e.clientX;
            track.style.cursor = 'grabbing';
            e.preventDefault();
        });
    }

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        dragCurrentX = e.clientX;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        if (track) track.style.cursor = '';
        const delta = dragCurrentX - dragStartX;
        const anyFlipped = cards.some(c => c.classList.contains('flipped'));
        if (!anyFlipped) {
            if (delta < -50) moveRight();
            else if (delta > 50) moveLeft();
        }
    });

    // Touch swipe
    let touchStartX = 0;

    if (track) {
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const delta = touchEndX - touchStartX;
            const anyFlipped = cards.some(c => c.classList.contains('flipped'));
            if (!anyFlipped) {
                if (delta < -50) moveRight();
                else if (delta > 50) moveLeft();
            }
        }, { passive: true });
    }
}

// ============================================
// SLIDESHOW FUNCTIONS
// ============================================
function initSlideshows() {
    const slideshowContainers = document.querySelectorAll('.gallery-slideshow');
    
    slideshowContainers.forEach((container) => {
        const slides = container.querySelectorAll('.slide');
        const dots = container.querySelectorAll('.dot');
        const prevBtn = container.querySelector('.slideshow-prev');
        const nextBtn = container.querySelector('.slideshow-next');
        let currentIndex = 0;
        let autoSlideInterval;

        // Function to show slide
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        };

        // Next slide
        const nextSlide = () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) nextIndex = 0;
            showSlide(nextIndex);
        };

        // Previous slide
        const prevSlide = () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = slides.length - 1;
            showSlide(prevIndex);
        };

        // Start auto slide
        const startAutoSlide = () => {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 3000);
        };

        // Stop auto slide
        const stopAutoSlide = () => {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
        };

        // Add event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }

        // Dot click handlers
        dots.forEach((dot, dotIndex) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(dotIndex);
                startAutoSlide();
            });
        });

        // Pause on hover
        container.addEventListener('mouseenter', stopAutoSlide);
        container.addEventListener('mouseleave', startAutoSlide);

        // Start auto slide
        startAutoSlide();
    });
}

// ============================================
// AOS INIT
// ============================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    }
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
    const heroBg = document.querySelector('.hero-bg-pattern');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    settingsIconRight.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    languageOptions.forEach(btn => {
        btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang));
    });

    themeOptions.forEach(btn => {
        btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme));
    });

    if (smallBackBtn) {
        smallBackBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSettingsDropdown();
    });

    window.addEventListener('resize', () => {
        if (settingsDropdown.classList.contains('active')) closeSettingsDropdown();
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    const savedLanguage = localStorage.getItem('preferredLang') || 'en';
    handleLanguageChange(savedLanguage);

    initTheme();
    initAOS();
    initParallax();
    initCardFlip();
    initKnowMoreButtons();
    initSlideshows();
    setupEventListeners();
    setupCarouselListeners();
    updateCards();
    startAutoPlay();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}