console.log(this);

var user = {
    firstName: "Swaraj",
    courseCount: 4,
    getCourseCount: function() {
        console.log("Line 7", this);
        function sayhello(){
            console.log("hello");
            console.log("LINE 10",this);
        }
        sayhello();
    },
};

user.getCourseCount();  