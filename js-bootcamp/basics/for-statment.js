const todos = [
    `Hoover floor`,
    `Cook tuppers`,
    `Get hugs`,
    `Study Javascript`,
    `Make something cool in JS`,
]

todos.splice(2, 1)
todos.shift()
todos.push(`Clean kitchen`)

console.log(`Your have ${todos.length} tasks!`)

for (let count = 0; count < todos.length; count ++) {
    console.log(`${count +1}. ${todos[count]}`)
}

//1. Cook tuppers
//2. Study Javascript
//3. Make something cool in JS
//4. New added note