let matrix = [12,13,14,15,16,17,18,19,20];
console.log(matrix);
matrix.shift();
console.log(matrix);

function minusMatrix(array, number) {
    array.shift(number);
}
minusMatrix(matrix);

console.log(matrix);