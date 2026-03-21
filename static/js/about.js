/**
 * ABOUT PAGE - COMPLETE WITH CARD FLIP AND AUTO-ROTATION CONTROL
 */

// ============================================
// DOM ELEMENTS
// ============================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarSettingsIcon = document.getElementById('sidebarSettingsIcon');
const settingsDropdown = document.getElementById('settingsDropdown');
const homeLink = document.getElementById('homeLink');
const navHome = document.getElementById('navHome');
const logoContainer = document.getElementById('logoContainer');
const languageOptions = document.querySelectorAll('.language-option');
const themeOptions = document.querySelectorAll('.theme-option');
const statNumbers = document.querySelectorAll('.stat-number');
const revealElements = document.querySelectorAll('.reveal');

// Video elements
const video = document.querySelector('.hero-video');
const videoFallback = document.getElementById('videoFallback');

// Developer cards
const cards = Array.from(document.querySelectorAll('.team-card'));
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const track = document.querySelector('.carousel-track');

// Mentor card
const mentorCard = document.querySelector('.mentor-card');

// Know More buttons
const knowMoreBtns = document.querySelectorAll('.know-more-btn');

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
let currentTheme = 'light';
const ALL_THEMES = ["light", "dark", "system"];

// Carousel state
let positions = [-2, -1, 0, 1, 2];
let isAnimating = false;
let autoPlayInterval = null;

// ============================================
// FULL TRANSLATIONS (with added keys for social and skill tags)
// ============================================
const translations = {
    en: {
        // Nav & sidebar
        'home': 'Home', 'help': 'Help', 'about': 'About', 'menu': 'Menu',
        'settings': 'Settings', 'help_contact': 'Help & Contact',
        'terms_conditions': 'Terms & Conditions', 'privacy_policy': 'Privacy Policy',
        'language': 'Language', 'theme': 'Theme', 'light': 'Light', 'dark': 'Dark', 'system': 'System',
        // CTA
        'cta_title': 'Ready to Get Started?',
        'join_worker': 'Join as Worker',
        'hire_employer': 'Hire as Employer',
        // Mission & Vision
        'mission_title': 'Our Mission',
        'mission_desc': 'Empowering India\'s informal workforce by providing dignified job opportunities, fair wages, and skill development through technology-driven solutions that bridge the gap between workers and verified employers.',
        'mission_stat1': '10K+ Workers Placed',
        'mission_stat2': '50+ Cities Covered',
        'vision_title': 'Our Vision',
        'vision_desc': 'To create a future where every Indian worker has access to meaningful employment opportunities, financial independence, and social security, while employers can easily find skilled, trustworthy talent in their local communities.',
        'vision_stat1': '2025: 1M Workers',
        'vision_stat2': '100% Verified',
        // Platform
        'platform_title': 'What is ShramikConnect?',
        'platform_desc': 'We bridge the gap between India\'s informal workforce and verified employers through technology, transparency, and trust. Our platform makes hiring simple, safe, and accessible for everyone.',
        'feature_app': 'Easy-to-use mobile app',
        'feature_verify': 'Verified profiles with background checks',
        'feature_jobs': 'Instant job matching',
        'feature_pay': 'Secure digital payments',
        // Stats
        'stat_workers': 'Workers', 'stat_employers': 'Employers',
        'stat_jobs': 'Jobs', 'stat_satisfaction': 'Satisfaction',
        // Why choose
        'why_title': 'Why Choose ShramikConnect',
        'feature1_title': 'Verified Workers',
        'feature1_desc': 'Every worker undergoes multi-step verification for authenticity and skill.',
        'feature2_title': 'Chatbot Support',
        'feature2_desc': '24/7 AI-powered assistance for instant answers and guidance.',
        'feature3_title': 'Transparent Ratings',
        'feature3_desc': 'Genuine reviews from both sides build a trustworthy community.',
        'feature4_title': '24/7 Support',
        'feature4_desc': 'We\'re always here to help, with multi-lingual support and quick resolution.',
        // Social connect (new keys)
        'social_instagram': '@shramikconnect',
        'social_facebook': '/shramikconnect',
        'social_twitter': '@shramikconnect',
        'social_youtube': '/ShramikConnect',
        'social_linkedin': 'company/shramikconnect',
        'social_email': 'hello@shramikconnect',
        // Mentor section
        'mentor_section_title': 'Our',
        'mentor_highlight': 'Mentor',
        'mentor_subtitle': 'Guiding us with wisdom and experience',
        'mentor_name': 'Niraj Nake',
        'mentor_role': 'Lecturer and Mentor',
        'mentor_tag': 'Passionate Educator',
        'from_label': 'From',
        'mentor_college': 'Government Polytechnic Khamgaon',
        'mentor_back_desc': 'Dedicated mentor with 10+ years of experience in teaching computer science. Expert in Operating Systems, C, and C++ programming languages.',
        'mentor_skill1': 'Operating System',
        'mentor_skill2': 'C',
        'mentor_skill3': 'C++',
        'mentor_para_title': 'About Niraj Nake',
        'mentor_para1': 'Niraj Nake is a dedicated lecturer and mentor at Government Polytechnic Khamgaon, where he has been teaching computer science for over a decade. His expertise lies in Operating Systems, C, and C++ programming languages.',
        'mentor_para2': 'As a mentor to the ShramikConnect developer team, he has guided them through complex technical challenges, helping them build a robust and scalable platform. His teaching philosophy emphasizes practical learning and problem-solving skills.',
        'mentor_para3': 'Under his mentorship, the team has grown from five college students to confident developers capable of building real-world applications. He continues to inspire and guide them in their journey of innovation and technological excellence.',
        'mentor_stat1': 'Years Experience',
        'mentor_stat2': 'Students Mentored',
        'mentor_stat3': 'Tech Stacks',
        // Developers section
        'developers_title': 'Meet Our Developers',
        'gp_khamgaon': 'Government Polytechnic Khamgaon',
        'know_more_btn': 'Know more',
        'know_more': 'Know More About Developers',
        // Developer roles & descriptions
        'nagesh_role': 'Co-Founder & Frontend Developer',
        'nagesh_tag': 'Passionate Software Developer',
        'nagesh_desc': 'Focused on building impactful digital solutions, solving real-world problems, and continuously growing in the world of technology and innovation.',
        'rohan_role': 'Co-Founder & Backend Developer',
        'rohan_tag': 'Passionate Software Developer',
        'rohan_desc': 'Focused on building impactful digital solutions, solving real-world problems, and continuously growing in the world of technology and innovation.',
        'shaan_role': 'Founder & Full Stack Developer',
        'shaan_tag': 'Lead Architect & Founder',
        'shaan_desc': 'Visionary leader with expertise in full-stack development. Creating innovative solutions that connect workers with opportunities.',
        'wasif_role': 'Co-Founder & Frontend Developer',
        'wasif_tag': 'UI/UX Specialist',
        'wasif_desc': 'Crafting beautiful, intuitive interfaces with attention to detail. Focused on accessibility and user-centered design.',
        'sumedh_role': 'Co-Founder & Frontend Developer',
        'sumedh_tag': 'Creative Developer',
        'sumedh_desc': 'Bringing creative ideas to life through code. Expert in animations, interactions, and modern frontend frameworks.',
        // Developer skill tags (new keys)
        'nagesh_skill1': 'cyber security',
        'nagesh_skill2': 'ai',
        'nagesh_skill3': 'ml',
        'rohan_skill1': 'cyber security',
        'rohan_skill2': 'ai',
        'rohan_skill3': 'ml',
        'shaan_skill1': 'Django',
        'shaan_skill2': 'React',
        'shaan_skill3': 'PostgreSQL',
        'wasif_skill1': 'Figma',
        'wasif_skill2': 'Tailwind',
        'wasif_skill3': 'UI/UX',
        'sumedh_skill1': 'GSAP',
        'sumedh_skill2': 'Three.js',
        'sumedh_skill3': 'Animations',
        // Footer
        'footer_platform': 'Platform', 'footer_workers': 'For Workers', 'footer_employers': 'For Employers',
        'footer_company': 'Company', 'footer_how': 'How It Works',
        'footer_support': 'Support',
        'tagline': 'Connecting hands to work',
        'copyright': '© 2025 ShramikConnect. All rights reserved.',
        'privacy': 'Privacy Policy', 'terms': 'Terms & Conditions'
    },
    hi: {
        // Nav & sidebar
        'home': 'होम', 'help': 'सहायता', 'about': 'के बारे में', 'menu': 'मेनू',
        'settings': 'सेटिंग्स', 'help_contact': 'सहायता और संपर्क',
        'terms_conditions': 'नियम और शर्तें', 'privacy_policy': 'गोपनीयता नीति',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हल्का', 'dark': 'गहरा', 'system': 'सिस्टम',
        // CTA
        'cta_title': 'शुरू करने के लिए तैयार हैं?',
        'join_worker': 'कार्यकर्ता के रूप में शामिल हों',
        'hire_employer': 'नियोक्ता के रूप में किराए पर लें',
        // Mission & Vision
        'mission_title': 'हमारा मिशन',
        'mission_desc': 'भारत के अनौपचारिक कार्यबल को सम्मानजनक अवसरों, उचित मजदूरी और कौशल विकास के माध्यम से सशक्त बनाना।',
        'mission_stat1': '10 हज़ार+ श्रमिक नियोजित',
        'mission_stat2': '50+ शहर कवर किए',
        'vision_title': 'हमारा दृष्टिकोण',
        'vision_desc': 'एक ऐसा भविष्य बनाना जहाँ हर भारतीय श्रमिक को सार्थक रोजगार, वित्तीय स्वतंत्रता और सामाजिक सुरक्षा मिले।',
        'vision_stat1': '2025: 10 लाख श्रमिक',
        'vision_stat2': '100% सत्यापित',
        // Platform
        'platform_title': 'श्रमिककनेक्ट क्या है?',
        'platform_desc': 'हम प्रौद्योगिकी, पारदर्शिता और विश्वास के माध्यम से भारत के अनौपचारिक कार्यबल और सत्यापित नियोक्ताओं के बीच की खाई को पाटते हैं।',
        'feature_app': 'उपयोग में आसान मोबाइल ऐप',
        'feature_verify': 'बैकग्राउंड चेक के साथ सत्यापित प्रोफाइल',
        'feature_jobs': 'तुरंत जॉब मैचिंग',
        'feature_pay': 'सुरक्षित डिजिटल भुगतान',
        // Stats
        'stat_workers': 'कार्यकर्ता', 'stat_employers': 'नियोक्ता',
        'stat_jobs': 'नौकरियां', 'stat_satisfaction': 'संतुष्टि',
        // Why choose
        'why_title': 'श्रमिककनेक्ट क्यों चुनें',
        'feature1_title': 'सत्यापित कार्यकर्ता',
        'feature1_desc': 'प्रत्येक कार्यकर्ता बहु-चरणीय सत्यापन से गुजरता है।',
        'feature2_title': 'चैटबॉट समर्थन',
        'feature2_desc': 'त्वरित उत्तर के लिए 24/7 AI-संचालित सहायता।',
        'feature3_title': 'पारदर्शी रेटिंग',
        'feature3_desc': 'दोनों पक्षों की वास्तविक समीक्षा एक भरोसेमंद समुदाय बनाती है।',
        'feature4_title': '24/7 समर्थन',
        'feature4_desc': 'हम हमेशा बहुभाषी समर्थन के साथ मदद के लिए यहाँ हैं।',
        // Social connect (new keys)
        'social_instagram': '@shramikconnect',
        'social_facebook': '/shramikconnect',
        'social_twitter': '@shramikconnect',
        'social_youtube': '/ShramikConnect',
        'social_linkedin': 'company/shramikconnect',
        'social_email': 'hello@shramikconnect',
        // Mentor section
        'mentor_section_title': 'हमारे',
        'mentor_highlight': 'मेंटर',
        'mentor_subtitle': 'ज्ञान और अनुभव के साथ मार्गदर्शन करते हैं',
        'mentor_name': 'निरज नाके',
        'mentor_role': 'व्याख्याता और मेंटर',
        'mentor_tag': 'समर्पित शिक्षाविद्',
        'from_label': 'से',
        'mentor_college': 'शासकीय पॉलिटेक्निक खामगांव',
        'mentor_back_desc': 'कंप्यूटर विज्ञान पढ़ाने में 10+ वर्षों के अनुभव के साथ समर्पित मेंटर। ऑपरेटिंग सिस्टम, C और C++ प्रोग्रामिंग भाषाओं में विशेषज्ञ।',
        'mentor_skill1': 'ऑपरेटिंग सिस्टम',
        'mentor_skill2': 'C',
        'mentor_skill3': 'C++',
        'mentor_para_title': 'निरज नाके के बारे में',
        'mentor_para1': 'निरज नाके शासकीय पॉलिटेक्निक खामगांव में एक समर्पित व्याख्याता और मेंटर हैं, जहाँ वे एक दशक से अधिक समय से कंप्यूटर विज्ञान पढ़ा रहे हैं।',
        'mentor_para2': 'श्रमिककनेक्ट डेवलपर टीम के मेंटर के रूप में, उन्होंने उन्हें जटिल तकनीकी चुनौतियों से गुजारा है, जिससे एक मजबूत प्लेटफॉर्म बनाने में मदद मिली।',
        'mentor_para3': 'उनकी मेंटरशिप में, टीम पाँच कॉलेज छात्रों से आत्मविश्वासी डेवलपर्स बन गई है जो वास्तविक दुनिया के एप्लिकेशन बना सकते हैं।',
        'mentor_stat1': 'वर्षों का अनुभव',
        'mentor_stat2': 'छात्रों को मार्गदर्शन',
        'mentor_stat3': 'तकनीकी स्टैक',
        // Developers section
        'developers_title': 'हमारे डेवलपर्स से मिलें',
        'gp_khamgaon': 'शासकीय पॉलिटेक्निक खामगांव',
        'know_more_btn': 'और जानें',
        'know_more': 'डेवलपर्स के बारे में और जानें',
        // Developer roles & descriptions
        'nagesh_role': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'nagesh_tag': 'समर्पित सॉफ्टवेयर डेवलपर',
        'nagesh_desc': 'प्रभावशाली डिजिटल समाधान बनाने, वास्तविक दुनिया की समस्याओं को हल करने पर ध्यान केंद्रित।',
        'rohan_role': 'सह-संस्थापक और बैकएंड डेवलपर',
        'rohan_tag': 'समर्पित सॉफ्टवेयर डेवलपर',
        'rohan_desc': 'प्रभावशाली डिजिटल समाधान बनाने, वास्तविक दुनिया की समस्याओं को हल करने पर ध्यान केंद्रित।',
        'shaan_role': 'संस्थापक और फुल स्टैक डेवलपर',
        'shaan_tag': 'लीड आर्किटेक्ट और संस्थापक',
        'shaan_desc': 'फुल-स्टैक विकास में विशेषज्ञता के साथ दूरदर्शी नेता। श्रमिकों को अवसरों से जोड़ने के नवोन्मेषी समाधान।',
        'wasif_role': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'wasif_tag': 'UI/UX विशेषज्ञ',
        'wasif_desc': 'विवरण पर ध्यान देकर सुंदर, सहज इंटरफेस तैयार करना।',
        'sumedh_role': 'सह-संस्थापक और फ्रंटएंड डेवलपर',
        'sumedh_tag': 'क्रिएटिव डेवलपर',
        'sumedh_desc': 'कोड के माध्यम से रचनात्मक विचारों को जीवंत बनाना। एनिमेशन और आधुनिक फ्रेमवर्क में विशेषज्ञ।',
        // Developer skill tags (new keys)
        'nagesh_skill1': 'साइबर सुरक्षा',
        'nagesh_skill2': 'एआई',
        'nagesh_skill3': 'एमएल',
        'rohan_skill1': 'साइबर सुरक्षा',
        'rohan_skill2': 'एआई',
        'rohan_skill3': 'एमएल',
        'shaan_skill1': 'Django',
        'shaan_skill2': 'React',
        'shaan_skill3': 'PostgreSQL',
        'wasif_skill1': 'Figma',
        'wasif_skill2': 'Tailwind',
        'wasif_skill3': 'UI/UX',
        'sumedh_skill1': 'GSAP',
        'sumedh_skill2': 'Three.js',
        'sumedh_skill3': 'एनिमेशन',
        // Footer
        'footer_platform': 'प्लेटफॉर्म', 'footer_workers': 'श्रमिकों के लिए', 'footer_employers': 'नियोक्ताओं के लिए',
        'footer_company': 'कंपनी', 'footer_how': 'यह कैसे काम करता है',
        'footer_support': 'सहायता',
        'tagline': 'काम करने के लिए हाथ जोड़ना',
        'copyright': '© 2025 श्रमिककनेक्ट। सर्वाधिकार सुरक्षित।',
        'privacy': 'गोपनीयता नीति', 'terms': 'नियम और शर्तें'
    },
    mr: {
        // Nav & sidebar
        'home': 'होम', 'help': 'मदत', 'about': 'विषयी', 'menu': 'मेनू',
        'settings': 'सेटिंग्ज', 'help_contact': 'मदत आणि संपर्क',
        'terms_conditions': 'अटी आणि नियम', 'privacy_policy': 'गोपनीयता धोरण',
        'language': 'भाषा', 'theme': 'थीम', 'light': 'हलका', 'dark': 'गडद', 'system': 'सिस्टम',
        // CTA
        'cta_title': 'प्रारंभ करण्यास तयार आहात?',
        'join_worker': 'कामगार म्हणून सामील व्हा',
        'hire_employer': 'नियोक्ता म्हणून नियुक्त करा',
        // Mission & Vision
        'mission_title': 'आमचे ध्येय',
        'mission_desc': 'भारताच्या अनौपचारिक कार्यबलाला सन्मानजनक संधी, योग्य वेतन आणि कौशल्य विकासाद्वारे सक्षम करणे।',
        'mission_stat1': '10 हजार+ कामगार नियोजित',
        'mission_stat2': '50+ शहरे समाविष्ट',
        'vision_title': 'आमचे दृष्टिकोन',
        'vision_desc': 'असे भविष्य निर्माण करणे जिथे प्रत्येक भारतीय कामगाराला अर्थपूर्ण रोजगार, आर्थिक स्वातंत्र्य आणि सामाजिक सुरक्षा मिळेल।',
        'vision_stat1': '2025: 10 लाख कामगार',
        'vision_stat2': '100% सत्यापित',
        // Platform
        'platform_title': 'श्रमिककनेक्ट म्हणजे काय?',
        'platform_desc': 'आम्ही तंत्रज्ञान, पारदर्शकता आणि विश्वासाद्वारे भारतातील अनौपचारिक कार्यबल आणि सत्यापित नियोक्त्यांमधील दरी कमी करतो।',
        'feature_app': 'वापरण्यास सोपी मोबाइल ॲप',
        'feature_verify': 'बॅकग्राउंड तपासणीसह सत्यापित प्रोफाइल',
        'feature_jobs': 'त्वरित नोकरी जुळवणी',
        'feature_pay': 'सुरक्षित डिजिटल पेमेंट',
        // Stats
        'stat_workers': 'कामगार', 'stat_employers': 'नियोक्ते',
        'stat_jobs': 'नोकऱ्या', 'stat_satisfaction': 'समाधान',
        // Why choose
        'why_title': 'श्रमिककनेक्ट का निवडावे',
        'feature1_title': 'सत्यापित कामगार',
        'feature1_desc': 'प्रत्येक कामगार बहु-चरणीय सत्यापन करतो।',
        'feature2_title': 'चॅटबॉट समर्थन',
        'feature2_desc': 'त्वरित उत्तरांसाठी 24/7 AI-शक्तीवर चालणारी मदत।',
        'feature3_title': 'पारदर्शक रेटिंग',
        'feature3_desc': 'दोन्ही बाजूंच्या वास्तविक पुनरावलोकने विश्वासार्ह समुदाय तयार करतात।',
        'feature4_title': '24/7 समर्थन',
        'feature4_desc': 'आम्ही नेहमी बहुभाषिक समर्थनासह मदतीसाठी येथे आहोत।',
        // Social connect (new keys)
        'social_instagram': '@shramikconnect',
        'social_facebook': '/shramikconnect',
        'social_twitter': '@shramikconnect',
        'social_youtube': '/ShramikConnect',
        'social_linkedin': 'company/shramikconnect',
        'social_email': 'hello@shramikconnect',
        // Mentor section
        'mentor_section_title': 'आमचे',
        'mentor_highlight': 'मार्गदर्शक',
        'mentor_subtitle': 'ज्ञान आणि अनुभवाने मार्गदर्शन करतात',
        'mentor_name': 'निरज नाके',
        'mentor_role': 'व्याख्याता आणि मार्गदर्शक',
        'mentor_tag': 'समर्पित शिक्षक',
        'from_label': 'कडून',
        'mentor_college': 'शासकीय पॉलिटेक्निक खामगाव',
        'mentor_back_desc': 'संगणक विज्ञान शिकवण्याचा 10+ वर्षांचा अनुभव असलेले समर्पित मार्गदर्शक। ऑपरेटिंग सिस्टम, C आणि C++ मध्ये तज्ञ।',
        'mentor_skill1': 'ऑपरेटिंग सिस्टम',
        'mentor_skill2': 'C',
        'mentor_skill3': 'C++',
        'mentor_para_title': 'निरज नाके बद्दल',
        'mentor_para1': 'निरज नाके शासकीय पॉलिटेक्निक खामगाव येथे समर्पित व्याख्याता आणि मार्गदर्शक आहेत, जिथे ते एक दशकाहून अधिक काळ संगणक विज्ञान शिकवत आहेत।',
        'mentor_para2': 'श्रमिककनेक्ट डेव्हलपर टीमचे मार्गदर्शक म्हणून, त्यांनी त्यांना जटिल तांत्रिक आव्हानांमधून मार्गदर्शन केले।',
        'mentor_para3': 'त्यांच्या मार्गदर्शनाखाली, संघ पाच महाविद्यालयीन विद्यार्थ्यांपासून वास्तविक जगातील ॲप्लिकेशन बनवणाऱ्या आत्मविश्वासू डेव्हलपर्स बनला आहे।',
        'mentor_stat1': 'वर्षांचा अनुभव',
        'mentor_stat2': 'विद्यार्थ्यांना मार्गदर्शन',
        'mentor_stat3': 'तंत्रज्ञान स्टॅक',
        // Developers section
        'developers_title': 'आमच्या डेव्हलपरशी भेटा',
        'gp_khamgaon': 'शासकीय पॉलिटेक्निक खामगाव',
        'know_more_btn': 'अधिक जाणून घ्या',
        'know_more': 'डेव्हलपर बद्दल अधिक जाणून घ्या',
        // Developer roles & descriptions
        'nagesh_role': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'nagesh_tag': 'समर्पित सॉफ्टवेअर डेव्हलपर',
        'nagesh_desc': 'प्रभावशाली डिजिटल समाधाने तयार करण्यावर, वास्तविक जगातील समस्या सोडवण्यावर लक्ष केंद्रित।',
        'rohan_role': 'सह-संस्थापक आणि बॅकएंड डेव्हलपर',
        'rohan_tag': 'समर्पित सॉफ्टवेअर डेव्हलपर',
        'rohan_desc': 'प्रभावशाली डिजिटल समाधाने तयार करण्यावर, वास्तविक जगातील समस्या सोडवण्यावर लक्ष केंद्रित।',
        'shaan_role': 'संस्थापक आणि फुल स्टॅक डेव्हलपर',
        'shaan_tag': 'लीड आर्किटेक्ट आणि संस्थापक',
        'shaan_desc': 'फुल-स्टॅक डेव्हलपमेंटमध्ये तज्ञता असलेले दूरदर्शी नेते। कामगारांना संधींशी जोडणारे नाविन्यपूर्ण उपाय।',
        'wasif_role': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'wasif_tag': 'UI/UX तज्ञ',
        'wasif_desc': 'तपशीलांकडे लक्ष देऊन सुंदर, सहज इंटरफेस तयार करणे।',
        'sumedh_role': 'सह-संस्थापक आणि फ्रंटएंड डेव्हलपर',
        'sumedh_tag': 'क्रिएटिव्ह डेव्हलपर',
        'sumedh_desc': 'कोडद्वारे सर्जनशील कल्पना जिवंत करणे। ॲनिमेशन आणि आधुनिक फ्रेमवर्कमध्ये तज्ञ।',
        // Developer skill tags (new keys)
        'nagesh_skill1': 'सायबर सुरक्षा',
        'nagesh_skill2': 'एआय',
        'nagesh_skill3': 'एमएल',
        'rohan_skill1': 'सायबर सुरक्षा',
        'rohan_skill2': 'एआय',
        'rohan_skill3': 'एमएल',
        'shaan_skill1': 'Django',
        'shaan_skill2': 'React',
        'shaan_skill3': 'PostgreSQL',
        'wasif_skill1': 'Figma',
        'wasif_skill2': 'Tailwind',
        'wasif_skill3': 'UI/UX',
        'sumedh_skill1': 'GSAP',
        'sumedh_skill2': 'Three.js',
        'sumedh_skill3': 'अ‍ॅनिमेशन',
        // Footer
        'footer_platform': 'प्लॅटफॉर्म', 'footer_workers': 'कामगारांसाठी', 'footer_employers': 'नियोक्त्यांसाठी',
        'footer_company': 'कंपनी', 'footer_how': 'हे कसे कार्य करते',
        'footer_support': 'समर्थन',
        'tagline': 'काम करण्यासाठी हात जोडणे',
        'copyright': '© 2025 श्रमिककनेक्ट. सर्व हक्क राखीव.',
        'privacy': 'गोपनीयता धोरण', 'terms': 'अटी आणि नियम'
    }
};

// ============================================
// VIDEO HANDLING (CHANGE 2: Play once per page load)
// ============================================
function handleVideoAutoplay() {
    if (!video) return;

    // Play video only once per page load — remove loop attribute (already removed in HTML)
    // Stop video when it ends
    video.addEventListener('ended', () => {
        video.pause();
        video.currentTime = video.duration; // stay on last frame
        if (videoFallback) {
            // Optionally show fallback after video ends — leave hidden to keep last frame
        }
    });

    video.play().catch(() => {
        if (videoFallback) {
            videoFallback.classList.add('active');
            video.style.display = 'none';
        }
    });

    video.addEventListener('error', () => {
        if (videoFallback) {
            videoFallback.classList.add('active');
            video.style.display = 'none';
        }
    });
}

// ============================================
// LANGUAGE FUNCTIONS (CHANGE 1: Full page language switching)
// ============================================
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
}

function handleLanguageChange(lang) {
    currentLanguage = lang;
    localStorage.setItem('helpLanguage', lang);
    languageOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    applyLanguage(lang);
    closeSettingsDropdown();
}

// ============================================
// THEME FUNCTIONS
// ============================================
function applyTheme(theme) {
    document.body.classList.remove(...ALL_THEMES);
    document.body.classList.add(theme);
    localStorage.setItem("selectedTheme", theme);
    currentTheme = theme;
    themeOptions.forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme));
}

function getSystemDefaultTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme() {
    const saved = localStorage.getItem("selectedTheme");
    if (saved && ALL_THEMES.includes(saved)) applyTheme(saved);
    else applyTheme(getSystemDefaultTheme());
}

function handleThemeChange(theme) {
    if (ALL_THEMES.includes(theme)) applyTheme(theme);
    closeSettingsDropdown();
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function toggleSettingsDropdown(e) {
    e.stopPropagation();
    settingsDropdown.classList.toggle('active');
}
function closeSettingsDropdown() { settingsDropdown.classList.remove('active'); }
function closeSettingsOnClickOutside(e) {
    if (!sidebarSettingsIcon.contains(e.target) && !settingsDropdown.contains(e.target)) closeSettingsDropdown();
}

// ============================================
// SIDEBAR & NAVIGATION
// ============================================
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeSettingsDropdown();
}

function setupNavigation() {
    // Get the previous page from localStorage
    let previousPage = localStorage.getItem('previousPage');
    
    // If no previous page exists, go to homepage
    if (!previousPage) {
        previousPage = '/';
    }
    
    const homeElements = [homeLink, navHome, logoContainer];
    
    homeElements.forEach(el => {
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = previousPage;
            });
        }
    });
}

// ============================================
// COUNT-UP STATS
// ============================================
function startCountUp() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        if (isNaN(target)) return;
        let current = 0;
        const step = target / 50;
        const update = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else stat.textContent = target;
        };
        update();
    });
}

// ============================================
// SCROLL REVEAL
// ============================================
function checkReveal() {
    const wh = window.innerHeight;
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < wh - 100) el.classList.add('active');
    });
}

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
        // Check if ANY card (including mentor) is flipped
        const anyCardFlipped = cards.some(card => card.classList.contains('flipped'));
        const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
        
        if (!anyCardFlipped && !mentorFlipped && !isAnimating) {
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
    const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
    if (!anyCardFlipped && !mentorFlipped) {
        startAutoPlay();
    }
}

function toggleDeveloperCard(card) {
    // Only allow flip if this card is the center card (data-pos="0")
    if (card.getAttribute('data-pos') !== '0') return;

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        checkAndResumeAutoPlay();
    } else {
        card.classList.add('flipped');
        stopAutoPlay();
    }
}

function toggleMentorCard() {
    if (mentorCard.classList.contains('flipped')) {
        mentorCard.classList.remove('flipped');
        checkAndResumeAutoPlay();
    } else {
        mentorCard.classList.add('flipped');
        stopAutoPlay();
    }
}

function initCardFlip() {
    // Developer cards
    // Issue: on desktop, clicking fires mouseenter THEN click = double toggle
    // Fix: if mouseenter just fired, skip the click handler
    cards.forEach(card => {
        let justFlippedByHover = false;

        card.addEventListener('mouseenter', () => {
            justFlippedByHover = true;
            toggleDeveloperCard(card);
            setTimeout(() => { justFlippedByHover = false; }, 300);
        });

        // mouseleave: do NOTHING — card stays in its current state

        card.addEventListener('click', () => {
            if (justFlippedByHover) return; // mouseenter already handled it
            toggleDeveloperCard(card);
        });
    });

    // Mentor card
    if (mentorCard) {
        let mentorJustFlippedByHover = false;

        mentorCard.addEventListener('mouseenter', () => {
            mentorJustFlippedByHover = true;
            toggleMentorCard();
            setTimeout(() => { mentorJustFlippedByHover = false; }, 300);
        });

        // mouseleave: do NOTHING — card stays in its current state

        mentorCard.addEventListener('click', () => {
            if (mentorJustFlippedByHover) return; // mouseenter already handled it
            toggleMentorCard();
        });
    }
}

// ============================================
// KNOW MORE BUTTON HANDLER
// ============================================
function initKnowMoreButtons() {
    knowMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Do NOT call e.preventDefault() — allow navigation to linked page
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    hamburgerBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarSettingsIcon.addEventListener('click', toggleSettingsDropdown);
    document.addEventListener('click', closeSettingsOnClickOutside);

    languageOptions.forEach(btn => btn.addEventListener('click', () => handleLanguageChange(btn.dataset.lang)));
    themeOptions.forEach(btn => btn.addEventListener('click', () => handleThemeChange(btn.dataset.theme)));

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSidebar(); closeSettingsDropdown(); } });

    // Carousel navigation
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const anyFlipped = cards.some(card => card.classList.contains('flipped'));
            const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
            if (!anyFlipped && !mentorFlipped) moveLeft();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const anyFlipped = cards.some(card => card.classList.contains('flipped'));
            const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
            if (!anyFlipped && !mentorFlipped) moveRight();
        });
    }

    // ── Mouse Drag Support ──────────────────────────────────────────
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
        const anyFlipped = cards.some(card => card.classList.contains('flipped'));
        const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
        if (!anyFlipped && !mentorFlipped) {
            if (delta < -50) moveRight();   // drag left → cards move right (right swipe feel)
            else if (delta > 50) moveLeft(); // drag right → cards move left (left swipe feel)
        }
    });

    // ── Touch Swipe Support ─────────────────────────────────────────
    let touchStartX = 0;

    if (track) {
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const delta = touchEndX - touchStartX;
            const anyFlipped = cards.some(card => card.classList.contains('flipped'));
            const mentorFlipped = mentorCard ? mentorCard.classList.contains('flipped') : false;
            if (!anyFlipped && !mentorFlipped) {
                if (delta < -50) moveRight();   // swipe left → cards go right
                else if (delta > 50) moveLeft(); // swipe right → cards go left
            }
        }, { passive: true });
    }

    const statsSection = document.getElementById('statsGrid');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { startCountUp(); observer.unobserve(entry.target); } });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Save the previous page from referrer
    const referrer = document.referrer;
    const currentPage = window.location.href;
    
    if (referrer && referrer !== currentPage && referrer.includes(window.location.hostname)) {
        localStorage.setItem('previousPage', referrer);
    } else if (!localStorage.getItem('previousPage')) {
        localStorage.setItem('previousPage', '/');
    }
    
    const savedLang = localStorage.getItem('helpLanguage') || 'en';
    handleLanguageChange(savedLang);
    initTheme();
    setupNavigation();
    initCardFlip();
    initKnowMoreButtons();
    handleVideoAutoplay();
    setupEventListeners();
    checkReveal();
    updateCards();
    startAutoPlay();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();