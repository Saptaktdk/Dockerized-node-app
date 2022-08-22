'use strict'

const express = require('express')

//Constants
const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/',(req,res)=>
{
    res.send('<h1>I have dockerized this app</h1>')

})

app.listen(PORT,HOST)
console.log(`app running on port ${HOST}:${PORT}`)
