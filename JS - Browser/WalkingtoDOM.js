// -------------------- Walking the DOM ---------------------

// DOM Manipulation'
// Accessing element

// DOM tree refer to the HTML page where all the nodes are objects.
// there can be 3 main nodes.
// 1. Text Nodes
// 2. Element Nodes.
// 3. Comment Nodes.

// In a HTML pagev <html> is at the root 
// <head> and <body> are it's children.

// A text node is always a leaf of tree.
// there is nothing inside the text ( Children ).

// Auto Correction
// if an errorneous HTML is encountered by the browser it tends to correct it.

// document.title = for title of the page.
// document.title --> type is string --> returns a string.

// document.body = return all body
// if javascript or script tag is written above the body tag then document.body return null


// -------------------- Accessing children --------------------
// DOM Collection

// Children
// Directly and deeply nested elements of an element is callled as it's children

// child Nodes
// Elements are direct children

// Descendant Nodes
// All nested elements , chiledrens , their childrens and so one

// firstchild , lastchild , chilednodes

// Element.firstchild --> return first child            // firstchild should be textnode , comment node , elementnode
// Element.lastchild -->  return last child
// Element.childnodes --> all child nodes

// but firstElementChild is always a element.

// childNodes[0] === firstchild
// childNodes[childNodes.length - 1] === lastchild

// it seems like array but not an array but it's a node list. it's a collection we can conver it to array.

// to convert it into array
// let array = Array.from(document.body.childeNodes)


// --------------------------------------- DOM Collection ---------------------------------------

// Properties of DOM Collection
// --> Read Only.
// --> They are live 
// --> They are iterable using For .... of loop

// element mark with $0 is ready for access with $0.
// $1 refer to previously selected. 

// ----------- Siblings and The Parent ----------

// Siblings : Siblings are node that are children of same parent.

// HTML is root
// head and body are sibling of each other.
// <body> is said to be the 'next' or 'right' sibling of <head>
// <Head> is said to be the 'Previous' or 'left' sibling of <body>

// the next sibling is in next sibling property.
// the previous siblings is in previoussibling property.
// The parent is available as parent node.

// .parentNode - for parent node            - anything parent can be displayed.
// .parentElement - for parent element      - parent must be an HTML element

// --------------- Element only navigation ---------------
// Navigation process only done with element no comment nodes no textnodes
// document.element.firstElementChild 
// document.element.nextElementSibling
// document.element.

// --------------- Table Navigation ---------------
// Certain DOM elements may provide additional properties specfic to their type for convenience.
// Table element supports the following properties.
// table.rows       --> collection of table ro elements 
// table.rows.length--> No. of table rows
// table.caption    --> reference to <caption>
// table.thead      --> reference to <thead>
// table.tfoot      --> reference to <tfoot>
// table.tbodies    --> Collection of <tbody> element
// table.rows       --> Collection of <tr> inside
// tr.cells         --> Collection of td and th 


// -------------------- Searching in DOM --------------------
// More method to searching in the dom.

// document.getElementById
// used to get element with a given id 'Attribute'
// document.getElementbById("ID name");
// we can access with this.
// this will give us access of one elememt.

// document.getElementByClassName
// used to get element with a given class name
// there may be multiple element have same class
// for that 
// documnet.getElementbyClassName("Classname")[index]

// document.getElementByTagname()
// to access the element by tag name 
// written in '<tagname>'
// if multiple element avialable with same tag then return an array.  

// Matches
// to check if element matches the given CSS selector.
// element.matches( )
// if we matches by id then "#<idname>"
// if we matches by class name then ".<classname>"

// closest  
// to find the closet to the element
// element.closest()
// if we matches by id then "#<idname>"
// if we matches by class name then ".<classname>"

// contains
// to check that element contains element
// element.contains()
// internal parameter should not access by id or name
// it should be accessed before

// console.log(document.element) : then it print the element and content // it shows the element DOM tree
// console.dir(document.element) : if we access element by console.dir then it will print as an object and we can see all the properties and attributes.

// tagname & nodename
// used to read tag name of an element
// tagname      : only exists for element nodes
// nodename     : depend for any node ( comment , text , element etc,)

// -------------------- Inner & outer HTML --------------------
// innnerHtml and outerHtml

// innerHtml
// allows to get the HTML inside the element as String
// works only for element node (not for comment node and textnode) for other node types we use nodevalue or data

// outerHtml
// contains the full HTML --> innerHtml + the element itself

// by the use of outerHtml we can change or replace the element itself also.


// text cpntent
// for get only text content (another usecase : if we are visinting the other website and want copy only text content we can use this)


// hidden
// for hide and unhide element
// $0.hidden = true     hidden
// $0.hidden = false    open

// -------------------- HTML attributes --------------------
// we can get the HTML attributes by using DOM.

// element.getAttribute("attribute name")
// method used to get the value of an attribute.

// element.setAttribute("Attribute name", "Attribute value");
// method to set attribute and it's value.

// element.hasAttribute("attribute name")
// method to check for existance of an attribute.

// element.removeAttribute("attribute name")
// to remove the attribute from element

// element.attributes
// for al th eattributes
// namednodemap

// -------------------- HTML Insertion methods --------------------

// there are many way to add more HTML
// traditonal way
// element.innerHtml = element.innerHtml + ' <anything you want to add> '; 

// more efficient method
// let x = document.createElement('element name');
// x.innerHtml = ' ';
// element.appendChild(x);

// node.append(e)           : append at end of the node.
// node.prepend(e)          : Insert add beginning of node.
// node.before(e)           : Insert before the node.
// node.after(e)            : Insert after the node.
// node.replacewith(e)      : replace node with the given node.

// -------------------- inserAdjacentHTML / text / element --------------------
// 
// element.insertAdjacentHTML("","");
// first argumnet
// beforebegin  : to add HTML just before the beginning of element
// beforeend    : to add HTML just before the end of element
// afterbegin   : to add HTML just after the beginning of element
// afterend     : to add HTML just after the end of element

// ---------------------------------- Node Removal ----------------------------------

// element.remove();
// to remove any node.

// -------------------------------- Class name - Class list --------------------------------

// we can change the class for the element
// element.className = " ";

// we can check that how many classes are assign to element
// element.classList;

// to remove perticular class assign to element
// element.classList.remove("Class name");

// to add perticular class to element
// element.classList.add("Class name");

// element.classList.toggle("Class name");
// if class already assigned then remove it
// and if class not assigned then add it

// to check that perticular class is assigned to element or not
// element.classList.contains("Class name");
// return ture or false.