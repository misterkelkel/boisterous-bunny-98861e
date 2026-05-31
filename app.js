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
    footer_motto: "绳其祖武 · 奕代昌荣"
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
    footer_motto: "绳其祖武 · 奕代昌荣"
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

// App State Management
let currentStep = 1;
let currentView = "home";
let registeredMember = null;

// Initial Setup on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initDatabase();
  initRouter();
  initLanguageSwitcher();
  translateDOM();
  updatePoemDisplay();
  renderEvents();
  renderDatabaseGrid();
  updateDatabaseStats();
});

/* ==========================================================================
   1. LANGUAGE SWITCHING ENGINE
   ========================================================================== */
function initLanguageSwitcher() {
  // Create Language Swifter floating panel or attach into header
  const header = document.querySelector('header.app-header');
  const nav = document.getElementById('navLinks');
  
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
  
  // Update switcher buttons UI state
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.classList.toggle('active');
  });
  
  // Re-translate static DOM strings
  translateDOM();
  
  // Re-render dynamic elements
  updatePoemDisplay();
  renderEvents();
  renderDatabaseGrid();
  updateDatabaseStats();
  
  if (registeredMember) {
    const currentDate = new Date(registeredMember.joinDate);
    const dateString = currentDate.toLocaleDateString(currentLang === 'en' ? "en-US" : "zh-CN", { year: "numeric", month: "long", day: "numeric" });
    renderScrollCertificate(registeredMember, dateString);
  }
}

function translateDOM() {
  const dictionary = I18N[currentLang];
  
  // Look up all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      // Swop innerHTML or value depending on tag type
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dictionary[key];
      } else {
        el.innerHTML = dictionary[key];
      }
    }
  });

  // Specifically translate placeholders in selectors
  const countrySelector = document.getElementById("inputCountry");
  if (countrySelector && countrySelector.firstElementChild) {
    countrySelector.firstElementChild.innerText = dictionary.placeholder_select_country;
  }
}

/* ==========================================================================
   2. VIEW ROUTER
   ========================================================================== */
function initRouter() {
  // Catch link clicks in Header & Footer
  document.querySelectorAll("header.app-header nav a, footer.app-footer ul a").forEach(link => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("data-target") || link.getAttribute("href").replace("#", "");
      if (["home", "history", "generation", "join", "database"].includes(target)) {
        e.preventDefault();
        navigateToView(target);
      }
    });
  });

  // Handle logo click specifically
  const logoLink = document.getElementById("logoLink");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToView("home");
    });
  }

  // Handle browser back/forward buttons using hash
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "history", "generation", "join", "database"].includes(hash)) {
      navigateToView(hash, false);
    }
  });

  // Load correct view if URL already has a hash
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && ["home", "history", "generation", "join", "database"].includes(initialHash)) {
    navigateToView(initialHash, false);
  }
}

window.navigateToView = function(viewId, updateHash = true) {
  currentView = viewId;
  
  // Hide all view panes, show the targeted one
  document.querySelectorAll(".view-pane").forEach(pane => {
    pane.style.display = "none";
    pane.classList.remove("active");
  });
  
  const activePane = document.getElementById(`view-${viewId}`);
  if (activePane) {
    activePane.style.display = "block";
    setTimeout(() => activePane.classList.add("active"), 50);
  }

  // Update header nav active styles
  document.querySelectorAll("header.app-header nav a").forEach(navLink => {
    if (navLink.getAttribute("data-target") === viewId) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });

  // Update browser hash
  if (updateHash) {
    window.location.hash = viewId;
  }

  // Scroll to top gently
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   3. GENERATION POEM MATCHER
   ========================================================================== */
window.updatePoemDisplay = function() {
  const selectedBranch = document.getElementById("dialectSelect").value;
  const poemData = ZIBEI_POEMS[selectedBranch];
  const dict = I18N[currentLang];
  
  document.getElementById("poemTitleText").innerText = currentLang === 'en' ? poemData.title.en : poemData.title.zh;
  
  const rawPoem = currentLang === 'en' ? poemData.poem.en : poemData.poem.zh;
  
  // Format the poem text to vertical block styled columns or lines
  const formattedPoem = rawPoem.split("\n").map(line => {
    return `<div style="margin-bottom: 0.5rem; letter-spacing: ${currentLang === 'en' ? '2px' : '6px'}">${line}</div>`;
  }).join("");
  
  document.getElementById("poemBodyText").innerHTML = formattedPoem;
  
  // Trigger match in case character was already written
  matchZibei();
}

window.matchZibei = function() {
  const selectedBranch = document.getElementById("dialectSelect").value;
  const poemData = ZIBEI_POEMS[selectedBranch];
  const inputChar = document.getElementById("zibeiCharInput").value.trim();
  const resultBox = document.getElementById("zibeiResultBox");
  const dict = I18N[currentLang];

  if (!inputChar) {
    const sampleChar = poemData.chars[2]; // get a representative sample (e.g. '德')
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

  // Find index of character in poem (check in Chinese characters list)
  const charIndex = poemData.chars.indexOf(inputChar);

  if (charIndex !== -1) {
    const generationNumber = poemData.startGen + charIndex;
    
    // Highlight character in the poem display box
    const rawPoem = currentLang === 'en' ? poemData.poem.en : poemData.poem.zh;
    
    const highlightedPoem = rawPoem.split("\n").map(line => {
      const spacedLine = line.split(" ").map(char => {
        // Handle matching Pinyin as well as Chinese chars
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

    // Show gorgeous result card
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
    // Character not in poem
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
   4. REGISTRATION FORM WIZARD
   ========================================================================== */
window.nextStep = function() {
  if (currentStep < 4) {
    // Validate current step fields before going to next step
    if (!validateStep(currentStep)) {
      return;
    }
    
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    document.getElementById(`indicator-${currentStep}`).classList.remove("active");
    document.getElementById(`indicator-${currentStep}`).classList.add("completed");
    
    currentStep++;
    
    document.getElementById(`step-${currentStep}`).classList.add("active");
    document.getElementById(`indicator-${currentStep}`).classList.add("active");

    updateWizardControls();
  }
}

window.prevStep = function() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    document.getElementById(`indicator-${currentStep}`).classList.remove("active");
    
    currentStep--;
    
    document.getElementById(`step-${currentStep}`).classList.add("active");
    document.getElementById(`indicator-${currentStep}`).classList.add("active");
    document.getElementById(`indicator-${currentStep}`).classList.remove("completed");

    updateWizardControls();
  }
}

function validateStep(step) {
  const fields = {
    1: [
      { id: "inputEnglishName", name: currentLang === 'en' ? "Full Name (English)" : "英文姓名" },
      { id: "inputEmail", name: currentLang === 'en' ? "Email Address" : "电子邮箱" }
    ],
    2: [
      { id: "inputCountry", name: currentLang === 'en' ? "Current Country / Region" : "居住国家地区" }
    ],
    3: [
      { id: "inputPhone", name: currentLang === 'en' ? "Contact Phone Number" : "联络电话" },
      { id: "inputPrivacy", name: currentLang === 'en' ? "Contact Details Privacy" : "隐私设定" }
    ]
  };

  const currentFields = fields[step];
  if (!currentFields) return true;

  for (let field of currentFields) {
    const el = document.getElementById(field.id);
    if (el && !el.value.trim()) {
      alert(currentLang === 'en' ? `Please complete the field: ${field.name}` : `请填入必填项: ${field.name}`);
      el.focus();
      return false;
    }
    
    // Basic email check
    if (field.id === "inputEmail") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(el.value.trim())) {
        alert(currentLang === 'en' ? "Please enter a valid email address." : "请输入有效的电子邮箱地址。");
        el.focus();
        return false;
      }
    }
  }
  return true;
}

function updateWizardControls() {
  // Update progress bar percentage line
  const progressPercent = ((currentStep - 1) / 3) * 100;
  document.getElementById("wizardProgressLine").style.width = `${progressPercent}%`;

  const btnPrev = document.getElementById("btnPrevStep");
  const btnNext = document.getElementById("btnNextStep");
  const btnSubmit = document.getElementById("btnSubmitForm");
  const dict = I18N[currentLang];

  // Refresh wizard button text
  btnPrev.innerText = dict.btn_prev;
  btnNext.innerText = dict.btn_next;
  btnSubmit.innerText = dict.btn_submit;

  if (currentStep === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }

  if (currentStep === 4) {
    btnNext.style.display = "none";
    btnSubmit.style.display = "inline-block";
  } else {
    btnNext.style.display = "inline-block";
    btnSubmit.style.display = "none";
  }
}

/* ==========================================================================
   5. SIMULATED DATABASE & LOCAL STORAGE
   ========================================================================== */
function initDatabase() {
  if (!localStorage.getItem("xiaoclan_members")) {
    localStorage.setItem("xiaoclan_members", JSON.stringify(INITIAL_CLAN_MEMBERS));
  }
}

function getStoredMembers() {
  return JSON.parse(localStorage.getItem("xiaoclan_members")) || INITIAL_CLAN_MEMBERS;
}

function saveMemberToDatabase(member) {
  const members = getStoredMembers();
  members.unshift(member); // Add new members to the top
  localStorage.setItem("xiaoclan_members", JSON.stringify(members));
  
  // Re-sync directory page UI
  renderDatabaseGrid();
  updateDatabaseStats();
}

window.updateDatabaseStats = function() {
  const members = getStoredMembers();
  
  // Total members count
  document.getElementById("statTotalCount").innerText = members.length;
  
  // Unique regions/countries represented
  const countries = new Set(members.map(m => m.country));
  document.getElementById("statCountryCount").innerText = countries.size;

  // Generation spectrum calculation (highest to lowest)
  const gens = members.map(m => m.generationNum).filter(g => g > 0);
  if (gens.length > 0) {
    const minGen = Math.min(...gens);
    const maxGen = Math.max(...gens);
    document.getElementById("statGenSpread").innerText = currentLang === 'en' 
      ? `${minGen}th - ${maxGen}th` 
      : `${minGen}世 - ${maxGen}世`;
  } else {
    document.getElementById("statGenSpread").innerText = currentLang === 'en' ? "70th - 76th" : "70世 - 76世";
  }
}

window.handleRegistration = function(event) {
  event.preventDefault();
  
  const agreeOath = document.getElementById("inputAgreeOath").checked;
  if (!agreeOath) {
    alert(currentLang === 'en' ? "You must accept and sign the Clan Oath to finalize registry." : "您必须勾选同意宗盟誓约方可完成宗亲登记。");
    return;
  }

  // Compile registration data
  const genNum = parseInt(document.getElementById("inputGenerationNum").value) || 0;
  const rawZibei = document.getElementById("inputZibeiChar").value.trim();

  // Create unique Member ID
  const formattedGen = genNum > 0 ? String(genNum).padStart(3, '0') : 'XXX';
  const uniqueRandNum = Math.floor(100000 + Math.random() * 900000);
  const memberId = `SC-${formattedGen}-${uniqueRandNum}`;

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(currentLang === 'en' ? "en-US" : "zh-CN", { year: "numeric", month: "long", day: "numeric" });
  const localDateISO = currentDate.toISOString().split("T")[0];

  registeredMember = {
    id: memberId,
    englishName: document.getElementById("inputEnglishName").value.trim(),
    chineseName: document.getElementById("inputChineseName").value.trim() || null,
    email: document.getElementById("inputEmail").value.trim(),
    surnameRomanization: document.getElementById("inputSurnameRomanization").value,
    country: document.getElementById("inputCountry").value,
    ancestralOrigin: document.getElementById("inputAncestralOrigin").value.trim() || (currentLang === 'en' ? "Ancestor Xiao He (萧何)" : "相国始祖萧何"),
    zibeiChar: rawZibei || "N/A",
    generationNum: genNum,
    phone: document.getElementById("inputPhone").value.trim(),
    messenger: document.getElementById("inputMessenger").value.trim() || "N/A",
    privacy: document.getElementById("inputPrivacy").value,
    joinDate: localDateISO
  };

  // Save to simulated database
  saveMemberToDatabase(registeredMember);

  // Generate scroll UI
  renderScrollCertificate(registeredMember, dateString);

  // Show Certificate view panel, hide wizard form
  document.getElementById("membershipForm").style.display = "none";
  document.getElementById("scrollSuccessSection").style.display = "block";
  
  // Auto Scroll down to scroll success section
  window.scrollTo({
    top: document.getElementById("scrollSuccessSection").offsetTop - 100,
    behavior: "smooth"
  });
}

/* ==========================================================================
   6. MEMBERSHIP SCROLL RENDERING
   ========================================================================== */
function renderScrollCertificate(member, dateStr) {
  const dict = I18N[currentLang];
  
  // Format Chinese Name or display English name
  const zhName = member.chineseName ? `萧${member.chineseName.replace(/^萧/, '')}` : `${member.surnameRomanization} ${member.englishName}`;
  document.getElementById("scrollZhName").innerText = zhName;

  // Fully localize scroll text depending on current language
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
      今于天天下萧全球联谊会正式列谱登记，秉承祖训，光耀宗门。特颁此卷，永昭宗谊。
    `;
  }

  document.getElementById("scrollMemberId").innerText = `NO. ${member.id}`;
  document.getElementById("scrollDate").innerText = `DATE: ${dateStr}`;
}

// Download/Print feature for membership scroll
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
   7. GLOBAL DIRECTORY / CONNECTION DATABASE DYNAMICS
   ========================================================================== */
window.renderDatabaseGrid = function(filteredList = null) {
  const members = filteredList || getStoredMembers();
  const gridContainer = document.getElementById("membersGridContainer");
  const dict = I18N[currentLang];
  
  gridContainer.innerHTML = "";
  
  if (members.length === 0) {
    gridContainer.innerHTML = `
      <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; border-style: dashed;">
        <p style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--gold-primary);">🔍</p>
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">${dict.dir_empty_title}</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">
          ${dict.dir_empty_desc}
        </p>
      </div>
    `;
    return;
  }

  // Populate Filter Country options dynamically depending on active language
  const filterSelect = document.getElementById("filterCountrySelect");
  const currentSelectedValue = filterSelect.value;
  filterSelect.innerHTML = `
    <option value="all">${dict.dir_all_regions}</option>
    <option value="Singapore">Singapore (${currentLang === 'en' ? 'Singapore' : '新加坡'})</option>
    <option value="Indonesia">Indonesia (${currentLang === 'en' ? 'Indonesia' : '印度尼西亚'})</option>
    <option value="China">China (${currentLang === 'en' ? 'China' : '中国'})</option>
    <option value="Malaysia">Malaysia (${currentLang === 'en' ? 'Malaysia' : '马来西亚'})</option>
    <option value="Europe">Europe (${currentLang === 'en' ? 'Europe' : '欧洲'})</option>
    <option value="United States">United States (${currentLang === 'en' ? 'United States' : '美国'})</option>
    <option value="Australia">Australia (${currentLang === 'en' ? 'Australia' : '澳大利亚'})</option>
  `;
  filterSelect.value = currentSelectedValue;

  // Refresh sorting select values text
  const sortSelector = document.getElementById("sortSelector");
  const currentSortVal = sortSelector.value;
  sortSelector.innerHTML = `
    <option value="default">${dict.sort_default}</option>
    <option value="generation-asc">${dict.sort_gen_asc}</option>
    <option value="generation-desc">${dict.sort_gen_desc}</option>
    <option value="alphabetical">${dict.sort_alpha}</option>
  `;
  sortSelector.value = currentSortVal;

  members.forEach(member => {
    // Generate card element
    const card = document.createElement("div");
    card.className = "member-card";
    
    // Format Chinese Name placeholder
    const zhName = member.chineseName ? member.chineseName : "N/A";
    
    // Country flag icons
    let flag = "🌐";
    let localizedCountry = member.country;
    if (member.country === "Singapore") { flag = "🇸🇬"; localizedCountry = currentLang === 'en' ? 'Singapore' : '新加坡'; }
    else if (member.country === "Indonesia") { flag = "🇮🇩"; localizedCountry = currentLang === 'en' ? 'Indonesia' : '印度尼西亚'; }
    else if (member.country === "China") { flag = "🇨🇳"; localizedCountry = currentLang === 'en' ? 'China' : '中国'; }
    else if (member.country === "Malaysia") { flag = "🇲🇾"; localizedCountry = currentLang === 'en' ? 'Malaysia' : '马来西亚'; }
    else if (member.country === "Europe") { flag = "🇪🇺"; localizedCountry = currentLang === 'en' ? 'Europe' : '欧洲'; }
    else if (member.country === "United States") { flag = "🇺🇸"; localizedCountry = currentLang === 'en' ? 'United States' : '美国'; }
    else if (member.country === "Australia") { flag = "🇦🇺"; localizedCountry = currentLang === 'en' ? 'Australia' : '澳大利亚'; }

    // Format Connect Button based on privacy settings
    let connectHtml = `<span class="connect-private">${dict.card_lbl_private}</span>`;
    if (member.privacy === "public") {
      let linkHref = "#";
      let linkText = "Connect";
      
      if (member.phone.includes("+")) {
        const cleanPhone = member.phone.replace(/[^0-9]/g, "");
        linkHref = `https://wa.me/${cleanPhone}`;
        linkText = "WhatsApp";
      } else if (member.messenger.toLowerCase().includes("wechat")) {
        linkHref = `javascript:alert('WeChat ID: ${member.messenger.replace("WeChat:", "").trim()}')`;
        linkText = "WeChat";
      }
      
      connectHtml = `
        <a href="${linkHref}" target="_blank" class="connect-btn">
          💬 ${linkText}
        </a>
      `;
    }

    let contactVal = `🔒 ${dict.card_lbl_private}`;
    if (member.privacy === "public") {
      contactVal = member.phone;
      if (member.messenger && member.messenger !== "N/A" && !member.messenger.includes(member.phone)) {
        contactVal += ` | ${member.messenger}`;
      }
    }

    card.innerHTML = `
      <div class="member-card-header">
        <div class="member-name-group">
          <span class="member-name-en">${member.englishName}</span>
          <span class="member-name-zh">${zhName}</span>
        </div>
        <span class="member-country-badge">${flag} ${localizedCountry}</span>
      </div>
      <div class="member-details">
        <div class="detail-item">
          <span class="detail-lbl">${dict.card_lbl_variant}</span>
          <span class="detail-val">${member.surnameRomanization}</span>
        </div>
        <div class="detail-item">
          <span class="detail-lbl">${dict.card_lbl_origin}</span>
          <span class="detail-val" title="${member.ancestralOrigin}">${member.ancestralOrigin}</span>
        </div>
        <div class="detail-item">
          <span class="detail-lbl">${dict.card_lbl_zibei}</span>
          <span class="detail-val">${member.zibeiChar}</span>
        </div>
        <div class="detail-item">
          <span class="detail-lbl">${dict.card_lbl_gen}</span>
          <span class="detail-val">${member.generationNum > 0 ? `${member.generationNum}${currentLang === 'en' ? 'th 世' : ' 世'}` : "N/A"}</span>
        </div>
        <div class="detail-item" style="grid-column: 1 / span 2; border-top: 1px dashed var(--glass-border); padding-top: 0.8rem; margin-top: 0.2rem;">
          <span class="detail-lbl">${currentLang === 'en' ? 'Contact Details' : '联络方式 / 电话'}</span>
          <span class="detail-val" style="color: var(--gold-primary); font-weight: 700; font-size: 0.92rem;">
            ${contactVal}
          </span>
        </div>
      </div>
      <div class="member-card-footer">
        <span class="member-id">${member.id}</span>
        ${connectHtml}
      </div>
    `;
    
    gridContainer.appendChild(card);
  });
}

window.filterDatabase = function() {
  const keyword = document.getElementById("searchNameInput").value.toLowerCase().trim();
  const selectedCountry = document.getElementById("filterCountrySelect").value;
  const sortBy = document.getElementById("sortSelector").value;
  
  let members = getStoredMembers();
  
  // Apply Search Keyword Filter
  if (keyword) {
    members = members.filter(m => {
      const matchEng = m.englishName.toLowerCase().includes(keyword);
      const matchZh = m.chineseName && m.chineseName.toLowerCase().includes(keyword);
      const matchZibei = m.zibeiChar && m.zibeiChar.toLowerCase().includes(keyword);
      const matchRoman = m.surnameRomanization.toLowerCase().includes(keyword);
      const matchId = m.id.toLowerCase().includes(keyword);
      return matchEng || matchZh || matchZibei || matchRoman || matchId;
    });
  }

  // Apply Region Filter
  if (selectedCountry !== "all") {
    members = members.filter(m => m.country === selectedCountry);
  }

  // Apply Sorting Engine
  if (sortBy === "generation-asc") {
    members.sort((a, b) => {
      const genA = a.generationNum || 999;
      const genB = b.generationNum || 999;
      return genA - genB;
    });
  } else if (sortBy === "generation-desc") {
    members.sort((a, b) => {
      const genA = a.generationNum || 0;
      const genB = b.generationNum || 0;
      return genB - genA;
    });
  } else if (sortBy === "alphabetical") {
    members.sort((a, b) => a.englishName.localeCompare(b.englishName));
  } else {
    members.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
  }

  renderDatabaseGrid(members);
}

/* ==========================================================================
   8. EVENTS & RSVP HANDLERS
   ========================================================================== */
window.renderEvents = function() {
  const eventsGrid = document.getElementById("eventsGrid");
  if (!eventsGrid) return;
  eventsGrid.innerHTML = "";

  CLAN_EVENTS.forEach(evt => {
    const card = document.createElement("div");
    card.className = "event-card";
    
    // Check if user already RSVPed in this session
    const isJoined = sessionStorage.getItem(`rsvp-${evt.id}`) === "true";
    const btnText = isJoined 
      ? (currentLang === 'en' ? "Joined ✓" : "已加入 RSVP ✓") 
      : (currentLang === 'en' ? "RSVP Now" : "我要报名 RSVP");
      
    const btnClass = isJoined ? "event-btn joined" : "event-btn";

    const evtTitle = currentLang === 'en' ? evt.title.en : evt.title.zh;
    const evtMonth = currentLang === 'en' ? evt.month.en : evt.month.zh;
    const evtLoc = currentLang === 'en' ? evt.location.en : evt.location.zh;

    card.innerHTML = `
      <div class="event-date-block">
        <span class="event-month">${evtMonth}</span>
        <span class="event-day">${evt.day}</span>
        <span class="event-year">${evt.year}</span>
      </div>
      <div class="event-body">
        <div>
          <h3 class="event-title">${evtTitle}</h3>
          <div class="event-info">
            <span style="display:block; margin-bottom: 0.2rem;">🕒 ${evt.time}</span>
            <span>📍 ${evtLoc}</span>
          </div>
        </div>
        <button class="${btnClass}" onclick="toggleRSVP('${evt.id}')">${btnText}</button>
      </div>
    `;
    
    eventsGrid.appendChild(card);
  });
}

window.toggleRSVP = function(evtId) {
  const isJoined = sessionStorage.getItem(`rsvp-${evtId}`) === "true";
  
  if (isJoined) {
    sessionStorage.removeItem(`rsvp-${evtId}`);
    alert(currentLang === 'en' ? "You have cancelled your RSVP for this gathering." : "您已取消此活动的报名预约。");
  } else {
    sessionStorage.setItem(`rsvp-${evtId}`, "true");
    alert(currentLang === 'en' ? "Thank you! You have successfully RSVPed. An email connection ticket has been sent." : "感谢报名！您已成功预约活动，联谊票已发送至您的联络邮箱。");
  }
  
  renderEvents();
}
