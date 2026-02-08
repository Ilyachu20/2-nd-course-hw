document.addEventListener("DOMContentLoaded", function () {
  // кнопка для десктопа
  const desktopBtn = document.getElementById("desktop-guess-btn4");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", startFourth);
  }
  // копка для мобилки и планшета
  const mobileBtn = document.getElementById("guess-number-btn4");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", startFourth);
  }
});
// начало игры
function startFourth() {
  const data = prompt("Выбери: камень, ножницы или бумага");
  const choice = data.toLowerCase();
  const option = ["камень", "ножницы", "бумага"];
  const computer = option[Math.floor(Math.random() * 3)];

  if (!option.includes(choice)) {
    alert("Некорректный ввод");
    return;
  }

  if (choice === computer) {
    alert(`Ничья! Вы выбрали - ${choice}, компьютер выбрал - ${computer}`);
  } else if (
    (choice === "камень" && computer === "ножницы") ||
    (choice === "ножницы" && computer === "бумага") ||
    (choice === "бумага" && computer === "камень")
  ) {
    alert(
      `Вы выиграли! Вы выбрали - ${choice}, компьютер выбрал - ${computer}`,
    );
  } else {
    alert(
      `Вы проиграли! Вы выбрали - ${choice}, компьютер выбрал - ${computer}`,
    );
  }
}
