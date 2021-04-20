//import User from "./06classjs.js";

const User = require("./06classjs.js");  

const swaraj = new User("swaraj", "swaraj@gmail.com");

console.log(swaraj.getInfo());

swaraj.enrollCourse("React Bootcamp");
swaraj.enrollCourse("MERN Bootcamp");

console.log(swaraj.getCourseList());

let courses = swaraj.getCourseList();

courses.forEach((c) => {console.log(c);})