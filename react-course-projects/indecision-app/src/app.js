console.log("App.js is running")

let app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One, Two']
}

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
)

let user = {
    name: "Calvin",
    age: 32,
    location: "Madrid"
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)