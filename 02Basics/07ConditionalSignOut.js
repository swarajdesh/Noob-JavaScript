// Show user a signout button if he is authenticated
// otherwise show him option tp Login/Signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show Signout button"); 
// } else {
//     console.log("Show login option");
// }

authenticated ? console.log("SignOut button") : console.log("Login");