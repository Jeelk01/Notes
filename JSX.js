// -------------------------- JSX : JavaScriptXML --------------------------

// It allows writing HTML in JavaScript and converts the HTML tags into React elements.
// we can write JavaScript and HTML combine in a function.
// it allows us the put javascript logic and variables in side the UI.
// Component in React return JSX.
// It allows you to write HTML element in JavaScript and place hem in the DOM without any createElement() and appendChild() method.
// At end it is complied to Javascript equivalent code.


function App(){
    const name = <h1> Jeel Kalathiya </h1>;
    return (
        <div>
            {name}
            {name}
            {name}
        </div>
    );
}



// Following both works equivalently.
<h1> Hey , This is Jeel Kalathiya.</h1>;

React.createElement("h1",'Null',"Hey , This is Jeel Kalathiya.");

function App() {
    return React.createElement('h1',null,'Hey my name is Jeel.');
}

// ----- React.createElement -----
React.createElement( " <Element " , " <props> " , " <Value> ");

// Props in React is similar to attributes in HTML.
