const express = require('express')

const api = express.Router();

api.get('/users', function (req, res) {
    res.json([
        { name: "Euem" },
        { name: "Bin" },
        { name: "😕" }
    ]);
});

api.use('/', function (req, res, next) {

    res.json([
        { Error: "404" },
        { Page: "Not Found" }
    ])

})

module.exports = api
