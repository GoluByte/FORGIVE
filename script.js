const forgiveButton = document.querySelector("#forgiveButton");
const finalNote = document.querySelector("#finalNote");
const closeNote = document.querySelector("#closeNote");
const petalLayer = document.querySelector("#petalLayer");

forgiveButton.addEventListener("click", () => {
  finalNote.hidden = false;
  forgiveButton.setAttribute("aria-expanded", "true");
  finalNote.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

closeNote.addEventListener("click", () => {
  finalNote.hidden = true;
  forgiveButton.setAttribute("aria-expanded", "false");
  forgiveButton.focus();
});

// Gentle falling petals; reduced-motion users get a still page.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  const petals = ["✦", "♡", "❀", "·"];
  function createPetal() {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${10 + Math.random() * 15}px`;
    petal.style.setProperty("--sway", `${Math.round(Math.random() * 180 - 90)}px`);
    petal.style.animationDuration = `${8 + Math.random() * 8}s`;
    petalLayer.appendChild(petal);
    window.setTimeout(() => petal.remove(), 17000);
  }
  for (let i = 0; i < 14; i++) {
    window.setTimeout(createPetal, i * 400);
  }
  window.setInterval(createPetal, 900);
}
