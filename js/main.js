// ตรวจสอบว่า Object translations มีการโหลดแล้ว
if (typeof translations === 'undefined') {
    console.error('Error: translations object is not defined. Please ensure js/translations.js is loaded correctly.');
} else {
    // ----------------------------------------------------
    // 1. ฟังก์ชันหลักในการเปลี่ยนภาษา (I18N)
    // ----------------------------------------------------
    function setLanguage(lang) {
        // ตรวจสอบว่ามีคำแปลสำหรับภาษานั้นหรือไม่
        const currentTrans = translations[lang];
        if (!currentTrans) {
            console.warn(`Translation data for language "${lang}" not found.`);
            return;
        }

        // วนลูปและแทนที่ข้อความตาม data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTrans[key]) {
                // สำหรับ input/placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // ตรวจสอบเฉพาะ placeholder
                    if (element.placeholder) {
                        element.placeholder = currentTrans[key];
                    }
                } else {
                    // สำหรับองค์ประกอบส่วนใหญ่ (h1, p, a, li, span, button)
                    element.textContent = currentTrans[key];
                }
            }
        });

        // บันทึกภาษาที่ผู้ใช้เลือกไว้ใน Local Storage
        localStorage.setItem('krualuang_lang', lang);
        
        // อัปเดต HTML lang attribute สำหรับ Accessibility
        document.documentElement.setAttribute('lang', lang);
    }

    // ----------------------------------------------------
    // 2. Event Listeners และการโหลดภาษาเริ่มต้น
    // ----------------------------------------------------
    // ในไฟล์ js/main.js

// ... โค้ดเดิม ...

document.addEventListener('DOMContentLoaded', () => {
    
    // ********* 🛠️ โค้ดสำหรับ Admin Tool Access *********
    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('admin'); 
    const adminToolSection = document.getElementById('menu-generator');
    
    // 💡 เพิ่มบรรทัดนี้เพื่อดูค่าที่ดึงมา
    console.log("Admin Parameter Value:", isAdmin); 

    if (isAdmin === 'krualuangadmin') { 
        console.log("Admin Code Matched! Attempting to display tool."); // 💡 เพิ่มบรรทัดนี้
        if (adminToolSection) {
            adminToolSection.style.display = 'block'; 
            adminToolSection.style.backgroundColor = '#222'; 
            console.log("Admin Menu Generator Tool Activated.");
        }
    }
    // ************************************************
    
    // ... โค้ดที่เหลือ ...
});
            }
        }
        // ************************************************
        
        const langFlagsContainer = document.querySelector('.lang-flags');
        
        // ดักจับการคลิกที่ธงภาษา
        if (langFlagsContainer) {
            langFlagsContainer.querySelectorAll('img').forEach(flag => {
                flag.addEventListener('click', (event) => {
                    const lang = event.target.getAttribute('data-lang');
                    if (lang) {
                        setLanguage(lang);
                    }
                });
            });
        }
        
        // โหลดภาษาเริ่มต้น
        
        // 1. ตรวจสอบ Local Storage
        const savedLang = localStorage.getItem('krualuang_lang');
        
        // 2. กำหนดภาษาเริ่มต้น (Default Language: ไทย)
        const defaultLang = 'th'; 

        // 3. ใช้ภาษาที่บันทึกไว้ หรือใช้ภาษาเริ่มต้น
        const initialLang = savedLang || defaultLang;

        // เรียกใช้ setLanguage ด้วยภาษาที่กำหนด
        setLanguage(initialLang);
    });
}
