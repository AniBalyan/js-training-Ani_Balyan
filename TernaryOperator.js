// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

let myNumber = 15;

if (myNumber%2 === 0) {
    console.log ("Even number")
}
else {
    console.log ("Odd number")
}

myNumber%2 === 0 ? console.log ("Even number") : console.log ("Odd number") 



// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

const {userInput} = require("./UserInput"); 
const myInput = userInput("Please enter your input ");
console.log(myInput);

if (myInput >=50 && myInput <=100) {
    console.log ("Pass")
}
else if (myInput <50 && myInput >=0) {
    console.log("Fail")
}

else {
    console.log ("Please eneter 0-100 score")
}

myInput >= 50 && myInput <= 100 ? console.log("Pass") : myInput <50 && myInput >= 0 ? console.log("Fail") 
    : console.log("Please enter 0-100 score");