// js/menu-generator.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateMenuBtn");
  const output = document.getElementById("generatedKeys");
  const preview = document.getElementById("menuPreview");
  const copyBtn = document.getElementById("copyJsonBtn");

  // 📁 ปุ่มเพิ่มเติม
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 บันทึกเมนูเป็น menu.json";
  saveBtn.style.display = "none";
  saveBtn.style.marginLeft = "10px";
  btn.after(saveBtn);

  const loadBtn = document.createElement("button");
  loadBtn.textContent = "📂 โหลดเมนูที่เคยบันทึกไว้";
  loadBtn.style.marginLeft = "10px";
  btn.after(loadBtn);

  // 🔹 ฟังก์ชันแปลข้อความ
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

  // 🔹 โหลดเมนูจาก localStorage
  loadBtn.addEventListener("click", () => {
    const savedMenus = JSON.parse(localStorage.getItem("menus") || "[]");
    if (savedMenus.length === 0) {
      alert("📭 ยังไม่มีเมนูที่เคยบันทึกไว้");
      return;
    }

    output.textContent = JSON.stringify(savedMenus, null, 2);
    preview.innerHTML = `<h3>📂 เมนูที่เคยบันทึกไว้ (${savedMenus.length} รายการ)</h3>`;

    savedMenus.forEach(menuSet => {
      const [th] = Object.values(menuSet.th);
      const [desc] = Object.values(menuSet.th).slice(1, 2);
      preview.innerHTML += `
        <div class="menu-item fade-in">
          <img src="images/menu/placeholder.jpg" alt="${th}">
          <div class="menu-item-content">
            <h3>${th}</h3>
            <p>${desc}</p>
          </div>
        </div>`;
    });

    alert(`✅ โหลดเมนูสำเร็จ ${savedMenus.length} รายการ!`);
  });

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

    preview.innerHTML = `
      <div class="loader"></div>
      <p>⏳ กำลังแปลภาษา...</p>
    `;

    // 🔹 หาหมายเลขเมนูถัดไป
    const existingKeys = Object.keys(translations.th || {}).filter(k => k.startsWith("menu.item"));
    const lastIndex = existingKeys.length / 3;
    const nextIndex = lastIndex + 1;
    const keyBase = `menu.item${nextIndex}`;

    // 🔹 แปลภาษา
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

    // 🔹 สร้าง key
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

    // 🔹 เพิ่มเข้า translations
    Object.keys(newKeys).forEach(lang => Object.assign(translations[lang], newKeys[lang]));

    // 🔹 แสดงผล
    output.textContent = JSON.stringify(newKeys, null, 2);
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

    copyBtn.style.display = "inline-block";
    saveBtn.style.display = "inline-block";

    // 🔹 บันทึกใน localStorage
    const savedMenus = JSON.parse(localStorage.getItem("menus") || "[]");
    savedMenus.push(newKeys);
    localStorage.setItem("menus", JSON.stringify(savedMenus));

    alert("✅ สร้างและบันทึกเมนูใหม่เรียบร้อย!");
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
