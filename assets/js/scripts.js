// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

    // Theme toggle
    var root = document.documentElement;
    var themeToggle = document.querySelector(".theme-toggle");
    var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

    function getStoredTheme() {
      try {
        var theme = localStorage.getItem("theme");
        return theme === "light" || theme === "dark" ? theme : null;
      } catch (e) {
        return null;
      }
    }

    function getCurrentTheme() {
      return getStoredTheme() || (mediaQuery && mediaQuery.matches ? "dark" : "light");
    }

    function updateThemeToggle(theme) {
      if (!themeToggle) return;
      var isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }

    function applyTheme(theme, persist) {
      root.setAttribute("data-theme", theme);
      if (persist) {
        try {
          localStorage.setItem("theme", theme);
        } catch (e) {}
      }
      updateThemeToggle(theme);
    }

    applyTheme(getCurrentTheme(), false);

    if (themeToggle) {
      themeToggle.addEventListener("click", function() {
        applyTheme(getCurrentTheme() === "dark" ? "light" : "dark", true);
      });
    }

});

