document.addEventListener("DOMContentLoaded", function () {
  const languagePopup = document.getElementById("language-popup");
  const userLanguage = localStorage.getItem("preferredLanguage");

  // Show popup if no language is selected
  if (!userLanguage) {
    languagePopup.style.display = "flex";
  } else {
    loadTranslations(userLanguage);
  }

  // Handle language selection
  document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", function () {
      const selectedLanguage = this.getAttribute("data-lang");
      localStorage.setItem("preferredLanguage", selectedLanguage);
      loadTranslations(selectedLanguage);
      languagePopup.style.display = "none";
    });
  });

  // Function to load translations
  function loadTranslations(language) {
    fetch(`translations/${language}.json`)
      .then(response => response.json())
      .then(translations => {
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(el => {
          const key = el.getAttribute("data-translate");
          el.textContent = translations[key] || key;
        });
      })
      .catch(error => console.error("Error loading translations:", error));
  }
});