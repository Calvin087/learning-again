// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//  Remove a note from the list
const removeNote = function (id){
    const noteIndex = notes.findIndex(function (note){
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Save the notes to LocalStorage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//  Generate the DOM structure for a note

const generateNoteDom = function (note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')


    // Set up the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(e){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Set up the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)
    
    
    return noteEl
}

// Render application notes

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}