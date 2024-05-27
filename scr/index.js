const express = require('express')

const app = express()

app.get('/fotito', (req, res) => {
    res.sendFile('./AguanteBoca.jpg', {
        root: __dirname
    })
})

app.get('/personas', (req, res) => {
    res.json({name: "roberto"})
})

app.listen(3000)

console.log('el servidor escucha!')