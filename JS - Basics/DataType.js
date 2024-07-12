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
// ------------------------------------------------------------------------------------------------------------------- //
// Set is collection of items
// unordered
// we can't access it using indexes.
// set type is object.
// all elements are unique. when we print it we can actually varify it.
// we can assign them later also.
// can add multiple type of data also.
{
let nums =  new Set('a quick brown fox jumps over a lazy dog.');
console.log('Set :',nums);
// we can not access perticular item like array.
// but can iterate over for of
for(let element of nums)
    {
        console.log(element);
    }

// for the element numbers in set
// size property is useed

console.log('size of set is :', nums.size);
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
// -------------------- Set methods --------------------

// add      : for adding the elemment , if we try to add single element  ultiple time then only one timme added ( unique elements )
// has      : to check that element is present in set or not.
// values   : return an iterator object for set
// keys     : return an iterator object for set. set has no keys hence return same value.
// entries  : return [value , value] pair for set.
// clear    : remove all element from set
// delete   : delete element from set
// difference   : return set of diiference of a with b
// intersection : return a set of common of a with b
// symmetricDifference : return a set of deffernce unioun of a and b
// union        : return a union set of a and b
// isDisjointFrom   : return a boolean  A ^ B = 0
// isSubsetOf   : return a boolean if a is subset of b
// isSupersetOf : return a boolean if a is superset of b.

// add 
// for adding elements in set
// only unique element will be stored.
{
    console.log('-------------- Add --------------');
    let letters = new Set();
    console.log(letters);
    letters.add("a");
    letters.add("b");
    letters.add('b');
    console.log(letters);
}


// has
// to check that the given element present in set or not based on this return boolean.
// ------------------------------------------------------------------------------------------------------------------- //
{
    console.log('--------------- Has ---------------');
    let letters = new Set(['a','b','c']);
    console.log(letters.has('a'));
    console.log(letters.has('z'));
}

// values
// return an iterator object of all set value
{
    console.log('--------------- values ---------------');
    let letters = new Set(['a','b','c']);

    let itr = letters.values();

    // for(let element of itr){
    //     console.log(element);
    // }
    console.log(itr);

    for(let element of itr){
        console.log(itr);
    }
}

// keys
// return an iterator object for set
{
        console.log('--------------- keys ---------------');
        let letters = new Set(['a','b','c']);
    
        let itr = letters.keys();
    
        // for(let element of itr){
        //     console.log(element);
        // }
        console.log(itr);
    
        for(let element of itr){
            console.log(itr);
        }
}

// entries
// The entries() method returns an Iterator with [value,value] pairs from a Set.
{
    console.log('---------- entries ----------');
    let letters = new Set(['a','b','c']);
    
    let itr = letters.entries();

    console.log(itr);
    console.log(itr);
}

// clear
// remove all element from set
{
    console.log('---------- Clear ----------');
    let color = new Set(['red','blue','yellow']);
    console.log(color);
    console.log('size :',color.size);

    color.clear();
    console.log(color);
    console.log('size :',color.size);
}

// delete
// remove element from set
{
    console.log('---------- delete ----------');
    let color = new Set(['red','blue','yellow']);
    console.log(color);
    console.log('size :',color.size);

    color.delete('red');
    console.log(color);
    console.log('size :',color.size);
}



// ------------------------------------------------------------------------------------------------------------------- // 
// map
// ------------------------------------------------------------------------------------------------------------------- // 
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
{
    console.log('---------- Map ----------');   
    let numbers = new Map([
        [1 , 'One'],
        [2 , 'two'],
        [3 , 'three']
    ]);

    console.log(numbers);
// for get the numbers of element size is used.
    console.log('Size :',numbers.size);
}

// -------------------- Map Methods --------------------

// set          : we can add the key value pair ( original order maintained )
// clear        : remove all element from map
// delete       : delete element from map with specified key
// entries      : return an iterator object [with key , value] pair
// get          : return value at perticular key



// set
// add element
{
    console.log('---------- set ----------');
    let numbers = new Map();

    console.log(numbers);

    numbers.set(1,'One');
    console.log(numbers);

    numbers.set(2,'two');
    console.log(numbers);
}

// clear
// remove all element from the map
{
    console.log('--------------- clear ---------------');
    let numbers = new Map([
        [1,'one'],
        [2,'two'],
        [3,'three']
    ]);

    console.log(numbers);

    numbers.clear();

    console.log(numbers);

}

// delete
//  delete element with perticular key
{
    console.log('--------------- delete ---------------');
    let numbers = new Map([
        [1,'one'],
        [2,'two'],
        [3,'three']
    ]);
    console.log(numbers);

    numbers.delete(2);
    console.log(numbers);
}

// entries
// The entries() method returns an iterator object with the [key,values] in a map.
// The entries() method does not change the original map.

{
    console.log('--------------- entries ---------------');
    let numbers = new Map([
        [1,'one'],
        [2,'two'],
        [3,'three']
    ]);

    let itr = numbers.entries();

    console.log(itr);
    for(let entry in itr){
        console.log(itr);
    }
}

// get
// get() method gets the value of a key in a map.
{
    console.log('--------------- get ---------------');
    let numbers = new Map([
        [1,'one'],
        [2,'two'],
        [3,'three']
    ]);
    console.log(numbers);
    console.log(numbers.get(2));
}

//
//
{
    console.log('---------------  ---------------');
}


// ------------------------------------------------------------------------------------------------------------------- // 
{
console.log('--------------Simple Practice--------------');
let num = 5;
let str = "Paul";

console.log(5 / str); // will print NaN - Not a number.
// NaN represents that operation did not produce valid numeric result. 
console.log(typeof(5 / str)); // Will print number.


let x1 = 1.0;
console.log(typeof(x1)); // number
x1 = "Paul";
console.log(typeof(x1)); // string
}