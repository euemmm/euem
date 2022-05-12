require('dotenv').config()

const path = require('path') //added

const express = require('express')

const subdomain = require('express-subdomain');

const app = express()

const connection = require('./db/connect')

const api_routers = require('./routers/api_routers')

const cal_routers = require('./routers/cal_routers')

app.use(subdomain('api', api_routers))

app.use(subdomain('react-native', cal_routers))

app.get('/', function (req, res) {

    res.send('Hello World');

});

const start = async () => {

    try {

        await connection.connect()

        app.listen(process.env.PORT, () => {

            console.log("Server Listening On Port 8080 ...")

        })

    } catch (error) {

        console.log(error)

    }

}

start()
