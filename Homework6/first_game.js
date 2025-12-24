document.addEventListener("DOMContentLoaded", function () {
  // кнопка для десктопа
  const desktopBtn = document.getElementById("desktop-guess-btn1");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", startFirst);
  }

  // копка для мобилки и планшета
  const mobileBtn = document.getElementById("guess-number-btn1");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", startFirst);
  }
});

// игра
function startFirst() {
  const result = Math.floor(Math.random() * 100) + 1;
  let a;

  do {
    const input = prompt("Попытайтесь угадать случайное число от 1 до 100");

    if (input === null) {
      alert("Игра завершена");
      return;
    }

    a = Number(input);

    if (Number.isNaN(a) || a < 1 || a > 100) {
      alert("Введите число от 1 до 100");
      continue;
    }

    if (a > result) {
      alert("Загаданное число меньше вашего");
    } else if (a < result) {
      alert("Загаданное число больше вашего");
    }
  } while (a !== result);

  alert("Поздравляю! Вы угадали случайное число");
}
