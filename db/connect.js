const DB = require('mysql');

const connection = DB.createConnection({

    host: process.env.DB_LOC,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TABLE

})

module.exports = connection