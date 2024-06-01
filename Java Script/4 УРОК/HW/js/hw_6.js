let matrix = [];

matrix.unshift(12);
matrix.unshift(13);
matrix.unshift(14);
matrix.unshift(15);
matrix.unshift(16);

console.log(matrix);


function plusMatrix(array, number) {
    array.unshift(number);
}
plusMatrix(matrix, 17);
plusMatrix(matrix, 18);
plusMatrix(matrix, 19);

console.log(matrix);