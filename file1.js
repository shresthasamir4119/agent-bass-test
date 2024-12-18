// file1.js

// SQL Injection Vulnerability
const userInput = 'DROP TABLE users';
const query = "SELECT * FROM users WHERE name = '" + userInput + "'";

// This is a SQL injection vulnerability
console.log("Executing query: " + query);

// Weak Cryptography Vulnerability
const crypto = require('crypto');
const password = 'password123';

// Using MD5 for hashing, which is considered weak and insecure
const hash = crypto.createHash('md5').update(password).digest('hex');
console.log("Hashed password using MD5: " + hash);

// Insecure Random Number Generation
const insecureRandom = Math.random(); // Should use crypto.randomBytes instead
console.log("Insecure random number: " + insecureRandom);
