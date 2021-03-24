var isEven = (element) => {
    return element % 2 === 0;
};


var result = [0,2,4,6,8].every((e) => (e % 2 === 0) );
console.log(result);