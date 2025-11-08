document.addEventListener("DOMContentLoaded", () => {
  const langFlags = document.querySelectorAll(".lang-flags img");

  // โหลดภาษาเริ่มต้น (จาก localStorage ถ้ามี)
  const currentLang = localStorage.getItem("lang") || "th";
  loadLanguage(currentLang);

  langFlags.forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.getAttribute("data-lang");
      loadLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });
});

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = key.split(".").reduce((o, i) => o ? o[i] : null, data);
        if (text) el.textContent = text;
      });
    })
    .catch(err => console.error("Error loading language:", err));
}
