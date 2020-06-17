import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList = () => {
    const { notes } = useContext(NotesContext)

    return notes.map((note) => ( // map over the array inside notes
        <Note key={note.title} note={note} />
    ))    

}

export { NoteList as default }