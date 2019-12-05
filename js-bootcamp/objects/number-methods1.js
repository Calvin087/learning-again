let num = 157.912

console.log(num.toFixed(1))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

let randomNum = Math.random()

let min = 10
let max = 2000
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min


console.log(randomNumber)

///////


let randGen = function (guess) {
    let min = 0
    let max = 1
    let randomNumb = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumb)

    return guess === randomNumb
}

console.log(randGen(1))
