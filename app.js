require('dotenv').config()

const express = require('express')
const app = express()

const connection = require('./db/connect')

app.use('/', function (req, res, next) {
    console.log(req.socket.remoteAddress)
    res.send("Hello World")
})

const DBcheck = () => {

    connection.query('SELECT * FROM euem', function (error, results, fields) {

        if (error) {

            console.log(error);

        }

        console.log(results);

    });

}

const start = async () => {

    try {

        await connection.connect()

        app.listen(process.env.PORT, () => {

            console.log("Server Listening On Port 8080")

        })

    } catch (error) {

        console.log(error)

    }

}

start()