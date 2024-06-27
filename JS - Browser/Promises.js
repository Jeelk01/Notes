// -------------------- Promises --------------------

// A Promise is Promise of code execution.
// mostly used for Parallel execution.
// The code either executes or fails, in both the cases subscriber will be notified.
// resolve or reject
// solution for the callback hell.

// Syntax

// {
//     let promise = new Promise(function(resolve,reject){
//         console.log('hello');
//         resolve(1000);

//         console.log(promise);
//     });
// }


// promise object has tehse two properties

// state
// initially pending then changes to either 'fufilled' when resolve is called or 'rejected' when rejec is called.

// result 
// initially undefined, then changes to value if resolved or error when rejected.


// ------------------------- .then() & .catch() -------------------------


// --------------- .then ---------------
// used to get the value 
// when promise is fullfilled

//  syntax
// {
//     promise.then((value) => {
//         // code to be executed
//     });
// }


// -------------- .catch --------------
// used to catch the errors.
// when promise is rejected.

// syntax
// {
//     promise.catch((error) => {
//         // code to be executed
//     });
// }


// ------------------------- Promise Chaining -------------------------
// solution to callback hell
// we can chain the promises like following and make them pass the resolved values.

// {
//     let P1 = new Promise((resolve,reject) => {
//         // code to be executed
//     });

//     P1.then(() => {
//         // code for resolve
//     }).then(() => {

//     }).then(() => {

//     })
// }

// ------------------------- Attaching Multiple Handlers to promise -------------------------
// thius is different from promise chaining.
// here we attach multiple handlers to single promise.


// {
//     console.log('-------------------- Multipe Handlers --------------------');
//     let P1 = new Promise((resolve,reject) => {
//         console.log("not resolved yet.");

//         setTimeout(() => {
//             console.log("Now Resloved");
//             resolve(true);
//         }, 2000);
//     });

//     P1.then((value) => {
//         setTimeout(() => {
//             console.log(` 1st handler : Promise is now resolved with ${value}`);
//         }, 1000);
//     });

//     P1.then((value) => {
//         setTimeout(() => {
//             console.log(` 2nd handler : ${value} is resolved value`);
//         }, 2000);
//     });
// }

// ------------------------- Promise API -------------------------
// Promise.all()    : After Fulfillment of all promise. ( Even one is rejected then not executes )
// Promise.Settled(): After Fulfillment of all promise. ( Even any rejected it will executed. )
// Promice.race()   : Which promise settle first(resolve / reject). ( if error thrown first then it will show first. )
// Promse.any()     : which promise resolve first.
// 
// 

// {
    // console.log('-------------------- Promise API --------------------');

    // Promise.all
    // if want that when every promise fulfilled then to done action.
    // if any of the promise rejected then promiseAll.then will not be executed
    // we need to catch the error
        // {
        //     console.log('--------------- Promise.all ---------------');
        //     let P1 = new Promise((resolve,reject) => {
        //         setTimeout(() => {
        //             let Random = Math.ceil(Math.random() * 10);
        //             resolve(Random);
        //         }, 1000);
        //     });
        // let P2 = new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //         let Random = Math.ceil(Math.random() * 10);
        //         reject(new Error("I'm the error"));
        //     }, 2000);
        // });
        // let P3 = new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //         let Random = Math.ceil(Math.random() * 10);
        //         resolve(Random);
        //     }, 3000);
        // });

        
        // P1.then((value) => {
        //     console.log(`P1 : ${value}`);
        // });
        // P2.then((value) => {
        //     console.log(`P2 : ${value}`);
        // });
        // P3.then((value) => {
        //     console.log(`P3 : ${value}`);
        // });

        //     let AllPro = Promise.all([P1,P2,P3]);
        //     AllPro.then((value) => {
        //         console.log(value);
        //     });
        //     AllPro.catch((error) => {
        //         console.log('Error caught');
        //     });
        // }


    // Promise.allSettled
    // all resolved promises
    // {
    //     console.log('--------------- Promise.allSettled ---------------');
    //     let P1 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(Random);
    //         }, 1000);
    //     });

    //     // P1.then((value) => {
    //     //     console.log(`P1 : ${value}`);
    //     // });

    //     let P2 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             reject(new Error("I'm the error"));
    //         }, 2000);
    //     });

    //     // P2.then((value) => {
    //     //     console.log(`P2 : ${value}`);
    //     // });

    //     let P3 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(Random);
    //         }, 3000);
    //     });

    //     // P3.then((value) => {
    //     //     console.log(`P3 : ${value}`);
    //     // });

    //     let AllSet = Promise.allSettled([P1,P2,P3]);

    //     AllSet.then((value) => {
    //         console.log(value);
    //     });
    // }


    // Promise.race
    // which promise settled first 
    // that may be resolve or reject
    // {
    //     console.log('--------------- Promise.race ---------------');
    //     let P1 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(`P1 : ${Random}`);
    //         }, 1000);
    //     });

    //     // P1.then((value) => {
    //     //     console.log(`P1 : ${value}`);
    //     // });

    //     let P2 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             reject(new Error("I'm the error"));
    //         }, 2000);
    //     });

    //     // P2.then((value) => {
    //     //     console.log(`P2 : ${value}`);
    //     // });

    //     let P3 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(`P3 : ${Random}`);
    //         }, 3000);
    //     });

    //     // P3.then((value) => {
    //     //     console.log(`P3 : ${value}`);
    //     // });

    //     let AllSet = Promise.race([P1,P2,P3]);

    //     AllSet.then((value) => {
    //         console.log(value);
    //     });
    // }

    // {
    //     console.log('--------------- Promise.any ---------------');
    //     let P1 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(`P1 : ${Random}`);
    //         }, 10000);
    //     });

    //     // P1.then((value) => {
    //     //     console.log(`P1 : ${value}`);
    //     // });

    //     let P2 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             reject(new Error("I'm the error"));
    //         }, 2000);
    //     });

    //     // P2.then((value) => {
    //     //     console.log(`P2 : ${value}`);
    //     // });

    //     let P3 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             let Random = Math.ceil(Math.random() * 10);
    //             resolve(`P3 : ${Random}`);
    //         }, 3000);
    //     });

    //     // P3.then((value) => {
    //     //     console.log(`P3 : ${value}`);
    //     // });

    //     let AllSet = Promise.any([P1,P2,P3]);

    //     AllSet.then((value) => {
    //         console.log(value);
    //     });
    // }

    // Promise.resolve();
    // Promise.reject();
// }