// -------------------- Types --------------------

// Number
// String
// Boolean
// Null
// Undefined
// void
// object
// Array types
// tuples types
// union types
// intersection types
// Type aliases
// Type assertions
// Any
// never
// unknown
// symbol
// enum
// Bigint


// Type anotation
// In typescript , type anotation is a way of explicitly specifying the tyope of a variable, function parameter , or function return value.

// Advantages
// type checking - type safety
// 


// Syntax
// let variable_name: type = value ;
// all are in lowercase

// -------------------- Type Inference --------------------
// it refer to the ability of the TypeScript compiler to automatically determine and assign types to variable, expression and function return values based on their usage and context in code.

{
    const name = 'prithvi';
    console.log(name);
    
    // name = 12; // this wiil gives an error.
    // even if we don't declare the type compiler automatically determine its type.
    // and will not allow us the change their value beyond that type.

}

// ------------------------------- string -------------------------------
// written in single or double quote
{
let greet: string = 'Hello';
console.log(greet,typeof(greet));
console.log(greet);

}

// ------------------------------ Number ------------------------------
// represent numeric values including integers and floating point values.

{
    let id: number = 123423;
    console.log(id,typeof(id));
    let PI: number = 3.147;
    let Negative: number = -10;
    console.log(PI,typeof(PI));
    console.log(Negative, typeof(Negative));   
}
{
    let x: number = 12;
    console.log(x);
    x = NaN;
    console.log(x);
}

// ------------------------------ Boolean ------------------------------
// have two value : true - false
{
    let agree: boolean = false;
    console.log(agree,typeof(agree));
}

// -------------------------------- any --------------------------------
// a special type in TypeScript.
// most flexible type in TypeScript.
// don't use any much more in your type script program.
// usecase of any is to avoid type check.
// that could be a problem later.
// Special Usecase : When we are working with Dynamic Data , like dealing with Dynamic sources (userInput , network response , JSON objects)
{
    let a: any;
    a = "Hello";
    console.log(a,typeof(a));
    
    a = 90;
    console.log(a,typeof(a));
}

// ------------------------------ Unknown ------------------------------ 
// safer-alternativ to the any.
// because it enforces type checking and type safety.
// variables of type unknown can hold any type , but you must perform typen checks or type assertions before using them in specific ways.
{
    let a :unknown;
    
}


// ------------------------------- Bigint -------------------------------
// it is built-in type that allows to wark with numbers that are larger than the renge supported by the regular number type.
// all you need to de is add n at the end of number
// let a = 12n;
// another way to introduce BigInt
// let a = Bigint("1224343383");
{
    let BigNumber1 = BigInt("1234567890");
    let BigNumber2 = 1234567890n;
    console.log(BigNumber1,typeof(BigNumber1));
    console.log(BigNumber2,typeof(BigNumber2));   
} 

