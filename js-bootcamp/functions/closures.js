// Creating a function that returns a resuable function

const creatTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tip20 = creatTipper(.0)
const tip30 = creatTipper(.3)

console.log(tip20(100))
console.log(tip30(100))