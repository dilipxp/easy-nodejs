const path = require('path');
const express = require('express');

const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');


// Parsing the incomming request.
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views' ,'error.html'));
});

app.listen(3000);