/*let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 3)
console.log(result)
*/

// Default Arguments can be set inside function without using let to define them globally

let getScoreText = function (name = "Anon", score = 0) {
    return `Name: ${name} - Score ${score}`
    //return "Name: " + name + " - Score: " + score
}

let scoreText = getScoreText(`Calvin`, 9)
//console.log(scoreText)

// Challenge
// Total, tipPercentage default .2 (20% tip) 100* default

// Challenge 2
// A 25% top on 40 bucks would be $10

let calTip = function (total, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} is $${tip}`
}

let billTip = calTip(60, .2)

console.log(billTip)


// Template Strings

let name = "Steve"
//console.log(`Hi my name is ${name}!`)