// ПРАКТИКА ПО УРОКУ

// Задание 1.

let answer = prompt("Введите пароль");
let password = "qwerty";
if (password === answer) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неверно")
}

// Задание 2.

let c = Number(prompt("Введите число"));
if (c >= 0 && c < 10) {
  alert("Верно")
} else {
  alert("Неверно")
}


// Задание 3

let d = Number(prompt(""));
let e = +prompt("");
if (d > 100 || e > 100) {
  alert("Верно")
} else {
  alert("Неверно")
}

// Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
  case 1:
    alert("Зима");
    break;
  case 2:
    alert("Зима");
    break;
  case 3:
    alert("Весна");
    break;
  case 4:
    alert("Весна");
    break;
  case 5:
    alert("Весна");
    break;
  case 6:
    alert("Лето");
    break;
  case 7:
    alert("Лето");
    break;
  case 8:
    alert("Лето");
    break;
  case 9:
    alert("Осень");
    break;
  case 10:
    alert("Осень");
    break;
  case 11:
    alert("Осень");
    break;
  case 12:
    alert("Зима");
    break;
  default:
    alert("Номер месяца больше 13")
}


