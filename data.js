/* 澳門歷史城區文化探索與活動預約平台 — 模擬資料（多語言版） */
(function () {
  function d(offset) {
    var dt = new Date();
    dt.setDate(dt.getDate() + offset);
    var y = dt.getFullYear();
    var m = String(dt.getMonth() + 1).padStart(2, '0');
    var day = String(dt.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }
  function s(offset, time, remaining, capacity) {
    return { date: d(offset), time: time, remaining: remaining, capacity: capacity };
  }

  var RAW = [
    {
      id: 'dasamba',
      title: '大三巴牌坊深度導賞', title_cn: '大三巴牌坊深度导赏', title_en: 'Ruins of St. Paul Guided Tour',
      category: '建築遺產', district: '澳門半島',
      image: 'images/dasamba.jpg', gallery: ['images/dasamba.jpg', 'images/dasamba2.jpg'],
      shortDesc: '走進澳門地標，解讀巴洛克式教堂遺址的歷史密碼。',
      shortDesc_cn: '走进澳门地标，解读巴洛克式教堂遗址的历史密码。',
      shortDesc_en: "Explore Macau's iconic landmark and decode the history of this Baroque church ruin.",
      description: '大三巴牌坊原是聖保祿教堂的前壁，1835 年大火後僅存前壁與石階。導賞員將帶你觀察浮雕、聖像與東方裝飾，認識澳門作為中西文化交匯點的歷史。',
      description_cn: '大三巴牌坊原是圣保禄教堂的前壁，1835 年大火后仅存前壁与石阶。导赏员将带你观察浮雕、圣像与东方装饰，认识澳门作为中西文化交汇点的历史。',
      description_en: 'The Ruins of St. Paul was the facade of the Church of St. Paul. After a fire in 1835, only the facade and stone steps remained. Join our guide to observe the reliefs, statues and Eastern ornaments, and learn about Macau as a crossroads of Chinese and Western cultures.',
      highlights: ['近距離欣賞巴洛克浮雕與聖母像', '了解聖保祿學院與遠東傳教史'],
      highlights_cn: ['近距离欣赏巴洛克浮雕与圣母像', '了解圣保禄学院与远东传教史'],
      highlights_en: ['Admire Baroque reliefs and the Madonna statue up close', "Learn about St. Paul's College and Far East missionary history"],
      durationMins: 90, price: 120, originalPrice: 160, rating: 4.8, reviewCount: 326,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '10:00', 8, 20), s(2, '15:00', 12, 20)],
      meetingPoint: '大三巴牌坊前地', meetingPoint_cn: '大三巴牌坊前地', meetingPoint_en: 'Ruins of St. Paul Square',
      tags: ['世遺', '打卡', '歷史', '親子'], isHot: true, isNew: false
    },
    {
      id: 'maakok',
      title: '媽閣廟祈福文化導賞', title_cn: '妈阁庙祈福文化导赏', title_en: 'A-Ma Temple Blessing Tour',
      category: '宗教場所', district: '澳門半島',
      image: 'images/maakok.jpg', gallery: ['images/maakok.jpg', 'images/maakok2.jpg'],
      shortDesc: '澳門最古老廟宇，聆聽媽祖與漁村的故事。',
      shortDesc_cn: '澳门最古老庙宇，聆听妈祖与渔村的故事。',
      shortDesc_en: "Macau's oldest temple — listen to the stories of A-Ma and the fishing village.",
      description: '媽閣廟是澳門最古老的宗教建築之一，見證漁村信仰與葡萄牙人登陸的歷史。導賞將介紹廟內石刻、香火文化與澳門地名的由來。',
      description_cn: '妈阁庙是澳门最古老的宗教建筑之一，见证渔村信仰与葡萄牙人登陆的历史。导赏将介绍庙内石刻、香火文化与澳门地名的由来。',
      description_en: 'A-Ma Temple is one of Macau\'s oldest religious structures, witnessing the fishing village\'s beliefs and the arrival of the Portuguese. The tour introduces the stone inscriptions, incense culture and the origin of the name "Macau".',
      highlights: ['參拜媽祖像與古老石刻', '認識澳門地名「Macau」的起源'],
      highlights_cn: ['参拜妈祖像与古老石刻', '认识澳门地名“Macau”的起源'],
      highlights_en: ['Pay respects to the A-Ma statue and ancient inscriptions', 'Discover the origin of the name "Macau"'],
      durationMins: 75, price: 80, originalPrice: 110, rating: 4.7, reviewCount: 214,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '09:30', 10, 25), s(3, '14:30', 15, 25)],
      meetingPoint: '媽閣廟正門', meetingPoint_cn: '妈阁庙正门', meetingPoint_en: 'A-Ma Temple Main Entrance',
      tags: ['世遺', '宗教', '歷史'], isHot: true, isNew: false
    },
    {
      id: 'leal',
      title: '議事亭前地與市政署大樓', title_cn: '议事亭前地与市政署大楼', title_en: 'Senado Square & Leal Senado Building',
      category: '廣場前地', district: '澳門半島',
      image: 'images/leal.jpg', gallery: ['images/leal.jpg', 'images/leal2.jpg'],
      shortDesc: '漫步葡式廣場，欣賞黑白波浪碎石與南歐建築。',
      shortDesc_cn: '漫步葡式广场，欣赏黑白波浪碎石与南欧建筑。',
      shortDesc_en: 'Stroll through a Portuguese square with black-and-white wave-pattern cobblestones and Southern European architecture.',
      description: '議事亭前地是澳門歷史城區的核心廣場，四周環繞市政署大樓、郵政總局等葡式建築。導賞將帶你認識廣場的演變與澳門市政歷史。',
      description_cn: '议事亭前地是澳门历史城区的核心广场，四周环绕市政署大楼、邮政总局等葡式建筑。导赏将带你认识广场的演变与澳门市政历史。',
      description_en: "Senado Square is the heart of Macau's Historic Centre, surrounded by the Leal Senado Building, the General Post Office and other Portuguese-style buildings. The tour explores the square's evolution and Macau's municipal history.",
      highlights: ['欣賞葡式碎石波浪地面', '入內參觀市政署大樓畫廊'],
      highlights_cn: ['欣赏葡式碎石波浪地面', '入内参观市政署大楼画廊'],
      highlights_en: ['Admire the Portuguese wave-pattern mosaic pavement', 'Visit the Leal Senado Building gallery'],
      durationMins: 60, price: 60, originalPrice: 90, rating: 4.6, reviewCount: 178,
      languages: ['粵語', '普通話', '英語', '葡語'],
      sessions: [s(1, '11:00', 18, 30), s(2, '16:00', 20, 30)],
      meetingPoint: '議事亭前地噴水池旁', meetingPoint_cn: '议事亭前地喷水池旁', meetingPoint_en: 'Next to the fountain, Senado Square',
      tags: ['世遺', '打卡', '建築'], isHot: false, isNew: false
    },
    {
      id: 'rosa',
      title: '玫瑰聖母堂與聖物寶庫', title_cn: '玫瑰圣母堂与圣物宝库', title_en: "St. Dominic's Church & Treasury of Sacred Art",
      category: '宗教場所', district: '澳門半島',
      image: 'images/rosa.jpg', gallery: ['images/rosa.jpg', 'images/rosa2.jpg'],
      shortDesc: '鵝黃色巴洛克教堂，收藏珍貴天主教聖物。',
      shortDesc_cn: '鹅黄色巴洛克教堂，收藏珍贵天主教圣物。',
      shortDesc_en: 'A pale-yellow Baroque church housing precious Catholic relics.',
      description: '玫瑰聖母堂建於 1587 年，是澳門最古老的天主教堂之一。堂內聖物寶庫珍藏大量宗教藝術品，導賞將解說其建築特色與歷史。',
      description_cn: '玫瑰圣母堂建于 1587 年，是澳门最古老的天主教堂之一。堂内圣物宝库珍藏大量宗教艺术品，导赏将解说其建筑特色与历史。',
      description_en: "Built in 1587, St. Dominic's Church is one of Macau's oldest Catholic churches. Its Treasury of Sacred Art houses a large collection of religious artworks. The tour will explain its architectural features and history.",
      highlights: ['參觀聖物寶庫與耶穌受難像', '了解天主教在遠東的傳播'],
      highlights_cn: ['参观圣物宝库与耶稣受难像', '了解天主教在远东的传播'],
      highlights_en: ['Visit the Treasury of Sacred Art and the Crucifixion', 'Learn about the spread of Catholicism in the Far East'],
      durationMins: 70, price: 90, originalPrice: 120, rating: 4.7, reviewCount: 156,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(2, '10:30', 6, 20), s(4, '15:30', 9, 20)],
      meetingPoint: '玫瑰聖母堂正門', meetingPoint_cn: '玫瑰圣母堂正门', meetingPoint_en: "St. Dominic's Church Main Entrance",
      tags: ['世遺', '宗教', '藝術'], isHot: false, isNew: true
    },
    {
      id: 'forta',
      title: '大炮台與澳門博物館', title_cn: '大炮台与澳门博物馆', title_en: 'Mount Fortress & Macau Museum',
      category: '博物館展館', district: '澳門半島',
      image: 'images/forta.jpg', gallery: ['images/forta.jpg', 'images/forta2.jpg'],
      shortDesc: '登高俯瞰澳門全景，走進博物館認識小城故事。',
      shortDesc_cn: '登高俯瞰澳门全景，走进博物馆认识小城故事。',
      shortDesc_en: "Climb up for a panoramic view of Macau, and step into the museum to learn the city's stories.",
      description: '大炮台建於 1617 年，曾為澳門防禦核心。現今台上可俯瞰大三巴與澳門半島，並連接澳門博物館，展示澳門歷史與民俗。',
      description_cn: '大炮台建于 1617 年，曾为澳门防御核心。现今台上可俯瞰大三巴与澳门半岛，并连接澳门博物馆，展示澳门历史与民俗。',
      description_en: "Built in 1617, Mount Fortress was once the core of Macau's defenses. Today it offers panoramic views of the Ruins of St. Paul and the Macau Peninsula, and connects to the Macau Museum, showcasing local history and folklore.",
      highlights: ['登上炮台俯瞰澳門市景', '參觀澳門博物館常設展'],
      highlights_cn: ['登上炮台俯瞰澳门市景', '参观澳门博物馆常设展'],
      highlights_en: ['Climb the fortress for panoramic city views', 'Visit the Macau Museum permanent exhibition'],
      durationMins: 120, price: 150, originalPrice: 200, rating: 4.8, reviewCount: 402,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '14:00', 14, 30), s(3, '10:00', 16, 30)],
      meetingPoint: '大炮台入口', meetingPoint_cn: '大炮台入口', meetingPoint_en: 'Mount Fortress Entrance',
      tags: ['世遺', '博物館', '親子', '打卡'], isHot: true, isNew: false
    },
    {
      id: 'mandarin',
      title: '鄭家大屋世遺導賞', title_cn: '郑家大屋世遗导赏', title_en: "Mandarin's House Heritage Tour",
      category: '建築遺產', district: '澳門半島',
      image: 'images/mandarin.jpg', gallery: ['images/mandarin.jpg', 'images/mandarin2.jpg'],
      shortDesc: '嶺南院落與西式裝飾交融，近代思想家鄭觀應故居。',
      shortDesc_cn: '岭南院落与西式装饰交融，近代思想家郑观应故居。',
      shortDesc_en: "A blend of Lingnan courtyard and Western decoration — the former residence of modern thinker Zheng Guanying.",
      description: '鄭家大屋是澳門現存最大的民居建築群之一，融合嶺南與西式風格。導賞將介紹鄭觀應生平、大屋格局與修復過程。',
      description_cn: '郑家大屋是澳门现存最大的民居建筑群之一，融合岭南与西式风格。导赏将介绍郑观应生平、大屋格局与修复过程。',
      description_en: "Mandarin's House is one of the largest surviving residential complexes in Macau, blending Lingnan and Western styles. The tour will introduce Zheng Guanying's life, the house's layout and its restoration.",
      highlights: ['欣賞中西合璧的院落建築', '認識《盛世危言》與鄭觀應'],
      highlights_cn: ['欣赏中西合璧的院落建筑', '认识《盛世危言》与郑观应'],
      highlights_en: ['Admire the Sino-Western courtyard architecture', 'Learn about "Words of Warning in Prosperous Times" and Zheng Guanying'],
      durationMins: 80, price: 100, originalPrice: 130, rating: 4.6, reviewCount: 132,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(2, '11:00', 7, 18), s(4, '15:00', 11, 18)],
      meetingPoint: '鄭家大屋正門', meetingPoint_cn: '郑家大屋正门', meetingPoint_en: "Mandarin's House Main Entrance",
      tags: ['世遺', '建築', '歷史'], isHot: false, isNew: false
    },
    {
      id: 'hort',
      title: '崗頂前地與何東圖書館', title_cn: '岗顶前地与何东图书馆', title_en: "St. Augustine's Square & Sir Robert Ho Tung Library",
      category: '建築遺產', district: '澳門半島',
      image: 'images/hort.jpg', gallery: ['images/hort.jpg', 'images/hort2.jpg'],
      shortDesc: '幽靜世遺廣場，走進花園式圖書館。',
      shortDesc_cn: '幽静世遗广场，走进花园式图书馆。',
      shortDesc_en: 'A quiet heritage square — step into a garden-style library.',
      description: '崗頂前地四周環繞何東圖書館、聖奧斯定堂與崗頂劇院。導賞將帶你感受澳門少見的歐陸靜謐，並入內參觀何東圖書館。',
      description_cn: '岗顶前地四周环绕何东图书馆、圣奥斯定堂与岗顶剧院。导赏将带你感受澳门少见的欧陆静谧，并入内参观何东图书馆。',
      description_en: "St. Augustine's Square is surrounded by the Sir Robert Ho Tung Library, St. Augustine's Church and the Dom Pedro V Theatre. The tour will let you experience Macau's rare European tranquility and visit the library inside.",
      highlights: ['參觀何東圖書館與花園', '欣賞崗頂劇院新古典建築'],
      highlights_cn: ['参观何东图书馆与花园', '欣赏岗顶剧院新古典建筑'],
      highlights_en: ['Visit the Sir Robert Ho Tung Library and garden', 'Admire the neoclassical Dom Pedro V Theatre'],
      durationMins: 70, price: 70, originalPrice: 100, rating: 4.7, reviewCount: 98,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '15:30', 12, 20), s(3, '10:30', 14, 20)],
      meetingPoint: '崗頂前地何東圖書館前', meetingPoint_cn: '岗顶前地何东图书馆前', meetingPoint_en: "In front of Sir Robert Ho Tung Library, St. Augustine's Square",
      tags: ['世遺', '建築', '閱讀'], isHot: false, isNew: true
    },
    {
      id: 'lou',
      title: '盧家大屋葡式宅院', title_cn: '卢家大屋葡式宅院', title_en: 'Lou Kau Mansion',
      category: '建築遺產', district: '澳門半島',
      image: 'images/lou.jpg', gallery: ['images/lou.jpg', 'images/lou2.jpg'],
      shortDesc: '晚清富商大宅，細看灰塑、滿洲窗與趟櫳門。',
      shortDesc_cn: '晚清富商大宅，细看灰塑、满洲窗与趟栊门。',
      shortDesc_en: "A late-Qing merchant's mansion — see the stucco, Manchurian windows and sliding doors up close.",
      description: '盧家大屋是澳門著名商人盧九的故居，建築裝飾精緻，融合中西元素。導賞將解說大屋的空間佈局與澳門華商歷史。',
      description_cn: '卢家大屋是澳门著名商人卢九的故居，建筑装饰精致，融合中西元素。导赏将解说大屋的空间布局与澳门华商历史。',
      description_en: "Lou Kau Mansion is the former residence of the famous Macau merchant Lou Kau. Its exquisite decorations blend Chinese and Western elements. The tour will explain the mansion's spatial layout and Macau's Chinese merchant history.",
      highlights: ['觀賞精美灰塑與滿洲窗', '了解晚清澳門華商生活'],
      highlights_cn: ['观赏精美灰塑与满洲窗', '了解晚清澳门华商生活'],
      highlights_en: ['Admire the exquisite stucco and Manchurian windows', 'Learn about late-Qing Macau Chinese merchant life'],
      durationMins: 60, price: 65, originalPrice: 95, rating: 4.5, reviewCount: 87,
      languages: ['粵語', '普通話'],
      sessions: [s(2, '14:00', 9, 16), s(5, '11:30', 10, 16)],
      meetingPoint: '盧家大屋正門', meetingPoint_cn: '卢家大屋正门', meetingPoint_en: 'Lou Kau Mansion Main Entrance',
      tags: ['世遺', '建築', '歷史'], isHot: false, isNew: false
    },
    {
      id: 'guia',
      title: '東望洋炮台與燈塔', title_cn: '东望洋炮台与灯塔', title_en: 'Guia Fortress & Lighthouse',
      category: '建築遺產', district: '澳門半島',
      image: 'images/guia.jpg', gallery: ['images/guia.jpg', 'images/guia2.jpg'],
      shortDesc: '中國海岸第一座現代燈塔，俯瞰澳門全景。',
      shortDesc_cn: '中国海岸第一座现代灯塔，俯瞰澳门全景。',
      shortDesc_en: 'The first modern lighthouse on the China coast — panoramic views of Macau.',
      description: '東望洋炮台與燈塔建於 17 世紀，是澳門世界遺產的重要組成。登上燈塔旁可眺望澳門半島與離島景色，導賞將介紹其軍事與航海功能。',
      description_cn: '东望洋炮台与灯塔建于 17 世纪，是澳门世界遗产的重要组成。登上灯塔旁可眺望澳门半岛与离岛景色，导赏将介绍其军事与航海功能。',
      description_en: "Built in the 17th century, Guia Fortress and Lighthouse are key parts of Macau's World Heritage. From beside the lighthouse, you can overlook the Macau Peninsula and the islands. The tour will introduce its military and navigational functions.",
      highlights: ['參觀聖母雪地殿教堂', '登上東望洋山俯瞰澳門'],
      highlights_cn: ['参观圣母雪地殿教堂', '登上东望洋山俯瞰澳门'],
      highlights_en: ['Visit the Chapel of Our Lady of Guia', 'Climb Guia Hill for panoramic views of Macau'],
      durationMins: 100, price: 110, originalPrice: 140, rating: 4.8, reviewCount: 267,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '09:00', 5, 20), s(3, '16:30', 8, 20)],
      meetingPoint: '東望洋炮台入口', meetingPoint_cn: '东望洋炮台入口', meetingPoint_en: 'Guia Fortress Entrance',
      tags: ['世遺', '燈塔', '打卡', '親子'], isHot: true, isNew: false
    },
    {
      id: 'naacha',
      title: '哪吒廟與舊城區漫步', title_cn: '哪吒庙与旧城区漫步', title_en: 'Na Tcha Temple & Old Town Walk',
      category: '宗教場所', district: '澳門半島',
      image: 'images/naacha.jpg', gallery: ['images/naacha.jpg', 'images/naacha2.jpg'],
      shortDesc: '小巧廟宇藏身世遺核心，聆聽民間信仰故事。',
      shortDesc_cn: '小巧庙宇藏身世遗核心，聆听民间信仰故事。',
      shortDesc_en: 'A small temple hidden in the heart of the heritage area — listen to the stories of folk beliefs.',
      description: '哪吒廟位於大三巴牌坊旁，是澳門民間信仰的重要場所。導賞將串連舊城區小巷，介紹哪吒信仰與社區生活。',
      description_cn: '哪吒庙位于大三巴牌坊旁，是澳门民间信仰的重要场所。导赏将串连旧城区小巷，介绍哪吒信仰与社区生活。',
      description_en: "The Na Tcha Temple is next to the Ruins of St. Paul and an important site of Macau's folk beliefs. The tour connects the old town alleys and introduces Na Tcha worship and community life.",
      highlights: ['參觀哪吒廟與傳統祭儀', '漫步大三巴街區小巷'],
      highlights_cn: ['参观哪吒庙与传统祭仪', '漫步大三巴街区小巷'],
      highlights_en: ['Visit the Na Tcha Temple and traditional rituals', 'Stroll the alleys around the Ruins of St. Paul'],
      durationMins: 75, price: 85, originalPrice: 115, rating: 4.6, reviewCount: 145,
      languages: ['粵語', '普通話'],
      sessions: [s(2, '10:00', 11, 18), s(4, '14:30', 13, 18)],
      meetingPoint: '哪吒廟前地', meetingPoint_cn: '哪吒庙前地', meetingPoint_en: 'Na Tcha Temple Square',
      tags: ['世遺', '宗教', '社區'], isHot: false, isNew: true
    },
    {
      id: 'night',
      title: '世遺夜間導賞', title_cn: '世遗夜间导赏', title_en: 'Heritage Night Tour',
      category: '夜間導賞', district: '澳門半島',
      image: 'images/night.jpg', gallery: ['images/night.jpg', 'images/night2.jpg'],
      shortDesc: '燈光下的歷史城區，感受澳門夜晚的靜謐與浪漫。',
      shortDesc_cn: '灯光下的历史城区，感受澳门夜晚的静谧与浪漫。',
      shortDesc_en: 'The Historic Centre under the lights — feel the peace and romance of Macau at night.',
      description: '夜間導賞將帶你走訪議事亭前地、大三巴與崗頂前地，欣賞世遺建築在燈光下的另一種面貌，並聆聽澳門夜間故事。',
      description_cn: '夜间导赏将带你走访议事亭前地、大三巴与岗顶前地，欣赏世遗建筑在灯光下的另一种面貌，并聆听澳门夜间故事。',
      description_en: "The night tour takes you to Senado Square, the Ruins of St. Paul and St. Augustine's Square, to admire the heritage buildings under the lights and listen to Macau's nighttime stories.",
      highlights: ['夜拍大三巴與議事亭前地', '聆聽澳門夜間歷史軼事'],
      highlights_cn: ['夜拍大三巴与议事亭前地', '聆听澳门夜间历史轶事'],
      highlights_en: ['Night photography at the Ruins of St. Paul and Senado Square', "Listen to Macau's nighttime historical anecdotes"],
      durationMins: 120, price: 180, originalPrice: 240, rating: 4.9, reviewCount: 198,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '19:30', 10, 25), s(3, '19:30', 15, 25)],
      meetingPoint: '議事亭前地噴水池旁', meetingPoint_cn: '议事亭前地喷水池旁', meetingPoint_en: 'Next to the fountain, Senado Square',
      tags: ['夜間', '世遺', '攝影'], isHot: true, isNew: true
    },
    {
      id: 'tile',
      title: '葡式瓷磚手作坊', title_cn: '葡式瓷砖手作坊', title_en: 'Portuguese Tile Workshop',
      category: '手作工作坊', district: '氹仔',
      image: 'images/tile.jpg', gallery: ['images/tile.jpg', 'images/tile2.jpg'],
      shortDesc: '親手彩繪葡式瓷磚，把澳門記憶帶回家。',
      shortDesc_cn: '亲手彩绘葡式瓷砖，把澳门记忆带回家。',
      shortDesc_en: 'Hand-paint your own Portuguese tile and take a piece of Macau home.',
      description: '在導師指導下認識葡萄牙瓷磚藝術，並親手繪製專屬瓷磚。完成後可帶走作品，適合親子與情侶體驗。',
      description_cn: '在导师指导下认识葡萄牙瓷砖艺术，并亲手绘制专属瓷砖。完成后可带走作品，适合亲子与情侣体验。',
      description_en: "Under the instructor's guidance, learn about Portuguese tile art and hand-paint your own tile. Take your work home — great for families and couples.",
      highlights: ['認識葡式瓷磚圖案與歷史', '親手彩繪專屬瓷磚'],
      highlights_cn: ['认识葡式瓷砖图案与历史', '亲手彩绘专属瓷砖'],
      highlights_en: ['Learn about Portuguese tile patterns and history', 'Hand-paint your own tile'],
      durationMins: 150, price: 220, originalPrice: 280, rating: 4.8, reviewCount: 76,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(2, '14:00', 6, 12), s(5, '10:00', 8, 12)],
      meetingPoint: '氹仔舊城區藝術空間', meetingPoint_cn: '氹仔旧城区艺术空间', meetingPoint_en: 'Taipa Old Town Art Space',
      tags: ['手作', '親子', '葡式'], isHot: false, isNew: true
    },
    {
      id: 'food',
      title: '澳門土生菜文化體驗', title_cn: '澳门土生菜文化体验', title_en: 'Macanese Cuisine Cultural Experience',
      category: '美食文化', district: '路環',
      image: 'images/food.jpg', gallery: ['images/food.jpg', 'images/food2.jpg'],
      shortDesc: '品嚐土生葡菜，認識澳門獨特飲食文化。',
      shortDesc_cn: '品尝土生葡菜，认识澳门独特饮食文化。',
      shortDesc_en: "Taste Macanese dishes and learn about Macau's unique food culture.",
      description: '土生菜是澳門非物質文化遺產。活動將介紹土生菜歷史，並品嚐多道經典菜式，如非洲雞、葡式蛋撻與馬介休球。',
      description_cn: '土生菜是澳门非物质文化遗产。活动将介绍土生菜历史，并品尝多道经典菜式，如非洲鸡、葡式蛋挞与马介休球。',
      description_en: 'Macanese cuisine is an intangible cultural heritage of Macau. The experience introduces its history and lets you taste classic dishes such as African Chicken, Portuguese Egg Tarts and Bacalhau Croquettes.',
      highlights: ['品嚐多道土生葡菜', '了解澳門飲食文化融合'],
      highlights_cn: ['品尝多道土生葡菜', '了解澳门饮食文化融合'],
      highlights_en: ["Taste several classic Macanese dishes", "Learn about the fusion of Macau's food culture"],
      durationMins: 120, price: 260, originalPrice: 320, rating: 4.7, reviewCount: 121,
      languages: ['粵語', '普通話', '英語'],
      sessions: [s(1, '12:00', 8, 16), s(4, '18:30', 10, 16)],
      meetingPoint: '路環市區餐廳', meetingPoint_cn: '路环市区餐厅', meetingPoint_en: 'Restaurant in Coloane Village',
      tags: ['美食', '文化', '親子'], isHot: false, isNew: false
    },
    {
      id: 'family',
      title: '親子世遺尋寶', title_cn: '亲子世遗寻宝', title_en: 'Family Heritage Treasure Hunt',
      category: '親子體驗', district: '澳門半島',
      image: 'images/family.jpg', gallery: ['images/family.jpg', 'images/family2.jpg'],
      shortDesc: '用尋寶遊戲帶孩子認識澳門世遺，寓教於樂。',
      shortDesc_cn: '用寻宝游戏带孩子认识澳门世遗，寓教于乐。',
      shortDesc_en: "A treasure hunt that introduces kids to Macau's heritage — fun and educational.",
      description: '專為 5-12 歲家庭設計，以尋寶地圖串連大三巴、哪吒廟與大炮台。完成任務可獲小禮物，讓孩子在遊戲中學習歷史。',
      description_cn: '专为 5-12 岁家庭设计，以寻宝地图串连大三巴、哪吒庙与大炮台。完成任务可获小礼物，让孩子在游戏中学习历史。',
      description_en: 'Designed for families with kids aged 5-12, a treasure map connects the Ruins of St. Paul, Na Tcha Temple and Mount Fortress. Complete tasks to win small gifts, letting kids learn history through play.',
      highlights: ['領取尋寶地圖與任務包', '完成任務獲世遺小禮物'],
      highlights_cn: ['领取寻宝地图与任务包', '完成任务获世遗小礼物'],
      highlights_en: ['Get a treasure map and task pack', 'Complete missions for heritage-themed gifts'],
      durationMins: 100, price: 140, originalPrice: 180, rating: 4.9, reviewCount: 64,
      languages: ['粵語', '普通話'],
      sessions: [s(1, '10:30', 10, 20), s(3, '15:00', 12, 20)],
      meetingPoint: '大三巴牌坊前地', meetingPoint_cn: '大三巴牌坊前地', meetingPoint_en: 'Ruins of St. Paul Square',
      tags: ['親子', '尋寶', '世遺'], isHot: true, isNew: true
    }
  ];

  function buildFor(lang) {
    var suffix = lang === 'zh-CN' ? '_cn' : (lang === 'en' ? '_en' : '');
    return RAW.map(function (item) {
      function pick(field) {
        return (suffix && item[field + suffix] !== undefined) ? item[field + suffix] : item[field];
      }
      return {
        id: item.id,
        title: pick('title'),
        category: item.category,
        district: item.district,
        image: item.image,
        gallery: item.gallery,
        shortDesc: pick('shortDesc'),
        description: pick('description'),
        highlights: pick('highlights'),
        durationMins: item.durationMins,
        price: item.price,
        originalPrice: item.originalPrice,
        rating: item.rating,
        reviewCount: item.reviewCount,
        languages: item.languages,
        sessions: item.sessions,
        meetingPoint: pick('meetingPoint'),
        tags: item.tags,
        isHot: item.isHot,
        isNew: item.isNew
      };
    });
  }

    // ★★★ 修復：改用 getSpots() 每次即時查詢當前語言 ★★★
  // 不再依賴事件順序或全域變數重新賦值
  window.getSpots = function () {
    var lang = 'zh-TW';
    try {
      if (window.MH_I18N && typeof window.MH_I18N.getLang === 'function') {
        lang = window.MH_I18N.getLang();
      } else {
        lang = localStorage.getItem('mh_lang') || 'zh-TW';
      }
    } catch (e) { lang = 'zh-TW'; }
    return buildFor(lang);
  };

  // 兼容舊寫法：HERITAGE_SPOTS 用 getter 代理到 getSpots()
  // 這樣任何 `var DATA = window.HERITAGE_SPOTS` 都會拿到「當下語言」的資料
  try {
    Object.defineProperty(window, 'HERITAGE_SPOTS', {
      get: function () { return window.getSpots(); },
      configurable: true
    });
  } catch (e) {
    // 若瀏覽器不支援 defineProperty（極舊版），就退回舊寫法
    window.HERITAGE_SPOTS = window.getSpots();
  }
  window.imgFallback = function (img) {
    img.onerror = null;
    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#E8E1D8"/><text x="50%" y="50%" font-size="30" fill="#1B3A5C" text-anchor="middle" dy=".3em">澳門世遺</text></svg>'
    );
  };
})();