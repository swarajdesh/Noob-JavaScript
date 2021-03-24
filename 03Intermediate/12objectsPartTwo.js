var user = {
    firstName : "Swaraj",
    lastName : "Deshmukh",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
      this.courseList.push(courseName);      
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total ${this.courseList.length} courses`
    }, 
 };
 
 var courseList = true;
 console.log(user.firstName);
 console.log(user.getCourseCount());
 user.buyCourse("React Native Course");
 console.log(user.getCourseCount());
