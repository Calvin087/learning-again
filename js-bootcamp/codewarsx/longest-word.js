function findLongest(str) {
    let spl = str.split(' ')
    let longest = 0

    for(let i = 0; i < spl.length; i ++ ) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    console.log(longest)
}  


// console.log(findLongest("dave is interesting"))
findLongest("dave interestingsfdsd is")