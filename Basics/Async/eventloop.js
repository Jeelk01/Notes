
// What is the Event Loop?

// The Event Loop is a core mechanism in Node.js that enables non-blocking, asynchronous I/O, despite Node.js being single-threaded.

// It continuously checks for and processes:

//  Timers
//  I/O events
//  Callbacks
//  etc.

// It ensures that JavaScript can handle many tasks concurrently without blocking the main thread.

// How It Works
// The event loop runs in phases, and each phase has a specific purpose and its own queue. Tasks move through the phases in a loop:


//          ┌────────────────────────────┐
//   ┌─────>│           Timers           │
//   │      └─────────────┬──────────────┘
//   │      ┌─────────────┴──────────────┐
//   │      │      Pending Callbacks     │
//   │      └─────────────┬──────────────┘
//   │      ┌─────────────┴──────────────┐
//   │      │       Idle, Prepare        │
//   │      └─────────────┬──────────────┘
//   │      ┌─────────────┴──────────────┐
//   │      │           Poll             │ <─ handles most I/O
//   │      └─────────────┬──────────────┘
//   │      ┌─────────────┴──────────────┐
//   │      │           Check            │ <─ setImmediate()
//   │      └─────────────┬──────────────┘
//   └─────┤      Close Callbacks        │
//          └────────────────────────────┘




//  Phases Explained

//  1. Timers
//  Executes callbacks from `setTimeout()` and `setInterval()`.
//  Timers are not guaranteed to run exactly after their delay—execution is queued when the time is up.

//  2. Pending Callbacks
//  Executes I/O-related callbacks that were deferred to the next loop iteration (e.g., some socket errors, DNS lookups).

//  3. Idle, Prepare
//  Internal only—used by Node.js to set up and prepare for the next poll phase.

//  4. Poll
//  The core of the event loop.
//  Retrieves new I/O events, executes I/O-related callbacks (e.g., `fs.readFile()`), and waits for incoming connections/data.

//  5. Check
//  Executes `setImmediate()` callbacks.

//  6. Close Callbacks
//  Handles cleanup for things like `socket.on('close', ...)` or when `process.exit()` is triggered.

//  Important Notes
//  Each phase has its own queue of callbacks.
//  Microtasks (`process.nextTick`, `Promise.then`) run between phases, not as part of them.
//  The event loop does not block unless you write synchronous code.