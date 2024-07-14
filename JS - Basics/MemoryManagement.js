// ------------------------- Memory Management -------------------------

// JavaScript is a garbage-collected language, meaning developers don’t need to explicitly allocate or deallocate memory.
// a built-in garbage collector automatically manages memory
// The primary goal of garbage collection is to prevent memory leaks and ensure efficient resource utilization.


// JavaScript’s memory is organized into two main areas — the stack and the heap.
// In most JavaScript engines, primitive data types(String, Number, Boolean, Null, Undefined, Symbol, BigInt) are typically stored directly on the “stack”. The stack is a region of memory that’s used for small, simple data structures and function call management.
// the reference data types(Arrays, Objects, Functions) are typically stored in the “heap”. The heap is a larger area of memory that’s used for more complex, dynamic data structures. These data types are accessed via references or pointers.


// key concepts in Garbage collection

// Garbage collection process is handled by JS engine itself.
// it operates as follow.


//  1. Reference Counting
// one of the simplest garbage collection techniques.
// this type of technique involves keeping the track record of numbers of reference to the object when this is drop to the zero then object is no more accessible and safe to remove.
// limitation of this method.
// it can not detect circular refereces and can lead to memory leaks. 

// 2. Mark and Sweep
// most widly used garbage collection technique.
// it involves two operations 
// A. Marking       B. Sweeping

// A. Marking
// in this operation garbage collector identifies the all object that are reachable form the roots of the application.
// roots are typically global object , variables etc,
// if the object is reachable than it is marked as "alive".

// B. Sweep
// once the Marking operation is done.
// that all the objects that are not reachable or not marked "alive" that are cosider as garbage and removed from the memory.





// ------------------------------ Best Practices for Garrbage collection ------------------------------

// Avoid to using circular references : as they can prevent garbage collector from reclaiming the memory.
// minimum global variables : to reduce memory usage : as they persist (keep going) though out the lifetime of application
// uses local scopes
// Dispose the event listners when they are no longer needed.
// Use Libraries and frameworks : such as React and Angular, include their own memory management techniques to help developers avoid common pitfalls (issues , difficulty).


// this is cicular reference where object itself point to itself.
{
// let Obj = {
//     name :"Jeel",
//     College : 'BVM',
//     isMale : true,
//     Language : {
//         one : 'Guj',
//         sec : 'Hindi',
//         thr : 'Eng'
//     }
// }
// console.log(Obj);
// Obj.CircularReference = Obj;
// console.log(Obj);
}