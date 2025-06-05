// -------------------- Event Handling --------------------

//  Mouse Events
// - onClick          : Fired when the mouse button is clicked and released on an element.
// - onDoubleClick       : Fired when the mouse button is clicked twice in quick succession.
// - onMouseDown      : Fired when the mouse button is pressed down on an element.
// - onMouseUp        : Fired when the mouse button is released over an element.
// - onMouseOver      : Fired when the mouse pointer enters the element.
// - onMouseOut       : Fired when the mouse pointer leaves the element.
// - onMouseMove      : Fired when the mouse pointer moves over an element.
// - onMouseEnter     : Mouse enter the element.
// - onMouseLeave     : Mouse moves out  of an element.

// Drag Event
// - onDrag	        : Element is being dragged
// - onDragStart	: Drag starts
// - onDragEnd	    : Drag ends
// - onDragOver	    : Dragging over a valid drop target
// - onDrop	        : Element is dropped on a valid drop target

//  Keyboard Events
// - onKeyDown      : Fired when a key is pressed down.
// - onKeyPress     : Fired when a key that produces a character value is pressed down. (Note: This is deprecated and `keydown` or `keyup` is preferred.)
// - onKeyUp        : Fired when a key is released.

//  Form Events
// - submit         : Fired when a form is submitted.
// - change         : Fired when the value of an input, select, or textarea element changes.
// - focus          : Fired when an element gains focus.
// - blur           : Fired when an element loses focus.
// - input          : Fired when the value of an input element is changed, which is useful for live updates.

//  Window Events
// - load           : Fired when the whole page (including all dependent resources like images and stylesheets) has been loaded.
// - resize         : Fired when the window is resized.
// - scroll         : Fired when the window or an element is scrolled.
// - unload         : Fired when the document or an element is unloaded. (Note: The `unload` event is deprecated in favor of `beforeunload`.)

//  Touch Events ( Mobile event  )
// - touchstart     : Fired when a touch point is placed on the touch surface.
// - touchmove      : Fired when a touch point is moved along the touch surface.
// - touchend       : Fired when a touch point is removed from the touch surface.
// - touchcancel    : Fired when a touch event is disrupted by something like an incoming call or losing focus.

//  Clipboard Events
// - onCopy         : User copies the content.
// - onCut          : User Cuts the content.
// - onPaste        : User Pastes the content.  

//  Focus Events
// - onFocus        : Element gets focus
// - onBlur         : Element Loses focus 

// Wheel event
// - onWheel        : User scolls Up/Down    


// it is reommanded to use event handler like this.

// onclick = { () => handlefunction(argu) };    // pass the refence like this instead of immediate invocation
// if we dericetly pass the argumeent like below then it will executed at time of reandering that is not convenient.
// onclick = { handlefunction(argu) }