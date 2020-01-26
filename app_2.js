// const sayHello = function () {
//   console.log('Hello');
// }


// Arrow function Method
// const sayHello = () => {
//   console.log('Hello Wolrd!');
// }

// sayHello();


// One line function does not need brsaces
// const sayHello = () => console.log('Hello Wolrd!');
// sayHello();


// Same As Above
// const sayHello = () => 'Hello World!'
// console.log(sayHello())


// Return Object Format
// const sayHello = () => ({ msg: 'Hello World!' })
// console.log(sayHello());


// Single parameter does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('James');


// Multiple parameters need parenthesis
// const sayHello = (firstName, lastName, numb) => console.log(`Hello ${firstName} ${lastName} ${numb}`);

// sayHello('James', 'Harding', 'number 13');

// Using arrow functions as callbacks

const users = ['Kevin', 'James', 'Kyrie', 'Iverson'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// })

// console.log(nameLengths);


// Shorter version
// const nameLengths = users.map((name) => {
//   return name.length;
// })

// console.log(nameLengths);

// Shortest version
const nameLengths = users.map(name => name.length);
console.log(nameLengths);





