// 9   Створити prompt  який питає назву планети і вивести інформацію чи вона знаходиться в сонячній системі чи ні, вирішити за допомогою світч




let planetName = prompt(`Введіть назву планети`).toLowerCase();

switch (planetName) {
    case 'меркурій':
    case 'венера':
    case 'земля':
    case 'марс':
    case 'юпітер':
    case 'сатурн':
    case 'уран':
    case 'нептун':
        console.log(`${planetName} - планета Сонячної системи`);
        break;

    default:
        console.log('Error');
        break;
}