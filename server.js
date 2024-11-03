const express = require('express')

const bodyParser = require('body-parser');
const app = express();


// Parsing 
app.use(bodyParser.urlencoded({extended:false}));

//  Routing
app.use('/add-customer',(req, res, next)=>{
    res.send('<form action="/customer" method="POST"> <input type="text" name="title"><button type="submit">add customer</button></form>')
})

app.use('/customer', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello Frome ExpressJs</h1>')
})


app.listen(3000);