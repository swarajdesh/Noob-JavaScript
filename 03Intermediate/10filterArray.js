var testArray = [2,4,6,3,1,5,9,8];

console.log(testArray.fill("empty"));

const myNumber = [23, 24, 44, 55, 66, 77, 88, 99];

const result = myNumber.filter( (num) => num != 55);

console.log(result);

console.log("Slice and Splice");

var users = ["Ted", "Swaraj", "Sam", "Om", "Oxlade", "Salah"];
console.log(users.slice(1,3));

users.splice(1,3,"HI","BYE");
console.log(users);