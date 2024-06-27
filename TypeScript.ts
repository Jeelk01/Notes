// -------------------- TypeScript --------------------

// TypeScript is a superset of JavaScript.
// adds static typing and add other features for enhancement.
// Any valid JavaScript Code is also a valid TypeScript Code.
// TypeScript is not about to reinventing JavaScript but about to write in more precisely.
// TypeScript is all about type Safety.


// Advantages
// easier to read. - enhance readability 
// moment we write if error occure it shows the error unlike JavaScript. ( it catches error at compile time )

// Drawbacks
// Browser doesn's support typeScript

// ---------- InterOperatibility -----------
// Any valid JavaScript code is also valid Typescript code.
// We can use JavaScript Libraries in TypeScript Projects.
// 

// Extentions
// ts and tsx
// tsx is used for typescript files that contains JSX (JSX - React) syntax

// Java Script Code ( Dynamically Typed - type checking at run time )
// {
//     let a = 'Hello';
//     a = 1000;
//     a = true;
//     console.log(a);
// }
// It return a true.

// but in typeScript ( Statically typed - type cheching at compile time )
// {
//     let a:string = 'Hello';          // :string --> static typing - type annotation - Explicit type define
//     a = 1000;
//     a = true;
//     console.log(a);
// }

// ---------- First Program ----------
{
    console.log('Hey, This is my first typeScript Program');
}

{
    let a:number = 123;
    let b:string ='1234'
    console.log(a,b);
}

// in type Script we need to declare type of variable.
