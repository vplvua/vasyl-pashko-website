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

const projectCards = document.querySelectorAll(".project-card");
const scrollingWrapper = document.querySelector(".scrolling-wrapper");

projectCards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

function applyCardFunctionality() {
  if (window.innerWidth >= 768) {
    projectCards.forEach((card) => {
      card.style.transform = "none";
    });

    scrollingWrapper.removeEventListener("wheel", handleScroll);

    scrollingWrapper.addEventListener("wheel", handleScroll);
  } else {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentCardIndex = 0;

    scrollingWrapper.removeEventListener("wheel", handleScroll);

    function showPreviousCard() {
      if (currentCardIndex > 0) {
        projectCards[currentCardIndex].classList.remove("active");
        currentCardIndex--;
        updateVisibleCard();
        projectCards[currentCardIndex].classList.add("active");
      }
    }

    function showNextCard() {
      if (currentCardIndex < projectCards.length - 1) {
        projectCards[currentCardIndex].classList.remove("active");
        currentCardIndex++;
        updateVisibleCard();
        projectCards[currentCardIndex].classList.add("active");
      }
    }

    function updateVisibleCard() {
      projectCards.forEach((card, index) => {
        card.style.transform = `translateX(${
          (index - currentCardIndex) * 100
        }%)`;
      });
    }

    leftArrow.addEventListener("click", showPreviousCard);
    rightArrow.addEventListener("click", showNextCard);

    updateVisibleCard();
  }
}

function handleScroll(event) {
  event.preventDefault();
  scrollingWrapper.scrollLeft += event.deltaY;
}

applyCardFunctionality();

window.addEventListener("resize", applyCardFunctionality);

// Send message

const form = document.getElementById("send-email-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        alert("Form submission failed!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
