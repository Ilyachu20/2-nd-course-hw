// Задание 1.

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 10) break;
  console.log(numbs[i]);
}

// Задание 2.

const numbs = [1, 5, 4, 10, 0, 3];
let position = numbs.indexOf(4);
console.log(position);

// Задание 3.

const numbs = [1, 5, 4, 10, 0, 3];
let joinedText = numbs.join(" ");
console.log(joinedText);

//Задание 4.

const numbs = []; //главный массив где будет все находиться
for (let i = 0; i < 3; i++) {
  //делаю три строки
  let stroka = []; // делаю внутренний массив
  for (let j = 0; j < 3; j++) {
    // делаю три 1 в строку
    stroka.push(1); // добавляю 1
  }
  numbs.push(stroka); // добавляю к основному массиву внутренний массив
}
console.log(numbs); // вывод основного массива


//Задание 5.

const numbs = [1, 1, 1];
numbs.push(1);
console.log(numbs);


//Задание 6.

const numbs = [9, 8, 7, "a", 6, 5];
numbs.sort();
const del = numbs.filter((el) => el != "a");
console.log(del);

// Задание 7.

const numbs = [9, 8, 7, 6, 5];
let riddle = +prompt("Угадайте, какое значение есть в массиве");
if (numbs.includes(riddle)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


// Задание 8.

const str = "abcdef";
const numbs = str.split("");
console.log(numbs);
numbs.reverse();
console.log(numbs);
const result = numbs.join("");
console.log(result);


// Задание 9.

const numbs = [
  [1, 2, 3],
  [4, 5, 6],
];
const answer = [...arr[0], ...arr[1]];
console.log(answer);


// Задание 10.

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbs.length - 1; i++) {
  let sum = numbs[i] + numbs[i + 1];
  console.log(sum);
}


// Задание 11

function numbs(numbers) {
  return numbers.map((num) => num * num);
}


// Задание 12.

function numbs(words) {
  return words.map((str) => str.length);
}


// Задание 13.

function numbs(numbers) {
  return numbers.filter((num) => num < 0);
}


// Задание 14.

const numbs = [];
for (let i = 0; i < 10; i++) {
  numbs.push(Math.floor(Math.random() * 11));
}
const numbers = numbs.filter((num) => num % 2 === 0);
console.log("Исходный массив:", numbs);
console.log("Массив чётных чисел:", numbers);


// Задание 15.

const numbs = [];
for (let i = 0; i < 6; i++) {
  numbs.push(Math.floor(Math.random() * 10) + 1);
}
const sum = numbs.reduce((acc, num) => acc + num, 0);
const average = sum / numbs.length;
console.log('Массив:', numbs);
console.log('Среднее арифметическое:', average);

