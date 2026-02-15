document.addEventListener("DOMContentLoaded", function () {
  // кнопка для десктопа
  const desktopBtn = document.getElementById("desktop-guess-btn5");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", startFifth);
  }

  // копка для мобилки и планшета
  const mobileBtn = document.getElementById("guess-number-btn5");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", startFifth);
  }
});

// начало игры

function startFifth() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let correctCount = 0;

  let answer = prompt(quiz[0].question + " " + quiz[0].options.join(" "));
  if (answer === null) {
    alert("Игра завершена");
    return;
  }
  if (Number(answer) === quiz[0].correctAnswer) {
    correctCount++;
  }

  answer = prompt(quiz[1].question + " " + quiz[1].options.join(" "));
  if (answer === null) {
    alert("Игра завершена");
    return;
  }
  if (Number(answer) === quiz[1].correctAnswer) {
    correctCount++;
  }

  answer = prompt(quiz[2].question + " " + quiz[2].options.join(" "));
  if (answer === null) {
    alert("Игра завершена");
    return;
  }
  if (Number(answer) === quiz[2].correctAnswer) {
    if (
      prompt(quiz[0].question + " " + quiz[0].options.join(" ")) ==
      quiz[0].correctAnswer
    ) {
      correctCount++;
    }

    if (
      prompt(quiz[1].question + " " + quiz[1].options.join(" ")) ==
      quiz[1].correctAnswer
    ) {
      correctCount++;
    }

    if (
      prompt(quiz[2].question + " " + quiz[2].options.join(" ")) ==
      quiz[2].correctAnswer
    ) {
      correctCount++;
    }

    
    alert("Правильных ответов: " + correctCount);
  }
}
