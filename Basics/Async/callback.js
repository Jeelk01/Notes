// Callback

// A Callback is a function that is passed as a argument to another functions, to be executed later.

// Often it useful for later work based on result.
// Enable custom actions to be taken after a task completes.
// A callback is not immediately executed, but is called later by the function receiving it.
// Commonly used in event handling, asynchronous code, and array methods like .map(), .filter(), etc.

// Example

function getUser(id, callback) {
     setTimeout(() => {
          if (id === 1) {
               callback(null, { id: 1, name: "Alice" });
          } else {
               callback(new Error("User not found"));
          }
     }, 5000);
}

function greetUser(user) {
     console.log(`Hello, ${user.name}!`);
}

// Usage with callback
getUser(1, (err, user) => {
     if (err) return console.error(err.message);
     greetUser(user);
});

// Best Practices

// Use Error first Callback always
// Avoid Callback Hell --> use  Async/ await and promises

