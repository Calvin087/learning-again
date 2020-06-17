import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext)
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('') // resets the title to nothing after the array has been updated.
        setBody('')
    }

    return (
        <div>
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </div>
    )    
    
}

export { AddNoteForm as default }