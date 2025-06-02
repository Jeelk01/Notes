// ------------------------------------------------- Architecture -------------------------------------------------

// 
// ┌──────────────────────────────┐
// │          Your Code           │
// └──────────────▼───────────────┘
//                │
// ┌──────────────────────────────┐
// │         Main Thread          │  ← Runs JS and the event Loop
// └──────────────▼───────────────┘
// ┌──────────────────────────────┐
// │          Event Loop          │
// └──────────────▼───────────────┘
// ┌──────────────────────────────┐
// │   Blocking and Non-Blocking  │
// └──────────────▼───────────────┘
//                │
//          -------------
//          │           │
//         Yes         No
// ┌─────────────┐   Continue JS code
// │ Thread Pool │   (no waiting)
// └──────▼──────┘
// ┌─────────────┐   
// │    Worker   │   ← Background thread (e.g., file read)
// └──────▼──────┘
// ┌─────────────┐   
// │  Completed  │   → Sent back to Event Loop to finish
// └──────▼──────┘

     
// Event Loop
//         ┌──────────0────────────────┐
//      ┌─>│           timers          │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      │  │   pending callbacks I/O   │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      │  │       idle, prepare       │
//      │  └─────────────┬─────────────┘      ┌───────────────┐
//      │  ┌─────────────┴─────────────┐      │   incoming:   │
//      │  │           poll            │<─────┤  connections, │
//      │  └─────────────┬─────────────┘      │   data, etc.  │
//      │  ┌─────────────┴─────────────┐      └───────────────┘
//      │  │           check           │
//      │  └─────────────┬─────────────┘
//      │  ┌─────────────┴─────────────┐
//      └──┤      close callbacks      │
//         └───────────────────────────┘




// 1. Main Thread
// Purpose: Start code, manage basic logic.
// Limitation: If you run slow/blocking code here, everything stops.

// 2. Event Loop
// Think of this as a traffic controller.
// It checks for tasks that are ready to run and executes them one by one in the main thread.
// Purpose: Keeps things moving without waiting.
// Limitation: If the loop gets stuck, everything gets delayed.

// 3. Queues
// These are waiting areas for different types of tasks:
// Timers Queue     → for setTimeout, setInterval
// I/O Queue        → for file/database/network responses
// Microtasks Queue → for promises and process.nextTick()
// Callback Queue   → where completed async tasks wait to run
// Purpose: Organize tasks in the right order.
// Limitation: Some queues (like microtasks) can starve others if misused.

// 4. Libuv (C++ Library)
// A helper tool that works behind the scenes.
// It sends heavy tasks (like file I/O or DNS lookups) to system threads and notifies Node.js when they are done.
// Purpose: Let slow tasks run in the background.
// Limitation: Only a few threads are available (default is 4), so tasks might wait.

// 5. Worker Threads
// These are real system threads used to do heavy work (like compression, crypto, etc.) outside the main thread.
// Purpose: Keep the main thread free by doing heavy lifting elsewhere.
// Limitation: Limited number; can get backed up.

// 6. Your Code (JavaScript)
// Your code runs inside this architecture.
// You use built-in Node.js modules to do things like serve web pages, talk to databases, or read files — all using async patterns.
// Purpose: Build apps without worrying about low-level stuff.
// Risk: Writing slow code or deeply nested callbacks can still hurt performance.

