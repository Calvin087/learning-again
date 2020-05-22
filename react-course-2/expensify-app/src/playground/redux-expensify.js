import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = (
    {
        description = '', // Destructuring user inputs
        note = '',
        amount = 0,
        createdAt = 0 
    } = {}
) => ({ // Then attach them to the object
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) { 
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))


-------------


store.dispatch(removeExpense({ id: expenseOne.expense.id }))



handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
    }))
}

// const demoState = {
//     expenses: [{
//         id: 'vgbhn',
//         description: 'Jan Rent',
//         note: 'This was the final payment for the house',
//         amount: 75000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }