// ------------------------- Callbacks -------------------------

// first we need to understand Asynchronous Actions and Synchronous Action

// Asynchronous actions are the actions that we initiate now and they finished later. 
// eg. setTimeout

// Synchronous actions are the actions that initiate and finish one-by-one.


// callback function
// a callback function is a function passed into another function as an argument , which is then invoked inside the outer function to complete an action.

// example 
{
    function printed(number,callback)
    {
        for(let i = 0 ; i <= number ; ++i)
            {
                console.log(i);
            }
        console.log('Print the number action completed.');
        callback(20); // we can give arguments also
    }

    function FlagCallback(x){
        console.log('call back function invoked.');
        console.log(x);
    }

    // now we are calling the printed function with callback 

    printed(20,FlagCallback);
}
// this is called " callback - based " style of async programming.
// A function that does something asynchronously should provide a callback argument where we put the function to run after its complete.

// here we make a code for adding script to the source. when a button is clicked.

// -------------------------------------------------------------------------------------
// {
//     let button = document.getElementById("AddButton");
    
//     function Add_Script(src,callback)
//     {
//         let script = document.createElement("script");
//         script.src = src;

//         script.onload = () => MessageLoad(src,null);
//         script.onerror = () => MessageLoad(src,new Error);
//     }

//     function MessageLoad(scr,isError){
//         if(isError)
//             {
//                 alert(`Your Script ${src} not loaded Successfully.`)
//             }else{
//                 console.log(`Script Loaded : ${src}`);
//             }
//     }

//     function ButtonClicked(){
//         Add_Script('Script.js', MessageLoad);
//     }

//     button.addEventListener("click",ButtonClicked);
// }

// script.onload
// script.onerror

// -------------------------------------------------------------------------------------

// ----------------------------- callback hell -----------------------------
// ---------------------------- Pyramid of Doom ----------------------------
// when we have a callback inside a callback , the code gets difficult to manage and as we can see it also reduce the readability.

// {
//                 let a = document.getElementById("subButton");
//                 console.log(a);
//                 function load_Script(script,callback)
//                 {
//                     let x = document.createElement("script");
//                     x.src = script;
//                     x.onload = () => callback(null , script);
//                     x.onerror = () => callback(new Error('Not added script'),script);
//                     document.body.appendChild(x);
//                 }

//                 function clicked()
//                 {
//                     load_Script("src1.js",function(isError ,script){
//                         if(isError){
//                             console.log(`Sorry ! your script ${script} not loaded`);
//                         }else{
//                             console.log(`Congratulation your Script : ${script} loaded successfully`);
//                             load_Script("src6.js",function(isError ,script){
//                                 if(isError){
//                                     console.log(`Sorry ! your script ${script} not loaded`);
//                                 }else{
//                                     console.log(`Congratulation your Script : ${script} loaded successfully`);
//                                     load_Script("src3.js",function(isError ,script){
//                                         if(isError){
//                                             console.log(`Sorry ! your script ${script} not loaded`);
//                                         }else{
//                                             console.log(`Congratulation your Script : ${script} loaded successfully`);
//                                             lo
//                                         }
//                                     });
//                                 }
//                             });
//                         }
//                     });
//                 }

//                 a.addEventListener("click",clicked);
// }