<script>
// ... (โค้ด JavaScript ยังคงเดิม) ...
const translations = {
  th: {
    "menu.home": "หน้าแรก", "menu.about": "เกี่ยวกับเรา", "menu.franchise": "แฟรนไชส์", "menu.menu": "เมนู", "menu.gallery": "แกลเลอรี่", "menu.contact": "ติดต่อ",
    "hero.eyebrow": "ครัวหลวง — รสชาติไทยต้นตำรับ", "hero.title": "Royal Thai Taste", "hero.desc": "ประสบการณ์อาหารไทยชั้นเลิศ พร้อมโอกาสแฟรนไชส์ทั่วลาวและไทย", "hero.cta1": "ดูแฟรนไชส์", "hero.cta2": "นัดเยี่ยมชม",
    "about.title": "เกี่ยวกับครัวหลวง", "about.text1": "ครัวหลวงคือแบรนด์ร้านอาหารไทยแท้ที่นำเสนอรสชาติอันเป็นเอกลักษณ์ของอาหารไทยแบบดั้งเดิม ด้วยความพิถีพิถันในการคัดสรรวัตถุดิบคุณภาพ และกรรมวิธีการปรุงที่คงไว้ซึ่งรสชาติอันเป็นต้นตำรับ", "about.text2": "เราให้ความสำคัญกับประสบการณ์การรับประทานอาหารของลูกค้า โดยผสมผสานบรรยากาศการบริการที่อบอุ่นเป็นกันเอง กับความประณีตของอาหารไทยแท้ในสไตล์ Fine Dining", "about.text3": "ปัจจุบันครัวหลวงมีสาขาในประเทศไทยและกำลังขยายโอกาสแฟรนไชส์ไปยังประเทศลาว เพื่อเผยแพร่รสชาติอาหารไทยแท้สู่สายตาชาวโลก",
    "franchise.title": "แพ็กเกจแฟรนไชส์",
    "franchise.desc": "ร่วมเป็นส่วนหนึ่งของครัวหลวงกับแพ็กเกจแฟรนไชส์ที่ออกแบบมาสำหรับผู้ประกอบการทุกระดับ",
    
    "franchise.package1.name": "สตาร์ทเตอร์",
    "franchise.package1.price": "39,000 บาท",
    "franchise.package1.item1": "สิทธิ์ในการใช้แบรนด์ 2 ปี",
    "franchise.package1.item2": "คู่มือการดำเนินงานครบถ้วน",
    "franchise.package1.item3": "การฝึกอบรมทีมงาน 1 สัปดาห์",
    "franchise.package1.item4": "การสนับสนุนด้านการตลาด 1 เดือน",
    
    "franchise.package2.name": "มาตรฐาน",
    "franchise.package2.price": "69,000 บาท",
    "franchise.package2.item1": "สิทธิ์ในการใช้แบรนด์ 3 ปี",
    "franchise.package2.item2": "งานติดตั้งร้านค้า",
    "franchise.package2.item3": "การฝึกอบรมทีมงาน 2 สัปดาห์",
    "franchise.package2.item4": "การสนับสนุนด้านการตลาด 3 เดือน",
    "franchise.package2.item5": "ระบบซอฟต์แวร์จัดการร้าน",
    
    "franchise.package3.name": "พรีเมียม",
    "franchise.package3.price": "159,000 บาท",
    "franchise.package3.item1": "สิทธิ์ในการใช้แบรนด์ 5 ปี",
    "franchise.package3.item2": "การออกแบบร้านพรีเมียมและควบคุมการก่อสร้าง",
    "franchise.package3.item3": "เพิ่มเมนูอาหาร,ฝึกอบรมทีมงาน 1 เดือน",
    "franchise.package3.item4": "การสนับสนุนด้านการตลาด 6 เดือน",
    "franchise.package3.item5": "ระบบซอฟต์แวร์จัดการร้านขั้นสูง",
    "franchise.package3.item6": "ที่ปรึกษาด้านการดำเนินธุรกิจ 1 ปี",
    "menu.item1.name": "ต้มยำกุ้ง", "menu.item1.desc": "ต้มยำกุ้งแม่น้ำรสชาติจัดจ้าน เปรี้ยวเผ็ดร้อน", "menu.item2.name": "ผัดไทยครัวหลวง", "menu.item2.desc": "ผัดไทยสูตรต้นตำรับ กุ้งสดไข่หวาน", "menu.item3.name": "แกงเขียวหวานไก่", "menu.item3.desc": "แกงเขียวหวานไก่ใบโหระพา หอมเครื่องแกง", "menu.item4.name": "มัสมั่นเนื้อ", "menu.item4.desc": "มัสมั่นเนื้อสูตรโบราณ หวานมันหอมเครื่องเทศ",
    "gallery.title": "แกลเลอรี่", "gallery.desc": "บรรยากาศและเมนูอาหารจากครัวหลวง",
    "contact.title": "ติดต่อเรา", "contact.info": "ข้อมูลติดต่อ", "contact.social": "ติดตามเรา", "contact.form.title": "ส่งข้อความถึงเรา", "contact.form.name": "ชื่อ-นามสกุล", "contact.form.email": "อีเมล", "contact.form.phone": "เบอร์โทรศัพท์", "contact.form.subject": "หัวข้อ", "contact.form.message": "ข้อความ", "contact.form.submit": "ส่งข้อความ",
    "contact.address": "บ้านทงกาง ซอย 10, เลขที่ 395, เขตศรีสัตตนาค, นครหลวงเวียงจันทน์, ลาว 01000", "contact.phone": "20 566 05450", "contact.email": "krualuanglao@gmail.com", "contact.hours": "เปิดบริการ 10:00 - 22:00 น.ปิดทุกวันจันทร์"
  },
  en: {
    "menu.home": "Home", "menu.about": "About Us", "menu.franchise": "Franchise", "menu.menu": "Menu", "menu.gallery": "Gallery", "menu.contact": "Contact",
    "hero.eyebrow": "Krua Luang — Authentic Royal Thai Taste", "hero.title": "Royal Thai Taste", "hero.desc": "Experience exquisite Thai cuisine and franchise opportunities across Laos and Thailand.", "hero.cta1": "View Franchise", "hero.cta2": "Book a Visit",
    "about.title": "About Krua Luang", "about.text1": "Krua Lang is an authentic Thai restaurant brand offering unique traditional Thai flavors, meticulously prepared with high-quality ingredients.", "about.text2": "We prioritize the dining experience by blending warm, friendly service with the refinement of authentic Thai cuisine in a Fine Dining style.", "about.text3": "Krualuang currently has branches in Thailand and is expanding franchise opportunities into Laos to share authentic Thai flavors globally.",
    "franchise.title": "Franchise Packages",
    "franchise.desc": "Join Krua Luang with franchise packages designed for all levels of entrepreneurs.",
    
    "franchise.package1.name": "Starter",
    "franchise.package1.price": "39,000 Baht",
    "franchise.package1.item1": "2-Year Brand License",
    "franchise.package1.item2": "Complete Operations Manual",
    "franchise.package1.item3": "1 Week Team Training",
    "franchise.package1.item4": "1 Month Marketing Support",
    
    "franchise.package2.name": "Standard",
    "franchise.package2.price": "69,000 Baht",
    "franchise.package2.item1": "3-Year Brand License",
    "franchise.package2.item2": "Store Setup & Installation",
    "franchise.package2.item3": "2 Weeks Team Training",
    "franchise.package2.item4": "3 Months Marketing Support",
    "franchise.package2.item5": "Store Management Software (POS)",
    
    "franchise.package3.name": "Premium",
    "franchise.package3.price": "159,000 Baht",
    "franchise.package3.item1": "5-Year Brand License",
    "franchise.package3.item2": "Premium Store Design & Construction Oversight",
    "franchise.package3.item3": "Menu Expansion, 1 Month Team Training",
    "franchise.package3.item4": "6 Months Marketing Support",
    "franchise.package3.item5": "Advanced Store Management Software",
    "franchise.package3.item6": "1-Year Business Consultant",
    "menu.item1.name": "Tom Yum Goong", "menu.item1.desc": "Zesty and intensely sour-spicy river prawn soup.", "menu.item2.name": "Krua Luang Pad Thai", "menu.item2.desc": "Authentic Pad Thai with fresh shrimp and sweet egg.", "menu.item3.name": "Green Curry with Chicken", "menu.item3.desc": "Aromatic green curry with holy basil.", "menu.item4.name": "Massaman Beef", "menu.item4.desc": "Traditional Massaman curry with rich, fragrant spices.",
    "gallery.title": "Gallery", "gallery.desc": "Ambiance and signature dishes from Krua Luang.",
    "contact.title": "Contact Us", "contact.info": "Contact Information", "contact.social": "Follow Us", "contact.form.title": "Send Us a Message", "contact.form.name": "Name", "contact.form.email": "Email", "contact.form.phone": "Phone", "contact.form.subject": "Subject", "contact.form.message": "Message", "contact.form.submit": "Send Message",
    "contact.address": "Ban Tongkang, Soi 10, No. 395, Sisattanak District, Vientiane Capital, Laos 01000", "contact.phone": "20 566 05450", "contact.email": "krualuanglao@gmail.com", "contact.hours": "Open 10:00 - 22:00 Close every Monday"
  },
  la: {
    "menu.home": "ໜ້າທຳອິດ", "menu.about": "ກ່ຽວກັບພວກເຮົາ", "menu.franchise": "ແຟຣນໄຊส์", "menu.menu": "ເມນູ", "menu.gallery": "ຄັງຮູບພາບ", "menu.contact": "ຕິດຕໍ່",
    "hero.eyebrow": "ຄົວຫຼວງ — ລົດຊາດໄທແທ້", "hero.title": "Royal Thai Taste", "hero.desc": "ປະສົບການອາຫານໄທທີ່ດີທີ່ສຸດ ພ້ອມໂອກາດແຟຣນໄຊສ໌ທົ່ວລາວ ແລະ ໄທ.", "hero.cta1": "ເບິ່ງແຟຣນໄຊส์", "hero.cta2": "ນັດໝາຍເຂົ້າຊົມ",
    "about.title": "ກ່ຽວກັບຄົວຫຼວງ", "about.text1": "ຄົວຫຼວງເປັນຮ້ານອາຫານໄທແທ້ທີ່ນຳສະເໜີລົດຊາດອັນເປັນເອກະລັກຂອງອາຫານໄທແບບດັ້ງເດີມ ດ້ວຍຄວາມເອົາໃຈໃສ່ໃນການຄັດເລືອກວັດຖຸດິບຄຸນນະພາບ ແລະ ວິທີການປຸງທີ່ຮັກສາລົດຊາດຕົ້ນຕຳຮັບ.", "about.text2": "ພວກເຮົາໃຫ້ຄວາມສຳຄັນກັບປະສົບການການຮັບປະທານອາຫານຂອງລູກຄ້າ ໂດຍປະສົມປະສານບັນຍາກາດການບໍລິການທີ່ອົບອຸ່ນເປັນກັນເອງ ກັບຄວາມປະນີດຂອງອາຫານໄທແທ້ໃນແບບ Fine Dining.", "about.text3": "ປັດຈຸບັນ ຄົວຫຼວງມີສາຂາໃນປະເທດໄທ ແລະ ກໍາລັງຂະຫຍາຍໂອກາດແຟຣນໄຊສ໌ໄປຍັງປະເທດລາວ ເພື່ອເຜີຍແຜ່ລົດຊາດອາຫານໄທແທ້ສູ່ສາຍຕາຊາວໂລກ.",
    "franchise.title": "ຊຸດແພັກເກດແຟຣນໄຊส์",
    "franchise.desc": "ຮ່ວມເປັນສ່ວນໜຶ່ງຂອງຄົວຫຼວງກັບຊຸດແພັກເກດແຟຣນໄຊส์ທີ່ອອກແບບມາສຳລັບຜູ້ປະກອບການທຸກລະດັບ.",
    
    "franchise.package1.name": "ເລີ່ມຕົ້ນ",
    "franchise.package1.price": "39,000 ບາດ",
    "franchise.package1.item1": "ສິດທິໃນການໃຊ້ຊື່ 2 ປີ",
    "franchise.package1.item2": "ຄູ່ມືການດໍາເນີນງານຄົບຖ້ວນ",
    "franchise.package1.item3": "ການຝຶກອົບຮົມທີມງານ 1 ອາທິດ",
    "franchise.package1.item4": "ການສະໜັບສະໜູນດ້ານການຕະຫຼາດ 1 ເດືອນ",
    
    "franchise.package2.name": "ມາດຕະຖານ",
    "franchise.package2.price": "69,000 ບາດ",
    "franchise.package2.item1": "ສິດທິໃນການໃຊ້ຊື່ 3 ປີ",
    "franchise.package2.item2": "ງານຕິດຕັ້ງຮ້ານ",
    "franchise.package2.item3": "ການຝຶກອົບຮົມທີມງານ 2 ອາທິດ",
    "franchise.package2.item4": "ການສະໜັບສະໜູນດ້ານການຕະຫຼາດ 3 ເດືອນ",
    "franchise.package2.item5": "ລະບົບຊອບແວຈັດການຮ້ານ",
    
    "franchise.package3.name": "ພຣີມຽມ",
    "franchise.package3.price": "159,000 ບາດ",
    "franchise.package3.item1": "ສິດທິໃນການໃຊ້ຊື່ 5 ປີ",
    "franchise.package3.item2": "ການອອກແບບຮ້ານພຣີມຽມ ແລະ ຄວບຄຸມການກໍ່ສ້າງ",
    "franchise.package3.item3": "ເພີ່ມເມນູອາຫານ, ຝຶກອົບຮົມທີມງານ 1 ເດືອນ",
    "franchise.package3.item4": "ການສະໜັບສະໜູນດ້ານການຕະຫຼາດ 6 ເດືອນ",
    "franchise.package3.item5": "ລະບົບຊອບແວຈັດການຮ້ານຂັ້ນສູງ",
    "franchise.package3.item6": "ທີ່ປຶກສາດ້ານການດໍາເນີນທຸລະກິດ 1 ປີ",
    "menu.title": "ເມນູຂອງພວກເຮົາ", "menu.desc": "ສຳຜັດລົດຊາດອາຫານໄທແທ້ທີ່ຄັດສັນມາຢ່າງດີຈາກຄົວຫຼວງ",
    "menu.item1.name": "ຕ້ມຍຳກຸ້ງ", "menu.item1.desc": "ຕ້ມຍຳກຸ້ງແມ່ນ້ຳລົດຊາດຈັດຈ້ານ ຫວານສົ້ມເຜັດຮ້ອນ", "menu.item2.name": "ຜັດໄທຄົວຫຼວງ", "menu.item2.desc": "ຜັດໄທສູດຕົ້ນຕຳຮັບ ກຸ້ງສົດໃສ່ໄຂ່ຫວານ", "menu.item3.name": "ແກງຂຽວຫວານໃສ່ໄກ່", "menu.item3.desc": "ແກງຂຽວຫວານໃສ່ໃບໂຫລະພາ ຫອມເຄື່ອງແກງ", "menu.item4.name": "ມັດສະມັ້ນຊີ້ນ", "menu.item4.desc": "ມັດສະມັ້ນຊີ້ນສູດໂບຮານ ຫວານມັນຫອມເຄື່ອງເທດ",
    "gallery.title": "ຄັງຮູບພາບ", "gallery.desc": "ບັນຍາກາດ ແລະ ເມນູອາຫານຈາກຄົວຫຼວງ",
    "contact.title": "ຕິດຕໍ່ພວກເຮົາ", "contact.info": "ຂໍ້ມູນຕິດຕໍ່", "contact.social": "ຕິດຕາມພວກເຮົາ", "contact.form.title": "ສົ່ງຂໍ້ຄວາມຫາພວກເຮົາ", "contact.form.name": "ຊື່-ນາມສະກຸນ", "contact.form.email": "ອີເມວ", "contact.form.phone": "ເບີໂທລະສັບ", "contact.form.subject": "ຫົວຂໍ້", "contact.form.message": "ຂໍ້ຄວາມ", "contact.form.submit": "ສົ່ງຂໍ້ຄວາມ",
    "contact.address": "ບ້ານ ທົ່ງກາງ, ຊອຍ 10, ເລກທີ 395, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ, ລາວ 01000", "contact.phone": "20 566 05450", "contact.email": "krualuanglao@gmail.com", "contact.hours": "ເປີດບໍລິການ 10:00 - 22:00 ປິດວັນຈັນ"
  },
  zh: {
    "menu.home": "首页", "menu.about": "关于我们", "menu.franchise": "特许经营", "menu.menu": "菜单", "menu.gallery": "图库", "menu.contact": "联系我们",
    "hero.eyebrow": "Krua Luang — 正宗泰皇御膳风味", "hero.title": "Royal Thai Taste", "hero.desc": "体验精致泰国美食，把握遍布老挝和泰国的特许经营机会。", "hero.cta1": "查看特许经营", "hero.cta2": "预约参观",
    "about.title": "关于Krua Luang", "about.text1": "Krua Luang是一个正宗泰国餐厅品牌，提供独特传统的泰国风味，采用高品质原料精心烹制。", "about.text2": "我们注重客户的用餐体验，将热情友好的服务与精致的泰式美食相结合，打造出高档用餐体验。", "about.text3": "Krualuang目前在泰国设有分店，并正将特许经营机会扩展到老挝，向世界展示正宗泰国美食。",
    "franchise.title": "特许经营方案",
    "franchise.desc": "加入Krua Luang，利用专为各类企业家设计的特许经营方案。",
    
    "franchise.package1.name": "入门级",
    "franchise.package1.price": "39,000 泰铢",
    "franchise.package1.item1": "2年品牌使用权",
    "franchise.package1.item2": "完整运营手册",
    "franchise.package1.item3": "1周团队培训",
    "franchise.package1.item4": "1个月市场支持",
    
    "franchise.package2.name": "标准级",
    "franchise.package2.price": "69,000 泰铢",
    "franchise.package2.item1": "3年品牌使用权",
    "franchise.package2.item2": "店铺安装设置",
    "franchise.package2.item3": "2周团队培训",
    "franchise.package2.item4": "3个月市场支持",
    "franchise.package2.item5": "店铺管理软件 (POS)",
    
    "franchise.package3.name": "豪华级",
    "franchise.package3.price": "159,000 泰铢",
    "franchise.package3.item1": "5年品牌使用权",
    "franchise.package3.item2": "豪华店铺设计与施工监督",
    "franchise.package3.item3": "增加菜单, 1个月团队培训",
    "franchise.package3.item4": "6个月市场支持",
    "franchise.package3.item5": "高级店铺管理软件",
    "franchise.package3.item6": "1年业务顾问",
    "menu.title": "我们的菜单", "menu.desc": "体验Krualuang厨房精心挑选的正宗泰国风味",
    "menu.item1.name": "冬阴功汤", "menu.item1.desc": "酸辣浓郁的河虾冬阴功汤", "menu.item2.name": "Krualuang泰式炒河粉", "menu.item2.desc": "正宗泰式炒河粉配新鲜大虾甜蛋", "menu.item3.name": "泰式绿咖喱鸡", "menu.item3.desc": "香草味浓郁的泰式绿咖喱鸡", "menu.item4.name": "泰式马萨曼咖喱牛腩", "menu.item4.desc": "传统马萨曼咖喱，香料浓郁甜美",
    "gallery.title": "图库", "gallery.desc": "Krualuang的环境和招牌菜肴",
    "contact.title": "联系我们", "contact.info": "联系信息", "contact.social": "关注我们", "contact.form.title": "给我们留言", "contact.form.name": "姓名", "contact.form.email": "电子邮件", "contact.form.phone": "电话", "contact.form.subject": "主题", "contact.form.message": "信息", "contact.form.submit": "发送信息",
    "contact.address": "Ban Tongkang, Soi 10, No. 395, Sisattanak District, Vientiane Capital, Laos 01000", "contact.phone": "20 566 05450", "contact.email": "krualuanglao@gmail.com", "contact.hours": "每日营业 10:00 - 22:00"
  }
};
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'IMG') {
                // สำหรับธงชาติ อาจต้องมีการปรับ src หรือ alt ตามภาษา หากจำเป็น
                // ในที่นี้เราจะข้ามการเปลี่ยน src ธงชาติ เพราะเป็น URL คงที่
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. โหลดภาษาเริ่มต้น
    const savedLang = localStorage.getItem('language') || 'th';
    setLanguage(savedLang);
    
    // 2. จัดการการเปลี่ยนภาษาจากธง
    document.querySelectorAll('.lang-flags img').forEach(img => {
        img.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            // โหลดซ้ำเพื่ออัปเดตข้อความ
            setLanguage(lang); 
        });
    });

    // 3. จัดการ Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    };

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. จัดการฟอร์มติดต่อ (Placeholder - ต้องมีโค้ดสำหรับส่งข้อมูลจริง)
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('การส่งข้อความจำลองสำเร็จ! (ต้องเพิ่มโค้ดส่งข้อมูลจริง)');
        this.reset();
    });
});
</script>
