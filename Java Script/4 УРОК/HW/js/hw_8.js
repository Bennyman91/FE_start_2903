let fillArray = ['one', 'two','', 'four', 'five', ''];
console.log(fillArray);

fillArray.fill('three',2,3);
console.log(fillArray);


function fillFunction(array, number, start, end = array.length) {
    array.fill(number, start, end);
}

fillFunction(fillArray, 'six', 5)
console.log(fillArray);

fillFunction(fillArray, ';)', 0, 3)
console.log(fillArray);