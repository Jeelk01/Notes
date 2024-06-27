// ------------------------ Conditional Statement ------------------------ //

// If statement
// if(Condition){
//     // Code to be Executed.
// }
{
    let a = 1 ;
    let b = 2;

    if(a<b)
        {
            console.log("A is less than B.");
        }
}

// If - else statement
// if(Condition)
// {
//     // Code.
// }else{
//     // Code.
// }
{
    let a = 10;
    let b = 20;

    if(a == b){
            console.log("A is equal to B.");
        }else{
            console.log("A is not equal to B.");
        }
}


// If - elseif (ladder)
// if(Condition1) 
// {
//     // code.
// }else if(Condition2)
// {
//     // code.
// }else if(Condition3)
// {
//     //code.
// }else{
//     //code.
// }
{
    let a = 1;
    let b = 2;
    
    if(a == b)
        {
            console.log("A is equal to B.");
        }else if(a > b)
            {
                console.log("A is greater than B.");
            }else
            {
                console.log("A is less than B.");
            }
}

// Ternary Operator
//  (Condition) ? Expression1 : Expression2 
// If condition is true then Expression1 will be executed.
// else Expression2 will be executed.
{
    let num = 20;

    (num%2 === 0) ? console.log("Even") : console.log("Odd"
)}



// Switch case
// switch (expression) {
//     case value1:
//          Code to execute if expression === value1
//          break;
//     case value2:
//          Code to execute if expression === value2
//          break;
//          You can have any number of case statements
//     default:
//          Code to execute if expression doesn't match any case
//   }
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

