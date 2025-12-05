function startFirst() {
  let result = 52;

  do {
    a = Number(prompt("Попытайтесь угадать случайное число от 1 до 100"));

    if (isNaN(a)) {
      alert("Пожалуйста, введите корректное число!");
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
