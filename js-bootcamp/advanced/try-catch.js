const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(17.45)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}

