// -------------------- Browser Event --------------------

// All event is a signal that something has happened.
// All the DOM nodes generate such signals.

// -------------------- Important DOM events --------------------
// Mouse event      :   click , contextmenu(right click),mouseover/mouseout,mousedown,mouseup,mousemove 
// Keyboard Event   :   keydown and keyup
// Form Element event : submit , focus
// Document Event   :   DOM content loaded


// -------------------- Handling Browser Events --------------------
// 
// addEventListener(event , handler);
// removeEventListener(event , handler);


// ------------------------------ Event Object ------------------------------ 

// when an event happens the browser creates an event object , puts details into it and passes it as an argumnent to the handler.

// element.onclick = function(event){
//          .... 
//  }

// event. type : Event type
// event. current target : Element that handloe the event
// event. clientX / clientY : coordinates of the cursor.

// element.onclick = (event) => {
//              console.log(x);    // event object
//      }



// -------------------- Event Bubbling --------------------
// What is Event Bubbling?
// Event bubbling is a mechanism in JavaScript where an event triggered on a child element propagates upwards to its ancestor elements.

// <div id="parent" style="padding: 20px; background: lightgray;">
//  Parent Div
//   <div id="child" style="padding: 10px; background: gray; margin-top: 10px;">
//     Child Div
//   </div>
// </div>
// 
// <script>
//   document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent Div Clicked!");
//   });
// 
//   document.getElementById("child").addEventListener("click", function() {
//     alert("Child Div Clicked!");
//   });
// </script>


// if you click on Child Div, you will see two alerts:
// "Child Div Clicked!" → Because the child was clicked.
// "Parent Div Clicked!" → Because the event bubbles up to the parent.
// If you click on Parent Div, only "Parent Div Clicked!" is shown.


// Preventing Event Bubbling with stopPropagation()

// <div id="parent" style="padding: 20px; background: lightgray;">
//   Parent Div
//   <div id="child" style="padding: 10px; background: gray; margin-top: 10px;">
//     Child Div (Click Me)
//   </div>
// </div>
// 
// <script>
//   document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent Div Clicked!");
//   });
// 
//   document.getElementById("child").addEventListener("click", function(event) {
//     event.stopPropagation(); // Stops event bubbling
//     alert("Child Div Clicked!");
//   });
// </script>

// Now what happens?
// Clicking Child Div → Only "Child Div Clicked!" appears.
// Clicking Parent Div → Only "Parent Div Clicked!" appears.


// -------------------------- Event Capturing (Trick: useCapture = true) --------------------------
// Events are handled top-down instead of bottom-up

// <div id="parent" style="padding: 20px; background: lightgray;">
//   Parent Div
//   <div id="child" style="padding: 10px; background: gray; margin-top: 10px;">
//     Child Div
//   </div>
// </div>
// 
// <script>
//   document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent Div Capturing!");
//   }, true); // Capture phase
// 
//   document.getElementById("child").addEventListener("click", function() {
//     alert("Child Div Clicked!");
//   });
// </script>

// How This Works?
// Clicking on Child Div will first trigger "Parent Div Capturing!" (because of capturing phase).
// Then, "Child Div Clicked!" is triggered.
// This is the opposite of bubbling!
