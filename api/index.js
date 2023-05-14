const express = require('express')

const app = express()
const port = 3009

app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next)=>{
    console.log(`API - ${req.url}`)
    next()
})

app.get('/health', (req, res)=>{
    res.send("<h1>Hello I am running</h1>")
})


app.listen(port, ()=>{
    console.log(`Application running on ${port}`)
})