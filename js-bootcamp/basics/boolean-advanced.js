let isAccountLocked = false
let userRole = "Boss"

if (isAccountLocked) {
    console.log("Your Account is Locked")
} else if (userRole === "Boss") {
    console.log("Welcome Boss")
} else {
    console.log("Welcome")
}

// challenge area

let temp = 180

// it's freezing outside
// it's hot outside
// go for it, it's pretty nice

if (temp <= 32) {
    console.log("it's freezing outside")
} else if (temp >= 120 ) {
    console.log("It's pretty damn hot")
} else {
    console.log("go for it, it's pretty nice")
}