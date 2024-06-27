// Basic function to print the output.

console.log("Hello World");

// Template Literal 
let str1 = "Hello";

console.log("This is string : " + str1 + " ");
// multiple strings and variable.

let a = 1;
let b = 2;
let c = a + b;


// JavaScript template Literal.
console.log("The addition of " + a + " and " + b + " is " + c + ".");

console.log(`The addition of ${a} and ${b} is ${c}.`);  // ` (Backtick) just above the tab key. // This is called as string interpolation.

console.log("My name is \nsteve paul."); // \n : new line character.
console.log(`my name is
steve paul`);

// Single Back Slash use to avoid the meaning of specific character by compiler.

{
    let str = 'Jeel\'s iPhone';
    console.log(str);
    console.log(str.length);
}