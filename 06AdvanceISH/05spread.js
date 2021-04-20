var returnedValue = Math.max(2,5,6,7,8,9);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj,{ a:1, b:2, c:3 }, { z:9, y:8, x:7 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myA = [5,4];
console.log(sumOne(...myA)); // spread operator 
//What spread operator does is it takes group and it tries to spread it into the multiple values


function sumTwo(...args) {
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2,3,4,5,6,6));



