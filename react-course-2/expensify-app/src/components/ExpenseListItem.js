import React from 'react'
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
    </Link>
    <div>{amount} {createdAt}</div>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove This</button>
    </div>
)

export default connect()(ExpenseListItem)