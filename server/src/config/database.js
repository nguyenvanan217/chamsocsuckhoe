    require("dotenv").config();
    const mysql = require("mysql2/promise");

    const connection = mysql.createPool({
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        user:process.env.DB_USER,
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD,
        waitForConnections:true,
        connectionLimit:10,
        maxIdle:10,
        idleTimeout:60000,
        queueLimit:0,
        enableKeepAlive:true,
        keepAliveInitialDelay:0,
    });

    module.exports = connection;