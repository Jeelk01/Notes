// ------------------------ Object ------------------------ //

// object is Key and value pair.

// Creating a object
{
    let obj = {};
}
// by new keyword
{
    let obj = new Object();
}
// constructor function
    {
        function Student(name,college,cource)
        {
            this.name = name;
            this.college = college;
            this.cource = cource;
        }
    
        let S1 = new Student('Jeel','BVM','CP');  //  new keyword make a new object.
        let S2 = new Student('Jeet','GCET','Iot')
    
        console.log(S1);
        console.log(S2);
    }



let student = {
    name : 'Jeel',
    cource :  'JavaScript'
};
console.log(typeof(student));
console.log(student);

// For accessing perticular key  : value
// use . (Dot operator)

// Dot notation
console.log(student.name);
console.log(student['name']);

// when we use . (dot) and square ([])
// based on requirement.
// but mostpreffered . (Dot)

let teacher = {
    name : 'Sukesh',
    'Work Exp' : 10 
}

// Bracket Notation
console.log(teacher['Work Exp']);

let UserInput = 'name';
// if a perticular name of string passes through the another varible than use square.
console.log(teacher[UserInput]);

// To delete pericular property.
// delete object.property
delete teacher.name;
console.log(teacher.name);
console.log(teacher);

// if we are in the object then this keyword refer to the current object.
let Person = {
    fname : 'Jeel',
    lname : 'Kalathiya',
    fullname : function(){
        return this.fname + " " + this.lname;
    }
}
// We can modify it later also.
Person.fname = 'Xyz';
console.log(Person.fname);
// We can add property also.
Person.age = 19;
console.log(Person.age);
console.log(Person);

// This keyword
{
    let Laptop = {
        RAM : 12,
        Brand : 'HP',
        GetConfig : function ()
        {
            console.log(this.RAM,this.Brand);
        }
    }
    Laptop.GetConfig();
}

// complex Object
// Object inside the object
// nesting

{
    let person = {
        name : 'xyz',
        age : 17,
        student : {
            College : 'abcd',
            CGPA : 9.3,
            FirstSem : {
                Subject : 5,
                Credential : 17,
                SGPA : 9.8
            }
        }
    }

    console.log(person.student.FirstSem.SGPA); // Accessing only one property.
}


// when a perticular property is not available.
// and we try to access it then it's throw the undefined.
// we are using a method to find a length then it trhow the error.

{
    let student = {
        name : 'xyz',
        age : 17
    }

    // now we are trying to print the length of grade in student.
    console.log(student.grade);  // undefined 
    // console.log(student.grade.length); // Error
    console.log(student.grade?.length); // ? check the grade is available or not if then print length otherwise undefined.
}


// Keys of object
// Values of object
// we can access them by index number. ( array concept )
{
    let student = {
        name : 'Jeel',
        College : 'BVM',
        State : 'Gujrat'
    }
    console.log(Object.keys(student));
    console.log(Object.values(student));


    console.log('---------------   Keys   ---------------');
    console.log(Object.keys(student)[0]);
    console.log(Object.keys(student)[1]);
    console.log(Object.keys(student)[2]);

    console.log('--------------   Values   --------------');
    console.log(Object.values(student)[0]);
    console.log(Object.values(student)[1]);
    console.log(Object.values(student)[2]);
}

// Argument object
{
    function f(a,b,c,d,e,f,i,j)
    {
        console.log(arguments[0],arguments[1],arguments.length);
    }

    let a = 'String';
    f(0,34,53,23,43,64,63,64,678,2);
}

// -------------------- Object Methods --------------------

// assign()     : used to assign target object from source object. 
// entries()    : return array of key:value pair of object.
// fromEntries(); make an object from list of key value pairs. (reverse of entries)
// values()     : retuen an array of all values in object
// keys()       : return an array of all keys in object.
// gropuBy()    : group elements by their callbackfunction return value.




// assign()
// used to assign the value to target object from source object.
// major two argument
// 1st : target
// 2nd : Source ( multiple source allowed)
// if same propert exist then right to left assignment of values.
// if different properties exist then added to target object.
{
    console.log('---------- assign ----------');
    let Jeel = {
        name : 'Hello',
        grade : 'A',
        city : 'Surat'
    }

    let kirtan = {
        name : 'How',
        grade : 'A',
        laptop : 'HP',
        city  : 'Bharuch'
    }

    let parimal = {
        name : 'Are',
        grade : 'A+'
    }

    let x = Object.assign(Jeel,kirtan,parimal);
    console.log(x);
    console.log(Jeel);
    console.log(kirtan);
}

// entries
// return an array of key:value pair for object.
{
    console.log('---------- entries ----------');
    let person = {
        name : 'XYZ',
        fcolor : 'Black',
        age : 18
    };

    let array = Object.entries(person);
    console.log(person , array);
    console.log(typeof(person),typeof(array));
    console.log(Array.isArray(person),Array.isArray(array));
}

// fromEntries()
// creates an object from list of key:value pairs. 
{
    let a = {
        name : 'xyz',
        college : 'pqr',
        CGPA : 123
    };

    let b = Object.entries(a);
    console.log(a);
    console.log(b);

    let c = Object.fromEntries(b);
    console.log(a);
    console.log(b);
    console.log(c);
}

// values
// return an array of all object values.
{
    console.log('---------- values ----------');
    let Student = {
        name : 'Jeel',
        College : 'BVM',
        age : 18
    }

    let array = Object.values(Student);
    console.log(array);
}
// if nested object exist
{
    let Student = {
        name : 'Jeel',
        College : 'BVM',
        age : 18,
        person : {
            city : 'Surat',
            fcolor : 'Black'
        }
    };

    let array = Object.values(Student);
    console.log(array);
}
// output
// [ 'Jeel', 'BVM', 18, { city: 'Surat', fco: 'Black' } ]


// keys
// return an array of all object keys.
{
    console.log('---------- keys ----------');
    let Student = {
        name : 'Jeel',
        College : 'BVM',
        age : 18
    };

    let array = Object.keys(Student);
    console.log(array);
}
// if nested object exist
{
    let Student = {
        name : 'Jeel',
        College : 'BVM',
        age : 18,
        person : {
            city : 'Surat',
            fcolor : 'Black'
        }
    };

    let array = Object.keys(Student);
    console.log(array);
}
// Output
// [ 'name', 'College', 'age', 'person' ]


// groupBy()
// group the elements by callback function response.
// {
//     const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
  
//   function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }
  
//   const result = Object.groupBy(fruits, myCallback);
//   console.log(result);
// }

//