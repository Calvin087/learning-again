let myAccount = {
    name: "Calvin",
    expenses: 0,
    income: 0
}

// Add Expense
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}


// Challenge Area


// Add Income
let addIncome = function (account, amount) {
    account.income = account.income + amount

}


// Reset Account
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

//
//console.log(myAccount)

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Your balance is £${balance}. Total Expenses £${account.expenses} - Total Income £${account.income} `

}

addIncome(myAccount, 2100)
addExpense(myAccount, 2)
addExpense(myAccount, 9)
addExpense(myAccount, 11)
console.log(myAccount)

resetAccount(myAccount)
console.log(myAccount)

addIncome(myAccount, 2500)
addExpense(myAccount, 21)
addExpense(myAccount, 19)
addExpense(myAccount, 11)
console.log(myAccount)

console.log(getAccountSummary(myAccount))