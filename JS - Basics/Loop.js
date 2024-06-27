// ------------------------ Loops ------------------------ //

// 1. while 
// 2. do - while
// 3. for


// Print statement certain times using while loop.
// Entry Controlled loop.
// Check the condition first then executes.
// Best loop for specific condition break.
{
let i = 1 ;
while(i < 6)
    {
        console.log('Hello World');
        ++i;
    }
}

// Print statement certain times using do while loop.
// Loop executed at least once.
// Exit controlled loop.
// Check the condition after the execution.
{
    let i = 1;

    do{
        console.log('Hello World');
        i++;
    }while(i<6);
}

// Print statement certain times using for loop.
// Entry controlled loop.
// Specific no. of iteration.
// Best loop when starting and ending points available.
{
    for( let i = 0 ; i < 5 ; ++i)
        {
            console.log('Hello World');
        }
}


// for in loop  
// Mostly used in object

// Syntax
// for key in object{
//  console.log('${key} : ${object[key]}');
// }

{
    let person = {
        name : 'xyz',
        age : 17,
        student : {
            College : 'abcd',
            CGPA : 9.3
        }
    }


    // This will not prit the nested object property properly
        for (let key in person){
            console.log(key, " : " ,person[key]);
        }
    
    // for print the nested onject property properly.

    for (let key in person)
        {
            if (typeof(person[key] === 'Object'))
                {
                    for (let nestedkey in person[key])
                        {
                            console.log(nestedkey + " : " + person[key][nestedkey] );
                        }
                }else{
                    console.log(key + " : " + person[key]);
                }
        }
}
{
    let a = [15,67,185,7,941];
    for(let element in a)
    {
        console.log(a[element]);
    }
}



//  For of loop
//  mostl used in array.
//  for the for of loop must be itearble.
{
    console.log('---------- For of ----------');
    let a = [1,2,3,4,5];
    for(let i of a){
        console.log(i)
    }
}



// For each loop
// used to operation on every element of array.
// Operation on array.
// can take three arguments 
// 1st : element
// 2nd : that index
// 3rd : entire array
{
    console.log('---------- For each ----------');
    let a = [1,2,3,4,5];

    a.forEach((item) => {
        console.log(item*item);
    });

    a.forEach((element,i,a) => {
        console.log(element*i*a[i]);
    });
}

// Array.from
// used to conver HTML collection into array.
// to perfrom for each
// HTML Collection ( DOM - Websites)
// anything that can be converted into array we use array.from
{
    let str = 'Hello world';
    console.log(typeof(str));
    console.log(str);
    let arr = Array.from(str);
    console.log(typeof(arr));
    console.log(arr);
}