const notes = [{
    title: 'Learn Js',
    body: 'Start practicing',
}, {
    title: 'Algorithms',
    body: 'Find ways to train your brain',
}, {
    title: 'Find new job',
    body: 'Advertise on Linkedin and Adroll to get jobs'
}]

const sortNotes = function (notes) {
    notes.sort(function (a ,b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    }) 
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    
    return notes.filter (function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })

}





// console.log(findNotes(notes, 'in'))

// const note = findNote(notes, 'Find new job')
// console.log(note)

sortNotes(notes)
console.log(notes)