// ------------------------------ Javascript Execution ------------------------------

// How javascript code executes ?

// Javascript Engine
// Program built into browsers that reads, understands and runs javascript code.

// Popular Javascript Engines
// V8 - Chrome - Node.JS
// SpiderMonkey - Firefox
// JavaScriptCore - Safari



// Internals

// Parser      → Breaks code into structured parts.
// Interpreter → Quickly runs code line-by-line (used for fast initial execution).
// Compiler    → Improves performance by turning frequently used code into optimized machine code.
// Memory Heap → Stores large or complex data (objects, arrays).
// Call Stack  → Tracks what function is currently executing and what to return to next.


// ------------------------------------------------------------------------------------------
// Parsing
// a. Tokenization
// breaks the code into tokens --> individual words or symbols
// eg.

// code
{
     let a = 10;
}
// Tokenization of above code
// let, a, =, 10, ;

// b. Syntax Analysis
// Converts the tokens in to AST ( Abstract Syntax tree )
// let a = 10
// VariableDeclaration -> identifier = a, Literal 10

// c. AST -> bytecode
// convert to byte code a low level representation the engine can run.

// Parsing = Reading, Analyzing and preparing your code for execution.


// ------------------------------------------------------------------------------------------
// Global Execution Context ( GEC ) created
// It is a default (first) environment where all JS code starts running when script is first loaded.

// What is inside it ?
// Memory for your variables
// Function Declaration
// Reference to this ( global scope )
// Lexical Environment ( scope of variable )

// it's like setting up room before doing anything.

// 1. Creation Phase execution context
// 2. Execution Phase execution context


// 1. Creation Phase
// This happen before any code runs actually

// Hoisting
// It remember all variables and functions --> functions declarations are fully lifted ( hoisted ).
// Variables are hoisted with default value -> var = undefined | let/const -> special state -> Temporal deadZone

// Engine reserves the memory before execution



// 2. Execution Phase
// Engine starts running code line by line
// variable get actual values
// Functions are being called
// New function execution contexts are created  on each function call

// ------------------------------------------------------------------------------------------

// Function execution context ( FEC )
// Every time we call a function JS create a new execution context for function only

// Memory variable environment
// this binding
// Lexical scoping
// Local variables and parameters

// ------------------------------------------------------------------------------------------
// Call Stack

// Who is  running right now.


// ------------------------------------------------------------------------------------------
// Memory Structure
// Stack / Heap

// Stack  --> Primitives / Execution Context

// Heap   --> Object, Array, Functions, Complex Data structure, Memory is dynamically allocated, engine manage this space 

// ------------------------------------------------------------------------------------------
// Garbage Collection
// Mark and Sweep Algorithm


// ------------------------------------------------------------------------------------------
// Lexical Environment and Scope chaining

// Each execution context has a Lexical Environment
// A place where variable/function names live
// Contains reference to outer environments

// So when you access a variable:
// Engine first looks in current scope
// If not found, it looks in parent scope
// And keeps going until it hits the global scope

function outer() {
     let a = 10;
     function inner() {
          console.log(a); // has access to outer’s variable
     }
     inner();
}
outer();

