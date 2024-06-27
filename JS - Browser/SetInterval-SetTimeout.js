// -------------------- SetTimeout - SetInterval --------------------

// SetTimeout
// Used to execute javaScript after perticular time.

// Setinterval
// multiple time


// SetTimeout
// Allows us to run a function once after the interval of time.

// syntax
// let timerId = setTimeout(function,delay(in millisecond),arg1,arg2);
// it returns the timerId.
// we can pass the function argumnet from the third argument in setTimeout
// we can cancel the timeout if we change our mind ( with argument timerId)
// if time argment is not passed then it automatically take it as 0.
// executed immediatly.
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
// with argumnets
// we can't pass the argument with function 
// we need to pass the arguments saperatly sfter the time argument.
{
    let sum = (a,b) =>{
        console.log('hey i\'m insude the function');
        console.log(`${a+b}`);
    }

    setTimeout(sum,3000,10,20);
}


// SetInterval
// run multiple time after a prticular time interval
// syntax
// setInterval(function,timeinterval in milisecond);
// we can run this with arguments also.
{
    let print = () => {
        console.log('Hello');
    }

    let x = setInterval(print,700);
    // clearInterval(x);

}
// To clear interval
// clearInterval(timeId);

