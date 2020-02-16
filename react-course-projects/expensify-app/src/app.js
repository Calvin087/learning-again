import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStrore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStrore()

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 300 }))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))