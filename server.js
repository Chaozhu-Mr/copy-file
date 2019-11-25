var eventEmitter = require('events');
var event = new eventEmitter();
event.on('some_event',function (d){
    console.log('这是一个');
});
setTimeout(function () {
    event.emit('some_event');
},2000);
console.log(event);