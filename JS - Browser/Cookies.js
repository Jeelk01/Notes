// ------------------------- Cookies -------------------------

// Basically , cookies are small string of data stored directl in the browser.

// in JavaScript
// document.cookie provides access to cookies.

// cookies are set by a web server using the set-cookie HTTP - header , next time when the request is sent to the same domain , the browser sends the cookie using the cookie HTTP - header that way the server knows who sent the request.
// there are more than one cookie available on web page..

// to set the cookie in page
// document.cookie = "name : Jeel";     
// if we write this that means note we set this cookie and erase rest of cookies
// but this cookie will be added to cookies.

// we can do this as well

{
    let key = prompt("Enter your key : ");
    let value = prompt("Enter your value : ");

    document.cookie = `${key}=${value}`;
}

// but in this case there is probability of user input contains ( = or ;);
// for this browser may confuse.
// to avoid this 

{
    let key = prompt("Enter your key : ");
    let value = prompt("Enter your value : ");

    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

// for decode that
{
    decodeURIComponent(`${encodeURIComponent(key)}`);
    decodeURIComponent(`${encodeURIComponent(value)}`);
}

// cookie options
// cookie have several options which can be provided after key = value to a set call like this

{
    document.cookie = "user=bhr ; path=/a ; expires=Tue,29 march 2041 03:18:22 GMT" 
}
// path option makes the cookie visible at /a , /a/b etc,
// expire sets the cookie expiration time.


// Note
// The name = value pair , after encodeURIComponent , should not exceed 4kb.
// total no. of cookies per domain is limited to around 20+ (vary browser by browser).