import express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello TypeScript')
})

console.log('Listening to port 3004')
app.listen(3004)
