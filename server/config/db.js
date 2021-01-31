const Sequelize = require('sequelize');
module.exports = new Sequelize('carcenter', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});
