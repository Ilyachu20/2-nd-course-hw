// адание 1

function num(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// Задание 2

function num(n) {
  if (n % 2 === 0) {
    return "Число четное";
  }
  return "Число нечетное";
}

// Задание 3

function num(n) {
  let mult = n ** 2;
  console.log(`Квадрат числа равен ${mult}`);
}

function getSquare(n) {
  return n ** 2;
}


// Задание 4 - исправленный вариант



function num() {
  let year = +prompt('Сколько вам лет?');

  if (isNaN(year) || year < 0) {
    alert('Вы ввели неправильное значение');
  } else if (year >= 0 && year <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}




// Задание 5


function num() {
    let a = +prompt();
    let b = +prompt();
if (!Number.isNaN(a) && !Number.isNaN(b)) {
    console.log(a * b); 
        return;
 } else {
    console.log ('Одно или оба значения не являются числом');

    }
}

// Задание 6


function num() {
    let n = +prompt();

    if (Number.isNaN(n)) {
        return 'Переданный параметр не является числом';
    }

    return `n в кубе равняется ${n ** 3}`;
}


// Задание 7

const circle1 = {
    radius: 20,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};