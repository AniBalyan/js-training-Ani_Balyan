function makeClass(phrase) {
 
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}


let User = makeClass("Hello");

//new User().sayHi(); 