const google = 'google';
const fb = null;

if (google) {
    console.log("I execute - Block 1");
}

if (!!fb) {
    console.log("I execute - Block 2");
}

// In order to convert something into not a truty and falsy value 
// but sometimes to convert this things into exact boolean the only way or 
// the best way to do it is to use exclamation "!" sign but since exclamation "!"  
// reverses the logic thats why some of the times people using double shots "!!"
