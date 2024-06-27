// ------------------------------------ Async - Await ------------------------------------

// a special syntax to work with Promises.
// async keyword.

// an async function always return a promise.
// other values are wrapped in promise automatically.
// in the async function await stops the execution of progrma flow.
// whe it completed program flow resume.
// we can stop / delay execution of the fucntion by using async and await.

{
    async function Jeel(number)
    {
        return number;
    }


    // we can use then with async function because it returns a promise
    Jeel(12).then((value) => {
        console.log(value);
    })

    Jeel(10).then((value) => {
        console.log(value);
    })
}

{
    async function Weather(){
        let delhiWeather  = new Promise((resolve,reject) => {
            setTimeout(()=>{
                console.log('Delhi');
                resolve("27 degree")
            },1000);
        });
        
        let MumbaiWeather = new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log('mumbai');
                resolve('30 degree');
            }, 2000);
        });

        let Delhi = await delhiWeather;
        let Mumbai = await MumbaiWeather;
        setTimeout(() => {
                delhiWeather.then((value) => {
                    console.log(`Temperature in Delhi ${value}`);
                });

                
                MumbaiWeather.then((value) => {
                    console.log(`Temperature in Mumbai ${value}`);
                });
        }, 2000);

    }

    Weather();
}