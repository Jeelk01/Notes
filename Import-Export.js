// -------------------- Import - Export --------------------

// In JavaScript , there are several ways to export and import modules. Here are the primary types of exports.

// 1. Default Export
// 2. Named Export
// 3. Aggregating Moodules
// 4. Exporting All
// 5. Mixed Export


// 1. Default Export
// This is useful for exporting a single function, class, or object.

    // module.js
    // const myFunction = () => {
    //     console.log('This is a default export');
    // };
    //     export default myFunction;
      
    // main.js
    // import myFunction from './module.js';
    // myFunction(); // This is a default export


// 2. Named Export
// A module can have multiple named exports. This allows you to export multiple values from a module

    // module.js
    // export const myFunction = () => {
    //     console.log('This is a named export');
    // };
    // export const anotherFunction = () => {
    //     console.log('This is another named export');
    // };

  // main.js
    // import { myFunction, anotherFunction } from './module.js';
    // myFunction(); // This is a named export
    // anotherFunction(); // This is another named export


// 3. Aggregating Modules

    // module1.js
    // export const functionOne = () => {
    //     console.log('Function One');
    //   };    
    // export const variableOne = 'This is variable one';
    
    // module2.js
    // export const functionTwo = () => {
    //     console.log('Function Two');
    //   };
    //  export const variableTwo = 'This is variable two';
    
    // aggregateModule.js
    // export { functionOne, variableOne } from './module1.js';
    // export { functionTwo, variableTwo } from './module2.js';

    // main.js
    // import { functionOne, functionTwo, variableOne, variableTwo } from './aggregateModule.js';

    // functionOne(); // Function One
    // functionTwo(); // Function Two
    // console.log(variableOne); // This is variable one
    // console.log(variableTwo); // This is variable two
    