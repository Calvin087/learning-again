// Learned what parseFloat does ...

function doFV() {
    // parstFloat takes a string and converts it to a number I think
    let principal = parseFloat(document.getElementById('principal').value)
    let annualRate = parseFloat(document.getElementById('annualRate').value)
    let years = parseFloat(document.getElementById('years').value)
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value) 

    let final = computeFutureValue(principal, annualRate, years, periodsPerYear)

    // Create element to show resulting message
    document.getElementById('outputDiv').innerHTML = `Future value is $${final}`
}


function computeFutureValue(principal, annualRate, years, periodsPerYear) {

    // calculate the returns of the future investment
    // Math.pow() times a number by the second number X times. 7, 3 = 7*7*7 = 343
    let calc = principal * Math.pow(1 + annualRate / periodsPerYear, (years * periodsPerYear))

    // shows number of decimal places .toFixed(2) 2 for example.
    return calc.toFixed(2)
}

//  Resets the Form
function reset() {
    document.getElementById('resetForm').reset()
}