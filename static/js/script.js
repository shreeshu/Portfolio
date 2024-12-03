document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("theme-switch");
  const body = document.body;

  // Check for saved theme in local storage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Toggle dark/light mode and background
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});

// Smooth Scroll for "More About Me" Button
document.querySelector(".more-button").addEventListener("click", function () {
  document.getElementById("about-me").scrollIntoView({
    behavior: "smooth",
  });
});
