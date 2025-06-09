// Event Emitter

// An event Emitter is a class that allows you to handle events in publisher - subscriber pattern

// Publisher - Subscriber Pattern ( Pub/Sub )
// Publisher --> emit the event
// Subscriber --> Listen to specific Event --> According to  that do actions

// It provides a system to emit named event and  subscriber to those event using listener function


const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('greet', () => {
     console.log("Hello ! user");

})

emitter.emit('greet')



// Methods

emitter.on('eventName', () => {
     console.log("Listener Function");
})

emitter.once('eventName', () => {
     console.log("Listener Function that rus only once No need to remove Manually");
})
// Two Events --> normal & executes once only
emitter.emit('eventName')

// One event --> normal ( executes once only already called )
emitter.emit('eventName')
// remove Event Listener
emitter.off('evenName' , () => {
     console.log("Listener Function");
})