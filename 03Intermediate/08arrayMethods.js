// array foreach method
console.log("forEach Method");

const numbers = [1,2,3,4,5];

let sum = 0;

numbers.forEach((item,index,arr) => {
    console.log('a['+index+'] = '+item);
});

numbers.forEach( item => {
    sum += item;
});

console.log(sum);

// Map Array method
console.log("Map Array method");


const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'desktop',
        price: 1500,
        count: 2 
    }, {
        name: 'phone',
        price: 500,
        count: 10
    }
];

const totalProducts = products.map(item => item.price * item.count);
console.log(totalProducts);

// filter Array Method
console.log("filter Array Method");
