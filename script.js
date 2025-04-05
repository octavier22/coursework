document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleThemeButton.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Navigation Links & Check My Work Button
    const navLinks = document.querySelectorAll("nav a[data-target]");
    const sections = document.querySelectorAll(".section");

    function showSection(targetId) {
        sections.forEach(section => section.classList.remove("active")); // Hide all sections
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active"); // Show selected section
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("data-target");
            showSection(targetId);
            history.pushState(null, "", `#${targetId}`); // Update URL without reloading
        });
    });

    // Handle back/forward navigation
    window.addEventListener("popstate", function () {
        const targetId = location.hash.substring(1) || "home";
        showSection(targetId);
    });

    // Set Home as Default Page
    const initialSection = location.hash.substring(1) || "home";
    showSection(initialSection);
});

// Show only the clicked section
function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  }

  window.addEventListener("hashchange", function () {
    const hash = window.location.hash;
    const homeSection = document.getElementById("home");

    if (hash === "#blog" || hash === "#contact" ) {
        homeSection.style.display = "none";
    } else {
        homeSection.style.display = "block";
    }
});

if (hash === "#project" || hash === "#about me" ) {
    homeSection.style.display = "none";
} else {
    homeSection.style.display = "block";
}
