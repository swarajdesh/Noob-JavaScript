var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
};

var Swaraj = new User("Swaraj",2);
Swaraj.getCourseCount();
Swaraj.getFirstName();
console.log(Swaraj);

if (Swaraj.hasOwnProperty("firstName")) {
    Swaraj.getFirstName();
}