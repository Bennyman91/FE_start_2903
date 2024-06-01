// Завдання 1: Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
// Завдання 2: Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.




let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];
let birdsArr = ['eagle', 'falcon', 'seagull', 'rooster', 'turkey'];

animalsArr = animalsArr.concat(birdsArr);

console.log (`Animals+birds: ${animalsArr}`);


let insectsArr = ['butterfly', 'fly', 'mosquito']
let concatPetsArr = animalsArr.concat(insectsArr);


console.log (`Animals+birds+insects: ${concatPetsArr}`);