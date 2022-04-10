const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

var corsOpts = {
    origin: "http://localhost:3701"
}

const PORT = process.env.PORT  || 3700

app.use(cors(corsOpts))

// Parse requests of content-type - app/json
app.use(bodyParser.json())

// Parse requests of content-type - app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Test Route
app.get("/", (req, res) => {
    res.json([{ "message": "Hi There it's me JePra"}])
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
