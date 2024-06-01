// 6. Визначення сезону:

//         Запитайте у користувача ввести номер місяця (від 1 до 12).
//         Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.


let month = prompt("Введіть номер місяця (від 1 до 12):");

month = parseInt(month);

let season;
if (month >= 1 && month <= 2 && month === 12) {
    season = "Зимовий місяць";
} else if (month >= 3 && month <= 5) {
    season = "Весняний місяць";
} else if (month >= 6 && month <= 8) {
    season = "Літній місяць";
} else if (month >= 9 && month <= 11) {
    season = "Осінній місяць";
} else {
    season = "Невірний номер. Будь ласка, введіть число від 1 до 12";
}

console.log(season);