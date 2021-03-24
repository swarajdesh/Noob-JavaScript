var countries = ["India", "NewZealand", "Ireland", "Belgium"];

var states = new Array("Maharashtra", "Punjab", "Rajastan", "Telangana");

console.log(states);

console.log(states.length);

console.log(states[2]);

var user = ["Swaraj", "Swaraj@gmail.com", 3, 34, true];
console.log(user);

user.pop();
console.log(user);
user.unshift("New Value");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(3));
console.log(Array.from("Swaraj"));