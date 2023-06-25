const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('DB ====> CONNECTED');
});

module.exports = connection;
