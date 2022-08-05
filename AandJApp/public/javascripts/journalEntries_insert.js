const express = require('express');
const port = process.env.PORT || 1234;
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql2');
const config = require('./routes/connection'); // SQL-Connection
const pool = mysql.createPool(config);

let io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {

    socket.on('start-new-sql-querie', function (data) { // listen from the clients

        let user_id = data.userId;
        sql_test.getConnection((error, connection) => { // Connect to sql database
            console.log("user_id: ", user_id)
            connection.query(`SELECT * FROM user WHERE id='${user_id}'`, (err, result) => {
                socket.emit('new-sql-result', { // send sql result-status to all clients
                    userStatus: result.result[0].status
                })
            })
            connection.release();
        })

    });

})