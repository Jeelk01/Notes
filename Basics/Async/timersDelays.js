// -------------------- SetTimeout - SetInterval - setImmediate --------------------

const { log } = require("node:console");

// SetTimeout
// Used to execute javaScript after perticular time.

// Setinterval
// multiple time


// SetTimeout
// Allows us to run a function once after the interval of time.

// syntax
// let timerId = setTimeout(function,delay(in millisecond),arg1,arg2);
// it returns the timerId.
// we can pass the function argument from the third argument in setTimeout
// we can cancel the timeout if we change our mind ( with argument timerId)
// if time argument is not passed then it automatically take it as 0.
// executed immediate.
{
    console.log('Your time starts now.');
    
    let a = () => {
        console.log('Hello, after 2 seconds');
    }

    let x = setTimeout(a,2000);
    clearTimeout(x);
    // console.log(x);
    var y = setTimeout(a,3000);
    
    // console.log(y);
    
}
// with arguments
// we can't pass the argument with function 
// we need to pass the arguments separately after the time argument.
{
    let sum = (a,b) =>{
        console.log('hey i\'m inside the function');
        console.log(`${a+b}`);
    }

    setTimeout(sum,3000,10,20);
}


// SetInterval
// run multiple time after a perticular time interval
// syntax
// setInterval(function,timeinterval in millisecond);
// we can run this with arguments also.
{
    let print = () => {
        console.log('Hello');
    }

    let x = setInterval(print,700);
    
    setTimeout(() => {
     console.log("Stop Printing hello After 10 Second.");
     clearInterval(x)
     
    },10000)

}
// To clear interval
// clearInterval(timeId);


// setImmediate
// schedules the call back execute immediately after the current event loop phase

{
     setImmediate(() => {
          console.log("setImmediate Executes");
          
     })
}

// process.nextTick
// schedules callback to execute before the next eventLoop iteration
process.nextTick(() => {
     console.log("Process.next tick executing");
     
})