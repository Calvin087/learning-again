
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes("password")
}

console.log(isValidPassword("posdfjjfpasswords"))
console.log(isValidPassword("sdfioo"))
console.log(isValidPassword("Morrigan1231"))
