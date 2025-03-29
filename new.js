function greet(name, myFunc, alsoFunc) {
    console.log("Hello, " + name);
    myFunc();
    alsoFunc(); // Calling the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  

  function sayOk(){
    console.log("OK")
  }

  greet("Alice", sayGoodbye, sayOk);