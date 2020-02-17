import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import expenses from '../reducers/expenses'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id}{...expense} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    }
}

export default connect(mapStateToProps)(ExpenseList)