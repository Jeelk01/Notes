// ------------------------- This keyword -------------------------

// Function Borrowing
// Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.

// let's see the example

{
    let name1 = {
        name : "Jeel",
        city : 'Surat',
        print : function(){
            console.log(`name is ${this.name} , city is ${this.city}`);
        }
    }

    name1.print();

    let name2 = {
        name : "abc",
        city : 'xyz',
    }

    // if we want to print the data of name2 without making new parameter in object we can boroww a function.

    name1.print.call(name2);
    // there is reference provided to function using call is about name2.
    // so that in print function this keyword is refered to name2 object.
}


// ------------------------- Call -------------------------
// In JavaScript, the call() method is used to invoke a function with a specified this value and arguments provided individually.

function SetUsername3(Username){
    this.Uname = Username;
}

function SetUsername2(Username){
    SetUsername3.call(this,Username);
    this.city = 'Anand';
}

function SetUsername1(Username){
    SetUsername2.call(this,Username);
}

function User_Data(Username,email,password , ...Numbers){
    let sum = 0;
    console.log(typeof(Numbers));
    console.log(Array.isArray(Numbers));
    for(let num of Numbers){
        sum+=num;
    }
    this.sum = sum;
    SetUsername1.call(this,Username);
    this.email = email;
    this.password = password;
}

let S1 = new User_Data('Jeel' , 'jk01@gmail.com','********',1,2,3,4,5);

console.log(`Name : ${S1.Uname} , Email : ${S1.email} , Password : ${S1.password} , City = ${S1.city} , Sum : ${S1.sum}`);


// ----------------------------- Apply -----------------------------
// the only difference between the call and the apply method is that the way how argumnets are passed.

{
    // obj.apply(this,[]);
    // list arrray is passed.
}




// ------------------------------- Bind -------------------------------
// the only difference between call and bind method is rather using the function in another object using a copy of that function which can be invoked later also.
// it bind that to object.

{
    let name = {
        name : 'jeel',
        City : 'Surat',
        print : function(){
            console.log(`Name : ${this.name} , City : ${this.city}`);
        }
    }

    let name2 = { 
        name : 'Abc',
        city : 'PQR',
    }

    let printName2 = name.print.bind(name2);
    printName2();
}

