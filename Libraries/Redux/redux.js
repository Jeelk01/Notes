// ------------------------------------- Redux --------------------------------------
// Redux is React Library.
// it is a state management library in react.
// It allows components to share and update data without passing props manually (prop drilling).

// Concept
// Think of it as a central storage (Redux store) where all components can read and update data.
// ----------------------------------------------------------------------------------------------------
// 📌 Why Do We Need React Redux?

// Imagine you have a shopping cart app where:
// ✅ The Navbar shows the total items in the cart.
// ✅ The Product List has an "Add to Cart" button.
// ✅ The Cart Page displays the added items.

// ❌ Without Redux (using useState & props)
// The cart state would be managed in the parent component and passed down as props to child components.
// As the app grows, prop drilling becomes messy and hard to manage.

// ✅ With Redux
// The cart state is stored globally in the Redux store.
// Any component (Navbar, ProductList, CartPage) can access and modify it without passing props manually.
// ----------------------------------------------------------------------------------------------------

// Key Concept in React
// ----------------------------------------------------------------------------------------------------
// Store
// Actions
// Reducers
// Dispatch
// Selector

// Single source of truth
// State is read only
// Changes are Made with pure functions

// Redux follows a unidirectional data flow, meaning data moves in a predictable cycle:
// 1️⃣ User interacts with the UI (dispatches an action)
// 2️⃣ Action is sent to the reducer
// 3️⃣ Reducer updates the state
// 4️⃣ Components get the updated state

// Let's break down each concept in detail.

// -----------------------------------------------------------------------------------------------------------
// 1. Store : Store The Global State  Storage
// -----------------------------------------------------------------------------------------------------------
// The Redux store is the centralized storage that holds the entire application's state.

// import { configureStore } from "@reduxjs/toolkit";
// configureStore() - Creates a Redux store

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// Things to Remember about Store
// ✅ There is only one store in a Redux app.
// ✅ The store contains state for the entire application.
// ✅ Components do not modify the store directly—only reducers can change it.
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// -----------------------------------------------------------------------------------------------------------
// 2. Actions : Describe what should happen
// -----------------------------------------------------------------------------------------------------------
// Actions are objects that describe what needs to be done in the application.

// Actions do not change the state directly; they only describe an event.
// Actions must have a type property (e.g., "ADD_TO_CART").
// Actions can also contain payload (data to update state). 

// Standard Structure for Action Object
// {
//     type: "ACTION_TYPE", // Required
//     payload: {}, // Optional: Data needed for the update
//     meta: {}, // Optional: Additional metadata (e.g., timestamp, source)
//     error: false // Optional: Indicates if it's an error action
//   }

// Property	    |    Allowed Values	            |    Purpose
// -----------------------------------------------------------------------------------------------
// error	    |    true or false (Boolean)	|    Marks an action as an error
// payload	    |    Error message/object	    |    Contains error details
// meta	Extra   |    information (optional)	    |    Can store additional data like timestamps

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// Things to Remember about Actions
// ✅ Actions must have a type to describe what they do.
// ✅ Actions can carry extra data (payload) to update the state.
// ✅ Components dispatch actions to trigger state updates.
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// -----------------------------------------------------------------------------------------------------------
// 3. Reducer : Pure function that update states
// -----------------------------------------------------------------------------------------------------------
// A reducer is a pure function that takes the current state and an action, and returns a new state.

// Reducers do not modify state directly; instead, they return a new state.
// Redux follows immutability, so you should never modify state directly.
// Reducers listen to actions and decide how to update the state.

// Reducers should be "pure functions" - No API calls, no modifying external variables.
// Reducers always return a new state - They should not mutate existing state.

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// Things to Remember about Actions
// ✅ Reducers listen to actions and update the state accordingly.
// ✅ Reducers should be pure functions (they don’t cause side effects).
// ✅ Never modify the existing state—always return a new state.
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// -----------------------------------------------------------------------------------------------------------
// 4. Dispatch : Sends an Action to Update state
// -----------------------------------------------------------------------------------------------------------
// dispatch() is a function that sends an action to the Redux store.

// Components use dispatch() to trigger an action.
// The action is processed by the reducer, which updates the state.

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// Things to Remember about Dispatch
// ✅ Dispatch is used inside components to trigger state changes.
// ✅ Dispatch does not return a value—it just tells Redux to update state.
// ✅ Every dispatched action goes through all reducers, but only the relevant one updates the state.
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// -----------------------------------------------------------------------------------------------------------
// 5. Selector : Retrieve State from redux store
// -----------------------------------------------------------------------------------------------------------
// A selector is a function that extracts specific data from the Redux store.

// Selectors are used with useSelector() in React components.
// They allow components to read only the necessary state.
// Complex selectors can be optimized using memoization (reselect).

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// Things to Remember about Selectors
// ✅ Use useSelector() in components to retrieve state.
// ✅ Use memoized selectors for expensive calculations (reselect).
// ✅ Selectors make code more readable and efficient.
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// -----------------------------------------------------------------------------------------------------------

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// React Redux Flow
// React Redux follows a unidirectional data flow, means data flow in single direction, making state management predictable

// High level Flow
// Action --> Dispatch --> Reducer --> Store Update --> React Component Update

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
//               --------------------------------
//               |         UI Component         |
//               --------------------------------
//                               |
//                               | Trigger event
//                           _________
//                           onclick()
//                           _________
//                               |
//                           _________
//                       handlerFunction()
//                           _________
//                               |
//                         Action Dispatch
//                               |
//                   -------------------------              -------------------------------
//                   |      State Store      |-------<-----<| Update State then Update UI |
//                   -------------------------              -------------------------------
//                               |                                      |
//                       -----------------                       _________________         
//                       |    Action     |                       Logic for Reducer 
//                       -----------------                              | 
//                               |                                      ^
//                       -----------------                              |
//                       |    Reducer    | -------->---------->----------
//                       -----------------


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 



// To install redux
// npm install @reduxjs/toolkit react-redux


// -----------------------------------------------------------------------------------------------------------
// Redux is Js Library --> can use in any Javascript Application
// react-redux in react library
// -----------------------------------------------------------------------------------------------------------
// Application must have only one store --> Best Practise --> Single source of truth
// it making state changing predictable --> easier to debug

// Store
// Central place where application state is managed
// -----------------------------------------------------------------------------------------------------------
// configureStore
// It is a utility function from Redux Toolkit 
// it returns store object

// import { configureStore } from './@reduxjs/toolkit'

// const store = configureStore({})
// Configure store accept an object with following keys

// -------------------------------------------------------------
// -------------------------------------------------------------
// reducer --> Defines how the state updates based on actions --> "" Required ""
// Single and multiple reducer function possible

// const store = configureStore({
//     reducer: counterReducer, // Single reducer
//   });

//   const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//       user: userReducer,
//     },
//   });
// -------------------------------------------------------------
// -------------------------------------------------------------
// middleware --> Middleware allows intercepting actions for async logic, logging, etc. --> "" Optional ""
// for async logic
// default - getDefaultMiddleware()
// -------------------------------------------------------------
// -------------------------------------------------------------
// devTools --> type - boolean --> defauls true
// -------------------------------------------------------------
// -------------------------------------------------------------
// preloadedState - type --> PreloadedState<S> --> deafult {}
// initialized store with predifined state
// -------------------------------------------------------------
// -------------------------------------------------------------
// enhancer --> Allows adding custom store enhancers --> type (defaultEnhancers) => StoreEnhancer[] --> default []
// -------------------------------------------------------------
// -------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------
// Slice
// A slice in redux toolkit is a collection of states, reducers and actions that are managed together in a single feature
// it encapsulate state and logic together

// slice is consists of 
// name             : A unique identifier for the slice
// initialtate      : The default state for this slice.
// reducers         : Functions that modify the state.

// const reducers = {
//          actionName: (state, action) => {
//                  // state: Current slice state
//                  // action: Contains type & payload
//          }
//   }

// Structure of the action Parameter
// {
    // type: string;    // Identifies the action
    // payload : any;   // Optional data for the action
// }
// type: A string representing the action type(e.g., "counter/incrementByAmount").
// payload(optional): The data sent with the action.

// createSlice({})
// used to create slices
// ----------------------------------------------------------------------------------------------------------
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
    // name: 'counter', // Unique name for this slice
    // initialState: { value: 0 }, // Initial state
    // reducers: {
        // increment: (state) => { state.value += 1; },
        // decrement: (state) => { state.value -= 1; },
        // incrementByAmount: (state, action) => { state.value += action.payload; },
    // },
// });
// We need to export each reducer function saperatly ( component can use all or some reducers only  )
// We also need to export entire rreducers for use of Store .

// export const { increment, decrement, incrementByAmount } = counterSlice.actions; // Auto-generated actions
// export default counterSlice.reducer; // The reducer to be used in the store
// ----------------------------------------------------------------------------------------------------------
// how to add slice reducer to store
// {
    // import { configureStore } from '@reduxjs/toolkit';
    // import counterReducer from './counterSlice';

    // const store = configureStore({
        // reducer: {
            // counter: counterReducer, // Add slice reducer here
        // },
    // });
// }
// ----------------------------------------------------------------------------------------------------------
// use Actions in Component
// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './counterSlice';

// const Counter = () => {
//     const count = useSelector((state) => state.counter.value);
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h2>Counter: {count}</h2>
//             <button onClick={() => dispatch(increment())}>+</button>
//         </div>
//     );
// };
// ----------------------------------------------------------------------------------------------------------
// useDispatch()
// ----------------------------------------------------------------------------------------------------------
// useDispatch is a hook that provides access to the Redux store’s dispatch method. It allows components to dispatch actions, triggering state changes.
// useDispatch() takes no arguments and returns the dispatch function.
// The returned dispatch function expects an action object or a thunk function.
// ----------------------------------------------------------------------------------------------------------
// useSelecotor()
// ----------------------------------------------------------------------------------------------------------
// useSelector allows functional components to extract state from the Redux store.
// useSelector(selector, equalityFunction?)

// selector (required): A function that receives state and returns the required piece of data.
// equalityFunction (optional): A function that compares previous and new values to prevent unnecessary re-renders.



// --------------------------------------------------------------------------------
// ------------------------------ MiddleWares ----------------------------------------
// --------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Middleware in Redux acts as a bridge between the dispatching of an action and its reduction into the store.
// It allows us to enhance Redux’s capabilities by adding functionalities like logging, async API handling (Thunk/Saga), analytics, etc.
// Any asynchronous action ( APi call ) it should be perform outside the reducers.

// Alternate
// Fetch data inside the component the dispatch actions to change the state
// But this is not an ideal solution
// data fetching logic also encapsulated at same place

// Why...?
// By default, Redux's dispatch function only supports synchronous actions. --> They are pure functions

// MiddleWaree Allows us

// Intercept actions before they reach the reducer
// Modify or log actions
// Handle asynchronous operations (like API calls)
// Cancel or delay actions
// Trigger side effects like analytics, error tracking, etc.

//                                                |~~~~~~~~~~~~~~~~~~~|                                                                                     
//  ---------------          ---------------      |  ---------------  |     ---------------     ---------------     ---------------     --------------- 
// |   Component   | -->    |   Dispatch   |  --> | |   Middleware  | | --> |   Reduce    | --> | UpdateState    | --> |    Store    | --> |    Store    | 
//  ---------------          ---------------      |  ---------------  |     ---------------     ---------------     ---------------     ---------------   
//                                                |~~~~~~~~~~~~~~~~~~~|   

// Middleware is a function that is sits between in dispatching the action and the store.
// This allow us to run the code after dispatching. but before reaching the reducer in the store

// Usually after dispatching the action, it immediatly reaches to the reducer and the state is  updated.
// BUt in middleware, we can do something with the action before that axction gets into the reducer

// What happens between Dispatch & Reducers
// 🔹 What Happens Between Dispatch & Reducer?
// After dispatch(action) is called, middleware has the power to: 1️⃣ Log the action (e.g., Debugging, Monitoring)
// 2️⃣ Modify the action before it reaches the reducer
// 3️⃣ Cancel or delay the action (e.g., Debouncing, Rate-limiting)
// 4️⃣ Perform async operations (e.g., API calls with Thunk, Saga, or RTK Query)
// 5️⃣ Trigger side effects (e.g., Analytics, Error Reporting)

// This is perfect place for asynchronous code
/// API calls, setting timers, Logging into consoles
// Crash reporting --> ( Sentry (popular choice) , LogSocket, FireBase  )
// Pausing and cancelling the action
// Perfect Place for side effects


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// 🔹 Redux Data Flow (Without Middleware)
// 📌 The standard Redux flow looks like this:

// 1️⃣ Dispatch an Action → store.dispatch({ type: "INCREMENT" })
// 2️⃣ Reducer updates the store based on the action
// 3️⃣ React Components get the updated state via useSelector

// This works great for synchronous actions but breaks for async tasks (e.g., fetching data from an API).
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// 🔹 Redux Data Flow (With Middleware)
// Middleware injects itself between dispatching an action and reaching the reducer.

// 1️⃣ Action is dispatched (store.dispatch(action))
// 2️⃣ Middleware intercepts the action
// 3️⃣ Middleware modifies, blocks, or allows the action
// 4️⃣ Action reaches the reducer (if allowed)
// 5️⃣ Reducer updates the store

// 💡 Middleware allows us to add logic before the action reaches the reducer.
// For example, logging actions, handling async operations, or modifying payloads.
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------


// Understanding middleware

// Basic
// Logger Middleware
// Log all information related to our redux application
// eg. we can log the actions and whatever changes are done that we can easily log for debuggin purpose

// npm package of redux


// Basic structure for middleware

// const customMiddleware = (store) => (next) => (action) => {
//     // Middleware logic here
//     return next(action); // Pass action to next middleware or reducer
// };

// 📌 Breakdown:

// Receives the store object (to access dispatch and getState).
// Intercepts action before it reaches the reducer.
// Calls next(action) to pass the action to the next middleware or reducer.
// Can modify, delay, or block actions based on logic.

// Applying Middleware in Redux Store

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(loggerMiddleware, authMiddleware, asyncMiddleware),
// });

// 🎯 Summary
// ✅ Basic middleware structure: (store) => (next) => (action) => {}
// ✅ Use next(action) to forward actions.
// ✅ Can modify, block, or log actions before they reach the reducer.
// ✅ Add middleware inside configureStore().

// with Asynchronous Actions

// Redux Thunk
// Redux Thunk is middleware that allows you to write asynchronous logic inside action creators.
//  It enables dispatching functions (async actions) instead of just plain objects.

// 📌 Why Do We Need Redux Thunk?
// Redux Default Behavior:
// Redux only supports synchronous updates.
// If you try to make an API request inside a reducer, it won't work because reducers must be pure functions (no side effects).
// Solution: Redux Thunk
// Allows dispatching functions (not just objects).
// Handles async operations like fetching data from an API.
// Enables conditional dispatching (e.g., cancel request if data is already in store).

// npm install redux-thunk
