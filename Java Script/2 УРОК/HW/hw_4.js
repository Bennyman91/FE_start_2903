// 4. Розрахунок знижки на товар та alert:

//         Використовуючи prompt, запросіть в користувача вартість товару.
//         Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
//         Виведіть результат знижки за допомогою alert.

let costProduct = prompt("Введіть ватість товару, грн.:");
let discountPrc = 50;

let discountProduct = (Number(costProduct) * Number(discountPrc)) / 100;

alert(`% знижки: ${discountPrc}, сума Вашої знижки:  ${discountProduct} грн.`);