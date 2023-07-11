
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db_config')

// create a Book model
const Book = sequelize.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY
    },
    subject: {
        type: DataTypes.INTEGER
    }
})

/**
 * model.sync(): This creates the table if it doesn’t exist already.
 * model.sync({ force: true }): This creates the table by dropping it 
 * if the same table exists already.
 */

// Add book model to database
sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

exports.Book = Book