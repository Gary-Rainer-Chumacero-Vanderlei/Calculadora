function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Erro";
  }
}
