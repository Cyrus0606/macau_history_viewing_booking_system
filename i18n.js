/* 澳門世遺探索 — 多語系模組 v3（繁中 / 簡中 / 英文）— 完整版含記憶體快取修復 */
(function () {
    var K_LANG = 'mh_lang';
  
    var dict = {
      'zh-TW': {
        // ===== 品牌 / 導航 =====
        brand: '澳門世遺',
        brandSub: '文化探索與預約',
        navExplore: '探索活動',
        navFav: '我的收藏',
        navBookings: '我的預約',
        navAccount: '登入 / 註冊',
        navAccountMobile: '👤 登入 / 註冊',
        navBack: '返回探索',
        menuTitle: '選單',
  
        // ===== Hero =====
        heroTitle1: '探索澳門歷史城區',
        heroTitle2: '預約你的文化導賞',
        heroSub: '走進世遺景點、手作工作坊與美食文化體驗，用手機輕鬆瀏覽、即時檢索、收藏與預約。',
        searchPlaceholder: '搜尋景點、活動、地區或標籤…',
        hotLabel: '熱門：',
        hot1: '大三巴',
        hot2: '夜間導賞',
        hot3: '親子',
        hot4: '手作',
        hot5: '美食',
  
        // ===== 工具列 =====
        resultFound: '找到 {n} 個活動',
        resultRange: '找到 {n} 個活動，第 {a}-{b} 筆',
        favOnly: '只看收藏',
        sortRecommend: '推薦排序',
        sortPriceAsc: '價格低到高',
        sortPriceDesc: '價格高到低',
        sortRatingDesc: '評分最高',
        sortDurationAsc: '時長最短',
        sortNewest: '最新上架',
        prevPage: '上一頁',
        nextPage: '下一頁',
  
        // ===== 篩選 =====
        filterTitle: '篩選',
        filterClear: '清除',
        filterCategory: '分類',
        filterDistrict: '地區',
        filterPrice: '價格',
        filterDate: '日期／場次',
        filterLang: '導賞語言',
        districtAll: '全部地區',
        districtMacau: '澳門半島',
        districtTaipa: '氹仔',
        districtColoane: '路環',
        priceAll: '全部價格',
        priceFree: '免費',
        dateAll: '全部日期',
        date7days: '未來 7 天',
        dateWeekend: '週末',
        dateToday: '今日',
        apply: '套用篩選',
        applyWith: '套用篩選 ({n})',
        clearAll: '清除全部',
        clearAllToast: '已清除全部篩選',
  
        // ===== 分類 =====
        catArchitecture: '建築遺產',
        catReligious: '宗教場所',
        catSquare: '廣場前地',
        catMuseum: '博物館展館',
        catNight: '夜間導賞',
        catFamily: '親子體驗',
        catWorkshop: '手作工作坊',
        catFood: '美食文化',
  
        // ===== 導賞語言 =====
        langCantonese: '粵語',
        langMandarin: '普通話',
        langEnglish: '英語',
        langPortuguese: '葡語',
  
        // ===== 空狀態 =====
        noResult: '沒有找到符合的活動',
        noResultSub: '試試其他關鍵字，或清除篩選條件。',
        emptyClear: '清除全部條件',
  
        // ===== 卡片 =====
        badgeHot: '熱門',
        badgeNew: '新上架',
        viewDetail: '查看詳情',
        bookNow: '立即預約',
        fromPrice: '起',
        lowStock: '僅剩 {n} 位',
        lowStockShort: '⚠ 僅剩 {n} 位',
        favAdded: '已加入收藏 ❤',
        favRemoved: '已移除收藏',
  
        // ===== 其他區塊 =====
        featured: '本週精選',
        tips: '參觀小知識',
        tipsSub: '尊重文化遺產，讓旅程更美好。',
        tip1t: '📸 拍照禮儀',
        tip1d: '教堂內請勿使用閃光燈，保持安靜。',
        tip2t: '👟 穿著建議',
        tip2d: '舊城區多石板路，建議穿舒適平底鞋。',
        tip3t: '🌦 天氣提醒',
        tip3d: '夏季炎熱多雨，請帶水與雨具。',
        tip4t: '🗣 導賞語言',
        tip4d: '預約時可選擇粵語、普通話、英語或葡語。',
  
        // ===== 頁尾 =====
        footerAbout: '推廣澳門歷史城區文化，提供導賞與活動預約。',
        footerLinks: '快速連結',
        footerContact: '聯絡我們',
        footerLang: '語言',
        footerCopy: '© 2025 澳門歷史城區文化探索與活動預約平台',
  
        // ===== 深色模式 / 語言 =====
        darkModeLabel: '深色模式',
  
        // ===== booking.html =====
        bookTitle: '預約此活動',
        formName: '姓名 *',
        formPhone: '手機（+853）*',
        formEmail: 'Email *',
        formDate: '參加日期 *',
        formSession: '場次時間 *',
        formPeople: '參加人數 *',
        formLang: '導賞語言 *',
        formNote: '特殊需求',
        formAgree: '我已閱讀並同意活動條款與個人資料使用政策 *',
        sumSubtotal: '小計',
        sumDiscount: '團體折扣',
        sumFee: '平台服務費',
        sumTotal: '總額',
        submitBtn: '確認預約',
        submitLoading: '處理中…',
        bookSuccess: '預約成功！',
        orderNo: '訂單編號：',
        printBtn: '列印憑證',
        backExplore: '返回探索',
        myBookings: '我的預約',
        noBookings: '尚無預約記錄。',
        cancelBook: '取消預約',
        cancelConfirm: '確定取消此預約？',
        cancelDone: '已取消預約，款項將退回',
  
        // ===== Tabs =====
        tabIntro: '活動介紹',
        tabHighlights: '行程亮點',
        tabNotes: '注意事項',
        tabReviews: '評價',
  
        // ===== 評價 =====
        writeReview: '✍️ 撰寫評價',
        reviewPlaceholder: '分享你的體驗…',
        reviewSubmit: '送出評價',
        reviewSuccess: '評價已送出，感謝分享！',
        noReviews: '尚無評價，快來當第一個！',
        guest: '訪客',
        notesList: ['請提前 10 分鐘到達集合地點。', '活動期間請遵守導賞員指示，愛護文物。', '如遇惡劣天氣，主辦方保留更改或取消活動的權利。', '建議穿著舒適鞋子，自備飲用水。'],
  
        // ===== 詳情頁 =====
        meetingPoint: '集合地點：',
        openMap: '在地圖開啟 ↗',
        perPerson: ' / 人',
        notFoundTitle: '找不到此活動',
        notFoundSub: '可能連結有誤，或活動已下架。',
        notFoundBack: '回首頁探索',
        breadcrumbHome: '首頁',
        relatedTitle: '相關推薦',
  
        // ===== 表單錯誤 =====
        errName: '請填寫姓名',
        errPhone: '請填寫有效澳門手機（8 位數字）',
        errEmail: '請填寫有效 Email',
        errDate: '請選擇今天或之後的日期',
        errSession: '請選擇有剩餘名額的場次',
        errPeople: '人數不可超過剩餘名額',
        errLang: '請選擇導賞語言',
        errAgree: '請同意條款',
        remainTip: '剩餘 {n} 位',
        selectSession: '請選擇場次',
        successToast: '預約成功！',
  
        // ===== 帳戶 =====
        accountTitle: '我的帳戶',
        accountLoginTitle: '登入帳號',
        accountRegisterTitle: '註冊新帳號',
        accountLoginTab: '登入',
        accountRegisterTab: '註冊',
        accountName: '姓名',
        accountEmail: 'Email',
        accountPassword: '密碼（至少 6 位）',
        accountSubmitLogin: '登入',
        accountSubmitRegister: '註冊',
        accountLogout: '登出帳號',
        accountNote: '資料只存於此瀏覽器本機，不會上傳。',
        accountTabBookings: '我的預約',
        accountTabPayments: '支付記錄',
        accountTabReviews: '我的評價',
        accountNoPayments: '尚無支付記錄。',
        accountNoReviews: '尚無評價。',
        statusPaid: '已付款',
        statusRefunded: '已退款',
  
        // ===== 通用 =====
        minutes: '分鐘',
        peopleUnit: '人',
        checkForm: '請檢查表單欄位',
  
        // ===== app.js 新增 =====
        errAllFields: '請填寫所有欄位',
        errEmailFormat: 'Email 格式不正確',
        errPasswordShort: '密碼至少 6 位',
        errEmailTaken: '此 Email 已註冊',
        errLoginFailed: 'Email 或密碼錯誤',
        errSelectStar: '請選擇星等',
        errEmptyComment: '請輸入評論內容',
        toastLoginSuccess: '登入成功！',
        toastRegisterSuccess: '註冊成功，已自動登入！',
        toastLogout: '已登出',

        recommendForYou: '你可能感興趣的活動',
        
guestPromptTitle: '請先登入或註冊',
guestPromptSub: '登入後即可預約活動、收藏景點、查看訂單記錄。',
loginOrRegister: '登入 / 註冊',
myAccount: '我的帳戶',
logout: '登出',
signInToBook: '登入後即可預約此活動',
signInToBookSub: '註冊只需 10 秒，立即開始探索澳門世遺。',
guestBookingsTitle: '請先登入以查看預約',
guestBookingsSub: '登入或註冊後即可查看你的預約記錄。'
      },
  
      'zh-CN': {
        brand: '澳门世遗',
        brandSub: '文化探索与预约',
        navExplore: '探索活动',
        navFav: '我的收藏',
        navBookings: '我的预约',
        navAccount: '登录 / 注册',
        navAccountMobile: '👤 登录 / 注册',
        navBack: '返回探索',
        menuTitle: '菜单',
        heroTitle1: '探索澳门历史城区',
        heroTitle2: '预约你的文化导赏',
        heroSub: '走进世遗景点、手作工作坊与美食文化体验，用手机轻松浏览、即时检索、收藏与预约。',
        searchPlaceholder: '搜索景点、活动、地区或标签…',
        hotLabel: '热门：',
        hot1: '大三巴',
        hot2: '夜间导赏',
        hot3: '亲子',
        hot4: '手作',
        hot5: '美食',
        resultFound: '找到 {n} 个活动',
        resultRange: '找到 {n} 个活动，第 {a}-{b} 笔',
        favOnly: '只看收藏',
        sortRecommend: '推荐排序',
        sortPriceAsc: '价格低到高',
        sortPriceDesc: '价格高到低',
        sortRatingDesc: '评分最高',
        sortDurationAsc: '时长最短',
        sortNewest: '最新上架',
        prevPage: '上一页',
        nextPage: '下一页',
        filterTitle: '筛选',
        filterClear: '清除',
        filterCategory: '分类',
        filterDistrict: '地区',
        filterPrice: '价格',
        filterDate: '日期／场次',
        filterLang: '导赏语言',
        districtAll: '全部地区',
        districtMacau: '澳门半岛',
        districtTaipa: '氹仔',
        districtColoane: '路环',
        priceAll: '全部价格',
        priceFree: '免费',
        dateAll: '全部日期',
        date7days: '未来 7 天',
        dateWeekend: '周末',
        dateToday: '今日',
        apply: '套用筛选',
        applyWith: '套用筛选 ({n})',
        clearAll: '清除全部',
        clearAllToast: '已清除全部筛选',
        catArchitecture: '建筑遗产',
        catReligious: '宗教场所',
        catSquare: '广场前地',
        catMuseum: '博物馆展馆',
        catNight: '夜间导赏',
        catFamily: '亲子体验',
        catWorkshop: '手作工作坊',
        catFood: '美食文化',
        langCantonese: '粤语',
        langMandarin: '普通话',
        langEnglish: '英语',
        langPortuguese: '葡语',
        noResult: '没有找到符合的活动',
        noResultSub: '试试其他关键字，或清除筛选条件。',
        emptyClear: '清除全部条件',
        badgeHot: '热门',
        badgeNew: '新上架',
        viewDetail: '查看详情',
        bookNow: '立即预约',
        fromPrice: '起',
        lowStock: '仅剩 {n} 位',
        lowStockShort: '⚠ 仅剩 {n} 位',
        favAdded: '已加入收藏 ❤',
        favRemoved: '已移除收藏',
        featured: '本周精选',
        tips: '参观小知识',
        tipsSub: '尊重文化遗产，让旅程更美好。',
        tip1t: '📸 拍照礼仪',
        tip1d: '教堂内请勿使用闪光灯，保持安静。',
        tip2t: '👟 穿着建议',
        tip2d: '旧城区多石板路，建议穿舒适平底鞋。',
        tip3t: '🌦 天气提醒',
        tip3d: '夏季炎热多雨，请带水与雨具。',
        tip4t: '🗣 导赏语言',
        tip4d: '预约时可选择粤语、普通话、英语或葡语。',
        footerAbout: '推广澳门历史城区文化，提供导赏与活动预约。',
        footerLinks: '快速链接',
        footerContact: '联络我们',
        footerLang: '语言',
        footerCopy: '© 2025 澳门历史城区文化探索与活动预约平台',
        darkModeLabel: '深色模式',
        bookTitle: '预约此活动',
        formName: '姓名 *',
        formPhone: '手机（+853）*',
        formEmail: 'Email *',
        formDate: '参加日期 *',
        formSession: '场次时间 *',
        formPeople: '参加人数 *',
        formLang: '导赏语言 *',
        formNote: '特殊需求',
        formAgree: '我已阅读并同意活动条款与个人资料使用政策 *',
        sumSubtotal: '小计',
        sumDiscount: '团体折扣',
        sumFee: '平台服务费',
        sumTotal: '总额',
        submitBtn: '确认预约',
        submitLoading: '处理中…',
        bookSuccess: '预约成功！',
        orderNo: '订单编号：',
        printBtn: '打印凭证',
        backExplore: '返回探索',
        myBookings: '我的预约',
        noBookings: '尚无预约记录。',
        cancelBook: '取消预约',
        cancelConfirm: '确定取消此预约？',
        cancelDone: '已取消预约，款项将退回',
        tabIntro: '活动介绍',
        tabHighlights: '行程亮点',
        tabNotes: '注意事项',
        tabReviews: '评价',
        writeReview: '✍️ 撰写评价',
        reviewPlaceholder: '分享你的体验…',
        reviewSubmit: '送出评价',
        reviewSuccess: '评价已送出，感谢分享！',
        noReviews: '尚无评价，快来当第一个！',
        guest: '访客',
        notesList: ['请提前 10 分钟到达集合地点。', '活动期间请遵守导赏员指示，爱护文物。', '如遇恶劣天气，主办方保留更改或取消活动的权利。', '建议穿着舒适鞋子，自备饮用水。'],
        meetingPoint: '集合地点：',
        openMap: '在地图打开 ↗',
        perPerson: ' / 人',
        notFoundTitle: '找不到此活动',
        notFoundSub: '可能链接有误，或活动已下架。',
        notFoundBack: '回首页探索',
        breadcrumbHome: '首页',
        relatedTitle: '相关推荐',
        errName: '请填写姓名',
        errPhone: '请填写有效澳门手机（8 位数字）',
        errEmail: '请填写有效 Email',
        errDate: '请选择今天或之后的日期',
        errSession: '请选择有剩余名额的场次',
        errPeople: '人数不可超过剩余名额',
        errLang: '请选择导赏语言',
        errAgree: '请同意条款',
        remainTip: '剩余 {n} 位',
        selectSession: '请选择场次',
        successToast: '预约成功！',
        accountTitle: '我的账户',
        accountLoginTitle: '登录账号',
        accountRegisterTitle: '注册新账号',
        accountLoginTab: '登录',
        accountRegisterTab: '注册',
        accountName: '姓名',
        accountEmail: 'Email',
        accountPassword: '密码（至少 6 位）',
        accountSubmitLogin: '登录',
        accountSubmitRegister: '注册',
        accountLogout: '退出账号',
        accountNote: '资料只存于此浏览器本地，不会上传。',
        accountTabBookings: '我的预约',
        accountTabPayments: '支付记录',
        accountTabReviews: '我的评价',
        accountNoPayments: '尚无支付记录。',
        accountNoReviews: '尚无评价。',
        statusPaid: '已付款',
        statusRefunded: '已退款',
        minutes: '分钟',
        peopleUnit: '人',
        checkForm: '请检查表单字段',
        errAllFields: '请填写所有栏位',
        errEmailFormat: 'Email 格式不正确',
        errPasswordShort: '密码至少 6 位',
        errEmailTaken: '此 Email 已注册',
        errLoginFailed: 'Email 或密码错误',
        errSelectStar: '请选择星等',
        errEmptyComment: '请输入评论内容',
        toastLoginSuccess: '登录成功！',
        toastRegisterSuccess: '注册成功，已自动登录！',
        toastLogout: '已退出',
        recommendForYou: '你可能感兴趣的活动',
        guestPromptTitle: '请先登录或注册',
guestPromptSub: '登录后即可预约活动、收藏景点、查看订单记录。',
loginOrRegister: '登录 / 注册',
myAccount: '我的账户',
logout: '退出登录',
signInToBook: '登录后即可预约此活动',
signInToBookSub: '注册只需 10 秒，立即开始探索澳门世遗。',
guestBookingsTitle: '请先登录以查看预约',
guestBookingsSub: '登录或注册后即可查看你的预约记录。',
      },
  
      en: {
        brand: 'Macau Heritage',
        brandSub: 'Explore & Book',
        navExplore: 'Explore',
        navFav: 'Favorites',
        navBookings: 'My Bookings',
        navAccount: 'Sign In / Register',
        navAccountMobile: '👤 Sign In / Register',
        navBack: 'Back to Explore',
        menuTitle: 'Menu',
        heroTitle1: 'Explore Macau Historic Centre',
        heroTitle2: 'Book Your Cultural Tour',
        heroSub: 'Discover heritage sites, workshops and food experiences. Browse, search, save and book easily on your phone.',
        searchPlaceholder: 'Search spots, tours, districts or tags…',
        hotLabel: 'Hot:',
        hot1: 'Ruins of St. Paul',
        hot2: 'Night Tour',
        hot3: 'Family',
        hot4: 'Workshop',
        hot5: 'Food',
        resultFound: '{n} activities found',
        resultRange: '{n} activities found, showing {a}-{b}',
        favOnly: 'Favorites Only',
        sortRecommend: 'Recommended',
        sortPriceAsc: 'Price: Low to High',
        sortPriceDesc: 'Price: High to Low',
        sortRatingDesc: 'Top Rated',
        sortDurationAsc: 'Shortest Duration',
        sortNewest: 'Newest',
        prevPage: 'Prev',
        nextPage: 'Next',
        filterTitle: 'Filters',
        filterClear: 'Clear',
        filterCategory: 'Category',
        filterDistrict: 'District',
        filterPrice: 'Price',
        filterDate: 'Date / Session',
        filterLang: 'Guide Language',
        districtAll: 'All Districts',
        districtMacau: 'Macau Peninsula',
        districtTaipa: 'Taipa',
        districtColoane: 'Coloane',
        priceAll: 'All Prices',
        priceFree: 'Free',
        dateAll: 'All Dates',
        date7days: 'Next 7 Days',
        dateWeekend: 'Weekend',
        dateToday: 'Today',
        apply: 'Apply Filters',
        applyWith: 'Apply Filters ({n})',
        clearAll: 'Clear All',
        clearAllToast: 'All filters cleared',
        catArchitecture: 'Architecture',
        catReligious: 'Religious Site',
        catSquare: 'Square',
        catMuseum: 'Museum',
        catNight: 'Night Tour',
        catFamily: 'Family',
        catWorkshop: 'Workshop',
        catFood: 'Food Culture',
        langCantonese: 'Cantonese',
        langMandarin: 'Mandarin',
        langEnglish: 'English',
        langPortuguese: 'Portuguese',
        noResult: 'No activities found',
        noResultSub: 'Try other keywords, or clear your filters.',
        emptyClear: 'Clear All Filters',
        badgeHot: 'Hot',
        badgeNew: 'New',
        viewDetail: 'View Details',
        bookNow: 'Book Now',
        fromPrice: 'from',
        lowStock: 'Only {n} spots left',
        lowStockShort: '⚠ Only {n} spots left',
        favAdded: 'Added to favorites ❤',
        favRemoved: 'Removed from favorites',
        featured: 'Featured This Week',
        tips: 'Visitor Tips',
        tipsSub: 'Respect cultural heritage and enjoy your journey.',
        tip1t: '📸 Photo Etiquette',
        tip1d: 'No flash inside churches. Keep quiet.',
        tip2t: '👟 What to Wear',
        tip2d: 'Cobblestone streets — wear comfortable shoes.',
        tip3t: '🌦 Weather',
        tip3d: 'Hot and rainy in summer. Bring water and umbrella.',
        tip4t: '🗣 Guide Language',
        tip4d: 'Choose Cantonese, Mandarin, English or Portuguese.',
        footerAbout: 'Promoting Macau historic centre culture, tours and booking.',
        footerLinks: 'Quick Links',
        footerContact: 'Contact Us',
        footerLang: 'Language',
        footerCopy: '© 2025 Macau Heritage Tour & Booking Platform',
        darkModeLabel: 'Dark Mode',
        bookTitle: 'Book This Activity',
        formName: 'Name *',
        formPhone: 'Phone (+853) *',
        formEmail: 'Email *',
        formDate: 'Date *',
        formSession: 'Session *',
        formPeople: 'Participants *',
        formLang: 'Guide Language *',
        formNote: 'Special Requests',
        formAgree: 'I have read and agree to the terms and privacy policy *',
        sumSubtotal: 'Subtotal',
        sumDiscount: 'Group Discount',
        sumFee: 'Service Fee',
        sumTotal: 'Total',
        submitBtn: 'Confirm Booking',
        submitLoading: 'Processing…',
        bookSuccess: 'Booking Successful!',
        orderNo: 'Order No.: ',
        printBtn: 'Print Ticket',
        backExplore: 'Back to Explore',
        myBookings: 'My Bookings',
        noBookings: 'No bookings yet.',
        cancelBook: 'Cancel Booking',
        cancelConfirm: 'Are you sure you want to cancel this booking?',
        cancelDone: 'Booking cancelled, refund will be issued',
        tabIntro: 'About',
        tabHighlights: 'Highlights',
        tabNotes: 'Notes',
        tabReviews: 'Reviews',
        writeReview: '✍️ Write a Review',
        reviewPlaceholder: 'Share your experience…',
        reviewSubmit: 'Submit Review',
        reviewSuccess: 'Review submitted. Thanks!',
        noReviews: 'No reviews yet. Be the first!',
        guest: 'Guest',
        notesList: ['Please arrive 10 minutes early.', 'Follow guide instructions and protect the relics.', 'In case of bad weather, organizer may change or cancel.', 'Wear comfortable shoes and bring water.'],
        meetingPoint: 'Meeting point: ',
        openMap: 'Open in Map ↗',
        perPerson: ' / person',
        notFoundTitle: 'Activity Not Found',
        notFoundSub: 'The link may be invalid, or the activity has been removed.',
        notFoundBack: 'Back to Home',
        breadcrumbHome: 'Home',
        relatedTitle: 'You May Also Like',
        errName: 'Please enter your name',
        errPhone: 'Please enter a valid Macau phone (8 digits)',
        errEmail: 'Please enter a valid email',
        errDate: 'Please choose today or a future date',
        errSession: 'Please select a session with availability',
        errPeople: 'Participants exceed remaining spots',
        errLang: 'Please select a guide language',
        errAgree: 'Please agree to the terms',
        remainTip: '{n} spots left',
        selectSession: 'Select a session',
        successToast: 'Booking Successful!',
        accountTitle: 'My Account',
        accountLoginTitle: 'Sign In',
        accountRegisterTitle: 'Create Account',
        accountLoginTab: 'Sign In',
        accountRegisterTab: 'Register',
        accountName: 'Name',
        accountEmail: 'Email',
        accountPassword: 'Password (min 6 chars)',
        accountSubmitLogin: 'Sign In',
        accountSubmitRegister: 'Register',
        accountLogout: 'Sign Out',
        accountNote: 'Data is stored locally in your browser only.',
        accountTabBookings: 'My Bookings',
        accountTabPayments: 'Payments',
        accountTabReviews: 'My Reviews',
        accountNoPayments: 'No payment records yet.',
        accountNoReviews: 'No reviews yet.',
        statusPaid: 'Paid',
        statusRefunded: 'Refunded',
        minutes: 'min',
        peopleUnit: 'people',
        checkForm: 'Please check the form',
        errAllFields: 'Please fill in all fields',
        errEmailFormat: 'Invalid email format',
        errPasswordShort: 'Password must be at least 6 characters',
        errEmailTaken: 'This email is already registered',
        errLoginFailed: 'Wrong email or password',
        errSelectStar: 'Please select a star rating',
        errEmptyComment: 'Please enter your comment',
        toastLoginSuccess: 'Signed in successfully!',
        toastRegisterSuccess: 'Registered and signed in!',
        toastLogout: 'Signed out',
        recommendForYou: 'You May Also Like',
        guestPromptTitle: 'Please sign in or register',
guestPromptSub: 'Sign in to book activities, save favorites and view your orders.',
loginOrRegister: 'Sign In / Register',
myAccount: 'My Account',
logout: 'Sign Out',
signInToBook: 'Sign in to book this activity',
signInToBookSub: 'Registration takes 10 seconds. Start exploring Macau heritage now.',
guestBookingsTitle: 'Sign in to view your bookings',
guestBookingsSub: 'Sign in or register to view your booking records.',
      }
    };
  
    // ============ 記憶體快取：不依賴 localStorage 讀取時序 ============
    var MH_I18N = {
      _currentLang: (function () {
        try { return localStorage.getItem(K_LANG) || 'zh-TW'; } catch (e) { return 'zh-TW'; }
      })(),
  
      getLang: function () {
        return this._currentLang || 'zh-TW';
      },
  
      setLang: function (lang) {
        if (!dict[lang]) lang = 'zh-TW';
        // 相同語言不重複執行，避免無限循環
        if (this._currentLang === lang) return;
        this._currentLang = lang;
        try { localStorage.setItem(K_LANG, lang); } catch (e) {}
        try { this.applyToDOM(); } catch (e) { console.error('[i18n] applyToDOM:', e); }
        try {
          window.dispatchEvent(new Event('mh-lang-change'));
        } catch (e) { console.error('[i18n] dispatch:', e); }
      },
  
      t: function (key, vars) {
        var lang = this.getLang();
        var v = (dict[lang] && dict[lang][key] !== undefined)
          ? dict[lang][key]
          : (dict['zh-TW'][key] !== undefined ? dict['zh-TW'][key] : key);
        if (typeof v === 'string' && vars) {
          Object.keys(vars).forEach(function (k) {
            v = v.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
          });
        }
        return v;
      },
  
      tList: function (key) {
        var lang = this.getLang();
        var v = (dict[lang] && dict[lang][key]) || dict['zh-TW'][key];
        return Array.isArray(v) ? v : [];
      },
  
      applyToDOM: function () {
        var lang = this.getLang();
        document.documentElement.setAttribute('lang', lang === 'zh-TW' ? 'zh-Hant' : (lang === 'zh-CN' ? 'zh-Hans' : 'en'));
        var self = this;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
          var key = el.dataset.i18n;
          var v = self.t(key);
          if (typeof v === 'string') el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          el.setAttribute('placeholder', self.t(el.dataset.i18nPlaceholder));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
          el.setAttribute('title', self.t(el.dataset.i18nTitle));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
          el.setAttribute('aria-label', self.t(el.dataset.i18nAria));
        });
        var label = { 'zh-TW': '繁中', 'zh-CN': '简中', en: 'EN' }[lang];
        document.querySelectorAll('[data-lang-label]').forEach(function (el) { el.textContent = label; });
      },
  
      label: function () {
        var lang = this.getLang();
        return { 'zh-TW': '繁中', 'zh-CN': '简中', en: 'EN' }[lang];
      }
    };
  
    window.MH_I18N = MH_I18N;
  
    // ============ 事件綁定（語言選單、切換）============
    function bindLangEvents() {
      if (window.__langBound) return;
      window.__langBound = true;
  
      document.addEventListener('click', function (e) {
        var toggle = e.target.closest('#langToggle');
        var menu = document.getElementById('langMenu');
        if (toggle && menu) {
          menu.classList.toggle('hidden');
          e.stopPropagation();
          return;
        }
        var opt = e.target.closest('[data-lang]');
        if (opt) {
          try { MH_I18N.setLang(opt.dataset.lang); } catch (err) { console.error('[i18n] setLang:', err); }
          if (menu) menu.classList.add('hidden');
          var drawer = document.getElementById('mobileMenu');
          if (drawer && !drawer.classList.contains('hidden') && opt.closest('#mobileMenu')) {
            drawer.classList.add('hidden');
          }
          return;
        }
        if (menu && !menu.contains(e.target)) menu.classList.add('hidden');
      });
  
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          var menu = document.getElementById('langMenu');
          if (menu) menu.classList.add('hidden');
        }
      });
    }
  
    // 初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        MH_I18N.applyToDOM();
        bindLangEvents();
      });
    } else {
      MH_I18N.applyToDOM();
      bindLangEvents();
    }
  })();