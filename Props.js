// ------------------------- Props -------------------------

// props , Short form of 'Properties'.
// Mechanism through which data is passed from the one component to another component.
// Specially from parent to the child.
// for data transfer    

// Key Characteristics of Props
// Read-Only                : Props cannot be modified by the component that receives them. They are immutable within the child component.
// Unidirectional Data Flow : Props facilitate the flow of data in one direction, from parent to child components, maintaining a clear and predictable structure.
// Custom Attributes        : Props can be any valid JavaScript data type, including strings, numbers, objects, functions, and even other components.


// Simplest meaning
// if there is variable in our component that chage with the passeed value that is props.

// props are read ony when ever you want to change it you need to pass different props from it's parent.

// proptypes
// prop.proptype =  {
//     title : PropTypes.string,
//     check : PropTypes.bool,
//     Likes : PropTypes.number
// }

// default props
// prop.defaultprop = {
//         title : 'Set title here',
//         check : true,
//         Likes : 100000    
// }

// for required
// prop.proptype =  {
//     title : PropTypes.string.isrequired,
//     check : PropTypes.bool.isrequired,
//     Likes : PropTypes.number.isrequired
// }

// Passing PROPS as children
// let suppose i have created one component called card
// in index.js file
// <Card>
// .
// .
// .
// .
// </Card>
// contente written between this is consider as props children

// const Card = (props) => {
//  {props.children}   // for all the children : that can be rither text , HTML element , nested element
// }

// ------------------------------------------------------------------------------------------------------
//  Different Component With props

// 1.   Counter
// 2.   Youtube Video label

// 1. Counter
// Counter component with props of team name
// {
    // Counter.jsx
    // {
        // import { useState } from 'react';
        // import React from 'react';
        // import './Counter.css';
        // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        // import {faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';

        // function Counter(props){
            
        //     let [counter , setCounter] = useState(0);
        //     let Increment = () => {
        //         setCounter(counter + 10);
        //     }
        //     let Decrement = () => {
        //         setCounter(counter - 10);
        //     }

        //     return (
        //         <div className="Counter">
        //             <div className='card'>
        //                 <div class="Count">{counter}</div>
        //                 <div>
        //                 <button className="btn" onClick={Increment}>
        //                 <FontAwesomeIcon icon={faPlus} size='2xl' style={{color: "#000000",}} />
        //                 </button>
                        
        //                 <button className="btn" onClick={Decrement}>
        //                 <FontAwesomeIcon icon={faMinus} size='2xl' style={{color: "#000000",}} />
        //                 </button>
        //                 </div>
        //                 <div className="name">Team</div>
        //                 <div className="name">{props.name}</div>
                        
        //             </div>
        //         </div>
        //     );
        // }

        // export default Counter;
    // }

    // Counter.css
    // {
        // .Counter {
        //     text-align: center
        //   }
          
        //   .btn{
        //     width : 70px;
        //     height: 70px;
        //     border: 1px solid transparent;
        //     border-radius: 3em;
        //     margin: 20px;
        //     background: white;
        //   }
          
        //   .btn:hover{
        //     background-color: rgb(107, 107, 107);
        //   }
          
        //   .Count{
        //     max-width: 100px;
        //     height: 70px;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     margin: auto;
        //     border: 1px solid transparent;
        //     border-radius: 20px;
        //     box-sizing: border-box;
        //     color: white;
        //     font-size: 30px;
        //     background: transparent;
        //     background: rgb(53, 53, 53);
        //   }
          
        //   .card{
        //     display: block;
        //     justify-content: center;
        //     align-items: center;
        //     flex-wrap: wrap;
        //     margin: 50px;
        //     background: rgba(255, 255, 255, 0.21);
        //     border: 1px solid rgba(255, 255, 255, 0.21);
        //     border-radius: 20px;
        //     box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
        //     backdrop-filter: blur(3px);
        //     -webkit-backdrop-filter: blur(3px);
        //     padding: 20px;
        //     color: aliceblue;
          
        //   }
          
        //   .card:hover{
        //     box-shadow: 0px 0px 10px 0px;
        //   }
          
        //   .name{
        //     color: white;
        //     font-size: 40px;
        //     font-weight: 700;
        //     background: transparent;
        //     max-width: 260px;
        //     max-height: 55px;
        //     overflow: scroll;
        //   }
          
        //   ::-webkit-scrollbar{
        //     display: none;
        //   }
    // }
// }


