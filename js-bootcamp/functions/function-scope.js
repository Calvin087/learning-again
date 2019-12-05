let convertF = function (fah) {
    let celcius = (fah - 32) * 5/9
    return celcius
}

let tempOne = convertF(68)
let tempTwo = convertF(32)

console.log(tempOne)
console.log(tempTwo)