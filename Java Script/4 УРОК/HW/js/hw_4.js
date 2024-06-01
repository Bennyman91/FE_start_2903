// 4Напишіть функцію, яка приймає масив чисел і повертає новий масив, що містить квадрати цих чисел.

let matrix = [];
matrix.push(12);
matrix.push(13);
matrix.push(14);
matrix.push(15);
matrix.push(16);

console.log(matrix);

function plusMatrix(array, number) {
    array.push(number);
}
plusMatrix(matrix, 17);
plusMatrix(matrix, 18);
plusMatrix(matrix, 19);

console.log(matrix);