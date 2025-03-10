let isResultDisplayed = false;

function appendToDisplay(value) {
  const display = document.getElementById("display");
  // Permitir continuar operações se o último valor for um número ou ponto
  if (isResultDisplayed && !isNaN(value)) {
    display.value = value; // Reiniciar com novo número
    isResultDisplayed = false;
  } else if (isResultDisplayed && /[+\-*/.^]/.test(value)) {
    display.value += value; // Continuar com a operação
    isResultDisplayed = false;
  } else {
    display.value += value; // Adicionar normalmente
  }
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
  isResultDisplayed = false;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
    isResultDisplayed = true;
  } catch {
    display.value = "Erro";
    isResultDisplayed = false;
  }
}

function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    display.value = Math.sqrt(eval(display.value));
    isResultDisplayed = true;
  } catch {
    display.value = "Erro";
    isResultDisplayed = false;
  }
}
