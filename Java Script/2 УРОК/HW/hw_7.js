
let points = prompt("Введіть свій бал за тест (число від 1 до 100):");

points = parseInt(points);


let incrementedPoints = points + 1;

let gradeBeforeIncrement;
let gradeAfterIncrement;

if (points >= 90 && points <= 100) {
    gradeBeforeIncrement = 'A';
} else if (points >= 80 && points <= 89) {
    gradeBeforeIncrement = 'B';
} else if (points >= 70 && points <= 79) {
    gradeBeforeIncrement = 'C';
} else if (points >= 60 && points <= 69) {
    gradeBeforeIncrement = 'D';
} else if (points >= 0 && points <= 59) {
    gradeBeforeIncrement = 'F';
} else {
    gradeBeforeIncrement = "Невірне введення. Будь ласка, введіть число від 1 до 100";
}

gradeAfterIncrement = (incrementedPoints >= 90 && incrementedPoints <= 101) ? 'A' : 
gradeAfterIncrement = (incrementedPoints >= 80 && incrementedPoints <= 89) ? 'B' :
gradeAfterIncrement = (incrementedPoints >= 70 && incrementedPoints <= 79) ? 'C' :
gradeAfterIncrement = (incrementedPoints >= 60 && incrementedPoints <= 69) ? 'D' :
gradeAfterIncrement = (incrementedPoints >= 0 && incrementedPoints <= 59) ? 'F' :
gradeAfterIncrement = "Невірне введення. Будь ласка, введіть число від 1 до 100";


let isPass = incrementedPoints >= 60 && incrementedPoints <= 101;

console.log(`Ви ввели ${points}`);

console.log(`Оцінка до інкремента: ${gradeBeforeIncrement}`);
console.log(`Оцінка після інкремента: ${gradeAfterIncrement}`);

if (isPass) {
    console.log(`Студент зарахований: Так`);
} else {
    console.log(`Студент зарахований: Ні`);
}