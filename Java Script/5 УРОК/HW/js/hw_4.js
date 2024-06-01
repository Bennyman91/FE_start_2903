// Завдання 1: Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.





let animalsArr = ['dog', 'cat', 'lion', 'tiger', 'sheep', 'cow'];

console.log (`Looking for a lion: ${animalsArr.includes('lion')}`);

let lookingForTiger = animalsArr.includes('tiger');
console.log (`Looking for a tiger: ${lookingForTiger}`);

let lookingForBirds = animalsArr.includes('birds');
console.log (`Looking for a birds: ${lookingForBirds}`);