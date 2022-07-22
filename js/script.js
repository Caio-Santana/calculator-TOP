const modeBtn = document.querySelector(".toggle-mode");

modeBtn.addEventListener("click", (event) => {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  modeBtn.textContent =
    modeBtn.textContent === "dark_mode" ? "light_mode" : "dark_mode";
  event.stopPropagation();
});

function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function operate() {}
