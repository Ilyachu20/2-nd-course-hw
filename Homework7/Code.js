// Задание 1.

let string = "js";
let upper = string.toUpperCase();
console.log(upper);

//Задание 2.

function example(array, string) {
  const lowerStr = string.toLowerCase();
  return array.filter((item) => item.toLowerCase().startsWith(lowerStr));
}

//Задание 3.

let numbs = 32.58884;

console.log(Math.floor(numbs));

console.log(Math.ceil(numbs));

console.log(Math.round(numbs));

//Задание 4.

let a = 52;
let b = 53;
let c = 49;
let d = 77;
let f = 21;
let j = 32;

const array = [a, b, c, d, f, j];

console.log(Math.min(...array));
console.log(Math.max(...array));

//Задание 5.

let numbs = Math.random() * 11;
console.log(Math.floor(numbs));

//Задание 6.

function numbs(a) {
  const length = Math.floor(a / 2);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (a + 1)));
  }

  return result;
}

// Задание 7.

function numbs(a, b) {
  return Math.round(Math.random() * (b - a + 1)) + a;
}

// Задание 8.

let myDate = new Date();
console.log(myDate);

// Задание 9.

let currentDay = new Date();
currentDay.setDate(currentDay.getDate() + 73);
console.log(currentDay);

// Задание 10.

const currentDay = new Date();
const options = { day: "numeric", month: "long", year: "numeric" };
currentDay.toLocaleDateString("ru-RU", options);

const currentDay = new Date();
options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
console.log(currentDay.toLocaleTimeString("ru-RU", options));
