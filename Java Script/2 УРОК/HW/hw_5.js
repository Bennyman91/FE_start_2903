// 5. Порівняння трьох чисел:

//         Запитайте у користувача ввести три числа (ввести через prompt)
//         Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.


let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));
let number3 = parseFloat(prompt("Введіть третє число:"));

let maxNum = number1;

if (number2 > maxNum) {
    maxNum = number2;
}
if (number3 > maxNum) {
    maxNum = number3;
}

console.log (`Ви ввели ${number1}, ${number2}, ${number3}`);
console.log (`Найбільше число: ${maxNum}`);