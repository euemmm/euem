const express = require('express')

const api = express.Router();

api.get('/', function (req, res) {
    res.json([
        { Hello: "World" }
    ])
});

api.get('/users', function (req, res) {
    res.json([
        { name: "Euem" },
        { name: "Bin" },
	{ name: "😕" }
    ]);
});

module.exports = api
