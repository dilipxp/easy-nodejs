const express = require('express')

const app = express();

app.use((req, res, next)=>{
    console.log("In the middleware2!")
    res.send('<h1>Hello Frome ExpressJs</h1>')
})

app.listen(3000);