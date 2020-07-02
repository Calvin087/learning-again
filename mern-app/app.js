const express = require("express")
const app = express() // This creates a new Express server.
const mongoose = require("mongoose");
// details from mongo database setup
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets");
const User = require('./models/User')

const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
// connect to MongoDB using mongoose

app.use(bodyParser.urlencoded({ // respond from other software like POSTMAN
  extended: false
}))

app.use(bodyParser.json()) // we want it to respond to json requests

app.get("/", (req, res) => {
  const user = new User({
    handle: "Jim",
    email: "jim@sliame.com",
    password: "Morrin"
  })
  user.save()
  res.send("Hello Dave");
})

//basic route so that we can render some information on our page
app.use("/api/users", users);
app.use("/api/tweets", tweets)
//basic route so that we can render some information on our page
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Parse the JSON From the routes


const port = process.env.PORT || 5000;
// we need to tell our app which port to run/listen on.

app.listen(port, () => console.log(`Server is running on port ${port}`));
// tell Express to start a socket and listen for connections on the path. 