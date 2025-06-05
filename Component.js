// ------------------------------ Component ------------------------------

// Components are building blocks of any react application.
// Components are javascript Functoins that retrun encoded HTML (JSX) or Sort of UI and name must Start with Capital Letter.
// for understanding component is just like a function.
// Better for reusability for code. 
// It is recommended to use .jsx extension for making component instead of .js extension for differentiate between Javascript file and component file
// for understanding purpose you can treat components as function....
// Components is nothing just a section of your UI that is reusable.
// Modularity : Breakdown UI into smaller components makes the code easier to understand , debug and maintain
// Helps to create dynamic interface more easier

// This is Javascript Function.
const GetName = () =>{
    return Jeel;
}

// this is React Component
const NameComponent = () => {
    return <>
    <h1>Jeel</h1>
    </>
}

// There are two ways to create components
// 1. Class Component
// 2. Functional Component
// mostly we are going to use only functional component


// Functional Component
// A functional component in React is a simple JavaScript function that returns JSX (JavaScript XML), which describes what the UI should look like.

// Originally functional component called as Stateless as they could not manage state or life cycle events.
// but introduction of hook chage them to stateful , can manage lifecycle and state.


// ------------------------------ Component lifecycle ------------------------------
// it refers to the series of event or phases that a react component goes through during it's existance.
// from it's creation to updates and finally removal from the DOM.

// lifecycle of the react component can be devided into three major parts
// 1. mounting      : when component is created and inserted to the DOM.
// 2. Updating      : when the component is re-rendered due to changes in state or props
// 3. Unmounting    : when the component is removed from the DOM.



// -------------------- 1. Class Components --------------------
// Class components made by extend the Component class from React
// State management using : this.state
// life cycle Methods : constructor, getDerivedStateFromProps, render, componentDidMount, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate, componentWillUnmount, componentDidCatch
// Fine gained Control over Component life cycle.


// Constructor
// initialize the state and bind the methods.
// create an instance of the component.
// Euted first in lifecycle, before mounting

// getDerivedStateFromProps ( props, state)
// sync state with props before rendering
// returns an object on update and null on nothing
// called during mounting and updating.

// render()
// Describe what to render on the UI
// Retrun JSX or null
// Called during both mounting and updating, after getDeriveredStateFromProps()

// componentDidMount()
// Used to perform side effects like API calls or subscriptions
// return nothing
// Called after component is mounted and rendered.

// shouldComponentUpdate( nextProps , nextState)
// used to optimize performance by preventing unnecessary re-renders
// returns a boolean ( update : true , otherwise : false)
// executes before component updates

// getSnapshotBeforeUpdate(prevProps, prevState)
// used to Capture some information from the DOM before updating
// returns A value passed to componentDidUpdate
// Called after render, before the DOM is updated.

// componentDidUpdate(prevProps, prevState, snapshot)
// Perform side effects after the component updates
// returns nothing
// executes afted component have updated

// componentWillUnmount()
// Cleanup before the component is removed.
// returns nothing
// executes before an componet is unmounted.

// componentDidCatch(error , info)
// Catch JavaScript errors in child components
// returns nothing
// executed when error is thrown in a child component.


// -------------------- 2. Functional Components --------------------

// Functional components modern and simpler alternatives to class based components
// they are javascrpt function that accept props and return React Element - JSX.
// Intiallu functional components are stateless unlike classbased components, after introducing react hooks it can handle state and lifecycle logic.


