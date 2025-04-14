/* Task 1: Shopping List Manager
You should create a function `manageShoppingList()` to manage a shopping list.
Requirements:
1. Create an array called `shoppingList` with some initial items (e.g., `["Milk", "Bread", "Eggs"]`).
2. Add a new item `"Butter"` to the list.
3. Remove the last item from the list.
4. Add a new item `"Juice"` to the beginning of the list.
5. Remove the first item from the list.
6. Print the final shopping list after all operations.
Example Call:
manageShoppingList();
Write your code here: */

let shoppingList = ["Milk", "Bread", "Eggs"];
let manageShoppingList = function() {
    shoppingList.push("Butter");
    shoppingList.pop()
    shoppingList.unshift("Juice")
    shoppingList.shift()
   }
manageShoppingList()
console.log(shoppingList)


/* Task 2: Character Collector
You should create a function `collectCharacters(str)` that takes a string and stores each character in an array, except for spaces.
Requirements:
1. The function should accept a string as input.
2. It should go through each character of the string and add it to an array.
3. Spaces should be ignored and not added to the array.
4. The function should return the final array of characters.
Example Call:
console.log(collectCharacters("hello world"));
Expected output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
Write your code here: */
function collectCharacters(str) {
    let charsList = new Array();
    str = str.replace(/\s/g, ''); // assign trimmed string back to str
   
     for (let i = 0; i < str.length; i++) {
        charsList.push(str[i]);
    }

    return charsList;
}

console.log(collectCharacters(" hel l  o "));


/*Task 3: Store Earnings Tracker
You should create a function `recordSale(amount)` to track store earnings and another function `getTotalEarnings()` to calculate total earnings.
Requirements:
1. Create an array called `earnings` to store sale amounts.
2. Implement the function `recordSale(amount)`, which records a sale amount.
3. Implement the function `getTotalEarnings()`, which calculates and returns the total earnings.
4. Use `recordSale()` to add the following sales: `100`, `50`, `200`, `75`.
5. Call `getTotalEarnings()` and print the total earnings.
Example Call:
recordSale(100);
recordSale(50);
recordSale(200);
recordSale(75);
console.log(getTotalEarnings()); // Expected output: 425
Write your code here: */

let earnings = new Array();
 
 function recordSale(...amount) {
    for (let inputtedAmounts of amount){
       earnings.push(inputtedAmounts)
    }
    
    return earnings;
 }

 function getTotalEarnings() {
    let total =0;
    for (let i = 0; i < earnings.length; i++){
        total = total + earnings[i]
    }

    return total;
 }

 recordSale(100);
 recordSale(50);
 recordSale(200);
 recordSale(75);
 console.log(earnings)
 console.log(getTotalEarnings())


/*Task 4: Remove Duplicates from an Array
You should create a function `removeDuplicates(arr)` that accepts an array of numbers and removes all duplicate values, 
returning a new array with only the unique values.
Requirements:
1. The function should accept an array of numbers as input.
2. It should remove all duplicate numbers from the array.
3. The function should return the new array containing only unique numbers.
4. You are only allowed to use simple for loops and basic array methods such as:
   `push()`, `pop()`, `shift()`, or `unshift()` to solve this. You **cannot use methods like `sort()`, `filter()`, or `Set()`**.

Example Call:
console.log(removeDuplicates([11, 11, 2, 3, 4, 4, 55, 6, 2, 1]));
// Expected output: [11, 2, 3, 4, 55, 6, 1]
Write your code here: */

let withDuplicates = new Array();
let withoutDuplicates = new Array();

function removeDuplicates(...arr) {  // Should accept an array of numbers. But the current function accepts spread (...arr) which flattens arguments, not a single array.
// removeDuplicates([11, 11, 2])
// Will not work as expected, because:
// function removeDuplicates(...arr)
// Turns arr into [[11, 11, 2]] (a single element array of an array) — this causes it to break if passed as an array.


for (let inputtedNumbers of arr) {
    withDuplicates.push(inputtedNumbers)
}
console.log("with duplicates: " + withDuplicates)

for (let number of withDuplicates) {
    if (!withoutDuplicates.includes(number)) {
       withoutDuplicates.push(number)
    }
}

 return withoutDuplicates;

}


console.log("Without duplicates: " + (removeDuplicates(4, 4, 2, 3, 4, 6, 4)))


