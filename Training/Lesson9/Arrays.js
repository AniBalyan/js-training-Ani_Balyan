// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.
// Write you code here

let getFirstAndLast = function (arr) {
    let firstAndLastElements = arr[0] + ' '  + arr[arr.length-1]
    return firstAndLastElements
    }

console.log(getFirstAndLast(["aaa", "bbb", "ccc"]))

// Task 2: Get the Second Element in an Array
// Write a function getSecondElement(arr) that returns the second element of the array.
// Requirements:
// The second element is at index 1.
// If the array has fewer than two elements,
// throw an error with the message "Array should have a minimum of 2 elements.".
// Write you code here

let getSecondElement = function(arr) {
    if (arr.length<2 ) {
        return "Array should have a minimum of 2 elements."
    }
    else {
    return arr[1]
    }

    
}

console.log(getSecondElement(['a', 'b', 'c']))

// Task 3: Access the First Element That is Greater Than 10
// Write a function getFirstGreaterThanTen(arr)
// that returns the first element from the array that is greater than 10.
// Requirements:
// Use indexing to access each element.
// If no elements are greater than 10, return undefined.
// Stop once the first element greater than 10 is found.
// Write you code here

// The logic is incorrect because arr.indexOf(arr[i]) > 10 checks the index, not the value.
// And your array is a list of strings, so comparing strings to 10 makes no sense here.
let getFirstGreaterThanTen = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            return arr[i];
        }
    }
    return undefined;
}



console.log(getFirstGreaterThanTen([3, 8, 11, 5, 12, 7]))
