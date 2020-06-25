const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));
// http://localhost:5000/api/users/test

module.exports = router;
