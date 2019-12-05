// Global scope is everything deifined outside of blocks
// Local is defined inside blocks

let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
}

console.log(varTwo)
