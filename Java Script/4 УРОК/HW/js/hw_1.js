// 1Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.



let users = ['Аліна', 'Даша', 'Діма', 'Коля', 'Влад', 'Валя'];
function welcomeUser(users, hiUser) {
    
    for (let i = 0; i < users.length; i++) {
        hiUser(users[i]);
    }
}
function hiUser(userName) {
    console.log(`Вітаю, ${userName}`);
}
welcomeUser(users, hiUser);

