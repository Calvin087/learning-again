import { createStore } from 'redux'

const incrementCount = ({ increamentBy = 1 } = {}) => ({
    type: 'INCREMENT',
    increamentBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREAMENT':
        return {
                count: state.count + action.increamentBy
            };
        case 'DECREMENT':
        return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ increamentBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101}))