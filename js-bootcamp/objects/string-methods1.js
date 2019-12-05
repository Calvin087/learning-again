let name = ' Calvin '

console.log(name.length)

console.log(name.trim())
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'MOrripassword1231!!'

console.log(password.includes('password'))


// find length of string
// print lower and upper case
// find if string includes word
// trim white space from word

let validPassword = function (passwordNew) {
    if (passwordNew.length >=7 || passwordNew.includes('password')) {
        return 'Please Change Your Password'
    } else {
        return 'Good Password'
        
    }
}

console.log(validPassword('sdfpoij1'))
console.log(validPassword('goo'))
console.log(validPassword('goodpassword123'))