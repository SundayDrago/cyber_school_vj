const mysql = require('mysql2/promise');
const db_config = require('./config/db.config');

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: db_config.host,
            user: db_config.user,
            password: db_config.password,
            database: db_config.database,
            port: db_config.port,
        });
        console.log('Connected to the MySQL database successfully!');
        await connection.end();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

testConnection();
