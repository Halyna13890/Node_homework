const EventEmitter = require('events');
const emitter = new EventEmitter();

const sendMessage = (userName, userMessage, emitter) => {
    emitter.emit('message', userName, userMessage)
}

emitter.on('message', (userName, userMessage) =>{
    console.log(`${userName}: ${userMessage}`)
})


sendMessage('Alice', 'Привет, как дела?', emitter);
sendMessage('Bob', 'Все отлично, спасибо!', emitter);
sendMessage('Charlie', 'Как погодка у вас?', emitter);