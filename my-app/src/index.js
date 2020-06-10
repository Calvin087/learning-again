import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

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

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []) // call reducer and initial state]
  // above notes = state 

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

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

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
    <div>
      <h1>Notes</h1>
      {notes.map((note) => ( // map over the array inside notes
        <Note key={note.title} note={note} removeNote={removeNote}/>
      ))}

      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value) }></textarea>
        <button>add note</button>
      </form>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('fires on loading');
    
    return () => {
      console.log('fires on cleaning');
    }
  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
        // removeNote is used with an arrow function to stop the value being
        // passed instead of the arguements i'm specifying apparently
  )
}

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
