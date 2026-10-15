function myFunction() {
  var a = 5;
  console.log(a);
}
myFunction(); // Output: 5

// console.log(a); // Output: ReferenceError: a is not defined


/*Globle vs Local Scope*/

// Global Scope
var globalVar = "I am a global variable";

function myFunction() {
  // Local Scope
  var localVar = "I am a local variable";

  return globalVar;
}

console.log(myFunction()); // Output: I am a global variable
console.log(globalVar); // Output: I am a global variable
// console.log(localVar); // Output: ReferenceError: localVar is not defined