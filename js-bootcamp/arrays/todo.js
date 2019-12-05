const todos = [{
    text: "Order cat food",
    completed: true
}, {
    text: "Clean kitchen",
    completed: false
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, "Buy food")
console.log(todos)

// 1. Convert Array to array of objects -> text, completed - true if completed
// 2. create function to remove a todo by text value









// todos.splice(2, 1) // working, choose item 2 and delete 1
// todos.push(`Check Vaccinations`) // working
// todos.shift() // working

// console.log(`Your have ${todos.length} todos`) 

// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })


// for (let count = 0; count < todos.length; count++) {
//     let num = count + 1
//     let todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }