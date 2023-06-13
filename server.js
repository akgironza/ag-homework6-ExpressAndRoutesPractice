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

// magic 8 ball
app.get("/magic/:question", (req, res) => {
    const responseArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const userQuestion = req.params.question
    res.send(`<h1>${userQuestion}?</h1>
    <h1>${responseArray[Math.floor(Math.random()*19)]}</h1>`)
})



// LISTENER
app.listen(3500, () => {
    console.log("Testing, testing...")
})