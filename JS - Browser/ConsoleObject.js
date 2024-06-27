// --------------------- Console Object ---------------------

// console.log();
// console.error();
// console.warn();
// console.time();
// console.timeEnd();
// console.dir();

{
    console.assert(5>90);
    console.assert(5<90);
}
// Used to assert a condition.
// if the consition or expression written in the assertion is false then it shows the Assertion failed.
// if the condition or expression written in the assertion is true then it doesn't failed.
// Display in error section in browser.
// Red color

// console.clear();
// Used to clear a console.

{
    console.log();
}
// dislpled in info section in browser.


{
let student = {
    name : 'Jeel',
    college : 'BVM',
    cource : 'Engineering'
}
console.table(student);
}
//


{
    console.warn('Hey don\'t drink liquer.')
}
// For warning purpose.
// Yellow color

{
    console.info('Hey this is an important information.')
}
// display in info section in browser.

{
    console.time("For Loop");
    for(let i = 0 ; i < 20 ; ++i)
        {
            console.log(i);
        }
    console.timeEnd("For Loop");
}
// same lable should be written inside time() and timeEnd().
// we can compare while and for also.
// two comparision.

