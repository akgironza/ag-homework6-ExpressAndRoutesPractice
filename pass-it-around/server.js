// INITIAL SETUP
const express = require("express")
const app = express()


// ROUTES

//home page
app.get("/", (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>`)
})

//rest of the bottles
app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = req.params.number_of_bottles
    res.send(`<h1>${numberOfBottles} bottles of beer on the wall</h1>
    <a href= "/${numberOfBottles - 1}">Take one down, pass it around</a>`)
})


// LISTENER
app.listen(3200, () => {
    console.log(`I hear you...`)
})