// INITIAL SETUP
const express = require("express")
const app = express()


// ROUTES

// greeting
app.get("/greeting/:name", (req, res) => {
    // grab the name from the params
    const name = req.params.name
    // console.log("Hello, stranger")
    res.send(`Hey, ${name}! How's it going?`)
})

// tip calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = `0.${req.params.tipPercentage}`
    const totalTip = total * tipPercentage
    res.send(`Tip for bill amount: $${totalTip}`)
})

// LISTENER
app.listen(3500, () => {
    console.log("Testing, testing...")
})