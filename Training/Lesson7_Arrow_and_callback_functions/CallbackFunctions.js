// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

function calculateSquare(n, callback) {
    callback(n*n);
    }

function square(result) {
    console.log(result)
}

  calculateSquare(5, square)

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a function that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

function login(userName, password, callback) {
    if (userName === "Ani" && password === "123456") {
        callback("You are logged in!");
    } else {
        callback("Wrong username or Password");
    }
}

function displayMessage(message) {
    console.log(message);
}

login("Ani", "123456", displayMessage);

// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

function sumNumbersUpTo(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    callback(sum);
}

function result(sum) {
    console.log(sum);
}

sumNumbersUpTo(2, result);