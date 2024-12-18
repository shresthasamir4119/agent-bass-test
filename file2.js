// file2.js

// Nested Callbacks (Callback Hell)
function getData(callback) {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            processData(data, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    saveData(result, (saveErr) => {
                        if (saveErr) {
                            callback(saveErr);
                        } else {
                            callback(null, 'Success');
                        }
                    });
                }
            });
        });
}

function processData(data, callback) {
    // Processing data logic
    callback(null, data);
}

function saveData(data, callback) {
    // Save data logic
    callback(null);
}

// Large Function with Multiple Responsibilities
function handleUserData(user) {
    const userName = user.name;
    const userEmail = user.email;
    
    // Performing multiple tasks in one function
    console.log('Name:', userName);
    console.log('Email:', userEmail);
    
    // Sending a confirmation email (side-effect)
    sendConfirmationEmail(userEmail);
    
    // Storing user info in the database
    storeInDatabase(user);
    
    // Calculating user statistics
    const stats = calculateUserStats(user);
    console.log('User Stats:', stats);
}

// Repetitive Code
function addUser(user) {
    const name = user.name;
    const email = user.email;
    
    console.log('User added: ' + name);
    storeInDatabase(user);
}

function updateUser(user) {
    const name = user.name;
    const email = user.email;
    
    console.log('User updated: ' + name);
    storeInDatabase(user);
}

function storeInDatabase(user) {
    console.log('Storing user data in database...');
    // Simulated database storage
}

function sendConfirmationEmail(email) {
    console.log('Sending confirmation email to ' + email);
}

function calculateUserStats(user) {
    return { loginCount: 10, lastLogin: '2024-12-01' };
}
