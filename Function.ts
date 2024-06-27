// -------------------------- Function -------------------------

// in type Script we have to write a function by types strictly to avoid any type of error.
// type of parameters are passing to the function
{
    function Sum(a:number , b:number)
    {
        return a + b;
    }

    console.log(Sum(1,2));
    console.log(typeof(Sum(1,2)));
    
    const greet = (name:string,repeat:number) => {
        for(let i = 1 ; i <= repeat ; ++i)
            {
                console.log(`Hello! ${name}`);
            }
    }
    greet('Jeel',10);
    console.log(typeof(greet('Jeel',10)));
    // if return value is not given then it infer it by automatically.
}

// in some function we need to return a value
// we write return value type ust after the parameter brackets.
{
    function greet(name:string):string{
        return `hello! ${name}`;
    }

    let result = greet('jeel');
    console.log(result);
    
}   

// to check that given string is palindrome or not
{
    function isPalindrome(str:string):boolean{
        let start = 0,end = str.length-1;

        while(start <= end)
            {
                if(str[start]!=str[end]){
                    return false;
                }
                start++,end--;
            }
        return true;
    }
    console.log((isPalindrome("123321")));
}

// Optional and Defaul Parameters

// default Parameter
// here b is default parameter
// even value for the b is not passed to the function then function take that value default ( here we set that - 0)
{
    function Numbers (a:number, b:number = 0):number {
        return a + b;
    }
}

// to make the parameter optional append n? just after the name of parameter.
{
    function Numbers1 (a:number , b:number , c?:number):number{
        return c ? a+b+c : a+b;
    }

    console.log(Numbers1(1,2,3));
    console.log(Numbers1(1,2));
    
    
}

// -------------------------- Call signature --------------------------
{
    type student = {
        name:string;
        age:number;
        greet: (country:string) => string;  // this is called as cal signature where we just define the type and anotations
    }

    let S1:student = {
        name : 'Jeel',
        age : 18,
        greet: (country:string) => {
            return `my country is ${country}.`;
        }
    }

    console.log(S1);
    console.log(typeof(S1));
    console.log(S1.greet('India'));
    
    
    
}