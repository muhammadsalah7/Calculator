let buffer = "0";
let total = 0;
let previousOperator = null;
const screen = document.querySelector(".screen");
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}
function handleMath(value) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (total === 0) {
    total = intBuffer;
  } else {
    mathOperation(intBuffer);
  }
  previousOperator = value;
  buffer = "0";
}
function mathOperation(intBuffer) {
  if (previousOperator === "+") {
    total += intBuffer;
  } else if (previousOperator === "-") {
    total -= intBuffer;
  } else if (previousOperator === "÷") {
    total /= intBuffer;
  } else if (previousOperator === "×") {
    total *= intBuffer;
  }
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}
function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      mathOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + total;
      total = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.slice(0, -1);
      }
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
      handleMath(symbol);
      break;
  }
}
function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

function rerender() {
  screen.innerText = buffer;
}
init();
