//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання. 
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.

//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//*варіант1
//function greet() {
//    return console.log("Привіт!");
//}
//greet(); // Виведе "Привіт!"
hellow('Кирило')
function hellow(name) {
    return console.log(`Привіт ${name} як в тебе день?`)
}
hellow('Кирило')
////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}
function sum(a, b) {
    let s = 0;
    for (let i = a; i < b + 1; i++) {
           s += i
  }
 return console.log(s)
//}
//sum(0, 5)
//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.
//const hellow1 = function (name) {
   // return console.log(`Привіт ${name} як в тебе день?`)
//}
//hellow('User')
//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//let sA = 0;
//const srZnach = (...arr) => {
   // let s = 0;
  //  for (let i = 0; i < arr.length; i++) s += i
  //  return console.log(s / arr.length)

//}
//srZnach(5, 6, 7, 8, 3, 2, 4, 5, 1)
//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6). 
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{ 
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт.Реалізуйте:
//*фільтр за типом продуктів
//* Підрахунок цін обраного типу продуктів
const state = [
  { name: "Хліб", price: 20, description: "Свіжий пшеничний хліб", type: "Випічка" },
  { name: "Молоко", price: 25, description: "Свіже коров'яче молоко", type: "Молочні продукти" },
  { name: "Сир", price: 150, description: "Твердий сир з натурального молока", type: "Молочні продукти" },
 { name: "Масло", price: 80, description: "Вершкове масло", type: "Молочні продукти" },
 { name: "Яйця", price: 30, description: "Свіжі курячі яйця, 10 шт", type: "Молочні продукти" },
 { name: "Курка", price: 120, description: "Ціла курка, охолоджена", type: "М'ясо" },
 { name: "Яблука", price: 40, description: "Свіжі червоні яблука", type: "Фрукти" },
 { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
 { name: "Апельсини", price: 60, description: "Свіжі апельсини", type: "Фрукти" },
  { name: "Картопля", price: 15, description: "Молода картопля", type: "Овочі" },
 { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
 { name: "Помідори", price: 45, description: "Свіжі червоні помідори", type: "Овочі" },
   { name: "Огірки", price: 35, description: "Свіжі зелені огірки", type: "Овочі" },
   { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
   { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
   { name: "Борошно", price: 25, description: "Пшеничне борошно, 1 кг", type: "Сухі продукти" },
    { name: "Цукор", price: 30, description: "Білий цукор, 1 кг", type: "Сухі продукти" }]
function project(arr) {
   let product = prompt('введіть назву товару')
let price = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type == product) {
           console.log(arr[i])
            price += arr[i].prace
       }

   }
    console.log(`Товарів обрано на ${price} грн`)
}
project(state)

//?Самостійне завдання
//* Написати функцію, яка приймає рядок і повертає повідомлення про те, чи є довжина рядка меншою, більшою чи рівною 10 символам.
//* Написати функцію, яка приймає номер місяця (1-12) і повертає номер кварталу (1-4)
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи є це число позитивним, негативним чи нульовим.
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи входить це число в один з заданих діапазонів: [0-10], [11-20], [21-30], чи ні.
//* Створіть функцію, яка обчислює площу трикутника за трьома сторонами, введеними користувачем.
//*Створіть функцію,для пошук мінімального значення в масиві чисел.
//*Створіть функцію, для пошук всіх індексів елементу в масиві.

function StringLength(inputString) {
    if (inputString.length < 10) {
        return "Довжина рядка менша за 10 символів";
    } else if (inputString.length > 10) {
        return "Довжина рядка більша за 10 символів";
    } else {
        return "Довжина рядка рівна 10 символам";
    }
}
function month(monthNumber) {
    return Math.ceil(monthNumber / 3);
}

function checkNumberSign(number) {
    if (number > 0) {
        return "Позитивне число";
    } else if (number < 0) {
        return "Негативне число";
    } else {
        return "Нуль";
    }
}

function NumberRange(number) {
    if (number >= 0 && number <= 10) {
        return "Число в діапазоні [0-10]";
    } else if (number >= 11 && number <= 20) {
        return "Число в діапазоні [11-20]";
    } else if (number >= 21 && number <= 30) {
        return "Число в діапазоні [21-30]";
    } else {
        return "Число не входить в жоден з вказаних діапазонів";
    }
}

function calculate(a, b, c) {
    const p = (a + b + c) / 2;
    const area = Math.s(p * (p - a) * (p - b) * (p - c));
    return area;
}

function findMinValue(arr) {
    return Math.min(...arr);
}

function findAllIndexes(arr, target) {
    let indexes = [];
    arr.forEach((element, i) => {
        if (element === target) {
            indexes.push(i);
        }
    });
    return indexes;
}
}