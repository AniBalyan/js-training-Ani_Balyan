    // Task 1: Object-Based Shopping Cart Manager
/*
You should create an object `ShoppingCartManager` to manage a shopping cart.

Requirements:
1. Create an object called `shoppingCart` with an initial property `cart` (array) containing items like `["Milk", "Bread", "Eggs"]`.
2. Add a method `addItem(item)` that adds a new item to the `cart`.
3. Add a method `removeItem(item)` that removes the first occurrence of an item from the `cart`.
4. Add a method `clearCart()` that removes all items from the `cart`.
5. Add a method `getCart()` that returns the current items in the cart.
6. Add a method `getItemCount()` that returns the number of items in the cart.
7. After performing all the above operations, print the final cart and the item count.
*/
// Your code here
let shoppingCart = {
    cart: ["Milk", "Bread", "Eggs"],
    addItem(item) {
      this.cart.push(item);
    },
    removeItem(item) {
   this.cart.shift(item)
    },
    clearCart() {
      this.cart.length = 0;
    },
    getCart() {
      return this.cart;
    },
    getItemCount() {
      return this.cart.length;
    }
  };
  shoppingCart.clearCart();
  shoppingCart.addItem("Butter");
  shoppingCart.addItem("Ponchik")
  shoppingCart.removeItem();
  console.log("Final cart: " + shoppingCart.getCart());
  console.log("Count: " + shoppingCart.getItemCount());
    

// Task 2: Constructor Function and this
/*
Create an object-based `Person` using a constructor function.

Requirements:
1. Create a constructor function `Person` that takes `name` and `age` as parameters.
2. Inside the constructor, assign `name` and `age` to `this.name` and `this.age`.
3. Add a method `greet()` to the `Person` object that returns a message: `"Hello, my name is [name] and I am [age] years old."`
4. Create a new `Person` object and call the `greet()` method.
5. Bonus: If the person is under 18, modify the greeting to include `"I am a minor."`
*/
// Your code here

function Person(name,age) {
    this.name = name,
    this.age = age
    this.greet = function() {
        if(this.age >= 18) {
    return("Hello, my name is " + this.name + " and I am " + this.age + " years old")
    }
    else {
        return("Hello, my name is " + this.name + " and I am " + this.age + " years old, I am a minor.")
    }
}
}

let person1 = new Person("John", 17)
console.log(person1.greet())

// Task 3: Using Symbol for Unique Object Properties
/*
Create a task management system using `Symbol` to create unique property keys.

  Requirements:
  1. Create an object `Task` with a constructor that takes `title` and `description` as parameters.
  2. Use `Symbol()` to create unique keys for the properties `taskID` and `status` (e.g., `"Completed"`, `"In Progress"`).
  3. Add a method `updateStatus(newStatus)` to the object that updates the `status`.
  4. Create a new `Task` object, set the status, and print the `taskID` and `status`.
  5. Print out the task's properties to show the uniqueness of `Symbol`.
*/
// Your code here

function Task(title, description) {
  this.title = title;
  this.description = description;
  this.taskID = Symbol();
  this.taskStatus = Symbol("In progress");
  
  this.updateStatus = function updateStatus(newStatus) {
    this.taskStatus = Symbol(newStatus);
  }
}

let task1 = new Task("Task 1 title", "Task 1 description");
task1.updateStatus("Pending");

console.log(task1);


// Task 4: Optional Chaining with Deeply Nested Objects
/*
Create an object representing a company and use optional chaining to safely access deeply nested properties.

Requirements:
1. Create a `company` object with the following structure:
   {
     name: "TechCorp",
     department: {
       hr: {
         manager: {
           name: "Alice",
           office: {
             floor: 5,
             number: 101
           }
         }
       },
       engineering: {
         manager: {
           name: "Bob",
           office: {
             floor: 8,
             number: 202
           }
         }
       }
     }
   }
2. Using optional chaining, access `company.department.hr.manager.office.floor` and print it to the console.
3. Also, access `company.department.sales.manager.name` (which does not exist) using optional chaining and print the result.
4. Print a message if `hr.manager` or `sales.manager` is undefined using optional chaining.
*/
// Your code here

let company = {
  name: "TechCorp",
  department: {
    hr: {
      manager: {
        name: "Alice",
        office: {
          floor: 5,
          number: 101
        }
      }
    },
    engineering: {
      manager: {
        name: "Bob",
        office: {
          floor: 8,
          number: 202
        }
      }
    }
  }
}
console.log("HR: " + company?.department?.hr?.manager?.office?.floor)
console.log("Sales manager: " + company?.department?.sales?.manager?.name)
if (!company?.department?.hr?.manager) {
  console.log("HR manager is not defined.");
}

if (!company?.department?.sales?.manager) {
  console.log("Sales manager is not defined.");
}

// Task 5: Constructor Function for Calculator with Objects
/*
Create a `Calculator` constructor function to perform basic arithmetic operations on object properties.

Requirements:
1. Create a constructor function `Calculator` that accepts two parameters: `num1` and `num2`.
2. Inside the constructor, assign `num1` and `num2` to `this.num1` and `this.num2`.
3. Add methods `add()`, `subtract()`, `multiply()`, and `divide()` to perform the respective operations using `this.num1` and `this.num2`.
4. Create a new `Calculator` object and perform calculations by calling these methods.
5. Print the results of each operation.
*/
// Your code here

function Calculator (num1, num2) {
  this.num1 = num1,
  this.num2 = num2,

  this.add = function() {
    return this.num1 + this.num2
  },
   
  this.subtract = function() {
    return this.num1 - this.num2
  },

  this.multiply = function() {
    return this.num1 * this.num2
  },

  this.divide = function()  {
    if (this.num2 === 0) {
      return 'Cannot divide by zero';
    }
    return this.num1 / this.num2;
  }

}

let calculator = new Calculator(7, 0);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

// Task 6: Using Nullish Coalescing (??) with Objects
/*
Create a function `getUserInfo()` that returns the user's name or a default message if the name is undefined or null.

Requirements:
1. Create an object `user` with a `name` property, which could be undefined or null.
2. Use nullish coalescing (`??`) to return the `name` property if it exists, or `"Anonymous"` if the `name` is undefined or null.
3. Call `getUserInfo()` with a `user` object where the `name` is `null` and another where the `name` is a string.
4. Print the results to demonstrate how nullish coalescing works.
*/
// Your code here


function getUserInfo(user) {
  let userName = user.name ?? "Anonymous";
  return userName;
}

let user1 = { 
  name: null 
};

let user2 = { 
  name: "John" 
};

console.log(getUserInfo(user1));
console.log(getUserInfo(user2));  