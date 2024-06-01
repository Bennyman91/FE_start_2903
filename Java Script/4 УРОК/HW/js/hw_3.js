// 3Напишіть функцію, яка приймає два числа: основу та показник степеня, і повертає результат піднесення основи до цього степеня.


let arrayNumbers = [5, 2, 3, 4];
function checkNumbers(array, number, index) {
   
    if (number = array[index]) {
        array[index] = number ** 2;
    }
}
for (let i = 0; i < arrayNumbers.length; i++) {
checkNumbers(arrayNumbers, arrayNumbers[i], i);  
}
console.log(arrayNumbers);
