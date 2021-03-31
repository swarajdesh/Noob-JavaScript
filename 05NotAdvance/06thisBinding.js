const Swaraj = {
    firstName : "Swaraj",
    lastName  : "Deshmukh",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
        First name is ${this.firstName} 
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};

const Object = {
    firstName : "Rock",
    lastName : "Johnson",
    role : "Sub-Admin",
    courseCount : 4,
};

//Swaraj.getInfo();
//Object.getInfo();

Swaraj.getInfo.bind(Object)();

var objectInfo = Swaraj.getInfo.bind(Object);
objectInfo();

// call
Swaraj.getInfo.call(Object);
