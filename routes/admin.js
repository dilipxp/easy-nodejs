const path = require('path')
const express = require('express');

const router = express.Router();

//  Routing
router.get('/add-customer',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-customer.html'));
})

router.post('/customer', (req, res, next)=>{
    res.redirect('/');
})

module.exports = router;