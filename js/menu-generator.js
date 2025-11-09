// js/menu-generator.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateMenuBtn");
  const output = document.getElementById("generatedKeys");
  const preview = document.getElementById("menuPreview");

  btn.addEventListener("click", () => {
    const nameTh = document.getElementById("menuNameTh").value.trim();
    const descTh = document.getElementById("menuDescTh").value.trim();
    const priceTh = document.getElementById("menuPriceTh").value.trim();
    const img = document.getElementById("menuImage").value.trim();

    if (!nameTh || !descTh || !priceTh) {
      alert("⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    // ค้นหาหมายเลขเมนูถัดไป เช่น item5
    const existingKeys = Object.keys(translations.th || {}).filter(k => k.startsWith("menu.item"));
    const lastIndex = existingKeys.length / 3;
    const nextIndex = lastIndex + 1;
    const keyBase = `menu.item${nextIndex}`;

    // 🔹 สร้าง key สำหรับทุกภาษา
    const newKeys = {
      th: {
        [`${keyBase}.name`]: nameTh,
        [`${keyBase}.desc`]: descTh,
        [`${keyBase}.price`]: `${priceTh} บาท`
      },
      en: {
        [`${keyBase}.name`]: `[EN] ${nameTh}`,
        [`${keyBase}.desc`]: `[EN] ${descTh}`,
        [`${keyBase}.price`]: `${priceTh} Baht`
      },
      la: {
        [`${keyBase}.name`]: `[LAO] ${nameTh}`,
        [`${keyBase}.desc`]: `[LAO] ${descTh}`,
        [`${keyBase}.price`]: `${priceTh} ກີບ`
      },
      zh: {
        [`${keyBase}.name`]: `[中] ${nameTh}`,
        [`${keyBase}.desc`]: `[中] ${descTh}`,
        [`${keyBase}.price`]: `${priceTh} 泰铢`
      }
    };

    // 🔹 เพิ่ม key เข้าใน translations (ใช้งานทันที)
    Object.keys(newKeys).forEach(lang => {
      Object.assign(translations[lang], newKeys[lang]);
    });

    // 🔹 แสดง key ที่สร้างใน <pre>
    output.textContent = JSON.stringify(newKeys, null, 2);

    // 🔹 สร้าง preview ของเมนูใหม่
    const menuHTML = `
      <div class="menu-item fade-in">
        <img src="images/menu/${img || 'placeholder.jpg'}" alt="${nameTh}">
        <div class="menu-item-content">
          <h3 data-i18n="${keyBase}.name">${nameTh}</h3>
          <p data-i18n="${keyBase}.desc">${descTh}</p>
          <div class="price" data-i18n="${keyBase}.price">${priceTh} บาท</div>
        </div>
      </div>
    `;

    preview.innerHTML = menuHTML;

    alert("✅ สร้างเมนูใหม่เรียบร้อย!\nคัดลอก key ด้านล่างไปใส่ใน translations.js ได้เลยหากต้องการบันทึกถาวร");
  });
});
