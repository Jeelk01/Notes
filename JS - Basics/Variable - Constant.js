// ------------------------ VARIABLES ------------------------ //
// Variables are like containers that stores Data.
// Variables are memory location where data is stored.
// In today's world data is everything.
// To store that data with proper manner variables are used.
// Variables are used to store data for the current (Temporary) program.
// To store Data for permanent we have different options.

// Java Script allows you to use variable directly without declaring it. (Unlike C / C++)
num = 2;
console.log(num);
// But it is not a good Practice.

// Instead of using variable directly there are another method to use it efficiently.

// Using <let> and <var> Keyword.

// Syntax
// let <Varialble_Name> = <Value>
// var <Varialble_Name> = <Value>
let a = 20;
var b = 90;
console.log(a);
console.log(b);

// Rules For Declaring Variable name //
// 1.   Variable name only contains digits (0-9),alphabets (a-z),underScore (_),Dollar Sign ($).
//      No Other special characters are allowed. ( . , / [ ] | * ^ % # @ ! ~ + = - )
// 2.   Variable names must begin with a letter, underscore, or dollar sign. They cannot begin with a digit.
// 3.   No space allowed, instead of space use following
//      Snake casing rule - Using Underscore - Book_name , Table_number
//      Camel casing rule - Using Uppercase First Letter - BookName , TableNumber
//      
// 4.   Variable names are case sensitive.
// 5.   Can not use JavaScript reserved words.
// 6.   Give the name according to it's use for better readability. ( Name should be logical)

// Allowed
//  Hello   Number1$    $num1   Book_Price

// Not Allowed
//  1time   let         for     Book price  console


// ------------------------ CONSTANTS ------------------------ //

// Constants are variables with fixed value.
// we declare it using <const> keyword.
// It is mandatory to intialize the constant when we declare it.
// Otherwise it throw the Syntax Error.

const PI = 3.14;

// pi = 3.01 ; // This will throw the TypeError
console.log(PI);
// we can't change the value of constant once after initialized.
// It it best practice to name the constant in UPPERCASE.


// ---------------------------------------------------------------- //
// difference Between let - var - const 

// let
//      Block - Scoped
//      hoisted to top of the block - ( if try to access then reference error )
//      Can be initialize later
//      Can not be redeclare

// var
//      Global - Scoped
//      hoisted to top of the block - ( if try to access then undefined. )
//      Can be initialize later
//      can be redeclare

// const
//      Block - Scoped
//      hoisted to top of the block - ( if try to access then reference error )
//      Must be initialize at declaration
//      immutable
//      Can not be re declare ( if try then syntax Error)


// var x = 9;
// var x = 10;
// console.log(x); // Doesn't throw the error.

// let y = 11;
// let y = 11;     // Syntax error.
// console.log(y);  

// const z = 12;
// const z = 12;   // Syntax error
// console.log(z);



