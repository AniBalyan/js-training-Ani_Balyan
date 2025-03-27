function greet(myFunc, alsoFunc) {
    
    myFunc();    
    alsoFunc();  
}

greet(
    function () {
        console.log("Goodbye!");
    }, 
    function () {
        console.log("OK");
    }
);