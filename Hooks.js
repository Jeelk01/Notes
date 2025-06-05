// ------------------------- State -------------------------

// "state" refers to a special object used to store data or information about the component that can change over time.
// Key Points about State in React

// State is dynamic         : It can change over time, and when it changes, React will re-render the component to update the UI with the new state.
// Local to the component   : Each component can have its own state, which is not accessible to other components unless passed as props.
// Updating state           : In functional components, you use the useState hook to declare and update state. In class components, you use this.setState() to update the state.
// Triggers re-render       : Whenever state is updated, React automatically re-renders the component to reflect the new data in the UI.

// ------------------------------ useState ------------------------------

// use to add / update state in the components.
// it's a hook that return a state variable and a function to update that state.
// mostly used for local state management (Inside Component) .

// const [state, setState] = useState(initialValue);
// state variable can be : array, object, variable any dataType 
// setState is a function to update the state variable.

// Important note
// State persistence    : The state persists across renders, meaning it retains the value between renders.
// Asynchronous updates : State updates may not happen immediately, especially when chaining multiple updates, as React batches updates for performance.

// Functional Updates   : If the new state depends on the previous state, you can pass a function to setState instead of a value.
// setCount(prevCount => prevCount + 1);

// Lifting State
// props are transfer from parent to children.
// to transfer data from child to parent.
// if one parent multiple chilldren their state is changing in sync then it use the concept of state lifting.

// ------------------------------ useEffect ------------------------------

// used to handle the side effects of components
// such as data fetching, connecting to DB , DOM manipulation .... as DOM content is loaded
// after completing on event you want to show some side effect 
// LocalStorage/sessionStorage interactions
// Setting up and cleaning up intervals/timers
// Equivalent to the Component lifecycle method in class based component

// Features
// it runs after component is rendered.
// Can runs only once --> If the dependency array is empty , it runs only on mount. : variation : 2
// and can re runs also when dependency change. : Variation : 3
// it runs on every render if no dependecy array : variation 1

// syntax
// useEffect(() => {
// Side effect code will be written here
//     return () => {
//     // clean up code 
//     }
// }, []); // dependency array.

// Effect function      : The function that contains your side effect logic.
// Cleanup function     : (Optional) A function returned from the effect function that is called during the cleanup phase.
// Dependencies array   : An array of values that determines when the effect should re-run. 
//                        If this array is empty ([]), the effect will only run on the initial render.

// runs after updation but before render
// useEffect(() => {...}, [])	      Runs once (on mount).
// useEffect(() => {...}, [count])	Runs on mount + whenever count changes.
// useEffect(() => {...})	          Runs on every render (not recommended - Degrade Performance).
// useEffect(() => {...}, [a, b])	  Runs on mount + when a or b changes. ( Multiple Possible )

// Variation : 1
// useEffect runs on every render
useEffect(() => {
  alert("I will run on every render....");
})

// Variation : 2
// useEffect runs only at first render.
// Dependency list is empty.
useEffect(() => {
  alert("The first render....");
}, []);
// When to use --> when fetchinf data from API
// Subscribing event listeners
// setting up times and intervals

// Variation : 3
// useEffect runs only when dependency array component rendered.
useEffect(() => {
  alert("I wiil rerender when dependency array component rerendered.");
}, [one]);
// When to use --> Stats update
// fetching data based on user interaction
// updating UI

// Variation : 4
// useEffect runs when any of dependency component get rerendered.
useEffect(() => {
  alert("I wiil rerender when dependency aarray component rerendered.");
}, [one, two, three, ...components]);

// Variation : 5
// useEffect with cleanUp code
// when component is unmounted.
useEffect(() => {
  alert("Component mounted");

  return () => {
    alert("Component unmounted,,,,");
  }
}, [third])
// When to use --> Prevent memmory leaks
// CleanUp event Listners, WebSockets, timer
// Closing connectiion when component is unmounted.


// ------------------------- Best Practices -------------------------
// write useEffect at top of your function --> Component
// use Dependency Array wisely to avoid unnecessary re-renders. --> To resolve performance issue --> to prevent slowing down application
// Don't use  "async" directly in useEffect --> instead of writing in internal function.
// Always clean up event to pprevent memory leaks.


// Best Practices
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://api.example.com/data");
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//
//   fetchData(); // Calling the async function inside useEffect
// }, []);
//

// Bad practice
// useEffect(async () => {
// const response = await fetch("https://api.example.com/data");
// const result = await response.json();
// console.log(result);
// }, []); // ❌ Causes React warnings

// useful with callbacks and setinterval and set timeout --. don't forget to clear them to avoid memory leaks.



// ------------------------------ useContext ------------------------------
// The useContext hook is used for state management and prop drilling prevention in React.
// useContext hook or useContext API

// ------------------------------------------------------------------------
// What is Prop Drilling ?
// Prop Drilling is when props are passed through multiple levels of components, even if only a deeply nested component needs the data.
// Prop Drilling = Passing props deeply down the component tree.
// It allows functional components to access global state without manually passing props down through every component in the tree.
// ------------------------------------------------------------------------
//                                   -------------------------
//              ---------------------|         Parent        |----------------------
//              |                    -------------------------                     |
//              |                                |                                 |
// -------------------------         -------------------------         -------------------------
// |         Child1        |         |         Child2        |         |         Child3        |
// -------------------------         -------------------------         -------------------------
//              |                                |                                 |
//              |                                |                                 |
// -------------------------         -------------------------         -------------------------
// |         Child4        |         |         Child5        |         |         Child6        |
// -------------------------         -------------------------         -------------------------
//                                               |
//                                               |
//                                   -------------------------
//                                   |         Child7        |
//                                   -------------------------
// ------------------------------------------------------------------------

// const App = () => {
//   const user = { name: "John Doe", age: 25 };
//   return <Parent user={user} />;
// };

// const Parent = ({ user }) => {
//   return <Child user={user} />; // Passes props down
// };

// const Child = ({ user }) => {
//   return <h1>Welcome, {user.name}!</h1>; // Finally uses the prop
// };


// 🚨 Issue: With Prop drilling
// Unnecessary prop passing: Parent doesn’t need user, but still must pass it to Child.
// Harder to maintain: If the structure changes, all components must be updated.
// Scalability problem: In large applications, prop drilling clutters the code.

// If at nth component child is using prop
// but mediator don't then if value of prop change then every mediator component also re-rendered unnecessarily --> it slows the performance


// There are multiple solutinons to prevent Prop Drilling
// 1. useContext Hook - ( Best for Global State ) --> ( Auth, Theme, Language )
// 2. useReducer Hook - ( For complex state management )
// 3. State Management Library ( Redux, Zustand, Recoil ) --> (Best for large scale Appliactions)

// When to use PropDrilling
// at max 2-3 levels is considerable

// ------------------------------------------------------------------------
// 🎯 Common Use Cases of useContext
// 1️⃣ Theme Management (Light/Dark Mode)
// 2️⃣ Authentication (User Login State)
// 3️⃣ Language Switching (Multi-language Support)
// 4️⃣ Global State (instead of Redux for small apps)
// 5️⃣ UI State Management (Sidebar Open/Close, Modals, etc.)
// ------------------------------------------------------------------------
// How to use Context
// 1. Create Context --> React.createContext()
// 2. Wrap component with "Provider" --> Provide data at a higher level.
// 3. Consume Coontext using "useContext" --> Access data in any component without prop drilling.
// ------------------------------------------------------------------------
// Provider And Consumer
// provider : Who provide data ( global state)
// Consumer : Who uses that data --> consuming the content
// ------------------------------------------------------------------------

// Best Practises
// Use context for truly Global state only --> Example: Theme, User Auth, Language, Modals.
// Keep Contexts Small & Focused --> Use separate contexts for different data (e.g., AuthContext, ThemeContext, CartContext).
// Use separate contexts for different data (e.g., AuthContext, ThemeContext, CartContext). || ❌ Avoid a single "Mega Context" holding all app data.
// Use a Custom Hook for Context Access --> Improves reusability & maintainability.
// Wrap Contexts Near the Root of Your App --> Usually inside index.js or App.js. --> Avoid nesting providers deeply, as it makes debugging harder.
// Avoid Re-Renders with Memoization (useMemo) --> If context values change frequently, wrap them with useMemo to prevent unnecessary re-renders.



// ------------------------------ useRef ------------------------------

// normal variable re initialize with re render
// but with useRef it persists the value

// Feature	                   |   useState	                                          |  useRef
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// Triggers Re-render?	       |   Yes - When Updated                                 | No (updates persist without re-rendering)
// Used For?	                 |   Managing UI state (e.g., form inputs, counters)	  | Storing references (DOM elements, previous values, mutable variables)
// Best Use Case	             |   When the value should update UI on change	        | When value should persist across renders but not trigger UI updates
// How to Update?	             |   setState(newValue)	                                | ref.current = newValue
// Value Stored In?	           |   React State (tracked for re-renders)	              | .current property (mutable, not tracked)

// useRef is a React Hook that allows you to persist values across renders without causing a re-render.

// Why...?
// React re-renders a component when state or props change. But sometimes,


// you need to:
// Access DOM elements directly.
// Persist values across renders without causing a re-render.
// Store previous values for performance optimizations.
// Prevent unnecessary re-executions of functions (e.g., debounce, interval tracking).
// Without useRef : Every re-render would reset the value.
// With useRef    : The value is preserved across renders without triggering re-renders.

// Alternative for useRef
//                  :   UseCase                                 :   Limitation
// useState         :   Store data That trigger UI updates      :   Causes re-renders
// useMemo          :   Cache computed values                   :   Doesn't persis value across re-renders
// useCallback      :   Cache functions to prevent re-creation  :   Doesn't persist arbitrary values

// but if you don't want re-renders --> useRef is best choice


// useRef
// The useRef() hook in React returns a mutable object with a .current property. This property can hold any value and persists across renders without causing re-renders.

// const myRef = useRef(initialValue);

// {
//   current: initialValue
// }

// useRef.current can store any type of value
// it can have null value also ( is not set )



// Without useRef -------------------------------------------------------------------------------------------------------------
// on Every render value of val is initialized with 0


// import React from 'react'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0);

//   let val = 0;

//   useEffect(() => {
//   val = val + 1;
//   console.log("Re-render encountered",val);
//   });
//   const increse = () =>{
//     setcount((prev) => (prev + 10));
//   } 
//   return (
//     <>
//       <button className='p-2 m-2 border rounded border-red-600 text-red-500' onClick={increse}>
//         {count}
//       </button>
//     </>
//   )
// }

// export default App

// withUSeRef -------------------------------------------------------------------------------------------------------------
// it prevert

// import React from 'react'
// import { useState, useEffect, useRef } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0);

//   let val = useRef(0);

//   useEffect(() => {
//   val.current = val.current + 1;
//   console.log("Re-render encountered",val.current);
//   });
//   const increse = () =>{
//     setcount((prev) => (prev + 10));
//   }
//   return (
//     <>
//       <button className='p-2 m-2 border rounded border-red-600 text-red-500' onClick={increse}>
//         {count}
//       </button>
//     </>
//   )
// }

// export default App

// Important
// myRef.current can change without triggering a re-render.
// The component still re-renders if:         // A useState variable changes.
// A new prop is received.
// A parent component re-renders.


// Main useCase fo useRef is Manipultion with DOM
// for that we need to create a DOM reference

// for that in element ( component ) set props ref={}


// eg. <input type="text" ref={reference}>
// i want that is i click on pericular thing than other things style or DOM changed without causing re-renders then this is used


// if i change the count color must me changed of other div
// import React, { useRef, useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);
//   let btnRef = useRef(null);

//   const increse = () => {
//     let currentBgColor = window.getComputedStyle(btnRef.current).backgroundColor;

//     if (currentBgColor === "rgb(0, 0, 255)") { // Blue
//       btnRef.current.style.backgroundColor = "red";
//     } else {
//       btnRef.current.style.backgroundColor = "blue";
//     }

//     setcount((prev) => prev + 10);
//   };

//   return (
//     <>
//       <button
//         className="p-2 m-2 border rounded border-red-600 text-red-500"
//         onClick={increse}
//       >
//         {count}
//       </button>
//       <div className="p-2 m-2 border-2 w-fit text-white" ref={btnRef} style={{ backgroundColor: "blue" }}>
//         I'm a Reference
//       </div>
//     </>
//   );
// };

// export default App;


// ------------------------------ useMemo ------------------------------

// Memoization : a programming technique that speeds up programs by caching the results of function calls
// How Memoization Works
// How it works 
// When a function is called with certain inputs, the program checks if the result is already cached.
// If the result is cached, the program returns it instead of recomputing it.
// If the result is not cached, the program computes it and caches the result.

// if problem comes then first check if problem is already solve 
// if already solved use it rather than resovle.
// if not than solve and store for future use.
// some type of related to dynamic programming  
// ---------------------------------------------------------------------

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// it helps to avoid unnecessary recalculation and improves performance.

// What..?
// useMemo is a React Hook that memoizes a computed value and prevents expensive recalculations on every render.

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useMemo takes two arguments:
// A function that returns the computed value.
// A dependency array ([a, b]).

// Returns a memoized value that only recalculates if the dependencies change.

// ------------------------------ useReducer ------------------------------ 

// useReducer is a React Hook used for state management in functional components. It is an alternative to useState, especially when dealing with complex state logic.

// When to Use useReducer?
// --------------------------------------------------
// Use useReducer instead of useState when:

// The state has multiple sub-values (objects, nested state).
// The next state depends on the previous state.
// The state changes through multiple actions.
// You want better state organization in a scalable way.




// Syntax
const [state, dispatch] = useReducer(reducerFunction, initialState);

// reducerFunction → A function that handles state updates based on an action.
// initialState → The default value for the state.
// state → The current state of the component.
// dispatch(action) → A function used to send actions to update the state.

// Initial State{
//      count: 0,
// }

Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state
  }
}

// When we want to change then dispatch is  used 
// onclick = () => {type: "<action.type>" , payload: ? }

// type in action must be consistent 
// payload may be optional

// for accessing the states
// state.counter
// state.todos

// best Practises 
// 1. Define initial State saperately : ---> it keeps code clean and maintanable
//          const initialState = { count: 0 };
//          const [state, dispatch] = useReducer(reducer, initialState);
//          🔴 Avoid : const [state, dispatch] = useReducer(reducer, { count: 0 }); // Hardcoding state

// 2. Use a Constant for Action Types
//          const INCREMENT = "INCREMENT";
//          const DECREMENT = "DECREMENT";
//          const RESET = "RESET";
//          dispatch({ type: INCREMENT }); // ✅ Correct
//          dispatch({ type: "increment" }); // 🔴 Error-prone (case-sensitive)

// 3. Keep Reducer Functions Pure : no side effects ,no async code
// 4. Use useReducer for Complex State, Not Simple State
// 5. always Use default Case in Reducer


// useReducer vs useState - When to Use What?
// ---------------------------------------------------------------------------------------------------------------------------------
// Feature	                                     ||  📌      useState                  ||    📌       useReducer
// ---------------------------------------------------------------------------------------------------------------------------------
// Simple state	                                 ||  ✅ Best Choice	                  ||    ❌ Overkill
// Complex state	                               ||  ❌ Hard to manage	                ||    ✅ Better organization
// Multiple updates depend on the previous state ||  ❌ Can cause stale updates	      ||    ✅ Prevents bugs
// State logic reuse	                           ||  ❌ Not reusable	                  ||    ✅ Reducer functions can be reused

// using useReducer
// Implemeted T0do

import { useReducer, useState } from "react";
import { FaTrash, FaTimes, FaCheck } from "react-icons/fa";

const ACTIONS = {
  ADDTODO: "add_todo",
  REMOVETODO: "remove_todo",
  DONETODO: "done_todo",
  UNDOTODO: "undone_todo"
};

const initialTodos = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, status: false },
        ],
      };

    case ACTIONS.REMOVETODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case ACTIONS.DONETODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: true } : todo
        ),
      };

    case ACTIONS.UNDOTODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: false } : todo
        ),
      };

    default:
      return state;
  }
};

const App = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="m-2 p-2 border rounded bg-black box-border">
      <div className="flex w-full justify-between box-border mb-5">
        <input
          type="text"
          placeholder="Enter task..."
          className="w-5/8 border rounded text-lg font-mono text-white px-2 py-1"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="w-fit border rounded bg-orange-600 font-bold text-white px-5"
          onClick={() => {
            if (newTask.trim() !== "") {
              dispatch({ type: ACTIONS.ADDTODO, payload: newTask });
              setNewTask("");
            }
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="w-full flex flex-col border text-white border-white my-2">
        {todoState.todos.map((todo) => (
          !todo.status && (<div
            key={todo.id}
            className="flex my-1 items-center justify-between p-2 border-b border-gray-500"
          >
            <p className={todo.status ? "line-through text-gray-500" : ""}>
              {todo.text}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DONETODO, payload: todo.id })
                }
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                <FaCheck />
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVETODO, payload: todo.id })
                }
                className="px-2 py-1 bg-red-600 text-white rounded"
              >
                <FaTrash />
              </button>
            </div>
          </div>)
        ))}
      </div>

      <div className="w-full flex flex-col border text-white border-white my-2">
        {todoState.todos.map((todo) => (
          todo.status && (<div
            key={todo.id}
            className="flex my-1 items-center justify-between p-2 border-b border-gray-500"
          >
            <p className="line-through text-gray-500">
              {todo.text}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.UNDOTODO, payload: todo.id })
                }
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                <FaTimes />
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVETODO, payload: todo.id })
                }
                className="px-2 py-1 bg-red-600 text-white rounded"
              >
                <FaTrash />
              </button>
            </div>
          </div>)
        ))}
      </div>


    </div>
  );
};

export default App;
