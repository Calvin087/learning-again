import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => ({ // Then attach them to the object
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => { // dispatch object only works because of THUNK
        const {
                description = '', // Destructuring user inputs and setting defaults
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData
        
        const expense = { description, note, amount, createdAt }
        
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// set expenses

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// SOMETHING THAT NEEDS TO BE LEARNED

export const startSetExpenses = () => { // fetching and parsing data.
    return (dispatch) => {
        return database.ref('expenses') // calling the database coloum
            .once('value') // one time
            .then((snapshot) => { // then taking the snapshot received
                const expenses = [] // creating an array to fill later

                snapshot.forEach((childSnapshot) => { // looping over returned data
                    expenses.push({ // filling the premade array with
                        id: childSnapshot.key, // the keys returned by Firebase
                        ...childSnapshot.val() // spreading all the data inside those database keys
                    })
                })
                dispatch(setExpenses(expenses))
            })
    }
}