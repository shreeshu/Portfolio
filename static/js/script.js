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

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  updateContactHeading();
}

// Function to update the "Contact Me" text and color dynamically
function updateContactHeading() {
  const heading = document.getElementById("contact-heading");
  if (document.body.classList.contains("dark-mode")) {
    heading.textContent = "Contact Me";
    heading.style.color = "white"; // White for dark mode
  } else {
    heading.textContent = "Contact Me";
    heading.style.color = "white"; // Black for light mode
  }
}

// Initialize the correct heading on page load
window.onload = updateContactHeading;

// Function to toggle the popup card visibility
function togglePopup() {
  const popup = document.getElementById("contact-popup");
  const overlay = document.querySelector(".popup-overlay");

  if (popup.classList.contains("show")) {
    // Hide the popup with a fade-out effect
    popup.classList.remove("show");
    overlay.style.display = "none";
  } else {
    // Show the popup with fade-in and scale-up effect
    popup.classList.add("show");
    overlay.style.display = "block";
  }
}
