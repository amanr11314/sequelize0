require("dotenv").config()

const { Sequelize } = require('sequelize');
// create db Connection
const sequelize = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
});

// instantiate db Connection to application
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
exports.sequelize = sequelize