// ------------------------- Event Loop -------------------------

// Node.js

// what is event loop ?
// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default.
// The event loop is a core component of Node.js that is responsible for handling asynchronous operations.
// It is an infinite loop that continuously checks for events and callbacks that need to be executed. When an event occurs, the event loop places it in a queue. The event loop then processes the events in the queue in the order they were received.
// 

// The event loop in Node.js is divided into several distinct phases, each with its own purpose and set of tasks:


//         ┌───────────────────────────┐
//      ┌─>│           timers          │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      │  │   pending callbacks I/O   │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      │  │       idle, prepare       │
//      │  └─────────────┬─────────────┘      ┌───────────────┐
//      │  ┌─────────────┴─────────────┐      │   incoming:   │
//      │  │           poll            │<─────┤  connections, │
//      │  └─────────────┬─────────────┘      │   data, etc.  │
//      │  ┌─────────────┴─────────────┐      └───────────────┘
//      │  │           check           │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      └──┤      close callbacks      │
//         └───────────────────────────┘


// Execution order : as it is shown in diagram above.
// these all have saperate queue.


// 1. Timer
// Execution: This phase handles the execution of callbacks scheduled by setTimeout() and setInterval().
// Mechanism: When you schedule a timer, it gets added to a timer list with a specified timeout. When the timeout expires, the callback is placed in the timer queue.
// Behavior: If there are multiple timers, the one with the shortest duration will be executed first. If the timers have the same timeout, they will be executed in the order they were created.

// 2. Pending Callbacks

// 3. Idle, Prepare
// These two phases are less commonly discussed but are still part of the event loop. 
// The “idle” phase is where idle callbacks are executed, which are typically used for internal purposes like garbage collection. 
// The “prepare” phase is used to prepare for the next cycle of the event loop, resetting certain variables and flags.

// 4. Poll
// Most crucial phase.
// Main phase of the event loop , where most of the I/O events are handled.
// 


// 5. Check

// 6. Close Callbacks





























// console.log('Hey this is starting');
// const fun2 = ()=>{
//     console.log("Endi si of my");
// }

// setTimeout(() => {
   
//     console.log('--------------------Compelete first loop--------------------');
// },0);

// const func = ()=>{

// console.log('Start second Loop');
// for(let i = 0 ; i < 23438893820 ; ++i){
// // console.log();
// }

// console.log('End second loop');

// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// console.log('End second loop');
// }
// func();
// fun2();


