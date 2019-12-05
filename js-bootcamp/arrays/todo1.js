const todos = [ {
    title: `Hoover floor`,
    complete: true,
}, {
    title: 'Cook tuppers',
    complete: false,
}, {
    title: `Get hugs`,
    complete: true,
}, {
    title: 'Study Javascript',
    complete: true,
}, {
    title: 'Go to the Gym',
    complete: false,
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.complete && b.complete) {
            return -1
        } else if (!b.complete && a.complete) {
            return 1
        } else {
            return 0
        }
    })
}


// const sortTodos = function (todos) {
//     todos.sort(function (a ,b) {
//         if (a.complete.toLowerCase() < b.complete.toLowerCase()) {
//             return 1
//         } else if (b.complete.toLowerCase() < a.complete.toLowerCase()) {
//             return -1
//         } else {
//             return 0
//         }
//     }) 
// }






const deleteTodo = function(todos, todoTitle) {
    const index = todos.findIndex(function (todo) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}






// **This is a better example (that I MADE)**)**)**)**)**)**)**)**)**)**

// const getThingsToDo = function (todos, query) {
    
//     return todos.filter(function (todo, index) {
//         return isComplete = todo.complete === query
//     })
// }

const getThingsToDo = function (todos) {
    
    return todos.filter(function (todo, index) {
        return todo.complete
    })
}

sortTodos(todos)
console.log(todos)


// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Go to the gym')
// console.log(todos)
