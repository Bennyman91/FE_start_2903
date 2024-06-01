// 3. Розрахунок вартості товару та console.log:

//         Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
//         Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
//         Виведіть результат за допомогою console.log.


let quantityProduct = prompt("Ввести кількість товару:");
let priceProduct = prompt("Ввести ціну товару:");

let costProduct = Number(quantityProduct) * Number(priceProduct);

console.log(`Кількість товару:  ${quantityProduct}`);
console.log(`Ціна:  ${priceProduct}`);
console.log(`Вартість:  ${costProduct}`);