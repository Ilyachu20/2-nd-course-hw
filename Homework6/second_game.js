document.addEventListener("DOMContentLoaded", function () {
  // кнопка для десктопа
  const desktopBtn = document.getElementById("desktop-guess-btn2");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", startSecond);
  }

  // копка для мобилки и планшета
  const mobileBtn = document.getElementById("guess-number-btn2");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", startSecond);
  }
});

// игра
function startSecond() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*", "/"];
  const operat = operations[Math.floor(Math.random() * 4)];

  let correctAnswer;
  if (operat === "+") correctAnswer = a + b;
  if (operat === "-") correctAnswer = a - b;
  if (operat === "*") correctAnswer = a * b;
  if (operat === "/") correctAnswer = a / b;

  const userAnswer = prompt(`Давай порешаем: ${a} ${operat} ${b}`);

  if (Number(userAnswer) === correctAnswer) {
    alert("Верно!");
  } else {
    alert(`Неверно. Правильный ответ: ${correctAnswer}`);
  }
}
