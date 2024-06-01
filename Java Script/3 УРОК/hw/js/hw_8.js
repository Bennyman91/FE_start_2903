// 8.  Створити prompt  який питає день, якщдо це ВТ чи Чт то вивести у вас сьогодні заняття, у вас сьогодні вільний день, вирішити за допомогою Switch





let youDay = prompt(`Enter today's day of the week`).toLowerCase();


switch (youDay) {
    case 'tuesday':
    case 'thursday':
        console.log(`Today is ${youDay}, you have a lesson at 19`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Today is ${youDay} , weekend - take a rest`);
        break;
    case 'monday':
    case 'wednesday':
    case 'friday':
        console.log(`Today is ${youDay} , you are free from lessons - do your homework`);
        break;
    default:
        console.log('Incorrect day');
        break;
}