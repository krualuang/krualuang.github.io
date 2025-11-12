// ✅ js/menu-generator.js (เวอร์ชันปรับปรุง)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateMenuBtn");
  const output = document.getElementById("generatedKeys");
  const preview = document.getElementById("menuPreview");
  const copyBtn = document.getElementById("copyJsonBtn");

  // ✅ ถ้ายังไม่มี translations ให้สร้างไว้ก่อน
  if (typeof window.translations === "undefined") {
    window.translations = { th: {}, en: {}, la: {}, zh: {} };
  }

  // 🔹 ฟังก์ชันแปลข้อความ (Google Translate ฟรี)
  async function translateText(text, targetLang) {
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=th&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
      );
      const data = await res.json();
      return data[0][0][0];
    } catch (e) {
      console.warn("❌ แปลไม่สำเร็จ:", e);
      return `[${targetLang.toUpperCase()}] ${text}`;
    }
  }

  // 🔹 ปุ่มสร้างเมนูใหม่
  btn.addEventListener("click", async () => {
    const nameTh = document.getElementById("menuNameTh").value.trim();
    const descTh = document.getElementById("menuDescTh").value.trim();
    const priceTh = document.getElementById("menuPriceTh").value.trim();
    const img = document.getElementById("menuImage").value.trim();

    if (!nameTh || !descTh || !priceTh) {
      alert("⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    // แสดง Loader
    preview.innerHTML = `
      <p style="text-align:center; color:#888;">⏳ กำลังแปลภาษาและสร้างเมนู...</p>
      <div class="loader"></div>
    `;

    // 🔹 คำนวณหมายเลขเมนูถัดไป (แบบแม่นยำ)
    const existingKeys = Object.keys(translations.th || {}).filter(k => k.startsWith("menu.item"));
    const itemNumbers = new Set(
      existingKeys.map(k => parseInt(k.replace("menu.item", "").split(".")[0])).filter(n => !isNaN(n))
    );
    const lastIndex = itemNumbers.size ? Math.max(...itemNumbers) : 0;
    const nextIndex = lastIndex + 1;
    const keyBase = `menu.item${nextIndex}`;

    // 🔹 แปลภาษาอัตโนมัติ (ลาว, อังกฤษ, จีน)
    const [nameLa, nameEn, nameZh] = await Promise.all([
      translateText(nameTh, "lo"),
      translateText(nameTh, "en"),
      translateText(nameTh, "zh-CN")
    ]);

    const [descLa, descEn, descZh] = await Promise.all([
      translateText(descTh, "lo"),
      translateText(descTh, "en"),
      translateText(descTh, "zh-CN")
    ]);

    // 🔹 สร้าง key สำหรับทุกภาษา
    const newKeys = {
      th: {
        [`${keyBase}.name`]: nameTh,
        [`${keyBase}.desc`]: descTh,
        [`${keyBase}.price`]: `${priceTh} บาท`
      },
      en: {
        [`${keyBase}.name`]: nameEn,
        [`${keyBase}.desc`]: descEn,
        [`${keyBase}.price`]: `${priceTh} Baht`
      },
      la: {
        [`${keyBase}.name`]: nameLa,
        [`${keyBase}.desc`]: descLa,
        [`${keyBase}.price`]: `${priceTh} ກີບ`
      },
      zh: {
        [`${keyBase}.name`]: nameZh,
        [`${keyBase}.desc`]: descZh,
        [`${keyBase}.price`]: `${priceTh} 泰铢`
      }
    };

    // 🔹 เพิ่ม key เข้าใน translations
    Object.keys(newKeys).forEach(lang => {
      Object.assign(translations[lang], newKeys[lang]);
    });

    // 🔹 แสดงผล JSON
    output.textContent = JSON.stringify(newKeys, null, 2);

    // 🔹 แสดง preview เมนู
    preview.innerHTML = `
      <div class="menu-item fade-in">
        <img src="images/menu/${img || 'placeholder.jpg'}" alt="${nameTh}">
        <div class="menu-item-content">
          <h3 data-i18n="${keyBase}.name">${nameTh}</h3>
          <p data-i18n="${keyBase}.desc">${descTh}</p>
          <div class="price" data-i18n="${keyBase}.price">${priceTh} บาท</div>
        </div>
      </div>
    `;

    // ✅ แสดงปุ่มคัดลอก
    copyBtn.style.display = "inline-block";

    // ✅ ล้างช่อง input
    document.querySelectorAll("#menuNameTh, #menuDescTh, #menuPriceTh, #menuImage").forEach(i => (i.value = ""));

    alert("✅ สร้างเมนูใหม่และแปลอัตโนมัติเรียบร้อย!\nคัดลอก JSON ด้านล่างได้เลย");
  });

  // 📋 ปุ่มคัดลอก JSON
  copyBtn.addEventListener("click", async () => {
    const jsonText = output.textContent.trim();
    if (!jsonText) {
      alert("ยังไม่มีข้อมูลให้คัดลอก");
      return;
    }
    try {
      await navigator.clipboard.writeText(jsonText);
      copyBtn.textContent = "✅ คัดลอกแล้ว!";
      setTimeout(() => (copyBtn.textContent = "📋 คัดลอกโค้ด JSON"), 1500);
    } catch (err) {
      alert("⚠️ ไม่สามารถคัดลอกอัตโนมัติได้ — โปรดคัดลอกด้วยตนเอง");
    }
  });
});
