const express = require('express')

app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Express")
})

app.get('/test', (req, res) => {
    return res.send("Express test test")
})

app.listen(3000, () => console.log("Server run on port 3000"))