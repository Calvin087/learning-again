//const notes = [`Note 1`, `Note 2`, `Note 3`] // array 1

const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habits to work on",
    body: "Exercise more"
}, {
    title: "Office modification", 
    body: "Get a new Desk"
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index] 
// }

const note = findNote(notes, `office modification`)
console.log(note)