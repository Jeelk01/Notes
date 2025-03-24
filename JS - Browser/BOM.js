// -------------------- BOM ---------------------

// Browser object Model

// BOM allows Javascript to interact with browser itself.

// rather than webpage content ( not like DOM )

// BOM provides browsers related functions like
// managing window, URL, history, navigator, and screen properties



// 1. window object
// 2. navigator object
// 3. screen object
// 4. location object
// 5. history object


// ---------- 1. Window Object ----------
// It is global object in javascript.

// global functions like
// alert, confirm, prompt, setTimeOut, setInterval belongs to window object.

// alert(message)          : to display in alert box.
// confirm(message)        : to take confirmation through confitm box --> return true or false
// promtt(message, default): to take input through prompyt box
// setTimeout( function, delay )
// setinterval( function , delay )
// clearTimeout(timeId)
// clearInterval(timeId)
// window.open()           :  
// window.close()          :  


// ---------- 2. Navigator Object ----------
// Provides the information related to browser, OS and device
// navigator.userAgent()      : returns the browser details
// navigator.platform()       : returns the OS details
// navigator.;anguage()       : Returns browser language
// navigator.onLine()         : Return true if online and false if offline
// navigator.geolocation()    : Provides the access to the use's location


// ---------- 3. Location object ----------
// provide the details about current webpage URL and allows to navigation

// location.href         : using that get and set the FULL URL
// location.hostname     : gets the domain name
// location.pathname     : gets the path after domain
// location.protocol     : gets protocol ( http: or https: )
// location,port         : gets the port number

// location.reload()     : reloads the page
// location.assign(URL)  : Naviates to the newPage
// location.replace(URL) : Replace the current page without history.


// ---------- 4. History object ----------
// allows navigation througe bwoser's history

// history.forward()     : Goes forward to one page 
// history.back()        : Goes backwad to one page
// history.go(n)         : Goes forward and backward accroding to value (+n) or (-n)


// ---------- 4. Screen object ----------
// Provides details about user's scereen details

// screen.width          : screen width in pixels
// screen.height         : screen height in pixels
// screen.availWidth     : gets available screen width
// screen.availHeight    : gets available screen height
// screen.colorDepth     : color depth of the screen
// screen.pixelDepth     : pixeldepth pf the screen


