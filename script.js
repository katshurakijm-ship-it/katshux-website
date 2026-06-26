const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle du menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isOpen = navLinks.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Fermeture au clic sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Fermeture au clic en dehors
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Fermeture avec Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.focus();
  }
});

// Reset au redimensionnement desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});