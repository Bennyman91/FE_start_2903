// Завдання 1: Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
// Завдання 2: Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.


let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];

animalsArr.splice (2,2);

console.log(`Domestic animals: ${animalsArr}`);

let petsArr = animalsArr.splice (0,2);
console.log (`Our pets: ${petsArr}`);