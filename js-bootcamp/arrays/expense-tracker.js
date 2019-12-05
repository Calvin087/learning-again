const account = {
    name: 'Calvin Da Great',
    expenses: [],
    income: [],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount,
        })
    },
    addIncome: function (descriptioni, amounti){
        this.income.push({
            description: descriptioni,
            amount: amounti,
        })
    },

    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `Account for ${this.name} has a total of $${accountBalance} with $${totalIncome} in income and $${totalExpenses} in expenses`
        
    },

}

account.addIncome('Salary', 1350)
account.addIncome('Classes', 350)
account.addExpense('Cig Juice', 19)
account.addExpense('Family food', 200)
account.addExpense('Abono', 69)
account.addExpense('Rent Payment', 600)
account.addExpense('Twins Debt', 140)
console.log(account.income)
console.log(account.expenses)
console.log(account.getAccountSummary())