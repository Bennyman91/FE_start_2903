// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення





let numbersArr = [17,29,65,48,67,97,20,33];

let mapNumbersArr = numbersArr.map (number => number**2);

console.log (mapNumbersArr);

function mapperAddString(number) {
    return 'Price ' + number + ' $';
}
function mapArrayWithTransformer(array, transformer) {
    return array.map(transformer);
}
let transformedArray = mapArrayWithTransformer(numbersArr, mapperAddString);

console.log(transformedArray);