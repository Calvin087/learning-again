/* let myBook = {
    title: `1984`,
    author: `George Orwell`,
    pageCount: 326
}

let otherBook = {
    title: `A People's History`,
    author: `Howard Zimn`,
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

//console.log(bookSummary.pageCountSummary)

// Challenge Area

// Create function - take fahrenheit in - return object with all three

/* let realTemp = 90

let fahConversion = {
    fToCelcius: (realTemp - 32) * 5/9,
    fToKelvin: (realTemp - 32) * 5/9 + 273.15
}

let conversion = function (baseTemp) {
    return {
        result: `The temp is ${realTemp}, which is ${fahConversion.fToCelcius}C / ${fahConversion.fToKelvin}K`,
    }
}

let tempOne = conversion(realTemp)

console.log(tempOne.result) 

// Real Solution

---------

let convertFahrenheit = function (fahrenheit) {
    return { 
        fahrenheit: fahrenheit, 
        kelvin: (fahrenheit + 459.67) * (5/9),
        celcius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheit(90)
console.log(temps)

---------- */




let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zim',
    pageCount: 723
}

let getSummary = function (book) {
    return{
        summary: `${book.title} by ${book.author}`,
pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

// Challenge Again
// Create function - take F in - return object with all three numbers
// cel = (F - 32) * 5/9
// Kel = (F + 459.67) *5/9

let fahrenheit = 50

let convertFaToC = {
    celcius: (fahrenheit - 32) * 5 / 9,
}

let convertFaToK = {
    kelvin: (fahrenheit + 459.67) * 5 / 9,
}

let convertFan = function (temp) {
    return {
        asd: `Today is ${fahrenheit}F, ${convertFaToC.celcius}C and ${convertFaToK.kelvin}K`,
    }
}

let todayTemp = convertFan(fahrenheit)
console.log(todayTemp.asd)

// Solution Again

let finalConv = function (fahrenheitIn) {
    return {
        fahrenheitNew: fahrenheitIn,
        kelvinNew: (fahrenheitIn + 459.67) * 5 / 9,
        celciusNew: (fahrenheitIn - 32) * 5 / 9,
    }
}

let finalTemp = finalConv(90)
console.log(finalTemp.celciusNew)