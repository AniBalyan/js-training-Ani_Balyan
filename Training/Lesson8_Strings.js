// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!

let stringLength = str => str.length
console.log(stringLength("123456"))

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

let str = function(myStr) {

    if(myStr.length < 1 || myStr.length > 50 || typeof myStr !== 'string' ) {
        console.log("Text should be string with characters between 1 and 50.");
        return "";
    }

    let output = "";  
    for (let i = 0; i < myStr.length; i++) {
        output += myStr[i] + '\n'; 
    }
    return output;
};

// Log the result of calling the function
console.log(str("1234"));

// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

let makeUppercase = function(name, surname) {
    if (typeof name != 'string' || typeof surname != 'string' || name.length <1 || surname.length <1){
        return "Enter name and surname!"
    }
   let uppercasedFullname = name[0].toUpperCase() + name.slice(1) + " " + surname[0].toUpperCase() + surname.slice(1)
    return uppercasedFullname;
}

 console.log(makeUppercase("ani", "balyan"))

// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

let alternatedString = function(text) {
    if (text.length <10 || text.length > 20){
        console.log("Enter text with 10-20 characters!")
        return "";
    }

    let alternated = '';
    for(let i = 0; i <text.length; i++) {
        if (i%2 === 0) {
       alternated+= text[i].toUpperCase()
        }
        else {
            alternated+=text[i].toLowerCase()
        }
       
    }
    return alternated;

}
 console.log(alternatedString("aaaaaaaaaaa"))


// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

let checkPalindrome = function (text) {
    text = text.replace(/[^a-zA-Z0-9]/g, '')

    for (let i =0; i < text.length/2; i++){
        if (text[i] !== text[text.length-1-i]) {
            return false
        } 
    }
    return true
}
    console.log(checkPalindrome("  race, car   "))

// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

let checkCount = function(text, character) {
    let count = 0;  
    for (let i= 0; i< text.length; i++){
    if (text[i] === character) {

        count++
    }
    }

    return count
}

console.log(checkCount("Hello", "l"))