const user = ["Swaraj",3,"admin"];
// var role = user[2];
// var name = user[0];

//console.log(role);

const myUser = {
    name: "Swaraj",
    courseCount: 5,
    role: "admin",
};

console.log(myUser.courseCount);

const { name, courseCount, role } = myUser;
console.log(courseCount);