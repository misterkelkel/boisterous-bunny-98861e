/*
 * Xiao Clan Global Portal - Logic Engine (app.js)
 * Implements View Routing, Local Storage Database, Lineage Generation Poem Matching,
 * Registry Form Wizard, Dynamic scroll rendering, and Full Multi-Language translation.
 */

// Language State
let currentLang = 'en'; // default language

// Dynamic Translation Dictionary (I18N)
const I18N = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_heritage: "Xiao He Heritage",
    nav_matcher: "Zibei Matcher",
    nav_join: "Join Clan",
    nav_directory: "Global Directory",
    logo_sub: "Global Xiao Clan Association",

    // Hero
    hero_title: "ONE CLAN, ONE FAMILY",
    hero_subtitle: "世界萧氏 · 绳其祖武",
    hero_desc: "Tracing our roots back over 2,200 years to Western Han Prime Minister <strong>Xiao He (萧何)</strong>. From Singapore to Indonesia, China to Europe, we are bound by blood, history, and a shared future.",
    btn_join_clan: "Join the Clan",
    btn_explore_heritage: "Explore Heritage",

    // Heritage Promo
    promo_title: "Global Connection",
    promo_desc: "Connecting thousands of Xiao family members across international borders. Bridge cultural distances from South-East Asia to the Western Hemisphere and form real familial bonds.",
    promo_browse: "Browse Directory",
    promo_art_title: "Chancellor Xiao He (萧何)",
    promo_art_sub: "Founding Ancestor of the Xiao Lineage",

    // Seasonal Events Section
    events_section_title: "Seasonal Gatherings",
    events_section_sub: "Clan Fellowship Events",

    // Heritage View
    heritage_title: "The Legacy of Xiao He",
    heritage_sub: "First Chancellor of Han Dynasty · Chief Architect",
    heritage_wiki_source: "Source: Wikipedia (维基百科)",
    heritage_intro_1: "<strong>Xiao He (萧何, 257 BC – 193 BC)</strong> was a prominent Chinese politician of the early Western Han dynasty, lauded as one of the 'Three Heroes of the early Han dynasty' alongside Han Xin and Zhang Liang.",
    heritage_intro_2: "Revered as the ultimate forefather of the Xiao Clan, his stewardship of the Guanzhong region, logistical mastery during the Chu-Han Contention, and codification of the imperial laws formed the bedrock of early Chinese civilization.",

    // Matcher View
    matcher_title: "Generational Zibei Matcher",
    matcher_sub: "Generational Poem Search & Matcher",
    matcher_desc: "Traditional Chinese families use a **Generation Poem (字辈 - Zibei)**, where each generation shares a specific character in their name. Enter your generational character to see your place in the Xiao lineage tree.",
    matcher_select_branch: "Select Clan Branch / Poem Origin",
    matcher_enter_char: "Enter Your Generational Character (Chinese Character)",
    matcher_results_title: "Discover Your Lineage Place",
    matcher_empty_desc: "Select your branch and enter your name's middle character (generational character) to see your generational hierarchy.",
    matcher_btn_use: "Use Generation in Sign-Up",
    matcher_not_found_title: "Character Not Found",
    matcher_not_found_desc: "The character was not found in this poem. Keep in mind different regional sub-branches might use custom generational lines. You can still register with this character!",

    // Join View
    join_title: "Join the Xiao Clan",
    join_sub: "One Clan Under Heaven · Sharing Our Glory",
    wizard_step_1: "Step 1: Personal Profile",
    wizard_step_2: "Step 2: Ancestry & Geography",
    wizard_step_3: "Step 3: Family Connection",
    wizard_step_4: "Step 4: The Clan Oath",
    
    // Step 1 Form
    lbl_eng_name: "Full Name (English) *",
    lbl_zh_name: "Chinese Name (Optional)",
    lbl_email: "Email Address *",
    lbl_romanization: "Surname Romanization *",
    
    // Step 2 Form
    lbl_country: "Current Country / Region *",
    lbl_ancestral: "Ancestral Origin Village (Ancestral Hall)",
    lbl_zibei_char: "Generational Character (If known)",
    lbl_gen_num: "Generation Number (If known)",
    placeholder_select_country: "Select country...",
    
    // Step 3 Form
    lbl_contact_desc: "To enable family connection across borders (from Singapore to Indonesia, China to Europe, etc.), please provide a contact method.",
    lbl_phone: "Contact Phone Number * (Include Country Code)",
    lbl_messenger: "Preferred Messenger / ID",
    lbl_privacy: "Contact Details Visibility *",
    privacy_public: "Visible to Registered Clan Members (Recommended to connect)",
    privacy_private: "Admin Only (Keep completely private)",

    // Step 4 Form
    oath_title: "Xiao Clan Covenant",
    oath_p1: "Though we reside in ten thousand lands across five continents, our blood flows from a single source.",
    oath_p2: "We honor our ancestors, reflecting on the grand achievements of Chancellor Xiao He.",
    oath_p3: "We foster sibling fellowship, helping each other across borders—one family under heaven.",
    oath_p4: "We vow to pass down our ancestral virtues, keeping the hearth fire burning across generations.",
    oath_translate: "I pledge to honor my ancestors, foster sibling brotherhood across all borders, and support family connection with compassion and integrity.",
    lbl_agree_oath: "I solemnly sign this Clan Oath and request formal inclusion in the Xiao Clan Registry.",
    
    // Wizard Buttons
    btn_prev: "Previous",
    btn_next: "Next",
    btn_submit: "Submit Registry",

    // Scroll View
    scroll_welcome: "Welcome to the Clan, Brother!",
    scroll_subtitle: "Officially Listed in the Genus Genealogy",
    scroll_promo_desc: "Your registration is authenticated. We have generated your official, unique **Digital Membership Scroll** matching traditional Han Dynasty styles.",
    scroll_crest_txt: "蕭",
    scroll_title_zh: "世界萧氏宗亲联谊谱",
    scroll_title_en: "Xiao Clan Global Membership Scroll",
    scroll_cert_p1: "This is to certify that clan sibling",
    scroll_cert_p2: "originally from",
    scroll_cert_p3: ", is an authentic descendant of Chancellor Xiao He. Having signed the Covenant of the World Xiao Association, they are formally inscribed in the lineage registry, carrying forward our ancestral legacy. Issued to honor our kinship.",
    btn_download_scroll: "Download Digital Scroll",
    btn_view_db: "View Connection Database",

    // Directory View
    dir_title: "Global Clan Connection Database",
    dir_sub: "Global Kinship Directory · Bound by One Sea",
    dir_desc: "Welcome to the direct contact registry of the global Xiao family. Browse members from Singapore, Indonesia, China, Europe, and beyond. Search by name, filter by region or generation, and connect directly via WeChat or WhatsApp to build sibling bridges.",
    dir_stat_total: "Total Clan Family",
    dir_stat_regions: "Regions Represented",
    dir_stat_gens: "Generation Spread",
    dir_lbl_search: "Search Family Member (Name or Generation Character)",
    dir_lbl_filter: "Filter by Country / Region",
    dir_lbl_sort: "Sort Lineage",
    dir_all_regions: "All Global Regions",
    sort_default: "Default (Recent Join)",
    sort_gen_asc: "Generation (Oldest first)",
    sort_gen_desc: "Generation (Youngest first)",
    sort_alpha: "Name (Alphabetical)",
    dir_empty_title: "No Family Members Found",
    dir_empty_desc: "We couldn't find any family members matching your filters. Try adjusting your search keyword or regional filters.",
    card_lbl_variant: "Surname Variant",
    card_lbl_origin: "Ancestry Origin",
    card_lbl_zibei: "Zibei Char",
    card_lbl_gen: "Generation",
    card_lbl_private: "Private Contact",

    // Footer
    footer_desc: "Preserving ancestral honor, uniting world lineages, and modernizing our clan heritage for the generations yet to be born.",
    footer_col_nav: "Navigation",
    footer_col_connect: "Connect & Support",
    footer_admin: "Admin Office",
    footer_facebook: "Facebook Portal",
    footer_back_top: "Back to Top",
    footer_copyright: "© 2026 World Xiao Clan Guild Association. Traced back to 257 BC. All rights reserved.",
    footer_motto: "绳其祖武 · 奕代昌荣",
    footer_instagram: "Instagram (@x.s.seow)",

    // Chatbot
    bot_title: "Xiao Clan Assistant",
    bot_status: "Online (Automated)",
    bot_input_placeholder: "Type a message...",
    bot_welcome: "Hello! Welcome to the Xiao Clan Portal. I am your virtual assistant. How can I help you today?"
  },
  zh: {
    // Navigation
    nav_home: "主页",
    nav_heritage: "萧何祖德",
    nav_matcher: "字辈查询",
    nav_join: "宗亲登记",
    nav_directory: "全球联络库",
    logo_sub: "世界萧氏宗亲联谊会",

    // Hero
    hero_title: "天下一萧 · 四海一家",
    hero_subtitle: "绳其祖武 · 奕代昌荣",
    hero_desc: "追本溯源两千二百余载，咸尊西汉开国相国<strong>萧何公</strong>为始祖。自新加坡、印尼，至神州及欧洲，吾辈血脉相连，同荣共茂。",
    btn_join_clan: "宗亲加入登记",
    btn_explore_heritage: "探索家族历史",

    // Heritage Promo
    promo_title: "全球联谊",
    promo_desc: "跨越国界联结万千萧氏宗亲。架设从东南亚到欧美各地的亲情桥梁，增进宗族情谊，实现真正的天下萧氏一家亲。",
    promo_browse: "浏览联络名录",
    promo_art_title: "相国 萧何公",
    promo_art_sub: "萧氏宗族尊奉始祖",

    // Seasonal Events Section
    events_section_title: "宗亲联谊活动",
    events_section_sub: "敦睦宗谊 · 祭祖联欢",

    // Heritage View
    heritage_title: "西汉相国 · 萧何公祖德",
    heritage_sub: "汉初三杰之首 · 功冠群臣 · 律画九章",
    heritage_wiki_source: "资料来源：维基百科 (Wikipedia)",
    heritage_intro_1: "<strong>萧何 (公元前257年－前193年)</strong>，沛郡丰邑（今江苏丰县）人。西汉开国功臣、政治家、法学家。与韩信、张良并贤，尊为“汉初三杰”之首。",
    heritage_intro_2: "萧何公乃吾萧氏之始祖。其镇守关中、运筹帷幄、输送军粮士卒，功冠群臣。后更制定《九章律》，营建未央宫，为大汉帝国奠定千秋基业。其后裔瓜瓞绵延，播迁全球。",

    // Matcher View
    matcher_title: "昭穆字辈自动匹配器",
    matcher_sub: "宗族字辈派语查询",
    matcher_desc: "中华传统氏族编撰**字辈诗（派语）**，使后代名字中包含特定字以明辈分。请输入您的名字中的字辈，即可查询您在萧何公世系中的辈分位置。",
    matcher_select_branch: "选择宗族支派 / 字辈来源",
    matcher_enter_char: "输入您的名字辈分字（简体/繁体汉字）",
    matcher_results_title: "查询结果",
    matcher_empty_desc: "请选择所属支派，并输入您名字中的辈分字（通常为中间字），即可匹配世系代数。",
    matcher_btn_use: "将此辈分填入登记表",
    matcher_not_found_title: "未匹配到字辈",
    matcher_not_found_desc: "在该支派字辈诗中未找到此字。请注意，不同地区的分支及支派可能使用不同的字辈诗，您依然可以使用此字进行宗亲登记！",

    // Join View
    join_title: "全球萧氏宗亲登记",
    join_sub: "四海同心 · 荣光共续",
    wizard_step_1: "第一步：个人基本资料",
    wizard_step_2: "第二步：寻根与地理分布",
    wizard_step_3: "第三步：宗亲联络通道",
    wizard_step_4: "第四步：签署宗盟誓约",
    
    // Step 1 Form
    lbl_eng_name: "英文姓名 / 护照名 *",
    lbl_zh_name: "中文姓名（选填）",
    lbl_email: "电子邮箱 *",
    lbl_romanization: "姓氏拼写读音 *",
    
    // Step 2 Form
    lbl_country: "目前居住国家/地区 *",
    lbl_ancestral: "祖籍地 / 堂号村落",
    lbl_zibei_char: "名字辈分字（若知晓）",
    lbl_gen_num: "世系代数（若知晓）",
    placeholder_select_country: "请选择国家...",
    
    // Step 3 Form
    lbl_contact_desc: "为促进跨国宗亲联络（从新加坡、印尼、中国至欧洲等），请提供一种联络方式以供家族对接。",
    lbl_phone: "联络电话 * (请含国家区号)",
    lbl_messenger: "首选即时通讯号 / ID",
    lbl_privacy: "联络信息隐私设定 *",
    privacy_public: "对已登入的宗亲公开 (推荐，便于寻根对接)",
    privacy_private: "仅限管理员可见 (完全保密)",

    // Step 4 Form
    oath_title: "萧氏宗盟誓约",
    oath_p1: "余虽身处五洲万国，血脉之系终归一源。",
    oath_p2: "敬拜先祖，上昭汉相萧何功烈，慎终追远。",
    oath_p3: "敦睦宗谊，守望相助，四海一家，同气连枝。",
    oath_p4: "誓传祖德，绳其祖武，传灯不熄，奕代昌荣。",
    oath_translate: "誓言译意：我谨誓言敬奉祖先，促进全球宗亲敦睦联谊，守望相助，传递家族薪火。",
    lbl_agree_oath: "我郑重签署此誓约，申请正式列入全球萧氏宗亲名录。",
    
    // Wizard Buttons
    btn_prev: "上一步",
    btn_next: "下一步",
    btn_submit: "提交宗亲登记",

    // Scroll View
    scroll_welcome: "热烈欢迎宗亲归族！",
    scroll_subtitle: "正式列入萧氏昭穆宗谱",
    scroll_promo_desc: "登记信息已获验证。系统已为您生成专属的**数字化宗亲会荣誉卷轴**，契合传统相国诏书制式。",
    scroll_crest_txt: "蕭",
    scroll_title_zh: "世界萧氏宗亲联谊谱",
    scroll_title_en: "Xiao Clan Global Membership Scroll",
    scroll_cert_p1: "兹证明宗亲",
    scroll_cert_p2: "原籍",
    scroll_cert_p3: "，确系西汉相国萧何公之裔。今签署世界萧氏联谊誓约，正式入谱，绳其祖武，光耀宗门。特颁此卷，永昭宗谊。",
    btn_download_scroll: "下载数码卷轴",
    btn_view_db: "进入全球联络名录",

    // Directory View
    dir_title: "全球萧氏宗亲联络名录",
    dir_sub: "寻根问祖 · 敦睦联谊 · 天海一心",
    dir_desc: "欢迎进入全球萧氏家族联络库。在此联结新加坡、印尼、中国、马来西亚、欧美各地的亲人。可按姓名、地区或字辈检索，直接通过微信或WhatsApp与家人架设亲情桥梁。",
    dir_stat_total: "入谱宗亲总数",
    dir_stat_regions: "入谱国家地区",
    dir_stat_gens: "世系辈分跨度",
    dir_lbl_search: "检索宗亲姓名或字辈派字",
    dir_lbl_filter: "按居住国家地区筛选",
    dir_lbl_sort: "世系排序",
    dir_all_regions: "全球所有地区",
    sort_default: "按登记时间排序 (最新)",
    sort_gen_asc: "按代数排序 (高祖长辈优先)",
    sort_gen_desc: "按代数排序 (晚辈青年优先)",
    sort_alpha: "按英文姓名排序 (A-Z)",
    dir_empty_title: "未检索到相关宗亲",
    dir_empty_desc: "未能找到符合当前筛选条件的宗亲。请尝试调整关键字或地区过滤器。",
    card_lbl_variant: "姓氏拼写",
    card_lbl_origin: "堂号祖籍",
    card_lbl_zibei: "名字字辈",
    card_lbl_gen: "世系代数",
    card_lbl_private: "隐私设定非公开",

    // Footer
    footer_desc: "敬宗收族，敦睦宗谊，弘扬祖德，共谋发展。致力于团结全球宗亲，使古老传承在数字时代焕发新生。",
    footer_col_nav: "网站导航",
    footer_col_connect: "联络与支持",
    footer_admin: "联谊会秘书处",
    footer_facebook: "官方脸书 Portal",
    footer_back_top: "回到顶部",
    footer_copyright: "© 2026 世界萧氏宗亲总会. 溯源至公元前257年. 版权所有.",
    footer_motto: "绳其祖武 · 奕代昌荣",
    footer_instagram: "Instagram 账号 (@x.s.seow)",

    // Chatbot
    bot_title: "萧氏智能小助手",
    bot_status: "在线 (自动答复)",
    bot_input_placeholder: "输入您的问题...",
    bot_welcome: "您好！欢迎来到世界萧氏宗亲会门户。我是您的虚拟助手，今天有什么我可以帮您的吗？"
  }
};

// Global Seed Database of International Xiao Clan Members (Localized)
const INITIAL_CLAN_MEMBERS = [
  {
    id: "SC-075-102948",
    englishName: "Derrick Seow",
    chineseName: "萧国明",
    email: "derrick.seow@xiaoclan.org",
    surnameRomanization: "Seow",
    country: "Singapore",
    ancestralOrigin: "Anxi, Fujian (福建安溪)",
    zibeiChar: "国",
    generationNum: 75,
    phone: "+65 9234 5678",
    messenger: "WhatsApp: +65 9234 5678",
    privacy: "public",
    joinDate: "2026-03-12"
  },
  {
    id: "SC-074-993841",
    englishName: "Budi Siow",
    chineseName: "萧文德",
    email: "budi.siow@gmail.com",
    surnameRomanization: "Siow",
    country: "Indonesia",
    ancestralOrigin: "Meixian, Guangdong (广东梅县)",
    zibeiChar: "德",
    generationNum: 74,
    phone: "+62 812 3456 7890",
    messenger: "WhatsApp & WeChat: budi_siow",
    privacy: "public",
    joinDate: "2026-04-05"
  },
  {
    id: "SC-075-883492",
    englishName: "Xiao Chen",
    chineseName: "萧晨",
    email: "chen.xiao@outlook.com",
    surnameRomanization: "Xiao",
    country: "China",
    ancestralOrigin: "Pei County, Jiangsu (江苏沛县)",
    zibeiChar: "晨",
    generationNum: 75,
    phone: "+86 138 1234 5678",
    messenger: "WeChat: xiao_chen_peixian",
    privacy: "public",
    joinDate: "2026-05-10"
  },
  {
    id: "SC-076-203948",
    englishName: "Xiao Wei",
    chineseName: "萧薇",
    email: "wei.xiao@uni-heidelberg.de",
    surnameRomanization: "Xiao",
    country: "Europe",
    ancestralOrigin: "Luling, Jiangxi (江西吉安)",
    zibeiChar: "薇",
    generationNum: 76,
    phone: "+49 176 1234 5678",
    messenger: "WeChat ID: wei_xiao_heidelberg",
    privacy: "public",
    joinDate: "2026-05-20"
  },
  {
    id: "SC-075-304928",
    englishName: "Mei Ling Siew",
    chineseName: "萧美玲",
    email: "meiling.siew@yahoo.com.my",
    surnameRomanization: "Siew",
    country: "Malaysia",
    ancestralOrigin: "Yongding, Fujian (福建永定)",
    zibeiChar: "美",
    generationNum: 75,
    phone: "+60 12 345 6789",
    messenger: "WhatsApp: +60 12 345 6789",
    privacy: "public",
    joinDate: "2026-05-25"
  },
  {
    id: "SC-073-402948",
    englishName: "Marcus Seow",
    chineseName: "萧廷威",
    email: "marcus.seow@gmail.com",
    surnameRomanization: "Seow",
    country: "Singapore",
    ancestralOrigin: "Nan'an, Fujian (福建南安)",
    zibeiChar: "廷",
    generationNum: 73,
    phone: "+65 8123 9876",
    messenger: "WeChat: marcus_seow_sg",
    privacy: "public",
    joinDate: "2026-05-28"
  }
];

// Generational Poem Database
const ZIBEI_POEMS = {
  fujian: {
    title: { en: "Fujian Minnan Branch Zibei", zh: "福建闽南萧氏世派字辈" },
    poem: {
      en: "Ting Zu De Ze\nChuan Jia Shi Chang\nSheng Qi Zu Wu\nYi Dai Rong Xi",
      zh: "廷 祖 德 泽\n传 家 世 昌\n绳 其 祖 武\n奕 代 荣 熙"
    },
    chars: ["廷", "祖", "德", "泽", "传", "家", "世", "昌", "绳", "其", "祖", "武", "奕", "代", "荣", "熙"],
    startGen: 71
  },
  guangdong: {
    title: { en: "Guangdong Hakka Branch Zibei", zh: "广东客家萧氏昭穆字辈" },
    poem: {
      en: "Zhao Mu Cheng Shun\nRen Xian Ji Qi\nJia Sheng Ke Zhen\nShi Ze Yan Chang",
      zh: "昭 穆 承 顺\n仁 贤 继 起\n家 声 克 振\n世 泽 延 长"
    },
    chars: ["昭", "穆", "承", "顺", "仁", "贤", "继", "起", "家", "声", "克", "振", "世", "泽", "延", "长"],
    startGen: 70
  },
  jiangxi: {
    title: { en: "Jiangxi Luling Branch Zibei", zh: "江西庐陵古文世派字辈" },
    poem: {
      en: "Ying Shi Guot Ting\nBang Jia Zhi Guang\nDe Xian Qi Sheng\nYong Shi Chang Rong",
      zh: "应 世 国 廷\n邦 家 之 光\n德 贤 齐 盛\n永 世 昌 荣"
    },
    chars: ["应", "世", "国", "廷", "邦", "家", "之", "光", "德", "贤", "齐", "盛", "永", "世", "昌", "荣"],
    startGen: 68
  },
  hunan: {
    title: { en: "Hunan Changsha Branch Zibei", zh: "湖南长沙萧氏堂号字辈" },
    poem: {
      en: "Zhong Xiao Chuan Jia\nHi Shu Qi Hou\nQian Kun Zai De\nRui Qi Men Ting",
      zh: "忠 孝 传 家\n诗 书 启 后\n乾 坤 载 德\n瑞 启 门 庭"
    },
    chars: ["忠", "孝", "传", "家", "诗", "书", "启", "后", "乾", "坤", "载", "德", "瑞", "启", "门", "庭"],
    startGen: 72
  }
};

// Seasonal Events Seed
const CLAN_EVENTS = [
  {
    id: "evt-spring-worship",
    title: { en: "Spring Ancestral Homage & Banquet", zh: "春季祭祖大典暨宗亲联谊宴会" },
    month: { en: "Jun", zh: "六月" },
    day: "14",
    year: "2026",
    time: "10:00 AM - 3:00 PM SGT",
    location: { en: "Singapore Guild Hall & Live Broadcast", zh: "新加坡总会会所 · 全球同步直播" }
  },
  {
    id: "evt-heritage-tour",
    title: { en: "Global Ancestral Heritage Tour (Jiangxi-Pei County)", zh: "全球萧氏寻根祭祖之旅（江西至江苏沛县）" },
    month: { en: "Sep", zh: "九月" },
    day: "18",
    year: "2026",
    time: "8 Days Cultural Expedition",
    location: { en: "Departing Singapore, Indonesia, China", zh: "自新加坡、印尼、神州启程" }
  },
  {
    id: "evt-youth-summit",
    title: { en: "Xiao Clan Digital & Entrepreneurship Summit", zh: "全球萧氏青年数字化与创业者大会" },
    month: { en: "Nov", zh: "十一" },
    day: "22",
    year: "2026",
    time: "Virtual Metaverse & Singapore Hub",
    location: { en: "Online / Hybrid Meetup", zh: "元宇宙会场 / 新加坡线下中心" }
  }
];

// Web3Forms Public Access Key Config
const WEB3FORMS_ACCESS_KEY = "b0d1582e-dae1-427d-afbb-69a0c18c1b1a"; // Replace with your Web3Forms access key from https://web3forms.com

// App State Management
let currentView = "home";
let registeredMember = null;

// Initial Setup on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initLanguageSwitcher();
  translateDOM();
  updatePoemDisplay();
});

/* ==========================================================================
   1. LANGUAGE SWITCHING ENGINE
   ========================================================================== */
function initLanguageSwitcher() {
  const header = document.querySelector('header.app-header');
  const switcherDiv = document.createElement('div');
  switcherDiv.className = 'lang-switcher-container';
  switcherDiv.innerHTML = `
    <button class="btn-lang ${currentLang === 'en' ? 'active' : ''}" onclick="toggleLanguage('en')">EN</button>
    <button class="btn-lang ${currentLang === 'zh' ? 'active' : ''}" onclick="toggleLanguage('zh')">中文</button>
  `;
  header.appendChild(switcherDiv);
}

window.toggleLanguage = function(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.classList.toggle('active');
  });
  
  translateDOM();
  updatePoemDisplay();
  
  if (registeredMember) {
    const currentDate = new Date(registeredMember.joinDate);
    const dateString = currentDate.toLocaleDateString(currentLang === 'en' ? "en-US" : "zh-CN", { year: "numeric", month: "long", day: "numeric" });
    renderScrollCertificate(registeredMember, dateString);
  }
}

function translateDOM() {
  const dictionary = I18N[currentLang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dictionary[key];
      } else {
        el.innerHTML = dictionary[key];
      }
    }
  });

  const countrySelector = document.getElementById("inputCountry");
  if (countrySelector && countrySelector.firstElementChild) {
    countrySelector.firstElementChild.innerText = dictionary.placeholder_select_country;
  }
}

/* ==========================================================================
   2. VIEW ROUTER
   ========================================================================== */
function initRouter() {
  document.querySelectorAll("header.app-header nav a, footer.app-footer ul a").forEach(link => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("data-target") || link.getAttribute("href").replace("#", "");
      if (["home", "history", "generation", "join"].includes(target)) {
        e.preventDefault();
        navigateToView(target);
      }
    });
  });

  const logoLink = document.getElementById("logoLink");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToView("home");
    });
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "history", "generation", "join"].includes(hash)) {
      navigateToView(hash, false);
    }
  });

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && ["home", "history", "generation", "join"].includes(initialHash)) {
    navigateToView(initialHash, false);
  }
}

window.navigateToView = function(viewId, updateHash = true) {
  currentView = viewId;
  
  document.querySelectorAll(".view-pane").forEach(pane => {
    pane.style.display = "none";
    pane.classList.remove("active");
  });
  
  const activePane = document.getElementById(`view-${viewId}`);
  if (activePane) {
    activePane.style.display = "block";
    setTimeout(() => activePane.classList.add("active"), 50);
  }

  document.querySelectorAll("header.app-header nav a").forEach(navLink => {
    if (navLink.getAttribute("data-target") === viewId) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });

  if (updateHash) {
    window.location.hash = viewId;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   3. GENERATION POEM MATCHER
   ========================================================================== */
window.updatePoemDisplay = function() {
  const selectedBranch = document.getElementById("dialectSelect").value;
  const poemData = ZIBEI_POEMS[selectedBranch];
  
  document.getElementById("poemTitleText").innerText = currentLang === 'en' ? poemData.title.en : poemData.title.zh;
  
  const rawPoem = currentLang === 'en' ? poemData.poem.en : poemData.poem.zh;
  
  const formattedPoem = rawPoem.split("\n").map(line => {
    return `<div style="margin-bottom: 0.5rem; letter-spacing: ${currentLang === 'en' ? '2px' : '6px'}">${line}</div>`;
  }).join("");
  
  document.getElementById("poemBodyText").innerHTML = formattedPoem;
  
  matchZibei();
}

window.matchZibei = function() {
  const selectedBranch = document.getElementById("dialectSelect").value;
  const poemData = ZIBEI_POEMS[selectedBranch];
  const inputChar = document.getElementById("zibeiCharInput").value.trim();
  const resultBox = document.getElementById("zibeiResultBox");
  const dict = I18N[currentLang];

  if (!inputChar) {
    const sampleChar = poemData.chars[2];
    const sampleText = currentLang === 'en'
      ? `Need an example? Try clicking <a href="#" onclick="event.preventDefault(); document.getElementById('zibeiCharInput').value='${sampleChar}'; matchZibei();" style="color: var(--gold-primary); text-decoration: underline; font-weight: bold;">${sampleChar}</a> to see how it works.`
      : `想试试看？点击 <a href="#" onclick="event.preventDefault(); document.getElementById('zibeiCharInput').value='${sampleChar}'; matchZibei();" style="color: var(--gold-primary); text-decoration: underline; font-weight: bold;">${sampleChar}</a> 即可查看示范效果。`;
      
    resultBox.innerHTML = `
      <div class="result-empty">
        <p style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--gold-primary);">🧬</p>
        <p style="margin-bottom: 1rem;">${dict.matcher_empty_desc}</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); border-top: 1px dashed var(--glass-border); padding-top: 1rem;">${sampleText}</p>
      </div>
    `;
    return;
  }

  const charIndex = poemData.chars.indexOf(inputChar);

  if (charIndex !== -1) {
    const generationNumber = poemData.startGen + charIndex;
    
    const rawPoem = currentLang === 'en' ? poemData.poem.en : poemData.poem.zh;
    
    const highlightedPoem = rawPoem.split("\n").map(line => {
      const spacedLine = line.split(" ").map(char => {
        if (char === inputChar || (currentLang === 'en' && char.toLowerCase() === inputChar.toLowerCase())) {
          return `<span class="poem-char-highlight">${char}</span>`;
        }
        return char;
      }).join(" ");
      return `<div style="margin-bottom: 0.5rem; letter-spacing: ${currentLang === 'en' ? '2px' : '6px'}">${spacedLine}</div>`;
    }).join("");
    
    document.getElementById("poemBodyText").innerHTML = highlightedPoem;

    const matchedBranchTitle = currentLang === 'en' ? poemData.title.en : poemData.title.zh;
    const lineageExp = currentLang === 'en' 
      ? `Your generational character <strong>"${inputChar}"</strong> ranks you at <strong>Generation ${generationNumber}</strong>, tracing directly back to <strong>Chancellor Xiao He (萧何)</strong> as the 1st generation.`
      : `您的辈分用字<strong>“${inputChar}”</strong>在《${matchedBranchTitle}》中排在第 <strong>${generationNumber} 世</strong>，尊西汉开国相国<strong>萧何公</strong>为第1世祖。`;

    resultBox.innerHTML = `
      <div class="result-badge">${inputChar}</div>
      <div class="result-generation">${currentLang === 'en' ? `Generation ${generationNumber}` : `世系第 ${generationNumber} 世`}</div>
      <h3 style="color: var(--gold-primary); font-family: var(--font-serif-zh); font-size: 1.15rem; margin-bottom: 0.8rem;">
        ${currentLang === 'en' ? 'Lineage Verified' : '昭穆辈分确证'}
      </h3>
      <p class="result-desc" style="margin-bottom: 1.5rem;">
        ${lineageExp}
      </p>
      <button class="btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;" onclick="preFillJoinForm('${inputChar}', ${generationNumber})">
        ${dict.matcher_btn_use}
      </button>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="result-empty" style="animation: none;">
        <p style="font-size: 1.8rem; margin-bottom: 1rem; color: var(--crimson-glow);">⚠️</p>
        <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">${dict.matcher_not_found_title}</p>
        <p style="font-size: 0.85rem;">
          ${dict.matcher_not_found_desc}
        </p>
      </div>
    `;
  }
}

window.preFillJoinForm = function(char, genNum) {
  document.getElementById("inputZibeiChar").value = char;
  document.getElementById("inputGenerationNum").value = genNum;
  navigateToView("join");
}

/* ==========================================================================
   4. REGISTRATION FORM SUBMISSION (WEB3FORMS)
   ========================================================================== */
window.handleRegistration = function(event) {
  event.preventDefault();
  
  const agreeOath = document.getElementById("inputAgreeOath").checked;
  if (!agreeOath) {
    alert(currentLang === 'en' ? "You must accept and sign the Clan Oath to finalize registry." : "您必须勾选同意宗盟誓约方可完成宗亲登记。");
    return;
  }

  const submitButton = document.getElementById("btnSubmitForm");
  const originalBtnText = submitButton.innerText;
  submitButton.disabled = true;
  submitButton.innerText = currentLang === 'en' ? "Submitting..." : "正在提交...";

  const englishName = document.getElementById("inputEnglishName").value.trim();
  const chineseName = document.getElementById("inputChineseName").value.trim() || "N/A";
  const email = document.getElementById("inputEmail").value.trim();
  const surnameRomanization = document.getElementById("inputSurnameRomanization").value;
  const country = document.getElementById("inputCountry").value;
  const ancestralOrigin = document.getElementById("inputAncestralOrigin").value.trim() || (currentLang === 'en' ? "Ancestor Xiao He (萧何)" : "相国始祖萧何");
  const zibeiChar = document.getElementById("inputZibeiChar").value.trim() || "N/A";
  const genNum = parseInt(document.getElementById("inputGenerationNum").value) || 0;
  const phone = document.getElementById("inputPhone").value.trim();
  const messenger = document.getElementById("inputMessenger").value.trim() || "N/A";

  const formattedGen = genNum > 0 ? String(genNum).padStart(3, '0') : 'XXX';
  const uniqueRandNum = Math.floor(100000 + Math.random() * 900000);
  const memberId = `SC-${formattedGen}-${uniqueRandNum}`;

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(currentLang === 'en' ? "en-US" : "zh-CN", { year: "numeric", month: "long", day: "numeric" });
  const localDateISO = currentDate.toISOString().split("T")[0];

  registeredMember = {
    id: memberId,
    englishName: englishName,
    chineseName: chineseName !== "N/A" ? chineseName : null,
    email: email,
    surnameRomanization: surnameRomanization,
    country: country,
    ancestralOrigin: ancestralOrigin,
    zibeiChar: zibeiChar,
    generationNum: genNum,
    phone: phone,
    messenger: messenger,
    joinDate: localDateISO
  };

  const web3FormsKey = document.getElementById("web3formsAccessKey").value || WEB3FORMS_ACCESS_KEY;
  
  if (web3FormsKey === "YOUR_ACCESS_KEY_HERE" || !web3FormsKey) {
    console.warn("Web3Forms access key is placeholder. Skipping email dispatch, loading scroll locally.");
    showSuccessView(dateString);
    submitButton.disabled = false;
    submitButton.innerText = originalBtnText;
    return;
  }

  const formData = {
    access_key: web3FormsKey,
    subject: `New Xiao Clan Registry: ${englishName} (${chineseName})`,
    from_name: "Xiao Clan Portal",
    "Member ID": memberId,
    "Full Name": englishName,
    "Chinese Name": chineseName,
    "Email": email,
    "Romanized Surname": surnameRomanization,
    "Country": country,
    "Ancestral Origin": ancestralOrigin,
    "Zibei Character": zibeiChar,
    "Generation": genNum > 0 ? genNum : "N/A",
    "Phone Number": phone,
    "Messenger ID": messenger,
    "Registration Date": localDateISO
  };

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      showSuccessView(dateString);
    } else {
      console.log(response);
      alert(json.message);
    }
  })
  .catch(error => {
    console.error(error);
    alert(currentLang === 'en' ? "Form submission failed. Please check your internet connection." : "表单提交失败，请检查您的网络连接。");
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.innerText = originalBtnText;
  });
}

function showSuccessView(dateString) {
  renderScrollCertificate(registeredMember, dateString);
  document.getElementById("membershipForm").style.display = "none";
  document.getElementById("scrollSuccessSection").style.display = "block";
  window.scrollTo({
    top: document.getElementById("scrollSuccessSection").offsetTop - 100,
    behavior: "smooth"
  });
}

/* ==========================================================================
   5. MEMBERSHIP SCROLL RENDERING
   ========================================================================== */
function renderScrollCertificate(member, dateStr) {
  const dict = I18N[currentLang];
  const zhName = member.chineseName ? `萧${member.chineseName.replace(/^萧/, '')}` : `${member.surnameRomanization} ${member.englishName}`;
  document.getElementById("scrollZhName").innerText = zhName;

  if (currentLang === 'en') {
    const genDetails = member.generationNum > 0 
      ? `belonging to Generation ${member.generationNum} of the Xiao Lineage, `
      : (member.zibeiChar && member.zibeiChar !== "N/A" ? `sharing the generational character '${member.zibeiChar}', ` : "");
      
    document.getElementById("scrollDescBody").innerHTML = `
      ${dict.scroll_cert_p1} <strong>${zhName}</strong>, ${dict.scroll_cert_p2} ${member.ancestralOrigin}, 
      is hereby officially registered as a family sibling representing ${member.country}. Tracing ${genDetails}
      they are formally inscribed in the lineage registry, carrying forward our ancestral legacy. Issued to honor our kinship.
    `;
  } else {
    const originDesc = member.ancestralOrigin ? `原籍${member.ancestralOrigin}` : "承前启后";
    const zibeiDesc = member.generationNum > 0 
      ? `，属萧氏世系第 ${member.generationNum} 世` 
      : (member.zibeiChar && member.zibeiChar !== "N/A" ? `，属“${member.zibeiChar}”字辈世系` : "");

    document.getElementById("scrollDescBody").innerHTML = `
      兹证明宗亲 <strong>${zhName}</strong> 来自${member.country}，${originDesc}${zibeiDesc}。
      今于天天下萧全球联谊会正式列谱登记，秉承祖训，光耀宗门。特班此卷，永昭宗谊。
    `;
  }

  document.getElementById("scrollMemberId").innerText = `NO. ${member.id}`;
  document.getElementById("scrollDate").innerText = `DATE: ${dateStr}`;
}

window.downloadCertificate = function() {
  if (!registeredMember) return;
  
  const printWindow = window.open('', '_blank');
  const scrollHtml = document.getElementById("clanScrollCertificate").outerHTML;
  const pageTitle = currentLang === 'en' 
    ? `Xiao Clan Scroll Certificate - ${registeredMember.englishName}`
    : `萧氏宗亲入谱卷轴证书 - ${registeredMember.chineseName || registeredMember.englishName}`;
  
  printWindow.document.write(`
    <html>
      <head>
        <title>${pageTitle}</title>
        <style>
          body {
            background-color: #fff;
            color: #3b2816;
            font-family: 'Cinzel', 'Noto Serif SC', serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .scroll-container {
            width: 580px;
            background: radial-gradient(circle, #f3ebd4 0%, #e2d2a6 100%);
            border-left: 2px solid #594225;
            border-right: 2px solid #594225;
            box-shadow: none;
            padding: 3rem 4rem;
            position: relative;
            box-sizing: border-box;
          }
          .scroll-wood-roller-top,
          .scroll-wood-roller-bottom {
            position: absolute;
            left: 0;
            width: 100%;
            height: 24px;
            background: linear-gradient(to right, #402c1b, #735438, #402c1b);
            border-radius: 4px;
          }
          .scroll-wood-roller-top { top: 0; }
          .scroll-wood-roller-bottom { bottom: 0; }
          
          .scroll-content {
            border: 1px solid rgba(89, 66, 37, 0.3);
            padding: 2.5rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .scroll-crest {
            font-size: 2.5rem;
            color: #8B0000;
            margin-bottom: 1.5rem;
            border: 2px solid #8B0000;
            border-radius: 50%;
            width: 68px;
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .scroll-header-zh {
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 6px;
            color: #8B0000;
            margin-bottom: 0.5rem;
          }
          .scroll-header-en {
            font-size: 0.95rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #5c442c;
            margin-bottom: 2rem;
          }
          .scroll-body {
            text-align: center;
            font-size: 1.15rem;
            line-height: 2.2;
            color: #3c2918;
            margin-bottom: 2.5rem;
          }
          .scroll-body strong {
            font-size: 1.4rem;
            color: #8B0000;
            border-bottom: 1.5px solid #8b0000;
            padding: 0 0.5rem;
          }
          .scroll-footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .scroll-meta {
            font-size: 0.85rem;
            line-height: 1.6;
            color: #5c442c;
            text-align: left;
          }
          .scroll-meta span { display: block; }
          .scroll-seal-wax {
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, #db241a 0%, #850c05 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffd700;
            font-size: 1.3rem;
            font-weight: bold;
            letter-spacing: 2px;
            transform: rotate(-10deg);
          }
          @media print {
            .no-print { display: none; }
            body { background: #fff; }
          }
        </style>
      </head>
      <body>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
          <button class="no-print" onclick="window.print()" style="padding: 12px 24px; font-weight: bold; font-size: 16px; border-radius: 4px; border: 1px solid #b89030; background-color: #8b0000; color: #fff; cursor: pointer;">
            ${currentLang === 'en' ? 'Print Certificate' : '打印卷轴证书'}
          </button>
          ${scrollHtml}
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
}

/* ==========================================================================
   6. FLOATING FAQ CHATBOT ENGINE
   ========================================================================== */
let chatbotOpen = false;
let chatbotFirstOpen = true;

// FAQs dataset
const BOT_FAQS = {
  en: [
    {
      id: "faq-heritage",
      question: "Who was Chancellor Xiao He?",
      answer: "<strong>Chancellor Xiao He (萧何, 257 BC – 193 BC)</strong> was the ultimate founding ancestor of the Xiao lineage. He was the First Prime Minister of the Han Dynasty and one of the Three Heroes of Early Han, known for his administrative mastery, logistics, and legal codification (Jiuzhang Lu)."
    },
    {
      id: "faq-zibei",
      question: "What is a Zibei / Generation character?",
      answer: "Traditional Chinese families use a **Generation Poem (字辈 - Zibei)**, where each generation shares a specific character in their name. You can use our **Zibei Matcher** tool to enter your generational character and find your generation number!"
    },
    {
      id: "faq-register",
      question: "How do I register and is it free?",
      answer: "Yes, registration is completely free! Go to the <strong>Join Clan</strong> page, enter your details (Name, Email, Phone/WeChat, and Ancestry Origin), sign the Covenant, and register. You will also get a beautiful Digital Scroll."
    },
    {
      id: "faq-contact",
      question: "How can I contact Kelvin directly?",
      answer: "You can contact Kelvin Seow directly on Instagram at <a href='https://instagram.com/x.s.seow' target='_blank' style='color: var(--gold-primary); text-decoration: underline; font-weight: bold;'>@x.s.seow</a>. Click the link to message him directly!"
    }
  ],
  zh: [
    {
      id: "faq-heritage",
      question: "萧何公是谁？",
      answer: "<strong>相国萧何 (公元前257年－前193年)</strong> 是萧氏的始祖。他是西汉开国功臣、第一任相国、汉初三杰之首，以卓越的行政管理、后勤保障和制定《九章律》而闻名于世。"
    },
    {
      id: "faq-zibei",
      question: "什么是昭穆字辈派语？",
      answer: "中华传统家族使用**字辈诗（派语）**，每一代人在名字中共享一个特定的汉字。您可以使用我们的**字辈查询**工具输入您的字辈，即可自动查询世系辈分！"
    },
    {
      id: "faq-register",
      question: "如何登记，是免费的吗？",
      answer: "是的，登记是完全免费的！请前往**宗亲登记**页面填入您的基本信息，签署《宗盟誓约》并提交，即可获得专属您的精美数字化荣誉卷轴。"
    },
    {
      id: "faq-contact",
      question: "如何直接联系管理员 Kelvin？",
      answer: "您可以直接在 Instagram 上联系 Kelvin Seow：账号为 <a href='https://instagram.com/x.s.seow' target='_blank' style='color: var(--gold-primary); text-decoration: underline; font-weight: bold;'>@x.s.seow</a>。点击链接即可发送私信咨询！"
    }
  ]
};

window.toggleChatbot = function() {
  const chatWindow = document.getElementById("chatbotWindow");
  const badge = document.getElementById("chatNotificationBadge");
  
  chatbotOpen = !chatbotOpen;
  
  if (chatbotOpen) {
    chatWindow.style.display = "flex";
    if (badge) badge.style.display = "none";
    if (chatbotFirstOpen) {
      initChatbot();
      chatbotFirstOpen = false;
    }
  } else {
    chatWindow.style.display = "none";
  }
}

function initChatbot() {
  const messagesContainer = document.getElementById("chatbotMessages");
  messagesContainer.innerHTML = "";
  
  const welcomeText = I18N[currentLang].bot_welcome;
  appendMessage("bot", welcomeText);
  
  renderQuickReplies();
}

function renderQuickReplies() {
  const repliesContainer = document.getElementById("chatbotQuickReplies");
  repliesContainer.innerHTML = "";
  
  const faqs = BOT_FAQS[currentLang];
  faqs.forEach(faq => {
    const btn = document.createElement("button");
    btn.className = "quick-reply-btn";
    btn.innerText = faq.question;
    btn.onclick = () => selectQuickReply(faq.id);
    repliesContainer.appendChild(btn);
  });
}

function appendMessage(sender, text) {
  const messagesContainer = document.getElementById("chatbotMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-msg ${sender}`;
  msgDiv.innerHTML = text;
  messagesContainer.appendChild(msgDiv);
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

window.selectQuickReply = function(faqId) {
  const faqs = BOT_FAQS[currentLang];
  const matchedFaq = faqs.find(f => f.id === faqId);
  
  if (matchedFaq) {
    appendMessage("user", matchedFaq.question);
    
    setTimeout(() => {
      appendMessage("bot", matchedFaq.answer);
    }, 400);
  }
}

window.handleChatSubmit = function(event) {
  event.preventDefault();
  const inputEl = document.getElementById("chatbotInputText");
  const text = inputEl.value.trim();
  if (!text) return;
  
  appendMessage("user", text);
  inputEl.value = "";
  
  setTimeout(() => {
    const query = text.toLowerCase();
    const faqs = BOT_FAQS[currentLang];
    
    let matchedAnswer = null;
    
    if (query.includes("xiao he") || query.includes("ancestor") || query.includes("萧何") || query.includes("始祖")) {
      matchedAnswer = faqs.find(f => f.id === "faq-heritage").answer;
    } else if (query.includes("zibei") || query.includes("generation") || query.includes("字辈") || query.includes("昭穆")) {
      matchedAnswer = faqs.find(f => f.id === "faq-zibei").answer;
    } else if (query.includes("join") || query.includes("register") || query.includes("free") || query.includes("登记") || query.includes("加入") || query.includes("免费")) {
      matchedAnswer = faqs.find(f => f.id === "faq-register").answer;
    } else if (query.includes("contact") || query.includes("kelvin") || query.includes("instagram") || query.includes("ig") || query.includes("联系")) {
      matchedAnswer = faqs.find(f => f.id === "faq-contact").answer;
    }
    
    if (matchedAnswer) {
      appendMessage("bot", matchedAnswer);
    } else {
      const fallbackText = currentLang === 'en'
        ? `I am an automated chatbot and didn't quite catch that. For custom inquiries, please message Kelvin Seow directly on Instagram at <a href='https://instagram.com/x.s.seow' target='_blank' style='color: var(--gold-primary); text-decoration: underline; font-weight: bold;'>@x.s.seow</a>.`
        : `我是自动答复助手，未能完全理解您的问题。如有其他咨询，请直接在 Instagram 上私信联系 Kelvin Seow：<a href='https://instagram.com/x.s.seow' target='_blank' style='color: var(--gold-primary); text-decoration: underline; font-weight: bold;'>@x.s.seow</a>。`;
      appendMessage("bot", fallbackText);
    }
  }, 500);
}

const originalToggleLanguage = window.toggleLanguage;
window.toggleLanguage = function(lang) {
  originalToggleLanguage(lang);
  if (chatbotOpen) {
    initChatbot();
  }
}
