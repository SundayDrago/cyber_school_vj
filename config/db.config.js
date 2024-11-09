require('dotenv').config();

const db_config = {
    host: process.env.DB_HOST || 'bnqowv5zvavsstpfzms5-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'uwhl8icn14e4vtbo',
    password: process.env.DB_PASSWORD || 'bf9QeGw13pp0aSBrxTw0',
    database: process.env.DB_NAME || 'bnqowv5zvavsstpfzms5',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};

// Export the config for use in other parts of the application
module.exports = db_config;
