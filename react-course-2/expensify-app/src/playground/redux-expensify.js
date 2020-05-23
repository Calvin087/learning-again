import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = ( // This is being added each time, i confuse expenses with expense, expenses no longer exists.
    {
        description = '', // Destructuring user inputs and setting defaults
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
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            })

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


store.dispatch(removeExpense({ id: expenseOne.expense.id}))

