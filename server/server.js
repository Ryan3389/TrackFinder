const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

const routes = require("./routes")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)
app.listen(PORT, () => {
    console.log("Running on http://localhost:3001")
})