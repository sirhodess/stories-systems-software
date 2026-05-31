const year = document.querySelector("#year");
const themeToggle = document.querySelector("#themeToggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "Light" : "Dark";
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const canvas = document.querySelector("#codeCanvas");
const ctx = canvas.getContext("2d");

const snippets = [
  "const user = await learn();",
  "function buildFuture() {}",
  "<section aria-label='projects'>",
  "git commit -m 'polish portfolio'",
  "return accessibleUI;",
  "display: grid;",
  "async function create()",
  "type Project = Portfolio;",
  "focus-visible",
  "npm run build",
];

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particles = Array.from({ length: Math.floor(canvas.width / 95) }, () => ({
    text: snippets[Math.floor(Math.random() * snippets.length)],
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 0.25 + Math.random() * 0.55,
    size: 12 + Math.random() * 4,
    opacity: 0.18 + Math.random() * 0.22,
  }));
}

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const isDark = document.body.classList.contains("dark");
  ctx.font =
    "14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  particles.forEach((particle) => {
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = isDark ? "#8ab4c8" : "#315c72";
    ctx.font = `${particle.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    ctx.fillText(particle.text, particle.x, particle.y);

    particle.y += particle.speed;

    if (particle.y > canvas.height + 20) {
      particle.y = -20;
      particle.x = Math.random() * canvas.width;
      particle.text = snippets[Math.floor(Math.random() * snippets.length)];
    }
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(drawCanvas);
}

resizeCanvas();

if (!prefersReducedMotion) {
  drawCanvas();
}

window.addEventListener("resize", resizeCanvas);

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const formStatus = document.querySelector("#formStatus");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearFormErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (name === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    } else if (message.length < 10) {
      messageError.textContent = "Please enter at least 10 characters.";
      isValid = false;
    }

    if (!isValid) {
      formStatus.textContent = "Please fix the errors above.";
      return;
    }

    formStatus.textContent = "Thank you!";

    contactForm.reset();
  });
}
