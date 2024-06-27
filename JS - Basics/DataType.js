// ------------------------ Data Type ------------------------ //

// unlike other programming language, we are declaring variables with it's type in JavaScript.

// Two type of Data.

//  1. Primitive ( NNSSBBU )
//  2. Object


// Primitive Data type
//      Number
//      Null
//      string
//      bigInt
//      undefined
//      Boolean
//      symbol
// ------------------------------------------------------------------------------------------------------------------- //
//  Number  - can be any number - range ( 1.7976e+308 ) - max safe value (9007199254740991)
let a = 7.8;
console.log(typeof(a));
//          for know the maximum value for number is (Number.MAX_VALUE)
//          for know the minimum value for number is (Number.MIN_VALUE)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//          Bigint - bigint(<variablename>) // and n right after the number // i.e  let i = 1230n;
//          floating point number
//          base 10 number  ( Decimal )  
//          binary  (0 & 1)             
//          Octal   (0-7)                
//          HexaDecimal (0-9 & A-F)     - 0x ----> let a = 0xf (0x represents hexadecimal)
let hexa = 0xf;
console.log("Hexadecimal : " + hexa);
//          Exponential                 - 12e10
let e = 12e10;
console.log("Exponential : " + e);
//          (+Ve & -Ve) infinity        - is a type of data. (Infinity & -Infinity)
let p = 1/0;
console.log("Positive Infinity : " + p);
let n = -1/0;
console.log("Negative Infinity : " + n);


// ------------------------------------------------------------------------------------------------------------------- //

//  String  - words - texts - collection of character - written in double quote (" ") or single quote (' ')
let y = "Hello"
console.log(y);
console.log(typeof(y));
//          For concatinating string use +  (string1 + string2) 
let firstname = "Steve";
let Lastname = "Paul";
let Fullname = firstname + " " + Lastname + " " + "\"Hello\""; // "" have special meaning to discard that use \ " back slash ".
console.log(firstname);
console.log(Lastname);
console.log(Fullname);

// for length of the string
//  str-name.length
{
    let str = 'Hello World';
    console.log(str.length);
}
  
// we can accessing string character by index position starting with zero.
{
    let str = 'Hello World';

    for (let i = 0 ; i < str.length ; ++i )
        {
            console.log(str[i]);
        }
}

// String Methods
// strings are immutable we can't change it we perform methods only. 
//  str_name.length ; return the length of string - Doesn't count escape sequences.
{
    let str = 'Hello World'
    console.log('String length is :',str.length);
}

//  toUpperCase() : Built-In Function than convert string into uppercase.
{
    let str = 'uppercase';
    console.log(str.toUpperCase());
}

//  toLowerCase() : Built-In function that convert string into lowercase.
{
    let str = 'LOWERCASE';
    console.log(str.toLowerCase());
}
//  Index of string starting with 0
//  slicing of the string
//  name.slice(a,b)
//  Multiple Argument (2) from to to end
//  (2,4) from 2 to 4 but 4 not included.
{
    let str = 'Hello world';
    console.log(str.slice(2,5));    // Slice from 2 to 5 but 5 not included
    console.log(str.slice(6));
    console.log(str.slice(1,13));
}

// str_name.replace("part to be replace","Replaced with");
{
    let str = 'abcd my name';
    console.log(str.replace("abcd","hello"));
}

// Concatinating
{
    let str1 = 'Hello';
    let str2 = " i'm fine";
    //  str1 = str1 + str2;
    //  console.log(str1);
    console.log(str1);
    str1 = str1.concat(" world ",' How are you ',str2);
    console.log(str1);
}

// trim - starting and ending spaces.
{
    let str = "          Hello            ";
    console.log(str);
    console.log(str.trim());
}

// includes - startswith - endswith
{
    let str = 'Hello world';
    console.log(str.includes('wor'));
    console.log(str.startsWith("Hel"));
    console.log(str.endsWith('ld'));
}

// ------------------------------------------------------------------------------------------------------------------- //

//  Boolean - True (1) or False(0)
let bool = 5>6;
console.log(bool);
console.log(typeof(bool));
bool = true;
console.log(bool);

// ------------------------------------------------------------------------------------------------------------------- //

//  Null
// typeof null is object not null.
// null means no value.
let abcd = null;
console.log(abcd); // this will print null.
console.log(typeof(abcd)); // This will print object

// ------------------------------------------------------------------------------------------------------------------- //

//  Undefined
// Declared but not intialized..
// When try to access somthing that not available.
let und;
console.log(und);
console.log(typeof(und));

// ------------------------------------------------------------------------------------------------------------------- //

//  Symbol
let sym = Symbol('Hey ....!');


// ------------------------------------------------------------------------------------------------------------------- //
// Set
// Set is collection of items
// all elements are unique. when we print it we can actually varify it.
// we can assign them later also.
// cn add multiple type of data also.
{
let nums =  new Set('A quick brown fox jumps over a lazy dog.');
console.log('Set :',nums);
// we can not access perticular item like array.
// but can iterate over for of
for(let element of nums)
    {
        console.log(element);
    }
}

{
    let strs = new Set();
    strs.add('Hello');
    console.log(strs);
    strs.add('How Are You');
    console.log(strs);
    strs.add('I\'m fine');
    console.log(strs);

    strs.forEach((element,i,x) => {
        console.log(element,i,x);
    });
}
// ------------------------------------------------------------------------------------------------------------------- //
let num = 5;
let str = "Paul";

console.log(5 / str); // will print NaN - Not a number.
// NaN represents that operation did not produce valid numeric result. 
console.log(typeof(5 / str)); // Will print number.


let x1 = 1.0;
console.log(typeof(x1)); // number
x1 = "Paul";
console.log(typeof(x1)); // string
