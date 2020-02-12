import { createStore } from 'redux'

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            const increamentBy = typeof action.increamentBy === 'number' ? action.increamentBy : 1
        return {
                count: state.count + increamentBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
        return {
                count: state.count - decrementBy
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
})

const unsub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'INCREAMENT',
    increamentBy: 5
})

store.dispatch({
    type: 'INCREAMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT',
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})