// ------------------------ Functions ------------------------ //

// Want to use certain lines of block of code when needed then we will use the functions.
// it is easy to use.
// Makes program more readable and compact.
// JavaScript treats function as an object.
// We can divide a task using functions

// Syntax 
// function Function_Name(parameter1,parameter2,....) {
//      Code to be executed
//      return; // optional
// }


// If multiple return is availabel then first one executed and remaining other not executed. (not reachable code).
// we can directly assign value return by function to the variable.

{
        function sum (a,b)
    {
        return a + b;
    }

    let x = 12 , y = 20 ;
    let z = sum( x , y );
    console.log(z);
}

// Function Expression

{
    let add = function( a , b )
    {
        return a + b;
    } 

    console.log(add(4,5));

    let sum = add; // we can assign it another variable also.
    console.log(sum(1,2));
    console.log(sum(1,2));
    console.log(sum);
    console.log(add);
}

// Arrow Function

{
    let greet = function()
    {
        console.log('Hello world!');
    }
    greet();
}

// This is arrow function.
{
    let greet  = () => {
        console.log('Hello world!');
    }
    greet();
}

// if function have only one statement then don't need to code inside the curly braces.

{
    let add = (a,b) => a + b;
    console.log(add(2,3));
}

// Constructure Function
// if we want a model object using that we can creat more object with same property.
// then constructor function is used.

// Name the contructor function starts with capital letter.

{
    function Student(name,college,cource)
    {
        this.name = name;
        this.college = college;
        this.cource = cource;
    }

    let S1 = new Student('Jeel','BVM','CP');  //  new keyword make a new object.
    let S2 = new Student('Jeet','GCET','Iot')

    console.log(S1);
    console.log(S2);
}

// -------------------- IIFE --------------------
// Immediatly Invoked Function Expressions

// is a javaScrupt function that runs as soon as it is defined.

// Syntax
// (function(){
    // code to b executed.
// })();