const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    return JSON.parse(todosJSON)
    }
}

const saveTodos = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {

        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDom(incompleteTodos))
    
    filteredTodos.forEach(function (todo){
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })

}

const generateTodoDom = function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

const generateSummaryDom = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}