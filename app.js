let count = 0;

const display = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", function () {
  count = count + 1;
  display.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
  count = count - 1;
  display.textContent = count;
});