const decBtn = document.querySelector("[data-action=decrement]");
const incBtn = document.querySelector("[data-action=increment]");
let counterValue = 0;

const decClick = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
const incClick = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

decBtn.addEventListener("click", decClick);
incBtn.addEventListener("click", incClick);
