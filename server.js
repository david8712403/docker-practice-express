const express = require('express')

app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Express")
})

app.listen(3000, () => console.log("Server run on port 3000"))