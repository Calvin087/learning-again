import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteFrom'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []) // call reducer and initial state]
    // above notes = state 

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]) // <-- DEPENDENCIES this only runs when the count is updated

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
            
        </NotesContext.Provider>
    )
}

export { NoteApp as default }