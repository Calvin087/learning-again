let myAccount = {
    name: "Calvin`s Account",
    expenses: 0,
    income: 0,
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getSummary = function (account) {
    console.log(`Calvin's account has £${account.income - account.expenses}, Monthly expenses £${account.expenses} with an income of £${account.income}`)
}

addIncome(myAccount, 1388)
addExpense(myAccount, 10)
//resetAccount(myAccount)
getSummary(myAccount)