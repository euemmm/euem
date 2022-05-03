require('dotenv').config()

const express = require('express')
const app = express()

const connection = require('./db/connect')

const port = process.env.PORT

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

        app.listen(port, () => {

            console.log(`Server is listening on port ${port}...`)

        })

    } catch (error) {

        console.log(error)

    }

}

start()