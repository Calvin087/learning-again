function squareDigits(num){
    let array = num
    .toString()
    .split('')
    .map(num => parseInt(num))
    .map(num => num * num)
    .join('')

    return parseInt(array)
}

console.log(squareDigits(9119), 811181);
