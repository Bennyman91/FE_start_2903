// 1 -Створити массив з днями неділі ( Понеділок, вівторок ... і т.д )  за допомогою циклу перебрати значення массиву, якщо значення вівторок чи четверг вивсести алерт в 19 00 урок



let weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < 7; i++){
    if (i===2 || i===4) {
        console.log(`On ${weekArray[i]} lesson at 19`);
    }
}