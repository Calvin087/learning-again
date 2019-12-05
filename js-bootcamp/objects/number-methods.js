/*
let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num)) 
console.log(Math.ceil(num))
console.log(Math.floor(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min */

// Challenge Area

// 1 - 5 - true if yes - false is no

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

let makeGuess = function (number) {
    return randomNum === number
}

console.log(randomNum)
console.log(makeGuess(0))
