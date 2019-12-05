let temp = 60


// Logical AND && - true if both sides are true / or false
// Logical OR || - true if one side is true / or false


if (temp >=60 && temp <=90) {
    //console.log("It is pretty nice out.")
} else if (temp <=0 || temp >=120) {
    //console.log("Stay indoors, it's dangerous outside.")
} else {
    //console.log ("Meh, it's not bad.")
}

// Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both Vegan - Only offer vegan dishes
// At least one Vegan - Make sure to offer up some Vegan options
// Esle, Offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only offer Vegan dishes.")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer up some Vegan options.")
} else {
    console.log("Offer anything on the menu.")
}