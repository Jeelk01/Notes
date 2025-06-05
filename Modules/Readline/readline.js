// readline

// readline module is NodeJs provides an interface to read input from readable stream, one line at a time.

// Specially useful for command-line interfaces, interactive prompts or user input based applications.

// Syntax
const readline = require('readline')

// method ans properties

// readline.createInterface(options)
// it creates a new readline interface instance

// it lets you read input line-by-line from readable stream ( stdin ) and write to writable stream ( stdout )


// there are some options to pass

// input                      : Required - readable  Stream -->> process.stdin
// output                     : Not Required - writable Stream -->> process..stdout
// completer                  : Function: Default none | Function used for tab completion
// terminal                   : Boolean : Default True | enables TTY-like interface features (e.g., cursor control, line editing).
// historySize                : number  : Default 30   | Number of lines to keep in the input history for navigating with arrow keys.
// prompt                     : string  : initial prompt display when you call rl.prompt
// crlfDelay                  : number  : Default 100  | Timeout to recognize \r\n as a single line break. Useful for some terminal environments.
// escapeCodeTimeout          : number  : 
// removeHistoryDuplicates    : Boolean : Default False| When true, removes duplicate entries from history.


const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
})

// Methods

// rl.question(query, callback)

// rl.question("What is Your Name : ", (name) => {
//      console.log(`Hello ! ${name}.`);
//      rl.close()
// })

rl.setPrompt('> ');
rl.prompt();

// rl.on(event , callback)

rl.on('line', (input) => {
     console.log(`You typed: ${input}`);
     rl.prompt();
});

rl.on('close', () => {
     console.log("interface Closed GoodBye...");
     
})

// rl.prompt()

// rl.setPrompt(promptText)

// rl.history()

// rl.resume()

// rl.pause()
