document.addEventListener("DOMContentLoaded", function () {
  // кнопка для десктопа
  const desktopBtn = document.getElementById("desktop-guess-btn3");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", startThird);
  }

  // копка для мобилки и планшета
  const mobileBtn = document.getElementById("guess-number-btn3");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", startThird);
  }
});

// начало игры
function startThird() {
  let text = prompt("Введите текст, который будет перевернут");

  if (text === null) {
    alert("Игра завершена");
    return;
  }
  let reversed = text.split("").reverse().join("");
  alert(reversed);
}
