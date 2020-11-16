// Functions calling functions

// function callFunction(fun){
//     fun();
// };

// var sayBye = function(){
//     console.log("Bye");
// }

// callFunction(sayBye)

// ===================

// Exporting Modules / Module Patterns

// File 1
    // counter = require(./stuff)
    // stuff.counter() / stuff.adder()

// File 2 = stuff.js
    // module.exports = counter; - default way
    // module.exports.counter = counter; - explicit way
    // module.exports.adder = adder;

// OR just export it on the function line
    // module.exports.counter = function(arr){

    // }

// OR 
    // module.exports = {
    //     counter: counter,
    //     adder: adder,
    //     pi: pi
    // }


// ===================

// Events Module - Core Modules
// These are built in modules.
// Events - Custom events.

    // var events = require('events')

    // var myEmitter = new events.EventEmitter();

    // myEmitter.on('someEvent', function(mssg){
    //     console.log(mssg);
    // });

    // myEmitter.emit('someEvent', 'The event was emitted')

// ===================

// Util Module - Core Modules
// Adding Event Listeners to objects

    // var events = require('events')
    // var util = require('util')

    // var Person = function(name) {
    //     this.name = name
    // }

    // util.inherits(Person, events.EventEmitter) // each new person object inherits the events powers

    // var james = new Person('James')
    // var sam = new Person('Sam')
    // var Dave = new Person('Dave')

    // var people = [james, sam, Dave]

    // people.forEach(function(person){
    //     person.on('speak', function(mssg){ // custom event being added to each person
    //         console.log(person.name + ' Said: ' + mssg);
    //     }) 
    // })

    // james.emit('speak', 'hey dudes')

// ===================

//  Reading and Writing Files with FS

// var fs = require('fs')
import fs from "fs";

// BEACUSE IT'S ASYNC WE NEED A CALLBACK FUNCTION TO FIRE
// WHEN THE PROCESS IS COMPLETE

fs.readFile('something.txt', 'utf8', function(err, data) { // async
    
    fs.writeFile('new-something.txt', data, () => {});

})

// var readMe = fs.readFileSync('something.txt', 'utf8')
// var writeMe = fs.writeFileSync('new-something.txt', readMe) //sync version

// console.log(writeMe);