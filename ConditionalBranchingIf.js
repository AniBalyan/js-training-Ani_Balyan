// Note: For all the tasks in this file, use only conditional branching (if).
// Task 1: Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here

const {userInput} = require("./UserInput"); 
const myInput = userInput("Please enter your input ");
console.log(myInput);

if (myInput >0) {
    console.log ("You enetered positive number")
}
else if (myInput <0) {
    console.log ("You enterd negative number")
}
else {
    console.log("You eneterd 0")
}

// Task 2: Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// < 60 → F
// Write your code here

if (myInput >=90 && myInput <=100) {
    console.log ("Your grade is A")
}
else if (myInput >=80 && myInput<=89) {
    console.log ("Your grade is B")
}
else if (myInput >=70 && myInput<= 79) {
    console.log ("Your grade is C")
}
else if (myInput >=60 && myInput<=69) {
    console.log("Your grade is D")
}
else if (myInput <60) {
    console.log ("Your grade is F")
}
else {
    console.log("Grade can be maximum 100")
}

// Task 3: Weekend Checker
// Ask the user to enter a day of the week (e.g., "Monday", "Saturday").
// Print "It's the weekend!" if it's Saturday or Sunday, otherwise print "It's a weekday".
// Write your code here

if(myInput === "Saturday" || myInput === "Sunday") {
    console.log ("It's the weekend!")
}
else if (myInput === "Monday" || myInput === "Tuesday" 
    || myInput === "Wednesday" || myInput === "Thursday" || myInput === "Friday") {
        console.log ("It's a weekday")
    }
    else {
        console.log ("Please eneter valid day.")
    } 

// Task4: Game Score Adjuster
// Problem Statement:
// You are developing a simple game where the player starts with 10 points.
// If they answer a question correctly, their score increases by 1 (++).
// If they answer incorrectly, their score decreases by 1 (--).
// The program should check if the player’s score has reached 0 and print "Game Over" if true.
// Steps to Implement:
// Initialize score = 10.
// Ask the user if their answer is correct (true/false).
// Use if-else with ++ and -- to update the score.
// If the score reaches 0, print "Game Over".
// Otherwise, print the updated score.
// Write your code here

let score = 10;
if (myInput === "Correct") {
    score++;
}
else if (myInput === "Incorrect") {
    score--;
}
else {
    "Please enter Correct or Incorrect" // you are missing console.log here
};
if (score === 0) {
    console.log ("Game over")
}
else {
    console.log (`Your score now: ${score}`)
}
