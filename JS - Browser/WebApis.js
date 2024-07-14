// -------------------- Web APIs --------------------

// ----- Web Workers -----

// A web worker is a JavaScript process that runs in the background, independently of other scripts, without affecting the performance of the page.

// Java-Script is single threaded.
// known as main thread and responsible for executing javascript for web page one line at a time.

// web worker is basically a saperate javascript thread that allows you to execute multiple thread of javasvript parallely to each other.
// web workers work in background.

// main difference between main thread and  web Worker thread.
// web worker can't perform any DOM manipuation.
// it can't access the DOM directly.
// only main thread can access and manipulate it.

// postMessage : used for sent a message
// parameter message.
// sent as event.

// onmessge : for recieving message
// received as event.


// when we create a worker object , the worker object become global object for that script.
// where in the main script global object is window.
const Worker = new Worker('File_Name');
// file name for worker script.

// here the argument is event.
self.onmessage = function(message){
    console.log(message);
}


Worker.postMessage("Hello , worker");