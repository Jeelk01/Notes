// ------------------------ Array ------------------------ //

// collection of items 
// can access with same name different index.
// Different types of data allowed
// Array is an object in JavaScript
// Array is mutable.

// Predecided Size of array
{
    let arr = new Array(6);
    // let arr = Array(6);
    console.log(arr,arr.length);
}

let a = [1,2,3,4,5,null,false,undefined];

for(let i = 0 ; i < a.length ; ++i)
    {
        console.log(a[i]);
    }
// for type of a
console.log(typeof(a));
console.log('Length of a :',a.length);

console.log(a);
// array.length for length of array
console.log(a.length);

// We modify the existing element and can increas the size of array also.
a[8] = 'Hello';
a[0] = 0;
console.log(a);

// delete
// not method it's operator
// Arrays length won't get affected.
// It leaves undefined hole in array.
{
    console.log('-------------------- Delete --------------------');
    let a = [1,2,3,4,5];
    console.log(a.length,a);

    delete a[2],delete a[3];
    console.log(a.length,a);
    console.log(typeof(a[2]));
    for ( let i = 0 ; i < a.length ; ++i)
        {
            console.log(a[i]);
        }
}

// -------------------------------------- Array methods -------------------------------------- 

// toString     : Convert Entire Array to the string.
// join         : Join All element and make it string ---> take argumnet as saperator.
// split        : Split all the string part and make them array ---> take argumnet as from where it split.
// Pop          : Pop-Up the last element of the array.
// Push         : Push element at the last of the array.
// Shift        : Remove the starting element of the array.
// unshift      : Add element at the starting of the array.
// concate      : Cpncate array at the end of array --> first argumnet : original array // Rest is to be concated array.
// sort         : Sort alphabeticallly -----> take fucntion as argument for different sorting methods.
// toSorted     : Same as Sort but return a new array.
// reverse      : Reverse the array.
// toReverse    : same as reverse but return new array.
// Splice       : for deleting and adding pericular group of elements in array
// toSpliced    : same as splice but return a new array. original won't changed.
// slice        : Slice out a part of array.
// Map          : Just like for each but return a new array.
// Filter       : Conditional filtering. --> Return a new array.
// Reduce       : return a single value --> like entire element operation.
// at           : return element at perticular index position.
// Negative Index : -i = array.length() - i  ----> index position
// copyWithIn   : to overwrite element by that array element.
// flat         : Reduce the dimention by one and return a new array.
// indexOf()    : to find the index of perticular element. ( 2 arguments )
// lastIndexOf(): to find the last index of the perticular element in array.
// includes()   : to check weather element is present in the array or not.
// find()       : take function as argument for return the first element that passes the function.

// every()      : to check that every element satisfy the condition function or not.
// some()       : to check that if any elemetn satisfy the condition function or not. 
// values()     : return an iterable object with same element values of array.
// valueOf()    : return the array it self. original array as it is.
// isArray()    : To check that object is an array or not.


// Convert Array into string 
// toString
{
    let a = [1,2,3,4,5];
    let b = a.toString();
    console.log(b);
    console.log(typeof(a),typeof(b));
    a = a.toString();
    console.log(typeof(a));
    console.log(a);
}

// join
// Join all the array element 
// after it coverted to string.
// same as toString but additionall take argument to saperator.
{
    let a = [1,2,3,4,5];
    console.log(typeof(a));
    let b = a.join('/');    // Saperated using /
    console.log(b);
    b = a.join('');
    // return the joined string.
    a = a.join(''); // offer a argument for saperator by which saperator do you want to join.
    console.log(typeof(a));
    console.log(a); 
}
// We can split from string and make them array also.
{
    let str = "A quick brown fox jumps over a lazy dog.";
    let arr = str.split(" ");
    console.log(str,arr);
}

// Pop
// pop up the last element of the array.
// changes the same array.
// modify the original array.
{
    let a =[1,2,3,4,5];
    console.log(a.length);
    console.log(a);
    a.pop(); // Pop up the last element. aslo update the array length will also change.
    console.log(a.length);
    console.log(a);

    // pop return the popped up element
    let b = a.pop();
    console.log(b);
}

// push
// push element at the end of the array.
// return the length of new array..
// modify the original array.

{
    console.log('---------- Push ----------');
    a = [1,2,3,4,5];
    console.log(a.length);
    console.log(a);
    let b = a.push(10);
    console.log(b);
    a.push(10);
    console.log(a.length);
    console.log(a);
}

// Shift
// remove the begining element from the array.
// return the removed element.
// modify the original array.
{
    console.log('----------- shift ----------');
    let a = [1,2,3,4,5];
    let b = a.shift();
    console.log(a,b);
}

// unshift 
// add the element to the begining.
// take element as a argument to added.
// return the length of array.
// modify the original array.
{
    console.log('---------- unshift ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    let b = a.unshift(0);
    console.log(a,b);
}

// concate
// add multiple array. 1 or more
// original array won't be changed
// return a new array.
// it also takes strings asargument
{
    console.log('---------- concate ----------');
    let a = [ 1 , 2 , 3 ] , b = [ 4 , 5 , 6 ] , c =[ 7 , 8 , 9 ];
    console.log(a,b);
    let x = a.concat(b);
    let y = a.concat(b,c);
    console.log(a,b,c,x,y);
    a = a.concat(a,b,c,x,y);
    console.log(a);
    console.log('----- Concat String as argument -----');
    a = a.concat('Hello');
    console.log(a);
}

// Sort
// Modify original array.
// sort alphabetically.
// it comsider all element as string then sort it.
// for sorting in ascending and descending it provides an optional argument. // as function in compare.
{
    console.log('---------- sort ------------');
    
    a = [464,46413,15,1,64,410];
    console.log(a);
    a.sort();
    console.log(a);

    let compare1 = (a,b) => a - b;
    let compare2 = (a,b) => b - a;
    a.sort(compare1);
    console.log(a);
    a.sort(compare2);
    console.log(a);
}

// toSorted()
// same as sort but return a new array.
// original doesn't change.

// Reverse
// Reverse the array.
{
    console.log('---------- Reverse ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    a.reverse();
    console.log(a);
}

// toReverse()
// same as reverse but reuturn a new array.

// Splice
// delete and add element at perticular index position.
// we can add multiple element at same time.
// return the deleted items.
// chanbge the original array.
// take 3 major argument
// 1st : index position
// 2nd : How many element do you want to add 
// 3rd : all those elements to be added.
// if adding elements are in bulk compare to element from specific index then length of array will be changed. 
{
    console.log('---------- Splice ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    console.log(a.length);
    a.splice(3,0);
    console.log(a);
    console.log(a.length);
    let x = a.splice(2,1);
    console.log('Return value :',x);
    console.log(a);
    console.log(a.length);
    a.splice(2,2,1000,10001);
    console.log(a);
    console.log(a.length);   
}

// toSpliced()
// won't change the original array.
// all other properties are same as splice()

// Slice
// Slice out the piece of array.
// array.slice[startingIndex,EndingIndex + 1]
// original array doesn't affected.
// returns a new array.
{
    console.log('----------- Slice ----------');
    let a = [1,2,3,4,5];
    console.log(a.slice(1,3));
    console.log(a);
}

// ------------------------------ MAP - FILTER - REDUCE --------------------------------

// Map
// three arguments
// 1st : Element
// 2nd : index
// 3rd : array
// just like for each
// but return a new array.

{
    console.log('---------- Map ----------');
    a = [9,5465,9498,586,51];
    console.log(a);
    a.map((element) => {
        console.log(element);
    });
    console.log(a);

    let MapArray = a.map((element) =>{
        console.log(element);
        return [element , 10];
    });

    console.log(a);
    console.log(MapArray);
}

// flatMap()
// same as map
// return new array
// but combination of flat and map method
// map is used for one to one tranformation of array element.
// but flaptmap is used for one to many transformation of array element.
// in general if we return an array it should be stored as array but however weused flatmap it flatten the array and reduce its dimension.
{
    console.log('----------- flatmap ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    let b = a.flatMap(( value ) => {
        return [value , value*value , value*0];
    });
    console.log(b);
}



// Filter
// return a new array.
// conditional filtering.
// for values function returns a true will be stored in new array.
// Not modify the original array. 
{
    console.log('---------- Filter ----------');
    let a = [1,2,3,4,5,6,7,8,9,10];

    let a2 = a.filter((value) => {
        return (value %3 == 0)
    });
    console.log(a2);
}

// Reduce
// Return an array to the single value.
// One by one all value.
// accept two argument
{
    console.log('---------- Reduce ----------');
    let a = [1,2,3,4,5];
    let a2 = a.reduce((value1 , value2) => {
        return value1/ value2;
    }); 
    console.log(a2);
}

// at
// array.at()
// return element at pertiular index position.
// take index number as argument.
{
    console.log('---------- at ----------');
    let a = [1,2,3,4,5];

    let b = a.at(3);
    console.log(b);
}

// Negative Indexing ( work only in at() - method  not in bracket a[-i] )
// accessing the element by negative indexing.
// last element of the array is refered as -1 indexed.
// as we come forward negative index is increasing
// like -1 = (array.length() - 1)
//      -2 = (array.length() - 2) --> index position.
{
    console.log('---------- Negative indexing ----------');
    let a = [1,2,3,4,5]
    console.log(a.at(-1));
}

// copyWithIn()
// use to copy internal element inside the array.
// take three argument
// 1st : index position to element get pasted.
// 2nd : starting index position from where element get copied.
// 3rd : (ending index position + 1 ) from where element get copied.
// This will overwrite the existing value.
// we can't add element.
// length of the original array won't be changed.
{
    console.log('---------- copyWithIn() ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    a.copyWithin(2,0,1);
    console.log(a);
    a.copyWithin(1,0,4);
    console.log(a);
    a.copyWithin(2,0,1);
    console.log(a);
}

// Flattening of the Array
// an useful process to reduce the dimentsion of the array.
// when we want to convert multidimentional array into a one-dimentional array then this process will be used by us.
// return a new array.
// Use flat method once will reduce the dimention by one. 
{
    console.log('---------- Flat ----------');
    let a = [[[1,2],[3,4]],[[5,6],[7,8]]]

    console.log(a);
    console.log('-------');
    let b = a.flat();
    console.log(a);
    console.log(b);
    console.log('-------');
    let c = b.flat();
    console.log(a);
    console.log(b);
    console.log(c);
}

// indexOf()
// to find the index of array element.
// return -1 if lemen t not exist.
// if element present more than one time then it will return the first occurance of element. 
// we can pass the second argument also , from which index position we will searching
{
    console.log('---------- indexOf() ----------');
    let a =[1,2,3,1,5,6];
    console.log(a.indexOf(1));

    // double argumnet
    let b = [1,2,3,4,1,2,1,1];
    console.log(a.indexOf(1,3));
}

// lastindexOf()
// to find the index of last occuramce of the array element
{
    console.log('---------- lastindexOf ----------');
    let a = [1,2,1,2,1,2];
    console.log(a.lastIndexOf(1));
}

// includes()
// to check weather the given element is present in the array or not.

{
    console.log('---------- Includes --------');
    let a = [1,2,3,4,5];
    console.log(a);
    console.log(3,a.includes(3));
    console.log(6,a.includes(6));
}

// find()
// pass function as argument for condition satisfied return a single element.
// return first element that passes the test function. ( return value = true )
{
    console.log('---------- Find ----------');
    let a = [1,2,3,4,5,6,7,8,9,0];

    let ans = a.find((value) => {
        return value > 8;
    })

    console.log(ans);
}

// findIndex()
// pass function as argument for condition satisfied return a index of single element.
// return index of first element that passes the test function. ( return value = true )
{
    console.log('---------- Find index ----------');
    let a = [1,2,3,4,5,6,7,8,9,0];

    let ans = a.findIndex((value) => {
        return value > 8;
    })

    console.log(ans);
}

// findLast()
// pass function as argument for condition satisfied return a single element.
// return last element that passes the test function. ( return value = true )
// testing starts from last array element
// {
//     console.log('---------- Find index ----------');
//     let a = [1,2,3,4,5,6,7,8,9,0];

//     let ans = a.findLast((value) => {
//         return value > 4;
//     })

//     console.log(ans);
// }

// findLastIndex()
// pass function as argument for condition satisfied return a index of single element.
// return index of last element that passes the test function. ( return value = true )
// {
//     console.log('---------- Find index ----------');
//     let a = [1,2,3,4,5,6,7,8,9,0];

//     let ans = a.findLastIndex((value) => {
//         return value > 8;
//     })

//     console.log(ans);
// }

// every
// return true or false.
// take function as argument.
// if every element passes through the function then return true.
// even if one element doesn't passes through the function then return false.
{
    console.log('---------- Every ---------');
    let a = [1,2,3,4,5];
    let ans1 = a.every((element) =>{
        return element < 6;
    });
    console.log(ans1);
    let ans2 = a.every((element) => {
        return element > 1;
    });
    console.log(ans2);
}

// some
// take function as argument.
// even if onlt one element passes through the function then return true.
// not a single element passes through the function then return false.
{
    console.log('---------- Some ----------');
    let a = [1,2,3,4,5];
    let ans1 = a.some((element) => {
        return element > 4;
    });
    let ans2 = a.some((element) => {
        return element > 5;
    });
    console.log(ans1,ans2);
}

// values
// return an iteratorable object with value of array.
// original array won't change.
{
    console.log('---------- values ----------');
    let a = [1,2,3,4,5];
    console.log(typeof(a));
    const x = a.values();
    console.log(typeof(a),typeof(x));
    console.log(Array.isArray(x)); // here x is not array but iterable object
}

// valueOf()
// return the array itself.
// array.valueOf() = array
{
    console.log('---------- valueOf ----------');
    let a = [1,2,3,4,5];
    console.log(a);
    console.log(a.valueOf());
}

// Array.isArray()
// to check that given object is array or not.
{
    let a = [1,2,3,4,5];
    console.log(Array.isArray(a)); // checking that a is array object or not.
    let b = a.values(); // now b is iterable object of a,
    console.log(Array.isArray(b));
}

