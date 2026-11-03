// ==================================
// 1. DARK / LIGHT MODE
// ==================================

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeButton.textContent = "🌙";

    localStorage.setItem("theme", "light");
  } else {
    themeButton.textContent = "☀️";

    localStorage.setItem("theme", "dark");
  }
});

// ==================================
// 2. CONTACT FORM
// ==================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");

    return;
  }

  alert("Thank you, " + name + "! Your message is ready.");

  contactForm.reset();
});

// ==================================
// 3. SCROLL ANIMATION
// ==================================

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

sections.forEach(function (section) {
  observer.observe(section);
});

// ==================================
// 4. CURRENT YEAR
// ==================================

const footerText = document.getElementById("footer-text");

footerText.textContent =
  "© " + new Date().getFullYear() + " Mahlet Mulugeta. All Rights Reserved.";

// ==================================
// 5. CONSOLE MESSAGE
// ==================================

console.log("Welcome to Mahlet's Portfolio!");

console.log("JavaScript is working successfully!");

console.log("Keep learning and keep building!");
