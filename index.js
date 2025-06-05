// ------------------------------ index.js file in react folder structure ------------------------------
// ------------------------------ main.js file in react folder structure ------------------------------

var React = require('react');
// to use HTML tags


var ReactDom = require('react-dom');
// for DOM manupulation


// render method in react-dom
// basically mean show.
ReactDom.render(
    ' what to display ',
    ' where to display ',
    ' Callback function '
);

ReactDom.render(
    <h1> Hello react </h1>,
    document.getElementById('root')
);


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

// what is React.StrictMode

// <React.StrictMode> is a development tool in React that helps identify potential problems in your app. It does not affect production builds but enables extra checks and warnings in development. 

// What Happens in Strict Mode?
// 1️⃣ It Renders Components Twice (in Dev Mode)
// This helps detect impure functions or unwanted side effects.
// Only applies in development, not in production.

// 2️⃣ Detects Unsafe Lifecycles (Class Components)
// Warns about deprecated lifecycle methods like:
// componentWillMount
// componentWillReceiveProps
// componentWillUpdate

// 3️⃣ Warns About Using Legacy APIs
// Prevents usage of outdated features like:
// String ref (ref="myRef")
// The findDOMNode() method

// 4️⃣ Runs useEffect Cleanup Functions More Aggressively
// Helps find issues with side effects.