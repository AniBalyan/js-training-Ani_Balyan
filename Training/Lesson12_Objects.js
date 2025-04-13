// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
    let user = {
        name,
        age,
        isAdmin

    }
    return user
  }

  console.log(createUser('Alice', 30, true))
  
  // ✅ Task 2: Calculate Total Sales
  // Description:
  // Write a function calculateTotalSales that takes a nested object representing products sold during the day.
  // Each product key contains an object with price and quantitySold.
  // The function should return the total revenue.
  // Requirements:
  // - Use a for...in loop to iterate over the object.
  // - Multiply price * quantitySold for each product and sum the results.
  
  function calculateTotalSales(salesData) {

    let totalRevenue = 0;
  
    for (let product in salesData) {
      totalRevenue = totalRevenue + salesData[product].price * salesData[product].quantitySold;
    }
  
    return totalRevenue;
  }

  const products = {
    product1: { price: 20, quantitySold: 5},
    product2: {price: 10, quantitySold: 3} 
}
  
  console.log(calculateTotalSales(products)); 

   
  
  // ✅ Task 3: Convert Array to Object
  // Description:
  // Create a function arrayToObject that takes an array and returns an object.
  // The object should have the array indexes as keys and the elements as values.
  // Requirements:
  // - Use a loop to build the object manually (no Object.fromEntries).
  // - Return the constructed object.
  
  function arrayToObject(arr) {

    let obj = {};let fruits1 = {
        fruit1: 'Orange',
        fruit2: 'Lime',
        fruit3: 'Lemon',
        
    }
   

    let fruits2 = {
        fruit3: 'Strawberry',
        fruit4: 'Blueberry',
        fruit5: 'Blackberry'
    }

    for(let i =0; i < arr.length; i++){
        obj[i] = arr[i]
        }

        return obj
    }
     
    console.log(arrayToObject(["John", "Bob", "Mary"]))

  
  
  // ✅ Task 4: Get Keys with String Values Only
  // Description:
  // Create a function getStringKeys that takes an object and returns an array of keys
  // whose values are strings.
  // Requirements:
  // - Use a loop or Object.keys() to iterate through the object.
  // - Return only the keys where the value is of type 'string'.
  
  function getStringKeys(obj) {
   let arr = new Array();
   
   for (let key in obj) {
    if (typeof obj[key] === 'string') {
    arr.push(key)
    }
}
     
   return arr;
  }

  console.log(getStringKeys({userName: "John", age: 30}))
  
  // ✅ Task 5: Merge Two Objects
  // Description:
  // Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
  // If the same key exists in both, the value from the second object should overwrite the first.
  // Requirements:
  // - Do not modify the original objects.
  
  function mergeObjects(obj1, obj2) {
    
    let obj3 = Object.assign({}, fruits1, fruits2)

    return obj3
  

  }
  let fruits1 = {
    fruit1: 'Orange',
    fruit2: 'Lime',
    fruit3: 'Lemon',
    
}


let fruits2 = {
    fruit3: 'Strawberry',
    fruit4: 'Blueberry',
    fruit5: 'Blackberry'
}

  
  console.log(mergeObjects(fruits1, fruits2))