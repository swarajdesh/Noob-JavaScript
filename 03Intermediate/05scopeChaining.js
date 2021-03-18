var name = "Swaraj";

console.log("Line number 3 ", name);

function sayName() {
    var name = "Mr.Deshmukh";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        console.log("Line number 10", name);
    }
}

sayName();