// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

function calculateSquare(n, callback) {
    callback(n);
    
}

function square(n) {
    let result = n * n;
    console.log(result)
}

  calculateSquare(5, square)

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a function that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

function login (userName, password, callback) {
    callback(userName, password);
}

function checkCredentials(userName, password) {
    if (userName == "Ani" && password == "123456") {
        console.log("You are logged in!")
    }

    else {
        console.log("Wrong username or Password")
        
    }
}

login("Ani", "123456", checkCredentials)

// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

function sumNumbersUpTo(n, callback) {
    callback(n);
}

function result(n) {
      let sum =0
      for (let i = 1; i<=n; i++) {
      sum = sum +i
    }
    console.log(sum)

}

sumNumbersUpTo(4, result)