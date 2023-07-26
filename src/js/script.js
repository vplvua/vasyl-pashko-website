const burgerToggle = document.getElementById("burger-toggle");
const sections = document.querySelectorAll("section.page-main");
const menuLinks = document.querySelectorAll(".link-href");

burgerToggle.addEventListener("change", () => {
  if (burgerToggle.checked) {
    showSection("navigation");
  } else {
    showSection("home");
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("href").substring(1);
    burgerToggle.checked = false;
    showSection(target);
    // smoothScrollTo(target);
  });
});

function showSection(sectionId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
}

// Horizontal Scroll Pproject Cards

const scrollingWrapper = document.querySelector(".scrolling-wrapper");

scrollingWrapper.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollingWrapper.scrollLeft += event.deltaY;
});

const projectCard = document.querySelectorAll(".project-card");

projectCard.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});
