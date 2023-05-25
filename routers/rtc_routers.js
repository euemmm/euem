const express = require('express')

const path = require('path') //added

const rtc = express.Router();

rtc.use('/public/rtc', express.static(path.join(__dirname + '/../public/rtc'))) //added

rtc.get('/', function (req, res) {  //added 

    res.sendFile(path.join(__dirname + '/../public/rtc', 'index.html'))

})

module.exports = rtc
