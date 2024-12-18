// file4.js

// Inefficient Looping (O(n^2) complexity)
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// Inefficient String Concatenation
function createMessage(arr) {
    let message = '';
    for (let i = 0; i < arr.length; i++) {
        message += arr[i] + ' ';
    }
    return message;
}

// Poor Memory Usage in Recursion
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Recursion can cause stack overflow for large numbers
