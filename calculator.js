const screen = document.querySelector(".screen");
const numButtons = document.querySelectorAll(".number-btn");
const backSpace = document.querySelector(".backspace");

for (let i = 0; i < numButtons.length; i++) {
  const button = numButtons[i];
  button.addEventListener("click", () => {
    if (screen.textContent == 0) {
      screen.textContent = button.textContent;
    } else {
      screen.textContent += button.textContent;
    }
  });
}
const clearBtn = document.querySelector(".double");
clearBtn.addEventListener("click", function () {
  screen.textContent = 0;
});

backSpace.addEventListener("click", function () {
  currentText = screen.textContent;
  if (currentText.length > 1) {
    screen.textContent = currentText.slice(0, -1);
  } else {
    screen.textContent = 0;
  }
});
