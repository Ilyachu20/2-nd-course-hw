document.addEventListener("DOMContentLoaded", function () {

  const desktopBtn = document.getElementById("desktop-guess-btn6");
  const mobileBtn = document.getElementById("guess-number-btn6");
  const playground = document.querySelector(".playground");
  const game = document.querySelector(".game");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
// начало

  function changeBackground() {
    const randomColor = getRandomColor();
    
    if (playground) {
      playground.style.backgroundColor = randomColor;
      playground.style.backgroundImage = "none";
    }
    
    if (game) {
      game.style.backgroundColor = randomColor;
      game.style.backgroundImage = "none";
    }
  }

  if (desktopBtn) {
    desktopBtn.addEventListener("click", function(event) {
      event.preventDefault();
      changeBackground();
    });
  }

  if (mobileBtn) {
    mobileBtn.addEventListener("click", function(event) {
      event.preventDefault();
      changeBackground();
    });
  }
});