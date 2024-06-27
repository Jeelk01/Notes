// ------------------------ Type Conversion ------------------------ //
// Explicit Convirsion
// When we try to convert these datab type to other.
let a = 6;
console.log(a,typeof(a));
a = String(a);
console.log(a,typeof(a));
a = Number(a);
console.log(a,typeof(a));

let str = "A";
console.log(str,typeof(str));
str = Number(str); // Operation did not produce valid Number.
console.log(str,typeof(str));

// ------------------------  Type Coercion  ------------------------ //
let x = 2 
console.log(x,typeof(x));
x = x + "Hello";    // will by default convert to a string.
console.log(x,typeof(x));
x = x - 2 ;         // Operation not produced valid Number.
console.log(x,typeof(x));

x = Boolean(x);
console.log(x,typeof(x));
x = Boolean(1);
console.log(x,typeof(x));

// False Return
x = Boolean(null)
console.log(x,typeof(x));
x = Boolean(undefined)
console.log(x,typeof(x));
x = Boolean(0);
console.log(x,typeof(x));
x = Boolean(""); // Empty string value.
console.log(x,typeof(x));
x = Boolean(NaN);
console.log(x,typeof(x));

// If in first number is present in string and you want to convert it into string that perticular number only then use following :
// parseInt("123 Hello");

x = "123 Hello";
console.log(x);
x = parseInt(x);
console.log(x);

let number1 = 1234 ;
console.log(typeof(number1));
number1 = toString(number1);
console.log(typeof(number1));