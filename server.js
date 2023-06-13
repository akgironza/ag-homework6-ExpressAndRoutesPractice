// initial setup
const express = require("express")
const app = express()


// routes
app.get("/greeting/:name", (req, res) => {
    // grab the name from the params
    const name = req.params.name
    // console.log("Hello, stranger")
    res.send(`Hey, ${name}! How's it going?`)
})

// listener
app.listen(3500, () => {
    console.log("Testing, testing...")
})