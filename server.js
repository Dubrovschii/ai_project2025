const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World213!')
})

app.listen(port, () => {
    console.log(`Example app 1listening on port ${port}`)
})