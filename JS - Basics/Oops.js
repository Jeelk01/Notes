// ------------------------- Oops -------------------------

// Onbject oriented programming in JavaScript.

// Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, including Java and C++.

// -------------------- Four Pillars --------------------

// Abstraction
// Hiding the internal details

// Encapsulation
// 

// inheritance
// inherite the properties

// Polymorphism
// one thing multipe use.

// -------------------------------------------------------
// JavaScript object have special property calleed prototype that is either null or references other object.

// When we try to read a property from a prototype and it's missing , JavaScript automatically takes it from the prototype.
// This is called Prototypal Inheritance.
{
    let Object1 = {
        greet : () =>{
            console.log('Hello ! How are you ?');
        },
        details : () =>{
            console.log('Hey Jeel.');
        },
    }

    let Object2 = {
        Run : () => {
            console.log('Hey i\'m Run Perfectly.');
        },
    }

    let Object3 = {
        Digits : (n) => {
            let digits = 0,num = n;

            while(num > 0 ){
                digits++;
                num = Math.floor(num/10);
            }

            console.log(`Total digits in ${n} is ${digits}.`);
        }
    }

    Object1.greet();
    Object1.details();
    // Object1.Run(); // here this wiil throw the error , as Run is not a fucntion inside the Object1.


    // we have to set proto to use the fucntion inside the other object.
    // if the method or fucntion is not present in object then it wil go for proto and check if available then executes.
    // but first it check for own.
    
    Object1.__proto__ = Object2;
    Object1.Run();

    // we can make prototype of prototype also.

    Object2.__proto__ = Object3;
    Object2.Digits(23425);
    Object1.Digits(234543);
    
}

// ------------------------------ Classes & Objects ------------------------------

// Classes are a template for creating objects.

{

    class RailwayForm {
        Submit(){
            if(this.name){
                console.log(`${this.name} : Form Submited`);
            }else{
                console.log(`First complete the all detailes.`);
            }
        };
        Cancel(){
            console.log('Form Canceled');
        };

        fill(Username){
            this.name = Username;
        }
        printname(){
            if(this.name){
            console.log(`name is ${this.name}.`);
            }else{
                console.log(`Name haven't fill yet.`);
            }
        }
    }

    Jeel = new RailwayForm();
    Xyz = new RailwayForm();


    Jeel.fill('Jeel');
    Jeel.printname();
    Jeel.Submit();

    Xyz.printname();
    Xyz.Submit();

}

// ------------------------------- Constructors -------------------------------
// the constructor() method is called automatically by new , so we can initialize the object there.
{
    class user{
        constructor(name,age){
            console.log(`New User created`);
            this.name = name;
            this.age = age;
        }

        SetUsername(Username){
            this.name = Username;
        }

        SetAge(Age){
            this.age = Age;
        }

        SetEmail(Email){
            this.email = Email;
        }
        PrintInfo(){
            console.log(`Name : ${this.name}`);
            console.log(`Age  : ${this.age}`);
            console.log(`Email: ${this.email}`);
        }
    }

    U1 = new user();
    U1.SetUsername('Jeel');
    U1.SetAge(18);
    U1.SetEmail('jk@gmail.com');
    U1.PrintInfo();
    U2 = new user('Xyz',19);

    // if we set the parameters in constructr we can make some operations also.
    
}