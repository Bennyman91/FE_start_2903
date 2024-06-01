// 2 Стрілкові функції
//  перепишіть попередню функцію в стрілкову



let a = 6;
let b = 3;

function power (a,b) {
    let result = a**b;
    return result;
}

console.log(`${a} ^ ${b} = ${power(a,b)}`);

let shortPower = (a,b) =>  a**b;
console.log (`${a} ^ ${b} = ${shortPower(a,b)}`);


function powerValue (number, exponent){
    let result =1;
    for (let i=0; i<exponent; i++){
        result*=number;
    }
    return result;
}
console.log(`2 in 3 ${powerValue(2,3)}`);