// -------------------- Array --------------------

// a data type that can store multiple values of different data types sequentially.

// ways to creat array

// using square brackets
{
    let num: number[] = [1,2,3,4,5];
}
// using array constructor
{
    let name: number[] = new Array(1,2,3,4,5,6,7,8,9,0);   
}
// using array.of method
{
    const names: string[] = Array.of("Jeel","xyz",'pqr');
    console.log(names);
    
}


// -------------------- Array Methods --------------------

// array.length     : return length of array.
// array.push       : to add element at the end of the array. return the length of array.
// array.pop        : to remoce element from the end of the array. return poped-up element.
// for of           : return element value collection
// for in           : return index collection
// foreach          : accept a argument as function
// map              : used to performing operations on element, return a new array
// filter           : used for filtering purpose , return a new array
// 


// array.length
// returns the length of the array
{
    console.log('--------------- Length ---------------');
    let xyz:number[] = new Array(1,2,3,4,5,6,7,8,9,0);
    console.log(xyz);
    console.log(xyz.length);

    let pqr:string[] = Array.of("a",'b','c','d','e')
    console.log(pqr , typeof(pqr),pqr.length);
    console.log(Array.isArray(pqr));
       
}




// ------------------------------ Tuples ------------------------------

// A tuples type is another sort of Array type thet knows exactly how many elements it contains, and exactly which types it contains at specific position
// used for the fixed collection
// order and value smatters
{
    type PersonInfo = [string,number,boolean];

    const P1:PersonInfo = ['xyz',19,true];
    const P2:PersonInfo = ['pqr',17, false];

    // const P3:Person = [19,'Hello', true];  // order effected.
    // through the error.

    let PrintInfo = (person : PersonInfo) => {
        const [name,age,License] = person;
        console.log(`
            name : ${name}
            age : ${age}
            License : ${License}`);
    }

    PrintInfo(P1);
    PrintInfo(P2);
}
