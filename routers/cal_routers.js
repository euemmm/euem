const express = require('express')

const path = require('path') //added

const cal = express.Router();

cal.use('/cal', express.static(path.join(__dirname + '/../public/cal'))) //added

cal.get('/', function (req, res) {  //added 

    res.sendFile(path.join(__dirname + '/../public/cal', 'index.html'))

})

module.exports = cal
