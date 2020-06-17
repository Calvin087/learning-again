const notesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_NOTES':
            return action.notes

        case 'ADD_NOTE':
            return [
                ...state,
                { title: action.title, body: action.body }
            ]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        // EXCLUSION = returns an array where the filtered notes don't match the one i've pased in

        default:
            return state
    }
}

    export { notesReducer as default }