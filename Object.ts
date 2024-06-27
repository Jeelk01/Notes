// -------------------- Objects --------------------

// used to store date with key:value pair

{
    const Person = {
        name : 'Jeel',
        age : 18,
        isStudent : true,
        Address :{
            city : 'Surat',
            country : 'India'
        }
    }
}

{
    const Person1 : {
        name:string;
        age:number;
        isStudent : boolean;
        Address : {city : string; country : string}
    } = {
        name : 'jeel',
        age : 18,
        isStudent : true,
        Address : {
            city : 'Surat',
            country : 'India',
        }
    }
}

// it seems like same as JavaScript but the only change is that we can not update the information with different data types.
// if we declare type of only one property then we have to delare type of every property.




// ------------------------------ Type Aliases ------------------------------
// type aliases is way to give a name to a specfic type or combination of types.
// declared using type keyword
// when we declare type then use semicolon instead of comma (best practices)
// if anything you want optional then just right ? (question mark)
// syntax
{
    type User = {
        name:string;
        age:number;
        isStudent: boolean;
        class?:string; // optional
    }
    
    // here we write jeel as type User (type User making a data type of user)
    let Jeel:User ={
        name : 'Jeel',
        age : 18,
        isStudent : true
    }

    let x:User = {
        name : 'xyz',
        age : 100,
        isStudent : false,
        class : 'NOne'
    }

    console.log(Jeel.class);
    console.log(x.class);
    
}


// ------------------------- enums -------------------------
// used to represent the set of related values.

{
    enum Roles{
        user = 'User',
        admin = 'Admin'
    }

    type Login = {
        name:string;
        email:string;
        password:string;
        role:Roles;
    }

    let user1:Login = {
        name:'xyz',
        email:'xyz01@gmauil.com',
        password: 'XyzABC01$',
        role:Roles.user
    }

    let user2:Login = {
        name:'prq',
        email:'prq01@gmauil.com',
        password: 'prqABC01$',
        role:Roles.admin
    }

    function isAdmin(user:Login) : boolean {
        
        if(user.role === Roles.admin){
            return true;
        }

        return false;
    }

    console.log(`let's check that user1 is admin or not : ${isAdmin(user1)}`);
    console.log(`let's check that user2 is admin or not : ${isAdmin(user2)}`);
    
}