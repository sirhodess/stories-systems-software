const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
const themeToggle = document.querySelector("#themeToggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const detailButtons = document.querySelectorAll(".details-button");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "Read Case Study";
    }
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out every field before submitting.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.textContent = "Thanks! Your message has been checked.";
  contactForm.reset();
});
