require('dotenv').config()

const express = require('express')
const app = express()

const fs = require("fs");


const connection = require('./db/connect')

const https_port = process.env.HTTPS_PORT

app.use('/', function (req, res, next) {
    return res.redirect('https://www.euem.net')
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

        app.listen(https_port, () => {

            console.log(`Server is listening on http port ${https_port}`)

        })

    } catch (error) {

        console.log(error)

    }

}

start()