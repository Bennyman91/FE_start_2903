// Завдання 1: Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише не парні числа.
// Завдання 2: Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.




let numbersArr = [33,47,89,58,24,31,32];

let oddNumbersArr = numbersArr.filter (number => number%2!==0);

console.log (oddNumbersArr);

function filterArray(array, condition) {
    return array.filter(condition);
}
function selectOdd(number) {
    return number % 2 !== 0;
}

let oddNumbersFromFunction = filterArray(numbersArr, selectOdd);

console.log(oddNumbersFromFunction); 
