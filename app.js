require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')
const https = require('https')

const fs = require("fs");

const https_cert = {
    key: fs.readFileSync("./db/pem/key.pem"),
    cert: fs.readFileSync("./db/pem/cert.pem"),
}

const connection = require('./db/connect')

const http_port = process.env.HTTP_PORT
const https_port = process.env.HTTPS_PORT

app.get('/', (req, res) => {

    connection.query('SELECT * FROM euem', function (error, results, fields) {

        if (error) {

            console.log(error);

        }

        console.log(results);

    });

    return res.json({ success: true, data: ["hello world"] })

})

const start = async () => {

    try {

        await connection.connect()

        app.listen(8080, () => {

            console.log('8080 listening...')

        })

    } catch (error) {

        console.log(error)

    }

}

start()