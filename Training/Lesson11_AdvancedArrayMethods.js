// ✅ Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.
// your code here

/*["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  }); */

  function customForEach(array, callback) {
    for (let i = 0; i <array.length; i++) {
        callback(array[i], i, array);
        }      
  } 

  function callbackFunction (currentValue, index, array) {
    console.log(`${currentValue} is at index ${index} in ${array}`)
  }

  customForEach(["Bilbo", "Gandalf", "Nazgul"], callbackFunction )




// ✅ Task 2: Implement customMap
// Description:
// Write a function customMap that works like Array.prototype.map().
// It should return a new array with the results of applying a given function to every element in the input array.
// Requirements:
// Do not use .map().
// Use your own logic with a loop.
// Must return a new array (do not modify the original array).
// your code here

//let result = ([1, 2, 3, 4].map(item => item * 2));
//console.log(result); 

function customMap(array, callback) {
    let newArray = [];
   for (let i =0; i < array.length; i++) {
    newArray.push(callback(array[i]))
   }

   return newArray
  }

  let mapCallback = function(number) {
  return number * 2 
  }

  console.log(customMap([1, 2, 3, 4], mapCallback))




// ✅ Task 3: Implement customReverse
// Description:
// Create a function customReverse that reverses the elements of an array and returns the reversed array.
// Requirements:
// Do not use .reverse().
// You may use a loop or swap elements manually.
// Should not use built-in methods that directly reverse arrays.
 // your code here

function customReverse(array) {
  for (let i =0; i <array.length/2; i++) {

 let temp = array[i] 
 array[i] = array[array.length-1-i]
 array[array.length-1-i] = temp

  }
 return array
}
console.log(customReverse([1 , 2, 3, 4, 5, 6]))

// ✅ Task 4: Implement Bubble Sort
// Description:
// Write a function that sorts an array of numbers using the bubble sort algorithm.
// Requirements:
// Do not use .sort().
// Implement the bubble sort algorithm using loops.
// Return the sorted array.
 // your code here

 function bubbleSort(array) {

 let swapped;
 do {
  swapped = false;
 for (let i = 0; i < array.length-1; i++) {
 if (array[i] > array[i+1]) {
  let temp = array[i];
  array[i] = array[i+1];
  array[i+1] = temp
  swapped = true;
 }
}
 }
 while (swapped); 
 return array;

}
 console.log(bubbleSort([2, 4, 4, 3, -1, 9]))



// ✅ Task 5: Implement customReduce
// Description:
// Create a function customReduce that takes an array, a callback function, and an optional initial value.
// It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
//
// Requirements:
// - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
// - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
// - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
// - Return the final accumulated value.
// - Do not use the built-in .reduce() method.
// - If the array is empty and no initialValue is provided, return undefined.
// your code here

function customReduce(array, callback, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    return undefined;
  }

  let result;
  let startIndex = 0;

  if (initialValue !== undefined) {
    result = initialValue;
  } else {
   
    result = array[0];
    startIndex = 1; 
  }

  for (let i = startIndex; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }

  return result;
}

function callbackFunction(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(customReduce([1, 2, 3], callbackFunction, 10));
console.log(customReduce([1, 2, 3], callbackFunction));
console.log(customReduce([], callbackFunction, 10))
console.log(customReduce([], callbackFunction ))