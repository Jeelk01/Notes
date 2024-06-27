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