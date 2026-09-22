/* ================================================================
   LAB VERSION — do NOT use classList.toggle() here.
   The theme is switched by directly setting CSS custom properties
   on the <html> element with element.style.setProperty(), and by
   directly setting attributes/text on the button. No class is
   added or removed anywhere in this file.
   ================================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var themeButton = document.getElementById("themeToggle");

  // default (light) values — must match the :root block in style.css
  var lightTheme = {
    "--paper": "#f3f0fa",
    "--paper-2": "#ece7f7",
    "--text-dark": "#1c1a2b",
    "--text-mid": "#56516f",
    "--text-soft": "#837e9c",
    "--hairline": "rgba(28,26,43,.12)",
    "--hairline-strong": "rgba(28,26,43,.18)"
  };

  var darkTheme = {
    "--paper": "#14131f",
    "--paper-2": "#1b1930",
    "--text-dark": "#f3f0fa",
    "--text-mid": "#b7b2d1",
    "--text-soft": "#8f8aa8",
    "--hairline": "rgba(243,240,250,.14)",
    "--hairline-strong": "rgba(243,240,250,.22)"
  };

  // manually tracked state — we do not read this back from the DOM
  var isDarkMode = false;

  function applyThemeProperties(themeValues) {
    for (var propertyName in themeValues) {
      if (themeValues.hasOwnProperty(propertyName)) {
        root.style.setProperty(propertyName, themeValues[propertyName]);
      }
    }
  }

  function switchToDark() {
    applyThemeProperties(darkTheme);
    themeButton.textContent = "☀️";
    themeButton.setAttribute("aria-pressed", "true");
    themeButton.setAttribute("aria-label", "Switch to light theme");
    isDarkMode = true;
  }

  function switchToLight() {
    applyThemeProperties(lightTheme);
    themeButton.textContent = "🌙";
    themeButton.setAttribute("aria-pressed", "false");
    themeButton.setAttribute("aria-label", "Switch to dark theme");
    isDarkMode = false;
  }

  themeButton.addEventListener("click", function () {
    if (isDarkMode === true) {
      switchToLight();
    } else {
      switchToDark();
    }
  });

  // page always starts in light mode
  switchToLight();
})();