/**
 * Define a function that can answer the role of a user.
 * A user can be on following roles:
 * admin : with all access
 * subadmin - gets access to create/delete courses
    testprep - gets access to create/delete tests
    user - gets access to consume content
    other - trial user

    Input - getUserRole(name, role)
 */ 

    function getUserRole(name,  role) {

        switch (role) {
            case "admin":
                return `${name} is admin with all access`
                break;
            
           case "subadmin":
                return `${name} is sub-admin with access to create and delete courses`
                break;    

            case "testprep":
                return `${name} is a testprep with access to create and delete tests`
                break;    

                case "user":
                    return `${name} is user to consume content`
                    break;      
            default:
                return `${name} is a trial user`
                break;
        }
    }

    console.log(getUserRole("hitesh",  "testprep"));

    var getRole = getUserRole("sammy", "user");
    console.log(getRole);