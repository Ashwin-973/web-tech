/* ================================================================
   SUBMISSION VERSION — uses classList.toggle() as required.
   Relies on the "html.dark-theme { ... }" block in style.css
   which redefines the CSS custom properties for dark mode.
   ================================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var themeButton = document.getElementById("themeToggle");

  themeButton.addEventListener("click", function () {
    var isDarkMode = root.classList.toggle("dark-theme");

    themeButton.textContent = isDarkMode ? "☀️" : "🌙";
    themeButton.setAttribute("aria-pressed", isDarkMode ? "true" : "false");
    themeButton.setAttribute(
      "aria-label",
      isDarkMode ? "Switch to light theme" : "Switch to dark theme"
    );
  });
})();