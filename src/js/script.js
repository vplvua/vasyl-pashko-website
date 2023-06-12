const burgerToggle = document.getElementById("burger-toggle");
const sections = document.querySelectorAll("section.page-main");
const menuLinks = document.querySelectorAll(".link-href");
console.log(menuLinks);

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

// function smoothScrollTo(target) {
//   const targetElement = document.getElementById(target);
//   window.scrollTo({
//     top: targetElement.offsetTop,
//     behavior: "smooth",
//   });
// }
