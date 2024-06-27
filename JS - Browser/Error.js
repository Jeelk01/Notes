// ------------------------- Error Handling -------------------------

// usually a program halts when an error occur.
// if we want that even an error occur but script execution won't be stop the we use try and catch syntax
// in try and catch only syncronous code will be handled not scheduled (setTimeout and Setinterval)
// to handle those error we need to write try and catch syntax inside schedules.


// ----------------------------- try and catch -----------------------------
// funda : try for this if not then catch it (back up)

// {
//     setTimeout(() => {
//         console.log('TImeout 1');
//     }, 1000);
 
//     console.log(hello);     // this will throw an error as hello is not defined
 
//     setTimeout(() => {
//             console.log('Timeout 2');
//     }, 2000);
// }

// ------------------------- after using try catch -------------------------

// {
//     setTimeout(() => {
//         console.log('TImeout 1');
//     }, 1000);
 
//     try{
//         console.log(hello);
//     }catch(error)
//     {
//         console.log("Error caught");
//     }

//     setTimeout(() => {
//             console.log('Timeout 2');
//     }, 2000);
// }


// ------------------------------ Error Object ------------------------------
// .name
// .message
// .stack
    // {
    //     try{
    //         console.log(greet);
    //     }catch(error){
    //         console.log(error.name);
    //         console.log(error.message);
    //         console.log(error.stack);
    //     }
    // }

// -------------------------- Throwing custom error --------------------------

// we can throw our own error by using the throw sytax;
// reference error
// syntax error

// {
//     throw new SyntaxError("Error occured.")
// }

// {
//     throw new ReferenceError("Reference error");
// }

// ------------------------------ Finally clause ------------------------------ 

// used after try and catch
// always executed weather error occur or not.
// used for clean ups ( closing the files , exit the loop , )
// when there is error in catch also then finally is useful.

try{7
    console.log('Runs Successfully');
    console.log(x);
}
catch{
    console.log("Error successfully");
}
finally{
    console.log("Finnaly");
}