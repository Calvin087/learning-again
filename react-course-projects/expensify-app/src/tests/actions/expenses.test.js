import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test('set up remove expense object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('allow to edit expense', () => {
    const edit = editExpense('ABCD', {note: 'new value'})
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'ABCD',
        updates: {
            note: 'new value'
        },
    })
})

test('add expense', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('add expense with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0

        }
    })
})