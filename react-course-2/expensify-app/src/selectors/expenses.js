const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // inside sort.subscribe, i have a const which points to getVisibleExpenses
    // inside visible i'm calling the function here and passing both reducers.
    // I'm now receiving two reducers and destructuring them as arguments.
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}

export default getVisibleExpenses