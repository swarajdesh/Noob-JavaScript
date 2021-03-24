var user = {
    firstName : "Swaraj",
    lastName : "Deshmukh",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true
 };

 console.log(user.lastName);
 console.log(user["firstName"]);

 console.log(user.loginCount);
 user.loginCount = 55;
 console.log(user.loginCount);