const express = require("express")
const app = express()
// This creates a new Express server.

const db = require('./config/keys').mongoURI;
const mongoose = require("mongoose");
// details from mongo database setup

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
// connect to MongoDB using mongoose

app.get("/", (req, res) => res.send("Hello Dave"));
//basic route so that we can render some information on our page

const port = process.env.PORT || 5000;
// we need to tell our app which port to run on.

app.listen(port, () => console.log(`Server is running on port ${port}`));
// tell Express to start a socket and listen for connections on the path. 