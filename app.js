require('dotenv').config()

const express = require('express')
const http = require('http')
const https = require('https')
const app = express()

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

        http.createServer(app).listen(80, () => {

            console.log(`Server is listening on http port ${http_port}`)

        })

        https.createServer(app).listen(443, () => {

            console.log(`Server is listening on http port ${https_port}`)

        })

    } catch (error) {

        console.log(error)

    }

}

start()