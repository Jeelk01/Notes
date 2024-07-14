// ------------------------- API -------------------------

// Application Programming interface
// we can consider API as messenger that transfer data from one to another.

// API doesn't give us how the data is processed.
// but give us the final form of data. (result)
 
// there is API key that ensure user data security.

// for common purposes instead of doing from scratch e can use API also.
// like - ( login with google ) - ( Weather APIs ) etc,


// --------------------------  --------------------------

// JavaScript can be used to send and retrive information from the network when needed.
// AJAX :   Asynchronous JavaScript and XML     :   fetch data without loading page.
// JSON :   JavaScript Object notatioon         :   

// ---------------------- Fetch API ----------------------

// fetch is used to get data over the network.

// {
//     let P = fetch(url, Option);
// }
        // return value1.json();
    // }).then((value2) => {
        // console.log(value2);
    // });
// }

// Geeting a response is 2 stage process that's why here 2 .then are used.

// 1. an object response class containing 'status' & 'ok' properties.
// status   : The http status code , ed 200
// ok       : boolan true if the http status code is (200-209)

// 2. after that we need to call another method to access the body in different format

// response.json(); --> parse the response as json
// json() method return a second promise that resolve with the result of parsing the response body text as JSON. (input is JSON , output is JS object).

// response.text(); --> Read and return the text

// other methods
// response.formData();
// we can run only one method.


// response.headers
// response headers available in response.

// request headers
// to set a request header in fetch , we can use then headers option


// in JS engine 
// fetch have special queue(micro task queue - priority queue - fetch queue) having a special priority.
// first fetch then settimeout then other work.

