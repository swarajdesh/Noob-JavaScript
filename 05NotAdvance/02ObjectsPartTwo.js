var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is : ${this.name}`);
    },
};

var swaraj = Object.create(User);
console.log(swaraj);
swaraj.name = "Swaraj Deshmukh";
swaraj.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: {value:3},
});

sam.getUserName();