class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name); 
    }
    getCourseList() {
        return this.#courseList;
    }
    login() {
        return "You are logged in";
    }
}

class SubAdmin extends User {
    constructor(name, email) {
        super(name , email);
    }
    getAdminInfo() {
        return "I am subAdmin";
    }
}


module.exports = User;

// private props getters and setters in JavaScript

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);




const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
