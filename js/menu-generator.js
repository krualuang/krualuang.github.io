// js/menu-generator.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateMenuBtn");
  const output = document.getElementById("generatedKeys");
  const preview = document.getElementById("menuPreview");
  const copyBtn = document.getElementById("copyJsonBtn");

  // 📁 เพิ่มปุ่มบันทึกเมนู JSON
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 บันทึกเมนูเป็น menu.json";
  saveBtn.style.display = "none";
  saveBtn.style.marginLeft = "10px";
  btn.after(saveBtn);

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

  btn.addEventListener("click", async () => {
    const nameTh = document.getElementById("menuNameTh").value.trim();
    const descTh = document.getElementById("menuDescTh").value.trim();
    const priceTh = document.getElementById("menuPriceTh").value.trim();
    const img = document.getElementById("menuImage").value.trim();

    if (!nameTh || !descTh || !priceTh) {
      alert("⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    preview.innerHTML = `
      <div class="loader"></div>
      <p>⏳ กำลังแปลภาษา...</p>
    `;

    // 🔹 ค้นหาหมายเลขเมนูถัดไป เช่น item5
    const existingKeys = Object.keys(translations.th || {}).filter(k => k.startsWith("menu.item"));
    const lastIndex = existingKeys.length / 3;
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

    // 🔹 เพิ่ม key เข้าใน translations (ใช้งานทันที)
    Object.keys(newKeys).forEach(lang => {
      Object.assign(translations[lang], newKeys[lang]);
    });

    // 🔹 แสดงผล JSON ที่สร้าง
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

    // 🔹 แสดงปุ่มคัดลอกและบันทึก
    copyBtn.style.display = "inline-block";
    saveBtn.style.display = "inline-block";

    // 🔹 เก็บลง localStorage
    const savedMenus = JSON.parse(localStorage.getItem("menus") || "[]");
    savedMenus.push(newKeys);
    localStorage.setItem("menus", JSON.stringify(savedMenus));

    alert("✅ สร้างเมนูใหม่และแปลอัตโนมัติเรียบร้อย!\nคุณสามารถคัดลอกหรือบันทึก JSON ได้เลย");
  });

  // 📋 ปุ่มคัดลอก JSON
  copyBtn.addEventListener("click", () => {
    const jsonText = output.textContent;
    if (!jsonText.trim()) {
      alert("ยังไม่มีข้อมูลให้คัดลอก");
      return;
    }
    navigator.clipboard.writeText(jsonText);
    copyBtn.textContent = "✅ คัดลอกแล้ว!";
    setTimeout(() => (copyBtn.textContent = "📋 คัดลอกโค้ด JSON"), 1500);
  });

  // 💾 ปุ่มบันทึกไฟล์ JSON
  saveBtn.addEventListener("click", () => {
    const jsonText = output.textContent;
    if (!jsonText.trim()) {
      alert("ยังไม่มีข้อมูลให้บันทึก");
      return;
    }

    const blob = new Blob([jsonText], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "menu.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("✅ บันทึกไฟล์ menu.json เรียบร้อยแล้ว!");
  });
});
