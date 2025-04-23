// ------------------------ String ------------------------ //

// String is sequence of character that is used to represent text.

// Single Quoted    : 'Hello World'
// Double Quoted    : "Hello, World!"
// Backtick ( Template Literal )   : `Hello world`

console.log("Double Quoted\" : ","Hello World");
console.log("Single Quoted\' : ",'Hello world');
console.log(`backtick     \` : `,`Hello world`);


// String Properties
// length      : Returns length of string


// String Methods

// charAt(index)                   : Charecter at specified index
// charCodeAt(index)               : Unicode of the character at a given index.
// at(index)                       : similar to chatAt but supports Negative indexing also.
// toUpperCase()                   : Converts String to uppercase
// toLowerCase()                   : Converts String to Lowercase
// trim()                          : Removes whitespace from both the side.
// trimStart() OR trimLeft()       : Removes whitespace from beginning.
// trinEnd() OR trimRight()        : Removes whitespace from the end
// indexOf(substr, start)          : Return the index of first occurance of substirng from start ---> default value for start is zero
// lastIndexOf(substr, start)      : Return the index of last occurance of substirng from start ---> default value for start is zero
// startsWith(substr,start)        : Return True if string is starting with substring ---> default value for start is zero
// endsWith(substr,start)          : Return True if sting is ending with substring  ---> default value for start is zero
// includes(substr,start)          : Return True if substring is found  ---> default value for start is zero
// slice(start,end)                : Extracts part of a string (supports negative indexing).
// substring(start,end)            : Similar to slice but doesn't supports negative indexing.
// replace(old,new)                : Replace the first occurance of substring.
// replaceAll(old,new)             : Replace all occurances of substring.
// split(separator,limit)          : split string into the array.
// concate(str1,str2,..)           : Concatenates the strings.
// padStart(targetLegth,padstring) : Pads the beginning of the string.
// padEnd(targetLegth,padstring)   : Pads the end of the string.
// toString()                      : Converts the value to a string.
