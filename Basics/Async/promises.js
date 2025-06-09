// Promises

// A Promise is an object representing the eventual completion or failure of an async operation
// Parallel Execution

// resolve and reject

// 3 States
// pending
// fulfilled
// rejected


// used with .then and .catch

// Promise Chaining
// multiple promise with .then and .catch --> solution to the callback hell

// ------------------------- Promise API -------------------------
// Promise.all()    : After Fulfillment of all promise. ( Even one is rejected then not executes )
// Promise.Settled(): After Fulfillment of all promise. ( Even any rejected it will executed. )
// Promise.race()   : Which promise settle first(resolve / reject). ( if error thrown first then it will show first. )
// Promise.any()     : which promise resolve first.
