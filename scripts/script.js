// Mobile menu functionality
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Update active state on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
});
