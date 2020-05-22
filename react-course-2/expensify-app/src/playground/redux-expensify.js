import { createStore, combineReducers } from 'redux'

const demoState = {
    expenses: [{
        id: 'vgbhn',
        description: 'Jan Rent',
        note: 'This was the final payment for the house',
        amount: 75000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}