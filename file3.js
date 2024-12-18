// file3.js

// Unreachable Code
function sum(a, b) {
    return a + b;
    console.log('This will never run'); // Unreachable code after return
}

sum(2, 3);

// Undefined Variables
function printUserName(user) {
    console.log(userName); // userName is not defined
}

const user = { name: 'John' };
printUserName(user);

// Implicit Type Conversion Bug
function add(a, b) {
    return a + b;
}

console.log(add('5', 10)); // This will give '510' instead of 15 because '5' is a string
